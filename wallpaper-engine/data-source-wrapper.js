/**
 * Data Source Wrapper
 * Modifies weather data paths based on data source setting (live server vs bundled)
 */

(function () {
    "use strict";

    function initializeDataSourceWrapper() {
        // products.js and micro.js should already be loaded (this script is loaded after them)
        if (typeof window.µ === 'undefined' || typeof window.µ.loadJson !== 'function') {
            console.error("Data Source Wrapper: µ.loadJson not available - cannot hook data loading");
            return;
        }

        // Store original loadJson function
        var originalLoadJson = window.µ.loadJson;

        // Override loadJson to handle data source selection
        window.µ.loadJson = function (url) {
            var dataSource = window.wallpaperSettings ? window.wallpaperSettings.dataSource : "live";

            // If it's a weather data path and data source is "live", use live server
            if (dataSource === "live" && url.indexOf("data/weather") === 0) {
                // Convert relative path to live server URL
                var liveUrl = "https://earth-clock.onemonkey.org/" + url;
                console.log("Data Source Wrapper: Loading from live server:", liveUrl);
                // Try live server first, but fallback to bundled on error
                var livePromise = originalLoadJson(liveUrl);
                return livePromise.then(
                    function (result) { 
                        console.log("Data Source Wrapper: Live server success for:", url);
                        return result; 
                    },
                    function (error) {
                        console.warn("Data Source Wrapper: Live server failed, falling back to bundled:", error);
                        return originalLoadJson(url);
                    }
                );
            } else {
                // Use bundled data (relative path) - default for offline compatibility
                console.log("Data Source Wrapper: Loading bundled data:", url);
                return originalLoadJson(url);
            }
        };

        console.log("Data Source Wrapper: Initialized successfully, dataSource =", 
            (window.wallpaperSettings && window.wallpaperSettings.dataSource) || "live (default)");
    }

    // Initialize immediately since products.js should already be loaded
    initializeDataSourceWrapper();

})();
