/**
 * Top-right floating panel listing solar AND lunar eclipses across two tabs.
 *
 * Two catalogues, one panel:
 *   - **☀ Solar** — `ECLIPSE_CATALOG` (sun/moon/Earth alignment; umbra
 *     touches Earth somewhere). Clicking a row loads the EclipseLayer + path of
 *     totality on Earth + auto-pins the observer to greatest.
 *   - **🌑 Lunar** — `LUNAR_ECLIPSE_CATALOG` (Earth's shadow on the moon).
 *     Clicking a row drives the moon-mesh dimming + tint via Moon.setEclipseShadow.
 *
 * The two tabs share the same row-render style and selection mechanics so the
 * panel reads as one catalogue with a type switch. Selected event is tracked
 * separately per tab so flipping back keeps the prior highlight.
 *
 * Visibility is controlled by the menu's "Eclipse" entry — same toggle that
 * drives the 3D EclipseLayer mesh, so panel + render stay in lock-step.
 */
import { ECLIPSE_CATALOG, type EclipseEvent } from "../data/eclipseCatalog";
import { LUNAR_ECLIPSE_CATALOG, type LunarEclipseEvent } from "../data/lunarEclipseCatalog";

type TabKey = "solar" | "lunar";

export interface EclipsePanelCallbacks {
  /** User picked a solar eclipse. Caller: load path, set time, warp, auto-pin. */
  onJumpSolar?: (event: EclipseEvent) => void;
  /** User picked a lunar eclipse. Caller: load lunar event, set time, warp.
   *  No auto-pin for lunar — the moon is visible everywhere on the night side. */
  onJumpLunar?: (event: LunarEclipseEvent) => void;
  /** User switched between ☀ Solar and 🌑 Lunar tabs. Caller uses this to
   *  clear the *other* eclipse type's active state — without this, switching
   *  to Lunar would leave a previously-loaded solar umbra disc + path-of-
   *  totality polyline still drawn on Earth, which reads as a UI bug. */
  onTabChange?: (tab: "solar" | "lunar") => void;
  /** Close-button hook — main.ts flips the Eclipse menu toggle off. */
  onClose?: () => void;
}

export class EclipsePanel {
  private readonly root: HTMLElement;
  private readonly solarListEl: HTMLElement;
  private readonly lunarListEl: HTMLElement;
  private readonly solarTabBtn: HTMLElement;
  private readonly lunarTabBtn: HTMLElement;
  private readonly callbacks: EclipsePanelCallbacks;

  /** Chronological order — oldest first. */
  private readonly solarSorted: EclipseEvent[];
  private readonly lunarSorted: LunarEclipseEvent[];
  /** Row elements keyed by event id, per tab, so `setSelected(id)` can flip
   *  the highlight without re-rendering. */
  private readonly solarRowEls = new Map<string, HTMLElement>();
  private readonly lunarRowEls = new Map<string, HTMLElement>();
  /** Currently-highlighted event per tab. Independent so tab-flipping doesn't
   *  clear the other selection. */
  private selectedSolarId: string | null = null;
  private selectedLunarId: string | null = null;
  private activeTab: TabKey = "solar";

  constructor(parent: HTMLElement, callbacks: EclipsePanelCallbacks = {}) {
    injectStyles();
    this.callbacks = callbacks;

    this.solarSorted = [...ECLIPSE_CATALOG].sort(
      (a, b) => a.peakUtc.getTime() - b.peakUtc.getTime(),
    );
    this.lunarSorted = [...LUNAR_ECLIPSE_CATALOG].sort(
      (a, b) => a.peakUtc.getTime() - b.peakUtc.getTime(),
    );

    this.root = document.createElement("div");
    this.root.id = "orrery-eclipse";
    this.root.classList.add("hidden");
    this.root.innerHTML = `
      <div class="orrery-ecl-row">
        <span class="orrery-ecl-title">eclipse</span>
        <span class="orrery-ecl-close" id="orrery-ecl-close" title="Close panel">✕</span>
      </div>
      <div class="orrery-ecl-tabs">
        <button class="orrery-ecl-tab active" id="orrery-ecl-tab-solar" data-tab="solar" title="Solar eclipses — moon's shadow on Earth">☀ Solar</button>
        <button class="orrery-ecl-tab"        id="orrery-ecl-tab-lunar" data-tab="lunar" title="Lunar eclipses — Earth's shadow on the moon">🌑 Lunar</button>
      </div>
      <div class="orrery-ecl-list" id="orrery-ecl-list-solar"></div>
      <div class="orrery-ecl-list hidden" id="orrery-ecl-list-lunar"></div>
      <div class="orrery-ecl-hint" id="orrery-ecl-hint">
        click a row to jump to T−1m at 60× warp
      </div>
    `;
    parent.appendChild(this.root);

    this.solarListEl = this.root.querySelector("#orrery-ecl-list-solar") as HTMLElement;
    this.lunarListEl = this.root.querySelector("#orrery-ecl-list-lunar") as HTMLElement;
    this.solarTabBtn = this.root.querySelector("#orrery-ecl-tab-solar")  as HTMLElement;
    this.lunarTabBtn = this.root.querySelector("#orrery-ecl-tab-lunar")  as HTMLElement;

    const closeBtn = this.root.querySelector("#orrery-ecl-close") as HTMLElement;
    closeBtn.addEventListener("click", () => this.callbacks.onClose?.());

    this.solarTabBtn.addEventListener("click", () => this.setActiveTab("solar"));
    this.lunarTabBtn.addEventListener("click", () => this.setActiveTab("lunar"));

    this.renderSolarList();
    this.renderLunarList();
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
  }

  /**
   * Mark a catalogued eclipse as the currently-selected one — visually
   * highlights the row and clears the previous selection within the same tab.
   * Pass `kind: "solar" | "lunar"` so we know which list to look up in. Passing
   * null id clears the highlight on that tab.
   */
  setSelected(kind: TabKey, id: string | null) {
    if (kind === "solar") {
      if (this.selectedSolarId === id) return;
      if (this.selectedSolarId !== null) {
        this.solarRowEls.get(this.selectedSolarId)?.classList.remove("selected");
      }
      this.selectedSolarId = id;
      if (id !== null) this.solarRowEls.get(id)?.classList.add("selected");
    } else {
      if (this.selectedLunarId === id) return;
      if (this.selectedLunarId !== null) {
        this.lunarRowEls.get(this.selectedLunarId)?.classList.remove("selected");
      }
      this.selectedLunarId = id;
      if (id !== null) this.lunarRowEls.get(id)?.classList.add("selected");
    }
  }

  /** Which tab is currently showing. Exposed so main.ts can drive panel-mode
   *  state derived from user intent rather than from which event happens to be
   *  loaded. */
  getActiveTab(): TabKey {
    return this.activeTab;
  }

  private setActiveTab(tab: TabKey) {
    if (this.activeTab === tab) return;
    this.activeTab = tab;
    this.solarTabBtn.classList.toggle("active", tab === "solar");
    this.lunarTabBtn.classList.toggle("active", tab === "lunar");
    this.solarListEl.classList.toggle("hidden", tab !== "solar");
    this.lunarListEl.classList.toggle("hidden", tab !== "lunar");
    this.callbacks.onTabChange?.(tab);
  }

  private renderSolarList() {
    const nowMs = Date.now();
    this.solarListEl.innerHTML = "";
    this.solarRowEls.clear();
    for (const e of this.solarSorted) {
      const row = document.createElement("div");
      row.className = "orrery-ecl-item";
      if (e.endUtc.getTime() < nowMs) row.classList.add("past");
      row.setAttribute("role", "button");
      row.setAttribute("tabindex", "0");
      row.title = "Click to jump to T−1m and start at 60× warp";

      const peakStr = e.peakUtc.toISOString().slice(0, 16).replace("T", " ") + "Z";
      const durStr = e.maxTotalitySec >= 60
        ? `${Math.floor(e.maxTotalitySec / 60)}m ${e.maxTotalitySec % 60}s`
        : `${e.maxTotalitySec}s`;

      row.innerHTML = `
        <div class="orrery-ecl-line1">
          <span class="orrery-ecl-jump">▶</span>
          <span class="orrery-ecl-name">${escapeHtml(e.name)}</span>
        </div>
        <div class="orrery-ecl-line2">
          <span class="orrery-ecl-peak">${peakStr}</span>
          <span class="orrery-ecl-type">${e.type}</span>
          <span class="orrery-ecl-dur">max ${durStr}</span>
        </div>
        <div class="orrery-ecl-line3">${escapeHtml(e.region)}</div>
      `;
      row.addEventListener("click",   () => this.callbacks.onJumpSolar?.(e));
      row.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          this.callbacks.onJumpSolar?.(e);
        }
      });
      this.solarListEl.appendChild(row);
      this.solarRowEls.set(e.id, row);
    }
    if (this.selectedSolarId !== null) {
      this.solarRowEls.get(this.selectedSolarId)?.classList.add("selected");
    }
  }

  private renderLunarList() {
    const nowMs = Date.now();
    this.lunarListEl.innerHTML = "";
    this.lunarRowEls.clear();
    for (const e of this.lunarSorted) {
      const row = document.createElement("div");
      row.className = "orrery-ecl-item";
      if (e.endUtc.getTime() < nowMs) row.classList.add("past");
      row.setAttribute("role", "button");
      row.setAttribute("tabindex", "0");
      row.title = "Click to jump to T−1m and start at 60× warp";

      const peakStr = e.peakUtc.toISOString().slice(0, 16).replace("T", " ") + "Z";
      // Totality duration only meaningful for total lunar eclipses; partial /
      // penumbral get the umbral magnitude as the secondary readout instead so
      // the user gets useful comparable info on every row.
      const secondary = e.type === "total"
        ? `tot ${Math.floor(e.totalitySec / 60)}m ${e.totalitySec % 60}s`
        : `mag ${e.umbralMagnitude.toFixed(2)}`;

      row.innerHTML = `
        <div class="orrery-ecl-line1">
          <span class="orrery-ecl-jump">▶</span>
          <span class="orrery-ecl-name">${escapeHtml(e.name)}</span>
        </div>
        <div class="orrery-ecl-line2">
          <span class="orrery-ecl-peak">${peakStr}</span>
          <span class="orrery-ecl-type">${e.type}</span>
          <span class="orrery-ecl-dur">${secondary}</span>
        </div>
        <div class="orrery-ecl-line3">${escapeHtml(e.region)}</div>
      `;
      row.addEventListener("click",   () => this.callbacks.onJumpLunar?.(e));
      row.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          this.callbacks.onJumpLunar?.(e);
        }
      });
      this.lunarListEl.appendChild(row);
      this.lunarRowEls.set(e.id, row);
    }
    if (this.selectedLunarId !== null) {
      this.lunarRowEls.get(this.selectedLunarId)?.classList.add("selected");
    }
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, c => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!
  ));
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    /* Sits in the top-right column. The eclipse catalogue is a browse-and-pick surface
       (not the focal eclipse playback panel — that's the SunDiscPanel on the top-left
       next to the Clock). Top-right keeps it out of the way of the time + observer
       column. Tucks under the DataPanel's compact title bar when DataPanel is open. */
    #orrery-eclipse {
      position: fixed; top: 96px; right: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.5;
      padding: 10px 14px; border-radius: 6px;
      min-width: 220px;
      max-width: 280px;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-eclipse.hidden { display: none; }

    @media (max-width: 600px) {
      #orrery-eclipse {
        top: 56px; left: 8px; right: 8px;
        min-width: 0; max-width: none;
        max-height: calc(60vh - 56px);
        overflow-y: auto;
      }
    }
    .orrery-ecl-row {
      display: flex; justify-content: space-between; align-items: baseline;
      margin-bottom: 6px;
    }
    .orrery-ecl-title {
      color: #6e7a90; letter-spacing: 0.1em;
      text-transform: uppercase;
      font-size: 11px;
    }
    .orrery-ecl-close {
      color: #6e7a90;
      cursor: pointer;
      transition: color 125ms ease;
      margin-left: 1em;
    }
    .orrery-ecl-close:hover { color: #ff7a7a; }
    /* Two-tab strip just below the title — ☀ Solar / 🌑 Lunar. Active tab gets
       a brighter background + amber underline; inactive sits flat. */
    .orrery-ecl-tabs {
      display: flex; gap: 4px;
      margin-bottom: 8px;
    }
    .orrery-ecl-tab {
      flex: 1;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      color: #8a93a7;
      font-size: 11px;
      padding: 4px 6px;
      border-radius: 4px;
      cursor: pointer;
      transition: background 125ms ease, color 125ms ease, border-color 125ms ease;
      font-family: inherit;
    }
    .orrery-ecl-tab:hover {
      background: rgba(255, 255, 255, 0.07);
      color: #cfd6e4;
    }
    .orrery-ecl-tab.active {
      background: rgba(226, 180, 46, 0.14);
      border-color: rgba(226, 180, 46, 0.4);
      color: #ffd76a;
    }
    .orrery-ecl-list {
      display: flex; flex-direction: column; gap: 4px;
    }
    .orrery-ecl-list.hidden { display: none; }
    /* Rows are full-row click targets. Default state is a faint background so the row
       reads as a button; hover brightens; selected gets a strong amber left border +
       brighter background so the user can tell at a glance which eclipse they're on. */
    .orrery-ecl-item {
      padding: 6px 8px;
      border-radius: 4px;
      cursor: pointer;
      border-left: 3px solid transparent;
      background: rgba(255,255,255,0.02);
      transition: background 125ms ease, border-color 125ms ease;
      user-select: text;
    }
    .orrery-ecl-item:hover {
      background: rgba(255,255,255,0.07);
    }
    .orrery-ecl-item:focus-visible {
      outline: 1px solid rgba(226, 180, 46, 0.5);
      outline-offset: 1px;
    }
    .orrery-ecl-item.past .orrery-ecl-name,
    .orrery-ecl-item.past .orrery-ecl-line2,
    .orrery-ecl-item.past .orrery-ecl-line3 {
      opacity: 0.6;
    }
    .orrery-ecl-item.selected {
      background: rgba(226, 180, 46, 0.14);
      border-left-color: #e2b42e;
    }
    .orrery-ecl-item.selected:hover {
      background: rgba(226, 180, 46, 0.20);
    }
    .orrery-ecl-item.selected .orrery-ecl-jump   { color: #ffd76a; }
    .orrery-ecl-item.selected .orrery-ecl-name   { color: #fff; }
    .orrery-ecl-item.selected .orrery-ecl-peak   { color: #f5e7b8; }
    .orrery-ecl-item.selected .orrery-ecl-line3  { color: #cdb98a; }
    .orrery-ecl-line1 {
      display: flex; align-items: baseline; gap: 6px;
      margin-bottom: 2px;
    }
    .orrery-ecl-jump {
      color: #e2b42e;
      font-size: 13px;
      transition: color 125ms ease;
    }
    .orrery-ecl-item:hover .orrery-ecl-jump { color: #fff; }
    .orrery-ecl-name { color: #cfd6e4; font-size: 12px; line-height: 1.35; }
    .orrery-ecl-line2 {
      display: flex; gap: 8px;
      font-size: 11px;
      color: #8a93a7;
    }
    .orrery-ecl-peak { color: #cfd6e4; }
    .orrery-ecl-type { color: #6e7a90; text-transform: uppercase; letter-spacing: 0.05em; }
    .orrery-ecl-dur { color: #8a93a7; }
    .orrery-ecl-line3 {
      font-size: 11px; color: #7c869a; margin-top: 2px;
    }
    .orrery-ecl-hint {
      color: #555c6b; font-size: 11px; font-style: italic;
      margin-top: 8px; text-align: center;
    }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
