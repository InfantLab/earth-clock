/**
 * dev-server - serves static resources for developing "earth" locally
 * Updated to use Node's built-in http server for better compatibility
 */

"use strict";

console.log("============================================================");
console.log(new Date().toISOString() + " - Starting");

var http = require("http");
var fs = require("fs");
var path = require("path");

var port = process.argv[2] || 8080;
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

var server = http.createServer(function (req, res) {
    // Extract pathname from URL (handle query strings)
    var urlPath = req.url;
    var queryIndex = urlPath.indexOf('?');
    var pathname = queryIndex >= 0 ? urlPath.substring(0, queryIndex) : urlPath;

    // Default to index.html for root
    if (pathname === "/") {
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

    // Directory-index fallback: requests to /about/ (or /about) resolve to a directory;
    // serve its index.html so the local dev server mirrors NGINX behaviour in prod.
    // Without this, anything under public/ that's served via an "index.html in folder"
    // pattern (e.g. /about/, /classic/) returns 404 in dev.
    fs.stat(filePath, function (err, stats) {
        if (!err && stats.isDirectory()) {
            filePath = path.join(filePath, "index.html");
            fs.stat(filePath, function (err2, stats2) {
                if (err2 || !stats2.isFile()) {
                    res.writeHead(404);
                    res.end("Not Found");
                    return;
                }
                serveFile(filePath, res);
            });
            return;
        }
        if (err || !stats.isFile()) {
            res.writeHead(404);
            res.end("Not Found");
            return;
        }
        serveFile(filePath, res);
    });
});

function serveFile(filePath, res) {
    var ext = path.extname(filePath).toLowerCase();
    var contentType = mimeTypes[ext] || "application/octet-stream";

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=300");

    var stream = fs.createReadStream(filePath);
    stream.on("error", function () {
        res.writeHead(500);
        res.end("Internal Server Error");
    });
    stream.pipe(res);
}

server.listen(port);
console.log("Listening on port " + port + "...");