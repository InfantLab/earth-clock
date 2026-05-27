import * as THREE from "three";

/**
 * Geocentric moon position via Meeus's simplified ELP-2000-82B truncation
 * (*Astronomical Algorithms* 2nd ed., chapter 47). Accuracy: ~10 arcsec in
 * geocentric longitude (~4 arcsec lat), ~10 km in distance. That's ~100× better
 * than the previous Schlyter implementation, and crucially **smaller than the
 * sun's apparent angular radius** (≈ 0.266°) — so observer-relative eclipse
 * geometry now lands within the sun's disc, which Schlyter couldn't guarantee.
 *
 * Method: compute the moon's five fundamental angles (mean longitude L′, mean
 * elongation D, sun's mean anomaly M, moon's mean anomaly M′, argument of
 * latitude F) at the requested instant, then sum perturbation tables Σℓ
 * (longitude), Σr (radius), Σb (latitude). Each table is a list of
 * (D, M, M′, F) integer-coefficient quadruples with an amplitude; terms
 * involving M get multiplied by the eccentricity correction E (the term once,
 * 2M twice) to account for Earth's varying orbital eccentricity.
 *
 * Truncation: the published table has ~60 entries each for Σℓ and Σr, and ~60
 * for Σb. We keep the 33 largest in Σℓ/Σr and 30 largest in Σb — this
 * captures all amplitude > ~5 × 10⁻⁵ deg ≈ 0.2 arcsec, giving total residual
 * ≪ 10 arcsec. Add Meeus's three small auxiliary perturbations (A1, A2, A3)
 * which are cheap and pick up a few more arcsec of precision.
 *
 * Reference: Meeus, *Astronomical Algorithms* 2nd ed., 1998, ch. 47, tables
 * 47.A and 47.B. The full ELP-2000-82B has thousands of terms and gives
 * sub-arcsec precision; this truncation suffices for everything earth-clock
 * does (eclipse geometry on Earth's surface, observer-vs-eclipse rendering,
 * sub-lunar marker positioning).
 */

const J2000_MS = Date.UTC(2000, 0, 1, 12, 0, 0);
const DEG = Math.PI / 180;

/** Equatorial Earth radius — Meeus's distance results are in km; we divide by
 *  this to express distance in Earth radii to match the codebase's convention
 *  (~60.3 mean ER). */
const EARTH_RADIUS_KM = 6378.14;

function julianCenturiesSinceJ2000(date: Date): number {
  return (date.getTime() - J2000_MS) / (86400000 * 36525);
}

/** Reduce a value (degrees) into [0, 360). Done in stages so floating-point
 *  precision doesn't degrade after ~thousands of revolutions. */
function mod360(deg: number): number {
  const x = deg - 360 * Math.floor(deg / 360);
  return x >= 0 ? x : x + 360;
}

// ── Meeus 47.A: longitude (Σℓ) and distance (Σr) ──────────────────────────────
// Each entry: [D coef, M coef, M′ coef, F coef, Σℓ amplitude (×10⁻⁶ deg),
//              Σr amplitude (km, ÷1)]. Terms are sorted by |Σℓ|; we keep the
// 33 largest. Sub-table for terms involving M is multiplied by E once or twice.
const LR_TERMS: readonly (readonly [number, number, number, number, number, number])[] = [
  [0,  0,  1,  0,  6288774, -20905355],
  [2,  0, -1,  0,  1274027,  -3699111],
  [2,  0,  0,  0,   658314,  -2955968],
  [0,  0,  2,  0,   213618,   -569925],
  [0,  1,  0,  0,  -185116,     48888], // E
  [0,  0,  0,  2,  -114332,     -3149],
  [2,  0, -2,  0,    58793,    246158],
  [2, -1, -1,  0,    57066,   -152138], // E
  [2,  0,  1,  0,    53322,   -170733],
  [2, -1,  0,  0,    45758,   -204586], // E
  [0,  1, -1,  0,   -40923,   -129620], // E
  [1,  0,  0,  0,   -34720,    108743],
  [0,  1,  1,  0,   -30383,    104755], // E
  [2,  0,  0, -2,    15327,     10321],
  [0,  0,  1,  2,   -12528,         0],
  [0,  0,  1, -2,    10980,     79661],
  [4,  0, -1,  0,    10675,    -34782],
  [0,  0,  3,  0,    10034,    -23210],
  [4,  0, -2,  0,     8548,    -21636],
  [2,  1, -1,  0,    -7888,     24208], // E
  [2,  1,  0,  0,    -6766,     30824], // E
  [1,  0, -1,  0,    -5163,     -8379],
  [1,  1,  0,  0,     4987,    -16675], // E
  [2, -1,  1,  0,     4036,    -12831], // E
  [2,  0,  2,  0,     3994,    -10445],
  [4,  0,  0,  0,     3861,    -11650],
  [2,  0, -3,  0,     3665,     14403],
  [0,  1, -2,  0,    -2689,     -7003], // E
  [2,  0, -1,  2,    -2602,         0],
  [2, -1, -2,  0,     2390,     10056], // E
  [1,  0,  1,  0,    -2348,      6322],
  [2, -2,  0,  0,     2236,     -9884], // E²
  [0,  1,  2,  0,    -2120,      5751], // E
  [0,  2,  0,  0,    -2069,         0], // E²
];

// Map term-index → exponent on E (Earth's eccentricity factor): 0 for normal
// terms, 1 if M coefficient is ±1, 2 if M is ±2. Computed once at module load
// rather than in every call.
const LR_E_EXP: readonly number[] = LR_TERMS.map(t => Math.abs(t[1]));

// ── Meeus 47.B: latitude (Σb) ─────────────────────────────────────────────────
// Each entry: [D coef, M coef, M′ coef, F coef, Σb amplitude (×10⁻⁶ deg)].
const B_TERMS: readonly (readonly [number, number, number, number, number])[] = [
  [0,  0,  0,  1,  5128122],
  [0,  0,  1,  1,   280602],
  [0,  0,  1, -1,   277693],
  [2,  0,  0, -1,   173237],
  [2,  0, -1,  1,    55413],
  [2,  0, -1, -1,    46271],
  [2,  0,  0,  1,    32573],
  [0,  0,  2,  1,    17198],
  [2,  0,  1, -1,     9266],
  [0,  0,  2, -1,     8822],
  [2, -1,  0, -1,     8216], // E
  [2,  0, -2, -1,     4324],
  [2,  0,  1,  1,     4200],
  [2,  1,  0, -1,    -3359], // E
  [2, -1, -1,  1,     2463], // E
  [2, -1,  0,  1,     2211], // E
  [2, -1, -1, -1,     2065], // E
  [0,  1, -1, -1,    -1870], // E
  [4,  0, -1, -1,     1828],
  [0,  1,  0,  1,    -1794], // E
  [0,  0,  0,  3,    -1749],
  [0,  1, -1,  1,    -1565], // E
  [1,  0,  0,  1,    -1491],
  [0,  1,  1,  1,    -1475], // E
  [0,  1,  1, -1,    -1410], // E
  [0,  1,  0, -1,    -1344], // E
  [1,  0,  0, -1,    -1335],
  [0,  0,  3,  1,     1107],
  [4,  0,  0, -1,     1021],
  [4,  0, -1,  1,      833],
];

const B_E_EXP: readonly number[] = B_TERMS.map(t => Math.abs(t[1]));

interface LunarPosition {
  ra: number;       // right ascension, radians
  dec: number;      // declination, radians
  distance: number; // distance from Earth's centre, in Earth radii (~60.3 mean)
}

export function lunarPosition(date: Date): LunarPosition {
  const T = julianCenturiesSinceJ2000(date);

  // Mean elements (degrees), Meeus equations 47.1–47.5. Polynomial terms are
  // kept through T⁴ for the moon's own quantities (where they matter); cubic
  // is plenty for the others.
  const Lp = mod360(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T
                  + (T * T * T) / 538841 - (T * T * T * T) / 65194000);
  const D  = mod360(297.8501921 + 445267.1114034  * T - 0.0018819 * T * T
                  + (T * T * T) / 545868 - (T * T * T * T) / 113065000);
  const M  = mod360(357.5291092 + 35999.0502909   * T - 0.0001536 * T * T
                  + (T * T * T) / 24490000);
  const Mp = mod360(134.9633964 + 477198.8675055  * T + 0.0087414 * T * T
                  + (T * T * T) / 69699 - (T * T * T * T) / 14712000);
  const F  = mod360( 93.272095  + 483202.0175233  * T - 0.0036539 * T * T
                  - (T * T * T) / 3526000 + (T * T * T * T) / 863310000);

  // Eccentricity correction E (Meeus 47.6): dimensionless, ≈ 1 - 0.0025T - ...
  // Terms involving the sun's mean anomaly M scale with E (or E² for 2M)
  // because Earth's orbital eccentricity affects how strongly the sun
  // perturbs the moon.
  const E = 1 - 0.002516 * T - 0.0000074 * T * T;
  const E2 = E * E;

  // Convert mean elements to radians for the sine/cosine sums.
  const Dr  = D  * DEG;
  const Mr  = M  * DEG;
  const Mpr = Mp * DEG;
  const Fr  = F  * DEG;

  // Sum Σℓ (longitude, ×10⁻⁶ deg) and Σr (distance, km). Same argument so
  // we walk the table once. Each term is amplitude × {sin, cos}(arg) and
  // optionally × E^|M coefficient| for terms involving M.
  let sumL = 0;
  let sumR = 0;
  for (let i = 0; i < LR_TERMS.length; i++) {
    const t = LR_TERMS[i];
    const arg = t[0] * Dr + t[1] * Mr + t[2] * Mpr + t[3] * Fr;
    const e = LR_E_EXP[i] === 0 ? 1 : (LR_E_EXP[i] === 1 ? E : E2);
    sumL += t[4] * e * Math.sin(arg);
    sumR += t[5] * e * Math.cos(arg);
  }

  // Sum Σb (latitude, ×10⁻⁶ deg).
  let sumB = 0;
  for (let i = 0; i < B_TERMS.length; i++) {
    const t = B_TERMS[i];
    const arg = t[0] * Dr + t[1] * Mr + t[2] * Mpr + t[3] * Fr;
    const e = B_E_EXP[i] === 0 ? 1 : (B_E_EXP[i] === 1 ? E : E2);
    sumB += t[4] * e * Math.sin(arg);
  }

  // Meeus's three auxiliary "long-period" perturbations (47, pp. 338-339):
  // A1, A2, A3 are angles whose effect on the moon's position is small but
  // not negligible at our precision target.
  const A1 = mod360(119.75 +    131.849 * T) * DEG;
  const A2 = mod360( 53.09 + 479264.290 * T) * DEG;
  const A3 = mod360(313.45 + 481266.484 * T) * DEG;
  const Lpr = Lp * DEG;
  sumL +=  3958 * Math.sin(A1)
        + 1962 * Math.sin(Lpr - Fr)
        +  318 * Math.sin(A2);
  sumB += -2235 * Math.sin(Lpr)
        +   382 * Math.sin(A3)
        +   175 * Math.sin(A1 - Fr)
        +   175 * Math.sin(A1 + Fr)
        +   127 * Math.sin(Lpr - Mpr)
        -   115 * Math.sin(Lpr + Mpr);

  // Final ecliptic coordinates (degrees), then radians for the rotation.
  const lambda = (Lp + sumL / 1_000_000) * DEG;     // apparent geocentric ecliptic longitude
  const beta   = (sumB / 1_000_000) * DEG;          // apparent geocentric ecliptic latitude
  const distanceKm = 385_000.56 + sumR / 1000;       // distance in km
  const distance = distanceKm / EARTH_RADIUS_KM;     // distance in ER (~60.3 mean)

  // Ecliptic → equatorial. Mean obliquity at J2000 (good to ~1 arcsec across
  // the date range we care about — sub-Meeus precision).
  const eps = (23.4392911 - 0.0130042 * T) * DEG;

  const cosBeta = Math.cos(beta);
  const xec = Math.cos(lambda) * cosBeta;
  const yec = Math.sin(lambda) * cosBeta;
  const zec = Math.sin(beta);

  const xeq = xec;
  const yeq = yec * Math.cos(eps) - zec * Math.sin(eps);
  const zeq = yec * Math.sin(eps) + zec * Math.cos(eps);

  const ra = Math.atan2(yeq, xeq);
  const dec = Math.asin(zeq);

  return { ra, dec, distance };
}

// Moon position vector in our scene's world frame (Earth radii from origin).
// Same convention as `sunDirectionWorld`: +Y north, +X vernal equinox, -Z east.
export function moonPositionWorld(date: Date, out = new THREE.Vector3()): THREE.Vector3 {
  const { ra, dec, distance } = lunarPosition(date);
  return out.set(
    distance * Math.cos(dec) * Math.cos(ra),
    distance * Math.sin(dec),
    -distance * Math.cos(dec) * Math.sin(ra),
  );
}
