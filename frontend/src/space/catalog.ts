/**
 * Tracked-satellite catalogue — the single place to add a satellite.
 *
 * Everything else (SatelliteLayer, SatellitePanel, the Ride-along camera path, the
 * pass predictor, `?sat=` deep links) iterates this list, so adding Hubble should be
 * one entry here plus making sure satellite-service.js mirrors its elements.
 * See frontend/docs/satellites-plan.md §1.2.
 *
 * Element data comes from /data/satellites/current.json (CelesTrak GP mirror, written
 * by services/satellite-service.js), keyed by NORAD catalogue number.
 */

export type PropagatorSpec =
  /** Earth-orbiting object with CelesTrak mean elements (OMM / TLE) → SGP4. */
  | { kind: "sgp4"; noradId: number }
  /** Tabulated state vectors (JPL Horizons) — for JWST / DSCOVR at L2 / L1, where
   *  SGP4 doesn't apply. Not implemented yet (Phase 4). */
  | { kind: "ephemeris"; source: string };

export interface SatelliteSpec {
  /** Stable id used in URLs (`?sat=iss`), menu keys and localStorage. Never rename. */
  id: string;
  name: string;
  shortName: string;
  agency: string;
  /** Marker, orbit ring and ground-track colour. */
  colour: number;
  crewed: boolean;
  /** Offer "Ride along" (POV camera) in the panel. */
  povCapable: boolean;
  propagator: PropagatorSpec;
  /** Top-down outline in a 24×24 viewBox, filled and given a glow to make the marker
   *  sprite. Oriented with the direction of flight pointing up (−y). */
  silhouette: string;
  /** Marker in emoji / kids mode (ROADMAP "Kids / emoji mode"). */
  emoji: string;
  /** glTF for the Ride-along chase view — lazy-loaded, Phase 3. */
  model?: { url: string; scaleMetres: number };
  /** Rotating one-liners for the info card. */
  facts?: string[];
}

export const SATELLITES: readonly SatelliteSpec[] = [
  {
    id: "iss",
    name: "International Space Station",
    shortName: "ISS",
    agency: "NASA · Roscosmos · ESA · JAXA · CSA",
    colour: 0x8fd8ff,
    crewed: true,
    povCapable: true,
    propagator: { kind: "sgp4", noradId: 25544 },
    // Long truss with four array wings each side, pressurised modules down the middle.
    silhouette:
      "M2 11.4h20v1.2H2z" +
      "M2.4 3.5h2.6v7.3H2.4zM5.8 3.5h2.6v7.3H5.8zM2.4 13.2h2.6v7.3H2.4zM5.8 13.2h2.6v7.3H5.8z" +
      "M15.6 3.5h2.6v7.3h-2.6zM19 3.5h2.6v7.3H19zM15.6 13.2h2.6v7.3h-2.6zM19 13.2h2.6v7.3H19z" +
      "M11 5h2v14h-2zM9.6 8h4.8v1.6H9.6z",
    emoji: "🛰️",
    facts: [
      "Crewed continuously since 2 November 2000.",
      "About the size of a football pitch, and it laps Earth every ~92 minutes.",
      "Its crew see about 16 sunrises and 16 sunsets every day.",
    ],
  },
  {
    id: "tiangong",
    name: "Tiangong space station",
    shortName: "Tiangong",
    agency: "CMSA (China)",
    colour: 0xff7a66,
    crewed: true,
    povCapable: true,
    // Tracks the Tianhe core module; Wentian and Mengtian are docked to it.
    propagator: { kind: "sgp4", noradId: 48274 },
    // T-shape: Tianhe core along the flight axis, Wentian + Mengtian across it,
    // big arrays at the ends of the cross-bar, smaller ones on the core.
    silhouette:
      "M11 7h2v14h-2z" +
      "M3.5 8h17v2h-17z" +
      "M0.8 3h2.8v12H0.8zM20.4 3h2.8v12h-2.8z" +
      "M6.5 15.5h4v2h-4zM13.5 15.5h4v2h-4z",
    emoji: "🛰️",
    facts: [
      "China's permanently crewed station, completed in 2022.",
      "Tiangong means \"Heavenly Palace\".",
      "Orbits a little lower and at a lower inclination (41.5°) than the ISS.",
    ],
  },
];

export function satelliteById(id: string): SatelliteSpec | undefined {
  return SATELLITES.find(s => s.id === id);
}
