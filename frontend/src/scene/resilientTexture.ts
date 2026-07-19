import * as THREE from "three";

const TIMEOUT_MS = 15000;
const MAX_BACKOFF_MS = 30000;
/** After this many failed/timed-out attempts, report a visible error status — but keep
 *  retrying in the background at the (capped) backoff interval rather than giving up.
 *  The network condition this mitigates (see INCIDENT-2026-07-19-slow-transfers.md) is
 *  expected to be transient, so a permanent failure that requires a page reload would be
 *  the wrong tradeoff — better to keep quietly trying and self-heal if it clears. */
const ATTEMPTS_BEFORE_VISIBLE_ERROR = 3;

/** Status patch for a single texture load, meant to be merged into the caller's own
 *  reporting (e.g. DataRegistry.report) alongside a fixed `source` label. Never sets more
 *  than one of `fetched` / `error` / `detail` at a time. */
export interface TextureLoadStatus {
  /** Set once the texture has actually loaded. */
  fetched?: Date;
  /** Set once retries have been visibly flagged as failing; cleared by a later `fetched`. */
  error?: string;
  /** In-progress detail (e.g. "retrying (attempt 2)…") shown while still pending. */
  detail?: string;
}

/**
 * Loads a texture with a manual timeout + indefinite retry-with-backoff. THREE's
 * TextureLoader has no timeout of its own — a stalled/slow network request just leaves
 * the texture "incomplete" forever, and an incomplete WebGL texture samples as solid
 * black wherever it's bound as a material map, regardless of the material's base color.
 * Callers should assign the texture to the material inside `onLoad` (rather than passing
 * a raw `loader.load()` return value straight into a material constructor) so the
 * material shows its placeholder color/appearance until real image data actually arrives.
 */
export function loadTextureResilient(
  loader: THREE.TextureLoader,
  url: string,
  onLoad: (texture: THREE.Texture) => void,
  onStatus?: (status: TextureLoadStatus) => void,
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
        onStatus?.({ fetched: new Date() });
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
    const delay = Math.min(MAX_BACKOFF_MS, 1000 * Math.pow(2, attempt - 1));
    console.warn(`[orrery] texture load attempt ${attempt} failed, retrying in ${delay}ms: ${url} (${reason})`);
    if (attempt >= ATTEMPTS_BEFORE_VISIBLE_ERROR) {
      onStatus?.({ error: `slow/unreachable after ${attempt} attempts — retrying…` });
    } else {
      onStatus?.({ detail: `retrying (attempt ${attempt})…` });
    }
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
