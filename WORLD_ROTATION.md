# World Rotation (Implementation)

This document describes how **World Rotation** is implemented in `earth-clock`: how the globe spins while the wind field, particles, and overlays remain logically attached to Earth.

## Conceptual model
- **The wind field lives on the globe** in geographic coordinates `(lon, lat)`.
- **Rotation moves the camera/projection**, not the wind.
- Therefore:
  - **Particle motion** happens in geographic space.
  - **Rendering** is just “project geo → screen” with the current projection state.

## Where the code lives
The same implementation exists in both builds:

- `public/libs/earth/1.0.0/earth.js`
- `wallpaper-engine/libs/earth/1.0.0/earth.js`

The main pieces are:

- **Animator**: `animate(globe, field, grids)`
- **Rotation loop**: `startAutoRotation / updateAutoRotation / stopAutoRotation`
- **Overlay pipeline**: `interpolateField(...)` + `drawOverlay(...)`

## Particle system
### State layout (typed arrays)
Particles are stored in dense typed arrays for performance and consistent frame time:

- `lon[i]`, `lat[i]`: current particle location in degrees.
  - `lon` is **continuous** (not clamped to ±180). This avoids artificial seams.
  - `lat` is clamped away from the poles (see below).
- `age[i]`: lifetime counter.
- `miss[i]`: consecutive “no data” samples counter (prevents popping).

Trails are fixed-length ring buffers:

- `TRAIL_LEN` (currently 16)
- `trailLon[i*TRAIL_LEN + k]`, `trailLat[...]`
- `trailHead[i]`, `trailSize[i]`

### Advection (geo-space RK2)
Each frame, each particle advances using RK2/midpoint integration against the wind grid:

1) sample `w1 = grids.primaryGrid.interpolate(lon, lat)`
2) compute step `(k1λ, k1φ)`
3) sample midpoint `w2`
4) apply `(k2λ, k2φ)`

Important stability rules:

- **Latitude clamp**: `lat ∈ [-85°, 85°]` to avoid polar singularities.
- **Pole/CE/WB streak prevention**: cap per-frame geo step:
  - `MAX_STEP_DEG_LON`
  - `MAX_STEP_DEG_LAT`

- **No-data tolerance**: if interpolation is undefined/null, increment `miss[i]` and only respawn after a small threshold (keeps motion visually continuous).
- **Longer lifetimes**: particles live longer than the original baseline so trails feel continuous under rotation.

### Respawn
When a particle is respawned, it is randomized to a point with defined wind (`interpolate(...)` returns a magnitude) and its trail buffer is cleared and re-seeded.

## Rendering (reprojection every frame)
Because rotation and user interactions continuously change the projection:

- The animation canvas is **cleared each frame**.
- Each trail point is projected via `projection([lon, lat])`.
- Trails are drawn as polylines, but **segments are broken** when:
  - projection returns null/NaN
  - point is outside current bounds
  - a large screen-space jump is detected (dateline / polyhedral seams / lobe boundaries)

### Globe-only “front hemisphere” rule
For globe-like projections (`clipAngle ≈ 90`, e.g. Orthographic), we additionally drop points on the far side:

- derive the globe center from `projection.rotate()`
- keep only points with `d3.geo.distance(point, center) < π/2`

This prevents “back-side” trails from appearing as oppositely-directed streamlines.

## Rotation
### How spinning works
World Rotation updates only the projection rotation:

- `globe.projection.rotate([newLon, ...])`

then triggers:

- `inputController.trigger("move")` so SVG map paths + terminator update.

### Stopping cleanly
Rotation uses `requestAnimationFrame`. The active handle is stored and `cancelAnimationFrame(handle)` is called when spin speed is set to 0.

## Overlays (magnitude map)
The blue/green magnitude overlay is produced by the expensive interpolation pipeline (`interpolateField`). During high rotation rates, continuously restarting interpolation can starve it.

To keep it reliable:

- Interpolation cancellation happens only during **actual user interaction** (drag/zoom).
- Rotation-triggered overlay renders are throttled.
- When spinning stops, a final `rendererAgent.trigger("render")` is issued so the overlay matches the final orientation.

## Known limitations / next improvements
- **Very high spin speeds** (e.g. > 120°/min): the map/terminator updates smoothly (SVG redraw), but overlays can appear “steppy” because they require re-interpolation.
  - Next improvement: reuse/rotate last overlay frame between interpolations or move overlay rendering to WebGL.
- **WB / CE seam artifacts**: segment splitting + per-step caps reduce seam lines, but Waterman Butterfly has many seam opportunities.
  - Next improvement: projection-aware face ID / seam masking for WB so segments never connect across polyhedral faces.







