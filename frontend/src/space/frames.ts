import * as THREE from "three";

/**
 * Frame conversions for orbiting objects. See frontend/docs/satellites-plan.md §1.4.
 *
 * Scene conventions (solar.ts): 1 unit = 1 Earth equatorial radius; untilted equatorial
 * frame has +Y = north pole, +X = vernal equinox, −Z = RA 90°. The Earth mesh is
 * `R_Z(tilt) · R_Y(gmst) · geographic`, where the geographic frame puts lat = asin(y),
 * lon = atan2(−z, x) (main.ts latLonToGeographic).
 *
 * SGP4 returns TEME kilometres with +Z north. TEME is an of-date frame whose X axis is
 * the mean equinox, and ECEF = R_z(−GMST) · TEME — which is exactly the relation
 * `earthRotationY() = gmst()` encodes for the scene. So TEME → scene is a pure axis
 * relabel, `(x, y, z) → (x, z, −y) / R⊕`, and a satellite sits over the same surface
 * point as a pin at its sub-satellite lat/lon. Callers still apply the scene's axial
 * tilt, like sunDir/moonPos in updateAstro().
 */

export const EARTH_RADIUS_KM = 6378.137;

export interface Vec3Like { x: number; y: number; z: number }

/** TEME km → untilted scene frame (Earth radii). */
export function temeToScene(teme: Vec3Like, out = new THREE.Vector3()): THREE.Vector3 {
  return out.set(teme.x, teme.z, -teme.y).divideScalar(EARTH_RADIUS_KM);
}

/** Untilted inertial scene point → geographic frame (undoes the daily R_Y(gmst)). */
export function sceneToGeographic(p: THREE.Vector3, gmstRad: number, out = new THREE.Vector3()): THREE.Vector3 {
  const c = Math.cos(gmstRad), s = Math.sin(gmstRad);
  // R_Y(−θ): x' = x cosθ − z sinθ, z' = x sinθ + z cosθ
  return out.set(p.x * c - p.z * s, p.y, p.x * s + p.z * c);
}

/**
 * Geocentric sub-point of an untilted inertial scene position, in degrees.
 *
 * Geocentric (not geodetic) on purpose: the globe is a sphere, so the point directly
 * "under" the marker is the radial projection. Readouts that want true geodetic
 * latitude (panel, flat map, passes) use satellite.js `eciToGeodetic`; the two differ
 * by at most ~0.19° in latitude.
 */
export function subPointDeg(p: THREE.Vector3, gmstRad: number): { lat: number; lon: number; altKm: number } {
  const g = sceneToGeographic(p, gmstRad, _g);
  const r = g.length();
  return {
    lat: Math.asin(g.y / r) * RAD2DEG,
    lon: Math.atan2(-g.z, g.x) * RAD2DEG,
    altKm: (r - 1) * EARTH_RADIUS_KM,
  };
}

/**
 * Cylindrical Earth-shadow test. `p` and `sunDir` (unit) must be in the same frame —
 * tilted or not doesn't matter. Good to a few seconds at LEO; the penumbra crossing
 * lasts ~10 s, so a hard edge reads fine for a marker.
 */
export function isInEarthShadow(p: THREE.Vector3, sunDir: THREE.Vector3): boolean {
  const along = p.dot(sunDir);
  if (along >= 0) return false;
  const perp2 = p.lengthSq() - along * along;
  return perp2 < 1;
}

/**
 * Local-vertical / local-horizontal basis for the Ride-along camera (Phase 3).
 * up = radial out; forward = velocity with its radial part removed; right = forward × up.
 */
export function lvlhBasis(
  pos: THREE.Vector3,
  vel: THREE.Vector3,
  out: { up: THREE.Vector3; forward: THREE.Vector3; right: THREE.Vector3 },
): typeof out {
  out.up.copy(pos).normalize();
  out.forward.copy(vel).addScaledVector(out.up, -vel.dot(out.up)).normalize();
  out.right.crossVectors(out.forward, out.up);
  return out;
}

const RAD2DEG = 180 / Math.PI;
const _g = new THREE.Vector3();
