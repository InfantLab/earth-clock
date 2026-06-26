import * as THREE from "three";

// Moon's radius is ~0.273 Earth radii. We render it at true scale; phases emerge
// naturally from the same DirectionalLight that lights the Earth.
const MOON_RADIUS = 0.273;
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
    const texture = loader.load("textures/moon_1024.jpg");
    texture.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.SphereGeometry(MOON_RADIUS, 64, 32);
    this.material = new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 2,        // very matte — moon's regolith is dusty
      specular: 0x000000,
      // Self-illuminate the lunar texture so the moon is visible (a dim disc) even when its
      // unlit side faces the camera or when it sits far from any other lit object. Lit side
      // still picks up extra brightness from the directional sun light, so lunar phases
      // remain visible as a slight gradient across the disc. Bumped from 0.5 → 0.95 so
      // the moon reads as a bright object even at typical zoom — the moon's true albedo
      // is low (~0.12) but it's much brighter than the sky behind it.
      emissive: 0xffffff,
      emissiveMap: texture,
      emissiveIntensity: DEFAULT_EMISSIVE_INTENSITY,
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
  }

  setPosition(p: THREE.Vector3) {
    this.mesh.position.copy(p);
  }

  /**
   * Drive the lunar-eclipse darkening effect. `fraction` is 0 (no eclipse) → 1
   * (peak), as returned by `lunarEclipseFraction()`. The moon is dimmed and
   * tinted copper-red as the umbra encroaches — the iconic "blood moon" look
   * from a deep total lunar eclipse. Skip-cheap when fraction is unchanged.
   *
   * Implementation: lerp emissiveIntensity from default (~0.95) down to ~0.18
   * at peak so the moon dims by ~80% but stays visible against the night sky;
   * lerp emissive colour from neutral white toward the copper tint with the
   * same fraction. Two-uniform tweak per frame, no shader changes needed.
   */
  setEclipseShadow(fraction: number) {
    const f = Math.max(0, Math.min(1, fraction));
    this.material.emissiveIntensity = DEFAULT_EMISSIVE_INTENSITY * (1 - 0.82 * f);
    // Lerp white → copper tint as fraction climbs. material.emissive is the
    // colour, multiplied by emissiveMap pixels per fragment, so this tints the
    // moon's whole surface without us touching the texture.
    this._scratchColor.copy(this.defaultEmissive).lerp(this.umbralTint, f);
    this.material.emissive.copy(this._scratchColor);
  }
}
