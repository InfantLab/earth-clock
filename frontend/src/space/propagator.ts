import type * as THREE from "three";
import type { SatelliteSpec } from "./catalog";
import type { OmmRecord } from "../data/satelliteLoader";
import { Sgp4Propagator } from "./sgp4Propagator";

/**
 * Where-is-it-at-time-t, independent of how the answer is computed. SGP4 today;
 * tabulated ephemerides (JWST, DSCOVR) later. See satellites-plan.md §1.3.
 */
export interface Propagator {
  /**
   * Position (Earth radii) and optionally velocity (Earth radii / s) in the untilted
   * scene frame. Returns false when the object can't be placed at `date` (propagation
   * error, decayed, or outside the source's range) — outputs are then untouched.
   */
  stateAt(date: Date, outPos: THREE.Vector3, outVel?: THREE.Vector3): boolean;
  /** Epoch of the source data; accuracy degrades with |t − epoch|. */
  readonly epoch: Date;
  /** Orbital period in seconds — drives orbit-ring and ground-track sampling. */
  readonly periodSec: number;
}

/** Element sets by NORAD id, as delivered by satelliteLoader. */
export type ElementIndex = ReadonlyMap<number, OmmRecord>;

/**
 * Build the propagator for a catalogue entry. Returns null (with a reason) when the
 * data it needs isn't available — the caller hides that satellite and reports why.
 */
export function createPropagator(
  spec: SatelliteSpec,
  elements: ElementIndex,
): { propagator: Propagator } | { error: string } {
  const p = spec.propagator;
  switch (p.kind) {
    case "sgp4": {
      const omm = elements.get(p.noradId);
      if (!omm) return { error: `no elements for NORAD ${p.noradId}` };
      try {
        return { propagator: new Sgp4Propagator(omm) };
      } catch (e) {
        return { error: `bad elements for NORAD ${p.noradId}: ${(e as Error).message}` };
      }
    }
    case "ephemeris":
      return { error: "ephemeris propagator not implemented yet" };
  }
}

/** How far the source data can be trusted at `date` (satellites-plan.md §1.6). */
export type ElementAge = "ok" | "approximate" | "unknown";

const DAY_MS = 86_400_000;
export function elementAge(propagator: Propagator, date: Date): ElementAge {
  const dt = Math.abs(date.getTime() - propagator.epoch.getTime());
  if (dt < 3 * DAY_MS) return "ok";
  if (dt < 14 * DAY_MS) return "approximate";
  return "unknown";
}
