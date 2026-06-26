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

/** Callbacks the panel calls when the user drives the scrub controls.
 *  main.ts wires these to `simulatedTime` + `__orreryTimeWarp`. */
export interface SunDiscCallbacks {
  /** User dragged the slider to a specific UTC instant. Drag-while-paused;
   *  caller should set `simulatedTime = t` and warp = 0. */
  onScrubTo?: (utcMs: number) => void;
  /** User pressed ⏪ (rewind) or ⏩ (fast-forward). Argument is the delta in
   *  milliseconds — caller adds it to `simulatedTime`. Negative for REV. */
  onStep?: (deltaMs: number) => void;
  /** User pressed ⏸/▶. Caller toggles warp between 0 and the last live speed. */
  onPlayPause?: () => void;
}

/** How far ⏪ / ⏩ step `simulatedTime` per click. 30 seconds gives ~5 frames
 *  of advance in a typical eclipse — small enough to inspect a contact moment,
 *  big enough to make progress walking through the window manually. */
const STEP_MS = 30_000;
/** Margin around the eclipse window that's reachable via the scrub bar.
 *  ±5 minutes gives the user a "before" and "after" view of the event. */
const SCRUB_WINDOW_MARGIN_MS = 5 * 60_000;

export class SunDiscPanel {
  private readonly root: HTMLElement;
  private readonly moonCircle: SVGCircleElement;
  private readonly magnitudeEl: HTMLElement;
  private readonly statusEl: HTMLElement;
  private readonly placeEl: HTMLElement;
  private readonly labelEl: HTMLElement;
  private readonly solarSvg: SVGElement;
  private readonly lunarSvg: SVGElement;
  private readonly moonBloodCircle: SVGCircleElement;
  private readonly scrubRoot: HTMLElement;
  private readonly scrubInput: HTMLInputElement;
  private readonly scrubMarker: HTMLElement;
  private readonly scrubRelEl: HTMLElement;
  private readonly playBtn: HTMLElement;
  private readonly callbacks: SunDiscCallbacks;

  private lastMagnitudeStr = "";
  private lastStatusStr = "";
  private lastMoonR = -1;
  private lastMoonX = NaN;
  private lastMoonY = NaN;
  private lastRelStr = "";
  private lastPauseLabel = "";
  private lastBloodOpacity = -1;
  private mode: "solar" | "lunar" = "solar";

  /** Eclipse window the slider is currently mapped to. Slider input value is
   *  ms since `scrubStartMs`, clamped to `[0, scrubEndMs - scrubStartMs]`. */
  private scrubStartMs = 0;
  private scrubEndMs   = 0;
  private scrubPeakMs  = 0;
  /** True while the user is actively dragging the slider — used to suppress
   *  the per-frame `setSimulatedTime` update so we don't fight the user's drag. */
  private isDragging = false;

  constructor(parent: HTMLElement, callbacks: SunDiscCallbacks = {}) {
    injectStyles();
    this.callbacks = callbacks;

    this.root = document.createElement("div");
    this.root.id = "orrery-sundisc";
    this.root.classList.add("hidden");
    // Layout (top → bottom): place name, SVG sun+moon disc, magnitude readout,
    // then (only when a catalogued eclipse is loaded) the scrub bar + REV/play/FF.
    // SVG viewBox is centred at origin so the sun lives at (0, 0) by default
    // and moon offsets are simple positive/negative coordinates.
    const half = SUN_PX * 1.8;  // give the moon room to wander outside the sun's disc
    this.root.innerHTML = `
      <div class="orrery-sundisc-title">
        <span class="orrery-sundisc-label" id="orrery-sundisc-label">sky from</span>
        <span class="orrery-sundisc-place" id="orrery-sundisc-place">—</span>
      </div>
      <!-- Solar view: sun's gold disc + moon's dark disc at observer-view offset. -->
      <svg id="orrery-sundisc-svg-solar" viewBox="${-half} ${-half} ${2 * half} ${2 * half}" width="${2 * half}" height="${2 * half}">
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
      <!-- Lunar view: moon's disc dimming + tinting toward copper as Earth's
           shadow deepens. Two stacked circles (gray base + copper overlay
           cross-fading on fraction) mirror the same trick the 3D Moon mesh
           uses with emissive intensity + tint. -->
      <svg id="orrery-sundisc-svg-lunar" class="hidden" viewBox="${-half} ${-half} ${2 * half} ${2 * half}" width="${2 * half}" height="${2 * half}">
        <defs>
          <radialGradient id="orrery-sundisc-moongrad" cx="48%" cy="42%" r="55%">
            <stop offset="0%"  stop-color="#e8e2d6"/>
            <stop offset="70%" stop-color="#aea69a"/>
            <stop offset="100%" stop-color="#6b6457"/>
          </radialGradient>
          <radialGradient id="orrery-sundisc-bloodgrad" cx="48%" cy="42%" r="55%">
            <stop offset="0%"  stop-color="#a83820"/>
            <stop offset="100%" stop-color="#5a1808"/>
          </radialGradient>
        </defs>
        <circle id="orrery-sundisc-moondisc-base"   cx="0" cy="0" r="${SUN_PX}" fill="url(#orrery-sundisc-moongrad)"/>
        <circle id="orrery-sundisc-moondisc-blood"  cx="0" cy="0" r="${SUN_PX}" fill="url(#orrery-sundisc-bloodgrad)" opacity="0"/>
      </svg>
      <div class="orrery-sundisc-readout">
        <span class="orrery-sundisc-magnitude" id="orrery-sundisc-mag">—</span>
        <span class="orrery-sundisc-status" id="orrery-sundisc-status">—</span>
      </div>
      <div class="orrery-sundisc-scrub hidden" id="orrery-sundisc-scrub">
        <div class="orrery-sundisc-scrub-bar">
          <div class="orrery-sundisc-scrub-marker" id="orrery-sundisc-scrub-marker" title="Greatest eclipse"></div>
          <input type="range" min="0" max="1000" value="0" step="1"
                 class="orrery-sundisc-scrub-input" id="orrery-sundisc-scrub-input"
                 title="Drag to scrub through the eclipse window"/>
        </div>
        <div class="orrery-sundisc-scrub-labels">
          <span>U1</span>
          <span id="orrery-sundisc-scrub-rel">T+0:00</span>
          <span>U4</span>
        </div>
        <div class="orrery-sundisc-scrub-controls">
          <button class="orrery-sundisc-scrub-btn" id="orrery-sundisc-rev"  title="Step 30 s earlier">⏪</button>
          <button class="orrery-sundisc-scrub-btn" id="orrery-sundisc-play" title="Pause / play">⏸</button>
          <button class="orrery-sundisc-scrub-btn" id="orrery-sundisc-ff"   title="Step 30 s later">⏩</button>
        </div>
      </div>
    `;
    parent.appendChild(this.root);

    this.moonCircle  = this.root.querySelector("#orrery-sundisc-moon") as unknown as SVGCircleElement;
    this.magnitudeEl = this.root.querySelector("#orrery-sundisc-mag") as HTMLElement;
    this.statusEl    = this.root.querySelector("#orrery-sundisc-status") as HTMLElement;
    this.placeEl     = this.root.querySelector("#orrery-sundisc-place") as HTMLElement;
    this.labelEl     = this.root.querySelector("#orrery-sundisc-label") as HTMLElement;
    this.solarSvg    = this.root.querySelector("#orrery-sundisc-svg-solar")        as unknown as SVGElement;
    this.lunarSvg    = this.root.querySelector("#orrery-sundisc-svg-lunar")        as unknown as SVGElement;
    this.moonBloodCircle = this.root.querySelector("#orrery-sundisc-moondisc-blood") as unknown as SVGCircleElement;
    this.scrubRoot   = this.root.querySelector("#orrery-sundisc-scrub")        as HTMLElement;
    this.scrubInput  = this.root.querySelector("#orrery-sundisc-scrub-input")  as HTMLInputElement;
    this.scrubMarker = this.root.querySelector("#orrery-sundisc-scrub-marker") as HTMLElement;
    this.scrubRelEl  = this.root.querySelector("#orrery-sundisc-scrub-rel")    as HTMLElement;
    this.playBtn     = this.root.querySelector("#orrery-sundisc-play")         as HTMLElement;

    // Scrub-bar drag: while the pointer is down on the slider, we own
    // simulatedTime — main.ts's per-frame setSimulatedTime gets suppressed via
    // isDragging. The slider's `input` event fires continuously through the
    // drag; we forward each new value to onScrubTo. Pointerup releases.
    this.scrubInput.addEventListener("pointerdown", () => { this.isDragging = true; });
    // Cover the case where the user releases outside the slider element.
    window.addEventListener("pointerup",   () => { this.isDragging = false; });
    window.addEventListener("pointercancel", () => { this.isDragging = false; });
    this.scrubInput.addEventListener("input", () => {
      const ms = this.scrubStartMs + this.scrubInput.valueAsNumber;
      this.callbacks.onScrubTo?.(ms);
    });

    (this.root.querySelector("#orrery-sundisc-rev")  as HTMLElement).addEventListener("click", () => {
      this.callbacks.onStep?.(-STEP_MS);
    });
    (this.root.querySelector("#orrery-sundisc-ff")   as HTMLElement).addEventListener("click", () => {
      this.callbacks.onStep?.(STEP_MS);
    });
    this.playBtn.addEventListener("click", () => { this.callbacks.onPlayPause?.(); });
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
  }

  /** Show / hide the scrub bar + REV/play/FF row. main.ts shows this when an
   *  eclipse is loaded; hides when not. The SVG + readout above stay independent
   *  of this (easter-egg mode shows the geometry without playback controls). */
  setScrubControlsVisible(visible: boolean) {
    this.scrubRoot.classList.toggle("hidden", !visible);
  }

  /**
   * Switch between solar (sun + moon discs from observer perspective) and lunar
   * (moon disc dimming + tinting toward copper as Earth's shadow deepens)
   * views. Triggered by the EclipsePanel's tab change.
   *
   * The title label flips too: *"sky from"* (observer-perspective for a solar
   * eclipse) → *"the moon"* (no observer needed for lunar — the same moon is
   * visible from the entire night side).
   */
  setMode(mode: "solar" | "lunar") {
    if (this.mode === mode) return;
    this.mode = mode;
    this.solarSvg.classList.toggle("hidden", mode !== "solar");
    this.lunarSvg.classList.toggle("hidden", mode !== "lunar");
    this.labelEl.textContent = mode === "lunar" ? "the moon" : "sky from";
    // Lunar mode doesn't show a location-name (no observer view); blank it
    // out so the title row doesn't read "the moon —". main.ts can override
    // with `setPlaceName` if it wants per-event copy here.
    if (mode === "lunar") this.placeEl.textContent = "";
  }

  /**
   * Drive the lunar moon-disc dimming/tint. `fraction` is the same 0→1 curve
   * used by `Moon.setEclipseShadow` (see lunarEclipseFraction): 0 = no eclipse,
   * 1 = greatest. We cross-fade the copper "blood moon" overlay circle onto
   * the base gray moon circle with the same fraction. No-op when mode isn't
   * lunar so callers don't have to gate.
   */
  setLunarFraction(fraction: number) {
    if (this.mode !== "lunar") return;
    const f = Math.max(0, Math.min(1, fraction));
    if (f !== this.lastBloodOpacity) {
      this.moonBloodCircle.setAttribute("opacity", f.toFixed(3));
      this.lastBloodOpacity = f;
    }
  }

  /**
   * Update the magnitude / status readout for a lunar eclipse — solar mode has
   * its own readout pipeline driven by `update(view)`. Pass the event's umbral
   * magnitude + a short status string ("approaching" / "totality" / etc.) and
   * we'll surface them in the same two-line readout slot the solar view uses.
   */
  setLunarReadout(magnitudeStr: string, statusStr: string) {
    if (magnitudeStr !== this.lastMagnitudeStr) {
      this.magnitudeEl.textContent = magnitudeStr;
      this.lastMagnitudeStr = magnitudeStr;
    }
    if (statusStr !== this.lastStatusStr) {
      this.statusEl.textContent = statusStr;
      this.lastStatusStr = statusStr;
    }
  }

  /**
   * Configure the scrub bar's mapping to an eclipse window. Called by main.ts
   * after `loadEclipse` so the slider's [min, max] correspond to U1−5m to U4+5m
   * and the greatest-eclipse marker sits at the right fraction along the track.
   */
  setEclipseWindow(startUtc: Date, endUtc: Date, peakUtc: Date) {
    this.scrubStartMs = startUtc.getTime() - SCRUB_WINDOW_MARGIN_MS;
    this.scrubEndMs   = endUtc.getTime()   + SCRUB_WINDOW_MARGIN_MS;
    this.scrubPeakMs  = peakUtc.getTime();
    const totalMs = this.scrubEndMs - this.scrubStartMs;
    this.scrubInput.max = String(totalMs);
    const peakFrac = (this.scrubPeakMs - this.scrubStartMs) / totalMs;
    this.scrubMarker.style.left = `${(peakFrac * 100).toFixed(2)}%`;
  }

  /**
   * Pull the slider position into sync with the current simulatedTime, and
   * update the "T+/-MM:SS" label (relative to greatest eclipse). Skipped while
   * the user is mid-drag so we don't fight their input. Called every frame
   * from main.ts.
   */
  setSimulatedTime(simulatedMs: number) {
    if (this.isDragging) return;
    if (this.scrubEndMs <= this.scrubStartMs) return; // not configured yet
    const clamped = Math.max(this.scrubStartMs, Math.min(this.scrubEndMs, simulatedMs));
    this.scrubInput.valueAsNumber = clamped - this.scrubStartMs;

    // Relative-time readout: signed minutes:seconds from greatest. Negative
    // means before greatest (running up to totality), positive means after.
    const deltaSec = Math.round((simulatedMs - this.scrubPeakMs) / 1000);
    const sign = deltaSec < 0 ? "−" : "+";
    const abs = Math.abs(deltaSec);
    const mm = Math.floor(abs / 60);
    const ss = abs % 60;
    const relStr = `T${sign}${mm}:${ss.toString().padStart(2, "0")}`;
    if (relStr !== this.lastRelStr) {
      this.scrubRelEl.textContent = relStr;
      this.lastRelStr = relStr;
    }
  }

  /** Toggle the play-button icon between ⏸ (running) and ▶ (paused). Called
   *  by main.ts whenever the warp value crosses 0 / non-zero. */
  setPlaying(isPlaying: boolean) {
    const label = isPlaying ? "⏸" : "▶";
    if (label !== this.lastPauseLabel) {
      this.playBtn.textContent = label;
      this.playBtn.title = isPlaying ? "Pause" : "Resume";
      this.lastPauseLabel = label;
    }
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
  // Position: top-left column, directly beneath the Clock. The sun-disc inset
  // is the focal panel during eclipse playback — observer-perspective visual +
  // scrub controls — so it sits next to the Clock (the other "current moment"
  // surface). The EclipsePanel catalogue browser moves to the top-right.
  const css = `
    #orrery-sundisc {
      position: fixed; top: 96px; left: 16px;
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
    /* Both the solar and lunar SVG views share layout. Background tint subtly
       hints at the body being shown — warm for sun, cool for moon. */
    #orrery-sundisc-svg-solar, #orrery-sundisc-svg-lunar {
      display: block;
      margin: 4px auto;
      border-radius: 4px;
    }
    /* Solar background sits on a flat slate-blue base so the moon's near-black
       silhouette has contrast against it (otherwise the moon's unilluminated
       limb vanishes into the panel's dark chrome). Warm radial overlay still
       hints at the sun's halo where it pokes out from behind the moon. */
    #orrery-sundisc-svg-solar {
      background:
        radial-gradient(circle at center, rgba(255, 200, 100, 0.08), transparent 60%),
        rgba(70, 80, 100, 0.45);
    }
    #orrery-sundisc-svg-lunar { background: radial-gradient(circle at center, rgba(180, 200, 240, 0.04), transparent 60%); }
    #orrery-sundisc-svg-solar.hidden, #orrery-sundisc-svg-lunar.hidden { display: none; }
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
    /* Scrub block (visible only when a catalogued eclipse is loaded). Native
       <input type="range"> for the slider so dragging + keyboard arrow keys
       come for free. Greatest-eclipse marker absolutely-positioned over the
       track. Three video-style buttons below. */
    .orrery-sundisc-scrub {
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }
    .orrery-sundisc-scrub.hidden { display: none; }
    .orrery-sundisc-scrub-bar {
      position: relative;
      padding: 6px 0;
    }
    .orrery-sundisc-scrub-input {
      width: 100%;
      margin: 0;
      accent-color: #e2b42e;
      cursor: pointer;
      background: transparent;
    }
    .orrery-sundisc-scrub-marker {
      position: absolute;
      top: 50%;
      width: 10px; height: 10px;
      transform: translate(-50%, -50%) rotate(45deg);
      background: #e2b42e;
      pointer-events: none;
      box-shadow: 0 0 6px rgba(226, 180, 46, 0.6);
      z-index: 0;
    }
    .orrery-sundisc-scrub-labels {
      display: flex; justify-content: space-between;
      font-size: 10px; color: #6e7a90;
      letter-spacing: 0.05em;
      margin-top: -2px;
    }
    #orrery-sundisc-scrub-rel { color: #cfd6e4; font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; }
    .orrery-sundisc-scrub-controls {
      display: flex; justify-content: center; gap: 8px;
      margin-top: 6px;
    }
    .orrery-sundisc-scrub-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #cfd6e4;
      font-size: 14px;
      width: 28px; height: 24px;
      border-radius: 4px;
      cursor: pointer;
      transition: background 125ms ease, color 125ms ease;
      padding: 0; line-height: 1;
    }
    .orrery-sundisc-scrub-btn:hover {
      background: rgba(226, 180, 46, 0.18);
      color: #fff;
    }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
