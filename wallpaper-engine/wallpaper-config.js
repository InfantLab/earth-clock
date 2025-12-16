/**
 * Wallpaper Engine Property Listener
 * Bridges Wallpaper Engine user properties to earth.js configuration
 * 
 * IMPORTANT: This listener must be initialized immediately as a global object
 * to catch the initial property application when the wallpaper loads.
 */

(function () {
    "use strict";

    // Global settings object for wallpaper mode
    window.wallpaperSettings = window.wallpaperSettings || {
        dayNightEnabled: true,
        dataSource: "live"
    };

    // Queue to store properties received before earth.js is ready
    var pendingProperties = null;
    var earthJsReady = false;
    var configuration = null;
    var globes = null;

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

    // Helper function to apply properties
    function applyProperties(properties) {
        if (!earthJsReady || !configuration || !globes) {
            console.warn("Wallpaper Engine: Cannot apply properties - earth.js not ready yet");
            return;
        }

        // Handle projection change - this must happen first and separately
        if (properties.hasOwnProperty('projection')) {
            var projection = properties.projection.value;
            var currentProjection = configuration.get("projection");
            console.log("Wallpaper Engine: Setting projection to", projection, "(current:", currentProjection + ")");

            // Only update if different to avoid unnecessary rebuilds
            if (currentProjection !== projection) {
                // Set projection and clear orientation to force rebuild
                updateConfig({ projection: projection, orientation: "" });

                // Verify it was applied
                setTimeout(function () {
                    var newProjection = configuration.get("projection");
                    if (newProjection !== projection) {
                        console.error("Wallpaper Engine: Projection not applied correctly! Expected:", projection, "Got:", newProjection);
                        // Force it again
                        configuration.save({ projection: projection, orientation: "" });
                    } else {
                        console.log("Wallpaper Engine: Projection successfully set to", newProjection);
                    }
                }, 100);
            }
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

        // Handle clock visibility toggle
        if (properties.hasOwnProperty('showclock')) {
            var showClock = properties.showclock.value;
            if (typeof window.showTimeDisplay === 'function' && typeof window.closeTimeDisplay === 'function') {
                if (showClock) {
                    window.showTimeDisplay();
                } else {
                    window.closeTimeDisplay();
                }
            } else {
                // Fallback: try to click the button if it exists
                var timeDisplayButton = document.querySelector("#option-display-time");
                if (timeDisplayButton) {
                    var timeValue = document.querySelector("#time-value");
                    var isVisible = timeValue && timeValue.textContent !== "";
                    if (showClock && !isVisible) {
                        timeDisplayButton.click();
                    } else if (!showClock && isVisible) {
                        timeDisplayButton.click();
                    }
                }
            }
        }

        // Handle auto-rotation speed
        if (properties.hasOwnProperty('spinSpeed')) {
            var speed = properties.spinSpeed.value;
            if (typeof window.setAutoRotateSpeed === 'function') {
                window.setAutoRotateSpeed(speed);
            } else {
                // Queue for when earth.js is ready
                window.wallpaperSettings.pendingSpinSpeed = speed;
            }
        }
    }

    // Initialize property listener IMMEDIATELY as a global object
    // This is critical - Wallpaper Engine calls applyUserProperties when the wallpaper first loads
    window.wallpaperPropertyListener = {
        applyUserProperties: function (properties) {
            console.log("Wallpaper Engine: Received properties", properties);

            // If earth.js isn't ready yet, store properties for later
            if (!earthJsReady || !configuration || !globes) {
                console.log("Wallpaper Engine: earth.js not ready, queuing properties");
                pendingProperties = properties;
                return;
            }

            // Apply properties immediately if earth.js is ready
            applyProperties(properties);
        }
    };

    // Function to check if earth.js is ready and apply pending properties
    function checkEarthJsReady() {
        if (typeof window.configuration !== 'undefined' &&
            typeof window.globes !== 'undefined' &&
            typeof window.products !== 'undefined') {

            configuration = window.configuration;
            globes = window.globes;
            earthJsReady = true;

            console.log("Wallpaper Engine: earth.js is ready");

            // Apply any pending properties that were received before earth.js was ready
            if (pendingProperties) {
                console.log("Wallpaper Engine: Applying queued properties");
                // Wait a bit to ensure earth.js has finished its initial setup
                setTimeout(function () {
                    applyProperties(pendingProperties);
                    pendingProperties = null;
                }, 200);
            }

            // Apply any pending spin speed that was set before earth.js was ready
            if (window.wallpaperSettings && window.wallpaperSettings.pendingSpinSpeed !== undefined) {
                var speed = window.wallpaperSettings.pendingSpinSpeed;
                setTimeout(function () {
                    if (typeof window.setAutoRotateSpeed === 'function') {
                        window.setAutoRotateSpeed(speed);
                        delete window.wallpaperSettings.pendingSpinSpeed;
                    }
                }, 300);
            }
        } else {
            // Keep checking
            setTimeout(checkEarthJsReady, 100);
        }
    }

    // Start checking for earth.js immediately
    // Don't wait for DOMContentLoaded - we need to catch properties as early as possible
    checkEarthJsReady();

})();
