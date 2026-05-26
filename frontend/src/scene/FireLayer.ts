import * as THREE from "three";
import type { FireGrid } from "../data/firmsLoader";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Active fires rendered as a flickering additive point cloud at r=1.0015 (just above the surface,
 * below the cloud shell). Each point is one NASA FIRMS detection from the past 24h.
 *
 * - FRP (Fire Radiative Power, MW) drives point size and color: dim orange for routine fires,
 *   bright white-yellow for high-intensity ones.
 * - A per-point hash + sin(time) drives flicker; high-FRP fires flicker faster.
 * - Fires are at fixed geographic lat/lon, so the mesh shares Earth's axial tilt and daily spin
 *   via `setRotationY`.
 */
export class FireLayer {
  readonly mesh: THREE.Group;
  /** Flat-map mirror: same shader, positions are (lon/180, lat/180, 0) on the 2×1 plane. */
  readonly flatMesh: THREE.Points;
  private readonly points: THREE.Points;
  private readonly material: THREE.ShaderMaterial;
  private readonly posAttr: THREE.BufferAttribute;
  private readonly flatPosAttr: THREE.BufferAttribute;
  private readonly frpAttr: THREE.BufferAttribute;
  private readonly hashAttr: THREE.BufferAttribute;

  private static readonly MAX_POINTS = 60000;
  private readonly RADIUS = 1.0015;

  constructor() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(FireLayer.MAX_POINTS * 3);
    const frps      = new Float32Array(FireLayer.MAX_POINTS);
    const hashes    = new Float32Array(FireLayer.MAX_POINTS);

    this.posAttr  = new THREE.BufferAttribute(positions, 3);
    this.frpAttr  = new THREE.BufferAttribute(frps, 1);
    this.hashAttr = new THREE.BufferAttribute(hashes, 1);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.frpAttr.setUsage(THREE.DynamicDrawUsage);
    this.hashAttr.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", this.posAttr);
    geometry.setAttribute("aFrp", this.frpAttr);
    geometry.setAttribute("aHash", this.hashAttr);
    geometry.setDrawRange(0, 0);

    // Flat-map geometry — its own position buffer (different coords), but the same FRP /
    // hash attributes from the sphere geometry. We share the BufferAttribute objects so the
    // single update() loop fills both at once.
    const flatGeom = new THREE.BufferGeometry();
    const flatPositions = new Float32Array(FireLayer.MAX_POINTS * 3);
    this.flatPosAttr = new THREE.BufferAttribute(flatPositions, 3);
    this.flatPosAttr.setUsage(THREE.DynamicDrawUsage);
    flatGeom.setAttribute("position", this.flatPosAttr);
    flatGeom.setAttribute("aFrp", this.frpAttr);
    flatGeom.setAttribute("aHash", this.hashAttr);
    flatGeom.setDrawRange(0, 0);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime:     { value: 0 },
        uOpacity:  { value: 1.0 },
        uSizeBoost:{ value: 1.0 },
      },
      vertexShader: /* glsl */`
        attribute float aFrp;
        attribute float aHash;
        uniform float uSizeBoost;
        varying float vFrp;
        varying float vHash;
        void main() {
          vFrp = aFrp;
          vHash = aHash;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          // Size scales with sqrt(FRP) — FRP spans many orders of magnitude, so a power
          // compression keeps the largest fires from dominating. Clamp to a sane range.
          float s = 2.0 + 6.0 * clamp(sqrt(aFrp) / 18.0, 0.0, 1.0);
          gl_PointSize = s * uSizeBoost;
        }
      `,
      fragmentShader: /* glsl */`
        uniform float uTime;
        uniform float uOpacity;
        varying float vFrp;
        varying float vHash;
        void main() {
          // Soft circular sprite with a hotter core
          vec2 q = gl_PointCoord - 0.5;
          float d = length(q);
          if (d > 0.5) discard;

          // FRP-driven intensity: 0..1 across the typical observed range (sqrt-compressed)
          float t = clamp(sqrt(vFrp) / 22.0, 0.0, 1.0);

          // Color ramp: deep red (cool) → orange (mid) → white-yellow (hot core)
          vec3 cold = vec3(0.85, 0.15, 0.05);
          vec3 mid  = vec3(1.00, 0.55, 0.10);
          vec3 hot  = vec3(1.00, 0.95, 0.70);
          vec3 col = mix(cold, mid, smoothstep(0.0, 0.55, t));
          col      = mix(col,  hot, smoothstep(0.50, 1.0,  t));

          // Hot core: brighten the centre of the sprite
          float core = smoothstep(0.45, 0.0, d);
          col = mix(col, vec3(1.0, 0.95, 0.85), core * 0.4 * t);

          // Flicker: higher-FRP fires flicker faster. Per-point hash decorrelates them.
          float freq = 6.0 + 8.0 * t;
          float flicker = 0.75 + 0.25 * sin(uTime * freq + vHash * 31.4);

          float falloff = smoothstep(0.5, 0.05, d);
          float alpha = falloff * flicker * uOpacity;

          gl_FragColor = vec4(col, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(geometry, this.material);

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.points);

    // Flat-map points: shares the same material (shader doesn't reference world position,
    // only gl_PointCoord + FRP + hash uniforms, so it works in any camera frame).
    this.flatMesh = new THREE.Points(flatGeom, this.material);
  }

  /** Replace fire data from a fresh FIRMS fetch. */
  update(grid: FireGrid) {
    const R = this.RADIUS;
    const n = Math.min(grid.detections.length, FireLayer.MAX_POINTS);
    const pos  = this.posAttr.array as Float32Array;
    const frp  = this.frpAttr.array as Float32Array;
    const hash = this.hashAttr.array as Float32Array;

    const flat = this.flatPosAttr.array as Float32Array;
    for (let i = 0; i < n; i++) {
      const d = grid.detections[i];
      const lonRad = d.lon * Math.PI / 180;
      const latRad = d.lat * Math.PI / 180;
      const cosLat = Math.cos(latRad);
      // Three.js SphereGeometry convention: Greenwich at +X, +90°E at -Z (east CCW from above)
      pos[i * 3 + 0] =  R * cosLat * Math.cos(lonRad);
      pos[i * 3 + 1] =  R * Math.sin(latRad);
      pos[i * 3 + 2] = -R * cosLat * Math.sin(lonRad);
      // Flat-map: lon → x in [-1, 1], lat → y in [-0.5, 0.5], z tiny offset above the plane
      flat[i * 3 + 0] = d.lon / 180;
      flat[i * 3 + 1] = d.lat / 180;
      flat[i * 3 + 2] = 0.001;
      frp[i]  = d.frp;
      // Cheap per-point hash from lat/lon — stable across reloads of the same fire
      hash[i] = Math.abs(Math.sin(d.lat * 12.9898 + d.lon * 78.233)) * 43758.5453 % 1;
    }

    this.posAttr.needsUpdate     = true;
    this.flatPosAttr.needsUpdate = true;
    this.frpAttr.needsUpdate     = true;
    this.hashAttr.needsUpdate    = true;
    this.points.geometry.setDrawRange(0, n);
    this.flatMesh.geometry.setDrawRange(0, n);
  }

  /** Earth's daily spin angle — keeps fires anchored to their lat/lon. */
  setRotationY(angle: number) {
    this.points.rotation.y = angle;
  }

  setTime(t: number) {
    this.material.uniforms.uTime.value = t;
  }

  setOpacity(o: number) {
    this.material.uniforms.uOpacity.value = o;
  }

  setSizeBoost(s: number) {
    this.material.uniforms.uSizeBoost.value = s;
  }
}
