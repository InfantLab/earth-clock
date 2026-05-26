import * as THREE from "three";

/**
 * Real-photograph skybox loader. Returns a texture suitable for `scene.background = ...`
 * or `null` if no asset is present (the caller should keep its procedural fallback in
 * that case).
 *
 * Two accepted formats, tried in order of preference:
 *
 * 1. **Six-face cubemap** at `textures/starmap_{px,nx,py,ny,pz,nz}.jpg`. THREE.js renders
 *    cubemaps natively as `scene.background`; sampling is per-face so it stays sharp at
 *    every zoom. Best quality if you have access to a cubemap source.
 *
 * 2. **Single equirectangular image** at `textures/starmap.jpg`. THREE.js converts on the
 *    fly via `EquirectangularReflectionMapping`. This is the format **NASA's "Deep Star
 *    Maps 2020"** publishes — https://svs.gsfc.nasa.gov/4851/ — at 4K / 8K / 16K /
 *    64K resolutions, free and public-domain. The 4K JPEG is ~5 MB; 8K is ~20 MB. Either
 *    looks great at the frontend's typical viewing distances. Download "TYCHO_8 (deep
 *    star map) without constellation figures" (without overlays).
 *
 * Both files live in `public/textures/` so Vite serves them statically. No code change
 * needed when you switch between formats — drop the files in and reload.
 *
 * **404s in the console while no file is present are expected.** They go away the
 * moment you drop the texture in.
 */
export async function tryLoadSkybox(): Promise<THREE.Texture | null> {
  // Prefer cubemap (sharper at all zooms; no equirectangular reprojection cost).
  const cubeFaces = ["px", "nx", "py", "ny", "pz", "nz"]
    .map(s => `textures/starmap_${s}.jpg`);
  const cubeOk = await headProbe(cubeFaces[0]);
  if (cubeOk) {
    const cube = await loadCubemap(cubeFaces);
    if (cube) {
      console.log("[earth-clock] skybox loaded (6-face cubemap)");
      return cube;
    }
  }

  // Fallback: equirectangular JPEG, trying Solar System Scope's published filenames
  // first (the same source as the earth/moon textures), then a generic `starmap.jpg`.
  // Order is 2K-before-8K by default to keep initial load fast; the planned quality
  // toggle (Phase A polish — see PLAN.md) will flip the order at runtime.
  const eqCandidates = [
    "textures/2k_stars_milky_way.jpg",
    "textures/starmap.jpg",
    "textures/8k_stars_milky_way.jpg",
  ];
  for (const url of eqCandidates) {
    if (!(await headProbe(url))) continue;
    const eq = await loadEquirect(url);
    if (eq) {
      console.log(`[earth-clock] skybox loaded (equirectangular: ${url})`);
      return eq;
    }
  }

  console.warn(
    "[earth-clock] no skybox texture found in textures/; using procedural Points " +
    "starfield. To upgrade: download NASA's 'Deep Star Map 2020' (8K equirectangular) " +
    "from https://svs.gsfc.nasa.gov/4851/ and save it as frontend/public/textures/starmap.jpg.",
  );
  return null;
}

/** HEAD probe to avoid trying to texture-load a 404 (and its associated noisy WebGL
 *  warnings about uploading a 0×0 image). Cheaper than a GET. */
async function headProbe(url: string): Promise<boolean> {
  try {
    const r = await fetch(url, { method: "HEAD" });
    return r.ok;
  } catch {
    return false;
  }
}

function loadCubemap(urls: string[]): Promise<THREE.CubeTexture | null> {
  return new Promise((resolve) => {
    new THREE.CubeTextureLoader().load(
      urls,
      (tex) => { tex.colorSpace = THREE.SRGBColorSpace; resolve(tex); },
      undefined,
      () => resolve(null),
    );
  });
}

function loadEquirect(url: string): Promise<THREE.Texture | null> {
  return new Promise((resolve) => {
    new THREE.TextureLoader().load(
      url,
      (tex) => {
        // EquirectangularReflectionMapping is the right choice for `scene.background` —
        // three.js's built-in background shader handles equirectangular-mapped textures
        // by sampling the cube direction → lat/lon. (RefractionMapping is for refractive
        // materials, not skyboxes.)
        tex.mapping = THREE.EquirectangularReflectionMapping;
        tex.colorSpace = THREE.SRGBColorSpace;
        resolve(tex);
      },
      undefined,
      () => resolve(null),
    );
  });
}
