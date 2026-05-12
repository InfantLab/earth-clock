import * as THREE from "three";
import { Globe } from "./scene/Globe";
import { Sky } from "./scene/Sky";
import { Atmosphere } from "./scene/Atmosphere";
import { Moon } from "./scene/Moon";
import { Particles } from "./scene/Particles";
import { Trails } from "./scene/Trails";
import { Coastlines } from "./scene/Coastlines";
import { CloudLayer } from "./scene/CloudLayer";
import { AuroraLayer } from "./scene/AuroraLayer";
import { FireLayer } from "./scene/FireLayer";
import { HurricaneLayer } from "./scene/HurricaneLayer";
import { HurricaneTrackLayer } from "./scene/HurricaneTrackLayer";
import type { StormGeometry } from "./scene/HurricaneTrackLayer";
import { LightningLayer } from "./scene/LightningLayer";
import { OverlayLayer } from "./scene/OverlayLayer";
import { FlatMap } from "./scene/FlatMap";
import { LocationPin } from "./scene/LocationPin";
import { Menu } from "./ui/Menu";
import { Debug } from "./ui/Debug";
import { DataRegistry } from "./ui/DataRegistry";
import { DataPanel } from "./ui/DataPanel";
import { Clock } from "./ui/Clock";
import { LocationPanel } from "./ui/LocationPanel";
import { LiveDataSource } from "./data/DataSource";
import { fetchAuroraGrid } from "./data/auroraLoader";
import { fetchLatestKp, kpActivityLabel, kpVisibleLatitude } from "./data/kpLoader";
import { fetchFireDetections } from "./data/firmsLoader";
import { fetchActiveStorms } from "./data/nhcLoader";
import { fetchAndParseKmz, rewriteNhcUrl } from "./data/kmzParser";
import { LightningLoader } from "./data/lightningLoader";
import { windGridToTexture } from "./data/windToTexture";
import { fetchGibsTexture, bestAvailableDailyDate } from "./data/gibsLoader";
import {
  debugAuroraGrid, debugFireDetections,
  debugStormGrid, debugCloudTexture,
} from "./data/debugFixtures";
import { createCamera, attachOrbitControls } from "./scene/Camera";
import { sunDirectionWorld, solarPosition, earthRotationY, gmst } from "./astro/solar";
import { moonPositionWorld, lunarPosition } from "./astro/lunar";

const container = document.getElementById("app")!;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const sky = new Sky();
scene.add(sky.mesh);

const globe = new Globe();
scene.add(globe.mesh);

// Atmospheric rim glow — separate mesh in world space, doesn't rotate with Earth
const atmosphere = new Atmosphere(1.0, 0.025);
scene.add(atmosphere.mesh);

// Moon — positioned at the actual sub-lunar location * distance (in Earth radii)
const moon = new Moon();
scene.add(moon.mesh);

// Coastlines (Natural Earth, 50m resolution). Loaded async from /data/earth-topo.json.
const coastlines = new Coastlines();
scene.add(coastlines.mesh);

// Live cloud cover layer — translucent shell above the surface, textured with yesterday's
// NASA GIBS VIIRS true-color mosaic. Loaded async; until the texture lands, the shell is invisible.
const clouds = new CloudLayer(1.003);
scene.add(clouds.mesh);

// Aurora oval — NOAA SWPC Ovation probability grid, additive point cloud at r=1.008.
// Geomagnetically fixed (no Earth-rotation applied). Refreshes every 5 min.
const aurora = new AuroraLayer();
scene.add(aurora.mesh);

// Active fires — NASA FIRMS VIIRS detections (last 24h), flickering additive points at r=1.0015.
// Geographically fixed, so rotates with Earth. Refreshes every hour.
const fires = new FireLayer();
scene.add(fires.mesh);

// Active tropical cyclones — NHC CurrentStorms.json. Empty off-season; auto-activates when storms appear.
// Pulsing animated swirl sprites at r=1.012. Refreshes every 15 min.
const hurricanes = new HurricaneLayer();
scene.add(hurricanes.mesh);

// Real-time lightning strikes from the Blitzortung community network. WebSocket stream;
// strikes appear as bright additive flashes that fade over ~0.6 s.
const lightning = new LightningLayer();
scene.add(lightning.mesh);

// Hurricane tracks + cones — past best-track polyline, forecast track, and 5-day
// uncertainty cone polygon per active storm. Loaded from NHC KMZ files on demand when
// the storm list arrives. Empty off-season; populates automatically once Atlantic /
// Eastern Pacific season starts.
const hurricaneTracks = new HurricaneTrackLayer();
scene.add(hurricaneTracks.mesh);

// Mean Sea Level Pressure overlay — first of the GFS scalar overlays (Temp, RH, TPW, TCW
// will follow the same pattern). Translucent shell at r=1.006; hidden until data loads.
const overlay = new OverlayLayer(1.006);
scene.add(overlay.mesh);

// Equirectangular flat-map mode. Owns its own scene + ortho camera; rendered instead of the
// 3D scene when the menu's "Map" toggle is on. v1 has day + night + clouds + terminator;
// aurora/fires/hurricanes/wind in flat-map are deferred (see PLAN.md).
const flatMap = new FlatMap();
flatMap.resize(window.innerWidth, window.innerHeight);

// Click-to-pin location marker. The globe-mode mesh is parented to the rotating Earth so it
// stays glued to its geographic position as Earth spins; the flat-map mesh is parented to
// the FlatMap scene so it appears at the correct (u, v).
const locationPin = new LocationPin();
globe.attachToEarth(locationPin.meshGlobe);
flatMap.scene.add(locationPin.meshFlat);

// GPU wind particles. Live-tune from the console:
//   __orrery.particles.setSpeed(0.05) / setPointSize(3) / setAlpha(0.4)
//   __orrery.trails.setFade(0.99)   // longer trails
//   __orrery.coastlines.setOpacity(0.6)
const particles = new Particles(renderer, 65536);

// Particles render via the Trails accumulator (additive ping-pong) rather than directly into the
// main scene, so they leave persistent streaks instead of single dots.
const trails = new Trails(window.innerWidth, window.innerHeight, particles.mesh);

// Sun: a directional light positioned along the actual sun direction so Three.js's
// built-in lighting gives us a physically-correct day/night terminator on the day map.
const sun = new THREE.DirectionalLight(0xffffff, 1.4);
sun.position.set(50, 0, 0);
scene.add(sun);
scene.add(new THREE.AmbientLight(0x101824, 0.35));

const camera = createCamera(window.innerWidth / window.innerHeight);
const controls = attachOrbitControls(camera, renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  trails.resize(window.innerWidth, window.innerHeight);
  flatMap.resize(window.innerWidth, window.innerHeight);
});

// Reusable scratch vectors — avoid allocating each frame
const sunDir = new THREE.Vector3();
const moonPos = new THREE.Vector3();

// Time control: real wall-clock by default. Set window.__orreryTimeWarp = N to make 1 real second
// advance N simulated seconds (e.g. 3600 for hour-per-second). Useful while developing.
let simulatedTime = Date.now();
let lastFrame = performance.now();

declare global {
  interface Window {
    __orreryTimeWarp?: number;
    __orrery?: {
      particles: Particles;
      globe: Globe;
      trails: Trails;
      coastlines: Coastlines;
      clouds: CloudLayer;
      aurora: AuroraLayer;
      fires: FireLayer;
      hurricanes: HurricaneLayer;
      hurricaneTracks: HurricaneTrackLayer;
      lightning: LightningLayer;
      overlay: OverlayLayer;
    };
  }
}

// Expose handles for live tweaking from the JS console
window.__orrery = { particles, globe, trails, coastlines, clouds, aurora, fires, hurricanes, hurricaneTracks, lightning, overlay };

// Shared data-status registry — every loader writes to this; DataPanel + Debug both subscribe.
// Static / bundled assets are reported up-front so they appear in the panel without waiting.
const dataRegistry = new DataRegistry();
dataRegistry.report("day map",   { source: "Solar System Scope · 2k_earth_daymap.jpg",   bundled: true });
dataRegistry.report("night map", { source: "Solar System Scope · 2k_earth_nightmap.jpg", bundled: true });
dataRegistry.report("moon",      { source: "NASA / USGS · moon_1024.jpg",                 bundled: true });

// Diagnostic overlay (bottom-right). Hidden by default; toggle via the Debug menu entry.
// Each loader reports its state (✓/✗/⋯) here. The "Use test data" button replaces live
// fetches with synthetic fixtures so we can isolate "loader broken" vs "renderer broken".
const debug = new Debug(document.body);
debug.pending("clouds",     "fetching VIIRS mosaic…");
debug.pending("aurora",     "fetching SWPC Ovation…");
debug.pending("kp",         "fetching SWPC K-index…");
debug.pending("fires",      "fetching FIRMS detections…");
debug.pending("hurricanes", "fetching NHC CurrentStorms…");
debug.pending("wind",       "fetching GFS surface wind…");
debug.pending("mslp",       "fetching GFS MSLP…");
debug.pending("temp",       "fetching GFS 2 m temperature…");
debug.pending("rh",         "fetching GFS 2 m RH…");
debug.pending("tpw",        "fetching GFS TPW…");
debug.pending("tcw",        "fetching GFS TCW…");
debug.pending("coastlines", "fetching Natural Earth…");

// User-facing data sources panel (top-right). Lists source + last-fetched age per layer.
const dataPanel = new DataPanel(document.body, dataRegistry);

// Clock readout (top-centre). Big monospace UTC/local clock driven by simulatedTime so it
// reflects time-warp. Click the zone label to flip UTC ⇄ Local.
const clock = new Clock(document.body);

// Location panel (top-left). Shows pinned-location coords + solar time. Hidden until the
// user enables Location mode and clicks the globe.
const locationPanel = new LocationPanel(document.body);

// Layer-toggle menu (bottom-left). Inherits styling from the classic earth-clock menu;
// the brand wordmark is the open/close affordance. Selections persist to localStorage.
const menu = new Menu(document.body,
  { globe, atmosphere, moon, coastlines, clouds, aurora, fires, hurricanes, hurricaneTracks, lightning, overlay, flatMap },
  { debug, data: dataPanel, clock, location: locationPanel },
);

locationPanel.onClear(() => {
  locationPin.setVisible(false);
  locationPanel.reset();
});

// "Use my location" button on the LocationPanel → drop the pin at the browser's reported
// (lat, lon). Same code path as a click on the globe.
locationPanel.onGeolocate((lat, lon) => {
  locationPin.setLocation(lat, lon);
  locationPin.setVisible(true);
  locationPanel.setLocation(lat, lon);
  console.log(`[earth-clock] pinned via geolocation: ${lat.toFixed(2)}, ${lon.toFixed(2)}`);
});

// Click-to-pin location handler. Only fires on simple clicks (not drags) — OrbitControls
// uses mousedown+move for orbit and never fires "click" if the pointer moved past its
// threshold. In globe mode we raycast against the Earth's day mesh and convert the world-
// space hit point back to (lat, lon) via Globe.worldToLatLon. In map mode we convert the
// click's NDC to the plane's (u, v) → (lat, lon).
const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
renderer.domElement.addEventListener("click", (event) => {
  if (!menu.isLocationActive()) return;
  const rect = renderer.domElement.getBoundingClientRect();
  ndc.x =  ((event.clientX - rect.left) / rect.width)  * 2 - 1;
  ndc.y = -((event.clientY - rect.top)  / rect.height) * 2 + 1;

  let lat: number, lon: number;
  if (menu.isMapMode()) {
    // Unproject NDC at z=0 (the plane sits at z=0) → world position on the plane.
    const planeWorld = new THREE.Vector3(ndc.x, ndc.y, 0).unproject(flatMap.camera);
    // Plane is 2 wide × 1 tall centred at origin: x ∈ [-1, +1] → lon ∈ [-180, +180].
    if (Math.abs(planeWorld.x) > 1 || Math.abs(planeWorld.y) > 0.5) return; // clicked outside the map
    lon = planeWorld.x * 180;
    lat = planeWorld.y * 180;
  } else {
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObject(globe.earthMesh, false);
    if (!hits.length) return;
    ({ lat, lon } = globe.worldToLatLon(hits[0].point));
  }
  locationPin.setLocation(lat, lon);
  locationPin.setVisible(true);
  locationPanel.setLocation(lat, lon);
  console.log(`[orrery] pinned: ${lat.toFixed(2)}, ${lon.toFixed(2)}`);
});

// "Find moon" button: re-position the camera along the moon's direction at 1.5x the moon's
// distance, so both the moon (closer) and Earth (farther) sit in view. OrbitControls' target
// stays at origin so subsequent orbiting works as usual.
debug.onFindMoon(() => {
  if (moonPos.lengthSq() < 0.01) return;
  const dist = Math.min(moonPos.length() * 1.5, 199); // stay under maxDistance=200
  camera.position.copy(moonPos).normalize().multiplyScalar(dist);
  controls.target.set(0, 0, 0);
  controls.update();
  console.log(`[orrery] find moon: camera repositioned to ${dist.toFixed(1)} r along moon direction`);
});

debug.onUseTestData(() => {
  console.log("[orrery] debug: loading fixture data");
  const auroraGrid = debugAuroraGrid();
  const fireGrid = debugFireDetections();
  const stormGrid = debugStormGrid();
  aurora.update(auroraGrid);
  fires.update(fireGrid);
  hurricanes.update(stormGrid);
  const debugTex = debugCloudTexture();
  clouds.setTexture(debugTex);
  flatMap.setCloudTexture(debugTex);
  // Sync menu state so the fixture is visible regardless of previous toggle state — and
  // so the menu's button highlight reflects what's currently visible. The user can then
  // toggle layers off via the menu in the usual way.
  menu.setLayer("clouds",     true);
  menu.setLayer("aurora",     true);
  menu.setLayer("fires",      true);
  menu.setLayer("hurricanes", true);
  debug.info("clouds",     `fixture: procedural noise (${1024}×${512})`);
  debug.info("aurora",     `fixture: ${auroraGrid.pointCount} pts in 6 bands ±55°…±80°`);
  debug.info("fires",      `fixture: ${fireGrid.detections.length} pts across 8 known fire zones`);
  debug.info("hurricanes", `fixture: ${stormGrid.storms.length} storms in every basin`);
});

// Fetch real GFS surface wind and hand it to the particles. Mock east-wind keeps running until
// this resolves, so the scene is never blank. No auto-refresh yet (wind GRIB→JSON happens
// on the server side every 6 h — Phase B will plumb in-browser refresh).
const dataSource = new LiveDataSource();
dataSource.getWindGrid(new Date())
  .then(grid => {
    particles.setWindTexture(windGridToTexture(grid));
    debug.info("wind", `${grid.width}×${grid.height}, valid ${grid.validTime.toISOString().slice(0, 16)}Z`);
    dataRegistry.report("wind", {
      source: "NOAA GFS surface (via earth-clock weather-service)",
      fetched: new Date(),
      detail: `valid ${grid.validTime.toISOString().slice(0, 13)}Z`,
      refreshSeconds: 6 * 3600,
    });
  })
  .catch(err => {
    debug.warn("wind", `load failed: ${err.message ?? err}`);
    dataRegistry.report("wind", { source: "NOAA GFS surface", error: String(err.message ?? err) });
  });

// GFS scalar overlays (MSLP / Temp / RH / TPW / TCW) — all produced by
// weather-service.js, refreshed every 6 h server-side. Pre-fetched once at startup and
// cached; the menu's "Overlay" row picks which one is currently rendered (mutually
// exclusive — only one overlay visible at a time, matching classic earth-clock).
//
// If a file 404s the user probably hasn't run `npm run weather-service` recently; we
// report that clearly in the DataPanel so it's obvious what's missing.
type OverlayCfg = {
  type: "mean_sea_level_pressure" | "temp" | "relative_humidity"
      | "total_precipitable_water" | "total_cloud_water";
  registryKey: string;
  sourceLabel: string;
  vmin: number;
  vmax: number;
  palette: "pressure" | "temperature" | "humidity" | "water" | "cloud";
};

// Ranges chosen to emphasise contrast across the typical global distribution rather than
// the absolute physical range. Easy to tune later via overlay.setData() from the console.
const OVERLAY_CFGS: Record<"mslp" | "temp" | "rh" | "tpw" | "tcw", OverlayCfg> = {
  mslp: {
    type: "mean_sea_level_pressure",
    registryKey: "mslp",
    sourceLabel: "NOAA GFS · MSLP",
    vmin: 96_000, vmax: 104_000, // Pa  →  960–1040 hPa
    palette: "pressure",
  },
  temp: {
    type: "temp",
    registryKey: "temp",
    sourceLabel: "NOAA GFS · 2 m temperature",
    vmin: 240, vmax: 310,         // K  →  -33 to +37 °C
    palette: "temperature",
  },
  rh: {
    type: "relative_humidity",
    registryKey: "rh",
    sourceLabel: "NOAA GFS · 2 m relative humidity",
    vmin: 0, vmax: 100,           // %
    palette: "humidity",
  },
  tpw: {
    type: "total_precipitable_water",
    registryKey: "tpw",
    sourceLabel: "NOAA GFS · total precipitable water",
    vmin: 0, vmax: 70,            // mm
    palette: "water",
  },
  tcw: {
    type: "total_cloud_water",
    registryKey: "tcw",
    sourceLabel: "NOAA GFS · total cloud water",
    vmin: 0, vmax: 2,             // kg/m²
    palette: "cloud",
  },
};

type OverlayKey = keyof typeof OVERLAY_CFGS;
const overlayGrids: Partial<Record<OverlayKey, import("./data/DataSource").ScalarGrid>> = {};

(Object.keys(OVERLAY_CFGS) as OverlayKey[]).forEach(key => {
  const cfg = OVERLAY_CFGS[key];
  dataSource.getScalar(cfg.type, new Date())
    .then(grid => {
      overlayGrids[key] = grid;
      const validZ = grid.validTime.toISOString().slice(0, 13);
      debug.info(cfg.registryKey, `${grid.width}×${grid.height}, valid ${validZ}Z`);
      dataRegistry.report(cfg.registryKey, {
        source: cfg.sourceLabel,
        fetched: new Date(),
        detail: `valid ${validZ}Z`,
        refreshSeconds: 6 * 3600,
      });
      // If this overlay is the one currently selected in the menu, apply its data now.
      if (menu.activeOverlay() === key) applyActiveOverlay();
    })
    .catch(err => {
      debug.warn(cfg.registryKey, `load failed: ${err.message ?? err} — run \`npm run weather-service\` from the repo root`);
      dataRegistry.report(cfg.registryKey, {
        source: cfg.sourceLabel,
        error: String(err.message ?? err),
      });
    });
});

function applyActiveOverlay() {
  const active = menu.activeOverlay() as OverlayKey | null;
  if (!active) return;
  const grid = overlayGrids[active];
  const cfg = OVERLAY_CFGS[active];
  if (!grid || !cfg) return; // data may still be loading; will reapply when it arrives
  overlay.setData(grid, cfg.vmin, cfg.vmax, cfg.palette);
}

menu.onOverlayChange((active) => {
  if (active) applyActiveOverlay();
  // If active is null, overlay.mesh.visible is already false (apply() in Menu handled it).
});

// Load Natural Earth coastlines (TopoJSON). Renders empty until this resolves.
fetch("/data/earth-topo.json")
  .then(r => r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))
  .then(topo => {
    coastlines.loadFromTopology(topo, "coastline_50m");
    debug.info("coastlines", "Natural Earth 50 m loaded");
    dataRegistry.report("coastlines", { source: "Natural Earth · 50 m physical", bundled: true });
  })
  .catch(err => {
    debug.warn("coastlines", `load failed: ${err.message ?? err}`);
    dataRegistry.report("coastlines", { source: "Natural Earth 50 m", error: String(err.message ?? err) });
  });

// Fetch NOAA SWPC aurora probability grid. CORS-clean, no auth, ~900 KB, refreshes every 5 min.
function loadAurora() {
  fetchAuroraGrid()
    .then(grid => {
      aurora.update(grid);
      const fc = grid.forecastTime.toISOString().slice(11, 16);
      // Finer-grained activity bands keyed on the Ovation peak probability. (The dedicated
      // "Kp index" row below shows the authoritative global activity number; this just
      // describes the brightness of the current auroral oval.)
      const activity = grid.maxProbability < 5  ? "very quiet"
                     : grid.maxProbability < 15 ? "quiet"
                     : grid.maxProbability < 30 ? "moderate"
                     : grid.maxProbability < 50 ? "active"
                     : grid.maxProbability < 75 ? "storm"
                     : "severe";
      debug.info("aurora", `${grid.pointCount} pts, fc ${fc}Z, max ${grid.maxProbability}% (${activity})`);
      dataRegistry.report("aurora", {
        source: "NOAA SWPC · Ovation aurora forecast",
        fetched: new Date(),
        detail: `fc ${fc}Z · peak ${grid.maxProbability}% (${activity})`,
        refreshSeconds: 5 * 60,
      });
    })
    .catch(err => {
      debug.warn("aurora", `load failed: ${err.message ?? err}`);
      dataRegistry.report("aurora", { source: "NOAA SWPC Ovation", error: String(err.message ?? err) });
    });
}
loadAurora();
setInterval(loadAurora, 5 * 60 * 1000);

// Planetary K-index — the authoritative global geomagnetic-activity number (0-9). Tells
// users how far south aurora is currently visible. Independent of the Ovation oval which
// describes spatial distribution; Kp gives the headline.
function loadKp() {
  fetchLatestKp()
    .then(reading => {
      const label = kpActivityLabel(reading.kp);
      const lat = kpVisibleLatitude(reading.kp);
      debug.info("kp", `Kp ${reading.kp.toFixed(1)} (${label}), aurora visible above ~${lat}° mag-lat`);
      dataRegistry.report("kp", {
        source: "NOAA SWPC · planetary K-index",
        fetched: new Date(),
        detail: `Kp ${reading.kp.toFixed(1)} (${label}) · visible above ~${lat}°`,
        refreshSeconds: 60,
      });
    })
    .catch(err => {
      debug.warn("kp", `load failed: ${err.message ?? err}`);
      dataRegistry.report("kp", { source: "NOAA SWPC planetary K-index", error: String(err.message ?? err) });
    });
}
loadKp();
setInterval(loadKp, 5 * 60 * 1000);

// Fetch NASA FIRMS active fire detections (last 24 h of VIIRS S-NPP NRT).
// Free key in .env.local (VITE_FIRMS_MAP_KEY). Rate-limited; refresh hourly is well within budget.
function loadFires() {
  fetchFireDetections()
    .then(grid => {
      fires.update(grid);
      debug.info("fires", `${grid.detections.length} detections`);
      dataRegistry.report("fires", {
        source: "NASA FIRMS · VIIRS S-NPP NRT",
        fetched: new Date(),
        detail: `${grid.detections.length} detections · last 24 h`,
        refreshSeconds: 60 * 60,
      });
    })
    .catch(err => {
      debug.warn("fires", `load failed: ${err.message ?? err}`);
      dataRegistry.report("fires", { source: "NASA FIRMS VIIRS", error: String(err.message ?? err) });
    });
}
loadFires();
setInterval(loadFires, 60 * 60 * 1000);

// Fetch NHC active tropical cyclones. CORS-clean. Empty array off-season — that's fine,
// the layer just sits dormant and lights up automatically once NHC posts the first storm.
function loadHurricanes() {
  fetchActiveStorms()
    .then(grid => {
      hurricanes.update(grid);
      if (grid.storms.length) {
        const summary = grid.storms.map(s => `${s.name || s.id} ${s.intensityKt}kt`).join(", ");
        debug.info("hurricanes", `${grid.storms.length} active: ${summary}`);
        dataRegistry.report("hurricanes", {
          source: "NHC · CurrentStorms.json",
          fetched: new Date(),
          detail: `${grid.storms.length} active`,
          refreshSeconds: 15 * 60,
        });
        // Kick off per-storm KMZ fetches in parallel. Failures on individual KMZs don't
        // hold up other storms; the track layer just renders whatever resolved successfully.
        loadHurricaneTracks(grid.storms);
      } else {
        debug.info("hurricanes", "no active storms (off-season)");
        dataRegistry.report("hurricanes", {
          source: "NHC · CurrentStorms.json",
          fetched: new Date(),
          detail: "no active storms (off-season)",
          refreshSeconds: 15 * 60,
        });
        hurricaneTracks.update([]); // clear any stale geometry
      }
    })
    .catch(err => {
      debug.warn("hurricanes", `load failed: ${err.message ?? err}`);
      dataRegistry.report("hurricanes", { source: "NHC CurrentStorms.json", error: String(err.message ?? err) });
    });
}
loadHurricanes();
setInterval(loadHurricanes, 15 * 60 * 1000);

async function loadHurricaneTracks(storms: import("./data/nhcLoader").Storm[]) {
  const results = await Promise.all(storms.map(async (s): Promise<StormGeometry> => {
    const sg: StormGeometry = { stormId: s.id };
    // Run the three KMZ fetches in parallel for this storm; tolerate individual failures.
    const fetchOne = async (url: string | undefined) => {
      if (!url) return undefined;
      try { return await fetchAndParseKmz(rewriteNhcUrl(url)); }
      catch (err) {
        debug.warn(`tracks:${s.id}`, `KMZ failed: ${(err as Error).message}`);
        return undefined;
      }
    };
    const [bt, ft, fc] = await Promise.all([
      fetchOne(s.bestTrackKmz),
      fetchOne(s.forecastTrackKmz),
      fetchOne(s.forecastConeKmz),
    ]);
    if (bt) sg.bestTrack = bt;
    if (ft) sg.forecastTrack = ft;
    if (fc) sg.forecastCone = fc;
    return sg;
  }));
  hurricaneTracks.update(results);
  const totalGeoms = results.reduce(
    (n, sg) => n + (sg.bestTrack?.length ?? 0) + (sg.forecastTrack?.length ?? 0) + (sg.forecastCone?.length ?? 0),
    0,
  );
  if (totalGeoms > 0) {
    debug.info("hurricane-tracks", `${results.length} storms, ${totalGeoms} geometry parts`);
    dataRegistry.report("storm-tracks", {
      source: "NHC · per-storm KMZ (track + cone)",
      fetched: new Date(),
      detail: `${results.length} storms · ${totalGeoms} geometry parts`,
      refreshSeconds: 15 * 60,
    });
  }
}

// Real-time lightning strikes via Blitzortung's community WebSocket. We hold the strikes
// rate as a rolling 60-second count for the DataPanel readout. The loader auto-reconnects
// on disconnect; status changes are reported through the data registry.
const lightningTimestamps: number[] = []; // performance.now() of each received strike
const lightningLoader = new LightningLoader({
  onStrike: (strike) => {
    // animTime matches the shader's `uTime` (seconds since first frame), which is set in
    // `animate()` from `t / 1000`. Using performance.now()/1000 is the same clock.
    lightning.addStrike(strike, performance.now() / 1000);
    const now = performance.now();
    lightningTimestamps.push(now);
    // Drop entries older than 60 s.
    while (lightningTimestamps.length && now - lightningTimestamps[0] > 60_000) {
      lightningTimestamps.shift();
    }
  },
  onStatus: (status, detail) => {
    const stats = lightningLoader.stats;
    if (status === "connected") {
      debug.info("lightning", "Blitzortung connected");
      dataRegistry.report("lightning", {
        source: "Blitzortung · community WebSocket",
        fetched: new Date(),
        detail: "connected · waiting for strikes",
        refreshSeconds: 60, // never "stale" in the same way as polled feeds — connection state matters
      });
    } else if (status === "disconnected") {
      debug.warn("lightning", "disconnected — reconnecting in 5 s");
      dataRegistry.report("lightning", {
        source: "Blitzortung · community WebSocket",
        error: `disconnected (received ${stats.count} strikes)`,
      });
    } else if (status === "error") {
      debug.warn("lightning", detail ?? "WebSocket error");
      dataRegistry.report("lightning", {
        source: "Blitzortung · community WebSocket",
        error: detail ?? "WebSocket error",
      });
    } else {
      // "connecting"
      debug.pending("lightning", "connecting to Blitzortung…");
    }
  },
});
lightningLoader.start();

// Refresh the data panel's lightning row once a second with the rolling 60-s strike rate.
// Cheap (1 setInterval callback writing to the registry); independent of WS event timing.
setInterval(() => {
  if (!lightningLoader.stats.connectedSince) return; // skip during disconnects
  const rate = lightningTimestamps.length; // strikes in the last 60 s
  dataRegistry.report("lightning", {
    source: "Blitzortung · community WebSocket",
    fetched: lightningLoader.stats.last ?? new Date(),
    detail: `${rate} strikes/min · ${lightningLoader.stats.count} total`,
    refreshSeconds: 60,
  });
}, 1000);

// Fetch yesterday's global VIIRS true-color mosaic from NASA GIBS (CORS-clean, no auth).
// 8 tiles at zoom 1 → 2048×1024 final texture, ~700 KB total payload.
const cloudDate = bestAvailableDailyDate();
fetchGibsTexture({
  layer: "VIIRS_NOAA20_CorrectedReflectance_TrueColor",
  date: cloudDate,
  tileMatrixSet: "250m",
  zoom: 1,
  ext: "jpg",
})
  .then(tex => {
    clouds.setTexture(tex);
    flatMap.setCloudTexture(tex);
    debug.info("clouds", `VIIRS NOAA-20 ${cloudDate.toISOString().slice(0, 10)}`);
    dataRegistry.report("clouds", {
      source: "NASA GIBS · VIIRS NOAA-20 True Color",
      fetched: new Date(),
      detail: cloudDate.toISOString().slice(0, 10),
      refreshSeconds: 24 * 3600,
    });
  })
  .catch(err => {
    debug.warn("clouds", `load failed: ${err.message ?? err}`);
    dataRegistry.report("clouds", { source: "NASA GIBS VIIRS NOAA-20", error: String(err.message ?? err) });
  });

function updateAstro() {
  const now = new Date(simulatedTime);
  sunDirectionWorld(now, sunDir);
  // Move the directional light to sit along the sun direction (50 units away keeps it well outside the scene)
  sun.position.copy(sunDir).multiplyScalar(50);
  globe.setSunDirection(sunDir);
  globe.setRotationY(earthRotationY(now));
  atmosphere.setSunDirection(sunDir);

  // Flat map renders in the geographic frame — pass sub-solar (lat, lon) directly.
  const sol = solarPosition(now);
  const RAD = 180 / Math.PI;
  const subSolLat = sol.dec * RAD;
  const subSolLon = ((sol.ra * RAD - gmst(now) * RAD + 180) % 360 + 360) % 360 - 180;
  flatMap.setSubSolar(subSolLat, subSolLon);

  moonPositionWorld(now, moonPos);
  moon.setPosition(moonPos);

  // Particles, coastlines, clouds, fires, and hurricanes share Earth's rotation so they stay glued to the ground frame
  const earthY = earthRotationY(now);
  particles.setRotationY(earthY);
  coastlines.setRotationY(earthY);
  clouds.setRotationY(earthY);
  clouds.setSunDirection(sunDir);
  fires.setRotationY(earthY);
  hurricanes.setRotationY(earthY);
  hurricaneTracks.setRotationY(earthY);
  lightning.setRotationY(earthY);
  overlay.setRotationY(earthY);
  // Aurora data is in geographic lat/lon for the forecast time, so it shares Earth's spin.
  // Drift between 5-min fetches is <1.3° and gets corrected next refresh.
  aurora.setRotationY(earthY);
  aurora.setSunDirection(sunDir);
}

// Throttle the debug astro readout to ~4 Hz — no need to re-render the panel every frame.
let nextAstroUpdate = 0;
const moonNdc = new THREE.Vector3();
function updateDebugAstro(now: Date) {
  const ts = performance.now();
  if (ts < nextAstroUpdate) return;
  nextAstroUpdate = ts + 250;
  const sol = solarPosition(now);
  const lun = lunarPosition(now);
  // Sub-solar / sub-lunar lat = declination. Sub-solar lon = RA − GMST (each in degrees).
  const RAD = 180 / Math.PI;
  const gmstDeg = gmst(now) * RAD;
  const subSolarLat = sol.dec * RAD;
  const subSolarLon = wrapLon(sol.ra * RAD - gmstDeg);
  const subLunarLat = lun.dec * RAD;
  const subLunarLon = wrapLon(lun.ra * RAD - gmstDeg);
  const camDist = camera.position.length();
  // Project the moon onto normalised device coordinates (−1..+1) to see whether it's in
  // the current viewport. If off-screen, the button repositions the camera.
  moonNdc.copy(moonPos).project(camera);
  const onScreen =
    Math.abs(moonNdc.x) < 1 && Math.abs(moonNdc.y) < 1 && moonNdc.z > -1 && moonNdc.z < 1;
  const moonStatus = onScreen
    ? `on-screen @ (${moonNdc.x.toFixed(2)}, ${moonNdc.y.toFixed(2)})`
    : `off-screen — use Find moon`;
  debug.setAstro(
    `time     ${now.toISOString().slice(0, 19)}Z\n` +
    `sub-sol  ${fmt(subSolarLat)}, ${fmt(subSolarLon)}\n` +
    `sub-lun  ${fmt(subLunarLat)}, ${fmt(subLunarLon)}  d=${lun.distance.toFixed(1)} r\n` +
    `moon     ${moonStatus}\n` +
    `camera   ${camDist.toFixed(2)} r from origin`
  );
}
function wrapLon(d: number): number {
  let x = ((d + 180) % 360 + 360) % 360 - 180;
  return x;
}
function fmt(deg: number): string {
  const s = deg >= 0 ? "+" : "−";
  return `${s}${Math.abs(deg).toFixed(1)}°`;
}

function animate(t: number) {
  const dtMs = t - lastFrame;
  lastFrame = t;
  const warp = window.__orreryTimeWarp ?? 1;
  simulatedTime += dtMs * warp;

  const now = new Date(simulatedTime);
  updateAstro();
  updateDebugAstro(now);
  clock.setTime(now);
  locationPanel.setNow(now);
  // Use real wall-clock dt for particles (independent of simulated-time warp;
  // wind drift should look the same regardless of how fast Earth is spinning).
  particles.update(dtMs / 1000, t / 1000);
  aurora.setTime(t / 1000);
  fires.setTime(t / 1000);
  hurricanes.setTime(t / 1000);
  lightning.setTime(t / 1000);
  // OrbitControls' built-in autoRotate. Three.js pauses it automatically while the user is
  // actively dragging, so input handover is implicit; we just keep the flag in sync with
  // the menu toggle each frame.
  controls.autoRotate = menu.isAutoOrbit();
  controls.update();
  if (menu.isMapMode()) {
    // Flat equirectangular mode — render the FlatMap scene only. Aurora/fires/hurricanes/wind
    // overlays in flat-map are TODO (see PLAN.md); v1 has day + night + clouds + terminator.
    renderer.render(flatMap.scene, flatMap.camera);
  } else {
    // Main scene first (globe, atmosphere, moon, sky) — depth populated, particles NOT here
    renderer.render(scene, camera);
    // Then composite trails over the top using the same camera — unless wind layer is off
    if (menu.isWindVisible()) trails.render(renderer, camera);
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
