import * as THREE from "three";

// Low-precision (~0.01°) solar position. Plenty for visual day/night;
// the classic project used the same family of formulae (Schlyter / NOAA SPA).

const J2000 = Date.UTC(2000, 0, 1, 12, 0, 0);
const DEG = Math.PI / 180;

function daysSinceJ2000(date: Date): number {
  return (date.getTime() - J2000) / 86400000;
}

interface SolarPosition {
  ra: number;  // right ascension, radians, in [-π, π]
  dec: number; // declination, radians, ~ ±23.44°
}

export function solarPosition(date: Date): SolarPosition {
  const n = daysSinceJ2000(date);
  const L = (280.460 + 0.9856474 * n) * DEG;            // mean ecliptic longitude
  const g = (357.528 + 0.9856003 * n) * DEG;            // mean anomaly
  const lambda = L + (1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) * DEG; // ecliptic longitude
  const epsilon = (23.439 - 0.0000004 * n) * DEG;       // obliquity of the ecliptic
  const ra = Math.atan2(Math.cos(epsilon) * Math.sin(lambda), Math.cos(lambda));
  const dec = Math.asin(Math.sin(epsilon) * Math.sin(lambda));
  return { ra, dec };
}

// Greenwich Mean Sidereal Time as a rotation angle (radians).
export function gmst(date: Date): number {
  const n = daysSinceJ2000(date);
  let hours = 18.697374558 + 24.06570982441908 * n;
  hours = ((hours % 24) + 24) % 24;
  return hours * Math.PI / 12;
}

// Unit vector pointing from Earth's centre toward the sun, expressed in our scene's
// inertial world frame: +Y = north pole, +X = vernal-equinox direction (J2000), -Z = east.
export function sunDirectionWorld(date: Date, out = new THREE.Vector3()): THREE.Vector3 {
  const { ra, dec } = solarPosition(date);
  return out.set(
    Math.cos(dec) * Math.cos(ra),
    Math.sin(dec),
    -Math.cos(dec) * Math.sin(ra),
  );
}

// Y-axis rotation to apply to the Earth mesh so that its current orientation
// matches reality: Greenwich meridian sits where it really sits relative to the stars.
// Negative because the texture's longitude-0 side starts at +X and we rotate
// "with the spin" (Earth turns eastward).
export function earthRotationY(date: Date): number {
  return -gmst(date);
}
