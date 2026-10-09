# Satellites plan — ISS, Tiangong, and what comes after

Design doc for the v0.5 / v0.6 "people in orbit" work. Status: **Phases 0–1 shipped in v0.5.0 (2026-10-01); Phase 2 (passes) and a Phase 3 Ride-along preview shipped in v0.6.0 (2026-10-02). Ride-along polish next.**
Supersedes the short *ISS position + ground track* entry in [ROADMAP.md](../../ROADMAP.md).

Two headline features:

1. **See them** — the ISS and Tiangong as moving objects on the normal globe and flat
   map, with their orbit and ground track.
2. **Ride along** — an ISS fly-by / POV mode: the camera sits on the station and you
   watch Earth roll past at 7.66 km/s.

Tiangong ships alongside the ISS from day one, and nothing in the design is specific
to either station. A satellite is a catalogue entry plus a propagator. Hubble, the
satellites behind our own data layers, the geostationary belt, and eventually JWST /
DSCOVR (which SGP4 can't handle) should each drop in without touching the layer code.

---

## 1. Architecture

### 1.1 New modules

```
frontend/src/space/
  catalog.ts            SatelliteSpec registry — the only file you edit to add a satellite
  propagator.ts         Propagator interface + factory keyed on spec.propagator.kind
  sgp4Propagator.ts     satellite.js wrapper (TLE / OMM elements)
  ephemerisPropagator.ts  (Phase 4) tabulated state vectors + Hermite interpolation
  frames.ts             TEME → scene frame, scene → geodetic, LVLH basis, Earth-shadow test
  passes.ts             visible-pass predictor for the pinned location (runs in a worker)
frontend/src/data/satelliteLoader.ts   fetch /data/satellites/current.json → DataRegistry
frontend/src/scene/SatelliteLayer.ts   markers, orbit rings, ground tracks for ALL tracked sats
frontend/src/scene/SatelliteCameraPath.ts  implements the existing CameraPath interface
frontend/src/ui/SatellitePanel.ts      info card (+ POV HUD)
services/satellite-service.js          CelesTrak mirror, same pattern as earthquake-service.js
public/data/satellites/fallback.json   bundled snapshot for offline / Wallpaper Engine
```

### 1.2 `SatelliteSpec` — the extensibility seam

```ts
export interface SatelliteSpec {
  id: string;                 // "iss", "tiangong", "hubble" — used in URLs, menu keys, localStorage
  name: string;               // "International Space Station"
  shortName: string;          // "ISS"
  agency: string;             // "NASA/Roscosmos/ESA/JAXA/CSA", "CMSA"
  colour: number;             // marker + track colour
  crewed: boolean;            // gates the "people aboard" line and POV availability
  povCapable: boolean;        // offer "Ride along" in the panel
  propagator:
    | { kind: "sgp4"; noradId: number }            // ISS 25544, Tiangong (Tianhe) 48274, Hubble 20580
    | { kind: "ephemeris"; source: string };        // JWST, DSCOVR — Phase 4
  model?: { url: string; scaleMetres: number };     // glTF for POV / close zoom, lazy-loaded
  silhouette: string;         // SVG path (top-down outline) → glowing sprite marker
  emoji: string;              // kids-mode marker, e.g. "🛰️" — see §2.3
  facts?: string[];           // rotating one-liners for the info card
}
```

Everything else (layer, panel, camera path, pass predictor, deep link) iterates the
catalogue. Adding Hubble should be a ~10-line PR.

### 1.3 Propagator contract

```ts
export interface Propagator {
  /** Position/velocity in the scene's equatorial frame (Earth radii, Earth radii/s),
   *  BEFORE the axial-tilt Z-rotation. null = outside validity window or decayed. */
  stateAt(date: Date, outPos: THREE.Vector3, outVel?: THREE.Vector3): boolean;
  /** Elements epoch; accuracy degrades with |t − epoch|. */
  readonly epoch: Date;
  /** Orbital period in seconds (drives track sampling). */
  readonly periodSec: number;
}
```

### 1.4 Frames — getting the maths to agree with the rest of the scene

- Scene units: **1 unit = 1 Earth radius** (6378.137 km). Frame: +Y north pole, +X vernal
  equinox, −Z = +RA 90° ([solar.ts](../src/astro/solar.ts)).
- SGP4 returns TEME km with +Z north. Mapping: `scene = (x, z, −y) / 6378.137`.
- TEME is an *of-date* frame and `earthRotationY()` is plain GMST, so TEME → scene →
  `earthRotationY` gives Earth-fixed coordinates consistent with coastlines and pins.
  **Use our own `gmst()`, not `satellite.gstime()`**, so a satellite over London is
  exactly over the London pin. Add a debug assertion that they agree to < 1e-6 rad.
- Then apply the same `applyAxisAngle(TILT_Z_AXIS, AXIAL_TILT_RAD)` that `updateAstro()`
  applies to `sunDir` / `moonPos`. Without it we'd reintroduce the ~16° offset bug from v0.1.x.
- Validation: at three reference timestamps, compare our sub-satellite lat/lon with
  CelesTrak / wheretheiss.at. Target < 0.1° (visual) and document the check in
  [qa-checklist.md](qa-checklist.md).

### 1.5 Data pipeline

- **Source:** CelesTrak GP API, OMM JSON (`gp.php?GROUP=stations&FORMAT=json` covers ISS +
  Tiangong + visiting vehicles; `CATNR=` for singles). OMM rather than TLE because
  5-digit catalogue numbers are running out; keep a TLE fallback. satellite.js ≥ 6
  has an OMM parser (`json2satrec`) — confirmed in 7.1. satellite.js 7 also ships optional
  WASM bulk-propagation runtimes that break Vite's bundling; `vite.config.ts` aliases them
  to a stub (`src/space/shims/`). Revisit if we want bulk SGP4 for constellations.
- **Server mirror is required, not optional.** CelesTrak asks clients not to refetch
  faster than the data updates (~2 h) and blocks IPs that do. Every browser hitting it
  directly isn't acceptable. `satellite-service.js` polls every 4 h, writes
  `public/data/satellites/current.json` = `{ generated, source, sats: [ {omm}, … ] }` (an array of
  OMM records; the frontend keys them by `NORAD_CAT_ID`),
  and keeps the last good file on failure. Register in [services/server.js](../../services/server.js)
  like the earthquake service.
- **Bundled fallback** (`fallback.json`) for the offline / Wallpaper Engine / screensaver
  builds. A week-old ISS element set is off by tens of km (reboosts, drag). That's fine
  for a marker, so show it with a "positions approximate" badge.
- **DataRegistry row:** `"CelesTrak GP — ISS epoch 30 Sep 06:12Z"`, `refreshSeconds: 4*3600`.
- **Browser bundle:** add `satellite.js` as a dependency (~50 kB min). Tree-shake to
  `twoline2satrec`/`json2satrec`/`propagate`.

### 1.6 Time-warp and freshness

Satellites aren't live weather, so the existing ±24 h freshness gate in
[Menu.ts](../src/ui/Menu.ts) `apply()` is the wrong rule. Add a second gate:

| \|simulatedTime − epoch\| | Behaviour |
|---|---|
| < 3 days | normal |
| 3–14 days | shown, dimmed, "approximate" tag in panel |
| > 14 days (e.g. `?eclipse=20270802`) | hidden; panel says "orbit unknown this far from today" |

Warp behaviour: at 1× the ISS visibly crawls; at 60× a full orbit takes ~90 s, which is
a nice speed. At "Year in a minute" speeds (~500 000×) it laps Earth several times per
frame, so above ~5 000× hide the marker and ground track and keep only the inertial orbit
ring, which is then the honest picture.

---

## 2. Feature A — satellites in the standard view

### 2.1 Globe (3D)

| Element | Frame | Notes |
|---|---|---|
| **Marker** | inertial (tilted) | **Glowing station silhouette** (decided): a sprite with a constant pixel size, made from `spec.silhouette` drawn to a canvas with an agency-coloured outer glow (additive blend, soft halo ~3× the outline) so it reads against both day and night sides. It rotates to align with the velocity vector. At true scale the ISS (109 m ≈ 1.7×10⁻⁵ R) is invisible, so exaggeration is deliberate here, as with earthquakes. In emoji mode it swaps to `spec.emoji` (§2.3). Hover/click → SatellitePanel. |
| **Orbit ring** | inertial | One period of positions, sampled every ~30 s and refreshed every few sim-minutes. Shows the key idea that **the orbit is fixed and Earth turns underneath it**. The plane precesses ~5°/day (J2), so refresh slowly. |
| **Ground track** | Earth-fixed | Child of the rotated Earth group, like coastlines, lifted to r = 1.002. Past half-orbit faded, next 1–2 orbits bright, ticks every 10 min. |
| **Nadir line** | inertial | Optional thin line from marker to sub-satellite point (matches the sun/moon gnomon "Beams" style). |
| **Earth-shadow dimming** | — | Cylindrical shadow test with `sunDir`: the marker dims and greys when the station is in eclipse. That's ~36 min of every 92 min orbit, and it's why you only see the ISS at dawn and dusk. |
| **Visibility footprint** | Earth-fixed | Optional: circle (~2 200 km radius at 420 km altitude) of places that currently have the station above the horizon. |

Orbit ring and ground track are separate toggles because they teach different things.

### 2.2 Flat map

The classic mission-control display: the sinusoid ground track across the day/night map.
Polyline split at the antimeridian, marker, footprint circle. Reuses the sub-solar
plumbing FlatMap already has.

### 2.3 UI

- **Menu:** new **"Space"** row (decided; next to Astro): `ISS`, `Tiangong`, `Tracks`, `Orbits`.
  Per-sat keys for the headline stations. Later constellations get a group key rather
  than one button per object. Persisted in `orrery.menu.v1` like everything else.
- **Find ISS** action button, alongside the existing "Find moon". It flies the camera
  to look down on the station.
- **SatellitePanel** (click a marker): name, agency, altitude, speed, lat/lon, "over the
  South Pacific" (reuse [geocoder.ts](../src/data/geocoder.ts) / ocean names), sunlit or
  in shadow, next orbital sunrise, crew aboard, elements age, and a **Ride along ▶** button.
- **Emoji marker mode (kids mode hook):** marker drawing goes through a small
  `MarkerStyle` switch (`"silhouette" | "emoji"`), so the satellites layer is ready for
  the site-wide kids / emoji mode proposed in [ROADMAP.md](../../ROADMAP.md). Until that
  exists, `?markers=emoji` flips it for testing.
- **Deep links:** `?sat=iss` (select + find), `?view=iss` (straight into POV). This
  follows the `?eclipse=` pattern at the end of [main.ts](../src/main.ts).

### 2.4 Visible passes from the pinned location

This is what most people want to know: "can I see it tonight?"

- Uses the existing [LocationPanel](../src/ui/LocationPanel.ts) pin. A pass counts as
  visible when elevation > 10°, the **station is sunlit**, and the **observer is in
  twilight/dark** (sun < −6°).
- Search the next 5 days with a 30 s coarse step, then bisect rise/culmination/set.
  Run it in a Web Worker so the UI doesn't stall. Recompute when the pin, the elements,
  or the date changes.
- Output: `Tonight 19:42 · 4 min · max 67° · rises WSW → sets NE · mag −3.2`. Magnitude
  uses the standard intrinsic −1.8 @ 1 000 km with range and phase correction; label it
  as an estimate.
- Nice touches: **"Watch this pass"** jumps simulated time to rise − 1 min and frames the
  sky from the pin's point of view. **Add to calendar** (.ics download) for the next pass.

---

## 3. Feature B — fly-by / POV mode ("Ride along")

### 3.1 Camera

Implement `SatelliteCameraPath` against the existing (unused)
[CameraPath](../src/scene/CameraPath.ts) interface. That interface was written with the
ISS in mind, and this becomes its first real implementation.

- **Frame:** LVLH, with nadir = −r̂, forward = velocity projected onto the local horizontal,
  and right = forward × up.
- **Views (cycle with a button / `V` key):**
  1. **Cupola**: straight down (nadir), the classic Earth-observation photo view.
  2. **Horizon**: forward along the velocity, pitched to put the limb at the top third.
     This shows the thin blue atmosphere line and orbital sunrises.
  3. **Chase**: behind and above the station model, which is in shot.
- **Look-around:** drag rotates yaw/pitch *within* LVLH. It springs back after ~5 s idle,
  following the existing pause/resume contract. Scroll changes FOV (20°–90°), not distance.
- **Entry/exit:** 2–3 s eased flight from the current orbit-camera pose, then a hand-off.
  Esc or ✕ exits back to the pre-entry pose.
- **Must skip** the camera-lock-to-Earth block and `controls.update()` in the animate
  loop while a path is active, or the two will fight.

### 3.2 Rendering risks (the hard part)

| Risk | Why | Mitigation |
|---|---|---|
| **Depth precision** | Camera near = 0.05 R (≈ 320 km!). The chase-cam model needs near ≈ 1e-6 R; far is 30 000 R. | Two-pass render: scene with normal near/far, clear depth, then the station model with its own tight near/far. Alternatively `logarithmicDepthBuffer` (perf hit, affects custom shaders). Two-pass is safer. |
| **Texture resolution** | From 420 km with a 60° FOV you see ~500 km across. An 8k equirect is ~5 km/px, which looks soft. | Accept it for v1 (clouds hide a lot). Stretch: stream GIBS Blue Marble tiles for the visible footprint only. |
| **Layer altitudes** | Clouds, aurora and the atmosphere shell sit at fixed radii tuned for a distant view; from 420 km, wrong radii give obvious parallax or clipping. | Audit every layer's radius. Aurora curtains *should* be seen side-on at ~100–300 km, which works in our favour. |
| **Atmosphere shader** | Tuned for viewing from outside the shell. The camera is now *inside* at the top. | Test the limb look early; may need an "inside" branch for the limb glow. |
| **Station model** | ISS glTF from NASA 3D Resources (public domain), a few MB. Tiangong has no NASA model. | Lazy-load only on POV entry. Tiangong (decided): search for a CC-BY / CC0 model first (Sketchfab etc., check the licence allows redistribution); otherwise build our own low-poly one (Tianhe + Wentian + Mengtian in a T, plus arrays). Solar arrays rotate toward `sunDir`, which is a cheap, lovely detail. |

**Spike results (2026-10-01, branch `feat/iss-ride-along`).** `SatelliteCameraPath` with
cupola + horizon views, `__orrery.rideAlong()`, `?view=iss[-cupola]`, V / Esc. Checked with
headless screenshots stepped around one orbit:

- **Depth precision: solved for cupola/horizon.** Dropping `camera.near` to 0.0005 R (≈ 3 km)
  while riding, far unchanged, shows no z-fighting between globe, clouds (1.003), overlays
  (1.006), coastlines and tracks. The two-pass render is only needed for the chase view.
- **Atmosphere: works as-is.** The risk above was mis-stated: the shell tops out at
  1.018 R (115 km) and the ISS is at ~1.066 R, so the camera is *above* it, not inside. The
  existing Fresnel rim gives a convincing blue limb on the day side. Issues: (a) the limb
  shows straight-segment facets — the atmosphere (96×48) and globe (128×64) spheres are too
  coarse at 400 km range; (b) at dusk the twilight term turns the limb into a flat
  lavender band; (c) the night limb is near-invisible.
- **Layer radii: all below the station** (aurora 1.008, equator/ecliptic rings 1.012, track
  1.0045). But the rings seen edge-on become a thick cyan band across the horizon, so Beams
  should switch off while riding (restore on exit).
- **Texture resolution: as predicted.** Clouds go blocky near the camera; wind trails show
  as streaks on the ocean. Acceptable for a first version; consider hiding trails in ride.
- The station's own ground track running straight ahead to the horizon reads well — keep it.

### 3.3 HUD

Minimal and fading, in the same style as the eclipse badge: altitude, speed, position
("over Kazakhstan"), day/night, **next sunrise in 12 min**, and orbits completed since you
boarded. Optional "overview effect" mode hides all chrome.

### 3.4 What makes it sing

- **Night side:** city lights (existing `nightLights`), lightning flashes (existing
  lightning layer, the famous ISS time-lapse look), and aurora curtains from above.
- **Orbital sunrise:** the terminator racing toward you. 16 per day, and at 60× warp
  you get one every ~45 s.
- **Real stars** behind the limb (skybox). The v1 hi-res skybox is fine; this is a good
  reason to bump the Tycho-2 star skybox up the roadmap.
- **Time-lapse button:** 1× / 30× / 120×, preset to match what astronaut time-lapses look like.
- **Warp clamp (decided):** Ride-along limits time warp to **≤ 300×**. Faster warps set
  from the Clock are clamped on entry and restored on exit, with a brief HUD note.

---

## 4. Niceties and extras (beyond the brief)

Rough value-for-effort order:

1. **"Humans in space right now: 10"**, with 7 on the ISS and 3 on Tiangong, in the
   Clock or Data panel. This lands the overview-effect idea directly. **Decided:** ship
   with a hand-edited `public/data/satellites/crew.json`
   (`{ updated, stations: { iss: [{name, agency, since}], tiangong: [...] } }`) and show
   its age in the Data panel. A live source comes later (open-notify `astros.json` is
   HTTP-only and unmaintained; pick a replacement then).

   **Operating rule (from 2026-10-09):** a weekday source-check watches NASA's current
   Expedition page/blog and CMSA/Shenzhou announcements, and alerts the maintainer only
   when a handover is confirmed or the manifest has become stale. Do not automatically
   rewrite the list from a scraper. On a confirmed change, update the manifest, set its
   `updated` date, cite the primary source in the commit, push to `master`, then fetch
   `/data/satellites/crew.json` from production to prove the deployed roster.
2. **Data-provenance satellites.** Our cloud layers *come from* NOAA-20 (VIIRS),
   GOES-East, Himawari and Meteosat. Show the satellites behind the pixels you're looking at, with
   the geostationary ones parked in their GEO slots. This connects the Data panel to
   the sky, and it's very on-brand.
3. **Transit finder:** when the ISS will cross the sun or moon disc from the pin. It
   combines with the SunDiscPanel and suits eclipse chasers. Stretch.
4. **Visiting vehicles:** Crew Dragon, Soyuz, Shenzhou and Tianzhou during free flight
   (they're in the CelesTrak `stations` group). Show them approaching and merging with
   the station before docking.
5. **Reboost / decay honesty:** element age in the panel. When the ISS is deorbited
   (~2030) the catalogue entry gets `retired` and a memorial fact card. Plan for it now so
   it isn't a crash then.
6. **Ambient / screensaver mode:** `?mode=ambient&view=iss` makes a gorgeous wallpaper,
   and the Wallpaper Engine build gets it for free if the fallback elements are bundled.
7. **Pass notifications** (Notification API) for the pinned location. Later: it needs
   permission UX and a service worker to be useful.

---

## 5. Future satellites — how each fits the design

| Object | Propagator | Notes |
|---|---|---|
| Hubble (20580) | sgp4 | Trivial after v0.5. ~540 km, 28.5° incl. |
| NOAA-20, Terra/Aqua, Landsat, Sentinel | sgp4 | Sun-synchronous polar orbits: the "provenance" set. |
| GOES-East/West, Himawari, Meteosat | sgp4 | GEO at 6.6 R; shows the geostationary belt; pairs with the *Geosync* camera path. |
| Starlink / GPS / all GEO | sgp4, **instanced** | Thousands of objects: `THREE.Points` + propagate in a worker at ~1 Hz, not per frame. Separate "constellation" layer type. |
| JWST (at L2, ~235 R) | **ephemeris** | SGP4 can't do L2. Pull state vectors from JPL Horizons (daily, via the service), then Hermite-interpolate. |
| DSCOVR (at L1) | **ephemeris** | Same path. It unlocks the planned *L1 / EPIC* camera path. |

The `propagator.kind` split exists for JWST and DSCOVR. Getting it right now costs one
interface.

---

## 6. Phasing

| Phase | Scope | Ship as | Effort |
|---|---|---|---|
| **0 — Plumbing** | catalog, satellite-service + fallback, loader, sgp4 propagator, frames, validation vs reference positions | (internal) | ~1 day |
| **1 — See them** | markers, shadow dimming, orbit ring, ground track (globe + flat map), Space menu row, Find ISS, SatellitePanel, `?sat=`, freshness gate, DataPanel row | **v0.5.0** | ~2 days |
| **2 — Passes** | worker pass predictor, LocationPanel section, "Watch this pass", .ics, humans-in-space count | v0.6.0 (with the Ride-along preview) | ~1–1.5 days |
| **3 — Ride along** | SatelliteCameraPath (3 views), two-pass model render, ISS glTF, HUD, layer-radius audit, atmosphere-from-inside, `?view=iss` | **v0.6.0** | ~3–4 days |
| **4 — More sats** | Hubble, provenance sats, GEO belt; then ephemeris propagator for JWST/DSCOVR; constellations | v0.6.x+ | incremental |

Phase 1 is self-contained and shippable. Phase 3 has the rendering risks, so spike
**depth precision + atmosphere-from-inside first** (half a day) before committing to the
rest of it.

---

## 7. Progress

**Phase 0 — landed (2026-09-30).**

- `src/space/`: `catalog.ts` (ISS 25544, Tiangong 48274, with silhouettes + emoji),
  `propagator.ts` (interface, factory, element-age gate), `sgp4Propagator.ts`, `frames.ts`
  (TEME → scene, sub-point, Earth shadow, LVLH), `tracker.ts` (one propagator per entry).
- `src/data/satelliteLoader.ts`: `current.json` → `fallback.json`, plus `crew.json`.
- `services/satellite-service.js`: CelesTrak `stations` group + `SATELLITE_EXTRA_CATNR`
  (default Hubble), every 4 h, skips the startup fetch if the file is fresh, keeps the last
  good file on failure. Started from `server.js`. `current.json` is gitignored.
- `main.ts`: loads elements hourly, "satellites" Data-panel row, console helpers
  `__orrery.satellites()` / `__orrery.satelliteTracker`. No scene objects yet.
- `scripts/verify-satellites.ts` (`npx tsx scripts/verify-satellites.ts [current.json]`):
  OMM ≡ TLE (0.3 m), our `gmst` vs satellite.js `gstime` (≤ 4 m at ISS altitude over
  2020–30), marker exactly over the pin, geodetic/geocentric gap 0.18°, period/altitude/
  speed, and 100% agreement with satellite.js's conical shadow model over two orbits.

**Phase 1 — landed (2026-10-01).**

- `scene/SatelliteLayer.ts`: glowing silhouette sprites (constant screen size, nose turned
  along the on-screen direction of flight), dimmed in Earth's shadow and when elements are
  3–14 days old; inertial orbit rings (one period, rebuilt every 30 sim-s); Earth-fixed
  ground tracks at r = 1.0045 (½ orbit behind, 1½ ahead); flat-map marker + track split at
  the antimeridian. Markers and tracks hide above 5 000× warp; rings stay. Emoji variant via
  `setMarkerStyle("emoji")` / `?markers=emoji`.
- `ui/SatellitePanel.ts`: name, agency, position, altitude, speed, sunlit/shadow with next
  orbital sunrise/sunset, crew (when `crew.json` is filled in), rotating facts, centre-view
  button, disabled "ride along ▶ soon" teaser, element age. Stacks above the Location panel.
- Menu **Space** row: ISS · Tiangong · Tracks · Orbits (off by default) · *Find ISS*.
- Click a marker (globe or flat map) to select it; `?sat=iss` / `?sat=tiangong` deep links.
- Not done from §2: nadir line and visibility footprint (optional), "over …" place names
  only where Nominatim has a name (most of the orbit is ocean).

**v0.5.0 shipped (2026-10-01)** with a committed `fallback.json` and filled-in `crew.json`;
live ISS sub-point checked within 0.06° of wheretheiss.at.

**Phase 2 — landed (2026-10-01).**

- `space/passes.ts`: visible-pass search (≥ 10° up, station sunlit, sun < −6° at the
  observer), 30 s coarse scan + 5 s fine sampling, 10-day window, sub-minute slivers
  dropped, diffuse-sphere magnitude estimate from `spec.stdMagnitude`. Runs on the main
  thread in 1-day slices with cancellation instead of a Web Worker: a worker build pulls in
  satellite.js's WASM runtimes, which Vite can't bundle as a classic worker.
- Verified in `scripts/verify-satellites.ts`: look angles match satellite.js to 1e-5°, and
  over 5 cities × 7 days every brute-force-visible moment falls inside a predicted pass,
  with no spurious passes.
- Station card: "visible from 📍 …" with the next three passes (pin's time zone),
  **▶ watch** (jump to T−1 min at 10×, camera over the pin), **📅** (.ics with a 10-min
  alarm), friendly "none in the next 10 days" and "drop a pin" states.
- Location panel: "🛰️ ISS / Tiangong visible — Tonight 21:42" row for the soonest pass.
- **Who's up there?** (Space row, or the card's "aboard" link): everyone aboard each crewed
  station, days in orbit, station names linking to the official sites (`spec.officialUrl`;
  NASA ISS page and CMSA English site), optional per-person `url` in `crew.json`.
- Marker "backflip" fix: the silhouette is anchored to the projected orbit normal; the
  nose only swaps sides where the on-screen ellipse turns round, instead of spinning.

## 8. Decisions (2026-09-30)

| # | Question | Decision |
|---|---|---|
| 1 | Menu placement | New **Space** row. |
| 2 | Marker style | **Glowing silhouette** per station. Emoji variant ready for a future kids mode. |
| 3 | Warp in Ride-along | Clamp to **≤ 300×**. |
| 4 | Tiangong model | Look for a redistributable CC model online; fall back to home-made low-poly. |
| 5 | Crew count | Yes. Hand-edited `crew.json` now, live source later. |
