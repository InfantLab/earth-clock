# earth-clock — Claude bootstrap

Notes for Claude Code sessions in this repo. For the project at large see
[README.md](README.md), [ROADMAP.md](ROADMAP.md), [CHANGELOG.md](CHANGELOG.md),
and [DEPLOYMENT.md](DEPLOYMENT.md).

## Critical: shipping a release needs a frontend rebuild

The live site at `earth-clock.onemonkey.org` serves `public/` directly from git
via CapRover. **Source changes under `frontend/src/` do not reach production
until the bundle in `public/assets/` is rebuilt.**

After landing source changes destined for production, the release flow is:

```bash
cd frontend
BUILD_AS_ROOT=1 npm run build   # writes to ../public/ (index.html + assets/index-*.js)
cd ..
git rm public/assets/index-OLDHASH.js public/assets/index-OLDHASH.js.map  # the previous bundle
git add public/index.html public/assets/index-NEWHASH.js public/assets/index-NEWHASH.js.map
git commit -m "build: vX.Y.Z production bundle"
git push
```

**PowerShell** (Caspar's primary shell) doesn't understand `VAR=1 cmd` — use:
```powershell
cd frontend
$env:BUILD_AS_ROOT = "1"; npm run build
cd ..
```

Skipping the rebuild leaves prod stuck on the previous version while git
reports the new commit hash — confusing because *something* deployed, just not
what changed. See DEPLOYMENT.md §6 for the canonical procedure.

When bumping `frontend/package.json` for a release, the rebuild also injects
the new version into the wordmark badge via Vite's `__APP_VERSION__` define
([vite.config.ts](frontend/vite.config.ts)). Skipping the rebuild = badge
shows the old version.

## Project shape

- [`frontend/`](frontend/) — TypeScript + Three.js + Vite WebGL app, served at `/`.
- [`public/classic/`](public/classic/) — preserved classic D3 + canvas renderer at `/classic/`.
- [`public/`](public/) — what the prod server actually serves. `index.html` + `assets/` come from the Vite build; everything else (`data/`, `textures/`, `classic/`, `about/`) is static.
- [`weather-service.js`](weather-service.js) — Node service that downloads NOMADS GRIB2 → JSON in `public/data/weather/current/`.

The `frontend/` directory used to be called `orrery/`. The runtime global
`window.__orrery` and the localStorage key `orrery.menu.v1` intentionally
keep that codename — stable API surfaces.

## Dev workflow

- `cd frontend && npm run dev` — Vite dev server on `:5173` with HMR. Has dev-side proxies for `/proxy/nhc/` and `/proxy/geocode/`.
- `npm run dev` (from repo root) — node `dev-server.js` on `:8080` serving `public/` exactly as prod does. Useful for smoke-testing the production bundle.
- TypeScript check before commit: `cd frontend && npx tsc --noEmit`.

## Where things live

- Catalogues: [`frontend/src/data/eclipseCatalog.ts`](frontend/src/data/eclipseCatalog.ts) (solar), [`lunarEclipseCatalog.ts`](frontend/src/data/lunarEclipseCatalog.ts) (lunar), [`nasaEclipsePaths.ts`](frontend/src/data/nasaEclipsePaths.ts) (centerlines).
- UI panels in `frontend/src/ui/` — [Clock.ts](frontend/src/ui/Clock.ts), [Menu.ts](frontend/src/ui/Menu.ts), [EclipsePanel.ts](frontend/src/ui/EclipsePanel.ts), [SunDiscPanel.ts](frontend/src/ui/SunDiscPanel.ts), [LocationPanel.ts](frontend/src/ui/LocationPanel.ts), [DataPanel.ts](frontend/src/ui/DataPanel.ts), [ScaleKeyPanel.ts](frontend/src/ui/ScaleKeyPanel.ts).
- 3D scene layers in `frontend/src/scene/` — [Globe.ts](frontend/src/scene/Globe.ts), [Moon.ts](frontend/src/scene/Moon.ts), [Sun.ts](frontend/src/scene/Sun.ts), [EclipseLayer.ts](frontend/src/scene/EclipseLayer.ts), [FlatMap.ts](frontend/src/scene/FlatMap.ts), and the weather layers ([CloudLayer.ts](frontend/src/scene/CloudLayer.ts), [AuroraLayer.ts](frontend/src/scene/AuroraLayer.ts), [OverlayLayer.ts](frontend/src/scene/OverlayLayer.ts), etc.).
- Astro maths in `frontend/src/astro/` — [solar.ts](frontend/src/astro/solar.ts), [lunar.ts](frontend/src/astro/lunar.ts) (Meeus ELP-2000-82B), [eclipse.ts](frontend/src/astro/eclipse.ts), [observerView.ts](frontend/src/astro/observerView.ts).

## Conventions

- Single shared `simulatedTime` and `window.__orreryTimeWarp` — driven by the
  Clock's controls and the SunDiscPanel scrub bar. Every astronomical layer
  consumes it; weather layers do not (gated by live-data freshness instead).
- All scene rotation goes through `earthRotationY(now)` so the Earth, its
  surface-anchored data layers, and the eclipse umbra stay in lockstep.
- New live-data layer? It needs to be in the freshness gate list in
  [Menu.ts](frontend/src/ui/Menu.ts) `apply()` so it hides when the user warps
  > 24 h from now.
