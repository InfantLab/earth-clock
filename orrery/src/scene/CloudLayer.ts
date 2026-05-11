import * as THREE from "three";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Live cloud layer — a translucent sphere just above the Earth's surface, textured with a
 * recent global true-color satellite mosaic (NASA GIBS VIIRS NOAA-20). A fragment shader
 * extracts clouds from the imagery via luminance threshold (clouds are the brightest pixels
 * in true-color RGB) and masks them on the night side using the sun-direction uniform.
 *
 * The cloud sphere shares Earth's axial tilt and daily spin so it stays anchored geographically.
 * Eventually we'll switch to a real cloud-mask product or stitched 10-min geostationary feed;
 * the luminance-threshold trick is the "walk" before that "run".
 */
export class CloudLayer {
  readonly mesh: THREE.Group;
  private readonly cloudSphere: THREE.Mesh;
  private readonly material: THREE.ShaderMaterial;
  private readonly sunDirUniform: { value: THREE.Vector3 };

  constructor(radius: number = 1.003) {
    const geometry = new THREE.SphereGeometry(radius, 128, 64);

    this.sunDirUniform = { value: new THREE.Vector3(1, 0, 0) };

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uMap:         { value: null },
        uSunDirection:{ value: this.sunDirUniform.value },
        uThreshold:   { value: 0.50 },   // luminance below this → fully transparent
        uSoftness:    { value: 0.30 },   // smoothstep width (threshold..threshold+softness)
        uOpacity:     { value: 0.85 },
        uNightFade:   { value: 0.10 },   // smoothstep range around the terminator
        uNightFloor:  { value: 0.25 },   // night-side cloud brightness floor (clouds stay visible after dark)
        uTerminator:  { value: 1.0 },    // 1 = day/night gradient on clouds; 0 = uniformly bright
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        varying vec3 vWorldNormal;
        void main() {
          vUv = uv;
          // The cloud sphere is unit-radius centred at origin, so mat3(modelMatrix) (a pure rotation
          // after axial tilt + daily spin) gives the world-space surface normal directly.
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uMap;
        uniform vec3 uSunDirection;
        uniform float uThreshold;
        uniform float uSoftness;
        uniform float uOpacity;
        uniform float uNightFade;
        uniform float uNightFloor;
        uniform float uTerminator;
        varying vec2 vUv;
        varying vec3 vWorldNormal;
        void main() {
          vec4 c = texture2D(uMap, vUv);
          // BT.709 luminance — clouds are bright across all channels in true-color, while
          // ocean is dark blue, land is darker greens/browns. Luma cleanly separates them.
          float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
          float cloudAlpha = smoothstep(uThreshold, uThreshold + uSoftness, luma);

          // Day → night brightness gradient. Clouds are physically there 24h, so they never
          // vanish — just dim toward a floor on the dark side. Alpha is untouched, so night
          // clouds correctly occlude city lights below them. When Terminator is off (uniform
          // globe lighting), clouds match by rendering uniformly bright.
          float ndotl = dot(vWorldNormal, normalize(uSunDirection));
          float dayFactor = smoothstep(-uNightFade, uNightFade, ndotl);
          float brightness = mix(1.0, mix(uNightFloor, 1.0, dayFactor), uTerminator);

          // Keep color near-white rather than passing the raw tile RGB to avoid subtle
          // green/brown tinting from land features that survive the luma threshold.
          vec3 col = mix(c.rgb, vec3(1.0), 0.4) * brightness;
          gl_FragColor = vec4(col, cloudAlpha * uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    this.cloudSphere = new THREE.Mesh(geometry, this.material);

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.cloudSphere);
  }

  /** Swap in a new equirectangular cloud-imagery texture (e.g. from `fetchGibsTexture`). */
  setTexture(tex: THREE.Texture) {
    const prev = this.material.uniforms.uMap.value as THREE.Texture | null;
    if (prev) prev.dispose();
    this.material.uniforms.uMap.value = tex;
  }

  /** Sun direction in world space — drives the day/night terminator mask. */
  setSunDirection(dir: THREE.Vector3) {
    this.sunDirUniform.value.copy(dir);
  }

  /** Earth's daily spin angle — keeps clouds geographically anchored. */
  setRotationY(angle: number) {
    this.cloudSphere.rotation.y = angle;
  }

  /**
   * When the global Terminator toggle is on, clouds dim across the day→night gradient
   * but never vanish (floor controlled by `uNightFloor`). When off, the globe is uniformly
   * lit and clouds match by rendering uniformly bright everywhere.
   */
  setTerminatorEnabled(enabled: boolean) {
    this.material.uniforms.uTerminator.value = enabled ? 1.0 : 0.0;
  }

  setThreshold(t: number)  { this.material.uniforms.uThreshold.value = t; }
  setSoftness(s: number)   { this.material.uniforms.uSoftness.value = s; }
  setOpacity(o: number)    { this.material.uniforms.uOpacity.value = o; }
  setNightFloor(f: number) { this.material.uniforms.uNightFloor.value = f; }
}
