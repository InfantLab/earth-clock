/**
 * earthquake-service - Fetches and refreshes the USGS earthquake feed
 *
 * The frontend expects:
 *   public/data/earthquakes/current.json -> { generated, events: [{id, mag, lon, lat, depthKm, timeMs, place}] }
 *
 * USGS's GeoJSON feeds don't send CORS headers, so the browser can't fetch them
 * directly. This service polls server-side and writes a small, trimmed JSON file
 * the frontend can fetch same-origin, mirroring oscar-service.js's approach.
 */
"use strict";

var http = require("http");
var https = require("https");
var fs = require("fs");
var path = require("path");

var EARTHQUAKE_DIR = path.join(__dirname, "public", "data", "earthquakes");
var OUT_PATH = path.join(EARTHQUAKE_DIR, "current.json");
var DEFAULT_SOURCE = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var SOURCE_URL = process.env.EARTHQUAKE_SOURCE_URL || DEFAULT_SOURCE;
var UPDATE_INTERVAL = parseInt(process.env.EARTHQUAKE_UPDATE_INTERVAL_MS || "", 10);
if (isNaN(UPDATE_INTERVAL) || UPDATE_INTERVAL <= 0) {
    UPDATE_INTERVAL = 15 * 60 * 1000; // 15 minutes
}
var ENABLED = (process.env.EARTHQUAKE_SERVICE_ENABLED || "true").toLowerCase() !== "false";

if (!fs.existsSync(EARTHQUAKE_DIR)) {
    fs.mkdirSync(EARTHQUAKE_DIR, { recursive: true });
}

function requestBuffer(url) {
    return new Promise(function (resolve, reject) {
        var protocol = url.startsWith("https") ? https : http;
        var urlObj = new URL(url);
        var options = {
            hostname: urlObj.hostname,
            port: urlObj.port || (urlObj.protocol === "https:" ? 443 : 80),
            path: urlObj.pathname + urlObj.search,
            method: "GET",
            headers: { "User-Agent": "Mozilla/5.0 (compatible; Earth-Clock/1.0)" },
            timeout: 60000
        };

        var req = protocol.request(options, function (res) {
            if (res.statusCode !== 200) {
                reject(new Error("HTTP " + res.statusCode + " " + res.statusMessage + " for " + url));
                return;
            }
            var chunks = [];
            res.on("data", function (c) { chunks.push(c); });
            res.on("end", function () { resolve(Buffer.concat(chunks)); });
        });
        req.on("error", reject);
        req.on("timeout", function () { req.destroy(new Error("Request timed out: " + url)); });
        req.end();
    });
}

function requestJson(url) {
    return requestBuffer(url).then(function (buf) {
        try {
            return JSON.parse(buf.toString("utf8"));
        } catch (e) {
            e.message = "Failed to parse JSON from " + url + ": " + e.message;
            throw e;
        }
    });
}

function writeAtomic(filePath, contents) {
    var dir = path.dirname(filePath);
    var tmpPath = path.join(dir, path.basename(filePath) + ".tmp-" + process.pid + "-" + Date.now());
    fs.writeFileSync(tmpPath, contents);
    fs.renameSync(tmpPath, filePath);
}

// USGS geometry.coordinates is [lon, lat, depthKm]. Trim to only the fields
// the frontend renders (magnitude size, depth color, event-time decay).
function trimFeature(feature) {
    var props = feature.properties || {};
    var coords = (feature.geometry && feature.geometry.coordinates) || [];
    return {
        id: feature.id,
        mag: typeof props.mag === "number" ? props.mag : 0,
        lon: coords[0],
        lat: coords[1],
        depthKm: typeof coords[2] === "number" ? coords[2] : 0,
        timeMs: props.time,
        place: props.place || ""
    };
}

function updateEarthquakeData() {
    console.log("Earthquakes: fetching " + SOURCE_URL);
    return requestJson(SOURCE_URL).then(function (geojson) {
        if (!geojson || !Array.isArray(geojson.features)) {
            throw new Error("Earthquakes: invalid GeoJSON format");
        }

        var events = geojson.features
            .filter(function (f) {
                var coords = f.geometry && f.geometry.coordinates;
                return Array.isArray(coords) && typeof coords[0] === "number" && typeof coords[1] === "number";
            })
            .map(trimFeature);

        var out = {
            generated: new Date().toISOString(),
            events: events
        };
        writeAtomic(OUT_PATH, JSON.stringify(out));
        console.log("Earthquakes: updated (" + events.length + " event(s))");
        return out;
    });
}

function startEarthquakeService() {
    if (!ENABLED) {
        console.log("Earthquake Service disabled (EARTHQUAKE_SERVICE_ENABLED=false)");
        return;
    }
    console.log("============================================================");
    console.log("Earthquake Service Starting");
    console.log("Earthquake dir: " + EARTHQUAKE_DIR);
    console.log("Source: " + SOURCE_URL);
    console.log("Update interval: " + Math.round(UPDATE_INTERVAL / 1000 / 60) + " minutes");
    console.log("============================================================");

    var inProgress = false;
    function runOnce(label) {
        if (inProgress) {
            console.log("Earthquakes: previous run still in progress, skipping (" + label + ")");
            return;
        }
        inProgress = true;
        updateEarthquakeData().catch(function (err) {
            console.error("Earthquakes " + label + " update failed:", err.message);
        }).finally(function () {
            inProgress = false;
        });
    }

    runOnce("Initial");
    setInterval(function () { runOnce("Scheduled"); }, UPDATE_INTERVAL);
}

module.exports = {
    updateEarthquakeData: updateEarthquakeData,
    startEarthquakeService: startEarthquakeService
};
