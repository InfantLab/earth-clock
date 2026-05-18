# Moon Phase Feature

## Overview

The moon phase overlay shows the current position of the moon on the Earth's surface and renders a realistic depiction of its phase. When enabled (via the **Moon** button in the Control menu), a disc appears at the **sub-lunar point** — the geographic location on Earth directly beneath the moon — and moves in real time as the moon orbits.

## What it shows

- **Sub-lunar point**: the spot on Earth where the moon is directly overhead. This point moves westward across the globe as the Earth rotates (roughly 360° per day, slightly less than the sun's apparent motion because the moon is also moving in its orbit).
- **Moon phase**: the illuminated fraction and orientation of the lit side, rendered as a shaded disc. The phase cycles from new moon (dark) → first quarter (right side lit) → full moon (fully lit) → last quarter (left side lit) and back over ~29.5 days.
- **Surface texture**: value-noise shading approximates the lighter highland and darker mare (basalt plain) regions of the lunar surface.
- **Earthshine**: a faint glow on the dark limb simulates the indirect illumination of the moon's night side by light reflected from Earth.

## Note on orientation

The disc is shown as seen *from above* looking down onto the Earth's surface. This means the east–west axis is mirrored compared to looking up at the moon in the sky. In the northern hemisphere you normally see the moon with the lit side on the right when waxing; on the globe surface the lit side will appear on the left for waxing phases. This is physically correct for a nadir-view projection.

## Astronomical calculation

The calculation is performed in `calculateMoonData()` in `public/libs/earth/1.0.0/earth.js`. It uses the simplified orbital element method described by Paul Schlyter (accuracy ~1–2°).

### Orbital elements used

| Element | Value |
|---|---|
| Longitude of ascending node | 125.1228° − 0.0529538° × d |
| Inclination | 5.1454° |
| Argument of perigee | 318.0634° + 0.1643573° × d |
| Eccentricity | 0.054900 |
| Mean anomaly | 115.3654° + 13.0649930° × d |

Where **d** is days since J2000.0 (1 January 2000, 12:00 TT).

### Coordinate pipeline

1. **Kepler's equation** — solved iteratively to convert mean anomaly → eccentric anomaly → true anomaly.
2. **Ecliptic XYZ** — the moon's position in the ecliptic plane, accounting for the orbital inclination and ascending node.
3. **Equatorial coordinates** — ecliptic longitude/latitude are rotated by the obliquity of the ecliptic (≈23.44°) to give right ascension (RA) and declination (dec).
4. **Sub-lunar point**:
   - Geographic **latitude** = declination
   - Geographic **longitude** = RA − Greenwich Mean Sidereal Time (GMST)
5. **Phase** = (moon's ecliptic longitude − sun's ecliptic longitude) / 360, normalised to [0, 1]. Phase 0 = new moon, 0.5 = full moon.

### GMST formula

```
GMST (degrees) = 280.461 + 360.986 × (JD − 2451545.0)
```

where JD is the Julian Date.

## Illumination rendering

A pixel at disc-coordinates `(dx, dy)` from the moon's centre is on the **lit side** when:

```
sin(α) × dx − cos(α) × √(r² − dx² − dy²) > 0
```

where α = 2π × phase. This is the exact orthographic projection of the 3-D illumination condition (`sun_direction · outward_normal > 0`). A `tanh` smooth-step is applied across the terminator for a soft shadow edge, and limb darkening reduces brightness by 35% toward the disc edge.

## Globe clipping

Each pixel of the moon disc is tested against the same globe mask used by the day/night overlay. Pixels outside the visible globe (including those on the far side of the globe) are not rendered, so the disc clips naturally at the globe's limb and disappears when the sub-lunar point rotates to the back.

## Performance

- Moon position is recalculated at most once per minute (the sub-lunar point moves at ~0.5°/min).
- The disc is redrawn on every globe render/redraw event (e.g. during auto-rotation) using the cached position.
- Disc radius scales with viewport height (`≈1.3% of view height`, minimum 8 px).

## Wallpaper Engine

The feature is exposed as a **Show Moon Phase** boolean property in `wallpaper-engine/project.json` (default: off). It is also toggleable via `window.showMoonPhase()` / `window.closeMoonPhase()` for scripted control.
