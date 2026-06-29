/**
 * Bottom-right floating panel for picking a location to pin on Earth.
 *
 * Three rows, all live, all clickable as destinations:
 *
 *   🟢 Current location — where the pin is right now: place name (reverse-geocoded),
 *      coordinates, and true solar time at the pinned longitude. Clicking the row
 *      itself is a no-op; the row is set via globe / map clicks or "use my location".
 *      Highlighted when the pin's source is click or geolocation.
 *
 *   ☀️  Sub-solar — live geographic point where the sun is currently overhead.
 *      Click to drop the pin there. Highlighted when the pin's source is the sun.
 *
 *   🌙 Sub-lunar — live geographic point where the moon is currently overhead.
 *      Click to drop the pin there. Highlighted when the pin's source is the moon.
 *
 * Plus a "use my location" button that pipes the browser geolocation API into the
 * pin (same flow as a globe click).
 *
 * Panel visibility is controlled by the menu's "Location" toggle; main.ts wires
 * the row callbacks. Sat in the top-left until v0.1.2; moved bottom-right then so
 * it stops overlapping the Eclipse panel.
 */
export type PinSource = "click" | "geolocation" | "sun" | "moon";

export class LocationPanel {
  private readonly root: HTMLElement;
  private readonly placeEl: HTMLElement;
  private readonly coordsEl: HTMLElement;
  private readonly localRowEl: HTMLElement;
  private readonly localEl: HTMLElement;
  private readonly solarEl: HTMLElement;
  private readonly currentRowEl: HTMLElement;
  private readonly sunRowEl: HTMLElement;
  private readonly moonRowEl: HTMLElement;
  private readonly sunCoordsEl: HTMLElement;
  private readonly moonCoordsEl: HTMLElement;
  private readonly geoButton: HTMLButtonElement | null;
  private readonly geoStatus: HTMLElement | null;
  private lat: number | null = null;
  private lon: number | null = null;
  private source: PinSource | null = null;
  private pinnedIanaName: string | null = null;
  private pinnedUtcOffset = 0;
  private clearHandler: (() => void) | null = null;
  private geoHandler: ((lat: number, lon: number) => void) | null = null;
  private sunBeamHandler: (() => void) | null = null;
  private moonBeamHandler: (() => void) | null = null;
  private lastSunStr = "";
  private lastMoonStr = "";
  private lastLocalStr = "";
  private lastSolarStr = "";

  constructor(parent: HTMLElement) {
    injectStyles();

    const geoAvailable = typeof navigator !== "undefined" && "geolocation" in navigator;

    this.root = document.createElement("div");
    this.root.id = "orrery-location";
    this.root.classList.add("hidden");
    this.root.innerHTML = `
      <div class="orrery-loc-titlerow">
        <span class="orrery-loc-title">location</span>
        <span class="orrery-loc-clear" id="orrery-loc-clear" title="Close panel">✕</span>
      </div>

      <div class="orrery-loc-item current" id="orrery-loc-row-current" data-source="click">
        <div class="orrery-loc-line1">
          <span class="orrery-loc-icon" aria-hidden="true">📍</span>
          <span class="orrery-loc-name" id="orrery-loc-place">click the globe to drop a pin</span>
        </div>
        <div class="orrery-loc-line2">
          <span class="orrery-loc-coords" id="orrery-loc-coords">—</span>
        </div>
        <div class="orrery-loc-line3 hidden" id="orrery-loc-row-local">
          <span class="orrery-loc-local-label">local time</span>
          <span class="orrery-loc-local-value" id="orrery-loc-local">—</span>
        </div>
        <div class="orrery-loc-line3">
          <span class="orrery-loc-solar-label">solar time</span>
          <span class="orrery-loc-solar-value" id="orrery-loc-solar">—</span>
        </div>
      </div>

      <div class="orrery-loc-item sun" id="orrery-loc-row-sun" role="button" tabindex="0"
           title="Drop the pin where the sun is directly overhead right now">
        <div class="orrery-loc-line1">
          <span class="orrery-loc-icon" aria-hidden="true">☀️</span>
          <span class="orrery-loc-name">sub-solar</span>
          <span class="orrery-loc-sublabel">sun overhead</span>
        </div>
        <div class="orrery-loc-line2">
          <span class="orrery-loc-coords" id="orrery-loc-sun-coords">—</span>
        </div>
      </div>

      <div class="orrery-loc-item moon" id="orrery-loc-row-moon" role="button" tabindex="0"
           title="Drop the pin where the moon is directly overhead right now">
        <div class="orrery-loc-line1">
          <span class="orrery-loc-icon" aria-hidden="true">🌙</span>
          <span class="orrery-loc-name">sub-lunar</span>
          <span class="orrery-loc-sublabel">moon overhead</span>
        </div>
        <div class="orrery-loc-line2">
          <span class="orrery-loc-coords" id="orrery-loc-moon-coords">—</span>
        </div>
      </div>

      ${geoAvailable ? `
        <button class="orrery-loc-geo" id="orrery-loc-geo">use my location</button>
        <div class="orrery-loc-geostatus" id="orrery-loc-geostatus"></div>
      ` : ""}
    `;
    parent.appendChild(this.root);

    this.placeEl     = this.root.querySelector("#orrery-loc-place")     as HTMLElement;
    this.coordsEl    = this.root.querySelector("#orrery-loc-coords")    as HTMLElement;
    this.localRowEl  = this.root.querySelector("#orrery-loc-row-local") as HTMLElement;
    this.localEl     = this.root.querySelector("#orrery-loc-local")     as HTMLElement;
    this.solarEl     = this.root.querySelector("#orrery-loc-solar")     as HTMLElement;
    this.currentRowEl = this.root.querySelector("#orrery-loc-row-current") as HTMLElement;
    this.sunRowEl    = this.root.querySelector("#orrery-loc-row-sun")  as HTMLElement;
    this.moonRowEl   = this.root.querySelector("#orrery-loc-row-moon") as HTMLElement;
    this.sunCoordsEl  = this.root.querySelector("#orrery-loc-sun-coords")  as HTMLElement;
    this.moonCoordsEl = this.root.querySelector("#orrery-loc-moon-coords") as HTMLElement;
    this.geoButton = this.root.querySelector("#orrery-loc-geo")       as HTMLButtonElement | null;
    this.geoStatus = this.root.querySelector("#orrery-loc-geostatus") as HTMLElement       | null;

    const clearEl = this.root.querySelector("#orrery-loc-clear") as HTMLElement;
    clearEl.addEventListener("click", () => this.clearHandler?.());

    this.geoButton?.addEventListener("click", () => this.requestGeolocation());

    // Sun + moon rows are full-row click targets. Enter/Space activates them via
    // the role="button" + tabindex attributes set on the markup.
    const activate = (fn: () => void) => (ev: KeyboardEvent) => {
      if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); fn(); }
    };
    this.sunRowEl.addEventListener("click",   () => this.sunBeamHandler?.());
    this.sunRowEl.addEventListener("keydown", activate(() => this.sunBeamHandler?.()));
    this.moonRowEl.addEventListener("click",  () => this.moonBeamHandler?.());
    this.moonRowEl.addEventListener("keydown", activate(() => this.moonBeamHandler?.()));
  }

  /** Hook for the sub-solar row click. main.ts pins at the current sub-solar (lat, lon). */
  onSunBeam(fn: () => void)  { this.sunBeamHandler  = fn; }
  /** Hook for the sub-lunar row click. main.ts pins at the current sub-lunar (lat, lon). */
  onMoonBeam(fn: () => void) { this.moonBeamHandler = fn; }
  /** Hook for the ✕ button — main.ts wires this to close the panel via the menu toggle. */
  onClear(fn: () => void)    { this.clearHandler    = fn; }
  /** Hook for the "use my location" button — fired with (lat, lon) from the browser API. */
  onGeolocate(fn: (lat: number, lon: number) => void) { this.geoHandler = fn; }

  /**
   * Update the live sub-solar / sub-lunar coords. Called every frame from main.ts;
   * cached string comparison avoids DOM thrash.
   */
  setBeamCoords(subSolar: { lat: number; lon: number }, subLunar: { lat: number; lon: number }) {
    const sunStr  = `${fmtLat(subSolar.lat)}, ${fmtLon(subSolar.lon)}`;
    const moonStr = `${fmtLat(subLunar.lat)}, ${fmtLon(subLunar.lon)}`;
    if (sunStr  !== this.lastSunStr)  { this.sunCoordsEl.textContent  = sunStr;  this.lastSunStr  = sunStr; }
    if (moonStr !== this.lastMoonStr) { this.moonCoordsEl.textContent = moonStr; this.lastMoonStr = moonStr; }
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
  }

  /**
   * Called by main.ts after a pin is set. `source` determines which row gets the
   * "selected" highlight: a globe/map click or geolocation lights up the current-
   * location row; a sub-solar pin lights up the sun row; sub-lunar pin lights up
   * the moon row.
   */
  setLocation(latDeg: number, lonDeg: number, source: PinSource) {
    this.lat = latDeg;
    this.lon = lonDeg;
    this.source = source;
    this.coordsEl.textContent = `${fmtLat(latDeg)}, ${fmtLon(lonDeg)}`;
    this.placeEl.textContent  = "looking up…";
    this.refreshSelection();
  }

  /** Update the place-name line. Pass null to show "—" (geocoder threw or rate-limited). */
  setPlaceName(name: string | null) {
    this.placeEl.textContent = name ?? "—";
  }

  /**
   * Set the IANA timezone for the pinned location so `setNow()` can show the
   * political local time. Called from main.ts after a point-in-polygon lookup
   * in TimezoneLayer. Pass null to clear (falls back to solar-only display).
   */
  setPinnedZone(ianaName: string | null, utcOffset = 0): void {
    this.pinnedIanaName = ianaName || null;
    this.pinnedUtcOffset = utcOffset;
    this.localRowEl.classList.toggle("hidden", this.lat === null);
    this.lastLocalStr = ""; // force redraw
  }

  /**
   * Update the time displays. Called every frame from the animate loop.
   *
   * Shows two times:
   *   - **local time** — political timezone time at the pin (DST-aware via Intl when an
   *     IANA name is known; UTC-offset arithmetic otherwise). This is what people expect.
   *   - **solar time** — the astronomical clock: UTC + longitude/15°. Correct regardless
   *     of political borders; useful for understanding where the sun actually is.
   */
  setNow(now: Date) {
    if (this.lat === null || this.lon === null) return;

    // ---- Local (political) time ----
    let localStr = "";
    if (this.pinnedIanaName) {
      try {
        const parts = new Intl.DateTimeFormat("en-GB", {
          timeZone: this.pinnedIanaName,
          hour: "2-digit", minute: "2-digit", second: "2-digit",
          hour12: false,
        }).formatToParts(now);
        const t = Object.fromEntries(parts.filter(p => p.type !== "literal").map(p => [p.type, p.value]));
        const tzParts = new Intl.DateTimeFormat([], {
          timeZone: this.pinnedIanaName, timeZoneName: "short",
        }).formatToParts(now);
        const abbrev = tzParts.find(p => p.type === "timeZoneName")?.value ?? "";
        localStr = `${t.hour}:${t.minute}:${t.second}${abbrev ? `  ${abbrev}` : ""}`;
      } catch { /* fall through */ }
    }
    if (!localStr) {
      // Nominal fallback: UTC offset arithmetic (no DST correction)
      const localMs = now.getTime() + this.pinnedUtcOffset * 3_600_000;
      const d = new Date(localMs);
      localStr = `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
    }
    if (localStr !== this.lastLocalStr) {
      this.localEl.textContent = localStr;
      this.lastLocalStr = localStr;
    }

    // ---- Solar time (astronomical) ----
    const solarHours = (now.getUTCHours()
      + now.getUTCMinutes() / 60
      + now.getUTCSeconds() / 3600
      + this.lon / 15
      + 24) % 24;
    const sh = Math.floor(solarHours);
    const sm = Math.floor((solarHours - sh) * 60);
    const ss = Math.floor((((solarHours - sh) * 60) - sm) * 60);
    const solarStr = `${pad(sh)}:${pad(sm)}:${pad(ss)}`;
    if (solarStr !== this.lastSolarStr) {
      this.solarEl.textContent = solarStr;
      this.lastSolarStr = solarStr;
    }
  }

  /** Reset to the "click the globe" state — used by main.ts after onClear. */
  reset() {
    this.lat = this.lon = null;
    this.source = null;
    this.pinnedIanaName = null;
    this.placeEl.textContent  = "click the globe to drop a pin";
    this.coordsEl.textContent = "—";
    this.localEl.textContent  = "—";
    this.solarEl.textContent  = "—";
    this.localRowEl.classList.add("hidden");
    this.lastLocalStr = "";
    this.lastSolarStr = "";
    if (this.geoStatus) this.geoStatus.textContent = "";
    this.refreshSelection();
  }

  private refreshSelection() {
    this.currentRowEl.classList.toggle("selected", this.source === "click" || this.source === "geolocation");
    this.sunRowEl    .classList.toggle("selected", this.source === "sun");
    this.moonRowEl   .classList.toggle("selected", this.source === "moon");
  }

  private requestGeolocation() {
    if (!navigator.geolocation || !this.geoButton || !this.geoStatus) return;
    this.geoButton.disabled = true;
    this.geoStatus.textContent = "asking browser…";
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.geoButton!.disabled = false;
        this.geoStatus!.textContent = "";
        this.geoHandler?.(pos.coords.latitude, pos.coords.longitude);
      },
      (err) => {
        this.geoButton!.disabled = false;
        this.geoStatus!.textContent = err.code === err.PERMISSION_DENIED
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
  // Each row has a left-border accent in a row-specific colour (green pin / amber sun
  // / silver moon). When `.selected`, the background and border darken in that hue so
  // the user can tell at a glance which destination the pin currently came from.
  const css = `
    #orrery-location {
      position: fixed; right: 16px; bottom: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.45;
      padding: 10px 14px; border-radius: 6px;
      min-width: 240px;
      max-width: 300px;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-location.hidden { display: none; }

    @media (max-width: 600px) {
      #orrery-location {
        left: 8px; right: 8px;
        min-width: 0; max-width: none;
        bottom: 56px; /* sit above the bottom-sheet handle bar */
        bottom: calc(56px + env(safe-area-inset-bottom));
      }
    }
    .orrery-loc-titlerow {
      display: flex; justify-content: space-between; align-items: baseline;
      margin-bottom: 6px;
    }
    .orrery-loc-title {
      color: #6e7a90; letter-spacing: 0.1em; text-transform: uppercase;
      font-size: 11px;
    }
    .orrery-loc-clear {
      color: #6e7a90; cursor: pointer; margin-left: 1em;
      transition: color 125ms ease;
    }
    .orrery-loc-clear:hover { color: #ff7a7a; }

    .orrery-loc-item {
      padding: 6px 8px;
      border-radius: 4px;
      border-left: 3px solid transparent;
      background: rgba(255,255,255,0.02);
      margin-bottom: 4px;
      transition: background 125ms ease, border-color 125ms ease;
    }
    .orrery-loc-item.current { border-left-color: rgba(110, 200, 120, 0.45); }
    .orrery-loc-item.sun     { border-left-color: rgba(255, 200, 60, 0.45); cursor: pointer; }
    .orrery-loc-item.moon    { border-left-color: rgba(200, 215, 235, 0.45); cursor: pointer; }
    .orrery-loc-item.sun:hover,
    .orrery-loc-item.moon:hover { background: rgba(255,255,255,0.07); }
    .orrery-loc-item.sun:focus-visible,
    .orrery-loc-item.moon:focus-visible {
      outline: 1px solid rgba(226, 180, 46, 0.5); outline-offset: 1px;
    }
    /* Selected highlights — strong tint in the row-specific colour. */
    .orrery-loc-item.current.selected {
      background: rgba(110, 200, 120, 0.16);
      border-left-color: #6dd58c;
    }
    .orrery-loc-item.current.selected .orrery-loc-name { color: #c8f5d2; }
    .orrery-loc-item.sun.selected {
      background: rgba(255, 200, 60, 0.18);
      border-left-color: #ffcc44;
    }
    .orrery-loc-item.sun.selected .orrery-loc-name { color: #ffeab2; }
    .orrery-loc-item.moon.selected {
      background: rgba(200, 215, 235, 0.18);
      border-left-color: #c8d8f0;
    }
    .orrery-loc-item.moon.selected .orrery-loc-name { color: #e8eef8; }

    .orrery-loc-line1 {
      display: flex; align-items: baseline; gap: 6px;
    }
    .orrery-loc-icon {
      font-size: 14px; line-height: 1;
      /* Emoji rendering sizing — keep the icon vertically centred against the text */
      flex: 0 0 auto;
    }
    .orrery-loc-name {
      color: #cfd6e4; font-size: 12px;
    }
    .orrery-loc-sublabel {
      color: #6e7a90; font-size: 11px; letter-spacing: 0.04em;
      margin-left: auto;
    }
    .orrery-loc-line2 {
      margin-top: 2px;
      padding-left: 22px;
    }
    .orrery-loc-coords { color: #a4b0c6; font-size: 11px; }
    .orrery-loc-line3 {
      margin-top: 2px; padding-left: 22px;
      display: flex; gap: 8px; align-items: baseline;
    }
    .orrery-loc-local-label { color: #6e7a90; font-size: 10px; letter-spacing: 0.04em; }
    .orrery-loc-local-value { color: #e2c96a; font-size: 11px; font-weight: 600; }
    .orrery-loc-solar-label { color: #6e7a90; font-size: 10px; letter-spacing: 0.04em; }
    .orrery-loc-solar-value { color: #8a93a7; font-size: 11px; }

    .orrery-loc-geo {
      display: block; width: 100%;
      margin-top: 6px;
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
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
