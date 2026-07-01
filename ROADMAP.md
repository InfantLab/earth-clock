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
- ✅ Done
- ❌ Blocked

Current shipped version: **v0.2.3** (2026-06-29); **v0.2.4 in progress**. See [CHANGELOG.md](CHANGELOG.md).

---

## v0.2.4 — Feedback + about pages + mobile polish

### ✅ Feedback link in menu and about pages

`· feedback` mailto link in the main menu meta line; prominent contact section
in both about pages with name (`caspar@onemonkey.org`) displayed plainly.
"earth-clock" brand wordmark in both about page headers is now a link back to `/`.

### ✅ About pages — sticky sidebar TOC + kids page TOC

Both about pages have a sticky sidebar TOC on wide screens (≥860 px) and a
horizontal strip TOC on mobile. The kids page previously had neither — now
matches the main about page structure with 13 section links.

### ✅ LocationIQ geocoder live

API key, NGINX proxy block, deployment docs all in place. Root-cause fix: LocationIQ
does not support Nominatim's `format=jsonv2` extension — changing to `format=json`
resolved the "Invalid Request" error. Geocoder now returns place names correctly.

### ✅ Mobile UX — menu auto-collapse + eclipse picker + compact sun disc

- Menu auto-collapses after any layer toggle on ≤600 px so the effect is immediately
  visible on the globe. "Find moon" also collapses.
- Eclipse catalogue hides itself after selecting an event on mobile; eclipse layer and
  scrub controls remain active so the event plays unobstructed.
- SunDiscPanel capped at 180 px wide on mobile; SVG disc shrunk 201 px → 96 px so it
  sits compactly in the corner rather than blocking the view.

### ⬜ Mobile — real-device QA pass

Walk the UI on iOS Safari + Android Chrome at 360 / 414 px wide, portrait +
landscape. Flag anything that broke or still feels wrong. Carried from v0.2.3.

---

## v0.3.0 — Geology layer

Inspired by a primary-school class visit: kids instinctively want to see the
*structure* of Earth, not just its weather. Tectonic plates, earthquakes, and
volcanoes are deeply connected (most sit on plate boundaries), spectacular on
the globe, and backed by excellent free public data.

### ⬜ Tectonic plates overlay

**Data:** Peter Bird's PB2002 dataset via
[fraxen/tectonicplates](https://github.com/fraxen/tectonicplates) — 52 plates
as GeoJSON boundary lines. Effectively static on human timescales.

**Implementation:** Almost identical to the existing Coastlines layer
(`frontend/src/scene/Globe.ts`). Fetch GeoJSON → build `LineSegments` geometry →
rotate with Earth at `earthRotationY(now)`. Add as `Geography → Plates` menu
entry. Use a warm amber/terracotta colour to distinguish from cool-white
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
   `all_week.geojson` every 15 min and writes `public/data/earthquakes/current.json`.
2. New `EarthquakeLayer.ts` — each event as a pulsing disc/sprite: radius ∝
   magnitude (log scale), colour by depth (shallow = red, deep = blue), opacity
   fades over time since the quake. Show past 7 days by default.
3. `Weather → Earthquakes` menu entry, same row as Fires (both natural hazard events).

**Effort:** ~1–2 days (backend cron + frontend layer).

### ⬜ Volcanoes

**Known locations (static):** Smithsonian Global Volcanism Program database
(~1,500 volcanoes, v5.3.6 May 2026). Fetch once, bundle as static JSON. Small
triangle or teardrop markers at each lat/lon — always visible when layer is on.

**Active eruptions (live):** FIRMS cross-reference — compare FIRMS thermal
anomaly positions against the bundled volcano list (within ~20 km). FIRMS dots
near a known volcano get re-classified as eruption markers rather than wildfires.
No extra backend work; happens in the frontend. Optionally supplement with GVP
weekly RSS parsed in `weather-service.js`.

**Effort:** static layer ~half a day; active eruptions ~1 day on top.

### Implementation order

1. **Plates** — pure frontend, zero backend, dramatic visual, one day.
2. **Earthquakes** — backend cron, then frontend layer. Two days.
3. **Volcanoes (static)** — bundle dataset, add markers alongside plates.
4. **Active eruptions (FIRMS cross-ref)** — quick win once static layer is in.

All three fit naturally into a new `Geology` menu row between Geography and Astro.

---

## v0.4.0 — Flat Map v2

Comprehensive flat-map feature parity and new projections. Items in priority order.

### ⬜ Eclipse on flat map

Port the umbra/penumbra discs + path-of-totality polyline from the 3D
EclipseLayer to the equirectangular plane. The path-of-totality is already a
lat/lon polyline; projecting it to the flat map is straightforward. The umbra
disc needs a 2D oval approximation at the sub-solar eclipse point.

### ⬜ Phase B weather overlays (MSLP / Temp / RH / TPW / TCW)

Extend [weather-service.js](weather-service.js) to emit MSLP / Temp / RH / TPW /
TCW companion JSON alongside the existing wind file. Restores classic
earth-clock's full overlay set. ~1–2 days server-side, then wire into the
existing OverlayLayer.

### ⬜ Pressure map — verify post-v0.1.8 fix

After the half-float → byte texture fix in v0.1.8, MSLP should show clear
high/low pressure systems. Verify on the next live data pass. If still uniform,
check: wrong units (hPa vs Pa), poorly tuned palette, or server-side decode
producing a constant field. Quick check: `window.__orrery.overlay.lastGrid?.values?.slice(0, 10)`.

### ⬜ Additional cartographic projections

Restore parity with classic's 8 projections. Waterman butterfly + Atlantis are
the visually striking ones to land first. Each projection is a vertex shader /
geometry transform; the data layers (coastlines, plates, earthquake dots) need
corresponding projection transforms.

### ⬜ Phase B — server-side GRIB2 decode (stretch)

| Item | Notes |
|------|-------|
| Path B — `eccodes-wasm` Cloudflare Worker | Unlocks ANY GRIB2 field (ECMWF AIFS, GraphCast). After Path A. |
| Multi-altitude wind (250/500/700/850/925 hPa) | Falls out of Path A or B. |
| OSCAR ocean surface currents (Earthdata) | Routed through CapRover proxy (same as NHC). |

---

## v0.5.0 — Lunar Eclipse v2 + Mobile Experience v2

Deeper treatment of the two areas where MVP shipped but richer experience
is clearly possible.

### ⬜ Lunar eclipses — v2

- **MoonDiscPanel analogue** to the SunDiscPanel — small inset showing the moon
  with Earth's penumbral and umbral shadows from the pinned observer's perspective.
  Re-uses observerView geometry with Sun ↔ Earth ↔ Moon roles rotated.
- **Earth-shadow shader on the moon mesh** — proper umbra disc creeping across
  the moon's face for partial events (currently the whole moon dims uniformly).
- **Optional auto-pin** for lunar: pick a location with the moon high in the sky
  at greatest eclipse so MoonDiscPanel has a meaningful default observer.

### ⬜ Mobile experience — v2

- **Draggable bottom sheet** — upgrade the two-snap (collapsed/65 vh) sheet to
  free drag with momentum snap. ~50 lines of pointer-event logic.
- **First-paint asset budget** — measure on mid-range Android; skybox + globe
  textures + 700 KB JS is the main risk. Defer textures behind a loading state
  if it's visibly slow.

---

## v0.6.0 and beyond — Stretch goals

### Downstream surfaces

#### ⬜ Screensaver + Wallpaper Engine

Figure out the right way to ship the WebGL frontend as a screensaver and as a
Wallpaper Engine input (currently both target the classic renderer).

Open questions:
- **Screensaver host**: Electron / Tauri wrapping a local build, or a `.scr` shim
  spawning a fullscreen Chromium window. Measure idle CPU/GPU at 30 fps cap.
- **Wallpaper Engine**: should "just work" with a frontend build — but how to
  feed live weather data when offline? Bundled snapshot mode or live fetches.
- **`?mode=ambient`** query-string: disables all panels, sets gentle orbit,
  1× time-warp, curated layer set (wind + clouds + night lights).

Effort: ~half-day design doc, then a few days to build.

### Camera paths

- Gentle orbit ✅
- ISS / Sub-lunar (Earthrise) / Heliocentric / Geosync / L1 / Free-fly — all ⬜

### Earth-clock branding

- Hour rings ⬜
- Equator + ecliptic rings ⬜
- Analemma trace ⬜

### Further sky + space layers

- 10-min live cloud stitch (GOES-East + Himawari + Meteosat, replaces VIIRS daily mosaic) ⬜
- Kp index → aurora intensity scaling (Kp already in DataPanel; wire to AuroraLayer opacity) ⬜
- Real star skybox (Tycho-2 / Deepstar ≥100k stars) ⬜
- Full solar system (planets, moons, ecliptic plane) ⬜
- ISS position + track ⬜

### Communications

#### ⬜ "Upgrading earth-clock to WebGL" blog post

- Audience: existing users + WebGL / data-viz / open-source weather community.
- Beats: why rebuild (mobile + Three.js), what's new, what's preserved, what's coming.
- Hero moment: the 2026-08-12 Spain eclipse.

---

## Vision check — overview effect blindspots

The founding essay ([*Eclipses, Equinoxes, and Everyday Awe*](https://onemonkey.org/eclipses-equinoxes-and-everyday-awe-telling-the-time-on-spaceship-earth/))
sets the north star: **"Earth-clock lets you experience the astronauts' overview
effect from your browser."** Buckminster Fuller's *Spaceship Earth* framing —
finite vessel, shared crew, daily temporal awareness.

Auditing the roadmap against that intent reveals a few gaps worth keeping in mind
as priorities get set:

### Where we're strong

- **Time / rotation** — day/night terminator, timezone overlay, clock controls, time-warp. Core mission, well covered.
- **Astronomy** — sun, moon, eclipses, stars. Good.
- **Weather** — wind, clouds, aurora, fires, hurricanes, lightning. Live and compelling.
- **Geology** — coming in v0.3. Connects Earth's interior to the surface the crew lives on.

### Potential blindspots

**1. The crew — human presence**
The essay is explicitly about empathy: *"your morning is someone else's midnight."*
But the globe currently shows no people. A **population density layer** (Gridded
Population of the World, free from SEDAC) would make that abstract idea visceral —
you can see exactly where the daylight is landing on the billion people waking up.
Low implementation cost: static raster texture, same pipeline as the cloud overlay.

**2. A living planet breathing through the year — seasonal animation**
The essay explicitly mentions wanting a "year in a minute" animation loop. Nothing
in the current roadmap delivers that. A time-lapse mode that sweeps `simulatedTime`
through one calendar year at ~10 seconds/month would show the terminator's annual
dance, the seasonal migration of storms, and the aurora's solar-cycle pulse. The
time-warp infrastructure already exists; this is a UX feature on top of it.

**3. The ocean — half of what astronauts see**
Earth from orbit is mostly ocean. We have wind and clouds but nothing specifically
about the ocean: no sea surface temperature, no ice extent, no currents beyond the
Phase B OSCAR stretch goal. Sea ice (NSIDC) is particularly striking seasonally and
free. Even a simple SST colour overlay would dramatically change the feeling of the
globe.

**4. ISS — the literal overview effect**
The ISS is the source of the "overview effect" and orbits at 400 km in ~90 minutes.
Its ground track is publicly available (TLE from CelesTrak, no auth needed). Showing
the ISS position + orbital track gives the user an immediate, moving reminder of
*who* is up there having the experience we're simulating. Small implementation cost;
large conceptual payoff.

**5. The living surface — vegetation**
The essay's seasonal breathing is about axial tilt and weather, but Earth's visible
*greening* is equally compelling. NASA MODIS NDVI (vegetation index) composites are
free and beautiful. Swapping the day texture to a seasonal NDVI overlay — or
blending NDVI with the base texture — would show the Sahel greening in the northern
summer, the Amazon's dry-season browning, the boreal forest's annual pulse.

These are not all equal priority — ISS and population density are the easiest wins
with the highest conceptual return. The seasonal animation would make the time-warp
feature feel intentional rather than incidental.

---

## Infrastructure

| Item | Status | Notes |
|------|--------|-------|
| `frontend/.env.local` (`VITE_FIRMS_MAP_KEY`) | ✅ | Excluded from git. |
| Dev server | ✅ | `npm run dev` (`:8080`) or `cd frontend && npm run dev` (`:5173` Vite). |
| Live site | ✅ | `earth-clock.onemonkey.org` (CapRover; see [DEPLOYMENT.md](DEPLOYMENT.md)). |
| Production CORS proxy (NHC) | ✅ | NGINX `location /proxy/nhc/` in CapRover override. |
| Wind JSON | ✅ | `public/data/weather/current/current-wind-surface-level-gfs-1.0.json`, refreshed 6 h. |
| Coastlines | ✅ | `public/data/earth-topo.json`, Natural Earth 50 m. |
| WebGL cutover | ✅ | v0.1.0 — WebGL at `/`, classic at `/classic/`. |
| Docs / about page | 🔄 | `/about/` panel landed; broader web docs still TODO. |
| LocationIQ geocoder | ✅ | API key + NGINX block active; use `format=json` (not `jsonv2`) — LocationIQ doesn't support Nominatim's extended format. |
| Browser-matrix QA | ⬜ | Tested Chrome / Edge only. Verify Safari, Firefox, mobile. |
