import * as THREE from "three";
import { loadTextureResilient } from "./resilientTexture";

// Moon's radius is ~0.273 Earth radii. We render it at true scale; phases emerge
// naturally from the same DirectionalLight that lights the Earth.
const MOON_RADIUS = 0.273;
// Muted grey shown while the real moon texture is still loading/retrying — see
// resilientTexture.ts for why we wait for real image data before binding it as a map.
const PLACEHOLDER_COLOR = 0x888888;
/** Default emissive intensity for the moon material — bright enough to read
 *  as a self-illuminated disc against the skybox. Restored when no lunar
 *  eclipse is in play. */
const DEFAULT_EMISSIVE_INTENSITY = 0.95;

export class Moon {
  readonly mesh: THREE.Mesh;
  private readonly material: THREE.MeshPhongMaterial;
  private readonly defaultEmissive = new THREE.Color(0xffffff);
  /** "Blood moon" copper hue the emissive colour is tinted toward during deep
   *  totality — refracted sunlight through Earth's atmosphere paints the moon
   *  this orange-red colour in real life. */
  private readonly umbralTint = new THREE.Color(0x8a2010);
  /** Reused scratch colour so per-frame setEclipseShadow doesn't allocate. */
  private readonly _scratchColor = new THREE.Color();

  constructor() {
    const loader = new THREE.TextureLoader();

    const geometry = new THREE.SphereGeometry(MOON_RADIUS, 64, 32);
    // Texture attached asynchronously below rather than passed straight into the material
    // constructor, so a slow/retrying load shows the placeholder color instead of black
    // (an incomplete WebGL texture samples as black once bound as map/emissiveMap).
    this.material = new THREE.MeshPhongMaterial({
      color: PLACEHOLDER_COLOR,
      shininess: 2,        // very matte — moon's regolith is dusty
      specular: 0x000000,
      // Self-illuminate the lunar texture so the moon is visible (a dim disc) even when its
      // unlit side faces the camera or when it sits far from any other lit object. Lit side
      // still picks up extra brightness from the directional sun light, so lunar phases
      // remain visible as a slight gradient across the disc. Bumped from 0.5 → 0.95 so
      // the moon reads as a bright object even at typical zoom — the moon's true albedo
      // is low (~0.12) but it's much brighter than the sky behind it.
      emissive: 0xffffff,
      emissiveIntensity: DEFAULT_EMISSIVE_INTENSITY,
    });

    this.mesh = new THREE.Mesh(geometry, this.material);

    loadTextureResilient(loader, "textures/moon_1024.jpg", (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      this.material.map = texture;
      this.material.emissiveMap = texture;
      this.material.needsUpdate = true;
    });
  }

  setPosition(p: THREE.Vector3) {
    this.mesh.position.copy(p);
  }

  /**
   * Drive the lunar-eclipse darkening effect.
   *
   * @param fraction  0 (no eclipse) → 1 (peak), as returned by `lunarEclipseFraction()`.
   * @param umbralMag Umbral magnitude from the catalog: >1 = total, 0–1 = partial, <0 = penumbral-only.
   *                  Defaults to 1.0 (full dimming) for backwards compatibility.
   *
   * The max dimming scales with `umbralMag` so penumbral-only eclipses show only
   * a subtle 10% dim (barely perceptible, as in real life), partial eclipses dim
   * proportionally, and total eclipses reach the full 82% blood-moon darkness.
   * Colour tint (white → copper-red) likewise scales down for weaker eclipses.
   */
  setEclipseShadow(fraction: number, umbralMag = 1.0) {
    const f = Math.max(0, Math.min(1, fraction));
    // Scale max dimming: total (mag ≥ 1) → 82 %; partial → proportional; penumbral → 10 %.
    const maxDim = umbralMag >= 1 ? 0.82
                 : umbralMag > 0  ? 0.82 * umbralMag
                 : 0.10;
    this.material.emissiveIntensity = DEFAULT_EMISSIVE_INTENSITY * (1 - maxDim * f);
    // Colour tint scales with maxDim so penumbral eclipses stay near white.
    this._scratchColor.copy(this.defaultEmissive).lerp(this.umbralTint, maxDim * f);
    this.material.emissive.copy(this._scratchColor);
  }
}
