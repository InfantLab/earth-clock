export interface EarthquakeEvent {
  lat: number;
  lon: number;
  /** Richter/moment magnitude. */
  mag: number;
  depthKm: number;
  /** Event time, epoch ms. */
  timeMs: number;
  place: string;
}

export interface EarthquakeGrid {
  events: EarthquakeEvent[];
  fetchedAt: Date;
}

/**
 * Fetch the past-week earthquake feed. USGS sends no CORS headers, so
 * earthquake-service.js polls server-side and writes a trimmed passthrough
 * to public/data/earthquakes/current.json for same-origin fetch here.
 */
export async function fetchEarthquakes(): Promise<EarthquakeGrid> {
  const res = await fetch("/data/earthquakes/current.json");
  if (!res.ok) throw new Error(`Earthquakes fetch failed: ${res.status}`);
  const data = await res.json();

  const events: EarthquakeEvent[] = (data.events ?? [])
    .filter((e: any) => Number.isFinite(e.lat) && Number.isFinite(e.lon))
    .map((e: any) => ({
      lat: e.lat,
      lon: e.lon,
      mag: typeof e.mag === "number" ? e.mag : 0,
      depthKm: typeof e.depthKm === "number" ? e.depthKm : 0,
      timeMs: e.timeMs,
      place: e.place ?? "",
    }));

  return { events, fetchedAt: new Date() };
}
