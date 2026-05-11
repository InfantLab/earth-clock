import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function createCamera(aspect: number): THREE.PerspectiveCamera {
  // Far plane large enough to comfortably contain the Moon (~60 Earth radii) and
  // future solar-system bodies. Near plane stays close so we can fly down to the surface.
  const camera = new THREE.PerspectiveCamera(45, aspect, 0.05, 5000);
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
  controls.maxDistance = 200;     // can zoom out past the Moon (~60) for full Earth-Moon view
  controls.enablePan = false;
  return controls;
}
