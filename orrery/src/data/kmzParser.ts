import { unzipSync, strFromU8 } from "fflate";

/**
 * Fetch + decompress an NHC KMZ file and extract its geometry.
 *
 * A KMZ is a ZIP archive containing a single KML XML file. NHC's storm KMZs are small
 * (typically <50 KB) and contain `<Placemark>` elements:
 *
 *   - `<LineString>` → the track polyline (past positions, forecast positions)
 *   - `<Polygon>` → the forecast cone (uncertainty envelope)
 *
 * Each carries a `<coordinates>` text node: whitespace-separated triples of
 * `lon,lat,alt`. We ignore altitude (always 0 for these layers).
 *
 * NHC's URLs are `https://www.nhc.noaa.gov/...` — CORS-blocked. The caller passes the
 * **proxy-rewritten** path (`/proxy/nhc/...`) so dev (Vite) and prod (NGINX) both work.
 */

export type KmlGeometryType = "line" | "polygon";

export interface KmlGeometry {
  type: KmlGeometryType;
  /** Geographic coordinates: `[lon, lat][]` in degrees. Polygons close back to first vertex. */
  coords: Array<[number, number]>;
  /** Optional Placemark name from the KML, useful for debug logging. */
  name?: string;
}

export async function fetchAndParseKmz(url: string): Promise<KmlGeometry[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`KMZ fetch failed: ${res.status} ${url}`);
  const buf = new Uint8Array(await res.arrayBuffer());
  return parseKmz(buf);
}

/** Decompress a KMZ buffer and parse the first KML file inside it. */
export function parseKmz(buf: Uint8Array): KmlGeometry[] {
  const entries = unzipSync(buf);
  // Find the .kml file (there's usually only one, typically named "doc.kml")
  const kmlName = Object.keys(entries).find(n => n.toLowerCase().endsWith(".kml"));
  if (!kmlName) throw new Error("KMZ contains no .kml file");
  const kmlText = strFromU8(entries[kmlName]);
  return parseKml(kmlText);
}

/**
 * Parse a KML XML string and pull out every LineString and Polygon coordinate set.
 * Uses the browser's `DOMParser` rather than a full KML library — sufficient for the
 * simple Placemark geometries NHC emits.
 */
export function parseKml(kmlText: string): KmlGeometry[] {
  const doc = new DOMParser().parseFromString(kmlText, "application/xml");
  if (doc.querySelector("parsererror")) {
    throw new Error("KML XML parse error");
  }

  const geometries: KmlGeometry[] = [];
  const placemarks = doc.getElementsByTagName("Placemark");
  for (let i = 0; i < placemarks.length; i++) {
    const pm = placemarks[i];
    const name = pm.getElementsByTagName("name")[0]?.textContent ?? undefined;

    // Each placemark may contain LineStrings, Polygons, or both (via MultiGeometry).
    const lineStrings = pm.getElementsByTagName("LineString");
    for (let j = 0; j < lineStrings.length; j++) {
      const coords = parseCoordinates(lineStrings[j].getElementsByTagName("coordinates")[0]);
      if (coords.length) geometries.push({ type: "line", coords, name });
    }

    const polygons = pm.getElementsByTagName("Polygon");
    for (let j = 0; j < polygons.length; j++) {
      // We only care about the outer ring; inner holes are rare for hurricane cones.
      const outer = polygons[j].getElementsByTagName("outerBoundaryIs")[0];
      const ring  = outer?.getElementsByTagName("LinearRing")[0];
      const coords = parseCoordinates(ring?.getElementsByTagName("coordinates")[0]);
      if (coords.length) geometries.push({ type: "polygon", coords, name });
    }
  }
  return geometries;
}

/** Extract `[lon, lat][]` from a KML `<coordinates>` text node. */
function parseCoordinates(node: Element | null | undefined): Array<[number, number]> {
  if (!node) return [];
  const text = node.textContent ?? "";
  const out: Array<[number, number]> = [];
  // KML coords are whitespace-separated; each token is `lon,lat[,alt]` (comma-delimited).
  const tokens = text.trim().split(/\s+/);
  for (const tok of tokens) {
    const parts = tok.split(",");
    if (parts.length < 2) continue;
    const lon = parseFloat(parts[0]);
    const lat = parseFloat(parts[1]);
    if (Number.isFinite(lon) && Number.isFinite(lat)) {
      out.push([lon, lat]);
    }
  }
  return out;
}

/**
 * Rewrite an upstream NHC URL (`https://www.nhc.noaa.gov/...`) to a proxy-relative path
 * so dev (Vite) and prod (NGINX) both route it through the CORS proxy. Returns the path
 * unchanged if it's already relative.
 */
export function rewriteNhcUrl(url: string): string {
  if (!url) return url;
  return url.replace(/^https?:\/\/(?:www\.)?nhc\.noaa\.gov\/?/i, "/proxy/nhc/");
}
