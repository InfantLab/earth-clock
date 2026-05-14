// Abstract data source — keeps the scene decoupled from how data is fetched.
// LiveDataSource hits the running data server (NOAA GRIB-derived JSON, same format as cambecc/earth).
// A future BundledDataSource would read from imported JSON for offline / Wallpaper Engine builds.

/**
 * A regular lon/lat wind grid. Layout matches the GFS source format:
 *   - data is row-major
 *   - row 0 spans lon=0..(360 - dx) at lat=la1 (typically north pole, +90)
 *   - row (height-1) spans the same longitudes at lat=la2 (typically south pole, -90)
 *   - longitude wraps modulo 360
 */
export interface WindGrid {
  readonly width: number;       // nx
  readonly height: number;      // ny
  readonly lo1: number;         // first column's longitude (typically 0)
  readonly la1: number;         // first row's latitude (typically +90)
  readonly dx: number;          // longitude step in degrees
  readonly dy: number;          // latitude step in degrees
  readonly u: Float32Array;     // east-positive m/s, packed [width*height]
  readonly v: Float32Array;     // north-positive m/s, packed [width*height]
  readonly validTime: Date;
}

export type OverlayType =
  | "wind"
  | "temp"
  | "relative_humidity"
  | "air_density"
  | "total_precipitable_water"
  | "total_cloud_water"
  | "total_cloud_cover"
  | "mean_sea_level_pressure";

/**
 * Single-band scalar lon/lat grid — same shape as `WindGrid` minus the second component.
 * Used for every non-wind overlay: temperature, RH, MSLP, TPW, TCW, air density.
 */
export interface ScalarGrid {
  readonly width: number;       // nx
  readonly height: number;      // ny
  readonly lo1: number;
  readonly la1: number;
  readonly dx: number;
  readonly dy: number;
  readonly data: Float32Array;  // packed [width*height]
  readonly validTime: Date;
  readonly parameterName: string;
  readonly parameterUnit: string;
}

export interface DataSource {
  getWindGrid(time: Date): Promise<WindGrid>;
  getScalar(type: Exclude<OverlayType, "wind">, time: Date): Promise<ScalarGrid>;
}

// Minimal shape of a single GFS-JSON record (cambecc/earth format).
interface GfsRecord {
  header: {
    parameterNumber: number;       // 2 = U, 3 = V
    parameterNumberName?: string;
    parameterUnit?: string;
    nx: number;
    ny: number;
    lo1: number;
    la1: number;
    dx: number;
    dy: number;
    refTime: string;
    forecastTime: number;
  };
  data: (number | null)[];
}

/** Map an overlay type to the JSON filename produced by `weather-service.js`. */
const SCALAR_FILENAME: Record<Exclude<OverlayType, "wind">, string> = {
  temp:                       "current-temp-surface-level-gfs-1.0.json",
  relative_humidity:          "current-relative_humidity-surface-level-gfs-1.0.json",
  air_density:                "current-air_density-surface-level-gfs-1.0.json",
  total_precipitable_water:   "current-total_precipitable_water-gfs-1.0.json",
  total_cloud_water:          "current-total_cloud_water-gfs-1.0.json",
  total_cloud_cover:          "current-total_cloud_cover-gfs-1.0.json",
  mean_sea_level_pressure:    "current-mean_sea_level_pressure-gfs-1.0.json",
};

export class LiveDataSource implements DataSource {
  readonly baseUrl: string;

  constructor(baseUrl: string = "/data") {
    this.baseUrl = baseUrl;
  }

  async getWindGrid(_time: Date): Promise<WindGrid> {
    // For now we always fetch the "current" file; date scrubbing will come later.
    const url = `${this.baseUrl}/weather/current/current-wind-surface-level-gfs-1.0.json`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Wind fetch failed: ${res.status} ${res.statusText}`);
    const records = (await res.json()) as GfsRecord[];

    const uRec = records.find(r => r.header.parameterNumber === 2);
    const vRec = records.find(r => r.header.parameterNumber === 3);
    if (!uRec || !vRec) throw new Error("Wind JSON missing U or V record");

    const { nx, ny, lo1, la1, dx, dy, refTime, forecastTime } = uRec.header;
    const u = nullSafeFloat32(uRec.data);
    const v = nullSafeFloat32(vRec.data);
    if (u.length !== nx * ny) throw new Error(`Wind data length ${u.length} ≠ nx*ny ${nx * ny}`);

    const valid = new Date(refTime);
    valid.setUTCHours(valid.getUTCHours() + (forecastTime ?? 0));

    return { width: nx, height: ny, lo1, la1, dx, dy, u, v, validTime: valid };
  }

  async getScalar(type: Exclude<OverlayType, "wind">, _time: Date): Promise<ScalarGrid> {
    const filename = SCALAR_FILENAME[type];
    if (!filename) throw new Error(`Unknown scalar overlay type: ${type}`);
    const url = `${this.baseUrl}/weather/current/${filename}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Scalar ${type} fetch failed: ${res.status} ${res.statusText}`);
    const records = (await res.json()) as GfsRecord[];
    if (!records.length) throw new Error(`Scalar ${type}: empty records`);

    const rec = records[0];
    const { nx, ny, lo1, la1, dx, dy, refTime, forecastTime } = rec.header;
    const data = nullSafeFloat32(rec.data);
    if (data.length !== nx * ny) {
      throw new Error(`Scalar ${type} data length ${data.length} ≠ nx*ny ${nx * ny}`);
    }

    const valid = new Date(refTime);
    valid.setUTCHours(valid.getUTCHours() + (forecastTime ?? 0));

    return {
      width: nx, height: ny, lo1, la1, dx, dy, data,
      validTime: valid,
      parameterName: rec.header.parameterNumberName ?? type,
      parameterUnit: rec.header.parameterUnit ?? "",
    };
  }
}

/** Convert GFS-style data (numbers + possibly nulls) to a Float32Array. Nulls become 0. */
function nullSafeFloat32(data: readonly (number | null)[]): Float32Array {
  const out = new Float32Array(data.length);
  for (let i = 0; i < data.length; i++) {
    const v = data[i];
    out[i] = v == null || !Number.isFinite(v) ? 0 : v;
  }
  return out;
}
