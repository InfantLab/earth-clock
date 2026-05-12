import type * as THREE from "three";

/**
 * Interface for cinematic camera paths through space. v1 only implements the gentle idle
 * orbit (via OrbitControls' built-in `autoRotate`); future implementations will include:
 *
 *   - ISS viewpoint (TLE + SGP4 propagator → real ISS position, ~408 km × 51.6° inclination)
 *   - Sub-lunar / "Earthrise" (camera at moon's current position, looking back at Earth)
 *   - Heliocentric (camera fixed in inertial frame, watching Earth orbit + spin)
 *   - Geosync (locked equatorial, follows a chosen longitude)
 *   - L1 / DSCOVR (always between sun and Earth — the EPIC viewpoint)
 *   - Free-fly (WASD + mouse, ignores orbital mechanics)
 *
 * Common contract: each path provides an `update(now, dtSec, camera, controls)` that nudges
 * the camera position / target each frame. Paths can be momentarily paused by user input
 * (any mouse-drag or scroll) and resume after a delay. The animate loop in main.ts picks
 * the active path and delegates to it.
 *
 * Not used yet — implementations land alongside their menu entries. Keeping the interface
 * here so future work has a clear shape to follow.
 */
export interface CameraPath {
  /** Display name for the menu / panel. */
  readonly label: string;

  /**
   * Per-frame update. Mutates `camera.position` and (optionally) the `target` of OrbitControls.
   * `simulatedTime` is the same time the rest of the scene uses (so time-warp affects orbit-mech
   * paths like ISS). `dtSec` is real wall-clock seconds for cinematic-only paths (auto-orbit).
   */
  update(
    simulatedTime: Date,
    dtSec: number,
    camera: THREE.PerspectiveCamera,
    controls: { target: THREE.Vector3; update(): void },
  ): void;

  /** Called when the user starts manual interaction (mouse drag, scroll). Path should pause. */
  pause?(): void;

  /** Called when the user-interaction-idle timer expires. Path should resume from where it paused. */
  resume?(): void;
}
