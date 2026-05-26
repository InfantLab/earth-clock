# Screenshot shot-list

Working checklist of screenshots worth capturing for the **blog post**, the **main
README**, and the **About page**. Same shot often serves multiple destinations —
target columns noted per row.

> **Capture conventions** — unless noted otherwise:
> - Default menu state (collapsed wordmark, no panels open).
> - Set `__orreryTimeWarp = 1` and snap to wall-clock time before capturing
>   ambient shots — viewers will check the clock against reality.
> - Disable "Use test data" if a fixture run is still active.
> - 1920 × 1080 minimum; 2560 × 1440 if your monitor supports it (Retina users:
>   browser zoom 100 %, native DPR captures fine for retina-aware print).
> - Window-mode screenshots, not full-screen with system bars.
> - For UI panels, wait for any "looking up…" or "fetching…" labels to resolve.

Target column key: **B** = blog post, **R** = README, **A** = About page.

---

## Hero / cinematic

| # | Shot | Setup | Targets |
|---|------|-------|---------|
| 1 | **The 2026-08-12 Spain eclipse, umbra over Bilbao** — the headline event. Path of totality + dark umbra disc + diamond-ring outline visible. Camera positioned so you see the umbra on Spain with the full continent context. | Open Eclipse panel → click "Spain total solar eclipse (2026)". Wait for warp to land at peak time (~17:46 UTC). Orient camera to centre on Iberia + N. Atlantic. | B, R, A |
| 2 | **Default ambient globe** — clouds + wind trails + day/night terminator. Should look like the live earth-clock at any random moment. | Wall-clock time, default layer set (everything in Weather/Clouds/Geography/Astro on, no overlays). Mid-afternoon UTC so the terminator cuts across an interesting hemisphere (Africa or the Americas works). | B, R, A |
| 3 | **Earth at high zoom from "above the moon"** — Apollo-8-style framing of Earth at distance. Hero shot for "the planet you live on". Use `__orrery.findMoon()` from the console to position the camera. | `window.__orrery.findMoon()` then drag the camera angle slightly so both Earth + the moon mesh sit in frame. | B, A |

## UI panels (each captured cropped + zoomed)

| # | Shot | Setup | Targets |
|---|------|-------|---------|
| 4 | **Menu fully expanded** — Weather / Clouds / Overlay / Geography / Astro / View rows, brand wordmark at top, version badge visible. Crop tightly to the bottom-left panel. | Click wordmark to expand; default toggle state. | R, A |
| 5 | **Eclipse panel showing all 4 catalogued events** — 2024 dimmed (past), 2026 selected (amber highlight), 2027 + 2028 pending. | Open Astro → Eclipse, hover-click the 2026 row, capture before the time-jump completes. | B, A |
| 6 | **Location panel with a pin set + place name + true solar time** — pick a recognisable place (Bilbao for the eclipse story, or your home town). All three rows visible: 📍 current, ☀️ sub-solar (live), 🌙 sub-lunar (live). | Open Location → click a globe spot or "use my location"; wait for Nominatim place name to resolve. | A |
| 7 | **Data panel showing every live feed fresh** — green "fresh" indicators across the board, sources hyperlinked. Demonstrates the live-data story for the blog. | Open Data; capture after lightning has reported "connected · N strikes/min". | B, R |
| 8 | **Clock with time-warp 60× during an eclipse** — amber × 60 readout, ⏱ icon active, ⏪ ⏯ ⏩ ↺ row visible. Pairs naturally with shot 1 in a side-by-side. | Same setup as shot 1; capture the top-left Clock zoomed in. | B |

## Layer / feature showcases

| # | Shot | Setup | Targets |
|---|------|-------|---------|
| 9 | **Beams explainer** — gold sun beam + silver moon beam both visible against Earth, sub-solar / sub-lunar dots clearly readable. Caption: "the clock is the planet's orientation in space". | Toggle Astro → Beams on (auto-enables Moon). Pick a camera angle where both beams stick out cleanly (sun and moon should be in different hemispheres relative to the camera — try mid-month when moon is roughly opposite the sun). | A, B |
| 10 | **Flat map view with the same data** — clouds + day/night + night lights + wind trails on the equirectangular projection. Demonstrates parity with the 3D view. | Menu → View → "Flat map" on. Wait for trail buffer to fill (5-10 s of wind). | B, R, A |
| 11 | **Hurricane sprite with track + cone** — pulsing storm sprite, past-track line, forecast cone polygon. Needs an in-season Atlantic / Pacific storm to render (Jun–Nov; off-season → use `__orrery.useTestData()` to fake one). | If live storms exist: zoom to one. Otherwise console: `__orrery.useTestData()`. | A |
| 12 | **Aurora oval at moderate Kp** — green/cyan glow at high latitudes on the night side, terminator visible to the right. Kp ≥ 3 makes it pop. | Open Data, check the Kp row. If too quiet, do a time-warp into the past with a known storm date, or use test-data fixture. | A |
| 13 | **Active fires zoomed on a known region** — Borneo, California, the Amazon during fire season. The flicker is animated; capture mid-flicker for the brightest cluster look. | Default. Use OrbitControls to zoom + pan to a known fire region. | A |
| 14 | **Lightning strikes flashing globally** — wide-angle so multiple recent strikes are visible. Hard to time; multiple captures recommended. | Default with lightning toggle on. Capture during an active thunderstorm region. | A |
| 15 | **GFS pressure / temperature overlay** — coloured shell + scale key (once the scale-key feature lands; without it, this shot doesn't communicate much). Defer until the [overlay scale key](../../PLAN.md) lands. | Menu → Overlay → Pressure or Temperature. Wait for the scale-key implementation. | B, A |

## Blog-specific narrative shots

| # | Shot | Setup | Targets |
|---|------|-------|---------|
| 16 | **Classic vs WebGL rebuild** — same moment (or close), side-by-side. The classic at `/classic/` rendered with a couple of weather layers, the WebGL build at `/` with the equivalent. Sells the "what changed" beat of the blog post. | Open both `/classic/` and `/` in two browser windows at the same wall-clock time. Match layer choices (wind + clouds). Capture each separately; arrange in the post. | B |
| 17 | **Console `window.__orrery.jumpToEclipse("20260812")`** — DevTools open showing the call + the eclipse panel responding. Demonstrates the developer-friendly side. | Open DevTools, type and execute the command, capture the moment the panel transitions. | B, R |
| 18 | **The 2028 Australia eclipse path crossing Sydney** — secondary eclipse hero (the Spain one is the headline; this proves the multi-event story). | Open Eclipse → click 2028 row. Orient camera over Australia + NZ. | B |

## "Wallpaper / screensaver" preview

| # | Shot | Setup | Targets |
|---|------|-------|---------|
| 19 | **Ambient idle frame** — no panels open, gentle auto-orbit running, clouds + wind + night lights. The kind of frame the user would set as a desktop wallpaper. | Default menu state. Astro → Auto-spin on. Snap a frame where the dramatic terminator is in shot (sun setting on Europe is reliably pretty). | B (motivation for the Downstream surfaces work) |

---

## Tips on capturing the eclipse shots

The umbra moves fast under 60× warp — the umbra disc is the most photogenic moment.
Pause via the ⏯ button when you have the framing you want. The 2026 Spain
eclipse has these landmark moments worth catching:

- **17:30 UTC** — umbra over Greenland, en route to Iceland
- **17:46 UTC** — *greatest eclipse* near Iceland (mid-Atlantic)
- **18:30 UTC** — Bilbao / Valladolid; this is the photogenic "Spain" frame
- **18:45 UTC** — Mallorca / North African coast
- **19:00 UTC** — exit over the Maghreb

For the 2028 Australia eclipse, **04:00 UTC** is the Sydney totality moment.

---

## What's missing right now

These would be worth capturing, but the relevant features either aren't shipped or
need a polish round before they're presentable:

- **Eclipse on the flat map** — deferred (FlatMap v2 entry 7).
- **Overlay with scale key** — deferred (new entry in PLAN.md).
- **Sub-solar / sub-lunar markers on flat map** — partial (the RadiusVectors dots
  exist; the styling could be tightened).
- **ISS / Earthrise / heliocentric camera presets** — all deferred (Camera paths
  Phase C).
- **High-resolution skybox** — deferred (Skybox quality toggle entry in PLAN.md).
