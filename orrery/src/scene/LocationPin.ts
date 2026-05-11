import * as THREE from "three";

/**
 * Marker pinned to a (lat, lon) on Earth. Two representations:
 *   - `meshGlobe`: small additive sphere + ring above the surface, attached to the rotating
 *     earth mesh so it stays glued to its geographic location as Earth spins.
 *   - `meshFlat`:  small additive sprite on the equirectangular plane, positioned at the
 *     plane's (u, v) corresponding to (lat, lon).
 *
 * The caller (main.ts) parents each one into the appropriate scene. setLocation() updates
 * both positions from a single (lat, lon).
 */
export class LocationPin {
  readonly meshGlobe: THREE.Group;
  readonly meshFlat: THREE.Mesh;
  private readonly globePoint: THREE.Mesh;
  private readonly globeRing: THREE.Mesh;
  private latDeg = 0;
  private lonDeg = 0;
  private readonly GLOBE_RADIUS = 1.015;

  constructor() {
    // Globe-mode marker: a tiny emissive sphere at the surface, with a thin ring around it
    // for visibility. Parent group sits OFF the rotating Earth so the caller positions it
    // by setting the parent's position directly (no parenting hierarchy needed).
    this.meshGlobe = new THREE.Group();
    this.meshGlobe.visible = false;

    const pointGeom = new THREE.SphereGeometry(0.012, 16, 12);
    const pointMat  = new THREE.MeshBasicMaterial({ color: 0xffeb6e, transparent: true, opacity: 0.95 });
    this.globePoint = new THREE.Mesh(pointGeom, pointMat);
    this.meshGlobe.add(this.globePoint);

    // Ring: a torus laid flat on the surface (rotated so its axis points outward).
    // Stays small so it doesn't dominate the view at default zoom.
    const ringGeom = new THREE.TorusGeometry(0.028, 0.0035, 12, 32);
    const ringMat  = new THREE.MeshBasicMaterial({ color: 0xffeb6e, transparent: true, opacity: 0.7 });
    this.globeRing = new THREE.Mesh(ringGeom, ringMat);
    this.meshGlobe.add(this.globeRing);

    // Flat-map marker: a small textured plane on the 2:1 map. The map plane is 2 wide × 1
    // tall; a 24-px-ish marker at the surface translates to ~0.025 in plane units.
    const flatGeom = new THREE.CircleGeometry(0.015, 24);
    const flatMat  = new THREE.MeshBasicMaterial({ color: 0xffeb6e, transparent: true, opacity: 0.95 });
    this.meshFlat = new THREE.Mesh(flatGeom, flatMat);
    this.meshFlat.position.z = 0.001; // tiny offset so it draws above the map plane
    this.meshFlat.visible = false;
  }

  /**
   * Move the pin to (lat, lon) in **degrees**. Sets the 3D group's position (in the rotating
   * earth's local frame, since the group is attached as a child of `earth`) and the flat
   * mesh's position (in plane units, lon → x, lat → y).
   */
  setLocation(latDeg: number, lonDeg: number) {
    this.latDeg = latDeg;
    this.lonDeg = lonDeg;

    // 3D: geographic xyz at radius slightly above surface
    const lat = latDeg * Math.PI / 180;
    const lon = lonDeg * Math.PI / 180;
    const cosLat = Math.cos(lat);
    const R = this.GLOBE_RADIUS;
    const x =  R * cosLat * Math.cos(lon);
    const y =  R * Math.sin(lat);
    const z = -R * cosLat * Math.sin(lon);
    this.meshGlobe.position.set(x, y, z);
    // Orient the ring so its plane is tangent to the sphere — torus axis points outward
    // from origin. Lookat(origin from a point) flips the z axis; tweak via .lookAt.
    this.globeRing.lookAt(0, 0, 0);

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
