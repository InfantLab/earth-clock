import * as THREE from "three";

const GIBS_BASE = "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best";

export interface GibsTileOptions {
  /** Layer identifier, e.g. "VIIRS_NOAA20_CorrectedReflectance_TrueColor". */
  layer: string;
  /** Date the mosaic is for. UTC date is used (toISOString slice). */
  date: Date;
  /** GIBS TileMatrixSet — `"250m"`, `"500m"`, `"1km"`, etc. controls native max resolution. */
  tileMatrixSet: string;
  /** Zoom level. EPSG:4326 grid is (2*2^z) × (2^z) tiles. zoom=1 → 4×2 = 8 tiles, 512px each. */
  zoom: number;
  /** Tile file extension — `"jpg"` for true-color products, `"png"` for layers with alpha. */
  ext: "jpg" | "png";
}

/**
 * Fetch a global WMTS layer from NASA GIBS and assemble all tiles into a single
 * equirectangular `THREE.CanvasTexture` at lon=-180 → +180, lat=+90 → -90.
 *
 * GIBS uses CORS-friendly headers, so tiles can be loaded with `crossOrigin="anonymous"`
 * and drawn into a canvas without tainting it.
 */
export async function fetchGibsTexture(opts: GibsTileOptions): Promise<THREE.CanvasTexture> {
  const { layer, date, tileMatrixSet, zoom, ext } = opts;
  // EPSG:4326 tile grid: always 2:1 columns:rows
  const cols = 2 * (1 << zoom);
  const rows = 1 << zoom;
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
 * NASA publishes the daily VIIRS true-color mosaic region-by-region, so the most recent
 * days can be partial — typically the Pacific / East Asia tiles (col=3 at zoom 1) lag
 * the Americas tiles by several hours, producing 400 responses on incomplete tiles.
 * Lagging by 2 days is the default conservative starting point; if that still fails,
 * `fetchGibsTextureWithFallback()` walks the date back further until every tile loads.
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
