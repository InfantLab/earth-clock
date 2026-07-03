import * as THREE from "three";

/** Shape of public/data/volcanoes.json, written by build-volcanoes.mjs. */
export interface VolcanoRecord {
  id: number;
  name: string;
  lat: number;
  lon: number;
  type: string;
  country: string;
  lastEruptionYear: number | null;
}
export interface VolcanoData {
  volcanoes: VolcanoRecord[];
}

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Known volcano locations (Smithsonian GVP, ~1200 Holocene volcanoes), rendered as small
 * triangular "mountain" markers at r=1.0016. Static — bundled once by build-volcanoes.mjs,
 * not polled, so no freshness gating (same treatment as Plates/Coastlines).
 *
 * Markers default to a dim rock colour. `setErupting()` flags a subset (populated by
 * cross-referencing FIRMS thermal-anomaly positions against this list in the frontend —
 * see main.ts) with a hot pulsing colour, distinguishing "known volcano" from
 * "currently showing thermal activity" without a second data fetch.
 */
export class VolcanoLayer {
  readonly mesh: THREE.Group;
  /** Flat-map mirror: same shader, positions are (lon/180, lat/180, 0) on the 2×1 plane. */
  readonly flatMesh: THREE.Points;
  private readonly points: THREE.Points;
  private readonly material: THREE.ShaderMaterial;
  private readonly posAttr: THREE.BufferAttribute;
  private readonly flatPosAttr: THREE.BufferAttribute;
  private readonly eruptingAttr: THREE.BufferAttribute;
  private readonly hashAttr: THREE.BufferAttribute;

  /** volcano id -> index into the attribute buffers, for setErupting() lookups. */
  private idToIndex = new Map<number, number>();

  private static readonly MAX_POINTS = 1500;
  private readonly RADIUS = 1.0016;

  constructor() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(VolcanoLayer.MAX_POINTS * 3);
    const erupting  = new Float32Array(VolcanoLayer.MAX_POINTS);
    const hashes    = new Float32Array(VolcanoLayer.MAX_POINTS);

    this.posAttr      = new THREE.BufferAttribute(positions, 3);
    this.eruptingAttr = new THREE.BufferAttribute(erupting, 1);
    this.hashAttr     = new THREE.BufferAttribute(hashes, 1);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.eruptingAttr.setUsage(THREE.DynamicDrawUsage);
    this.hashAttr.setUsage(THREE.StaticDrawUsage);
    geometry.setAttribute("position", this.posAttr);
    geometry.setAttribute("aErupting", this.eruptingAttr);
    geometry.setAttribute("aHash", this.hashAttr);
    geometry.setDrawRange(0, 0);

    const flatGeom = new THREE.BufferGeometry();
    const flatPositions = new Float32Array(VolcanoLayer.MAX_POINTS * 3);
    this.flatPosAttr = new THREE.BufferAttribute(flatPositions, 3);
    this.flatPosAttr.setUsage(THREE.DynamicDrawUsage);
    flatGeom.setAttribute("position", this.flatPosAttr);
    flatGeom.setAttribute("aErupting", this.eruptingAttr);
    flatGeom.setAttribute("aHash", this.hashAttr);
    flatGeom.setDrawRange(0, 0);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: /* glsl */`
        attribute float aErupting;
        attribute float aHash;
        varying float vErupting;
        varying float vHash;
        void main() {
          vErupting = aErupting;
          vHash = aHash;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          // Floor raised from 5px — dormant markers were easy to lose against terrain
          // texture at default zoom (see ROADMAP "exaggerating subtle live events").
          gl_PointSize = mix(7.0, 12.0, aErupting);
        }
      `,
      fragmentShader: /* glsl */`
        uniform float uTime;
        varying float vErupting;
        varying float vHash;

        // Point-in-triangle test (edge-function sign trick) so markers read as small
        // mountains rather than generic dots.
        float edge(vec2 a, vec2 b, vec2 p) {
          return (p.x - a.x) * (b.y - a.y) - (p.y - a.y) * (b.x - a.x);
        }
        void main() {
          vec2 p = gl_PointCoord;
          vec2 top = vec2(0.5, 0.12), left = vec2(0.12, 0.88), right = vec2(0.88, 0.88);
          float d1 = edge(top, left, p);
          float d2 = edge(left, right, p);
          float d3 = edge(right, top, p);
          bool hasNeg = (d1 < 0.0) || (d2 < 0.0) || (d3 < 0.0);
          bool hasPos = (d1 > 0.0) || (d2 > 0.0) || (d3 > 0.0);
          if (hasNeg && hasPos) discard;

          vec3 dormant = vec3(0.55, 0.45, 0.42);
          vec3 hot     = vec3(1.0, 0.45, 0.1);
          float flicker = 0.8 + 0.2 * sin(uTime * 4.0 + vHash * 31.4);
          vec3 col = mix(dormant, hot * flicker, vErupting);

          // Dark stroke near the triangle's edges — keeps markers legible against terrain
          // colours close to the dormant fill (muted rock tones blend into brown/green land).
          float edgeDist = min(d1, min(d2, d3));
          float stroke = 1.0 - smoothstep(0.0, 0.05, edgeDist);
          col = mix(col, vec3(0.05, 0.03, 0.02), stroke * 0.85);

          gl_FragColor = vec4(col, mix(0.7, 1.0, vErupting));
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    this.points = new THREE.Points(geometry, this.material);

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.points);

    this.flatMesh = new THREE.Points(flatGeom, this.material);
  }

  /** Load the bundled static volcano list. Call once at startup. */
  load(data: VolcanoData) {
    const R = this.RADIUS;
    const n = Math.min(data.volcanoes.length, VolcanoLayer.MAX_POINTS);
    const pos     = this.posAttr.array as Float32Array;
    const hash    = this.hashAttr.array as Float32Array;
    const flat    = this.flatPosAttr.array as Float32Array;

    this.idToIndex.clear();
    for (let i = 0; i < n; i++) {
      const v = data.volcanoes[i];
      this.idToIndex.set(v.id, i);

      const lonRad = v.lon * Math.PI / 180;
      const latRad = v.lat * Math.PI / 180;
      const cosLat = Math.cos(latRad);
      pos[i * 3 + 0] =  R * cosLat * Math.cos(lonRad);
      pos[i * 3 + 1] =  R * Math.sin(latRad);
      pos[i * 3 + 2] = -R * cosLat * Math.sin(lonRad);

      flat[i * 3 + 0] = v.lon / 180;
      flat[i * 3 + 1] = v.lat / 180;
      flat[i * 3 + 2] = 0.001;

      hash[i] = Math.abs(Math.sin(v.lat * 12.9898 + v.lon * 78.233)) * 43758.5453 % 1;
    }

    this.posAttr.needsUpdate     = true;
    this.flatPosAttr.needsUpdate = true;
    this.hashAttr.needsUpdate    = true;
    this.points.geometry.setDrawRange(0, n);
    this.flatMesh.geometry.setDrawRange(0, n);
  }

  /** Flag a subset of volcanoes (by GVP id) as currently erupting — see FIRMS
   *  cross-reference in main.ts. Ids not in the set are cleared back to dormant. */
  setErupting(ids: ReadonlySet<number>) {
    const erupting = this.eruptingAttr.array as Float32Array;
    erupting.fill(0);
    for (const id of ids) {
      const i = this.idToIndex.get(id);
      if (i !== undefined) erupting[i] = 1;
    }
    this.eruptingAttr.needsUpdate = true;
  }

  /** Earth's daily spin angle — keeps volcanoes anchored to their lat/lon. */
  setRotationY(angle: number) {
    this.points.rotation.y = angle;
  }

  setTime(t: number) {
    this.material.uniforms.uTime.value = t;
  }
}
