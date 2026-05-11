/**
 * Top-left floating panel showing details about a pinned location.
 *
 * v1 shows: coordinates (lat / lon), and local solar time at the pinned longitude.
 * v2 plan: wind speed/direction from the GFS grid, distance to nearest fire/storm.
 *
 * Visibility is controlled by the menu's "Location" toggle. When the user clicks the
 * canvas with Location enabled, main.ts updates the pin and calls `setLocation()` here.
 */
export class LocationPanel {
  private readonly root: HTMLElement;
  private readonly coordsEl: HTMLElement;
  private readonly solarEl: HTMLElement;
  private lat: number | null = null;
  private lon: number | null = null;
  private clearHandler: (() => void) | null = null;

  constructor(parent: HTMLElement) {
    injectStyles();

    this.root = document.createElement("div");
    this.root.id = "orrery-location";
    this.root.classList.add("hidden");
    this.root.innerHTML = `
      <div class="orrery-loc-row">
        <span class="orrery-loc-title">location</span>
        <span class="orrery-loc-clear" id="orrery-loc-clear" title="Clear pin">✕</span>
      </div>
      <div class="orrery-loc-hint" id="orrery-loc-hint">click the globe to drop a pin</div>
      <div class="orrery-loc-detail" id="orrery-loc-detail" style="display:none">
        <div><span class="orrery-loc-label">coords</span> <span id="orrery-loc-coords">—</span></div>
        <div><span class="orrery-loc-label">solar</span>  <span id="orrery-loc-solar">—</span></div>
      </div>
    `;
    parent.appendChild(this.root);

    this.coordsEl = this.root.querySelector("#orrery-loc-coords") as HTMLElement;
    this.solarEl  = this.root.querySelector("#orrery-loc-solar")  as HTMLElement;
    const clearEl = this.root.querySelector("#orrery-loc-clear")  as HTMLElement;
    clearEl.addEventListener("click", () => this.clearHandler?.());
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
  }

  /** Called by main.ts when the user clicks a location. */
  setLocation(latDeg: number, lonDeg: number) {
    this.lat = latDeg;
    this.lon = lonDeg;
    (this.root.querySelector("#orrery-loc-hint")   as HTMLElement).style.display = "none";
    (this.root.querySelector("#orrery-loc-detail") as HTMLElement).style.display = "block";
    this.coordsEl.textContent = `${fmtLat(latDeg)}, ${fmtLon(lonDeg)}`;
  }

  /**
   * Update the "solar time at pin" string. Called from the animate loop; throttled internally
   * via cached string comparison. Solar time = UTC + longitude / 15 (degrees per hour).
   */
  setNow(now: Date) {
    if (this.lat === null || this.lon === null) return;
    const solarHours = (now.getUTCHours()
      + now.getUTCMinutes() / 60
      + now.getUTCSeconds() / 3600
      + this.lon / 15
      + 24) % 24;
    const h = Math.floor(solarHours);
    const m = Math.floor((solarHours - h) * 60);
    const s = Math.floor((((solarHours - h) * 60) - m) * 60);
    const next = `${pad(h)}:${pad(m)}:${pad(s)} solar`;
    if (this.solarEl.textContent !== next) this.solarEl.textContent = next;
  }

  /** Hook for the ✕ button. main.ts wires this to hide the pin + reset the panel state. */
  onClear(fn: () => void) {
    this.clearHandler = fn;
  }

  /** Reset to the "click the globe" hint state — used by main.ts after onClear. */
  reset() {
    this.lat = this.lon = null;
    (this.root.querySelector("#orrery-loc-hint")   as HTMLElement).style.display = "block";
    (this.root.querySelector("#orrery-loc-detail") as HTMLElement).style.display = "none";
  }
}

function pad(n: number): string { return n < 10 ? `0${n}` : `${n}`; }

function fmtLat(d: number): string {
  const v = Math.abs(d);
  return `${v.toFixed(2)}°${d >= 0 ? "N" : "S"}`;
}
function fmtLon(d: number): string {
  const v = Math.abs(d);
  return `${v.toFixed(2)}°${d >= 0 ? "E" : "W"}`;
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    #orrery-location {
      position: fixed; top: 16px; left: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.6;
      padding: 10px 14px; border-radius: 6px;
      min-width: 220px;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-location.hidden { display: none; }
    .orrery-loc-row {
      display: flex; justify-content: space-between; align-items: baseline;
    }
    .orrery-loc-title {
      color: #6e7a90; letter-spacing: 0.1em;
      text-transform: uppercase;
      font-size: 11px;
      margin-bottom: 4px;
    }
    .orrery-loc-clear {
      color: #6e7a90;
      cursor: pointer;
      transition: color 125ms ease;
      margin-left: 1em;
    }
    .orrery-loc-clear:hover { color: #ff7a7a; }
    .orrery-loc-hint   { color: #8a93a7; font-size: 12px; }
    .orrery-loc-label  { color: #6e7a90; display: inline-block; width: 4em; }
    .orrery-loc-detail { color: #cfd6e4; }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
