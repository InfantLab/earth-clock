## Weather & Ocean Data Sources

This repo serves a web UI (Earth Clock) that visualizes “current” global weather overlays and ocean currents.

The frontend loads pre-generated JSON grids from `public/data/**`. The backend refreshers (`weather-service.js`, `oscar-service.js`) periodically download upstream datasets and write those JSON files.

## Weather (GFS)

### Upstream dataset
- **Model**: NOAA/NCEP **Global Forecast System (GFS)**
  - Overview: [NCEP EMC – GFS](https://www.emc.ncep.noaa.gov/emc/pages/numerical_forecast_systems/gfs.php)
- **Primary distribution (recommended)**: NOAA GFS on AWS Open Data (public S3)
  - Dataset page: [Registry of Open Data on AWS – noaa-gfs-bdp-pds](https://registry.opendata.aws/noaa-gfs-bdp-pds/)
  - Bucket base URL used by default: `https://noaa-gfs-bdp-pds.s3.amazonaws.com/`
- **Fallback distribution** (limited, used only for wind if needed): NOAA **NOMADS** GRIB filter
  - NOMADS portal: [nomads.ncep.noaa.gov](https://nomads.ncep.noaa.gov/)
  - Fast download (index / `.idx` + Range requests): [NOMADS “fast download”](https://nomads.ncep.noaa.gov/info.php?page=fastdownload)
  - GRIB filter CGI (subset downloads): [NOMADS GRIB filter](https://nomads.ncep.noaa.gov/cgi-bin/filter_gfs_1p00.pl)

### What we download
We generate “current” overlays by downloading a small subset of GRIB2 records and converting to JSON.

- **Wind** (vector): `UGRD` + `VGRD` at **10 m above ground**
- **Temp** (scalar): `TMP` at **2 m above ground**
- **Relative humidity** (scalar): `RH` at **2 m above ground**
- **Air density** (scalar, derived): computed from **surface pressure** (`PRES:surface`) and **2 m temperature** (`TMP:2 m`) using \(\rho = p/(R_d T)\)
- **Total precipitable water (TPW)**: `PWAT` “entire atmosphere (considered as a single layer)”
  - Note: We fetch this from the **0.25°** GFS file because it decodes reliably there.
- **Total cloud water (TCW)**: `CWAT` “entire atmosphere (considered as a single layer)”
- **Mean sea level pressure (MSLP)**: generated from **surface pressure**
  - Note: GFS `PRMSL` is complex-packed in the files we use and is not decoded by our JS GRIB2 parser; we currently approximate MSLP using `PRES:surface`.

### Local cache / output files
Files are written under:
- `public/data/weather/current/`

Current filenames expected by the UI:
- `current-wind-surface-level-gfs-1.0.json`
- `current-temp-surface-level-gfs-1.0.json`
- `current-relative_humidity-surface-level-gfs-1.0.json`
- `current-air_density-surface-level-gfs-1.0.json`
- `current-total_precipitable_water-gfs-1.0.json`
- `current-total_cloud_water-gfs-1.0.json`
- `current-mean_sea_level_pressure-gfs-1.0.json`

### Refresh cadence
- **Default interval**: every **6 hours** (GFS runs at 00/06/12/18 UTC)
- Configurable via env vars:
  - `WEATHER_SERVICE_ENABLED` (default `true`)
  - `UPDATE_INTERVAL_MS`
  - `RETRY_INTERVAL_MS`
  - `GFS_DATA_BASE_URL` (default S3 mirror)

## Ocean currents (OSCAR)

### Upstream dataset
- **Dataset**: **OSCAR** (Ocean Surface Current Analyses Real-time), Earth & Space Research
  - ESR product page: [OSCAR surface currents (ESR)](https://www.esr.org/data-products/oscar/oscar-surface-currents/)
  - PO.DAAC dataset pages (OSCAR v2.0):
    - [OSCAR_L4_OC_FINAL_V2.0](https://podaac.jpl.nasa.gov/dataset/OSCAR_L4_OC_FINAL_V2.0)
    - [OSCAR_L4_OC_INTERIM_V2.0](https://podaac.jpl.nasa.gov/dataset/OSCAR_L4_OC_INTERIM_V2.0)
    - [OSCAR_L4_OC_NRT_V2.0](https://podaac.jpl.nasa.gov/dataset/OSCAR_L4_OC_NRT_V2.0)

### How this repo updates currents
This repo does **not** convert OSCAR NetCDF → JSON directly.

Instead, `oscar-service.js` mirrors pre-generated OSCAR JSON layers from a configurable HTTP source:
- Default: `https://earth-clock.onemonkey.org/data/oscar`
- Env vars:
  - `OSCAR_SERVICE_ENABLED` (default `true`)
  - `OSCAR_SOURCE_BASE_URL`
  - `OSCAR_UPDATE_INTERVAL_MS` (default daily)
  - `OSCAR_KEEP_LAYERS` (default 3)

### Local cache / output files
- Catalog: `public/data/oscar/catalog.json`
- Layers: `public/data/oscar/<yyyyMMdd>-surface-currents-oscar-0.33.json`

## Notes
- The UI code that defines how filenames are built lives in `public/libs/earth/1.0.0/products.js`.
- The GRIB2 → JSON conversion uses `grib-js`. Some GRIB2 packing templates (notably complex packing used by `PRMSL`/`PWAT` in some products) may not decode; we work around this where needed.
