# orrery

3D successor to earth-clock. Built with Three.js + Vite + TypeScript.

## Run

```
npm install
npm run dev      # http://localhost:5173
npm run build    # builds to ../public/orrery
```

When `orrery` becomes the default, point `vite.config.ts > build.outDir` at `../public` and move classic earth-clock to `../public/classic/`.

## Scope

- **Phase 1**: textured globe, real sun position, atmospheric rim, smooth wind particles (GPU)
- **Phase 2**: moon (already prototyped in classic)
- **Phase 3**: full solar system, real Tycho-2 / NASA deepstar skybox

Projections: orthographic (default) and equirectangular only — no other projections planned.

## Credits

See [CREDITS.md](CREDITS.md) for the full, authoritative list of sources — visual assets, astronomical formulae, libraries, and planned/upstream data. **Every new external source must be added there as it's introduced.** When the app gains a visible About panel, every entry marked `attribution_required: yes` will appear there.
