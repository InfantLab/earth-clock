/**
 * Slim console logger preserved from the retired bottom-right "tools" panel.
 *
 * The panel's user-facing role (per-layer status, source, age) is now owned entirely
 * by [DataPanel](DataPanel.ts) via [DataRegistry](DataRegistry.ts). The diagnostic
 * astro readout + Use-test-data / Find-moon / Jump-to-eclipse buttons moved to
 * `window.__orrery` console helpers wired in main.ts.
 *
 * The `info` / `warn` / `pending` methods are kept here as thin console wrappers so
 * the dozens of loader call sites don't all need to be rewritten. They no longer
 * paint anything visible — that's what DataRegistry is for.
 */
export type DebugLevel = "info" | "warn" | "pending";

export class Debug {
  info(key: string, msg: string)    { this.log(key, msg, "info"); }
  warn(key: string, msg: string)    { this.log(key, msg, "warn"); }
  pending(key: string, msg: string) { this.log(key, msg, "pending"); }

  private log(key: string, msg: string, level: DebugLevel) {
    const tag = level === "warn" ? "warn" : level === "pending" ? "…" : "✓";
    if (level === "warn") console.warn(`[orrery] ${tag} ${key}: ${msg}`);
    else                  console.log (`[orrery] ${tag} ${key}: ${msg}`);
  }
}
