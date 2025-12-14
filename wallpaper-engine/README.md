# Earth Clock - Wallpaper Engine

This is a Wallpaper Engine web wallpaper version of earth-clock, featuring animated global weather visualization with real-time day/night terminator overlay.

## Features

- **8 Projection Types**: Orthographic, Equirectangular, Azimuthal Equidistant, Conic Equidistant, Stereographic, Waterman Butterfly, Winkel Tripel, and Atlantis
- **Multiple Overlays**: Wind Speed, Temperature, Relative Humidity, Air Density, Wind Power Density, Total Precipitable Water, Total Cloud Water, Mean Sea Level Pressure
- **Height Levels**: Surface and multiple isobaric levels (1000, 850, 700, 500, 250, 70, 10 hPa)
- **Day/Night Overlay**: Real-time visualization of the day/night terminator
- **Interactive**: Drag to rotate, zoom to scale
- **Data Sources**: Choose between live server data or bundled static data

## Installation

1. Open Wallpaper Engine
2. Click "Create Wallpaper" button (or drag and drop your HTML file)
3. **Drag and drop** `index.html` from this `wallpaper-engine` directory onto the "Create Wallpaper" button in Wallpaper Engine
   - Alternatively, you can click "Create Wallpaper" and browse to select `index.html`
4. Wallpaper Engine will automatically detect it's a web wallpaper and import all files
5. The `project.json` file will be automatically used if present in the same directory
6. The wallpaper will load with default settings

**Note**: Wallpaper Engine will copy your files to its project directory. To edit files after import, click "Edit" → "Open in Explorer" in the Wallpaper Engine editor.

## Configuration

All settings are controlled through Wallpaper Engine's property panel:

- **Projection**: Choose from 8 different map projections
- **Overlay**: Select weather data overlay type
- **Height Level**: Choose atmospheric pressure level
- **Longitude**: Rotate view horizontally (-180 to 180)
- **Latitude**: Rotate view vertically (-90 to 90)
- **Zoom/Scale**: Adjust zoom level (100 to 2000)
- **Day/Night Overlay**: Toggle day/night terminator visualization
- **Data Source**: Choose "Live Server" for real-time data or "Bundled" for static data

## Files

- `index.html` - Main wallpaper HTML file
- `project.json` - Wallpaper Engine project configuration
- `wallpaper-config.js` - Property listener bridge
- `data-source-wrapper.js` - Data source selection handler
- `preview.jpg` - Preview image for Steam Workshop
- `libs/` - JavaScript libraries (D3, Backbone, etc.)
- `data/` - TopoJSON map data and optional weather data
- `styles/` - CSS and fonts

## Testing in Browser

You can test the wallpaper in a regular browser by opening `index.html`. It will fall back to using URL hash parameters for configuration instead of Wallpaper Engine properties.

Example: `index.html#current/wind/surface/level/orthographic`

## Data Source

- **Live Server**: Fetches current weather data from `https://earth-clock.onemonkey.org/`
- **Bundled**: Uses static weather data included in the `data/weather/current/` directory

Note: When using live server, ensure CORS is properly configured or use Wallpaper Engine's CEF flags for development.

## Credits

Based on the original [earth](https://github.com/cambecc/earth) project by Cameron Beccario, and the [earth-clock](https://github.com/your-repo/earth-clock) fork with day/night terminator overlay.
