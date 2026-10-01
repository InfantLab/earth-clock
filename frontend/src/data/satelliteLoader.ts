import type { OMMJsonObject } from "satellite.js";

/** One CelesTrak GP record (OMM JSON), as mirrored by satellite-service.js. */
export type OmmRecord = OMMJsonObject;

export interface SatelliteElements {
  /** Element sets keyed by NORAD catalogue number. */
  byNorad: Map<number, OmmRecord>;
  /** When the mirror last fetched from CelesTrak (server clock). */
  generated: Date | null;
  /** True when we fell back to the bundled snapshot (current.json missing / broken). */
  fallback: boolean;
}

export interface CrewMember { name: string; agency: string; since?: string }
export interface CrewManifest {
  /** ISO date the hand-edited list was last checked; null = never filled in. */
  updated: string | null;
  stations: Record<string, CrewMember[]>;
}

/**
 * Fetch mirrored orbital elements. satellite-service.js polls CelesTrak every ~4 h
 * (CelesTrak blocks clients that refetch faster than its data updates, so browsers
 * must never hit it directly) and writes /data/satellites/current.json. If that's
 * missing — local dev without the service, offline builds — fall back to the
 * committed snapshot /data/satellites/fallback.json.
 */
export async function fetchSatelliteElements(): Promise<SatelliteElements> {
  let firstErr: unknown;
  for (const [url, fallback] of [
    ["/data/satellites/current.json", false],
    ["/data/satellites/fallback.json", true],
  ] as const) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
      const data = await res.json();
      const byNorad = new Map<number, OmmRecord>();
      for (const rec of data.sats ?? []) {
        const id = Number(rec?.NORAD_CAT_ID);
        if (Number.isFinite(id) && typeof rec.EPOCH === "string") byNorad.set(id, rec);
      }
      if (byNorad.size === 0) throw new Error(`${url}: no element sets`);
      return { byNorad, generated: data.generated ? new Date(data.generated) : null, fallback };
    } catch (e) {
      firstErr ??= e;
    }
  }
  throw firstErr;
}

/** Hand-maintained crew list (satellites-plan.md §4.1). */
export async function fetchCrewManifest(): Promise<CrewManifest> {
  const res = await fetch("/data/satellites/crew.json");
  if (!res.ok) throw new Error(`crew.json: HTTP ${res.status}`);
  const data = await res.json();
  return { updated: data.updated ?? null, stations: data.stations ?? {} };
}
