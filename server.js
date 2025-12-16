/**
 * Production server for earth-clock
 * Supports base path configuration for subpath hosting (e.g., /earth-clock)
 */

"use strict";

var http = require("http");
var fs = require("fs");
var path = require("path");

// Background data updaters (weather overlays + OSCAR currents).
// These are started from the main server process so Docker/CapRover runs a single long-lived process.
var weatherService = require("./weather-service");
var oscarService = require("./oscar-service");

var port = process.env.PORT || 80;
var basePath = process.env.BASE_PATH || "/";
// Ensure base path starts with / and ends without /
if (!basePath.startsWith("/")) {
    basePath = "/" + basePath;
}
if (basePath !== "/" && basePath.endsWith("/")) {
    basePath = basePath.slice(0, -1);
}

var publicDir = path.join(__dirname, "public");
var publicDirResolved = path.resolve(publicDir);

var mimeTypes = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".json": "application/json",
    ".css": "text/css",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".ttf": "font/ttf",
    ".woff": "font/woff",
    ".woff2": "font/woff2"
};

// HTML files that need base tag injection
var htmlFiles = ["index.html", "jp/index.html", "about.html", "jp/about.html"];

function injectBaseTag(htmlContent, basePath) {
    // Inject <base href="..."> tag right after <head>
    var baseTag = '<base href="' + basePath + '/">';
    return htmlContent.replace(/<head>/, "<head>\n    " + baseTag);
}

var server = http.createServer(function (req, res) {
    // Extract pathname from URL (handle query strings)
    var urlPath = req.url;
    var queryIndex = urlPath.indexOf('?');
    var pathname = queryIndex >= 0 ? urlPath.substring(0, queryIndex) : urlPath;

    // Strip base path if present (CapRover may or may not strip it)
    if (basePath !== "/" && pathname.startsWith(basePath)) {
        pathname = pathname.substring(basePath.length);
    }

    // Default to index.html for root
    if (pathname === "/" || pathname === "") {
        pathname = "/index.html";
    }

    // Resolve absolute path and guard against path traversal (CVE-2025-23084 / CVE-2025-27210)
    var filePath = path.resolve(publicDirResolved, "." + pathname);

    // Security check - ensure file is within public directory
    if (filePath !== publicDirResolved && !filePath.startsWith(publicDirResolved + path.sep)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
    }

    fs.stat(filePath, function (err, stats) {
        if (err || !stats.isFile()) {
            res.writeHead(404);
            res.end("Not Found");
            return;
        }

        var ext = path.extname(filePath).toLowerCase();
        var contentType = mimeTypes[ext] || "application/octet-stream";

        // Check if this is an HTML file that needs base tag injection
        var relativePath = path.relative(publicDirResolved, filePath).replace(/\\/g, "/");
        var needsBaseTag = htmlFiles.indexOf(relativePath) >= 0;

        if (needsBaseTag) {
            // Read file, inject base tag, and serve
            fs.readFile(filePath, "utf8", function (readErr, content) {
                if (readErr) {
                    res.writeHead(500);
                    res.end("Internal Server Error");
                    return;
                }
                var modifiedContent = injectBaseTag(content, basePath);
                res.setHeader("Content-Type", contentType);
                res.setHeader("Cache-Control", "public, max-age=300");
                res.end(modifiedContent);
            });
        } else {
            // Serve file normally
            res.setHeader("Content-Type", contentType);
            res.setHeader("Cache-Control", "public, max-age=300");
            var stream = fs.createReadStream(filePath);
            stream.on("error", function () {
                res.writeHead(500);
                res.end("Internal Server Error");
            });
            stream.pipe(res);
        }
    });
});

server.listen(port, function () {
    console.log("============================================================");
    console.log(new Date().toISOString() + " - Starting production server");
    console.log("Base path: " + basePath);
    console.log("BASE_PATH env var: " + (process.env.BASE_PATH || "(not set)"));
    console.log("Listening on port " + port + "...");
});

// Start background services after the HTTP server is up.
setTimeout(function () {
    try {
        weatherService.startWeatherService();
    } catch (e) {
        console.error("Failed to start weather service:", e && e.message ? e.message : e);
    }
    try {
        oscarService.startOscarService();
    } catch (e2) {
        console.error("Failed to start OSCAR service:", e2 && e2.message ? e2.message : e2);
    }
}, 0);

