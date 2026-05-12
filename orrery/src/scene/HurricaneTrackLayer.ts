import * as THREE from "three";
import type { KmlGeometry } from "../data/kmzParser";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Renders NHC track / cone geometry for active tropical cyclones:
 *   - Forecast cones: translucent yellow polygons (the 5-day uncertainty envelope).
 *   - Best track (past positions): solid white-blue polyline.
 *   - Forecast track (next 5 days): dashed white-yellow polyline.
 *
 * Geometry is provided as KML LineStrings + Polygons (one feed per storm) and converted
 * here to a single combined `BufferGeometry` per type. Rotates with Earth, like the
 * coastlines layer — sits at r=1.013, just above the hurricane sprite layer (1.012).
 */

export interface StormGeometry {
  stormId: string;
  /** Past/observed track (smooth polyline). */
  bestTrack?: KmlGeometry[];
  /** Forecast 5-day track (polyline). */
  forecastTrack?: KmlGeometry[];
  /** Forecast 5-day cone (polygon). */
  forecastCone?: KmlGeometry[];
}

export class HurricaneTrackLayer {
  readonly mesh: THREE.Group;
  private readonly bestTrackLines:   THREE.LineSegments;
  private readonly forecastLines:    THREE.LineSegments;
  private readonly coneMesh:         THREE.Mesh;

  private readonly RADIUS = 1.013;

  constructor() {
    // Past-track polyline (white-blue, solid).
    const bestMat = new THREE.LineBasicMaterial({
      color: 0xcfe6ff, transparent: true, opacity: 0.85, depthWrite: false,
    });
    this.bestTrackLines = new THREE.LineSegments(new THREE.BufferGeometry(), bestMat);

    // Forecast-track polyline (warm yellow, slightly dimmer).
    const fcastMat = new THREE.LineBasicMaterial({
      color: 0xfff0a0, transparent: true, opacity: 0.85, depthWrite: false,
    });
    this.forecastLines = new THREE.LineSegments(new THREE.BufferGeometry(), fcastMat);

    // Forecast cone mesh (translucent yellow polygon).
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0xfff0a0,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.coneMesh = new THREE.Mesh(new THREE.BufferGeometry(), coneMat);

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.coneMesh);       // cones first so lines draw on top
    this.mesh.add(this.bestTrackLines);
    this.mesh.add(this.forecastLines);
  }

  /** Replace geometry from one fetch. Pass an empty array to clear. */
  update(geometries: StormGeometry[]) {
    const bestSegments: number[] = [];
    const fcastSegments: number[] = [];
    // Polygons are triangulated as fans from the first vertex — fine for the small
    // (~40–80 vertex) cones NHC ships. Concave cones are rare in practice; fan fill
    // tolerates them visually because the overdraw is hidden by additive transparency.
    const conePositions: number[] = [];
    const coneIndices:   number[] = [];

    const R = this.RADIUS;
    const xyz = (lon: number, lat: number): [number, number, number] => {
      const lonRad = lon * Math.PI / 180;
      const latRad = lat * Math.PI / 180;
      const cosLat = Math.cos(latRad);
      return [R * cosLat * Math.cos(lonRad), R * Math.sin(latRad), -R * cosLat * Math.sin(lonRad)];
    };

    for (const sg of geometries) {
      if (sg.bestTrack)     emitLine(sg.bestTrack, bestSegments, xyz);
      if (sg.forecastTrack) emitLine(sg.forecastTrack, fcastSegments, xyz);
      if (sg.forecastCone)  emitFan(sg.forecastCone, conePositions, coneIndices, xyz);
    }

    swapBuffer(this.bestTrackLines.geometry, "position", new Float32Array(bestSegments), 3);
    swapBuffer(this.forecastLines.geometry,  "position", new Float32Array(fcastSegments), 3);
    swapBuffer(this.coneMesh.geometry,       "position", new Float32Array(conePositions), 3);
    this.coneMesh.geometry.setIndex(coneIndices.length ? coneIndices : null);
    this.coneMesh.geometry.computeBoundingSphere();
  }

  setRotationY(angle: number) {
    this.bestTrackLines.rotation.y = angle;
    this.forecastLines.rotation.y  = angle;
    this.coneMesh.rotation.y       = angle;
  }

  setOpacity(o: number) {
    (this.bestTrackLines.material as THREE.LineBasicMaterial).opacity = o;
    (this.forecastLines.material  as THREE.LineBasicMaterial).opacity = o;
    (this.coneMesh.material       as THREE.MeshBasicMaterial).opacity = 0.18 * o;
  }
}

function emitLine(
  parts: KmlGeometry[],
  out: number[],
  xyz: (lon: number, lat: number) => [number, number, number],
) {
  for (const p of parts) {
    if (p.type !== "line" || p.coords.length < 2) continue;
    for (let i = 0; i < p.coords.length - 1; i++) {
      const a = xyz(p.coords[i][0],     p.coords[i][1]);
      const b = xyz(p.coords[i + 1][0], p.coords[i + 1][1]);
      out.push(a[0], a[1], a[2], b[0], b[1], b[2]);
    }
  }
}

function emitFan(
  parts: KmlGeometry[],
  positions: number[],
  indices: number[],
  xyz: (lon: number, lat: number) => [number, number, number],
) {
  for (const p of parts) {
    if (p.type !== "polygon" || p.coords.length < 3) continue;
    const baseIndex = positions.length / 3;
    for (const [lon, lat] of p.coords) {
      const v = xyz(lon, lat);
      positions.push(v[0], v[1], v[2]);
    }
    // Fan triangulation: vertex 0 + edges between adjacent verts.
    for (let i = 1; i < p.coords.length - 1; i++) {
      indices.push(baseIndex, baseIndex + i, baseIndex + i + 1);
    }
  }
}

function swapBuffer(
  geom: THREE.BufferGeometry,
  name: string,
  data: Float32Array,
  itemSize: number,
) {
  const existing = geom.getAttribute(name);
  if (existing && (existing as THREE.BufferAttribute).array.length === data.length) {
    (existing as THREE.BufferAttribute).array.set(data);
    (existing as THREE.BufferAttribute).needsUpdate = true;
  } else {
    geom.setAttribute(name, new THREE.BufferAttribute(data, itemSize));
  }
}
