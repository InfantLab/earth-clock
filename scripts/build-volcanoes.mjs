/**
 * build-volcanoes.mjs
 *
 * Generates public/data/volcanoes.json from the Smithsonian Global Volcanism
 * Program's "Volcanoes of the World" (VOTW) Holocene volcano database.
 *
 * Usage:
 *   node scripts/build-volcanoes.mjs
 *
 * Requires: Node 18+ (built-in fetch).
 *
 * GVP volcano locations are effectively static (new volcanoes are vanishingly
 * rare additions), so this is a one-time fetch — like build-plates.mjs and
 * build-timezone-bounds.mjs — not a polling service.
 *
 * Data source:
 *   Smithsonian Institution, Global Volcanism Program — GeoServer WFS.
 *   https://volcano.si.edu/ · https://webservices.volcano.si.edu/
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH  = join(__dirname, "..", "public", "data", "volcanoes.json");

const SOURCE_URL =
  "https://webservices.volcano.si.edu/geoserver/GVP-VOTW/ows" +
  "?service=WFS&version=2.0.0&request=GetFeature" +
  "&typeNames=GVP-VOTW:Smithsonian_VOTW_Holocene_Volcanoes" +
  "&outputFormat=application/json";

console.log(`Fetching ${SOURCE_URL} …`);
const res = await fetch(SOURCE_URL);
if (!res.ok) {
  console.error(`HTTP ${res.status} fetching GVP volcano list`);
  process.exit(1);
}
const geojson = await res.json();
console.log(`Loaded ${geojson.features?.length ?? 0} volcano features.`);

// Trim to what the frontend renders — name, position, type, country, and last-eruption
// year (used later to distinguish "historically active" from "dormant/extinct" markers).
// Drop the long geological-summary prose and photo credits; they're not shown in-app.
const round = n => Math.round(n * 1000) / 1000;
const volcanoes = [];
for (const feat of geojson.features ?? []) {
  const p = feat.properties ?? {};
  if (typeof p.Latitude !== "number" || typeof p.Longitude !== "number") continue;
  volcanoes.push({
    id: p.Volcano_Number,
    name: p.Volcano_Name,
    lat: round(p.Latitude),
    lon: round(p.Longitude),
    type: p.Primary_Volcano_Type,
    country: p.Country,
    lastEruptionYear: typeof p.Last_Eruption_Year === "number" ? p.Last_Eruption_Year : null,
  });
}

const out = { version: 1, generated: new Date().toISOString(), source: "Smithsonian GVP · Volcanoes of the World (Holocene)", volcanoes };
mkdirSync(join(__dirname, "..", "public", "data"), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(out));

const sizeKB = Math.round(JSON.stringify(out).length / 1024);
console.log(`✓ Wrote ${volcanoes.length} volcanoes → ${OUT_PATH} (${sizeKB} KB)`);
