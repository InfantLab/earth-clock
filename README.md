earth-clock
===========

![earth-clock](https://github.com/InfantLab/earth-clock/raw/master/public/classic/cover.jpg)

**[earth-clock](https://earth-clock.onemonkey.org/)** is a real-time 3D visualisation of planet Earth — live wind, weather, clouds, auroras, fires, hurricanes, lightning, and the sun, moon, and stars in their true positions. It is a clock told by Earth's place in space.

The current 3D experience (codenamed **orrery**) is the spiritual successor to Cameron Beccario's [`earth`](https://github.com/cambecc/earth). The classic 2D version this repo started from is preserved as an archival fallback.

| | |
|---|---|
| 3D earth-clock (default) | [earth-clock.onemonkey.org](https://earth-clock.onemonkey.org/) |
| Classic 2D archive       | [earth-clock.onemonkey.org/classic/](https://earth-clock.onemonkey.org/classic/) |
| Project plan             | [orrery/PLAN.md](orrery/PLAN.md) |
| Credits & licences       | [orrery/CREDITS.md](orrery/CREDITS.md) |

The 3D version is built on [Three.js](https://threejs.org/) with GPU wind particles, modern satellite feeds (NASA GIBS, NOAA SWPC, NASA FIRMS, NOAA NHC, NOAA SPC, Blitzortung), and physically-based lighting from a true-position sun. It includes a NASA-derived solar-eclipse renderer (path of totality + live umbra disc, targeting the 2026-08-12 Spain eclipse as a headline event).

## What's in this repo

- [`orrery/`](orrery/) — the 3D rebuild (TypeScript + Three.js + Vite). This is what serves at `/`.
- [`public/classic/`](public/classic/) — the classic 2D earth-clock, preserved verbatim at `/classic/`. Fork of [`cambecc/earth`](https://github.com/cambecc/earth) with day/night terminator overlay and a clock display.
- [`weather-service.js`](weather-service.js), [`lib/`](lib/) — the GFS weather backend that downloads GRIB2 from NOAA NOMADS and produces the JSON feeds in [`public/data/weather/current/`](public/data/weather/current/). Shared by both the 3D and classic frontends.
- [`screensaver/`](screensaver/) — a Windows .scr wrapper hosting the classic experience inside a WebView2 control. See [`DEPLOYMENT.md`](DEPLOYMENT.md).
- [`wallpaper-engine/`](wallpaper-engine/) — a Wallpaper Engine output mode.

For day-to-day development of the 3D version, work in the `orrery/` subdirectory — its own README has dev-server instructions, architecture notes, and the live development plan.

## Original lineage

This project began as a fork of Cameron Beccario's [`earth`](https://github.com/cambecc/earth) (the visualisation behind <https://earth.nullschool.net>, itself derived from the earlier [Tokyo Wind Map](https://github.com/cambecc/air)). The classic 2D visualisation preserved under [`/classic/`](https://earth-clock.onemonkey.org/classic/) is essentially that codebase, with a day/night terminator overlay and a clock display added on top. All upstream credit retained per MIT.

## Running locally

```bash
git clone https://github.com/infantlab/earth-clock
cd earth-clock
```

What you do next depends on which part you want to work on.

### Develop the 3D experience (orrery — the current default)

```bash
cd orrery
npm install
npm run dev
```

Vite dev server at <http://localhost:5173>. Hot module reload, source maps, full TypeScript checking. The dev server also reverse-proxies `/proxy/nhc/*` to NHC's CORS-blocked feeds so hurricanes work in development. See [`orrery/README.md`](orrery/README.md) and [`orrery/PLAN.md`](orrery/PLAN.md) for architecture notes and the current development plan.

### Run the classic 2D archive locally

```bash
npm install          # from the repo root
npm start            # → node dev-server.js 8080 → serves public/ on :8080
```

Then open <http://localhost:8080/classic/>. The classic 2D experience is preserved verbatim under `public/classic/` after the v0.1.0 cutover; you can still develop or debug it the way the original `earth` project was developed. The original implementation notes (terminator math, world rotation, moon-phase overlay, projection distortion handling) are at [`public/classic/docs/`](public/classic/docs/).

### Run the GFS weather backend

```bash
npm install
npm run weather-service
```

This downloads current GFS data from NOAA NOMADS, decodes it from GRIB2 to JSON using pure JavaScript (no Java dependency), writes the JSONs to `public/data/weather/current/`, then sleeps for 6 hours and repeats. Both the 3D and classic frontends read those JSONs. Full architecture in [`WEATHER_SERVICE.md`](WEATHER_SERVICE.md).

### Build orrery for production

```bash
cd orrery
BUILD_AS_ROOT=1 npm run build
```

Writes `public/index.html` + `public/assets/*` at the repo root (alongside the existing `public/classic/`, `public/data/`, `public/textures/`, `public/about/`). The `BUILD_AS_ROOT` env var flips Vite's `outDir` and disables `emptyOutDir` so the archived classic site and the shared data tree survive the rebuild. See [`orrery/docs/cutover.md`](orrery/docs/cutover.md) for the original cutover procedure and [`DEPLOYMENT.md`](DEPLOYMENT.md) for the CapRover deployment.

## Other components

- [`wallpaper-engine/`](wallpaper-engine/) — a Wallpaper Engine packaging of the classic 2D experience. See its [README](wallpaper-engine/README.md) for installation and [MAINTENANCE.md](wallpaper-engine/MAINTENANCE.md) for sync/architecture.
- [`screensaver/`](screensaver/) — a Windows `.scr` wrapper that hosts the wallpaper inside a WebView2 control. Built with C#/.NET; full build & install procedure in [`DEPLOYMENT.md`](DEPLOYMENT.md).
- [`public/about/`](public/about/) — the detailed online about page, also linked from the in-app menu and reachable at <https://earth-clock.onemonkey.org/about/>.

## Inspirations

- The original [earth](https://github.com/cambecc/earth) project — Cameron Beccario's global weather visualisation that this whole codebase descends from.
- [Tokyo Wind Map](https://github.com/cambecc/air) — Beccario's earlier per-city demonstration that animated wind particles could be a primary medium for atmospheric data.
- [World Clock](https://www.worldclock.ws/index.html) — the early "what time is it where" project that motivated adding a clock readout to a wind visualisation in the first place.
- [hint.fm wind map](http://hint.fm/wind/) — the spiritual predecessor to all browser-rendered wind visualisations.
- [D3.js](http://d3js.org) — the projection library that powers the classic 2D site.
- [Three.js](https://threejs.org/) — the WebGL renderer that powers the 3D rebuild.

## Licence

MIT, inherited from `cambecc/earth`. See [`LICENSE.md`](LICENSE.md). Per-asset and per-feed licences (CC-BY for Solar System Scope and OpenStreetMap derivatives, public-domain for NOAA/NASA imagery, MIT/Apache for libraries) are catalogued in [`orrery/CREDITS.md`](orrery/CREDITS.md).
