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
  | "total_precipitable_water"
  | "total_cloud_water"
  | "mean_sea_level_pressure";

export interface DataSource {
  getWindGrid(time: Date): Promise<WindGrid>;
  getOverlay(type: OverlayType, time: Date): Promise<Float32Array>;
}

// Minimal shape of a single GFS-JSON record (cambecc/earth format).
interface GfsRecord {
  header: {
    parameterNumber: number;       // 2 = U, 3 = V
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

  async getOverlay(_type: OverlayType, _time: Date): Promise<Float32Array> {
    throw new Error("LiveDataSource.getOverlay: not yet implemented");
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
