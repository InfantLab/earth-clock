/**
 * Bottom-centre scale-key legend for whichever GFS scalar overlay is currently
 * active (MSLP / Temp / Humidity / Moisture / Cloud water). Without this the
 * overlay row is striking but illegible — you can see the colours, but you've
 * no idea what they mean.
 *
 * Layout: a labelled gradient strip with min / mid / max readouts at the ends
 * and centre. Auto-hides when no overlay is active. Updates when the active
 * overlay changes.
 *
 * SVG renders the gradient using the same five-stop palette the fragment
 * shader uses (see [overlayPalettes.ts](./overlayPalettes.ts) for the shared
 * source of truth).
 */
import type { OverlayPalette } from "../scene/OverlayLayer";
import { PALETTE_STOPS } from "./overlayPalettes";

export interface ScaleKeySpec {
  /** Human-readable name of the active overlay (e.g. "Atmospheric pressure"). */
  label: string;
  /** Which palette the shader is using. Determines the gradient colours. */
  palette: OverlayPalette;
  /** Pre-formatted min / mid / max readouts including units. The caller takes
   *  care of unit conversion (e.g. Pa → hPa for pressure, K → °C for temp). */
  displayMin: string;
  displayMid: string;
  displayMax: string;
}

const BAR_WIDTH_PX = 240;
const BAR_HEIGHT_PX = 10;

export class ScaleKeyPanel {
  private readonly root: HTMLElement;
  private readonly labelEl: HTMLElement;
  private readonly minEl: HTMLElement;
  private readonly midEl: HTMLElement;
  private readonly maxEl: HTMLElement;
  private readonly stopEls: SVGStopElement[];
  private lastSpec: ScaleKeySpec | null = null;

  constructor(parent: HTMLElement) {
    injectStyles();

    this.root = document.createElement("div");
    this.root.id = "orrery-scalekey";
    this.root.classList.add("hidden");
    // SVG with a linear-gradient definition + a rect filled with that gradient.
    // The <stop> elements are addressable so we can swap their colours when
    // the active overlay changes, without re-parsing the SVG.
    this.root.innerHTML = `
      <div class="orrery-scalekey-label" id="orrery-scalekey-label">—</div>
      <svg id="orrery-scalekey-svg" width="${BAR_WIDTH_PX}" height="${BAR_HEIGHT_PX}">
        <defs>
          <linearGradient id="orrery-scalekey-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#000"/>
            <stop offset="25%"  stop-color="#000"/>
            <stop offset="50%"  stop-color="#000"/>
            <stop offset="75%"  stop-color="#000"/>
            <stop offset="100%" stop-color="#000"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${BAR_WIDTH_PX}" height="${BAR_HEIGHT_PX}"
              fill="url(#orrery-scalekey-grad)" rx="2" ry="2"/>
      </svg>
      <div class="orrery-scalekey-ticks">
        <span class="orrery-scalekey-min" id="orrery-scalekey-min">—</span>
        <span class="orrery-scalekey-mid" id="orrery-scalekey-mid">—</span>
        <span class="orrery-scalekey-max" id="orrery-scalekey-max">—</span>
      </div>
    `;
    parent.appendChild(this.root);

    this.labelEl = this.root.querySelector("#orrery-scalekey-label") as HTMLElement;
    this.minEl   = this.root.querySelector("#orrery-scalekey-min")   as HTMLElement;
    this.midEl   = this.root.querySelector("#orrery-scalekey-mid")   as HTMLElement;
    this.maxEl   = this.root.querySelector("#orrery-scalekey-max")   as HTMLElement;
    this.stopEls = Array.from(this.root.querySelectorAll("#orrery-scalekey-grad stop")) as SVGStopElement[];
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
  }

  update(spec: ScaleKeySpec) {
    if (this.lastSpec
      && this.lastSpec.label      === spec.label
      && this.lastSpec.palette    === spec.palette
      && this.lastSpec.displayMin === spec.displayMin
      && this.lastSpec.displayMid === spec.displayMid
      && this.lastSpec.displayMax === spec.displayMax) {
      return; // no-op
    }
    this.lastSpec = { ...spec };

    this.labelEl.textContent = spec.label;
    this.minEl.textContent   = spec.displayMin;
    this.midEl.textContent   = spec.displayMid;
    this.maxEl.textContent   = spec.displayMax;

    const stops = PALETTE_STOPS[spec.palette].stops;
    for (let i = 0; i < 5; i++) {
      this.stopEls[i].setAttribute("stop-color", stops[i]);
    }
  }
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    #orrery-scalekey {
      position: fixed; left: 50%; bottom: 24px;
      transform: translateX(-50%);
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 11px; line-height: 1.4;
      padding: 8px 14px 6px; border-radius: 6px;
      z-index: 10;
      pointer-events: none;
      user-select: none;
      text-align: center;
    }
    #orrery-scalekey.hidden { display: none; }
    .orrery-scalekey-label {
      color: #cfd6e4; font-size: 12px;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }
    #orrery-scalekey-svg {
      display: block; margin: 0 auto;
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
      border-radius: 2px;
    }
    .orrery-scalekey-ticks {
      display: flex; justify-content: space-between;
      width: ${BAR_WIDTH_PX}px;
      margin: 4px auto 0;
      font-size: 10px;
      color: #8a93a7;
    }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
