/**
 * ECLIPSE badge — top-right call-to-action that appears on its own when a real
 * eclipse is near, and takes itself away again afterwards.
 *
 * Why this exists: the Astro row's "Eclipse" toggle defaults to **off** (see
 * `DEFAULTS` in [Menu.ts](Menu.ts)). Without this badge, someone arriving at
 * earth-clock *during* the 2026-08-12 totality would see an ordinary globe —
 * no umbra, no path — unless they happened to click the wordmark and find the
 * toggle. The badge makes the site's hero event self-announcing.
 *
 * Visibility windows are deliberately asymmetric between the two kinds, and
 * symmetric before/after within each kind:
 *
 * - **Solar**: 3 weeks either side. A total eclipse is a travel-planning event
 *   people look forward to for weeks, and want to revisit afterwards.
 * - **Lunar**: 3 days either side. Lunar eclipses are frequent and visible from
 *   a whole hemisphere; a 3-week banner for each would make the badge wallpaper
 *   and it would stop meaning anything.
 *
 * When both windows are open at once (they overlap in late Aug 2026 — solar's
 * trailing window runs to 2 Sep, lunar's leads from 25 Aug) the event whose
 * peak is nearest in wall-clock time wins.
 *
 * ## Wall-clock, not simulated time
 *
 * Every other layer in the app consumes the shared `simulatedTime`. This badge
 * pointedly does not — it reads `Date.now()`. The badge is a statement about
 * the real world ("there is an eclipse coming, in your life, soon"), so warping
 * the clock to 2027 must not conjure a badge for an eclipse that is still a
 * year away in reality. Same reasoning as the live-data freshness gate, arrived
 * at from the opposite direction.
 */

import { ECLIPSE_CATALOG, type EclipseEvent } from "../data/eclipseCatalog";
import { LUNAR_ECLIPSE_CATALOG, type LunarEclipseEvent } from "../data/lunarEclipseCatalog";

const DAY_MS = 24 * 3600 * 1000;
/** Solar: 3 weeks either side of the event window. */
const SOLAR_WINDOW_MS = 21 * DAY_MS;
/** Lunar: 3 days either side. */
const LUNAR_WINDOW_MS = 3 * DAY_MS;

export type EclipseKind = "solar" | "lunar";

/** A catalogue event currently inside its badge window. */
export interface BadgeTarget {
  kind: EclipseKind;
  id: string;
  name: string;
  startUtc: Date;
  peakUtc: Date;
  endUtc: Date;
}

export interface EclipseBadgeCallbacks {
  /** Badge clicked — caller opens the eclipse panel on the right tab. */
  onOpen?: (target: BadgeTarget) => void;
  /**
   * The real eclipse window just opened (wall-clock now is between first and
   * last contact). Caller turns the eclipse layer on so a live visitor sees the
   * umbra without touching the menu. Fired **once per event id per session** —
   * if the user then switches the layer off, we leave it off rather than
   * re-enabling it a second later.
   */
  onLiveWindowOpen?: (target: BadgeTarget) => void;
  /**
   * Should the badge stand down? The badge shares the top-right corner with
   * DataPanel (`top: 16px`) and EclipsePanel (`top: 96px`). Rather than
   * reflowing those panels downward, the badge simply yields whenever either is
   * showing — clicking it opens EclipsePanel, so it retires the moment it has
   * done its job, and returns when the panel is closed.
   */
  isSuppressed?: () => boolean;
}

/**
 * Find the catalogue event whose badge window contains `now`, preferring the
 * one with the nearest peak. Exported for unit-testing the window arithmetic
 * without constructing DOM.
 */
export function badgeTargetAt(now: Date): BadgeTarget | null {
  const nowMs = now.getTime();
  const candidates: BadgeTarget[] = [];

  for (const e of ECLIPSE_CATALOG) {
    if (inWindow(e, nowMs, SOLAR_WINDOW_MS)) {
      candidates.push({ kind: "solar", ...pick(e) });
    }
  }
  for (const e of LUNAR_ECLIPSE_CATALOG) {
    if (inWindow(e, nowMs, LUNAR_WINDOW_MS)) {
      candidates.push({ kind: "lunar", ...pick(e) });
    }
  }
  if (!candidates.length) return null;

  candidates.sort(
    (a, b) =>
      Math.abs(a.peakUtc.getTime() - nowMs) - Math.abs(b.peakUtc.getTime() - nowMs),
  );
  return candidates[0];
}

type CatalogEvent = EclipseEvent | LunarEclipseEvent;

function inWindow(e: CatalogEvent, nowMs: number, marginMs: number): boolean {
  return (
    nowMs >= e.startUtc.getTime() - marginMs && nowMs <= e.endUtc.getTime() + marginMs
  );
}

function pick(e: CatalogEvent) {
  const { id, name, startUtc, peakUtc, endUtc } = e;
  return { id, name, startUtc, peakUtc, endUtc };
}

/**
 * Restrained countdown text. No units finer than a minute, no seconds ticking,
 * no bold numbers — the badge should read as a quiet note, not a launch clock.
 * Counts down to first contact, holds during the event, then counts up from
 * last contact so the badge still makes sense in its trailing window.
 */
export function countdownText(target: BadgeTarget, now: Date): string {
  const nowMs = now.getTime();
  if (nowMs >= target.startUtc.getTime() && nowMs <= target.endUtc.getTime()) {
    return "happening now";
  }
  if (nowMs < target.startUtc.getTime()) {
    return `in ${humanGap(target.startUtc.getTime() - nowMs)}`;
  }
  return `${humanGap(nowMs - target.endUtc.getTime())} ago`;
}

/**
 * Single coarsest sensible unit — "18 days", "2 hours", "14 minutes".
 *
 * Days are the coarsest unit on purpose: the widest window is 21 days, so a
 * weeks tier would round 18 days to "in 3 weeks" — vaguer than the truth and
 * stuck on the same string for a week at a time. "in 18 days" ticking down
 * daily is both more accurate and a better reason to come back tomorrow.
 */
function humanGap(ms: number): string {
  const minutes = Math.round(ms / 60_000);
  if (minutes < 1) return "moments";
  if (minutes < 60) return plural(minutes, "minute");
  const hours = Math.round(minutes / 60);
  if (hours < 24) return plural(hours, "hour");
  return plural(Math.round(hours / 24), "day");
}

function plural(n: number, unit: string): string {
  return `${n} ${unit}${n === 1 ? "" : "s"}`;
}

export class EclipseBadge {
  private readonly root: HTMLElement;
  private readonly subEl: HTMLElement;
  private readonly callbacks: EclipseBadgeCallbacks;
  private readonly timer: number;

  /** Current window occupant, or null when the badge is hidden. */
  private target: BadgeTarget | null = null;
  /** Event ids we have already fired `onLiveWindowOpen` for this session. */
  private readonly liveFired = new Set<string>();
  /** Last rendered sub-line, so we only touch the DOM when the text changes. */
  private lastSub = "";
  /** Debug override — when set, the ticker renders this instant instead of now.
   *  Lets us look at eclipse day without moving the system clock. */
  private previewNow: Date | null = null;

  constructor(parent: HTMLElement, callbacks: EclipseBadgeCallbacks = {}) {
    this.callbacks = callbacks;
    injectStyles();

    this.root = document.createElement("div");
    this.root.id = "orrery-eclipse-badge";
    this.root.classList.add("hidden");
    this.root.title = "Eclipse coming up — open the eclipse catalogue";
    this.root.innerHTML = `
      <span class="orrery-ecb-word">Eclipse</span>
      <span class="orrery-ecb-sub" id="orrery-ecb-sub"></span>
    `;
    parent.appendChild(this.root);
    this.subEl = this.root.querySelector("#orrery-ecb-sub") as HTMLElement;

    this.root.addEventListener("click", () => {
      if (this.target) this.callbacks.onOpen?.(this.target);
    });

    // A minute is the finest unit the copy ever shows, so a 1 s tick is far more
    // than the countdown needs — it's paced for the *suppression* check, which
    // has to notice a panel closing promptly enough that the badge's return
    // doesn't feel laggy. Cost is a scan of ~20 catalogue entries plus a string
    // compare; the DOM is only touched when the text actually changes.
    this.timer = window.setInterval(() => this.update(), 1000);
    this.update();
  }

  /**
   * Freeze the badge at a chosen instant for visual QA — `preview(new
   * Date("2026-08-12T17:00:00Z"))` shows the live-window state. Pass `null` to
   * hand control back to the wall clock. Without this the 1 s ticker would
   * overwrite a one-shot `update(date)` on its very next tick.
   */
  preview(now: Date | null) {
    this.previewNow = now;
    this.update();
  }

  /** Recompute window membership, copy, and visibility. Safe to call freely. */
  update(now: Date = this.previewNow ?? new Date()) {
    const target = badgeTargetAt(now);
    this.target = target;

    if (!target) {
      this.root.classList.add("hidden");
      return;
    }

    // Fire the live-window hook once per event, before suppression is applied —
    // turning the layer on matters even if a panel currently covers the badge.
    const live =
      now.getTime() >= target.startUtc.getTime() &&
      now.getTime() <= target.endUtc.getTime();
    if (live && !this.liveFired.has(target.id)) {
      this.liveFired.add(target.id);
      this.callbacks.onLiveWindowOpen?.(target);
    }

    if (this.callbacks.isSuppressed?.()) {
      this.root.classList.add("hidden");
      return;
    }

    const sub = countdownText(target, now);
    if (sub !== this.lastSub) {
      this.lastSub = sub;
      this.subEl.textContent = sub;
    }
    // "happening now" is the one moment worth a colour shift. Still no animation.
    this.subEl.classList.toggle("live", live);
    this.root.classList.remove("hidden");
  }

  destroy() {
    window.clearInterval(this.timer);
    this.root.remove();
  }
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    /* Mirrors the brand wordmark's treatment (same family, same plate, same
       #c9d2e3) so the two read as a matched pair across the top and bottom of
       the screen — but lighter and smaller, because the wordmark is the app's
       name and this is only a notice. */
    #orrery-eclipse-badge {
      position: fixed; top: 16px; right: 16px;
      display: flex; flex-direction: column; align-items: flex-end;
      background: rgba(0, 0, 5, 0.55);
      padding: 8px 16px; border-radius: 8px;
      font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
      z-index: 10;
      pointer-events: all;
      cursor: pointer;
      user-select: none;
    }
    #orrery-eclipse-badge.hidden { display: none; }
    .orrery-ecb-word {
      font-size: 20px;
      font-weight: 300;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #c9d2e3;
      transition: color 125ms ease;
      /* Uppercase + wide tracking leaves a trailing gap on the right edge;
         pull it back so the glyphs sit flush with the sub-line. */
      margin-right: -0.18em;
    }
    #orrery-eclipse-badge:hover .orrery-ecb-word { color: #fff; }
    .orrery-ecb-sub {
      font-size: 11px;
      letter-spacing: 0.04em;
      color: #6e7a90;
      margin-top: 1px;
    }
    .orrery-ecb-sub.live { color: #e0b050; }

    @media (max-width: 600px) {
      /* The Clock becomes a full-width bar pinned to top: 0 with pointer-events
         all, so the badge cannot live at the very top on mobile — it would cover
         the date/UTC text and steal taps from the bar. Drop to 56px, the same
         below-the-clock offset DataPanel and EclipsePanel use. Those two panels
         also start at 56px, but the badge yields to them via isSuppressed. */
      #orrery-eclipse-badge {
        top: 56px; right: 8px;
        padding: 6px 12px;
      }
      .orrery-ecb-word { font-size: 15px; letter-spacing: 0.14em; margin-right: -0.14em; }
      .orrery-ecb-sub { font-size: 10px; }
    }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
}
