import * as THREE from "three";

/**
 * Earth-clock "hour hands". Two visual modes:
 *
 *   • **3D (globe view)**: a thin line from Earth's centre extending just past the surface
 *     in the sun direction (gold), and another in the moon direction (pale blue). The
 *     inside-Earth portion is depth-occluded naturally, so each line looks like a needle
 *     sticking out of the planet pointing where its body is. Under time-warp the sun-line
 *     sweeps a full rotation per simulated day — literally the hour hand.
 *
 *   • **2D (flat map)**: a coloured disc at the sub-solar point (gold) and sub-lunar point
 *     (pale silver) on the equirectangular plane. Same conceptual move; the dot's longitude
 *     is the "current hour" the sun is over.
 *
 * Lives in the inertial world frame in both modes — no axial-tilt or daily-rotation
 * adjustments. main.ts feeds it the already-computed sun/moon world vectors and the
 * sub-solar / sub-lunar geographic coordinates each frame.
 */
export class RadiusVectors {
  /** 3D meshes — two lines parented under a group added to the main scene. */
  readonly mesh: THREE.Group;
  /** Flat-map meshes — two coloured discs parented under a group added to FlatMap.scene. */
  readonly flatMesh: THREE.Group;

  private readonly sunLine: THREE.Line;
  private readonly moonLine: THREE.Line;
  private readonly sunDot: THREE.Mesh;
  private readonly moonDot: THREE.Mesh;

  private static readonly SUN_COLOR  = 0xffcc44;
  private static readonly MOON_COLOR = 0xc8d8f0;

  constructor() {
    this.mesh = new THREE.Group();
    this.flatMesh = new THREE.Group();

    // ---- 3D lines ----
    // depthWrite=false so transparent layers above don't get fooled; depthTest=true so the
    // inside-Earth portion of the line is naturally hidden by the opaque globe.
    this.sunLine  = makeLine(RadiusVectors.SUN_COLOR,  0.9);
    this.moonLine = makeLine(RadiusVectors.MOON_COLOR, 0.75);
    this.mesh.add(this.sunLine, this.moonLine);

    // ---- 2D flat-map dots ----
    // Small flat circles positioned on the 2×1 plane at (lon/180, lat/180, +0.01).
    // z=+0.01 keeps them just above the plane's other content (clouds, coastlines) without
    // poking through Three.js's transparent sort against the day/night texture beneath.
    this.sunDot  = makeDot(RadiusVectors.SUN_COLOR,  0.95);
    this.moonDot = makeDot(RadiusVectors.MOON_COLOR, 0.80);
    this.flatMesh.add(this.sunDot, this.moonDot);
  }

  /** Sun direction in world space (any non-zero magnitude — normalised inside). */
  setSunDirection(dir: THREE.Vector3) {
    updateLineTip(this.sunLine, dir);
  }

  /** Moon position in world space (Earth radii). Line points in the same direction at fixed
   *  length so the moon and sun pointers read with similar visual weight. */
  setMoonPosition(pos: THREE.Vector3) {
    updateLineTip(this.moonLine, pos);
  }

  /** Sub-solar lat/lon in degrees — drives the flat-map gold dot. */
  setSubSolar(latDeg: number, lonDeg: number) {
    this.sunDot.position.set(lonDeg / 180, latDeg / 180, 0.01);
  }

  /** Sub-lunar lat/lon in degrees — drives the flat-map silver dot. */
  setSubLunar(latDeg: number, lonDeg: number) {
    this.moonDot.position.set(lonDeg / 180, latDeg / 180, 0.01);
  }

  /** Toggle both the 3D lines and the flat-map dots. */
  setVisible(v: boolean) {
    this.mesh.visible = v;
    this.flatMesh.visible = v;
  }
}

// ---- helpers ----

/** Length (Earth radii) the 3D lines extend from origin — tip ~50 % above surface. */
const LINE_LENGTH = 1.5;
/** Radius of the flat-map dots in plane units (the 2×1 plane is 2 wide × 1 tall). */
const DOT_RADIUS = 0.018;

function makeLine(color: number, opacity: number): THREE.Line {
  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array([0, 0, 0, LINE_LENGTH, 0, 0]), 3));
  const mat = new THREE.LineBasicMaterial({
    color, transparent: true, opacity, depthWrite: false,
  });
  const line = new THREE.Line(geom, mat);
  // The line's bounding sphere is tiny by default; frustum-culling occasionally hides it
  // when the tip swings outside that sphere. Disabling is cheap (one mesh, two vertices).
  line.frustumCulled = false;
  return line;
}

function updateLineTip(line: THREE.Line, dir: THREE.Vector3) {
  const len = dir.length();
  if (len < 1e-6) return; // degenerate — leave previous direction
  const k = LINE_LENGTH / len; // tip = unit(dir) × LINE_LENGTH
  const positions = line.geometry.attributes.position.array as Float32Array;
  positions[3] = dir.x * k;
  positions[4] = dir.y * k;
  positions[5] = dir.z * k;
  line.geometry.attributes.position.needsUpdate = true;
}

function makeDot(color: number, opacity: number): THREE.Mesh {
  const geom = new THREE.CircleGeometry(DOT_RADIUS, 16);
  const mat = new THREE.MeshBasicMaterial({
    color, transparent: true, opacity, depthWrite: false,
  });
  return new THREE.Mesh(geom, mat);
}
