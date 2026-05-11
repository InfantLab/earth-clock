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

  report(key: string, entry: DataEntry): void {
    this.rows.set(key, entry);
    this.subscribers.forEach(fn => fn());
  }

  get(key: string): DataEntry | undefined {
    return this.rows.get(key);
  }

  entries(): Array<[string, DataEntry]> {
    return Array.from(this.rows.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }

  /** Subscribe to changes. Returns an unsubscribe function. */
  subscribe(fn: () => void): () => void {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
}
