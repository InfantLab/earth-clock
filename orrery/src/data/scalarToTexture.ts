import * as THREE from "three";
import type { ScalarGrid } from "./DataSource";

/**
 * Pack a single-channel `ScalarGrid` into an R-only Float32 texture for shader sampling.
 *
 * WebGL2 supports `RedFormat` + `FloatType` with linear filtering everywhere we care about.
 * The shader reads `texture2D(uMap, uv).r` and maps that float through a colormap. Min/max
 * normalisation happens on the GPU side via `uVmin` / `uVmax` uniforms — kept here as raw
 * physical values so the same texture can be re-coloured (different palette, different
 * range) without re-uploading.
 */
export function scalarGridToTexture(grid: ScalarGrid): THREE.DataTexture {
  const { width, height, data } = grid;
  if (data.length !== width * height) {
    throw new Error(`scalarGridToTexture: data length ${data.length} ≠ width*height ${width * height}`);
  }
  // Copy in case the caller mutates `grid.data` later. Float32Array is already the right shape.
  const buf = new Float32Array(data);
  const tex = new THREE.DataTexture(buf, width, height, THREE.RedFormat, THREE.FloatType);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}
