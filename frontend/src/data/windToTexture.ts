import * as THREE from "three";
import type { WindGrid } from "./DataSource";

/**
 * Pack a WindGrid into a HalfFloat RGBA texture suitable for sampling in the particle
 * compute shader: R = u m/s east, G = v m/s north. Bilinear filtering + longitude wrap.
 *
 * Half-float (16-bit) — not Float32 — because WebGL2 LINEAR filtering on Float32 textures
 * requires the `OES_texture_float_linear` extension, which many GPUs silently lack
 * (the driver falls back to NEAREST sampling even when LinearFilter is requested).
 * Symptom of the silent fallback: visible 1°-grid "panels" of uniform wind direction
 * tiled across the globe, with sharp discontinuities at cell boundaries — particles in
 * each cell all advect identically because every fragment reads a single texel's value.
 *
 * HalfFloat is supported natively for linear filtering in WebGL2 with no extension.
 * Range (±65 504) and precision (~3 decimal digits) are plenty for wind: typical values
 * are -50..+50 m/s, jet stream peaks ~100 m/s. ~0.5 MB for a 360×181 grid (vs. ~1 MB
 * for Float32).
 */
export function windGridToTexture(grid: WindGrid): THREE.DataTexture {
  const { width, height, u, v } = grid;
  // HalfFloatType expects Uint16 storing IEEE-754 binary16 bit patterns. THREE.DataUtils
  // converts each single-precision float into that bit pattern.
  const data = new Uint16Array(width * height * 4);
  const toHalf = THREE.DataUtils.toHalfFloat;
  const ONE = toHalf(1);
  for (let i = 0; i < width * height; i++) {
    data[i * 4]     = toHalf(u[i]);
    data[i * 4 + 1] = toHalf(v[i]);
    // B unused (left as zero); A=1 keeps the texture "valid" for any code paths that
    // inspect alpha.
    data[i * 4 + 3] = ONE;
  }
  const tex = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.HalfFloatType);
  tex.wrapS = THREE.RepeatWrapping;        // longitude wraps
  tex.wrapT = THREE.ClampToEdgeWrapping;   // latitude clamps at poles
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}
