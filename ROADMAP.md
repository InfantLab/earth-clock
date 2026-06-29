# earth-clock — Roadmap

Forward-looking engineering tracker. Shipped work lives in
[CHANGELOG.md](CHANGELOG.md). Per-layer build history before v0.1.2 lives in
[frontend/docs/PLAN-archive.md](frontend/docs/PLAN-archive.md).

> **Project shape:** the WebGL frontend (`frontend/`) ships at `/`; the classic
> D3 + canvas renderer is preserved at `/classic/`. Cutover landed in v0.1.0.
> Live site: [earth-clock.onemonkey.org](https://earth-clock.onemonkey.org).
> Local dev: `npm run dev` from this directory serves `public/` at `:8080`;
> for in-frontend dev, `cd frontend && npm run dev` (Vite on `:5173`).
> Production build: `cd frontend && BUILD_AS_ROOT=1 npm run build` (writes to
> `../public/`).
>
> *Codename note:* `frontend/` used to be called `orrery/` — the codename for
> the WebGL rebuild during its parallel-development phase. The runtime global
> `window.__orrery` and the localStorage key `orrery.menu.v1` are stable API
> surfaces and intentionally keep the codename.

## Status key

- 🔄 In progress / partially landed
- ⬜ Not started
- ❌ Blocked

Current shipped version: **v0.2.2** (2026-06-27). See [CHANGELOG.md](CHANGELOG.md).

---

## Next up

### 🔄 Mobile experience — v2 polish

Basic mobile layout landed in v0.2.2 (compact clock bar, two-snap bottom sheet,
full-width panels, 44 px touch targets, lighter defaults). Outstanding items:

- **Real-device QA** — walk the UI on iOS Safari + Android Chrome at 360 / 414
  px wide, portrait + landscape. Flag anything that broke or still feels wrong.
- **Draggable bottom sheet** — upgrade the two-snap (collapsed/65 vh) sheet to
  free drag with momentum snap. ~50 lines of pointer-event logic; deferred to
  keep v0.2.2 simple.
- **Pinned-location + sub-solar markers** — still go sub-pixel on very small
  screens; needs a minimum marker size clamp in the scene layer.
- **First-paint asset budget** — measure on mid-range Android; skybox + globe
  textures + 700 KB JS is the main risk. Defer textures behind a loading state
  if it's visibly slow.

### ⬜ Lunar eclipses — v2 polish

MVP shipped in v0.2.1 (catalogue + ☀/🌑 tabs + moon-mesh dimming/tint via
`Moon.setEclipseShadow`). What's still on the table for a richer experience:

- **MoonDiscPanel analogue** to the SunDiscPanel — small inset showing the
  moon with Earth's penumbral and umbral shadows drawn on it, from the pinned
  observer's perspective. Re-uses observerView geometry with Sun ↔ Earth ↔
  Moon roles rotated.
- **Earth-shadow shader on the moon mesh** for partial events — currently
  the whole moon dims uniformly. A proper shader would let the umbra disc creep
  across the moon's face, exactly as you'd see it through binoculars.
- **Penumbral magnitude** in the dim curve — right now we drive intensity off
  umbral magnitude alone; the penumbral phase before/after U1/U4 is invisible.
- **Optional auto-pin** for lunar: pick a location with the moon high in the
  sky at greatest, so the MoonDiscPanel has a meaningful default observer.

### ⬜ Live-data freshness gating (weather + simulated time)

The eclipse path tracks simulated time, but every other live layer (wind / clouds /
aurora / fires / hurricanes / lightning / Kp / MSLP-Temp-RH overlays) renders
**today's data on whatever date the clock says**. For a 2027 eclipse the user
sees fake "wind on the day of the eclipse" — visually rich, factually wrong.

**Policy (decided):** when simulated time is far from wall-clock now, hide all
live-data layers rather than try to backfill historical archives (ERA5, GIBS
back-catalogue, etc. — too much integration surface). Honesty over completeness.

**Threshold:** ±24 h around wall-clock now. Comfortably wider than any single
eclipse window (≤6 h), so short eclipse jumps don't strip the globe; tighter
than "any simulation", so far-future / far-past warps clearly mark themselves as
astronomical-only.

**Affected layers (hide when out of range):**
- Wind streamlines + trails buffer
- Clouds (VIIRS daily mosaic — the date stamp on the imagery is wrong)
- Aurora forecast
- Active fires (FIRMS)
- Hurricanes + storm tracks
- Lightning (live WebSocket — also stop the socket to save bandwidth)
- MSLP / Temp / RH / TPW / TCW overlays
- Kp index readout

**Unaffected layers (stay on, they're astronomical-time-correct):**
- Day / night map + terminator
- Coastlines
- Sun + moon + stars + skybox
- Eclipse layer (umbra, penumbra, path of totality)
- Location pin + sub-solar / sub-lunar markers

**UX:** small caption beneath the Clock — *"live weather hidden · sim 2027-08-02"*
in the same dim grey as the rest of the chrome, with a ↺ glyph that snaps back
to wall-clock now (reuses the existing reset). The Data panel rows for hidden
layers show *"(frozen — sim date out of range)"* in the source slot so the user
can see why a toggle "does nothing". Menu toggles stay live (not disabled) so
the user's preferences persist across the snap-back.

**Edge cases worth thinking through:**
- Eclipse playback usually stays inside ±24 h (e.g., jumping to the 2026-08-12
  eclipse from today 2026-06-26 = +47 days → out of range → weather hidden, as
  desired).
- Real-time mode with a tiny clock-skew (sim drifts by seconds during
  long-running sessions): well inside ±24 h, no flicker.
- User scrubs simulated time over the ±24 h boundary: layers fade out / in at
  the threshold. Add a small hysteresis (e.g., hide at >24h, re-show at <22h)
  to avoid flicker at the boundary.

Implementation surface: single helper `isLiveDataInRange(simulatedTime)` in
main.ts; wire its result to a per-layer `setLiveDataValid(bool)` on each
affected layer (most can just toggle `mesh.visible`). The Clock panel grows
the caption + snap-back hook. ~half day end-to-end.

---

## In flight

### 🔄 v0.2.0 launch — operational tail

Code-side work shipped; outstanding items need hands-on operational work:

1. **Browser-matrix QA pass** — walk through
   [frontend/docs/qa-checklist.md](frontend/docs/qa-checklist.md)'s v0.2.0
   section in Safari + Firefox + mobile in addition to Chrome/Edge. Flag
   anything broken.
2. **LocationIQ live in production** — sign up at <https://locationiq.com/> for
   a free API key. Paste the NGINX block from
   [DEPLOYMENT.md §5c](DEPLOYMENT.md) into the CapRover override with your
   key. Verify with the curl test in the QA checklist. Site stops depending on
   Nominatim's charity service.

---

## Near-term — Geology layer (v0.3)

Inspired by a primary-school class visit: kids instinctively want to see the
*structure* of Earth, not just its weather. Tectonic plates, earthquakes, and
volcanoes are the obvious first targets — deeply connected (most earthquakes and
volcanoes sit on plate boundaries), spectacular on the globe, and backed by
excellent free public data.

### ⬜ Tectonic plates overlay

**Data:** Peter Bird's PB2002 dataset via
[fraxen/tectonicplates](https://github.com/fraxen/tectonicplates) — 52 plates
as GeoJSON boundary lines. CORS-friendly static fetch; can be bundled alongside
`earth-topo.json` or fetched once and cached. Updated May 2026; effectively
static (plate boundaries don't change on human timescales).

**Implementation:** Almost identical to the existing Coastlines layer
(`frontend/src/scene/Globe.ts`). Fetch GeoJSON → build `LineSegments` geometry →
rotate with Earth at `earthRotationY(now)`. Add as `Geography → Plates` menu
entry. Use a warm amber/terracotta colour to distinguish from the cool-white
coastlines. No backend work needed.

**Effort:** ~half a day.

### ⬜ Earthquake activity

**Data:** USGS Earthquake Hazards Program real-time feeds
(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/`). Available
windows: past hour / day / week / month; magnitude thresholds: all / ≥1.0 /
≥2.5 / ≥4.5 / significant. GeoJSON format, updated continuously. **No CORS
headers** — needs backend proxy.

**Implementation:**
1. Add a `fetchEarthquakes()` job to `weather-service.js` — polls USGS
   `all_week.geojson` (or `significant_month.geojson`) every 15 min and writes
   `public/data/earthquakes/current.json`.
2. New `EarthquakeLayer.ts` — renders each event as a pulsing disc or sprite:
   radius ∝ magnitude (log scale), colour by depth (shallow = red, deep = blue),
   opacity fades over time since the quake. Show past 7 days by default.
3. `Weather → Earthquakes` menu entry, in the same row as Fires (both are
   "natural hazard events").

**Effort:** ~1–2 days (backend cron + frontend layer).

### ⬜ Volcanoes

Two sub-layers with different data characteristics:

**Known volcano locations (static):**
Smithsonian Global Volcanism Program database (~1,500 volcanoes, v5.3.6 May 2026)
via their webservices API. Fetch once, bundle as static JSON. Render as small
triangle or teardrop markers at each volcano's lat/lon — always visible when the
layer is on, regardless of activity level.

**Active eruptions (live):**
Two approaches, pick the more reliable:
- **FIRMS cross-reference** — we already fetch FIRMS fire detections. Compare
  FIRMS thermal anomaly positions against the bundled volcano list (within ~20 km
  radius). FIRMS dots near a known volcano get re-classified and styled as
  eruption markers rather than wildfires. No extra backend work; happens in the
  frontend.
- **GVP weekly RSS** — Smithsonian publishes a weekly activity report every
  Thursday (RSS/XML). Parse server-side in `weather-service.js`; write a JSON
  summary of currently-erupting volcanoes. Fresher than FIRMS for slow-erupting
  volcanoes that don't produce strong thermal signals.

**Effort:** static layer ~half a day; active eruptions ~1 day on top.

### Implementation order

1. **Plates** first — pure frontend, zero backend, dramatic visual, one day.
2. **Earthquakes** — add backend cron, then frontend layer. Two days.
3. **Volcanoes (static)** — bundle dataset, add markers alongside plates.
4. **Active eruptions (FIRMS cross-ref)** — quick win once static layer is in.
5. **GVP weekly RSS** — optional enhancement; only needed if FIRMS cross-ref
   misses too many events.

All three fit naturally into a `Geography` row addition or a new `Geology` menu
row between Geography and Astro.

---

## Near-term (Phase A polish)

### ⬜ FlatMap v2 — remaining layer ports

8 items, in priority order (detailed in
[frontend/docs/PLAN-archive.md](frontend/docs/PLAN-archive.md#-equirectangular-flat-map-mode-)):

1. Sub-solar marker (small disc at the live (lat, lon))
2. Sub-lunar marker (with phase-aware shading)
3. Terminator line (drawn arc, not a straight line)
4. Hide-in-map-mode list (grey out Atmosphere / Sky-stars when Map is on)
5. ~~Pan & zoom~~ — landed in v0.1.9
6. ~~Wrap-around~~ — landed in v0.1.9
7. **Eclipse on flat map** — umbra/penumbra discs + path-of-totality polyline
   ported from the 3D EclipseLayer to the equirectangular plane.
8. Additional cartographic projections — restore parity with classic's 8
   projections (Waterman butterfly + Atlantis are the visually striking ones
   to land first).

### ⬜ Phase B feature parity — weather-service extension (Path A)

Extend [weather-service.js](weather-service.js) to emit MSLP / Temp / RH / TPW /
TCW companion JSON alongside the existing wind file. Restores classic
earth-clock's overlay set. **Before going live** — these are user-visible parity
items. ~1–2 days. Server-side GRIB2 decode proxy (Path B, eccodes-wasm) deferred
behind this.

### ⬜ Pressure map — verify post-v0.1.8

After the half-float → byte texture fix in v0.1.8, MSLP should now show clear
high/low pressure systems. Verify on the next live data pass; if the rendering
still looks unexpectedly uniform, hypotheses to check:

- Grid values are in the wrong units (e.g. hPa instead of Pa, off by ×100).
- Palette function for `pressure` is poorly tuned (low contrast across
  mid-range).
- Server-side decode in `weather-service.js` is producing a constant or aliased
  field.

Quick check: `console.log(window.__orrery.overlay.lastGrid?.values?.slice(0, 10))`
from DevTools once MSLP is active.

### ⬜ Skybox quality toggle (2K ⇄ 8K)

Both assets are bundled
([frontend/src/scene/Skybox.ts](frontend/src/scene/Skybox.ts) HEAD-probes 2K → 8K).
2K (~250 KB) loads first; 8K (~1.9 MB) is sharper Milky Way detail when zoomed
out. Add a small UI control (Astro row or a new dedicated "View / quality"
entry), persist choice in `localStorage` alongside `orrery.menu.v1`. Default 2K
for first paint; user can opt in to 8K once everything else has loaded.

---

## Downstream surfaces

Earth-clock historically ships three surfaces: the website, a Windows
screensaver ([screensaver/](screensaver/)), and a Wallpaper Engine output
([wallpaper-engine/](wallpaper-engine/)). Both downstream surfaces currently
target the **classic** D3 + canvas renderer and run against the legacy server's
data feeds.

### ⬜ Screensaver + Wallpaper Engine — new-version investigation

Goal: figure out the right way to ship the WebGL frontend as a screensaver and
as a Wallpaper Engine input, given that they're currently bound to the classic
renderer.

Open questions to answer in a short design doc before implementing:

- **Screensaver host**: classic uses a small Windows wrapper around a packaged
  build. For WebGL we likely need either (a) Electron / Tauri wrapping a
  local-only build of the frontend, or (b) a `.scr` shim that spawns a
  fullscreen Chromium window. Battery / GPU impact matters for screensaver
  use; investigate idle CPU/GPU with the WebGL renderer at 30 fps cap, no
  time-warp, no aurora wsockets.
- **Wallpaper Engine input**: Wallpaper Engine ingests browser-based wallpapers
  via its built-in Chromium. Should "just work" with a frontend build pinned
  at `/` and the menu collapsed by default — but: how do we feed live weather
  data when the user has Wallpaper Engine running offline (right now the
  `BundledDataSource` stub in
  [frontend/src/data/DataSource.ts](frontend/src/data/DataSource.ts) is empty)?
  Two paths: (i) a "bundled snapshot" mode where the build includes a recent
  wind/cloud capture, (ii) live fetches via the host's network if available.
- **Renderer modes**: the existing menu state is over-rich for an ambient
  wallpaper. Probably want a `?mode=ambient` query-string that disables all
  panels, sets a gentle orbit, time-warp 1×, and a curated default layer set
  (wind + clouds + night lights, nothing else).
- **Asset budget**: screensaver / wallpaper need to start fast and run cool.
  Audit what the frontend currently downloads at first paint (~700 KB JS +
  textures); see what can be deferred behind the "ambient" mode.

Effort: ~half-day for the design doc, then a few days to build whichever
surface(s) we commit to. Reference: existing `wallpaper-engine/` +
`screensaver/` directories + the classic wrapper code in
`wallpaper-engine/source/`.

---

## Communications & launch

### ⬜ "Upgrading earth-clock to WebGL" blog post

The cutover from classic → WebGL is the biggest project change since launch.
Worth a public write-up:

- **Audience**: existing earth-clock users, plus the WebGL / data-viz /
  open-source weather community. Cross-post on onemonkey.org and link from the
  in-app About page.
- **Beats**: why rebuild (mobile + Three.js opportunity), what's new (live
  aurora / fires / hurricanes / lightning / eclipse path of totality /
  time-warp / location pin), what's preserved (classic still lives at
  `/classic/`), what's coming (FlatMap v2, Phase B overlays, camera paths).
- **Hero moment**: the 2026-08-12 Spain eclipse is the obvious anchor — show
  off the umbra sweep with a screenshot + a paragraph about how the catalog +
  NASA centerline + time-warp let you experience the eclipse in your browser.
- **Production note**: build screenshots from a clean session (no test data,
  no pinned location, default layer set). Capture both the 3D globe and the
  flat map. Include the eclipse-panel UI clearly to highlight the headline
  feature.

---

## Phase B — server-side GRIB2 decode

| Item | Status | Notes |
|------|--------|-------|
| Path A — weather-service extension (recommended) | ⬜ | MSLP/Temp/RH/TPW/TCW JSON files. 1–2 days. |
| Path B — `eccodes-wasm` Cloudflare Worker | ⬜ | Unlocks ANY GRIB2 field (ECMWF AIFS, GraphCast). After Path A. |
| Multi-altitude wind (250/500/700/850/925 hPa) | ⬜ | Falls out of Path A or B. |
| OSCAR ocean surface currents (Earthdata) | ⬜ | Routed through CapRover proxy (same as NHC). |

---

## Phase C — stretch goals

Full detail in the archive. Headline items:

- **Camera paths through space** — gentle orbit ✅, ISS / Sub-lunar (Earthrise) /
  Heliocentric / Geosync / L1 / Free-fly all ⬜.
- **Earth-clock branding** — hour rings ⬜, equator + ecliptic rings ⬜,
  analemma trace ⬜.
- **10-min live cloud stitch** — GOES-East + Himawari + Meteosat, replaces
  VIIRS daily mosaic.
- **Kp index → aurora intensity scaling** — Kp row already in DataPanel; wire
  it into the AuroraLayer's opacity.
- **Real star skybox** (Tycho-2 / Deepstar ≥100k stars).
- **Full solar system** — planets, moons, ecliptic plane.
- **"About sources" panel** — friendly source listing alongside DataPanel.

---

## Infrastructure

| Item | Status | Notes |
|------|--------|-------|
| `frontend/.env.local` (`VITE_FIRMS_MAP_KEY`) | ✅ | Excluded from git. |
| Dev server | ✅ | `npm run dev` (`:8080` legacy server) or `cd frontend && npm run dev` (`:5173` Vite). |
| Live site | ✅ | `earth-clock.onemonkey.org` (CapRover; see [DEPLOYMENT.md](DEPLOYMENT.md)). |
| Production CORS proxy (NHC) | ✅ | NGINX `location /proxy/nhc/` in CapRover override. See [frontend/docs/proxy.md](frontend/docs/proxy.md). |
| Wind JSON | ✅ | `public/data/weather/current/current-wind-surface-level-gfs-1.0.json`, refreshed 6 h. |
| Coastlines | ✅ | `public/data/earth-topo.json`, Natural Earth 50 m. |
| Cutover | ✅ | v0.1.0 — the WebGL frontend serves at `/`, classic moved to `/classic/`. |
| Docs polish (web + about page) | 🔄 | `/about/` in-app About panel landed; broader web docs surface still TODO. |
| Browser-matrix QA | ⬜ | Have only tested Chrome / Edge. Verify Safari, Firefox, mobile. |
