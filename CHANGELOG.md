# Changelog

Version history for earth-clock — newest first. Forward-looking work lives in
[ROADMAP.md](ROADMAP.md). Per-layer build history before v0.1.2 lives in
[frontend/docs/PLAN-archive.md](frontend/docs/PLAN-archive.md).

The version that ships is the **frontend** WebGL app served at `/`. The classic D3 +
canvas renderer at `/classic/` is preserved but not separately versioned.

---

## v0.3.3 — 2026-07-21 — Fix: globe/moon stayed darkened after textures loaded

**Regression fix** for a bug introduced by v0.3.2's placeholder-color
mitigation (below): `Globe.ts` and `Moon.ts` set `material.color` to a muted
placeholder tint so an incomplete texture wouldn't sample as solid black
while loading — but the `onLoad` callbacks only ever assigned `.map` (and,
for the Moon, `.emissiveMap`), never resetting `.color` back afterward.
Three.js multiplies `map` by `material.color`, so every material stayed
permanently tinted by its loading placeholder even after the real texture
successfully loaded — the day/night globe and the moon all rendered visibly
darker than before, regardless of whether the network fetch ultimately
succeeded.

- `Globe.ts`: day/Phong material resets `.color` to `0xffffff`, flat
  (terminator-off) material resets to its original `0xbbbbbb` dimming tint,
  both inside the day-texture `onLoad` callback.
- `Moon.ts`: resets `.color` to `0xffffff` inside the moon-texture `onLoad`
  callback.
- See
  [INCIDENT-2026-07-19-slow-transfers.md](INCIDENT-2026-07-19-slow-transfers.md)
  for the full writeup (filed under Problem 3, since it's a regression in
  the same mitigation).

## v0.3.2 — 2026-07-19 — Resilient texture loading (network mitigation)

**Mitigates** an ongoing production issue (see
[INCIDENT-2026-07-19-slow-transfers.md](INCIDENT-2026-07-19-slow-transfers.md))
where texture requests sometimes stall for many seconds. A stalled/incomplete
WebGL texture samples as solid black once bound to a material's `map`,
regardless of the material's base color — that's the actual mechanism behind
the "black globe" symptom, independent of whatever's actually causing the
slow transfers (still under investigation — evidence so far leans toward
the investigation's own testing traffic rather than a real hosting-provider
fault, see the incident doc).

- New `frontend/src/scene/resilientTexture.ts`: wraps `THREE.TextureLoader`
  with a 15s per-attempt timeout and **indefinite** retry with backoff
  (capped at 30s) — never permanently gives up, since the network condition
  this mitigates is expected to be transient.
- After 3 failed/timed-out attempts, the load is flagged as a visible ✗ in
  the app's existing Data panel (same status mechanism every other data
  layer already uses) instead of only logging to the console — "day map",
  "night map", and "moon" now show real pending/ok/error status (with retry
  count) rather than a permanent static grey dot. Confirmed it self-heals to
  ✓ automatically once a load succeeds, no reload needed.
- `Globe.ts` and `Moon.ts`: day/night/normal/specular/moon textures are no
  longer passed directly into material constructors from a raw
  `loader.load()` call. Each material starts with a plausible placeholder
  color (muted ocean/land tint for Earth, grey for the Moon) and the real
  texture is attached asynchronously once it actually finishes loading.
- The night-lights shader's `uMap` sampler now starts bound to a 1×1 black
  placeholder texture (`createBlackPlaceholderTexture`) rather than an
  in-flight texture, avoiding undefined-sampler behavior before the real
  night-lights texture loads.

This does not fix whatever is actually causing transfers to be slow — it
makes the app degrade visibly and recover automatically instead of silently
rendering broken while that's ongoing.

---

## v0.3.1 — 2026-07-19 — Umami tracking + hotfix cleanup

**Umami analytics** — added the `onemonkey.org` Umami tracking snippet to
`index.html` so `earth-clock.onemonkey.org` reports into the existing Umami
instance (site ID `4bc29459-777e-49a4-a843-1a1618473797`).

**Fixed**: a stale `BASE_PATH=/earth-clock` environment variable left over on
the live CapRover app config (production is documented in DEPLOYMENT.md as
always serving from the domain root) caused `server.js` to inject a
`<base href="/earth-clock/">` tag into every page, breaking every
relative asset URL — textures, the JS bundle, everything. The env var has
been removed from the CapRover config, and `server.js`'s base-tag injection
now only fires when `BASE_PATH` is actually set (`needsBaseTag = basePath
!== "/" && …`).

**Reverted**: a same-day follow-up hotfix had added an emissive contribution
to the globe's day-texture material (`Globe.ts`) as a defensive guess at the
above symptom. It didn't address the root cause and — worse — bled the day
texture through at all times regardless of lighting, washing out the
night-side terminator that's the point of the app. Removed; the day/night
material is back to the original Phong setup with no emissive component.
Also removed a temporary `/earth-clock/*` compatibility shim in `server.js`
added alongside it, now that the env var itself is gone.

---

## v0.3.0 — 2026-07-02 — Geology layer

**Earthquakes** — new `EarthquakeLayer.ts`: past-week USGS events as an additive
point cloud, sized by magnitude (linear — Richter/moment magnitude is already
log-scale), coloured by depth (shallow red → deep blue), opacity fading linearly
across the 7-day feed window with a settling pulse on events under a day old.
Backend `earthquake-service.js` (new, modeled on `oscar-service.js`) polls
USGS's `all_week.geojson` every 15 min server-side (USGS sends no CORS headers)
and writes a trimmed `public/data/earthquakes/current.json`. New dedicated
**Geology** menu row between Geography and Astro; gated by the existing
live-data freshness check (same treatment as Fires/Hurricanes) rather than
tracking simulatedTime.

**Tectonic plates** — new `Plates.ts`: boundary lines (3D globe + flat-map
mirror) in a warm amber/terracotta colour, rotating with Earth. Data is Peter
Bird's PB2002 dataset (241 boundary lines) via `fraxen/tectonicplates`,
fetched once by the new `build-plates.mjs` and bundled as
`public/data/plates.json` (107 KB) — static, no backend service, no freshness
gating. Rendered with Three's `LineSegments2`/`LineMaterial` ("fat lines")
rather than plain `LineSegments` — regular `LineBasicMaterial.linewidth` is
silently ignored on virtually every desktop GL driver, capping boundary lines
at a wispy 1px; the fat-line material gives a real, screen-space-pixel-width
stroke instead. Needs its resolution uniform kept in sync with the viewport
(`Plates.setResolution()`, called on load and on every window resize).

**Volcanoes** — new `VolcanoLayer.ts`: 1,215 Holocene volcanoes (Smithsonian
Global Volcanism Program) as small triangular "mountain" markers, drawn via a
point-in-triangle test in the fragment shader rather than a texture. Data is
fetched once from GVP's public GeoServer WFS by the new `build-volcanoes.mjs`
and bundled as `public/data/volcanoes.json` (154 KB) — static, no freshness
gating, same treatment as Plates. GVP does have a clean scriptable export
after all (a live WFS endpoint), better than the manual-CSV fallback the
roadmap had flagged as a risk.

**Active eruptions** — new `frontend/src/data/eruptionCrossRef.ts`: every
FIRMS thermal detection is checked against the bundled volcano list
(equirectangular distance, 20 km threshold) whenever fires refresh; matches
flip that volcano's marker to a hot pulsing orange via
`VolcanoLayer.setErupting()`. No new backend or data feed — purely a
geospatial join against data both layers already have. Verified against live
data: correctly flagged Etna, Merapi, Semeru, Lewotobi, Lewotolok,
Krasheninnikov, Santa Maria, and Erebus — all volcanoes GVP itself lists as
erupting in 2026.

**Geology layer visibility** — earthquakes and dormant volcanoes were easy to
lose against brighter layers (Fires) or terrain colour at default zoom.
`EarthquakeLayer` point-size floor raised 2px → 4px; `VolcanoLayer` dormant
marker floor raised 5px → 7px and triangles gained a dark inset stroke so they
read against any background instead of blending into brown/green land.
Timezone meridian/boundary lines (`TimezoneLayer`) switched from
`LineBasicMaterial` (silently capped at 1px on virtually every desktop GL
driver) to the `LineSegments2`/`LineMaterial` fat-line technique already used
by `Plates.ts` — 1.5px (globe) / 2px (flat map), with a resolution uniform
kept in sync via the new `TimezoneLayer.setResolution()`, called on load and
on every window resize (same pattern as `Plates.setResolution()`).

---

## v0.2.4 — 2026-07-01 — Feedback, about pages, mobile polish

**Feedback links** — `· feedback` mailto link (`caspar@onemonkey.org`) added to the
main menu meta line. Both about pages get a dedicated contact section with Caspar's name
and email. The "earth-clock" brand wordmark in each about page header is now an `<a href="/">`
link back to the live globe.

**About pages — sticky sidebar TOC** — the main `/about/` page's sidebar was already
sticky; this passes the same treatment to `/about/kids/`. Kids page now has 13 section
links in a sticky sidebar (≥860 px) and a horizontal strip TOC on mobile, matching the
main about page layout. Both pages gained a `#contact` anchor and "Say hello" heading for
the contact section.

**LocationIQ geocoder** — NGINX reverse-proxy block added in
`infra/nginx-caprover-override.conf` (committed with placeholder key) and the gitignored
`.local.conf` (live key injected). Root-cause fix: LocationIQ rejects Nominatim's
`format=jsonv2` extension with an XML "Invalid Request" error; changed `geocoder.ts` to
send `format=json`. Geocoder now returns place names correctly on click-to-pin.

**infra/ directory** — `nginx-caprover-default.conf` (pristine copy of CapRover's default
EJS template, never edited) and `nginx-caprover-override.conf` (our per-app additions:
NHC CORS proxy + LocationIQ geocode proxy). Both committed; `.local.conf` variants with
real keys are gitignored. `DEPLOYMENT.md` updated with the full two-section proxy guide.

**Mobile — menu auto-collapse** — tapping any layer toggle on ≤600 px screens now
collapses the menu panel immediately so the change is visible on the globe without a
second tap. "Find moon" does the same.

**Mobile — eclipse picker auto-hide** — tapping a solar or lunar eclipse row on mobile
hides the catalogue list so the event plays out on the full visible globe. The Eclipse
layer, umbra disc, and scrub controls remain active; the list can be re-opened via the
menu's Eclipse toggle.

**Mobile — compact SunDiscPanel** — on ≤600 px the panel is capped at 180 px wide (not
full-width) and the SVG disc shrinks from 201 px → 96 px so it sits compactly in the
top-left corner instead of blocking most of the screen.

---

## v0.2.3 — 2026-06-29 — Quick wins: flat map, mobile, eclipse polish

**FlatMap — terminator arc** — a crisp white `THREE.Line` now traces the
day/night boundary directly on the equirectangular map. 361 points sampled via
`lat = atan2(−cos(sunLat)·cos(λ−sunLon), sin(sunLat))`, updated every frame
from the sun's geographic position. Three copies at world X = 0, ±2 give
seamless continuity when the user pans past the antimeridian. Toggled by the
existing "Day/night" button; hides automatically with the terminator shader.

**FlatMap — 3D-only buttons greyed out in map mode** — Atmosphere, Auto-spin,
and Hi-res sky have no effect in equirectangular mode. They now render at 30%
opacity with `cursor: default` while flat-map is active so the user can see
they're not available. State is preserved — switching back to the globe view
restores whatever was on.

**Mobile — flat-map marker size increase** — sub-solar, sub-lunar, and
location-pin markers were sub-pixel at 360 px screen width / default zoom.
`FLAT_DOT_RADIUS` bumped 0.025 → 0.036; location-pin flat ring from
0.011/0.013 → 0.015/0.019 inner/outer; crosshair outer arm 0.017 → 0.025.

**Lunar eclipse — penumbral dimming scales with umbral magnitude** —
`Moon.setEclipseShadow(fraction, umbralMag)` now accepts the eclipse's umbral
magnitude. Total eclipses (mag ≥ 1) get the full 82% "blood moon" dimming;
partial eclipses scale proportionally; penumbral-only eclipses (mag < 0) cap at
10% — barely perceptible, as in real life. Colour tint (white → copper-red)
scales the same way.

**±Hours bug fix** — the relative-offset labels were showing "+0:59" instead of
"+1:00" because `(fakeUtc − date.getTime()) / 3_600_000` was minute-precise on
the `fakeUtc` side but second-precise on `date.getTime()`. Fixed by rounding to
the nearest 15 minutes (`Math.round(rawOffset * 4) / 4`) — the finest unit any
real UTC offset uses — so the result always snaps to the exact offset.

---

## v0.2.2 — 2026-06-27 — Mobile-friendly layout

First mobile pass: all panels repositioned and resized for narrow screens. Desktop layout is unchanged.

**Clock** — on ≤600 px screens the clock becomes a slim full-width bar pinned at the top (`top: 0; left: 0; right: 0`) with a dark background so the globe doesn't bleed through. Font shrinks from 32 px → 22 px; date + zone go inline; time-control buttons grow to 44 × 44 px touch targets. The redundant close ✕ is hidden on mobile (the Menu toggle is the escape). The bar captures pointer events so dragging near the clock doesn't spin the globe.

**Menu — two-snap bottom sheet** — on mobile `#orrery-ui` spans full viewport width at `bottom: 0` and uses `flex-direction: column-reverse` so the brand-row handle sits at the bottom and the layer panel slides up above it. Collapsed = only the handle visible (≈52 px). Expanded = sheet rises to 65 vh, scrollable. Each row gets `min-height: 48 px` and all toggle buttons grow to `min-height: 44 px` inline-flex targets. Desktop retains the existing bottom-left floating panel. Onboarding hint suppressed on mobile (wrong position for the new layout).

**Lighter first-visit defaults on mobile** — `resolveDefaults()` detects narrow screens at mount time and turns off aurora (WebSocket + GPU), fires (FIRMS fetch + particles), lightning (Blitzortung WebSocket), storm tracks, and night lights. Wind (subtle), clouds (VIIRS), day/night, coastlines, and atmosphere stay on. Returning users keep their saved state; only affects first visit.

**DataPanel** — full-width at `top: 56 px` on mobile; collapses the five-column grid to three (status + name + age), hiding source and detail columns that don't fit.

**EclipsePanel + SunDiscPanel** — both repositioned to `top: 56 px; left: 8 px; right: 8 px` on mobile, spanning near-full width. SunDiscPanel scrub `<input type=range>` gains `touch-action: none` to stop OrbitControls stealing the drag; scrub play/pause buttons grow to 44 × 44 px.

**LocationPanel** — full-width on mobile, `bottom: 56 px` so it clears the sheet handle bar; respects `env(safe-area-inset-bottom)` for notched phones.

**Viewport** — added `viewport-fit=cover` to `index.html` so `env(safe-area-inset-*)` values are populated on iOS.

**Roadmap** — freely-draggable bottom sheet (snap-to-two-heights upgraded to free drag + momentum) noted as the v2 follow-up; real-device QA (iOS Safari + Android Chrome) remains outstanding.

---

## v0.2.1 — 2026-06-26 — Lunar eclipses + eclipse-experience polish

Multi-part release tying the v0.2.0 launch together: lunar eclipses join the
catalogue, the eclipse-playback surface is reorganised, weather data hides
when simulated time is far from now, and several UX rough edges land in one batch.

**Lunar eclipses** — `[LUNAR_ECLIPSE_CATALOG](frontend/src/data/lunarEclipseCatalog.ts)`
ships with six events 2026–2030 (NASA GSFC Espenak data): the 2026 Mar 03 total,
2026 Aug 28 partial, 2028 Jan 12 partial, 2028 Dec 31 total, 2029 Jun 26 deep
total (mag 1.844 — exceptionally central), and 2029 Dec 20 total. The
EclipsePanel grows ☀ Solar / 🌑 Lunar **tabs**, each its own catalogue list with
independent row highlighting. Picking a lunar eclipse sets simulated time + warp
+ drives the moon mesh's emissive intensity down ~82% from the default while
tinting toward a copper umbral colour — the iconic "blood moon" look — via
`Moon.setEclipseShadow(fraction)` and the linear `lunarEclipseFraction()` curve
through the P1 → peak → P4 window. No auto-pin (the moon is visible everywhere
on the night side), no path-of-totality (the shadow is on the moon, not Earth).

**Sun-disc + Eclipse panel position swap** — SunDiscPanel moved from top-right
to top-left (directly under the Clock), EclipsePanel moved to top-right. The
sun-disc is the focal panel during eclipse playback (observer-perspective visual
+ playback controls), so it sits in the same "current moment" column as the
Clock; the catalogue browser moves out of the way.

**Eclipse scrub slider** (in SunDiscPanel) — native `<input type="range">` slider
spans `[U1 − 5m, U4 + 5m]`, greatest-eclipse marker rendered as an amber
diamond. ⏪ REV / ⏸/▶ play-pause / ⏩ FF buttons step ±30 s in simulated time.
Relative-time readout: `T+/-MM:SS` relative to greatest. Drag detection
suppresses per-frame `setSimulatedTime` so the slider doesn't fight the user's
input. Visible only in eclipse-mode (catalogue-driven), not in the easter-egg path.

**Sun-disc easter egg** — dropped the `eclipseLayer.mesh.visible` gate so the
inset appears whenever an eclipse is geometrically happening at the pinned
location (sun up, moon within 5° of sun), regardless of menu state.

**Auto-pin on solar-eclipse jump** — clicking a solar eclipse row in the
catalogue now auto-pins the observer at the greatest-eclipse waypoint
(Iceland mid-Atlantic for 2026-08-12) so the sun-disc inset appears immediately
without the user needing to discover globe-click-to-pin first. Skipped if a
location is already pinned.

**Double-click to pin** — double-clicking the 3D globe drops a pin AND
auto-enables Location mode, regardless of whether the menu's Location toggle
is on. Discoverable shortcut; the existing single-click handler still requires
Location mode (the dblclick is the bootstrap that turns it on). Skipped in
flat-map mode because FlatMap already wires dblclick to "reset to whole-world
view".

**Live-data freshness gating** — when simulated time is more than ±24 h from
wall-clock now, the wind / clouds / aurora / fires / hurricanes / tracks /
lightning / MSLP-Temp-RH overlays hide rather than render today's data on a
2027 date. Hysteresis at ±22 h prevents flicker if the user scrubs across the
boundary. Astronomy + day/night + eclipse layer stay on (they track simulated
time correctly). Clock grows a *"live weather hidden · sim 2027-08-02"*
caption when out of range; the existing ↺ reset button is the snap-back.

**Camera locks to Earth's surface when auto-orbit is off** — without this,
time-warp visibly drifted the viewpoint: Earth rotated beneath the camera and
the pinned location scrolled off-screen. Now the camera rotates around the
target by the same Δ Earth rotated each frame, so the surface point you're
looking at stays put. User drag input still works on top of the lock.

**Plan / Roadmap restructure** — the single `PLAN.md` was split into the
forward-looking `ROADMAP.md` and the version-history `CHANGELOG.md`. The old
`PLAN.md` and `frontend/PLAN.md` are now redirect stubs.

## v0.2.0 — 2026-05-27 — Public-launch milestone

Onboarding + polish pass tying the v0.1.6–v0.1.9 features together for public launch.

- [frontend/src/ui/Menu.ts](frontend/src/ui/Menu.ts): first-visit onboarding hint
  above the wordmark — amber callout with a bouncing arrow, fades in, holds for
  ~5 s, fades out. Gated by `orrery.onboarded.v1` in localStorage so it never
  repeats; wordmark click dismisses immediately.
- Tooltip sweep: Map / Clock / Data / Location tooltips refreshed to mention the
  v0.1.8 + v0.1.9 features (pan + zoom on the flat map, the Data panel's clickable
  source names, geocoded place names, etc.).
- [frontend/docs/qa-checklist.md](frontend/docs/qa-checklist.md) updated with the
  v0.1.6–v0.1.9 verification matrix.
- DEPLOYMENT.md LocationIQ swap docs already in place from v0.1.5.

## v0.1.9 — Flat-map pan + zoom

[frontend/src/scene/FlatMap.ts](frontend/src/scene/FlatMap.ts) wires Three.js's
`MapControls` (purpose-built top-down ortho pan + dolly) on its own camera.
`zoomToCursor: true` for Google-Maps-style cursor-centred zoom; damping at 0.18.
Y-pan clamped each frame so the camera target can't scroll past the poles into
empty space. Double-click resets to default whole-world view.

Wrap-around at ±180° lon: two extra plane meshes at world X = ±2 share the
material with the canonical plane — pan past the antimeridian and the world tiles
seamlessly. `FlatMap.wrapWorldX()` is the small static helper used by
click-to-pin in main.ts to translate clicks on wrap-around tiles back to
canonical longitudes.

main.ts edge-triggers `flatMap.enableControls(renderer.domElement)` when
`menu.isMapMode()` transitions on, and `flatMap.disableControls()` on off, so
the controls don't compete for events with the 3D globe's OrbitControls.

## v0.1.8 — Overlay scale-key legend + pressure-uniform fix

Two related issues, one batch.

**Pressure-uniform root cause**: `scalarGridToTexture` produced a *half-float*
texture (max representable ±65 504). MSLP values are ~96 000–104 000 Pa — they
overflowed to Infinity at upload, then clamped to 1.0 in the shader, so the whole
globe rendered as the highest-value red.
[frontend/src/scene/OverlayLayer.ts](frontend/src/scene/OverlayLayer.ts) now uses
`scalarGridToByteTexture` (same as CloudLayer), which pre-normalises vmin/vmax
into [0, 255] at upload — no overflow possible, linear filtering guaranteed
everywhere. Shader simplified (uVmin / uVmax uniforms removed).

**Scale key**: new
[frontend/src/ui/ScaleKeyPanel.ts](frontend/src/ui/ScaleKeyPanel.ts) — SVG gradient
strip at the bottom-centre with min / mid / max value labels in human-friendly
units (Pa → hPa, K → °C, etc.). Palette stops shared with the shader via
[frontend/src/ui/overlayPalettes.ts](frontend/src/ui/overlayPalettes.ts) so the
legend can't drift out of sync. Auto-shows when an overlay is active.
`OVERLAY_CFGS` in main.ts gained `label` + `format(raw)` per overlay so each one
carries its own unit conversion.

## v0.1.7 — Eclipse sun-disc inset

Two new files:

- [frontend/src/astro/observerView.ts](frontend/src/astro/observerView.ts) —
  projects the sun + moon into the observer's local AltAz at the pinned
  location and simulated moment. Includes topocentric parallax for the moon
  (geocentric vs surface-observer direction differs by up to ~1° — bigger than
  the sun's disc, so non-optional). Returns altitude / azimuth, apparent
  angular radii, angular separation, linear eclipse magnitude, and east / up
  offsets for 2D rendering.
- [frontend/src/ui/SunDiscPanel.ts](frontend/src/ui/SunDiscPanel.ts) — small SVG
  inset (top-left, beneath the Eclipse panel). Sun rendered with a radial
  gradient; moon as a dark disc positioned at the observer's apparent offset.
  Magnitude readout: "magnitude 0.847" + "84.7% obscured" (or "total" /
  "annular peak" at totality). Auto-shows when an eclipse is loaded, a
  location is pinned, the sun is above the observer's horizon, AND the moon
  is within 5° of the sun.

Per-frame update is gated on `pinnedLocation.visible && eclipseLayer.mesh.visible`
in the animate loop, so the inset auto-tracks simulated time during the
warp-driven eclipse run.

## v0.1.6 — Meeus lunar model upgrade

Replaced Schlyter's lunar position with Meeus's truncated ELP-2000-82B (33 + 30
terms across longitude, distance, latitude, plus the A1/A2/A3 auxiliary
perturbations) in [frontend/src/astro/lunar.ts](frontend/src/astro/lunar.ts).
Verification against Meeus's book example 47.a: 5 arcsec longitude / 2 arcsec
latitude / 17 km distance residuals — well under the ~10 arcsec target. About
**100× better than Schlyter** and crucially smaller than the sun's apparent disc,
so any eclipse — past, future, catalogued or not — now renders correctly from
first principles at runtime. NASA centerlines stay around for the four headline
events as a deterministic-fallback authority but are no longer load-bearing.

About-page Moon + Eclipse sections updated to drop the "we use NASA centerlines
because our calc isn't good enough" framing; Schlyter's credit retained as
historical attribution.

## v0.1.5 — Geocoder behind same-origin proxy

The reverse-geocoder for the Location panel used to hit `nominatim.openstreetmap.org`
directly from the browser. Nominatim is run as a charity by the OSM Foundation and
periodically returns HTTP 503 under load.

- [frontend/src/data/geocoder.ts](frontend/src/data/geocoder.ts) rewritten:
  routes through a same-origin `/proxy/geocode/` URL; structured
  `GeocodeResult` discriminated by status (`ok | no-name | unavailable |
  rate-limited`); auto-retry on 5xx after a 4 s delay.
- main.ts: dispatches each status to a meaningful place-name string. 503 →
  "geocoder unavailable" instead of a silent "—". Rate-limited → leave the
  previous name in place rather than clearing.
- [frontend/vite.config.ts](frontend/vite.config.ts): dev proxy
  `/proxy/geocode/` → Nominatim, so application code is identical in dev + prod.

LocationIQ swap-in for the upstream is documented in
[DEPLOYMENT.md §5c](DEPLOYMENT.md) — production NGINX block ready to paste.

## v0.1.4 — Moon-toggle retirement + Find-moon action

The "Moon" toggle in the Astro row used to hide/show the moon mesh. Confusing —
the moon is always part of the scene, just sometimes off-camera. Retired in
favour of a "Find moon" action button at the end of the Astro row that
repositions the camera along the moon's direction at 1.5× the moon's distance
so both bodies sit in view. Also exposed as `window.__orrery.findMoon()`.

## v0.1.3 — Wind streamline fix + intensity picker

**Wind seams fix**: the wind texture was uploaded as `THREE.FloatType` (32-bit).
In WebGL2, linear filtering on float textures requires the
`OES_texture_float_linear` extension. Many GPUs silently lack it and the driver
falls back to NEAREST sampling even when LinearFilter is requested — so every
fragment read a single 1° grid cell's value, producing visible 1°-wide "panels"
of uniform wind direction tiled across the globe.

Switched to `HalfFloatType` in
[frontend/src/data/windToTexture.ts](frontend/src/data/windToTexture.ts) (and the
mock texture in [frontend/src/scene/Particles.ts](frontend/src/scene/Particles.ts)).
Half-float supports linear filtering natively in WebGL2 with no extension. Range
(±65 504) and precision (~3 decimal digits) are plenty for m/s wind values.
~0.5 MB for the 360×181 grid vs. ~1 MB for Float32.

**Wind intensity picker**: even with the panel-tile artifact fixed, the bold
default smothered the rest of the globe. The Wind row is now a mutex picker (same
pattern as Clouds / Overlay):

- **Subtle** (new default): short streaks, dim composite (`uFade=0.98`,
  `uOpacity=0.35`). Reads as a layer, doesn't compete with continents.
- **Standard**: moderate streaks, mid brightness (`uFade=0.99`, `uOpacity=0.65`).
- **Bold**: the previous default — long, bright streaks (`uFade=0.992`,
  `uOpacity=1.0`), the classic earth.nullschool look.

`Trails.setIntensity(level)` live-tunable from the console.

## v0.1.2 — Location panel redesign + pin/beam alignment fix

- Pin / sun-beam alignment fix — `sunDir` + `moonPos` now Z-rotated by axial tilt
  in `updateAstro()` so everything sits in the same tilted Earth frame. Visible
  symptom was a ~16° offset between the sun beam and the pin dropped at sub-solar.
- Click-drag suppression — `pointerdown` records the position; clicks past a 5 px
  threshold are ignored so orbiting the globe doesn't drop a stray pin.
- Eclipse panel close → snap simulated time back to wall-clock + warp 1×.
- Location panel redesigned: moved bottom-right, three rows (📍 current,
  ☀️ sub-solar, 🌙 sub-lunar) with selected-row colour highlight, "true solar
  time" label, full-row click targets.
- "earth-clock" wordmark tooltip now reads *"Click for options · weather layers ·
  clock · location · eclipses"* so first-time visitors discover the menu.

---

## Earlier versions

Pre-v0.1.2 history (v0.0.x through v0.1.1 — eclipse rendering, NASA centerlines,
brand "hour-hands" beams, cutover, real sun + skybox, etc.) is preserved in
[frontend/docs/PLAN-archive.md](frontend/docs/PLAN-archive.md).
