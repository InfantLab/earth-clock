/**
 * Wallpaper Engine Property Listener
 * Bridges Wallpaper Engine user properties to earth.js configuration
 */

(function () {
    "use strict";

    // Global settings object for wallpaper mode
    window.wallpaperSettings = window.wallpaperSettings || {
        dayNightEnabled: true,
        dataSource: "live"
    };

    // Wait for earth.js to initialize before setting up property listener
    var initAttempts = 0;
    var maxInitAttempts = 100;

    function initializeWallpaperConfig() {
        // Check if configuration is available (from earth.js)
        if (typeof window.configuration === 'undefined') {
            initAttempts++;
            if (initAttempts < maxInitAttempts) {
                setTimeout(initializeWallpaperConfig, 100);
            } else {
                console.warn("Wallpaper Engine: earth.js configuration not found after " + maxInitAttempts + " attempts");
            }
            return;
        }

        var configuration = window.configuration;
        var globes = window.globes;

        // Helper function to update configuration
        function updateConfig(attrs) {
            if (configuration) {
                configuration.save(attrs);
            }
        }

        // Helper function to update orientation (longitude, latitude, zoom)
        function updateOrientation(lon, lat, zoom) {
            if (configuration && globes) {
                var globe = globes.get(configuration.get("projection"));
                if (globe && typeof globe.orientation === 'function') {
                    var orientationStr = lon + "," + lat + "," + zoom;
                    updateConfig({ orientation: orientationStr });
                }
            }
        }

        // Helper function to get current orientation
        function getCurrentOrientation() {
            if (configuration && globes) {
                var globe = globes.get(configuration.get("projection"));
                if (globe && typeof globe.orientation === 'function') {
                    var orientation = globe.orientation();
                    var parts = orientation.split(",");
                    return {
                        lon: parseFloat(parts[0]) || 0,
                        lat: parseFloat(parts[1]) || 0,
                        zoom: parseFloat(parts[2]) || 600
                    };
                }
            }
            return { lon: 0, lat: 0, zoom: 600 };
        }

        // Map height level value to surface/level format
        function mapHeightLevel(value) {
            if (value === "level") {
                return { surface: "surface", level: "level" };
            } else {
                return { surface: "isobaric", level: value };
            }
        }

        // Map overlay value
        function mapOverlay(value) {
            if (value === "off") {
                return { overlayType: "off" };
            } else if (value === "wind") {
                return { overlayType: "default" };
            } else {
                return { overlayType: value };
            }
        }

        // Wallpaper Engine property listener
        window.wallpaperPropertyListener = {
            applyUserProperties: function (properties) {
                console.log("Wallpaper Engine: Applying user properties", properties);

                // Handle projection change
                if (properties.hasOwnProperty('projection')) {
                    var projection = properties.projection.value;
                    updateConfig({ projection: projection, orientation: "" });
                }

                // Handle overlay change
                if (properties.hasOwnProperty('overlay')) {
                    var overlay = properties.overlay.value;
                    var overlayAttrs = mapOverlay(overlay);
                    updateConfig(overlayAttrs);
                }

                // Handle height level change
                if (properties.hasOwnProperty('height')) {
                    var height = properties.height.value;
                    var heightAttrs = mapHeightLevel(height);
                    // Merge with param: "wind"
                    var mergedAttrs = { param: "wind" };
                    for (var key in heightAttrs) {
                        if (heightAttrs.hasOwnProperty(key)) {
                            mergedAttrs[key] = heightAttrs[key];
                        }
                    }
                    updateConfig(mergedAttrs);
                }

                // Handle longitude change
                if (properties.hasOwnProperty('longitude')) {
                    var lon = properties.longitude.value;
                    var current = getCurrentOrientation();
                    updateOrientation(lon, current.lat, current.zoom);
                }

                // Handle latitude change
                if (properties.hasOwnProperty('latitude')) {
                    var lat = properties.latitude.value;
                    var current = getCurrentOrientation();
                    updateOrientation(current.lon, lat, current.zoom);
                }

                // Handle zoom change
                if (properties.hasOwnProperty('zoom')) {
                    var zoom = properties.zoom.value;
                    var current = getCurrentOrientation();
                    updateOrientation(current.lon, current.lat, zoom);
                }

                // Handle day/night overlay toggle
                if (properties.hasOwnProperty('daynight')) {
                    var enabled = properties.daynight.value;
                    window.wallpaperSettings.dayNightEnabled = enabled;

                    // Toggle day/night by clicking the button if it exists
                    var dayNightButton = document.querySelector("#option-daynight");
                    if (dayNightButton) {
                        var isCurrentlyEnabled = dayNightButton.classList.contains("highlighted");
                        if (enabled !== isCurrentlyEnabled) {
                            dayNightButton.click();
                        }
                    } else {
                        // Fallback: try to trigger update directly
                        // This will work if dayNightEnabled is accessible
                        setTimeout(function () {
                            if (typeof updateDayNight === 'function') {
                                updateDayNight();
                            }
                        }, 100);
                    }
                }

                // Handle data source change
                if (properties.hasOwnProperty('datasource')) {
                    var source = properties.datasource.value;
                    window.wallpaperSettings.dataSource = source;
                    // Data source change will be handled by products.js modification
                }
            }
        };

        console.log("Wallpaper Engine: Property listener initialized");
    }

    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(initializeWallpaperConfig, 500);
        });
    } else {
        setTimeout(initializeWallpaperConfig, 500);
    }

    // Fallback: If running in regular browser (not Wallpaper Engine), use hash parameters
    if (!window.wallpaperPropertyListener) {
        // This will be handled by earth.js's normal hash parameter system
        console.log("Wallpaper Engine: Running in browser mode, using hash parameters");
    }

})();
