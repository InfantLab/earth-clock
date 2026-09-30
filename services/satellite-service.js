/**
 * satellite-service - Mirrors CelesTrak GP orbital elements for the satellites layer
 *
 * The frontend expects:
 *   public/data/satellites/current.json -> { generated, source, sats: [OMM JSON records] }
 *
 * CelesTrak asks clients not to re-download GP data faster than it updates (~2 h) and
 * blocks IPs that do, so browsers must never fetch it directly. This service polls every
 * 4 h and writes one small same-origin file. On failure the last good file is kept.
 *
 * We mirror the whole "stations" group (ISS, Tiangong, and visiting crew/cargo vehicles —
 * see satellites-plan.md §4.4) plus any extra NORAD ids in SATELLITE_EXTRA_CATNR. The
 * frontend catalogue (frontend/src/space/catalog.ts) picks what it shows by NORAD id.
 *
 * CLI: `node services/satellite-service.js --once [outPath]` fetches once and exits.
 * `npm run satellites:fallback` uses this to refresh the committed offline snapshot.
 */
"use strict";

var https = require("https");
var fs = require("fs");
var path = require("path");

var SAT_DIR = path.join(__dirname, "..", "public", "data", "satellites");
var OUT_PATH = path.join(SAT_DIR, "current.json");
var GP_BASE = process.env.SATELLITE_GP_BASE || "https://celestrak.org/NORAD/elements/gp.php";
var GROUPS = (process.env.SATELLITE_GROUPS || "stations").split(",").filter(Boolean);
// 20580 = Hubble. Future catalogue entries outside the stations group go here.
var EXTRA_CATNR = (process.env.SATELLITE_EXTRA_CATNR || "20580").split(",").filter(Boolean);
var UPDATE_INTERVAL = parseInt(process.env.SATELLITE_UPDATE_INTERVAL_MS || "", 10);
if (isNaN(UPDATE_INTERVAL) || UPDATE_INTERVAL < 2 * 60 * 60 * 1000) {
    UPDATE_INTERVAL = 4 * 60 * 60 * 1000; // 4 hours; never below CelesTrak's 2 h update cadence
}
var ENABLED = (process.env.SATELLITE_SERVICE_ENABLED || "true").toLowerCase() !== "false";

function requestJson(url) {
    return new Promise(function (resolve, reject) {
        var req = https.get(url, {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; Earth-Clock/1.0; +https://earth-clock.onemonkey.org)" },
            timeout: 60000
        }, function (res) {
            var chunks = [];
            res.on("data", function (c) { chunks.push(c); });
            res.on("end", function () {
                var body = Buffer.concat(chunks).toString("utf8");
                if (res.statusCode !== 200) {
                    // CelesTrak explains throttling / unknown-group errors in a plain-text body.
                    reject(new Error("HTTP " + res.statusCode + " for " + url + ": " + body.slice(0, 200)));
                    return;
                }
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(new Error("Non-JSON response from " + url + ": " + body.slice(0, 200)));
                }
            });
        });
        req.on("error", reject);
        req.on("timeout", function () { req.destroy(new Error("Request timed out: " + url)); });
    });
}

function writeAtomic(filePath, contents) {
    var dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    var tmpPath = path.join(dir, path.basename(filePath) + ".tmp-" + process.pid + "-" + Date.now());
    fs.writeFileSync(tmpPath, contents);
    fs.renameSync(tmpPath, filePath);
}

function isOmm(rec) {
    return rec && typeof rec.EPOCH === "string" && rec.NORAD_CAT_ID != null && rec.MEAN_MOTION != null;
}

function updateSatelliteData(outPath) {
    outPath = outPath || OUT_PATH;
    var urls = GROUPS.map(function (g) { return GP_BASE + "?GROUP=" + encodeURIComponent(g) + "&FORMAT=json"; })
        .concat(EXTRA_CATNR.map(function (n) { return GP_BASE + "?CATNR=" + encodeURIComponent(n) + "&FORMAT=json"; }));

    // Sequential, not parallel — be polite to CelesTrak.
    var byId = {};
    var failures = [];
    return urls.reduce(function (p, url) {
        return p.then(function () {
            console.log("Satellites: fetching " + url);
            return requestJson(url).then(function (arr) {
                (Array.isArray(arr) ? arr : []).filter(isOmm).forEach(function (rec) {
                    byId[rec.NORAD_CAT_ID] = rec;
                });
            }, function (err) {
                failures.push(err.message);
                console.error("Satellites: " + err.message);
            });
        });
    }, Promise.resolve()).then(function () {
        var sats = Object.keys(byId).map(function (k) { return byId[k]; });
        if (sats.length === 0) {
            throw new Error("no element sets fetched (" + failures.join("; ") + ") — keeping previous file");
        }
        var out = {
            generated: new Date().toISOString(),
            source: "CelesTrak GP (celestrak.org)",
            sats: sats
        };
        writeAtomic(outPath, JSON.stringify(out));
        console.log("Satellites: wrote " + sats.length + " element set(s) to " + outPath);
        return out;
    });
}

function startSatelliteService() {
    if (!ENABLED) {
        console.log("Satellite Service disabled (SATELLITE_SERVICE_ENABLED=false)");
        return;
    }
    console.log("============================================================");
    console.log("Satellite Service Starting");
    console.log("Output: " + OUT_PATH);
    console.log("Groups: " + GROUPS.join(", ") + " · extra CATNR: " + (EXTRA_CATNR.join(", ") || "none"));
    console.log("Update interval: " + Math.round(UPDATE_INTERVAL / 1000 / 60) + " minutes");
    console.log("============================================================");

    var inProgress = false;
    function runOnce(label) {
        if (inProgress) return;
        inProgress = true;
        updateSatelliteData().catch(function (err) {
            console.error("Satellites " + label + " update failed:", err.message);
        }).finally(function () {
            inProgress = false;
        });
    }

    // Skip the startup fetch if the file on disk is still fresh — container restarts
    // (CapRover redeploys) shouldn't each cost a CelesTrak download.
    var fresh = false;
    try {
        fresh = Date.now() - fs.statSync(OUT_PATH).mtimeMs < UPDATE_INTERVAL / 2;
    } catch (e) { /* no file yet */ }
    if (!fresh) runOnce("Initial");
    setInterval(function () { runOnce("Scheduled"); }, UPDATE_INTERVAL);
}

module.exports = {
    updateSatelliteData: updateSatelliteData,
    startSatelliteService: startSatelliteService
};

if (require.main === module && process.argv.indexOf("--once") !== -1) {
    var i = process.argv.indexOf("--once");
    var target = process.argv[i + 1] ? path.resolve(process.argv[i + 1]) : OUT_PATH;
    updateSatelliteData(target).catch(function (err) {
        console.error(err.message);
        process.exit(1);
    });
}
