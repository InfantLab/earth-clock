/**
 * Shared status store for every data layer's source and freshness.
 *
 * Each loader pushes one of three states:
 *   • `{ source, fetched }`      — fresh data just arrived
 *   • `{ source, error }`        — fetch failed (DataPanel marks the row red)
 *   • `{ source, bundled: true }` — static asset (textures, Natural Earth coastlines)
 *
 * Both `DataPanel` (user-facing) and `Debug` (developer-facing) can subscribe; we keep
 * one source of truth so they never drift out of sync.
 */
export interface DataEntry {
  /** Human-readable source label, e.g. "NASA GIBS VIIRS NOAA-20". */
  source: string;
  /** Timestamp of the last successful fetch. Undefined → never fetched (or bundled). */
  fetched?: Date;
  /** Optional detail (count, date stamp, valid-time, etc.) shown after the source label. */
  detail?: string;
  /** Set when the loader failed; renders the row in the error colour. */
  error?: string;
  /** Static asset that ships with the build — no age, no refresh interval. */
  bundled?: boolean;
  /** Expected refresh interval in seconds. If `fetched` is older than 2× this, mark stale. */
  refreshSeconds?: number;
}

export class DataRegistry {
  private rows = new Map<string, DataEntry>();
  private subscribers = new Set<() => void>();
  private orderIndex = new Map<string, number>();

  report(key: string, entry: DataEntry): void {
    this.rows.set(key, entry);
    this.subscribers.forEach(fn => fn());
  }

  get(key: string): DataEntry | undefined {
    return this.rows.get(key);
  }

  /**
   * Define a preferred display order. Keys in the array sort to the top in the listed
   * order; any key not in the array falls back to alphabetical at the end. Called once
   * at startup from main.ts to match the menu's group order — so the user sees data
   * sources in the same visual order as their toggle buttons.
   */
  setOrder(keys: string[]): void {
    this.orderIndex.clear();
    keys.forEach((k, i) => this.orderIndex.set(k, i));
    this.subscribers.forEach(fn => fn());
  }

  entries(): Array<[string, DataEntry]> {
    const FALLBACK = Number.MAX_SAFE_INTEGER;
    return Array.from(this.rows.entries()).sort((a, b) => {
      const ia = this.orderIndex.get(a[0]) ?? FALLBACK;
      const ib = this.orderIndex.get(b[0]) ?? FALLBACK;
      if (ia !== ib) return ia - ib;
      return a[0].localeCompare(b[0]);
    });
  }

  /** Subscribe to changes. Returns an unsubscribe function. */
  subscribe(fn: () => void): () => void {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
}
