import * as THREE from "three";

/**
 * Persistent-trail accumulator (the secret sauce of the Mapbox webgl-wind effect).
 *
 * Each frame:
 *   1. Take the previous trails RT and copy it into the current RT, multiplied by a per-frame
 *      decay factor — this is what makes streaks gradually fade.
 *   2. Render the particle scene on top, additively, using the main camera.
 *   3. Composite the current RT over the main canvas with additive blending.
 *
 * The render pings between two RTs because WebGL can't read and write the same texture.
 * Trails stay in screen space, so the streaks read correctly when the globe rotates underneath.
 */
export class Trails {
  private rtA: THREE.WebGLRenderTarget;
  private rtB: THREE.WebGLRenderTarget;
  private current: THREE.WebGLRenderTarget;
  private readonly particleScene: THREE.Scene;
  private readonly fadeScene: THREE.Scene;
  private readonly compositeScene: THREE.Scene;
  private readonly screenCamera: THREE.OrthographicCamera;
  private readonly fadeMaterial: THREE.ShaderMaterial;
  private readonly compositeMaterial: THREE.ShaderMaterial;

  constructor(width: number, height: number, particleMesh: THREE.Object3D) {
    const rtOpts: THREE.RenderTargetOptions = {
      depthBuffer: false,
      stencilBuffer: false,
      type: THREE.UnsignedByteType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
    };
    this.rtA = new THREE.WebGLRenderTarget(width, height, rtOpts);
    this.rtB = new THREE.WebGLRenderTarget(width, height, rtOpts);
    this.current = this.rtA;

    // Particles live in their own scene so the main render pass doesn't draw them directly —
    // they only reach the canvas via the trails composite.
    this.particleScene = new THREE.Scene();
    this.particleScene.add(particleMesh);

    this.screenCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Full-screen quad reused by both the fade and composite passes
    const quadGeom = new THREE.PlaneGeometry(2, 2);

    this.fadeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPrev: { value: null },
        uFade: { value: 0.985 }, // ~46-frame half-life ≈ 0.77s trails at 60fps
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
    this.fadeScene = new THREE.Scene();
    this.fadeScene.add(new THREE.Mesh(quadGeom, this.fadeMaterial));

    this.compositeMaterial = new THREE.ShaderMaterial({
      uniforms: { uTrails: { value: null } },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uTrails;
        varying vec2 vUv;
        void main() {
          gl_FragColor = texture2D(uTrails, vUv);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    });
    this.compositeScene = new THREE.Scene();
    this.compositeScene.add(new THREE.Mesh(quadGeom, this.compositeMaterial));
  }

  resize(width: number, height: number) {
    this.rtA.setSize(width, height);
    this.rtB.setSize(width, height);
  }

  /** Live tunable: 0.90 = short trails (~10 frames), 0.99 = very long (~70 frames). */
  setFade(survivalRate: number) {
    this.fadeMaterial.uniforms.uFade.value = survivalRate;
  }

  /**
   * Run the three passes. Call AFTER renderer.render(mainScene, mainCamera) so the trails
   * end up composited on top of the rendered globe.
   */
  render(renderer: THREE.WebGLRenderer, mainCamera: THREE.Camera) {
    const next = this.current === this.rtA ? this.rtB : this.rtA;
    const prevAutoClear = renderer.autoClear;
    renderer.autoClear = false;

    // Pass 1: fade-of-prev → next
    this.fadeMaterial.uniforms.uPrev.value = this.current.texture;
    renderer.setRenderTarget(next);
    renderer.setClearColor(0x000000, 0);
    renderer.clear(true, false, false);
    renderer.render(this.fadeScene, this.screenCamera);

    // Pass 2: render particles on top of the faded buffer using the real camera
    renderer.render(this.particleScene, mainCamera);

    // Pass 3: composite the accumulated trails over the main canvas additively
    renderer.setRenderTarget(null);
    this.compositeMaterial.uniforms.uTrails.value = next.texture;
    renderer.render(this.compositeScene, this.screenCamera);

    renderer.autoClear = prevAutoClear;
    this.current = next;
  }

  dispose() {
    this.rtA.dispose();
    this.rtB.dispose();
    this.fadeMaterial.dispose();
    this.compositeMaterial.dispose();
  }
}
