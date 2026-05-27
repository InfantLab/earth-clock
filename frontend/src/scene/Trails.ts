import * as THREE from "three";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * World-space wind-particle trail accumulator.
 *
 * Earlier versions accumulated trails in **screen space** (the classic Mapbox webgl-wind
 * technique): cheap and pretty, but any camera motion (auto-orbit, drag, scroll-zoom)
 * smears every particle in the direction of motion because the accumulator can't tell
 * particle motion from camera motion.
 *
 * This version accumulates in **geographic (lon, lat) space** — the trail buffer is a
 * 2:1 equirectangular texture; each frame the particles are rendered into it at their
 * `(lon/180, lat/180)` plane coordinates, faded toward zero, and ping-ponged. The
 * resulting texture is mapped onto a sphere in Earth's local frame so the trails sit on
 * the ground and rotate with it. Camera motion doesn't affect them.
 *
 * Three passes per frame, same shape as before:
 *   1. Fade the previous trail RT into the next RT (multiply by `uFade`).
 *   2. Render the flat-projection particle mesh into the next RT with an ortho camera
 *      that views the 2×1 plane (so particles land at the right texel by lon/lat).
 *   3. The composite mesh (a sphere in the main scene) samples the trail texture as a
 *      regular equirectangular UV map. It's added directly to the main scene with
 *      additive blending, so the main render pass handles compositing automatically —
 *      no separate composite step here.
 */
export class Trails {
  /** Mesh that lives in the main 3D scene — a translucent sphere whose surface is the
   *  trail texture. Parented to a group that gets axial-tilt + daily rotation each frame. */
  readonly mesh: THREE.Group;
  /** Plane mesh for FlatMap mode — same trail texture rendered onto a 2×1 plane. */
  readonly flatMesh: THREE.Mesh;

  private rtA: THREE.WebGLRenderTarget;
  private rtB: THREE.WebGLRenderTarget;
  private current: THREE.WebGLRenderTarget;

  private readonly particleScene: THREE.Scene;
  private readonly fadeScene: THREE.Scene;
  private readonly trailCamera: THREE.OrthographicCamera;

  private readonly fadeMaterial: THREE.ShaderMaterial;
  private readonly compositeMaterial: THREE.ShaderMaterial;
  private readonly flatCompositeMaterial: THREE.ShaderMaterial;
  private readonly fadeQuadCam: THREE.OrthographicCamera;
  private readonly compositeSphere: THREE.Mesh;

  /**
   * Trail buffer resolution. At 2048×1024, the visible hemisphere maps to ~1024 texels —
   * approximately 1:1 with screen pixels at default zoom, so bilinear filtering doesn't
   * blur particle splats into soft blobs. This matches the visual sharpness of the old
   * screen-space accumulator while keeping the geographic-frame advantages of world space.
   * Memory: 2 × 2048 × 1024 × 4 bytes = 16 MB for the ping-pong pair.
   */
  private static readonly TRAIL_WIDTH = 2048;
  private static readonly TRAIL_HEIGHT = 1024;

  constructor(particleFlatMesh: THREE.Points) {
    const rtOpts: THREE.RenderTargetOptions = {
      depthBuffer: false,
      stencilBuffer: false,
      type: THREE.UnsignedByteType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.RepeatWrapping,        // longitude wraps at ±180
      wrapT: THREE.ClampToEdgeWrapping,   // latitude clamps at poles
    };
    this.rtA = new THREE.WebGLRenderTarget(Trails.TRAIL_WIDTH, Trails.TRAIL_HEIGHT, rtOpts);
    this.rtB = new THREE.WebGLRenderTarget(Trails.TRAIL_WIDTH, Trails.TRAIL_HEIGHT, rtOpts);
    this.current = this.rtA;

    // Ortho camera viewing the 2×1 plane (matches the FlatMap layout). Particles' flat
    // material projects their (lon, lat) into this frustum so they land at the right
    // texel of the trail texture.
    this.trailCamera = new THREE.OrthographicCamera(-1, 1, 0.5, -0.5, 0, 10);
    this.trailCamera.position.set(0, 0, 1);

    this.particleScene = new THREE.Scene();
    this.particleScene.add(particleFlatMesh);

    // ---- Pass 1: fade the previous trail buffer ----
    this.fadeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPrev: { value: null },
        // Half-life ≈ log(0.5)/log(0.992) ≈ 86 frames ≈ 1.43 s at 60 fps. Tiny extension
        // beyond the original 0.99 so sparse-wind regions still have some recent history
        // when the next particle passes through, but streaks stay visually thin rather
        // than chunky. Tunable via `__orrery.trails.setFade(0.998)` for QA experiments.
        uFade: { value: 0.992 },
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uPrev;
        uniform float uFade;
        varying vec2 vUv;
        void main() {
          vec4 c = texture2D(uPrev, vUv);
          gl_FragColor = vec4(c.rgb * uFade, c.a * uFade);
        }
      `,
      depthTest: false,
      depthWrite: false,
    });
    this.fadeQuadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.fadeScene = new THREE.Scene();
    this.fadeScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.fadeMaterial));

    // ---- Composite: sphere in main scene, textured with the trail buffer ----
    this.compositeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTrails:  { value: null },
        uOpacity: { value: 1.0 },
      },
      vertexShader: /* glsl */`
        varying vec3 vLocalNormal;
        void main() {
          // Per-fragment UV (computed in fragment shader from this normal) — avoids the
          // prime-meridian seam that a vUv with a +0.5 shift creates. See OverlayLayer
          // for the same approach applied to GFS scalar overlays.
          vLocalNormal = normalize(normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uTrails;
        uniform float uOpacity;
        varying vec3 vLocalNormal;
        const float PI = 3.14159265359;
        void main() {
          // Trail buffer was rendered with particles at world (lon/180, lat/180) on the
          // 2x1 plane via an ortho camera. That puts:
          //   lon=0  (Greenwich)  → texture u=0.5
          //   lon=±π (date line)  → texture u=0 or 1
          //   lat=+π/2 (N pole)   → texture v=1
          //   lat=-π/2 (S pole)   → texture v=0
          // Per-fragment formula: lat = asin(y), lon = atan2(-z, x).
          float lat = asin(clamp(vLocalNormal.y, -1.0, 1.0));
          float lon = atan(-vLocalNormal.z, vLocalNormal.x);
          float u = (lon + PI) / (2.0 * PI);
          float vv = (lat + 0.5 * PI) / PI;
          vec4 c = texture2D(uTrails, vec2(u, vv));
          // Trail texture is additive-accumulated white; alpha carries the trail density.
          gl_FragColor = vec4(c.rgb, c.a * uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // Composite sphere at r=1.006 — above the cloud shell (1.003) so trails read against
    // both the day surface and the cloud layer. Mesh stays in the rotating-Earth frame.
    this.compositeSphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.006, 96, 48),
      this.compositeMaterial,
    );
    // See CloudLayer for the full renderOrder budget — trails draw on top of the overlay
    // (2) so wind streaks stay visible over coloured data fields.
    this.compositeSphere.renderOrder = 3;
    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.compositeSphere);

    // Flat-map composite: a quad textured with the trail buffer. Parented separately
    // (FlatMap.scene); same uniform-driven material so trail texture updates are shared.
    this.flatCompositeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTrails:  this.compositeMaterial.uniforms.uTrails, // share the trail-texture ref
        uOpacity: this.compositeMaterial.uniforms.uOpacity,
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uTrails;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          vec4 c = texture2D(uTrails, vUv);
          gl_FragColor = vec4(c.rgb, c.a * uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.flatMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 1), this.flatCompositeMaterial);
    this.flatMesh.position.z = 0.005; // above other flat-map content
  }

  /**
   * Run one trail-accumulation step:
   *   1. Fade the previous RT into the next RT.
   *   2. Render the flat particle mesh into the next RT.
   *   3. Update the composite materials to sample the next RT.
   * No screen compositing happens here — the composite sphere is part of the main scene
   * and gets drawn automatically by `renderer.render(scene, camera)`.
   */
  step(renderer: THREE.WebGLRenderer) {
    const next = this.current === this.rtA ? this.rtB : this.rtA;
    const prevAutoClear = renderer.autoClear;
    renderer.autoClear = false;

    // Pass 1: fade prev → next
    this.fadeMaterial.uniforms.uPrev.value = this.current.texture;
    renderer.setRenderTarget(next);
    renderer.setClearColor(0x000000, 0);
    renderer.clear(true, false, false);
    renderer.render(this.fadeScene, this.fadeQuadCam);

    // Pass 2: render flat-projection particles into the trail buffer
    renderer.render(this.particleScene, this.trailCamera);

    renderer.setRenderTarget(null);
    renderer.autoClear = prevAutoClear;

    // Update the composite sampler so the next main-scene render picks up the new trail.
    this.compositeMaterial.uniforms.uTrails.value = next.texture;
    this.current = next;
  }

  /** Daily spin angle for the composite sphere. Same value as every other Earth layer. */
  setRotationY(angle: number) {
    this.compositeSphere.rotation.y = angle;
  }

  /** Trail visibility — toggled by the Wind menu entry. Hides both the sphere and the flat composite. */
  setVisible(visible: boolean) {
    this.mesh.visible = visible;
    this.flatMesh.visible = visible;
  }

  /** Live-tunable fade rate. 0.985 ≈ 0.77 s half-life at 60 fps; 0.99 = longer trails. */
  setFade(survivalRate: number) {
    this.fadeMaterial.uniforms.uFade.value = survivalRate;
  }

  setOpacity(o: number) {
    this.compositeMaterial.uniforms.uOpacity.value = o;
  }

  /**
   * Apply a preset intensity for the wind composite — combines fade rate (streak
   * length) and opacity (overall brightness). The Wind menu mutex picker drives
   * this; live-tunable from the console via `__orrery.trails.setIntensity("bold")`.
   *
   *   - "subtle"   — short streaks, dim composite. Wind is present but doesn't
   *                   compete with continents, clouds, or weather layers.
   *                   Default for v0.1.3+.
   *   - "standard" — moderate streaks, mid brightness. Wind is visible but the
   *                   rest of the globe stays legible.
   *   - "bold"     — long, bright streaks. The signature earth.nullschool look;
   *                   the wind dominates. Was the only level in v0.1.0–v0.1.2.
   */
  setIntensity(level: "subtle" | "standard" | "bold") {
    switch (level) {
      case "subtle":
        this.fadeMaterial.uniforms.uFade.value = 0.98;
        this.compositeMaterial.uniforms.uOpacity.value = 0.35;
        break;
      case "standard":
        this.fadeMaterial.uniforms.uFade.value = 0.99;
        this.compositeMaterial.uniforms.uOpacity.value = 0.65;
        break;
      case "bold":
        this.fadeMaterial.uniforms.uFade.value = 0.992;
        this.compositeMaterial.uniforms.uOpacity.value = 1.0;
        break;
    }
  }

  /** Resize is a no-op now (trail buffer is fixed-resolution); kept for call-site compatibility. */
  resize(_w: number, _h: number) {}

  dispose() {
    this.rtA.dispose();
    this.rtB.dispose();
    this.fadeMaterial.dispose();
    this.compositeMaterial.dispose();
    this.flatCompositeMaterial.dispose();
  }
}
