import * as THREE from "three";

const TIMEOUT_MS = 8000;
const MAX_ATTEMPTS = 4;

/**
 * Loads a texture with a manual timeout + retry-with-backoff. THREE's TextureLoader has
 * no timeout of its own — a stalled/slow network request just leaves the texture
 * "incomplete" forever, and an incomplete WebGL texture samples as solid black wherever
 * it's bound as a material's map, regardless of the material's base color. Callers should
 * assign the texture to the material inside `onLoad` (rather than passing a raw
 * `loader.load()` return value straight into a material constructor) so the material
 * shows its placeholder color/appearance until real image data actually arrives.
 */
export function loadTextureResilient(
  loader: THREE.TextureLoader,
  url: string,
  onLoad: (texture: THREE.Texture) => void,
): void {
  let attempt = 0;

  function tryLoad() {
    attempt++;
    let settled = false;

    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      retry(`timed out after ${TIMEOUT_MS}ms`);
    }, TIMEOUT_MS);

    loader.load(
      url,
      (texture) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        onLoad(texture);
      },
      undefined,
      (err) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        retry(err instanceof Error ? err.message : String(err));
      },
    );
  }

  function retry(reason: string) {
    if (attempt >= MAX_ATTEMPTS) {
      console.warn(`[orrery] texture failed permanently after ${attempt} attempts: ${url} (${reason})`);
      return;
    }
    const delay = 1000 * Math.pow(2, attempt - 1);
    console.warn(`[orrery] texture load attempt ${attempt} failed, retrying in ${delay}ms: ${url} (${reason})`);
    setTimeout(tryLoad, delay);
  }

  tryLoad();
}

/** Safe default for a sampler2D uniform before its real texture has loaded — sampling an
 *  unbound texture unit is undefined behavior in WebGL, so custom ShaderMaterials need
 *  something valid bound from frame one. Samples as solid black, which is harmless for
 *  additive-blended overlays (adds nothing) until the real texture swaps in. */
export function createBlackPlaceholderTexture(): THREE.DataTexture {
  const texture = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1, THREE.RGBAFormat);
  texture.needsUpdate = true;
  return texture;
}
