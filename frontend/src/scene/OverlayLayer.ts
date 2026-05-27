import * as THREE from "three";
import type { ScalarGrid } from "../data/DataSource";
import { scalarGridToByteTexture } from "../data/scalarToTexture";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Translucent shell that renders a single GFS scalar field (MSLP, temperature, RH, TPW, etc.)
 * as a colour-mapped overlay on the globe surface. Sits at r=1.006 — outside the cloud shell
 * (1.003) so it doesn't fight the day texture for visual prominence, but inside the aurora.
 *
 * The shader samples a single-channel float texture and maps the value through one of several
 * built-in colour palettes (selected via `uPalette`). Different overlays choose different
 * palettes and value ranges; the layer itself is variable-agnostic.
 *
 * Rotates with Earth like the cloud layer (geographic frame).
 */

/** Built-in palette IDs, must match the shader's switch. */
export type OverlayPalette = "temperature" | "humidity" | "pressure" | "water" | "cloud";

const PALETTE_INDEX: Record<OverlayPalette, number> = {
  temperature: 0,
  humidity:    1,
  pressure:    2,
  water:       3,
  cloud:       4,
};

export class OverlayLayer {
  readonly mesh: THREE.Group;
  private readonly sphere: THREE.Mesh;
  private readonly material: THREE.ShaderMaterial;
  private currentTexture: THREE.DataTexture | null = null;

  constructor(radius: number = 1.006) {
    const geometry = new THREE.SphereGeometry(radius, 96, 48);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        // Byte texture, pre-normalised to [0, 1] at upload time by
        // scalarGridToByteTexture. Earlier versions used a half-float texture
        // with shader-side vmin/vmax normalisation, but half-float overflows
        // at ±65504 — MSLP values (~101 325 Pa at sea level) overflowed to
        // Infinity and rendered as a single uniform red colour. Byte
        // textures linear-filter everywhere with no extension shenanigans.
        uMap:      { value: null as THREE.Texture | null },
        uHasData:  { value: 0.0 },     // 0 = nothing rendered (no texture loaded yet)
        uPalette:  { value: 0 },       // index into the shader's palette switch
        uOpacity:  { value: 0.65 },
      },
      vertexShader: /* glsl */`
        varying vec3 vLocalNormal;
        void main() {
          // Local-frame surface normal — for a unit sphere centred at origin, this equals
          // the normalised vertex position. We compute the UV per-fragment from this in the
          // fragment shader rather than interpolating a vUv, because the prime-meridian
          // wrap-around (texture u=0 meets u=1 here) creates a discontinuity that the
          // rasterizer's linear vUv interpolation can't bridge — fragments straddling the
          // seam would sample the wrong half of the texture. The normal is continuous, so
          // computing UV from it per-pixel avoids the seam entirely.
          vLocalNormal = normalize(normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uMap;
        uniform float uHasData;
        uniform int   uPalette;
        uniform float uOpacity;
        varying vec3 vLocalNormal;
        const float PI = 3.14159265359;

        // Five-stop colour palettes. Each row maps a normalised value t ∈ [0,1] to RGB.
        // Sample with linear interpolation between adjacent stops.
        vec3 sample5(vec3 c0, vec3 c1, vec3 c2, vec3 c3, vec3 c4, float t) {
          t = clamp(t, 0.0, 1.0);
          float seg = t * 4.0;
          int   i   = int(floor(seg));
          float f   = fract(seg);
          if (i == 0) return mix(c0, c1, f);
          if (i == 1) return mix(c1, c2, f);
          if (i == 2) return mix(c2, c3, f);
          return mix(c3, c4, f);
        }

        // Palette 0 — temperature: deep blue (cold) → cyan → green → yellow → red (hot)
        vec3 paletteTemp(float t) {
          return sample5(
            vec3(0.10, 0.10, 0.55),
            vec3(0.10, 0.65, 0.95),
            vec3(0.45, 0.85, 0.40),
            vec3(0.95, 0.85, 0.20),
            vec3(0.85, 0.15, 0.15),
            t
          );
        }
        // Palette 1 — humidity / aridity: tan (dry) → green → blue (wet)
        vec3 paletteHumidity(float t) {
          return sample5(
            vec3(0.70, 0.55, 0.30),
            vec3(0.80, 0.75, 0.45),
            vec3(0.55, 0.75, 0.40),
            vec3(0.30, 0.60, 0.75),
            vec3(0.15, 0.30, 0.65),
            t
          );
        }
        // Palette 2 — pressure: violet (low) → blue → cyan → yellow → red (high)
        vec3 palettePressure(float t) {
          return sample5(
            vec3(0.45, 0.25, 0.65),
            vec3(0.30, 0.55, 0.85),
            vec3(0.55, 0.85, 0.55),
            vec3(0.95, 0.85, 0.35),
            vec3(0.85, 0.30, 0.20),
            t
          );
        }
        // Palette 3 — water vapour: pale (dry) → mid-blue → deep blue (wet)
        vec3 paletteWater(float t) {
          return sample5(
            vec3(0.85, 0.85, 0.80),
            vec3(0.65, 0.80, 0.85),
            vec3(0.30, 0.65, 0.85),
            vec3(0.20, 0.40, 0.85),
            vec3(0.10, 0.20, 0.60),
            t
          );
        }
        // Palette 4 — cloud water: greys with a hint of blue at the high end
        vec3 paletteCloud(float t) {
          return sample5(
            vec3(0.20, 0.20, 0.22),
            vec3(0.45, 0.45, 0.50),
            vec3(0.70, 0.72, 0.78),
            vec3(0.88, 0.92, 0.98),
            vec3(0.65, 0.85, 1.00),
            t
          );
        }

        void main() {
          if (uHasData < 0.5) discard;
          // Per-fragment UV from the local-frame surface normal. Convention:
          //   x = cos(lat)·cos(lon),  y = sin(lat),  z = -cos(lat)·sin(lon)
          //   so lat = asin(y),  lon = atan2(-z, x)  (range -π..+π).
          // GFS grid: first column at lon=0, first row at lat=+90. So:
          //   u = (lon mod 2π) / 2π
          //   v = (π/2 − lat) / π   (v=0 north pole, v=1 south pole)
          float lat = asin(clamp(vLocalNormal.y, -1.0, 1.0));
          float lon = atan(-vLocalNormal.z, vLocalNormal.x);
          float u = (lon < 0.0 ? lon + 2.0 * PI : lon) / (2.0 * PI);
          float vv = (0.5 * PI - lat) / PI;
          // Byte texture is pre-normalised to [0, 1] — read .r directly as the
          // colour-ramp parameter, no shader-side vmin/vmax math.
          float t = texture2D(uMap, vec2(u, vv)).r;
          vec3 col;
          if      (uPalette == 0) col = paletteTemp(t);
          else if (uPalette == 1) col = paletteHumidity(t);
          else if (uPalette == 2) col = palettePressure(t);
          else if (uPalette == 3) col = paletteWater(t);
          else                    col = paletteCloud(t);

          gl_FragColor = vec4(col, uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    this.sphere = new THREE.Mesh(geometry, this.material);
    // Overlay draws *under* clouds — see CloudLayer for the full renderOrder budget.
    // QA feedback (2026-05-14): "Feel like GFS should be layer 1 — underneath clouds etc."
    // Clouds are physically real (you see them through the cloud's translucency); overlay
    // is a data colour-map, more useful in clear areas. Drawing it first means clouds
    // composite naturally on top.
    this.sphere.renderOrder = 1;

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.sphere);
    // Hidden until setData() is called and the layer is toggled on.
    this.mesh.visible = false;
  }

  /**
   * Replace the overlay data. Disposes the previous texture to avoid leaks. `vmin`/`vmax`
   * define the colour-mapped value range in the same units as the underlying GFS field
   * (e.g. K for temperature, Pa for pressure, % for RH, mm for TPW); they're baked into
   * the byte texture at upload time so the shader can read directly as a normalised
   * [0, 1] colour-ramp parameter.
   */
  setData(grid: ScalarGrid, vmin: number, vmax: number, palette: OverlayPalette) {
    const tex = scalarGridToByteTexture(grid, vmin, vmax);
    const prev = this.material.uniforms.uMap.value as THREE.Texture | null;
    if (prev) prev.dispose();
    this.material.uniforms.uMap.value     = tex;
    this.material.uniforms.uHasData.value = 1.0;
    this.material.uniforms.uPalette.value = PALETTE_INDEX[palette];
    this.currentTexture = tex;
  }

  setRotationY(angle: number) {
    this.sphere.rotation.y = angle;
  }

  setOpacity(o: number) {
    this.material.uniforms.uOpacity.value = o;
  }

  hasData(): boolean {
    return this.currentTexture !== null;
  }
}
