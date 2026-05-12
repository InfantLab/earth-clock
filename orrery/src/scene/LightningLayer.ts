import * as THREE from "three";
import type { LightningStrike } from "../data/lightningLoader";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Live lightning strikes rendered as bright additive flashes at r=1.0020 (just above the
 * surface, below the cloud shell). Each strike spawns as a hot white-blue dot and fades
 * over ~600 ms — long enough to be noticeable, short enough that a busy storm reads as
 * a constellation of twinkles rather than a permanent rash of dots.
 *
 * Strikes are buffered in a circular array of fixed size. When the buffer is full, the
 * oldest slot is overwritten; that strike has long since faded to invisible, so the user
 * never sees the recycle. Sized for ~50 strikes/sec (busy global storm rate) × 0.6 s
 * lifetime + headroom ≈ 1024 slots.
 *
 * Strikes are at fixed geographic lat/lon, so the mesh shares Earth's axial tilt and
 * daily spin via `setRotationY` (same pattern as FireLayer and HurricaneLayer).
 */
export class LightningLayer {
  readonly mesh: THREE.Group;
  /** Flat-map mirror: same shader, positions are (lon/180, lat/180, 0) on the 2×1 plane. */
  readonly flatMesh: THREE.Points;
  private readonly points: THREE.Points;
  private readonly material: THREE.ShaderMaterial;
  private readonly posAttr: THREE.BufferAttribute;
  private readonly flatPosAttr: THREE.BufferAttribute;
  private readonly spawnAttr: THREE.BufferAttribute;
  private readonly polarityAttr: THREE.BufferAttribute;
  private writeIndex = 0;
  private filled = false;

  private static readonly MAX_STRIKES = 1024;
  /** Strike lifetime in seconds (passed into shader as `uLifetime`). */
  private static readonly LIFETIME = 0.6;
  private readonly RADIUS = 1.0020;

  constructor() {
    const geometry = new THREE.BufferGeometry();
    const positions  = new Float32Array(LightningLayer.MAX_STRIKES * 3);
    const spawnTimes = new Float32Array(LightningLayer.MAX_STRIKES);
    const polarities = new Float32Array(LightningLayer.MAX_STRIKES);
    // Initialise spawn times to -Infinity so unused slots stay invisible until they're written.
    spawnTimes.fill(-1e9);

    this.posAttr      = new THREE.BufferAttribute(positions, 3);
    this.spawnAttr    = new THREE.BufferAttribute(spawnTimes, 1);
    this.polarityAttr = new THREE.BufferAttribute(polarities, 1);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.spawnAttr.setUsage(THREE.DynamicDrawUsage);
    this.polarityAttr.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", this.posAttr);
    geometry.setAttribute("aSpawn", this.spawnAttr);
    geometry.setAttribute("aPolarity", this.polarityAttr);
    // Always draw the full buffer — the shader culls dead strikes via alpha=0.
    geometry.setDrawRange(0, LightningLayer.MAX_STRIKES);

    // Flat-map geometry: own position buffer, shares spawn + polarity with sphere.
    const flatGeom = new THREE.BufferGeometry();
    const flatPositions = new Float32Array(LightningLayer.MAX_STRIKES * 3);
    this.flatPosAttr = new THREE.BufferAttribute(flatPositions, 3);
    this.flatPosAttr.setUsage(THREE.DynamicDrawUsage);
    flatGeom.setAttribute("position", this.flatPosAttr);
    flatGeom.setAttribute("aSpawn", this.spawnAttr);
    flatGeom.setAttribute("aPolarity", this.polarityAttr);
    flatGeom.setDrawRange(0, LightningLayer.MAX_STRIKES);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime:     { value: 0 },
        uLifetime: { value: LightningLayer.LIFETIME },
        uOpacity:  { value: 1.0 },
      },
      vertexShader: /* glsl */`
        attribute float aSpawn;
        attribute float aPolarity;
        uniform float uTime;
        uniform float uLifetime;
        varying float vAge01;
        varying float vPolarity;
        void main() {
          float age = uTime - aSpawn;
          vAge01 = clamp(age / uLifetime, 0.0, 1.0);
          vPolarity = aPolarity;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          // Size: pops to ~14 px on spawn, fades to ~5 px. Dead strikes shrink to ~0 so
          // even if alpha were misread they'd be invisible.
          float size = mix(14.0, 5.0, vAge01);
          if (vAge01 >= 1.0) size = 0.0;
          gl_PointSize = size;
        }
      `,
      fragmentShader: /* glsl */`
        varying float vAge01;
        varying float vPolarity;
        uniform float uOpacity;
        void main() {
          if (vAge01 >= 1.0) discard;

          vec2 q = gl_PointCoord - 0.5;
          float r = length(q);
          if (r > 0.5) discard;

          // Soft disc with a hot core. Tight gaussian-ish falloff so strikes look like
          // pinpoint flashes, not blobs.
          float falloff = exp(-r * r * 18.0);

          // Polarity tint: positive strikes lean warm white, negative lean cool blue-white.
          // Most strikes have polarity 0 (unknown) → render as neutral white-blue.
          vec3 cool = vec3(0.85, 0.95, 1.00);
          vec3 warm = vec3(1.00, 0.96, 0.88);
          vec3 col  = mix(cool, warm, smoothstep(0.0, 1.0, vPolarity * 0.5 + 0.5));

          // Age curve: fast bright spike then exponential decay. Initial flash is harsh,
          // tail is gentle — same shape as a real lightning return-stroke afterglow.
          float age = vAge01;
          float intensity = (age < 0.08)
            ? mix(0.6, 1.0, age / 0.08)     // sharp rise to peak
            : exp(-(age - 0.08) * 6.0);     // exponential fade

          float alpha = falloff * intensity * uOpacity;
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

    this.flatMesh = new THREE.Points(flatGeom, this.material);
  }

  /**
   * Add a strike to the circular buffer. The spawn time is the **animation-frame time**
   * (the same value passed into `setTime()`), not wall-clock — so the shader's `uTime`
   * comparison sees consistent values regardless of clock skew between Blitzortung and
   * the browser.
   */
  addStrike(strike: LightningStrike, animTime: number) {
    const R = this.RADIUS;
    const lonRad = strike.lon * Math.PI / 180;
    const latRad = strike.lat * Math.PI / 180;
    const cosLat = Math.cos(latRad);

    const i = this.writeIndex;
    const pos      = this.posAttr.array as Float32Array;
    const flat     = this.flatPosAttr.array as Float32Array;
    const spawn    = this.spawnAttr.array as Float32Array;
    const polarity = this.polarityAttr.array as Float32Array;
    pos[i * 3 + 0] =  R * cosLat * Math.cos(lonRad);
    pos[i * 3 + 1] =  R * Math.sin(latRad);
    pos[i * 3 + 2] = -R * cosLat * Math.sin(lonRad);
    flat[i * 3 + 0] = strike.lon / 180;
    flat[i * 3 + 1] = strike.lat / 180;
    flat[i * 3 + 2] = 0.003;
    spawn[i]       = animTime;
    polarity[i]    = strike.polarity;

    this.posAttr.needsUpdate      = true;
    this.flatPosAttr.needsUpdate  = true;
    this.spawnAttr.needsUpdate    = true;
    this.polarityAttr.needsUpdate = true;

    this.writeIndex = (this.writeIndex + 1) % LightningLayer.MAX_STRIKES;
    if (this.writeIndex === 0) this.filled = true;
  }

  /** Earth's daily spin — keeps strikes anchored to their geographic coordinates. */
  setRotationY(angle: number) {
    this.points.rotation.y = angle;
  }

  setTime(t: number) {
    this.material.uniforms.uTime.value = t;
  }

  setOpacity(o: number) {
    this.material.uniforms.uOpacity.value = o;
  }

  /** Approximate count of strikes currently visible (i.e. spawned within `LIFETIME` seconds). */
  liveStrikeCount(now: number): number {
    const spawn = this.spawnAttr.array as Float32Array;
    let n = 0;
    const limit = this.filled ? LightningLayer.MAX_STRIKES : this.writeIndex;
    for (let i = 0; i < limit; i++) {
      if (now - spawn[i] < LightningLayer.LIFETIME) n++;
    }
    return n;
  }
}
