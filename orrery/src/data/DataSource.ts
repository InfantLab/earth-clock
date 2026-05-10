// Abstract data source — keeps the scene decoupled from how data is fetched.
// LiveDataSource hits the running data server (NOAA GRIB-derived JSON).
// A future BundledDataSource would read from imported JSON for offline / Wallpaper Engine builds.

export interface WindGrid {
  readonly width: number;
  readonly height: number;
  readonly u: Float32Array; // east-component, packed [width*height]
  readonly v: Float32Array; // north-component, packed [width*height]
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

export class LiveDataSource implements DataSource {
  readonly baseUrl: string;

  constructor(baseUrl: string = "/data") {
    this.baseUrl = baseUrl;
  }

  async getWindGrid(_time: Date): Promise<WindGrid> {
    // TODO: hit `${this.baseUrl}/weather/current/current-wind-surface-level-gfs-1.0.json`
    // and decode into Float32Arrays. Stubbed for scaffold.
    throw new Error("LiveDataSource.getWindGrid: not yet implemented");
  }

  async getOverlay(_type: OverlayType, _time: Date): Promise<Float32Array> {
    throw new Error("LiveDataSource.getOverlay: not yet implemented");
  }
}
