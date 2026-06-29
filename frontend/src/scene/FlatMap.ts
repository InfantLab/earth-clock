import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";

/**
 * Equirectangular flat-map mode. Renders the Earth as a 2:1 plane (lon = -180..+180,
 * lat = -90..+90), with the same day texture, night-lights overlay, and cloud composite
 * the 3D globe uses. The day/night gradient is computed per-pixel from a sub-solar
 * direction uniform (geographic frame — no axial tilt or daily spin needed because the
 * flat map IS the geographic frame).
 *
 * **Pan + zoom (v0.1.9)**: bound to Three.js's `MapControls` — drag to pan, wheel/pinch
 * to zoom. The camera is an orthographic looking straight down the +Z axis; MapControls
 * pans by translating both camera + target in world X/Y, and zooms by adjusting
 * `camera.zoom` (which Three.js multiplies into the frustum). Two extra plane meshes
 * sit at x = ±2 to handle wrap-around past the ±180° meridian: each one is a copy of
 * the main plane shifted by one full world-width, so panning right past the right edge
 * reveals the same world tiled, not a black void.
 *
 * Owns its own scene + orthographic camera so it can be rendered independently — main.ts
 * picks between the 3D scene and this scene each frame based on the menu's "Map" toggle,
 * and calls `enableControls()` / `disableControls()` so the controls only intercept
 * events while flat-map mode is active.
 *
 * Layers wired in v1: day surface, night lights, clouds, day/night terminator.
 * Layers TODO for flat-map v2: aurora points, fires, hurricanes, wind particles, coastlines.
 */

/** Min camera.zoom (max zoom-out) — full world view. */
const MIN_ZOOM = 0.9;
/** Max camera.zoom (max zoom-in) — ~5° lat span at default texture resolution. */
const MAX_ZOOM = 20;
/** Default initial zoom — whole world fits. */
const DEFAULT_ZOOM = 1.0;

export class FlatMap {
  readonly scene: THREE.Scene;
  readonly camera: THREE.OrthographicCamera;
  private readonly mainMesh: THREE.Mesh;
  private readonly material: THREE.ShaderMaterial;
  private readonly terminatorGeom: THREE.BufferGeometry;
  private readonly terminatorLines: THREE.Line[];
  private controls: MapControls | null = null;
  private baseFrustum = { left: -1, right: 1, top: 0.5, bottom: -0.5 };

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000005);

    // Ortho camera — frustum bounds adjusted by resize() so the 2:1 plane fits the viewport.
    this.camera = new THREE.OrthographicCamera(-1, 1, 0.5, -0.5, 0, 10);
    this.camera.position.set(0, 0, 1);
    this.camera.lookAt(0, 0, 0);

    const loader = new THREE.TextureLoader();
    const day   = loader.load("textures/earth_daymap_2k.jpg");
    const night = loader.load("textures/earth_nightmap_2k.jpg");
    day.colorSpace   = THREE.SRGBColorSpace;
    night.colorSpace = THREE.SRGBColorSpace;

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uDay:            { value: day },
        uNight:          { value: night },
        uClouds:         { value: null as THREE.Texture | null },
        uHasClouds:      { value: 0.0 },
        // Geographic-frame sub-solar direction. Set from main.ts via setSubSolar(lat, lon).
        // Initial value is arbitrary; the first updateAstro() call replaces it.
        uGeoSunDir:      { value: new THREE.Vector3(1, 0, 0) },
        uShowClouds:     { value: 1.0 },
        uShowNightLights:{ value: 1.0 },
        uShowTerminator: { value: 1.0 },
        uCloudThreshold: { value: 0.50 },
        uCloudSoftness:  { value: 0.30 },
        uCloudOpacity:   { value: 0.85 },
        uCloudNightFloor:{ value: 0.25 },
        uTwilightWidth:  { value: 0.10 },
        uNightDimFloor:  { value: 0.18 },
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uDay;
        uniform sampler2D uNight;
        uniform sampler2D uClouds;
        uniform float     uHasClouds;
        uniform vec3      uGeoSunDir;
        uniform float     uShowClouds;
        uniform float     uShowNightLights;
        uniform float     uShowTerminator;
        uniform float     uCloudThreshold;
        uniform float     uCloudSoftness;
        uniform float     uCloudOpacity;
        uniform float     uCloudNightFloor;
        uniform float     uTwilightWidth;
        uniform float     uNightDimFloor;
        varying vec2 vUv;

        const float PI = 3.14159265359;

        void main() {
          // Pixel → (lon, lat). Plane v=0 is south, v=1 is north (matches texture orientation).
          float lon = (vUv.x - 0.5) * 2.0 * PI;   // -π..+π
          float lat = (vUv.y - 0.5) * PI;         // -π/2..+π/2
          float cosLat = cos(lat);

          // Geographic surface normal at this pixel — same convention as the 3D sphere.
          vec3 surfNorm = vec3(
             cosLat * cos(lon),
             sin(lat),
            -cosLat * sin(lon)
          );

          float ndotl = dot(surfNorm, normalize(uGeoSunDir));
          float dayFactor = smoothstep(-uTwilightWidth, uTwilightWidth, ndotl);

          // Day surface, dimmed on the night side (never to black — keeps the geography legible)
          vec3 day = texture2D(uDay, vUv).rgb;
          vec3 col;
          if (uShowTerminator > 0.5) {
            float bright = mix(uNightDimFloor, 1.0, dayFactor);
            col = day * bright;
            // Night lights bloom in over the dark side
            if (uShowNightLights > 0.5) {
              vec3 night = texture2D(uNight, vUv).rgb;
              col += night * (1.0 - dayFactor) * 1.6;
            }
          } else {
            col = day;
          }

          // Clouds — always visible (never erased on night side), dim toward floor at night.
          if (uShowClouds > 0.5 && uHasClouds > 0.5) {
            vec4 c = texture2D(uClouds, vUv);
            float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
            float cloudAlpha = smoothstep(uCloudThreshold, uCloudThreshold + uCloudSoftness, luma);
            float cloudBright = mix(1.0, mix(uCloudNightFloor, 1.0, dayFactor), uShowTerminator);
            vec3 cloudCol = mix(c.rgb, vec3(1.0), 0.4) * cloudBright;
            col = mix(col, cloudCol, cloudAlpha * uCloudOpacity);
          }

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    const geom = new THREE.PlaneGeometry(2, 1);
    this.mainMesh = new THREE.Mesh(geom, this.material);
    this.scene.add(this.mainMesh);

    // Wrap-around copies. Same geometry + material as the main plane, offset by
    // ±2 in X (one full world-width on the 2-unit plane). When the user pans past
    // ±180° these duplicates fill in the side of the canvas that would otherwise
    // be the black backdrop. They share the material so any uniform tweak
    // applies to all three; they're identical content shifted in space.
    for (const dx of [-2, 2]) {
      const m = new THREE.Mesh(geom, this.material);
      m.position.x = dx;
      this.scene.add(m);
    }

    // Terminator arc — crisp day/night boundary line in equirectangular space.
    // At each longitude λ, the terminator latitude satisfies:
    //   tanLat = −cos(sunLat)·cos(λ − sunLon) / sin(sunLat)
    // The 361-point curve spans −180° → +180° (continuous, no closing segment).
    // Three copies at x = 0, −2, +2 provide wrap-around continuity when panning.
    const TERM_N = 361;
    const termPos = new Float32Array(TERM_N * 3);
    this.terminatorGeom = new THREE.BufferGeometry();
    this.terminatorGeom.setAttribute("position", new THREE.BufferAttribute(termPos, 3));
    const termMat = new THREE.LineBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0.40, depthWrite: false,
    });
    this.terminatorLines = [0, -2, 2].map(dx => {
      const line = new THREE.Line(this.terminatorGeom, termMat);
      line.position.x = dx;
      line.renderOrder = 2;
      line.frustumCulled = false;
      this.scene.add(line);
      return line;
    });
  }

  /** Adjust ortho frustum so the 2:1 map fits the viewport (letterbox or pillarbox).
   *  Called on window resize from main.ts. The stored `baseFrustum` is the
   *  zoom-1 baseline; MapControls' `camera.zoom` scales the frustum on top of
   *  this (Three.js multiplies the frustum extents by 1/zoom internally). */
  resize(viewportWidth: number, viewportHeight: number) {
    const aspect = viewportWidth / viewportHeight;
    if (aspect > 2.0) {
      // Wider than 2:1 — fit height, pillarbox
      this.baseFrustum = { left: -0.5 * aspect, right: 0.5 * aspect, top: 0.5, bottom: -0.5 };
    } else {
      // Narrower than 2:1 — fit width, letterbox
      this.baseFrustum = { left: -1, right: 1, top: 1.0 / aspect, bottom: -1.0 / aspect };
    }
    this.camera.left   = this.baseFrustum.left;
    this.camera.right  = this.baseFrustum.right;
    this.camera.top    = this.baseFrustum.top;
    this.camera.bottom = this.baseFrustum.bottom;
    this.camera.updateProjectionMatrix();
  }

  /** Enable MapControls. Called when the user switches to flat-map mode so
   *  the controls only intercept events while flat-map is active (otherwise
   *  they'd compete with OrbitControls on the 3D globe). Lazy-initialised on
   *  first call. */
  enableControls(domElement: HTMLElement) {
    if (!this.controls) {
      this.controls = new MapControls(this.camera, domElement);
      this.controls.enableRotate = false;        // top-down only — no tilt
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.18;
      this.controls.screenSpacePanning = true;
      this.controls.zoomToCursor = true;          // Google-Maps-style zoom-on-cursor
      this.controls.minZoom = MIN_ZOOM;
      this.controls.maxZoom = MAX_ZOOM;
      // Y-pan is clamped in update() so the user can't scroll past the poles
      // into empty space. X-pan is unconstrained and uses the wrap-around
      // plane copies for visual continuity.
      // Double-click resets to the home view. The control library doesn't
      // give us a "reset" event, so we wire dblclick ourselves.
      domElement.addEventListener("dblclick", this.resetView);
    }
    this.controls.connect();
    this.controls.enabled = true;
  }

  /** Disable MapControls — called when the user switches back to 3D globe
   *  mode so the controls stop receiving events. We don't dispose; toggling
   *  modes shouldn't pay the cost of rebuilding the listener wiring. */
  disableControls() {
    if (this.controls) this.controls.enabled = false;
  }

  /** Per-frame update: apply damping, clamp Y-pan to keep the camera target
   *  within the plane's lat extent so the user can't scroll into empty space
   *  above the north pole or below the south pole. Call this from the main
   *  animate loop only while flat-map mode is active. */
  update() {
    if (!this.controls || !this.controls.enabled) return;
    this.controls.update();
    // Clamp Y-pan. With camera.zoom = z, the visible Y half-height is
    // baseFrustum.top / z. We want the camera target's Y to stay within
    // [-0.5 + half, 0.5 - half] so we always see the world strip, never
    // black above/below the poles. (When the visible strip is taller than
    // the plane, just centre.)
    const halfV = this.baseFrustum.top / this.camera.zoom;
    let clamped = false;
    if (halfV >= 0.5) {
      // View is taller than the plane — just centre.
      if (this.controls.target.y !== 0) { this.controls.target.y = 0; this.camera.position.y = 0; clamped = true; }
    } else {
      const yMax = 0.5 - halfV;
      if (this.controls.target.y > yMax) { this.controls.target.y = yMax; this.camera.position.y = yMax; clamped = true; }
      if (this.controls.target.y < -yMax) { this.controls.target.y = -yMax; this.camera.position.y = -yMax; clamped = true; }
    }
    // Snap the controls' internal state to the clamped target so the next
    // damping tick doesn't push past the limit again.
    if (clamped) this.controls.update();
  }

  /** Reset pan + zoom to the default "whole world" view. Wired to double-click
   *  on the canvas. */
  resetView = () => {
    this.camera.position.set(0, 0, 1);
    this.camera.zoom = DEFAULT_ZOOM;
    this.camera.updateProjectionMatrix();
    if (this.controls) {
      this.controls.target.set(0, 0, 0);
      this.controls.update();
    }
  };

  /** Wrap an x-coordinate (world units) back into the canonical plane's range
   *  [-1, 1]. Used by the click-to-pin handler in main.ts to translate a click
   *  on one of the wrap-around plane copies back into a real longitude. */
  static wrapWorldX(x: number): number {
    let wx = ((x + 1) % 2 + 2) % 2 - 1;
    return wx;
  }

  /**
   * Update the geographic-frame sub-solar direction. lat/lon in **degrees**.
   * Used by the shader's per-pixel day/night calculation — no axial-tilt or daily-rotation
   * uniforms needed because the flat map is rendered directly in the geographic frame.
   * Also rebuilds the terminator arc line geometry each call (called every frame).
   */
  setSubSolar(latDeg: number, lonDeg: number) {
    const lat = latDeg * Math.PI / 180;
    const lon = lonDeg * Math.PI / 180;
    const cosLat = Math.cos(lat);
    this.material.uniforms.uGeoSunDir.value.set(
       cosLat * Math.cos(lon),
       Math.sin(lat),
      -cosLat * Math.sin(lon),
    );
    this._updateTerminatorLine(lat, lon);
  }

  private _updateTerminatorLine(sunLatRad: number, sunLonRad: number) {
    const pos = this.terminatorGeom.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const N = 361;
    const sinLat = Math.sin(sunLatRad);
    const cosLat = Math.cos(sunLatRad);
    for (let i = 0; i < N; i++) {
      const lonDeg = -180 + 360 * i / (N - 1);
      const lonRad = lonDeg * Math.PI / 180;
      // Terminator latitude: surface normal dot sun-direction = 0, solved for lat.
      const termLatRad = Math.atan2(-cosLat * Math.cos(lonRad - sunLonRad), sinLat);
      arr[i * 3]     = lonDeg / 180;       // x: [-1, +1] = lon / 180°
      arr[i * 3 + 1] = termLatRad / Math.PI; // y: [-0.5, +0.5] = latDeg / 180
      arr[i * 3 + 2] = 0.005;              // z: above clouds/coastlines, below sun·moon dots
    }
    pos.needsUpdate = true;
    this.terminatorGeom.computeBoundingSphere();
  }

  /** Swap in a new equirectangular cloud texture (same one the 3D CloudLayer uses). */
  setCloudTexture(tex: THREE.Texture | null) {
    this.material.uniforms.uClouds.value = tex;
    this.material.uniforms.uHasClouds.value = tex ? 1.0 : 0.0;
  }

  setTerminatorEnabled(b: boolean) {
    this.material.uniforms.uShowTerminator.value = b ? 1.0 : 0.0;
    for (const line of this.terminatorLines) line.visible = b;
  }
  setNightLightsVisible(b: boolean) {
    this.material.uniforms.uShowNightLights.value = b ? 1.0 : 0.0;
  }
  setCloudsVisible(b: boolean) {
    this.material.uniforms.uShowClouds.value = b ? 1.0 : 0.0;
  }
}
