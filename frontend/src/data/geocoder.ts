/**
 * Reverse geocoding via Nominatim (OpenStreetMap). Given a (lat, lon), returns a
 * human-readable place name — typically the nearest city / town / village / locality.
 *
 * Nominatim is CORS-clean and free for personal/light use; its policy requires:
 *   - Max 1 request / second per IP
 *   - A descriptive User-Agent identifying the application (browsers send their own,
 *     so the best we can do is the Referer header which Nominatim respects)
 *   - No bulk geocoding (single ad-hoc lookups OK)
 *
 * For production volume, route through a backend proxy that sets a proper User-Agent
 * and respects rate limits — see docs/cutover.md.
 *
 * https://nominatim.org/release-docs/develop/api/Reverse/
 */

export interface PlaceName {
  /** Short display, e.g. "Bilbao, Spain". */
  short: string;
  /** Full hierarchy: "Bilbao, Bizkaia, Basque Country, Spain". */
  full: string;
  /** Lat/lon of the geocoded result — Nominatim snaps to the nearest feature. */
  lat: number;
  lon: number;
}

const NOMINATIM_URL = "https://nominatim.openstreetmap.org/reverse";

/**
 * Last-request timestamp for our cheap client-side rate-limit. Nominatim's policy is
 * 1 req/s globally per IP, so we throttle to 1 req every 1100 ms with a queue. Excess
 * requests get dropped — fine for click-to-pin which happens at human speeds.
 */
let lastRequest = 0;
const MIN_INTERVAL_MS = 1100;

export async function reverseGeocode(lat: number, lon: number): Promise<PlaceName | null> {
  const now = Date.now();
  if (now - lastRequest < MIN_INTERVAL_MS) {
    // Too soon since the last request — skip this one rather than queueing. The next
    // pin click will succeed.
    return null;
  }
  lastRequest = now;

  const params = new URLSearchParams({
    format: "jsonv2",
    lat: lat.toFixed(5),
    lon: lon.toFixed(5),
    zoom: "10",       // ≈ city-sized features. Higher = more specific, lower = more general.
    addressdetails: "1",
  });
  const url = `${NOMINATIM_URL}?${params.toString()}`;

  const res = await fetch(url, {
    headers: {
      // The User-Agent header is browser-controlled and can't be overridden, but
      // Referer + Accept-Language are useful contextual hints.
      "Accept-Language": "en",
    },
  });
  if (!res.ok) throw new Error(`Nominatim reverse failed: ${res.status}`);
  const data = await res.json();
  if (!data || !data.display_name) return null;

  const addr = data.address ?? {};
  // Pick the most specific common place-type. Nominatim returns whichever applies; cities
  // have "city" but small places have "town" / "village" / "hamlet" / "locality".
  const place = addr.city ?? addr.town ?? addr.village ?? addr.hamlet
              ?? addr.suburb ?? addr.county ?? addr.state ?? addr.country ?? "";
  const country = addr.country ?? "";
  const short = place && country && place !== country
    ? `${place}, ${country}`
    : (place || country || data.display_name.split(",")[0]);

  return {
    short,
    full: data.display_name,
    lat: parseFloat(data.lat),
    lon: parseFloat(data.lon),
  };
}
