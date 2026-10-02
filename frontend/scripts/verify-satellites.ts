/**
 * Frame-consistency checks for the satellites layer (satellites-plan.md §1.4).
 *
 *   cd frontend && npx tsx scripts/verify-satellites.ts [path/to/current.json]
 *
 * Offline checks use a fixed historical ISS element set (satellite.js README, 2019),
 * so they're deterministic. They prove our frame maths agrees with satellite.js and with
 * the scene's own Earth transform. They do NOT prove we match the real ISS today — for
 * that, pass a fresh current.json / fallback.json and compare the printed sub-points
 * against https://wheretheiss.at at the same moment (target < 0.1°).
 */
import * as THREE from "three";
import { readFileSync } from "node:fs";
import {
  twoline2satrec, propagate, gstime, eciToGeodetic, shadowFraction, sunPos, jday,
  degreesLat, degreesLong,
} from "satellite.js";
import { Sgp4Propagator } from "../src/space/sgp4Propagator";
import { temeToScene, subPointDeg, isInEarthShadow, lvlhBasis, EARTH_RADIUS_KM } from "../src/space/frames";
import { gmst, sunDirectionWorld } from "../src/astro/solar";
import { SatelliteTracker } from "../src/space/tracker";
import type { OmmRecord } from "../src/data/satelliteLoader";
import { lookAngles, predictVisiblePasses } from "../src/space/passes";
import { geodeticToEcf, eciToEcf, ecfToLookAngles, degreesToRadians } from "satellite.js";

const TLE1 = "1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992";
const TLE2 = "2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442";
// Same element set as CelesTrak OMM JSON.
const OMM: OmmRecord = {
  OBJECT_NAME: "ISS (ZARYA)", OBJECT_ID: "1998-067A",
  EPOCH: "2019-06-05T12:12:58.000032", // day 156.50900463
  MEAN_MOTION: 15.51174618, ECCENTRICITY: 0.0008217, INCLINATION: 51.6433,
  RA_OF_ASC_NODE: 59.2583, ARG_OF_PERICENTER: 16.4489, MEAN_ANOMALY: 347.6017,
  EPHEMERIS_TYPE: 0, CLASSIFICATION_TYPE: "U", NORAD_CAT_ID: 25544, ELEMENT_SET_NO: 999,
  REV_AT_EPOCH: 17344, BSTAR: 5.9442e-5, MEAN_MOTION_DOT: 3.075e-5, MEAN_MOTION_DDOT: 0,
};

let failures = 0;
function check(name: string, ok: boolean, detail: string) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name} — ${detail}`);
  if (!ok) failures++;
}

const DEG = Math.PI / 180;
const t0 = new Date("2019-06-05T18:00:00Z");
const prop = new Sgp4Propagator(OMM);
const tleRec = twoline2satrec(TLE1, TLE2);
const pos = new THREE.Vector3(), vel = new THREE.Vector3(), ref = new THREE.Vector3();

// 1. OMM path == TLE path.
{
  prop.stateAt(t0, pos, vel);
  temeToScene(propagate(tleRec, t0)!.position, ref);
  const dKm = pos.distanceTo(ref) * EARTH_RADIUS_KM;
  check("OMM ≡ TLE", dKm < 0.01, `${(dKm * 1000).toFixed(2)} m apart`);
}

// 2. Our GMST vs satellite.js (IAU-82) GMST — the scene spins Earth by ours.
{
  let worst = 0;
  for (let d = 0; d < 3650; d += 37) {
    const t = new Date(Date.UTC(2020, 0, 1) + d * 86_400_000 + d * 1_234_567);
    const diff = Math.abs(Math.atan2(Math.sin(gmst(t) - gstime(t)), Math.cos(gmst(t) - gstime(t))));
    worst = Math.max(worst, diff);
  }
  const metres = worst * (EARTH_RADIUS_KM + 420) * 1000;
  check("gmst ≈ gstime", worst < 2e-5, `worst ${worst.toExponential(2)} rad ≈ ${metres.toFixed(0)} m at ISS altitude, 2020–2030`);
}

// 3. Sub-point vs satellite.js geodetic (lon identical; lat differs by geocentric/geodetic ≤ 0.2°).
{
  let worstLon = 0, worstLat = 0;
  for (let m = 0; m < 180; m += 3) {
    const t = new Date(t0.getTime() + m * 60_000);
    prop.stateAt(t, pos);
    const sp = subPointDeg(pos, gmst(t));
    const geo = eciToGeodetic(propagate(tleRec, t)!.position, gmst(t));
    const dLon = Math.abs(((sp.lon - degreesLong(geo.longitude) + 540) % 360) - 180);
    worstLon = Math.max(worstLon, dLon);
    worstLat = Math.max(worstLat, Math.abs(sp.lat - degreesLat(geo.latitude)));
  }
  // OMM vs TLE differ by ~0.3 m (decimal rounding of the elements), ≈ 3e-6° of longitude.
  check("sub-point longitude", worstLon < 1e-4, `worst ${worstLon.toExponential(2)}° (${(worstLon * DEG * 6798e3).toFixed(1)} m)`);
  check("sub-point latitude (geocentric vs geodetic)", worstLat < 0.2, `worst ${worstLat.toFixed(3)}°`);
}

// 4. Marker sits over the pin: rebuild the scene point the way main.ts places a pin
//    (latLonToGeographic → Earth mesh R_Y(gmst)) and compare directions.
{
  let worst = 0;
  for (let m = 0; m < 180; m += 7) {
    const t = new Date(t0.getTime() + m * 60_000);
    prop.stateAt(t, pos);
    const sp = subPointDeg(pos, gmst(t));
    const lat = sp.lat * DEG, lon = sp.lon * DEG;
    const pin = new THREE.Vector3(Math.cos(lat) * Math.cos(lon), Math.sin(lat), -Math.cos(lat) * Math.sin(lon));
    pin.applyAxisAngle(new THREE.Vector3(0, 1, 0), gmst(t));
    worst = Math.max(worst, pin.angleTo(pos));
  }
  // angleTo() goes through acos, which bottoms out near 1e-8 rad in float64 (≈ 0.1 m here).
  check("marker over pin", worst < 1e-7, `worst ${worst.toExponential(2)} rad`);
}

// 5. Orbit sanity.
{
  prop.stateAt(t0, pos, vel);
  const alt = (pos.length() - 1) * EARTH_RADIUS_KM, v = vel.length() * EARTH_RADIUS_KM;
  check("period", Math.abs(prop.periodSec / 60 - 92.8) < 0.5, `${(prop.periodSec / 60).toFixed(2)} min`);
  check("altitude", alt > 380 && alt < 440, `${alt.toFixed(1)} km`);
  check("speed", Math.abs(v - 7.66) < 0.05, `${v.toFixed(3)} km/s`);
  const b = lvlhBasis(pos, vel, { up: new THREE.Vector3(), forward: new THREE.Vector3(), right: new THREE.Vector3() });
  const ortho = Math.abs(b.up.dot(b.forward)) + Math.abs(b.up.dot(b.right)) + Math.abs(b.forward.dot(b.right));
  check("LVLH orthonormal", ortho < 1e-9, `Σ|dot| = ${ortho.toExponential(2)}`);
}

// 6. Earth shadow: our cylinder + our sun vs satellite.js conical shadow + its sun.
{
  const sun = new THREE.Vector3();
  let agree = 0, n = 0, dark = 0;
  for (let s = 0; s < prop.periodSec * 2; s += 10) {
    const t = new Date(t0.getTime() + s * 1000);
    prop.stateAt(t, pos);
    const ours = isInEarthShadow(pos, sunDirectionWorld(t, sun));
    const jd = jday(t);
    const theirs = shadowFraction(sunPos(jd).rsun, propagate(tleRec, t)!.position) > 0.5;
    if (ours === theirs) agree++;
    if (ours) dark++;
    n++;
  }
  check("Earth shadow", agree / n > 0.98, `${(100 * agree / n).toFixed(1)}% agreement, in shadow ${(100 * dark / n).toFixed(0)}% of the time`);
}

// 6b. Look angles (pass predictor) vs satellite.js ecfToLookAngles, London.
{
  const obs = { lat: 51.4613, lon: -0.1156, heightKm: 0.03 }; // Brixton
  const geo = { latitude: degreesToRadians(obs.lat), longitude: degreesToRadians(obs.lon), height: obs.heightKm };
  let worstEl = 0, worstAz = 0, worstRange = 0;
  for (let m = 0; m < 600; m += 1) {
    const t = new Date(t0.getTime() + m * 60_000);
    const ours = lookAngles(prop, obs, t)!;
    const ecf = eciToEcf(propagate(tleRec, t)!.position, gmst(t));
    const ref = ecfToLookAngles(geo, ecf);
    worstEl = Math.max(worstEl, Math.abs(ours.elDeg - ref.elevation / DEG));
    if (ours.elDeg > 0) worstAz = Math.max(worstAz, Math.abs(((ours.azDeg - ref.azimuth / DEG + 540) % 360) - 180));
    worstRange = Math.max(worstRange, Math.abs(ours.rangeKm - ref.rangeSat));
  }
  check("look angles vs satellite.js", worstEl < 0.01 && worstAz < 0.05 && worstRange < 0.5,
    `worst Δel ${worstEl.toExponential(1)}°, Δaz (above horizon) ${worstAz.toExponential(1)}°, Δrange ${worstRange.toFixed(3)} km`);
}

// 6c. Pass search vs a brute-force reference: scan 7 days every 20 s with satellite.js's
//     own look angles + conical shadow model + our sun, at several observers; every
//     reference-visible moment must fall inside one of our predicted passes (±30 s), and
//     every predicted pass must contain at least one reference-visible moment.
{
  const sites = { London: [51.46, -0.12], Sydney: [-33.87, 151.21], Nairobi: [-1.29, 36.82], Reykjavik: [64.15, -21.94], "New York": [40.71, -74.0] } as const;
  const from = new Date("2019-06-05T12:00:00Z");
  const days = 7;
  let refMoments = 0, missed = 0, phantom = 0, total = 0;
  const summary: string[] = [];
  for (const [name, [lat, lon]] of Object.entries(sites)) {
    const obs = { lat, lon };
    const geo = { latitude: degreesToRadians(lat), longitude: degreesToRadians(lon), height: 0 };
    const passes = (await predictVisiblePasses(prop, obs, from, { days }))!;
    total += passes.length;
    const hits = new Array(passes.length).fill(0);
    for (let t = from.getTime(); t < from.getTime() + days * 86_400_000; t += 20_000) {
      const d = new Date(t);
      const pv = propagate(tleRec, d)!;
      const el = ecfToLookAngles(geo, eciToEcf(pv.position, gmst(d))).elevation / DEG;
      if (el < 10.2) continue;
      if (shadowFraction(sunPos(jday(d)).rsun, pv.position) > 0.5) continue;
      const g = gmst(d);
      const up = new THREE.Vector3(Math.cos(lat * DEG) * Math.cos(lon * DEG + g), Math.sin(lat * DEG), -Math.cos(lat * DEG) * Math.sin(lon * DEG + g));
      if (Math.asin(sunDirectionWorld(d, new THREE.Vector3()).dot(up)) / DEG > -6.2) continue;
      refMoments++;
      const i = passes.findIndex(p => t >= p.start.getTime() - 30_000 && t <= p.end.getTime() + 30_000);
      if (i < 0) missed++; else hits[i]++;
    }
    phantom += hits.filter(h => h === 0).length;
    summary.push(`${name} ${passes.length}`);
  }
  check("visible passes vs brute force (5 sites × 7 days)", total > 0 && missed === 0 && phantom === 0,
    `${total} passes (${summary.join(", ")}), ${refMoments} reference moments, ${missed} missed, ${phantom} phantom`);
}

// 7. Optional: live element file → print where everything is right now.
const file = process.argv[2];
if (file) {
  const data = JSON.parse(readFileSync(file, "utf8"));
  const idx = new Map<number, OmmRecord>((data.sats ?? []).map((r: OmmRecord) => [Number(r.NORAD_CAT_ID), r]));
  const tracker = new SatelliteTracker();
  tracker.setElements(idx);
  const now = new Date();
  console.log(`\n${file}: ${idx.size} element sets, generated ${data.generated}`);
  console.log(tracker.summary(now));
  console.log(`At ${now.toISOString()} — compare with https://wheretheiss.at:`);
  console.table(tracker.snapshot(now));
}

console.log(failures ? `\n${failures} check(s) FAILED` : "\nAll checks passed");
process.exit(failures ? 1 : 0);
