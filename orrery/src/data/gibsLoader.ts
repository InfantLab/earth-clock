import * as THREE from "three";

const GIBS_BASE = "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best";

export interface GibsTileOptions {
  /** Layer identifier, e.g. "VIIRS_NOAA20_CorrectedReflectance_TrueColor". */
  layer: string;
  /** Date the mosaic is for. UTC date is used (toISOString slice). */
  date: Date;
  /** GIBS TileMatrixSet — `"250m"`, `"500m"`, `"1km"`, etc. controls native max resolution. */
  tileMatrixSet: string;
  /** Zoom level. Matrix dimensions per zoom are looked up from MATRIX_DIMS (parsed from
   *  GIBS WMTSCapabilities). Resolution-driven sets like `250m` do NOT pure-double; see
   *  table below. zoom=1 in `250m` → 3×2 = 6 tiles, 512px each. */
  zoom: number;
  /** Tile file extension — `"jpg"` for true-color products, `"png"` for layers with alpha. */
  ext: "jpg" | "png";
}

/**
 * Matrix dimensions `[cols, rows]` per zoom level, per TileMatrixSet. These come from
 * GIBS' WMTSCapabilities XML and **do not follow pure powers-of-two doubling** — they
 * track the resolution chain (250m → 500m → 1km → 2km → 4km → 8km → …). Requesting a
 * col/row outside this range always returns HTTP 400, regardless of date, which is what
 * was masking as "regional publishing lag" earlier.
 *
 * If you need a TileMatrixSet that's not listed here, fetch
 * `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?SERVICE=WMTS&REQUEST=GetCapabilities`
 * and read the `<TileMatrix>` blocks for `<TileMatrixSet>` of interest. The values are:
 *   `MatrixWidth` → cols, `MatrixHeight` → rows.
 */
const MATRIX_DIMS: Record<string, Array<[number, number]>> = {
  // [zoom 0, zoom 1, zoom 2, zoom 3, zoom 4, zoom 5, zoom 6, zoom 7, zoom 8]
  "250m":  [[2, 1], [3, 2], [5, 3], [10, 5], [20, 10], [40, 20], [80, 40], [160, 80], [320, 160]],
  "500m":  [[2, 1], [3, 2], [5, 3], [10, 5], [20, 10], [40, 20], [80, 40], [160, 80]],
  "1km":   [[2, 1], [3, 2], [5, 3], [10, 5], [20, 10], [40, 20], [80, 40]],
  "2km":   [[2, 1], [3, 2], [5, 3], [10, 5], [20, 10], [40, 20]],
};

/**
 * Fetch a global WMTS layer from NASA GIBS and assemble all tiles into a single
 * equirectangular `THREE.CanvasTexture` at lon=-180 → +180, lat=+90 → -90.
 *
 * GIBS uses CORS-friendly headers, so tiles can be loaded with `crossOrigin="anonymous"`
 * and drawn into a canvas without tainting it.
 */
export async function fetchGibsTexture(opts: GibsTileOptions): Promise<THREE.CanvasTexture> {
  const { layer, date, tileMatrixSet, zoom, ext } = opts;
  const dims = MATRIX_DIMS[tileMatrixSet];
  if (!dims) {
    throw new Error(`GIBS loader: unknown TileMatrixSet "${tileMatrixSet}" — add its matrix dims to MATRIX_DIMS`);
  }
  if (zoom < 0 || zoom >= dims.length) {
    throw new Error(`GIBS loader: zoom ${zoom} out of range for TileMatrixSet "${tileMatrixSet}" (max ${dims.length - 1})`);
  }
  const [cols, rows] = dims[zoom];
  const tileSize = 512; // GIBS WMTS native tile size for EPSG:4326

  const dateStr = date.toISOString().slice(0, 10);

  const canvas = document.createElement("canvas");
  canvas.width = cols * tileSize;
  canvas.height = rows * tileSize;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("GIBS loader: cannot get 2D canvas context");

  const tilePromises: Promise<void>[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const url = `${GIBS_BASE}/${layer}/default/${dateStr}/${tileMatrixSet}/${zoom}/${row}/${col}.${ext}`;
      tilePromises.push(drawTile(url, ctx, col * tileSize, row * tileSize));
    }
  }
  await Promise.all(tilePromises);

  // Within-tile coverage check. VIIRS daily mosaics can have triangular no-data wedges
  // where a recent orbital swath hasn't been published yet — tiles return HTTP 200 with
  // the no-data area encoded as solid black in the JPG. Sample a coarse grid; if too
  // many samples are pure black, the day is incomplete and we should fall back further.
  const NODATA_LUMA_THRESH = 6;   // sRGB byte; real ocean is ~30+, polar night is dark but rarely <6
  const NODATA_MAX_FRAC    = 0.05; // > 5 % black → reject as incomplete (sahara/antarctica are bright)
  const samplesX = 32, samplesY = 16; // 512 sample points
  let nodataCount = 0;
  for (let sy = 0; sy < samplesY; sy++) {
    for (let sx = 0; sx < samplesX; sx++) {
      const x = Math.floor((sx + 0.5) * canvas.width  / samplesX);
      const y = Math.floor((sy + 0.5) * canvas.height / samplesY);
      const p = ctx.getImageData(x, y, 1, 1).data;
      // BT.601 luma (cheap; canvas data is sRGB-encoded so this is approximate but fine here)
      const luma = 0.299 * p[0] + 0.587 * p[1] + 0.114 * p[2];
      if (luma < NODATA_LUMA_THRESH) nodataCount++;
    }
  }
  const nodataFrac = nodataCount / (samplesX * samplesY);
  if (nodataFrac > NODATA_MAX_FRAC) {
    throw new Error(
      `GIBS mosaic incomplete: ${(nodataFrac * 100).toFixed(1)}% no-data pixels (date ${dateStr})`,
    );
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;        // longitude wraps
  tex.wrapT = THREE.ClampToEdgeWrapping;   // latitude clamps at poles
  tex.colorSpace = THREE.SRGBColorSpace;   // tiles are sRGB-encoded
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

function drawTile(
  url: string,
  ctx: CanvasRenderingContext2D,
  dx: number,
  dy: number
): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      ctx.drawImage(img, dx, dy);
      resolve();
    };
    img.onerror = () => reject(new Error(`GIBS tile failed to load: ${url}`));
    img.src = url;
  });
}

/**
 * Get a UTC date for which a daily GIBS mosaic is *likely* fully published.
 *
 * VIIRS NOAA-20 makes ~14 polar orbits per UTC day. The daily mosaic stitches those
 * orbital swaths together — but the most recent orbits typically lag publication by
 * several hours, so yesterday's mosaic can have triangular no-data wedges where a swath
 * hasn't been processed yet. Tiles still return HTTP 200 (so the fallback loop's
 * tile-failure path can't catch this), they just contain transparent pixels inside.
 *
 * Two days back is the sweet spot for "complete coverage" without sacrificing freshness.
 */
export function bestAvailableDailyDate(now: Date = new Date()): Date {
  const d = new Date(now);
  d.setUTCDate(d.getUTCDate() - 2);
  return d;
}

/**
 * Try `fetchGibsTexture` for a sequence of progressively-older dates, returning the
 * first one whose every tile loaded successfully. Useful for GIBS layers where the
 * most-recent dates can have missing tiles (regional publishing lag).
 *
 * Walks back up to `maxDaysBack` days from the caller's preferred start date. Throws
 * if every attempt fails. Logs each attempt so the diagnostic overlay can show the
 * progression.
 */
export async function fetchGibsTextureWithFallback(
  opts: Omit<GibsTileOptions, "date"> & {
    /** First date to try. Default: `bestAvailableDailyDate(now)` (2 days ago). */
    startDate?: Date;
    /** Maximum number of older dates to try after `startDate` before giving up. */
    maxDaysBack?: number;
    /** Optional progress callback for each failed attempt — fired with the failing date and error. */
    onAttempt?: (date: Date, error: Error) => void;
  },
): Promise<{ texture: THREE.CanvasTexture; date: Date }> {
  const start = opts.startDate ?? bestAvailableDailyDate();
  const maxDaysBack = opts.maxDaysBack ?? 7;
  let lastErr: Error | null = null;
  for (let i = 0; i <= maxDaysBack; i++) {
    const date = new Date(start);
    date.setUTCDate(date.getUTCDate() - i);
    try {
      const texture = await fetchGibsTexture({ ...opts, date });
      return { texture, date };
    } catch (err) {
      lastErr = err instanceof Error ? err : new Error(String(err));
      opts.onAttempt?.(date, lastErr);
    }
  }
  throw lastErr ?? new Error("GIBS fetch failed for every fallback date");
}
