import * as THREE from "three";
import type { ScalarGrid } from "../data/DataSource";
import { scalarGridToByteTexture } from "../data/scalarToTexture";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Live cloud layer — a translucent sphere just above the Earth's surface. Two source modes:
 *
 *   • **TrueColor** (mode=0): textured with a NASA GIBS VIIRS daily mosaic. Cloud alpha is
 *     extracted by luminance threshold (clouds are the brightest pixels in true-color RGB);
 *     the colour is biased toward white to suppress green/brown land features that survive
 *     the threshold. Best visual fidelity when the day is fully published, but VIIRS daily
 *     mosaics can have triangular no-data wedges where recent swaths haven't been processed.
 *
 *   • **Scalar** (mode=1): driven by a GFS cloud-cover scalar grid (TCDC or TCW). Cloud
 *     alpha = normalised scalar value; colour is a flat white. No coverage gaps anywhere,
 *     animates with time-warp, but flat-looking (no texture detail).
 *
 * Both modes share the same sun-direction day/night dimming and Earth's daily rotation, so
 * the user can swap source mid-session without touching anything else.
 */
export type CloudSourceMode = "truecolor" | "scalar";

export class CloudLayer {
  readonly mesh: THREE.Group;
  private readonly cloudSphere: THREE.Mesh;
  private readonly material: THREE.ShaderMaterial;
  private readonly sunDirUniform: { value: THREE.Vector3 };
  private currentScalarTexture: THREE.DataTexture | null = null;
  private currentTrueColorTexture: THREE.Texture | null = null;

  constructor(radius: number = 1.003) {
    const geometry = new THREE.SphereGeometry(radius, 128, 64);

    this.sunDirUniform = { value: new THREE.Vector3(1, 0, 0) };

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uMap:         { value: null },
        uScalar:      { value: null },
        // 0 = true-color luminance extraction, 1 = scalar cloud-fraction grid.
        // Scalar mode reads a *pre-normalised* byte texture so the sampled value is
        // already in [0, 1] — no need for vmin/vmax uniforms inside the shader. The
        // bake-into-the-texture approach (see scalarGridToByteTexture) gets us linear
        // filtering on every GPU; floating-point textures depend on optional WebGL2
        // extensions that some integrated drivers silently skip.
        uMode:        { value: 0 },
        uSunDirection:{ value: this.sunDirUniform.value },
        uThreshold:   { value: 0.50 },   // luminance below this → fully transparent (true-color)
        uSoftness:    { value: 0.30 },   // smoothstep width (true-color)
        uOpacity:     { value: 0.85 },
        uNightFade:   { value: 0.10 },   // smoothstep range around the terminator
        uNightFloor:  { value: 0.25 },   // night-side cloud brightness floor
        uTerminator:  { value: 1.0 },    // 1 = day/night gradient on clouds; 0 = uniformly bright
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        varying vec3 vWorldNormal;
        varying vec3 vLocalNormal;
        void main() {
          vUv = uv;
          // World-space normal drives the sun-direction terminator mask; local-space normal
          // drives per-fragment UV when sampling the GFS scalar grid (which uses a different
          // longitude origin than the VIIRS texture, so we can't reuse the rasterised vUv).
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          vLocalNormal = normalize(normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uMap;
        uniform sampler2D uScalar;
        uniform int   uMode;
        uniform vec3 uSunDirection;
        uniform float uThreshold;
        uniform float uSoftness;
        uniform float uOpacity;
        uniform float uNightFade;
        uniform float uNightFloor;
        uniform float uTerminator;
        varying vec2 vUv;
        varying vec3 vWorldNormal;
        varying vec3 vLocalNormal;
        const float PI = 3.14159265359;

        void main() {
          float cloudAlpha;
          vec3 cloudColor;

          if (uMode == 0) {
            // ---- True-color VIIRS mosaic ----
            vec4 c = texture2D(uMap, vUv);
            // BT.709 luminance — clouds are bright across all channels in true-color; ocean
            // is dark blue, land darker greens/browns. Luma cleanly separates them.
            float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
            cloudAlpha = smoothstep(uThreshold, uThreshold + uSoftness, luma);
            // Keep colour near-white rather than passing the raw tile RGB to avoid subtle
            // green/brown tinting from land features that survived the luma threshold.
            cloudColor = mix(c.rgb, vec3(1.0), 0.4);
          } else {
            // ---- GFS scalar cloud-cover grid (pre-normalised byte texture) ----
            // Per-fragment UV from local normal (avoids prime-meridian seam discontinuity).
            // Convention: x = cos(lat)·cos(lon), y = sin(lat), z = -cos(lat)·sin(lon).
            // GFS grid: first column at lon=0, first row at lat=+90.
            float lat = asin(clamp(vLocalNormal.y, -1.0, 1.0));
            float lon = atan(-vLocalNormal.z, vLocalNormal.x);
            float u = (lon < 0.0 ? lon + 2.0 * PI : lon) / (2.0 * PI);
            float vv = (0.5 * PI - lat) / PI;
            // Byte texture: value already normalised [0, 1] by scalarGridToByteTexture.
            cloudAlpha = texture2D(uScalar, vec2(u, vv)).r;
            cloudColor = vec3(1.0);
          }

          // Day → night brightness gradient. Clouds are physically there 24h, so they never
          // vanish — just dim toward a floor on the dark side. Alpha is untouched, so night
          // clouds correctly occlude city lights below them.
          float ndotl = dot(vWorldNormal, normalize(uSunDirection));
          float dayFactor = smoothstep(-uNightFade, uNightFade, ndotl);
          float brightness = mix(1.0, mix(uNightFloor, 1.0, dayFactor), uTerminator);

          gl_FragColor = vec4(cloudColor * brightness, cloudAlpha * uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    this.cloudSphere = new THREE.Mesh(geometry, this.material);
    // Render-order budget for the transparent shells around Earth (smaller renderOrder
    // draws first, i.e. back-to-front from camera POV):
    //   overlay (r=1.006) = 1, clouds (r=1.003) = 2, trails (r=1.006) = 3, aurora (r=1.008) = 4.
    // Without this, Three.js's transparent sort uses world-space Z of the mesh origin —
    // identical for every layer (all at 0,0,0) — so the order between equally-deep
    // transparents is undefined and the overlay can occlude clouds inconsistently.
    // Clouds draw on top of overlay (QA v001dev request) so the data colour-map shows
    // through clear sky while real clouds remain visible.
    this.cloudSphere.renderOrder = 2;

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.cloudSphere);
  }

  /**
   * Swap in a VIIRS true-color mosaic. Switches the shader to TrueColor mode automatically.
   *
   * Crucially, the GFS scalar texture (if any) is **left alive** so the user can flip back
   * to it via the Clouds picker without a re-fetch. We only dispose the prior TrueColor
   * texture if a brand-new one is replacing it — refreshing VIIRS data.
   */
  setTexture(tex: THREE.Texture) {
    if (this.currentTrueColorTexture && this.currentTrueColorTexture !== tex) {
      this.currentTrueColorTexture.dispose();
    }
    this.material.uniforms.uMap.value = tex;
    this.material.uniforms.uMode.value = 0;
    this.currentTrueColorTexture = tex;
  }

  /**
   * Swap in a GFS scalar cloud-cover grid (TCDC or TCW). Switches to Scalar mode.
   * `vmin`/`vmax` are baked into the byte texture's normalisation — for TCDC pass
   * (0, 100); for TCW use (0, 1.0).
   *
   * The TrueColor texture is left alive so the user can flip back to it via the picker.
   * Only the prior scalar texture (if any) gets disposed.
   */
  setScalarField(grid: ScalarGrid, vmin: number, vmax: number) {
    const tex = scalarGridToByteTexture(grid, vmin, vmax);
    if (this.currentScalarTexture) {
      this.currentScalarTexture.dispose();
    }
    this.material.uniforms.uScalar.value = tex;
    this.material.uniforms.uMode.value = 1;
    this.currentScalarTexture = tex;
  }

  /** Sun direction in world space — drives the day/night terminator mask. */
  setSunDirection(dir: THREE.Vector3) {
    this.sunDirUniform.value.copy(dir);
  }

  /** Earth's daily spin angle — keeps clouds geographically anchored. */
  setRotationY(angle: number) {
    this.cloudSphere.rotation.y = angle;
  }

  /**
   * When the global Terminator toggle is on, clouds dim across the day→night gradient
   * but never vanish (floor controlled by `uNightFloor`). When off, the globe is uniformly
   * lit and clouds match by rendering uniformly bright everywhere.
   */
  setTerminatorEnabled(enabled: boolean) {
    this.material.uniforms.uTerminator.value = enabled ? 1.0 : 0.0;
  }

  setThreshold(t: number)  { this.material.uniforms.uThreshold.value = t; }
  setSoftness(s: number)   { this.material.uniforms.uSoftness.value = s; }
  setOpacity(o: number)    { this.material.uniforms.uOpacity.value = o; }
  setNightFloor(f: number) { this.material.uniforms.uNightFloor.value = f; }
}
