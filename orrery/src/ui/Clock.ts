/**
 * Top-left clock readout. Inherits the project's design intent — time is a physical fact
 * of Earth's orientation in space, so the display reads from the same `simulatedTime` clock
 * that drives the globe's rotation, which means time-warp shows up here visibly too.
 *
 * Click anywhere on the time area to toggle **UTC ⇄ Local (browser)**. Choice persists in
 * localStorage.
 *
 * Time controls live behind a small ⏱ toggle so the default live-time experience has zero
 * extra chrome. When expanded, the user gets `⏪  ⏯  ⏩  ↺  × N` — slow down, pause/play,
 * speed up, reset to 1×. The amber "× N" indicator stays visible regardless of expand
 * state when warp ≠ 1 so the user can tell at a glance that time-travel is active.
 */
const STORAGE_KEY = "orrery.clock.v1";

/**
 * Speed presets the ⏪ / ⏩ buttons step through. Chosen to be *temporally meaningful* rather
 * than fixed multipliers — 60× = "minute per second", 1440× = "day per minute" etc. — so a
 * user can describe what they're seeing without having to multiply in their head. The ⏩
 * button finds the smallest preset above the current speed; ⏪ finds the largest below.
 * Console-set values that fall between presets are treated as the starting point.
 *
 * Symmetric around 0 so the ⏪ button at default 1× actually reverses time instead of
 * being a silent no-op (the animate loop's `simulatedTime += dtMs * warp` handles negative
 * warp naturally — Earth, sun, and moon all unwind). 0 is included as a pause stop on
 * the way between forward and reverse.
 */
const SPEED_PRESETS = [-86400, -1440, -60, -1, 0, 1, 60, 1440, 86400];
const WARP_PAUSE_DEFAULT = 60;  // value restored on play if there's no prior warp memory

type Zone = "utc" | "local";

export interface ClockCallbacks {
  /** Reset button hook: snap the simulated clock back to wall-clock now. main.ts owns
   *  `simulatedTime` so the Clock can't write to it directly. */
  onSnapToLive?: () => void;
  /** Close-button hook — main.ts wires this to flip the Clock menu toggle off. */
  onClose?: () => void;
}

export class Clock {
  private readonly root: HTMLElement;
  private readonly clickArea: HTMLElement;
  private readonly timeEl: HTMLElement;
  private readonly dateEl: HTMLElement;
  private readonly zoneEl: HTMLElement;
  private readonly expandBtn: HTMLElement;
  private readonly controlsEl: HTMLElement;
  private readonly warpReadoutEl: HTMLElement;
  private readonly pauseBtn: HTMLElement;
  private zone: Zone;
  private expanded: boolean;
  /** Warp value to restore on un-pause (the speed the user was at before hitting pause). */
  private warpBeforePause = WARP_PAUSE_DEFAULT;
  private lastTimeStr = "";
  private lastDateStr = "";
  private lastZoneStr = "";
  private lastWarpStr = "";
  private lastPauseLabel = "";

  private readonly callbacks: ClockCallbacks;

  constructor(parent: HTMLElement, callbacks: ClockCallbacks = {}) {
    injectStyles();
    this.callbacks = callbacks;
    this.zone = loadZone();
    this.expanded = loadExpanded();

    this.root = document.createElement("div");
    this.root.id = "orrery-clock";
    this.root.innerHTML = `
      <div class="orrery-clock-click" id="orrery-clock-click" title="Click to toggle UTC ⇄ Local">
        <div class="orrery-clock-time" id="orrery-clock-time">--:--:--</div>
        <div class="orrery-clock-meta">
          <span class="orrery-clock-date" id="orrery-clock-date">—</span>
          <span class="orrery-clock-zone" id="orrery-clock-zone">UTC</span>
          <span class="orrery-clock-expand" id="orrery-clock-expand" title="Time controls">⏱</span>
          <span class="orrery-clock-close" id="orrery-clock-close" title="Close clock">✕</span>
        </div>
      </div>
      <div class="orrery-clock-controls hidden" id="orrery-clock-controls">
        <button class="orrery-clock-btn" id="orrery-clock-slower" title="Step backward through speeds: 86400× / 1440× / 60× / 1× / 0 / -1× / -60× / -1440× / -86400× (negative speeds run time in reverse)">⏪</button>
        <button class="orrery-clock-btn" id="orrery-clock-pause"  title="Pause / play">⏸</button>
        <button class="orrery-clock-btn" id="orrery-clock-faster" title="Step forward through speeds: -86400× / -1440× / -60× / -1× / 0 / 1× / 60× / 1440× / 86400×">⏩</button>
        <button class="orrery-clock-btn" id="orrery-clock-reset"  title="Reset to real time — warp 1× and snap to now">↺</button>
        <span class="orrery-clock-warp" id="orrery-clock-warp">× 1</span>
      </div>
    `;
    parent.appendChild(this.root);

    this.clickArea     = this.root.querySelector("#orrery-clock-click")    as HTMLElement;
    this.timeEl        = this.root.querySelector("#orrery-clock-time")     as HTMLElement;
    this.dateEl        = this.root.querySelector("#orrery-clock-date")     as HTMLElement;
    this.zoneEl        = this.root.querySelector("#orrery-clock-zone")     as HTMLElement;
    this.expandBtn     = this.root.querySelector("#orrery-clock-expand")   as HTMLElement;
    this.controlsEl    = this.root.querySelector("#orrery-clock-controls") as HTMLElement;
    this.warpReadoutEl = this.root.querySelector("#orrery-clock-warp")     as HTMLElement;
    this.pauseBtn      = this.root.querySelector("#orrery-clock-pause")    as HTMLElement;

    // The whole time block (not just the zone label) toggles zone. Catch clicks on the
    // ⏱ icon or ✕ button so the click doesn't ALSO flip the zone — they live inside
    // the click area for layout, not for behaviour.
    const closeBtn = this.root.querySelector("#orrery-clock-close") as HTMLElement;
    this.clickArea.addEventListener("click", (ev) => {
      if (ev.target === this.expandBtn) return;
      if (ev.target === closeBtn) return;
      this.zone = this.zone === "utc" ? "local" : "utc";
      saveZone(this.zone);
      this.lastTimeStr = this.lastDateStr = this.lastZoneStr = "";
    });

    this.expandBtn.addEventListener("click", () => {
      this.expanded = !this.expanded;
      saveExpanded(this.expanded);
      this.refreshExpandState();
    });
    this.refreshExpandState();

    closeBtn.addEventListener("click", () => this.callbacks.onClose?.());

    // ⏪ / ⏩ walk through SPEED_PRESETS in either direction. The presets are symmetric
    // around 0, so ⏪ at 1× steps to 0 (pause), another ⏪ to -1× (real-time reverse), and
    // so on. Stepping through 0 also updates warpBeforePause so the pause/play button's
    // resume remembers the last live speed rather than a stale one.
    (this.root.querySelector("#orrery-clock-slower") as HTMLElement).addEventListener("click", () => {
      const cur = window.__orreryTimeWarp ?? 1;
      const next = prevPreset(cur);
      if (cur !== 0) this.warpBeforePause = cur;
      window.__orreryTimeWarp = next;
    });
    (this.root.querySelector("#orrery-clock-faster") as HTMLElement).addEventListener("click", () => {
      const cur = window.__orreryTimeWarp ?? 1;
      const next = nextPreset(cur);
      if (cur !== 0) this.warpBeforePause = cur;
      window.__orreryTimeWarp = next;
    });
    // ↺ resets *both* sides of the time state: warp back to 1× **and** simulatedTime back
    // to wall-clock now. Users described the older behaviour ("only resets warp; the
    // simulated clock stays in the past") as broken-feeling — naturally, since the panel
    // labels it "Reset to real time".
    (this.root.querySelector("#orrery-clock-reset") as HTMLElement).addEventListener("click", () => {
      window.__orreryTimeWarp = 1;
      this.callbacks.onSnapToLive?.();
    });
    this.pauseBtn.addEventListener("click", () => {
      const cur = window.__orreryTimeWarp ?? 1;
      if (cur === 0) {
        // Currently paused → resume at whatever speed we were running before.
        window.__orreryTimeWarp = this.warpBeforePause || 1;
      } else {
        // Running → remember current speed so play restores it, then freeze.
        this.warpBeforePause = cur;
        window.__orreryTimeWarp = 0;
      }
    });
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
  }

  private refreshExpandState() {
    this.controlsEl.classList.toggle("hidden", !this.expanded);
    this.expandBtn.classList.toggle("active",   this.expanded);
  }

  /**
   * Update the display. Called every frame from the animate loop; cached string comparison
   * keeps DOM writes to once per second when the rendered time changes.
   */
  setTime(now: Date) {
    let timeStr: string, dateStr: string, zoneStr: string;
    if (this.zone === "utc") {
      timeStr = `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}`;
      dateStr = `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(now.getUTCDate())}  ${dayName(now.getUTCDay())}`;
      zoneStr = "UTC";
    } else {
      timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
      dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}  ${dayName(now.getDay())}`;
      zoneStr = localZoneLabel(now);
    }
    if (timeStr !== this.lastTimeStr) { this.timeEl.textContent = timeStr; this.lastTimeStr = timeStr; }
    if (dateStr !== this.lastDateStr) { this.dateEl.textContent = dateStr; this.lastDateStr = dateStr; }
    if (zoneStr !== this.lastZoneStr) { this.zoneEl.textContent = zoneStr; this.lastZoneStr = zoneStr; }

    // Warp display. The readout is always inside the control panel (visible when expanded);
    // when collapsed we still want the user to see that time-travel is active, so the same
    // string also drives a class on the ⏱ icon (`active` → amber tint when warp ≠ 1).
    const warp = window.__orreryTimeWarp ?? 1;
    const warpStr = warp === 0 ? "paused" : `× ${formatWarp(warp)}`;
    if (warpStr !== this.lastWarpStr) {
      this.warpReadoutEl.textContent = warpStr;
      this.warpReadoutEl.classList.toggle("warped", warp !== 1);
      this.expandBtn.classList.toggle("warped", warp !== 1);
      this.lastWarpStr = warpStr;
    }
    const pauseLabel = warp === 0 ? "▶" : "⏸";
    if (pauseLabel !== this.lastPauseLabel) {
      this.pauseBtn.textContent = pauseLabel;
      this.pauseBtn.title = warp === 0 ? "Resume" : "Pause";
      this.lastPauseLabel = pauseLabel;
    }
  }
}

/** Display a warp factor compactly: integer if exact, otherwise 1-decimal. */
function formatWarp(w: number): string {
  if (Math.abs(w) >= 1000) return `${(w / 1000).toFixed(1)}k`;
  if (Number.isInteger(w)) return String(w);
  return w.toFixed(2).replace(/\.?0+$/, "");
}

/** Next preset >= current. Returns current if already at the top, so the button never
 *  becomes a no-op surprise. */
function nextPreset(cur: number): number {
  for (const p of SPEED_PRESETS) if (p > cur) return p;
  return SPEED_PRESETS[SPEED_PRESETS.length - 1];
}
/** Previous preset <= current. Returns current if already at the bottom. */
function prevPreset(cur: number): number {
  for (let i = SPEED_PRESETS.length - 1; i >= 0; i--) {
    if (SPEED_PRESETS[i] < cur) return SPEED_PRESETS[i];
  }
  return SPEED_PRESETS[0];
}

function pad(n: number): string { return n < 10 ? `0${n}` : `${n}`; }

function dayName(n: number): string {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n];
}

/**
 * Best-effort short label for the browser's local zone. Modern browsers expose IANA names
 * via Intl.DateTimeFormat().resolvedOptions().timeZone (e.g. "Europe/London"); we strip
 * the prefix for a tighter display.
 */
function localZoneLabel(_now: Date): string {
  try {
    const iana = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (iana && iana.includes("/")) return iana.split("/").slice(-1)[0]!.replace(/_/g, " ");
    return iana || "local";
  } catch {
    return "local";
  }
}

function loadZone(): Zone {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return "utc";
    const z = JSON.parse(raw).zone;
    return z === "local" ? "local" : "utc";
  } catch { return "utc"; }
}
function saveZone(zone: Zone) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const blob = raw ? JSON.parse(raw) : {};
    blob.zone = zone;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blob));
  } catch { /* */ }
}
function loadExpanded(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? !!JSON.parse(raw).expanded : false;
  } catch { return false; }
}
function saveExpanded(expanded: boolean) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const blob = raw ? JSON.parse(raw) : {};
    blob.expanded = expanded;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blob));
  } catch { /* */ }
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    #orrery-clock {
      position: fixed; top: 16px; left: 16px;
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      text-align: left;
      pointer-events: none;
      z-index: 9;
      user-select: none;
    }
    #orrery-clock.hidden { display: none; }
    .orrery-clock-click {
      pointer-events: all;
      cursor: pointer;
      transition: color 125ms ease;
    }
    .orrery-clock-click:hover .orrery-clock-zone { color: #fff; }
    .orrery-clock-time {
      font-size: 32px; line-height: 1;
      letter-spacing: 0.04em;
      text-shadow: 0 1px 4px rgba(0,0,0,0.6);
    }
    .orrery-clock-meta {
      font-size: 12px;
      color: #8a93a7;
      margin-top: 4px;
      letter-spacing: 0.04em;
    }
    .orrery-clock-date { margin-right: 0.8em; }
    .orrery-clock-zone {
      color: #7c869a;
      margin-right: 0.6em;
      transition: color 125ms ease;
    }
    /* ⏱ disclosure icon — same colour as the zone label by default so it doesn't crowd
       the readout; flips amber when time-warp is active so the user is alerted even
       when the controls row is collapsed. */
    .orrery-clock-expand {
      pointer-events: all;
      cursor: pointer;
      color: #6e7a90;
      font-size: 13px;
      transition: color 125ms ease;
    }
    .orrery-clock-expand:hover           { color: #fff; }
    .orrery-clock-expand.active          { color: #cfd6e4; }
    .orrery-clock-expand.warped          { color: #e2b42e; }

    /* Matches the close-X pattern from LocationPanel (✕ in panel top-right that
       flips the relevant menu toggle off). Subtle by default, red on hover. */
    .orrery-clock-close {
      pointer-events: all;
      cursor: pointer;
      color: #6e7a90;
      font-size: 13px;
      margin-left: 0.5em;
      transition: color 125ms ease;
    }
    .orrery-clock-close:hover { color: #ff7a7a; }

    .orrery-clock-controls {
      pointer-events: all;
      display: flex; align-items: center; gap: 6px;
      margin-top: 6px;
      font-size: 12px;
      letter-spacing: 0.04em;
    }
    .orrery-clock-controls.hidden { display: none; }
    .orrery-clock-btn {
      background: rgba(255,255,255,0.06);
      color: #cfd6e4;
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 4px;
      padding: 2px 7px;
      font-family: inherit; font-size: 13px;
      line-height: 1;
      cursor: pointer;
      transition: background 125ms ease, color 125ms ease;
    }
    .orrery-clock-btn:hover { background: rgba(255,255,255,0.14); color: #fff; }
    .orrery-clock-warp {
      margin-left: 4px;
      color: #6e7a90;
      transition: color 125ms ease;
    }
    .orrery-clock-warp.warped { color: #e2b42e; }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
