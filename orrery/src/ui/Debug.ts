/**
 * Diagnostic overlay (top-right). Shows per-layer load status, astro readouts (sub-solar /
 * sub-lunar lat/lon, moon distance), and a "Use test data" button that swaps live fetches
 * for synthetic fixtures — useful for verifying the rendering pipeline when an upstream
 * data source is misbehaving.
 *
 * Each layer's loader is expected to call `debug.info("clouds", "loaded …")` on success and
 * `debug.warn("clouds", "fetch failed: …")` on failure. The panel re-renders on every set.
 */
export type DebugLevel = "info" | "warn" | "pending";

export class Debug {
  private readonly root: HTMLElement;
  private readonly statusEl: HTMLElement;
  private readonly astroEl: HTMLElement;
  private readonly testDataBtn: HTMLButtonElement;
  private readonly rows = new Map<string, { msg: string; level: DebugLevel }>();
  private astroLine = "";
  private testDataHandler: (() => void) | null = null;
  private liveDataHandler: (() => void) | null = null;
  private findMoonHandler: (() => void) | null = null;
  private jumpEclipseHandler: (() => void) | null = null;
  /** Whether the user has currently swapped in synthetic fixtures via the button. */
  private testDataActive = false;

  constructor(parent: HTMLElement) {
    injectStyles();

    this.root = document.createElement("div");
    this.root.id = "orrery-debug";
    this.root.classList.add("hidden");
    this.root.innerHTML = `
      <div class="orrery-debug-title">data</div>
      <pre class="orrery-debug-astro" id="orrery-debug-astro"></pre>
      <pre class="orrery-debug-rows" id="orrery-debug-rows"></pre>
      <div class="orrery-debug-btnrow">
        <button class="orrery-debug-btn" id="orrery-debug-testdata">Use test data</button>
        <button class="orrery-debug-btn" id="orrery-debug-findmoon">Find moon</button>
        <button class="orrery-debug-btn" id="orrery-debug-eclipse">Jump to eclipse</button>
      </div>
    `;
    parent.appendChild(this.root);

    this.statusEl = this.root.querySelector("#orrery-debug-rows") as HTMLElement;
    this.astroEl  = this.root.querySelector("#orrery-debug-astro")  as HTMLElement;
    this.testDataBtn = this.root.querySelector("#orrery-debug-testdata") as HTMLButtonElement;
    this.testDataBtn.addEventListener("click", () => {
      if (this.testDataActive) {
        this.testDataActive = false;
        this.refreshTestDataBtn();
        this.liveDataHandler?.();
      } else {
        this.testDataActive = true;
        this.refreshTestDataBtn();
        this.testDataHandler?.();
      }
    });
    const findBtn = this.root.querySelector("#orrery-debug-findmoon") as HTMLButtonElement;
    findBtn.addEventListener("click", () => this.findMoonHandler?.());
    const eclipseBtn = this.root.querySelector("#orrery-debug-eclipse") as HTMLButtonElement;
    eclipseBtn.addEventListener("click", () => this.jumpEclipseHandler?.());
  }

  setVisible(b: boolean) {
    this.root.classList.toggle("hidden", !b);
  }

  /** Hook for the "Use test data" button — main.ts wires this to load fixtures. */
  onUseTestData(fn: () => void) {
    this.testDataHandler = fn;
  }

  /** Hook for switching back to live data after the user toggles test data off. */
  onUseLiveData(fn: () => void) {
    this.liveDataHandler = fn;
  }

  private refreshTestDataBtn() {
    this.testDataBtn.textContent = this.testDataActive ? "Use live data" : "Use test data";
    this.testDataBtn.classList.toggle("active", this.testDataActive);
  }

  /** Hook for the "Find moon" button — main.ts wires this to re-aim the camera at the moon. */
  onFindMoon(fn: () => void) {
    this.findMoonHandler = fn;
  }

  /** Hook for the "Jump to eclipse" button — main.ts snaps simulatedTime + sets time-warp. */
  onJumpEclipse(fn: () => void) {
    this.jumpEclipseHandler = fn;
  }

  info(key: string, msg: string)    { this.set(key, msg, "info"); }
  warn(key: string, msg: string)    { this.set(key, msg, "warn"); }
  pending(key: string, msg: string) { this.set(key, msg, "pending"); }

  /** Per-frame astro readout — sub-solar/sub-lunar position. */
  setAstro(line: string) {
    if (line === this.astroLine) return;
    this.astroLine = line;
    this.astroEl.textContent = line;
  }

  private set(key: string, msg: string, level: DebugLevel) {
    this.rows.set(key, { msg, level });
    console.log(`[orrery] ${key}: ${msg}`);
    this.render();
  }

  private render() {
    const keys = Array.from(this.rows.keys()).sort();
    const lines = keys.map(k => {
      const r = this.rows.get(k)!;
      const mark = r.level === "warn" ? "✗" : r.level === "pending" ? "⋯" : "✓";
      const cls  = r.level === "warn" ? "warn" : r.level === "pending" ? "pending" : "ok";
      const pad  = k.padEnd(11, " ");
      return `<span class="${cls}">${mark} ${pad}</span>${escapeHtml(r.msg)}`;
    });
    this.statusEl.innerHTML = lines.join("\n");
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]!));
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    #orrery-debug {
      position: fixed; bottom: 16px; right: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.5;
      padding: 10px 14px; border-radius: 6px;
      max-width: 360px;
      z-index: 11;
      pointer-events: all;
      user-select: text;
    }
    #orrery-debug.hidden { display: none; }
    .orrery-debug-title {
      color: #6e7a90; letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .orrery-debug-astro {
      margin: 0 0 8px 0; padding: 0;
      color: #a4b0c6; font-family: inherit; font-size: inherit;
      white-space: pre-wrap;
    }
    .orrery-debug-rows {
      margin: 0; padding: 0; font-family: inherit; font-size: inherit;
      white-space: pre-wrap;
    }
    .orrery-debug-rows .ok      { color: #6dd58c; }
    .orrery-debug-rows .warn    { color: #ff7a7a; }
    .orrery-debug-rows .pending { color: #d8c46e; }
    .orrery-debug-btnrow {
      display: flex; gap: 6px; margin-top: 10px;
    }
    .orrery-debug-btn {
      flex: 1;
      background: rgba(255,255,255,0.06);
      color: #cfd6e4;
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 4px; padding: 5px 8px;
      font-family: inherit; font-size: 12px;
      cursor: pointer;
    }
    .orrery-debug-btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .orrery-debug-btn.active {
      background: rgba(226, 180, 46, 0.18);
      border-color: rgba(226, 180, 46, 0.55);
      color: #e2b42e;
    }
  `;
  const el = document.createElement("style");
  el.textContent = css;
  document.head.appendChild(el);
}
