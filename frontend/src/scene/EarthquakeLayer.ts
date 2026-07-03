import * as THREE from "three";
import type { EarthquakeGrid } from "../data/earthquakeLoader";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Recent earthquakes (past 7 days, USGS) rendered as a point cloud at r=1.0017
 * (just above the surface, alongside FireLayer/HurricaneLayer).
 *
 * - Magnitude drives point size (linear — Richter/moment magnitude is already a
 *   log scale, unlike FireLayer's raw-watt FRP which needs its own compression).
 * - Depth drives color: shallow (crust, <70 km) = red, deep (subduction, >300 km) = blue.
 * - Opacity fades linearly to 0 across the 7-day feed window (`uNow` minus each event's
 *   `aEventTime`), and events under a day old get a settling pulse that decays with age.
 * - `uNow` is real wall-clock ms, not simulatedTime: this layer is gated on/off entirely
 *   by the app's live-data freshness check (same treatment as Fires/Hurricanes), so it
 *   never needs to reconcile decay with time-warp.
 */
export class EarthquakeLayer {
  readonly mesh: THREE.Group;
  /** Flat-map mirror: same shader, positions are (lon/180, lat/180, 0) on the 2×1 plane. */
  readonly flatMesh: THREE.Points;
  private readonly points: THREE.Points;
  private readonly material: THREE.ShaderMaterial;
  private readonly posAttr: THREE.BufferAttribute;
  private readonly flatPosAttr: THREE.BufferAttribute;
  private readonly magAttr: THREE.BufferAttribute;
  private readonly depthAttr: THREE.BufferAttribute;
  private readonly timeAttr: THREE.BufferAttribute;
  private readonly hashAttr: THREE.BufferAttribute;

  private static readonly MAX_POINTS = 20000;
  private readonly RADIUS = 1.0017;

  constructor() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(EarthquakeLayer.MAX_POINTS * 3);
    const mags      = new Float32Array(EarthquakeLayer.MAX_POINTS);
    const depths    = new Float32Array(EarthquakeLayer.MAX_POINTS);
    const times     = new Float32Array(EarthquakeLayer.MAX_POINTS);
    const hashes    = new Float32Array(EarthquakeLayer.MAX_POINTS);

    this.posAttr   = new THREE.BufferAttribute(positions, 3);
    this.magAttr   = new THREE.BufferAttribute(mags, 1);
    this.depthAttr = new THREE.BufferAttribute(depths, 1);
    this.timeAttr  = new THREE.BufferAttribute(times, 1);
    this.hashAttr  = new THREE.BufferAttribute(hashes, 1);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.magAttr.setUsage(THREE.DynamicDrawUsage);
    this.depthAttr.setUsage(THREE.DynamicDrawUsage);
    this.timeAttr.setUsage(THREE.DynamicDrawUsage);
    this.hashAttr.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", this.posAttr);
    geometry.setAttribute("aMag", this.magAttr);
    geometry.setAttribute("aDepthKm", this.depthAttr);
    geometry.setAttribute("aEventTime", this.timeAttr);
    geometry.setAttribute("aHash", this.hashAttr);
    geometry.setDrawRange(0, 0);

    // Flat-map geometry — its own position buffer, but shares the mag/depth/time/hash
    // attributes so the single update() loop fills both at once (same trick as FireLayer).
    const flatGeom = new THREE.BufferGeometry();
    const flatPositions = new Float32Array(EarthquakeLayer.MAX_POINTS * 3);
    this.flatPosAttr = new THREE.BufferAttribute(flatPositions, 3);
    this.flatPosAttr.setUsage(THREE.DynamicDrawUsage);
    flatGeom.setAttribute("position", this.flatPosAttr);
    flatGeom.setAttribute("aMag", this.magAttr);
    flatGeom.setAttribute("aDepthKm", this.depthAttr);
    flatGeom.setAttribute("aEventTime", this.timeAttr);
    flatGeom.setAttribute("aHash", this.hashAttr);
    flatGeom.setDrawRange(0, 0);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime:    { value: 0 },
        uNow:     { value: Date.now() },
        uOpacity: { value: 1.0 },
      },
      vertexShader: /* glsl */`
        attribute float aMag;
        attribute float aDepthKm;
        attribute float aEventTime;
        attribute float aHash;
        uniform float uNow;
        varying float vMag;
        varying float vDepthKm;
        varying float vFade;
        varying float vAgeDays;
        varying float vHash;
        void main() {
          vMag = aMag;
          vDepthKm = aDepthKm;
          vHash = aHash;

          float ageMs = max(uNow - aEventTime, 0.0);
          vAgeDays = ageMs / 86400000.0;
          vFade = clamp(1.0 - vAgeDays / 7.0, 0.0, 1.0);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          // Magnitude is already log-scale (Richter/moment), so size scales linearly
          // with it rather than needing FireLayer's sqrt compression for raw-watt FRP.
          // Floor raised from 2px so the common M1-3 case doesn't disappear against
          // brighter layers (Fires) sharing the globe — see ROADMAP "exaggerating
          // subtle live events".
          float s = 4.0 + 10.0 * clamp((aMag - 1.0) / 7.0, 0.0, 1.0);
          gl_PointSize = s;
        }
      `,
      fragmentShader: /* glsl */`
        uniform float uTime;
        uniform float uOpacity;
        varying float vMag;
        varying float vDepthKm;
        varying float vFade;
        varying float vAgeDays;
        varying float vHash;
        void main() {
          // Soft circular sprite with a brighter core
          vec2 q = gl_PointCoord - 0.5;
          float d = length(q);
          if (d > 0.5) discard;

          // Depth-driven color ramp: shallow crust (red) -> mid crust (amber) -> deep
          // subduction-zone events (blue).
          float t = clamp(vDepthKm / 300.0, 0.0, 1.0);
          vec3 shallow = vec3(0.95, 0.20, 0.15);
          vec3 mid     = vec3(0.95, 0.65, 0.15);
          vec3 deep    = vec3(0.20, 0.40, 0.95);
          vec3 col = mix(shallow, mid, smoothstep(0.0, 0.35, t));
          col      = mix(col, deep, smoothstep(0.30, 1.0, t));

          float core = smoothstep(0.45, 0.0, d);
          col = mix(col, vec3(1.0, 0.95, 0.9), core * 0.35);

          // Events under a day old settle with a decaying pulse; older events sit steady.
          float pulseAmount = clamp(1.0 - vAgeDays, 0.0, 1.0);
          float pulse = 1.0 + 0.35 * pulseAmount * sin(uTime * 5.0 + vHash * 31.4);

          float falloff = smoothstep(0.5, 0.05, d);
          float alpha = falloff * vFade * uOpacity * pulse;

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
    // only gl_PointCoord + attribute/uniform data, so it works in any camera frame).
    this.flatMesh = new THREE.Points(flatGeom, this.material);
  }

  /** Replace earthquake data from a fresh USGS fetch. */
  update(grid: EarthquakeGrid) {
    const R = this.RADIUS;
    const n = Math.min(grid.events.length, EarthquakeLayer.MAX_POINTS);
    const pos   = this.posAttr.array as Float32Array;
    const mag   = this.magAttr.array as Float32Array;
    const depth = this.depthAttr.array as Float32Array;
    const time  = this.timeAttr.array as Float32Array;
    const hash  = this.hashAttr.array as Float32Array;

    const flat = this.flatPosAttr.array as Float32Array;
    for (let i = 0; i < n; i++) {
      const e = grid.events[i];
      const lonRad = e.lon * Math.PI / 180;
      const latRad = e.lat * Math.PI / 180;
      const cosLat = Math.cos(latRad);
      // Three.js SphereGeometry convention: Greenwich at +X, +90°E at -Z (east CCW from above)
      pos[i * 3 + 0] =  R * cosLat * Math.cos(lonRad);
      pos[i * 3 + 1] =  R * Math.sin(latRad);
      pos[i * 3 + 2] = -R * cosLat * Math.sin(lonRad);
      // Flat-map: lon → x in [-1, 1], lat → y in [-0.5, 0.5], z tiny offset above the plane
      flat[i * 3 + 0] = e.lon / 180;
      flat[i * 3 + 1] = e.lat / 180;
      flat[i * 3 + 2] = 0.001;
      mag[i]   = e.mag;
      depth[i] = e.depthKm;
      time[i]  = e.timeMs;
      // Cheap per-point hash from lat/lon — stable across reloads of the same event
      hash[i] = Math.abs(Math.sin(e.lat * 12.9898 + e.lon * 78.233)) * 43758.5453 % 1;
    }

    this.posAttr.needsUpdate     = true;
    this.flatPosAttr.needsUpdate = true;
    this.magAttr.needsUpdate     = true;
    this.depthAttr.needsUpdate   = true;
    this.timeAttr.needsUpdate    = true;
    this.hashAttr.needsUpdate    = true;
    this.points.geometry.setDrawRange(0, n);
    this.flatMesh.geometry.setDrawRange(0, n);
  }

  /** Earth's daily spin angle — keeps events anchored to their lat/lon. */
  setRotationY(angle: number) {
    this.points.rotation.y = angle;
  }

  /** Free-running animation clock (seconds) driving the settling pulse phase. */
  setTime(t: number) {
    this.material.uniforms.uTime.value = t;
  }

  /** Real wall-clock epoch ms driving the age-based fade. Deliberately NOT
   *  simulatedTime — this layer is gated on/off by live-data freshness instead
   *  of trying to make decay track time-warp (see class doc comment). */
  setNow(nowMs: number) {
    this.material.uniforms.uNow.value = nowMs;
  }

  setOpacity(o: number) {
    this.material.uniforms.uOpacity.value = o;
  }
}
