# Credits

Canonical list of every external asset, library, and idea used in **orrery**. When the app gains a visible About / credits panel, every entry below with `attribution_required: true` MUST appear there. Public-domain entries are courtesy credits — legally optional, ethically right.

Update this file every time a new external source is introduced. The whole project is downstream of other people's work; we name them all.

---

## Lineage

**Classic earth-clock** is a fork of [`cambecc/earth`](https://github.com/cambecc/earth) (Cameron Beccario, [@cambecc](https://twitter.com/cambecc)) and remains the reference implementation. Orrery is a ground-up rebuild for 3D / WebGL but inherits the project's purpose, scope, and the astronomical formulae used for sub-solar/sub-lunar computation.

- **earth-clock fork**: <https://github.com/infantlab/earth-clock> (Caspar Addyman)
- **Original earth**: <https://github.com/cambecc/earth> (Cameron Beccario, MIT)
- `attribution_required`: yes (MIT requires copyright notice retention; in-app credit also planned out of respect for prior work)

### Design-philosophy source
- **Essay**: [*Eclipses, equinoxes, and everyday awe: telling the time on Spaceship Earth*](https://onemonkey.org/eclipses-equinoxes-and-everyday-awe-telling-the-time-on-spaceship-earth/) — Caspar Addyman, onemonkey.org.
- **Role**: canonical statement of the project's *why*. The "Design philosophy" section of [README.md](README.md) summarises and quotes it; every principle there maps to an implementation rule.
- `attribution_required`: yes — author's own writing, cited.

---

## Visual assets

### Earth — daytime surface ([`earth_daymap_2k.jpg`](public/textures/earth_daymap_2k.jpg))
- **Source**: [Solar System Scope textures](https://www.solarsystemscope.com/textures/) — `2k_earth_daymap.jpg`
- **Author**: Solar System Scope (INOVE s.r.o.)
- **License**: CC-BY 4.0 — <https://creativecommons.org/licenses/by/4.0/>
- `attribution_required`: **yes**

### Earth — night-side city lights ([`earth_nightmap_2k.jpg`](public/textures/earth_nightmap_2k.jpg))
- **Source**: [Solar System Scope textures](https://www.solarsystemscope.com/textures/) — `2k_earth_nightmap.jpg`
- **Author**: Solar System Scope (INOVE s.r.o.)
- **License**: CC-BY 4.0
- `attribution_required`: **yes**

### Earth — normal map ([`earth_normal_2048.jpg`](public/textures/earth_normal_2048.jpg))
- **Source**: [Three.js examples](https://github.com/mrdoob/three.js/blob/dev/examples/textures/planets/earth_normal_2048.jpg)
- **Origin**: NASA Blue Marble Next Generation derivative
- **License**: Public domain (NASA imagery)
- `attribution_required`: no, but credited

### Earth — specular/water mask ([`earth_specular_2048.jpg`](public/textures/earth_specular_2048.jpg))
- **Source**: [Three.js examples](https://github.com/mrdoob/three.js/blob/dev/examples/textures/planets/earth_specular_2048.jpg)
- **Origin**: NASA Blue Marble derivative
- **License**: Public domain
- `attribution_required`: no, but credited

### Moon texture ([`moon_1024.jpg`](public/textures/moon_1024.jpg))
- **Source**: [Three.js examples](https://github.com/mrdoob/three.js/blob/dev/examples/textures/planets/moon_1024.jpg) (originally fetched for the classic earth-clock moon-phase overlay; copied into orrery)
- **Origin**: NASA / USGS lunar imagery (1024×512 equirectangular)
- **License**: Public domain
- `attribution_required`: no, but credited

### Skybox — stars + Milky Way ([`2k_stars_milky_way.jpg`](public/textures/2k_stars_milky_way.jpg), [`8k_stars_milky_way.jpg`](public/textures/8k_stars_milky_way.jpg))
- **Source**: [Solar System Scope textures](https://www.solarsystemscope.com/textures/) — `2k_stars_milky_way.jpg` / `8k_stars_milky_way.jpg`
- **Author**: Solar System Scope (INOVE s.r.o.)
- **License**: CC-BY 4.0
- `attribution_required`: **yes**
- **Use**: equirectangular `scene.background` for the 3D view (loader: [src/scene/Skybox.ts](src/scene/Skybox.ts)). Defaults to the 2K asset for fast first paint; quality toggle planned (Phase A polish, see PLAN.md).

### Vector geography ([`public/data/earth-topo.json`](public/data/earth-topo.json))
- **Source**: [Natural Earth](https://www.naturalearthdata.com/) — 50m coastlines, encoded as TopoJSON.
- **License**: Public domain (Natural Earth Free Vector and Raster Map Data).
- `attribution_required`: no, but credited.

---

## Live data feeds

Every layer below is fetched at runtime from a public-domain scientific data feed. Refresh cadences are tuned to each provider's publishing schedule. No registration is needed for any of them except FIRMS, which uses a free `MAP_KEY` query parameter (kept in `orrery/.env.local`, not committed).

### NOAA GFS — wind, pressure, temperature, humidity, water columns
- **Source**: NOAA NOMADS — <https://nomads.ncep.noaa.gov/>
- **Variables**: surface wind (`UGRD`/`VGRD` at 10 m), mean sea level pressure (`MSLP`), 2 m air temperature, 2 m relative humidity, total precipitable water (`TPW`), total cloud water (`TCW`), total cloud cover (`TCDC`)
- **Pipeline**: `weather-service.js` at the repo root downloads GRIB2 from NOMADS using HTTP-range requests, decodes via the pure-JS `grib-js` library, and writes JSON to `public/data/weather/current/`. Orrery reads those JSONs in the browser. Runs every 6 hours (the GFS publish cadence).
- **License**: NOAA data products are in the public domain.

### NASA GIBS — VIIRS true-color cloud composite
- **Source**: NASA Global Imagery Browse Services (GIBS) — <https://gibs.earthdata.nasa.gov/>
- **Layer**: `VIIRS_NOAA20_CorrectedReflectance_TrueColor`, the daily global VIIRS true-color mosaic from NOAA-20 (JPSS-1).
- **Pipeline**: WMTS tile fetch, 10 × 5 tiles at zoom 3 in the 250 m TileMatrixSet, stitched into a 5120 × 2560 equirectangular `CanvasTexture`. Auto-walks back to older dates if the most recent one has incomplete swaths. Refreshed daily.
- **License**: NASA imagery is in the public domain.

### NOAA SWPC — Ovation aurora oval
- **Source**: NOAA Space Weather Prediction Center — <https://www.swpc.noaa.gov/products/aurora-30-minute-forecast>
- **Endpoint**: <https://services.swpc.noaa.gov/json/ovation_aurora_latest.json> — ~65 000 grid points of aurora-probability over both polar regions.
- **Refresh**: every 5 minutes.
- **License**: Public domain (NOAA).

### NOAA SWPC — Planetary K-index (Kp)
- **Source**: NOAA SWPC — <https://www.swpc.noaa.gov/products/planetary-k-index>
- **Endpoint**: <https://services.swpc.noaa.gov/json/planetary_k_index_1m.json>
- **Refresh**: every minute on the SWPC side; we re-read every ~15 min.
- **License**: Public domain (NOAA).

### NASA FIRMS — active fire detections
- **Source**: NASA Fire Information for Resource Management System — <https://firms.modaps.eosdis.nasa.gov/>
- **Endpoint**: VIIRS S-NPP NRT global CSV for the last 24 h, via the FIRMS Area API.
- **Auth**: free FIRMS `MAP_KEY` (request from FIRMS site, store in `orrery/.env.local` as `VITE_FIRMS_MAP_KEY`).
- **Refresh**: hourly.
- **License**: NASA / FIRMS data are in the public domain.

### NOAA NHC — active tropical cyclones + tracks
- **Source**: NOAA National Hurricane Center — <https://www.nhc.noaa.gov/>
- **Endpoints**:
  - Active storms summary: `https://www.nhc.noaa.gov/CurrentStorms.json`
  - Per-storm best track / forecast track / forecast cone: NHC KMZ feeds
- **CORS**: NHC does not ship CORS headers, so dev (Vite proxy) and prod (NGINX reverse proxy at `/proxy/nhc/`) both route through a same-origin proxy. See `orrery/docs/proxy.md`.
- **Refresh**: every 15 minutes during active storms (Atlantic Jun–Nov, East Pacific May 15–Nov 30).
- **License**: Public domain (NOAA).

### Blitzortung — community lightning network
- **Source**: <https://www.blitzortung.org/>
- **Endpoint**: real-time WebSocket firehose (`wss://ws*.blitzortung.org/`) emitting JSON-compressed strike records ~200 ms after each detected stroke globally.
- **Refresh**: continuous stream.
- **License**: Public service from a community network of volunteer-operated receiving stations. The Blitzortung community provides the feed free of charge for non-commercial use; commercial deployments should reach out via the Blitzortung affiliate programme.
- `attribution_required`: **yes** — credit Blitzortung and its operator network whenever the data is displayed.

### NASA GSFC — solar eclipse predictions
- **Source**: NASA Goddard Space Flight Center — <https://eclipse.gsfc.nasa.gov/SEcat5/SE2021-2030.html>
- **Use**: catalogued centerline path-of-totality waypoints for 2024-04-08 (North America), 2026-08-12 (Spain), 2027-08-02 (Egypt). Hand-typed into [`src/data/nasaEclipsePaths.ts`](src/data/nasaEclipsePaths.ts) from Fred Espenak / Jean Meeus published predictions.
- **License**: Public domain (NASA).

---

## Astronomical formulae

### Sub-solar position ([`src/astro/solar.ts`](src/astro/solar.ts))
- **Method**: Low-precision (~0.01°) sun position from mean longitude, mean anomaly, and obliquity.
- **References**:
  - [NOAA SPA simplified equations](https://gml.noaa.gov/grad/solcalc/calcdetails.html)
  - Paul Schlyter, [How to compute planetary positions](https://www.stjarnhimlen.se/comp/ppcomp.html)
- **License**: Formulae are mathematical facts; references credited courtesy.

### GMST (Greenwich Mean Sidereal Time)
- **Reference**: USNO simplified GMST formula (`18.697374558 + 24.06570982441908 × d`)
- **License**: Public formulation.

### Lunar position ([`src/astro/lunar.ts`](src/astro/lunar.ts))
- **Method**: Schlyter simplified orbital elements **plus main perturbation terms** (evection, variation, yearly equation, parallactic equation, and 7 smaller terms). Returns geocentric RA/dec/distance. Accuracy ~0.3° angular, ~0.5 R⊕ in distance — sufficient for moon-mesh placement but **not** for eclipse geometry, which is why catalogued eclipses use NASA-derived paths instead.
- **Critical detail**: Schlyter's epoch is `1999-12-31 00:00 UT` (his "2000 Jan 0.0 TDT"), **not** J2000 (2000-01-01 12:00 UTC). A 1.5-day offset in the wrong direction translates to 19.6° of moon mean-anomaly error — caught and fixed in v0.0.5.
- **Reference**: Paul Schlyter, [How to compute planetary positions](https://www.stjarnhimlen.se/comp/ppcomp.html).
- **License**: Mathematical formulae; reference credited courtesy.
- **Planned upgrade**: Meeus's *Astronomical Algorithms* chapter 47 (simplified ELP-2000-82B) for 0.1° accuracy, enabling correct eclipse geometry on any date without hand-typed NASA path data.

### Eclipse geometry ([`src/astro/eclipse.ts`](src/astro/eclipse.ts))
- **Method**: Ray–sphere intersection of the moon's shadow axis (`moonPos + t·(−sunDir)`) with the unit Earth. Effective Earth radius of 1.5 R⊕ in the intersection test to absorb the residual Schlyter precision wobble; surface point is the true entry intersection when the ray transects, or the sub-lunar projection when it just barely misses. Magnitude = `R_moon / D_moon-to-surface ÷ (R_sun / 1 AU)`. Path-of-totality polyline + live umbra disc + diamond-ring boundary rendered as concentric shells around Earth.
- **References for the headline 2026/2027 paths**: NASA GSFC Espenak/Meeus predictions (see above under data feeds).

---

## Software libraries

| Package | Version | License | Use |
|---|---|---|---|
| [three](https://github.com/mrdoob/three.js) | ^0.170 | MIT | WebGL renderer, scene graph, shader plumbing, GPGPU particles |
| [fflate](https://github.com/101arrowz/fflate) | ^0.8 | MIT | KMZ (= ZIP-of-KML) inflation for NHC storm-track downloads, in browser |
| [vite](https://vitejs.dev/) | ^7.3 | MIT | Dev server, hot reload, production bundler |
| [typescript](https://www.typescriptlang.org/) | ^5.6 | Apache-2.0 | Language |
| [grib-js](https://github.com/...) (root, not orrery) | ^1 | MIT | Pure-JS GRIB2 decoder used by `weather-service.js` to convert NOAA NOMADS binary into JSON |

License texts ship via `node_modules` and `npm`. A future polish step (Phase A) will bundle a concatenated `THIRD_PARTY_LICENSES.txt` from these.

---

## Geocoding

### Reverse geocode (lat/lon → place name) and forward search
- **Source**: [Nominatim](https://nominatim.openstreetmap.org/) (OpenStreetMap)
- **Use**: when the user pins a location (globe click, "use my location", or sun/moon beam direction), we reverse-geocode the coordinates to display a place name in the Location panel.
- **Rate limit**: 1 req/sec, enforced client-side in `src/data/geocoder.ts`.
- **License**: ODbL — derived from OpenStreetMap data. Polite usage requires a descriptive `User-Agent` (handled in dev directly; production routes through an NGINX proxy with a project-identifying UA per Nominatim usage policy).
- `attribution_required`: **yes** — © OpenStreetMap contributors.

---

## Planned sources (not yet integrated)

Anything below moves up into the active sections when we actually use it.

### Higher-fidelity star map (Phase 3+)
- **Candidate**: Tycho-2 Catalogue (ESA) — public domain, or NASA SVS Deep Star Maps. The current bundled 2K/8K Solar System Scope assets are sufficient for visualisation but lack catalogued-star positions.

### Planetary surface textures (Phase 3+)
- **Likely source**: Solar System Scope textures (CC-BY 4.0) for Mars, Jupiter, etc., to keep one consistent visual style.

### GRIB2 edge decode (Phase B Path B, optional)
- **Candidate**: `eccodes-wasm` running in a Cloudflare Worker — would unlock arbitrary GFS / AIFS / GraphCast fields without server-side preprocessing.

---

## How to add a new source

1. Pick the right section (Visual / Live data / Formulae / Library / Geocoding).
2. Include: what it is, where it came from (link), author, license.
3. Mark `attribution_required: yes` if license is anything stricter than public domain / "no attribution required".
4. If the asset ships in the repo (e.g. a texture in `public/`), keep the file path next to it.
5. Add the source URL to [`src/ui/sourceUrls.ts`](src/ui/sourceUrls.ts) so the in-app Data panel links to the right place.
6. Mention the source in the online [About page](../public/about/index.html) under the relevant section.
