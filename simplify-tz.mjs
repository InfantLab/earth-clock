/**
 * simplify-tz.mjs
 * Converts the evansiroky timezone-boundary-builder combined.json (160 MB) into a
 * compact timezone-bounds.json (< 1 MB) using RDP polygon simplification.
 *
 * Input:  %TEMP%\tz_extract\combined.json   (already downloaded)
 * Output: public/data/timezone-bounds.json
 *
 * Usage: node simplify-tz.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import os from "os";

const __dirname  = dirname(fileURLToPath(import.meta.url));
const INPUT_FILE = join(os.tmpdir(), "tz_extract", "combined.json");
const OUT_FILE   = join(__dirname, "public", "data", "timezone-bounds.json");
const TOLERANCE  = 0.4;   // degrees – ≈ 44 km at equator; keeps shapes accurate enough to not overlap
const MIN_RING   = 4;     // drop rings that collapse to fewer than 4 points

// ---- RDP simplification ----
function rdp(pts, tol) {
  if (pts.length <= 2) return pts;
  const [x1, y1] = pts[0];
  const [x2, y2] = pts[pts.length - 1];
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  let maxDist = 0, maxIdx = 1;
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i];
    const dist = len > 0
      ? Math.abs(dy * px - dx * py + x2 * y1 - y2 * x1) / len
      : Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
    if (dist > maxDist) { maxDist = dist; maxIdx = i; }
  }
  if (maxDist > tol) {
    const l = rdp(pts.slice(0, maxIdx + 1), tol);
    const r = rdp(pts.slice(maxIdx), tol);
    return [...l.slice(0, -1), ...r];
  }
  return [pts[0], pts[pts.length - 1]];
}

// ---- Get UTC standard offset for a timezone name ----
function utcOffset(tzid) {
  try {
    // Use January to get standard time offset (DST not active in N hemisphere winter)
    const d = new Date("2024-01-15T12:00:00Z");
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: tzid, hour: "numeric", minute: "2-digit", hour12: false,
    }).formatToParts(d);
    const h = parseInt(parts.find(p => p.type === "hour")?.value ?? "0") % 24;
    const m = parseInt(parts.find(p => p.type === "minute")?.value ?? "0");
    let diff = (h * 60 + m) - 12 * 60;
    if (diff > 840)  diff -= 1440;
    if (diff < -840) diff += 1440;
    return diff / 60;
  } catch {
    return 0;
  }
}

// ---- Main ----
console.log(`Reading ${INPUT_FILE} …`);
const raw = JSON.parse(readFileSync(INPUT_FILE, "utf8"));
console.log(`Features: ${raw.features?.length ?? 0}`);

// Group polygon rings by tzid
const byTz = new Map();
for (const feat of raw.features ?? []) {
  const tzid = feat.properties?.tzid ?? "Unknown";
  if (!byTz.has(tzid)) byTz.set(tzid, []);
  const geom = feat.geometry;
  const polys = geom?.type === "Polygon"       ? [geom.coordinates]
              : geom?.type === "MultiPolygon"   ? geom.coordinates
              : [];
  for (const poly of polys) {
    for (const ring of poly) byTz.get(tzid).push(ring);
  }
}
console.log(`Unique timezone ids: ${byTz.size}`);

const zones = [];
let totalPtsIn = 0, totalPtsOut = 0;

for (const [tzid, rings] of byTz.entries()) {
  const offset = utcOffset(tzid);

  // Centroid: bounding-box centre of the largest ring (by shoelace area)
  let bestArea = 0, centLon = 0, centLat = 0;
  for (const ring of rings) {
    if (!ring?.length) continue;
    let area = 0, minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
    for (let i = 0; i < ring.length - 1; i++) {
      const [x0, y0] = ring[i], [x1, y1] = ring[i + 1];
      area += Math.abs(x0 * y1 - x1 * y0);
      if (x0 < minLon) minLon = x0; if (x0 > maxLon) maxLon = x0;
      if (y0 < minLat) minLat = y0; if (y0 > maxLat) maxLat = y0;
    }
    area /= 2;
    if (area > bestArea) {
      bestArea = area;
      centLon = (minLon + maxLon) / 2;
      centLat = (minLat + maxLat) / 2;
    }
  }

  // Simplify
  const simplified = [];
  for (const ring of rings) {
    totalPtsIn += ring.length;
    const s = rdp(ring, TOLERANCE);
    totalPtsOut += s.length;
    if (s.length >= MIN_RING) {
      simplified.push(s.map(([lon, lat]) => [
        Math.round(lon * 100) / 100,
        Math.round(lat * 100) / 100,
      ]));
    }
  }
  if (!simplified.length) continue;

  zones.push({
    tzid,
    utcOffset: offset,
    centLon: Math.round(centLon * 100) / 100,
    centLat: Math.round(centLat * 100) / 100,
    rings: simplified,
  });
}

zones.sort((a, b) => a.utcOffset - b.utcOffset || a.tzid.localeCompare(b.tzid));

const out = { version: 1, generated: new Date().toISOString(), zones };
const json = JSON.stringify(out);
mkdirSync(join(__dirname, "public", "data"), { recursive: true });
writeFileSync(OUT_FILE, json);

const sizeKB = Math.round(json.length / 1024);
const reduction = Math.round((1 - totalPtsOut / totalPtsIn) * 100);
console.log(`✓ ${zones.length} zones, ${sizeKB} KB  (${reduction}% point reduction)`);
console.log(`  → ${OUT_FILE}`);
