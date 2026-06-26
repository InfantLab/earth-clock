# Changelog

Version history for earth-clock — newest first. Forward-looking work lives in
[ROADMAP.md](ROADMAP.md). Per-layer build history before v0.1.2 lives in
[frontend/docs/PLAN-archive.md](frontend/docs/PLAN-archive.md).

The version that ships is the **frontend** WebGL app served at `/`. The classic D3 +
canvas renderer at `/classic/` is preserved but not separately versioned.

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
