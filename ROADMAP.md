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

Current shipped version: **v0.4.0** (2026-07-25). See [CHANGELOG.md](CHANGELOG.md).

---

## v0.4.1 — Eclipse Ready (remaining)

**Deadline-driven.** The 2026-08-12 Spain total solar eclipse is the project's
headline event and the site's largest traffic moment to date; a partial lunar
eclipse follows on 2026-08-28. This track is scoped purely around being ready for
those two dates. Flat Map v2 — once v0.4.0 — moved to v0.5.0, because new
projections do nothing for eclipse day.

v0.4.0 shipped the first two items: the **ECLIPSE badge** and **eclipse on the
flat map**. See [CHANGELOG.md](CHANGELOG.md) for both. What's left, in priority
order:

### ⬜ Verify the 2026 path extent against NASA

Not a rendering bug, but the flat map makes it obvious in a way the globe never
did: the catalogued 2026 path in [nasaEclipsePaths.ts](frontend/src/data/nasaEclipsePaths.ts)
runs from (78°N, 105°E) to (22°N, 25°E) — i.e. it continues past Spain across
Algeria and ends over northeast Africa. Real totality for this eclipse ends at
sunset around Spain and the Balearics, so the last two waypoints look like an
extrapolation rather than an umbral track.

Worth checking the waypoints against NASA GSFC's published U1–U4 circumstances
before the day, since the headline event's own path line is the last thing that
should be wrong. Flagged rather than fixed here: correcting it means substituting
real published coordinates, not adjusted guesses.

### ⬜ Mobile + Safari QA pass — the biggest open risk

Browser-matrix QA is still Chrome/Edge only (see Infrastructure). Eclipse-day
traffic will skew hard toward mobile Safari over Spain and Iceland — the exact
configuration never tested. Not the biggest *feature* gap, but the biggest
chance of something being outright broken for a large share of visitors.

Minimum: iOS Safari and macOS Safari on the globe, the eclipse layer, the
SunDiscPanel inset, and the badge; plus Firefox desktop. Watch for WebGL
precision differences in the shader-driven layers and `env(safe-area-inset-*)`
handling around the new badge and the mobile bottom sheet.

### ⬜ Eclipse-day load resilience

The Hetzner network packet loss (ticket 2026072103043849) is still open, and a
traffic spike stress-tests [resilientTexture.ts](frontend/src/scene/resilientTexture.ts)
for real. Decide *before* the day whether the textures and `public/data/` should
sit behind a CDN rather than being served directly by CapRover — a fix attempted
on 12 August is a fix that arrives too late.

### ⬜ Shareable eclipse deep link

`?eclipse=20260812` to load straight into a given event — the thing people
actually paste into group chats. `eclipseById` / `lunarEclipseById` already exist,
so this is URL parsing plus a call into the existing jump handlers.

### ⬜ Live dress rehearsal

End-to-end pass at real wall-clock time (not warped) confirming the umbra,
path-of-totality, SunDiscPanel and badge all behave during the actual event
window. The path gate is time-window based ([main.ts](frontend/src/main.ts)), so
this should already work — but "should" is not "verified", and there is no second
attempt on the day.

---

## v0.5.0 — Flat Map v2

Comprehensive flat-map feature parity and new projections. Items in priority order.

### ⬜ Phase B weather overlays (MSLP / Temp / RH / TPW / TCW)

Extend [weather-service.js](services/weather-service.js) to emit MSLP / Temp / RH / TPW /
TCW companion JSON alongside the existing wind file. Restores classic
earth-clock's full overlay set. ~1–2 days server-side, then wire into the
existing [OverlayLayer](frontend/src/scene/OverlayLayer.ts).

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
| OSCAR ocean surface currents (Earthdata) | Backend already exists ([`oscar-service.js`](services/oscar-service.js) mirrors pre-generated OSCAR JSON layers, currently feeding only the classic `/classic/` renderer — see Infrastructure table). Only the WebGL frontend `OceanCurrentLayer` + menu entry are outstanding. |

---

## v0.6.0 — Lunar Eclipse v2 + Mobile Experience v2

Deeper treatment of the two areas where MVP shipped but richer experience
is clearly possible.

### ⬜ Lunar eclipses — v2

- **MoonDiscPanel analogue** to the [SunDiscPanel](frontend/src/ui/SunDiscPanel.ts) — small inset showing the moon
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

## v0.7.0 and beyond — Stretch goals

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
- Kp index → aurora intensity scaling (Kp already in [DataPanel](frontend/src/ui/DataPanel.ts); wire to [AuroraLayer](frontend/src/scene/AuroraLayer.ts) opacity) ⬜
- Real star skybox (Tycho-2 / Deepstar ≥100k stars) ⬜
- Full solar system (planets, moons, ecliptic plane) ⬜
- ISS position + track ⬜

### Communications

#### ⬜ "Upgrading earth-clock to WebGL" blog post

- Audience: existing users + WebGL / data-viz / open-source weather community.
- Beats: why rebuild (mobile + Three.js), what's new, what's preserved, what's coming.
- Hero moment: the 2026-08-12 Spain eclipse.

---

## vX.0 — For Kids

A dedicated pass on things kids would love — playful, low-stakes additions on
top of the scientifically-literal default view, in the same spirit as the
existing `/about/kids/` page. Not scoped or sequenced yet; capturing ideas as
they come up.

- ⬜ **Emoji hazard layer (Easter egg)** — a toggle that swaps the shader
  markers for 🌋 (volcanoes), 〰️/💥 (earthquakes), 🌀 (hurricanes), and 🔥
  (fires) rendered as `CanvasTexture` billboards, same plumbing already used
  for the timezone pill labels in [`TimezoneLayer.ts`](frontend/src/scene/TimezoneLayer.ts). Prompted by a v0.3.0
  conversation about the Geology layer markers.
- ⬜ **Fun facts on click** — tapping a volcano/earthquake/hurricane marker
  pops a kid-pitched one-liner ("Krakatoa's 1883 eruption was heard 4,800 km
  away!") instead of (or alongside) the technical data panel.
- ⬜ **Sound effects** — a rumble on a big earthquake, a whoosh on hurricane
  spin-up, satisfying and toy-like rather than alarming.
- ⬜ **"Spin the globe" mode** — a big friendly button that flings the Earth
  to a random location and zooms in, treasure-hunt style.

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

## Design think — exaggerating subtle live events

Prompted by v0.3.0: earthquakes are a good example of a layer that's *usually*
almost invisible. Most weeks the globe shows a scatter of M1–3 dots nobody
would notice; the one M6+ event that's actually newsworthy is a single bright
spot among thousands. The same tension already exists for aurora (invisible
below Kp 3 — see the QA checklist's own "may be invisible (correct
behaviour)" note) and, to a lesser extent, hurricanes off-season or early in
a storm's lifecycle. Real events have a huge dynamic range; rendering that
range proportionally means the common case is "nothing to see here," which
fights the app's actual job — being a globe worth looking at.

**The tension:** scientifically honest (proportional to real magnitude) vs.
worth looking at (something's usually happening somewhere). Both matter —
this isn't purely a data-viz toy, and overselling routine activity as
dramatic would cheapen the moments that really are dramatic.

Rough candidate approaches, not mutually exclusive:

1. **A single global "Exaggerate" toggle** — one View-row switch that scales
   up size/brightness/pulse-amplitude across every subtle-event layer at
   once (earthquakes, aurora, lightning, hurricanes). Simplest mental model,
   one on/off, but not tunable per layer.
2. **Reuse the Wind row's intensity-picker pattern** — subtle/standard/bold
   mutex, already established UX language (see `WIND_KEYS` in [Menu.ts](frontend/src/ui/Menu.ts)).
   More consistent with existing conventions, more menu surface.
3. **Always-on compression, no toggle** — push magnitude/intensity mapping
   further toward a visible floor (partly already true: [FireLayer](frontend/src/scene/FireLayer.ts) compresses
   FRP by `sqrt`, [EarthquakeLayer](frontend/src/scene/EarthquakeLayer.ts)'s depth/magnitude shading) so nothing is
   ever fully absent, and let real intensity show through via colour/pulse
   rate rather than presence vs. absence. Zero new UI, but risks the globe
   always looking "eventful" even on a quiet day — loses the honesty of
   genuinely calm periods, which is itself part of the story.
4. **A curated "storyteller" preset**, bundled with the existing `?mode=ambient`
   idea (v0.7.0 screensaver/wallpaper stretch goal) — visual exaggeration
   lives in a separate cinematic mode, keeping the default view scientifically
   literal.

Leaning toward (1) as a first cut — cheapest to build, easiest to explain,
and doesn't compromise the default "honest" view — with the Kp→aurora
intensity item already on the stretch-goal list folding into whichever
approach lands. Revisit once earthquakes have been live long enough to know
whether "usually nothing dramatic" is actually a problem in practice, or
whether the quiet days are part of what makes the dramatic ones land.

---

## Infrastructure

| Item | Status | Notes |
|------|--------|-------|
| [`frontend/.env.local`](frontend/.env.local) (`VITE_FIRMS_MAP_KEY`) | ✅ | Excluded from git. |
| Dev server | ✅ | `npm run dev` (`:8080`) or `cd frontend && npm run dev` (`:5173` Vite). |
| Live site | ✅ | `earth-clock.onemonkey.org` (CapRover; see [DEPLOYMENT.md](DEPLOYMENT.md)). |
| Production CORS proxy (NHC) | ✅ | NGINX `location /proxy/nhc/` in CapRover override. |
| Wind JSON | ✅ | [`public/data/weather/current/current-wind-surface-level-gfs-1.0.json`](public/data/weather/current/current-wind-surface-level-gfs-1.0.json), refreshed 6 h. |
| Coastlines | ✅ | [`public/data/earth-topo.json`](public/data/earth-topo.json), Natural Earth 50 m. |
| WebGL cutover | ✅ | v0.1.0 — WebGL at `/`, classic at `/classic/`. |
| Docs / about page | 🔄 | `/about/` panel landed; broader web docs still TODO. |
| LocationIQ geocoder | ✅ | API key + NGINX block active; use `format=json` (not `jsonv2`) — LocationIQ doesn't support Nominatim's extended format. |
| Browser-matrix QA | ⬜ | Tested Chrome / Edge only. Verify Safari, Firefox, mobile. |
| OSCAR ocean currents service | 🔄 | [`oscar-service.js`](services/oscar-service.js) runs in production, mirrors OSCAR JSON layers into `public/data/oscar/`. Only feeds the classic `/classic/` renderer today — see v0.5.0 Phase B. |
| Earthquake feed service | ✅ | [`earthquake-service.js`](services/earthquake-service.js) polls USGS `all_week.geojson` every 15 min into [`public/data/earthquakes/current.json`](public/data/earthquakes/current.json). Feeds the new WebGL [`EarthquakeLayer`](frontend/src/scene/EarthquakeLayer.ts). |
