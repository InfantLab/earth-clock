# Visual QA checklist

## v0.3.0 — Geology layer verification round (2026-07-02)

New this version: tectonic plates, earthquakes, volcanoes, and FIRMS-based
active-eruption flagging, all in a new **Geology** menu row between Geography
and Astro. Landed hardest-first (earthquakes → plates → volcanoes → eruption
cross-ref) — see ROADMAP.md and CHANGELOG.md for the technical writeup.

**Already verified via headless Chromium during development** (dev server,
`frontend && npm run dev`): all four layers render on both the 3D globe and
flat map with no console errors; earthquake positions/data match the live
USGS feed; plate boundaries trace the Ring of Fire / Mid-Atlantic Ridge / East
African Rift correctly; volcano positions match GVP source data to
floating-point precision; the FIRMS cross-reference correctly flagged Etna,
Merapi, Semeru, Lewotobi, Lewotolok, Krasheninnikov, Santa Maria, and Erebus —
all volcanoes GVP itself lists as erupting in 2026. What's below is the
**real-browser / real-device sweep** that automation can't cover — visual
judgement calls (colour legibility, marker size at different zoom levels) and
the actual production deploy.

### Earthquakes
- [ ] Menu → Geology → Earthquakes toggle shows/hides the layer
- [ ] Markers cluster along real seismic zones (Ring of Fire, Mid-Atlantic
      Ridge, Himalayan front) — not randomly scattered
- [ ] Bigger markers for higher-magnitude events (compare a M6+ vs a M2 quake
      if both are present in the current week's feed)
- [ ] Colour reads shallow = red, deep = blue (Pacific subduction zones like
      Indonesia/Japan should show more blue than continental rift quakes)
- [ ] Events under ~24 h old visibly pulse; week-old events sit as a steady,
      fainter dot
- [ ] Time-warp forward or backward more than 24 h from now (`window.__orreryTimeWarp
      = 3600*24*50` in console) — earthquakes hide, same as Fires/Hurricanes.
      Return to near-now — they reappear.
- [ ] Data panel (View → Data) shows an `earthquakes` row: source, event
      count, "last 7 days"
- [ ] **Production only**: confirm `earthquake-service.js` is running
      server-side (check CapRover logs for "Earthquake Service Starting") and
      `https://earth-clock.onemonkey.org/data/earthquakes/current.json`
      returns fresh JSON (check the `generated` timestamp is within 15 min)

### Tectonic plates
- [ ] Menu → Geology → Plates toggle shows/hides the layer
- [ ] Amber/terracotta lines trace real plate boundaries — visually distinct
      from the cool-white coastlines even with both on
- [ ] Time-warp far from now — plates stay visible (static layer, no
      freshness gate, unlike earthquakes)
- [ ] Flat map view: boundaries render correctly, no antimeridian seam
      artifacts (check near the Aleutians/Kamchatka, ~180° longitude)

### Volcanoes
- [ ] Menu → Geology → Volcanoes toggle shows/hides the layer
- [ ] Small triangular markers visible along volcanic arcs (Japan, Indonesia,
      Andes, Mediterranean) — zoom in if they're too small to distinguish
      from the surrounding terrain texture at default zoom
- [ ] Dormant volcanoes render as a dim rock colour; check at least one known
      currently-erupting volcano (Etna, Merapi, Semeru, or Stromboli are
      reliably active) glows hot orange and pulses, distinct from dormant ones
- [ ] Time-warp far from now — volcanoes stay visible (static, no freshness
      gate)
- [ ] Data panel shows a `volcanoes` row: source, volcano count, bundled

### Active eruptions (FIRMS cross-reference)
- [ ] With both Fires and Volcanoes toggled on, at least one hot volcano
      marker sits near (not necessarily exactly on top of, given the 20 km
      match radius) a cluster of orange fire dots
- [ ] Toggle Fires off — erupting volcanoes keep their hot colour (the flag
      persists on the volcano layer independent of fire-dot visibility)
- [ ] Wait for an hourly fire refresh (or reload the page) — erupting set
      updates; a volcano that stops showing thermal activity should
      eventually revert to dormant colour

### Regression — existing layers unaffected
- [ ] Geography row still shows only Coastlines + Night lights (Geology is a
      separate row, not merged into Geography)
- [ ] Fires, Hurricanes, Lightning, Aurora all still behave exactly as before
      (freshness gating, mobile auto-collapse, flicker/decay animations)
- [ ] Menu label column width still fits "Geography"/"Geology" without
      wrapping the " | " separator
- [ ] Fresh `localStorage` (clear `orrery.menu.v1`): new Geology toggles
      default to on, matching DEFAULTS
- [ ] Mobile (≤600 px): toggling any Geology layer auto-collapses the menu,
      same as every other row

### Browser matrix
- [ ] Chrome / Edge (Chromium) — primary; already covered by the automated
      Playwright pass above, spot-check only
- [ ] Firefox — new `ShaderMaterial`s in EarthquakeLayer/VolcanoLayer are the
      risk surface (custom GLSL point-sprite shaders); confirm markers render
      identically, no shader compile errors in console
- [ ] Safari macOS — same shader risk as Firefox
- [ ] Safari iOS / Chrome mobile — Geology row toggles are reachable and
      tappable in the collapsed mobile menu; markers aren't so small as to be
      invisible on a phone screen

### Production deploy
- [ ] `cd frontend && BUILD_AS_ROOT=1 npm run build` — clean build, no
      TypeScript errors
- [ ] New static assets present in the build output: `plates.json`,
      `volcanoes.json` (verify these got copied from `public/data/` — they're
      static files, not part of the Vite bundle, so confirm they're already
      committed to `public/data/` before the build, not generated by it)
- [ ] `earthquake-service.js` wired into the CapRover deploy the same way
      `weather-service.js`/`oscar-service.js` are (check `server.js` starts
      all three)
- [ ] After deploy: hard-refresh the live site, confirm the Geology row
      appears and all four features work as above
- [ ] Public about pages (`/about/`, `/about/kids/`) updated to describe the
      new layers — deliberately deferred until this deploy step (see
      CHANGELOG.md v0.3.0 entry)

---

## v0.2.0 — public-launch verification round (2026-05-27)

Sweep before declaring v0.2.0 live. Changes landed in v0.1.6 → v0.1.9 all
benefit from a once-over in a clean browser session (clear localStorage so the
first-visit onboarding hint shows, then verify every feature below).

### Browser matrix
- [ ] **Chrome / Edge** (Chromium) — primary, should be solid since most dev happens here.
- [ ] **Firefox** — verify WebGL2 half-float + byte textures render the same; geocoder fallback path still works.
- [ ] **Safari** macOS — Safari has historically been the strictest about WebGL extensions; if anything's off, expect a sampling artifact in the wind streamlines or the overlay shell.
- [ ] **Safari iOS / Chrome mobile** — touch gestures: pan + pinch-zoom on the flat map; tap-to-pin on the globe; tap the Astro row's "Find moon" action button.

### v0.2.0 — onboarding
- [ ] First-visit hint: clear `localStorage` for the site, reload. A small amber callout appears above the "earth-clock" wordmark, ~6 s, then fades out. Reload again — should NOT reappear.
- [x] Clicking the wordmark while the hint is visible dismisses it immediately + permanently.
- [x] Hover-tooltip on every menu button reads as plain English (no jargon). Confirm: Map (mentions pan/zoom), Clock (mentions zone-flip + ⏱ controls), Data (mentions linked sources), Location (mentions geocoded place names + true solar time), Eclipse (mentions catalogue panel).

### v0.1.9 — Flat-map pan + zoom
- [x] Toggle View → Flat map. Drag with mouse — plane pans smoothly with damping. Touch drag works on mobile.
- [ ] Wheel zoom — zooms toward the cursor position (not the centre).
- [f] Pan past the antimeridian (drag left or right past ±180° longitude) — the world tiles seamlessly into the visible region. No black gap. 
FAIL - doesn't keep tiling after 1 full cycle
- [x] Vertical pan stops at the poles — drag up at max zoom-out and you can't scroll past the north pole into empty space above.
- [x] Double-click on the plane — pan + zoom reset to the default whole-world view.
- [x] Click-to-pin in flat-map mode: pin a location on the canonical plane; pan past ±180° and pin the same place again on the wrap-around tile. Both should pin to the same lat/lon.

### v0.1.8 — overlays
- [x] Toggle Overlay → Pressure. Globe shows real high/low variation (no longer uniform red). The bottom-centre scale key shows "Atmospheric pressure / 960 hPa / 1000 hPa / 1040 hPa" with a violet-to-red gradient.
- [x] Cycle Overlay → Temperature → Humidity → Moisture → Cloud water. Each one shows its palette + appropriate units (°C, %, mm, kg/m²).
- [x] Toggle the active overlay off (click it again). Globe overlay disappears AND scale-key panel disappears.

### v0.1.7 — eclipse sun-disc view
- [x] Toggle Eclipse → click "Spain total solar eclipse (2026)". Globe time-warps to T-1m.
- [x] Pin Bilbao (use globe-click or "use my location" if in northern Spain). Sun-disc inset appears top-left under the Eclipse panel.
- [x] As the warp plays through the eclipse, moon visibly slides across the sun. Magnitude readout climbs from 0 → ~1.01 at totality.
- [x] Pin Sydney instead → during 2028 Australia eclipse → similar sliding moon at peak time.
- [x] Pin a location WHERE the sun is below the horizon at the eclipse moment (e.g. somewhere on Pacific night side during the 2026 Spain eclipse) — inset auto-hides.

### v0.1.6 — Meeus lunar
- [x] Run any eclipse with no NASA centerline (catalogue is currently exhaustive, so this is automatic for any new eclipse). The runtime path of totality should now land on the right continent. (Pre-v0.1.6 this would miss by 30° on Earth's surface for non-catalogued events.)
- [x] Open the in-app About page — Moon section now says "Meeus / ~10 arcsec / 100× better than Schlyter". No "we use NASA centerlines because our calc isn't good enough" framing.

### v0.1.5 — geocoder
- [x] In dev (`npm run dev` from frontend/): pin a location, the place name should resolve within ~1 s via the Vite-proxied `/proxy/geocode/`.
- [x] **Production**: confirm the NGINX `/proxy/geocode/` block is deployed per [DEPLOYMENT.md §5b](../../DEPLOYMENT.md). Curl test: `curl -i "https://earth-clock.onemonkey.org/proxy/geocode/reverse?format=jsonv2&lat=43.26&lon=-2.93"` should return 200 with a JSON body containing "Bilbao".
- [x] **LocationIQ**: if/when swapped per [DEPLOYMENT.md §5c](../../DEPLOYMENT.md), repeat the curl test. LocationIQ should have no 5xx outages.

---

## Date: 14 May 2026
## Tester: Caspar
## Version: 0.0.2 (sweeping fixes from QA round on 0.0.1 / "v001dev")

> [v002 ✅] Visible versioning landed: the package.json version now renders as a small badge
> beside the "earth-clock" wordmark (bottom-left). Bumped per release; checklist version
> header should match the version of the build it was tested against.

## Disposition of v001dev inline notes

Notes from the previous QA round that the user flagged with "> " have been classified below.

**Addressed in v002:**
- GIBS 400 errors / clouds not loading → 250m TileMatrixSet dimensions table; within-tile no-data detection; -2-day default lag.
- "Clouds disappear when overlay toggles" → explicit `renderOrder` budget across the transparent shells.
- "Debug → Data" rename → done; old Data panel renamed Sources.
- "Overlay buttons are alphabet soup" → human-readable labels + tooltips.
- "Click anywhere on time to toggle UTC/local" → whole clock click-area now toggles.
- "Time-warp needs a UI reset" → amber `× N  ↺ reset` line on the clock; one-click resets to 1×.
- "X should close the location panel" → ✕ now toggles the menu's Location entry off.
- "GFS should be layer 1 — underneath clouds" → overlay renderOrder=1, clouds=2.
- "Use test data should be a toggle" → button flips between "Use test data" / "Use live data".

**Deferred to roadmap (see [PLAN.md](../PLAN.md) Phase C / QA backlog):**
- Holistic time + camera UX (time-warp + orbit + ISS + eclipse all in one panel).
- Location lookup by name (geocoder search field in Location panel).
- Eclipse path / umbra not visible — needs deeper investigation; suspected cause is the `magnitude >= 1.0` filter being numerically strict, or geographic-frame transform sign mismatch. Documented as a Phase C v002+ item.
- Orbit + time-warp integration ("watch eclipse from the moon at 60× warp").




Run this before declaring earth-clock ready for the public cutover. Each item is a yes/no — write "OK" or note what's wrong. Try to test at three different times of day (UTC noon, UTC midnight, somewhere in between) because day/night-dependent effects vary.

**Test setup**: `npm install` in both `frontend/` and the earth-clock root. Run `npm run weather-service` to populate GFS data. Then `npm run dev` in `frontend/` and open `http://localhost:5173`.

---
## Responses 
[x] success
[f] failure
[p] partial
[>] defer to next minor version
[>>] defer to next major version

## Boot-up

- [x] Page loads in <3 s on a warm network
- [f] No console errors (warnings about deprecations are OK)

3.jpg:1 
 GET https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/VIIRS_NOAA20_CorrectedReflectance_TrueColor/default/2026-05-12/250m/1/0/3.jpg 400 (Bad Request)
3.jpg:1 
 GET https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/VIIRS_NOAA20_CorrectedReflectance_TrueColor/default/2026-05-12/250m/1/1/3.jpg 400 (Bad Request)
﻿


- [x] Clock reads sensible UTC time in the top-left corner
+ clock needs local time too. 
- [x] "earth-clock" wordmark visible bottom-left
- [p] Default layers visible: globe with realistic day/night terminator, clouds, coastlines, atmosphere, moon (somewhere in space — open Debug to find its sub-lunar coords if not in view)

> All checked but clouds were not visible. 

## Menu

- [x] Click the "earth-clock" wordmark → menu expands smoothly
- [x] All Layer toggles flip yellow ↔ grey on click
- [p] Toggling each layer off → off effect is visible (clouds vanish, coastlines vanish, etc.)
clouds data not loading
- [x] Overlay row is mutually exclusive (clicking one turns off the others)
- [x] Menu state persists across page reloads (browser localStorage)

## Data sources

Open the Data panel (View → Data). Verify each row:

- [x] `aurora` → ✓ with peak% and activity label (likely "quiet" most days)
- [ ] `clouds` → ✓ with date (should be 2 days ago)
- [x] `coastlines` → bundled
- [x] `day map` / `night map` / `moon` → bundled
- [x] `fires` → ✓ with detection count
- [x] `hurricanes` → ✓ either with active count or "no active storms (off-season)"
- [x] `kp` → ✓ with Kp value + visibility latitude
- [x] `lightning` → ✓ connected with strike rate
- [x] `mslp` / `temp` / `rh` / `tpw` / `tcw` → ✓ with valid-time (requires weather-service to have run)
- [x] `wind` → ✓ with grid dimensions + valid time

We have renamed the overlays to be more beginner friendsly

## Day/night terminator
                                                                                                                                     
- [x] Time-warp through 24 h (set `window.__orreryTimeWarp = 3600` in console): the day/night line sweeps across Earth at a believable speed
- [x] At the terminator: smooth gradient, not a hard line
- [x] Night side: city lights texture visible (subtle), clouds dimmed but not erased
- [x] Toggling Night-lights off → night side is dark with no city lights
- [x] Toggling Terminator off → whole globe uniformly lit, no day/night gradient
- [x] Reset time-warp to 1 when done

> Time-Warp is fantastic - very smooth. It needs to be nicely integrated into the UX (along with out eclipse viewer and other "astronavigation" ) Time warp is one way of speeding up rotation, different orbits are another. so we need a holistic solution that covers both of these. and other orbits and views (ISS)


## Sun & moon

- [x] Sub-solar lat/lon in Debug panel matches the lit hemisphere of the Earth
I think it does but I think more explanation of what this is is required. Maybe rather than "Debug" we start calling this panel "Data"
- [x] Moon is at a sensible angular position relative to the sun direction (check phase against a calendar)
- [x] "Find moon" button → camera repositions so moon is visible
- [x] Moon shows realistic phase based on sun angle
- [x] Toggle Moon off → moon disappears

## Wind particles

- [x] Particles drift across Earth at a believable speed (slow over equatorial regions, faster in jet streams)
- [x] Streaks fade behind particles (additive trails)
- [x] Toggle Wind off → particles vanish; trails fade out gradually
- [x] Streaks correctly anchor to Earth's rotation (no weird global drift)

## Clouds

- [ ] Cloud composite visible on day side
- [ ] Clouds match the major weather features for the date (cyclones, ITCZ band)
- [ ] Toggle Clouds off → cloud layer vanishes

## Aurora

- [x] If Kp ≥ 3, aurora oval is faintly visible on the night-side polar regions
- [x] If Kp < 3, aurora may be invisible (correct behaviour — check Data panel for max%)
- [x] Toggle Aurora off → aurora vanishes
- [x] Test data button → bright aurora rings at ±55–80° lat (proof the renderer works)

## Fires

- [x] Hot dots distributed across known fire regions (Africa, Amazon, Siberia, Australia)
- [x] Flicker animation visible
- [x] Toggle Fires off → vanish

## Hurricanes / tracks

- [x] Off-season (Dec–May Atlantic): no active storms; no track polylines drawn
- [x] In-season: pulsing colored sprites at storm positions, with past-track polyline (white-blue) + forecast-track (yellow) + cone polygon (translucent yellow)
- [x] Toggle Hurricanes off → sprites vanish, tracks stay
- [x] Toggle Tracks off → tracks vanish, sprites stay
- [x] Test data → 7 fake storms in different basins, all visible

## Lightning

- [x] WebSocket connects within ~3 s of page load (Data panel goes from ⋯ to ✓)
- [x] Strikes appear as brief white-blue flashes over storm regions (typically tropics + Africa + Indonesia)
- [x] Strike rate ticks up in Data panel
- [x] Toggle off → flashes stop

## GFS overlays (Phase B Path A)

(Requires `npm run weather-service` to have populated the JSON files.)

- [x] MSLP toggle → pressure colormap visible globally (high pressure orange-red, low pressure blue-purple)
- [x] Temp toggle → temperature colormap, cold blues at poles + hot reds at equator
- [x] RH toggle → tan/dry to blue/wet
- [x] TPW toggle → blue gradients showing water vapour, mostly tropics
- [x] TCW toggle → grey/blue clouds
- [x] All five are mutually exclusive (turning one on turns the others off)
- [x] Toggle the active one a second time → overlay hides entirely

Feel like GFS should be layer 1 - underneath clouds etc. 
Can we try that see if it looks better

## FlatMap

- [x] Click Map → 2D equirectangular view loads
- [x] Day texture + night-lights overlay + clouds all visible
- [x] Terminator gradient correct
- [x] Click Map again → back to 3D globe
- [>] (Known incomplete) aurora, fires, hurricanes, wind not yet ported to flat map

## Eclipse

- [f] Toggle Eclipse → orange path-of-totality polyline visible (for 2026-08-12 it crosses Iceland → Spain)
> date/time changes and warps through period of eclipse but no path visible on globe
- [p] Click "Jump to eclipse" in Debug → simulatedTime snaps + time-warp starts → umbra disc slides along the path
> not visible
- [f] Watch the umbra and penumbra discs darken Earth's surface as they pass
> not visible
- [p] Set `window.__orreryTimeWarp = 1` to stop the warp
> needs a UI button to switch this back.

## Location pin

- [x] Toggle Location → panel appears top-left below clock
- [x] Click anywhere on Earth → pin drops at that location
- [x] Panel shows lat/lon + solar time
- [x] Pin is visible at default zoom (not occluded)
- [x] Pin stays glued to its geographic position as Earth rotates / auto-orbits
- [p] Click ✕ → pin clears, panel returns to "click the globe" hint
> feel like X should close the location panel, there is no value to clearing the current selection. every click resets location so make X behave like a standard panel close button
- [x] Click "use my location" → browser permission prompt, then pin drops at browser-reported coords
- [x] In Map mode: click on the plane → pin drops at corresponding lat/lon
> future feature - look up by name

## Auto-orbit

- [x] Toggle Orbit → globe slowly rotates CCW (~150 s per orbit)
- [x] Grab the mouse and drag → orbit pauses, manual rotation works
- [x] Release mouse → orbit resumes after a moment
- [x] Toggle Orbit off → stops

> great first version, future challenge is combining orbit views with time warps in a sensible, user transparent fashionn

## Clock

- [x] Top-left clock shows current time, ticks once per second
- [x] Date below time is correct
- [x] Click the zone label → flips UTC ⇄ local browser zone
> better to allow click anywhere on time to change UTC to local. 
- [x] Zone choice persists across reloads

> clock should have a time warp reset button ( and maybe other time control ux)

## Debug

- [x] Toggle Debug → diagnostic panel bottom-right
- [x] Astro readout shows sub-solar / sub-lunar coords + camera distance
- [x] Moon on-screen status correctly reflects whether moon is in view
- [x] All 6 buttons functional: Use test data, Find moon, Jump to eclipse
- [x] Per-layer status rows update as loaders complete

## Time-warp

- [x] `window.__orreryTimeWarp = 60` → 60-second day cycle visible
- [x] `window.__orreryTimeWarp = 3600` → 1-second day
- [x] `window.__orreryTimeWarp = 86400` → 1-second year (sun's declination wobbles visibly)
- [x] Reset to 1 → normal wall-clock pace
- [x] All time-driven things follow: clock, terminator, moon position, eclipse path

## Performance

- [x] 60 fps at default zoom, all default layers visible (integrated graphics target)
- [x] No frame-time spikes when toggling layers
- [x] No memory growth over ~5 minutes of running
- [x] Wind particles + cloud shell + trails composite together stay under ~5 ms/frame

> Looks good on this machine, once we deploy, i will test on a few other devices

## Responsiveness

- [x] Browser window resize: globe + map both adapt
- [x] Aspect ratio changes: no stretching
- [x] Touch devices (optional v1): basic pan + zoom works

## Console hygiene

- [x] At idle: no console errors, only the [earth-clock] info-level messages
- [x] No "uncaught promise rejection" anywhere
- [x] No CORS errors on any data source (NHC is the one risk; should route through /proxy/nhc)
- [x] No 404s on textures or data files

## Browser matrix

Run the most important checks in each:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest) — note any WebGL2 / Float texture surprises


---

## Issue log template

When you find something off, capture it as:

```
- [browser, time-of-day]
- Steps to reproduce
- Expected
- Actual
- Severity (blocker / annoying / cosmetic)
```

Anything blocker-severity halts the cutover; annoying + cosmetic can ship + be tracked as follow-ups.
