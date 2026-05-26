import * as THREE from "three";

/**
 * Equirectangular flat-map mode. Renders the Earth as a 2:1 plane (lon = -180..+180,
 * lat = -90..+90), with the same day texture, night-lights overlay, and cloud composite
 * the 3D globe uses. The day/night gradient is computed per-pixel from a sub-solar
 * direction uniform (geographic frame — no axial tilt or daily spin needed because the
 * flat map IS the geographic frame).
 *
 * Owns its own scene + orthographic camera so it can be rendered independently — main.ts
 * picks between the 3D scene and this scene each frame based on the menu's "Map" toggle.
 *
 * Layers wired in v1: day surface, night lights, clouds, day/night terminator.
 * Layers TODO for flat-map v2: aurora points, fires, hurricanes, wind particles, coastlines.
 */
export class FlatMap {
  readonly scene: THREE.Scene;
  readonly camera: THREE.OrthographicCamera;
  private readonly mesh: THREE.Mesh;
  private readonly material: THREE.ShaderMaterial;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000005);

    // Ortho camera — frustum bounds adjusted by resize() so the 2:1 plane fits the viewport.
    this.camera = new THREE.OrthographicCamera(-1, 1, 0.5, -0.5, 0, 10);
    this.camera.position.set(0, 0, 1);
    this.camera.lookAt(0, 0, 0);

    const loader = new THREE.TextureLoader();
    const day   = loader.load("textures/earth_daymap_2k.jpg");
    const night = loader.load("textures/earth_nightmap_2k.jpg");
    day.colorSpace   = THREE.SRGBColorSpace;
    night.colorSpace = THREE.SRGBColorSpace;

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uDay:            { value: day },
        uNight:          { value: night },
        uClouds:         { value: null as THREE.Texture | null },
        uHasClouds:      { value: 0.0 },
        // Geographic-frame sub-solar direction. Set from main.ts via setSubSolar(lat, lon).
        // Initial value is arbitrary; the first updateAstro() call replaces it.
        uGeoSunDir:      { value: new THREE.Vector3(1, 0, 0) },
        uShowClouds:     { value: 1.0 },
        uShowNightLights:{ value: 1.0 },
        uShowTerminator: { value: 1.0 },
        uCloudThreshold: { value: 0.50 },
        uCloudSoftness:  { value: 0.30 },
        uCloudOpacity:   { value: 0.85 },
        uCloudNightFloor:{ value: 0.25 },
        uTwilightWidth:  { value: 0.10 },
        uNightDimFloor:  { value: 0.18 },
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uDay;
        uniform sampler2D uNight;
        uniform sampler2D uClouds;
        uniform float     uHasClouds;
        uniform vec3      uGeoSunDir;
        uniform float     uShowClouds;
        uniform float     uShowNightLights;
        uniform float     uShowTerminator;
        uniform float     uCloudThreshold;
        uniform float     uCloudSoftness;
        uniform float     uCloudOpacity;
        uniform float     uCloudNightFloor;
        uniform float     uTwilightWidth;
        uniform float     uNightDimFloor;
        varying vec2 vUv;

        const float PI = 3.14159265359;

        void main() {
          // Pixel → (lon, lat). Plane v=0 is south, v=1 is north (matches texture orientation).
          float lon = (vUv.x - 0.5) * 2.0 * PI;   // -π..+π
          float lat = (vUv.y - 0.5) * PI;         // -π/2..+π/2
          float cosLat = cos(lat);

          // Geographic surface normal at this pixel — same convention as the 3D sphere.
          vec3 surfNorm = vec3(
             cosLat * cos(lon),
             sin(lat),
            -cosLat * sin(lon)
          );

          float ndotl = dot(surfNorm, normalize(uGeoSunDir));
          float dayFactor = smoothstep(-uTwilightWidth, uTwilightWidth, ndotl);

          // Day surface, dimmed on the night side (never to black — keeps the geography legible)
          vec3 day = texture2D(uDay, vUv).rgb;
          vec3 col;
          if (uShowTerminator > 0.5) {
            float bright = mix(uNightDimFloor, 1.0, dayFactor);
            col = day * bright;
            // Night lights bloom in over the dark side
            if (uShowNightLights > 0.5) {
              vec3 night = texture2D(uNight, vUv).rgb;
              col += night * (1.0 - dayFactor) * 1.6;
            }
          } else {
            col = day;
          }

          // Clouds — always visible (never erased on night side), dim toward floor at night.
          if (uShowClouds > 0.5 && uHasClouds > 0.5) {
            vec4 c = texture2D(uClouds, vUv);
            float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
            float cloudAlpha = smoothstep(uCloudThreshold, uCloudThreshold + uCloudSoftness, luma);
            float cloudBright = mix(1.0, mix(uCloudNightFloor, 1.0, dayFactor), uShowTerminator);
            vec3 cloudCol = mix(c.rgb, vec3(1.0), 0.4) * cloudBright;
            col = mix(col, cloudCol, cloudAlpha * uCloudOpacity);
          }

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    const geom = new THREE.PlaneGeometry(2, 1);
    this.mesh = new THREE.Mesh(geom, this.material);
    this.scene.add(this.mesh);
  }

  /** Adjust ortho frustum so the 2:1 map fits the viewport (letterbox or pillarbox). */
  resize(viewportWidth: number, viewportHeight: number) {
    const aspect = viewportWidth / viewportHeight;
    if (aspect > 2.0) {
      // Wider than 2:1 — fit height, pillarbox
      this.camera.top = 0.5;
      this.camera.bottom = -0.5;
      this.camera.left  = -0.5 * aspect;
      this.camera.right =  0.5 * aspect;
    } else {
      // Narrower than 2:1 — fit width, letterbox
      this.camera.left  = -1;
      this.camera.right =  1;
      this.camera.top    =  1.0 / aspect;
      this.camera.bottom = -1.0 / aspect;
    }
    this.camera.updateProjectionMatrix();
  }

  /**
   * Update the geographic-frame sub-solar direction. lat/lon in **degrees**.
   * Used by the shader's per-pixel day/night calculation — no axial-tilt or daily-rotation
   * uniforms needed because the flat map is rendered directly in the geographic frame.
   */
  setSubSolar(latDeg: number, lonDeg: number) {
    const lat = latDeg * Math.PI / 180;
    const lon = lonDeg * Math.PI / 180;
    const cosLat = Math.cos(lat);
    this.material.uniforms.uGeoSunDir.value.set(
       cosLat * Math.cos(lon),
       Math.sin(lat),
      -cosLat * Math.sin(lon),
    );
  }

  /** Swap in a new equirectangular cloud texture (same one the 3D CloudLayer uses). */
  setCloudTexture(tex: THREE.Texture | null) {
    this.material.uniforms.uClouds.value = tex;
    this.material.uniforms.uHasClouds.value = tex ? 1.0 : 0.0;
  }

  setTerminatorEnabled(b: boolean) {
    this.material.uniforms.uShowTerminator.value = b ? 1.0 : 0.0;
  }
  setNightLightsVisible(b: boolean) {
    this.material.uniforms.uShowNightLights.value = b ? 1.0 : 0.0;
  }
  setCloudsVisible(b: boolean) {
    this.material.uniforms.uShowClouds.value = b ? 1.0 : 0.0;
  }
}
