import * as THREE from "three";

/**
 * Marker pinned to a (lat, lon) on Earth. Two representations:
 *   - `meshGlobe`: a 3D "pin" — a stem rising radially from the surface with a sphere head
 *     floating above. The group is oriented so its local +Y axis matches the outward surface
 *     normal at the pinned location, so the stem stands up vertically from the planet wherever
 *     it's placed. Attached to the rotating earth mesh, so it stays glued to (lat, lon) as
 *     Earth spins.
 *   - `meshFlat`:  small filled disc + ring on the equirectangular plane.
 *
 * Caller (main.ts) parents each into the appropriate scene. `setLocation()` updates both.
 */
const Y_UP = new THREE.Vector3(0, 1, 0);
const PIN_COLOR = 0xffd34a; // warm yellow-amber — reads against both day and night surface

export class LocationPin {
  readonly meshGlobe: THREE.Group;
  readonly meshFlat: THREE.Group;
  private latDeg = 0;
  private lonDeg = 0;

  constructor() {
    // ─── 3D pin ────────────────────────────────────────────────────────────
    // Group sits AT the surface point (r=1.0 in the rotating earth's local frame); its
    // local +Y is rotated to point outward, so children at (0, h, 0) extend away from
    // the planet. Stem and head are children of this group.
    this.meshGlobe = new THREE.Group();
    this.meshGlobe.visible = false;

    // Stem: thin cylinder from the surface (y=0) to y=0.045. Cylinder geometry's local
    // origin is at its centre, so we offset upward by half its height.
    const stemHeight = 0.045;
    const stemGeom = new THREE.CylinderGeometry(0.004, 0.004, stemHeight, 16);
    const stemMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.95 });
    const stem = new THREE.Mesh(stemGeom, stemMat);
    stem.position.y = stemHeight / 2;
    this.meshGlobe.add(stem);

    // Head: a sphere at the top of the stem. Bigger than the previous marker so it's
    // clearly visible at default zoom; emissive look comes from pure-colour MeshBasic.
    const headGeom = new THREE.SphereGeometry(0.020, 24, 16);
    const headMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.95 });
    const head = new THREE.Mesh(headGeom, headMat);
    head.position.y = stemHeight + 0.020;
    this.meshGlobe.add(head);

    // Ring at the base: helps mark the exact surface point even when the stem is tilted
    // toward the camera at oblique viewing angles.
    const ringGeom = new THREE.TorusGeometry(0.012, 0.0025, 12, 32);
    const ringMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.85 });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 2; // lay flat on the surface (torus default is XY plane)
    ring.position.y = 0.001;       // a hair above to avoid z-fighting with the Earth surface
    this.meshGlobe.add(ring);

    // ─── 2D pin (for FlatMap mode) ──────────────────────────────────────────
    // A filled disc with a ring around it — same colour, scaled for the 2 × 1 plane.
    this.meshFlat = new THREE.Group();
    this.meshFlat.visible = false;

    const flatDiscGeom = new THREE.CircleGeometry(0.012, 32);
    const flatDiscMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.95 });
    const flatDisc = new THREE.Mesh(flatDiscGeom, flatDiscMat);
    flatDisc.position.z = 0.001;
    this.meshFlat.add(flatDisc);

    const flatRingGeom = new THREE.RingGeometry(0.018, 0.022, 32);
    const flatRingMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.7 });
    const flatRing = new THREE.Mesh(flatRingGeom, flatRingMat);
    flatRing.position.z = 0.001;
    this.meshFlat.add(flatRing);
  }

  /**
   * Move the pin to (lat, lon) in **degrees**.
   *
   * 3D group: positioned at the surface point in the rotating earth's local frame, then
   * rotated so the local +Y axis (the stem's direction) matches the outward surface normal.
   * Flat group: positioned at the corresponding (u, v) on the 2 × 1 plane.
   */
  setLocation(latDeg: number, lonDeg: number) {
    this.latDeg = latDeg;
    this.lonDeg = lonDeg;

    const lat = latDeg * Math.PI / 180;
    const lon = lonDeg * Math.PI / 180;
    const cosLat = Math.cos(lat);

    // Surface point at r=1.0 (same convention as the texture-aligned formula in README).
    const x =  cosLat * Math.cos(lon);
    const y =  Math.sin(lat);
    const z = -cosLat * Math.sin(lon);
    this.meshGlobe.position.set(x, y, z);

    // Outward normal at the surface point is the unit vector to it from origin.
    // Rotate the group so its local +Y aligns with that direction → the stem stands
    // perpendicular to the surface wherever the pin is.
    const outward = new THREE.Vector3(x, y, z).normalize();
    this.meshGlobe.quaternion.setFromUnitVectors(Y_UP, outward);

    // Flat-map: lon → x in [-1, 1], lat → y in [-0.5, 0.5]
    this.meshFlat.position.x = lonDeg / 180;
    this.meshFlat.position.y = latDeg / 180;
  }

  setVisible(visible: boolean) {
    this.meshGlobe.visible = visible;
    this.meshFlat.visible  = visible;
  }

  isVisible(): boolean {
    return this.meshGlobe.visible;
  }

  get location(): { lat: number; lon: number } {
    return { lat: this.latDeg, lon: this.lonDeg };
  }
}
