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

var server = http.createServer(function(req, res) {
    // Extract pathname from URL (handle query strings)
    var urlPath = req.url;
    var queryIndex = urlPath.indexOf('?');
    var pathname = queryIndex >= 0 ? urlPath.substring(0, queryIndex) : urlPath;
    
    // Default to index.html for root
    if (pathname === "/") {
        pathname = "/index.html";
    }
    
    var filePath = path.join(publicDir, pathname);
    
    // Security check - ensure file is within public directory
    if (!filePath.startsWith(publicDir)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
    }
    
    fs.stat(filePath, function(err, stats) {
        if (err || !stats.isFile()) {
            res.writeHead(404);
            res.end("Not Found");
            return;
        }
        
        var ext = path.extname(filePath).toLowerCase();
        var contentType = mimeTypes[ext] || "application/octet-stream";
        
        res.setHeader("Content-Type", contentType);
        res.setHeader("Cache-Control", "public, max-age=300");
        
        var stream = fs.createReadStream(filePath);
        stream.on("error", function() {
            res.writeHead(500);
            res.end("Internal Server Error");
        });
        stream.pipe(res);
    });
});

server.listen(port);
console.log("Listening on port " + port + "...");
