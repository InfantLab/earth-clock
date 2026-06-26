/**
 * Bundled metadata for upcoming lunar eclipses 2026–2030.
 *
 * Sourced from NASA's eclipse catalog at
 * <https://eclipse.gsfc.nasa.gov/LEcat5/LE2021-2030.html> (Espenak / Meeus).
 *
 * Times are UTC. `startUtc` is **first penumbral contact** (P1), `endUtc` is
 * last penumbral contact (P4) — the whole window during which the moon shows
 * any darkening at all. `peakUtc` is greatest eclipse. `umbralMagnitude` is
 * the standard observational quantity: > 1.0 = total (moon fully inside
 * umbra), 0 < x ≤ 1.0 = partial, < 0 = penumbral only (no umbral contact).
 *
 * Lunar eclipses differ from solar in two important ways: (a) no path of
 * totality — the shadow is on the moon, not Earth, so the eclipse is visible
 * from the entire night-side hemisphere, and (b) much longer windows (often
 * 4–6 hours from P1 to P4 vs 4 hours for solar).
 */

export type LunarEclipseType = "total" | "partial" | "penumbral";

export interface LunarEclipseEvent {
  /** Canonical id (YYYYMMDD). */
  id: string;
  /** Human-readable name. */
  name: string;
  /** Where on Earth the moon is up during greatest eclipse. */
  region: string;
  /** Eclipse type. */
  type: LunarEclipseType;
  /** First penumbral contact (P1) — eclipse begins. */
  startUtc: Date;
  /** Greatest eclipse — moon deepest in Earth's shadow. */
  peakUtc: Date;
  /** Last penumbral contact (P4) — eclipse ends. */
  endUtc: Date;
  /** Umbral magnitude. > 1 = total, 0..1 = partial, < 0 = penumbral. The
   *  number used to drive moon-mesh dimming intensity at greatest. */
  umbralMagnitude: number;
  /** Total-eclipse duration in seconds (moon fully inside umbra). Zero for
   *  partial / penumbral. */
  totalitySec: number;
}

export const LUNAR_ECLIPSE_CATALOG: LunarEclipseEvent[] = [
  {
    id: "20260303",
    name: "Total lunar eclipse (2026)",
    region: "Pacific · Asia · Australia · Americas (Pacific Rim)",
    type: "total",
    startUtc: new Date("2026-03-03T08:39:00Z"),
    peakUtc:  new Date("2026-03-03T11:33:00Z"),
    endUtc:   new Date("2026-03-03T14:28:00Z"),
    umbralMagnitude: 1.151,
    totalitySec: 58 * 60, // ~58 minutes of totality
  },
  {
    id: "20260828",
    name: "Partial lunar eclipse (2026)",
    region: "Americas · Europe · Africa · west Asia",
    type: "partial",
    startUtc: new Date("2026-08-28T02:39:00Z"),
    peakUtc:  new Date("2026-08-28T04:54:00Z"),
    endUtc:   new Date("2026-08-28T07:38:00Z"),
    umbralMagnitude: 0.929,
    totalitySec: 0,
  },
  {
    id: "20280112",
    name: "Partial lunar eclipse (2028)",
    region: "Asia · Australia · Pacific",
    type: "partial",
    startUtc: new Date("2028-01-12T01:43:00Z"),
    peakUtc:  new Date("2028-01-12T04:13:00Z"),
    endUtc:   new Date("2028-01-12T06:42:00Z"),
    umbralMagnitude: 0.733,
    totalitySec: 0,
  },
  {
    id: "20281231",
    name: "Total lunar eclipse (2028)",
    region: "Europe · Africa · Asia · Americas",
    type: "total",
    startUtc: new Date("2028-12-31T14:08:00Z"),
    peakUtc:  new Date("2028-12-31T16:53:00Z"),
    endUtc:   new Date("2028-12-31T19:39:00Z"),
    umbralMagnitude: 1.250,
    totalitySec: 71 * 60, // ~71 minutes of totality
  },
  {
    id: "20290626",
    name: "Total lunar eclipse (2029) — deep totality",
    region: "Americas · Europe · Africa",
    type: "total",
    startUtc: new Date("2029-06-26T00:33:00Z"),
    peakUtc:  new Date("2029-06-26T03:23:00Z"),
    endUtc:   new Date("2029-06-26T06:13:00Z"),
    umbralMagnitude: 1.844, // exceptionally deep — moon passes near centre of umbra
    totalitySec: 102 * 60, // ~1h 42m of totality
  },
  {
    id: "20291220",
    name: "Total lunar eclipse (2029)",
    region: "Americas · Europe · Africa",
    type: "total",
    startUtc: new Date("2029-12-20T19:54:00Z"),
    peakUtc:  new Date("2029-12-20T22:42:00Z"),
    endUtc:   new Date("2029-12-21T01:31:00Z"),
    umbralMagnitude: 1.118,
    totalitySec: 54 * 60, // ~54 minutes of totality
  },
];

/** Find the soonest lunar eclipse whose end-time is after `now`. */
export function nextLunarEclipse(now: Date = new Date()): LunarEclipseEvent | null {
  const future = LUNAR_ECLIPSE_CATALOG
    .filter(e => e.endUtc.getTime() > now.getTime())
    .sort((a, b) => a.peakUtc.getTime() - b.peakUtc.getTime());
  return future[0] ?? null;
}

/** Look up a specific lunar eclipse by id. */
export function lunarEclipseById(id: string): LunarEclipseEvent | undefined {
  return LUNAR_ECLIPSE_CATALOG.find(e => e.id === id);
}

/**
 * Compute the umbral-shadow fraction at a given moment for a given lunar
 * eclipse. 0 = no shadow, 1 = peak (at `peakUtc`). Linear ramp from P1 → peak →
 * P4 because we're driving a dimming/tint uniform, not doing photometric
 * geometry. Returns 0 if `t` is outside the eclipse window.
 *
 * Used by main.ts to drive the moon mesh's emissiveIntensity + colour during
 * the warp-driven lunar eclipse playback.
 */
export function lunarEclipseFraction(event: LunarEclipseEvent, t: Date): number {
  const ms = t.getTime();
  const start = event.startUtc.getTime();
  const peak  = event.peakUtc.getTime();
  const end   = event.endUtc.getTime();
  if (ms <= start || ms >= end) return 0;
  if (ms <= peak) return (ms - start) / (peak - start);
  return (end - ms) / (end - peak);
}
