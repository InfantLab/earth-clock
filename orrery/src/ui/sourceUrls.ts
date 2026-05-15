/**
 * Per-source homepage links surfaced from the unified Data panel — clicking the source
 * label opens a new tab to the organisation responsible for that data stream. Kept
 * deliberately at the organisation level (NOAA SWPC overview, NASA GIBS overview) rather
 * than the raw endpoint URL: stable, won't rot when an endpoint moves, and friendly for
 * newcomers who want to learn about the source rather than inspect JSON.
 *
 * Add to this map whenever a new data layer lands. Keys must match the DataRegistry keys.
 */
export const SOURCE_URLS: Record<string, string> = {
  // NOAA GFS — every variable goes through the same NOMADS portal.
  wind:           "https://nomads.ncep.noaa.gov/",
  mslp:           "https://nomads.ncep.noaa.gov/",
  temp:           "https://nomads.ncep.noaa.gov/",
  rh:             "https://nomads.ncep.noaa.gov/",
  tpw:            "https://nomads.ncep.noaa.gov/",
  tcw:            "https://nomads.ncep.noaa.gov/",
  "gfs-clouds":   "https://nomads.ncep.noaa.gov/",
  // NOAA SWPC space-weather
  aurora:         "https://www.swpc.noaa.gov/products/aurora-30-minute-forecast",
  kp:             "https://www.swpc.noaa.gov/products/planetary-k-index",
  // NOAA NHC tropical cyclones
  hurricanes:     "https://www.nhc.noaa.gov/",
  "storm-tracks": "https://www.nhc.noaa.gov/",
  // NASA imagery / fires
  viirs:          "https://gibs.earthdata.nasa.gov/",
  fires:          "https://firms.modaps.eosdis.nasa.gov/",
  // Lightning community network
  lightning:      "https://www.blitzortung.org/",
  // Static / bundled
  "day map":      "https://www.solarsystemscope.com/textures/",
  "night map":    "https://www.solarsystemscope.com/textures/",
  moon:           "https://astrogeology.usgs.gov/",
  coastlines:     "https://www.naturalearthdata.com/",
  eclipse:        "https://eclipse.gsfc.nasa.gov/SEcat5/SE2021-2030.html",
};
