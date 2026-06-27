/**
 * build-timezone-bounds.mjs
 *
 * Generates public/data/timezone-bounds.json from the Natural Earth 110m timezone dataset.
 *
 * Usage:
 *   node build-timezone-bounds.mjs
 *
 * Requires: Node 18+ (built-in fetch).
 *
 * The output file enables "Real zones" mode in the timezone overlay (Menu → Geography → Real zones).
 * Without it, the layer gracefully falls back to nominal UTC meridian lines.
 *
 * Data source:
 *   Natural Earth ne_110m_time_zones — public domain, https://www.naturalearthdata.com/
 *   Hosted on the d3 CDN used by Observable / Vega:
 *   https://cdn.jsdelivr.net/npm/d3-geo@3/dist/... (no timezone data there)
 *
 *   We use the unpkg / jsDelivr mirror of the geojson.xyz CDN which serves processed GeoJSON:
 *   https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_time_zones.geojson
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH  = join(__dirname, "public", "data", "timezone-bounds.json");

// Try multiple CDN sources in order; the first one that returns valid JSON wins.
const NE_URLS = [
  // Natural Earth via naciscdn.org (Natural Earth's official CDN)
  "https://naciscdn.org/naturalearth/110m/cultural/ne_110m_time_zones.geojson",
  // GitHub raw (public repo, CORS-open) — reliable fallback
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_time_zones.geojson",
  // geojson.xyz CDN (original URL — may 404)
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_time_zones.geojson",
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function centroid(rings) {
  // Simple area-weighted centroid of the first (outer) ring.
  const ring = rings[0];
  let area = 0, cx = 0, cy = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    const [x0, y0] = ring[i];
    const [x1, y1] = ring[i + 1];
    const a = x0 * y1 - x1 * y0;
    area += a;
    cx   += (x0 + x1) * a;
    cy   += (y0 + y1) * a;
  }
  area /= 2;
  if (Math.abs(area) < 1e-9) {
    // Degenerate polygon — fall back to mean of vertices
    const xs = ring.map(p => p[0]), ys = ring.map(p => p[1]);
    return [xs.reduce((a, b) => a + b) / xs.length, ys.reduce((a, b) => a + b) / ys.length];
  }
  return [cx / (6 * area), cy / (6 * area)];
}

/** Parse a UTC offset string like "-5:00", "+5:30", "0:00" → hours as a number */
function parseOffset(str) {
  if (!str) return 0;
  const m = String(str).match(/^([+-]?\d+)(?::(\d+))?$/);
  if (!m) return 0;
  const h = parseInt(m[1], 10);
  const min = m[2] ? parseInt(m[2], 10) : 0;
  return h + (h < 0 ? -min / 60 : min / 60);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

let geojson;
for (const url of NE_URLS) {
  console.log(`Trying ${url} …`);
  try {
    const res = await fetch(url, { headers: { Accept: "application/json,*/*" } });
    if (!res.ok) { console.warn(`  → HTTP ${res.status}`); continue; }
    const text = await res.text();
    if (!text.trim().startsWith("{") && !text.trim().startsWith("[")) {
      console.warn("  → Response is not JSON (got HTML?)"); continue;
    }
    geojson = JSON.parse(text);
    console.log(`  ✓ OK`);
    break;
  } catch (err) {
    console.warn(`  → ${err.message}`);
  }
}
if (!geojson) {
  console.error(
    "\nAll CDN sources failed. Download ne_110m_time_zones.geojson manually from:",
    "\n  https://www.naturalearthdata.com/downloads/110m-cultural-vectors/",
    "\nPlace in the project root and run:  node build-timezone-bounds.mjs --local",
  );
  process.exit(1);
}

console.log(`Loaded ${geojson.features?.length ?? 0} features.`);

const zones = [];

for (const feat of geojson.features ?? []) {
  const props = feat.properties ?? {};
  // Natural Earth field names vary by version; try common aliases
  const tzid      = props.TZID ?? props.tzid ?? props.name ?? props.ZONE ?? "";
  const rawOffset = props.time_zone ?? props.UTC_OFFSET ?? props.utc_offset ?? props.zone ?? "0";
  const utcOffset = parseOffset(rawOffset);

  const geom = feat.geometry;
  if (!geom) continue;

  // Normalise to MultiPolygon
  const polys = geom.type === "Polygon"
    ? [geom.coordinates]
    : geom.type === "MultiPolygon"
    ? geom.coordinates
    : [];

  if (polys.length === 0) continue;

  // Compute centroid over the union of outer rings (pick the poly with largest area)
  let bestArea = -Infinity, bestCentroid = [0, 0];
  for (const rings of polys) {
    const ring = rings[0]; // outer ring
    if (!ring || ring.length < 3) continue;
    // Approximate area (shoelace)
    let area = 0;
    for (let i = 0; i < ring.length - 1; i++) {
      area += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
    }
    area = Math.abs(area) / 2;
    if (area > bestArea) {
      bestArea = area;
      bestCentroid = centroid(rings);
    }
  }

  // Collect all rings as flat [lon, lat][] arrays
  const rings = polys.flatMap(p => p);

  zones.push({
    tzid:      tzid || `UTC${utcOffset >= 0 ? "+" : ""}${utcOffset}`,
    utcOffset,
    centLon:   Math.round(bestCentroid[0] * 100) / 100,
    centLat:   Math.round(bestCentroid[1] * 100) / 100,
    rings:     rings.map(ring =>
      ring.map(([lon, lat]) => [
        Math.round(lon * 100) / 100,
        Math.round(lat * 100) / 100,
      ])
    ),
  });
}

// Sort by UTC offset for deterministic output
zones.sort((a, b) => a.utcOffset - b.utcOffset || a.tzid.localeCompare(b.tzid));

const out = { version: 1, generated: new Date().toISOString(), zones };
mkdirSync(join(__dirname, "public", "data"), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(out));

const sizeKB = Math.round(JSON.stringify(out).length / 1024);
console.log(`✓ Wrote ${zones.length} zones → ${OUT_PATH} (${sizeKB} KB)`);
console.log(
  "\nRestart the dev server / rebuild to serve the file.",
  "\nToggle: Menu → Geography → Real zones",
);
