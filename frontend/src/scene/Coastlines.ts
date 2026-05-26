import * as THREE from "three";

// ---- Minimal TopoJSON shape (matches Natural Earth's earth-topo.json) ----
interface Topology {
  type: "Topology";
  transform: { scale: [number, number]; translate: [number, number] };
  objects: Record<string, GeometryCollection>;
  arcs: number[][][]; // arcs[i] = [[dx, dy], [dx, dy], ...] delta-encoded integers
}
interface GeometryCollection {
  type: "GeometryCollection";
  geometries: Geometry[];
}
type Geometry = LineString | MultiLineString;
interface LineString { type: "LineString"; arcs: number[]; }
interface MultiLineString { type: "MultiLineString"; arcs: number[][]; }

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Render Natural Earth coastlines as a single LineSegments mesh on the globe surface.
 *
 * TopoJSON delta-encodes arcs as integer (dx, dy) pairs that are decoded by cumulative-summing
 * then applying the topology's affine transform. Each coastline geometry is a chain of arc
 * references (negative indices = traverse reversed). The seam at the antimeridian is implicitly
 * handled by rendering in 3D — adjacent (lon=179, lon=-179) points are physically close on the
 * sphere, so the line is short rather than wrapping across the equirectangular map.
 */
export class Coastlines {
  readonly mesh: THREE.Group;
  /** Flat-map version: same coastlines rendered in plane (u, v) coords for the FlatMap scene. */
  readonly flatMesh: THREE.LineSegments;
  private readonly lines: THREE.LineSegments;
  private readonly material: THREE.LineBasicMaterial;
  private readonly flatMaterial: THREE.LineBasicMaterial;

  constructor() {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute([], 3));

    this.material = new THREE.LineBasicMaterial({
      color: 0xc8d4e8,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });

    this.lines = new THREE.LineSegments(geometry, this.material);

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.lines);

    // Flat-map coastlines: same decoded TopoJSON, projected to (u, v) on the 2×1 plane.
    // Stronger opacity than the globe version because there's no Phong-shaded surface
    // beneath to compete for visual weight.
    const flatGeom = new THREE.BufferGeometry();
    flatGeom.setAttribute("position", new THREE.Float32BufferAttribute([], 3));
    this.flatMaterial = new THREE.LineBasicMaterial({
      color: 0xb0c0e0,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    this.flatMesh = new THREE.LineSegments(flatGeom, this.flatMaterial);
  }

  /** Build LineSegments from one of the topology's GeometryCollections (e.g. "coastline_50m"). */
  loadFromTopology(topo: Topology, objectName: string, radius = 1.002) {
    const obj = topo.objects[objectName];
    if (!obj) throw new Error(`Coastlines: object "${objectName}" not in topology`);
    const { scale, translate } = topo.transform;

    // Decode one arc (delta-encoded). For negative indices, reverse the decoded points.
    const decodeArc = (idx: number): number[][] => {
      const reverse = idx < 0;
      const arc = topo.arcs[reverse ? ~idx : idx];
      let x = 0, y = 0;
      const pts: number[][] = [];
      for (const [dx, dy] of arc) {
        x += dx; y += dy;
        pts.push([x * scale[0] + translate[0], y * scale[1] + translate[1]]);
      }
      return reverse ? pts.reverse() : pts;
    };

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

    // Walk a chain of arcs into a single line strip, then emit LineSegments pairs for both
    // the sphere (xyz) and the flat map (u, v at z=0).
    const emitChain = (arcIndices: number[]) => {
      let chain: number[][] = [];
      for (const ai of arcIndices) {
        const arcPts = decodeArc(ai);
        if (chain.length === 0) chain = arcPts;
        else chain.push(...arcPts.slice(1)); // skip duplicate at junction
      }
      for (let i = 1; i < chain.length; i++) {
        const lonA = chain[i - 1][0], latA = chain[i - 1][1];
        const lonB = chain[i][0],     latB = chain[i][1];

        // Sphere version
        lonLatToXYZ(lonA, latA, a);
        lonLatToXYZ(lonB, latB, b);
        positions.push(a[0], a[1], a[2], b[0], b[1], b[2]);

        // Flat-map version: skip segments that span the antimeridian, otherwise they'd
        // draw a horizontal line straight across the map (visually wrong even though
        // technically correct since lon=179 → lon=-179 wraps). Real coastlines almost
        // never cross ±180°; the handful that do (Fiji, Wrangel Island, Aleutians) are
        // small. A future v2 can split these properly at the seam.
        if (Math.abs(lonB - lonA) > 180) continue;
        flatPositions.push(lonA / 180, latA / 180, 0,
                           lonB / 180, latB / 180, 0);
      }
    };

    for (const g of obj.geometries) {
      if (g.type === "LineString") {
        emitChain(g.arcs);
      } else if (g.type === "MultiLineString") {
        for (const arcGroup of g.arcs) emitChain(arcGroup);
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    this.lines.geometry.dispose();
    this.lines.geometry = geom;

    const flatGeom = new THREE.BufferGeometry();
    flatGeom.setAttribute("position", new THREE.Float32BufferAttribute(flatPositions, 3));
    this.flatMesh.geometry.dispose();
    this.flatMesh.geometry = flatGeom;
  }

  /** Match Earth's daily spin so coastlines stay glued to the ground. */
  setRotationY(angle: number) {
    this.lines.rotation.y = angle;
  }

  setOpacity(o: number) {
    this.material.opacity = o;
  }
  setColor(hex: number) {
    this.material.color.setHex(hex);
  }
}
