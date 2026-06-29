import * as THREE from "three";

const AXIAL_TILT   = 23.44 * Math.PI / 180;
const LINE_R       = 1.003;   // boundary lines hug the globe surface
const LABEL_R_3D   = 1.130;   // labels float well outside the globe so they clear the polar rim
const OVERLAY_R    = 1.001;   // coloured fill sphere — just above the surface, below LINE_R
const FLAT_Z_LINE  = 0.0042;
const FLAT_Z_LABEL = 0.0120;  // above overlay plane (0.003) and line segments (0.0042)
const FLAT_Z_OVERLAY = 0.0020;

// 24 nominal UTC zones: UTC-11 … UTC+12 (one per 15° of longitude)
// Zone UTC+N has its centre meridian at N×15° longitude.
// The boundary between UTC+(N−1) and UTC+N sits at N×15 − 7.5°.
export type ZoneEntry = {
  utcOffset: number;     // nominal standard offset in hours (may be fractional)
  centerLon: number;     // centre longitude for the label (degrees)
  centerLat: number;     // centre latitude for the label (0 = equator in nominal mode)
  ianaName?: string;     // set in political mode; enables Intl DST-aware time
};

const NOMINAL_ZONES: ZoneEntry[] = Array.from({ length: 24 }, (_, i) => ({
  utcOffset: i - 11,          // −11, −10, … +12
  centerLon: (i - 11) * 15,  // −165, −150, … +180
  centerLat: 0,
}));

// 24 nominal centre meridians — one per UTC zone, placed at the conventional geographic
// centre of that zone. These are the standard "UTC hour lines" starting at 0° (prime
// meridian = UTC+0), spaced every 15°. This is the "proper convention" where 0° is
// Greenwich, ±15° is UTC±1, ±30° is UTC±2, etc.
const NOMINAL_CENTER_LONS: number[] =
  Array.from({ length: 24 }, (_, i) => (i - 11) * 15);
// = [−165, −150, −135, … 0, … +150, +165, +180]

// ---- Political-mode data types (loaded from /data/timezone-bounds.json or CDN) ----
export interface TzBoundsFile {
  version: number;
  zones: TzBoundsZone[];
}
export interface TzBoundsZone {
  tzid:      string;               // IANA timezone name
  utcOffset: number;               // standard offset (hours, no DST)
  centLon:   number;               // centroid longitude for the label
  centLat:   number;               // centroid latitude for the label
  rings:     [number, number][][]; // polygon rings: [[lon, lat], …]
}

export type TzDisplayMode = "nominal" | "political";

// Natural Earth 110m timezone GeoJSON — used as CDN fallback for political mode.
// This endpoint is served with CORS * and is used by Observable, Vega, etc.
const NE_CDN_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_time_zones.geojson";

// ---- Helpers ----

function lonLatToXYZ(lonDeg: number, latDeg: number, r: number): THREE.Vector3 {
  const lon = lonDeg * (Math.PI / 180);
  const lat = latDeg * (Math.PI / 180);
  const c = Math.cos(lat);
  return new THREE.Vector3(r * c * Math.cos(lon), r * Math.sin(lat), -r * c * Math.sin(lon));
}

/** Parse a UTC offset string like "−5:00" or "+5:30" or just "−5" → hours (number). */
function parseOffset(raw: unknown): number {
  const s = String(raw ?? "0").replace("−", "-").replace("–", "-");
  const m = s.match(/^([+-]?\d+)(?::(\d+))?$/);
  if (!m) return 0;
  const h = parseInt(m[1], 10);
  const mins = m[2] ? parseInt(m[2], 10) : 0;
  return h + (h < 0 ? -mins / 60 : mins / 60);
}

/** Format a relative hour offset (possibly fractional) as "+1:00" / "−0:30". */
function formatRelative(diffH: number): string {
  const sign = diffH >= 0 ? "+" : "−";
  const abs  = Math.abs(diffH);
  const h    = Math.floor(abs);
  const m    = Math.round((abs - h) * 60);
  return `${sign}${h}:${String(m).padStart(2, "0")}`;
}

/** Format an absolute UTC offset as "UTC-5" / "UTC+5:30". */
function formatAbsoluteOffset(offsetH: number): string {
  const sign = offsetH >= 0 ? "+" : "−";
  const abs  = Math.abs(offsetH);
  const h    = Math.floor(abs);
  const m    = Math.round((abs - h) * 60);
  return m === 0 ? `UTC${sign}${h}` : `UTC${sign}${h}:${String(m).padStart(2, "0")}`;
}

/**
 * Map a UTC offset to a pastel hue matching the Wikipedia World Time Zone colour convention.
 * The hue cycles through the full 360° rainbow from UTC-12 (red) to UTC+14 (red again),
 * which is intentional — UTC-12 and UTC+14 are adjacent on the dateline.
 */
/**
 * Golden-angle hue rotation: successive UTC offsets receive hues spaced ~137.5° apart,
 * which is mathematically the maximum-spread interval in a circular hue ring (it's the
 * same irrational ratio that gives sunflower seeds their packing efficiency).
 * Adjacent zones end up with hues ~137° apart instead of ~14° apart (linear rainbow),
 * so they look obviously different even when zones share similar saturation/lightness.
 */
function offsetToHue(utcOffset: number): number {
  const i = (utcOffset + 12) % 26;   // 0 … 25 (wraps UTC+14 → UTC-12)
  return Math.round((i * 137.508) % 360);
}

function offsetToFillColor(utcOffset: number): string {
  const hue = offsetToHue(utcOffset);
  // Opaque fill on the canvas; overall transparency applied via material.opacity.
  return `hsl(${hue}, 72%, 55%)`;
}

/**
 * Reduce a list of political zones to one representative entry per UTC standard offset.
 * The representative is the zone whose centroid is closest to the "ideal" longitude for
 * that offset (offset × 15°), so labels appear near the geographic centre of their band.
 * DST: the representative's ianaName is kept so Intl can compute the live effective offset.
 */
function groupByOffset(zones: ZoneEntry[]): ZoneEntry[] {
  const byOffset = new Map<number, ZoneEntry[]>();
  for (const z of zones) {
    const key = z.utcOffset;
    if (!byOffset.has(key)) byOffset.set(key, []);
    byOffset.get(key)!.push(z);
  }
  return Array.from(byOffset.entries())
    .sort(([a], [b]) => a - b)
    .map(([offset, group]) => {
      const idealLon = offset * 15;
      const best = group.reduce((b, z) =>
        Math.abs(z.centerLon - idealLon) < Math.abs(b.centerLon - idealLon) ? z : b
      );
      return { utcOffset: offset, centerLon: best.centerLon, centerLat: 0, ianaName: best.ianaName };
    });
}

/** Get local hour + minute in a zone, DST-aware when ianaName is present. */
function zoneTime(
  zone: ZoneEntry,
  simulatedMs: number,
): { h: number; m: number; effectiveOffsetH: number } {
  if (zone.ianaName) {
    try {
      const date = new Date(simulatedMs);
      // Capture full y/m/d/h/min in the target timezone, then reassemble as a fake
      // UTC timestamp. Diffing against the real epoch gives the true offset —
      // correct even for UTC+12/+13/+14 where naive hour arithmetic wraps midnight.
      const raw = Object.fromEntries(
        new Intl.DateTimeFormat("en-US", {
          timeZone: zone.ianaName,
          year: "numeric", month: "numeric", day: "numeric",
          hour: "numeric", minute: "numeric", hour12: false,
        }).formatToParts(date)
          .filter(p => p.type !== "literal")
          .map(p => [p.type, parseInt(p.value)]),
      );
      const h = raw.hour === 24 ? 0 : raw.hour;   // some impls return 24 for midnight
      const m = raw.minute;
      const fakeUtc = Date.UTC(raw.year, raw.month - 1, raw.day, h, m);
      // fakeUtc is minute-precise; date.getTime() includes seconds, causing a
      // sub-minute drift (e.g. 0.9836h instead of 1.0h). Round to the nearest
      // 15 min — the smallest real UTC offset unit — to snap to the exact offset.
      const rawOffset = (fakeUtc - date.getTime()) / 3_600_000;
      return { h, m, effectiveOffsetH: Math.round(rawOffset * 4) / 4 };
    } catch {
      // Unknown IANA name — fall through to UTC arithmetic
    }
  }
  const local = new Date(simulatedMs + zone.utcOffset * 3_600_000);
  return { h: local.getUTCHours(), m: local.getUTCMinutes(), effectiveOffsetH: zone.utcOffset };
}

/**
 * Draw a two-line pill onto a 2D canvas context.
 *   caption  — smaller text, upper half
 *   main     — larger text, lower half
 */
function drawPill(
  ctx: CanvasRenderingContext2D,
  W: number, H: number,
  caption: string,
  main: string,
  hue: number,
): void {
  ctx.clearRect(0, 0, W, H);
  const pad = 3, rr = Math.round(H * 0.20);
  ctx.fillStyle = `hsla(${hue}, 55%, 11%, 0.88)`;
  ctx.beginPath();
  ctx.moveTo(pad + rr, pad);
  ctx.lineTo(W - pad - rr, pad);
  ctx.arcTo(W - pad, pad,     W - pad, pad + rr,     rr);
  ctx.lineTo(W - pad, H - pad - rr);
  ctx.arcTo(W - pad, H - pad, W - pad - rr, H - pad, rr);
  ctx.lineTo(pad + rr, H - pad);
  ctx.arcTo(pad, H - pad, pad, H - pad - rr,         rr);
  ctx.lineTo(pad, pad + rr);
  ctx.arcTo(pad, pad,     pad + rr, pad,              rr);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = `hsla(${hue}, 65%, 58%, 0.85)`;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.textAlign = "center";

  // Caption — upper, tinted to match zone colour
  ctx.font        = `bold ${Math.round(H * 0.30)}px system-ui,sans-serif`;
  ctx.fillStyle   = `hsla(${hue}, 75%, 82%, 1.0)`;
  ctx.textBaseline = "alphabetic";
  ctx.fillText(caption, W / 2, pad + Math.round(H * 0.42));

  // Main — lower, prominent white
  ctx.font        = `bold ${Math.round(H * 0.46)}px system-ui,sans-serif`;
  ctx.fillStyle   = "rgba(235, 248, 255, 1.0)";
  ctx.fillText(main, W / 2, H - pad - Math.round(H * 0.10));
}

/** Ray-casting point-in-polygon for timezone lookup. ring is [[lon, lat], …]. */
function pointInRing(lon: number, lat: number, ring: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    if ((yi > lat) !== (yj > lat) && lon < (xj - xi) * (lat - yi) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

// ---- Main class ----

/**
 * Timezone overlay.
 *
 * Two display modes
 *   "nominal"   — straight meridian boundaries at −172.5°, −157.5°, … (always available)
 *   "political" — real timezone polygon boundaries from /data/timezone-bounds.json or CDN.
 *                 Falls back to nominal if both are unavailable. DST-correct via Intl API.
 *
 * Two label modes
 *   absolute — caption "UTC+N", main "HH:MM"
 *   relative — caption "HH:MM", main "+1:00" / "−2:30" (hours relative to user's local tz)
 *
 * Labels appear on both the 3D globe (floating sprites above the atmosphere) and the flat map
 * (compact sprites at zone centres).
 */
export class TimezoneLayer {
  /** Attach to main scene. */
  readonly mesh: THREE.Group;
  /** Attach to flatMap.scene. */
  readonly flatMesh: THREE.Group;

  // Inner rotation group — receives setRotationY() each frame.
  // Contains both the line geometry sub-group AND the 3D label sprites.
  private readonly rotGroup: THREE.Group;
  // Sub-groups for line meshes only (cleared/rebuilt on mode switch without touching sprites)
  private readonly linesHost3D:   THREE.Group;
  private readonly linesHostFlat: THREE.Group;

  private readonly sprites3D:     THREE.Sprite[] = [];
  private readonly spritesFlat:   THREE.Sprite[] = [];
  private readonly canvases3D:    HTMLCanvasElement[] = [];
  private readonly canvasesFlat:  HTMLCanvasElement[] = [];
  private readonly textures3D:    THREE.CanvasTexture[] = [];
  private readonly texturesFlat:  THREE.CanvasTexture[] = [];

  private zones: ZoneEntry[]        = NOMINAL_ZONES.slice(); // boundary zones (all of them)
  private labelZones: ZoneEntry[]   = NOMINAL_ZONES.slice(); // zones used for label sprites
  private displayMode: TzDisplayMode = "nominal";
  private relativeMode                = false;
  // IANA name of the user's reference location for ±Hours mode. null = browser timezone.
  private _referenceIana: string | null = null;

  // Throttle: redraw canvases only when the simulated minute changes, max ≈12×/s
  private lastMinute    = -1;
  private lastUpdateWall = 0;
  private static readonly MIN_UPDATE_MS = 80;
  // DST-change detection: rebuild the colour overlay when any zone's effective offset shifts.
  private lastEffectiveSig = "";

  // Coloured fill overlay — political mode only
  private overlayCanvas: HTMLCanvasElement | null = null;
  private overlayTex:    THREE.CanvasTexture | null = null;
  private overlaySphere: THREE.Mesh | null = null;
  private overlayPlane:  THREE.Mesh | null = null;

  // Globe pill: 192×78 px
  private static readonly LW3 = 192;
  private static readonly LH3 = 78;
  // Flat-map pill: compact — must fit in a 0.083 world-unit slot (2 / 24 zones)
  private static readonly LWF = 96;
  private static readonly LHF = 42;

  constructor() {
    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;

    this.rotGroup     = new THREE.Group();
    this.linesHost3D  = new THREE.Group();
    this.rotGroup.add(this.linesHost3D);
    this.mesh.add(this.rotGroup);

    this.flatMesh     = new THREE.Group();
    this.linesHostFlat = new THREE.Group();
    this.flatMesh.add(this.linesHostFlat);

    this.buildNominalGeometry();
    this.buildSprites(this.zones);
  }

  // ---- Geometry builders ----

  private buildNominalGeometry(): void {
    this.clearLinesHost(this.linesHost3D);
    this.clearLinesHost(this.linesHostFlat);

    const pos3D: number[]   = [];
    const posFlat: number[] = [];
    const STEPS = 40, LAT_MIN = -78, LAT_MAX = 78;

    // Centre meridians + antimeridian wrap on the flat map (-180°).
    // Draw each centre meridian; also mirror the UTC+12 line (lon=+180°) at lon=−180° on the
    // flat map so the left and right edges look symmetrical.
    const flatLons = new Set<number>(NOMINAL_CENTER_LONS);
    flatLons.add(-180); // left-edge copy of the ±180° antimeridian line

    for (const lon of NOMINAL_CENTER_LONS) {
      for (let i = 0; i < STEPS; i++) {
        const lat0 = LAT_MIN + (LAT_MAX - LAT_MIN) * i       / STEPS;
        const lat1 = LAT_MIN + (LAT_MAX - LAT_MIN) * (i + 1) / STEPS;
        const a = lonLatToXYZ(lon, lat0, LINE_R);
        const b = lonLatToXYZ(lon, lat1, LINE_R);
        pos3D.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }
    for (const lon of flatLons) {
      for (let i = 0; i < STEPS; i++) {
        const lat0 = LAT_MIN + (LAT_MAX - LAT_MIN) * i       / STEPS;
        const lat1 = LAT_MIN + (LAT_MAX - LAT_MIN) * (i + 1) / STEPS;
        posFlat.push(lon / 180, lat0 / 180, FLAT_Z_LINE,
                     lon / 180, lat1 / 180, FLAT_Z_LINE);
      }
    }

    this.addLineSegments(this.linesHost3D,   pos3D,   0x6699cc, 0.38);
    this.addLineSegments(this.linesHostFlat, posFlat, 0x6699cc, 0.55);
  }

  private buildPoliticalGeometry(data: TzBoundsFile): void {
    this.clearLinesHost(this.linesHost3D);
    this.clearLinesHost(this.linesHostFlat);

    const pos3D: number[]   = [];
    const posFlat: number[] = [];

    for (const z of data.zones) {
      for (const ring of z.rings) {
        for (let i = 0; i < ring.length - 1; i++) {
          const [lon0, lat0] = ring[i];
          const [lon1, lat1] = ring[i + 1];
          if (Math.abs(lon1 - lon0) > 180) continue; // skip antimeridian crossings
          const a = lonLatToXYZ(lon0, lat0, LINE_R);
          const b = lonLatToXYZ(lon1, lat1, LINE_R);
          pos3D.push(a.x, a.y, a.z, b.x, b.y, b.z);
          posFlat.push(lon0 / 180, lat0 / 180, FLAT_Z_LINE,
                       lon1 / 180, lat1 / 180, FLAT_Z_LINE);
        }
      }
    }

    this.addLineSegments(this.linesHost3D,   pos3D,   0x6699cc, 0.38);
    this.addLineSegments(this.linesHostFlat, posFlat, 0x6699cc, 0.55);
  }

  private addLineSegments(host: THREE.Group, positions: number[], color: number, opacity: number): void {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
    host.add(new THREE.LineSegments(geom, mat));
  }

  /** Remove and dispose only LineSegments children, leaving sub-groups (e.g. sprite groups) intact. */
  private clearLinesHost(group: THREE.Group): void {
    const toRemove = group.children.filter(c => c instanceof THREE.LineSegments);
    for (const c of toRemove) {
      (c as THREE.LineSegments).geometry?.dispose();
      group.remove(c);
    }
  }

  // ---- Colour-fill overlay ----

  /**
   * Render timezone polygon fills onto an equirectangular 2048×1024 canvas, then apply
   * the canvas as a semi-transparent texture overlay on both the 3D globe and the flat map.
   * Called once after political data loads; the overlay meshes stay in the scene and are
   * shown/hidden with mesh.visible alongside the rest of the layer.
   */
  private buildColorOverlay(data: TzBoundsFile, simulatedMs?: number): void {
    const W = 2048, H = 1024;
    if (!this.overlayCanvas) {
      this.overlayCanvas = document.createElement("canvas");
      this.overlayCanvas.width  = W;
      this.overlayCanvas.height = H;
    }
    const ctx = this.overlayCanvas.getContext("2d")!;
    ctx.clearRect(0, 0, W, H);

    for (const zone of data.zones) {
      // Use the current DST-aware effective offset so same-coloured regions always
      // show the same clock time. Falls back to the standard offset if Intl fails.
      let fillOffset = zone.utcOffset;
      if (simulatedMs !== undefined && zone.tzid) {
        try {
          fillOffset = zoneTime(
            { ianaName: zone.tzid, utcOffset: zone.utcOffset, centerLon: zone.centLon, centerLat: 0 },
            simulatedMs,
          ).effectiveOffsetH;
        } catch { /* keep standard offset */ }
      }
      ctx.fillStyle = offsetToFillColor(fillOffset);
      for (const ring of zone.rings) {
        if (ring.length < 3) continue;
        // Equirectangular canvas coordinates:
        //   canvasX = (lon + 180) / 360 * W
        //   canvasY = (90 − lat) / 180 * H   (top = north pole)
        const toX = (lon: number) => ((lon + 180) / 360) * W;
        const toY = (lat: number) => ((90 - lat) / 180) * H;

        ctx.beginPath();
        let prevLon = ring[0][0];
        ctx.moveTo(toX(ring[0][0]), toY(ring[0][1]));
        for (let i = 1; i < ring.length; i++) {
          const [lon, lat] = ring[i];
          if (Math.abs(lon - prevLon) > 180) {
            // Antimeridian crossing — close and restart to avoid diagonal artefacts
            ctx.closePath(); ctx.fill();
            ctx.beginPath();
            ctx.moveTo(toX(lon), toY(lat));
          } else {
            ctx.lineTo(toX(lon), toY(lat));
          }
          prevLon = lon;
        }
        ctx.closePath();
        ctx.fill("evenodd"); // evenodd rule handles any accidental self-intersections safely
      }
    }

    if (!this.overlayTex) {
      this.overlayTex = new THREE.CanvasTexture(this.overlayCanvas);
      // Avoid mipmap colour-bleed at zone boundaries; linear sampling is sufficient at globe scale.
      this.overlayTex.generateMipmaps = false;
      this.overlayTex.minFilter       = THREE.LinearFilter;
    } else {
      this.overlayTex.needsUpdate = true;
    }

    // 3D globe: thin sphere at OVERLAY_R parented to rotGroup (rotates with Earth).
    // depthTest:false avoids z-fighting with the globe sphere (r=1.0) — the two surfaces
    // are only 0.001 apart, which is within depth-buffer precision for a unit sphere.
    // FrontSide culling means only the camera-facing hemisphere renders, so the fill
    // never bleeds into space behind the limb.
    if (!this.overlaySphere) {
      const geom = new THREE.SphereGeometry(OVERLAY_R, 64, 32);
      const mat  = new THREE.MeshBasicMaterial({
        map:         this.overlayTex,
        transparent: true,
        opacity:     0.52,
        depthWrite:  false,
        depthTest:   false,
        blending:    THREE.NormalBlending,
        side:        THREE.FrontSide,
      });
      this.overlaySphere = new THREE.Mesh(geom, mat);
      this.rotGroup.add(this.overlaySphere);
    } else {
      const m = this.overlaySphere.material as THREE.MeshBasicMaterial;
      m.map = this.overlayTex;
      m.needsUpdate = true;
    }

    // Flat map: 2×1 plane matching the equirectangular extent.
    if (!this.overlayPlane) {
      const geom = new THREE.PlaneGeometry(2, 1);
      const mat  = new THREE.MeshBasicMaterial({
        map:         this.overlayTex,
        transparent: true,
        opacity:     0.52,
        depthWrite:  false,
        depthTest:   false,
        blending:    THREE.NormalBlending,
      });
      this.overlayPlane = new THREE.Mesh(geom, mat);
      this.overlayPlane.position.z = FLAT_Z_OVERLAY;
      this.flatMesh.add(this.overlayPlane);
    } else {
      const m = this.overlayPlane.material as THREE.MeshBasicMaterial;
      m.map = this.overlayTex;
      m.needsUpdate = true;
    }
  }

  private clearColorOverlay(): void {
    if (this.overlaySphere) {
      this.rotGroup.remove(this.overlaySphere);
      (this.overlaySphere.material as THREE.Material).dispose();
      this.overlaySphere.geometry.dispose();
      this.overlaySphere = null;
    }
    if (this.overlayPlane) {
      this.flatMesh.remove(this.overlayPlane);
      (this.overlayPlane.material as THREE.Material).dispose();
      this.overlayPlane.geometry.dispose();
      this.overlayPlane = null;
    }
    this.overlayTex?.dispose();
    this.overlayTex = null;
  }

  // ---- Sprite builders ----

  private buildSprites(zones: ZoneEntry[]): void {
    this.labelZones = zones;
    for (const sp of this.sprites3D)   this.rotGroup.remove(sp);
    for (const sp of this.spritesFlat) this.flatMesh.remove(sp);
    this.sprites3D.length  = 0;
    this.spritesFlat.length = 0;

    const W3 = TimezoneLayer.LW3, H3 = TimezoneLayer.LH3;
    const WF = TimezoneLayer.LWF, HF = TimezoneLayer.LHF;

    // Ensure canvas/texture arrays are large enough
    while (this.canvases3D.length < zones.length) {
      const c = document.createElement("canvas"); c.width = W3; c.height = H3;
      this.canvases3D.push(c);
      this.textures3D.push(new THREE.CanvasTexture(c));
    }
    while (this.canvasesFlat.length < zones.length) {
      const c = document.createElement("canvas"); c.width = WF; c.height = HF;
      this.canvasesFlat.push(c);
      this.texturesFlat.push(new THREE.CanvasTexture(c));
    }

    const sH3      = 0.090;
    const sH3aspect = W3 / H3;
    const sHF      = 0.032;
    const sHFaspect = WF / HF;

    for (let i = 0; i < zones.length; i++) {
      const z = zones[i];

      // 3D sprite on the equator (lat 0°). At LABEL_R > 1.0 the sprite sits outside the
      // globe's silhouette even when the camera is directly over a pole, so it remains
      // visible as a ring of clocks around the equatorial band from any viewing angle.
      const mat3 = new THREE.SpriteMaterial({
        map: this.textures3D[i], transparent: true, depthWrite: false, depthTest: true,
      });
      const sp3 = new THREE.Sprite(mat3);
      sp3.position.copy(lonLatToXYZ(z.centerLon, 0, LABEL_R_3D));
      sp3.scale.set(sH3 * sH3aspect, sH3, 1);
      this.rotGroup.add(sp3);
      this.sprites3D.push(sp3);

      // Flat sprite on the equator. Clamp x to [−0.96, +0.96] so UTC+12 label
      // (lon=180°) doesn't clip at the map edge.
      const flatX = Math.max(-0.96, Math.min(0.96, z.centerLon / 180));
      const matF = new THREE.SpriteMaterial({
        map: this.texturesFlat[i], transparent: true, depthWrite: false, depthTest: false,
      });
      const spF = new THREE.Sprite(matF);
      spF.position.set(flatX, 0, FLAT_Z_LABEL);
      spF.scale.set(sHF * sHFaspect, sHF, 1);
      this.flatMesh.add(spF);
      this.spritesFlat.push(spF);
    }

    this.lastMinute = -1; // force first-frame label redraw
  }

  // ---- Public API ----

  /**
   * Call every frame with current simulated time in ms.
   * Redraws labels when the simulated minute changes, throttled to ≈12 fps.
   */
  update(simulatedMs: number): void {
    const wallNow = performance.now();
    if (wallNow - this.lastUpdateWall < TimezoneLayer.MIN_UPDATE_MS) return;

    const utcMin = new Date(simulatedMs).getUTCHours() * 60 + new Date(simulatedMs).getUTCMinutes();
    if (utcMin === this.lastMinute) return;
    this.lastMinute     = utcMin;
    this.lastUpdateWall = wallNow;

    // Reference offset for ±Hours: use the pinned location's DST-aware offset when set,
    // otherwise fall back to the browser's OS timezone. Using the pinned zone means
    // "+0:00" is "same time as my pin" rather than "same time as UTC" when the browser
    // is set to UTC.
    let userOffsetH: number;
    if (this._referenceIana) {
      const ref = zoneTime(
        { ianaName: this._referenceIana, utcOffset: 0, centerLon: 0, centerLat: 0 },
        simulatedMs,
      );
      userOffsetH = ref.effectiveOffsetH;
    } else {
      userOffsetH = -new Date().getTimezoneOffset() / 60;
    }

    const W3 = TimezoneLayer.LW3, H3 = TimezoneLayer.LH3;
    const WF = TimezoneLayer.LWF, HF = TimezoneLayer.LHF;

    const effectiveSigParts: number[] = [];

    this.labelZones.forEach((zone, i) => {
      const { h, m, effectiveOffsetH } = zoneTime(zone, simulatedMs);
      const timeStr = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
      // Use current effective offset (DST-aware) for hue so pill colour matches the overlay.
      const hue = offsetToHue(effectiveOffsetH);
      effectiveSigParts.push(Math.round(effectiveOffsetH * 4)); // 15-min resolution

      let caption: string;
      let main: string;

      if (this.relativeMode) {
        // Relative mode: offset is the primary (large) display; actual time is secondary
        const diff = effectiveOffsetH - userOffsetH;
        main    = formatRelative(diff);
        caption = timeStr;
      } else {
        // Absolute mode: time is the primary display; effective UTC offset is secondary.
        // effectiveOffsetH already accounts for DST so the caption updates automatically
        // (e.g., "UTC+1" in winter → "UTC+2" in summer for European zones).
        caption = formatAbsoluteOffset(effectiveOffsetH);
        main = timeStr;
      }

      if (this.canvases3D[i]) {
        drawPill(this.canvases3D[i].getContext("2d")!, W3, H3, caption, main, hue);
        this.textures3D[i].needsUpdate = true;
      }
      if (this.canvasesFlat[i]) {
        drawPill(this.canvasesFlat[i].getContext("2d")!, WF, HF, caption, main, hue);
        this.texturesFlat[i].needsUpdate = true;
      }
    });

    // Rebuild the colour overlay when any zone's effective offset changes (DST transition).
    // Comparing representative label zones is sufficient — they cover every UTC offset group.
    const newSig = effectiveSigParts.join(",");
    if (newSig !== this.lastEffectiveSig) {
      this.lastEffectiveSig = newSig;
      if (this.politicalData) this.buildColorOverlay(this.politicalData, simulatedMs);
    }
  }

  /** Keep 3D meridians + labels glued to Earth's geographic frame as it rotates daily. */
  setRotationY(angle: number): void {
    this.rotGroup.rotation.y = angle;
  }

  setDisplayMode(mode: TzDisplayMode): void {
    if (mode === this.displayMode) return;
    this.displayMode = mode;
    if (mode === "political") {
      this.loadPoliticalData();
    } else {
      this.zones = NOMINAL_ZONES.slice();
      this.buildNominalGeometry();
      this.buildSprites(this.zones); // nominal: 24 labels (same as zones)
      this.clearColorOverlay();       // remove the political colour fills when reverting
    }
  }

  setRelativeMode(on: boolean): void {
    if (on === this.relativeMode) return;
    this.relativeMode = on;
    this.lastMinute = -1;
  }

  /**
   * Set the IANA timezone to use as the "me" reference in ±Hours mode.
   * Pass the pinned location's IANA name so "+0:00" means "same time as my pin".
   * Pass null to fall back to the browser's OS timezone.
   */
  setReferenceZone(ianaName: string | null): void {
    if (ianaName === this._referenceIana) return;
    this._referenceIana = ianaName;
    this.lastMinute = -1; // force label redraw
  }

  // ---- Zone lookup (public) ----

  /** True once political zone polygon data has been fetched and parsed. */
  get dataLoaded(): boolean { return this.politicalLoaded; }

  /**
   * Trigger a background load of political zone data for use by findZoneAt().
   * No-op if already loaded or loading. Safe to call every time a pin drops.
   */
  loadForLookup(): void {
    if (!this.politicalLoaded) this.loadPoliticalData();
  }

  /**
   * Return the IANA timezone and UTC offset for a geographic point.
   * Uses loaded political polygon data when available; falls back to the
   * nearest nominal UTC hour (longitude / 15, rounded) if not yet loaded.
   * The nominal fallback is correct for most of the world but will be wrong
   * during DST transitions for zones that don't align to 15° boundaries.
   */
  findZoneAt(latDeg: number, lonDeg: number): { ianaName: string; utcOffset: number } {
    if (this.politicalData) {
      for (const zone of this.politicalData.zones) {
        for (const ring of zone.rings) {
          if (pointInRing(lonDeg, latDeg, ring)) {
            return { ianaName: zone.tzid, utcOffset: zone.utcOffset };
          }
        }
      }
    }
    // Nominal fallback: nearest whole UTC hour from longitude.
    const utcOffset = Math.max(-12, Math.min(14, Math.round(lonDeg / 15)));
    return { ianaName: "", utcOffset };
  }

  // ---- Political-mode data loading ----

  private politicalLoaded = false;
  private politicalZones: ZoneEntry[]  = [];
  private politicalData?: TzBoundsFile;

  private async loadPoliticalData(): Promise<void> {
    if (this.politicalLoaded) {
      this.zones = this.politicalZones;
      if (this.politicalData) {
        this.buildPoliticalGeometry(this.politicalData);
        this.buildColorOverlay(this.politicalData);
      }
      // One label per UTC offset, not one per IANA name (avoids 263-label clutter)
      this.buildSprites(groupByOffset(this.politicalZones));
      return;
    }

    let data: TzBoundsFile | null = null;

    // 1. Local pre-processed file (generated by build-timezone-bounds.mjs)
    if (!data) {
      try {
        const res = await fetch("/data/timezone-bounds.json");
        if (res.ok) data = (await res.json()) as TzBoundsFile;
      } catch { /* not available */ }
    }

    // 2. CDN fallback — raw Natural Earth 110m GeoJSON (processed in-browser)
    if (!data) {
      try {
        const res = await fetch(NE_CDN_URL);
        if (res.ok) {
          const raw = (await res.json()) as { features?: unknown[] };
          data = this.processRawGeoJSON(raw);
        }
      } catch (err) {
        console.warn("[TimezoneLayer] CDN fetch failed:", err);
      }
    }

    if (!data) {
      console.warn(
        "[TimezoneLayer] No political timezone data found — falling back to nominal mode.\n" +
        "To enable: run `node build-timezone-bounds.mjs` (generates public/data/timezone-bounds.json).",
      );
      this.displayMode = "nominal";
      this.zones = NOMINAL_ZONES.slice();
      this.buildNominalGeometry();
      this.buildSprites(this.zones);
      return;
    }

    this.politicalData  = data;
    this.politicalZones = data.zones.map(z => ({
      utcOffset: z.utcOffset,
      centerLon: z.centLon,
      centerLat: z.centLat,
      ianaName:  z.tzid || undefined,
    }));
    this.politicalLoaded = true;
    this.zones = this.politicalZones;
    this.buildPoliticalGeometry(data);
    this.buildColorOverlay(data, Date.now()); // use current wall time for initial DST-aware colours
    // One label per UTC standard offset (not one per IANA name) — keeps it to ~30 labels.
    this.buildSprites(groupByOffset(this.politicalZones));
  }

  // Convert raw Natural Earth GeoJSON (from CDN) to the TzBoundsFile format
  private processRawGeoJSON(geojson: { features?: unknown[] }): TzBoundsFile {
    const zones: TzBoundsZone[] = [];

    for (const feat of (geojson.features ?? []) as Array<{
      properties: Record<string, unknown>;
      geometry: { type: string; coordinates: unknown };
    }>) {
      const p = feat.properties ?? {};
      // Field names vary between Natural Earth versions — try common aliases
      const tzid =
        (p["TZID"] ?? p["tzid"] ?? p["tz_name1st"] ?? p["name"] ?? "") as string;
      const rawOff =
        p["time_zone"] ?? p["UTC_OFFSET"] ?? p["utc_offset"] ?? p["zone"] ?? "0";
      const utcOffset = parseOffset(rawOff);

      const geom = feat.geometry;
      if (!geom) continue;

      type Coord2 = [number, number];
      type Ring   = Coord2[];
      type Poly   = Ring[];

      const polys: Poly[] = geom.type === "Polygon"
        ? [geom.coordinates as Poly]
        : geom.type === "MultiPolygon"
        ? (geom.coordinates as Poly[])
        : [];
      if (!polys.length) continue;

      // Largest-polygon centroid (shoelace mean for robustness)
      let bestArea = 0, centLon = 0, centLat = 0;
      for (const rings of polys) {
        const ring = rings[0];
        if (!ring?.length) continue;
        const sumLon = ring.reduce((s, p) => s + p[0], 0) / ring.length;
        const sumLat = ring.reduce((s, p) => s + p[1], 0) / ring.length;
        let area = 0;
        for (let i = 0; i < ring.length - 1; i++) {
          area += Math.abs(ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1]);
        }
        area /= 2;
        if (area > bestArea) { bestArea = area; centLon = sumLon; centLat = sumLat; }
      }

      const rings = polys.flatMap(p => p) as [number, number][][];
      zones.push({
        tzid:      tzid || (utcOffset >= 0 ? `UTC+${utcOffset}` : `UTC${utcOffset}`),
        utcOffset,
        centLon:   Math.round(centLon * 100) / 100,
        centLat:   Math.round(centLat * 100) / 100,
        rings,
      });
    }

    return { version: 1, zones };
  }
}
