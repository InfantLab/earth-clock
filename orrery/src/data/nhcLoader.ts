// NHC's `CurrentStorms.json` doesn't ship CORS headers, so the browser blocks direct
// fetches. In dev we route through a Vite proxy (see vite.config.ts > server.proxy);
// production needs an equivalent edge proxy (Cloudflare Worker, etc.). The path-rewrite
// strips `/proxy/nhc` server-side, so the upstream sees `/CurrentStorms.json` as normal.
const NHC_URL = "/proxy/nhc/CurrentStorms.json";

export interface Storm {
  /** Storm ID, e.g. "AL012024". */
  id: string;
  /** Storm name, e.g. "Alberto". Empty until NHC assigns one. */
  name: string;
  /** Classification code (TD, TS, HU, MH, PT, STD, STS, TY, STY, …). */
  classification: string;
  /** Sustained-wind intensity in knots. 0 if unknown. */
  intensityKt: number;
  /** Minimum central pressure in mbar. 0 if unknown. */
  pressureMb: number;
  /** Latitude, decimal degrees. Negative = south. */
  lat: number;
  /** Longitude, decimal degrees. Negative = west. */
  lon: number;
  /** Storm movement bearing in degrees from north (0 = N, 90 = E). NaN if unknown. */
  movementDir: number;
  /** Storm movement speed in knots. 0 if unknown. */
  movementSpeedKt: number;
  /** ISO-8601 string of NHC's last advisory time, or empty if not provided. */
  lastUpdate: string;
  /** Optional KMZ URL for the forecast cone (5-day uncertainty envelope). */
  forecastConeKmz?: string;
  /** Optional KMZ URL for the forecast track polyline. */
  forecastTrackKmz?: string;
  /** Optional KMZ URL for the past-track / best-track polyline. */
  bestTrackKmz?: string;
}

export interface StormGrid {
  storms: Storm[];
  fetchedAt: Date;
}

/**
 * Fetch active tropical cyclones from the NHC public-feed `CurrentStorms.json`.
 *
 * Off-season (Dec–May Atlantic, Dec–Apr E. Pacific) the response is `{"activeStorms": []}`.
 * We treat empty as a perfectly normal result — the renderer just draws nothing — so the
 * layer is dormant until the first storm of the season appears and lights up on next refresh.
 *
 * NHC publishes lat/lon both as a numeric field and as a string with N/S/E/W suffix.
 * We prefer the numeric field when present and fall back to parsing the suffix form.
 */
export async function fetchActiveStorms(): Promise<StormGrid> {
  const res = await fetch(NHC_URL);
  if (!res.ok) throw new Error(`NHC fetch failed: ${res.status}`);
  const json = await res.json();

  const arr = Array.isArray(json.activeStorms) ? json.activeStorms : [];
  const storms: Storm[] = [];
  for (const raw of arr) {
    const lat = parseLatLon(raw.latitudeNumeric, raw.latitude);
    const lon = parseLatLon(raw.longitudeNumeric, raw.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
    storms.push({
      id:             String(raw.id ?? ""),
      name:           String(raw.name ?? ""),
      classification: String(raw.classification ?? ""),
      intensityKt:    parseFloat(raw.intensity) || 0,
      pressureMb:     parseFloat(raw.pressure)  || 0,
      lat,
      lon,
      movementDir:     parseFloat(raw.movementDir)   || NaN,
      movementSpeedKt: parseFloat(raw.movementSpeed) || 0,
      lastUpdate:      String(raw.lastUpdate ?? ""),
      // KMZ track/cone URLs. NHC presents these as `{ kmzFile, zipFile, gisFile }` triples
      // for each geometry kind; we want the .kmz which contains a simple KML.
      forecastConeKmz:  pickKmz(raw.forecastCone),
      forecastTrackKmz: pickKmz(raw.forecastTrack),
      bestTrackKmz:     pickKmz(raw.bestTrack),
    });
  }

  return { storms, fetchedAt: new Date() };
}

/**
 * Resolve a coordinate from NHC's two-format convention: prefer the numeric field, otherwise
 * parse the string form like "21.6N" / "94.4W". Returns NaN on failure so callers can filter.
 */
function pickKmz(obj: unknown): string | undefined {
  if (obj && typeof obj === "object" && "kmzFile" in obj) {
    const v = (obj as { kmzFile: unknown }).kmzFile;
    if (typeof v === "string" && v.length > 0) return v;
  }
  return undefined;
}

function parseLatLon(numeric: unknown, str: unknown): number {
  if (typeof numeric === "number" && Number.isFinite(numeric)) return numeric;
  if (typeof numeric === "string") {
    const n = parseFloat(numeric);
    if (Number.isFinite(n)) return n;
  }
  if (typeof str === "string") {
    const m = str.trim().match(/^(-?\d+(?:\.\d+)?)\s*([NSEW])?$/i);
    if (m) {
      const v = parseFloat(m[1]);
      const hemi = m[2]?.toUpperCase();
      if (hemi === "S" || hemi === "W") return -v;
      return v;
    }
  }
  return NaN;
}
