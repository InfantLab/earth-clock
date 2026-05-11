import * as THREE from "three";
import type { WindGrid } from "./DataSource";

/**
 * Pack a WindGrid into a Float32 RGBA texture suitable for sampling in the particle compute
 * shader: R = u m/s east, G = v m/s north. Bilinear filtering + longitude wrap.
 *
 * Float32 (rather than half-float) costs ~1 MB for a 360×181 grid but skips compatibility
 * gymnastics — WebGL2 supports rendering with FloatType filtering on every desktop GPU we care
 * about. If integrated mobile GPUs become a target we can revisit.
 */
export function windGridToTexture(grid: WindGrid): THREE.DataTexture {
  const { width, height, u, v } = grid;
  const data = new Float32Array(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    data[i * 4]     = u[i];
    data[i * 4 + 1] = v[i];
    // B and A unused; A=1 keeps the texture "valid" for any code paths that inspect alpha.
    data[i * 4 + 3] = 1;
  }
  const tex = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.FloatType);
  tex.wrapS = THREE.RepeatWrapping;        // longitude wraps
  tex.wrapT = THREE.ClampToEdgeWrapping;   // latitude clamps at poles
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}
