import type { DataRegistry, DataEntry } from "./DataRegistry";
import { SOURCE_URLS } from "./sourceUrls";

/**
 * Unified data panel (top-right). One row per data layer, columns:
 *
 *   <status>  <key>  <source-link>  <detail>  <age>
 *
 * Combines what used to live in two separate panels (the user-facing "Sources" with
 * source+age, and the diagnostic "Debug" with status+message). This single panel covers
 * both audiences: source label is a hyperlink for newcomers; status + detail + age cover
 * QA. The diagnostic "Tools" panel keeps the actually-interactive stuff — astro readout
 * and the Use test data / Find moon / Jump to eclipse buttons.
 *
 * Source URLs come from `SOURCE_URLS` — kept at the organisation overview level (e.g.
 * NOAA SWPC homepage rather than the JSON endpoint) so links don't rot when endpoints
 * change. Rows that aren't in the map render the source label as plain text.
 *
 * Pending rows (loader hasn't responded yet) appear *only* if the loader pre-registered
 * via `dataRegistry.report({ source, pending: true })` at startup — keeps the panel
 * showing the full row set from the first frame so users can see what's coming.
 *
 * Re-renders on every registry update + a 15 s timer so the "Xm ago" age strings stay
 * accurate without per-frame churn.
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
      <div class="orrery-data-title">data</div>
      <div class="orrery-data-rows" id="orrery-data-rows"></div>
    `;
    parent.appendChild(this.root);
    this.body = this.root.querySelector("#orrery-data-rows") as HTMLElement;

    registry.subscribe(() => this.render());
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
    const entries = this.registry.entries();
    if (!entries.length) {
      this.body.innerHTML = `<div class="orrery-data-empty">no data yet</div>`;
      return;
    }
    const rows = entries.map(([key, e]) => this.renderRow(key, e, now));
    this.body.innerHTML = rows.join("");
  }

  private renderRow(key: string, e: DataEntry, now: number): string {
    const status = statusOf(e, now);
    const ageText = ageOf(e, now);
    const url = SOURCE_URLS[key];
    const sourceHtml = url
      ? `<a class="orrery-data-source-link" href="${escapeAttr(url)}" target="_blank" rel="noopener">${escapeHtml(e.source)} ↗</a>`
      : `<span class="orrery-data-source-link">${escapeHtml(e.source)}</span>`;
    const detail = e.error
      ? escapeHtml(e.error)
      : e.detail
      ? escapeHtml(e.detail)
      : "";
    return (
      `<div class="orrery-data-row ${status.cls}">` +
        `<span class="orrery-data-status">${status.mark}</span>` +
        `<span class="orrery-data-key">${escapeHtml(key)}</span>` +
        `<span class="orrery-data-source">${sourceHtml}</span>` +
        `<span class="orrery-data-detail">${detail}</span>` +
        `<span class="orrery-data-age">${escapeHtml(ageText)}</span>` +
      `</div>`
    );
  }
}

interface RenderedStatus {
  mark: string;
  cls: string;
}
function statusOf(e: DataEntry, now: number): RenderedStatus {
  if (e.error)   return { mark: "✗", cls: "err" };
  if (e.bundled) return { mark: "●", cls: "static" };
  if (e.fetched) return isStale(e, now)
    ? { mark: "●", cls: "stale" }
    : { mark: "✓", cls: "ok" };
  return { mark: "⋯", cls: "pending" };
}

function ageOf(e: DataEntry, now: number): string {
  if (e.error)   return "fetch failed";
  if (e.bundled) return "bundled";
  if (!e.fetched) return "fetching…";
  return formatAge(now - e.fetched.getTime());
}

function isStale(e: DataEntry, now: number): boolean {
  if (!e.fetched || e.bundled || !e.refreshSeconds) return false;
  // Stale if older than 2× the expected refresh interval.
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
function escapeAttr(s: string): string {
  return s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    #orrery-data {
      position: fixed; top: 16px; right: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.55;
      padding: 10px 14px; border-radius: 6px;
      max-width: min(640px, 50vw);
      max-height: calc(100vh - 32px);
      overflow-y: auto;
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
    .orrery-data-rows {
      display: flex; flex-direction: column; gap: 2px;
    }
    /* Five-column grid: status (narrow), key (fixed), source (flex), detail (flex), age (narrow). */
    .orrery-data-row {
      display: grid;
      grid-template-columns: 1.4em 8em minmax(7em, max-content) 1fr auto;
      gap: 0.6em;
      align-items: baseline;
    }
    .orrery-data-status  { text-align: center; }
    .orrery-data-row.ok      .orrery-data-status { color: #6dd58c; }
    .orrery-data-row.ok      .orrery-data-age    { color: #6dd58c; }
    .orrery-data-row.stale   .orrery-data-status { color: #e2b42e; }
    .orrery-data-row.stale   .orrery-data-age    { color: #e2b42e; }
    .orrery-data-row.err     .orrery-data-status { color: #ff7a7a; }
    .orrery-data-row.err     .orrery-data-age    { color: #ff7a7a; }
    .orrery-data-row.pending .orrery-data-status { color: #d8c46e; }
    .orrery-data-row.pending .orrery-data-age    { color: #6e7a90; }
    .orrery-data-row.static  .orrery-data-status { color: #6e7a90; }
    .orrery-data-row.static  .orrery-data-age    { color: #6e7a90; }
    .orrery-data-key {
      color: #cfd6e4;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .orrery-data-source { overflow: hidden; }
    .orrery-data-source-link {
      color: #a4b0c6;
      text-decoration: none;
      transition: color 125ms ease;
      white-space: nowrap;
    }
    a.orrery-data-source-link:hover { color: #fff; text-decoration: underline; }
    .orrery-data-detail {
      color: #8a93a7;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .orrery-data-row.err .orrery-data-detail { color: #ff9a9a; }
    .orrery-data-empty   { color: #6e7a90; }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
