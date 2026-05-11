import * as THREE from "three";
import { GPUComputationRenderer, type Variable } from "three/examples/jsm/misc/GPUComputationRenderer.js";

// Earth's axial tilt. Must match Globe.ts so particles share the same frame.
const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * GPU wind particles (step (a) of the wind-particles plan).
 *
 * Algorithm (Agafonkin / Mapbox webgl-wind, adapted for a 3D sphere):
 *   - Particle state lives in a square RGBA-float texture: R=lon (-180..180), G=lat (-90..90), B=lifetime.
 *   - Each frame a fragment-shader pass samples wind (u, v) from a separate wind texture at the particle's
 *     (lon, lat), advances position with cos(lat) compensation so wind speed near the poles doesn't
 *     produce huge longitude jumps, wraps longitude, and randomly respawns a small fraction.
 *   - The render path is a plain THREE.Points; the vertex shader reads its position from the compute
 *     texture using a per-vertex lookup-UV attribute, then projects (lon, lat) onto the unit sphere.
 *
 * Step (a) uses a uniform east-wind mock so we can visually verify the sphere math before wiring real data.
 */
export class Particles {
  readonly mesh: THREE.Group;
  private readonly points: THREE.Points;
  private readonly gpu: GPUComputationRenderer;
  private readonly positionVar: Variable;
  private readonly renderMaterial: THREE.ShaderMaterial;

  constructor(renderer: THREE.WebGLRenderer, particleCount = 65536) {
    const textureSize = Math.ceil(Math.sqrt(particleCount));
    const count = textureSize * textureSize;

    this.gpu = new GPUComputationRenderer(textureSize, textureSize, renderer);

    // Initial state: random lon/lat, random lifetime offset so respawn waves are spread out.
    const initialTexture = this.gpu.createTexture();
    const data = initialTexture.image.data as unknown as Float32Array;
    for (let i = 0; i < count; i++) {
      data[i * 4]     = (Math.random() - 0.5) * 360;   // lon
      data[i * 4 + 1] = (Math.random() - 0.5) * 160;   // lat (avoid poles)
      data[i * 4 + 2] = Math.random();                  // lifetime [0, 1]
      data[i * 4 + 3] = 1.0;
    }

    const computeShader = /* glsl */`
      uniform sampler2D uWindTexture; // R = u m/s east, G = v m/s north; stored as raw signed floats
      uniform float uDt;
      uniform float uSpeed;     // visual-speed multiplier (deg per (m/s * sec))
      uniform float uTime;
      uniform float uRespawnRate;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 state = texture2D(texturePosition, uv);
        float lon = state.x;
        float lat = state.y;
        float life = state.z;

        // Sample wind. Wind texture is laid out with lon 0..360 across x (origin at left),
        // lat +90..-90 down y (north on top). Particle lon ∈ [-180, 180].
        float lonNorm = mod(lon + 360.0, 360.0);
        vec2 windUv = vec2(lonNorm / 360.0, (90.0 - lat) / 180.0);
        vec4 windSample = texture2D(uWindTexture, windUv);
        float u = windSample.r;  // m/s east
        float v = windSample.g;  // m/s north

        // Advect. cos(lat) compensation keeps wind speed isotropic in m/s.
        float latRad = radians(lat);
        float cosLat = max(cos(latRad), 0.01);
        lon += u * uDt * uSpeed / cosLat;
        lat += v * uDt * uSpeed;

        // Wrap longitude, clamp latitude
        lon = mod(lon + 180.0, 360.0) - 180.0;
        lat = clamp(lat, -89.5, 89.5);

        // Age and respawn: lifetime grows by uRespawnRate * dt, respawn when it crosses 1.0.
        // The +hash term staggers respawns so they don't all fire together.
        life += uDt * uRespawnRate;
        float respawnRoll = hash(uv * (uTime + 1.0));
        if (life >= 1.0 || respawnRoll < uDt * uRespawnRate * 0.5) {
          lon = (hash(uv + vec2(uTime, 0.0)) - 0.5) * 360.0;
          lat = (hash(uv + vec2(0.0, uTime)) - 0.5) * 160.0;
          life = 0.0;
        }

        gl_FragColor = vec4(lon, lat, life, 1.0);
      }
    `;

    this.positionVar = this.gpu.addVariable("texturePosition", computeShader, initialTexture);
    this.gpu.setVariableDependencies(this.positionVar, [this.positionVar]);

    // Compute-texture wrap mode: we mod() longitude in the shader, so clamp is fine.
    this.positionVar.wrapS = THREE.ClampToEdgeWrapping;
    this.positionVar.wrapT = THREE.ClampToEdgeWrapping;
    this.positionVar.minFilter = THREE.NearestFilter;
    this.positionVar.magFilter = THREE.NearestFilter;

    const uniforms = this.positionVar.material.uniforms;
    uniforms.uWindTexture = { value: this.createMockWindTexture() };
    uniforms.uDt = { value: 1 / 60 };
    // 1 m/s wind → 0.12°/s drift. Slow enough to feel weather-like with real wind data
    // (jet stream particles still move briskly), fast enough that trails accumulate.
    uniforms.uSpeed = { value: 0.12 };
    uniforms.uTime = { value: 0 };
    uniforms.uRespawnRate = { value: 0.1 }; // ~10s mean lifetime

    const err = this.gpu.init();
    if (err) console.error("[Particles] GPUComputationRenderer init error:", err);

    // ---- Render mesh: a Points cloud, each vertex carries a lookup UV into the compute texture ----
    const positions = new Float32Array(count * 3); // overwritten in vertex shader; required by Three.js
    const lookupUVs = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      const px = i % textureSize;
      const py = Math.floor(i / textureSize);
      lookupUVs[i * 2]     = (px + 0.5) / textureSize;
      lookupUVs[i * 2 + 1] = (py + 0.5) / textureSize;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("lookupUV", new THREE.BufferAttribute(lookupUVs, 2));

    this.renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexturePosition: { value: null },
        uPointSize: { value: 1.5 },
        uAlpha: { value: 0.25 }, // per-particle alpha; additive accumulation in Trails turns this into trail brightness
      },
      vertexShader: /* glsl */`
        uniform sampler2D uTexturePosition;
        uniform float uPointSize;
        attribute vec2 lookupUV;
        varying float vLife;
        varying float vLimbFade;
        void main() {
          vec4 state = texture2D(uTexturePosition, lookupUV);
          float lon = radians(state.x);
          float lat = radians(state.y);
          vLife = state.z;
          float r = 1.005; // hover just above Earth's surface
          // Match Three.js SphereGeometry's equirectangular UVs: lon=0 lies on -Z, lon=+90E on +X
          float x =  r * cos(lat) * sin(lon);
          float y =  r * sin(lat);
          float z = -r * cos(lat) * cos(lon);

          // Hemisphere test using surface normal vs view direction.
          vec3 worldPos = (modelMatrix * vec4(x, y, z, 1.0)).xyz;
          vec3 worldNormal = normalize(worldPos);
          vec3 toCam = normalize(cameraPosition - worldPos);
          float facing = dot(worldNormal, toCam);
          if (facing < 0.0) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // off-screen
            return;
          }
          // Fade out near the limb so particles don't pile into a bright ring where their
          // screen-space velocity collapses (foreshortening at tangent).
          vLimbFade = smoothstep(0.0, 0.15, facing);

          vec4 mvPosition = modelViewMatrix * vec4(x, y, z, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = uPointSize;
        }
      `,
      fragmentShader: /* glsl */`
        uniform float uAlpha;
        varying float vLife;
        varying float vLimbFade;
        void main() {
          float lifeFade = smoothstep(0.0, 0.1, vLife) * (1.0 - smoothstep(0.85, 1.0, vLife));
          gl_FragColor = vec4(1.0, 1.0, 1.0, uAlpha * lifeFade * vLimbFade);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(geometry, this.renderMaterial);

    // Apply Earth's axial tilt at the group; the inner Points mesh gets the daily spin.
    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.points);
  }

  /** Mock fallback used until real GFS data loads. Uniform 10 m/s east everywhere. */
  private createMockWindTexture(): THREE.DataTexture {
    const size = 4;
    const data = new Float32Array(size * size * 4);
    for (let i = 0; i < size * size; i++) {
      data[i * 4]     = 10; // u: 10 m/s east
      data[i * 4 + 1] = 0;  // v: 0
      data[i * 4 + 2] = 0;
      data[i * 4 + 3] = 1;
    }
    const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.FloatType);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    return tex;
  }

  /** Swap in real wind data. Texture must be raw signed (R=u m/s east, G=v m/s north). */
  setWindTexture(tex: THREE.DataTexture) {
    const prev = this.positionVar.material.uniforms.uWindTexture.value as THREE.Texture | null;
    if (prev) prev.dispose();
    this.positionVar.material.uniforms.uWindTexture.value = tex;
  }

  /** Match Earth's daily spin so particles stay anchored in the ground-fixed frame. */
  setRotationY(angle: number) {
    this.points.rotation.y = angle;
  }

  /** Live tunables — change these from the JS console to play with feel without a rebuild. */
  setSpeed(degPerMSperSec: number) {
    this.positionVar.material.uniforms.uSpeed.value = degPerMSperSec;
  }
  setPointSize(px: number) {
    this.renderMaterial.uniforms.uPointSize.value = px;
  }
  setAlpha(a: number) {
    this.renderMaterial.uniforms.uAlpha.value = a;
  }

  /** Run one advection step. Call after astro update, before rendering. */
  update(dtSeconds: number, timeSeconds: number) {
    const u = this.positionVar.material.uniforms;
    u.uDt.value = Math.min(dtSeconds, 1 / 30); // cap dt so a tab-switch doesn't fling everything
    u.uTime.value = timeSeconds;
    this.gpu.compute();
    this.renderMaterial.uniforms.uTexturePosition.value =
      this.gpu.getCurrentRenderTarget(this.positionVar).texture;
  }

  dispose() {
    this.gpu.dispose();
    this.renderMaterial.dispose();
    (this.points.geometry as THREE.BufferGeometry).dispose();
  }
}
