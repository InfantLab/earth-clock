/**
 * Top-left clock readout. Inherits the project's design intent — time is a physical fact
 * of Earth's orientation in space, so the display reads from the same `simulatedTime` clock
 * that drives the globe's rotation, which means time-warp shows up here visibly too.
 *
 * Click anywhere on the time area to toggle **UTC ⇄ Local (browser)**. Choice persists in
 * localStorage. The bottom row carries the current time-warp factor (1× hidden, anything
 * else shown in amber) with a single-click reset back to wall-clock pace.
 */
const STORAGE_KEY = "orrery.clock.v1";

type Zone = "utc" | "local";

export class Clock {
  private readonly root: HTMLElement;
  private readonly clickArea: HTMLElement;
  private readonly timeEl: HTMLElement;
  private readonly dateEl: HTMLElement;
  private readonly zoneEl: HTMLElement;
  private readonly warpEl: HTMLElement;
  private zone: Zone;
  private lastTimeStr = "";
  private lastDateStr = "";
  private lastZoneStr = "";
  private lastWarpStr = "";

  constructor(parent: HTMLElement) {
    injectStyles();
    this.zone = loadZone();

    this.root = document.createElement("div");
    this.root.id = "orrery-clock";
    this.root.innerHTML = `
      <div class="orrery-clock-click" id="orrery-clock-click" title="Click to toggle UTC ⇄ Local">
        <div class="orrery-clock-time" id="orrery-clock-time">--:--:--</div>
        <div class="orrery-clock-meta">
          <span class="orrery-clock-date" id="orrery-clock-date">—</span>
          <span class="orrery-clock-zone" id="orrery-clock-zone">UTC</span>
        </div>
      </div>
      <div class="orrery-clock-warp hidden" id="orrery-clock-warp" title="Time-warp factor — click to reset to real time"></div>
    `;
    parent.appendChild(this.root);

    this.clickArea = this.root.querySelector("#orrery-clock-click") as HTMLElement;
    this.timeEl    = this.root.querySelector("#orrery-clock-time")  as HTMLElement;
    this.dateEl    = this.root.querySelector("#orrery-clock-date")  as HTMLElement;
    this.zoneEl    = this.root.querySelector("#orrery-clock-zone")  as HTMLElement;
    this.warpEl    = this.root.querySelector("#orrery-clock-warp")  as HTMLElement;

    // Single click target covering the whole time block — the earlier "click the zone label"
    // affordance was too small / hard to discover.
    this.clickArea.addEventListener("click", () => {
      this.zone = this.zone === "utc" ? "local" : "utc";
      saveZone(this.zone);
      this.lastTimeStr = this.lastDateStr = this.lastZoneStr = "";
    });

    this.warpEl.addEventListener("click", () => {
      window.__orreryTimeWarp = 1;
    });
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
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

    // Time-warp readout: 1× hidden (no visual chrome when running at real time); any other
    // value shown in amber with a "reset" affordance. Called every frame but only writes
    // DOM when the rendered text changes.
    const warp = window.__orreryTimeWarp ?? 1;
    const warpStr = warp === 1 ? "" : `× ${formatWarp(warp)}  ↺ reset`;
    if (warpStr !== this.lastWarpStr) {
      this.warpEl.textContent = warpStr;
      this.warpEl.classList.toggle("hidden", warpStr === "");
      this.lastWarpStr = warpStr;
    }
  }
}

/** Display a warp factor compactly: integer if exact, otherwise 1-decimal. */
function formatWarp(w: number): string {
  if (w >= 1000) return `${(w / 1000).toFixed(1)}k`;
  if (Number.isInteger(w)) return String(w);
  return w.toFixed(1);
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
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ zone })); } catch { /* */ }
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
      transition: color 125ms ease;
    }
    .orrery-clock-warp {
      pointer-events: all;
      cursor: pointer;
      margin-top: 6px;
      font-size: 12px;
      color: #e2b42e;
      letter-spacing: 0.04em;
      transition: color 125ms ease;
    }
    .orrery-clock-warp.hidden { display: none; }
    .orrery-clock-warp:hover { color: #fff; }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
