# earth-clock — frontend (WebGL)

A real-time 3D view of planet Earth — live weather, clouds, auroras, fires, storms, and atmospheric data rendered on a physically-lit globe, with the moon in its true position, the day/night terminator where it really is, and (eventually) the rest of the solar system and a real star sky around it.

The spiritual successor to [`cambecc/earth`](https://github.com/cambecc/earth) — the same purpose, rebuilt for 2026 in Three.js with GPU particles, modern satellite feeds, and physically-based lighting.

> **Status**: this WebGL frontend is the **default experience** at `earth-clock.onemonkey.org/` (cut over in v0.1.0, 2026-05). The classic D3 + canvas renderer this project descends from (offering eight cartographic projections — orthographic globe plus seven flat ones) is preserved at [`/classic/`](https://earth-clock.onemonkey.org/classic/) as an archival fallback. See [PLAN.md](../PLAN.md) (live, top level) and [docs/PLAN-archive.md](docs/PLAN-archive.md) (full per-layer history) for the engineering tracker.
>
> The directory used to be called `orrery/` — that was the codename during the rebuild. The runtime global `window.__orrery` and the localStorage key `orrery.menu.v1` are stable API surfaces and intentionally keep the codename.

**Live site**: <https://earth-clock.onemonkey.org/>
**Live development plan**: [PLAN.md](PLAN.md) — current status of every layer
**Credits**: [CREDITS.md](CREDITS.md) — every external asset, formula, library, and data feed

---

## Vision

The original [`earth.nullschool.net`](https://earth.nullschool.net/) by Cameron Beccario showed that a single, beautiful, living visualisation of the planet's surface wind could be more useful — and more readable — than any number of static weather maps. That project's 2D wind particles became its signature.

Twelve years on, the constraints that shaped it have changed:

- WebGL2 is everywhere; we can run **GPU particle simulations** instead of per-pixel CPU advection.
- NASA, NOAA and ESA publish **near-real-time global products** (cloud, aerosol, aurora, fire) over CORS-clean APIs.
- We can ship a **physically-lit, axially-tilted globe with a real moon** in the browser at 60 fps.
- Real-time, GPU-driven AI weather (GraphCast, ECMWF AIFS) is becoming directly fetchable.

**earth-clock** asks: what would `earth.nullschool.net` look like if you started today?

What you should see at any moment is exactly what is happening to Earth right now:

- Sun where the sun is. Day/night terminator where it really is. Earth tilted on its actual axis.
- Moon at its true sub-lunar position, distance and phase.
- Yesterday's true-color cloud mosaic over the land.
- Live wind streaming across the surface as GPU particles.
- The aurora oval glowing on the night side.
- Active fires flickering across Africa, Australia, Siberia.
- A real-star sky behind it (Tycho-2), and eventually the rest of the planets in their actual ecliptic positions.

That's the target. The repo's [PLAN.md](PLAN.md) is the live tracker of how far along we are.

---

## Design philosophy

The deeper "why" behind earth-clock is laid out in [*Eclipses, equinoxes, and everyday awe: telling the time on Spaceship Earth*](https://onemonkey.org/eclipses-equinoxes-and-everyday-awe-telling-the-time-on-spaceship-earth/) (Caspar Addyman, onemonkey.org). This frontend inherits that thesis verbatim — every principle below maps to a concrete implementation rule.

### Awe as daily practice, not rare astonishment

> *"Knowledge alone is not our firm place to stand. We need experiences that connect us personally to the cosmic."*

The eclipse moment — *"the sky dims … I was on a small sphere moving through the vastness of space"* — is the target sensation. The job of the clock is to make that perspective sustainable: a 30-second glance in the morning and evening, 10 seconds at midday, repeated until *"planetary motion stops being an idea you understand and becomes something you notice."*

→ **Implementation rule**: earth-clock is a thing you *leave running*. It must look right at a glance, every glance. No chrome, no startup animation, no popups, no chartjunk. The globe is always the protagonist.

### Spaceship Earth — a shared vessel, a small crew ritual

> *"We live on a shared vessel, with finite resources and a common fate."* (after Buckminster Fuller)

The viewer is crew, not audience. The display is the bridge view of the ship we're all on.

→ **Implementation rule**: the camera defaults to a full-planet orthographic view, not a local zoom. Weather and events are shown as planetary patterns — not as a UI for "your area". Phase 3's solar system and Tycho-2 sky exist for the same reason: to keep visible that this vessel is *somewhere*, surrounded by *something*.

### Empathetic time

> *"Your morning is someone else's midnight; your winter is someone else's summer; your calm sky is someone else's storm. It makes time empathetic."*

The day/night terminator is the central metaphor. Every viewer should see, instantly, that their local time is one slice of a continuous global moment.

→ **Implementation rule**: the terminator is rendered with real GMST + real sub-solar declination, against a real axial tilt — not a stylised stripe. The day/night boundary breathes with the seasons by physical correctness, not animation tricks. If our maths drifts, the metaphor breaks.

### Sun's illusory sweep, Earth's real turn

> *"The illusory sweep of the sun across the sky [resolves into] the reality of the turning of the earth."*

A heliocentric, Earth-frame inversion: the sun is fixed in the world frame (where the sun-Earth line points to is what's real), and the Earth pivots underneath. The viewer's intuitive geocentrism — sun moves, Earth still — is gently inverted.

→ **Implementation rule**: the directional light's world-space position is the actual sun direction at *now*, not a camera-relative light. The Earth mesh rotates against it. Watching the day-night terminator march across the texture is the whole point — never light the globe with a fake "headlight" that hides Earth's spin.

### Seasonal legibility

> *"The terminator breathes with the seasons, lingering over one hemisphere and then the other, stretching and narrowing as the year arcs on."*

Tilt is not decoration; it's the reason the terminator changes shape through the year.

→ **Implementation rule**: the 23.44° axial tilt lives in the scene graph for real — see `Globe.ts`. Every layer that rotates with Earth (coastlines, clouds, fires, particles) inherits the same tilted parent group. The pole points where it should year-round.

### Soft, continuous awareness — the antidote to doomscrolling

The aim is the opposite of a notification feed: *"soft, continuous awareness"* that *"locates urgency in a whole."* A wildfire in Siberia or a typhoon in the Philippines should appear as part of the planetary fabric, not as a red banner.

→ **Implementation rule**: live data — fires, aurora, wind, clouds — is rendered as *texture*, not as widgets. The same visual language (additive points, glowing shaders, world-frame placement) is used across every layer so they read as one continuous system. No tooltips by default. No pop-ups. The layer-toggle HUD (Phase A) is minimal and dismissible.

### Weather as texture, not data

> The clock shows *"the world's mood"* — and *"the human constellation"* alongside natural systems.

Weather data is rendered to be *felt*, not read. A storm is a swirl in the wind particles, not a number.

→ **Implementation rule**: every shader gets tuned for emotional legibility — the cloud luminance threshold, aurora's quadratic opacity, fire's flicker frequency. Numbers (Kp, FRP, hPa) exist in the data but never on screen.

### Minimal friction, infinite runtime

The ritual works because it costs nothing. So must the runtime.

→ **Implementation rule**: 16 ms/frame budget on integrated graphics. No login, no permissions, no analytics popups, no cookie banner. Anyone with a browser tab open should be able to lean over and immediately see where the sun is, where the moon is, where the wind is going.

### What we are explicitly *not* building

- **A weather app.** Local conditions, forecasts-for-here, push notifications: all out of scope.
- **A decorative clock.** No abstract time, no neon, no skeuomorphic dials. Time is a physical fact of Earth's orientation in space, and that's how we render it.
- **A dashboard.** No KPIs. No "alerts". No engagement metrics.
- **Something you check.** Something you *live alongside*.

> *"Make awe durable: turn a rare astonishment into a daily practice, and a daily practice into care."*

That sentence is the spec.

---

## Lineage

```
cambecc/earth          (2013, Cameron Beccario — 2D wind globe, Canvas)
        ↓
infantlab/earth-clock  (2024, Caspar Addyman — adds clock + day/night overlay)
        ↓
infantlab/earth-clock  (2026, this repo's `frontend/` — 3D rebuild, WebGL, GPU
                        particles, full Earth system. Codenamed "orrery" during
                        the rebuild; now the default site since v0.1.0 cutover.
                        Classic moved to /classic/.)
```

The rebuild began life as a side-project to fix the jittery rotating-globe screensaver mode in the classic project, then grew into what it is now. The classic `earth-clock` is preserved at `/classic/`; the rebuild ships at `/` since v0.1.0.

The visual identity (orthographic globe, blue/aurora palette, wind particles) is intentionally faithful to the original earth project. The astronomical formulae (Schlyter / NOAA SPA) are the same family used in `cambecc/earth`, ported to TypeScript. See [CREDITS.md](CREDITS.md) for the full lineage and licences.

---

## What's running today

Each item below is rendered live in the current build.

| Layer | Source | Refresh | Notes |
|---|---|---|---|
| Day/night globe | Solar System Scope textures (day + night) | static | Phong-shaded, normal + specular maps, additive night-lights overlay masked by sun direction |
| Atmospheric rim | procedural shader | static | Thin glow around the limb, sun-direction-aware |
| Moon | NASA/USGS lunar texture | per-frame | Positioned by Schlyter geocentric ecliptics → equatorial → world. Real distance in Earth radii. |
| Coastlines | Natural Earth 50 m | static | TopoJSON, decoded to `THREE.LineSegments` on a unit sphere |
| Wind particles | NOAA GFS surface, via earth-clock's `weather-service.js` | 6 h | **65 536 GPU particles**, advected by `GPUComputationRenderer`, additive ping-pong trails accumulator |
| Cloud composite | NASA GIBS VIIRS NOAA-20 True-Color | daily | 8 WMTS tiles → single 2048×1024 canvas texture; luminance-threshold shader extracts clouds, masked to the day side |
| Aurora oval | NOAA SWPC Ovation (`ovation_aurora_latest.json`) | 5 min | ~65 k probability points, additive cloud at r=1.008, hue 0–100 % → green→cyan→magenta, masked to the night side |
| **Active fires** | NASA FIRMS VIIRS S-NPP NRT (24 h area CSV) | hourly | Flickering additive point cloud; FRP → sqrt-compressed size + red→orange→white-yellow ramp |
| Sky background | procedural starfield | static | Placeholder until Tycho-2 / Deepstar cubemap (Phase C) |

Time is real wall-clock by default. For development:

```js
window.__orreryTimeWarp = 3600;   // 1 real second = 1 simulated hour
```

The handle `window.__orrery` exposes every live layer for tweaking from the JS console:

```js
__orrery.particles.setSpeed(0.05)
__orrery.particles.setPointSize(3)
__orrery.particles.setAlpha(0.4)
__orrery.trails.setFade(0.99)            // longer streaks
__orrery.coastlines.setOpacity(0.6)
__orrery.clouds.setThreshold(0.45)       // looser cloud detection
__orrery.aurora.setOpacity(0.8)
__orrery.fires.setSizeBoost(1.5)
```

---

## Roadmap

Full status (with implementation notes per layer) lives in [PLAN.md](PLAN.md). Summary:

### Phase A — browser-fetchable layers (no server infra)

Anything reachable directly from the browser without auth or binary decoding. Each is a small TypeScript module + a Three.js scene component, fetched on a timer, no proxy required. **Mostly done** — globe, clouds, wind, aurora, fires. Remaining: hurricanes (NHC), additional GIBS overlays (NO₂, AOD, sea ice), Blitzortung lightning, layer-toggle HUD.

### Phase B — needs server-side GRIB2 decode

A single small Cloudflare Worker / Vercel Edge Function running `eccodes-wasm` unlocks the entire GRIB2 ecosystem from the browser:

- Multi-altitude GFS wind layers (250 / 500 / 700 / 850 / 925 hPa)
- Temperature, relative humidity, MSLP, total precipitable water overlays
- ECMWF AIFS and Google GraphCast outputs (AI-driven weather forecasting)
- OSCAR ocean surface currents (Earthdata auth → server-only)

Once the worker exists, everything downstream is just colour-mapped textures.

### Phase C — stretch goals

- 10-minute stitched cloud composite (GOES-East + Himawari + Meteosat) replaces the daily VIIRS mosaic
- Kp index ↦ aurora intensity scaling
- **Real star skybox** — Tycho-2 (~2.5 M stars) or NASA Deepstar cubemap
- **Full solar system** — planets and their major moons at real ecliptic positions
- Wallpaper Engine output mode (bundled-data variant of the data source, runs offline)

---

## Architecture

```
frontend/
├── src/
│   ├── main.ts                   ← scene assembly, animation loop, console handle
│   ├── astro/
│   │   ├── solar.ts              ← sub-solar position, GMST, sun direction in world frame
│   │   └── lunar.ts              ← Schlyter simplified lunar geocentric position
│   ├── data/
│   │   ├── DataSource.ts         ← abstract live-vs-bundled data interface
│   │   ├── auroraLoader.ts       ← NOAA SWPC Ovation JSON
│   │   ├── firmsLoader.ts        ← NASA FIRMS Area CSV
│   │   ├── gibsLoader.ts         ← NASA GIBS WMTS → equirectangular canvas texture
│   │   └── windToTexture.ts      ← GFS u/v grid → RG-channel float texture
│   └── scene/
│       ├── Globe.ts              ← day Phong + additive night-lights overlay
│       ├── Atmosphere.ts         ← rim-glow shader
│       ├── Moon.ts               ← textured sphere positioned per Schlyter
│       ├── Sky.ts                ← procedural starfield (Phase C: real cubemap)
│       ├── Camera.ts             ← OrbitControls + perspective camera
│       ├── Coastlines.ts         ← Natural Earth TopoJSON → LineSegments
│       ├── CloudLayer.ts         ← translucent shell, luminance-threshold shader
│       ├── AuroraLayer.ts        ← additive point cloud, night-side masked
│       ├── FireLayer.ts          ← flickering point cloud (FRP-driven)
│       ├── Particles.ts          ← GPUComputationRenderer wind advection
│       └── Trails.ts             ← additive ping-pong accumulator
└── public/textures/              ← Earth day/night/normal/specular, Moon
```

### Render pipeline (per frame)

1. **Astro update** — compute sun direction, moon position, Earth's GMST spin angle. Push these as uniforms to every layer that needs them.
2. **GPU wind advection** — `GPUComputationRenderer` integrates 65 536 particle positions one timestep, reading u/v from the wind texture and respawning particles that have lived too long or drifted off-grid.
3. **Main scene render** — globe (day surface + additive night lights), atmosphere, moon, sky, coastlines, clouds, aurora, fires. Depth-writing layers go first.
4. **Trails composite** — render the particles as `THREE.Points` into the trails framebuffer, which decays by a fade factor each frame for the streak effect, then composite over the main image.

Particles **do not** write into the main depth buffer; they live in their own additive accumulator. This is why they survive across frames as long streaks rather than single dots.

### Tech stack

- **Three.js 0.170+** — scene graph, WebGL renderer, GPUComputationRenderer
- **Vite 5** — dev server, bundler
- **TypeScript 5.6** — strict mode
- No frameworks, no UI library. The whole UI is a single canvas element plus the JS console.

---

## Maths & physics

The astronomical formulae in `src/astro/` are low-precision but plenty for visual fidelity. References live in [CREDITS.md](CREDITS.md).

### Days since J2000

All formulae use days since the J2000.0 epoch (2000-01-01 12:00 UTC) as the time variable:

```
n = (date.getTime() - J2000) / 86400000
```

### Sub-solar position (≈0.01° accuracy)

```
L      = 280.460° + 0.9856474° · n          (mean ecliptic longitude)
g      = 357.528° + 0.9856003° · n          (mean anomaly)
λ      = L + 1.915° · sin g + 0.020° · sin 2g   (true ecliptic longitude)
ε      = 23.439° − 4×10⁻⁷ · n               (obliquity of the ecliptic)
α      = atan2(cos ε · sin λ, cos λ)       (right ascension)
δ      = asin(sin ε · sin λ)               (declination)
```

The unit vector pointing from Earth's centre toward the sun, in the world frame, is then:

```
sun = ( cos δ · cos α,  sin δ,  −cos δ · sin α )
```

### Greenwich Mean Sidereal Time

Earth's orientation relative to the J2000 inertial frame is set by the GMST formula:

```
hours_gmst = 18.697374558 + 24.06570982441908 · n   (mod 24)
θ_gmst     = hours_gmst · π / 12
```

The Earth mesh is rotated by `−θ_gmst` around its local Y axis (negative because the texture's λ=0 longitude starts at +X and Earth turns eastward).

### Lunar position (≈1–2° accuracy)

`src/astro/lunar.ts` uses Schlyter's simplified orbital elements (N, i, ω, a, e, M) propagated linearly in days, solves Kepler's equation with two Newton iterations, and projects orbital-plane coordinates → geocentric ecliptic → geocentric equatorial via the obliquity rotation. The moon's distance is in **Earth radii** (≈60.27 mean), so its scene-space position is in the same units as the globe's radius (=1).

### Equirectangular ↔ sphere

Every flat (lon, lat) data source — coastlines, fires, aurora, GIBS tiles — maps to the unit sphere via:

```
x =  cos lat · cos lon
y =  sin lat
z = -cos lat · sin lon
```

This matches Three.js's `SphereGeometry` default UV winding: Greenwich (λ=0) sits at **+X**, and east goes counter-clockwise viewed from above (+90°E → −Z, +180° → −X, −90°W → +Z). All vector layers (Coastlines, FireLayer, HurricaneLayer, AuroraLayer) use this convention so they superimpose exactly on the textured Earth.

### Axial tilt

Every layer that should spin with Earth lives inside a `THREE.Group` rotated by 23.44° around the world Z axis. Daily spin is applied to the inner mesh around its local Y axis. This keeps the tilt fixed in world space (Earth's pole points to Polaris regardless of date) while the surface rotates underneath.

### Day/night mask

All night/day shaders compute `N·L` between the world-space surface normal and the sun direction, then `smoothstep(±ε, ∓ε, N·L)` to fade smoothly across the terminator (ε ≈ 0.05–0.10). The aurora layer uses the *negated* mask — auroras glow on the night side.

### Particle advection (GPU)

`Particles.ts` runs a fragment shader on a `Nₚ × 1` texture of particle (x, y, age) where each fragment is one particle:

1. Sample the wind texture at the particle's current (lon, lat).
2. Integrate `pos += wind · dt · speed`.
3. Increment age; respawn at a random new (lon, lat) when age exceeds a threshold or wind magnitude is below floor.

Particles are then read back into a `BufferGeometry` and rendered as `THREE.Points` into the trails accumulator. With 65 k particles and a typical dt of 16 ms, the entire integration step costs <0.5 ms on integrated graphics.

### Cloud luminance threshold

Until we have a proper cloud-mask product (Phase A: GIBS `MODIS_Terra_Cloud_Mask`, Phase C: stitched geostationary), the cloud shader extracts clouds from true-color VIIRS imagery by BT.709 luminance:

```glsl
luma = dot(rgb, vec3(0.2126, 0.7152, 0.0722));
α    = smoothstep(threshold, threshold + softness, luma) * dayMask;
```

Clouds are the brightest pixels in true-color RGB; ocean is dark blue, land is darker greens/browns. This is the cheap "walk" before the proper "run".

---

## Coordinate conventions

We use a single inertial world frame for sun, moon, and stars:

| Axis | Direction |
|------|-----------|
| +Y | celestial north (Earth's rotation axis points roughly here) |
| +X | vernal-equinox direction (J2000) |
| −Z | celestial east |

Earth's frame is this rotated by axial tilt around Z, then by `−GMST` around its (now-tilted) local Y. The sun-direction uniform is in the inertial frame; per-vertex shaders re-compute the world-space normal via `mat3(modelMatrix) * normal` to compare against it.

---

## Performance budget

The whole scene targets **16 ms / frame on integrated graphics** (60 fps without a dGPU).

| Cost | Approx |
|---|---|
| Globe (day + night overlay) | <1 ms |
| Atmosphere rim | <0.1 ms |
| Coastlines (Natural Earth 50 m) | <0.5 ms |
| Cloud shell | <0.5 ms |
| Aurora point cloud (~65 k) | <0.5 ms |
| Fire point cloud (~5–30 k typical) | <0.3 ms |
| GPU wind step + Points render + Trails composite | ~2–3 ms |
| **Total typical** | **~5 ms** |

Memory: ~25 MB of textures (Earth maps + Moon + GIBS cloud canvas + wind grid + Tycho-2 will add another ~10 MB).

---

## Run

```
npm install
npm run dev       # http://localhost:5173
npm run build     # → ../public/frontend (sub-path build)
# BUILD_AS_ROOT=1 npm run build → ../public (replaces the live site at /)
npm run preview   # serve the production build
```

For data layers that need API keys, copy `.env.local.example` (if present) to `.env.local` and fill in:

```
VITE_FIRMS_MAP_KEY=…   # https://firms.modaps.eosdis.nasa.gov/api/map_key/ (free, instant)
```

Vite exposes any `VITE_*` variable on `import.meta.env`. **`.env.local` is gitignored** — never commit your key.

### Upstream proxies

One data source (NHC tropical cyclones) doesn't ship CORS headers, so it can't be fetched directly from the browser. Dev routes through Vite's built-in proxy at `/proxy/nhc/*` (configured in [vite.config.ts](vite.config.ts)); production routes the same path through an NGINX rule on the CapRover host. Application code uses the same URL in both cases. Full write-up + deploy steps: [docs/proxy.md](docs/proxy.md).

**Already done as of v0.1.0**: production runs the `BUILD_AS_ROOT=1` build target, which writes directly to `../public` — the WebGL frontend serves at `/`, classic moved to `../public/classic/`. See [docs/cutover.md](docs/cutover.md) for the historical procedure.

---

## Projections

The frontend currently supports two projections: **orthographic globe** (the default, 3D camera looking at a sphere) and **equirectangular** (planar lon/lat map). The other six classic projections (azimuthal equidistant, conic equidistant, stereographic, Waterman butterfly, Winkel tripel, Atlantis) are on the roadmap — see the top-level [PLAN.md](../PLAN.md). The orthographic globe with a movable camera supersedes most of them in practice, but the historical classic set is worth restoring for parity.

---

## Contributing notes

- **Every external source must go in [CREDITS.md](CREDITS.md) in the same change** that introduces it — textures, formulae from a paper, library, data feed.
- See [AGENTS.md](AGENTS.md) for Claude-specific conventions and scope decisions already made.
- The live engineering tracker is [PLAN.md](PLAN.md). Each session should update its status markers.
