import * as THREE from "three";
import type { ScalarGrid } from "./DataSource";

/**
 * Pack a single-channel `ScalarGrid` into an R-only half-float texture for shader sampling.
 *
 * **Why half-float and not float32**: WebGL2 linear filtering of `R32F` requires the
 * `OES_texture_float_linear` extension, which is missing on some integrated GPUs and
 * causes the texture to fall back to nearest-neighbour sampling — visible as a heavily
 * blocky stair-stepped pattern when stretched over the globe. `R16F` linear filtering is
 * supported by every WebGL2-capable GPU we care about, and the precision (about 3-4
 * decimal digits) is plenty for visualisation ranges (0-100 % cover, 0-310 K temperature,
 * 0-2 kg/m² cloud water, etc).
 *
 * The shader reads `texture2D(uMap, uv).r` and maps that float through a colormap. Min/max
 * normalisation happens on the GPU side via `uVmin` / `uVmax` uniforms — kept as raw
 * physical values so the same texture can be re-coloured (different palette, different
 * range) without re-uploading.
 */
export function scalarGridToTexture(grid: ScalarGrid): THREE.DataTexture {
  const { width, height, data } = grid;
  if (data.length !== width * height) {
    throw new Error(`scalarGridToTexture: data length ${data.length} ≠ width*height ${width * height}`);
  }
  // Convert Float32 → half-float (Uint16). Three.js ships DataUtils.toHalfFloat() for this.
  const buf = new Uint16Array(data.length);
  for (let i = 0; i < data.length; i++) {
    buf[i] = THREE.DataUtils.toHalfFloat(data[i]);
  }
  const tex = new THREE.DataTexture(buf, width, height, THREE.RedFormat, THREE.HalfFloatType);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}
