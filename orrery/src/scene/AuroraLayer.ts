import * as THREE from "three";
import type { AuroraGrid } from "../data/auroraLoader";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Aurora oval rendered as an additive point cloud at r=1.008 (just above the cloud layer).
 *
 * Each point corresponds to one NOAA SWPC Ovation grid cell. The probability value drives
 * hue (low → green, high → cyan/white), opacity (quadratic so dim cells are almost invisible),
 * and point size. A sun-direction uniform masks aurora to the night side — in reality auroras
 * can appear in twilight but are invisible in daylight, so the night-side mask looks correct.
 *
 * Ovation's coordinates are *geographic* lat/lon for the forecast time, so the layer shares
 * Earth's axial tilt and daily spin via `setRotationY` (same as coastlines, fires, etc.).
 * Between 5-min fetches there will be a tiny rotational drift relative to where the aurora
 * "really" sits in the sun-magnetospheric frame, but it's <1.3° and gets corrected next fetch.
 */
export class AuroraLayer {
  readonly mesh: THREE.Group;
  private readonly points: THREE.Points;
  private readonly material: THREE.ShaderMaterial;
  private readonly posAttr: THREE.BufferAttribute;
  private readonly probAttr: THREE.BufferAttribute;
  private readonly sunDirUniform: { value: THREE.Vector3 };
  private readonly timeUniform: { value: number };

  // Over-allocate for the maximum expected grid size (~65 k points)
  private static readonly MAX_POINTS = 70000;
  private readonly RADIUS = 1.008;

  constructor() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(AuroraLayer.MAX_POINTS * 3);
    const probs     = new Float32Array(AuroraLayer.MAX_POINTS);

    this.posAttr  = new THREE.BufferAttribute(positions, 3);
    this.probAttr = new THREE.BufferAttribute(probs, 1);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.probAttr.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", this.posAttr);
    geometry.setAttribute("aProbability", this.probAttr);
    geometry.setDrawRange(0, 0);

    this.sunDirUniform = { value: new THREE.Vector3(1, 0, 0) };
    this.timeUniform   = { value: 0 };

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uSunDirection: { value: this.sunDirUniform.value },
        uTime:         { value: this.timeUniform.value },
        uOpacity:      { value: 1.0 },
        uTerminator:   { value: 1.0 }, // 0 = aurora visible globally; 1 = night-side only
      },
      vertexShader: /* glsl */`
        attribute float aProbability;
        varying float vProb;
        varying vec3 vWorldPos;
        void main() {
          vProb = aProbability;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
          // Size: 3 px floor for dim cells, up to ~9 px for bright ones — large enough to
          // register as clear auroral dots, small enough that 65 k of them don't paint a haze.
          gl_PointSize = 3.0 + 6.0 * pow(aProbability / 100.0, 1.5);
        }
      `,
      fragmentShader: /* glsl */`
        uniform vec3 uSunDirection;
        uniform float uTime;
        uniform float uOpacity;
        uniform float uTerminator;
        varying float vProb;
        varying vec3 vWorldPos;

        // HSV → RGB (classic iq formula)
        vec3 hsv2rgb(vec3 c) {
          vec3 p = abs(fract(c.xxx + vec3(0.0,2.0/3.0,1.0/3.0)) * 6.0 - 3.0);
          return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
        }

        void main() {
          float p = vProb / 100.0;        // 0..1
          if (p < 0.02) discard;          // skip near-zero cells

          // Night-side mask: aurora is invisible in daylight — but only when the Terminator
          // master switch is on. With terminator off, aurora glows globally.
          float ndotl = dot(normalize(vWorldPos), normalize(uSunDirection));
          float nightMask = mix(1.0, smoothstep(0.10, -0.10, ndotl), uTerminator);
          if (nightMask < 0.01) discard;

          // Gentle shimmer — very low amplitude so it reads as faint auroral motion
          float shimmer = 1.0 + 0.08 * sin(uTime * 2.3 + vProb * 17.3);

          // Hue: 0.35 (green) at low prob → 0.55 (cyan) at mid → 0.85 (magenta) at high
          float hue = 0.35 + 0.50 * p;
          float sat = mix(0.6, 1.0, p);
          float val = mix(0.4, 1.0, p) * shimmer;
          vec3 col = hsv2rgb(vec3(hue, sat, val));

          // Opacity: quadratic so faint cells are nearly invisible, bright ones pop
          float alpha = pow(p, 1.8) * nightMask * uOpacity;

          // Soft disc for point
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          alpha *= smoothstep(0.5, 0.2, d);

          gl_FragColor = vec4(col, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(geometry, this.material);
    // See CloudLayer for the renderOrder budget — aurora sits on top of clouds/overlay/trails.
    this.points.renderOrder = 4;

    // Same tilted-group pattern as Coastlines/Fires/Hurricanes — axial tilt fixed on parent,
    // daily spin applied to the inner points via setRotationY.
    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.points);
  }

  /** Replace aurora data from a fresh NOAA fetch. */
  update(grid: AuroraGrid) {
    const R = this.RADIUS;
    const n = Math.min(grid.pointCount, AuroraLayer.MAX_POINTS);
    const pos  = this.posAttr.array as Float32Array;
    const prob = this.probAttr.array as Float32Array;

    for (let i = 0; i < n; i++) {
      const lon  = grid.data[i * 3 + 0];
      const lat  = grid.data[i * 3 + 1];
      const p    = grid.data[i * 3 + 2];

      const lonRad = lon * Math.PI / 180;
      const latRad = lat * Math.PI / 180;
      const cosLat = Math.cos(latRad);
      // Three.js SphereGeometry convention: Greenwich at +X, +90°E at -Z
      pos[i * 3 + 0] =  R * cosLat * Math.cos(lonRad);
      pos[i * 3 + 1] =  R * Math.sin(latRad);
      pos[i * 3 + 2] = -R * cosLat * Math.sin(lonRad);
      prob[i] = p;
    }

    this.posAttr.needsUpdate  = true;
    this.probAttr.needsUpdate = true;
    this.points.geometry.setDrawRange(0, n);
  }

  setSunDirection(dir: THREE.Vector3) {
    this.sunDirUniform.value.copy(dir);
  }

  /** Earth's daily spin — keeps aurora plotted against the right geographic longitudes. */
  setRotationY(angle: number) {
    this.points.rotation.y = angle;
  }

  setTime(t: number) {
    this.timeUniform.value = t;
    this.material.uniforms.uTime.value = t;
  }

  setOpacity(o: number) {
    this.material.uniforms.uOpacity.value = o;
  }

  /** Master Terminator switch — when off, aurora renders everywhere (no night-only mask). */
  setTerminatorEnabled(enabled: boolean) {
    this.material.uniforms.uTerminator.value = enabled ? 1.0 : 0.0;
  }
}
