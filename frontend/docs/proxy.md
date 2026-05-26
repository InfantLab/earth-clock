# CORS proxy

How the frontend handles upstream data feeds that don't ship CORS headers, in both development and production.

---

## Why we need this

A browser will happily *send* a fetch request to any URL, but it will refuse to give the *response* to the JavaScript that asked for it unless the response includes an `Access-Control-Allow-Origin` header naming the page's origin (or `*`). This is the **same-origin policy** — without it, any random site you visit could silently read your logged-in bank balance using cookies the browser already has.

Most of the frontend's data sources do ship that header, so we can fetch them directly from the browser:

| Source | CORS? | Notes |
|---|---|---|
| NASA GIBS (`gibs.earthdata.nasa.gov`) | ✅ | True-color cloud composite |
| NOAA SWPC (`services.swpc.noaa.gov`) | ✅ | Aurora oval + Kp index |
| NASA FIRMS (`firms.modaps.eosdis.nasa.gov`) | ✅ | Active fire detections |
| Natural Earth (bundled) | n/a | Loaded from our own static files |

But **NHC's `CurrentStorms.json`** does *not* send the header. The browser fetches the JSON, but then refuses to expose it to our code — we see a CORS error in the console.

The fix is a **proxy**: a small server we control, on the *same origin* as the page, that fetches the upstream data on the browser's behalf and forwards the response with a permissive `Access-Control-Allow-Origin` header. Server-to-server traffic doesn't have a same-origin restriction; only the browser does.

---

## What we evaluated

| Option | Monthly cost | Setup time | Notes |
|---|---|---|---|
| **CapRover NGINX rule** | $0 | ~10 min | Uses existing host; same-origin URLs; no new service to maintain |
| Cloudflare Worker | $0 (free tier covers any realistic scale) | ~30 min | Separate from main host; caching + rate-limit free; adds a service |
| Community CORS proxy (corsproxy.io etc.) | $0 | ~2 min | Third-party in the data path; could disappear or throttle; not for prod |
| Vercel / Netlify Edge Function | $0 (generous free tier) | ~20 min | Same shape as CF Worker, similar limits |
| Self-hosted VPS / Pi | depends on what you already pay for | ~15 min | More moving parts, only worth it if you already have one |

**Decision**: CapRover NGINX rule. earth-clock.onemonkey.org already runs CapRover with NGINX out front; adding the proxy is an NGINX-config-override paste in the CapRover UI. Zero additional infra, no monthly cost, same-origin URLs which avoids future cookie/auth edge cases.

Migration path if requirements grow: drop a Cloudflare Worker in front later. The code in the frontend doesn't need to change — only the path-routing rule moves.

---

## Architecture

Application code fetches a single path, `/proxy/nhc/CurrentStorms.json`. What handles that path depends on where the code is running:

```
┌─────────────────────────────────────────────────────────────┐
│ Development                                                 │
│                                                             │
│   browser (localhost:5173) ──fetch──> Vite dev-server       │
│                                            │                │
│                                            ▼ proxy          │
│                                       NHC origin            │
│   (Vite config: server.proxy)                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Production                                                  │
│                                                             │
│   browser (earth-clock.onemonkey.org) ──fetch──> NGINX      │
│                                                     │       │
│                                                     ▼ proxy │
│                                                NHC origin   │
│   (CapRover NGINX Config Override)                          │
└─────────────────────────────────────────────────────────────┘
```

The application code is **identical** in both cases. `src/data/nhcLoader.ts` uses the path `/proxy/nhc/CurrentStorms.json`. Whichever machine the page is loaded from, *that* machine's reverse proxy handles the path.

This symmetry is the main reason for using the same prefix (`/proxy/<source>/...`) in dev and prod. It also keeps any future proxied sources consistent: `/proxy/oscar/...`, `/proxy/<future-source>/...`, etc.

---

## Development setup

Already done. [vite.config.ts](../vite.config.ts) has:

```ts
server: {
  proxy: {
    "/proxy/nhc": {
      target: "https://www.nhc.noaa.gov",
      changeOrigin: true,
      secure: true,
      rewrite: (path) => path.replace(/^\/proxy\/nhc/, ""),
    },
  },
},
```

Vite installs middleware that catches any request whose URL starts with `/proxy/nhc`, strips that prefix, and re-issues the request server-side to `https://www.nhc.noaa.gov`. The response is returned to the browser as if it came from `localhost:5173`.

To verify it's working:

```bash
# Start the dev server in one terminal
cd frontend
npm run dev

# In another terminal:
curl -i http://localhost:5173/proxy/nhc/CurrentStorms.json
```

You should see `200 OK` and a JSON payload like `{"activeStorms": []}`.

---

## Production setup (CapRover)

CapRover sits behind NGINX. Each app has a **"NGINX Config Override"** panel in the CapRover dashboard where you can paste custom `location` blocks. The the frontend app gets one location block per proxied upstream.

### 1. Find the right CapRover app

In the CapRover dashboard, open the app that serves the frontend (likely the same app that serves classic earth-clock today, until the cutover). Scroll down to **HTTP Settings** → **Edit Default NGINX Configurations**.

### 2. Paste the location block

Inside the `server` block, alongside the existing `location /` directive, add:

```nginx
# Reverse-proxy for NHC tropical cyclone feed (no CORS upstream).
# Same URL pattern as dev (Vite proxy), so application code is unchanged.
location /proxy/nhc/ {
    proxy_pass         https://www.nhc.noaa.gov/;
    proxy_ssl_server_name on;
    proxy_set_header   Host www.nhc.noaa.gov;
    proxy_set_header   User-Agent "earth-clock (earth-clock.onemonkey.org)";
    proxy_hide_header  Set-Cookie;

    # Browser sees a same-origin response, so technically CORS isn't required,
    # but adding the header makes the response safe to use from any future
    # alternate origin and matches what a CDN like Cloudflare would do.
    add_header Access-Control-Allow-Origin *  always;
    add_header Access-Control-Allow-Methods "GET, HEAD, OPTIONS" always;

    # Don't expose upstream cookies or error pages to the client.
    proxy_intercept_errors on;

    # Short cache so a flurry of visitors during an active hurricane doesn't
    # hammer NHC's server. 60 s is well below NHC's own update cadence (~15 min
    # during active storms) so freshness is preserved.
    proxy_cache_valid 200 60s;
}
```

The trailing slash on `proxy_pass https://www.nhc.noaa.gov/;` is significant: it tells NGINX to strip the `/proxy/nhc/` prefix when forwarding, matching what the Vite dev proxy does.

### 3. Save and verify

CapRover applies the config and reloads NGINX. Then from anywhere:

```bash
curl -i https://earth-clock.onemonkey.org/proxy/nhc/CurrentStorms.json
```

Expected response:

```
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD, OPTIONS
Content-Type: application/json
...

{"activeStorms": []}
```

The the frontend app, once it's deployed at `earth-clock.onemonkey.org`, will start receiving live NHC data automatically — no code changes needed.

---

## Adding a new proxied source

When some future upstream feed (likely OSCAR ocean currents via NASA Earthdata, which needs server-side auth) also requires a proxy, follow the same pattern:

1. **Pick a path prefix**: `/proxy/<source-id>/`.
2. **Add a Vite dev proxy entry** in [vite.config.ts](../vite.config.ts).
3. **Add an NGINX location block** in CapRover with the same prefix.
4. **Update the loader** in `src/data/<source>Loader.ts` to fetch the local path.

The application code never knows or cares which machine answered the request — only that the response is on the same origin.

---

## Cost & operational notes

- **Monthly cost**: $0. The proxy uses the existing CapRover instance.
- **Bandwidth**: NHC's CurrentStorms.json is < 50 KB even during peak hurricane season. With 60-second NGINX caching, a single popular hour might issue 60 upstream requests. Trivial.
- **Reliability**: tied to the same host as the rest of the site. If `earth-clock.onemonkey.org` is down, the proxy is too — but then nobody's loading the frontend anyway.
- **Migration**: if we ever want global edge caching, multi-upstream routing, or to decouple proxy uptime from the main site, we can drop a Cloudflare Worker in front. It implements the same URL contract (`/proxy/<source>/`), so the frontend code wouldn't change — only the routing layer would.

---

## Related

- [PLAN.md](../PLAN.md) — "Production CORS proxy" row in the Infrastructure table.
- [vite.config.ts](../vite.config.ts) — dev-side proxy.
- [src/data/nhcLoader.ts](../src/data/nhcLoader.ts) — the one current consumer of the proxy.
