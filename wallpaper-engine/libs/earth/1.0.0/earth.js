/**
 * earth - a project to visualize global air data.
 *
 * Copyright (c) 2014 Cameron Beccario
 * The MIT License - http://opensource.org/licenses/MIT
 *
 * https://github.com/cambecc/earth
 */
(function () {
    "use strict";

    var SECOND = 1000;
    var MINUTE = 60 * SECOND;
    var HOUR = 60 * MINUTE;
    var MAX_TASK_TIME = 100;                  // amount of time before a task yields control (millis)
    var MIN_SLEEP_TIME = 25;                  // amount of time a task waits before resuming (millis)
    var MIN_MOVE = 4;                         // slack before a drag operation beings (pixels)
    var MOVE_END_WAIT = 1000;                 // time to wait for a move operation to be considered done (millis)

    var OVERLAY_ALPHA = Math.floor(0.4 * 255);  // overlay transparency (on scale [0, 255])
    var INTENSITY_SCALE_STEP = 10;            // step size of particle intensity color scale
    var MAX_PARTICLE_AGE = 100;               // max number of frames a particle is drawn before regeneration
    var PARTICLE_LINE_WIDTH = 1.0;            // line width of a drawn particle
    var PARTICLE_MULTIPLIER = 7;              // particle count scalar (completely arbitrary--this values looks nice)
    var PARTICLE_REDUCTION = 0.75;            // reduce particle count to this much of normal for mobile devices
    var FRAME_RATE = 40;                      // desired milliseconds per frame

    var NULL_WIND_VECTOR = [NaN, NaN, null];  // singleton for undefined location outside the vector field [u, v, mag]
    var HOLE_VECTOR = [NaN, NaN, null];       // singleton that signifies a hole in the vector field
    var TRANSPARENT_BLACK = [0, 0, 0, 0];     // singleton 0 rgba
    var REMAINING = "▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫";   // glyphs for remaining progress bar
    var COMPLETED = "▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪";   // glyphs for completed progress bar

    var view = µ.view();
    var log = µ.log();

    /**
     * An object to display various types of messages to the user.
     */
    var report = function () {
        var s = d3.select("#status"), p = d3.select("#progress"), total = REMAINING.length;
        return {
            status: function (msg) {
                return s.classed("bad") ? s : s.text(msg);  // errors are sticky until reset
            },
            error: function (err) {
                var msg = err.status ? err.status + " " + err.message : err;
                switch (err.status) {
                    case -1: msg = "Server Down"; break;
                    case 404: msg = "No Data"; break;
                }
                log.error(err);
                return s.classed("bad", true).text(msg);
            },
            reset: function () {
                return s.classed("bad", false).text("");
            },
            progress: function (amount) {  // amount of progress to report in the range [0, 1]
                if (0 <= amount && amount < 1) {
                    var i = Math.ceil(amount * total);
                    var bar = COMPLETED.substr(0, i) + REMAINING.substr(0, total - i);
                    return p.classed("invisible", false).text(bar);
                }
                return p.classed("invisible", true).text("");  // progress complete
            }
        };
    }();

    function newAgent() {
        return µ.newAgent().on({ "reject": report.error, "fail": report.error });
    }

    // Construct the page's main internal components:

    var configuration =
        µ.buildConfiguration(globes, products.overlayTypes);  // holds the page's current configuration settings
    var inputController = buildInputController();             // interprets drag/zoom operations
    var meshAgent = newAgent();      // map data for the earth
    var globeAgent = newAgent();     // the model of the globe
    var gridAgent = newAgent();      // the grid of weather data
    var rendererAgent = newAgent();  // the globe SVG renderer
    var fieldAgent = newAgent();     // the interpolated wind vector field
    var animatorAgent = newAgent();  // the wind animator
    var overlayAgent = newAgent();   // color overlay over the animation
    var dayNightAgent = newAgent();  // day/night overlay

    /**
     * The input controller is an object that translates move operations (drag and/or zoom) into mutations of the
     * current globe's projection, and emits events so other page components can react to these move operations.
     *
     * D3's built-in Zoom behavior is used to bind to the document's drag/zoom events, and the input controller
     * interprets D3's events as move operations on the globe. This method is complicated due to the complex
     * event behavior that occurs during drag and zoom.
     *
     * D3 move operations usually occur as "zoomstart" -> ("zoom")* -> "zoomend" event chain. During "zoom" events
     * the scale and mouse may change, implying a zoom or drag operation accordingly. These operations are quite
     * noisy. What should otherwise be one smooth continuous zoom is usually comprised of several "zoomstart" ->
     * "zoom" -> "zoomend" event chains. A debouncer is used to eliminate the noise by waiting a short period of
     * time to ensure the user has finished the move operation.
     *
     * The "zoom" events may not occur; a simple click operation occurs as: "zoomstart" -> "zoomend". There is
     * additional logic for other corner cases, such as spurious drags which move the globe just a few pixels
     * (most likely unintentional), and the tendency for some touch devices to issue events out of order:
     * "zoom" -> "zoomstart" -> "zoomend".
     *
     * This object emits clean "moveStart" -> ("move")* -> "moveEnd" events for move operations, and "click" events
     * for normal clicks. Spurious moves emit no events.
     */
    function buildInputController() {
        var globe, op = null;

        /**
         * @returns {Object} an object to represent the state for one move operation.
         */
        function newOp(startMouse, startScale) {
            return {
                type: "click",  // initially assumed to be a click operation
                startMouse: startMouse,
                startScale: startScale,
                manipulator: globe.manipulator(startMouse, startScale)
            };
        }

        var zoom = d3.behavior.zoom()
            .on("zoomstart", function () {
                op = op || newOp(d3.mouse(this), zoom.scale());  // a new operation begins
            })
            .on("zoom", function () {
                var currentMouse = d3.mouse(this), currentScale = d3.event.scale;
                op = op || newOp(currentMouse, 1);  // Fix bug on some browsers where zoomstart fires out of order.
                if (op.type === "click" || op.type === "spurious") {
                    var distanceMoved = µ.distance(currentMouse, op.startMouse);
                    if (currentScale === op.startScale && distanceMoved < MIN_MOVE) {
                        // to reduce annoyance, ignore op if mouse has barely moved and no zoom is occurring
                        op.type = distanceMoved > 0 ? "click" : "spurious";
                        return;
                    }
                    dispatch.trigger("moveStart");
                    op.type = "drag";
                }
                if (currentScale != op.startScale) {
                    op.type = "zoom";  // whenever a scale change is detected, (stickily) switch to a zoom operation
                }

                // when zooming, ignore whatever the mouse is doing--really cleans up behavior on touch devices
                op.manipulator.move(op.type === "zoom" ? null : currentMouse, currentScale);
                dispatch.trigger("move");
            })
            .on("zoomend", function () {
                op.manipulator.end();
                if (op.type === "click") {
                    dispatch.trigger("click", op.startMouse, globe.projection.invert(op.startMouse) || []);
                }
                else if (op.type !== "spurious") {
                    signalEnd();
                }
                op = null;  // the drag/zoom/click operation is over
            });

        var signalEnd = _.debounce(function () {
            if (!op || op.type !== "drag" && op.type !== "zoom") {
                configuration.save({ orientation: globe.orientation() }, { source: "moveEnd" });
                dispatch.trigger("moveEnd");
            }
        }, MOVE_END_WAIT);  // wait for a bit to decide if user has stopped moving the globe

        d3.select("#display").call(zoom);
        d3.select("#show-location").on("click", function () {
            if (navigator.geolocation) {
                report.status("Finding current position...");
                navigator.geolocation.getCurrentPosition(function (pos) {
                    report.status("");
                    var coord = [pos.coords.longitude, pos.coords.latitude], rotate = globe.locate(coord);
                    if (rotate) {
                        globe.projection.rotate(rotate);
                        configuration.save({ orientation: globe.orientation() });  // triggers reorientation
                    }
                    dispatch.trigger("click", globe.projection(coord), coord);
                }, log.error);
            }
        });

        function reorient() {
            var options = arguments[3] || {};
            if (!globe || options.source === "moveEnd" || options.source === "autoRotate") {
                // reorientation occurred because the user just finished a move operation, or from auto-rotation
                // globe is already oriented correctly, just trigger redraw for auto-rotation
                if (options.source === "autoRotate") {
                    rendererAgent.trigger("redraw");
                }
                return;
            }
            dispatch.trigger("moveStart");
            globe.orientation(configuration.get("orientation"), view);
            zoom.scale(globe.projection.scale());
            dispatch.trigger("moveEnd");
        }

        var dispatch = _.extend({
            globe: function (_) {
                if (_) {
                    globe = _;
                    zoom.scaleExtent(globe.scaleExtent());
                    reorient();
                }
                return _ ? this : globe;
            }
        }, Backbone.Events);
        return dispatch.listenTo(configuration, "change:orientation", reorient);
    }

    /**
     * @param resource the GeoJSON resource's URL
     * @returns {Object} a promise for GeoJSON topology features: {boundaryLo:, boundaryHi:}
     */
    function buildMesh(resource) {
        var cancel = this.cancel;
        report.status("Downloading...");
        return µ.loadJson(resource).then(function (topo) {
            if (cancel.requested) return null;
            log.time("building meshes");
            var o = topo.objects;
            var coastLo = topojson.feature(topo, µ.isMobile() ? o.coastline_tiny : o.coastline_110m);
            var coastHi = topojson.feature(topo, µ.isMobile() ? o.coastline_110m : o.coastline_50m);
            var lakesLo = topojson.feature(topo, µ.isMobile() ? o.lakes_tiny : o.lakes_110m);
            var lakesHi = topojson.feature(topo, µ.isMobile() ? o.lakes_110m : o.lakes_50m);
            log.timeEnd("building meshes");
            return {
                coastLo: coastLo,
                coastHi: coastHi,
                lakesLo: lakesLo,
                lakesHi: lakesHi
            };
        });
    }

    /**
     * @param {String} projectionName the desired projection's name.
     * @returns {Object} a promise for a globe object.
     */
    function buildGlobe(projectionName) {
        var builder = globes.get(projectionName);
        if (!builder) {
            return when.reject("Unknown projection: " + projectionName);
        }
        return when(builder(view));
    }

    // Some hacky stuff to ensure only one download can be in progress at a time.
    var downloadsInProgress = 0;

    function buildGrids() {
        report.status("Downloading...");
        log.time("build grids");
        // UNDONE: upon failure to load a product, the unloaded product should still be stored in the agent.
        //         this allows us to use the product for navigation and other state.
        var cancel = this.cancel;
        downloadsInProgress++;
        var loaded = when.map(products.productsFor(configuration.attributes), function (product) {
            return product.load(cancel);
        });
        return when.all(loaded).then(function (products) {
            log.time("build grids");
            return { primaryGrid: products[0], overlayGrid: products[1] || products[0] };
        }).ensure(function () {
            downloadsInProgress--;
        });
    }

    /**
     * Modifies the configuration to navigate to the chronologically next or previous data layer.
     */
    function navigate(step) {
        if (downloadsInProgress > 0) {
            log.debug("Download in progress--ignoring nav request.");
            return;
        }
        var next = gridAgent.value().primaryGrid.navigate(step);
        if (next) {
            configuration.save(µ.dateToConfig(next));
        }
    }

    function buildRenderer(mesh, globe) {
        if (!mesh || !globe) return null;

        report.status("Rendering Globe...");
        log.time("rendering map");

        // UNDONE: better way to do the following?
        var dispatch = _.clone(Backbone.Events);
        if (rendererAgent._previous) {
            rendererAgent._previous.stopListening();
        }
        rendererAgent._previous = dispatch;

        // First clear map and foreground svg contents.
        µ.removeChildren(d3.select("#map").node());
        µ.removeChildren(d3.select("#foreground").node());
        // Create new map svg elements.
        globe.defineMap(d3.select("#map"), d3.select("#foreground"));

        var path = d3.geo.path().projection(globe.projection).pointRadius(7);
        var coastline = d3.select(".coastline");
        var lakes = d3.select(".lakes");
        d3.selectAll("path").attr("d", path);  // do an initial draw -- fixes issue with safari

        function drawLocationMark(point, coord) {
            // show the location on the map if defined
            if (fieldAgent.value() && !fieldAgent.value().isInsideBoundary(point[0], point[1])) {
                // UNDONE: Sometimes this is invoked on an old, released field, because new one has not been
                //         built yet, causing the mark to not get drawn.
                return;  // outside the field boundary, so ignore.
            }
            if (coord && _.isFinite(coord[0]) && _.isFinite(coord[1])) {
                var mark = d3.select(".location-mark");
                if (!mark.node()) {
                    mark = d3.select("#foreground").append("path").attr("class", "location-mark");
                }
                mark.datum({ type: "Point", coordinates: coord }).attr("d", path);
            }
        }

        // Draw the location mark if one is currently visible.
        if (activeLocation.point && activeLocation.coord) {
            drawLocationMark(activeLocation.point, activeLocation.coord);
        }

        // Throttled draw method helps with slow devices that would get overwhelmed by too many redraw events.
        var REDRAW_WAIT = 5;  // milliseconds
        var doDraw_throttled = _.throttle(doDraw, REDRAW_WAIT, { leading: false });

        function doDraw() {
            d3.selectAll("path").attr("d", path);
            rendererAgent.trigger("redraw");
            doDraw_throttled = _.throttle(doDraw, REDRAW_WAIT, { leading: false });
        }

        // Attach to map rendering events on input controller.
        dispatch.listenTo(
            inputController, {
            moveStart: function () {
                coastline.datum(mesh.coastLo);
                lakes.datum(mesh.lakesLo);
                rendererAgent.trigger("start");
            },
            move: function () {
                doDraw_throttled();
            },
            moveEnd: function () {
                coastline.datum(mesh.coastHi);
                lakes.datum(mesh.lakesHi);
                d3.selectAll("path").attr("d", path);
                rendererAgent.trigger("render");
            },
            click: drawLocationMark
        });

        // Finally, inject the globe model into the input controller. Do it on the next event turn to ensure
        // renderer is fully set up before events start flowing.
        when(true).then(function () {
            inputController.globe(globe);
        });

        log.timeEnd("rendering map");
        return "ready";
    }

    function createMask(globe) {
        if (!globe) return null;

        // log.time("render mask"); // Disabled to reduce console spam

        // Create a detached canvas, ask the model to define the mask polygon, then fill with an opaque color.
        var width = view.width, height = view.height;
        var canvas = d3.select(document.createElement("canvas")).attr("width", width).attr("height", height).node();
        var context = globe.defineMask(canvas.getContext("2d"));
        context.fillStyle = "rgba(255, 0, 0, 1)";
        context.fill();
        // d3.select("#display").node().appendChild(canvas);  // make mask visible for debugging

        var imageData = context.getImageData(0, 0, width, height);
        var data = imageData.data;  // layout: [r, g, b, a, r, g, b, a, ...]
        // log.timeEnd("render mask"); // Disabled to reduce console spam
        return {
            imageData: imageData,
            isVisible: function (x, y) {
                var i = (y * width + x) * 4;
                return data[i + 3] > 0;  // non-zero alpha means pixel is visible
            },
            set: function (x, y, rgba) {
                var i = (y * width + x) * 4;
                data[i] = rgba[0];
                data[i + 1] = rgba[1];
                data[i + 2] = rgba[2];
                data[i + 3] = rgba[3];
                return this;
            }
        };
    }

    function createField(columns, bounds, mask, projection) {

        /**
         * @returns {Array} wind vector [u, v, magnitude] at the point (x, y), or [NaN, NaN, null] if wind
         *          is undefined at that point.
         */
        function field(x, y) {
            var column = columns[Math.round(x)];
            return column && column[Math.round(y)] || NULL_WIND_VECTOR;
        }

        /**
         * @returns {boolean} true if the field is valid at the point (x, y)
         */
        field.isDefined = function (x, y) {
            return field(x, y)[2] !== null;
        };

        /**
         * @returns {boolean} true if the point (x, y) lies inside the outer boundary of the vector field, even if
         *          the vector field has a hole (is undefined) at that point, such as at an island in a field of
         *          ocean currents.
         */
        field.isInsideBoundary = function (x, y) {
            return field(x, y) !== NULL_WIND_VECTOR;
        };

        // Frees the massive "columns" array for GC. Without this, the array is leaked (in Chrome) each time a new
        // field is interpolated because the field closure's context is leaked, for reasons that defy explanation.
        field.release = function () {
            columns = [];
        };

        field.randomize = function (o) {
            // Generate random geographic coordinates (λ, φ) that are currently visible in the mask.
            // NOTE: do NOT initialize any per-particle trail history here. Trails are managed by the animator
            // using fixed-size typed-array ring buffers for performance.
            var λ, φ; // longitude, latitude
            var safetyNet = 0;
            var point = [];
            do {
                // Generate random geographic coordinates
                λ = _.random(-180, 180);  // longitude
                φ = _.random(-85, 85);     // latitude (avoid poles where projection may be undefined)

                // Project to screen to check if visible
                point = projection([λ, φ]);
                if (point) {
                    var x = Math.round(point[0]);
                    var y = Math.round(point[1]);
                    // Check if projected point is within bounds and visible in mask
                    if (x >= bounds.x && x <= bounds.xMax &&
                        y >= bounds.y && y <= bounds.yMax &&
                        mask.isVisible(x, y)) {
                        o.λ = λ;
                        o.φ = φ;
                        return o;
                    }
                }
                safetyNet++;
            } while (safetyNet < 100);

            // Fallback: if we can't find a good position, use center of visible area
            var centerPoint = projection([0, 0]);
            if (centerPoint) {
                o.λ = 0;
                o.φ = 0;
            } else {
                // Last resort: random but valid
                o.λ = _.random(-180, 180);
                o.φ = _.random(-60, 60);
            }
            return o;
        };

        field.overlay = mask.imageData;

        return field;
    }

    /**
     * Calculate distortion of the wind vector caused by the shape of the projection at point (x, y). The wind
     * vector is modified in place and returned by this function.
     */
    function distort(projection, λ, φ, x, y, scale, wind) {
        var u = wind[0] * scale;
        var v = wind[1] * scale;
        var d = µ.distortion(projection, λ, φ, x, y);

        // Scale distortion vectors by u and v, then add.
        wind[0] = d[0] * u + d[2] * v;
        wind[1] = d[1] * u + d[3] * v;
        return wind;
    }

    function interpolateField(globe, grids) {
        if (!globe || !grids) return null;

        var mask = createMask(globe);
        var primaryGrid = grids.primaryGrid;
        var overlayGrid = grids.overlayGrid;

        // log.time("interpolating field"); // Disabled to reduce console spam
        var d = when.defer(), cancel = this.cancel;

        var projection = globe.projection;
        var bounds = globe.bounds(view);
        // How fast particles move on the screen (arbitrary value chosen for aesthetics).
        var velocityScale = bounds.height * primaryGrid.particles.velocityScale;

        var columns = [];
        var point = [];
        var x = bounds.x;
        var interpolate = primaryGrid.interpolate;
        var overlayInterpolate = overlayGrid.interpolate;
        var hasDistinctOverlay = primaryGrid !== overlayGrid;
        var scale = overlayGrid.scale;

        function interpolateColumn(x) {
            var column = [];
            for (var y = bounds.y; y <= bounds.yMax; y += 2) {
                if (mask.isVisible(x, y)) {
                    point[0] = x; point[1] = y;
                    var coord = projection.invert(point);
                    var color = TRANSPARENT_BLACK;
                    var wind = null;
                    if (coord) {
                        var λ = coord[0], φ = coord[1];
                        if (isFinite(λ)) {
                            wind = interpolate(λ, φ);
                            var scalar = null;
                            if (wind) {
                                wind = distort(projection, λ, φ, x, y, velocityScale, wind);
                                scalar = wind[2];
                            }
                            if (hasDistinctOverlay) {
                                scalar = overlayInterpolate(λ, φ);
                            }
                            if (µ.isValue(scalar)) {
                                color = scale.gradient(scalar, OVERLAY_ALPHA);
                            }
                        }
                    }
                    column[y + 1] = column[y] = wind || HOLE_VECTOR;
                    mask.set(x, y, color).set(x + 1, y, color).set(x, y + 1, color).set(x + 1, y + 1, color);
                }
            }
            columns[x + 1] = columns[x] = column;
        }

        report.status("");

        (function batchInterpolate() {
            try {
                if (!cancel.requested) {
                    var start = Date.now();
                    while (x < bounds.xMax) {
                        interpolateColumn(x);
                        x += 2;
                        if ((Date.now() - start) > MAX_TASK_TIME) {
                            // Interpolation is taking too long. Schedule the next batch for later and yield.
                            report.progress((x - bounds.x) / (bounds.xMax - bounds.x));
                            setTimeout(batchInterpolate, MIN_SLEEP_TIME);
                            return;
                        }
                    }
                }
                d.resolve(createField(columns, bounds, mask, projection));
            }
            catch (e) {
                d.reject(e);
            }
            report.progress(1);  // 100% complete
            // log.timeEnd("interpolating field"); // Disabled to reduce console spam
        })();

        return d.promise;
    }

    function animate(globe, field, grids) {
        if (!globe || !grids) return;

        var cancel = this.cancel;
        var bounds = globe.bounds(view);
        // Don't capture projection in closure - get fresh reference each frame
        // var projection = globe.projection; // Removed - get fresh reference in evolve/draw
        // maxIntensity is the velocity at which particle color intensity is maximum
        var colorStyles = µ.windIntensityColorScale(INTENSITY_SCALE_STEP, grids.primaryGrid.particles.maxIntensity);
        var buckets = colorStyles.map(function () { return []; });
        var particleCount = Math.round(bounds.width * PARTICLE_MULTIPLIER);
        if (µ.isMobile()) {
            particleCount *= PARTICLE_REDUCTION;
        }
        var fadeFillStyle = µ.isFF() ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.97)";  // FF Mac alpha behaves oddly
        // Historically this code scaled wind vectors into *screen-space pixels* using projection distortion.
        // For rotating trails we instead evolve particles purely in geographic space (λ, φ) and only project for
        // rendering. We keep the existing velocityScale knob, but reinterpret it as part of an effective dt.
        var velocityScale = bounds.height * grids.primaryGrid.particles.velocityScale;
        var interpolate = grids.primaryGrid.interpolate;

        // ===== Particle state (typed arrays) =====
        // Store longitude as continuous degrees (can exceed ±180) to avoid introducing artificial discontinuities.
        var TRAIL_LEN = 16;  // slightly longer, closer to original “continuous” feel
        var lon = new Float32Array(particleCount);
        var lat = new Float32Array(particleCount);
        var age = new Uint16Array(particleCount);
        var miss = new Uint8Array(particleCount);
        var trailHead = new Uint16Array(particleCount);      // next write index [0, TRAIL_LEN)
        var trailSize = new Uint8Array(particleCount);       // valid samples [0, TRAIL_LEN]
        var trailLon = new Float32Array(particleCount * TRAIL_LEN);
        var trailLat = new Float32Array(particleCount * TRAIL_LEN);

        // ===== Geo-space advection (RK2/midpoint) =====
        // In the original implementation, `velocityScale` converts u/v (m/s) into a small angular step per frame,
        // and projection distortion then maps that angular step into pixels. In geo-space advection we keep the
        // same interpretation: v contributes degrees latitude per frame, and u contributes degrees longitude per
        // frame (scaled by 1/cosφ).

        function clampLat(φ) {
            // Keep away from poles to avoid 1/cos(φ) blowups and projection singularities.
            return µ.clamp(φ, -85, 85);
        }

        function trailClear(i) {
            trailHead[i] = 0;
            trailSize[i] = 0;
        }

        function trailPush(i, λ, φ) {
            var base = i * TRAIL_LEN;
            var h = trailHead[i];
            trailLon[base + h] = λ;
            trailLat[base + h] = φ;
            h = (h + 1) % TRAIL_LEN;
            trailHead[i] = h;
            if (trailSize[i] < TRAIL_LEN) {
                trailSize[i] += 1;
            }
        }

        function randomizeParticle(i) {
            // Pick a random point that has wind defined. Do not require screen visibility; draw() will handle that.
            var safetyNet = 0;
            while (safetyNet++ < 80) {
                var λ = _.random(-180, 180);
                var φ = _.random(-85, 85);
                var w = interpolate(λ, φ);
                if (w && w[2] !== null) {
                    lon[i] = λ;
                    lat[i] = φ;
                    age[i] = 0;
                    trailClear(i);
                    trailPush(i, λ, φ);
                    return;
                }
            }
            // Fallback: center-ish
            lon[i] = 0;
            lat[i] = 0;
            age[i] = 0;
            trailClear(i);
            trailPush(i, 0, 0);
        }

        function resetTrails() {
            for (var i = 0; i < particleCount; i++) {
                trailClear(i);
                trailPush(i, lon[i], lat[i]);
            }
        }

        // Expose for rotation/projection state changes.
        window.resetWindTrails = resetTrails;
        window._windAnimatorActive = true;

        // init particles
        for (var i = 0; i < particleCount; i++) {
            age[i] = _.random(0, MAX_PARTICLE_AGE);
            randomizeParticle(i);
        }

        function evolve(frameGlobe) {
            buckets.forEach(function (bucket) { bucket.length = 0; });

            var MAX_AGE = MAX_PARTICLE_AGE * 6; // keep particles around longer to feel continuous
            // Prevent huge longitude jumps near the poles (1/cosφ blowup) that create map-boundary streaks.
            var MAX_STEP_DEG_LON = 4.0;
            var MAX_STEP_DEG_LAT = 2.5;
            for (var i = 0; i < particleCount; i++) {
                if (age[i] > MAX_AGE) {
                    randomizeParticle(i);
                }

                var λ = lon[i];
                var φ = lat[i];

                // RK2 midpoint integration in geographic space.
                var w1 = interpolate(λ, φ);
                if (!w1 || w1[2] === null) {
                    // undefined data: tolerate a few misses (prevents “popping” resets), then respawn.
                    miss[i] = (miss[i] + 1) & 255;
                    if (miss[i] > 8) {
                        randomizeParticle(i);
                    }
                    continue;
                }
                miss[i] = 0;

                var φ1 = clampLat(φ);
                var cosφ1 = Math.cos(φ1 * Math.PI / 180);
                cosφ1 = Math.max(0.01, Math.abs(cosφ1));
                var k1λ = µ.clamp((w1[0] * velocityScale) / cosφ1, -MAX_STEP_DEG_LON, MAX_STEP_DEG_LON);
                var k1φ = µ.clamp((w1[1] * velocityScale), -MAX_STEP_DEG_LAT, MAX_STEP_DEG_LAT);

                var midλ = λ + 0.5 * k1λ;
                var midφ = clampLat(φ + 0.5 * k1φ);

                var w2 = interpolate(midλ, midφ);
                if (!w2 || w2[2] === null) {
                    miss[i] = (miss[i] + 1) & 255;
                    if (miss[i] > 8) {
                        randomizeParticle(i);
                    }
                    continue;
                }
                miss[i] = 0;

                var cosMid = Math.cos(midφ * Math.PI / 180);
                cosMid = Math.max(0.01, Math.abs(cosMid));
                var k2λ = µ.clamp((w2[0] * velocityScale) / cosMid, -MAX_STEP_DEG_LON, MAX_STEP_DEG_LON);
                var k2φ = µ.clamp((w2[1] * velocityScale), -MAX_STEP_DEG_LAT, MAX_STEP_DEG_LAT);

                var newλ = λ + k2λ;
                var newφ = clampLat(φ + k2φ);

                lon[i] = newλ;
                lat[i] = newφ;
                trailPush(i, newλ, newφ);

                var m = w2[2] || w1[2];
                var b = colorStyles.indexFor(m);
                buckets[b].push(i);

                age[i] += 1;
            }
        }

        var g = d3.select("#animation").node().getContext("2d");
        g.lineWidth = PARTICLE_LINE_WIDTH;
        g.fillStyle = fadeFillStyle;

        function draw(frameGlobe) {
            // Use globe passed from frame loop to ensure consistent projection state with evolve()
            // Fallback to getting from agent if not provided
            var currentGlobe = frameGlobe || globeAgent.value();
            if (!currentGlobe || !currentGlobe.projection) {
                currentGlobe = globe;
                if (!currentGlobe || !currentGlobe.projection) {
                    return; // Can't draw without valid globe/projection
                }
            }
            var currentProjection = currentGlobe.projection;
            var currentBounds = currentGlobe.bounds(view);

            // Geo-anchored trails must be re-projected during drag/rotation, so we redraw them each frame.
            // (Screen-space fading via destination-in leaves stale pixels when the projection changes.)
            g.clearRect(0, 0, g.canvas.width, g.canvas.height);

            // For globe-like projections (clipAngle ~ 90), prevent drawing points on the far side of the globe.
            var clipAngle = currentProjection.clipAngle && currentProjection.clipAngle();
            var hemisphereClip = !!clipAngle && clipAngle <= 90.01;
            var centerCoord = null;
            if (hemisphereClip && currentProjection.rotate) {
                var r = currentProjection.rotate();
                centerCoord = [-r[0], -r[1]];
            }
            function normalizeLon(λ) {
                return ((λ + 180) % 360 + 360) % 360 - 180;
            }
            function isFrontHemisphere(λ, φ) {
                if (!hemisphereClip || !centerCoord) return true;
                return d3.geo.distance([normalizeLon(λ), φ], centerCoord) < (Math.PI / 2 - 1e-6);
            }

            function drawParticleTrail(pIndex) {
                var size = trailSize[pIndex];
                if (size < 2) return;

                var maxDist = Math.max(currentBounds.width, currentBounds.height) * 0.35;
                var pathStarted = false;
                var lastX = 0, lastY = 0;

                var base = pIndex * TRAIL_LEN;
                // iterate from oldest -> newest
                var head = trailHead[pIndex];
                var start = head - size;
                for (var j = 0; j < size; j++) {
                    var idx = (start + j);
                    while (idx < 0) idx += TRAIL_LEN;
                    idx = idx % TRAIL_LEN;

                    var λ = trailLon[base + idx];
                    var φ = trailLat[base + idx];
                    if (!isFrontHemisphere(λ, φ)) {
                        pathStarted = false;
                        continue;
                    }
                    var screenPoint = currentProjection([λ, φ]);
                    if (!screenPoint || !isFinite(screenPoint[0]) || !isFinite(screenPoint[1])) {
                        pathStarted = false;
                        continue;
                    }

                    var x = screenPoint[0], y = screenPoint[1];
                    var visible = (x >= currentBounds.x && x <= currentBounds.xMax &&
                        y >= currentBounds.y && y <= currentBounds.yMax);
                    if (!visible) {
                        pathStarted = false;
                        continue;
                    }

                    if (!pathStarted) {
                        g.moveTo(x, y);
                        pathStarted = true;
                    } else {
                        var dx = x - lastX;
                        var dy = y - lastY;
                        var dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist > maxDist) {
                            // seam/discontinuity: don't connect across large jumps (dateline, clip edge, polyhedral lobes)
                            pathStarted = false;
                            continue;
                        }
                        g.lineTo(x, y);
                    }
                    lastX = x; lastY = y;
                }
            }

            // Draw buckets by intensity.
            for (var b = 0; b < buckets.length; b++) {
                var bucket = buckets[b];
                if (!bucket.length) continue;
                g.beginPath();
                g.strokeStyle = colorStyles[b];
                for (var k = 0; k < bucket.length; k++) {
                    drawParticleTrail(bucket[k]);
                }
                g.stroke();
            }
        }

        (function frame() {
            try {
                if (cancel.requested) {
                    if (field && field.release) {
                        field.release();
                    }
                    window._windAnimatorActive = false;
                    return;
                }
                // Get projection once at start of frame to ensure evolve() and draw() use same state
                // This fixes frame dragging during auto-rotation
                var frameGlobe = globeAgent.value();
                if (!frameGlobe || !frameGlobe.projection) {
                    frameGlobe = globe;
                }
                evolve(frameGlobe);
                draw(frameGlobe);
                setTimeout(frame, FRAME_RATE);
            }
            catch (e) {
                report.error(e);
            }
        })();
    }

    function drawGridPoints(ctx, grid, globe) {
        if (!grid || !globe || !configuration.get("showGridPoints")) return;

        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        // Use the clipping behavior of a projection stream to quickly draw visible points.
        var stream = globe.projection.stream({
            point: function (x, y) {
                ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
            }
        });
        grid.forEachPoint(function (λ, φ, d) {
            if (µ.isValue(d)) {
                stream.point(λ, φ);
            }
        });
    }

    function drawOverlay(field, overlayType) {
        if (!field) return;

        var ctx = d3.select("#overlay").node().getContext("2d"), grid = (gridAgent.value() || {}).overlayGrid;

        µ.clearCanvas(d3.select("#overlay").node());
        µ.clearCanvas(d3.select("#scale").node());
        if (overlayType) {
            if (overlayType !== "off") {
                ctx.putImageData(field.overlay, 0, 0);
            }
            drawGridPoints(ctx, grid, globeAgent.value());
        }

        if (grid) {
            // Draw color bar for reference.
            var colorBar = d3.select("#scale"), scale = grid.scale, bounds = scale.bounds;
            var c = colorBar.node(), g = c.getContext("2d"), n = c.width - 1;
            for (var i = 0; i <= n; i++) {
                var rgb = scale.gradient(µ.spread(i / n, bounds[0], bounds[1]), 1);
                g.fillStyle = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
                g.fillRect(i, 0, 1, c.height);
            }

            // Show tooltip on hover.
            colorBar.on("mousemove", function () {
                var x = d3.mouse(this)[0];
                var pct = µ.clamp((Math.round(x) - 2) / (n - 2), 0, 1);
                var value = µ.spread(pct, bounds[0], bounds[1]);
                var elementId = grid.type === "wind" ? "#location-wind-units" : "#location-value-units";
                var units = createUnitToggle(elementId, grid).value();
                colorBar.attr("title", µ.formatScalar(value, units) + " " + units.label);
            });
        }
    }

    /**
     * Calculate if a geographic coordinate is in daylight or darkness based on current UTC time.
     * @param {Number} λ longitude in degrees
     * @param {Number} φ latitude in degrees
     * @param {Date} date the date/time to calculate for (defaults to current UTC time)
     * @returns {Boolean} true if the point is in daylight, false if in darkness
     */
    function calculateDayNightStatus(λ, φ, date) {
        // Always use current real-time UTC date, never use weather data date
        // This ensures day/night overlay is always live regardless of weather data date
        date = new Date(); // Force current time, ignore any passed date

        // Convert to radians
        var lon = λ * Math.PI / 180;
        var lat = φ * Math.PI / 180;

        // Calculate day of year (1-365)
        var startOfYear = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
        var dayOfYear = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000)) + 1;

        // Calculate solar declination (angle of sun above/below equator)
        // Using simplified formula: δ ≈ 23.45° * sin(360° * (284 + n) / 365)
        var declination = 23.45 * Math.PI / 180 * Math.sin(2 * Math.PI * (284 + dayOfYear) / 365);

        // Calculate hour angle
        // The sun is at 0° longitude at 12:00 UTC (solar noon at Greenwich)
        // For any location, we need to find the time difference from solar noon
        // Earth rotates 360° in 24 hours = 15° per hour
        // Hour angle = (UTC hours - 12) * 15° + longitude
        var hours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
        var hourAngle = ((hours - 12) * 15 + λ) * Math.PI / 180;

        // Calculate sun's elevation angle at this location
        // sin(elevation) = sin(lat) * sin(declination) + cos(lat) * cos(declination) * cos(hourAngle)
        var sinElevation = Math.sin(lat) * Math.sin(declination) +
            Math.cos(lat) * Math.cos(declination) * Math.cos(hourAngle);

        // Clamp to valid range for asin
        sinElevation = Math.max(-1, Math.min(1, sinElevation));
        var elevation = Math.asin(sinElevation);

        // If elevation is negative, the sun is below the horizon (night)
        return elevation > 0;
    }

    /**
     * Draw the day/night overlay on the daynight canvas.
     * @param {Object} globe the globe object with projection
     * @param {Object} mask the mask object for visible pixels
     */
    function drawDayNightOverlay(globe, mask) {
        if (!globe || !mask) return;

        var canvas = d3.select("#daynight").node();
        if (!canvas) return;

        µ.clearCanvas(canvas);
        var ctx = canvas.getContext("2d");
        var width = view.width;
        var height = view.height;
        var projection = globe.projection;
        var bounds = globe.bounds(view);
        // Always use current real-time UTC date for day/night overlay
        // This is independent of weather data date - overlay should always be live
        var currentDate = new Date(); // Current browser time (will be converted to UTC in calculation)

        // Create ImageData for efficient pixel manipulation
        var imageData = ctx.createImageData(width, height);
        var data = imageData.data;
        var DAYNIGHT_ALPHA = Math.floor(0.4 * 255);  // 40% opacity for night overlay (10% darker than before)

        // Iterate through visible pixels (sample every 2 pixels for performance, similar to interpolation)
        var point = [];
        var nightPixelCount = 0;
        var isFirstIteration = true;
        for (var y = bounds.y; y <= bounds.yMax; y += 2) {
            for (var x = bounds.x; x <= bounds.xMax; x += 2) {
                if (mask.isVisible(x, y)) {
                    point[0] = x;
                    point[1] = y;
                    var coord = projection.invert(point);
                    if (coord && _.isFinite(coord[0]) && _.isFinite(coord[1])) {
                        var λ = coord[0], φ = coord[1];
                        if (_.isFinite(λ) && _.isFinite(φ)) {
                            var isDay = calculateDayNightStatus(λ, φ, currentDate);
                            if (!isDay) {
                                nightPixelCount++;
                                // Apply dark overlay to night regions (fill 2x2 pixel block for smoother appearance)
                                var baseIndex = (y * width + x) * 4;
                                var indices = [
                                    baseIndex,                    // (x, y)
                                    baseIndex + 4,                // (x+1, y)
                                    baseIndex + width * 4,        // (x, y+1)
                                    baseIndex + width * 4 + 4     // (x+1, y+1)
                                ];
                                indices.forEach(function (i) {
                                    if (i >= 0 && i < data.length - 3) {
                                        data[i] = 0;      // R
                                        data[i + 1] = 0;  // G
                                        data[i + 2] = 0;  // B
                                        data[i + 3] = DAYNIGHT_ALPHA;  // A
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
        // log.debug("day/night overlay: " + nightPixelCount + " night pixels drawn, date: " + currentDate.toISOString()); // Disabled to reduce console spam
    }

    /**
     * Extract the date the grids are valid, or the current date if no grid is available.
     * UNDONE: if the grids hold unloaded products, then the date can be extracted from them.
     *         This function would simplify nicely.
     */
    function validityDate(grids) {
        // When the active layer is considered "current", use its time as now, otherwise use current time as
        // now (but rounded down to the nearest three-hour block).
        var THREE_HOURS = 3 * HOUR;
        var now = grids ? grids.primaryGrid.date.getTime() : Math.floor(Date.now() / THREE_HOURS) * THREE_HOURS;
        var parts = configuration.get("date").split("/");  // yyyy/mm/dd or "current"
        var hhmm = configuration.get("hour");
        return parts.length > 1 ?
            Date.UTC(+parts[0], parts[1] - 1, +parts[2], +hhmm.substring(0, 2)) :
            parts[0] === "current" ? now : null;
    }

    /**
     * Display the grid's validity date in the menu. Allow toggling between local and UTC time.
     */
    function showDate(grids) {
        var date = new Date(validityDate(grids)), isLocal = d3.select("#data-date").classed("local");
        var formatted = isLocal ? µ.toLocalISO(date) : µ.toUTCISO(date);
        d3.select("#data-date").text(formatted + " " + (isLocal ? "Local" : "UTC"));
        d3.select("#toggle-zone").text("⇄ " + (isLocal ? "UTC" : "Local"));
    }

    /**
     * Display the grids' types in the menu.
     */
    function showGridDetails(grids) {
        showDate(grids);
        var description = "", center = "";
        if (grids) {
            var langCode = d3.select("body").attr("data-lang") || "en";
            var pd = grids.primaryGrid.description(langCode), od = grids.overlayGrid.description(langCode);
            description = od.name + od.qualifier;
            if (grids.primaryGrid !== grids.overlayGrid) {
                // Combine both grid descriptions together with a " + " if their qualifiers are the same.
                description = (pd.qualifier === od.qualifier ? pd.name : pd.name + pd.qualifier) + " + " + description;
            }
            center = grids.overlayGrid.source;
        }
        d3.select("#data-layer").text(description);
        d3.select("#data-center").text(center);
    }

    /**
     * Constructs a toggler for the specified product's units, storing the toggle state on the element having
     * the specified id. For example, given a product having units ["m/s", "mph"], the object returned by this
     * method sets the element's "data-index" attribute to 0 for m/s and 1 for mph. Calling value() returns the
     * currently active units object. Calling next() increments the index.
     */
    function createUnitToggle(id, product) {
        var units = product.units, size = units.length;
        var index = +(d3.select(id).attr("data-index") || 0) % size;
        return {
            value: function () {
                return units[index];
            },
            next: function () {
                d3.select(id).attr("data-index", index = ((index + 1) % size));
            }
        };
    }

    /**
     * Display the specified wind value. Allow toggling between the different types of wind units.
     */
    function showWindAtLocation(wind, product) {
        var unitToggle = createUnitToggle("#location-wind-units", product), units = unitToggle.value();
        d3.select("#location-wind").text(µ.formatVector(wind, units));
        d3.select("#location-wind-units").text(units.label).on("click", function () {
            unitToggle.next();
            showWindAtLocation(wind, product);
        });
    }

    /**
     * Display the specified overlay value. Allow toggling between the different types of supported units.
     */
    function showOverlayValueAtLocation(value, product) {
        var unitToggle = createUnitToggle("#location-value-units", product), units = unitToggle.value();
        d3.select("#location-value").text(µ.formatScalar(value, units));
        d3.select("#location-value-units").text(units.label).on("click", function () {
            unitToggle.next();
            showOverlayValueAtLocation(value, product);
        });
    }

    // Stores the point and coordinate of the currently visible location. This is used to update the location
    // details when the field changes.
    var activeLocation = {};

    /**
     * Display a local data callout at the given [x, y] point and its corresponding [lon, lat] coordinates.
     * The location may not be valid, in which case no callout is displayed. Display location data for both
     * the primary grid and overlay grid, performing interpolation when necessary.
     */
    function showLocationDetails(point, coord) {
        point = point || [];
        coord = coord || [];
        var grids = gridAgent.value(), field = fieldAgent.value(), λ = coord[0], φ = coord[1];
        if (!field || !field.isInsideBoundary(point[0], point[1])) {
            return;
        }

        clearLocationDetails(false);  // clean the slate
        activeLocation = { point: point, coord: coord };  // remember where the current location is

        if (_.isFinite(λ) && _.isFinite(φ)) {
            d3.select("#location-coord").text(µ.formatCoordinates(λ, φ));
            d3.select("#location-close").classed("invisible", false);
        }

        if (field.isDefined(point[0], point[1]) && grids) {
            var wind = grids.primaryGrid.interpolate(λ, φ);
            if (µ.isValue(wind)) {
                showWindAtLocation(wind, grids.primaryGrid);
            }
            if (grids.overlayGrid !== grids.primaryGrid) {
                var value = grids.overlayGrid.interpolate(λ, φ);
                if (µ.isValue(value)) {
                    showOverlayValueAtLocation(value, grids.overlayGrid);
                }
            }
        }
    }

    function updateLocationDetails() {
        showLocationDetails(activeLocation.point, activeLocation.coord);
    }

    function clearLocationDetails(clearEverything) {
        d3.select("#location-coord").text("");
        d3.select("#location-close").classed("invisible", true);
        d3.select("#location-wind").text("");
        d3.select("#location-wind-units").text("");
        d3.select("#location-value").text("");
        d3.select("#location-value-units").text("");
        if (clearEverything) {
            activeLocation = {};
            d3.select(".location-mark").remove();
        }
    }

    function stopCurrentAnimation(alsoClearCanvas) {
        animatorAgent.cancel();
        if (alsoClearCanvas) {
            µ.clearCanvas(d3.select("#animation").node());
        }
    }

    /**
     * Registers a click event handler for the specified DOM element which modifies the configuration to have
     * the attributes represented by newAttr. An event listener is also registered for configuration change events,
     * so when a change occurs the button becomes highlighted (i.e., class ".highlighted" is assigned or removed) if
     * the configuration matches the attributes for this button. The set of attributes used for the matching is taken
     * from newAttr, unless a custom set of keys is provided.
     */
    function bindButtonToConfiguration(elementId, newAttr, keys) {
        keys = keys || _.keys(newAttr);
        d3.select(elementId).on("click", function () {
            if (d3.select(elementId).classed("disabled")) return;
            configuration.save(newAttr);
        });
        configuration.on("change", function (model) {
            var attr = model.attributes;
            d3.select(elementId).classed("highlighted", _.isEqual(_.pick(attr, keys), _.pick(newAttr, keys)));
        });
    }

    function reportSponsorClick(type) {
        if (ga) {
            ga("send", "event", "sponsor", type);
        }
    }

    /**
     * Registers all event handlers to bind components and page elements together. There must be a cleaner
     * way to accomplish this...
     */
    function init() {
        report.status("Initializing...");

        d3.select("#sponsor-link")
            .attr("target", µ.isEmbeddedInIFrame() ? "_new" : null)
            .on("click", reportSponsorClick.bind(null, "click"))
            .on("contextmenu", reportSponsorClick.bind(null, "right-click"))
        d3.select("#sponsor-hide").on("click", function () {
            d3.select("#sponsor").classed("invisible", true);
        });

        d3.selectAll(".fill-screen").attr("width", view.width).attr("height", view.height);
        // Ensure daynight canvas is properly sized
        d3.select("#daynight").attr("width", view.width).attr("height", view.height);
        // Adjust size of the scale canvas to fill the width of the menu to the right of the label.
        var label = d3.select("#scale-label").node();
        d3.select("#scale")
            .attr("width", (d3.select("#menu").node().offsetWidth - label.offsetWidth) * 0.97)
            .attr("height", label.offsetHeight / 2);

        d3.select("#show-menu").on("click", function () {
            if (µ.isEmbeddedInIFrame()) {
                window.open("http://earth.nullschool.net/" + window.location.hash, "_blank");
            }
            else {
                d3.select("#menu").classed("invisible", !d3.select("#menu").classed("invisible"));
            }
        });

        if (µ.isFF()) {
            // Workaround FF performance issue of slow click behavior on map having thick coastlines.
            d3.select("#display").classed("firefox", true);
        }

        // Tweak document to distinguish CSS styling between touch and non-touch environments. Hacky hack.
        if ("ontouchstart" in document.documentElement) {
            d3.select(document).on("touchstart", function () { });  // this hack enables :active pseudoclass
        }
        else {
            d3.select(document.documentElement).classed("no-touch", true);  // to filter styles problematic for touch
        }

        // Bind configuration to URL bar changes.
        d3.select(window).on("hashchange", function () {
            log.debug("hashchange");
            configuration.fetch({ trigger: "hashchange" });
        });

        configuration.on("change", report.reset);

        meshAgent.listenTo(configuration, "change:topology", function (context, attr) {
            meshAgent.submit(buildMesh, attr);
        });

        globeAgent.listenTo(configuration, "change:projection", function (source, attr) {
            globeAgent.submit(buildGlobe, attr);
        });

        gridAgent.listenTo(configuration, "change", function () {
            var changed = _.keys(configuration.changedAttributes()), rebuildRequired = false;

            // Build a new grid if any layer-related attributes have changed.
            if (_.intersection(changed, ["date", "hour", "param", "surface", "level"]).length > 0) {
                rebuildRequired = true;
            }
            // Build a new grid if the new overlay type is different from the current one.
            var overlayType = configuration.get("overlayType") || "default";
            if (_.indexOf(changed, "overlayType") >= 0 && overlayType !== "off") {
                var grids = (gridAgent.value() || {}), primary = grids.primaryGrid, overlay = grids.overlayGrid;
                if (!overlay) {
                    // Do a rebuild if we have no overlay grid.
                    rebuildRequired = true;
                }
                else if (overlay.type !== overlayType && !(overlayType === "default" && primary === overlay)) {
                    // Do a rebuild if the types are different.
                    rebuildRequired = true;
                }
            }

            if (rebuildRequired) {
                gridAgent.submit(buildGrids);
            }
        });
        gridAgent.on("submit", function () {
            showGridDetails(null);
        });
        gridAgent.on("update", function (grids) {
            showGridDetails(grids);
        });
        d3.select("#toggle-zone").on("click", function () {
            d3.select("#data-date").classed("local", !d3.select("#data-date").classed("local"));
            showDate(gridAgent.cancel.requested ? null : gridAgent.value());
            // Update time display when UTC/LOCAL toggle changes (if day/night is enabled)
            if (dayNightEnabled) {
                updateDayNightTime();
            }
        });

        function startRendering() {
            rendererAgent.submit(buildRenderer, meshAgent.value(), globeAgent.value());
        }
        rendererAgent.listenTo(meshAgent, "update", startRendering);
        rendererAgent.listenTo(globeAgent, "update", startRendering);

        function startInterpolation() {
            fieldAgent.submit(interpolateField, globeAgent.value(), gridAgent.value());
        }
        function cancelInterpolation() {
            fieldAgent.cancel();
        }
        fieldAgent.listenTo(gridAgent, "update", startInterpolation);
        fieldAgent.listenTo(rendererAgent, "render", startInterpolation);

        // Only cancel interpolation during *user* interaction. Auto-rotation emits many redraws and must not
        // prevent the interpolation from ever completing, otherwise the wind magnitude overlay never appears.
        var userInteracting = false;
        inputController.on("moveStart", function () { userInteracting = true; });
        inputController.on("moveEnd", function () { userInteracting = false; });

        fieldAgent.listenTo(rendererAgent, "start", cancelInterpolation);
        fieldAgent.listenTo(rendererAgent, "redraw", function () {
            if (userInteracting) cancelInterpolation();
        });

        // Track whether a field interpolation is currently running, so auto-rotation doesn't continuously cancel
        // and restart interpolation (which can result in overlays never being drawn for some projections).
        var fieldInterpolating = false;
        fieldAgent.on({
            submit: function () { fieldInterpolating = true; },
            update: function () { fieldInterpolating = false; },
            reject: function () { fieldInterpolating = false; },
            fail: function () { fieldInterpolating = false; }
        });

        function startAnimation() {
            // Decouple animation from field interpolation. Field updates are used for overlays; particles advect
            // directly from the grid in geographic space and only need a globe+grids.
            var globe = globeAgent.value();
            var grids = gridAgent.value();
            if (!globe || !grids) return;
            animatorAgent.submit(animate, globe, fieldAgent.value(), grids);
        }
        animatorAgent.listenTo(gridAgent, "update", startAnimation);
        animatorAgent.listenTo(globeAgent, "update", function () {
            // If an animation is already running, keep particle positions and just clear trails so old history
            // isn't reinterpreted under a new projection.
            if (window._windAnimatorActive && window.resetWindTrails) {
                µ.clearCanvas(d3.select("#animation").node());
                window.resetWindTrails();
            } else {
                startAnimation();
            }
        });
        // Do not cancel animation on renderer start (user drags/zooms). We redraw each frame from geo trails.
        animatorAgent.listenTo(gridAgent, "submit", stopCurrentAnimation.bind(null, false));
        // Do NOT stop animation on field interpolation; overlays can re-render independently.

        overlayAgent.listenTo(fieldAgent, "update", function () {
            overlayAgent.submit(drawOverlay, fieldAgent.value(), configuration.get("overlayType"));
        });
        overlayAgent.listenTo(rendererAgent, "start", function () {
            overlayAgent.submit(drawOverlay, fieldAgent.value(), null);
        });
        overlayAgent.listenTo(configuration, "change", function () {
            var changed = _.keys(configuration.changedAttributes())
            // if only overlay relevant flags have changed...
            if (_.intersection(changed, ["overlayType", "showGridPoints"]).length > 0) {
                overlayAgent.submit(drawOverlay, fieldAgent.value(), configuration.get("overlayType"));
            }
        });

        // Day/night overlay setup
        var dayNightUpdateInterval = null;
        var dayNightMaskInterval = null;
        var dayNightTimeInterval = null;
        var dayNightEnabled = true; // Default to enabled
        var cachedMask = null;
        var cachedGlobe = null;

        function getMask(globe) {
            // Only recreate mask if globe has changed or cache is invalid
            if (!globe) return null;
            if (cachedGlobe !== globe || !cachedMask) {
                cachedGlobe = globe;
                cachedMask = createMask(globe);
            }
            return cachedMask;
        }

        function invalidateMask() {
            cachedMask = null;
            cachedGlobe = null;
        }

        function updateDayNight() {
            if (!dayNightEnabled) {
                // Clear the canvas if disabled
                var canvas = d3.select("#daynight").node();
                if (canvas) {
                    µ.clearCanvas(canvas);
                }
                return;
            }

            var globe = globeAgent.value();
            if (globe) {
                var mask = getMask(globe);
                if (mask) {
                    // Ensure canvas is ready before drawing
                    var canvas = d3.select("#daynight").node();
                    if (canvas && canvas.width > 0 && canvas.height > 0) {
                        drawDayNightOverlay(globe, mask);
                    } else {
                        // Canvas not ready yet, try again on next frame
                        setTimeout(updateDayNight, 100);
                    }
                } else {
                    // Mask not ready yet, try again shortly
                    setTimeout(updateDayNight, 100);
                }
            }
        }

        // Update day/night overlay when globe/projection changes (this will recreate the mask)
        dayNightAgent.listenTo(globeAgent, "update", function () {
            invalidateMask(); // Invalidate cache when globe changes
            // Delay slightly to ensure renderer is ready
            setTimeout(updateDayNight, 50);
        });
        dayNightAgent.listenTo(rendererAgent, "render", function () {
            // Ensure mask is created and canvas is ready before rendering
            setTimeout(updateDayNight, 50);
        });
        dayNightAgent.listenTo(rendererAgent, "redraw", function () {
            invalidateMask(); // Invalidate cache on redraw (projection might have changed)
            // Delay slightly to ensure renderer is ready
            setTimeout(updateDayNight, 50);
        });
        dayNightAgent.listenTo(inputController, "moveEnd", updateDayNight);

        // Update time display in separate element
        function updateDayNightTime() {
            if (!dayNightEnabled) {
                // Clear time display if day/night is disabled
                clearTimeDisplay();
                return;
            }

            // Only update if time display is visible (has content)
            var timeValue = d3.select("#time-value");
            var timeDisplay = d3.select("#time-display");

            if (timeValue.text() === "") {
                // Time display was closed, don't update
                return;
            }

            // Ensure time display is visible (in case something hid it)
            timeDisplay.classed("invisible", false);

            var isLocal = d3.select("#data-date").classed("local");
            var now = new Date();
            var hours = isLocal ? now.getHours() : now.getUTCHours();
            var minutes = isLocal ? now.getMinutes() : now.getUTCMinutes();
            var seconds = isLocal ? now.getSeconds() : now.getUTCSeconds();
            var timeStr = µ.zeroPad(hours, 2) + ":" + µ.zeroPad(minutes, 2) + ":" + µ.zeroPad(seconds, 2);
            var zoneStr = isLocal ? "Local" : "UTC";

            // Update time value and zone (zone is clickable)
            timeValue.text(timeStr + " ");
            d3.select("#time-zone").text(zoneStr);
        }

        // Clear time display (like clearLocationDetails)
        function clearTimeDisplay() {
            d3.select("#time-value").text("");
            d3.select("#time-zone").text("");
            d3.select("#time-close").classed("invisible", true);
            d3.select("#time-display").classed("invisible", true);
        }

        // Toggle time zone (Local/UTC)
        function toggleTimeZone() {
            // Toggle the same setting that controls date display
            d3.select("#data-date").classed("local", !d3.select("#data-date").classed("local"));
            // Update date display
            showDate(gridAgent.cancel.requested ? null : gridAgent.value());
            // Update time display
            updateDayNightTime();
        }

        // Close time display (like clearLocationDetails)
        function closeTimeDisplay() {
            clearTimeDisplay();
            updateTimeDisplayButton();
        }

        // Show time display (like showLocationDetails)
        function showTimeDisplay() {
            if (!dayNightEnabled) {
                return; // Can't show time if day/night is disabled
            }
            // Make display visible and show close button
            d3.select("#time-display").classed("invisible", false);
            d3.select("#time-close").classed("invisible", false);
            // Populate the content immediately
            var isLocal = d3.select("#data-date").classed("local");
            var now = new Date();
            var hours = isLocal ? now.getHours() : now.getUTCHours();
            var minutes = isLocal ? now.getMinutes() : now.getUTCMinutes();
            var seconds = isLocal ? now.getSeconds() : now.getUTCSeconds();
            var timeStr = µ.zeroPad(hours, 2) + ":" + µ.zeroPad(minutes, 2) + ":" + µ.zeroPad(seconds, 2);
            var zoneStr = isLocal ? "Local" : "UTC";
            d3.select("#time-value").text(timeStr + " ");
            d3.select("#time-zone").text(zoneStr);
            updateTimeDisplayButton();
        }

        // Toggle time display visibility
        function toggleTimeDisplay() {
            var timeValue = d3.select("#time-value");
            if (timeValue.text() !== "") {
                // Time display is visible, close it
                closeTimeDisplay();
            } else {
                // Time display is hidden, show it
                showTimeDisplay();
            }
        }

        // Update time display button state
        function updateTimeDisplayButton() {
            var timeValue = d3.select("#time-value");
            var isVisible = timeValue.text() !== "";
            d3.select("#option-display-time").classed("highlighted", isVisible);
        }

        // Start continuous real-time updates (every second for day/night, every minute for mask)
        function startDayNightUpdates() {
            if (dayNightUpdateInterval) {
                clearInterval(dayNightUpdateInterval);
            }
            if (dayNightMaskInterval) {
                clearInterval(dayNightMaskInterval);
            }
            if (dayNightTimeInterval) {
                clearInterval(dayNightTimeInterval);
            }
            // Update day/night overlay every second
            dayNightUpdateInterval = setInterval(updateDayNight, SECOND);
            // Update time display every second (only updates if content exists)
            dayNightTimeInterval = setInterval(updateDayNightTime, SECOND);
            // Recalculate mask every minute
            dayNightMaskInterval = setInterval(function () {
                invalidateMask();
                updateDayNight();
            }, MINUTE);
            updateDayNight(); // Initial update
            // Show time display by default
            if (dayNightEnabled) {
                showTimeDisplay();
            } else {
                updateTimeDisplayButton(); // Initial button state
            }
        }

        // Stop updates when needed
        function stopDayNightUpdates() {
            if (dayNightUpdateInterval) {
                clearInterval(dayNightUpdateInterval);
                dayNightUpdateInterval = null;
            }
            if (dayNightMaskInterval) {
                clearInterval(dayNightMaskInterval);
                dayNightMaskInterval = null;
            }
            if (dayNightTimeInterval) {
                clearInterval(dayNightTimeInterval);
                dayNightTimeInterval = null;
            }
            // Clear time display
            clearTimeDisplay();
        }

        // Toggle day/night overlay
        function updateDayNightButton() {
            d3.select("#option-daynight").classed("highlighted", dayNightEnabled);
        }
        d3.select("#option-daynight").on("click", function () {
            dayNightEnabled = !dayNightEnabled;
            if (dayNightEnabled) {
                startDayNightUpdates();
            } else {
                stopDayNightUpdates();
                updateDayNight();
                clearTimeDisplay(); // Clear time display when day/night is disabled
            }
            updateDayNightButton();
        });
        updateDayNightButton(); // Initial state

        // Start updates after initialization
        when(true).then(function () {
            startDayNightUpdates();
        });

        // Add event handlers for showing, updating, and removing location details.
        inputController.on("click", showLocationDetails);
        fieldAgent.on("update", updateLocationDetails);
        d3.select("#location-close").on("click", _.partial(clearLocationDetails, true));

        // Set up time display event handlers
        d3.select("#time-zone").on("click", toggleTimeZone);
        d3.select("#time-close").on("click", closeTimeDisplay);
        d3.select("#option-display-time").on("click", toggleTimeDisplay);
        updateTimeDisplayButton(); // Initial state - time display starts visible

        // Expose clock control functions to window for Wallpaper Engine integration
        window.showTimeDisplay = showTimeDisplay;
        window.closeTimeDisplay = closeTimeDisplay;
        window.toggleTimeDisplay = toggleTimeDisplay;

        // Auto-rotation feature
        // Particles are now stored in geographic coordinates, so no field re-interpolation needed during rotation
        var autoRotateSpeed = 0; // degrees per minute (0 = off)
        var autoRotateAnimationFrame = null;
        var autoRotatePaused = false;
        var lastAutoRotateTime = null;
        var lastOverlayRenderTime = 0;

        function updateAutoRotation() {
            if (autoRotatePaused || autoRotateSpeed === 0) {
                return;
            }

            var globe = globeAgent.value();
            if (!globe || !globe.projection) {
                return;
            }

            var now = Date.now();
            if (!lastAutoRotateTime) {
                lastAutoRotateTime = now;
                return;
            }

            // Calculate elapsed time in minutes
            var elapsedMinutes = (now - lastAutoRotateTime) / 1000 / 60;
            lastAutoRotateTime = now;

            // Calculate degrees to rotate: speed is in degrees per minute
            var degreesToRotate = autoRotateSpeed * elapsedMinutes;

            var currentRotate = globe.projection.rotate();
            var newLongitude = currentRotate[0] - degreesToRotate; // negative for eastward rotation
            // Wrap longitude to -180 to 180 range
            newLongitude = ((newLongitude + 180) % 360 + 360) % 360 - 180;

            // Update rotation directly on projection
            globe.projection.rotate([newLongitude, currentRotate[1], currentRotate[2]]);

            // Update paths - trigger "move" to update SVG paths and day/night overlay
            // Particles are in geographic coordinates, so they automatically re-project when projection rotates
            // No field re-interpolation needed!
            inputController.trigger("move");

            // Trigger overlay update to ensure color overlay rotates with projection
            // Use "render" instead of "start" - "start" cancels interpolation, "render" triggers it
            // The overlay is rendered in screen space during field interpolation, so it needs to be re-rendered
            // Throttle this heavily: re-interpolating the field is expensive and should not run at rAF.
            if ((!lastOverlayRenderTime || (now - lastOverlayRenderTime) > 600) && !fieldInterpolating) {
                lastOverlayRenderTime = now;
                rendererAgent.trigger("render");
            }
        }

        function startAutoRotation(speed) {
            stopAutoRotation();
            autoRotateSpeed = speed;
            if (speed > 0) {
                if (typeof window.resetWindTrails === "function") {
                    window.resetWindTrails();
                }
                lastAutoRotateTime = Date.now();
                autoRotatePaused = false;
                // Use requestAnimationFrame for smooth animation (typically 60fps)
                function animate() {
                    if (autoRotateSpeed > 0 && !autoRotatePaused) {
                        updateAutoRotation();
                        autoRotateAnimationFrame = requestAnimationFrame(animate);
                    }
                }
                autoRotateAnimationFrame = requestAnimationFrame(animate);
            }
        }

        function stopAutoRotation() {
            // Save current orientation to configuration when stopping
            var globe = globeAgent.value();
            if (globe && globe.projection) {
                var currentOrientation = globe.orientation();
                configuration.save({ orientation: currentOrientation }, { source: "autoRotate" });
            }
            if (typeof window.resetWindTrails === "function") {
                window.resetWindTrails();
            }
            if (autoRotateAnimationFrame) {
                cancelAnimationFrame(autoRotateAnimationFrame);
                autoRotateAnimationFrame = null;
            }
            // Ensure the magnitude overlay is rebuilt for the final stopped orientation.
            rendererAgent.trigger("render");
            autoRotateSpeed = 0;
            autoRotatePaused = false;
            lastAutoRotateTime = null;
        }

        function pauseAutoRotation() {
            autoRotatePaused = true;
            lastAutoRotateTime = null; // Reset timer so we don't jump when resuming
        }

        function resumeAutoRotation() {
            if (autoRotateSpeed > 0) {
                autoRotatePaused = false;
                lastAutoRotateTime = Date.now();
                // Restart animation loop
                function animate() {
                    if (autoRotateSpeed > 0 && !autoRotatePaused) {
                        updateAutoRotation();
                        requestAnimationFrame(animate);
                    }
                }
                requestAnimationFrame(animate);
            }
        }

        // Pause auto-rotation during user interaction
        inputController.on("moveStart", pauseAutoRotation);
        inputController.on("moveEnd", function () {
            // Resume after a short delay to ensure user has finished
            setTimeout(resumeAutoRotation, 500);
        });

        // Restart auto-rotation when projection changes (to work with new projection)
        globeAgent.on("update", function () {
            if (autoRotateSpeed > 0) {
                // Restart with current speed to work with new projection
                var currentSpeed = autoRotateSpeed;
                autoRotateSpeed = 0; // Stop current animation
                autoRotatePaused = false;
                lastAutoRotateTime = null;
                setTimeout(function () {
                    startAutoRotation(currentSpeed);
                }, 100);
            }
        });

        // Expose auto-rotation functions to window for Wallpaper Engine integration
        window.startAutoRotation = startAutoRotation;
        window.stopAutoRotation = stopAutoRotation;
        window.setAutoRotateSpeed = function (speed) {
            if (speed > 0) {
                startAutoRotation(speed);
            } else {
                stopAutoRotation();
            }
        };

        // Listen for spinSpeed configuration changes (for web version URL hash support)
        // Note: This listener is set up AFTER window.setAutoRotateSpeed is defined above
        configuration.on("change:spinSpeed", function (model, speed) {
            console.log("spinSpeed changed to:", speed);
            if (typeof speed === "number" && speed >= 0) {
                if (typeof window.setAutoRotateSpeed === "function") {
                    window.setAutoRotateSpeed(speed);
                } else {
                    console.warn("window.setAutoRotateSpeed not available yet");
                }
            } else {
                if (typeof window.setAutoRotateSpeed === "function") {
                    window.setAutoRotateSpeed(0);
                }
            }
        });

        // Also apply initial spinSpeed if present in configuration (from URL hash)
        setTimeout(function () {
            if (configuration.has("spinSpeed")) {
                var speed = configuration.get("spinSpeed");
                console.log("Applying initial spinSpeed:", speed);
                if (typeof window.setAutoRotateSpeed === "function") {
                    window.setAutoRotateSpeed(speed);
                }
            }
        }, 100);

        // Modify menu depending on what mode we're in.
        configuration.on("change:param", function (context, mode) {
            d3.selectAll(".ocean-mode").classed("invisible", mode !== "ocean");
            d3.selectAll(".wind-mode").classed("invisible", mode !== "wind");
            switch (mode) {
                case "wind":
                    d3.select("#nav-backward-more").attr("title", "-1 Day");
                    d3.select("#nav-backward").attr("title", "-3 Hours");
                    d3.select("#nav-forward").attr("title", "+3 Hours");
                    d3.select("#nav-forward-more").attr("title", "+1 Day");
                    break;
                case "ocean":
                    d3.select("#nav-backward-more").attr("title", "-1 Month");
                    d3.select("#nav-backward").attr("title", "-5 Days");
                    d3.select("#nav-forward").attr("title", "+5 Days");
                    d3.select("#nav-forward-more").attr("title", "+1 Month");
                    break;
            }
        });

        // Add handlers for mode buttons.
        d3.select("#wind-mode-enable").on("click", function () {
            if (configuration.get("param") !== "wind") {
                configuration.save({ param: "wind", surface: "surface", level: "level", overlayType: "default" });
            }
        });
        configuration.on("change:param", function (x, param) {
            d3.select("#wind-mode-enable").classed("highlighted", param === "wind");
        });
        d3.select("#ocean-mode-enable").on("click", function () {
            if (configuration.get("param") !== "ocean") {
                // When switching between modes, there may be no associated data for the current date. So we need
                // find the closest available according to the catalog. This is not necessary if date is "current".
                // UNDONE: this code is annoying. should be easier to get date for closest ocean product.
                var ocean = { param: "ocean", surface: "surface", level: "currents", overlayType: "default" };
                var attr = _.clone(configuration.attributes);
                if (attr.date === "current") {
                    configuration.save(ocean);
                }
                else {
                    when.all(products.productsFor(_.extend(attr, ocean))).spread(function (product) {
                        if (product.date) {
                            configuration.save(_.extend(ocean, µ.dateToConfig(product.date)));
                        }
                    }).otherwise(report.error);
                }
                stopCurrentAnimation(true);  // cleanup particle artifacts over continents
            }
        });
        configuration.on("change:param", function (x, param) {
            d3.select("#ocean-mode-enable").classed("highlighted", param === "ocean");
        });

        // Add logic to disable buttons that are incompatible with each other.
        configuration.on("change:overlayType", function (x, ot) {
            d3.select("#surface-level").classed("disabled", ot === "air_density" || ot === "wind_power_density");
        });
        configuration.on("change:surface", function (x, s) {
            d3.select("#overlay-air_density").classed("disabled", s === "surface");
            d3.select("#overlay-wind_power_density").classed("disabled", s === "surface");
        });

        // Add event handlers for the time navigation buttons.
        d3.select("#nav-backward-more").on("click", navigate.bind(null, -10));
        d3.select("#nav-forward-more").on("click", navigate.bind(null, +10));
        d3.select("#nav-backward").on("click", navigate.bind(null, -1));
        d3.select("#nav-forward").on("click", navigate.bind(null, +1));
        d3.select("#nav-now").on("click", function () { configuration.save({ date: "current", hour: "" }); });

        d3.select("#option-show-grid").on("click", function () {
            configuration.save({ showGridPoints: !configuration.get("showGridPoints") });
        });
        configuration.on("change:showGridPoints", function (x, showGridPoints) {
            d3.select("#option-show-grid").classed("highlighted", showGridPoints);
        });

        // Add handlers for all wind level buttons.
        d3.selectAll(".surface").each(function () {
            var id = this.id, parts = id.split("-");
            bindButtonToConfiguration("#" + id, { param: "wind", surface: parts[0], level: parts[1] });
        });

        // Add handlers for ocean animation types.
        bindButtonToConfiguration("#animate-currents", { param: "ocean", surface: "surface", level: "currents" });

        // Add handlers for all overlay buttons.
        products.overlayTypes.forEach(function (type) {
            bindButtonToConfiguration("#overlay-" + type, { overlayType: type });
        });
        bindButtonToConfiguration("#overlay-wind", { param: "wind", overlayType: "default" });
        bindButtonToConfiguration("#overlay-ocean-off", { overlayType: "off" });
        bindButtonToConfiguration("#overlay-currents", { overlayType: "default" });

        // Add handlers for all projection buttons.
        globes.keys().forEach(function (p) {
            bindButtonToConfiguration("#" + p, { projection: p, orientation: "" }, ["projection"]);
        });

        // Add handlers for auto-rotation speed buttons.
        [0, 30, 60, 120, 180, 360].forEach(function (speed) {
            bindButtonToConfiguration("#spin-" + speed, { spinSpeed: speed }, ["spinSpeed"]);
        });
        configuration.on("change:spinSpeed", function (x, speed) {
            [0, 30, 60, 120, 180, 360].forEach(function (s) {
                d3.select("#spin-" + s).classed("highlighted", speed === s);
            });
        });

        // When touch device changes between portrait and landscape, rebuild globe using the new view size.
        d3.select(window).on("orientationchange", function () {
            view = µ.view();
            d3.selectAll(".fill-screen").attr("width", view.width).attr("height", view.height);
            d3.select("#daynight").attr("width", view.width).attr("height", view.height);
            globeAgent.submit(buildGlobe, configuration.get("projection"));
        });
    }

    function start() {
        // Everything is now set up, so load configuration from the hash fragment and kick off change events.
        configuration.fetch();
    }

    when(true).then(init).then(start).otherwise(report.error);

})();
