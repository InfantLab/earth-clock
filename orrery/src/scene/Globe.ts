import * as THREE from "three";

// Earth's axial tilt (~23.44°). Applied to the parent group; the inner Earth spins on local Y.
const AXIAL_TILT = 23.44 * Math.PI / 180;

export class Globe {
  readonly mesh: THREE.Group;
  private readonly earth: THREE.Mesh;
  private readonly nightOverlay: THREE.Mesh;
  private readonly sunDirUniform: { value: THREE.Vector3 };

  constructor() {
    const loader = new THREE.TextureLoader();

    // Cloudless geography (Solar System Scope, CC-BY 4.0).
    // Normal + specular masks from Three.js examples (NASA Blue Marble derivatives).
    const day      = loader.load("textures/earth_daymap_2k.jpg");
    const night    = loader.load("textures/earth_nightmap_2k.jpg");
    const normal   = loader.load("textures/earth_normal_2048.jpg");
    const specular = loader.load("textures/earth_specular_2048.jpg");
    day.colorSpace = THREE.SRGBColorSpace;
    night.colorSpace = THREE.SRGBColorSpace;

    // Day-side material: Phong gives us free directional-light shading, normal mapping, and ocean specular.
    const earthGeom = new THREE.SphereGeometry(1, 128, 64);
    const earthMat  = new THREE.MeshPhongMaterial({
      map: day,
      normalMap: normal,
      normalScale: new THREE.Vector2(0.85, 0.85),
      specularMap: specular,
      specular: new THREE.Color(0x335577),
      shininess: 18,
    });
    this.earth = new THREE.Mesh(earthGeom, earthMat);

    // Night-side overlay: a second sphere rendered additively, masked to the dark hemisphere.
    // Custom shader uses world-space normal vs. sun direction (passed as uniform from JS).
    this.sunDirUniform = { value: new THREE.Vector3(1, 0, 0) };
    const nightMat = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: night },
        uSunDirection: this.sunDirUniform,
        uIntensity: { value: 1.6 },
      },
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
}
