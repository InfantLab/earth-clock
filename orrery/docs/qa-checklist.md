# Visual QA checklist

Run this before declaring earth-clock ready for the public cutover. Each item is a yes/no — write "OK" or note what's wrong. Try to test at three different times of day (UTC noon, UTC midnight, somewhere in between) because day/night-dependent effects vary.

**Test setup**: `npm install` in both `orrery/` and the earth-clock root. Run `npm run weather-service` to populate GFS data. Then `npm run dev` in `orrery/` and open `http://localhost:5173`.

---

## Boot-up

- [ ] Page loads in <3 s on a warm network
- [ ] No console errors (warnings about deprecations are OK)
- [ ] Clock reads sensible UTC time in the top-left corner
- [ ] "earth-clock" wordmark visible bottom-left
- [ ] Default layers visible: globe with realistic day/night terminator, clouds, coastlines, atmosphere, moon (somewhere in space — open Debug to find its sub-lunar coords if not in view)

## Menu

- [ ] Click the "earth-clock" wordmark → menu expands smoothly
- [ ] All Layer toggles flip yellow ↔ grey on click
- [ ] Toggling each layer off → off effect is visible (clouds vanish, coastlines vanish, etc.)
- [ ] Overlay row is mutually exclusive (clicking one turns off the others)
- [ ] Menu state persists across page reloads (browser localStorage)

## Data sources

Open the Data panel (View → Data). Verify each row:

- [ ] `aurora` → ✓ with peak% and activity label (likely "quiet" most days)
- [ ] `clouds` → ✓ with date (should be 2 days ago)
- [ ] `coastlines` → bundled
- [ ] `day map` / `night map` / `moon` → bundled
- [ ] `fires` → ✓ with detection count
- [ ] `hurricanes` → ✓ either with active count or "no active storms (off-season)"
- [ ] `kp` → ✓ with Kp value + visibility latitude
- [ ] `lightning` → ✓ connected with strike rate
- [ ] `mslp` / `temp` / `rh` / `tpw` / `tcw` → ✓ with valid-time (requires weather-service to have run)
- [ ] `wind` → ✓ with grid dimensions + valid time

## Day/night terminator

- [ ] Time-warp through 24 h (set `window.__orreryTimeWarp = 3600` in console): the day/night line sweeps across Earth at a believable speed
- [ ] At the terminator: smooth gradient, not a hard line
- [ ] Night side: city lights texture visible (subtle), clouds dimmed but not erased
- [ ] Toggling Night-lights off → night side is dark with no city lights
- [ ] Toggling Terminator off → whole globe uniformly lit, no day/night gradient
- [ ] Reset time-warp to 1 when done

## Sun & moon

- [ ] Sub-solar lat/lon in Debug panel matches the lit hemisphere of the Earth
- [ ] Moon is at a sensible angular position relative to the sun direction (check phase against a calendar)
- [ ] "Find moon" button → camera repositions so moon is visible
- [ ] Moon shows realistic phase based on sun angle
- [ ] Toggle Moon off → moon disappears

## Wind particles

- [ ] Particles drift across Earth at a believable speed (slow over equatorial regions, faster in jet streams)
- [ ] Streaks fade behind particles (additive trails)
- [ ] Toggle Wind off → particles vanish; trails fade out gradually
- [ ] Streaks correctly anchor to Earth's rotation (no weird global drift)

## Clouds

- [ ] Cloud composite visible on day side
- [ ] Clouds match the major weather features for the date (cyclones, ITCZ band)
- [ ] Toggle Clouds off → cloud layer vanishes

## Aurora

- [ ] If Kp ≥ 3, aurora oval is faintly visible on the night-side polar regions
- [ ] If Kp < 3, aurora may be invisible (correct behaviour — check Data panel for max%)
- [ ] Toggle Aurora off → aurora vanishes
- [ ] Test data button → bright aurora rings at ±55–80° lat (proof the renderer works)

## Fires

- [ ] Hot dots distributed across known fire regions (Africa, Amazon, Siberia, Australia)
- [ ] Flicker animation visible
- [ ] Toggle Fires off → vanish

## Hurricanes / tracks

- [ ] Off-season (Dec–May Atlantic): no active storms; no track polylines drawn
- [ ] In-season: pulsing colored sprites at storm positions, with past-track polyline (white-blue) + forecast-track (yellow) + cone polygon (translucent yellow)
- [ ] Toggle Hurricanes off → sprites vanish, tracks stay
- [ ] Toggle Tracks off → tracks vanish, sprites stay
- [ ] Test data → 7 fake storms in different basins, all visible

## Lightning

- [ ] WebSocket connects within ~3 s of page load (Data panel goes from ⋯ to ✓)
- [ ] Strikes appear as brief white-blue flashes over storm regions (typically tropics + Africa + Indonesia)
- [ ] Strike rate ticks up in Data panel
- [ ] Toggle off → flashes stop

## GFS overlays (Phase B Path A)

(Requires `npm run weather-service` to have populated the JSON files.)

- [ ] MSLP toggle → pressure colormap visible globally (high pressure orange-red, low pressure blue-purple)
- [ ] Temp toggle → temperature colormap, cold blues at poles + hot reds at equator
- [ ] RH toggle → tan/dry to blue/wet
- [ ] TPW toggle → blue gradients showing water vapour, mostly tropics
- [ ] TCW toggle → grey/blue clouds
- [ ] All five are mutually exclusive (turning one on turns the others off)
- [ ] Toggle the active one a second time → overlay hides entirely

## FlatMap

- [ ] Click Map → 2D equirectangular view loads
- [ ] Day texture + night-lights overlay + clouds all visible
- [ ] Terminator gradient correct
- [ ] Click Map again → back to 3D globe
- [ ] (Known incomplete) aurora, fires, hurricanes, wind not yet ported to flat map

## Eclipse

- [ ] Toggle Eclipse → orange path-of-totality polyline visible (for 2026-08-12 it crosses Iceland → Spain)
- [ ] Click "Jump to eclipse" in Debug → simulatedTime snaps + time-warp starts → umbra disc slides along the path
- [ ] Watch the umbra and penumbra discs darken Earth's surface as they pass
- [ ] Set `window.__orreryTimeWarp = 1` to stop the warp

## Location pin

- [ ] Toggle Location → panel appears top-left below clock
- [ ] Click anywhere on Earth → pin drops at that location
- [ ] Panel shows lat/lon + solar time
- [ ] Pin is visible at default zoom (not occluded)
- [ ] Pin stays glued to its geographic position as Earth rotates / auto-orbits
- [ ] Click ✕ → pin clears, panel returns to "click the globe" hint
- [ ] Click "use my location" → browser permission prompt, then pin drops at browser-reported coords
- [ ] In Map mode: click on the plane → pin drops at corresponding lat/lon

## Auto-orbit

- [ ] Toggle Orbit → globe slowly rotates CCW (~150 s per orbit)
- [ ] Grab the mouse and drag → orbit pauses, manual rotation works
- [ ] Release mouse → orbit resumes after a moment
- [ ] Toggle Orbit off → stops

## Clock

- [ ] Top-left clock shows current time, ticks once per second
- [ ] Date below time is correct
- [ ] Click the zone label → flips UTC ⇄ local browser zone
- [ ] Zone choice persists across reloads

## Debug

- [ ] Toggle Debug → diagnostic panel bottom-right
- [ ] Astro readout shows sub-solar / sub-lunar coords + camera distance
- [ ] Moon on-screen status correctly reflects whether moon is in view
- [ ] All 6 buttons functional: Use test data, Find moon, Jump to eclipse
- [ ] Per-layer status rows update as loaders complete

## Time-warp

- [ ] `window.__orreryTimeWarp = 60` → 60-second day cycle visible
- [ ] `window.__orreryTimeWarp = 3600` → 1-second day
- [ ] `window.__orreryTimeWarp = 86400` → 1-second year (sun's declination wobbles visibly)
- [ ] Reset to 1 → normal wall-clock pace
- [ ] All time-driven things follow: clock, terminator, moon position, eclipse path

## Performance

- [ ] 60 fps at default zoom, all default layers visible (integrated graphics target)
- [ ] No frame-time spikes when toggling layers
- [ ] No memory growth over ~5 minutes of running
- [ ] Wind particles + cloud shell + trails composite together stay under ~5 ms/frame

## Responsiveness

- [ ] Browser window resize: globe + map both adapt
- [ ] Aspect ratio changes: no stretching
- [ ] Touch devices (optional v1): basic pan + zoom works

## Console hygiene

- [ ] At idle: no console errors, only the [earth-clock] info-level messages
- [ ] No "uncaught promise rejection" anywhere
- [ ] No CORS errors on any data source (NHC is the one risk; should route through /proxy/nhc)
- [ ] No 404s on textures or data files

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
