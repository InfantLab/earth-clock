/**
 * Top-left floating panel listing the bundled solar-eclipse catalogue.
 *
 * Tied to the date/time display: sits directly under the Clock so the user reads
 * "current time" and "next eclipse" as one column. Each entry shows the event
 * name, peak time UTC, region, and (for total/annular events) maximum totality
 * duration.
 *
 * **Selection**: clicking anywhere on a row picks that eclipse — snaps
 * simulatedTime to T−1 minute of the peak, spins time-warp to 60×, swaps the
 * 3D EclipseLayer over to that event's path, and highlights the row. The ▶
 * icon is a visual affordance; the whole row is the click target.
 *
 * Visibility is controlled by the menu's "Eclipse" entry — that's also what
 * toggles the 3D EclipseLayer mesh, so panel + render stay in lock-step.
 */
import { ECLIPSE_CATALOG, type EclipseEvent } from "../data/eclipseCatalog";

export interface EclipsePanelCallbacks {
  /** Wire to main.ts: snap simulatedTime to T-1m of the event, set warp to 60×,
   *  turn the eclipse layer on. */
  onJump?: (event: EclipseEvent) => void;
  /** Close-button hook — main.ts flips the Eclipse menu toggle off. */
  onClose?: () => void;
}

export class EclipsePanel {
  private readonly root: HTMLElement;
  private readonly listEl: HTMLElement;
  private readonly callbacks: EclipsePanelCallbacks;
  /** Chronological order — oldest first. User-facing ordering: history at the top,
   *  upcoming at the bottom, so the user reads the catalogue as a timeline rather
   *  than "current first". */
  private readonly sorted: EclipseEvent[];
  /** Row elements keyed by event id, so `setSelected(id)` can flip the highlight
   *  without re-rendering the whole list. */
  private readonly rowEls = new Map<string, HTMLElement>();
  private selectedId: string | null = null;

  constructor(parent: HTMLElement, callbacks: EclipsePanelCallbacks = {}) {
    injectStyles();
    this.callbacks = callbacks;

    this.sorted = [...ECLIPSE_CATALOG].sort(
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
      <div class="orrery-ecl-list" id="orrery-ecl-list"></div>
      <div class="orrery-ecl-hint">
        click a row to jump to T−1m at 60× warp
      </div>
    `;
    parent.appendChild(this.root);

    this.listEl = this.root.querySelector("#orrery-ecl-list") as HTMLElement;
    const closeBtn = this.root.querySelector("#orrery-ecl-close") as HTMLElement;
    closeBtn.addEventListener("click", () => this.callbacks.onClose?.());

    this.renderList();
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
  }

  /**
   * Mark a catalogued eclipse as the currently-selected one — visually highlights
   * the row and clears the previous selection. Called from main.ts whenever the
   * user jumps to an eclipse (via the panel's own click, the console helper, or
   * any future entry point). Passing null clears the highlight.
   */
  setSelected(id: string | null) {
    if (this.selectedId === id) return;
    if (this.selectedId !== null) {
      this.rowEls.get(this.selectedId)?.classList.remove("selected");
    }
    this.selectedId = id;
    if (id !== null) {
      this.rowEls.get(id)?.classList.add("selected");
    }
  }

  private renderList() {
    const nowMs = Date.now();
    this.listEl.innerHTML = "";
    this.rowEls.clear();
    for (const e of this.sorted) {
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
      // Full-row click target. Keyboard activation (Enter / Space) too, so the
      // panel is accessible — same affordance as a button.
      row.addEventListener("click", () => this.callbacks.onJump?.(e));
      row.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          this.callbacks.onJump?.(e);
        }
      });
      this.listEl.appendChild(row);
      this.rowEls.set(e.id, row);
    }
    // Restore selection highlight if one was set before re-render.
    if (this.selectedId !== null) {
      this.rowEls.get(this.selectedId)?.classList.add("selected");
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
    /* Sits in the top-left column directly under the Clock + Location panel. The user
       reads "current time" and "next eclipse" together — the panel is intentionally
       narrow (matches Location panel width) so the column stays tidy. */
    #orrery-eclipse {
      position: fixed; top: 96px; left: 16px;
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
    .orrery-ecl-list {
      display: flex; flex-direction: column; gap: 4px;
    }
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
