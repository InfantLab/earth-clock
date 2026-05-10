import * as THREE from "three";

// Simple particle starfield as a placeholder skybox.
// Phase 3 will replace this with a real Tycho-2 / NASA deepstar cubemap.
export class Sky {
  readonly mesh: THREE.Points;

  constructor(starCount = 4000, radius = 80) {
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      // Uniform distribution on a sphere via inverse-CDF sampling
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = radius;
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
    });

    this.mesh = new THREE.Points(geometry, material);
  }
}
