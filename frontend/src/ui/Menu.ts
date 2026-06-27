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
import type { RadiusVectors } from "../scene/RadiusVectors";
import type { EclipseLayer } from "../scene/EclipseLayer";
import type { FlatMap } from "../scene/FlatMap";
import type { Trails } from "../scene/Trails";
import type { DataPanel } from "./DataPanel";
import type { Clock } from "./Clock";
import type { LocationPanel } from "./LocationPanel";
import type { EclipsePanel } from "./EclipsePanel";

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
  radiusVectors: RadiusVectors;
  eclipse: EclipseLayer;
  flatMap: FlatMap;
  /** Wind-trail accumulator. The Wind row's mutex picker calls
   *  `trails.setIntensity(level)` directly via Menu.apply(). */
  trails: Trails;
}

export interface MenuPanels {
  /** Unified per-layer panel: status icon + source link + detail + age. Top-right.
   *  Shown by the View row's "Data" button. */
  data?: DataPanel;
  clock?: Clock;
  location?: LocationPanel;
  /** Eclipse catalogue browser. Tied to the Astro row's "Eclipse" entry; same toggle
   *  also drives EclipseLayer.mesh.visible so the panel and the 3D path/disc stay
   *  in sync. */
  eclipse?: EclipsePanel;
}

type LayerKey =
  // Weather row
  | "fires" | "lightning" | "hurricanes" | "tracks" | "aurora"
  // Wind row — mutex intensity picker (one selected at a time, or all off = wind hidden).
  // Replaces the v0.1.0–v0.1.2 binary `wind` toggle, which only had the "bold" preset and
  // visually smothered the rest of the globe. Old `wind: true` localStorage entries are
  // silently ignored (not in LayerKey any more).
  | "windSubtle" | "windStandard" | "windBold"
  // Clouds row — mutex source picker (one selected at a time)
  | "cloudsViirs" | "cloudsGfs" | "cloudsGoes"
  // Overlay row — mutex (unchanged)
  | "mslp" | "temp" | "rh" | "tpw" | "tcw"
  // Geography row
  | "coastlines" | "nightLights"
  // Astro row. `eclipse` toggles both the 3D EclipseLayer mesh AND the top-left
  // Eclipse panel (catalogue browser + jump-to). The Moon toggle was removed in
  // v0.1.4 — the 3D moon mesh is always visible now, and the flat-map sun + moon
  // dots are paired and controlled by the Beams toggle. "Find moon" sits at the
  // end of the row as a non-toggling action button (reposition the camera).
  | "terminator" | "atmosphere" | "hands" | "eclipse"
  // Astro² row — additional astronomical display options.
  // `skyboxHi` upgrades the starfield from 2K (default, fast) to NASA's 8K Deep
  // Star Map (~1.9 MB). Loaded on demand via Skybox.tryLoadSkybox("hi").
  | "skyboxHi"
  // View row.
  | "map" | "orbit" | "clock" | "data" | "location";

/** Subset of LayerKey representing cloud-source picker entries (mutex). */
export type CloudSourceKey = "cloudsViirs" | "cloudsGfs" | "cloudsGoes";

/** Subset of LayerKey representing wind-intensity picker entries (mutex). */
export type WindIntensityKey = "windSubtle" | "windStandard" | "windBold";

/** Map from a wind-intensity LayerKey to the value Trails.setIntensity() expects. */
const WIND_INTENSITY_LEVEL: Record<WindIntensityKey, "subtle" | "standard" | "bold"> = {
  windSubtle:   "subtle",
  windStandard: "standard",
  windBold:     "bold",
};

const STORAGE_KEY = "orrery.menu.v1";
const DEFAULTS: Record<LayerKey, boolean> = {
  // Weather (binary toggles)
  fires: true, lightning: true, hurricanes: true, tracks: true, aurora: true,
  // Wind — default "subtle". Was bold-only by default until v0.1.3, which overwhelmed
  // continents, clouds, and weather layers. The user can dial up to standard or bold
  // for the classic earth.nullschool look.
  windSubtle: true, windStandard: false, windBold: false,
  // Clouds — VIIRS on by default. (Briefly defaulted to GFS in 0.0.5-dev when VIIRS
  // appeared broken; turned out we were fetching from a TileMatrixSet zoom level whose
  // matrix over-covered the world by 75% in the bottom row — the empty fill triggered
  // the no-data rejection. Fixed by switching to zoom 3 in loadClouds().)
  cloudsViirs: true, cloudsGfs: false, cloudsGoes: false,
  // Overlay
  mslp: false, temp: false, rh: false, tpw: false, tcw: false,
  // Geography
  coastlines: true, nightLights: true,
  // Astro
  terminator: true, atmosphere: true, hands: true, eclipse: false,
  // Astro² — hi-res sky off by default so first paint stays on the 250 KB 2K texture.
  skyboxHi: false,
  // View
  map: false, orbit: false, clock: true, data: false, location: false,
};

// On narrow/touch devices, shed the WebSocket-heavy and GPU-hungry layers on
// first visit. Returning users keep their own saved state — this only applies
// when localStorage has no prior orrery.menu.v1 entry.
const MOBILE_DEFAULT_OVERRIDES: Partial<Record<LayerKey, boolean>> = {
  aurora: false,      // WebSocket + GPU particle overlay
  fires: false,       // NASA FIRMS fetch + particle mesh
  lightning: false,   // Blitzortung WebSocket
  tracks: false,      // NHC KMZ fetch; hurricanes pin stays on (cheap dots)
  nightLights: false, // Extra texture layer
};

function resolveDefaults(): Record<LayerKey, boolean> {
  const isMobile = typeof window !== "undefined" &&
    window.matchMedia("(max-width: 600px)").matches;
  if (isMobile) return { ...DEFAULTS, ...MOBILE_DEFAULT_OVERRIDES };
  return { ...DEFAULTS };
}

const LABELS: Record<LayerKey, string> = {
  fires: "Fires", lightning: "Lightning",
  hurricanes: "Hurricanes", tracks: "Storm tracks", aurora: "Aurora",
  // Wind row — intensity picker (mutex). Off is implicit (click active to turn off).
  windSubtle: "Subtle", windStandard: "Standard", windBold: "Bold",
  // Clouds row — source picker (mutex). Off is implicit (click active to turn off).
  cloudsViirs: "VIIRS", cloudsGfs: "GFS", cloudsGoes: "GOES",
  // Overlay row: human-readable names rather than meteorological abbreviations. The
  // technical names + brief explanations are surfaced as tooltips below.
  mslp: "Pressure", temp: "Temperature", rh: "Humidity",
  tpw: "Moisture", tcw: "Cloud water",
  coastlines: "Coastlines", nightLights: "Night lights",
  terminator: "Day/night", atmosphere: "Atmosphere", hands: "Beams", eclipse: "Eclipse",
  skyboxHi: "Hi-res sky",
  map: "Flat map", orbit: "Auto-spin",
  clock: "Clock", data: "Data", location: "Location",
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
  // Wind intensity picker — mutually exclusive. Click the active level to turn wind off.
  // Underlying simulation is the same NOAA GFS surface-wind particle system; the levels
  // just dial fade rate + composite opacity. Subtle = present but unobtrusive; bold = the
  // classic earth.nullschool look (dominates the visual).
  windSubtle:   "Wind — subtle: short streaks, dim composite. Doesn't compete with other layers.",
  windStandard: "Wind — standard: moderate streaks, mid brightness.",
  windBold:     "Wind — bold: long, bright streaks. The signature earth.nullschool look.",
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
  hands:       "Sun and moon beams — a gold gnomon pointing at the sun, a silver one at the moon, plus paired sun + moon dots on the flat map. Under time-warp the sun beam sweeps one rotation per simulated day.",
  eclipse:     "Live umbra + penumbra discs and path-of-totality; opens the eclipse-catalogue panel for selecting an event and jumping to it",
  // Astro²
  skyboxHi:    "Upgrade the starfield to NASA's 8K Deep Star Map (~1.9 MB). Sharper Milky Way detail when zoomed out; takes a couple of seconds to load. Default is 2K (~250 KB) for fast first paint.",
  // View
  map:         "Equirectangular flat-map view — drag to pan, wheel to zoom (centred on cursor), double-click to reset",
  orbit:       "Gentle auto-rotation around Earth (pauses on user input)",
  clock:       "Top-left clock readout. Click the zone label to flip UTC ⇄ local. ⏱ reveals time-warp controls.",
  data:        "Top-right panel — every live data layer with its source, freshness, and refresh cadence. Click a source name to open the originating organisation's page.",
  location:    "Click anywhere on the globe (or flat map) to pin a spot and read its coordinates, place name (geocoded), and true solar time. The bottom-right panel shows the result.",
};

/**
 * Mutually-exclusive rows: turning one on turns the others off in the same row.
 * Click the active key a second time to turn the whole group off.
 *   - Overlay: pick one GFS scalar field to render (or none)
 *   - Clouds:  pick one cloud-source backend (or none = clouds hidden)
 */
const OVERLAY_KEYS: LayerKey[] = ["mslp", "temp", "rh", "tpw", "tcw"];
const CLOUD_KEYS:   LayerKey[] = ["cloudsViirs", "cloudsGfs", "cloudsGoes"];
const WIND_KEYS:    LayerKey[] = ["windSubtle", "windStandard", "windBold"];

const CATEGORIES: Array<{ label: string; keys: LayerKey[] }> = [
  {
    label: "Weather",
    keys: ["fires", "lightning", "hurricanes", "tracks", "aurora"],
  },
  {
    label: "Wind",
    keys: WIND_KEYS,
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
    keys: ["terminator", "atmosphere", "hands", "eclipse"],
    // "Find moon" appears at the end of this row as an action button (not a toggle).
    // See the actions block in the constructor.
  },
  {
    // Astro² — overflow row for additional astronomical display options. Today
    // it just holds the hi-res sky toggle; future homes for skybox-source
    // pickers, constellation lines, hour/ecliptic rings, analemma trace etc.
    label: "Astro²",
    keys: ["skyboxHi"],
  },
  {
    label: "View",
    keys: ["map", "orbit", "clock", "data", "location"],
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
  private findMoonHandler: (() => void) | null = null;
  private skyboxHiResHandler: ((hires: boolean) => void) | null = null;

  constructor(parent: HTMLElement, layers: MenuLayers, panels: MenuPanels = {}) {
    this.layers = layers;
    this.panels = panels;
    this.state = { ...resolveDefaults(), ...loadState() };
    this.open = loadOpen();

    injectStyles();

    const root = document.createElement("div");
    root.id = "orrery-ui";
    // Version badge sits next to the wordmark so a tester can quote it on bug reports
    // without opening DevTools. Sourced from package.json via Vite's `define` config so
    // the badge stays in lock-step with whatever was actually built.
    root.innerHTML = `
      <div class="orrery-brand-row">
        <span class="orrery-brand" id="orrery-brand" title="Click for options · weather layers · clock · location · eclipses">earth-clock</span>
        <span class="orrery-version" title="package.json version">v${APP_VERSION}</span>
      </div>
      <div class="orrery-menu${this.open ? "" : " collapsed"}" id="orrery-menu">
        <div id="orrery-menu-categories"></div>
        <p class="orrery-meta">
          <a href="/about/">about</a> · <a href="https://github.com/infantlab/earth-clock" target="_blank" rel="noopener">source</a>
        </p>
      </div>
    `;
    parent.appendChild(root);

    this.panel = root.querySelector("#orrery-menu") as HTMLElement;
    const brand = root.querySelector("#orrery-brand") as HTMLElement;
    brand.addEventListener("click", () => {
      this.toggleOpen();
      this.dismissOnboardingHint();
    });

    // First-visit onboarding hint — a small fading callout above the wordmark
    // that draws the user's eye to it. Only shown once; subsequent visits skip
    // it via the `orrery.onboarded.v1` localStorage flag. Dismisses immediately
    // if the user clicks the wordmark before the timeout (they discovered it).
    this.maybeShowOnboardingHint(root);

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

      // Astro row gets a "Find moon" action button at the end — non-toggling: clicking
      // fires the registered findMoon handler (camera reposition) and doesn't change any
      // persistent state. Lives in the menu, not the panel system, because it's a small
      // one-off and doesn't justify its own UI surface.
      if (cat.label === "Astro") {
        buttonsHost.appendChild(document.createTextNode(" · "));
        const btn = document.createElement("span");
        btn.className = "orrery-tb orrery-action";
        btn.textContent = "Find moon";
        btn.title = "Reposition the camera along the moon's direction so both Earth and moon sit in frame";
        btn.addEventListener("click", () => this.findMoonHandler?.());
        buttonsHost.appendChild(btn);
      }

      categoriesHost.appendChild(row);
    }

    this.applyAll();
  }

  /** Read by the animation loop to decide whether to render wind. True if any of the
   *  Wind row's mutex picker entries is active AND live data is in-range for the
   *  current simulated time (see setLiveFreshnessOk). */
  isWindVisible(): boolean {
    return this.activeWindIntensity() !== null && this.liveFreshnessOk;
  }

  /** Whether live-data layers are currently considered fresh enough to show at
   *  the user's simulated time. Default true; main.ts flips this when the user
   *  warps simulated time more than ±24 h from wall-clock now, so we hide live
   *  layers rather than render today's wind/clouds/aurora on a 2027 date.
   *  Affects wind, clouds, aurora, fires, hurricanes, tracks, lightning, and
   *  the MSLP/Temp/RH/TPW/TCW overlays. Astronomy + day/night + eclipse stay on. */
  private liveFreshnessOk = true;
  setLiveFreshnessOk(ok: boolean) {
    if (this.liveFreshnessOk === ok) return;
    this.liveFreshnessOk = ok;
    // Re-apply every layer so the gated ones flip visibility according to the
    // new freshness state. Cheap — apply() is just `mesh.visible = ...` per layer.
    this.applyAll();
  }

  /** Currently active wind intensity, or null if wind is hidden. */
  activeWindIntensity(): WindIntensityKey | null {
    for (const k of WIND_KEYS) if (this.state[k]) return k as WindIntensityKey;
    return null;
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

  /** Persisted hi-res skybox preference. main.ts reads this at startup to pick
   *  which equirectangular candidate Skybox.tryLoadSkybox should try first. */
  isSkyboxHiRes(): boolean {
    return this.state.skyboxHi;
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
   * Hook for the "Find moon" action button at the end of the Astro row. main.ts wires
   * this to the camera-reposition helper. Non-toggling — clicking just fires the
   * handler; nothing persists.
   */
  onFindMoon(fn: () => void) {
    this.findMoonHandler = fn;
  }

  /**
   * Hook for the Astro² "Hi-res sky" toggle. main.ts re-loads the skybox at the
   * requested quality and swaps `scene.background`. Fires only on user toggle —
   * not on initial applyAll() — so the boot path stays in charge of the first
   * load (it reads `isSkyboxHiRes()` once before kicking off tryLoadSkybox).
   */
  onSkyboxHiResChange(fn: (hires: boolean) => void) {
    this.skyboxHiResHandler = fn;
  }

  /**
   * Set a layer's on/off state programmatically (e.g. from the Debug "Use test data" button
   * which wants to force-show layers that the user may have turned off). The menu's button
   * highlight, internal state, and persisted localStorage entry all stay in sync.
   *
   * Mutex rows (overlay scalar fields, cloud sources) are honoured: turning one entry on
   * turns the others in the same row off, the same way an interactive click does. Without
   * this, the test-data handler could leave two cloud-source buttons highlighted at once.
   *
   * Doesn't fire `onOverlayChange` / `onCloudsChange` — those are reserved for user-driven
   * toggles. The caller is expected to handle data-side state themselves (the test-data
   * handler installs its fixture texture directly, for instance).
   *
   * Unknown keys are silently ignored.
   */
  setLayer(name: string, on: boolean) {
    if (!(name in DEFAULTS)) return;
    const key = name as LayerKey;
    if (this.state[key] === on) return;
    this.state[key] = on;

    if (on) {
      const mutexRow = OVERLAY_KEYS.includes(key) ? OVERLAY_KEYS
                    : CLOUD_KEYS.includes(key)    ? CLOUD_KEYS
                    : WIND_KEYS.includes(key)     ? WIND_KEYS
                    : null;
      if (mutexRow) {
        for (const other of mutexRow) {
          if (other !== key && this.state[other]) {
            this.state[other] = false;
            this.apply(other);
          }
        }
      }
    }

    this.apply(key);
    saveState(this.state);
  }

  private toggle(key: LayerKey) {
    const wasActive = this.state[key];
    this.state[key] = !wasActive;

    // Mutex rows: turning one entry on turns the others in the same row off. Used by
    // overlay (one scalar field at a time), clouds (one source backend at a time), and
    // wind (one intensity level at a time).
    const mutexRow = OVERLAY_KEYS.includes(key) ? OVERLAY_KEYS
                  : CLOUD_KEYS.includes(key)    ? CLOUD_KEYS
                  : WIND_KEYS.includes(key)     ? WIND_KEYS
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
    if (key === "skyboxHi") {
      this.skyboxHiResHandler?.(this.state.skyboxHi);
    }
  }

  private toggleOpen() {
    this.open = !this.open;
    this.panel.classList.toggle("collapsed", !this.open);
    saveOpen(this.open);
  }

  /**
   * Show a small one-time hint above the wordmark on a first visit, pointing
   * at the wordmark so newcomers realise it's clickable. Gated by the
   * `orrery.onboarded.v1` localStorage flag — never shown twice. Fade-in,
   * 5-second hold, fade-out; dismisses immediately if the user clicks the
   * wordmark in the meantime. All the styling is in CSS keyframes.
   */
  private onboardingHint: HTMLElement | null = null;
  private maybeShowOnboardingHint(root: HTMLElement) {
    if (loadOnboarded()) return;
    const hint = document.createElement("div");
    hint.className = "orrery-onboarding-hint";
    hint.innerHTML = `
      <span>Click <strong>earth-clock</strong> for layers · clock · location · eclipses</span>
      <span class="orrery-onboarding-arrow">↓</span>
    `;
    root.appendChild(hint);
    this.onboardingHint = hint;
    // Auto-dismiss after the animation completes — a single timer is enough
    // because the CSS animation handles the fade-in/out timing.
    setTimeout(() => this.dismissOnboardingHint(), 7000);
  }

  private dismissOnboardingHint() {
    if (!this.onboardingHint) return;
    this.onboardingHint.classList.add("orrery-onboarding-dismissed");
    saveOnboarded(true);
    // Let the fade-out finish before removing from the DOM.
    const hintRef = this.onboardingHint;
    this.onboardingHint = null;
    setTimeout(() => hintRef.remove(), 600);
  }

  private applyAll() {
    (Object.keys(LABELS) as LayerKey[]).forEach(k => this.apply(k));
  }

  private apply(key: LayerKey) {
    const on = this.state[key];
    const fresh = this.liveFreshnessOk;
    const { globe, atmosphere, coastlines, clouds, aurora, fires, hurricanes, hurricaneTracks, lightning, overlay, radiusVectors, eclipse, flatMap, trails } = this.layers;
    switch (key) {
      // Cloud source picker — visibility is "is any source active?" The actual texture/
      // scalar swap happens in main.ts via onCloudsChange. (CloudLayer doesn't know the
      // difference between sources — see CloudLayer.setTexture vs setScalarField.)
      case "cloudsViirs":
      case "cloudsGfs":
      case "cloudsGoes": {
        const cloudsOn = this.activeCloudSource() !== null && fresh;
        clouds.mesh.visible = cloudsOn;
        flatMap.setCloudsVisible(cloudsOn);
        break;
      }
      case "aurora":
        aurora.mesh.visible     = on && fresh;
        aurora.flatMesh.visible = on && fresh;
        break;
      case "fires":
        fires.mesh.visible     = on && fresh;
        fires.flatMesh.visible = on && fresh;
        break;
      case "hurricanes":
        hurricanes.mesh.visible     = on && fresh;
        hurricanes.flatMesh.visible = on && fresh;
        break;
      case "tracks":
        hurricaneTracks.mesh.visible     = on && fresh;
        hurricaneTracks.flatMesh.visible = on && fresh;
        break;
      case "eclipse":
        // Eclipse toggle drives BOTH the 3D EclipseLayer mesh and the top-left Eclipse
        // panel (catalogue browser + jump-to). The panel is the place users browse
        // events; the layer is the visual on the globe. Same toggle for both keeps
        // the two from drifting apart.
        eclipse.mesh.visible = on;
        this.panels.eclipse?.setVisible(on);
        break;
      case "lightning":
        lightning.mesh.visible     = on && fresh;
        lightning.flatMesh.visible = on && fresh;
        break;
      // The five overlay-row keys share one OverlayLayer; visibility is just "is any
      // overlay active?" (the data-swap happens in main.ts via onOverlayChange).
      case "mslp":
      case "temp":
      case "rh":
      case "tpw":
      case "tcw":
        overlay.mesh.visible = this.activeOverlay() !== null && fresh;
        break;
      case "coastlines":
        coastlines.mesh.visible     = on;
        coastlines.flatMesh.visible = on;
        break;
      case "atmosphere":  atmosphere.mesh.visible = on; break;
      case "hands":
        // Beams toggle controls the full beam system: the 3D sun beam, the 3D moon
        // beam, and the paired sun + moon dots on the flat map. As of v0.1.4 the
        // 3D moon mesh is always visible (no separate Moon toggle), so the moon
        // beam can be tied to Beams alone without needing a "does the moon exist"
        // gate. On the flat map the sun and moon dots are paired — both visible
        // with Beams on, both hidden with Beams off.
        radiusVectors.setSunBeamVisible(on);
        radiusVectors.setMoonBeamVisible(on);
        radiusVectors.setSunDotVisible(on);
        radiusVectors.setMoonDotVisible(on);
        break;
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
      // Wind row — mutex intensity picker. Each entry triggers a Trails.setIntensity()
      // call for whichever level is active; the animate loop separately gates
      // trails.step() via isWindVisible(). When none is active, isWindVisible() returns
      // false and the trail accumulator stops updating.
      case "windSubtle":
      case "windStandard":
      case "windBold": {
        const active = this.activeWindIntensity();
        if (active) trails.setIntensity(WIND_INTENSITY_LEVEL[active]);
        break;
      }
      case "skyboxHi":    /* consumed by main.ts via isSkyboxHiRes() / onSkyboxHiResChange() */ break;
      case "map":         /* consumed by main loop via isMapMode() — render swap */ break;
      case "orbit":       /* consumed by main loop via isAutoOrbit() → controls.autoRotate */ break;
      case "clock":       this.panels.clock?.setVisible(on); break;
      case "data":        this.panels.data?.setVisible(on); break;
      case "location":    this.panels.location?.setVisible(on); break;
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
/** First-visit onboarding flag — once set, the wordmark hint never shows again.
 *  Stored alongside the menu's other settings under the same key. */
function loadOnboarded(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? !!JSON.parse(raw).onboarded : false;
  } catch { return false; }
}
function saveOnboarded(o: boolean) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const blob = raw ? JSON.parse(raw) : {};
    blob.onboarded = o;
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
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 32px;
      letter-spacing: 0.08em;
      color: #c9d2e3;
      cursor: pointer;
      transition: color 125ms ease;
    }
    .orrery-brand:hover { color: #fff; }
    .orrery-version {
      font-size: 14px;
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
      /* Wide enough for "Geography" (the longest current label) to fit on one line
         without wrapping the trailing " | " separator onto a second line. */
      width: 6.5em;
      color: #6e7a90;
      white-space: nowrap;
    }
    .orrery-label::after { content: " | "; color: #3d4658; }
    .orrery-tb {
      color: #7c869a;
      cursor: pointer;
      transition: color 125ms ease;
    }
    .orrery-tb:hover { color: #fff; }
    .orrery-tb.highlighted { color: #e2b42e; }
    /* Action buttons (e.g. "Find moon") don't toggle a persistent state. Style them
       in a slightly cooler shade than regular toggles to hint that they're a different
       kind of thing, but still part of the same row. */
    .orrery-tb.orrery-action {
      color: #9ab8e6;
      font-style: italic;
    }
    .orrery-tb.orrery-action:hover { color: #cfe0ff; }
    .orrery-meta { color: #555c6b; margin-top: 6px !important; font-size: 12px; }
    .orrery-meta a { color: #7c869a; text-decoration: none; }
    .orrery-meta a:hover { color: #fff; }

    /* ── Mobile: full-width bottom sheet ── */
    @media (max-width: 600px) {
      #orrery-ui {
        left: 0; right: 0; bottom: 0;
        display: flex; flex-direction: column-reverse;
        /* column-reverse: first DOM child (brand-row) renders at bottom as the handle,
           second DOM child (menu) renders above it as the sheet content */
        padding-bottom: env(safe-area-inset-bottom);
      }
      .orrery-brand-row {
        background: rgba(5, 10, 30, 0.9);
        border-top: 1px solid rgba(255,255,255,0.1);
        padding: 0;
        gap: 0;
        justify-content: center;
        pointer-events: all;
      }
      .orrery-brand {
        font-size: 18px; padding: 14px 20px;
        background: transparent; border-radius: 0;
        flex: 1; text-align: center;
      }
      .orrery-version {
        font-size: 10px; opacity: 0.45;
        margin-left: auto; padding-right: 14px;
        align-self: center;
      }
      .orrery-menu {
        max-width: none; margin-top: 0;
        border-radius: 12px 12px 0 0;
        padding-left: 0; padding-right: 0;
        max-height: 65vh;
      }
      .orrery-menu.collapsed {
        max-height: 0; margin-top: 0;
      }
      .orrery-menu p {
        min-height: 48px; display: flex; align-items: center;
        margin: 0; padding: 0 16px;
        border-bottom: 1px solid rgba(255,255,255,0.04);
      }
      .orrery-meta {
        margin-top: 0 !important; font-size: 11px;
      }
      /* Larger tap targets for toggle buttons */
      .orrery-tb {
        display: inline-flex; align-items: center;
        min-height: 44px; padding: 0 4px;
      }
    }

    /* First-visit onboarding hint — small amber callout above the wordmark.
       Fades in over 500 ms, holds for ~5 s, fades out over 500 ms. The
       wordmark's own click handler dismisses it early if the user discovers
       it on their own. Only shown once per browser via the orrery.onboarded
       localStorage flag. */
    .orrery-onboarding-hint {
      pointer-events: none;
      position: absolute;
      bottom: 84px; left: 16px;
      background: rgba(226, 180, 46, 0.95);
      color: #050a1e;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 13px;
      letter-spacing: 0.02em;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      max-width: 320px;
      animation: orrery-onboarding-cycle 7s ease-in-out forwards;
      z-index: 11;
    }
    .orrery-onboarding-hint strong { font-weight: 600; }
    .orrery-onboarding-arrow {
      font-size: 18px;
      line-height: 1;
      animation: orrery-onboarding-bounce 1.2s ease-in-out infinite;
    }
    .orrery-onboarding-hint.orrery-onboarding-dismissed {
      animation: orrery-onboarding-fadeout 500ms ease-in forwards;
    }
    @keyframes orrery-onboarding-cycle {
      0%   { opacity: 0; transform: translateY(8px); }
      8%   { opacity: 1; transform: translateY(0); }
      90%  { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-4px); }
    }
    @keyframes orrery-onboarding-fadeout {
      from { opacity: 1; }
      to   { opacity: 0; transform: translateY(-4px); }
    }
    @media (max-width: 600px) {
      .orrery-onboarding-hint { display: none; }
    }
    @keyframes orrery-onboarding-bounce {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(4px); }
    }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
