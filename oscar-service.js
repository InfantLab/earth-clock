/**
 * oscar-service - Fetches and refreshes OSCAR ocean current overlays
 *
 * The frontend expects:
 *   public/data/oscar/catalog.json  -> array of filenames (sorted, newest last)
 *   public/data/oscar/<file>.json   -> JSON-ified GRIB-like records [u, v]
 *
 * To avoid re-implementing OSCAR NetCDF processing here, this service mirrors the
 * pre-generated OSCAR JSON layers from an upstream source (default: earth.nullschool.net).
 */
"use strict";

var http = require("http");
var https = require("https");
var fs = require("fs");
var path = require("path");

var OSCAR_DIR = path.join(__dirname, "public", "data", "oscar");
// Default to the existing earth-clock deployment, which serves OSCAR JSON layers.
// You can point this at any server hosting the same file structure.
var DEFAULT_SOURCE = "https://earth-clock.onemonkey.org/data/oscar";
var OSCAR_SOURCE_BASE_URL = (process.env.OSCAR_SOURCE_BASE_URL || DEFAULT_SOURCE).replace(/\/+$/, "");
var UPDATE_INTERVAL = parseInt(process.env.OSCAR_UPDATE_INTERVAL_MS || "", 10);
if (isNaN(UPDATE_INTERVAL) || UPDATE_INTERVAL <= 0) {
    UPDATE_INTERVAL = 24 * 60 * 60 * 1000; // daily
}
var KEEP_LAYERS = parseInt(process.env.OSCAR_KEEP_LAYERS || "", 10);
if (isNaN(KEEP_LAYERS) || KEEP_LAYERS <= 0) {
    KEEP_LAYERS = 3; // keep the most recent few for navigation
}
var ENABLED = (process.env.OSCAR_SERVICE_ENABLED || "true").toLowerCase() !== "false";

if (!fs.existsSync(OSCAR_DIR)) {
    fs.mkdirSync(OSCAR_DIR, { recursive: true });
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

function updateOscarData() {
    var catalogUrl = OSCAR_SOURCE_BASE_URL + "/catalog.json";
    console.log("OSCAR: fetching catalog from " + catalogUrl);

    return requestJson(catalogUrl).then(function (catalog) {
        if (!Array.isArray(catalog) || catalog.length === 0) {
            throw new Error("OSCAR: invalid catalog format");
        }

        // Keep the newest N entries.
        var keep = catalog.slice(Math.max(0, catalog.length - KEEP_LAYERS));
        var downloadPromises = keep.map(function (file) {
            var localPath = path.join(OSCAR_DIR, file);
            if (fs.existsSync(localPath)) {
                return Promise.resolve(null);
            }
            var fileUrl = OSCAR_SOURCE_BASE_URL + "/" + file;
            console.log("OSCAR: downloading " + fileUrl);
            return requestBuffer(fileUrl).then(function (buf) {
                writeAtomic(localPath, buf);
                return null;
            });
        });

        return Promise.all(downloadPromises).then(function () {
            var localCatalogPath = path.join(OSCAR_DIR, "catalog.json");
            writeAtomic(localCatalogPath, JSON.stringify(keep));
            console.log("OSCAR: updated catalog (" + keep.length + " layer(s))");
            return keep;
        });
    });
}

function startOscarService() {
    if (!ENABLED) {
        console.log("OSCAR Service disabled (OSCAR_SERVICE_ENABLED=false)");
        return;
    }
    console.log("============================================================");
    console.log("OSCAR Service Starting");
    console.log("OSCAR dir: " + OSCAR_DIR);
    console.log("OSCAR source: " + OSCAR_SOURCE_BASE_URL);
    console.log("Update interval: " + Math.round(UPDATE_INTERVAL / 1000 / 60 / 60) + " hours");
    console.log("Keep layers: " + KEEP_LAYERS);
    console.log("============================================================");

    var inProgress = false;
    function runOnce(label) {
        if (inProgress) {
            console.log("OSCAR: previous run still in progress, skipping (" + label + ")");
            return;
        }
        inProgress = true;
        updateOscarData().catch(function (err) {
            console.error("OSCAR " + label + " update failed:", err.message);
        }).finally(function () {
            inProgress = false;
        });
    }

    runOnce("Initial");
    setInterval(function () { runOnce("Scheduled"); }, UPDATE_INTERVAL);
}

module.exports = {
    updateOscarData: updateOscarData,
    startOscarService: startOscarService
};

