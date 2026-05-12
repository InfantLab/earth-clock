import * as THREE from "three";
import type { ScalarGrid } from "../data/DataSource";
import { scalarGridToTexture } from "../data/scalarToTexture";

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
        uMap:      { value: null as THREE.Texture | null },
        uHasData:  { value: 0.0 },     // 0 = nothing rendered (no texture loaded yet)
        uVmin:     { value: 0.0 },
        uVmax:     { value: 1.0 },
        uPalette:  { value: 0 },       // index into the shader's palette switch
        uOpacity:  { value: 0.65 },
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
          // Three.js SphereGeometry maps the equirectangular UV directly; the GFS grid uses
          // the same convention (u=0 at lon=-180 to u=1 at lon=+180, v=0 at +90 to v=1 at -90).
          // GFS data files actually start at lon=0 / lat=+90 — so we shift u by 0.5 to align.
          vUv = vec2(fract(uv.x + 0.5), uv.y);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D uMap;
        uniform float uHasData;
        uniform float uVmin;
        uniform float uVmax;
        uniform int   uPalette;
        uniform float uOpacity;
        varying vec2 vUv;

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
          float v = texture2D(uMap, vUv).r;
          float t = (v - uVmin) / max(uVmax - uVmin, 1e-6);
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

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.sphere);
    // Hidden until setData() is called and the layer is toggled on.
    this.mesh.visible = false;
  }

  /**
   * Replace the overlay data. Disposes the previous texture to avoid leaks. `vmin`/`vmax`
   * define the colour-mapped value range in the same units as the underlying GFS field
   * (e.g. K for temperature, Pa for pressure, % for RH, mm for TPW).
   */
  setData(grid: ScalarGrid, vmin: number, vmax: number, palette: OverlayPalette) {
    const tex = scalarGridToTexture(grid);
    const prev = this.material.uniforms.uMap.value as THREE.Texture | null;
    if (prev) prev.dispose();
    this.material.uniforms.uMap.value     = tex;
    this.material.uniforms.uHasData.value = 1.0;
    this.material.uniforms.uVmin.value    = vmin;
    this.material.uniforms.uVmax.value    = vmax;
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
