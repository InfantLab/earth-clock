# Orrery — Live Development Plan

This is the **engineering tracker** — current status of every layer, what's next, what's blocked. For the project vision, lineage, architecture, data sources, and astronomical formulae, see [README.md](README.md).

**One-line summary**: orrery is the 3D successor to [`cambecc/earth`](https://github.com/cambecc/earth) / earth-clock, and will replace the classic 2D site at `earth-clock.onemonkey.org/` once feature-complete. Phase A is the milestone for swap.

> Keep this file up to date. Every session should end by updating status markers here.

---

## Status Key
- ✅ Done & committed
- 🔄 In progress / partially done
- ⬜ Not started
- ❌ Blocked (reason noted)

---

## Phase A — Browser-fetchable layers (no server infra)

### ✅ Foundation (committed 4eefbaf, 2026-05-11)
- Textured globe (day/night, Phong shader, axial tilt)
- Atmosphere rim glow
- Moon (Schlyter position, textured)
- Coastlines (Natural Earth 50m TopoJSON)
- **GPU wind particles** — 65 536 particles, advection via GPUComputationRenderer, live GFS surface wind
- Particle trails (additive ping-pong accumulator)
- **Live cloud composite** — NASA GIBS VIIRS NOAA-20 TrueColor, luminance-threshold shader, day/night fade
- Sky background
- Console API (`window.__orrery`, `__orreryTimeWarp`)

### ✅ Aurora oval  ← done, needs visual QA on live site
- **Source**: `https://services.swpc.noaa.gov/json/ovation_aurora_latest.json`
  - CORS-clean, no auth, ~900 KB, updates every 5 min
  - Structure: `{ `Forecast Time`, coordinates: [[lon, lat, aurora_probability], ...] }` (~65 k points, probability 0–100)
- **Implementation**:
  - `src/data/auroraLoader.ts` — fetch + parse JSON, return `Float32Array` of (lon, lat, prob) triples
  - `src/scene/AuroraLayer.ts` — populate a `BufferGeometry` from the grid, render as an additive point cloud / thin dome at r=1.008 above surface
  - Shader: `prob` → hue sweep (green→cyan→purple), opacity ∝ prob², visible on night side only (same ndotl mask as clouds but inverted — auroras are on the dark side)
  - Refresh every 5 min (setInterval)
  - `setRotationY` NOT needed — aurora oval is geomagnetically fixed, not Earth-rotation fixed
- **Wire-in**: add `aurora` to `window.__orrery`, update `updateAstro()` to pass `sunDir` for night-side masking

### ✅ Active fires  ← done, needs visual QA on live site
- **Source**: NASA FIRMS Area API — `https://firms.modaps.eosdis.nasa.gov/api/area/csv/{KEY}/VIIRS_SNPP_NRT/world/1`
  - Free MAP_KEY stored in `orrery/.env.local` as `VITE_FIRMS_MAP_KEY`
  - Returns CSV: header row + one detection per row; columns located by header name (resilient to schema drift)
- **Implementation**:
  - `src/data/firmsLoader.ts` — fetch CSV, parse via header lookup, returns `{lat, lon, frp, brightTi4, daynight}[]`
  - `src/scene/FireLayer.ts` — additive point cloud at r=1.0015. FRP → sqrt-compressed size (2–8 px) and color (deep red → orange → white-yellow hot core). Per-point hash + sin(time) flicker; high-FRP fires flicker faster.
  - Rotates with Earth (`setRotationY`) so detections stay glued to lat/lon
  - Refreshes every hour

### ✅ Active hurricanes / tropical cyclones  ← renderer landed; auto-activates when storms appear
- **Source**: NHC `https://www.nhc.noaa.gov/CurrentStorms.json` — `{ activeStorms: [...] }`, CORS-clean, no auth. Currently empty (off-season; Atlantic Jun–Nov, E. Pacific May 15–Nov 30).
- **Implementation**:
  - `src/data/nhcLoader.ts` — fetches + parses; tolerant of NHC's dual lat/lon convention (numeric field preferred, suffix string `"21.6N"` as fallback). Returns `Storm[]` with id, name, classification, intensity (kt), pressure (mbar), lat/lon, movement bearing/speed, lastUpdate.
  - `src/scene/HurricaneLayer.ts` — pulsing additive-points layer at r=1.012, one sprite per storm. Each sprite is a polar-coordinate spiral: bright eye + faint rotating arms + outer ring. Intensity (kt) drives size (20–52 px), color (cyan→yellow→orange→red→magenta across TD/TS/Cat1-5), and pulse frequency.
  - Rotates with Earth (`setRotationY`). Refreshes every 15 min.
  - Empty array → nothing drawn; the layer is dormant until NHC posts the first advisory of the season.
- **Future**: past-track lines and forecast cone geometry (NHC publishes these as KMZ per storm — extra fetch + KMZ unzip per active storm, deferred until first real storm to test against).

### ⬜ NO₂ / AOD / smoke (drop-in GIBS)
- **Source**: Same `fetchGibsTexture()` pipeline already built; just different layer IDs:
  - `TROPOMI_L2_NO2_TotalColumn_D` — daily NO₂, use zoom=1, "1km" tileMatrixSet, ext="png"
  - `MODIS_Terra_Aerosol` — AOD (aerosol optical depth), daily
  - `FIRMS_VIIRS_NOAA20_Fires` — GIBS fire overlay (lower-res alternative to FIRMS API)
- **Implementation**: extend `CloudLayer`-style overlay class to accept GIBS layer ID + colormap uniform; or just add a generic `GibsOverlay` class that wraps a translucent sphere.

### ⬜ Sea ice (NH + SH)
- **Source**: `AMSRU2_Sea_Ice_Concentration_12km` via GIBS (same pipeline)
- Polar-cap overlay; opacity ∝ ice concentration

### ⬜ Solar-eclipse visualisation tool  ← **headline feature**, targeting **summer 2026 Spain eclipse**

The next total solar eclipse visible over mainland Spain is **2026-08-12** (Iceland → Greenland → northern Spain; totality ~1 min 50 s over Bilbao / Valladolid / Palma de Mallorca). The 2027-08-02 eclipse also crosses Spain with a much longer totality (~6 min over Cádiz / Tarifa). The tool should target whichever the user asks for; the math is the same. Worth getting this right for the 2026 event — it's a rare-astonishment moment that maps directly onto the project's design-philosophy thesis ("the eclipse experience, made sustainable").

The goal: while the user time-warps through an eclipse, the moon's umbra and penumbra discs glide across Earth's surface in real geometry. A static "path of totality" line records where the umbra has been (and will be) so the user sees the full sweep at a glance, with the live disc indicating the current moment.

- **Math**: we already have sub-solar and sub-lunar positions to ~0.01° / ~1-2° accuracy. The shadow geometry is a cone with apex behind the moon, opening toward the sun. Where that cone intersects Earth's surface = umbra (full eclipse) and penumbra (partial). Procedure:
  1. Each frame: compute the moon's world position `M` and the sun's world direction `S`.
  2. Shadow axis = ray from `M` in direction `−S`.
  3. Ray-sphere intersection with the unit Earth gives the umbra centre on the surface (when one exists — most of the time there's no intersection, only during an eclipse).
  4. Umbra radius on surface ≈ `(R_moon − D · α_sun) / cos(incidence)` where `α_sun` is the sun's angular radius from Earth. Typical surface umbra is 100–270 km wide; penumbra is ~3 500–7 000 km wide.
  5. Magnitude at a given (lat, lon): ratio of sun-disc obscured by the moon at that point. Useful for the location-pin readout.
- **Path of totality**: precomputed by stepping simulated time at 30 s intervals over the full eclipse window and recording the umbra centre's lat/lon when it exists. Result: a polyline drawn on the globe + a wider corridor for the penumbra envelope.
- **Layers / files**:
  - `src/astro/eclipse.ts` — shadow geometry from sun + moon position (uses existing `solarPosition` / `lunarPosition`).
  - `src/data/eclipseCatalog.ts` — bundled metadata for upcoming / notable eclipses (date, type, max-totality coords, duration). Start with 2026-08-12 and 2027-08-02 hand-entered from NASA's catalog; expand as needed.
  - `src/scene/EclipseLayer.ts` — renders the umbra disc (small dark circle with bright "diamond ring" rim during contacts), the penumbra disc (large faint dim), and the path-of-totality polyline. All rotate with Earth.
  - `src/ui/EclipsePanel.ts` — UI showing the current eclipse name, contact-time countdown, magnitude at the pinned location, and a "jump to eclipse start" button that snaps `simulatedTime` to the right moment.
- **Integration with existing features**:
  - **Time-warp** is already plumbed (`window.__orreryTimeWarp`); the eclipse tool just orchestrates a sensible default speed (~60× → eclipse plays out in ~4 minutes).
  - **Location pin** reports the eclipse magnitude at the pinned point. Pin Bilbao on 2026-08-12 18:30 UTC and the panel says "magnitude 1.00 · totality 1 min 47 s".
  - **Terminator** still renders normally; the umbra is an additional dimming on top.
- **UI gestures**:
  - "Eclipse" entry in the menu (View row). Toggle on → loads the next upcoming eclipse from the catalog and shows its path/discs. With time-warp at 1× it just sits there waiting; warp up to 60× and the discs slide across Spain.
  - Future: a selector ("next eclipse / pick a date / browse catalog") and a "play" button that snaps to T-minus-30-min and runs the whole event at 60× then auto-stops.
- **Out of scope for v1**: lunar eclipses (Earth's shadow on the moon — same geometry, just inverted, but moon-only visual), Saros series browsing, terrestrial weather forecast for the eclipse path.
- **Time budget**: ~1 week of work for the headline feature. Worth scheduling before the docs-polish + cutover so we can ship orrery to the public with this as the lede.

### ✅ Lightning (Blitzortung WebSocket)  ← landed
- **Source**: `wss://ws1.blitzortung.org/` — community network, no auth, ~200 ms latency. LZW-style-compressed JSON payload (subscription message `{"a": 111}` requests the global firehose). Time is in nanoseconds since epoch; the loader handles ns / μs / ms gracefully.
- `src/data/lightningLoader.ts` — auto-reconnecting WebSocket wrapper. Emits `onStrike` callbacks; tracks total count + last-strike time for the DataPanel. Status callbacks (connecting / connected / disconnected / error) flow into both Debug and Data panels.
- `src/scene/LightningLayer.ts` — circular buffer of 1 024 additive point sprites at r=1.0020. Each strike spawns as a hot white-blue flash (warm/cool tint by polarity) that fades over ~0.6 s via shader (`uTime − spawnTime`). Buffer wraparound is invisible because old strikes have long faded. Rotates with Earth.
- DataPanel row shows rolling 60 s strike rate + cumulative total, e.g. `connected · 142 strikes/min · 41 837 total`.
- **Prod-origin risk**: Blitzortung's WebSocket is a community service not officially documented. Origin filtering or upstream policy changes could break this without notice. Mitigations to consider: route through our own backend (the same proxy that handles NHC); negotiate a proper feed via Blitzortung's affiliate programme; cache the dictionary-decoder in a Web Worker if it ever becomes a perf concern.

### 🔄 Equirectangular flat-map mode  ← v1 landed; data overlays TODO
- `src/scene/FlatMap.ts` — own scene + orthographic camera + 2:1 textured plane. Combined fragment shader bakes day surface, night-lights overlay, and clouds together. Sub-solar (lat, lon) passed as a geographic-frame direction uniform; no axial-tilt or daily-rotation transforms needed because the flat map renders directly in geographic coords. Letterbox/pillarbox via `resize()` to keep 2:1 aspect.
- Toggle: menu entry "Map" (default off). When on, `main.ts` renders the FlatMap scene instead of the 3D globe; trails composite is also skipped.
- Layers wired in v1: day, night, clouds, terminator. Terminator/NightLights/Clouds menu toggles propagate to both modes via the Menu's apply().

**FlatMap v2 — outstanding work**, in rough priority order:
1. **Coastlines** — re-emit Natural Earth TopoJSON into 2D `LineSegments` with (u, v) → (lon/360 − 0.5, lat/180) positions on the plane. Make sure the seam at ±180° doesn't draw a long horizontal line. Coastlines are the cheapest big visual win because everything else benefits from clear continent borders.
2. **Active fires** — port `FireLayer` to support a 2D mode. Vertex shader picks between sphere xyz and (lon, lat)-on-plane positions based on a `uMode` uniform; fragment shader unchanged. Same for the data path (lat/lon → plane uv is just a linear scale).
3. **Active hurricanes** — same treatment as fires. Storm sprites in 2D should be the same colored discs with the same intensity ramp.
4. **Aurora** — same point-cloud treatment. Aurora's night-side mask uses geographic ndotl which is already in the FlatMap shader, so it transfers cleanly.
5. **Wind particles** — biggest. `Particles.ts`'s GPU compute is already in (lon, lat) — only the render vertex shader projects to xyz. Add a `uMode` uniform that, in flat-map mode, projects to (u, v) on the plane instead. `Trails` accumulator also needs to know about the projection so streaks display correctly.
6. **Sub-solar marker** — small dot at the current sub-solar (lat, lon) on the plane. Visual rhyme with the 3D globe's terminator.
7. **Sub-lunar marker / projected moon** — small dot at the current sub-lunar (lat, lon) showing where the moon is directly overhead. Replaces the 3D moon mesh which doesn't have an equivalent in the flat view.
8. **Terminator line** — explicit drawn curve along the day/night boundary on the plane (it's an arc, not a straight line — phase depends on sub-solar declination).
9. **Hide-in-map-mode list** — Atmosphere, Moon, Sky-stars toggles should be greyed in the menu when Map mode is on, since they're inherently 3D and don't have flat-map equivalents.
10. **Pan & zoom** — orthographic camera should support panning + zoom-in for region focus. Mouse-drag pan, wheel zoom. Clamp pan to stay within the plane bounds.
11. **Wrap-around** — when panned past the 180° edge, the plane should wrap. Easiest: render the plane twice with -360° / +360° offsets, or do shader-side modulo.
12. **Map projection variants** — out of scope per the project's projection policy. Equirectangular only.

Architecture decision still open: each existing layer gets a `setMapMode(b)` hook (cleanest, fewer files, more uniforms in shaders) vs. parallel `FlatXxxLayer` classes (more files, simpler shaders, more code duplication). Lean toward the first.

### ✅ Layer toggle HUD  ← landed, may grow over time
- Bottom-left collapsible menu (`src/ui/Menu.ts`), styled to match classic earth-clock (dark translucent panel, grey/yellow/white text buttons). The "orrery" wordmark is the open/close affordance.
- Toggles: Clouds · Aurora · Fires · Hurricanes · Wind · Coastlines · Terminator · Night lights · Moon · Atmosphere · Map · Debug.
- Visibility plumbed via `mesh.visible` for most layers; wind is special — `menu.isWindVisible()` gates `trails.render()` in the main loop, and `Globe.setNightLightsVisible()` handles the additive city-lights overlay separately from the day surface.
- State persisted in `localStorage` under `orrery.menu.v1` (per-layer bools + open/closed).
- Future: time controls (Now / time-warp), Phase B mode/altitude switching, an in-app About panel sourced from `CREDITS.md`.

### ✅ Live-data freshness UI  ← landed
- `src/ui/DataRegistry.ts` — shared status store. Loaders push `{ source, fetched, detail?, error?, bundled?, refreshSeconds? }` per layer; subscribers re-render on change.
- `src/ui/DataPanel.ts` — top-right panel toggled by the menu's "Data" entry. Three-column grid: layer · source label · age. Colour codes: green (fresh), amber (stale, older than 2× expected refresh), red (fetch failed), grey ("bundled" for static assets). Re-renders on every registry update + a 15 s tick to keep ages live.
- All loaders wired: clouds (NASA GIBS), aurora (NOAA SWPC), fires (NASA FIRMS), hurricanes (NHC), wind (NOAA GFS), coastlines (Natural Earth, bundled). Day/night/moon textures registered as bundled at startup.
- **Future**: manual refresh buttons per row, retry-on-failure with backoff, link to source URL.

### ✅ Clock display  ← landed
- `src/ui/Clock.ts` — top-centre, 36 px monospace. Reads `simulatedTime` each frame; time-warp shows up visibly.
- Zone toggle: **UTC ⇄ Local** (browser zone from `Intl.DateTimeFormat().resolvedOptions().timeZone`, displayed short — "London", "Tokyo", etc.). Click the zone label to flip. Choice persists in `localStorage` under `orrery.clock.v1`.
- Toggle in menu's "View" row. Default on. Cached string comparison keeps DOM writes to once per second.
- **Future**: third "selected location" mode that uses the pinned location's solar time. Day-name & date second line is already shown.

### 🔄 Location picker  ← v1 landed; data sampling TODO
- `src/scene/LocationPin.ts` — single class managing both the 3D pin (emissive sphere + ring on the rotating Earth, attached via `Globe.attachToEarth`) and the 2D pin (small disc on the FlatMap plane). `setLocation(lat, lon)` updates both.
- `src/ui/LocationPanel.ts` — top-left panel toggled by the "Location" menu entry. Shows pinned coordinates and **solar time at that longitude** (UTC + lon/15 hours). ✕ button clears the pin.
- Click handler in `main.ts`: raycaster against the Earth mesh in globe mode (uses `Globe.worldToLatLon` to undo tilt + daily rotation); unproject NDC onto the plane in map mode. Only fires while Location toggle is on.
- **Future (v2)**: sample wind from GFS grid at pinned (lat, lon); list nearest fire / storm; show local civil time (proper timezone, not just solar); reverse-geocode → city name; "Use my location" button (browser geolocation API).

---

## Phase B — Needs server-side GRIB2 decode

Classic earth-clock had Temp, RH, MSLP, TPW, TCW, AD, WPD overlays — all from GFS GRIB2 records, decoded by the legacy `weather-service.js` (only currently extracts surface wind). orrery needs these back; two paths to consider.

### ⬜ Path A — extend the existing `weather-service.js` (recommended first step)
- The existing Node service already downloads GFS GRIB2 from NOMADS. Adding more variables is a config change + a few more `grib2json` invocations: write companion `.json` files alongside the existing wind one (e.g. `current-temp-surface-gfs-1.0.json`, `current-mslp-gfs-1.0.json`).
- orrery side: a new loader per variable (re-uses the wind-grid → texture pipeline) and a coloured-texture overlay layer per variable, switchable from the menu.
- Pros: keeps the proven server pipeline; ships features fast; no new infra.
- Cons: doesn't unlock AI weather (GraphCast, AIFS) which want different GRIB2 fields and frequencies.
- **Effort: ~1-2 days** to get MSLP + temperature + RH + TPW + TCW back. Worth doing **before** the eclipse / production cutover so feature parity with classic is restored.

### ⬜ Path B — GRIB2 decode proxy (Cloudflare Worker, `eccodes-wasm`)
- One small Worker / Vercel Edge Function running `eccodes-wasm` unlocks **every** GRIB2 field including ECMWF AIFS and Google GraphCast (AI weather forecasts) — not just the classic GFS subset.
- Input: NOAA NOMADS URL (GFS 0.25° or 0.5°). Output: JSON matching existing `current-wind-surface-level-gfs-1.0.json` schema for any variable.
- Deploy as `grib.earth-clock.onemonkey.org` (Cloudflare Worker).
- Pros: future-proof; in-browser decode means we're not pre-committed to which fields are exposed; AI weather inclusion.
- Cons: more new infra to maintain; eccodes-wasm is large (~5 MB); not strictly needed if Path A covers our overlays.
- **Build Path B after** Path A's feature parity is shipped.

### ⬜ Multi-altitude wind layers (pressure levels)
- GFS 250/500/700/850/925 hPa → switchable altitude bands. Same Particles pipeline as surface wind, different texture per altitude. Falls out of either Path A or B.

### ⬜ OSCAR ocean surface currents
- `https://podaac-opendap.jpl.nasa.gov/...` — needs Earthdata auth (server-side only). Routed through the same NGINX/Worker proxy used for NHC.

---

## Phase C — Stretch goals

- **10-min live cloud stitch** (GOES-East + Himawari + Meteosat) — replaces daily VIIRS mosaic
- **Kp index** (NOAA SWPC) → aurora intensity scaling
- **Real star skybox** (Tycho-2 / Deepstar catalogue at >100 k stars)
- **Full solar system** — planets, their moons, ecliptic plane
- **Wallpaper Engine** output mode — replace `BundledDataSource` stub with real fetches
- **Camera paths through space** ← *new, needs design*
  - The classic earth-clock had a gentle auto-rotate; orrery's OrbitControls is more capable but feels static when idle. The opportunity: make orrery something that *moves* — like an animated photograph of the planet as seen from various vantage points.
  - Future-proof shape: a `CameraPath` abstraction — a parametric function `t → { position, lookAt, up }` evaluated each frame. The animate loop interpolates path state into the camera; OrbitControls can be temporarily disabled and re-enabled for manual control.
  - Concrete paths to support:
    - **Gentle orbit** (default idle behaviour): slow CCW rotation around Earth at the current zoom, no orbital realism — purely cinematic.
    - **ISS viewpoint**: camera follows a TLE-derived ISS orbit (~408 km × 51.6° inclination), looking down at Earth. Real-time position from celestrak.org / N2YO; standard SGP4 propagator (a few hundred lines, public).
    - **Sub-lunar viewpoint**: camera sits at the moon's current position looking back at Earth — the classic Apollo "Earthrise" frame.
    - **Heliocentric**: camera at a fixed point in the inertial frame, watching Earth orbit and spin (heavy time-warp required to be cinematic).
    - **Geosync / GOES viewpoint**: ~35 786 km, equatorial, locked to a chosen longitude.
    - **L1 viewpoint** (sub-solar): always between Earth and sun — what DSCOVR / EPIC sees.
    - **Free-fly**: WASD/mouse keyboard control for power-users; ignores orbital mechanics.
  - UI: probably a "Vantage" submenu or a dedicated panel. Each preset is a path. A "Path: orbit / ISS / moon / sun-L1 / free" selector + a "speed" multiplier.
  - Design constraint: when in a path, OrbitControls is suspended but a single user input (drag / scroll) should pause the path and hand control back. The path can resume on a button.
  - Honour the design philosophy: paths are *gentle*. No jump-cuts, no whip-pans. Position interpolation is smoothed; transitions between paths use ~2 s ease.
  - Out of scope for v1: VR / 360° camera mode; multi-camera composition.

---

## Infrastructure

| Item | Status | Notes |
|------|--------|-------|
| `orrery/.env.local` | ✅ created (not committed) | `VITE_FIRMS_MAP_KEY` set; excluded from git |
| `orrery/.gitignore` | ✅ (assumed via root) | Confirm `.env.local` is excluded |
| Dev server | ✅ `npm run dev` in `orrery/` | Vite at `http://localhost:5173` |
| Live site | ✅ `earth-clock.onemonkey.org` | Currently classic earth-clock. CapRover deployment, see `DEPLOYMENT.md` |
| Wind JSON | ✅ `/data/weather/current/current-wind-surface-level-gfs-1.0.json` | Refreshed by `weather-service.js` every 6 h |
| Coastlines JSON | ✅ `/data/earth-topo.json` | Bundled, Natural Earth 50m |
| **Replace-classic cutover** | ⬜ blocked on Phase A | Trigger: Phase A complete + layer-toggle HUD + visual QA. Action: point `vite.config.ts > build.outDir` at `../public`, move classic to `../public/classic/`, update `index.html` redirect. |
| **Docs polish (repo + web)** | ⬜ paired with cutover | README is currently long-and-dense — fine for now, but before going live: split into shorter top-level README + linked docs (e.g. `docs/architecture.md`, `docs/data-sources.md`, `docs/philosophy.md`); add an in-app About panel sourced from `CREDITS.md`; publish a web docs surface (likely a series on onemonkey.org or a `/docs/` static section) so first-time visitors can read the philosophy without cloning the repo. |
| **Production CORS proxy** | ⬜ required for cutover; investigation done | NHC's `CurrentStorms.json` (and any future feeds without CORS headers) needs an edge proxy in production. Dev currently uses Vite's built-in `server.proxy` config to route `/proxy/nhc/*` through. **Decision**: add an NGINX `location /proxy/nhc/` block to the existing CapRover deployment — zero extra infra, zero extra monthly cost, same-origin URLs. Cloudflare Worker remains a documented fallback if we ever want caching / rate-limiting / multi-upstream routing. Full investigation + deploy steps: [docs/proxy.md](docs/proxy.md). |

---

## Session log

| Date | Completed | Left mid-session |
|------|-----------|-----------------|
| 2026-05-10 | Scaffolded orrery (3681e91) | — |
| 2026-05-11 | GPU wind, GFS, coastlines, cloud composite (4eefbaf) | Started aurora (lost to API limit) |
| 2026-05-11 | ← you are here | Aurora next |
| 2026-05-11 | AuroraLayer + auroraLoader rebuilt; PLAN.md created; .env.local restored | Active fires next |
| 2026-05-11 | FireLayer + firmsLoader landed (hourly FIRMS VIIRS, flickering points) | Hurricanes / NHC next |
| 2026-05-11 | Design-philosophy section + docs expansion; layer-toggle menu (`src/ui/Menu.ts`) with localStorage persistence | Hurricanes / NHC next |
| 2026-05-11 | HurricaneLayer + nhcLoader (NHC CurrentStorms.json); Terminator toggle (Globe swaps between Phong + flat MeshBasic; gates night-lights overlay) | GIBS overlays (NO₂ / AOD / sea ice) next |
| 2026-05-11 | **Fixed lat/lon→xyz chirality bug** in Coastlines / Fires / Hurricanes / Aurora (Greenwich was at −Z, east going CW; corrected to texture convention: Greenwich at +X, east CCW). Aurora wrapped in tilted Group + setRotationY (was using neither). Debug overlay (`src/ui/Debug.ts`) + static fixtures (`src/data/debugFixtures.ts`) + "Use test data" button for isolating loader-vs-renderer bugs. | GIBS overlays next, then lightning |
| 2026-05-11 | Hurricane sprite rewrite (NormalBlending, larger eye, bolder color ramp). Cloud night-side: dropped hard day mask, now a brightness gradient with a floor — clouds stay visible at night (master Terminator toggle still scales the gradient). Test-data button now syncs Menu state via public `setLayer()` instead of forcing `mesh.visible`. Find-moon button + on-screen NDC indicator. **FlatMap v1**: equirectangular projection toggle (`src/scene/FlatMap.ts`) — own scene + ortho camera + combined day/night/clouds shader; "Map" toggle in menu. | FlatMap v2 (port aurora/fires/hurricanes/wind/coastlines to 2D) and GIBS overlays |
| 2026-05-11 | Moon emissive map (dim disc on the dark side, phases still show). Menu reorganized into Layers / View categories. **Three new UI features**: DataRegistry + DataPanel (live source + age per layer, top-right), Clock (top-centre, 36 px monospace, UTC ⇄ local toggle), LocationPin + LocationPanel (click-to-pin coordinates + solar time, 3D and flat-map markers). | Wire wind sampling at pinned location, port more layers to FlatMap, hurricane track / cone geometry |
| 2026-05-11 | Loader robustness: NHC routed through Vite dev proxy (`/proxy/nhc/*`) — CORS-blocked direct in browser. GIBS daily lag bumped to 2 days (Pacific tiles publish late). Aurora detail line now shows max-probability + finer activity bands. New Kp index row (NOAA SWPC planetary K-index, 0-9 scale + plain-language activity label + approximate visible latitude). | CORS proxy decision: CapRover NGINX vs. Cloudflare Worker |
| 2026-05-11 | CORS-proxy investigation written up in `docs/proxy.md`: full options table, decision (CapRover NGINX, $0/month), dev-prod URL symmetry diagram, step-by-step deploy snippet. New `orrery/docs/` folder kicks off the docs-polish work. | Lightning next |
| 2026-05-12 | **Lightning** (`LightningLayer` + `LightningLoader`): Blitzortung community WebSocket, LZW-decoded JSON strikes streamed at ~200 ms latency. Additive flash sprites in a 1 024-slot circular buffer, fading over ~0.6 s via shader (`uTime − spawnTime`). DataPanel row shows rolling 60 s strike rate + cumulative total + connection status. **Camera paths roadmap entry** added to Phase C (gentle orbit / ISS / Earthrise / heliocentric / geosync / L1 / free-fly, with `CameraPath` abstraction). | Camera paths v1, or FlatMap v2, or production cutover |
