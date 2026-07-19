import * as THREE from "three";
import { loadTextureResilient, createBlackPlaceholderTexture } from "./resilientTexture";

// Earth's axial tilt (~23.44°). Applied to the parent group; the inner Earth spins on local Y.
const AXIAL_TILT = 23.44 * Math.PI / 180;

// Muted ocean/land tint shown while the real day texture is still loading (or retrying after
// a stalled request) — see resilientTexture.ts: an incomplete WebGL texture samples as solid
// black once bound as a material's map, so the placeholder only helps if we wait for real
// image data before assigning it.
const PLACEHOLDER_COLOR = 0x3a5a6b;

export class Globe {
  readonly mesh: THREE.Group;
  private readonly earth: THREE.Mesh;
  private readonly nightOverlay: THREE.Mesh;
  private readonly sunDirUniform: { value: THREE.Vector3 };
  private readonly phongMaterial: THREE.MeshPhongMaterial;
  private readonly flatMaterial:  THREE.MeshBasicMaterial;
  private terminatorEnabled = true;
  private nightLightsEnabled = true;

  constructor() {
    const loader = new THREE.TextureLoader();

    // Day-side material (terminator ON): Phong + directional sun light produces the day/night
    // gradient on the surface texture, plus normal-mapped shading and ocean specular. Textures
    // (day/normal/specular — Solar System Scope CC-BY 4.0 / Three.js examples, NASA Blue Marble
    // derivatives) are attached asynchronously below rather than passed straight into the
    // material constructor, so a slow/retrying load shows the placeholder color instead of black.
    const earthGeom = new THREE.SphereGeometry(1, 128, 64);
    this.phongMaterial = new THREE.MeshPhongMaterial({
      color: PLACEHOLDER_COLOR,
      specular: new THREE.Color(0x335577),
      shininess: 18,
    });
    // Flat material (terminator OFF): unlit texture, dimmed slightly so it doesn't blow out
    // the rest of the scene. No day/night, no specular — just the geography.
    this.flatMaterial = new THREE.MeshBasicMaterial({
      color: PLACEHOLDER_COLOR,
    });
    this.earth = new THREE.Mesh(earthGeom, this.phongMaterial);

    loadTextureResilient(loader, "textures/earth_daymap_2k.jpg", (day) => {
      day.colorSpace = THREE.SRGBColorSpace;
      this.phongMaterial.map = day;
      this.phongMaterial.needsUpdate = true;
      this.flatMaterial.map = day;
      this.flatMaterial.needsUpdate = true;
    });
    loadTextureResilient(loader, "textures/earth_normal_2048.jpg", (normal) => {
      this.phongMaterial.normalMap = normal;
      this.phongMaterial.normalScale = new THREE.Vector2(0.85, 0.85);
      this.phongMaterial.needsUpdate = true;
    });
    loadTextureResilient(loader, "textures/earth_specular_2048.jpg", (specular) => {
      this.phongMaterial.specularMap = specular;
      this.phongMaterial.needsUpdate = true;
    });

    // Night-side overlay: a second sphere rendered additively, masked to the dark hemisphere.
    // Custom shader uses world-space normal vs. sun direction (passed as uniform from JS).
    // uMap starts as a black placeholder (see resilientTexture.ts) so the additively-blended
    // shader has a valid sampler bound from frame one — samples as black (adds nothing) until
    // the real night-lights texture loads in.
    this.sunDirUniform = { value: new THREE.Vector3(1, 0, 0) };
    const nightUniforms = {
      uMap: { value: createBlackPlaceholderTexture() as THREE.Texture },
      uSunDirection: this.sunDirUniform,
      uIntensity: { value: 1.6 },
    };
    loadTextureResilient(loader, "textures/earth_nightmap_2k.jpg", (night) => {
      night.colorSpace = THREE.SRGBColorSpace;
      nightUniforms.uMap.value = night;
    });
    const nightMat = new THREE.ShaderMaterial({
      uniforms: nightUniforms,
      vertexShader: /* glsl */`
        varying vec3 vWorldNormal;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          // mat3(modelMatrix) excludes translation; for unit-scaled spheres this is a pure rotation
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uMap;
        uniform vec3 uSunDirection;
        uniform float uIntensity;
        varying vec3 vWorldNormal;
        varying vec2 vUv;
        void main() {
          // Smooth night-side mask: fully on at NdotL <= -0.05, off at NdotL >= 0.05
          float ndotl = dot(vWorldNormal, normalize(uSunDirection));
          float nightSide = smoothstep(0.05, -0.05, ndotl);
          vec3 city = texture2D(uMap, vUv).rgb;
          gl_FragColor = vec4(city * nightSide * uIntensity, 1.0);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    // Tiny offset so the overlay doesn't z-fight with the day surface
    const nightGeom = new THREE.SphereGeometry(1.0008, 128, 64);
    this.nightOverlay = new THREE.Mesh(nightGeom, nightMat);

    // Tilted parent — both day Earth and night overlay share the same rotation/tilt
    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.earth);
    this.mesh.add(this.nightOverlay);
  }

  // Sun direction in world space (unit vector pointing from Earth toward sun).
  setSunDirection(dir: THREE.Vector3) {
    this.sunDirUniform.value.copy(dir);
  }

  // Earth's spin angle around the (already-tilted) local Y axis.
  setRotationY(angle: number) {
    this.earth.rotation.y = angle;
    this.nightOverlay.rotation.y = angle;
  }

  // Day/night terminator visibility. When OFF, the day surface uses an unlit texture (no
  // lighting gradient) and the night-lights overlay is forced hidden — the globe appears
  // uniformly lit, "show me the whole world" mode. When ON, realistic sun-lit surface
  // with night-lights subject to its own toggle.
  setTerminatorVisible(visible: boolean) {
    this.terminatorEnabled = visible;
    this.earth.material = visible ? this.phongMaterial : this.flatMaterial;
    this.updateNightOverlay();
  }

  // Toggle the additive city-lights overlay. Night lights are only meaningful when the
  // terminator is on; otherwise the whole globe is uniformly lit and "night" doesn't exist.
  setNightLightsVisible(visible: boolean) {
    this.nightLightsEnabled = visible;
    this.updateNightOverlay();
  }

  private updateNightOverlay() {
    this.nightOverlay.visible = this.terminatorEnabled && this.nightLightsEnabled;
  }

  /**
   * Attach a child object (e.g. a location pin) to the rotating earth mesh so it stays
   * glued to its geographic position as Earth spins.
   */
  attachToEarth(obj: THREE.Object3D) {
    this.earth.add(obj);
  }

  /**
   * Convert a world-space point to geographic (lat, lon) in degrees. Used by the location
   * picker's raycaster: `intersects[0].point` is in world space; this undoes axial tilt +
   * daily rotation by transforming through the earth mesh's inverse model matrix.
   */
  worldToLatLon(worldPoint: THREE.Vector3): { lat: number; lon: number } {
    const local = this.earth.worldToLocal(worldPoint.clone()).normalize();
    const lat = Math.asin(Math.max(-1, Math.min(1, local.y))) * 180 / Math.PI;
    const lon = Math.atan2(-local.z, local.x) * 180 / Math.PI;
    return { lat, lon };
  }

  /** Expose the day-sphere mesh so the location picker's raycaster can target it. */
  get earthMesh(): THREE.Mesh {
    return this.earth;
  }
}
