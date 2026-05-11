import * as THREE from "three";

// Moon's radius is ~0.273 Earth radii. We render it at true scale; phases emerge
// naturally from the same DirectionalLight that lights the Earth.
const MOON_RADIUS = 0.273;

export class Moon {
  readonly mesh: THREE.Mesh;

  constructor() {
    const loader = new THREE.TextureLoader();
    const texture = loader.load("textures/moon_1024.jpg");
    texture.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.SphereGeometry(MOON_RADIUS, 64, 32);
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 2,        // very matte — moon's regolith is dusty
      specular: 0x000000,
      // Self-illuminate the lunar texture so the moon is visible (a dim disc) even when its
      // unlit side faces the camera or when it sits far from any other lit object. Lit side
      // still picks up extra brightness from the directional sun light, so lunar phases
      // remain visible as a slight gradient across the disc.
      emissive: 0xffffff,
      emissiveMap: texture,
      emissiveIntensity: 0.5,
    });

    this.mesh = new THREE.Mesh(geometry, material);
  }

  setPosition(p: THREE.Vector3) {
    this.mesh.position.copy(p);
  }
}
