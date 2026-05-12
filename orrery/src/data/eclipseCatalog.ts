/**
 * Bundled metadata for upcoming and historically notable solar eclipses.
 *
 * Numbers (peak times, durations, regions) are from NASA's eclipse catalog at
 * https://eclipse.gsfc.nasa.gov/SEcat5/SE2021-2030.html. Times are UTC; the start /
 * end times are the "first contact" / "last contact" over Earth — the whole window
 * during which any partial eclipse is visible somewhere on the planet.
 *
 * The 2026-08-12 Spain eclipse is the project's headline event — orrery aims to be
 * the canonical visualisation for it. The 2027-08-02 follow-up is the longest-totality
 * eclipse over Spain in decades (over 6 minutes near Cádiz).
 */

export interface EclipseEvent {
  /** Short canonical id, used in URLs / debug logs. */
  id: string;
  /** Human-readable name. */
  name: string;
  /** Description of the path-of-totality region. */
  region: string;
  /** Eclipse type: total (umbra reaches surface), annular (ring), hybrid, or partial. */
  type: "total" | "annular" | "hybrid" | "partial";
  /** Peak time UTC — moment of greatest eclipse. */
  peakUtc: Date;
  /** First contact UTC — the eclipse begins somewhere on Earth. */
  startUtc: Date;
  /** Last contact UTC — the eclipse ends somewhere on Earth. */
  endUtc: Date;
  /** Maximum totality duration along the path, in seconds. */
  maxTotalitySec: number;
}

export const ECLIPSE_CATALOG: EclipseEvent[] = [
  {
    id: "20260812",
    name: "Spain total solar eclipse (2026)",
    region: "Iceland → Greenland → northern Spain",
    type: "total",
    peakUtc:  new Date("2026-08-12T17:46:00Z"),
    startUtc: new Date("2026-08-12T15:34:00Z"),
    endUtc:   new Date("2026-08-12T19:58:00Z"),
    maxTotalitySec: 134,  // ~2 min 14 s near Iceland
  },
  {
    id: "20270802",
    name: "Long-duration total solar eclipse over Spain & North Africa (2027)",
    region: "Atlantic → Gibraltar → Spain → Egypt → Saudi Arabia",
    type: "total",
    peakUtc:  new Date("2027-08-02T10:07:00Z"),
    startUtc: new Date("2027-08-02T07:30:00Z"),
    endUtc:   new Date("2027-08-02T12:43:00Z"),
    maxTotalitySec: 384,  // ~6 min 23 s — longest totality of the century in the Atlantic
  },
  {
    id: "20280722",
    name: "Australia & New Zealand total solar eclipse (2028)",
    region: "Indian Ocean → central Australia → Sydney → New Zealand",
    type: "total",
    peakUtc:  new Date("2028-07-22T02:56:00Z"),
    startUtc: new Date("2028-07-22T00:30:00Z"),
    endUtc:   new Date("2028-07-22T05:23:00Z"),
    maxTotalitySec: 310,
  },
  {
    id: "20240408",
    name: "North American total solar eclipse (2024)",
    region: "Mexico → Texas → Indianapolis → Ohio → eastern Canada",
    type: "total",
    peakUtc:  new Date("2024-04-08T18:18:00Z"),
    startUtc: new Date("2024-04-08T15:42:00Z"),
    endUtc:   new Date("2024-04-08T20:52:00Z"),
    maxTotalitySec: 268,
  },
];

/** Find the soonest eclipse whose end-time is after `now` (i.e. upcoming or in-progress). */
export function nextEclipse(now: Date = new Date()): EclipseEvent | null {
  const future = ECLIPSE_CATALOG
    .filter(e => e.endUtc.getTime() > now.getTime())
    .sort((a, b) => a.peakUtc.getTime() - b.peakUtc.getTime());
  return future[0] ?? null;
}

/** Look up a specific eclipse by id (matches the YYYYMMDD format). */
export function eclipseById(id: string): EclipseEvent | undefined {
  return ECLIPSE_CATALOG.find(e => e.id === id);
}
