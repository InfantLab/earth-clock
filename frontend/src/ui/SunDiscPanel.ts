/**
 * Small inset panel showing what the sun looks like from the user's pinned
 * location *at this moment*. Two overlapping discs in SVG: the sun (gold) and
 * the moon (dark silver), positioned at their correct apparent offset in the
 * observer's local sky. Eclipse magnitude (linear, fraction of sun's diameter
 * obscured) below.
 *
 * Visible when **all four** conditions hold:
 *   - The Eclipse layer is active (Astro row → Eclipse).
 *   - A location is pinned (Location row → click globe or "use my location").
 *   - The sun is above the observer's horizon at the simulated moment.
 *   - The moon and sun are within ~5° of each other on the sky (i.e. inside
 *     or close to an eclipse window). Outside that, the inset is dormant —
 *     showing the moon 90° from the sun would just be a black dot far from
 *     the sun's disc and convey nothing.
 *
 * Implementation: pure SVG; the moon `<circle>` is repositioned each frame
 * via `setAttribute`. Cheap (one DOM mutation per RAF), no Three.js
 * involvement. The whole panel listens to its own `setVisible` toggle from
 * main.ts.
 */
import type { ObserverView } from "../astro/observerView";

/** Pixel radius of the sun disc in the SVG. Everything else scales off this. */
const SUN_PX = 56;
/** Scale: degrees per pixel. SUN_PX should be roughly the sun's apparent
 *  radius (0.2666°) on screen, so 1° ≈ SUN_PX / 0.2666 ≈ 210 px. */
const PX_PER_DEG = SUN_PX / 0.2666;
/** Show the inset when the moon is within this many degrees of the sun on the
 *  sky. About 10× the sun's diameter — wide enough to catch the moon entering
 *  the frame before contact, narrow enough that the inset is dormant outside
 *  any meaningful eclipse window. */
const SHOW_WHEN_SEPARATION_LESS_THAN_DEG = 5;

export class SunDiscPanel {
  private readonly root: HTMLElement;
  private readonly moonCircle: SVGCircleElement;
  private readonly magnitudeEl: HTMLElement;
  private readonly statusEl: HTMLElement;
  private readonly placeEl: HTMLElement;
  private lastMagnitudeStr = "";
  private lastStatusStr = "";
  private lastMoonR = -1;
  private lastMoonX = NaN;
  private lastMoonY = NaN;

  constructor(parent: HTMLElement) {
    injectStyles();

    this.root = document.createElement("div");
    this.root.id = "orrery-sundisc";
    this.root.classList.add("hidden");
    // Layout: place name (small, top), SVG disc, magnitude readout (bottom).
    // SVG viewBox is centred at origin so the sun lives at (0, 0) by default
    // and moon offsets are simple positive/negative coordinates.
    const half = SUN_PX * 1.8;  // give the moon room to wander outside the sun's disc
    this.root.innerHTML = `
      <div class="orrery-sundisc-title">
        <span class="orrery-sundisc-label">sky from</span>
        <span class="orrery-sundisc-place" id="orrery-sundisc-place">—</span>
      </div>
      <svg id="orrery-sundisc-svg" viewBox="${-half} ${-half} ${2 * half} ${2 * half}" width="${2 * half}" height="${2 * half}">
        <defs>
          <radialGradient id="orrery-sundisc-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stop-color="#fff4c2"/>
            <stop offset="70%" stop-color="#ffcc44"/>
            <stop offset="100%" stop-color="#cc8800"/>
          </radialGradient>
        </defs>
        <circle id="orrery-sundisc-sun"
                cx="0" cy="0" r="${SUN_PX}"
                fill="url(#orrery-sundisc-grad)"/>
        <circle id="orrery-sundisc-moon"
                cx="0" cy="0" r="0"
                fill="#0a0e16" stroke="#1a1f2a" stroke-width="0.5"/>
      </svg>
      <div class="orrery-sundisc-readout">
        <span class="orrery-sundisc-magnitude" id="orrery-sundisc-mag">—</span>
        <span class="orrery-sundisc-status" id="orrery-sundisc-status">—</span>
      </div>
    `;
    parent.appendChild(this.root);

    this.moonCircle = this.root.querySelector("#orrery-sundisc-moon") as unknown as SVGCircleElement;
    this.magnitudeEl = this.root.querySelector("#orrery-sundisc-mag") as HTMLElement;
    this.statusEl    = this.root.querySelector("#orrery-sundisc-status") as HTMLElement;
    this.placeEl     = this.root.querySelector("#orrery-sundisc-place") as HTMLElement;
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
  }

  /** Update the place-name label (called when the location pin's reverse-
   *  geocode resolves). Pass null to display coords-only or fall back to "—". */
  setPlaceName(name: string | null) {
    this.placeEl.textContent = name ?? "—";
  }

  /**
   * Update the inset from an ObserverView. Returns true if the inset is
   * meaningful to show (sun above horizon AND moon close enough to be in
   * frame); caller can use the return value to gate visibility.
   */
  update(view: ObserverView): boolean {
    // Visibility heuristic: only meaningful when the sun is up AND the moon
    // is close enough to plausibly affect the sun's disc.
    if (!view.sunIsUp || view.angularSeparationDeg > SHOW_WHEN_SEPARATION_LESS_THAN_DEG) {
      return false;
    }

    // Position the moon disc. SVG y is screen-down; "up in sky" → negative SVG y.
    const moonX =  view.offsetEastDeg * PX_PER_DEG;
    const moonY = -view.offsetUpDeg   * PX_PER_DEG;
    const moonR = view.moonApparentRadiusDeg * PX_PER_DEG;

    if (moonX !== this.lastMoonX) { this.moonCircle.setAttribute("cx", moonX.toFixed(2)); this.lastMoonX = moonX; }
    if (moonY !== this.lastMoonY) { this.moonCircle.setAttribute("cy", moonY.toFixed(2)); this.lastMoonY = moonY; }
    if (moonR !== this.lastMoonR) { this.moonCircle.setAttribute("r", moonR.toFixed(2)); this.lastMoonR = moonR; }

    // Magnitude readout. Three regimes:
    //   - mag ≤ 0   → no overlap; "partial eclipse begins in …" kind of state
    //   - 0 < mag ≤ 1 → partial / annular
    //   - mag > 1   → total
    const m = view.magnitude;
    let magStr: string;
    let statusStr: string;
    if (m <= 0) {
      magStr = "—";
      statusStr = `${view.angularSeparationDeg.toFixed(2)}° apart`;
    } else if (m >= 1) {
      magStr = `magnitude ${m.toFixed(3)}`;
      statusStr = view.moonApparentRadiusDeg > view.sunApparentRadiusDeg
        ? "total"
        : "annular peak";
    } else {
      magStr = `magnitude ${m.toFixed(3)}`;
      statusStr = `${(m * 100).toFixed(1)}% obscured`;
    }
    if (magStr !== this.lastMagnitudeStr) { this.magnitudeEl.textContent = magStr; this.lastMagnitudeStr = magStr; }
    if (statusStr !== this.lastStatusStr) { this.statusEl.textContent = statusStr; this.lastStatusStr = statusStr; }

    return true;
  }
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  // Position: top-left column, beneath the Eclipse panel. Slightly indented
  // from the left edge so the inset visually parents under the Eclipse panel
  // it's contextually attached to. z-index above the canvas but below the
  // panels we're stacking against.
  const css = `
    #orrery-sundisc {
      position: fixed; top: 96px; left: 320px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.4;
      padding: 10px 14px; border-radius: 6px;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-sundisc.hidden { display: none; }
    .orrery-sundisc-title {
      display: flex; align-items: baseline; gap: 6px;
      margin-bottom: 6px;
    }
    .orrery-sundisc-label {
      color: #6e7a90; letter-spacing: 0.08em; text-transform: uppercase;
      font-size: 10px;
    }
    .orrery-sundisc-place { color: #cfd6e4; font-size: 12px; }
    #orrery-sundisc-svg {
      display: block;
      margin: 4px auto;
      background: radial-gradient(circle at center, rgba(255, 200, 100, 0.04), transparent 60%);
      border-radius: 4px;
    }
    .orrery-sundisc-readout {
      display: flex; flex-direction: column; align-items: center;
      gap: 1px; margin-top: 6px;
    }
    .orrery-sundisc-magnitude {
      color: #e2b42e; font-size: 12px; font-weight: 500;
    }
    .orrery-sundisc-status {
      color: #8a93a7; font-size: 11px;
    }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
