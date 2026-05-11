const AURORA_URL =
  "https://services.swpc.noaa.gov/json/ovation_aurora_latest.json";

export interface AuroraGrid {
  forecastTime: Date;
  /** Flat array of triples: [lon, lat, probability, lon, lat, probability, ...] */
  data: Float32Array;
  pointCount: number;
  /** Peak aurora probability across all grid cells (0-100). Lets the UI hint at
   *  current geomagnetic activity — low max = quiet sky, high max = active. */
  maxProbability: number;
}

/**
 * Fetch the NOAA SWPC Ovation aurora probability grid.
 * CORS-clean, no auth, ~900 KB JSON, updates every 5 minutes.
 * Returns probability in 0-100 for ~65 k lon/lat grid points.
 */
export async function fetchAuroraGrid(): Promise<AuroraGrid> {
  const res = await fetch(AURORA_URL);
  if (!res.ok) throw new Error(`aurora fetch failed: ${res.status}`);
  const json = await res.json();

  // Shape: { "Forecast Time": "2026-...", coordinates: [[lon, lat, aurora], ...] }
  const coords: [number, number, number][] = json.coordinates;
  const buf = new Float32Array(coords.length * 3);
  let max = 0;
  for (let i = 0; i < coords.length; i++) {
    buf[i * 3 + 0] = coords[i][0]; // lon  -180..180
    buf[i * 3 + 1] = coords[i][1]; // lat  -90..90
    buf[i * 3 + 2] = coords[i][2]; // probability 0-100
    if (coords[i][2] > max) max = coords[i][2];
  }

  return {
    forecastTime: new Date(json["Forecast Time"]),
    data: buf,
    pointCount: coords.length,
    maxProbability: max,
  };
}
