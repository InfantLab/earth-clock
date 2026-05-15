/**
 * Collapsible bottom-left layer menu, modelled on the classic earth-clock menu.
 *
 * Click the "earth-clock" wordmark to expand the panel. Each layer is a "text-button" that toggles
 * a boolean — yellow when active, grey when off, white on hover. The brand wordmark stays
 * visible at all times (it's also the open/close affordance), but expands into the panel below.
 *
 * Visibility for most layers is plumbed through `mesh.visible`. The wind layer is special:
 * the particles live in the Trails offscreen scene, so we expose a `windVisible` flag that
 * `main.ts` consults before calling `trails.render()`.
 *
 * Selections persist in `localStorage` under `orrery.menu.v1`.
 */
// __APP_VERSION__ is injected by Vite from package.json at build time. See vite.config.ts.
declare const __APP_VERSION__: string;
const APP_VERSION: string = typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "dev";

import type { Globe } from "../scene/Globe";
import type { Atmosphere } from "../scene/Atmosphere";
import type { Moon } from "../scene/Moon";
import type { Coastlines } from "../scene/Coastlines";
import type { CloudLayer } from "../scene/CloudLayer";
import type { AuroraLayer } from "../scene/AuroraLayer";
import type { FireLayer } from "../scene/FireLayer";
import type { HurricaneLayer } from "../scene/HurricaneLayer";
import type { HurricaneTrackLayer } from "../scene/HurricaneTrackLayer";
import type { LightningLayer } from "../scene/LightningLayer";
import type { OverlayLayer } from "../scene/OverlayLayer";
import type { EclipseLayer } from "../scene/EclipseLayer";
import type { FlatMap } from "../scene/FlatMap";
import type { Debug } from "./Debug";
import type { DataPanel } from "./DataPanel";
import type { Clock } from "./Clock";
import type { LocationPanel } from "./LocationPanel";

export interface MenuLayers {
  globe: Globe;
  atmosphere: Atmosphere;
  moon: Moon;
  coastlines: Coastlines;
  clouds: CloudLayer;
  aurora: AuroraLayer;
  fires: FireLayer;
  hurricanes: HurricaneLayer;
  hurricaneTracks: HurricaneTrackLayer;
  lightning: LightningLayer;
  overlay: OverlayLayer;
  eclipse: EclipseLayer;
  flatMap: FlatMap;
}

export interface MenuPanels {
  /** Unified per-layer panel: status icon + source link + detail + age. Top-right.
   *  Shown by the View row's "Data" button. */
  data?: DataPanel;
  /** Diagnostic tools — astro readout + Use test data / Find moon / Jump to eclipse.
   *  Bottom-right. Shown by the View row's "Tools" button. */
  tools?: Debug;
  clock?: Clock;
  location?: LocationPanel;
}

type LayerKey =
  // Weather row
  | "wind" | "fires" | "lightning" | "hurricanes" | "tracks" | "aurora"
  // Clouds row — mutex source picker (one selected at a time)
  | "cloudsViirs" | "cloudsGfs" | "cloudsGoes"
  // Overlay row — mutex (unchanged)
  | "mslp" | "temp" | "rh" | "tpw" | "tcw"
  // Geography row
  | "coastlines" | "nightLights"
  // Astro row
  | "terminator" | "atmosphere" | "moon" | "eclipse"
  // View row. `data` toggles the unified panel (status + source + detail + age); `tools`
  // toggles the diagnostic panel (astro readout + Use test data / Find moon / Jump to
  // eclipse). Older sessions had a separate "Sources" entry — that role merged into `data`.
  | "map" | "orbit" | "clock" | "data" | "location" | "tools";

/** Subset of LayerKey representing cloud-source picker entries (mutex). */
export type CloudSourceKey = "cloudsViirs" | "cloudsGfs" | "cloudsGoes";

const STORAGE_KEY = "orrery.menu.v1";
const DEFAULTS: Record<LayerKey, boolean> = {
  // Weather
  wind: true, fires: true, lightning: true, hurricanes: true, tracks: true, aurora: true,
  // Clouds — VIIRS on by default (matches the previous single "Clouds" toggle behaviour)
  cloudsViirs: true, cloudsGfs: false, cloudsGoes: false,
  // Overlay
  mslp: false, temp: false, rh: false, tpw: false, tcw: false,
  // Geography
  coastlines: true, nightLights: true,
  // Astro
  terminator: true, atmosphere: true, moon: true, eclipse: false,
  // View
  map: false, orbit: false, clock: true, data: false, location: false, tools: false,
};

const LABELS: Record<LayerKey, string> = {
  wind: "Wind", fires: "Fires", lightning: "Lightning",
  hurricanes: "Hurricanes", tracks: "Storm tracks", aurora: "Aurora",
  // Clouds row — source picker (mutex). Off is implicit (click active to turn off).
  cloudsViirs: "VIIRS", cloudsGfs: "GFS", cloudsGoes: "GOES",
  // Overlay row: human-readable names rather than meteorological abbreviations. The
  // technical names + brief explanations are surfaced as tooltips below.
  mslp: "Pressure", temp: "Temperature", rh: "Humidity",
  tpw: "Moisture", tcw: "Cloud water",
  coastlines: "Coastlines", nightLights: "Night lights",
  terminator: "Day/night", atmosphere: "Atmosphere", moon: "Moon", eclipse: "Eclipse",
  map: "Flat map", orbit: "Auto-spin",
  clock: "Clock", data: "Data", location: "Location", tools: "Tools",
};

/**
 * Hover-tooltips for buttons whose display label is the friendly name. We keep the
 * technical / catalogue names accessible (one-line description, what it measures, units
 * if relevant) so power-users aren't lost when they expect "MSLP" rather than "Pressure".
 */
const TOOLTIPS: Partial<Record<LayerKey, string>> = {
  // Weather
  aurora:      "Aurora oval probability (NOAA SWPC Ovation, refreshed 5 min)",
  fires:       "Active wildfires from satellite thermal detections (NASA FIRMS, last 24 h)",
  hurricanes:  "Active tropical cyclones (NOAA NHC, refreshed 15 min)",
  tracks:      "Past track + 5-day forecast track + uncertainty cone for each active storm",
  lightning:   "Real-time lightning strikes from the Blitzortung community network",
  wind:        "Surface wind particle simulation (NOAA GFS, refreshed 6 h)",
  // Clouds source picker — mutually exclusive. Click the active source to turn clouds off.
  cloudsViirs: "VIIRS true-colour daily mosaic (NASA GIBS) — photographic, can have swath gaps on partial days",
  cloudsGfs:   "GFS cloud cover (NOAA, 6 h refresh) — model forecast, no coverage gaps, animates with time-warp. Prefers TCDC; falls back to TCW until weather-service is re-run.",
  cloudsGoes:  "GOES + Himawari + MSG geostationary composite — coming soon",
  // Overlays — each carries the GFS technical name in parentheses
  mslp:        "Mean sea level pressure (MSLP) — highs and lows drive weather systems",
  temp:        "2 m air temperature (Temp) — kelvin internally, displayed via colour ramp",
  rh:          "2 m relative humidity (RH) — 0 to 100 % of saturation",
  tpw:         "Total precipitable water (TPW, mm) — atmospheric water vapour column",
  tcw:         "Total cloud water (TCW, kg/m²) — liquid + ice in the atmospheric column",
  // Geography
  coastlines:  "Natural Earth 50 m coastlines",
  nightLights: "City lights on the night side (Solar System Scope)",
  // Astro
  terminator:  "Day/night shading — sun-direction lighting + city-lights overlay",
  atmosphere:  "Atmospheric rim glow with day-twilight gradient",
  moon:        "The moon at its true position and distance (~60 Earth radii)",
  eclipse:     "Live umbra + penumbra discs and path-of-totality for the next solar eclipse",
  // View
  map:         "Switch to equirectangular flat-map projection",
  orbit:       "Gentle auto-rotation around Earth (pauses on user input)",
  clock:       "Time display. Click the zone to flip UTC ⇄ local.",
  data:        "Unified data panel — per-layer status, source (linked), detail, last-fetched age",
  location:    "Click the globe / map to pin a location and look it up",
  tools:       "Diagnostic readout — sub-solar / sub-lunar position, Use test data, Find moon, Jump to eclipse",
};

/**
 * Mutually-exclusive rows: turning one on turns the others off in the same row.
 * Click the active key a second time to turn the whole group off.
 *   - Overlay: pick one GFS scalar field to render (or none)
 *   - Clouds:  pick one cloud-source backend (or none = clouds hidden)
 */
const OVERLAY_KEYS: LayerKey[] = ["mslp", "temp", "rh", "tpw", "tcw"];
const CLOUD_KEYS:   LayerKey[] = ["cloudsViirs", "cloudsGfs", "cloudsGoes"];

const CATEGORIES: Array<{ label: string; keys: LayerKey[] }> = [
  {
    label: "Weather",
    keys: ["wind", "fires", "lightning", "hurricanes", "tracks", "aurora"],
  },
  {
    label: "Clouds",
    keys: CLOUD_KEYS,
  },
  {
    label: "Overlay",
    keys: OVERLAY_KEYS,
  },
  {
    label: "Geography",
    keys: ["coastlines", "nightLights"],
  },
  {
    label: "Astro",
    keys: ["terminator", "atmosphere", "moon", "eclipse"],
  },
  {
    label: "View",
    keys: ["map", "orbit", "clock", "data", "location", "tools"],
  },
];

export class Menu {
  private readonly state: Record<LayerKey, boolean>;
  private readonly layers: MenuLayers;
  private readonly panels: MenuPanels;
  private readonly buttons: Partial<Record<LayerKey, HTMLElement>> = {};
  private readonly panel: HTMLElement;
  private open: boolean;
  private overlayChangeHandler: ((active: LayerKey | null) => void) | null = null;
  private cloudsChangeHandler: ((active: CloudSourceKey | null) => void) | null = null;

  constructor(parent: HTMLElement, layers: MenuLayers, panels: MenuPanels = {}) {
    this.layers = layers;
    this.panels = panels;
    this.state = { ...DEFAULTS, ...loadState() };
    this.open = loadOpen();

    injectStyles();

    const root = document.createElement("div");
    root.id = "orrery-ui";
    // Version badge sits next to the wordmark so a tester can quote it on bug reports
    // without opening DevTools. Sourced from package.json via Vite's `define` config so
    // the badge stays in lock-step with whatever was actually built.
    root.innerHTML = `
      <div class="orrery-brand-row">
        <span class="orrery-brand" id="orrery-brand" title="menu">earth-clock</span>
        <span class="orrery-version" title="package.json version">v${APP_VERSION}</span>
      </div>
      <div class="orrery-menu${this.open ? "" : " collapsed"}" id="orrery-menu">
        <div id="orrery-menu-categories"></div>
        <p class="orrery-meta">
          <a href="https://github.com/infantlab/earth-clock" target="_blank" rel="noopener">about</a>
        </p>
      </div>
    `;
    parent.appendChild(root);

    this.panel = root.querySelector("#orrery-menu") as HTMLElement;
    const brand = root.querySelector("#orrery-brand") as HTMLElement;
    brand.addEventListener("click", () => this.toggleOpen());

    const categoriesHost = root.querySelector("#orrery-menu-categories") as HTMLElement;
    for (const cat of CATEGORIES) {
      const row = document.createElement("p");
      row.innerHTML = `<span class="orrery-label">${cat.label}</span><span class="orrery-buttons"></span>`;
      const buttonsHost = row.querySelector(".orrery-buttons") as HTMLElement;
      cat.keys.forEach((key, i) => {
        if (i > 0) buttonsHost.appendChild(document.createTextNode(" · "));
        const btn = document.createElement("span");
        btn.className = "orrery-tb";
        btn.textContent = LABELS[key];
        // Tooltip: the layer's full description (which includes the technical name where
        // relevant), falling back to a plain "Toggle X" for layers without an entry yet.
        btn.title = TOOLTIPS[key] ?? `Toggle ${LABELS[key]}`;
        btn.addEventListener("click", () => this.toggle(key));
        buttonsHost.appendChild(btn);
        this.buttons[key] = btn;
      });
      categoriesHost.appendChild(row);
    }

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

  /** True when the user has enabled click-to-pin location mode. */
  isLocationActive(): boolean {
    return this.state.location;
  }

  /** True when the gentle auto-orbit is enabled (drives OrbitControls.autoRotate). */
  isAutoOrbit(): boolean {
    return this.state.orbit;
  }

  /**
   * Currently active overlay key, or null if all are off. Useful for main.ts to know
   * which variable to fetch/cache without subscribing to every toggle event.
   */
  activeOverlay(): LayerKey | null {
    for (const k of OVERLAY_KEYS) if (this.state[k]) return k;
    return null;
  }

  /** Currently active cloud source, or null if clouds are hidden. */
  activeCloudSource(): CloudSourceKey | null {
    for (const k of CLOUD_KEYS) if (this.state[k]) return k as CloudSourceKey;
    return null;
  }

  /**
   * Hook for overlay changes. Called with the new active overlay key (or null when the
   * user clicks an active overlay a second time to turn it off). main.ts uses this to
   * swap the OverlayLayer's data + palette + range without polling each frame.
   */
  onOverlayChange(fn: (active: LayerKey | null) => void) {
    this.overlayChangeHandler = fn;
  }

  /**
   * Hook for cloud-source changes. main.ts uses this to swap between VIIRS texture,
   * GFS TCDC scalar field, GOES composite, or hidden — whichever the user just selected.
   */
  onCloudsChange(fn: (active: CloudSourceKey | null) => void) {
    this.cloudsChangeHandler = fn;
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
    const wasActive = this.state[key];
    this.state[key] = !wasActive;

    // Mutex rows: turning one entry on turns the others in the same row off. Used by
    // overlay (one scalar field at a time) and clouds (one source backend at a time).
    const mutexRow = OVERLAY_KEYS.includes(key) ? OVERLAY_KEYS
                  : CLOUD_KEYS.includes(key)    ? CLOUD_KEYS
                  : null;
    if (mutexRow && this.state[key]) {
      for (const other of mutexRow) {
        if (other !== key && this.state[other]) {
          this.state[other] = false;
          this.apply(other);
        }
      }
    }

    this.apply(key);
    saveState(this.state);

    if (OVERLAY_KEYS.includes(key)) {
      this.overlayChangeHandler?.(this.activeOverlay());
    }
    if (CLOUD_KEYS.includes(key)) {
      this.cloudsChangeHandler?.(this.activeCloudSource());
    }
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
    const { globe, atmosphere, moon, coastlines, clouds, aurora, fires, hurricanes, hurricaneTracks, lightning, overlay, eclipse, flatMap } = this.layers;
    switch (key) {
      // Cloud source picker — visibility is "is any source active?" The actual texture/
      // scalar swap happens in main.ts via onCloudsChange. (CloudLayer doesn't know the
      // difference between sources — see CloudLayer.setTexture vs setScalarField.)
      case "cloudsViirs":
      case "cloudsGfs":
      case "cloudsGoes": {
        const cloudsOn = this.activeCloudSource() !== null;
        clouds.mesh.visible = cloudsOn;
        flatMap.setCloudsVisible(cloudsOn);
        break;
      }
      case "aurora":      aurora.mesh.visible = on; break;
      case "fires":
        fires.mesh.visible     = on;
        fires.flatMesh.visible = on;
        break;
      case "hurricanes":
        hurricanes.mesh.visible     = on;
        hurricanes.flatMesh.visible = on;
        break;
      case "tracks":      hurricaneTracks.mesh.visible = on; break;
      case "eclipse":     eclipse.mesh.visible = on; break;
      case "lightning":
        lightning.mesh.visible     = on;
        lightning.flatMesh.visible = on;
        break;
      // The five overlay-row keys share one OverlayLayer; visibility is just "is any
      // overlay active?" (the data-swap happens in main.ts via onOverlayChange).
      case "mslp":
      case "temp":
      case "rh":
      case "tpw":
      case "tcw":
        overlay.mesh.visible = this.activeOverlay() !== null;
        break;
      case "coastlines":
        coastlines.mesh.visible     = on;
        coastlines.flatMesh.visible = on;
        break;
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
      case "orbit":       /* consumed by main loop via isAutoOrbit() → controls.autoRotate */ break;
      case "clock":       this.panels.clock?.setVisible(on); break;
      case "data":        this.panels.data?.setVisible(on); break;
      case "location":    this.panels.location?.setVisible(on); break;
      case "tools":       this.panels.tools?.setVisible(on); break;
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
    .orrery-brand-row { pointer-events: none; display: flex; align-items: baseline; gap: 8px; }
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
    .orrery-version {
      font-size: 11px;
      color: #6e7a90;
      letter-spacing: 0.04em;
      pointer-events: all;
      user-select: text;
    }
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
