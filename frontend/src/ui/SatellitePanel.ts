import type { SatelliteSpec } from "../space/catalog";
import type { ElementAge } from "../space/propagator";
import type { CrewMember } from "../data/satelliteLoader";

export interface SatellitePanelState {
  lat: number;
  lon: number;
  altKm: number;
  speedKms: number;
  inShadow: boolean;
  age: ElementAge;
  /** Hours between the element epoch and the simulated time (positive = elements older). */
  elementAgeHours: number;
  nextChange: { at: Date; sunrise: boolean } | null;
  now: Date;
}

/**
 * Info card for the selected satellite (click a marker, "Find ISS", or `?sat=iss`).
 * Bottom-right, stacked above the Location panel when that's open.
 * See frontend/docs/satellites-plan.md §2.3.
 */
export class SatellitePanel {
  private readonly root: HTMLElement;
  private readonly titleEl: HTMLElement;
  private readonly nameEl: HTMLElement;
  private readonly agencyEl: HTMLElement;
  private readonly placeEl: HTMLElement;
  private readonly coordsEl: HTMLElement;
  private readonly altEl: HTMLElement;
  private readonly speedEl: HTMLElement;
  private readonly lightEl: HTMLElement;
  private readonly crewEl: HTMLElement;
  private readonly factEl: HTMLElement;
  private readonly ageEl: HTMLElement;
  private readonly iconEl: HTMLElement;
  private closeHandler: (() => void) | null = null;
  private centreHandler: (() => void) | null = null;
  private spec: SatelliteSpec | null = null;
  private factIndex = 0;
  private factTimer: number | null = null;

  constructor(parent: HTMLElement) {
    injectStyles();
    this.root = document.createElement("div");
    this.root.id = "orrery-sat";
    this.root.classList.add("hidden");
    this.root.innerHTML = `
      <div class="orrery-sat-titlerow">
        <span class="orrery-sat-title" id="orrery-sat-title">space station</span>
        <span class="orrery-sat-close" id="orrery-sat-close" title="Close panel">✕</span>
      </div>
      <div class="orrery-sat-head">
        <span class="orrery-sat-icon" id="orrery-sat-icon" aria-hidden="true"></span>
        <span class="orrery-sat-name" id="orrery-sat-name"></span>
      </div>
      <div class="orrery-sat-agency" id="orrery-sat-agency"></div>
      <div class="orrery-sat-place hidden" id="orrery-sat-place"></div>
      <div class="orrery-sat-grid">
        <span class="k">position</span><span class="v" id="orrery-sat-coords">—</span>
        <span class="k">altitude</span><span class="v" id="orrery-sat-alt">—</span>
        <span class="k">speed</span><span class="v" id="orrery-sat-speed">—</span>
        <span class="k">light</span><span class="v" id="orrery-sat-light">—</span>
        <span class="k crew">aboard</span><span class="v crew" id="orrery-sat-crew">—</span>
      </div>
      <div class="orrery-sat-fact" id="orrery-sat-fact"></div>
      <div class="orrery-sat-actions">
        <button class="orrery-sat-btn" id="orrery-sat-centre" title="Point the camera down at the station">centre view</button>
        <button class="orrery-sat-btn" disabled title="Ride along — the view from the station — is coming in v0.6">ride along ▶ soon</button>
      </div>
      <div class="orrery-sat-age" id="orrery-sat-age"></div>
    `;
    parent.appendChild(this.root);
    const q = (id: string) => this.root.querySelector(`#${id}`) as HTMLElement;
    this.titleEl  = q("orrery-sat-title");
    this.nameEl   = q("orrery-sat-name");
    this.agencyEl = q("orrery-sat-agency");
    this.placeEl  = q("orrery-sat-place");
    this.coordsEl = q("orrery-sat-coords");
    this.altEl    = q("orrery-sat-alt");
    this.speedEl  = q("orrery-sat-speed");
    this.lightEl  = q("orrery-sat-light");
    this.crewEl   = q("orrery-sat-crew");
    this.factEl   = q("orrery-sat-fact");
    this.ageEl    = q("orrery-sat-age");
    this.iconEl   = q("orrery-sat-icon");
    q("orrery-sat-close").addEventListener("click", () => this.closeHandler?.());
    q("orrery-sat-centre").addEventListener("click", () => this.centreHandler?.());
  }

  onClose(fn: () => void) { this.closeHandler = fn; }
  onCentre(fn: () => void) { this.centreHandler = fn; }

  selectedId(): string | null { return this.spec?.id ?? null; }

  show(spec: SatelliteSpec, crew: CrewMember[] | null) {
    this.spec = spec;
    this.titleEl.textContent = spec.crewed ? "space station" : "satellite";
    this.nameEl.textContent = spec.name;
    this.agencyEl.textContent = spec.agency;
    this.iconEl.textContent = spec.emoji;
    this.root.style.setProperty("--sat-accent", `#${spec.colour.toString(16).padStart(6, "0")}`);
    this.setPlace("");
    const showCrew = spec.crewed && crew !== null;
    for (const el of this.root.querySelectorAll<HTMLElement>(".crew")) el.classList.toggle("hidden", !showCrew);
    if (showCrew) {
      this.crewEl.textContent = crew!.length === 1 ? "1 person" : `${crew!.length} people`;
      this.crewEl.title = crew!.map(c => `${c.name} (${c.agency})`).join("\n");
    }
    this.factIndex = 0;
    this.showFact();
    if (this.factTimer === null) this.factTimer = window.setInterval(() => this.showFact(), 12_000);
    this.root.classList.remove("hidden");
    this.restack();
  }

  hide() {
    this.spec = null;
    this.root.classList.add("hidden");
    if (this.factTimer !== null) { clearInterval(this.factTimer); this.factTimer = null; }
  }

  /** "over Kazakhstan" etc. Empty hides the line (geocoder unavailable or not back yet). */
  setPlace(text: string) {
    this.placeEl.textContent = text;
    this.placeEl.classList.toggle("hidden", !text);
  }

  update(s: SatellitePanelState | null) {
    if (!this.spec) return;
    this.restack();
    if (!s || s.age === "unknown") {
      this.coordsEl.textContent = this.altEl.textContent = this.speedEl.textContent = this.lightEl.textContent = "—";
      this.setPlace(UNKNOWN_ORBIT);
      this.ageEl.textContent = s ? `elements ${fmtAge(s.elementAgeHours)} — too far to trust` : "no orbital elements loaded";
      return;
    }
    if (this.placeEl.textContent === UNKNOWN_ORBIT) this.setPlace("");
    this.coordsEl.textContent = `${fmtLat(s.lat)}, ${fmtLon(s.lon)}`;
    this.altEl.textContent = `${Math.round(s.altKm)} km`;
    this.speedEl.textContent = `${s.speedKms.toFixed(2)} km/s · ${Math.round(s.speedKms * 3600).toLocaleString()} km/h`;
    let light = s.inShadow ? "🌑 in Earth's shadow" : "☀️ in sunlight";
    if (s.nextChange) {
      const mins = Math.max(0, Math.round((s.nextChange.at.getTime() - s.now.getTime()) / 60_000));
      light += ` · ${s.nextChange.sunrise ? "sunrise" : "sunset"} in ${mins} min`;
    }
    this.lightEl.textContent = light;
    this.ageEl.textContent = `elements ${fmtAge(s.elementAgeHours)}${s.age === "approximate" ? " · position approximate" : ""}`;
    this.ageEl.classList.toggle("warn", s.age === "approximate");
  }

  private showFact() {
    const facts = this.spec?.facts ?? [];
    this.factEl.textContent = facts.length ? facts[this.factIndex++ % facts.length] : "";
  }

  /** Sit above the Location panel when both are open (they share the bottom-right). */
  private restack() {
    const loc = document.getElementById("orrery-location");
    const locOpen = loc && !loc.classList.contains("hidden") && !window.matchMedia("(max-width: 600px)").matches;
    this.root.style.bottom = locOpen ? `${loc!.offsetHeight + 28}px` : "";
  }
}

const UNKNOWN_ORBIT = "orbit unknown this far from today";

function fmtLat(d: number) { return `${Math.abs(d).toFixed(2)}°${d >= 0 ? "N" : "S"}`; }
function fmtLon(d: number) { return `${Math.abs(d).toFixed(2)}°${d >= 0 ? "E" : "W"}`; }
function fmtAge(h: number) {
  const a = Math.abs(h);
  const txt = a < 1 ? `${Math.round(a * 60)} min` : a < 48 ? `${Math.round(a)} h` : `${Math.round(a / 24)} days`;
  return h >= 0 ? `${txt} old` : `${txt} ahead`;
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    #orrery-sat {
      --sat-accent: #8fd8ff;
      position: fixed; right: 16px; bottom: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.45;
      padding: 10px 14px; border-radius: 6px;
      border-left: 3px solid var(--sat-accent);
      min-width: 250px; max-width: 310px;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-sat.hidden, #orrery-sat .hidden { display: none; }
    @media (max-width: 600px) {
      #orrery-sat {
        left: 8px; right: 8px; min-width: 0; max-width: none;
        bottom: calc(56px + env(safe-area-inset-bottom));
      }
    }
    .orrery-sat-titlerow { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
    .orrery-sat-title { color: #6e7a90; letter-spacing: 0.1em; text-transform: uppercase; font-size: 11px; }
    .orrery-sat-close { color: #6e7a90; cursor: pointer; margin-left: 1em; transition: color 125ms ease; }
    .orrery-sat-close:hover { color: #ff7a7a; }
    .orrery-sat-head { display: flex; align-items: baseline; gap: 6px; }
    .orrery-sat-icon { font-size: 14px; line-height: 1; }
    .orrery-sat-name { color: #fff; font-size: 13px; font-weight: 600; }
    .orrery-sat-agency { color: #6e7a90; font-size: 11px; padding-left: 22px; }
    .orrery-sat-place { color: var(--sat-accent); margin: 6px 0 4px; }
    .orrery-sat-grid { display: grid; grid-template-columns: auto 1fr; column-gap: 10px; }
    .orrery-sat-grid .k { color: #6e7a90; font-size: 11px; }
    .orrery-sat-grid .v { color: #cfd6e4; font-size: 11px; }
    .orrery-sat-fact { color: #a4b0c6; font-size: 11px; font-style: italic; margin-top: 6px; min-height: 1.4em; }
    .orrery-sat-actions { display: flex; gap: 6px; margin-top: 8px; }
    .orrery-sat-btn {
      flex: 1;
      background: rgba(255,255,255,0.06); color: #cfd6e4;
      border: 1px solid rgba(255,255,255,0.14); border-radius: 4px;
      padding: 4px 6px; font-family: inherit; font-size: 11px; cursor: pointer;
      transition: background 125ms ease, color 125ms ease;
    }
    .orrery-sat-btn:hover:not(:disabled) { background: rgba(255,255,255,0.12); color: #fff; }
    .orrery-sat-btn:disabled { opacity: 0.45; cursor: default; }
    .orrery-sat-age { color: #56607a; font-size: 10px; margin-top: 6px; }
    .orrery-sat-age.warn { color: #e2a84a; }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
