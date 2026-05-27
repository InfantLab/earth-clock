/**
 * The five colour-stop tuples used by both the overlay fragment shader and the
 * on-screen ScaleKeyPanel. Kept in one place so the SVG legend can't drift out
 * of sync with what the shader actually paints — if you tune one, tune the
 * other.
 *
 * Mirrors the constants hand-typed in
 * [frontend/src/scene/OverlayLayer.ts](../scene/OverlayLayer.ts) fragment shader.
 */
import type { OverlayPalette } from "../scene/OverlayLayer";

/** Five-stop palette — same shape as the shader's `sample5`. Values are
 *  `#rrggbb` for direct use in SVG `stop-color`. */
export interface PaletteStops {
  /** 0.0, 0.25, 0.5, 0.75, 1.0 — five evenly-spaced stops along the ramp. */
  stops: readonly [string, string, string, string, string];
}

export const PALETTE_STOPS: Record<OverlayPalette, PaletteStops> = {
  // Deep blue (cold) → cyan → green → yellow → red (hot)
  temperature: { stops: ["#1a1a8c", "#1aa6f2", "#73d966", "#f2d933", "#d92626"] },
  // Tan (dry) → green → blue (wet)
  humidity:    { stops: ["#b38c4d", "#ccbf73", "#8cbf66", "#4d99bf", "#264da6"] },
  // Violet (low) → blue → cyan → yellow → red (high)
  pressure:    { stops: ["#7340a6", "#4d8cd9", "#8cd98c", "#f2d959", "#d94d33"] },
  // Pale (dry) → mid-blue → deep blue (wet)
  water:       { stops: ["#d9d9cc", "#a6ccd9", "#4da6d9", "#3366d9", "#1a3399"] },
  // Greys → blue (cloud water)
  cloud:       { stops: ["#333338", "#737380", "#b3b8c7", "#e0ebfa", "#a6d9ff"] },
};
