import * as THREE from "three";
import type { StormGrid } from "../data/nhcLoader";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Active tropical cyclones rendered as pulsing additive points with a rotating swirl sprite,
 * one per storm from the NHC `CurrentStorms.json` feed. Geographically fixed (rotates with Earth).
 *
 * - Intensity (knots) drives size, color (cyan→yellow→orange→red→magenta across TD/TS/Cat1-5),
 *   and pulse frequency.
 * - The sprite is a polar-coordinate spiral: a soft eye, a rotating outer ring, and faint arms,
 *   so it reads as a hurricane shape rather than a generic point. Animated rotation gives life.
 *
 * Off-season the storms array is empty and the mesh draws nothing — the layer just sits there
 * waiting for NHC's first advisory of the year.
 */
export class HurricaneLayer {
  readonly mesh: THREE.Group;
  private readonly points: THREE.Points;
  private readonly material: THREE.ShaderMaterial;
  private readonly posAttr: THREE.BufferAttribute;
  private readonly intensityAttr: THREE.BufferAttribute;
  private readonly hashAttr: THREE.BufferAttribute;

  // NHC typically tracks <10 simultaneously, globally <30 in extreme weeks.
  private static readonly MAX_STORMS = 64;
  private readonly RADIUS = 1.012;

  constructor() {
    const geometry = new THREE.BufferGeometry();
    const positions  = new Float32Array(HurricaneLayer.MAX_STORMS * 3);
    const intensity  = new Float32Array(HurricaneLayer.MAX_STORMS);
    const hashes     = new Float32Array(HurricaneLayer.MAX_STORMS);

    this.posAttr       = new THREE.BufferAttribute(positions, 3);
    this.intensityAttr = new THREE.BufferAttribute(intensity, 1);
    this.hashAttr      = new THREE.BufferAttribute(hashes, 1);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.intensityAttr.setUsage(THREE.DynamicDrawUsage);
    this.hashAttr.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", this.posAttr);
    geometry.setAttribute("aIntensity", this.intensityAttr);
    geometry.setAttribute("aHash", this.hashAttr);
    geometry.setDrawRange(0, 0);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime:    { value: 0 },
        uOpacity: { value: 0.95 },
      },
      vertexShader: /* glsl */`
        attribute float aIntensity;
        attribute float aHash;
        varying float vIntensity;
        varying float vHash;
        void main() {
          vIntensity = aIntensity;
          vHash = aHash;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          // Size: 32 px for a tropical depression up to ~80 px for Cat-5 (160 kt+).
          // Hurricanes are physically huge (500–1500 km eyewall-to-eyewall), so they read
          // best as prominent sprites that compete with the cloud layer for attention.
          float t = clamp(aIntensity / 160.0, 0.0, 1.0);
          gl_PointSize = 32.0 + 48.0 * t;
        }
      `,
      fragmentShader: /* glsl */`
        uniform float uTime;
        uniform float uOpacity;
        varying float vIntensity;
        varying float vHash;

        void main() {
          vec2 q = gl_PointCoord - 0.5;
          float r = length(q);
          if (r > 0.5) discard;
          float ang = atan(q.y, q.x);

          float t = clamp(vIntensity / 160.0, 0.0, 1.0);

          // Color ramp tuned to read against a bright daylit ocean: cyan-white (TD) →
          // yellow (TS) → orange (Cat1-2) → deep red (Cat3) → magenta (Cat4-5). Direct
          // RGB rather than HSV so the high-intensity end isn't a desaturated pink.
          vec3 cold = vec3(0.50, 0.95, 1.00);   // TD
          vec3 mid  = vec3(1.00, 0.85, 0.30);   // TS
          vec3 hot1 = vec3(1.00, 0.40, 0.10);   // Cat 1-2
          vec3 hot2 = vec3(1.00, 0.15, 0.25);   // Cat 3
          vec3 hot3 = vec3(0.95, 0.20, 0.70);   // Cat 4-5
          vec3 col = mix(cold, mid,  smoothstep(0.0, 0.30, t));
          col       = mix(col,  hot1, smoothstep(0.30, 0.55, t));
          col       = mix(col,  hot2, smoothstep(0.55, 0.75, t));
          col       = mix(col,  hot3, smoothstep(0.75, 1.0, t));

          // Pulse: faster as intensity rises. Decorrelated per storm by hash.
          float pulseFreq = 1.5 + 4.5 * t;
          float pulse = 0.85 + 0.15 * sin(uTime * pulseFreq + vHash * 31.4);

          // Bright white eye — much bigger than before so the storm is unmistakable.
          float eye = smoothstep(0.18, 0.0, r);
          col = mix(col, vec3(1.0, 0.98, 0.92), eye * 0.85);

          // Spiral arms — two-arm comma, rotating, brighter than the old version
          float spin = uTime * (0.6 + 0.4 * t) + vHash * 6.2831;
          float arms = 0.5 + 0.5 * cos(2.0 * (ang - spin) + 8.0 * r);
          float armMask = smoothstep(0.05, 0.30, r) * smoothstep(0.50, 0.20, r);

          // Outer ring — defines the storm's edge
          float ring = smoothstep(0.50, 0.46, r) - smoothstep(0.46, 0.36, r);
          ring = max(ring, 0.0);

          // Soft falloff so the disc isn't a hard circle
          float falloff = smoothstep(0.50, 0.0, r);

          // Alpha: opaque eye, semi-opaque body modulated by arms, ring. Pulse modulates everything.
          float bodyAlpha = (eye * 1.5 + arms * armMask * 0.75 + ring * 0.9) * falloff * pulse;
          float alpha = clamp(bodyAlpha, 0.0, 1.0) * uOpacity;

          gl_FragColor = vec4(col, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      // NormalBlending so the storm reads as a bold colored disc against any background —
      // bright on the night side, vibrant on the day side. AdditiveBlending was washing out
      // over the lit cloud layer and ocean.
      blending: THREE.NormalBlending,
    });

    this.points = new THREE.Points(geometry, this.material);

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.points);
  }

  /** Replace storm data from a fresh NHC fetch. Empty array → nothing drawn. */
  update(grid: StormGrid) {
    const R = this.RADIUS;
    const n = Math.min(grid.storms.length, HurricaneLayer.MAX_STORMS);
    const pos  = this.posAttr.array as Float32Array;
    const intn = this.intensityAttr.array as Float32Array;
    const hash = this.hashAttr.array as Float32Array;

    for (let i = 0; i < n; i++) {
      const s = grid.storms[i];
      const lonRad = s.lon * Math.PI / 180;
      const latRad = s.lat * Math.PI / 180;
      const cosLat = Math.cos(latRad);
      // Three.js SphereGeometry convention: Greenwich at +X, +90°E at -Z
      pos[i * 3 + 0] =  R * cosLat * Math.cos(lonRad);
      pos[i * 3 + 1] =  R * Math.sin(latRad);
      pos[i * 3 + 2] = -R * cosLat * Math.sin(lonRad);
      intn[i] = s.intensityKt;
      // Stable per-storm hash from id (so spiral rotation phase is consistent across reloads)
      hash[i] = Math.abs(hashString(s.id)) % 1;
    }

    this.posAttr.needsUpdate       = true;
    this.intensityAttr.needsUpdate = true;
    this.hashAttr.needsUpdate      = true;
    this.points.geometry.setDrawRange(0, n);
  }

  setRotationY(angle: number) {
    this.points.rotation.y = angle;
  }

  setTime(t: number) {
    this.material.uniforms.uTime.value = t;
  }

  setOpacity(o: number) {
    this.material.uniforms.uOpacity.value = o;
  }
}

// Cheap deterministic string hash → [0, 1). Used for per-storm spiral phase offset.
function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(Math.sin(h * 0.0001)) * 1000;
}
