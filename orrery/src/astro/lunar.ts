import * as THREE from "three";

// Low-precision (~1–2°) geocentric moon position via Schlyter's simplified
// orbital elements. Same family as the classic earth-clock implementation.
// Reference: https://www.stjarnhimlen.se/comp/ppcomp.html

const J2000 = Date.UTC(2000, 0, 1, 12, 0, 0);
const DEG = Math.PI / 180;

function daysSinceJ2000(date: Date): number {
  return (date.getTime() - J2000) / 86400000;
}

interface LunarPosition {
  ra: number;       // right ascension, radians
  dec: number;      // declination, radians
  distance: number; // distance from Earth's centre, in Earth radii (~60.3 mean)
}

export function lunarPosition(date: Date): LunarPosition {
  const d = daysSinceJ2000(date);

  // Schlyter orbital elements at epoch J2000 + d days
  const N = (125.1228 - 0.0529538 * d) * DEG; // longitude of ascending node
  const i = 5.1454 * DEG;                     // inclination
  const w = (318.0634 + 0.1643573 * d) * DEG; // argument of perigee
  const a = 60.2666;                          // semi-major axis (Earth radii)
  const e = 0.054900;                         // eccentricity
  const M = (115.3654 + 13.0649930 * d) * DEG % (2 * Math.PI); // mean anomaly

  // Solve Kepler's equation for eccentric anomaly E (two iterations is overkill for e=0.055)
  let E = M + e * Math.sin(M) * (1 + e * Math.cos(M));
  E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));

  // Position in orbital plane
  const xv = a * (Math.cos(E) - e);
  const yv = a * Math.sqrt(1 - e * e) * Math.sin(E);
  const r = Math.sqrt(xv * xv + yv * yv);
  const v = Math.atan2(yv, xv); // true anomaly

  // Geocentric ecliptic XYZ
  const xec = r * (Math.cos(N) * Math.cos(v + w) - Math.sin(N) * Math.sin(v + w) * Math.cos(i));
  const yec = r * (Math.sin(N) * Math.cos(v + w) + Math.cos(N) * Math.sin(v + w) * Math.cos(i));
  const zec = r * Math.sin(v + w) * Math.sin(i);

  // Rotate ecliptic → equatorial by obliquity ε
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
