import * as THREE from "three";
import type { SatelliteTracker, TrackedSatellite } from "../space/tracker";
import { elementAge, type ElementAge } from "../space/propagator";
import { sceneToGeographic, isInEarthShadow, EARTH_RADIUS_KM } from "../space/frames";
import { gmst } from "../astro/solar";

const AXIAL_TILT = 23.44 * Math.PI / 180;
const TILT_AXIS = new THREE.Vector3(0, 0, 1);

/** Ground track sits just above the cloud shell (1.003) and under the overlays (1.006). */
const TRACK_RADIUS = 1.0045;
/** Ground-track window, in orbits: half an orbit behind, one and a half ahead. */
const TRACK_PAST_ORBITS = 0.5;
const TRACK_FUTURE_ORBITS = 1.5;
const TRACK_STEP_SEC = 30;
/** Orbit ring: one full period centred on now. */
const RING_SAMPLES = 180;
/** Rebuild track/ring once simulated time has moved this far from the last build. */
const REBUILD_SIM_SEC = 30;
/** Above this time-warp the station laps Earth several times a frame — marker and ground
 *  track become noise, so only the (honest) inertial orbit ring stays. Plan §1.6. */
const MAX_MARKER_WARP = 5000;
/** Marker size as a fraction of viewport height (sizeAttenuation off). */
const MARKER_SCALE = 0.034;
const FLAT_MARKER_SCALE = 0.045;
const SELECTED_SCALE_BOOST = 1.35;
/** Click tolerance around a marker, in CSS pixels. */
const PICK_RADIUS_PX = 18;

export type MarkerStyle = "silhouette" | "emoji";

interface SatVisuals {
  tracked: TrackedSatellite;
  marker: THREE.Sprite;
  ring: THREE.Line;
  track: THREE.Line;
  flatMarker: THREE.Sprite;
  flatTrack: THREE.LineSegments;
  /** Latest untilted inertial position / velocity (Earth radii, radii/s). */
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  /** Latest geographic sub-point, degrees — flat-map marker + panel. */
  lat: number;
  lon: number;
  placed: boolean;
  inShadow: boolean;
  age: ElementAge;
  lastRingBuild: number;
  lastTrackBuild: number;
}

/**
 * ISS, Tiangong and friends: glowing silhouette markers, inertial orbit rings and
 * Earth-fixed ground tracks on the globe, plus a marker + ground track on the flat map.
 * Driven by SatelliteTracker; see frontend/docs/satellites-plan.md §2.
 *
 * Frames: `mesh` carries the axial tilt (like sunDir/moonPos in updateAstro), so markers
 * and orbit rings live in the untilted inertial frame inside it. Ground tracks go in
 * `earthFixed`, an inner group spun by setRotationY(gmst) exactly like the other
 * surface layers, so the track lines up with coastlines and pins.
 */
export class SatelliteLayer {
  readonly mesh = new THREE.Group();
  readonly flatMesh = new THREE.Group();
  private readonly earthFixed = new THREE.Group();
  private readonly visuals = new Map<string, SatVisuals>();
  private readonly hidden = new Set<string>();
  private tracksOn = true;
  private orbitsOn = false;
  private markerStyle: MarkerStyle = "silhouette";
  private selectedId: string | null = null;
  private ridingId: string | null = null;
  private warp = 1;
  /** Untilted sun direction — same frame as satellite positions. */
  private readonly sunDir = new THREE.Vector3(1, 0, 0);
  private readonly textures = new Map<string, THREE.Texture>();

  constructor(private readonly tracker: SatelliteTracker) {
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.earthFixed);
    this.rebuildVisuals();
  }

  /** Call after the tracker gets fresh elements — picks up added/removed propagators. */
  rebuildVisuals() {
    for (const v of this.visuals.values()) this.disposeVisuals(v);
    this.visuals.clear();
    for (const t of this.tracker.all()) {
      const colour = new THREE.Color(t.spec.colour);
      const marker = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.markerTexture(t), sizeAttenuation: false, transparent: true, depthWrite: false,
      }));
      marker.scale.setScalar(MARKER_SCALE);
      marker.renderOrder = 20;
      const flatMarker = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.markerTexture(t), sizeAttenuation: false, transparent: true, depthWrite: false, depthTest: false,
      }));
      flatMarker.renderOrder = 20;

      const ring = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({
        color: colour, transparent: true, opacity: 0.4, depthWrite: false,
      }));
      const lineMat = () => new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false });
      const track = new THREE.Line(new THREE.BufferGeometry(), lineMat());
      const flatTrack = new THREE.LineSegments(new THREE.BufferGeometry(), lineMat());
      for (const o of [ring, track, flatTrack]) o.frustumCulled = false;

      this.mesh.add(marker, ring);
      this.earthFixed.add(track);
      this.flatMesh.add(flatTrack, flatMarker);
      this.visuals.set(t.spec.id, {
        tracked: t, marker, ring, track, flatMarker, flatTrack,
        pos: new THREE.Vector3(), vel: new THREE.Vector3(), lat: 0, lon: 0,
        placed: false, inShadow: false, age: "unknown",
        lastRingBuild: NaN, lastTrackBuild: NaN,
      });
    }
  }

  // ── Toggles (Menu "Space" row) ─────────────────────────────────────────────

  setSatelliteVisible(id: string, on: boolean) {
    if (on) this.hidden.delete(id); else this.hidden.add(id);
  }
  setTracksVisible(on: boolean) { this.tracksOn = on; }
  setOrbitsVisible(on: boolean) { this.orbitsOn = on; }
  isSatelliteVisible(id: string) { return !this.hidden.has(id); }

  setMarkerStyle(style: MarkerStyle) {
    if (style === this.markerStyle) return;
    this.markerStyle = style;
    for (const v of this.visuals.values()) {
      const tex = this.markerTexture(v.tracked);
      v.marker.material.map = tex;
      v.flatMarker.material.map = tex;
      v.marker.material.needsUpdate = v.flatMarker.material.needsUpdate = true;
    }
  }

  setSelected(id: string | null) { this.selectedId = id; }

  /** The satellite the camera is riding on: its globe marker would sit on the lens. */
  setRiding(id: string | null) { this.ridingId = id; }

  /** Tilted world-frame sun direction, as computed in updateAstro(). */
  setSunDirection(tiltedSunDir: THREE.Vector3) {
    this.sunDir.copy(tiltedSunDir).applyAxisAngle(TILT_AXIS, -AXIAL_TILT);
  }

  setRotationY(angle: number) {
    this.earthFixed.rotation.y = angle;
  }

  // ── Per-frame ──────────────────────────────────────────────────────────────

  update(now: Date, warp: number, camera: THREE.Camera, flatCamera: THREE.OrthographicCamera, viewport: { w: number; h: number }) {
    this.warp = Math.abs(warp);
    const t = now.getTime();
    const g = gmst(now);
    for (const v of this.visuals.values()) {
      const prop = v.tracked.propagator;
      v.placed = !!prop && prop.stateAt(now, v.pos, v.vel);
      v.age = prop ? elementAge(prop, now) : "unknown";
      const show = v.placed && v.age !== "unknown" && !this.hidden.has(v.tracked.spec.id);
      const markersOk = show && this.warp <= MAX_MARKER_WARP;

      if (v.placed) {
        sceneToGeographic(v.pos, g, _geo);
        v.lat = Math.asin(_geo.y / _geo.length()) * RAD2DEG;
        v.lon = Math.atan2(-_geo.z, _geo.x) * RAD2DEG;
        v.inShadow = isInEarthShadow(v.pos, this.sunDir);
      }

      // Marker: dims in Earth's shadow (most of why you only see the ISS at dawn/dusk),
      // and again when the elements are getting old.
      const opacity = (v.inShadow ? 0.6 : 1) * (v.age === "approximate" ? 0.6 : 1);
      const scaleBoost = v.tracked.spec.id === this.selectedId ? SELECTED_SCALE_BOOST : 1;
      v.marker.visible = markersOk && v.tracked.spec.id !== this.ridingId;
      v.flatMarker.visible = markersOk;
      if (markersOk) {
        v.marker.position.copy(v.pos);
        v.marker.scale.setScalar(MARKER_SCALE * scaleBoost);
        v.marker.material.opacity = opacity;
        v.marker.material.color.setScalar(v.inShadow ? 0.75 : 1);
        v.marker.material.rotation = this.markerStyle === "emoji" ? 0 : this.screenHeading(v, camera, viewport);

        v.flatMarker.position.set(v.lon / 180, v.lat / 180, 0.004);
        v.flatMarker.scale.setScalar(FLAT_MARKER_SCALE * scaleBoost / flatCamera.zoom);
        v.flatMarker.material.opacity = opacity;
        v.flatMarker.material.color.setScalar(v.inShadow ? 0.75 : 1);
        v.flatMarker.material.rotation = this.markerStyle === "emoji" ? 0 : this.flatHeading(v, now);
      }

      v.ring.visible = show && this.orbitsOn;
      if (v.ring.visible && !(Math.abs(t - v.lastRingBuild) < REBUILD_SIM_SEC * 1000)) {
        this.buildRing(v, t);
        v.lastRingBuild = t;
      }
      const tracksVisible = markersOk && this.tracksOn;
      v.track.visible = tracksVisible;
      v.flatTrack.visible = tracksVisible;
      if (tracksVisible && !(Math.abs(t - v.lastTrackBuild) < REBUILD_SIM_SEC * 1000)) {
        this.buildTrack(v, t);
        v.lastTrackBuild = t;
      }
    }
  }

  // ── Queries (panel, camera, picking) ───────────────────────────────────────

  /** Latest state for the info panel. */
  state(id: string) {
    const v = this.visuals.get(id);
    if (!v || !v.placed) return null;
    return {
      lat: v.lat, lon: v.lon,
      altKm: (v.pos.length() - 1) * EARTH_RADIUS_KM,
      speedKms: v.vel.length() * EARTH_RADIUS_KM,
      inShadow: v.inShadow,
      age: v.age,
    };
  }

  /** World-space (tilted) position of a satellite at `date`, computed fresh so it works
   *  before the first update() after new elements arrive. Null if it can't be placed or
   *  the elements are too far from `date` to trust. */
  worldPosition(id: string, date: Date, out: THREE.Vector3): THREE.Vector3 | null {
    const prop = this.visuals.get(id)?.tracked.propagator;
    if (!prop || elementAge(prop, date) === "unknown" || !prop.stateAt(date, out)) return null;
    this.mesh.updateMatrixWorld();
    return out.applyMatrix4(this.mesh.matrixWorld);
  }

  /** World-space (tilted) position and velocity (Earth radii, radii/s) at `date`, for the
   *  Ride-along camera. Same trust rules as worldPosition(). */
  worldState(id: string, date: Date, outPos: THREE.Vector3, outVel: THREE.Vector3): boolean {
    const prop = this.visuals.get(id)?.tracked.propagator;
    if (!prop || elementAge(prop, date) === "unknown" || !prop.stateAt(date, outPos, outVel)) return false;
    this.mesh.updateMatrixWorld();
    outPos.applyMatrix4(this.mesh.matrixWorld);
    outVel.applyQuaternion(this.mesh.getWorldQuaternion(_q));
    return true;
  }

  /** Satellite under a click on the globe, if any. Ignores markers hidden behind Earth. */
  pickGlobe(clientX: number, clientY: number, rect: DOMRect, camera: THREE.Camera): string | null {
    let best: string | null = null, bestD = PICK_RADIUS_PX;
    for (const [id, v] of this.visuals) {
      if (!v.marker.visible) continue;
      v.marker.getWorldPosition(_world);
      if (occludedByEarth(camera.position, _world)) continue;
      const d = screenDistance(_world, camera, clientX, clientY, rect);
      if (d < bestD) { bestD = d; best = id; }
    }
    return best;
  }

  /** Satellite under a click on the flat map (handles the ±360° wrap copies). */
  pickFlat(clientX: number, clientY: number, rect: DOMRect, flatCamera: THREE.OrthographicCamera): string | null {
    let best: string | null = null, bestD = PICK_RADIUS_PX;
    for (const [id, v] of this.visuals) {
      if (!v.flatMarker.visible) continue;
      for (const shift of [-2, 0, 2]) {
        _world.copy(v.flatMarker.position).setX(v.flatMarker.position.x + shift);
        const d = screenDistance(_world, flatCamera, clientX, clientY, rect);
        if (d < bestD) { bestD = d; best = id; }
      }
    }
    return best;
  }

  // ── Internals ──────────────────────────────────────────────────────────────

  /** Inertial orbit ring: one period centred on now. Shows the orbit plane staying put
   *  while Earth turns underneath it. */
  private buildRing(v: SatVisuals, t: number) {
    const prop = v.tracked.propagator!;
    const P = prop.periodSec * 1000;
    const pts: number[] = [];
    for (let i = 0; i <= RING_SAMPLES; i++) {
      const ti = t - P / 2 + (P * i) / RING_SAMPLES;
      if (prop.stateAt(new Date(ti), _p)) pts.push(_p.x, _p.y, _p.z);
    }
    setPositions(v.ring.geometry, pts, 3);
  }

  /** Ground track: half an orbit behind (faint) to 1.5 orbits ahead (bright → fading). */
  private buildTrack(v: SatVisuals, t: number) {
    const prop = v.tracked.propagator!;
    const P = prop.periodSec;
    const c = new THREE.Color(v.tracked.spec.colour);
    const pos: number[] = [], col: number[] = [];
    const flatPos: number[] = [], flatCol: number[] = [];
    let prevLon = NaN, prevLat = NaN, prevA = 0;
    const start = -TRACK_PAST_ORBITS * P, end = TRACK_FUTURE_ORBITS * P;
    for (let s = start; s <= end; s += TRACK_STEP_SEC) {
      const ti = new Date(t + s * 1000);
      if (!prop.stateAt(ti, _p)) continue;
      sceneToGeographic(_p, gmst(ti), _geo).normalize();
      // Past: faint and fading out behind. Future: bright near the station, fading ahead.
      const a = s < 0 ? 0.4 * (1 + s / (TRACK_PAST_ORBITS * P)) : 0.95 - 0.6 * (s / end);
      pos.push(_geo.x * TRACK_RADIUS, _geo.y * TRACK_RADIUS, _geo.z * TRACK_RADIUS);
      col.push(c.r, c.g, c.b, a);

      const lat = Math.asin(_geo.y) * RAD2DEG;
      const lon = Math.atan2(-_geo.z, _geo.x) * RAD2DEG;
      // Flat map: segment pairs, skipping the one that jumps across the antimeridian.
      if (Number.isFinite(prevLon) && Math.abs(lon - prevLon) < 180) {
        flatPos.push(prevLon / 180, prevLat / 180, 0.003, lon / 180, lat / 180, 0.003);
        flatCol.push(c.r, c.g, c.b, prevA, c.r, c.g, c.b, a);
      }
      prevLon = lon; prevLat = lat; prevA = a;
    }
    setPositions(v.track.geometry, pos, 3);
    v.track.geometry.setAttribute("color", new THREE.Float32BufferAttribute(col, 4));
    setPositions(v.flatTrack.geometry, flatPos, 3);
    v.flatTrack.geometry.setAttribute("color", new THREE.Float32BufferAttribute(flatCol, 4));
  }

  /** Sprite rotation so the silhouette's nose points along the on-screen direction of flight. */
  private screenHeading(v: SatVisuals, camera: THREE.Camera, viewport: { w: number; h: number }): number {
    this.mesh.updateMatrixWorld();
    _a.copy(v.pos).applyMatrix4(this.mesh.matrixWorld).project(camera);
    _b.copy(v.pos).addScaledVector(v.vel, 20).applyMatrix4(this.mesh.matrixWorld).project(camera);
    const dx = (_b.x - _a.x) * viewport.w, dy = (_b.y - _a.y) * viewport.h;
    if (dx === 0 && dy === 0) return 0;
    return Math.atan2(dy, dx) - Math.PI / 2;
  }

  private flatHeading(v: SatVisuals, now: Date): number {
    const prop = v.tracked.propagator!;
    const later = new Date(now.getTime() + 20_000);
    if (!prop.stateAt(later, _p)) return 0;
    sceneToGeographic(_p, gmst(later), _geo);
    const lat2 = Math.asin(_geo.y / _geo.length()) * RAD2DEG;
    const lon2 = Math.atan2(-_geo.z, _geo.x) * RAD2DEG;
    let dLon = lon2 - v.lon;
    if (dLon > 180) dLon -= 360; else if (dLon < -180) dLon += 360;
    return Math.atan2(lat2 - v.lat, dLon) - Math.PI / 2;
  }

  private markerTexture(t: TrackedSatellite): THREE.Texture {
    const key = `${t.spec.id}:${this.markerStyle}`;
    let tex = this.textures.get(key);
    if (!tex) {
      tex = this.markerStyle === "emoji" ? emojiTexture(t.spec.emoji) : silhouetteTexture(t.spec.silhouette, t.spec.colour);
      this.textures.set(key, tex);
    }
    return tex;
  }

  private disposeVisuals(v: SatVisuals) {
    for (const o of [v.marker, v.ring, v.track, v.flatMarker, v.flatTrack]) {
      o.removeFromParent();
      o.geometry.dispose();
      (o.material as THREE.Material).dispose();
    }
  }
}

// ── Marker textures ──────────────────────────────────────────────────────────

const TEX_SIZE = 128;

/** Station outline with a coloured halo so it reads on both the day and night sides. */
function silhouetteTexture(svgPath: string, colour: number): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = TEX_SIZE;
  const ctx = canvas.getContext("2d")!;
  const css = `#${colour.toString(16).padStart(6, "0")}`;
  const path = new Path2D(svgPath);
  const s = TEX_SIZE * 0.62 / 24;
  ctx.translate(TEX_SIZE / 2 - 12 * s, TEX_SIZE / 2 - 12 * s);
  ctx.scale(s, s);
  // Two passes of blurred colour for the glow, then a pale core so the shape stays crisp.
  ctx.shadowColor = css;
  ctx.fillStyle = css;
  ctx.shadowBlur = 22;
  ctx.fill(path);
  ctx.shadowBlur = 9;
  ctx.fill(path);
  ctx.shadowBlur = 0;
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.fill(path);
  return canvasTexture(canvas);
}

/** Kids / emoji mode marker (ROADMAP "Kids / emoji mode"). */
function emojiTexture(emoji: string): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = TEX_SIZE;
  const ctx = canvas.getContext("2d")!;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${TEX_SIZE * 0.7}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
  ctx.shadowColor = "rgba(0,0,0,0.6)";
  ctx.shadowBlur = 8;
  ctx.fillText(emoji, TEX_SIZE / 2, TEX_SIZE / 2 + TEX_SIZE * 0.04);
  return canvasTexture(canvas);
}

function canvasTexture(canvas: HTMLCanvasElement): THREE.Texture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function setPositions(geom: THREE.BufferGeometry, pts: number[], itemSize: number) {
  geom.setAttribute("position", new THREE.Float32BufferAttribute(pts, itemSize));
  geom.setDrawRange(0, pts.length / itemSize);
  geom.computeBoundingSphere();
}

/** True if the segment camera→p passes through the unit sphere before reaching p. */
function occludedByEarth(cam: THREE.Vector3, p: THREE.Vector3): boolean {
  _d.subVectors(p, cam);
  const len = _d.length();
  _d.divideScalar(len);
  const b = cam.dot(_d);
  const c = cam.lengthSq() - 1;
  const disc = b * b - c;
  if (disc <= 0) return false;
  const tHit = -b - Math.sqrt(disc);
  return tHit > 0 && tHit < len;
}

function screenDistance(world: THREE.Vector3, camera: THREE.Camera, clientX: number, clientY: number, rect: DOMRect): number {
  _a.copy(world).project(camera);
  if (_a.z > 1) return Infinity;
  const sx = rect.left + (_a.x + 1) / 2 * rect.width;
  const sy = rect.top + (1 - _a.y) / 2 * rect.height;
  return Math.hypot(sx - clientX, sy - clientY);
}

const RAD2DEG = 180 / Math.PI;
const _p = new THREE.Vector3();
const _geo = new THREE.Vector3();
const _world = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _d = new THREE.Vector3();
