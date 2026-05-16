import * as THREE from "three";

/**
 * The Sun, rendered at true geometric scale and distance.
 *
 * Position: a unit-length sun direction × `AU_IN_R_EARTH` (≈ 23 482 R⊕). Camera far-plane
 * is bumped accordingly in [Camera.ts](Camera.ts).
 *
 * Composition: a true-radius sphere mesh + a screen-facing corona sprite. The mesh gives
 * the geometry correct enough to scale visually when you zoom toward it; the corona keeps
 * the disc readable from default Earth-orbit views (where the sun would otherwise be a
 * sub-pixel speck despite its real ~0.5° angular diameter being correct).
 *
 * Self-illuminated (`MeshBasicMaterial`) — directional lighting wouldn't make sense
 * applied to a star, and we want it to stay full-brightness regardless of camera angle.
 */
export class Sun {
  readonly mesh: THREE.Group;
  private readonly disc: THREE.Mesh;
  private readonly corona: THREE.Sprite;

  // True scale, in Earth radii. Matches the constants in [astro/eclipse.ts](../astro/eclipse.ts).
  private static readonly R_SUN_IN_R_EARTH  = 696_000 / 6371;     // ≈ 109.2
  private static readonly AU_IN_R_EARTH     = 149_597_870 / 6371; // ≈ 23 482

  constructor() {
    this.mesh = new THREE.Group();

    // Sun disc: true-radius sphere with a saturated golden-yellow emissive look. No
    // lighting — the sun emits its own light by definition. Tilted warmer than physical
    // (a real star at 5778 K is essentially white) because a punchy yellow disc reads
    // unambiguously as "the sun" against any background, including the dark sky behind.
    const geom = new THREE.SphereGeometry(Sun.R_SUN_IN_R_EARTH, 48, 24);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffd54d,
    });
    this.disc = new THREE.Mesh(geom, mat);
    this.disc.frustumCulled = false; // sun is far away; bounding-sphere math is fine but
                                     // belt-and-braces avoids cull surprises near the far plane
    this.mesh.add(this.disc);

    // Corona sprite: an additive-blended billboard that always faces the camera. Sized
    // to be a multiple of the disc radius (the bright glow extends beyond the visible
    // photosphere). Without this the sun would be a ~1 px point from default views.
    // Sprite colour is left at white so the gradient texture controls hue — additive
    // blending then *adds* the corona colours over whatever sits behind.
    const coronaTex = makeCoronaTexture(256);
    const spriteMat = new THREE.SpriteMaterial({
      map: coronaTex,
      color: 0xffffff,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });
    this.corona = new THREE.Sprite(spriteMat);
    // ~8× the disc radius gives a noticeable halo with enough spread to read as a glow
    // from default Earth-orbit views, without flooding the entire viewport when you zoom
    // toward the sun.
    const coronaScale = Sun.R_SUN_IN_R_EARTH * 8;
    this.corona.scale.set(coronaScale, coronaScale, 1);
    this.corona.frustumCulled = false;
    this.mesh.add(this.corona);
  }

  /**
   * Place the sun at its true geometric position along the given unit direction from
   * Earth's centre. main.ts already computes `sunDirectionWorld(now, sunDir)` for the
   * directional light and the eclipse math; we re-use that vector here.
   */
  setSunDirection(dir: THREE.Vector3) {
    this.mesh.position.copy(dir).normalize().multiplyScalar(Sun.AU_IN_R_EARTH);
  }
}

/**
 * Build a soft radial-glow texture for the corona sprite. White at centre fading to
 * transparent at the edge; additive blending makes overlapping pixels brighten naturally.
 */
function makeCoronaTexture(size: number): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2,
  );
  // Hot bright core, golden mid-corona, deep-orange outer falloff. Picked by eye so the
  // sprite reads as "punchy radiant sun" rather than "soft pale glow" — the previous
  // pass had the centre too white and the outer ring too transparent, washing the sun
  // out against a dark sky. Additive blending means each band ADDS to the background,
  // so even moderate alphas at the outer ring contribute visible warm haze.
  grad.addColorStop(0.00, "rgba(255, 255, 240, 1.00)");
  grad.addColorStop(0.06, "rgba(255, 245, 200, 1.00)");
  grad.addColorStop(0.14, "rgba(255, 220, 130, 0.90)");
  grad.addColorStop(0.28, "rgba(255, 190,  90, 0.55)");
  grad.addColorStop(0.50, "rgba(255, 150,  60, 0.25)");
  grad.addColorStop(0.75, "rgba(255, 120,  40, 0.10)");
  grad.addColorStop(1.00, "rgba(255, 100,  30, 0.00)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}
