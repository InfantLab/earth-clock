import type { DataRegistry, DataEntry } from "./DataRegistry";

/**
 * User-facing "Data sources" panel. Lists every layer's source label + last-fetched age,
 * with stale entries called out in amber and errors in red. Toggled by the menu's "Data"
 * entry; positioned top-right, narrow enough to leave the globe unobscured.
 *
 * Re-renders on every registry update + a 15 s timer so ages tick without user interaction.
 */
export class DataPanel {
  private readonly root: HTMLElement;
  private readonly body: HTMLElement;
  private readonly registry: DataRegistry;
  private readonly ageTimer: number;

  constructor(parent: HTMLElement, registry: DataRegistry) {
    injectStyles();
    this.registry = registry;

    this.root = document.createElement("div");
    this.root.id = "orrery-data";
    this.root.classList.add("hidden");
    this.root.innerHTML = `
      <div class="orrery-data-title">data sources</div>
      <div class="orrery-data-rows" id="orrery-data-rows"></div>
    `;
    parent.appendChild(this.root);
    this.body = this.root.querySelector("#orrery-data-rows") as HTMLElement;

    registry.subscribe(() => this.render());
    // Re-render every 15 s so the "Xm ago" age strings stay accurate without churning
    // when nothing else triggers a render.
    this.ageTimer = window.setInterval(() => this.render(), 15_000);
    this.render();
  }

  setVisible(visible: boolean) {
    this.root.classList.toggle("hidden", !visible);
    if (visible) this.render();
  }

  destroy() {
    window.clearInterval(this.ageTimer);
    this.root.remove();
  }

  private render() {
    const now = Date.now();
    const rows = this.registry.entries().map(([key, e]) => {
      const className = e.error ? "err" : e.bundled ? "static" : isStale(e, now) ? "stale" : "ok";
      const ageText = e.error      ? "fetch failed"
                    : e.bundled    ? "bundled"
                    : !e.fetched   ? "—"
                    : formatAge(now - e.fetched.getTime());
      const detail = e.detail ? `  ${escapeHtml(e.detail)}` : "";
      return (
        `<div class="orrery-data-row ${className}">` +
          `<span class="orrery-data-key">${escapeHtml(key)}</span>` +
          `<span class="orrery-data-source">${escapeHtml(e.source)}${detail}</span>` +
          `<span class="orrery-data-age">${escapeHtml(ageText)}</span>` +
        `</div>`
      );
    });
    this.body.innerHTML = rows.length ? rows.join("") : `<div class="orrery-data-empty">no data yet</div>`;
  }
}

function isStale(e: DataEntry, now: number): boolean {
  if (!e.fetched || e.bundled || !e.refreshSeconds) return false;
  // Stale if older than 2× the expected refresh interval. Loaders publish their interval
  // so we don't hard-code timings here.
  return (now - e.fetched.getTime()) > e.refreshSeconds * 2 * 1000;
}

function formatAge(ms: number): string {
  const sec = Math.floor(ms / 1000);
  if (sec < 60)   return `${sec}s ago`;
  const min = Math.floor(sec / 60);
  if (min < 60)   return `${min}m ago`;
  const hr  = Math.floor(min / 60);
  if (hr  < 48)   return `${hr}h ago`;
  const day = Math.floor(hr / 24);
  return `${day}d ago`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]!));
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    #orrery-data {
      position: fixed; top: 16px; right: 16px;
      background: rgba(5, 10, 30, 0.78);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.55;
      padding: 10px 14px; border-radius: 6px;
      min-width: 320px;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-data.hidden { display: none; }
    .orrery-data-title {
      color: #6e7a90; letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .orrery-data-rows { display: flex; flex-direction: column; gap: 2px; }
    .orrery-data-row {
      display: grid;
      grid-template-columns: 7.5em 1fr auto;
      gap: 0.6em;
      align-items: baseline;
    }
    .orrery-data-row.ok      .orrery-data-age { color: #6dd58c; }
    .orrery-data-row.stale   .orrery-data-age { color: #e2b42e; }
    .orrery-data-row.err     .orrery-data-age { color: #ff7a7a; }
    .orrery-data-row.static  .orrery-data-age { color: #6e7a90; }
    .orrery-data-key    { color: #cfd6e4; }
    .orrery-data-source { color: #a4b0c6; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .orrery-data-empty  { color: #6e7a90; }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
