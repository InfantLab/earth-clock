import * as THREE from "three";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

/** Shape of public/data/plates.json, written by build-plates.mjs — a flat list of
 *  boundary line chains, each an array of [lon, lat] pairs. Plain lon/lat coordinates
 *  (no TopoJSON arc-decoding needed, unlike Coastlines' Natural Earth source). */
interface PlatesData {
  lines: Array<Array<[number, number]>>;
}

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Tectonic plate boundaries (Peter Bird's PB2002 dataset), rendered with Three's "fat
 * lines" (LineSegments2/LineMaterial) rather than plain LineSegments/LineBasicMaterial —
 * regular WebGL line rendering is capped at 1px on virtually every desktop GL driver
 * (LineBasicMaterial.linewidth is silently ignored), so a fat-line material is the only
 * way to get a genuinely thicker stroke. linewidth is in screen pixels, which needs the
 * renderer's viewport size fed in via setResolution() — call it once at startup and again
 * on every window resize (see main.ts).
 *
 * Effectively static on human timescales, so this is a bundled asset (public/data/plates.json,
 * generated once by build-plates.mjs) rather than a live feed — no freshness gating needed.
 */
export class Plates {
  readonly mesh: THREE.Group;
  /** Flat-map version: same boundaries rendered in plane (u, v) coords for the FlatMap scene. */
  readonly flatMesh: LineSegments2;
  private readonly lines: LineSegments2;
  private readonly material: LineMaterial;
  private readonly flatMaterial: LineMaterial;

  constructor() {
    const geometry = new LineSegmentsGeometry();

    // Warm amber/terracotta — distinguishes plate boundaries from the cool-white coastlines.
    // linewidth is in screen pixels (requires setResolution() to be kept in sync with the
    // viewport — see class doc comment).
    this.material = new LineMaterial({
      color: 0xd97a3d,
      linewidth: 2,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });

    this.lines = new LineSegments2(geometry, this.material);

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.lines);

    const flatGeom = new LineSegmentsGeometry();
    this.flatMaterial = new LineMaterial({
      color: 0xe08a4d,
      linewidth: 2.5,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });
    this.flatMesh = new LineSegments2(flatGeom, this.flatMaterial);
  }

  /** Build LineSegments2 geometry from the bundled plates.json. */
  load(data: PlatesData, radius = 1.0018) {
    const lonLatToXYZ = (lon: number, lat: number, out: [number, number, number]) => {
      const lonRad = lon * Math.PI / 180;
      const latRad = lat * Math.PI / 180;
      const cosLat = Math.cos(latRad);
      // Match Three.js SphereGeometry's default UV winding: Greenwich (lon=0) at +X,
      // east going CCW from above (lon=+90 lands at -Z).
      out[0] =  radius * cosLat * Math.cos(lonRad);
      out[1] =  radius * Math.sin(latRad);
      out[2] = -radius * cosLat * Math.sin(lonRad);
    };

    const positions: number[] = [];
    const flatPositions: number[] = []; // (x, y, z=0) on the 2×1 plane
    const a: [number, number, number] = [0, 0, 0];
    const b: [number, number, number] = [0, 0, 0];

    for (const chain of data.lines) {
      for (let i = 1; i < chain.length; i++) {
        const [lonA, latA] = chain[i - 1];
        const [lonB, latB] = chain[i];

        lonLatToXYZ(lonA, latA, a);
        lonLatToXYZ(lonB, latB, b);
        positions.push(a[0], a[1], a[2], b[0], b[1], b[2]);

        // Skip segments that span the antimeridian on the flat map — same treatment as
        // Coastlines (a handful of boundaries near the Aleutians/Kamchatka cross ±180°).
        if (Math.abs(lonB - lonA) > 180) continue;
        flatPositions.push(lonA / 180, latA / 180, 0,
                           lonB / 180, latB / 180, 0);
      }
    }

    const geom = new LineSegmentsGeometry();
    geom.setPositions(positions);
    this.lines.geometry.dispose();
    this.lines.geometry = geom;

    const flatGeom = new LineSegmentsGeometry();
    flatGeom.setPositions(flatPositions);
    this.flatMesh.geometry.dispose();
    this.flatMesh.geometry = flatGeom;
  }

  /** Keep the fat-line shader's screen-space linewidth correct as the viewport changes.
   *  Call once at startup with the renderer's initial size, and again on every resize. */
  setResolution(width: number, height: number) {
    this.material.resolution.set(width, height);
    this.flatMaterial.resolution.set(width, height);
  }

  /** Match Earth's daily spin so plate boundaries stay glued to the ground. */
  setRotationY(angle: number) {
    this.lines.rotation.y = angle;
  }
}
