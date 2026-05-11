import * as THREE from "three";

// Particle starfield placeholder — distant enough that the camera never escapes the sphere,
// rendered with pixel-sized points so stars look the same at any zoom.
// Phase 3 will replace this with a real Tycho-2 / NASA deepstar cubemap.
export class Sky {
  readonly mesh: THREE.Points;

  constructor(starCount = 6000, radius = 1500) {
    const positions = new Float32Array(starCount * 3);
    const sizes     = new Float32Array(starCount); // unused by PointsMaterial but kept for future custom shader
    for (let i = 0; i < starCount; i++) {
      // Uniform distribution on a sphere via inverse-CDF sampling
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      positions[i * 3]     = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      sizes[i] = 1 + Math.random() * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.6,
      sizeAttenuation: false, // pixel-sized — independent of zoom
      transparent: true,
      opacity: 0.9,
    });

    this.mesh = new THREE.Points(geometry, material);
  }
}
