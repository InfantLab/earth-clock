# Notes for Claude

## Credits hygiene

`CREDITS.md` at this directory's root is the canonical record of every external source orrery uses — textures, formulae, libraries, data feeds, ideas. **Whenever you add a new external source, you MUST add a corresponding entry to `CREDITS.md` in the same change.** No exceptions: textures, font files, code snippets borrowed from a tutorial, mathematical formulae from a paper — all of it.

If unsure which section it belongs in, prefer creating a new section over hiding it under a vague heading.

## Folder layout

- `src/` — TypeScript source. Subfolders by concern (`scene/`, `astro/`, `data/`).
- `public/` — static assets served verbatim. Textures live in `public/textures/`.
- `dist/` — Vite build output (gitignored).
- Production build target: `../public/orrery/` so `/orrery/` serves alongside the classic site. To make orrery the default site later, change `vite.config.ts > build.outDir` and move classic to `../public/classic/`.

## Scope decisions (already made)

- Projections: orthographic globe + equirectangular only. Other projections (Waterman butterfly, Winkel tripel, etc.) are explicitly out of scope.
- Wallpaper Engine: not supported in initial release. The `DataSource` interface exists so a bundled-data variant can be added later without rewriting the scene.
- Phase 3 ambition: full solar system + real star skybox.
