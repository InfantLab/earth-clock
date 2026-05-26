/**
 * Live lightning-strike feed from the Blitzortung community network.
 *
 * `wss://ws1.blitzortung.org/` streams strikes globally with ~200 ms latency. The payload
 * is LZW-style-compressed text that decodes to JSON of the form
 *   `{"time":<ns since epoch>, "lat":<deg>, "lon":<deg>, "pol":<-1|0|+1>, ...}`.
 *
 * The endpoint is community-run and not officially documented — production deployment may
 * want to either negotiate a proper feed or proxy through our own server to avoid being
 * blocked by origin filtering. See PLAN.md "Lightning" entry for the open question.
 *
 * Usage:
 *   const loader = new LightningLoader({
 *     onStrike: s => layer.addStrike(s),
 *     onStatus: (st, d) => console.log(st, d),
 *   });
 *   loader.start();
 */

export interface LightningStrike {
  time: Date;
  lat: number;
  lon: number;
  /** Polarity: −1 negative, +1 positive, 0 unknown / mixed. */
  polarity: number;
}

export type LightningStatus = "connecting" | "connected" | "disconnected" | "error";

export interface LightningLoaderEvents {
  onStrike?: (strike: LightningStrike) => void;
  onStatus?: (status: LightningStatus, detail?: string) => void;
}

const WS_URL = "wss://ws1.blitzortung.org/";
const RECONNECT_DELAY_MS = 5000;

export class LightningLoader {
  private ws: WebSocket | null = null;
  private reconnectTimer: number | null = null;
  private stopped = false;
  private strikeCount = 0;
  private lastStrike: Date | null = null;
  private connectedSince: Date | null = null;

  constructor(private readonly events: LightningLoaderEvents = {}) {}

  start() {
    if (this.ws || this.stopped) return;
    this.stopped = false;
    this.connect();
  }

  stop() {
    this.stopped = true;
    if (this.reconnectTimer !== null) {
      window.clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  /** Snapshot of the loader's state for diagnostics / the DataPanel. */
  get stats(): { count: number; last: Date | null; connectedSince: Date | null } {
    return { count: this.strikeCount, last: this.lastStrike, connectedSince: this.connectedSince };
  }

  private connect() {
    this.events.onStatus?.("connecting");
    try {
      this.ws = new WebSocket(WS_URL);
    } catch (e) {
      this.events.onStatus?.("error", e instanceof Error ? e.message : String(e));
      this.scheduleReconnect();
      return;
    }

    this.ws.onopen = () => {
      // Blitzortung subscription: `{"a": 111}` requests the global strike stream.
      // Other values yield filtered streams (per-region, per-station) — `111` is the firehose.
      try { this.ws?.send(JSON.stringify({ a: 111 })); } catch { /* swallow */ }
      this.connectedSince = new Date();
      this.events.onStatus?.("connected");
    };

    this.ws.onmessage = (event) => {
      if (typeof event.data !== "string") return;
      let json: string;
      try {
        json = lzwDecode(event.data);
      } catch {
        return; // malformed frame — keep listening
      }
      let obj: Record<string, unknown>;
      try {
        obj = JSON.parse(json);
      } catch {
        return;
      }
      const lat = num(obj.lat);
      const lon = num(obj.lon);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;

      // Blitzortung publishes `time` in nanoseconds since epoch. Fall back to "now" if it's
      // missing or absurd. The wall-clock delta is < 1 s anyway (real-time stream), so it
      // doesn't visibly matter for the flash animation.
      const rawTime = num(obj.time);
      const ms = Number.isFinite(rawTime)
        ? rawTime > 1e15 ? rawTime / 1e6           // nanoseconds → ms
        : rawTime > 1e12 ? rawTime / 1000          // microseconds → ms
        : rawTime                                  // already ms
        : Date.now();

      const strike: LightningStrike = {
        time: new Date(ms),
        lat,
        lon,
        polarity: num(obj.pol) || 0,
      };
      this.strikeCount++;
      this.lastStrike = strike.time;
      this.events.onStrike?.(strike);
    };

    this.ws.onerror = () => {
      this.events.onStatus?.("error", "WebSocket error");
    };

    this.ws.onclose = () => {
      this.connectedSince = null;
      this.ws = null;
      this.events.onStatus?.("disconnected");
      if (!this.stopped) this.scheduleReconnect();
    };
  }

  private scheduleReconnect() {
    if (this.reconnectTimer !== null || this.stopped) return;
    this.reconnectTimer = window.setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, RECONNECT_DELAY_MS);
  }
}

function num(v: unknown): number {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : NaN;
  }
  return NaN;
}

/**
 * LZW-style decoder for Blitzortung's stream payloads. Adapted from the public reference
 * implementation that ships in their viewer's JavaScript. The compression is identical to
 * the LZW variant used in GIF: each input character either references an existing
 * dictionary entry or extends one with the prefix's first char.
 */
function lzwDecode(input: string): string {
  if (input.length === 0) return "";
  const dict: Record<number, string> = {};
  const chars = input.split("");
  let prev = chars[0];
  let result = prev;
  let nextCode = 256;
  for (let i = 1; i < chars.length; i++) {
    const code = chars[i].charCodeAt(0);
    let curr: string;
    if (code < 256) {
      curr = chars[i];
    } else {
      curr = dict[code] ?? (prev + prev.charAt(0));
    }
    result += curr;
    dict[nextCode++] = prev + curr.charAt(0);
    prev = curr;
  }
  return result;
}
