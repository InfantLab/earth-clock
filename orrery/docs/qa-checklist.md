# Visual QA checklist
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

**Test setup**: `npm install` in both `orrery/` and the earth-clock root. Run `npm run weather-service` to populate GFS data. Then `npm run dev` in `orrery/` and open `http://localhost:5173`.

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
