/**
 * Data Source Wrapper
 * Modifies weather data paths based on data source setting (live server vs bundled)
 */

(function () {
    "use strict";

    // Wait for products to be loaded
    var initAttempts = 0;
    var maxInitAttempts = 100;

    function initializeDataSourceWrapper() {
        // Check if products is available
        if (typeof window.products === 'undefined' || typeof window.µ === 'undefined') {
            initAttempts++;
            if (initAttempts < maxInitAttempts) {
                setTimeout(initializeDataSourceWrapper, 100);
            } else {
                console.warn("Data Source Wrapper: products.js not found after " + maxInitAttempts + " attempts");
            }
            return;
        }

        // Get the original gfs1p0degPath function from products
        // We need to patch the path generation to support live server

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
                    function (result) { return result; },
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

        console.log("Data Source Wrapper: Initialized");
    }

    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(initializeDataSourceWrapper, 500);
        });
    } else {
        setTimeout(initializeDataSourceWrapper, 500);
    }

})();
