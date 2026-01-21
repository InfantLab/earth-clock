# Wallpaper Engine Integration Guide

This document describes how to maintain and update the Wallpaper Engine version of earth-clock.

## Architecture

The `wallpaper-engine/` directory is a **minimal wrapper** around the core web version. It contains:

- **Wallpaper-specific files** (not shared):
  - `index.html` - Minimal wrapper HTML
  - `wallpaper-config.js` - Property listener bridge
  - `data-source-wrapper.js` - Data source selection
  - `project.json` - Wallpaper Engine configuration
  - `preview.jpg` - Preview image

- **Copied files** (synced from `public/`):
  - `libs/earth/1.0.0/*.js` - Core earth library files
  - `libs/*` - JavaScript libraries (D3, Backbone, etc.)
  - `data/*` - TopoJSON and weather data
  - `styles/*` - CSS and fonts

## Code Synchronization

### Why Local Copies?

Wallpaper Engine's Chromium-based renderer **does not allow access to parent directories** (`../`) for security reasons. Therefore, we must maintain local copies of shared files.

### Sync Process

After making changes to core files in `public/libs/earth/`, run the sync script:

```bash
node sync-wallpaper.js
```

This copies updated files from `public/` to `wallpaper-engine/`, keeping the versions in sync.

**Files synced:**
- `libs/earth/1.0.0/earth.js`
- `libs/earth/1.0.0/globes.js`
- `libs/earth/1.0.0/micro.js`
- `libs/earth/1.0.0/products.js`

**Files NOT synced** (wallpaper-specific):
- `wallpaper-config.js`
- `data-source-wrapper.js`
- `project.json`
- `index.html` (wrapper only)

## Updating Wallpaper on Steam Workshop

### Manual Update Process

1. **Make changes to core code** in `public/libs/earth/`
2. **Run sync script**: `node sync-wallpaper.js`
3. **Test in Wallpaper Engine editor**:
   - Open Wallpaper Engine
   - Open your wallpaper project
   - Test all properties and features
   - Check console for errors (enable CEF devtools)
4. **Update on Steam Workshop**:
   - In Wallpaper Engine editor, click **Workshop** → **Update Wallpaper on Workshop**
   - Add update notes describing changes
   - Click **Update**

### Update Checklist

- [ ] Core changes made and tested in web version
- [ ] Sync script run successfully
- [ ] Tested in Wallpaper Engine editor
- [ ] All properties working correctly
- [ ] No console errors
- [ ] Preview image updated (if needed)
- [ ] Update notes written
- [ ] Published to Steam Workshop

## Automatic Updates

**No automatic API available.** Wallpaper Engine uses Steam Workshop for distribution, which requires manual uploads through the Wallpaper Engine editor. There is no programmatic API for publishing updates.

**User Experience**: Once you publish an update, users who have subscribed to your wallpaper will automatically receive the update through Steam Workshop.

## Properties

### Current Properties

1. **projection** (combo) - Map projection type (8 options)
2. **overlay** (combo) - Weather overlay type (includes `Random (each start)` option)
3. **height** (combo) - Atmospheric pressure level (8 options)
4. **longitude** (slider) - Horizontal rotation (-180 to 180)
5. **latitude** (slider) - Vertical rotation (-90 to 90)
6. **zoom** (slider) - Zoom/scale level (100 to 2000)
7. **daynight** (bool) - Day/night terminator overlay
8. **datasource** (combo) - Data source (Live/Bundled)
9. **showclock** (bool) - Show/hide time display
10. **spinSpeed** (slider) - Auto-rotation speed (0 to 360 degrees/minute, 0 = off)

### Random Overlay (each start)

If the user selects **Overlay → Random (each start)**, the wallpaper will pick one overlay at startup from:

- Wind Speed
- Temperature
- Relative Humidity
- Air Density
- Wind Power Density
- Total Precipitable Water
- Total Cloud Water
- Mean Sea Level Pressure

The choice is made **once per wallpaper load** and stays stable until the wallpaper is restarted (or the user picks a non-random overlay).

### Adding New Properties

1. Add property definition to `wallpaper-engine/project.json`
2. Add handler in `wallpaper-engine/wallpaper-config.js` `applyProperties()` function
3. Expose any needed functions from `earth.js` to `window` object
4. Test in Wallpaper Engine editor
5. Update documentation

## Testing

### In Browser

Test the wallpaper HTML directly:
```bash
# Open wallpaper-engine/index.html in browser
# It will fall back to hash parameters if not in Wallpaper Engine
```

### In Wallpaper Engine Editor

1. Open Wallpaper Engine
2. Click **Edit** → **Open in Explorer** to access project files
3. Enable CEF devtools for debugging:
   - Settings → General → CEF devtools port: `8080`
   - Open `http://localhost:8080` in Chrome for debugging
4. Test all properties
5. Check console for errors

## Troubleshooting

### Properties Not Working

- Check that `wallpaper-config.js` loads **before** `earth.js` in `index.html`
- Verify `window.wallpaperPropertyListener` is initialized immediately (not after delays)
- Check console for initialization errors
- Ensure properties are queued if earth.js isn't ready yet

### Projection Not Respecting Setting

- Verify property listener is set up before earth.js initializes
- Check that properties are applied after earth.js is ready
- Look for timing issues in console logs

### Auto-Rotation Not Working

- Verify `window.setAutoRotateSpeed` is available
- Check that rotation pauses during user interaction
- Test with different projection types

## File Structure

```
wallpaper-engine/
├── index.html              # Minimal wrapper
├── wallpaper-config.js     # Property bridge
├── data-source-wrapper.js  # Data source handler
├── project.json            # Wallpaper Engine config
├── preview.jpg             # Preview image
├── libs/                   # Copied from public/libs/
│   └── earth/1.0.0/       # Core library (synced)
├── data/                   # Copied from public/data/
└── styles/                # Copied from public/styles/
```

## Best Practices

1. **Keep core logic in `public/libs/earth/`** - Single source of truth
2. **Run sync script after changes** - Keep versions in sync
3. **Test thoroughly** - Wallpaper Engine environment differs from browser
4. **Document changes** - Update this file when adding features
5. **Version control** - Commit both `public/` and `wallpaper-engine/` changes

## Future Improvements

- Consider build script to automate sync and validation
- Add automated tests for property handling
- Create deployment checklist script

## Windows Screensaver (classic .scr) feasibility note

It’s very feasible to turn this project into a “classic” Windows screensaver while keeping it lightweight by hosting the existing HTML wallpaper in a native wrapper:

- **Best lightweight option**: a small Win32/.NET host using **Microsoft Edge WebView2** that loads `wallpaper-engine/index.html` (or a screensaver-specific copy) from disk.
- **Required screensaver modes**:
  - `/s` fullscreen on the selected monitor
  - `/p <HWND>` render into the preview window handle (Control Panel)
  - `/c` optional config dialog (could reuse a simple INI/JSON or launch a small UI)
- **Exit behavior**: close on any key press, mouse move beyond a small threshold, or mouse click.
- **Size expectations**:
  - Your `.scr` host can be only a few MB.
  - Total install size is dominated by bundled assets (your `data/`, `libs/`, images) and by the WebView2 runtime availability on the target machine.
- **Performance knobs**:
  - Cap FPS (requestAnimationFrame throttling) and/or reduce particle count.
  - Prefer “bundled” data mode (no network) for predictable behavior.
