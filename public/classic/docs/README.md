# Classic earth-clock — implementation notes

This folder collects the technical notes for the **classic earth-clock** experience preserved at [`/classic/`](../). All of it describes the original codebase: a fork of [`cambecc/earth`](https://github.com/cambecc/earth) extended with a real-time day/night terminator, moon-phase overlay, and clock readout. The classic renderer is a D3.js + canvas implementation offering eight different cartographic projections (orthographic globe plus equirectangular, azimuthal equidistant, conic equidistant, stereographic, Waterman butterfly, Winkel tripel, and Atlantis).

The current default site at `earth-clock.onemonkey.org/` is the WebGL rebuild (codename **orrery**); its own technical notes live in [`../../../orrery/README.md`](../../../orrery/README.md), [`../../../orrery/PLAN.md`](../../../orrery/PLAN.md), and [`../../../orrery/CREDITS.md`](../../../orrery/CREDITS.md). The new renderer implements the same astronomical concepts described below via Three.js shaders rather than D3 canvas projections, but the underlying maths is the same. orrery currently offers two render modes (3D globe + equirectangular flat map); the other six classic projections are on the roadmap (see PLAN.md).

## Files

| | |
|---|---|
| [DAY_NIGHT_CALCULATION.md](DAY_NIGHT_CALCULATION.md) | How the day/night terminator overlay is computed and rendered onto the 2D map. |
| [MOON_PHASE.md](MOON_PHASE.md)                       | How the moon-phase overlay (sub-lunar dot + phase rendering) works. |
| [WORLD_ROTATION.md](WORLD_ROTATION.md)               | How globe rotation interacts with the wind field, particles, and overlays. |
| [Weather Data.md](Weather%20Data.md)                 | Description of the GFS and OSCAR data sources used by the classic frontend. |

These docs are kept verbatim as they were before the v0.1.0 cutover, for archival accuracy and because the classic site continues to serve them.
