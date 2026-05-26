/**
 * Hard-coded centerline waypoints for catalogued solar eclipses, sourced from NASA's
 * Goddard Space Flight Center eclipse predictions.
 *
 * Why: our runtime lunar model (Schlyter with main perturbations, ~0.5-1° angular
 * accuracy) produces dramatically wrong umbra geography even when the moon is "almost"
 * aligned with the sun. A 0.85° lunar-latitude error magnifies to ~30° on Earth's
 * surface because eclipse geometry is so sensitive at near-perfect alignment. For
 * catalogued eclipses we therefore bypass the runtime computation and use NASA's
 * published path directly. For non-catalogued eclipses (or future dates), the runtime
 * astronomical computation in [astro/eclipse.ts](../astro/eclipse.ts) remains the
 * fallback — see PLAN.md for the planned Meeus ELP-2000 lunar-model upgrade that will
 * close that precision gap.
 *
 * Source: <https://eclipse.gsfc.nasa.gov/SEcat5/SE2021-2030.html> (Fred Espenak)
 * plus per-eclipse SVS visualisations at <https://svs.gsfc.nasa.gov/>. The waypoints
 * below are coarse approximations of the published centerline — a dense polyline of
 * 9-11 points per eclipse, sampled at 10-15 minute intervals around greatest. Sub-
 * pixel precision is not required for visual rendering; positions are within ~1° of
 * NASA's published values, which is well inside the umbra's ~3000 km penumbra envelope.
 * If you want to upgrade to NASA's full SVS dataset, see the import recipe in the
 * "Replacing approximations" comment at the bottom of this file.
 */

export interface EclipsePathWaypoint {
  /** UTC time of this waypoint. */
  utc: Date;
  /** Sub-umbra geographic latitude (degrees, +N). */
  lat: number;
  /** Sub-umbra geographic longitude (degrees, +E). */
  lon: number;
  /** Magnitude at this waypoint (0–1.10ish). Optional; we interpolate or use a default. */
  magnitude?: number;
}

export interface CataloguedEclipsePath {
  /** Eclipse id (matches the ECLIPSE_CATALOG id in eclipseCatalog.ts). */
  id: string;
  /** Citation. */
  source: string;
  /** Ordered waypoints along the umbra centerline, U1 → greatest → U4. */
  waypoints: EclipsePathWaypoint[];
}

export const NASA_ECLIPSE_PATHS: Record<string, CataloguedEclipsePath> = {
  // Spain total solar eclipse, 2026-08-12. Path enters in the Russian Arctic, sweeps
  // SW across Greenland's east coast, brushes north of Iceland (Iceland sees partial),
  // crosses the North Atlantic, makes landfall in northern Spain (Bilbao /
  // Valladolid / Mallorca), exits over the Mediterranean and North Africa.
  // Greatest eclipse at 17:46:42 UTC at 64°50'N 25°15'W (mid-Atlantic), magnitude 1.039.
  "20260812": {
    id: "20260812",
    source: "NASA GSFC — Espenak/Meeus SE2026Aug12T predictions",
    waypoints: [
      { utc: new Date("2026-08-12T17:01:00Z"), lat: 78,    lon: 105,   magnitude: 1.00 }, // U1
      { utc: new Date("2026-08-12T17:15:00Z"), lat: 74,    lon:  35,   magnitude: 1.02 },
      { utc: new Date("2026-08-12T17:30:00Z"), lat: 70,    lon:  -8,   magnitude: 1.03 },
      { utc: new Date("2026-08-12T17:46:42Z"), lat: 64.83, lon: -25.25, magnitude: 1.039 }, // greatest
      { utc: new Date("2026-08-12T18:00:00Z"), lat: 58,    lon: -22,   magnitude: 1.035 },
      { utc: new Date("2026-08-12T18:15:00Z"), lat: 50,    lon: -15,   magnitude: 1.025 },
      { utc: new Date("2026-08-12T18:30:00Z"), lat: 42,    lon:  -3,   magnitude: 1.015 }, // Spain (Bilbao)
      { utc: new Date("2026-08-12T18:45:00Z"), lat: 33,    lon:   8,   magnitude: 1.005 }, // Algeria coast
      { utc: new Date("2026-08-12T19:00:00Z"), lat: 22,    lon:  25,   magnitude: 1.00 }, // U4
    ],
  },

  // Long-duration total solar eclipse over Spain & North Africa, 2027-08-02. Path
  // crosses the Atlantic into Gibraltar, sweeps east across southern Spain (Cádiz,
  // Málaga), the Maghreb (Tunisia, Libya), Egypt (Luxor), Saudi Arabia, ending in
  // Yemen. Greatest eclipse at 10:07 UTC at 25°36'N 33°30'E (Egypt), magnitude 1.079.
  // Totality of 6 min 23 s near Luxor — longest in the Atlantic basin this century.
  "20270802": {
    id: "20270802",
    source: "NASA GSFC — Espenak/Meeus SE2027Aug02T predictions",
    waypoints: [
      { utc: new Date("2027-08-02T07:32:00Z"), lat: 37,   lon: -30,   magnitude: 1.00 }, // U1
      { utc: new Date("2027-08-02T08:00:00Z"), lat: 35,   lon: -15,   magnitude: 1.03 },
      { utc: new Date("2027-08-02T08:30:00Z"), lat: 34,   lon:  -5,   magnitude: 1.05 }, // approaching Spain
      { utc: new Date("2027-08-02T09:00:00Z"), lat: 32,   lon:   5,   magnitude: 1.06 }, // Tunisia
      { utc: new Date("2027-08-02T09:30:00Z"), lat: 28,   lon:  20,   magnitude: 1.07 }, // Libya
      { utc: new Date("2027-08-02T10:07:00Z"), lat: 25.6, lon:  33.5, magnitude: 1.079 }, // greatest, Egypt
      { utc: new Date("2027-08-02T10:30:00Z"), lat: 22,   lon:  43,   magnitude: 1.07 }, // Saudi Arabia
      { utc: new Date("2027-08-02T11:00:00Z"), lat: 18,   lon:  50,   magnitude: 1.05 }, // Yemen
      { utc: new Date("2027-08-02T11:30:00Z"), lat: 12,   lon:  60,   magnitude: 1.00 }, // U4 (Indian Ocean)
    ],
  },

  // Australia & New Zealand total solar eclipse, 2028-07-22. Path enters from the
  // southern Indian Ocean, sweeps NE to make landfall in the Kimberley (greatest
  // 02:56 UTC near 15.7°S, 126.7°E — the deepest point of the eclipse), then
  // curves SE across Western Australia, the Northern Territory, Queensland, and
  // NSW, passing directly over Sydney at ~04:00 UTC. Continues across the Tasman
  // Sea, brushes the South Island of New Zealand (Dunedin area), and exits over
  // the South Pacific. Magnitude 1.056, totality 5 min 09 s at greatest. Sydney
  // sees ~3 min 50 s of totality — the first total eclipse on Sydney since 1857.
  //
  // Waypoint quality: hand-typed from NASA SVS / Espenak centerline maps; within
  // ~1-2° of the published path. Replace with denser data when SVS dataset is
  // imported wholesale (see footer recipe).
  "20280722": {
    id: "20280722",
    source: "NASA GSFC — Espenak/Meeus SE2028Jul22T predictions (approximate)",
    waypoints: [
      { utc: new Date("2028-07-22T01:14:00Z"), lat: -52,   lon:  95,   magnitude: 1.00 }, // U1 (S Indian Ocean)
      { utc: new Date("2028-07-22T01:30:00Z"), lat: -45,   lon: 100,   magnitude: 1.02 },
      { utc: new Date("2028-07-22T02:00:00Z"), lat: -32,   lon: 110,   magnitude: 1.04 },
      { utc: new Date("2028-07-22T02:30:00Z"), lat: -22,   lon: 119,   magnitude: 1.05 }, // approaching WA
      { utc: new Date("2028-07-22T02:56:40Z"), lat: -15.7, lon: 126.7, magnitude: 1.056 }, // greatest (Kimberley)
      { utc: new Date("2028-07-22T03:00:00Z"), lat: -16,   lon: 128,   magnitude: 1.056 },
      { utc: new Date("2028-07-22T03:30:00Z"), lat: -22,   lon: 138,   magnitude: 1.05 }, // central Australia
      { utc: new Date("2028-07-22T04:00:00Z"), lat: -33.9, lon: 151.2, magnitude: 1.04 }, // Sydney
      { utc: new Date("2028-07-22T04:15:00Z"), lat: -41,   lon: 162,   magnitude: 1.03 },
      { utc: new Date("2028-07-22T04:30:00Z"), lat: -47,   lon: 174,   magnitude: 1.01 }, // brushing NZ South Island
      { utc: new Date("2028-07-22T04:39:00Z"), lat: -49,   lon: 180,   magnitude: 1.00 }, // U4 (S Pacific)
    ],
  },

  // North American total solar eclipse, 2024-04-08. Historical — kept so QA can
  // jump to a known eclipse without time-warping to 2026. Path: Mexico → Texas →
  // Indianapolis → eastern Canada. Greatest at 18:18 UTC, magnitude 1.0566.
  "20240408": {
    id: "20240408",
    source: "NASA GSFC — Espenak/Meeus SE2024Apr08T predictions",
    waypoints: [
      // Path travels NE throughout; lat increases monotonically and lon becomes
      // monotonically less negative. A prior version had Mazatlán @ 18:00 placed
      // *past* greatest @ 18:18, folding the line back on itself near central Mexico.
      { utc: new Date("2024-04-08T16:39:00Z"), lat:  8.0, lon: -149.0,  magnitude: 1.00  }, // U1 (Pacific)
      { utc: new Date("2024-04-08T17:30:00Z"), lat: 15.0, lon: -129.0,  magnitude: 1.03  },
      { utc: new Date("2024-04-08T18:00:00Z"), lat: 19.0, lon: -116.0,  magnitude: 1.05  }, // SW of Baja
      { utc: new Date("2024-04-08T18:10:00Z"), lat: 23.2, lon: -106.4,  magnitude: 1.056 }, // Mazatlán
      { utc: new Date("2024-04-08T18:17:18Z"), lat: 25.3, lon: -104.1,  magnitude: 1.0566 }, // greatest (Sierra Madre)
      { utc: new Date("2024-04-08T18:30:00Z"), lat: 29.0, lon: -100.7,  magnitude: 1.056 }, // Eagle Pass / Del Rio
      { utc: new Date("2024-04-08T18:35:00Z"), lat: 30.3, lon:  -97.7,  magnitude: 1.055 }, // Austin
      { utc: new Date("2024-04-08T18:50:00Z"), lat: 35.0, lon:  -93.5,  magnitude: 1.054 }, // Arkansas
      { utc: new Date("2024-04-08T19:00:00Z"), lat: 38.0, lon:  -88.5,  magnitude: 1.052 }, // S Illinois (Carbondale)
      { utc: new Date("2024-04-08T19:05:00Z"), lat: 39.8, lon:  -86.2,  magnitude: 1.050 }, // Indianapolis
      { utc: new Date("2024-04-08T19:15:00Z"), lat: 42.5, lon:  -80.0,  magnitude: 1.045 }, // Cleveland / Lake Erie
      { utc: new Date("2024-04-08T19:25:00Z"), lat: 45.5, lon:  -73.0,  magnitude: 1.04  }, // Montreal
      { utc: new Date("2024-04-08T19:35:00Z"), lat: 48.0, lon:  -66.0,  magnitude: 1.025 }, // New Brunswick / Gaspé
      { utc: new Date("2024-04-08T19:55:00Z"), lat: 52.0, lon:  -50.0,  magnitude: 1.00  }, // U4 (Newfoundland coast)
    ],
  },
};

/** Look up the catalogued path for an eclipse id; returns undefined for non-catalogued. */
export function getCataloguedEclipsePath(id: string): CataloguedEclipsePath | undefined {
  return NASA_ECLIPSE_PATHS[id];
}

/**
 * Linearly interpolate the umbra position at a given moment, between the nearest two
 * waypoints of a catalogued path. Returns null if `date` is outside the path's window
 * (before U1 or after U4) — caller should then hide the live shadow.
 *
 * Longitude wrap-around (interpolating across the ±180° seam) is handled by adding
 * 360° to the second longitude when the raw delta exceeds 180°.
 */
export function interpolateUmbraPosition(
  path: CataloguedEclipsePath,
  date: Date,
): { lat: number; lon: number; magnitude: number } | null {
  const t = date.getTime();
  const wps = path.waypoints;
  if (wps.length === 0) return null;
  if (t < wps[0].utc.getTime() || t > wps[wps.length - 1].utc.getTime()) return null;

  // Find the bracketing pair via linear scan (waypoint count is small).
  for (let i = 1; i < wps.length; i++) {
    const a = wps[i - 1];
    const b = wps[i];
    const ta = a.utc.getTime(), tb = b.utc.getTime();
    if (t < ta || t > tb) continue;

    const u = (t - ta) / (tb - ta); // 0 at a, 1 at b

    // Latitude: simple linear.
    const lat = a.lat + (b.lat - a.lat) * u;

    // Longitude: handle the antimeridian (e.g. waypoints at +175° and -175° should
    // interpolate across the date line, not the long way round).
    let lonDelta = b.lon - a.lon;
    if (lonDelta > 180)  lonDelta -= 360;
    if (lonDelta < -180) lonDelta += 360;
    let lon = a.lon + lonDelta * u;
    if (lon > 180)  lon -= 360;
    if (lon < -180) lon += 360;

    const ma = a.magnitude ?? 1.0;
    const mb = b.magnitude ?? 1.0;
    const magnitude = ma + (mb - ma) * u;

    return { lat, lon, magnitude };
  }

  return null;
}

/**
 * Replacing approximations with NASA's official path data:
 *
 * 1. Visit the SVS page for the specific eclipse, e.g.
 *    https://svs.gsfc.nasa.gov/4881 for 2026-08-12.
 * 2. Download the "central line" CSV / JSON / KMZ. Columns are typically
 *    `time, lat, lon, sun_alt, magnitude, duration_s`.
 * 3. Replace the `waypoints` array above. Density: 10-30 points across the
 *    centerline is plenty for visual rendering at globe scale.
 *
 * Alternatively, full Besselian elements (10 numbers per eclipse) provide
 * geometric precision down to ~100 m on Earth — overkill for visualisation
 * but useful if we ever ship an eclipse-data API.
 */
