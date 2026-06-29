earth-clock
===========

![earth-clock — 2026-08-12 solar eclipse umbra over Spain](https://github.com/InfantLab/earth-clock/raw/master/public/screenshots/01-earth-clock-eclipse1.png)

**[earth-clock.onemonkey.org](https://earth-clock.onemonkey.org/)** — a real-time 3D globe that makes Earth's motion through space feel *present*. Not a map, not a dashboard — a clock told by where the planet actually is.

The idea comes from watching a total solar eclipse and realising that the universe is in constant, geometrically precise motion — and that most of us never feel it. Earth-clock tries to fix that. Live wind, weather, auroras, fires, hurricanes, the true-position sun and moon, solar and lunar eclipses with a time-warp scrubber, and a flat-map mode you can pin your location on. The goal is the astronaut's *overview effect* from your browser.

| | |
|---|---|
| Live site | [earth-clock.onemonkey.org](https://earth-clock.onemonkey.org/) |
| Classic archive | [earth-clock.onemonkey.org/classic/](https://earth-clock.onemonkey.org/classic/) |
| Founding essay | [Eclipses, Equinoxes, and Everyday Awe](https://onemonkey.org/eclipses-equinoxes-and-everyday-awe-telling-the-time-on-spaceship-earth/) |
| Roadmap | [ROADMAP.md](ROADMAP.md) |
| Changelog | [CHANGELOG.md](CHANGELOG.md) |
| Credits & licences | [frontend/CREDITS.md](frontend/CREDITS.md) |

---

## What it does right now

**Atmosphere and weather**
- GPU wind particle field (GFS 1° global, 6 h refresh) — subtle / standard / bold intensity
- Cloud cover — VIIRS true-colour daily mosaic (NASA GIBS) or GFS model
- Aurora oval probability (NOAA SWPC Ovation, 5 min refresh)
- Active wildfires (NASA FIRMS, last 24 h)
- Tropical cyclones + 5-day forecast tracks (NOAA NHC, 15 min refresh)
- Real-time lightning strikes (Blitzortung community network)
- Scalar overlays: pressure, temperature, humidity, precipitable water, cloud water

**Astronomy**
- Sun and moon in their true celestial positions, updated every frame
- Physically-based directional lighting — shadows, terminator, twilight band
- Atmospheric rim glow that shifts colour at sunrise and sunset
- Real-photograph skybox (NASA Deep Star Maps 2020, 2K default / 8K opt-in)
- Meeus ELP-2000-82B lunar model (~5 arcsec accuracy)

**Eclipse experience**
- Solar eclipse catalogue 2026–2030 with path of totality + live umbra/penumbra disc
- Lunar eclipse catalogue with "blood moon" dimming + copper tint, scaled by umbral magnitude
- Observer-perspective sun/moon inset (SunDiscPanel) with topocentric parallax
- Time-warp scrubber: play any eclipse at any speed, scrub frame-by-frame

**Globe and flat map**
- Equirectangular flat-map mode with pan + zoom (MapControls, cursor-centred)
- Crisp terminator arc on the flat map (analytic great-circle, 361-point line)
- Sub-solar and sub-lunar dots on the flat map (phase-aware moon disc)
- Location pin — click anywhere, get coordinates, place name (reverse geocoder), and true solar time
- Timezone overlay: nominal 15° meridians, real political boundaries (DST-correct via IANA), or ±Hours relative mode
- Time zones, night lights, coastlines (Natural Earth 50 m)

**Clock and time control**
- Clock driven by `simulatedTime` — the same variable that rotates Earth, moves the sun and moon, and steps the eclipse
- Speed presets from −10 080× (1 second = 1 week backwards) to +10 080×
- Live-data freshness gating: weather layers hide when simulated time drifts >24 h from now
- Mobile-first layout: compact clock bar, full-width bottom sheet menu, 44 px touch targets

---

## Architecture

```
earth-clock/
├── frontend/          TypeScript + Three.js + Vite — what serves at /
│   ├── src/astro/     Sun, moon, eclipse maths (Meeus ELP, observerView)
│   ├── src/scene/     3D layers: Globe, Moon, Sun, clouds, aurora, fires…
│   ├── src/ui/        Panels: Clock, Menu, EclipsePanel, SunDiscPanel…
│   └── src/data/      Catalogues, loaders, geocoder, wind texture
├── public/
│   ├── assets/        Vite bundle (index-*.js)
│   ├── classic/       Original D3 + canvas renderer (archival, unmodified)
│   ├── data/          GFS JSON feeds written by weather-service.js
│   ├── textures/      Globe, moon, skybox textures
│   └── about/         Static about + kids pages
├── weather-service.js Node daemon: NOAA NOMADS GRIB2 → JSON, runs every 6 h
├── screensaver/       Windows .scr wrapper (WebView2, classic renderer)
└── wallpaper-engine/  Wallpaper Engine output (classic renderer)
```

The `frontend/` directory is the only place most contributors need to touch. It has its own dev server (`npm run dev` → Vite on :5173), TypeScript strict mode, and HMR. The production build writes into `public/assets/` at the repo root.

---

## Running locally

```bash
git clone https://github.com/infantlab/earth-clock
cd earth-clock/frontend
npm install
npm run dev         # → http://localhost:5173
```

That's it for the globe. Weather data is served from the live backend at `earth-clock.onemonkey.org` in dev (the Vite config proxies the relevant paths). To run the full weather backend locally:

```bash
cd earth-clock
npm install
npm run weather-service   # downloads GFS GRIB2 → writes public/data/weather/current/
```

To build for production:

```bash
cd frontend
BUILD_AS_ROOT=1 npm run build   # writes public/index.html + public/assets/index-*.js
```

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for the CapRover + NGINX deploy, and [`frontend/docs/proxy.md`](frontend/docs/proxy.md) for the NHC and geocoder CORS proxy setup.

---

## Contributing and forking

This project is deliberately open-ended. The codebase is clean TypeScript, the layers are well-separated, and the [ROADMAP](ROADMAP.md) has many fully-specified items that a motivated person could pick up and ship independently. Some good entry points by interest:

**Astronomy / data nerd**
- ISS position + ground track ([CelesTrak TLE, no auth](https://celestrak.org/SOCRATES/)) — ~1 day, dramatic
- Population density overlay (NASA SEDAC Gridded Population of the World, free) — raster texture, same pipeline as clouds
- Sea ice extent (NSIDC MASIE daily, GeoJSON) — seasonal, beautiful, important
- Seasonal animation — sweep `simulatedTime` through one year at ~10 s/month to show Earth breathe

**Three.js / WebGL dev**
- Geology layer: tectonic plates (PB2002 GeoJSON → LineSegments, ~half a day), earthquakes (USGS GeoJSON feed), volcanoes (Smithsonian GVP static dataset)
- Earth-shadow shader on the moon mesh for partial lunar eclipses (umbra disc creeping across the face)
- Waterman butterfly projection for the flat map — visually striking, good intro to projection maths
- Camera paths: ISS orbit, Earthrise (sub-lunar), L1 halo orbit

**Backend / ops**
- GOES-East + Himawari + MSG 10-min live cloud stitch to replace the VIIRS daily mosaic
- `eccodes-wasm` Cloudflare Worker for arbitrary GRIB2 fields (ECMWF AIFS, GraphCast)
- Multi-altitude wind (250/500/700/850/925 hPa)

**Writers / educators**
- "Upgrading earth-clock to WebGL" blog post (the 2026-08-12 Spain eclipse is the obvious anchor)
- The [kids' about page](https://earth-clock.onemonkey.org/about/kids/) exists; more similar pages welcome

**To fork it entirely:**
The codebase is MIT. If you want your own themed earth-clock — focused on climate data, marine biology, aviation, geology, whatever — the scene layer system makes it straightforward to add or remove layers. The minimum viable fork is: clone the repo, delete the layers you don't want from `Menu.ts`, add your own in `frontend/src/scene/`, wire them up in `main.ts`. The wind/cloud/aurora pipeline gives you a working template for any gridded global dataset.

If you do build something interesting, open an issue or PR — there's a lot of obvious cross-pollination to be had.

---

## Lineage

This project began as a fork of Cameron Beccario's [`earth`](https://github.com/cambecc/earth) — the visualisation behind [earth.nullschool.net](https://earth.nullschool.net), itself descended from the [Tokyo Wind Map](https://github.com/cambecc/air). The original codebase was a canvas + SVG renderer with eight cartographic projections; it lives on at [`/classic/`](https://earth-clock.onemonkey.org/classic/) with a day/night terminator overlay and clock display added on top. All upstream credit retained per MIT.

The 3D rebuild (everything in `frontend/`) started from scratch in Three.js in 2025, keeping the GFS wind pipeline and the philosophy but replacing the rendering engine entirely.

**Inspirations**
- [earth (cambecc)](https://github.com/cambecc/earth) — the wind-globe that started it all
- [hint.fm wind map](http://hint.fm/wind/) — spiritual predecessor to all browser wind visualisations
- [World Clock](https://www.worldclock.ws/) — the early "what time is it where" motivation for the clock layer
- [Buckminster Fuller — Operating Manual for Spaceship Earth](https://en.wikipedia.org/wiki/Operating_Manual_for_Spaceship_Earth) — the framing for why this matters

---

## Licence

MIT, inherited from `cambecc/earth`. See [`LICENSE.md`](LICENSE.md). Per-asset licences (CC-BY for Solar System Scope and OSM derivatives, public-domain for NOAA/NASA imagery, MIT/Apache for libraries) are catalogued in [`frontend/CREDITS.md`](frontend/CREDITS.md).
