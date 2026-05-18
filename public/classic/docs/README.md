# Classic earth-clock — implementation notes

This folder collects the technical notes for the **classic 2D earth-clock** experience preserved at [`/classic/`](../). All of it describes the original codebase: a fork of [`cambecc/earth`](https://github.com/cambecc/earth) extended with a real-time day/night terminator, moon-phase overlay, and clock readout.

The current default site at `earth-clock.onemonkey.org/` is the 3D rebuild (codename **orrery**); its own technical notes live in [`../../../orrery/README.md`](../../../orrery/README.md), [`../../../orrery/PLAN.md`](../../../orrery/PLAN.md), and [`../../../orrery/CREDITS.md`](../../../orrery/CREDITS.md). The 3D experience implements the same astronomical concepts described below via Three.js shaders rather than 2D canvas + d3 projections, but the underlying maths is the same.

## Files

| | |
|---|---|
| [DAY_NIGHT_CALCULATION.md](DAY_NIGHT_CALCULATION.md) | How the day/night terminator overlay is computed and rendered onto the 2D map. |
| [MOON_PHASE.md](MOON_PHASE.md)                       | How the moon-phase overlay (sub-lunar dot + phase rendering) works. |
| [WORLD_ROTATION.md](WORLD_ROTATION.md)               | How globe rotation interacts with the wind field, particles, and overlays. |
| [Weather Data.md](Weather%20Data.md)                 | Description of the GFS and OSCAR data sources used by the classic frontend. |

These docs are kept verbatim as they were before the v0.1.0 cutover, for archival accuracy and because the classic site continues to serve them.
