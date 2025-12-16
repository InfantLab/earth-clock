/**
 * NOMADS GRIB2 Downloader using index-based partial HTTP transfers
 * 
 * Implements the fast download method recommended by NOAA NOMADS:
 * https://nomads.ncep.noaa.gov/info.php?page=fastdownload
 * 
 * Uses HTTP Range requests to download only the needed fields from GRIB2 files.
 */

"use strict";

var https = require("https");
var http = require("http");
var fs = require("fs");

/**
 * Parse a wgrib inventory file to extract byte ranges for matching fields
 * 
 * Inventory formats:
 * - NOAA S3 / wgrib2 idx: field_number:start_byte:field_description
 *   Example: "585:34624363:d=2025121600:UGRD:10 m above ground:anl:"
 *   End byte is derived from the next record's start byte.
 * - Legacy format (some sources): field_number:start_byte:end_byte:field_description
 *   Example: "1:0:131858:d=2023120100:UGRD:10 m above ground:anl:"
 * 
 * @param {string} inventoryContent - Content of the .idx file
 * @param {Array<string>} fieldPatterns - Patterns to match (e.g., [":UGRD:10 m", ":VGRD:10 m"])
 * @returns {Array<Object>} Array of {start, end, field} objects
 */
function parseInventory(inventoryContent, fieldPatterns) {
    var lines = inventoryContent.split('\n');
    var entries = [];

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line) continue;

        // Parse at least: field_number:start_byte:<rest...>
        var firstColon = line.indexOf(':');
        if (firstColon < 0) continue;

        var secondColon = line.indexOf(':', firstColon + 1);
        if (secondColon < 0) continue;

        var start = parseInt(line.substring(firstColon + 1, secondColon), 10);
        if (isNaN(start)) continue;

        // Determine if we have a legacy end_byte field.
        var thirdColon = line.indexOf(':', secondColon + 1);
        var end = null;
        var fieldDesc;
        if (thirdColon > 0) {
            var maybeEnd = line.substring(secondColon + 1, thirdColon);
            if (/^\d+$/.test(maybeEnd)) {
                // Legacy: field_number:start_byte:end_byte:field_description
                end = parseInt(maybeEnd, 10);
                fieldDesc = line.substring(thirdColon + 1);
            } else {
                // Modern: field_number:start_byte:field_description
                fieldDesc = line.substring(secondColon + 1);
            }
        } else {
            fieldDesc = line.substring(secondColon + 1);
        }

        // Check if this field matches any of our patterns
        // Try both exact pattern match and more flexible matching
        var matches = false;
        var matchedPattern = null;
        for (var j = 0; j < fieldPatterns.length; j++) {
            var pattern = fieldPatterns[j];
            // Try exact pattern match first
            if (fieldDesc.indexOf(pattern) >= 0) {
                matches = true;
                matchedPattern = pattern;
                break;
            }
            // Try more flexible matching (remove colons, case insensitive) ONLY for patterns that
            // do not rely on colon-boundaries. This prevents false positives like matching
            // ":TMP:2 m above ground:" against ":APTMP:2 m above ground:".
            if (pattern.indexOf(":") < 0) {
                var patternClean = pattern.replace(/:/g, '').toUpperCase();
                var descClean = fieldDesc.replace(/:/g, '').toUpperCase();
                if (descClean.indexOf(patternClean) >= 0) {
                    matches = true;
                    matchedPattern = pattern;
                    break;
                }
            }
        }

        var hasEnd = (typeof end === "number") && !isNaN(end);
        entries.push({
            start: start,
            end: hasEnd ? end - 1 : null, // store inclusive end (we'll compute missing below)
            field: fieldDesc,
            pattern: matchedPattern,
            matches: matches
        });
    }

    // For modern idx format, compute missing end bytes using the next record's start byte.
    for (var k = 0; k < entries.length - 1; k++) {
        if (entries[k].end === null) {
            entries[k].end = entries[k + 1].start - 1;
        }
    }

    // Return only the matched entries.
    return entries
        .filter(function (e) { return e.matches; })
        .map(function (e) {
            return { start: e.start, end: e.end, field: e.field, pattern: e.pattern };
        });
}

/**
 * Download a file using HTTP Range request
 * 
 * @param {string} url - URL to download from
 * @param {number} start - Start byte position (inclusive)
 * @param {number|null} end - End byte position (inclusive). If null, downloads to EOF.
 * @returns {Promise<Buffer>}
 */
function downloadRange(url, start, end) {
    return new Promise(function (resolve, reject) {
        var protocol = url.startsWith('https') ? https : http;
        var range = end === null || end === undefined ? ('bytes=' + start + '-') : ('bytes=' + start + '-' + end);

        var urlObj = new URL(url);
        // Combine pathname and search for the path
        var path = urlObj.pathname + urlObj.search;
        var options = {
            hostname: urlObj.hostname,
            port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
            path: path,
            method: 'GET',
            headers: {
                'Range': range,
                'User-Agent': 'Mozilla/5.0 (compatible; Earth-Clock/1.0)'
            }
        };

        var req = protocol.request(options, function (response) {
            // 206 = Partial Content (expected for Range requests)
            // 200 = OK (some servers return full file even with Range header)
            if (response.statusCode !== 206 && response.statusCode !== 200) {
                reject(new Error("HTTP " + response.statusCode + " for range " + range + ": " + response.statusMessage));
                return;
            }

            var chunks = [];
            response.on('data', function (chunk) {
                chunks.push(chunk);
            });

            response.on('end', function () {
                var buffer = Buffer.concat(chunks);
                resolve(buffer);
            });
        });

        req.on('error', function (err) {
            reject(err);
        });

        req.end();
    });
}

/**
 * Download GRIB2 fields using index-based partial transfer
 * 
 * @param {string} baseUrl - Base URL for GRIB2 file (without .idx or extension)
 * @param {Array<string>} fieldPatterns - Field patterns to download (e.g., [":UGRD:10 m", ":VGRD:10 m"])
 * @param {string} outputPath - Path to save the combined GRIB2 file
 * @returns {Promise<string>} Path to downloaded file
 */
function downloadGrib2Fields(baseUrl, fieldPatterns, outputPath) {
    return new Promise(function (resolve, reject) {
        var inventoryUrl = baseUrl + '.idx';
        var gribUrl = baseUrl;

        console.log("Downloading inventory from:", inventoryUrl);

        // Step 1: Download inventory file
        var invUrlObj = new URL(inventoryUrl);
        var protocol = inventoryUrl.startsWith('https') ? https : http;
        // Combine pathname and search for the path
        var invPath = invUrlObj.pathname + invUrlObj.search;
        var invOptions = {
            hostname: invUrlObj.hostname,
            port: invUrlObj.port || (invUrlObj.protocol === 'https:' ? 443 : 80),
            path: invPath,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Earth-Clock/1.0)'
            }
        };

        var invReq = protocol.request(invOptions, function (response) {
            if (response.statusCode === 403) {
                reject(new Error("Failed to download inventory: HTTP 403 Forbidden - The data may not be available yet, or the URL format may be incorrect. GFS data is typically available 3-4 hours after forecast time."));
                return;
            }
            if (response.statusCode === 404) {
                reject(new Error("Failed to download inventory: HTTP 404 Not Found - The GFS run may not be available yet. Try a different run (00z, 06z, 12z, or 18z) or wait for data to be published."));
                return;
            }
            if (response.statusCode !== 200) {
                reject(new Error("Failed to download inventory: HTTP " + response.statusCode + " - " + response.statusMessage));
                return;
            }

            var inventoryData = '';
            response.on('data', function (chunk) {
                inventoryData += chunk.toString();
            });

            response.on('end', function () {
                // Step 2: Parse inventory to find byte ranges
                console.log("Parsing inventory for fields:", fieldPatterns);
                var ranges = parseInventory(inventoryData, fieldPatterns);

                if (ranges.length === 0) {
                    // Debug: Show what fields are actually in the inventory
                    var lines = inventoryData.split('\n');
                    var sampleFields = [];
                    for (var i = 0; i < Math.min(20, lines.length); i++) {
                        var line = lines[i].trim();
                        if (line && line.indexOf(':') >= 0) {
                            var parts = line.split(':');
                            if (parts.length >= 4) {
                                var fieldDesc = line.substring(line.indexOf(':', 2) + 1);
                                if (fieldDesc.indexOf('UGRD') >= 0 || fieldDesc.indexOf('VGRD') >= 0) {
                                    sampleFields.push(fieldDesc);
                                }
                            }
                        }
                    }
                    if (sampleFields.length > 0) {
                        console.log("Sample fields found in inventory:");
                        sampleFields.slice(0, 5).forEach(function (field) {
                            console.log("  " + field);
                        });
                    }
                    reject(new Error("No matching fields found in inventory. Tried patterns: " + fieldPatterns.join(", ")));
                    return;
                }

                console.log("Found", ranges.length, "matching field(s)");

                // Step 3: Download each range and combine
                var downloadPromises = ranges.map(function (range, index) {
                    console.log("Downloading field", (index + 1) + "/" + ranges.length + ":", range.field.substring(0, 50));
                    return downloadRange(gribUrl, range.start, range.end);
                });

                Promise.all(downloadPromises).then(function (buffers) {
                    // Step 4: Combine all buffers into one GRIB2 file
                    var combined = Buffer.concat(buffers);
                    fs.writeFileSync(outputPath, combined);
                    console.log("Downloaded and saved", (combined.length / 1024 / 1024).toFixed(2), "MB to", outputPath);
                    resolve(outputPath);
                }).catch(function (err) {
                    reject(err);
                });
            });
        });

        invReq.on('error', function (err) {
            reject(new Error("Failed to download inventory: " + err.message));
        });

        invReq.end();
    });
}

module.exports = {
    downloadGrib2Fields: downloadGrib2Fields,
    parseInventory: parseInventory
};
