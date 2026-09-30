import type * as THREE from "three";
import { json2satrec, propagate, type SatRec } from "satellite.js";
import type { OmmRecord } from "../data/satelliteLoader";
import type { Propagator } from "./propagator";
import { temeToScene } from "./frames";

/** SGP4/SDP4 via satellite.js, from CelesTrak OMM mean elements. */
export class Sgp4Propagator implements Propagator {
  readonly epoch: Date;
  readonly periodSec: number;
  private readonly satrec: SatRec;

  constructor(omm: OmmRecord) {
    this.satrec = json2satrec(omm);
    if (this.satrec.error) throw new Error(`SGP4 init error ${this.satrec.error}`);
    // CelesTrak EPOCH is UTC without a zone suffix ("2026-09-30T06:12:34.123456").
    const iso = /[zZ]|[+-]\d\d:?\d\d$/.test(omm.EPOCH) ? omm.EPOCH : omm.EPOCH + "Z";
    this.epoch = new Date(iso);
    const revsPerDay = Number(omm.MEAN_MOTION);
    this.periodSec = 86_400 / revsPerDay;
  }

  stateAt(date: Date, outPos: THREE.Vector3, outVel?: THREE.Vector3): boolean {
    const pv = propagate(this.satrec, date);
    if (!pv) return false;
    temeToScene(pv.position, outPos);
    if (outVel) temeToScene(pv.velocity, outVel); // km/s → Earth radii/s via the same /R⊕
    return Number.isFinite(outPos.x);
  }
}
