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
  private readonly placeEl: HTMLElement;
  private readonly coordsEl: HTMLElement;
  private readonly solarEl: HTMLElement;
  private readonly hintEl: HTMLElement;
  private readonly detailEl: HTMLElement;
  private readonly geoButton: HTMLButtonElement;
  private readonly geoStatus: HTMLElement;
  private lat: number | null = null;
  private lon: number | null = null;
  private clearHandler: (() => void) | null = null;
  private geoHandler: ((lat: number, lon: number) => void) | null = null;

  constructor(parent: HTMLElement) {
    injectStyles();

    const geoAvailable = typeof navigator !== "undefined" && "geolocation" in navigator;

    this.root = document.createElement("div");
    this.root.id = "orrery-location";
    this.root.classList.add("hidden");
    this.root.innerHTML = `
      <div class="orrery-loc-row">
        <span class="orrery-loc-title">location</span>
        <span class="orrery-loc-clear" id="orrery-loc-clear" title="Close panel">✕</span>
      </div>
      <div class="orrery-loc-hint" id="orrery-loc-hint">
        click the globe to drop a pin
        ${geoAvailable ? `
          <div class="orrery-loc-or">— or —</div>
          <button class="orrery-loc-geo" id="orrery-loc-geo">use my location</button>
          <div class="orrery-loc-geostatus" id="orrery-loc-geostatus"></div>
        ` : ""}
      </div>
      <div class="orrery-loc-detail" id="orrery-loc-detail" style="display:none">
        <div><span class="orrery-loc-label">place</span>  <span id="orrery-loc-place">—</span></div>
        <div><span class="orrery-loc-label">coords</span> <span id="orrery-loc-coords">—</span></div>
        <div><span class="orrery-loc-label">solar</span>  <span id="orrery-loc-solar">—</span></div>
      </div>
    `;
    parent.appendChild(this.root);

    this.placeEl  = this.root.querySelector("#orrery-loc-place")  as HTMLElement;
    this.coordsEl = this.root.querySelector("#orrery-loc-coords") as HTMLElement;
    this.solarEl  = this.root.querySelector("#orrery-loc-solar")  as HTMLElement;
    this.hintEl   = this.root.querySelector("#orrery-loc-hint")   as HTMLElement;
    this.detailEl = this.root.querySelector("#orrery-loc-detail") as HTMLElement;
    this.geoButton = this.root.querySelector("#orrery-loc-geo")       as HTMLButtonElement;
    this.geoStatus = this.root.querySelector("#orrery-loc-geostatus") as HTMLElement;
    const clearEl = this.root.querySelector("#orrery-loc-clear")  as HTMLElement;
    clearEl.addEventListener("click", () => this.clearHandler?.());

    if (this.geoButton) {
      this.geoButton.addEventListener("click", () => this.requestGeolocation());
    }
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
  }

  /** Called by main.ts when the user clicks a location. */
  setLocation(latDeg: number, lonDeg: number) {
    this.lat = latDeg;
    this.lon = lonDeg;
    this.hintEl.style.display   = "none";
    this.detailEl.style.display = "block";
    this.coordsEl.textContent = `${fmtLat(latDeg)}, ${fmtLon(lonDeg)}`;
    this.placeEl.textContent  = "looking up…";
  }

  /** Update the place-name line. Pass null to show "—" (geocoder threw or rate-limited). */
  setPlaceName(name: string | null) {
    this.placeEl.textContent = name ?? "—";
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

  /** Hook for the "use my location" button. Called with (lat, lon) from the browser API. */
  onGeolocate(fn: (lat: number, lon: number) => void) {
    this.geoHandler = fn;
  }

  /** Reset to the "click the globe" hint state — used by main.ts after onClear. */
  reset() {
    this.lat = this.lon = null;
    this.hintEl.style.display   = "block";
    this.detailEl.style.display = "none";
    if (this.geoStatus) this.geoStatus.textContent = "";
  }

  private requestGeolocation() {
    if (!navigator.geolocation) return;
    this.geoButton.disabled = true;
    this.geoStatus.textContent = "asking browser…";
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.geoButton.disabled = false;
        this.geoStatus.textContent = "";
        this.geoHandler?.(pos.coords.latitude, pos.coords.longitude);
      },
      (err) => {
        this.geoButton.disabled = false;
        this.geoStatus.textContent = err.code === err.PERMISSION_DENIED
          ? "permission denied"
          : err.code === err.POSITION_UNAVAILABLE
          ? "position unavailable"
          : err.code === err.TIMEOUT
          ? "timed out"
          : "unavailable";
      },
      { enableHighAccuracy: false, timeout: 10_000, maximumAge: 5 * 60 * 1000 },
    );
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
    /* Sits below the top-left Clock (32 px time + 12 px meta + padding ≈ 80 px tall) so
       both can occupy the top-left column without overlap. If the user disables Clock
       there's a small gap above this panel — acceptable for a v1; a future layout pass
       can put both into a shared flex column. */
    #orrery-location {
      position: fixed; top: 96px; left: 16px;
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
    .orrery-loc-or     {
      color: #555c6b; text-align: center; font-size: 11px;
      margin: 6px 0 4px 0; letter-spacing: 0.06em;
    }
    .orrery-loc-geo {
      display: block; width: 100%;
      background: rgba(255,255,255,0.06);
      color: #cfd6e4;
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 4px; padding: 5px 8px;
      font-family: inherit; font-size: 12px;
      cursor: pointer;
      transition: background 125ms ease, color 125ms ease;
    }
    .orrery-loc-geo:hover    { background: rgba(255,255,255,0.12); color: #fff; }
    .orrery-loc-geo:disabled { opacity: 0.5; cursor: progress; }
    .orrery-loc-geostatus {
      color: #8a93a7; font-size: 11px; margin-top: 4px; min-height: 1em;
    }
    .orrery-loc-label  { color: #6e7a90; display: inline-block; width: 4em; }
    .orrery-loc-detail { color: #cfd6e4; }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
