# earth-clock — Live Plan

The current engineering tracker for the project as a whole. Slim by design — the
exhaustive per-layer history lives in [frontend/docs/PLAN-archive.md](frontend/docs/PLAN-archive.md).
This doc is for **what's next**: current focus, near-term work, blockers, roadmap pointers.

> **Project shape:** the WebGL frontend (`frontend/`) ships at `/`; the classic D3 +
> canvas renderer is preserved at `/classic/`. Cutover landed in v0.1.0. The live site
> is [earth-clock.onemonkey.org](https://earth-clock.onemonkey.org). Local dev:
> `npm run dev` from this directory serves `public/` at `:8080`; for in-frontend dev,
> `cd frontend && npm run dev` (Vite on `:5173`). Production build:
> `cd frontend && BUILD_AS_ROOT=1 npm run build` (writes to `../public/`).
>
> *Codename note:* the `frontend/` directory used to be called `orrery/` — the
> codename for the WebGL rebuild during its parallel-development phase. The runtime
> global `window.__orrery` and the localStorage key `orrery.menu.v1` are stable API
> surfaces and intentionally keep the codename.

## Status key

- ✅ Done & shipped
- 🔄 In progress / partially landed
- ⬜ Not started
- ❌ Blocked

## Version

Current: **v0.2.0** (2026-05-27). 🎉 Public-launch milestone.

- v0.1.2 — Location-panel redesign, pin/beam alignment fix, drag-vs-click, eclipse-close → snap-to-live, wordmark tooltip
- v0.1.3 — wind streamlines fixed (HalfFloat), wind intensity picker (subtle / standard / bold)
- v0.1.4 — Moon-toggle retirement, "Find moon" action button on the Astro row
- v0.1.5 — geocoder behind same-origin `/proxy/geocode/`, structured GeocodeResult with retry, service-unavailable UX
- v0.1.6 — Meeus ELP-2000-82B lunar model; ~10 arcsec accuracy (100× better than Schlyter). Any eclipse now renders correctly from first principles at runtime, not just the four catalogued headline events.
- v0.1.7 — Eclipse sun-disc inset: when an eclipse is loaded and a location pinned, an SVG panel shows the sun's disc with the moon overlapping it at the geometrically correct topocentric offset for that observer + that moment. Linear magnitude readout. Auto-shows when sun is up and moon is within 5° of sun.
- v0.1.8 — Overlay scale-key legend (bottom-centre gradient strip with min / mid / max + units). Pressure-uniform bug fixed: OverlayLayer switched to byte texture because half-float overflowed at MSLP's ~101 325 Pa range, collapsing the whole globe to red.
- v0.1.9 — Flat-map pan + zoom (Three.js MapControls), zoom-on-cursor, ±360° wrap-around via two extra plane copies, double-click resets to whole-world view, Y-pan clamped at the poles.
- v0.2.0 — Public-launch milestone. Tooltip sweep (every menu button reads as plain English); first-visit hint above the wordmark, gated by localStorage so it never reappears; [frontend/docs/qa-checklist.md](frontend/docs/qa-checklist.md) updated with the v0.1.6–v0.1.9 verification matrix; DEPLOYMENT.md docs for LocationIQ swap already in place from v0.1.5.

---

## Release plan — v0.1.6 to v0.2.0

Five half-day batches between now and the next round-number milestone. Each is sized so
one focused session can ship it, and each is ordered for **biggest visible impact per
half-day** rather than internal correctness wins. (Internal-correctness items like the
Meeus lunar upgrade are bundled into v0.2.0 alongside the blog-launch QA pass — they
don't need their own release.)

### ✅ v0.1.6 — Meeus lunar upgrade — landed
Replaced Schlyter's lunar position with Meeus's truncated ELP-2000-82B (33 + 30
terms across longitude, distance, latitude, plus the A1/A2/A3 auxiliary
perturbations) in [frontend/src/astro/lunar.ts](frontend/src/astro/lunar.ts).
Verification against Meeus's book example 47.a: 5 arcsec longitude / 2 arcsec
latitude / 17 km distance residuals — well under the ~10 arcsec target.

That's about **100× better than Schlyter** and crucially smaller than the sun's
apparent disc, so any eclipse — past, future, catalogued or not — now renders
correctly from first principles at runtime. NASA centerlines stay around for
the four headline events as a deterministic-fallback authority but are no
longer load-bearing.

About-page Moon + Eclipse sections updated to drop the "we use NASA centerlines
because our calc isn't good enough" framing; Schlyter's credit retained as
historical attribution.

### ✅ v0.1.7 — Eclipse sun-disc view — landed
Two new files:
- [frontend/src/astro/observerView.ts](frontend/src/astro/observerView.ts) —
  projects the sun + moon into the observer's local AltAz at the pinned
  location and simulated moment. Includes topocentric parallax for the moon
  (geocentric vs surface-observer direction differs by up to ~1° — bigger
  than the sun's disc, so non-optional). Returns altitude/azimuth, apparent
  angular radii, angular separation, linear eclipse magnitude, and east/up
  offsets for 2D rendering.
- [frontend/src/ui/SunDiscPanel.ts](frontend/src/ui/SunDiscPanel.ts) — small
  SVG inset (top-left, beneath the Eclipse panel). Sun rendered with a
  radial gradient; moon as a dark disc positioned at the observer's
  apparent offset. Magnitude readout: "magnitude 0.847" + "84.7% obscured"
  (or "total" / "annular peak" at totality). Auto-shows when an eclipse is
  loaded, a location is pinned, the sun is above the observer's horizon,
  AND the moon is within 5° of the sun (outside that, the inset would just
  show the moon way off-screen and convey nothing).

Per-frame update is gated on `pinnedLocation.visible && eclipseLayer.mesh.visible`
in the animate loop, so the inset auto-tracks simulated time during the
warp-driven eclipse run.

Worth testing: pin Bilbao (~43.26°N, 2.93°W), open Eclipse panel, click
"Spain total solar eclipse (2026)". The 60× time-warp plays through the
eclipse over four minutes; the moon visibly slides across the sun.

### ✅ v0.1.8 — Overlay scale key + pressure-uniform fix — landed
Two related issues, one batch:

**Pressure-uniform root cause**: `scalarGridToTexture` produced a *half-float*
texture (max representable ±65 504). MSLP values are ~96 000–104 000 Pa —
they overflowed to Infinity at upload, then clamped to 1.0 in the shader, so
the whole globe rendered as the highest-value red. Fix:
[frontend/src/scene/OverlayLayer.ts](frontend/src/scene/OverlayLayer.ts) now
uses `scalarGridToByteTexture` (same as CloudLayer) which pre-normalises
vmin/vmax into [0, 255] at upload — no overflow possible, linear filtering
guaranteed everywhere. Shader simplified (uVmin / uVmax uniforms removed).

**Scale key**: new
[frontend/src/ui/ScaleKeyPanel.ts](frontend/src/ui/ScaleKeyPanel.ts) — SVG
gradient strip at the bottom-centre with min / mid / max value labels in
human-friendly units (Pa → hPa, K → °C, etc.). Palette stops shared with the
shader via [frontend/src/ui/overlayPalettes.ts](frontend/src/ui/overlayPalettes.ts)
so the legend can't drift out of sync with what's rendered. Auto-shows when
an overlay is active; hides when none.

`OVERLAY_CFGS` in main.ts gained `label` + `format(raw)` fields per overlay
so each one carries its own unit conversion.

### ✅ v0.1.9 — Flat-map pan + zoom — landed
[frontend/src/scene/FlatMap.ts](frontend/src/scene/FlatMap.ts) now wires Three.js's
`MapControls` (purpose-built top-down ortho pan + dolly) on its own camera.
`zoomToCursor: true` for Google-Maps-style cursor-centred zoom. Damping is
on (factor 0.18). Y-pan is clamped each frame so the user can't scroll the
camera target past the poles into empty space. Double-click resets to the
default whole-world view.

Wrap-around at ±180° lon: two extra plane meshes at world X = ±2 share the
material with the canonical plane. Pan past the antimeridian and the world
tiles seamlessly (no black void). `FlatMap.wrapWorldX()` is a small static
helper used by the click-to-pin handler in main.ts to translate clicks on
the wrap-around tiles back to canonical longitudes.

main.ts edge-triggers `flatMap.enableControls(renderer.domElement)` when
`menu.isMapMode()` transitions on, and `flatMap.disableControls()` on off,
so the controls don't compete for events with the 3D globe's OrbitControls.

### 🔄 v0.2.0 — Public-launch milestone — partially landed
Code-side work shipped: onboarding pass + tooltip sweep + first-visit hint
+ qa-checklist updated for v0.1.6–v0.1.9. Outstanding (operational, needs
your hands):

1. **Browser-matrix QA pass** — walk through
   [frontend/docs/qa-checklist.md](frontend/docs/qa-checklist.md)'s v0.2.0
   section in Safari + Firefox + mobile in addition to Chrome/Edge. Flag
   anything broken.
2. **LocationIQ live in production** — sign up at <https://locationiq.com/>
   for a free API key. Paste the NGINX block from
   [DEPLOYMENT.md §5c](DEPLOYMENT.md) into the CapRover override with your
   key. Verify with the curl test in the QA checklist. Site stops
   depending on Nominatim's charity service.

What landed in v0.2.0 code:

- [frontend/src/ui/Menu.ts](frontend/src/ui/Menu.ts): first-visit onboarding
  hint above the wordmark — amber callout with a bouncing arrow, fades in,
  holds for ~5 s, fades out. Gated by `orrery.onboarded.v1` in
  localStorage so it never repeats. Wordmark click dismisses immediately.
- Tooltip sweep: Map / Clock / Data / Location tooltips refreshed to
  mention the v0.1.8 + v0.1.9 features (pan + zoom on the flat map, the
  Data panel's clickable source names, geocoded place names, etc.).
- qa-checklist.md got a fresh v0.2.0 verification section at the top —
  browser matrix + per-feature checks for everything that landed in
  v0.1.6 → v0.1.9.

---

## In flight

### 🔄 UX polish (v0.1.2-ish, in this session)

- ✅ Pin / sun-beam alignment fix — `sunDir` + `moonPos` now Z-rotated by axial tilt
  in `updateAstro()` so everything sits in the same tilted Earth frame. Visible symptom
  was a ~16° offset between the sun beam and the pin dropped at sub-solar.
- ✅ Click-drag suppression — `pointerdown` records the position; clicks past a 5 px
  threshold are ignored so orbiting the globe doesn't drop a stray pin.
- ✅ Eclipse panel close → snap simulated time back to wall-clock + warp 1×.
- ✅ Location panel redesigned: moved bottom-right, three rows (📍 current, ☀️ sub-solar,
  🌙 sub-lunar) with selected-row colour highlight, "true solar time" label, full-row
  click targets.
- ✅ "earth-clock" wordmark tooltip now reads *"Click for options · weather layers ·
  clock · location · eclipses"* so first-time visitors discover the menu.

### ⬜ Onboarding hints — next

The wordmark tooltip is the first onboarding nudge. Two more layers to add:

1. **Tooltip pass over every menu button.** `TOOLTIPS` in
   [frontend/src/ui/Menu.ts](frontend/src/ui/Menu.ts) already exists for most; sweep through
   and confirm every entry has a one-sentence "what does this do" tip. New entries to
   add: Map · Auto-spin · Clock · Data · Location. Also verify wording is plain
   English (no jargon: "MSLP" → "atmospheric pressure" etc.).
2. **First-visit nudge** — small fading overlay or arrow pointing at the wordmark for
   2-3 seconds on first load (gated by a `localStorage` flag, never shown twice).
   Optional follow-up: a "tour" mode that walks through Clock → Layers → Location →
   Eclipse with single-sentence callouts.

---

## Near-term (Phase A polish — pre-v0.2)

### ✅ Geocoder behind a same-origin proxy (LocationIQ)
**Status: client-side resilience landed v0.1.5; LocationIQ key acquired and
baked into the dev proxy in v0.2.0. Production NGINX block ready to paste from
[DEPLOYMENT.md §5c](DEPLOYMENT.md).**

The reverse-geocoder for the Location panel used to hit `nominatim.openstreetmap.org`
directly from the browser. Nominatim is run as a charity by the OSM Foundation and
periodically returns HTTP 503 under load — which the user saw on the live site.

Done in v0.1.5:
- [frontend/src/data/geocoder.ts](frontend/src/data/geocoder.ts) rewritten:
  routes through a same-origin `/proxy/geocode/` URL; structured
  `GeocodeResult` discriminated by status (`ok | no-name | unavailable |
  rate-limited`); auto-retry on 5xx after a 4 s delay.
- main.ts: dispatches each status to a meaningful place-name string. 503 →
  "geocoder unavailable" instead of a silent "—". Rate-limited → leave the
  previous name in place rather than clearing.
- [frontend/vite.config.ts](frontend/vite.config.ts): dev proxy
  `/proxy/geocode/` → Nominatim, so application code is identical in dev + prod.

Outstanding (deploy steps; see [DEPLOYMENT.md](DEPLOYMENT.md) §5b and §5c):
- Add the `/proxy/geocode/` NGINX block to the CapRover override (the User-Agent
  it sets identifies earth-clock cleanly, which is what Nominatim's usage policy
  asks for).
- Sign up at <https://locationiq.com/> (free tier: 5,000 reverse requests/day);
  swap the proxy upstream to LocationIQ for dedicated infra. Same Nominatim-
  compatible response shape, so the client doesn't change.

### ⬜ Eclipse sun-disc view — "what you'd see from this spot"
During an eclipse run, the user has already pinned a location. Render an inset
panel showing the **sun as you'd see it in the sky from that location at that
moment**, with the **moon's disc overlapping it** at the geometrically correct
offset — so during the 2026 Spain eclipse, the user can pin Bilbao and watch
the moon slide across the sun's disc in real time alongside the global view.

Math sketch (all the ingredients exist already; just glue):

- Observer's local up-vector at (lat, lon) in the world frame — straightforward
  from the existing lat/lon → XYZ helper.
- Local altitude/azimuth basis from up + Earth's spin axis.
- Project sun direction and moon position into AltAz at the observer →
  `(altSun, azSun)`, `(altMoon, azMoon)`.
- Angular separation between sun and moon = arc-distance in AltAz.
- Apparent sun angular radius ≈ 0.266° (varies ±1.5 % over the year).
- Apparent moon angular radius from observer's true moon distance (the existing
  Schlyter formula returns this) ≈ 0.246° to 0.282° depending on perigee/apogee.
- Render two overlapping discs in a small SVG or canvas inset, scaled so the
  sun is a comfortable fixed size on screen. Magnitude readout = fraction of
  sun's area obscured.

UI: small inset panel (top-right under the Data panel? or as part of the
Eclipse panel when location is also set?). Updates live with simulated time
so during the warp-driven eclipse run-through the user sees the moon slide
across the sun.

**Effort: half-day to one day.** The astronomical math is standard textbook
(Meeus chapter 12-13 territory), the UI is a small SVG. Dependencies: a
pinned location + a loaded eclipse. Both already exist.

Refinement to consider: also surface the contact times — first contact,
second contact (totality begins), third contact (totality ends), fourth
contact — for the pinned location, derived from when the angular separation
crosses (r_sun + r_moon) and (r_sun − r_moon).

### ⬜ Meeus lunar model upgrade
Replace the Schlyter lunar position with Meeus simplified ELP-2000-82B (~30 main
perturbation terms) in [frontend/src/astro/lunar.ts](frontend/src/astro/lunar.ts). Brings
runtime lunar precision from ~0.5° to ~0.1°. Removes the catch — non-catalogued
eclipses still render correctly even though we now have NASA paths for every event in
the catalogue. Half-day effort. Reference: Meeus, *Astronomical Algorithms* 2nd ed.,
ch. 47.

### ⬜ Flat-map should pan + zoom like classic earth.nullschool
The flat map currently renders as a static 2:1 plane — pretty, but inert. In the
classic earth.nullschool renderer every projection (including the equirectangular
one) is **draggable** (mouse / touch pan) and **zoomable** (wheel / pinch).
That's the expectation for any global-data viewer and the current static view
feels broken compared to the 3D globe (which has OrbitControls).

Implementation outline:

- **Pan**: orthographic camera horizontal/vertical drag. Horizontal pan wraps
  across ±180° lon (covered by item 6 in the FlatMap v2 layer-port list — see
  below); vertical pan should clamp at ±90° lat so the user can't scroll past
  the poles into empty space.
- **Zoom**: mouse-wheel + pinch. Scale the ortho camera frustum size, not the
  plane geometry. Centre the zoom on the cursor position (like Google Maps), not
  on the camera target. Clamp to a reasonable zoom range — out to "whole world"
  view, in to maybe ~5° lat span before the plane texture starts to look
  pixelated at default texture resolution.
- **Wrap-around** when panned past ±180°: easiest is to render the plane twice
  with –360° / +360° offsets. Same trick as classic earth's "tear at the
  antimeridian" behaviour. (Already item 6 in the FlatMap v2 list.)
- **Reset / "home" gesture**: a small button or double-click resets pan + zoom
  to the default whole-world view.
- **Existing Click-to-pin** must continue to work — pan-vs-click already uses a
  threshold in [frontend/src/main.ts](frontend/src/main.ts); the same drag-vs-
  click suppression should cover pan gestures.
- **Reuse OrbitControls** in 2D mode? Three.js's `MapControls` is purpose-built
  for top-down ortho pan/zoom and is probably the right base. Worth trying it
  before hand-rolling.

Implementation effort: half-day to a day. The eight other classic projections
(Phase C roadmap entry below) all become more compelling once the equirectangular
case has pan/zoom — without it, the projection selector would just swap one
static plane for another. So this is **prerequisite** work for that broader
parity push.

### ⬜ FlatMap v2 — remaining layer ports
8 items remaining (in priority order), tracked in detail in
[frontend/docs/PLAN-archive.md](frontend/docs/PLAN-archive.md#-equirectangular-flat-map-mode-):
1. Sub-solar marker (small disc at the live (lat, lon))
2. Sub-lunar marker (with phase-aware shading)
3. Terminator line (drawn arc, not a straight line)
4. Hide-in-map-mode list (grey out Atmosphere / Sky-stars when Map is on)
5. Pan & zoom (ortho camera pan + wheel zoom)
6. Wrap-around (render twice with ±360° offsets, or shader-side modulo)
7. **Eclipse on flat map** — umbra/penumbra discs + path-of-totality polyline ported
   from the 3D EclipseLayer to the equirectangular plane.
8. Additional cartographic projections — restore parity with classic's 8 projections
   (Waterman butterfly + Atlantis the visually striking ones to land first).

### ⬜ Phase B feature parity — weather-service extension (Path A)
Extend [weather-service.js](weather-service.js) to emit MSLP / Temp / RH / TPW / TCW
companion JSON alongside the existing wind file. Restores classic earth-clock's
overlay set. **Before going live** — these are user-visible parity items.
~1-2 days. Server-side GRIB2 decode proxy (Path B, eccodes-wasm) deferred behind this.

### ⬜ Visible scale key for overlays
Every overlay row (MSLP / Temp / RH / TPW / TCW) renders to a coloured shell at radius
1.006 — but right now there's no on-screen legend telling the user what the colour
means. Without a key, the overlay is striking but illegible. A small panel in the
corner (or a slot on the menu / DataPanel) showing the active palette's gradient
+ labelled min/mid/max with units would close the loop. Cheap: each `OverlayCfg` in
[frontend/src/main.ts](frontend/src/main.ts) already carries `vmin / vmax / palette` —
just render those into an SVG/canvas gradient strip.

### ⬜ Weather under time-warp is inconsistent with reality — design a systematic policy
Right now the weather/data layers refresh on their own real-wall-clock cadences
(VIIRS daily, GFS 6 h, aurora 5 min, hurricanes 15 min, lightning live WebSocket,
Kp 5 min) regardless of simulated time. When the user time-warps forward into an
eclipse (or backward to a known event), the globe shows **today's weather** glued
to **a different date** — physically inconsistent, and the inconsistency varies
per layer in confusing ways (cloud mosaic = a fixed date; aurora = a 5-min
forecast; lightning = a live stream that visibly flashes during a 1923 simulated
year). The eclipse path is the one layer that does track simulated time.

Needs a coherent design choice. Options to weigh:

1. **Freeze live data at time-warp ≠ 1.** Clearly mark "wind / clouds / aurora /
   lightning frozen at <date>" in the Data panel. Simple to implement and honest
   about the inconsistency.
2. **Fetch historical data when warp ≠ 1.** GFS reanalysis (NCEP/NCAR R1, ERA5) goes
   back decades; NOAA NHC has historical-storms archive; GIBS has every VIIRS day
   back to launch. Wires in via the existing loader paths but each layer needs a
   per-source historical archive integration. Way more work; arguably the
   "right" behaviour for an Earth-time-machine.
3. **Hybrid**: freeze most layers, time-shift the ones whose historical archive is
   trivial (VIIRS daily mosaic, lunar/solar position — already simulated-time
   already, just confirm), drop the others entirely under warp.

Live API affected: `DataSource` + every loader in
[frontend/src/data/](frontend/src/data/). Lightning is special because it's a
WebSocket stream — under warp it's meaningless and probably should be hidden.

UI gesture: when warp ≠ 1, layers whose data doesn't track simulated time get a
visible tag ("live / now" badge in the Data row), or a desaturation / dim cue
on the globe — pick one. The current behaviour silently misleads.

### ✅ Wind streamlines had visible lat/lon gaps — fixed in v0.1.3
QA noted "panel-like artifacts" in the wind composite: streamline gaps running
along regular latitude and longitude lines (most prominent over open ocean where
the streamlines are otherwise uniform). Looks like grid-aligned seams.

**Root cause**: the wind texture was uploaded as `THREE.FloatType` (32-bit
float). In WebGL2, linear filtering on float textures requires the
`OES_texture_float_linear` extension. Many GPUs silently lack it and the driver
falls back to NEAREST sampling even when LinearFilter is requested — so every
fragment read a single 1° grid cell's value, producing visible 1°-wide "panels"
of uniform wind direction tiled across the globe and sharp discontinuities at
cell boundaries.

**Fix**: switched to `HalfFloatType` in
[frontend/src/data/windToTexture.ts](frontend/src/data/windToTexture.ts) (and
the same in the mock texture in
[frontend/src/scene/Particles.ts](frontend/src/scene/Particles.ts)). Half-float
textures support linear filtering natively in WebGL2 with no extension. Range
(±65 504) and precision (~3 decimal digits) are plenty for m/s wind values.
~0.5 MB for the 360×181 grid vs. ~1 MB for Float32.

Bumped frontend to v0.1.3.

### ✅ Wind intensity picker (subtle / standard / bold) — landed in v0.1.3
Even with the panel-tile artifact fixed, the bold-by-default wind composite
visually smothered the rest of the globe. The new Wind row in the menu is a
mutex picker (same pattern as Clouds / Overlay) — click any level to enable wind
at that intensity; click the active level to turn wind off.
- **Subtle** (new default): short streaks, dim composite (`uFade=0.98`,
  `uOpacity=0.35`). Wind reads as a layer, doesn't compete with continents.
- **Standard**: moderate streaks, mid brightness (`uFade=0.99`, `uOpacity=0.65`).
- **Bold**: the previous default — long, bright streaks (`uFade=0.992`,
  `uOpacity=1.0`), the classic earth.nullschool look.

`Trails.setIntensity(level)` is exposed and live-tunable from the console.

Plausible causes (in order of likelihood):

- **Wind grid has structural zero rows/cols** from the weather-service GRIB2
  decode — particles drift through those cells but pick up zero advection, so the
  trails accumulator gets no fresh stamps along those bands. Quick check from
  DevTools: `let g = await new (await import('/assets/index-XXX.js')).LiveDataSource().getWindGrid(new Date()); g.u.filter(x => Math.abs(x) < 0.001).length / g.u.length` — if more than a few %, this is it. (Easier: expose the grid on `window.__orrery.wind` for inspection.)
- **Trail buffer texture-wrap seam at ±180° lon.** Wrap mode is RepeatWrapping
  in [frontend/src/scene/Trails.ts](frontend/src/scene/Trails.ts) so the antimeridian
  should be clean — but it would only produce ONE meridian line, not the regular
  pattern observed, so not the prime suspect.
- **Particle-stamp under-sampling at higher latitudes.** The flat render uses a
  fixed-pixel stamp (1.7 px), but the cos(lat) compensation in the compute shader
  means particles move further in pixel-space per frame at high latitudes. If wind
  is fast enough, consecutive frames leave visible gaps that the 0.992 fade keeps
  visible for ~1.4 s. Test by raising `__orrery.particles.setSpeed(0.06)` (half
  default) — if the gaps narrow, this is the cause.
- **GPUComputationRenderer respawn hash clustering.** The classic shadertoy hash
  used for respawn positions has known iso-line correlations; particles that
  respawn in the same frame may cluster along sin(dot)-lines. Would typically
  show as *diagonal* striations rather than lat/lon gaps, so probably not the
  cause here — but worth ruling out by swapping for a better PRNG.

**To diagnose quickly:** time-warp pause, toggle Clouds + Day/night off in the
menu so the trail buffer renders against black, then observe whether the bands
are still present. If yes → trail buffer / wind data is the source. If no →
compositing artifact (interaction with day texture or clouds).

### ⬜ Pressure map looks unexpectedly uniform — investigate
MSLP overlay renders almost-uniformly across the globe even though `vmin=96_000` /
`vmax=104_000` Pa should map the typical 990–1020 hPa range (most of Earth) across
~30% of the palette and leave plenty of headroom for highs/lows. Variations should be
clearly visible. They aren't. Hypotheses to check:
- Grid values are in the wrong units (e.g. hPa instead of Pa, off by ×100).
- Palette function for `pressure` is poorly tuned (low contrast across mid-range).
- Server-side decode in `weather-service.js` is producing a constant or aliased field.
- Shader normalisation accidentally clamping `(value − vmin) / (vmax − vmin)` to a
  narrow band.
Compare against the classic earth-clock MSLP rendering (which works) for a known-good
reference. Quick check: `console.log(window.__orrery.overlay.lastGrid?.values?.slice(0,
10))` from DevTools once MSLP is active.

### ⬜ Skybox quality toggle (2K ⇄ 8K)
Both assets are already bundled
([frontend/src/scene/Skybox.ts](frontend/src/scene/Skybox.ts) HEAD-probes 2K → 8K). 2K
(~250 KB) loads first; 8K (~1.9 MB) is sharper Milky Way detail when zoomed out.
Add a small UI control (Astro row or a new dedicated "View / quality" entry), persist
choice in `localStorage` alongside `orrery.menu.v1`. Default 2K for the first paint;
user can opt in to 8K once everything else has loaded.

---

## Downstream surfaces

Earth-clock historically ships three surfaces: the website, a Windows screensaver
([screensaver/](screensaver/)), and a Wallpaper Engine output
([wallpaper-engine/](wallpaper-engine/)). Both downstream surfaces currently target
the **classic** D3 + canvas renderer and run against the legacy server's data feeds.

### ⬜ Screensaver + Wallpaper Engine — new-version investigation
Goal: figure out the right way to ship the WebGL frontend as a screensaver and as a
Wallpaper Engine input, given that they're currently bound to the classic renderer.

Open questions to answer in a short design doc before implementing:

- **Screensaver host**: classic uses a small Windows wrapper around a packaged
  build. For WebGL we likely need either (a) Electron / Tauri wrapping a local-only
  build of the frontend, or (b) a `.scr` shim that spawns a fullscreen Chromium window.
  Battery / GPU impact matters for screensaver use; investigate idle CPU/GPU with
  the WebGL renderer at 30 fps cap, no time-warp, no aurora wsockets.
- **Wallpaper Engine input**: Wallpaper Engine ingests browser-based wallpapers via
  its built-in Chromium. Should "just work" with a frontend build pinned at `/` and
  the menu collapsed by default — but: how do we feed live weather data when the
  user has Wallpaper Engine running offline (right now the `BundledDataSource` stub
  in [frontend/src/data/DataSource.ts](frontend/src/data/DataSource.ts) is empty)? Two
  paths: (i) a "bundled snapshot" mode where the build includes a recent wind/cloud
  capture, (ii) live fetches via the host's network if available.
- **Renderer modes**: the existing menu state is over-rich for an ambient wallpaper.
  Probably want a `?mode=ambient` query-string that disables all panels, sets a
  gentle orbit, time-warp 1×, and a curated default layer set (wind + clouds +
  night lights, nothing else).
- **Asset budget**: screensaver / wallpaper need to start fast and run cool. Audit
  what the frontend currently downloads at first paint (~700 KB JS + textures); see
  what can be deferred behind the "ambient" mode.

Effort: ~half-day for the design doc, then a few days to build whichever surface(s)
we commit to. Reference: existing `wallpaper-engine/` + `screensaver/` directories
+ the classic wrapper code in `wallpaper-engine/source/`.

---

## Communications & launch

### ⬜ "Upgrading earth-clock to WebGL" blog post
The cutover from classic → WebGL is the biggest project change since launch. Worth
a public write-up:

- **Audience**: existing earth-clock users, plus the WebGL / data-viz / open-source
  weather community. Cross-post on onemonkey.org and link from the in-app About page.
- **Beats**: why rebuild (mobile + Three.js opportunity), what's new (live aurora /
  fires / hurricanes / lightning / eclipse path of totality / time-warp / location
  pin), what's preserved (classic still lives at `/classic/`), what's coming
  (FlatMap v2, Phase B overlays, camera paths).
- **Hero moment**: the 2026-08-12 Spain eclipse is the obvious anchor — show off
  the umbra sweep with a screenshot + a paragraph about how the catalog + NASA
  centerline + time-warp let you experience the eclipse in your browser.
- **Production note**: build screenshots from a clean session (no test data, no
  pinned location, default layer set). Capture both the 3D globe and the flat map.
  Include the eclipse-panel UI clearly to highlight the headline feature.

---

## Phase B — server-side GRIB2 decode

| Item | Status | Notes |
|------|--------|-------|
| Path A — weather-service extension (recommended) | ⬜ | MSLP/Temp/RH/TPW/TCW JSON files. 1-2 days. |
| Path B — `eccodes-wasm` Cloudflare Worker | ⬜ | Unlocks ANY GRIB2 field (ECMWF AIFS, GraphCast). After Path A. |
| Multi-altitude wind (250/500/700/850/925 hPa) | ⬜ | Falls out of Path A or B. |
| OSCAR ocean surface currents (Earthdata) | ⬜ | Routed through CapRover proxy (same as NHC). |

---

## Phase C — stretch goals

Full detail in the archive. Headline items:

- **Camera paths through space** — gentle orbit ✅, ISS / Sub-lunar (Earthrise) / Heliocentric /
  Geosync / L1 / Free-fly all ⬜.
- **Earth-clock branding** — hour rings ⬜, equator + ecliptic rings ⬜, analemma trace ⬜.
- **10-min live cloud stitch** — GOES-East + Himawari + Meteosat, replaces VIIRS daily mosaic.
- **Kp index → aurora intensity scaling** — Kp row already in DataPanel; wire it into the
  AuroraLayer's opacity.
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

---

## Recent session log (top-level summary)

For per-session detail, see the archive's Session log table. Top-level recent shape:

| Range | Theme |
|-------|-------|
| 2026-05-11 → 2026-05-12 | Scaffold + Phase A layer build-out (wind / clouds / aurora / fires / hurricanes / lightning). |
| 2026-05-14 → 2026-05-16 | QA passes, eclipse rendering hardened, NASA centerline paths, FlatMap v2 starts, production CORS proxy deployed. |
| 2026-05-26 (this session) | Tools-menu retirement, Eclipse panel + multi-event support (incl. NASA Australia path), Moon/Beams independence, Clock auto-show on eclipse select, Location panel redesign, pin/beam alignment fix, drag-vs-click, PLAN refactor. |
