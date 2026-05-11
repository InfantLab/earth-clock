/**
 * Collapsible bottom-left layer menu, modelled on the classic earth-clock menu.
 *
 * Click the "orrery" wordmark to expand the panel. Each layer is a "text-button" that toggles
 * a boolean — yellow when active, grey when off, white on hover. The brand wordmark stays
 * visible at all times (it's also the open/close affordance), but expands into the panel below.
 *
 * Visibility for most layers is plumbed through `mesh.visible`. The wind layer is special:
 * the particles live in the Trails offscreen scene, so we expose a `windVisible` flag that
 * `main.ts` consults before calling `trails.render()`.
 *
 * Selections persist in `localStorage` under `orrery.menu.v1`.
 */
import type { Globe } from "../scene/Globe";
import type { Atmosphere } from "../scene/Atmosphere";
import type { Moon } from "../scene/Moon";
import type { Coastlines } from "../scene/Coastlines";
import type { CloudLayer } from "../scene/CloudLayer";
import type { AuroraLayer } from "../scene/AuroraLayer";
import type { FireLayer } from "../scene/FireLayer";
import type { HurricaneLayer } from "../scene/HurricaneLayer";
import type { FlatMap } from "../scene/FlatMap";
import type { Debug } from "./Debug";

export interface MenuLayers {
  globe: Globe;
  atmosphere: Atmosphere;
  moon: Moon;
  coastlines: Coastlines;
  clouds: CloudLayer;
  aurora: AuroraLayer;
  fires: FireLayer;
  hurricanes: HurricaneLayer;
  flatMap: FlatMap;
}

type LayerKey =
  | "clouds" | "aurora" | "fires" | "hurricanes" | "wind"
  | "coastlines" | "terminator" | "nightLights"
  | "moon" | "atmosphere" | "map" | "debug";

const STORAGE_KEY = "orrery.menu.v1";
const DEFAULTS: Record<LayerKey, boolean> = {
  clouds: true, aurora: true, fires: true, hurricanes: true, wind: true,
  coastlines: true, terminator: true, nightLights: true,
  moon: true, atmosphere: true, map: false, debug: false,
};

const LABELS: Record<LayerKey, string> = {
  clouds: "Clouds", aurora: "Aurora", fires: "Fires", hurricanes: "Hurricanes",
  wind: "Wind", coastlines: "Coastlines",
  terminator: "Terminator", nightLights: "Night lights",
  moon: "Moon", atmosphere: "Atmosphere",
  map: "Map", debug: "Debug",
};

export class Menu {
  private readonly state: Record<LayerKey, boolean>;
  private readonly layers: MenuLayers;
  private readonly debug: Debug | null;
  private readonly buttons: Partial<Record<LayerKey, HTMLElement>> = {};
  private readonly panel: HTMLElement;
  private open: boolean;

  constructor(parent: HTMLElement, layers: MenuLayers, debug?: Debug) {
    this.layers = layers;
    this.debug = debug ?? null;
    this.state = { ...DEFAULTS, ...loadState() };
    this.open = loadOpen();

    injectStyles();

    const root = document.createElement("div");
    root.id = "orrery-ui";
    root.innerHTML = `
      <div class="orrery-brand-row">
        <span class="orrery-brand" id="orrery-brand" title="menu">orrery</span>
      </div>
      <div class="orrery-menu${this.open ? "" : " collapsed"}" id="orrery-menu">
        <p>
          <span class="orrery-label">Layers</span>
          <span class="orrery-buttons" id="orrery-layer-buttons"></span>
        </p>
        <p class="orrery-meta">
          <a href="https://github.com/infantlab/earth-clock" target="_blank" rel="noopener">about</a>
        </p>
      </div>
    `;
    parent.appendChild(root);

    this.panel = root.querySelector("#orrery-menu") as HTMLElement;
    const brand = root.querySelector("#orrery-brand") as HTMLElement;
    brand.addEventListener("click", () => this.toggleOpen());

    const buttonsHost = root.querySelector("#orrery-layer-buttons") as HTMLElement;
    (Object.keys(LABELS) as LayerKey[]).forEach((key, i) => {
      if (i > 0) buttonsHost.appendChild(document.createTextNode(" · "));
      const btn = document.createElement("span");
      btn.className = "orrery-tb";
      btn.textContent = LABELS[key];
      btn.title = `Toggle ${LABELS[key]}`;
      btn.addEventListener("click", () => this.toggle(key));
      buttonsHost.appendChild(btn);
      this.buttons[key] = btn;
    });

    this.applyAll();
  }

  /** Read by the animation loop to decide whether to render wind. */
  isWindVisible(): boolean {
    return this.state.wind;
  }

  /** Read by the animation loop to switch between 3D globe and equirectangular map render. */
  isMapMode(): boolean {
    return this.state.map;
  }

  /**
   * Set a layer's on/off state programmatically (e.g. from the Debug "Use test data" button
   * which wants to force-show layers that the user may have turned off). The menu's button
   * highlight, internal state, and persisted localStorage entry all stay in sync, so a
   * subsequent click on the menu still toggles correctly.
   * Unknown keys are silently ignored.
   */
  setLayer(name: string, on: boolean) {
    if (!(name in DEFAULTS)) return;
    const key = name as LayerKey;
    if (this.state[key] === on) return;
    this.state[key] = on;
    this.apply(key);
    saveState(this.state);
  }

  private toggle(key: LayerKey) {
    this.state[key] = !this.state[key];
    this.apply(key);
    saveState(this.state);
  }

  private toggleOpen() {
    this.open = !this.open;
    this.panel.classList.toggle("collapsed", !this.open);
    saveOpen(this.open);
  }

  private applyAll() {
    (Object.keys(LABELS) as LayerKey[]).forEach(k => this.apply(k));
  }

  private apply(key: LayerKey) {
    const on = this.state[key];
    const { globe, atmosphere, moon, coastlines, clouds, aurora, fires, hurricanes, flatMap } = this.layers;
    switch (key) {
      case "clouds":
        clouds.mesh.visible = on;
        flatMap.setCloudsVisible(on);
        break;
      case "aurora":      aurora.mesh.visible = on; break;
      case "fires":       fires.mesh.visible = on; break;
      case "hurricanes":  hurricanes.mesh.visible = on; break;
      case "coastlines":  coastlines.mesh.visible = on; break;
      case "moon":        moon.mesh.visible = on; break;
      case "atmosphere":  atmosphere.mesh.visible = on; break;
      case "terminator":
        // Day/night rendering switch — applies to globe AND flat map. With it off, both
        // modes show a uniformly-lit Earth and clouds render uniformly bright (no night dim).
        globe.setTerminatorVisible(on);
        clouds.setTerminatorEnabled(on);
        aurora.setTerminatorEnabled(on);
        flatMap.setTerminatorEnabled(on);
        break;
      case "nightLights":
        globe.setNightLightsVisible(on);
        flatMap.setNightLightsVisible(on);
        break;
      case "wind":        /* consumed by main loop via isWindVisible() */ break;
      case "map":         /* consumed by main loop via isMapMode() — render swap */ break;
      case "debug":       this.debug?.setVisible(on); break;
    }
    const btn = this.buttons[key];
    if (btn) btn.classList.toggle("highlighted", on);
  }
}

// ---- persistence helpers ----

function loadState(): Partial<Record<LayerKey, boolean>> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed.layers ?? {};
  } catch { return {}; }
}
function saveState(s: Record<LayerKey, boolean>) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const blob = raw ? JSON.parse(raw) : {};
    blob.layers = s;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blob));
  } catch { /* localStorage disabled — that's fine */ }
}
function loadOpen(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    return !!JSON.parse(raw).open;
  } catch { return false; }
}
function saveOpen(o: boolean) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const blob = raw ? JSON.parse(raw) : {};
    blob.open = o;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blob));
  } catch { /* */ }
}

// ---- styles (self-contained; injected once) ----

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    #orrery-ui {
      position: fixed; left: 16px; bottom: 16px;
      color: #cfd6e4; font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
      font-size: 13px; line-height: 1.55; letter-spacing: 0.02em;
      pointer-events: none;
      z-index: 10;
      user-select: none;
    }
    .orrery-brand-row { pointer-events: none; }
    .orrery-brand {
      display: inline-block;
      pointer-events: all;
      background: rgba(0, 0, 5, 0.55);
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 16px;
      letter-spacing: 0.08em;
      color: #c9d2e3;
      cursor: pointer;
      transition: color 125ms ease;
    }
    .orrery-brand:hover { color: #fff; }
    .orrery-menu {
      pointer-events: all;
      margin-top: 6px;
      background: rgba(5, 10, 30, 0.78);
      border-radius: 6px;
      padding: 8px 14px;
      max-width: 520px;
      max-height: 28rem;
      opacity: 1;
      overflow: hidden;
      transition: opacity 200ms ease, max-height 200ms ease,
                  padding 200ms ease, margin-top 200ms ease;
    }
    .orrery-menu.collapsed {
      max-height: 0; opacity: 0; padding-top: 0; padding-bottom: 0;
      margin-top: 0; pointer-events: none;
    }
    .orrery-menu p { margin: 4px 0; }
    .orrery-label {
      display: inline-block;
      width: 5.5em;
      color: #6e7a90;
    }
    .orrery-label::after { content: " | "; color: #3d4658; }
    .orrery-tb {
      color: #7c869a;
      cursor: pointer;
      transition: color 125ms ease;
    }
    .orrery-tb:hover { color: #fff; }
    .orrery-tb.highlighted { color: #e2b42e; }
    .orrery-meta { color: #555c6b; margin-top: 6px !important; font-size: 12px; }
    .orrery-meta a { color: #7c869a; text-decoration: none; }
    .orrery-meta a:hover { color: #fff; }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
