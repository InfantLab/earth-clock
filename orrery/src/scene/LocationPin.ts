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
    // the planet. Designed so the surface location stays VISIBLE from any camera angle:
    //   • Prominent base ring on the surface — the primary marker
    //   • Thin spike rising vertically — secondary cue, makes the pin read as deliberate
    //   • Tiny tip at the top — punctuation; small enough that it doesn't occlude the ring
    //     when looking straight down.
    this.meshGlobe = new THREE.Group();
    this.meshGlobe.visible = false;

    // Base ring: prominent torus lying flat on the surface. Wider radius than the stem so
    // it surrounds the spike, and clearly visible from above-overhead views.
    const ringGeom = new THREE.TorusGeometry(0.022, 0.003, 12, 40);
    const ringMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.95 });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 2; // lay flat (torus default is XY plane → rotate so its plane is XZ)
    ring.position.y = 0.001;       // a hair above the surface to avoid z-fighting
    this.meshGlobe.add(ring);

    // Inner dot on the surface: a small filled disc at the centre of the ring, makes the
    // exact point unmistakable. Lies flat with the ring.
    const dotGeom = new THREE.CircleGeometry(0.008, 24);
    const dotMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.9 });
    const dot = new THREE.Mesh(dotGeom, dotMat);
    dot.rotation.x = -Math.PI / 2; // face outward (away from origin)
    dot.position.y = 0.002;
    this.meshGlobe.add(dot);

    // Spike: very thin cylinder rising vertically from the centre. Thin enough not to
    // visually mask the ring from oblique angles.
    const spikeHeight = 0.055;
    const spikeGeom = new THREE.CylinderGeometry(0.0025, 0.0025, spikeHeight, 12);
    const spikeMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.9 });
    const spike = new THREE.Mesh(spikeGeom, spikeMat);
    spike.position.y = spikeHeight / 2;
    this.meshGlobe.add(spike);

    // Tiny tip at the top of the spike — small enough not to occlude the ring from above.
    const tipGeom = new THREE.SphereGeometry(0.006, 16, 12);
    const tipMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.95 });
    const tip = new THREE.Mesh(tipGeom, tipMat);
    tip.position.y = spikeHeight + 0.005;
    this.meshGlobe.add(tip);

    // ─── 2D pin (for FlatMap mode) ──────────────────────────────────────────
    // Crosshair + outer ring + tiny centre dot. The lines mark the exact spot without
    // filling the surrounding territory; the outer ring catches the eye at a distance.
    // Sized to be visible-but-unobtrusive on the 2 × 1 plane (≈10–14 px at default zoom).
    this.meshFlat = new THREE.Group();
    this.meshFlat.visible = false;

    // Outer ring — modest size so it doesn't obscure a continent.
    const flatRingGeom = new THREE.RingGeometry(0.011, 0.013, 32);
    const flatRingMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.9 });
    const flatRing = new THREE.Mesh(flatRingGeom, flatRingMat);
    flatRing.position.z = 0.001;
    this.meshFlat.add(flatRing);

    // Crosshair — two short line segments through the centre, with a small gap so the
    // exact point reads as a "+" rather than a single bar. Lines extend just outside the
    // ring so the marker looks like a precision target.
    const crosshairGap  = 0.003;
    const crosshairOuter = 0.017;
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute([
        // Horizontal: left and right of centre
        -crosshairOuter, 0, 0.001,   -crosshairGap, 0, 0.001,
         crosshairGap,   0, 0.001,    crosshairOuter, 0, 0.001,
        // Vertical: above and below centre
        0, -crosshairOuter, 0.001,   0, -crosshairGap, 0.001,
        0,  crosshairGap,   0.001,   0,  crosshairOuter, 0.001,
      ], 3),
    );
    const lineMat = new THREE.LineBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.95 });
    const crosshair = new THREE.LineSegments(lineGeom, lineMat);
    this.meshFlat.add(crosshair);

    // Tiny centre dot — makes the exact pixel unambiguous when zoomed in.
    const flatDotGeom = new THREE.CircleGeometry(0.0015, 16);
    const flatDotMat  = new THREE.MeshBasicMaterial({ color: PIN_COLOR, transparent: true, opacity: 0.95 });
    const flatDot = new THREE.Mesh(flatDotGeom, flatDotMat);
    flatDot.position.z = 0.002;
    this.meshFlat.add(flatDot);
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
