# Deployment guide — CapRover at earth-clock.onemonkey.org

This guide describes the current production deployment of earth-clock to CapRover, as of v0.1.0 (the cutover release where the 3D WebGL rebuild — `frontend/` in the source tree, previously codenamed *orrery* — became the default at the site root).

For day-to-day development workflow, see [frontend/README.md](frontend/README.md). For the original v0.1.0 cutover procedure (a one-time file-move plus build), see [frontend/docs/cutover.md](frontend/docs/cutover.md). For the NGINX CORS-proxy rule that needs to be in place for the NHC tropical-cyclone feed, see [frontend/docs/proxy.md](frontend/docs/proxy.md).

## What runs in production

A single CapRover app (`earth-clock`) is deployed from this repository's `master` branch on push. Inside the container, [`server.js`](server.js) is a minimal Node static-file server that serves `public/` over HTTP on whichever port CapRover assigns. The same process also runs [`weather-service.js`](weather-service.js) in the background, which downloads GFS GRIB2 data from NOAA NOMADS every 6 hours, decodes it with the pure-JS `grib-js` library, and writes JSON files to `public/data/weather/current/` for the frontends to consume.

The frontends that share this `public/` tree:

| URL path | What's served | Source |
|---|---|---|
| `/` | The 3D WebGL experience (default) | `public/index.html` + `public/assets/` (Vite production build) |
| `/classic/` | The classic earth-clock archive | `public/classic/*` (preserved verbatim from pre-cutover) |
| `/about/` | The detailed about page | `public/about/index.html` |
| `/data/*` | Shared GFS weather + OSCAR ocean-currents JSON | `public/data/*` (refreshed by weather-service) |
| `/textures/*` | frontend 3D assets (earth, moon, starmap) | `public/textures/*` |
| `/proxy/nhc/*` | Reverse-proxy to NHC for CORS-unfriendly tropical-cyclone feeds | NGINX override on the CapRover app, see §5 |
| `/proxy/geocode/*` | Reverse-proxy to LocationIQ reverse geocoder (click-to-pin) | NGINX override, see §5b |

## Repository layout

```
earth-clock/
├── frontend/                 # 3D rebuild — TypeScript + Three.js + Vite
│   ├── src/                # source code
│   ├── public/             # frontend's bundled static assets (textures/, etc.)
│   ├── package.json        # version (currently 0.1.0)
│   └── docs/               # cutover.md, proxy.md, qa-checklist.md
├── public/                 # served at the site root
│   ├── index.html          # ← frontend production build (output of BUILD_AS_ROOT=1 npm run build)
│   ├── assets/             # ← frontend production JS bundle + sourcemap
│   ├── textures/           # ← frontend static assets, copied from frontend/public/textures/
│   ├── about/              # detailed about page (static HTML)
│   ├── classic/            # ← classic earth-clock archive
│   └── data/               # ← weather + ocean data, refreshed by weather-service
├── server.js               # production Node static server
├── weather-service.js      # background GFS data refresher
├── lib/                    # supporting modules for weather-service
├── infra/                  # infrastructure config
│   ├── nginx-caprover-override.conf       # CapRover NGINX template (placeholder key, committed)
│   └── nginx-caprover-override.local.conf # same with real key (gitignored)
├── Dockerfile              # CapRover build target
├── captain-definition      # CapRover entry
├── wallpaper-engine/       # standalone Wallpaper Engine version
└── screensaver/            # standalone Windows .scr build (C#/.NET)
```

## CapRover app setup

Standing assumption: the app already exists in CapRover and is wired to deploy from the `master` branch on push. This was set up before v0.1.0 and the deployment mechanics didn't change in the cutover — only the contents of `public/`. The sections below are for reference if rebuilding the app from scratch or onboarding a new operator.

### 1. App creation
- CapRover dashboard → Apps → "One-Click Apps/Dockerfile"
- App name: `earth-clock`

### 2. Deployment source
- Deployment tab → Method 1: Deploy from GitHub
- Repository URL: this repo
- Branch: `master`

### 3. Environment variables
The current production deployment does **not** set a BASE_PATH; the app serves at the domain root.

CapRover injects `PORT` automatically. `server.js` reads it.

### 4. HTTP settings
- Custom domain: `earth-clock.onemonkey.org`
- HTTPS: enabled (auto-managed by CapRover via Let's Encrypt)
- Force HTTPS: on
- WebSocket: not required for the frontend itself, but the Blitzortung lightning feed connects directly from the browser to `wss://ws*.blitzortung.org/`; ensure CapRover's NGINX doesn't strip `Upgrade`/`Connection` headers if you ever proxy that too.

### 5. NGINX override — proxy rules

The live config is kept in [`infra/nginx-caprover-override.conf`](infra/nginx-caprover-override.conf) (placeholder key) and `infra/nginx-caprover-override.local.conf` (real key, gitignored). Paste the contents of the local file into CapRover → app settings → HTTP Settings → "Edit Default NGINX Configurations".

**Important gotcha**: both location blocks MUST go in the port-443 server (the one with `proxy_pass $upstream;` for `location /`), not the port-80 forceSsl redirect stub. Putting them in the wrong server block is silently invisible because browsers always reach the site over HTTPS.

#### 5a. `/proxy/nhc/` — NHC tropical-cyclone feed

The NOAA NHC feed does not ship `Access-Control-Allow-Origin`; the browser can't fetch it directly. Snippet from the infra file:

```nginx
# Reverse-proxy for NHC tropical cyclone feed (no CORS upstream).
# Same URL pattern as the Vite dev proxy so application code is unchanged.
location /proxy/nhc/ {
    proxy_pass         https://www.nhc.noaa.gov/;
    proxy_ssl_server_name on;
    proxy_set_header   Host www.nhc.noaa.gov;
    proxy_set_header   User-Agent "orrery (earth-clock.onemonkey.org)";
    proxy_hide_header  Set-Cookie;
    add_header Access-Control-Allow-Origin *  always;
    add_header Access-Control-Allow-Methods "GET, HEAD, OPTIONS" always;
    proxy_intercept_errors on;
    proxy_cache_valid 200 60s;
}
```

After saving, verify with:
```bash
curl -i https://earth-clock.onemonkey.org/proxy/nhc/CurrentStorms.json
```
Expected: `200 OK` + `Access-Control-Allow-Origin: *` + a JSON body (e.g. `{"activeStorms": []}` off-season). Background: [frontend/docs/proxy.md](frontend/docs/proxy.md).

#### 5b. `/proxy/geocode/` — reverse geocoder (LocationIQ)

The browser hits `/proxy/geocode/reverse?lat=…&lon=…`; NGINX forwards to LocationIQ
and injects the API key. Two reasons to proxy rather than hit the upstream directly:

1. Sets a proper `User-Agent` identifying earth-clock (geocoders ask for this in their usage policy; browsers don't let JS override UA).
2. Upstream can be swapped (Nominatim → LocationIQ → self-host) by changing one line, no client rebuild.

**Active config uses LocationIQ** — same Nominatim-compatible API surface, dedicated infra, free tier covers 5 000 req/day. The API key is a `pk.`-prefix publishable client key (LocationIQ's docs explicitly say these can be exposed to clients). To rotate: update `nginx-caprover-override.local.conf` and re-paste into CapRover.

Snippet (see `infra/nginx-caprover-override.local.conf` for the full block with key filled in):

```nginx
# Exact match — prevents NGINX appending "reverse" to the proxy_pass URI path.
location = /proxy/geocode/reverse {
    proxy_pass         https://us1.locationiq.com/v1/reverse$is_args$args&key=YOUR_LOCATIONIQ_KEY;
    proxy_ssl_server_name on;
    proxy_set_header   Host us1.locationiq.com;
    proxy_hide_header  Set-Cookie;
    add_header Access-Control-Allow-Origin *  always;
    add_header Access-Control-Allow-Methods "GET, HEAD, OPTIONS" always;
    proxy_intercept_errors on;
}
```

Verify:
```bash
curl -i "https://earth-clock.onemonkey.org/proxy/geocode/reverse?format=jsonv2&lat=43.26&lon=-2.93"
```
Expected: `200 OK` + JSON with `"display_name":"Bilbao, …"`.

The client parser in [geocoder.ts](frontend/src/data/geocoder.ts) works unchanged — LocationIQ's response shape is Nominatim-compatible.

### 6. Updating

Push to `master`; CapRover redeploys automatically. To rebuild the frontend production bundle in `public/`, run locally:
```bash
cd frontend
BUILD_AS_ROOT=1 npm run build
git add ../public
git commit -m "frontend: rebuild for prod"
git push
```

Production lives at `public/index.html` + `public/assets/` directly. The non-root build target (`cd frontend && npm run build` without `BUILD_AS_ROOT=1`) writes to `public/frontend/` — useful for testing the sub-path build but not what production serves.

## Troubleshooting

### `/proxy/nhc/...` returns 404 with body `Not Found`
The NGINX override block isn't being applied. Check:
1. You're editing the per-app override, not the CapRover instance template.
2. The block is inside the port-443 server (the one with `proxy_pass $upstream`).
3. After Save & Update on the override, the page reloads and your block is still visible (CapRover sometimes silently rejects invalid configs).

### Hurricane / storm-track layer shows "no active storms (off-season)" all the time
Either it really is off-season (Atlantic: Jun–Nov, East Pacific: May 15–Nov 30) or the `/proxy/nhc/` route is broken. Test the curl above to discriminate.

### Cloud layer not loading
Open the in-app Data panel. If `clouds` shows ✗ or stays in pending, the VIIRS daily mosaic for the most recent few dates is incomplete (which happens — NASA GIBS publishes regionally). The loader auto-walks the date back up to 7 days; if it gives up, switch the Clouds source to GFS via the menu.

### Weather data not refreshing
Check CapRover logs for the `weather-service` startup banner. The service runs in-process with `server.js` and updates `public/data/weather/current/current-*.json` every 6 hours. If the JSON files are stale, the service may have died — restart the container. Pure-JS GRIB2 decoding has no Java dependency, so the only real failure mode is upstream NOMADS being unreachable.

### Slow page load / dark-looking globe / assets loading erratically
See [INCIDENT-2026-07-19-slow-transfers.md](INCIDENT-2026-07-19-slow-transfers.md) before re-investigating — it has a long table of ruled-out causes (GRIB2 parsing, background service contention, CapRover resource limits, HTTP/2 framing, DNS/CDN routing, Docker overlay network, container restart, Dockerfile drift, the app itself, the live NGINX config, TLS certs) plus the one still-open lead: this looked earth-clock-specific at first but a properly controlled test showed the *whole VPS* transfers erratically to at least some networks — likely a hosting-provider-level network issue, not an app bug.

## Windows Screensaver (.scr)

This repo also contains a **Windows screensaver** wrapper at [`screensaver/`](screensaver/) that hosts the wallpaper-engine version using WinForms + WebView2. Unrelated to the CapRover web deployment but documented here for completeness.

### Build

Self-contained single-file build for Windows Control Panel compatibility:

```powershell
cd screensaver\EarthClock.Screensaver
dotnet publish -c Release
```

After publishing, manually create the .scr file (MSBuild target doesn't run for publish):

```powershell
$publishDir = "bin\Release\net8.0-windows\win-x64\publish"
Copy-Item "$publishDir\EarthClock.Screensaver.exe" "$publishDir\EarthClock.Screensaver.scr"
```

Build output:

- `bin\Release\net8.0-windows\win-x64\publish\EarthClock.Screensaver.scr` (~162 MB, self-contained)
- `bin\Release\net8.0-windows\win-x64\publish\wallpaper-engine\` (must be alongside the .scr)

### Install

Copy the .scr file and wallpaper-engine folder to a permanent location:

```powershell
$publishDir = "screensaver\EarthClock.Screensaver\bin\Release\net8.0-windows\win-x64\publish"
$installDir = "$env:USERPROFILE\EarthClockScreensaver"

New-Item -ItemType Directory -Path $installDir -Force
Copy-Item "$publishDir\EarthClock.Screensaver.scr" $installDir
Copy-Item "$publishDir\wallpaper-engine" "$installDir\wallpaper-engine" -Recurse
```

Then register with Windows:

- Right-click the `.scr` file → **Install**, or
- Run: `rundll32.exe desk.cpl,InstallScreenSaver "$env:USERPROFILE\EarthClockScreensaver\EarthClock.Screensaver.scr"`

### Run (for testing)

```powershell
# Settings dialog
& "$env:USERPROFILE\EarthClockScreensaver\EarthClock.Screensaver.scr" /c

# Fullscreen screensaver
& "$env:USERPROFILE\EarthClockScreensaver\EarthClock.Screensaver.scr" /s
```

### Requirements / notes

- **Self-contained**: No .NET runtime required (bundled in the .scr file).
- Requires the **Microsoft Edge WebView2 runtime** (commonly present on Windows 10/11).
- Data mode is **live with fallback to bundled** (uses the existing `wallpaper-engine/data-source-wrapper.js`).
- CORS proxy built-in for fetching live weather data.
- **Smart App Control**: If Windows blocks the .scr, you may need to allow it in Windows Security settings.
