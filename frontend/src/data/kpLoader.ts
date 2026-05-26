const KP_URL = "https://services.swpc.noaa.gov/json/planetary_k_index_1m.json";

export interface KpReading {
  /** Sample time (UTC). */
  time: Date;
  /** Planetary K-index, 0-9. Higher = more active aurora, visible further from poles. */
  kp: number;
}

/**
 * Fetch the latest planetary K-index reading from NOAA SWPC.
 *
 * Endpoint returns an array of 1-minute samples; the latest is at the end. Kp is the
 * authoritative global geomagnetic activity number (0-9) that determines how far from
 * the poles aurora is visible:
 *
 *   Kp 0-2: aurora confined to high arctic / antarctic (≥66°N)
 *   Kp 3-4: visible from northern Scotland / Maine / Alberta (~60°N)
 *   Kp 5  : minor storm — visible from northern England / mid-US (~55°N)
 *   Kp 6  : moderate storm — visible from central UK / Pennsylvania (~52°N)
 *   Kp 7-8: strong storm — visible from London / Tennessee (~45-50°N)
 *   Kp 9  : severe storm — visible from southern Europe / Texas (~40°N)
 *
 * CORS-clean, no auth, refreshes every ~minute (we poll every 5 min — Kp doesn't change
 * fast enough to warrant more).
 */
export async function fetchLatestKp(): Promise<KpReading> {
  const res = await fetch(KP_URL);
  if (!res.ok) throw new Error(`Kp fetch failed: ${res.status}`);
  const json = await res.json();
  if (!Array.isArray(json) || json.length === 0) {
    throw new Error("Kp: empty response");
  }
  const last = json[json.length - 1];
  const kp = parseFloat(last.kp_index ?? last.estimated_kp ?? last.kp);
  if (!Number.isFinite(kp)) {
    throw new Error(`Kp: could not parse value from ${JSON.stringify(last)}`);
  }
  return { time: new Date(last.time_tag), kp };
}

/** Plain-language description of a Kp value. Matches NOAA's G-scale where applicable. */
export function kpActivityLabel(kp: number): string {
  if (kp < 2)  return "very quiet";
  if (kp < 3)  return "quiet";
  if (kp < 4)  return "unsettled";
  if (kp < 5)  return "active";
  if (kp < 6)  return "minor storm (G1)";
  if (kp < 7)  return "moderate storm (G2)";
  if (kp < 8)  return "strong storm (G3)";
  if (kp < 9)  return "severe storm (G4)";
  return "extreme storm (G5)";
}

/**
 * Approximate equatorward boundary of the auroral oval at a given Kp. Useful for telling
 * a user "aurora visible from latitudes above ~X°". Rough table derived from typical
 * observations — actual visibility depends on local geomagnetic offset and weather.
 */
export function kpVisibleLatitude(kp: number): number {
  // Linear interpolation between the canonical Kp → magnetic-latitude pairs.
  const table: [number, number][] = [
    [0, 67], [1, 64], [2, 62], [3, 60], [4, 57],
    [5, 55], [6, 52], [7, 49], [8, 46], [9, 43],
  ];
  const k = Math.max(0, Math.min(9, kp));
  for (let i = 0; i < table.length - 1; i++) {
    const [kLo, latLo] = table[i];
    const [kHi, latHi] = table[i + 1];
    if (k >= kLo && k <= kHi) {
      const t = (k - kLo) / (kHi - kLo);
      return Math.round(latLo + t * (latHi - latLo));
    }
  }
  return 67;
}
