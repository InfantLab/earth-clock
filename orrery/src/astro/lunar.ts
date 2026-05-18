import * as THREE from "three";

/**
 * Geocentric moon position via Schlyter's simplified orbital elements **with main
 * perturbation terms applied**.
 *
 * The basic Keplerian formula on its own (orbital elements → ecliptic XYZ, no
 * corrections) gives errors of a few degrees on average and can be 20°+ off at
 * specific moments — notably near real solar eclipses, when the moon's near-perfect
 * alignment with the sun amplifies any model error into a missed shadow. We saw
 * exactly this at the 2026-08-12 Spain eclipse: the basic formula put the moon ~21°
 * from the sun at peak, so the umbra centerline never came near Earth and no
 * eclipse rendered.
 *
 * Adding Schlyter's 12 longitude / 5 latitude / 2 distance perturbation terms
 * (evection, variation, yearly equation, and friends) brings accuracy to ~0.3° in
 * geocentric position and ~0.5 R⊕ in distance. That's sufficient for the eclipse
 * geometry to register and for sub-lunar to read correctly within a degree of NASA.
 *
 * Reference: https://www.stjarnhimlen.se/comp/ppcomp.html — sections 5 and 7.
 */

// Schlyter's epoch is **1999 Dec 31 00:00 UT** ("2000 Jan 0.0 TDT" in his notation),
// NOT J2000 (2000 Jan 1 12:00 UTC). The 1.5-day difference is fatal here: mean anomaly
// rate is 13.065°/day, so using J2000 instead of Schlyter's epoch puts the moon ~19.6°
// off in mean anomaly — and that's exactly the size of the alignment error we saw at
// the 2026-08-12 eclipse before this fix. Note that solar.ts intentionally still uses
// J2000 because the NOAA SPA formula it implements has J2000 as its epoch.
const SCHLYTER_EPOCH = Date.UTC(1999, 11, 31, 0, 0, 0);
const DEG = Math.PI / 180;

function daysSinceEpoch(date: Date): number {
  return (date.getTime() - SCHLYTER_EPOCH) / 86400000;
}

/** Wrap a degree value to [-180, 180] before converting to radians. Keeps trig
 *  inputs numerically stable when the underlying linear formula has accumulated
 *  hundreds of full rotations since J2000 (where doing the `% (2π)` directly in
 *  radians loses ~1° of precision due to floating-point in the modulus). */
function wrapDeg(deg: number): number {
  let x = deg % 360;
  if (x > 180) x -= 360;
  if (x < -180) x += 360;
  return x;
}

interface LunarPosition {
  ra: number;       // right ascension, radians
  dec: number;      // declination, radians
  distance: number; // distance from Earth's centre, in Earth radii (~60.3 mean)
}

export function lunarPosition(date: Date): LunarPosition {
  const d = daysSinceEpoch(date);

  // Sun's mean anomaly + mean longitude — needed for the moon's perturbation terms
  // below (the sun is the dominant perturbing body, hence why the basic Keplerian
  // moon-around-Earth-only model is so poor without these).
  const Ms = wrapDeg(357.528 + 0.9856003 * d) * DEG;
  const Ls = wrapDeg(280.460 + 0.9856474 * d) * DEG;

  // Moon's orbital elements at this epoch.
  const N  = wrapDeg(125.1228 - 0.0529538083 * d) * DEG; // ascending node longitude
  const i  = 5.1454 * DEG;                                // inclination
  const w  = wrapDeg(318.0634 + 0.1643573223 * d) * DEG;  // argument of perigee
  const a  = 60.2666;                                     // semi-major axis (R⊕)
  const e  = 0.054900;                                    // eccentricity
  const Mm = wrapDeg(115.3654 + 13.0649929509 * d) * DEG; // mean anomaly

  // Solve Kepler's equation for eccentric anomaly E (one Newton iteration is plenty
  // at e≈0.055 — convergence is quadratic).
  let E = Mm + e * Math.sin(Mm) * (1 + e * Math.cos(Mm));
  E = E - (E - e * Math.sin(E) - Mm) / (1 - e * Math.cos(E));

  // Position in the moon's orbital plane.
  const xv = a * (Math.cos(E) - e);
  const yv = a * Math.sqrt(1 - e * e) * Math.sin(E);
  let r = Math.sqrt(xv * xv + yv * yv);
  const v = Math.atan2(yv, xv);

  // Geocentric ecliptic XYZ — basic Keplerian, BEFORE perturbations.
  const xec0 = r * (Math.cos(N) * Math.cos(v + w) - Math.sin(N) * Math.sin(v + w) * Math.cos(i));
  const yec0 = r * (Math.sin(N) * Math.cos(v + w) + Math.cos(N) * Math.sin(v + w) * Math.cos(i));
  const zec0 = r * Math.sin(v + w) * Math.sin(i);

  // Convert to ecliptic spherical (lon, lat, r) so we can apply the standard published
  // perturbation series, which are expressed as additive corrections to those.
  let lon = Math.atan2(yec0, xec0);
  let lat = Math.atan2(zec0, Math.sqrt(xec0 * xec0 + yec0 * yec0));

  // Auxiliary angles used by the perturbation series.
  const Lm = N + w + Mm;  // mean longitude of moon
  const D  = Lm - Ls;     // mean elongation of moon (moon longitude − sun longitude)
  const F  = Lm - N;      // argument of latitude of moon

  // Longitude perturbations (degrees → radians via DEG). Largest term (evection,
  // 1.274°) dominates; including down to ~0.03° gets us to ~0.3° overall.
  lon += DEG * (
      -1.274 * Math.sin(Mm - 2 * D)      // evection
    +  0.658 * Math.sin(2 * D)           // variation
    -  0.186 * Math.sin(Ms)              // yearly equation
    -  0.059 * Math.sin(2 * Mm - 2 * D)
    -  0.057 * Math.sin(Mm - 2 * D + Ms)
    +  0.053 * Math.sin(Mm + 2 * D)
    +  0.046 * Math.sin(2 * D - Ms)
    +  0.041 * Math.sin(Mm - Ms)
    -  0.035 * Math.sin(D)               // parallactic equation
    -  0.031 * Math.sin(Mm + Ms)
  );

  // Latitude perturbations.
  lat += DEG * (
      -0.173 * Math.sin(F - 2 * D)
    -  0.055 * Math.sin(Mm - F - 2 * D)
    -  0.046 * Math.sin(Mm + F - 2 * D)
    +  0.033 * Math.sin(F + 2 * D)
    +  0.017 * Math.sin(2 * Mm + F)
  );

  // Distance perturbations (Earth radii). Tiny compared to the ~60 R⊕ mean distance
  // but important for eclipse magnitude — the difference between a total and
  // annular eclipse comes down to whether the moon's apparent radius exceeds the
  // sun's, which is set by the distance to ~1%.
  r += (
      -0.58 * Math.cos(Mm - 2 * D)
    -  0.46 * Math.cos(2 * D)
  );

  // Convert corrected (lon, lat, r) back to ecliptic XYZ.
  const cosLat = Math.cos(lat);
  const xec = r * Math.cos(lon) * cosLat;
  const yec = r * Math.sin(lon) * cosLat;
  const zec = r * Math.sin(lat);

  // Rotate ecliptic → equatorial by obliquity ε.
  const eps = 23.4393 * DEG;
  const xeq = xec;
  const yeq = yec * Math.cos(eps) - zec * Math.sin(eps);
  const zeq = yec * Math.sin(eps) + zec * Math.cos(eps);

  const distance = Math.sqrt(xeq * xeq + yeq * yeq + zeq * zeq);
  const ra = Math.atan2(yeq, xeq);
  const dec = Math.asin(zeq / distance);

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
