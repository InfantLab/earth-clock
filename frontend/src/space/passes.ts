import * as THREE from "three";
import type { Propagator } from "./propagator";
import { sceneToGeographic, isInEarthShadow, EARTH_RADIUS_KM } from "./frames";
import { gmst, sunDirectionWorld } from "../astro/solar";

/**
 * "Can I see it tonight?" — visible-pass prediction for a ground observer.
 * See frontend/docs/satellites-plan.md §2.4.
 *
 * A moment counts as visible when the satellite is ≥ 10° up, sunlit, and the observer's
 * sky is dark enough (sun below −6°, civil twilight). That's the standard naked-eye rule:
 * a station in Earth's shadow is invisible, and one in a daylit sky is lost in the glare.
 *
 * Runs on the main thread in ~1-day slices with a yield between them, so a 5-day search
 * for two stations never blocks a frame for long. (A Web Worker would pull satellite.js
 * into a separate bundle whose optional WASM runtimes Vite can't build as a worker.)
 */

export interface Observer { lat: number; lon: number; heightKm?: number }

export interface VisiblePass {
  /** When the visible part starts / ends (may be later/earlier than rise/set). */
  start: Date;
  end: Date;
  /** Highest point during the visible part. */
  peak: Date;
  maxElDeg: number;
  startAzDeg: number;
  endAzDeg: number;
  startElDeg: number;
  endElDeg: number;
  /** True when the station vanishes into Earth's shadow while still well up in the sky. */
  endsInShadow: boolean;
  /** Estimated brightest magnitude (lower = brighter). */
  mag: number;
}

export interface PassOptions {
  days?: number;
  minElDeg?: number;
  /** Intrinsic magnitude at 1000 km, half-lit (phase 90°). ISS ≈ −1.8. */
  stdMag?: number;
  /** Called between slices; return true to abandon the search (pin moved, etc.). */
  cancelled?: () => boolean;
}

const COARSE_STEP_S = 30;
const FINE_STEP_S = 5;
const SLICE_STEPS = 2880; // one day of 30 s steps
const DEG = Math.PI / 180;

export async function predictVisiblePasses(
  prop: Propagator,
  obs: Observer,
  from: Date,
  opts: PassOptions = {},
): Promise<VisiblePass[] | null> {
  const days = opts.days ?? 5;
  const minEl = (opts.minElDeg ?? 10) * DEG;
  const stdMag = opts.stdMag ?? -1.8;
  const site = new Site(obs);
  const t0 = from.getTime();
  const tEnd = t0 + days * 86_400_000;
  const passes: VisiblePass[] = [];

  let riseAt: number | null = null;
  // If we start mid-pass, back up to catch its rise.
  if ((site.look(prop, t0)?.el ?? -1) > 0) riseAt = t0 - 15 * 60_000;

  let steps = 0;
  for (let t = t0; t <= tEnd; t += COARSE_STEP_S * 1000) {
    const la = site.look(prop, t);
    if (!la) return passes; // decayed / propagation error — stop quietly
    if (la.el > 0 && riseAt === null) riseAt = t - COARSE_STEP_S * 1000;
    if (la.el <= 0 && riseAt !== null) {
      const p = examinePass(site, prop, riseAt, t, minEl, stdMag);
      if (p && p.end.getTime() > t0) passes.push(p);
      riseAt = null;
    }
    if (++steps % SLICE_STEPS === 0) {
      await new Promise(r => setTimeout(r, 0));
      if (opts.cancelled?.()) return null;
    }
  }
  return passes;
}

/** Fine-sample one above-horizon window and extract its visible part, if any. */
function examinePass(site: Site, prop: Propagator, a: number, b: number, minEl: number, stdMag: number): VisiblePass | null {
  let first: Sample | null = null, last: Sample | null = null, peak: Sample | null = null;
  let brightest = Infinity;
  let endsInShadow = false;
  for (let t = a; t <= b; t += FINE_STEP_S * 1000) {
    const s = site.sample(prop, t);
    if (!s) continue;
    const visible = s.el >= minEl && s.sunlit && s.sunEl < -6 * DEG;
    if (visible) {
      first ??= s;
      last = s;
      if (!peak || s.el > peak.el) peak = s;
      brightest = Math.min(brightest, magnitude(stdMag, s.rangeKm, s.phase));
      endsInShadow = false;
    } else if (last && last.t === t - FINE_STEP_S * 1000 && !s.sunlit && s.el >= minEl) {
      endsInShadow = true;
    }
  }
  if (!first || !last || !peak) return null;
  // A visible sliver under a minute (clipping 10° or the shadow edge) isn't worth going out for.
  if (last.t - first.t < 60_000) return null;
  return {
    start: new Date(first.t), end: new Date(last.t), peak: new Date(peak.t),
    maxElDeg: peak.el / DEG,
    startAzDeg: first.az / DEG, endAzDeg: last.az / DEG,
    startElDeg: first.el / DEG, endElDeg: last.el / DEG,
    endsInShadow,
    mag: Math.round(brightest * 10) / 10,
  };
}

/** Elevation / azimuth (degrees) and range of a satellite from an observer — for tests. */
export function lookAngles(prop: Propagator, obs: Observer, date: Date) {
  const la = new Site(obs).look(prop, date.getTime());
  return la && { elDeg: la.el / DEG, azDeg: la.az / DEG, rangeKm: la.rangeKm };
}

/**
 * Diffuse-sphere estimate: m = std + 5·log10(r / 1000 km) − 2.5·log10(F(φ)), with
 * F(φ) = sin φ + (π − φ) cos φ normalised so F(90°) = 1 (the standard-magnitude phase).
 */
function magnitude(std: number, rangeKm: number, phase: number): number {
  const F = Math.max(1e-3, Math.sin(phase) + (Math.PI - phase) * Math.cos(phase));
  return std + 5 * Math.log10(rangeKm / 1000) - 2.5 * Math.log10(F);
}

interface Sample { t: number; el: number; az: number; rangeKm: number; sunlit: boolean; sunEl: number; phase: number }

/** Observer site in ECEF (Earth radii) with its local east/north/up basis. */
class Site {
  private readonly pos = new THREE.Vector3();
  private readonly east = new THREE.Vector3();
  private readonly north = new THREE.Vector3();
  private readonly up = new THREE.Vector3();

  constructor(obs: Observer) {
    // WGS-84 geodetic → ECEF.
    const f = 1 / 298.257223563, e2 = f * (2 - f);
    const φ = obs.lat * DEG, λ = obs.lon * DEG, h = (obs.heightKm ?? 0) / EARTH_RADIUS_KM;
    const N = 1 / Math.sqrt(1 - e2 * Math.sin(φ) ** 2);
    this.pos.set((N + h) * Math.cos(φ) * Math.cos(λ), (N + h) * Math.cos(φ) * Math.sin(λ), (N * (1 - e2) + h) * Math.sin(φ));
    this.east.set(-Math.sin(λ), Math.cos(λ), 0);
    this.north.set(-Math.sin(φ) * Math.cos(λ), -Math.sin(φ) * Math.sin(λ), Math.cos(φ));
    this.up.set(Math.cos(φ) * Math.cos(λ), Math.cos(φ) * Math.sin(λ), Math.sin(φ));
  }

  /** Elevation / azimuth only — the cheap coarse-scan test. */
  look(prop: Propagator, t: number): { el: number; az: number; rangeKm: number } | null {
    const d = new Date(t);
    if (!prop.stateAt(d, _p)) return null;
    toEcef(_p, gmst(d), _sat);
    _rho.subVectors(_sat, this.pos);
    const r = _rho.length();
    return {
      el: Math.asin(_rho.dot(this.up) / r),
      az: (Math.atan2(_rho.dot(this.east), _rho.dot(this.north)) + 2 * Math.PI) % (2 * Math.PI),
      rangeKm: r * EARTH_RADIUS_KM,
    };
  }

  sample(prop: Propagator, t: number): Sample | null {
    const la = this.look(prop, t);
    if (!la) return null;
    const d = new Date(t);
    sunDirectionWorld(d, _sunScene);
    const sunlit = !isInEarthShadow(_p, _sunScene); // _p still holds this time's position
    toEcef(_sunScene, gmst(d), _sun);
    // Phase angle at the satellite between the sun and the observer.
    const cosPhase = -_sun.dot(_rho) / _rho.length();
    return {
      t, ...la, sunlit,
      sunEl: Math.asin(_sun.dot(this.up)),
      phase: Math.acos(Math.max(-1, Math.min(1, cosPhase))),
    };
  }
}

/** Untilted inertial scene vector → ECEF (X to Greenwich, Z north). */
function toEcef(p: THREE.Vector3, gmstRad: number, out: THREE.Vector3): THREE.Vector3 {
  sceneToGeographic(p, gmstRad, _g);
  return out.set(_g.x, -_g.z, _g.y);
}

const COMPASS = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
export function compassPoint(azDeg: number): string {
  return COMPASS[Math.round(((azDeg % 360) + 360) % 360 / 22.5) % 16];
}

const _p = new THREE.Vector3();
const _g = new THREE.Vector3();
const _sat = new THREE.Vector3();
const _rho = new THREE.Vector3();
const _sun = new THREE.Vector3();
const _sunScene = new THREE.Vector3();
