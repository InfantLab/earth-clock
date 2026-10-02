import * as THREE from "three";
import type { CameraPath } from "./CameraPath";
import { lvlhBasis } from "../space/frames";

/** Where a satellite is, in world (tilted) scene coordinates. SatelliteLayer.worldState. */
export type WorldStateFn = (date: Date, outPos: THREE.Vector3, outVel: THREE.Vector3) => boolean;

export type RideView = "cupola" | "horizon";
export const RIDE_VIEWS: readonly RideView[] = ["cupola", "horizon"];

/** Horizon view: the limb sits this far below the top edge, as a fraction of the vertical FOV. */
const HORIZON_LIMB_FROM_TOP = 1 / 3;

/**
 * Ride along: the camera sits on a satellite and looks out in its local-vertical /
 * local-horizontal (LVLH) frame — satellites-plan.md §3.1.
 *
 *   cupola  — straight down (nadir), the classic Earth-observation view.
 *   horizon — forward along the direction of flight, pitched so the limb sits a third
 *             of the way down the frame: the thin blue line and orbital sunrises.
 *
 * Spike scope: no look-around, no eased entry/exit, no chase view (that one needs the
 * two-pass depth render for the station model).
 */
export class SatelliteCameraPath implements CameraPath {
  readonly label: string;
  view: RideView;

  private readonly pos = new THREE.Vector3();
  private readonly vel = new THREE.Vector3();
  private readonly basis = { up: new THREE.Vector3(), forward: new THREE.Vector3(), right: new THREE.Vector3() };
  private readonly look = new THREE.Vector3();

  constructor(label: string, private readonly worldState: WorldStateFn, view: RideView = "horizon") {
    this.label = label;
    this.view = view;
  }

  /** False when the satellite can't be placed (no elements, or too far from their epoch). */
  update(
    simulatedTime: Date,
    _dtSec: number,
    camera: THREE.PerspectiveCamera,
    controls: { target: THREE.Vector3; update(): void },
  ): boolean {
    if (!this.worldState(simulatedTime, this.pos, this.vel)) return false;
    const { up, forward } = lvlhBasis(this.pos, this.vel, this.basis);

    camera.position.copy(this.pos);
    if (this.view === "cupola") {
      // Nadir, with the direction of flight at the top of the frame.
      camera.up.copy(forward);
      this.look.copy(up).negate();
    } else {
      // The geometric horizon dips below local horizontal by acos(R / r).
      const dip = Math.acos(Math.min(1, 1 / this.pos.length()));
      const vfov = THREE.MathUtils.degToRad(camera.fov);
      const pitch = dip + vfov * (0.5 - HORIZON_LIMB_FROM_TOP);
      camera.up.copy(up);
      this.look.copy(forward).multiplyScalar(Math.cos(pitch)).addScaledVector(up, -Math.sin(pitch));
    }
    controls.target.copy(this.pos).add(this.look);
    camera.lookAt(controls.target);
    return true;
  }
}
