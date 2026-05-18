import * as THREE from "three";
import { sunDirectionWorld } from "./solar";
import { moonPositionWorld } from "./lunar";

/**
 * Solar-eclipse geometry. Given a date, computes whether the moon's shadow currently
 * falls on Earth's surface and (if so) where the shadow centre is in world coordinates,
 * plus a magnitude estimate for the shadow centre.
 *
 * Method: the moon casts a cylindrical/conical shadow opposite the sun direction. We
 * compute a ray from the moon's world position along `−sunDirection`, then intersect
 * that ray with the unit Earth sphere. The closer intersection point (if any) is the
 * umbra centre on Earth's surface.
 *
 * Caveats for v1:
 *   - We treat the shadow axis as a perfect line (not a cone), since the umbra is so
 *     narrow (~75 km on Earth) that the angular-radius approximation is fine for visuals.
 *   - Magnitude = ratio of moon's apparent radius to sun's apparent radius from the
 *     shadow centre. ≥1 means total; <1 means annular. Doesn't account for libration,
 *     atmospheric refraction, or terrain.
 *   - Coordinates are in the *inertial* world frame — same frame as the moon and sun.
 *     To compare against geographic lat/lon, multiply through Earth's tilt + GMST
 *     rotation (or rely on the EclipseLayer's mesh being parented to the rotating Earth).
 */

export interface EclipseShadow {
  /** True if the moon's shadow currently intersects Earth's surface. */
  hasShadow: boolean;
  /** Shadow centre on Earth's surface in world coords (unit sphere). Only valid if `hasShadow`. */
  surfacePoint: THREE.Vector3;
  /**
   * Magnitude: ratio of the moon's apparent diameter to the sun's apparent diameter
   * at the shadow centre. ≥1 = total eclipse; <1 = annular. ~0 if the shadow misses.
   */
  magnitude: number;
}

// Reference distances. R⊕ = 6 371 km; 1 AU = 149 597 870 km ≈ 23 480 R⊕; moon ~60 R⊕ from Earth.
const R_SUN_OVER_R_EARTH  = 696_000 / 6371;          // ≈ 109.2 — sun's radius in Earth radii
const AU_IN_R_EARTH       = 149_597_870 / 6371;      // ≈ 23 481
const R_MOON_IN_R_EARTH   = 1738 / 6371;             // ≈ 0.2728 — moon's radius in Earth radii

/**
 * Effective Earth radius used by the ray-sphere intersection test. Bigger than 1.0
 * (the true radius) to compensate for Schlyter's lunar-position precision: at 60 R⊕
 * distance, 1° of angular error puts the umbra centerline ~1 R⊕ perpendicular to the
 * sun-Earth line, geometrically missing the true sphere. Using 1.5 R⊕ catches those
 * near-misses so the eclipse still renders at approximately the right time and place.
 * The actual surface point we report is still on the *true* unit sphere — only the
 * intersection-test threshold is relaxed.
 *
 * Trade-off: rendered eclipse position is accurate to ~1° (≈ 110 km on Earth) rather
 * than the sub-degree precision a full ELP-2000 / VSOP-87 lunar model would give.
 * Penumbra is ~3500 km wide so this is well within the visual envelope. Upgrade path
 * is a higher-order lunar theory; out of scope for v1.
 */
const EFFECTIVE_EARTH_RADIUS_FOR_SHADOW = 1.5;

/**
 * Compute the moon's shadow geometry at a given moment.
 * Returns `hasShadow=false` when the moon is on the far side of Earth or otherwise misses.
 */
export function computeShadow(date: Date): EclipseShadow {
  const sunDir  = new THREE.Vector3();
  const moonPos = new THREE.Vector3();
  sunDirectionWorld(date, sunDir);
  moonPositionWorld(date, moonPos);

  // Shadow axis ray: starts at moon, points *away* from the sun.
  const dir = sunDir.clone().negate();

  // Ray-sphere intersection setup against an effective Earth radius (see EFFECTIVE_…
  // comment above). Required to register hits when Schlyter's lunar position has its
  // residual sub-degree error.
  //   P(t) = M + t·D,  |P|² = R²    (with |D| = 1)
  //   t² + 2(M·D)t + (|M|² − R²) = 0
  const MM = moonPos.dot(moonPos);
  const MD = moonPos.dot(dir);
  const discriminantEff = MD * MD - (MM - EFFECTIVE_EARTH_RADIUS_FOR_SHADOW * EFFECTIVE_EARTH_RADIUS_FOR_SHADOW);
  if (discriminantEff < 0) {
    // Moon is genuinely nowhere near the sun-Earth line at this instant.
    return { hasShadow: false, surfacePoint: new THREE.Vector3(), magnitude: 0 };
  }
  if (-MD <= 0) {
    // Shadow axis points AWAY from Earth — moon is on the far side from the sun
    // (full-moon family; that's where *lunar* eclipses happen, different geometry).
    return { hasShadow: false, surfacePoint: new THREE.Vector3(), magnitude: 0 };
  }

  // Surface-point selection. PREFER the true unit-sphere intersection when it exists:
  // when the ray actually transects Earth (real, well-aligned eclipse) the near-side
  // intersection IS the umbra centerline on the surface, and is correct to within the
  // model's precision. Only fall back to the closest-point projection if the ray genuinely
  // misses — that path is the "Schlyter wobble" approximation that draws the umbra at the
  // nearest plausible surface point. Doing the projection ALWAYS (the previous version)
  // collapses to a nonsense direction when the ray passes near origin, because the
  // perpendicular offset dominates the normalised direction.
  const discriminantTrue = MD * MD - (MM - 1);
  let surface: THREE.Vector3;
  if (discriminantTrue >= 0) {
    // Ray transects the true unit Earth. Use the near intersection (= entry point).
    const t = -MD - Math.sqrt(discriminantTrue);
    surface = moonPos.clone().add(dir.clone().multiplyScalar(t));
    // surface is unit-length by construction
  } else {
    // Ray misses Earth but is within the relaxed effective-radius envelope. Approximate
    // surface point = SUB-LUNAR point (moonPos normalised onto the unit sphere). When
    // the moon is roughly between Earth and the sun, the umbra falls at the point on
    // Earth where the moon is overhead, which is the sub-lunar surface point. This is
    // a more geometrically sensible fallback than "closest point on ray", which collapses
    // to a perpendicular direction when the ray passes near origin.
    surface = moonPos.clone().normalize();
  }

  // Apparent radii at the surface point. Magnitude is purely distance-driven; the lunar
  // model's distance precision (~0.5 R⊕) is much better than its angular precision, so
  // magnitude remains the right gate for "is this totality vs partial vs annular".
  const moonDistFromSurface = surface.distanceTo(moonPos);
  const moonAngularRadius   = R_MOON_IN_R_EARTH / moonDistFromSurface;
  const sunAngularRadius    = R_SUN_OVER_R_EARTH / AU_IN_R_EARTH;
  const magnitude           = moonAngularRadius / sunAngularRadius;

  return { hasShadow: true, surfacePoint: surface, magnitude };
}

/**
 * Precompute the path-of-totality polyline by stepping through the eclipse window.
 * Returns world-frame points (unit-sphere positions) where the umbra was/will be.
 * Caller is responsible for rendering / rotating these as needed.
 *
 * The output is in the *inertial* world frame at the moment of the underlying date. To
 * draw the path so it stays anchored to its geographic position as Earth rotates beneath,
 * the points must be transformed into Earth's *geographic* frame at their respective
 * times — which means applying the inverse of Earth's rotation at that timestamp.
 *
 * For an eclipse that lasts ~3 h, stepping every 30 s gives ~360 points, plenty for a
 * smooth polyline. We skip steps where the shadow misses Earth (start/end of the eclipse).
 *
 * `magnitudeThreshold` defaults to 0.95 — not 1.0 — because Schlyter's lunar-distance
 * formula has ~1-2% precision, and the magnitude formula gives values like 0.989 at the
 * moon's *mean* distance (>1.0 only at perigee). For eclipses where the moon is near
 * perigee but not exactly there (e.g. 2026-08-12 Spain, moon at ~57.5 R_earth), Schlyter's
 * distance error can flip the magnitude under 1.0 and empty the path entirely. 0.95
 * captures the path with enough margin to survive the model's precision while still
 * excluding clearly-annular events. NASA's published totality paths agree with the 0.95+
 * boundary to within a few pixels at our render scale.
 */
export function computePathOfTotality(
  startUtc: Date,
  endUtc: Date,
  stepSeconds: number = 30,
  magnitudeThreshold: number = 0.95,
): Array<{ time: Date; worldPoint: THREE.Vector3; magnitude: number }> {
  const out: Array<{ time: Date; worldPoint: THREE.Vector3; magnitude: number }> = [];
  const stepMs = stepSeconds * 1000;
  let maxMag = 0;
  let maxMagTime: Date | null = null;
  let totalSamples = 0;
  let samplesWithShadow = 0;
  for (let t = startUtc.getTime(); t <= endUtc.getTime(); t += stepMs) {
    totalSamples++;
    const time = new Date(t);
    const sh = computeShadow(time);
    if (sh.hasShadow) {
      samplesWithShadow++;
      if (sh.magnitude > maxMag) { maxMag = sh.magnitude; maxMagTime = time; }
      if (sh.magnitude >= magnitudeThreshold) {
        out.push({ time, worldPoint: sh.surfacePoint, magnitude: sh.magnitude });
      }
    }
  }
  console.log(
    `[earth-clock] eclipse path: ${out.length}/${totalSamples} samples passed mag≥${magnitudeThreshold} ` +
    `(shadow hit Earth in ${samplesWithShadow}; max magnitude ${maxMag.toFixed(4)}` +
    `${maxMagTime ? ` at ${maxMagTime.toISOString()}` : ""})`,
  );
  return out;
}
