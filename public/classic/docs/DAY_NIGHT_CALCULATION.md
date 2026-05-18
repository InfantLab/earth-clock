# Day/Night Terminator Calculation

## Overview

The day/night overlay displays a real-time visualization of which parts of the Earth are currently in daylight and which are in darkness. This is achieved by calculating the solar position for each geographic coordinate and applying a semi-transparent dark overlay to night regions.

## Algorithm

The calculation is performed in the `calculateDayNightStatus()` function in `public/libs/earth/1.0.0/earth.js`. For each point on the globe, we determine if the sun is above or below the horizon.

### Solar Position Calculation

The algorithm uses three key astronomical calculations:

#### 1. Solar Declination

The solar declination (δ) is the angle of the sun above or below the celestial equator. It varies throughout the year due to Earth's axial tilt of approximately 23.45°.

```
δ ≈ 23.45° × sin(360° × (284 + n) / 365)
```

Where:
- `n` = day of year (1-365)
- Day 284 (October 11) is a commonly used phase offset that best fits the sinusoid to the actual declination curve; it is not an equinox anchor but an empirical offset that minimizes error across the year.

#### 2. Hour Angle

The hour angle represents the sun's position relative to the local meridian. It accounts for both UTC time and the location's longitude.

```
hourAngle = ((UTC_hours - 12) × 15° + longitude) × π/180
```

Where:
- Earth rotates 360° in 24 hours = 15° per hour
- 12:00 UTC is solar noon at Greenwich (0° longitude)
- Longitude is added to account for the location's position east or west of Greenwich

#### 3. Solar Elevation

The solar elevation angle is calculated using spherical trigonometry:

```
sin(elevation) = sin(latitude) × sin(declination) + 
                 cos(latitude) × cos(declination) × cos(hourAngle)
```

If the elevation is positive, the sun is above the horizon (daylight). If negative, the sun is below the horizon (night).

## Implementation Details

### Real-Time Updates

The day/night overlay uses the **current real-time UTC date**, independent of the weather data date. This ensures the terminator line is always accurate to the current moment, even if the weather data is from a different time.

```javascript
// Always use current real-time UTC date
date = new Date(); // Force current time, ignore any passed date
```

### Rendering Approach

The overlay is rendered using HTML5 Canvas with `ImageData` for efficient pixel manipulation:

1. **Mask System**: Uses the existing globe mask to identify visible pixels
2. **Sampling**: Samples every 2 pixels for performance (similar to wind interpolation)
3. **Pixel Manipulation**: For each night pixel, applies a 2×2 pixel block for smoother appearance
4. **Opacity**: Uses 40% opacity (0.4 alpha) for the dark overlay

### Update Frequency

- **Day/Night Overlay**: Updates every second to show real-time terminator movement
- **Mask Recalculation**: Recalculated every minute or when the globe/projection changes

### Coordinate Conversion

For each screen pixel:
1. Convert screen coordinates to geographic coordinates using the projection's `invert()` function
2. Calculate day/night status for that geographic coordinate
3. Apply dark overlay if the location is in night

## Code Location

- **Calculation Function**: `calculateDayNightStatus()` in `public/libs/earth/1.0.0/earth.js` (lines 697-739)
- **Rendering Function**: `drawDayNightOverlay()` in `public/libs/earth/1.0.0/earth.js` (lines 746-808)
- **Update Logic**: Day/night agent in `public/libs/earth/1.0.0/earth.js` (lines 1128-1303)

## References

- Solar declination formula based on standard astronomical calculations
- Hour angle calculation accounts for Earth's rotation rate (15° per hour)
- Elevation calculation uses standard spherical trigonometry for celestial navigation



