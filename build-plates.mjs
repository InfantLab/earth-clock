/**
 * build-plates.mjs
 *
 * Generates public/data/plates.json from Peter Bird's PB2002 tectonic plate
 * boundary dataset, mirrored as GeoJSON by fraxen/tectonicplates.
 *
 * Usage:
 *   node build-plates.mjs
 *
 * Requires: Node 18+ (built-in fetch).
 *
 * PB2002 boundaries are effectively static on human timescales, so this is a
 * one-time fetch (like build-timezone-bounds.mjs), not a polling service.
 *
 * Data source:
 *   Bird, P. (2003), "An updated digital model of plate boundaries",
 *   Geochemistry, Geophysics, Geosystems, 4(3).
 *   Mirrored as GeoJSON: https://github.com/fraxen/tectonicplates
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH  = join(__dirname, "public", "data", "plates.json");

const SOURCE_URL =
  "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

console.log(`Fetching ${SOURCE_URL} …`);
const res = await fetch(SOURCE_URL);
if (!res.ok) {
  console.error(`HTTP ${res.status} fetching plate boundaries`);
  process.exit(1);
}
const geojson = await res.json();
console.log(`Loaded ${geojson.features?.length ?? 0} boundary features.`);

// Trim to just the coordinate chains the frontend needs — no per-boundary metadata
// (plate names, source citations) is rendered yet, so drop it to keep the bundle small.
// Round to 3 decimal places (~110 m) — plenty for a line drawn on a 3D globe.
const round = n => Math.round(n * 1000) / 1000;
const lines = [];
for (const feat of geojson.features ?? []) {
  const geom = feat.geometry;
  if (!geom) continue;
  const chains = geom.type === "LineString" ? [geom.coordinates]
               : geom.type === "MultiLineString" ? geom.coordinates
               : [];
  for (const chain of chains) {
    if (chain.length < 2) continue;
    lines.push(chain.map(([lon, lat]) => [round(lon), round(lat)]));
  }
}

const out = { version: 1, generated: new Date().toISOString(), source: "PB2002 (Bird 2003) via fraxen/tectonicplates", lines };
mkdirSync(join(__dirname, "public", "data"), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(out));

const sizeKB = Math.round(JSON.stringify(out).length / 1024);
console.log(`✓ Wrote ${lines.length} boundary lines → ${OUT_PATH} (${sizeKB} KB)`);
