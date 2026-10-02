import { SATELLITES, AGENCY_LINKS, type SatelliteSpec } from "../space/catalog";
import type { ElementAge } from "../space/propagator";
import type { VisiblePass } from "../space/passes";
import type { CrewManifest, CrewMember } from "../data/satelliteLoader";
import { formatPassWhen, formatPassDetail, zoneLabel } from "./passFormat";

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

/** What the "seen from your pin" section should say. */
export type PassesState =
  | { kind: "no-pin" }
  | { kind: "computing"; place: string }
  | { kind: "unknown" }
  | { kind: "ready"; place: string; passes: VisiblePass[]; days: number; timeZone?: string; now: Date };

/**
 * Info card for the selected satellite (click a marker, "Find ISS", or `?sat=iss`), plus a
 * "who's in space" crew view (Space row → Crew, or the card's "aboard" line).
 * Bottom-right, stacked above the Location panel when that's open.
 * See frontend/docs/satellites-plan.md §2.3–2.4 and §4.1.
 */
export class SatellitePanel {
  private readonly root: HTMLElement;
  private readonly stationView: HTMLElement;
  private readonly crewView: HTMLElement;
  private readonly tabsEl: HTMLElement;
  private readonly rideBtn: HTMLButtonElement;
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
  private readonly passesEl: HTMLElement;
  private closeHandler: (() => void) | null = null;
  private centreHandler: (() => void) | null = null;
  private watchHandler: ((p: VisiblePass) => void) | null = null;
  private calendarHandler: ((p: VisiblePass) => void) | null = null;
  private pinHandler: (() => void) | null = null;
  private crewHandler: (() => void) | null = null;
  private showStationHandler: ((id: string) => void) | null = null;
  private rideHandler: (() => void) | null = null;
  private switchHandler: ((id: string) => void) | null = null;
  private spec: SatelliteSpec | null = null;
  private view: "station" | "crew" | null = null;
  private factIndex = 0;
  private factTimer: number | null = null;
  private lastPassesKey = "";

  constructor(parent: HTMLElement) {
    injectStyles();
    this.root = document.createElement("div");
    this.root.id = "orrery-sat";
    this.root.classList.add("hidden");
    this.root.innerHTML = `
      <div class="orrery-sat-titlerow">
        <span class="orrery-sat-tabs" id="orrery-sat-tabs" role="tablist"></span>
        <span class="orrery-sat-close" id="orrery-sat-close" title="Close panel">✕</span>
      </div>
      <div id="orrery-sat-station">
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
          <span class="k crew">aboard</span><span class="v crew"><a href="#" class="orrery-sat-link" id="orrery-sat-crew" title="Who's in space right now">—</a></span>
        </div>
        <div class="orrery-sat-passes" id="orrery-sat-passes"></div>
        <div class="orrery-sat-fact" id="orrery-sat-fact"></div>
        <div class="orrery-sat-actions">
          <button class="orrery-sat-btn" id="orrery-sat-centre" title="Point the camera down at the station">centre view</button>
          <button class="orrery-sat-btn" id="orrery-sat-ride" title="Ride along — the view from the station. V switches view, Esc leaves.">ride along ▶</button>
        </div>
        <div class="orrery-sat-age" id="orrery-sat-age"></div>
      </div>
      <div id="orrery-sat-crewview" class="hidden"></div>
    `;
    parent.appendChild(this.root);
    const q = (id: string) => this.root.querySelector(`#${id}`) as HTMLElement;
    this.stationView = q("orrery-sat-station");
    this.crewView = q("orrery-sat-crewview");
    this.tabsEl   = q("orrery-sat-tabs");
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
    this.passesEl = q("orrery-sat-passes");
    q("orrery-sat-close").addEventListener("click", () => this.closeHandler?.());
    q("orrery-sat-centre").addEventListener("click", () => this.centreHandler?.());
    this.crewEl.addEventListener("click", (e) => { e.preventDefault(); this.crewHandler?.(); });
    this.rideBtn = q("orrery-sat-ride") as HTMLButtonElement;
    this.rideBtn.addEventListener("click", () => this.rideHandler?.());
    for (const [id, label, title, colour] of [
      ...SATELLITES.map(s => [s.id, s.shortName, s.name, s.colour] as const),
      ["crew", "crew", "Who's in space right now", CREW_ACCENT] as const,
    ]) {
      const tab = document.createElement("button");
      tab.className = "orrery-sat-tab";
      tab.dataset.id = id;
      tab.setAttribute("role", "tab");
      tab.textContent = label;
      tab.title = title;
      tab.style.setProperty("--tab-accent", hex(colour));
      tab.addEventListener("click", () => {
        if (tab.classList.contains("active")) return;
        if (id === "crew") this.crewHandler?.(); else this.switchHandler?.(id);
      });
      this.tabsEl.appendChild(tab);
    }
  }

  onClose(fn: () => void) { this.closeHandler = fn; }
  onCentre(fn: () => void) { this.centreHandler = fn; }
  /** "▶ watch" on a pass row. */
  onWatchPass(fn: (p: VisiblePass) => void) { this.watchHandler = fn; }
  /** "📅" on a pass row. */
  onCalendar(fn: (p: VisiblePass) => void) { this.calendarHandler = fn; }
  /** "drop a pin" invitation when no location is set. */
  onRequestPin(fn: () => void) { this.pinHandler = fn; }
  /** The station card's "aboard" link → crew view. */
  onShowCrew(fn: () => void) { this.crewHandler = fn; }
  /** "show on globe" from the crew view. */
  onShowStation(fn: (id: string) => void) { this.showStationHandler = fn; }
  /** Ride-along toggle: the handler starts or stops riding the shown satellite. */
  onRide(fn: () => void) { this.rideHandler = fn; }
  /** A station tab was clicked. */
  onSwitch(fn: (id: string) => void) { this.switchHandler = fn; }

  /** Reflect whether the camera is currently riding the shown satellite. */
  setRiding(on: boolean) {
    this.rideBtn.textContent = on ? "leave ride ✕" : "ride along ▶";
  }

  selectedId(): string | null { return this.view === "station" ? this.spec?.id ?? null : null; }
  isOpen(): boolean { return this.view !== null; }

  // ── Station view ───────────────────────────────────────────────────────────

  show(spec: SatelliteSpec, crew: CrewMember[] | null) {
    this.spec = spec;
    this.setView("station");
    this.setActiveTab(spec.id);
    this.rideBtn.classList.toggle("hidden", !spec.povCapable);
    this.nameEl.textContent = spec.name;
    this.agencyEl.innerHTML = escapeHtml(spec.agency) +
      (spec.officialUrl ? ` · <a class="orrery-sat-link" href="${spec.officialUrl}" target="_blank" rel="noopener">official site ↗</a>` : "");
    this.iconEl.textContent = spec.emoji;
    this.setAccent(spec.colour);
    this.setPlace("");
    const showCrew = spec.crewed && crew !== null;
    for (const el of this.root.querySelectorAll<HTMLElement>(".crew")) el.classList.toggle("hidden", !showCrew);
    if (showCrew) {
      this.crewEl.textContent = `${crew!.length === 1 ? "1 person" : `${crew!.length} people`} · who? ›`;
    }
    this.lastPassesKey = "";
    this.passesEl.innerHTML = "";
    this.factIndex = 0;
    this.showFact();
    if (this.factTimer === null) this.factTimer = window.setInterval(() => this.showFact(), 12_000);
  }

  hide() {
    this.spec = null;
    this.setView(null);
    if (this.factTimer !== null) { clearInterval(this.factTimer); this.factTimer = null; }
  }

  /** "over Kazakhstan" etc. Empty hides the line (geocoder unavailable or not back yet). */
  setPlace(text: string) {
    this.placeEl.textContent = text;
    this.placeEl.classList.toggle("hidden", !text);
  }

  update(s: SatellitePanelState | null) {
    if (this.view !== "station") return;
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

  /** "Can I see it tonight?" — rebuilt only when the content actually changes. */
  setPasses(state: PassesState) {
    if (this.view !== "station" || !this.spec) return;
    const name = this.spec.shortName;
    let key: string;
    let html: string;
    switch (state.kind) {
      case "no-pin":
        key = "no-pin";
        html = `<a href="#" class="orrery-sat-invite" data-act="pin">📍 Drop a pin to see when the ${escapeHtml(name)} flies over you</a>`;
        break;
      case "computing":
        key = `computing:${state.place}`;
        html = `${this.passesHeader(state.place)}<div class="orrery-sat-note">working out passes…</div>`;
        break;
      case "unknown":
        key = "unknown";
        html = `<div class="orrery-sat-note">Pass predictions need today's orbit — come back to the present to see them.</div>`;
        break;
      case "ready": {
        const shown = state.passes.filter(p => p.end > state.now).slice(0, 3);
        key = `ready:${state.place}:${state.timeZone}:` + shown.map(p => p.start.getTime()).join(",") +
              `:${shown.map(p => p.start <= state.now ? "live" : formatPassWhen(p.start, state.now, state.timeZone)).join(",")}`;
        const zone = shown.length ? zoneLabel(shown[0].start, state.timeZone) : "";
        html = this.passesHeader(state.place, zone);
        if (!shown.length) {
          html += `<div class="orrery-sat-note">No visible passes in the next ${state.days} days. The ${escapeHtml(name)} is crossing your sky in daylight or in Earth's shadow. Visibility comes in spells of a week or two, so check back.</div>`;
        }
        shown.forEach((p, i) => {
          const live = p.start <= state.now;
          html += `
            <div class="orrery-sat-pass${live ? " live" : ""}">
              <div class="when">${live ? "🔭 Overhead now" : escapeHtml(formatPassWhen(p.start, state.now, state.timeZone))}
                <span class="acts">
                  <a href="#" data-act="watch" data-i="${i}" title="Jump the clock to this pass and watch it fly over">▶ watch</a>
                  <a href="#" data-act="ics" data-i="${i}" title="Add to your calendar (.ics) with a 10-minute reminder">📅</a>
                </span>
              </div>
              <div class="detail">${escapeHtml(formatPassDetail(p))}</div>
            </div>`;
        });
        this.currentPasses = shown;
        break;
      }
    }
    if (key === this.lastPassesKey) return;
    this.lastPassesKey = key;
    this.passesEl.innerHTML = html;
    for (const a of this.passesEl.querySelectorAll<HTMLElement>("[data-act]")) {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const p = this.currentPasses[Number(a.dataset.i)];
        if (a.dataset.act === "pin") this.pinHandler?.();
        else if (a.dataset.act === "watch" && p) this.watchHandler?.(p);
        else if (a.dataset.act === "ics" && p) this.calendarHandler?.(p);
      });
    }
    this.restack();
  }
  private currentPasses: VisiblePass[] = [];

  private passesHeader(place: string, zone = ""): string {
    return `<div class="orrery-sat-sub">visible from 📍 ${escapeHtml(place)}${zone ? ` <span class="zone">${escapeHtml(zone)}</span>` : ""}</div>`;
  }

  // ── Crew view ("who's in space") ───────────────────────────────────────────

  showCrew(manifest: CrewManifest | null, stations: readonly SatelliteSpec[]) {
    this.spec = null;
    this.setView("crew");
    this.setActiveTab("crew");
    this.setAccent(CREW_ACCENT);
    if (!manifest) {
      this.crewView.innerHTML = `<div class="orrery-sat-note">The crew list hasn't been filled in yet.</div>`;
      return;
    }
    const crewed = stations.filter(s => s.crewed && manifest.stations[s.id]);
    const total = crewed.reduce((n, s) => n + manifest.stations[s.id].length, 0);
    let html = `<div class="orrery-sat-crew-total"><b>${total}</b> people are off the planet right now</div>`;
    for (const s of crewed) {
      const people = manifest.stations[s.id];
      const accent = `#${s.colour.toString(16).padStart(6, "0")}`;
      html += `
        <div class="orrery-sat-crew-station" style="--st:${accent}">
          <div class="hdr">
            <span>${s.emoji}</span>
            ${s.officialUrl
              ? `<a class="name" href="${s.officialUrl}" target="_blank" rel="noopener" title="Official site">${escapeHtml(s.name)} ↗</a>`
              : `<span class="name">${escapeHtml(s.name)}</span>`}
            <span class="count">${people.length}</span>
          </div>
          <ul>${people.map(p => `<li>${p.url
              ? `<a href="${escapeAttr(p.url)}" target="_blank" rel="noopener">${escapeHtml(p.name)}</a>`
              : escapeHtml(p.name)} <span class="ag">${agencyHtml(p.agency)}</span>${p.since ? ` <span class="since" title="Aboard since ${escapeAttr(p.since)}">${daysUp(p.since)}</span>` : ""}</li>`).join("")}</ul>
          <a href="#" class="orrery-sat-link show" data-id="${s.id}">show on globe ›</a>
        </div>`;
    }
    html += `<div class="orrery-sat-age">crew list checked ${escapeHtml(fmtDate(manifest.updated))}</div>`;
    this.crewView.innerHTML = html;
    for (const a of this.crewView.querySelectorAll<HTMLElement>("a.show")) {
      a.addEventListener("click", (e) => { e.preventDefault(); this.showStationHandler?.(a.dataset.id!); });
    }
  }

  // ── Internals ──────────────────────────────────────────────────────────────

  private setView(v: "station" | "crew" | null) {
    this.view = v;
    this.root.classList.toggle("hidden", v === null);
    this.stationView.classList.toggle("hidden", v !== "station");
    this.crewView.classList.toggle("hidden", v !== "crew");
    if (v) this.restack();
  }

  private setActiveTab(id: string) {
    for (const tab of this.tabsEl.querySelectorAll<HTMLElement>(".orrery-sat-tab")) {
      const active = tab.dataset.id === id;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    }
  }

  private setAccent(colour: number) {
    this.root.style.setProperty("--sat-accent", `#${colour.toString(16).padStart(6, "0")}`);
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
/** The crew view's accent — warm gold, shared with the "live pass" highlight. */
const CREW_ACCENT = 0xe2c96a;

function hex(colour: number) { return `#${colour.toString(16).padStart(6, "0")}`; }

/** Agency name, linked to its astronaut pages when we have a working one (AGENCY_LINKS). */
function agencyHtml(agency: string): string {
  const url = AGENCY_LINKS[agency];
  return url
    ? `<a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer" title="${escapeAttr(agency)} astronauts">${escapeHtml(agency)}</a>`
    : escapeHtml(agency);
}

function fmtLat(d: number) { return `${Math.abs(d).toFixed(2)}°${d >= 0 ? "N" : "S"}`; }
function fmtLon(d: number) { return `${Math.abs(d).toFixed(2)}°${d >= 0 ? "E" : "W"}`; }
function fmtAge(h: number) {
  const a = Math.abs(h);
  const txt = a < 1 ? `${Math.round(a * 60)} min` : a < 48 ? `${Math.round(a)} h` : `${Math.round(a / 24)} days`;
  return h >= 0 ? `${txt} old` : `${txt} ahead`;
}
function fmtDate(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso + "T12:00:00Z");
  return isNaN(d.getTime()) ? iso : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
/** "day 230" — how long someone has been up there (wall clock, not simulated time). */
function daysUp(since: string): string {
  const d = new Date(since + "T12:00:00Z").getTime();
  if (isNaN(d)) return "";
  return `day ${Math.max(1, Math.floor((Date.now() - d) / 86_400_000) + 1)}`;
}
function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
function escapeAttr(s: string): string { return escapeHtml(s); }

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
      min-width: 250px; max-width: 320px;
      max-height: calc(100vh - 32px); overflow-y: auto;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-sat.hidden, #orrery-sat .hidden { display: none; }
    @media (max-width: 600px) {
      #orrery-sat {
        left: 8px; right: 8px; min-width: 0; max-width: none;
        bottom: calc(56px + env(safe-area-inset-bottom));
        max-height: 60vh;
      }
    }
    .orrery-sat-titlerow { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
    .orrery-sat-tabs { display: flex; }
    .orrery-sat-tab {
      background: none; border: none; border-bottom: 1px solid transparent;
      padding: 0 0 2px; margin-right: 12px;
      color: #6e7a90; font-family: inherit; font-size: 11px;
      letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
      transition: color 125ms ease;
    }
    .orrery-sat-tab:hover { color: #cfd6e4; }
    .orrery-sat-tab.active { color: var(--tab-accent); border-bottom-color: var(--tab-accent); cursor: default; }
    .orrery-sat-close { color: #6e7a90; cursor: pointer; margin-left: 1em; transition: color 125ms ease; }
    .orrery-sat-close:hover { color: #ff7a7a; }
    .orrery-sat-head { display: flex; align-items: baseline; gap: 6px; }
    .orrery-sat-icon { font-size: 14px; line-height: 1; }
    .orrery-sat-name { color: #fff; font-size: 13px; font-weight: 600; }
    .orrery-sat-agency { color: #6e7a90; font-size: 11px; padding-left: 22px; }
    .orrery-sat-link { color: var(--sat-accent); text-decoration: none; }
    .orrery-sat-link:hover { text-decoration: underline; }
    .orrery-sat-place { color: var(--sat-accent); margin: 6px 0 4px; }
    .orrery-sat-grid { display: grid; grid-template-columns: auto 1fr; column-gap: 10px; margin-top: 4px; }
    .orrery-sat-grid .k { color: #6e7a90; font-size: 11px; }
    .orrery-sat-grid .v { color: #cfd6e4; font-size: 11px; }
    .orrery-sat-passes { margin-top: 8px; }
    .orrery-sat-passes:empty { display: none; }
    .orrery-sat-sub { color: #6e7a90; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 3px; }
    .orrery-sat-sub .zone { text-transform: none; letter-spacing: 0; color: #56607a; }
    .orrery-sat-note { color: #8a93a7; font-size: 11px; }
    .orrery-sat-invite { color: #e2c96a; font-size: 11px; text-decoration: none; }
    .orrery-sat-invite:hover { text-decoration: underline; }
    .orrery-sat-pass {
      padding: 4px 6px; margin-bottom: 3px; border-radius: 4px;
      background: rgba(255,255,255,0.03); border-left: 2px solid var(--sat-accent);
    }
    .orrery-sat-pass.live { background: rgba(226, 201, 106, 0.14); border-left-color: #e2c96a; }
    .orrery-sat-pass .when { color: #fff; font-size: 12px; display: flex; justify-content: space-between; gap: 8px; }
    .orrery-sat-pass .acts a { color: var(--sat-accent); text-decoration: none; font-size: 11px; margin-left: 6px; }
    .orrery-sat-pass .acts a:hover { text-decoration: underline; }
    .orrery-sat-pass .detail { color: #a4b0c6; font-size: 10.5px; }
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
    .orrery-sat-crew-total { color: #cfd6e4; margin-bottom: 8px; }
    .orrery-sat-crew-total b { color: #e2c96a; font-size: 15px; }
    .orrery-sat-crew-station { border-left: 2px solid var(--st); padding: 2px 0 4px 8px; margin-bottom: 8px; }
    .orrery-sat-crew-station .hdr { display: flex; align-items: baseline; gap: 6px; }
    .orrery-sat-crew-station .name { color: var(--st); font-weight: 600; text-decoration: none; }
    .orrery-sat-crew-station a.name:hover { text-decoration: underline; }
    .orrery-sat-crew-station .count { margin-left: auto; color: #6e7a90; font-size: 11px; }
    .orrery-sat-crew-station ul { list-style: none; margin: 3px 0 3px; padding: 0; }
    .orrery-sat-crew-station li { font-size: 11px; color: #cfd6e4; }
    .orrery-sat-crew-station li a { color: #cfd6e4; }
    .orrery-sat-crew-station .ag, .orrery-sat-crew-station .ag a { color: #6e7a90; }
    .orrery-sat-crew-station .ag a { text-decoration: none; border-bottom: 1px dotted rgba(110,122,144,0.6); }
    .orrery-sat-crew-station .ag a:hover { color: #fff; border-bottom-color: #fff; }
    .orrery-sat-crew-station .since { color: #56607a; font-size: 10px; }
    .orrery-sat-crew-station .show { --sat-accent: var(--st); font-size: 11px; }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
