const FIRMS_BASE = "https://firms.modaps.eosdis.nasa.gov/api/area/csv";

export interface FireDetection {
  lat: number;
  lon: number;
  /** Fire Radiative Power, MW. Typically 0-50 for routine fires, 100-1000+ for intense ones. */
  frp: number;
  /** Brightness temperature in Kelvin (VIIRS I-4 band, ~3.74 µm). */
  brightTi4: number;
  /** "D" = daytime detection, "N" = nighttime. */
  daynight: "D" | "N" | string;
}

export interface FireGrid {
  detections: FireDetection[];
  fetchedAt: Date;
}

export interface FirmsOptions {
  /** FIRMS sensor source. Default VIIRS_SNPP_NRT — Suomi NPP near-real-time. */
  source?: string;
  /** How many days back (1-10). Default 1 — last 24h gives a fresh global picture. */
  days?: number;
}

/**
 * Fetch active fire detections from NASA FIRMS.
 *
 * Endpoint: `/api/area/csv/{KEY}/{SOURCE}/world/{DAYS}` returns ~5-50k rows globally.
 * Requires a free MAP_KEY (passed via `VITE_FIRMS_MAP_KEY`).
 *
 * Columns vary slightly per sensor; we parse the header row and look up named indices
 * rather than relying on position. Missing/malformed rows are silently skipped.
 */
export async function fetchFireDetections(opts: FirmsOptions = {}): Promise<FireGrid> {
  const key = (import.meta as any).env?.VITE_FIRMS_MAP_KEY;
  if (!key) throw new Error("FIRMS: missing VITE_FIRMS_MAP_KEY in .env.local");

  const source = opts.source ?? "VIIRS_SNPP_NRT";
  const days = opts.days ?? 1;
  const url = `${FIRMS_BASE}/${key}/${source}/world/${days}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`FIRMS fetch failed: ${res.status}`);
  const text = await res.text();

  // FIRMS sometimes responds with a plain-text error (no CSV header) when the
  // key is invalid or the rate limit is hit. Bail loudly so callers can log it.
  if (text.startsWith("Invalid") || text.startsWith("No fire")) {
    throw new Error(`FIRMS returned: ${text.slice(0, 200)}`);
  }

  const lines = text.split(/\r?\n/);
  if (lines.length < 2) return { detections: [], fetchedAt: new Date() };

  const header = lines[0].split(",").map(s => s.trim());
  const iLat   = header.indexOf("latitude");
  const iLon   = header.indexOf("longitude");
  const iFrp   = header.indexOf("frp");
  const iBri   = header.indexOf("bright_ti4");
  const iDn    = header.indexOf("daynight");
  if (iLat < 0 || iLon < 0) {
    throw new Error(`FIRMS: unexpected CSV header: ${lines[0].slice(0, 200)}`);
  }

  const detections: FireDetection[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    const cols = line.split(",");
    const lat = parseFloat(cols[iLat]);
    const lon = parseFloat(cols[iLon]);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
    detections.push({
      lat,
      lon,
      frp:       iFrp >= 0 ? (parseFloat(cols[iFrp]) || 0) : 0,
      brightTi4: iBri >= 0 ? (parseFloat(cols[iBri]) || 0) : 0,
      daynight:  iDn  >= 0 ? cols[iDn] : "",
    });
  }

  return { detections, fetchedAt: new Date() };
}
