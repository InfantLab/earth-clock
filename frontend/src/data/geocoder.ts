/**
 * Reverse geocoding via a same-origin proxy at `/proxy/geocode/`. Given a (lat, lon),
 * returns a human-readable place name — typically the nearest city / town / locality.
 *
 * **Why a proxy** (rather than hitting nominatim.openstreetmap.org directly):
 *   - Lets us swap the upstream (Nominatim, LocationIQ, self-hosted) without a code change.
 *   - The server-side proxy can set a meaningful `User-Agent` identifying earth-clock,
 *     which Nominatim's usage policy requests. (Browsers don't let JS override UA.)
 *   - Same-origin URL means no preflight noise + we control caching headers.
 *   - When the upstream is down (Nominatim's public service 503s periodically), we
 *     can swap to a paid mirror (LocationIQ free tier) by changing one NGINX line —
 *     no client deploy needed.
 *
 * In development the same `/proxy/geocode/*` URL is rewritten by Vite's built-in proxy
 * (see vite.config.ts) to the same upstream. Application code is identical in dev + prod.
 *
 * The upstream API surface is Nominatim's — both Nominatim and LocationIQ implement it
 * compatibly, so the response parsing below works for either.
 *
 * https://nominatim.org/release-docs/develop/api/Reverse/
 * https://locationiq.com/docs (Nominatim-compatible)
 */

/** Same-origin URL — NGINX (prod) or Vite (dev) routes the request upstream. */
const GEOCODE_URL = "/proxy/geocode/reverse";

/** Client-side rate-limit: don't fire more than 1 request per 1.1s. Excess requests are
 *  dropped (returned as `rate-limited`). Fine for click-to-pin which happens at human
 *  speeds. The upstream has its own rate-limit too; this is just to be a good citizen. */
const MIN_INTERVAL_MS = 1100;
/** Number of automatic retries on a 5xx response. The upstream (Nominatim or its mirror)
 *  is occasionally degraded; one in-flight retry after a short delay covers most blips
 *  without making the user wait minutes. */
const MAX_RETRIES_ON_5XX = 1;
/** Delay (ms) before retrying a 5xx response. Short enough that the UI's "looking up…"
 *  doesn't outstay its welcome; long enough to give the upstream a chance to recover. */
const RETRY_DELAY_MS = 4000;

export interface PlaceName {
  /** Short display, e.g. "Bilbao, Spain". */
  short: string;
  /** Full hierarchy: "Bilbao, Bizkaia, Basque Country, Spain". */
  full: string;
  /** Lat/lon of the geocoded result — Nominatim snaps to the nearest feature. */
  lat: number;
  lon: number;
}

/**
 * Result discriminated by `status`. Lets callers distinguish:
 *   - **ok**: we have a name to show.
 *   - **no-name**: the upstream returned a valid response but the location has no
 *                  associated feature (e.g. open ocean). The pin coords are still
 *                  correct; just nothing to call the place. Caller should display "—".
 *   - **unavailable**: upstream returned 5xx (or network failure) after our retry.
 *                      The service is having a bad day; caller should display a
 *                      "service unavailable" message and try again later.
 *   - **rate-limited**: too soon since the last request (we throttle client-side).
 *                       The next pin click after MIN_INTERVAL_MS will succeed.
 *                       Caller can leave the previous message in place.
 */
export type GeocodeResult =
  | { status: "ok"; place: PlaceName }
  | { status: "no-name" }
  | { status: "unavailable" }
  | { status: "rate-limited" };

let lastRequest = 0;

export async function reverseGeocode(lat: number, lon: number): Promise<GeocodeResult> {
  const now = Date.now();
  if (now - lastRequest < MIN_INTERVAL_MS) {
    return { status: "rate-limited" };
  }
  lastRequest = now;

  const params = new URLSearchParams({
    format: "jsonv2",
    lat: lat.toFixed(5),
    lon: lon.toFixed(5),
    zoom: "10",       // ≈ city-sized features. Higher = more specific, lower = more general.
    addressdetails: "1",
  });
  const url = `${GEOCODE_URL}?${params.toString()}`;

  for (let attempt = 0; attempt <= MAX_RETRIES_ON_5XX; attempt++) {
    let res: Response;
    try {
      res = await fetch(url, { headers: { "Accept-Language": "en" } });
    } catch (err) {
      // Network failure (DNS, offline, etc.). Treat as unavailable; retrying might
      // recover if the user briefly lost connectivity.
      console.warn(`[earth-clock] geocoder fetch failed (attempt ${attempt + 1}):`, err);
      if (attempt < MAX_RETRIES_ON_5XX) {
        await sleep(RETRY_DELAY_MS);
        continue;
      }
      return { status: "unavailable" };
    }

    if (res.ok) {
      const data = await res.json().catch(() => null);
      if (!data || !data.display_name) return { status: "no-name" };

      const addr = data.address ?? {};
      const place = addr.city ?? addr.town ?? addr.village ?? addr.hamlet
                 ?? addr.suburb ?? addr.county ?? addr.state ?? addr.country ?? "";
      const country = addr.country ?? "";
      const short = place && country && place !== country
        ? `${place}, ${country}`
        : (place || country || data.display_name.split(",")[0]);

      return {
        status: "ok",
        place: { short, full: data.display_name, lat: parseFloat(data.lat), lon: parseFloat(data.lon) },
      };
    }

    // 5xx → upstream degraded, retry once.
    // 4xx → permanent (bad request, not-found, banned); don't retry.
    if (res.status >= 500 && attempt < MAX_RETRIES_ON_5XX) {
      console.warn(`[earth-clock] geocoder ${res.status} (attempt ${attempt + 1}), retrying in ${RETRY_DELAY_MS} ms`);
      await sleep(RETRY_DELAY_MS);
      continue;
    }
    console.warn(`[earth-clock] geocoder gave up: HTTP ${res.status}`);
    return { status: "unavailable" };
  }

  return { status: "unavailable" };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
