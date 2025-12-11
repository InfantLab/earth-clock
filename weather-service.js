/**
 * weather-service - Fetches and converts current GFS weather data
 * 
 * This service periodically downloads GFS data from NOAA NOMADS,
 * converts it from GRIB2 to JSON format, and makes it available
 * to the frontend application.
 */

"use strict";

// Suppress deprecation warnings from grib-js dependency
// The grib-js library uses url.parse() internally, which we cannot fix
process.removeAllListeners('warning');
process.on('warning', function (warning) {
    // Only suppress DEP0169 (url.parse deprecation) warnings
    if (warning.name === 'DeprecationWarning' && warning.message.includes('url.parse')) {
        return; // Suppress this specific warning
    }
    // Show other warnings normally
    console.warn(warning.name + ': ' + warning.message);
});

var http = require("http");
var https = require("https");
var fs = require("fs");
var path = require("path");
var grib2Converter = require("./lib/grib2-converter");
var nomadsDownloader = require("./lib/nomads-downloader");

var WEATHER_DATA_DIR = path.join(__dirname, "public", "data", "weather", "current");
var GFS_BASE_URL = "https://nomads.ncep.noaa.gov";
var UPDATE_INTERVAL = 6 * 60 * 60 * 1000; // 6 hours (GFS updates 4x daily)

// Ensure data directory exists
if (!fs.existsSync(WEATHER_DATA_DIR)) {
    fs.mkdirSync(WEATHER_DATA_DIR, { recursive: true });
}

/**
 * Get the most recent available date in YYYYMMDD format
 * GFS data is typically available for dates up to yesterday or today
 * We need to check what dates are actually available on the server
 */
function getCurrentDateString() {
    var now = new Date();
    var year = now.getUTCFullYear();
    var month = String(now.getUTCMonth() + 1).padStart(2, '0');
    var day = String(now.getUTCDate()).padStart(2, '0');
    var today = year + month + day;

    // Try today first, but if it fails we'll fall back to yesterday
    // The actual date checking happens when we try to download
    return today;
}

/**
 * Get the most recent available date by checking what's actually on the server
 * This is a more reliable approach than assuming today's date exists
 */
function getAvailableDateString(callback) {
    // For now, try today and yesterday
    // In a production system, you might want to actually query the server
    var now = new Date();
    var today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    var yesterday = new Date(today);
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);

    var todayStr = String(today.getUTCFullYear()) +
        String(today.getUTCMonth() + 1).padStart(2, '0') +
        String(today.getUTCDate()).padStart(2, '0');
    var yesterdayStr = String(yesterday.getUTCFullYear()) +
        String(yesterday.getUTCMonth() + 1).padStart(2, '0') +
        String(yesterday.getUTCDate()).padStart(2, '0');

    // Return both dates - we'll try today first, then yesterday
    return [todayStr, yesterdayStr];
}

/**
 * Get the most recent GFS run (00z, 06z, 12z, or 18z)
 * GFS runs are typically available 3-4 hours after the run time
 * So we look back to find the most recent available run
 * 
 * Returns an array of runs to try in order (most recent first)
 */
function getLatestGFSRuns() {
    var now = new Date();
    var hour = now.getUTCHours();
    // GFS runs at 00, 06, 12, 18 UTC
    // Data is typically available 3-4 hours after run time
    // So if it's 20:00 UTC, the 18z run might not be ready yet, use 12z instead
    var allRuns = [18, 12, 6, 0];
    var runsToTry = [];

    // Look for the most recent run that should be available
    // Subtract 4 hours to account for processing delay
    var adjustedHour = hour - 4;
    if (adjustedHour < 0) adjustedHour += 24;

    // Start with the most recent run that should be available
    for (var i = 0; i < allRuns.length; i++) {
        if (adjustedHour >= allRuns[i]) {
            // Add this run and all previous runs (they should all be available)
            for (var j = i; j < allRuns.length; j++) {
                runsToTry.push(String(allRuns[j]).padStart(2, '0') + 'z');
            }
            break;
        }
    }

    // If no runs found, default to 12z and 00z (most common)
    if (runsToTry.length === 0) {
        runsToTry = ['12z', '00z'];
    }

    return runsToTry;
}

/**
 * Get a single GFS run (for backward compatibility)
 */
function getLatestGFSRun() {
    var runs = getLatestGFSRuns();
    return runs[0];
}

/**
 * Download GFS GRIB2 file using index-based partial transfer method
 * This is the recommended approach per NOMADS documentation:
 * https://nomads.ncep.noaa.gov/info.php?page=fastdownload
 * https://www.cpc.ncep.noaa.gov/products/wesley/fast_downloading_grib.html
 * 
 * Falls back to filter_gfs.pl method if index-based download fails
 */
function downloadGFSFile(dateStr, run, outputPath) {
    var runHour = run.substring(0, 2);

    // Use index-based method as primary (recommended fast download approach)
    // Filter script method as fallback
    // URL format: https://nomads.ncep.noaa.gov/pub/data/nccf/com/gfs/prod/gfs.YYYYMMDD/{cycle}/atmos/gfs.t{cycle}z.pgrb2.1p00.f000

    var gfsDir = "gfs." + dateStr;
    var gfsFile = "gfs.t" + run + ".pgrb2.1p00.f000";
    var baseUrl = "https://nomads.ncep.noaa.gov/pub/data/nccf/com/gfs/prod/" + gfsDir + "/" + runHour + "/atmos/" + gfsFile;

    // Download U and V wind components at 10m above ground
    // Try multiple pattern variations to match inventory format
    var fieldPatterns = [
        ":UGRD:10 m above ground:",
        ":VGRD:10 m above ground:",
        ":UGRD:10 m",
        ":VGRD:10 m",
        "UGRD:10 m above ground",
        "VGRD:10 m above ground",
        "UGRD:10 m",
        "VGRD:10 m"
    ];

    console.log("Attempting download using index-based method (fast download - recommended)");
    console.log("GRIB URL:", baseUrl);

    return nomadsDownloader.downloadGrib2Fields(baseUrl, fieldPatterns, outputPath)
        .catch(function (err) {
            console.log("Index-based method failed, trying filter script method (fallback)...");
            console.log("Error:", err.message);

            // Fallback to filter script method
            return downloadGFSFileFallback(dateStr, run, outputPath);
        });
}

/**
 * Fallback: Download using filter_gfs_1p00.pl CGI script
 * This uses the current NOMADS filter script format
 * Tries multiple directory format variants
 */
function downloadGFSFileFallback(dateStr, run, outputPath) {
    return new Promise(function (resolve, reject) {
        var runHour = run.substring(0, 2);
        // Based on investigation: Correct format is /gfs.YYYYMMDD/{cycle}/atmos
        // Try both directory formats in case one doesn't work
        var gfsDirs = [
            "/gfs." + dateStr + "/" + runHour + "/atmos",  // New format (confirmed from docs)
            "/gfs." + dateStr + runHour                     // Old format (fallback)
        ];
        var gfsFile = "gfs.t" + run + ".pgrb2.1p00.f000";

        var tryFallback = function (dirIndex) {
            if (dirIndex >= gfsDirs.length) {
                reject(new Error("All filter script URL variants failed"));
                return;
            }

            var gfsDir = gfsDirs[dirIndex];
            var nomadsUrl = GFS_BASE_URL + "/cgi-bin/filter_gfs_1p00.pl" +
                "?file=" + gfsFile +
                "&lev_10_m_above_ground=on" +
                "&var_UGRD=on" +
                "&var_VGRD=on" +
                "&dir=" + encodeURIComponent(gfsDir);

            console.log("Trying filter script (variant " + (dirIndex + 1) + "):", nomadsUrl);

            var urlObj = new URL(nomadsUrl);
            var protocol = nomadsUrl.startsWith('https') ? https : http;
            var options = {
                hostname: urlObj.hostname,
                port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
                path: urlObj.pathname + urlObj.search,
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (compatible; Earth-Clock/1.0)'
                },
                timeout: 60000 // 60 second timeout
            };

            var file = fs.createWriteStream(outputPath);
            var req = protocol.request(options, function (response) {
                if (response.statusCode === 302 || response.statusCode === 301) {
                    file.close();
                    if (fs.existsSync(outputPath)) {
                        fs.unlinkSync(outputPath);
                    }
                    // Follow redirect
                    return tryFallback(dirIndex + 1);
                }

                if (response.statusCode !== 200) {
                    file.close();
                    if (fs.existsSync(outputPath)) {
                        fs.unlinkSync(outputPath);
                    }
                    console.log("Variant " + (dirIndex + 1) + " failed: HTTP " + response.statusCode + " " + response.statusMessage);
                    return tryFallback(dirIndex + 1);
                }

                response.pipe(file);

                file.on('finish', function () {
                    file.close();
                    var stats = fs.statSync(outputPath);
                    console.log("Downloaded successfully:", outputPath, "(" + (stats.size / 1024 / 1024).toFixed(2) + " MB)");
                    resolve(outputPath);
                });
            });

            req.on('error', function (err) {
                file.close();
                if (fs.existsSync(outputPath)) {
                    fs.unlinkSync(outputPath);
                }
                console.log("Variant " + (dirIndex + 1) + " error:", err.message);
                // If it's a network error, try next variant
                if (err.code === 'ENOTFOUND' || err.code === 'EAI_AGAIN' || err.code === 'ETIMEDOUT') {
                    tryFallback(dirIndex + 1);
                } else {
                    reject(err);
                }
            });

            req.on('timeout', function () {
                req.destroy();
                file.close();
                if (fs.existsSync(outputPath)) {
                    fs.unlinkSync(outputPath);
                }
                console.log("Variant " + (dirIndex + 1) + " timeout");
                tryFallback(dirIndex + 1);
            });

            req.end();
        };

        tryFallback(0);
    });
}

/**
 * Convert GRIB2 file to JSON using native JavaScript parser (grib-js)
 * No Java dependency required!
 */
function convertGrib2ToJson(gribFile, jsonFile) {
    return new Promise(function (resolve, reject) {
        console.log("Converting GRIB2 to JSON using native parser: " + gribFile);

        grib2Converter.convertGrib2ToJsonFile(gribFile, jsonFile, function (err) {
            if (err) {
                console.error("Conversion error:", err.message);
                reject(err);
                return;
            }

            console.log("Converted to JSON: " + jsonFile);
            resolve(jsonFile);
        });
    });
}

/**
 * Fetch and process current GFS data
 * Tries multiple dates and GFS runs in order until one succeeds
 */
function fetchCurrentGFSData(callback) {
    // Try both today and yesterday since today's data may not be available yet
    var now = new Date();
    var today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    var yesterday = new Date(today);
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);

    var todayStr = String(today.getUTCFullYear()) +
        String(today.getUTCMonth() + 1).padStart(2, '0') +
        String(today.getUTCDate()).padStart(2, '0');
    var yesterdayStr = String(yesterday.getUTCFullYear()) +
        String(yesterday.getUTCMonth() + 1).padStart(2, '0') +
        String(yesterday.getUTCDate()).padStart(2, '0');

    var datesToTry = [todayStr, yesterdayStr];
    var runsToTry = getLatestGFSRuns();

    // Temporary files
    var tempGribFile = path.join(__dirname, "temp_gfs.grib2");
    var outputJsonFile = path.join(WEATHER_DATA_DIR, "current-wind-surface-level-gfs-1.0.json");

    console.log("Fetching GFS data");
    console.log("Will try dates:", datesToTry.join(", "));
    console.log("Will try runs:", runsToTry.join(", "));

    // Try each date in order
    var tryDate = function (dateIndex) {
        if (dateIndex >= datesToTry.length) {
            var error = new Error("All dates and runs failed. Tried dates: " + datesToTry.join(", ") + " with runs: " + runsToTry.join(", ") + ". Data may not be available yet.");
            console.error("Error fetching GFS data:", error.message);
            if (fs.existsSync(tempGribFile)) {
                fs.unlinkSync(tempGribFile);
            }
            if (callback) callback(error);
            return;
        }

        var dateStr = datesToTry[dateIndex];
        console.log("Trying date: " + dateStr + " (" + (dateIndex + 1) + "/" + datesToTry.length + ")");

        // Try each run in order for this date
        var tryRun = function (runIndex) {
            if (runIndex >= runsToTry.length) {
                // All runs failed for this date, try next date
                console.log("All runs failed for date " + dateStr + ", trying next date...");
                tryDate(dateIndex + 1);
                return;
            }

            var run = runsToTry[runIndex];
            console.log("Trying date " + dateStr + ", run: " + run + " (" + (runIndex + 1) + "/" + runsToTry.length + ")");

            // Download GFS data using index-based method, then convert
            downloadGFSFile(dateStr, run, tempGribFile).then(function () {
                return convertGrib2ToJson(tempGribFile, outputJsonFile);
            }).then(function () {
                // Clean up temp file
                if (fs.existsSync(tempGribFile)) {
                    fs.unlinkSync(tempGribFile);
                }
                console.log("Successfully updated weather data: " + outputJsonFile + " (using date " + dateStr + ", run " + run + ")");
                if (callback) callback(null, outputJsonFile);
            }).catch(function (error) {
                console.error("Date " + dateStr + ", run " + run + " failed:", error.message);
                // Try next run
                tryRun(runIndex + 1);
            });
        };

        tryRun(0);
    };

    tryDate(0);
}

/**
 * Start the weather data service
 */
function startWeatherService() {
    console.log("============================================================");
    console.log("Weather Data Service Starting");
    console.log("Data directory: " + WEATHER_DATA_DIR);
    console.log("Update interval: " + (UPDATE_INTERVAL / 1000 / 60 / 60) + " hours");
    console.log("============================================================");

    // Fetch immediately on start
    fetchCurrentGFSData(function (error) {
        if (error) {
            console.error("Initial fetch failed:", error.message);
            console.error("Service will retry on next interval");
        }
    });

    // Schedule periodic updates
    setInterval(function () {
        fetchCurrentGFSData(function (error) {
            if (error) {
                console.error("Scheduled fetch failed:", error.message);
            }
        });
    }, UPDATE_INTERVAL);
}

// Export for use as module or run directly
if (require.main === module) {
    startWeatherService();
} else {
    module.exports = {
        fetchCurrentGFSData: fetchCurrentGFSData,
        startWeatherService: startWeatherService
    };
}
