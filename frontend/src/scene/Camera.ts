import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function createCamera(aspect: number): THREE.PerspectiveCamera {
  // Far plane large enough to comfortably contain the Sun at its true position
  // (1 AU ≈ 23 482 Earth radii). Headroom past that lets the user zoom out toward the
  // sun without it disappearing into the clip plane. Near plane stays close so we can
  // still fly down to the surface; depth precision degrades slightly with far/near≈600k
  // but a 24-bit depth buffer absorbs it without visible z-fighting.
  const camera = new THREE.PerspectiveCamera(45, aspect, 0.05, 30000);
  camera.position.set(0, 0, 3.2);
  return camera;
}

export function attachOrbitControls(
  camera: THREE.PerspectiveCamera,
  domElement: HTMLElement
): OrbitControls {
  const controls = new OrbitControls(camera, domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.5;
  controls.minDistance = 1.4;     // can zoom in close to see surface
  controls.maxDistance = 25000;   // can zoom most of the way out to the Sun (1 AU ≈ 23 482) — stops short so the user can still orient relative to Earth
  controls.enablePan = false;
  // Auto-orbit speed when the menu's "Orbit" toggle is on. Speed semantics: 2.0 is one
  // orbit every 30 s at 60 fps, so 0.4 ≈ 150 s per orbit — gentle enough to read as a
  // "living photograph" rather than spinning. OrbitControls pauses autoRotate while the
  // user is actively dragging, so input handover is automatic.
  controls.autoRotate = false;
  controls.autoRotateSpeed = 0.4;
  return controls;
}
