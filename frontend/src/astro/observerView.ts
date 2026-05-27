import * as THREE from "three";
import { earthRotationY } from "./solar";

/**
 * Project the sun and moon into an observer's local sky at a given moment.
 * Returns enough information for the SunDiscPanel UI: each body's altitude /
 * azimuth, its apparent angular radius, and the moon's offset from the sun
 * decomposed into east/up components plus a linear eclipse magnitude.
 *
 * Coordinate notes:
 *
 * - `sunDir` and `moonPos` come in already in the **tilted world frame** —
 *   they've been Z-rotated by AXIAL_TILT inside `updateAstro()` to match the
 *   tilted Globe and the rest of the scene's layers. We compute the observer's
 *   position in that same frame here so dot products are consistent.
 * - The "earth-spin-axis" in this tilted frame is no longer +Y — it's the
 *   image of +Y after Z-rotation, i.e. `(−sin T, cos T, 0)` where
 *   T = AXIAL_TILT. That direction is what we use as the celestial-north hint
 *   to derive local north.
 * - **Topocentric** for the moon: the moon's geocentric direction (what
 *   `moonPos.normalize()` gives) differs from the moon's apparent direction
 *   from a surface observer by up to ~1° because the observer is offset from
 *   Earth's centre by 1 R⊕ and the moon is only ~60 R⊕ away. That 1° is
 *   *larger than the sun's disc*, so we must subtract the observer's position
 *   from the moon's position before computing the apparent direction. The
 *   sun, at ~23 500 R⊕, has negligible parallax — we use `sunDir` as-is.
 */

const DEG = Math.PI / 180;
const AXIAL_TILT_RAD = 23.44 * DEG;
const SPIN_AXIS_TILTED = new THREE.Vector3(-Math.sin(AXIAL_TILT_RAD), Math.cos(AXIAL_TILT_RAD), 0);

// Apparent angular radii. Sun's varies by ±1.5 % across Earth's elliptical orbit
// but for our small-inset rendering the constant mean is plenty. Moon's varies
// significantly with topocentric distance and must be computed per frame.
/** Sun's mean apparent angular radius from Earth, degrees (≈ 0.2666°). */
const SUN_RADIUS_DEG = (Math.asin(696_000 / 149_597_870)) / DEG;
/** Moon's true radius in Earth radii — used to compute apparent radius from
 *  the observer's topocentric distance. */
const MOON_RADIUS_ER = 1738 / 6378.14;

export interface ObserverView {
  /** Sun altitude above the local horizon, degrees. Negative = below the horizon. */
  sunAltitudeDeg: number;
  /** Sun azimuth, degrees clockwise from local north (astronomy convention). */
  sunAzimuthDeg: number;
  /** Moon altitude above the local horizon, degrees. */
  moonAltitudeDeg: number;
  /** Moon azimuth, degrees clockwise from local north. */
  moonAzimuthDeg: number;
  /** Apparent angular separation between sun and moon centres, degrees. */
  angularSeparationDeg: number;
  /** Sun's apparent angular radius, degrees (~0.2666). */
  sunApparentRadiusDeg: number;
  /** Moon's apparent angular radius, degrees (~0.246–0.282 depending on distance). */
  moonApparentRadiusDeg: number;
  /**
   * Linear eclipse magnitude — fraction of the sun's *diameter* covered by the
   * moon, the standard observational quantity. Approximated for a circular
   * geometry:
   *   `mag = (r_sun + r_moon − separation) / (2 × r_sun)`
   * 0.0 = first/last external contact; > 1.0 = total (moon fully covers sun);
   * 0 < mag < 1 in annular cases too. Negative if sun and moon discs don't
   * touch.
   */
  magnitude: number;
  /** Moon's apparent east-west offset from the sun in the observer's sky,
   *  degrees. Positive = east of sun. */
  offsetEastDeg: number;
  /** Moon's apparent up-down offset from the sun in the observer's sky,
   *  degrees. Positive = above (toward zenith from) the sun. */
  offsetUpDeg: number;
  /** True if the sun is above the observer's horizon. Below = the observer is
   *  on the night side; the eclipse, if any, is invisible from this spot. */
  sunIsUp: boolean;
}

/** Scratch vectors — module-scoped so we don't allocate every call. */
const _observerPos = new THREE.Vector3();
const _up = new THREE.Vector3();
const _north = new THREE.Vector3();
const _east = new THREE.Vector3();
const _topoMoon = new THREE.Vector3();
const _topoMoonDir = new THREE.Vector3();
const _sunDirNorm = new THREE.Vector3();

/**
 * Compute the observer-relative geometry.
 *
 * @param latDeg observer's geographic latitude (degrees, +N)
 * @param lonDeg observer's geographic longitude (degrees, +E)
 * @param date   the simulated moment in time
 * @param sunDir unit vector pointing from Earth's centre toward the sun, in
 *               the tilted world frame (i.e. AFTER updateAstro's Z-tilt)
 * @param moonPos moon's position vector in the same tilted world frame, in
 *                Earth radii
 */
export function computeObserverView(
  latDeg: number,
  lonDeg: number,
  date: Date,
  sunDir: THREE.Vector3,
  moonPos: THREE.Vector3,
): ObserverView {
  // 1. Observer's position in the tilted world frame.
  //    Take the local-frame point (lat, lon on a unit sphere), apply Earth's
  //    daily rotation, then the axial tilt (in that order — matches what every
  //    Earth-anchored layer does in the scene).
  const lat = latDeg * DEG;
  const lon = lonDeg * DEG;
  const cosLat = Math.cos(lat);
  // Local geographic coords (Greenwich at +X, east at −Z, north pole at +Y).
  const Lx =  cosLat * Math.cos(lon);
  const Ly =  Math.sin(lat);
  const Lz = -cosLat * Math.sin(lon);
  // Daily-spin rotation about Y by gmst.
  const gmst = earthRotationY(date);
  const cg = Math.cos(gmst), sg = Math.sin(gmst);
  const Sx = Lx * cg + Lz * sg;
  const Sy = Ly;
  const Sz = -Lx * sg + Lz * cg;
  // Axial-tilt rotation about Z by AXIAL_TILT.
  const ct = Math.cos(AXIAL_TILT_RAD), st = Math.sin(AXIAL_TILT_RAD);
  _observerPos.set(
    Sx * ct - Sy * st,
    Sx * st + Sy * ct,
    Sz,
  );

  // 2. Local UP, NORTH, EAST basis at the observer.
  _up.copy(_observerPos).normalize();
  // North = component of the spin axis perpendicular to up.
  const upDotSpin = _up.dot(SPIN_AXIS_TILTED);
  _north.copy(SPIN_AXIS_TILTED).addScaledVector(_up, -upDotSpin).normalize();
  // East = up × north (right-hand: fingers point from up to north, thumb is east).
  _east.crossVectors(_up, _north);

  // 3. Sun: use sunDir directly (negligible parallax — observer is 1 R⊕ out
  //    from Earth-centre but the sun is ~23 500 R⊕ away).
  _sunDirNorm.copy(sunDir).normalize();
  const sunDotUp = _sunDirNorm.dot(_up);
  const sunAltDeg = Math.asin(clamp(sunDotUp, -1, 1)) / DEG;
  // Azimuth: project sun direction into the horizontal plane (subtract the up
  // component), then atan2(east, north) → angle clockwise from north.
  const sunHorizEast  = _sunDirNorm.dot(_east);
  const sunHorizNorth = _sunDirNorm.dot(_north);
  let sunAzDeg = Math.atan2(sunHorizEast, sunHorizNorth) / DEG;
  if (sunAzDeg < 0) sunAzDeg += 360;

  // 4. Moon: TOPOCENTRIC direction = moonPos − observerPos (vector from
  //    observer to moon). The observer is at 1 R⊕ from origin; the moon at
  //    ~60 R⊕. That 1.7 % offset in distance and direction is significant —
  //    it's the lunar parallax, up to ~1° in apparent position.
  _topoMoon.copy(moonPos).sub(_observerPos);
  const topoMoonDistER = _topoMoon.length();
  _topoMoonDir.copy(_topoMoon).divideScalar(topoMoonDistER);
  const moonDotUp = _topoMoonDir.dot(_up);
  const moonAltDeg = Math.asin(clamp(moonDotUp, -1, 1)) / DEG;
  const moonHorizEast  = _topoMoonDir.dot(_east);
  const moonHorizNorth = _topoMoonDir.dot(_north);
  let moonAzDeg = Math.atan2(moonHorizEast, moonHorizNorth) / DEG;
  if (moonAzDeg < 0) moonAzDeg += 360;

  // 5. Apparent angular separation between sun and moon centres.
  //    Use the dot product of the two direction unit vectors — robust at
  //    small angles where (alt, az) differencing would amplify rounding.
  const cosSep = clamp(_sunDirNorm.dot(_topoMoonDir), -1, 1);
  const angularSeparationDeg = Math.acos(cosSep) / DEG;

  // 6. Moon's apparent angular radius (topocentric).
  const moonApparentRadiusDeg = Math.asin(MOON_RADIUS_ER / topoMoonDistER) / DEG;

  // 7. Linear eclipse magnitude.
  const magnitude = (SUN_RADIUS_DEG + moonApparentRadiusDeg - angularSeparationDeg)
                  / (2 * SUN_RADIUS_DEG);

  // 8. East / up offsets for 2D rendering. Wrap the azimuth difference into
  //    [−180, 180] so we don't get spurious 359°/1° jumps near north.
  let dAzDeg = moonAzDeg - sunAzDeg;
  if (dAzDeg > 180)  dAzDeg -= 360;
  if (dAzDeg < -180) dAzDeg += 360;
  // Small-angle: an azimuth difference of dAz at altitude alt subtends
  // dAz × cos(alt) of arc on the sky. (Correct for tiny separations < 5°.)
  const offsetEastDeg = dAzDeg * Math.cos(sunAltDeg * DEG);
  const offsetUpDeg   = moonAltDeg - sunAltDeg;

  return {
    sunAltitudeDeg: sunAltDeg,
    sunAzimuthDeg: sunAzDeg,
    moonAltitudeDeg: moonAltDeg,
    moonAzimuthDeg: moonAzDeg,
    angularSeparationDeg,
    sunApparentRadiusDeg: SUN_RADIUS_DEG,
    moonApparentRadiusDeg,
    magnitude,
    offsetEastDeg,
    offsetUpDeg,
    sunIsUp: sunAltDeg > 0,
  };
}

function clamp(x: number, lo: number, hi: number): number {
  return x < lo ? lo : (x > hi ? hi : x);
}
