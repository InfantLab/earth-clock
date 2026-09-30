import * as THREE from "three";
import { SATELLITES, type SatelliteSpec } from "./catalog";
import { createPropagator, elementAge, type ElementAge, type ElementIndex, type Propagator } from "./propagator";
import { subPointDeg } from "./frames";
import { gmst } from "../astro/solar";

export interface TrackedSatellite {
  spec: SatelliteSpec;
  /** Null when this satellite couldn't be set up — see `error`. */
  propagator: Propagator | null;
  error?: string;
}

export interface SatelliteSnapshot {
  id: string;
  age: ElementAge;
  lat: number;
  lon: number;
  altKm: number;
  speedKms: number;
}

/**
 * Owns one propagator per catalogue entry and rebuilds them whenever fresh elements
 * arrive. SatelliteLayer, SatellitePanel and the Ride-along camera read from here.
 */
export class SatelliteTracker {
  private tracked: TrackedSatellite[] = SATELLITES.map(spec => ({ spec, propagator: null, error: "loading" }));

  setElements(elements: ElementIndex): void {
    this.tracked = SATELLITES.map(spec => {
      const r = createPropagator(spec, elements);
      return "propagator" in r
        ? { spec, propagator: r.propagator }
        : { spec, propagator: null, error: r.error };
    });
  }

  all(): readonly TrackedSatellite[] {
    return this.tracked;
  }

  get(id: string): TrackedSatellite | undefined {
    return this.tracked.find(t => t.spec.id === id);
  }

  /** Human-readable per-satellite status for logs and the Data panel. */
  summary(date: Date): string {
    return this.tracked.map(t => {
      if (!t.propagator) return `${t.spec.shortName}: ${t.error}`;
      const hours = (date.getTime() - t.propagator.epoch.getTime()) / 3_600_000;
      return `${t.spec.shortName} epoch ${hours >= 0 ? "" : "+"}${Math.abs(hours).toFixed(0)} h ${hours >= 0 ? "old" : "ahead"}`;
    }).join(" · ");
  }

  /** Where everything is at `date` — console helper and quick readouts. */
  snapshot(date: Date): SatelliteSnapshot[] {
    const g = gmst(date);
    const out: SatelliteSnapshot[] = [];
    for (const t of this.tracked) {
      if (!t.propagator || !t.propagator.stateAt(date, _pos, _vel)) continue;
      const sp = subPointDeg(_pos, g);
      out.push({
        id: t.spec.id,
        age: elementAge(t.propagator, date),
        lat: round(sp.lat, 3),
        lon: round(sp.lon, 3),
        altKm: round(sp.altKm, 1),
        speedKms: round(_vel.length() * 6378.137, 3),
      });
    }
    return out;
  }
}

const _pos = new THREE.Vector3();
const _vel = new THREE.Vector3();
const round = (x: number, dp: number) => Math.round(x * 10 ** dp) / 10 ** dp;
