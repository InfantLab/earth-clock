/**
 * GRIB2 to JSON converter using grib-js library
 * 
 * This module provides a function to convert GRIB2 files to the JSON format
 * expected by the earth-clock application, replacing the Java-based grib2json.
 */

"use strict";

var grib = require("grib-js");
var fs = require("fs");

/**
 * Convert a GRIB2 file to JSON format matching grib2json output
 * 
 * @param {string|Buffer} input - Path to GRIB2 file or Buffer containing GRIB2 data
 * @param {Function} callback - Callback function(err, jsonData)
 */
function convertGrib2ToJson(input, callback) {
    var buffer;
    
    // Handle both file path and buffer input
    if (typeof input === 'string') {
        try {
            buffer = fs.readFileSync(input);
        } catch (err) {
            return callback(err);
        }
    } else if (Buffer.isBuffer(input)) {
        buffer = input;
    } else {
        return callback(new Error("Input must be a file path (string) or Buffer"));
    }
    
    // Parse GRIB2 file
    grib.readData(buffer, function(err, msgs) {
        if (err) {
            return callback(err);
        }
        
        if (!msgs || msgs.length === 0) {
            return callback(new Error("No GRIB messages found in file"));
        }
        
        // Convert to expected format
        var converted = grib.convertData(msgs);
        
        // Ensure subDivisions field exists (for compatibility with grib2json output)
        // This field is typically 0 for regular lat-lon grids
        converted.forEach(function(record) {
            if (record.header.subDivisions === undefined) {
                record.header.subDivisions = 0;
            }
        });
        
        callback(null, converted);
    });
}

/**
 * Convert GRIB2 file to JSON and save to file
 * 
 * @param {string|Buffer} input - Path to GRIB2 file or Buffer
 * @param {string} outputPath - Path to output JSON file
 * @param {Function} callback - Callback function(err)
 */
function convertGrib2ToJsonFile(input, outputPath, callback) {
    convertGrib2ToJson(input, function(err, jsonData) {
        if (err) {
            return callback(err);
        }
        
        try {
            fs.writeFileSync(outputPath, JSON.stringify(jsonData));
            callback(null);
        } catch (writeErr) {
            callback(writeErr);
        }
    });
}

module.exports = {
    convertGrib2ToJson: convertGrib2ToJson,
    convertGrib2ToJsonFile: convertGrib2ToJsonFile
};


