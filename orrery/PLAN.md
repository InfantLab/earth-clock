# Orrery — Live Development Plan

**Vision**: A real-time 3D view of planet Earth — live weather, auroras, fires, storms, and atmospheric data rendered on a physically-lit globe. The spiritual successor to cambecc/earth, rebuilt in Three.js with GPU particles and modern satellite data.

> Keep this file up to date. Every session should end by updating status markers here.

---

## Status Key
- ✅ Done & committed
- 🔄 In progress / partially done
- ⬜ Not started
- ❌ Blocked (reason noted)

---

## Phase A — Browser-fetchable layers (no server infra)

### ✅ Foundation (committed 4eefbaf, 2026-05-11)
- Textured globe (day/night, Phong shader, axial tilt)
- Atmosphere rim glow
- Moon (Schlyter position, textured)
- Coastlines (Natural Earth 50m TopoJSON)
- **GPU wind particles** — 65 536 particles, advection via GPUComputationRenderer, live GFS surface wind
- Particle trails (additive ping-pong accumulator)
- **Live cloud composite** — NASA GIBS VIIRS NOAA-20 TrueColor, luminance-threshold shader, day/night fade
- Sky background
- Console API (`window.__orrery`, `__orreryTimeWarp`)

### ✅ Aurora oval  ← done, needs visual QA on live site
- **Source**: `https://services.swpc.noaa.gov/json/ovation_aurora_latest.json`
  - CORS-clean, no auth, ~900 KB, updates every 5 min
  - Structure: `{ `Forecast Time`, coordinates: [[lon, lat, aurora_probability], ...] }` (~65 k points, probability 0–100)
- **Implementation**:
  - `src/data/auroraLoader.ts` — fetch + parse JSON, return `Float32Array` of (lon, lat, prob) triples
  - `src/scene/AuroraLayer.ts` — populate a `BufferGeometry` from the grid, render as an additive point cloud / thin dome at r=1.008 above surface
  - Shader: `prob` → hue sweep (green→cyan→purple), opacity ∝ prob², visible on night side only (same ndotl mask as clouds but inverted — auroras are on the dark side)
  - Refresh every 5 min (setInterval)
  - `setRotationY` NOT needed — aurora oval is geomagnetically fixed, not Earth-rotation fixed
- **Wire-in**: add `aurora` to `window.__orrery`, update `updateAstro()` to pass `sunDir` for night-side masking

### ⬜ Active fires  ← **NEXT**
- **Source**: NASA FIRMS Area API — `https://firms.modaps.eosdis.nasa.gov/api/area/csv/{KEY}/VIIRS_SNPP_NRT/world/1`
  - Needs free MAP_KEY: stored in `orrery/.env.local` as `VITE_FIRMS_MAP_KEY`
  - Returns CSV: `latitude,longitude,bright_ti4,frp,...` — one row per active fire detection (past 24h)
- **Implementation**:
  - `src/data/firmsLoader.ts` — fetch CSV, parse with regex, return `{lat, lon, frp}[]`
  - `src/scene/FireLayer.ts` — point cloud, FRP → point size + orange/red/white color gradient, flickering via sin(time + hash(idx)) alpha modulation
  - Refresh every hour

### ⬜ Active hurricanes / tropical cyclones
- **Source**: NHC `https://www.nhc.noaa.gov/CurrentStorms.json` (currently empty off-season)
- **Implementation**:
  - `src/data/nhcLoader.ts` — fetch + parse; return storm list with track points and cone geometry
  - `src/scene/HurricaneLayer.ts` — line geometry for past track, cone mesh for forecast, pulsing dot at current eye
  - Builds renderer now so it auto-activates when storms appear (Atlantic season Jun–Nov)

### ⬜ NO₂ / AOD / smoke (drop-in GIBS)
- **Source**: Same `fetchGibsTexture()` pipeline already built; just different layer IDs:
  - `TROPOMI_L2_NO2_TotalColumn_D` — daily NO₂, use zoom=1, "1km" tileMatrixSet, ext="png"
  - `MODIS_Terra_Aerosol` — AOD (aerosol optical depth), daily
  - `FIRMS_VIIRS_NOAA20_Fires` — GIBS fire overlay (lower-res alternative to FIRMS API)
- **Implementation**: extend `CloudLayer`-style overlay class to accept GIBS layer ID + colormap uniform; or just add a generic `GibsOverlay` class that wraps a translucent sphere.

### ⬜ Sea ice (NH + SH)
- **Source**: `AMSRU2_Sea_Ice_Concentration_12km` via GIBS (same pipeline)
- Polar-cap overlay; opacity ∝ ice concentration

### ⬜ Lightning (Blitzortung WebSocket)
- **Source**: `wss://ws1.blitzortung.org/` (real-time JSON stream)
  - No auth, community network, ~200 ms latency
  - Payload: `{time, lat, lon, pol}` per strike
- **Implementation**:
  - `src/data/lightningLoader.ts` — WebSocket wrapper, rolling 60 s buffer of strikes
  - `src/scene/LightningLayer.ts` — flash geometry (billboarded point or ring), bright-white flash → fade over ~500 ms, max ~1000 simultaneous fading flashes to keep GPU cost low

### ⬜ Layer toggle HUD
- Simple HTML overlay (top-right corner), one button per layer
- Toggle `layer.mesh.visible` and pause/resume data fetching
- Minimal CSS; should not distract from the globe

---

## Phase B — Needs server-side GRIB2 proxy

One small Cloudflare Worker / Vercel Edge Function running `eccodes-wasm` unlocks all of these.
Once built, the worker also enables ECMWF AIFS and GraphCast-GFS (AI weather forecasts).

### ⬜ GRIB2 decode proxy
- Input: NOAA NOMADS URL (GFS 0.25° or 0.5°)
- Output: JSON matching existing `current-wind-surface-level-gfs-1.0.json` schema for any variable
- Deploy as `grib.earth-clock.onemonkey.org` (Cloudflare Worker)

### ⬜ Multi-altitude wind layers (pressure levels)
- GFS 250/500/700/850/925 hPa → switchable altitude bands

### ⬜ Temperature / RH / MSLP / TPW overlays
- Standard GFS fields → color-mapped texture overlay

### ⬜ OSCAR ocean surface currents
- `https://podaac-opendap.jpl.nasa.gov/...` — needs Earthdata auth (server-side only)

---

## Phase C — Stretch goals

- **10-min live cloud stitch** (GOES-East + Himawari + Meteosat) — replaces daily VIIRS mosaic
- **Kp index** (NOAA SWPC) → aurora intensity scaling
- **Real star skybox** (Tycho-2 / Deepstar catalogue at >100 k stars)
- **Full solar system** — planets, their moons, ecliptic plane
- **Wallpaper Engine** output mode — replace `BundledDataSource` stub with real fetches

---

## Infrastructure

| Item | Status | Notes |
|------|--------|-------|
| `orrery/.env.local` | ✅ created (not committed) | `VITE_FIRMS_MAP_KEY` set; excluded from git |
| `orrery/.gitignore` | ✅ (assumed via root) | Confirm `.env.local` is excluded |
| Dev server | ✅ `npm run dev` in `orrery/` | Vite at `http://localhost:5173` |
| Live site | ✅ `earth-clock.onemonkey.org` | CapRover deployment, see `DEPLOYMENT.md` |
| Wind JSON | ✅ `/data/weather/current/current-wind-surface-level-gfs-1.0.json` | Refreshed by `weather-service.js` every 6 h |
| Coastlines JSON | ✅ `/data/earth-topo.json` | Bundled, Natural Earth 50m |

---

## Session log

| Date | Completed | Left mid-session |
|------|-----------|-----------------|
| 2026-05-10 | Scaffolded orrery (3681e91) | — |
| 2026-05-11 | GPU wind, GFS, coastlines, cloud composite (4eefbaf) | Started aurora (lost to API limit) |
| 2026-05-11 | ← you are here | Aurora next |
| 2026-05-11 | AuroraLayer + auroraLoader rebuilt; PLAN.md created; .env.local restored | Active fires next |
