# Weather Service

## Overview

The weather service is a Node.js backend service that automatically fetches current Global Forecast System (GFS) weather data from NOAA NOMADS, converts it from GRIB2 format to JSON, and makes it available to the frontend application.

## Architecture

The weather service consists of three main components:

### 1. Weather Service (`weather-service.js`)

The main service orchestrator that:
- Determines the latest available GFS forecast run (00z, 06z, 12z, or 18z)
- Downloads GFS GRIB2 files from NOAA NOMADS
- Converts GRIB2 to JSON format
- Saves the converted data to `public/data/weather/current/`
- Runs on a 6-hour update schedule (GFS updates 4 times daily)

### 2. NOMADS Downloader (`lib/nomads-downloader.js`)

Handles downloading GFS data from NOAA NOMADS using:
- **Primary Method**: Index-based partial HTTP transfers (fast download) - recommended by NOMADS, downloads only needed fields using HTTP Range requests
- **Fallback Method**: Filter script (`filter_gfs_1p00.pl`) - convenience method for programmatic access

The downloader:
- Tries multiple URL format variants for compatibility
- Downloads only UGRD and VGRD (wind components) at 10m above ground
- Uses HTTP Range requests to download specific byte ranges from GRIB2 files
- Parses wgrib inventory files to find field locations

### 3. GRIB2 Converter (`lib/grib2-converter.js`)

Converts GRIB2 binary files to JSON format using:
- **`grib-js`** library - pure JavaScript GRIB2 parser (no Java dependency)
- Converts to the exact JSON format expected by the frontend
- Handles both file paths and Buffer inputs

## Key Features

### No Java Dependency

Unlike the original earth project which required Java and `grib2json`, this implementation uses:
- **`grib-js`** - Pure JavaScript GRIB2 parser
- Native Node.js HTTP/HTTPS for downloads
- No external binary dependencies

### Automatic Updates

The service:
- Runs continuously, updating every 6 hours
- Automatically selects the most recent available GFS run
- Accounts for GFS processing delays (typically 3-4 hours after forecast time)
- Handles errors gracefully with retry logic

### Efficient Downloads

- Downloads only the needed fields (UGRD and VGRD at 10m)
- Uses partial HTTP transfers when possible
- Tries multiple URL formats for maximum compatibility

## Setup

### Installation

```bash
npm install
```

This installs all dependencies including `grib-js`.

### Running the Service

```bash
npm run weather-service
```

Or directly:

```bash
node weather-service.js
```

The service will:
1. Create the data directory if it doesn't exist
2. Fetch the latest GFS data immediately
3. Continue updating every 6 hours
4. Log all operations to the console

### Output

The service saves converted JSON data to:
```
public/data/weather/current/current-wind-surface-level-gfs-1.0.json
```

This file is automatically picked up by the frontend application.

## Configuration

### Update Interval

Default: 6 hours (21600000 milliseconds)

To change, modify `UPDATE_INTERVAL` in `weather-service.js`:

```javascript
var UPDATE_INTERVAL = 6 * 60 * 60 * 1000; // 6 hours
```

### Data Source

The service downloads from NOAA NOMADS:
- **Base URL**: `https://nomads.ncep.noaa.gov`
- **Data Format**: GFS 1.0 degree resolution (`pgrb2.1p00.f000`)
- **Forecast Hour**: 000 (analysis/current conditions)

## Data Flow

```
NOAA NOMADS Server
    ↓
Download GRIB2 file (filter script or index-based)
    ↓
lib/nomads-downloader.js
    ↓
lib/grib2-converter.js (grib-js parser)
    ↓
JSON format
    ↓
public/data/weather/current/
    ↓
Frontend Application
```

## Error Handling

The service includes:
- Automatic retry on network errors
- Multiple URL format fallbacks
- Graceful error handling with logging
- Continues running even if individual updates fail

## File Structure

```
weather-service.js          # Main service orchestrator
lib/
  ├── grib2-converter.js    # GRIB2 to JSON conversion
  └── nomads-downloader.js  # NOMADS data downloader
public/data/weather/current/ # Output directory
```

## Dependencies

- **grib-js**: Pure JavaScript GRIB2 parser
- **Node.js built-in modules**: `http`, `https`, `fs`, `path`

## Notes

- The service uses the modern WHATWG URL API in our code (no deprecation warnings from our code)
- **Note**: The `grib-js` library may emit deprecation warnings about `url.parse()` - these are from the dependency and are suppressed by the service
- All downloads use HTTPS for security
- The service respects NOMADS server availability and processing delays
- Field pattern matching is flexible to handle variations in inventory format

