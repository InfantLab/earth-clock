import * as THREE from "three";
import { Globe } from "./scene/Globe";
import { Sky } from "./scene/Sky";
import { tryLoadSkybox } from "./scene/Skybox";
import { Atmosphere } from "./scene/Atmosphere";
import { Moon } from "./scene/Moon";
import { Sun } from "./scene/Sun";
import { Particles } from "./scene/Particles";
import { Trails } from "./scene/Trails";
import { Coastlines } from "./scene/Coastlines";
import { CloudLayer } from "./scene/CloudLayer";
import { AuroraLayer } from "./scene/AuroraLayer";
import { FireLayer } from "./scene/FireLayer";
import { HurricaneLayer } from "./scene/HurricaneLayer";
import { HurricaneTrackLayer } from "./scene/HurricaneTrackLayer";
import type { StormGeometry } from "./scene/HurricaneTrackLayer";
import { EclipseLayer } from "./scene/EclipseLayer";
import { LightningLayer } from "./scene/LightningLayer";
import { OverlayLayer } from "./scene/OverlayLayer";
import { RadiusVectors } from "./scene/RadiusVectors";
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
import { reverseGeocode } from "./data/geocoder";
import { computeShadow, computePathOfTotality } from "./astro/eclipse";
import { nextEclipse } from "./data/eclipseCatalog";
import { getCataloguedEclipsePath, interpolateUmbraPosition } from "./data/nasaEclipsePaths";
import { LightningLoader } from "./data/lightningLoader";
import { windGridToTexture } from "./data/windToTexture";
import { fetchGibsTextureWithFallback } from "./data/gibsLoader";
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

// Procedural Points-based starfield. Acts as a fallback while no real skybox texture is
// installed; hidden the moment tryLoadSkybox() finds one in textures/.
const sky = new Sky();
scene.add(sky.mesh);

// Real-photograph skybox loader (cubemap or NASA equirectangular). If textures/starmap.jpg
// (or textures/starmap_{px,nx,py,ny,pz,nz}.jpg) is present, it's installed as scene.background
// and the procedural Points fallback is hidden. If not, the fallback stays visible and the
// loader logs a one-time warning with download instructions. See [Skybox.ts](scene/Skybox.ts).
tryLoadSkybox().then(tex => {
  if (tex) {
    scene.background = tex;
    sky.mesh.visible = false;
  }
});

const globe = new Globe();
scene.add(globe.mesh);

// Atmospheric rim glow — separate mesh in world space, doesn't rotate with Earth.
// Default thickness 0.018 (~115 km) — see Atmosphere.ts for the units rationale.
// Live-tunable: `__orrery.atmosphere.setPower(4)` (sharper rim) / `setIntensity(0.9)` (dimmer).
const atmosphere = new Atmosphere();
scene.add(atmosphere.mesh);

// Moon — positioned at the actual sub-lunar location * distance (in Earth radii)
const moon = new Moon();
scene.add(moon.mesh);

// Coastlines (Natural Earth, 50m resolution). Loaded async from /data/earth-topo.json.
// Both representations: 3D sphere (mesh) and flat-map plane (flatMesh).
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

// Eclipse layer — umbra/penumbra discs at the current shadow centre + a precomputed
// path-of-totality polyline for the next upcoming total solar eclipse. Auto-loads from
// the bundled eclipse catalog. Headline feature: 2026-08-12 Spain total eclipse.
const eclipseLayer = new EclipseLayer();
scene.add(eclipseLayer.mesh);

// Constants needed for world ↔ geographic frame conversion. Same value used by every layer
// that rotates with Earth — keeping a local copy to avoid pulling them through Globe's
// internals; if any of them ever change, search for AXIAL_TILT_RAD across the codebase.
const AXIAL_TILT_RAD = 23.44 * Math.PI / 180;

/**
 * Transform a point in the inertial world frame to Earth's geographic frame at a given time.
 * Undoes the axial-tilt rotation around Z then the daily rotation around Y, in that order
 * — the inverse of the forward transform applied by every Earth-anchored layer.
 */
function worldToGeographic(worldPoint: THREE.Vector3, date: Date, out: THREE.Vector3): THREE.Vector3 {
  const c1 = Math.cos(-AXIAL_TILT_RAD), s1 = Math.sin(-AXIAL_TILT_RAD);
  const x1 = worldPoint.x * c1 - worldPoint.y * s1;
  const y1 = worldPoint.x * s1 + worldPoint.y * c1;
  const z1 = worldPoint.z;
  const earthY = earthRotationY(date);
  const c2 = Math.cos(-earthY), s2 = Math.sin(-earthY);
  out.x =  x1 * c2 + z1 * s2;
  out.y =  y1;
  out.z = -x1 * s2 + z1 * c2;
  return out;
}

// Mean Sea Level Pressure overlay — first of the GFS scalar overlays (Temp, RH, TPW, TCW
// will follow the same pattern). Translucent shell at r=1.006; hidden until data loads.
const overlay = new OverlayLayer(1.006);
scene.add(overlay.mesh);

// Earth-clock "hour hands" — thin sun + moon pointers from Earth's centre (3D mode) and
// matching sub-solar / sub-lunar dots on the flat map. The visible-by-default toggle lives
// in the Astro row as "Hands"; updated each frame from the same sun/moon directions that
// drive the lighting and the moon mesh.
const radiusVectors = new RadiusVectors();
scene.add(radiusVectors.mesh);

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
flatMap.scene.add(coastlines.flatMesh);
flatMap.scene.add(fires.flatMesh);
flatMap.scene.add(hurricanes.flatMesh);
flatMap.scene.add(lightning.flatMesh);
flatMap.scene.add(aurora.flatMesh);
flatMap.scene.add(hurricaneTracks.flatMesh);
flatMap.scene.add(radiusVectors.flatMesh);

// GPU wind particles. Live-tune from the console:
//   __orrery.particles.setSpeed(0.05) / setPointSize(3) / setAlpha(0.4)
//   __orrery.trails.setFade(0.99)   // longer trails
//   __orrery.coastlines.setOpacity(0.6)
const particles = new Particles(renderer, 65536);

// Particles render through the Trails accumulator (additive ping-pong) which writes them
// into a *geographic-frame* trail texture. The composite sphere is parented into the main
// scene and renders alongside everything else, so the trails follow Earth's rotation and
// are immune to camera motion.
const trails = new Trails(particles.flatMesh);
scene.add(trails.mesh);
flatMap.scene.add(trails.flatMesh);

// Sun: a directional light positioned along the actual sun direction so Three.js's
// built-in lighting gives us a physically-correct day/night terminator on the day map.
const sun = new THREE.DirectionalLight(0xffffff, 1.4);
sun.position.set(50, 0, 0);
scene.add(sun);
scene.add(new THREE.AmbientLight(0x101824, 0.35));

// Visible sun: a true-scale sphere + corona sprite at 1 AU along sunDirectionWorld(now).
// Tiny but visible from default Earth-orbit views thanks to the corona; grows naturally
// as you zoom out toward it (OrbitControls.maxDistance bumped to 25000 R⊕ in Camera.ts).
const sunBody = new Sun();
scene.add(sunBody.mesh);

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
const _moonUnit = new THREE.Vector3();
const _waxCross = new THREE.Vector3();

// Cached sub-solar / sub-lunar coords, refreshed each frame by updateAstro(). Read by
// the LocationPanel "sun beam / moon beam direction" buttons when the user clicks them.
const latestSubSolar = { lat: 0, lon: 0 };
const latestSubLunar = { lat: 0, lon: 0 };

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
      atmosphere: Atmosphere;
      trails: Trails;
      coastlines: Coastlines;
      clouds: CloudLayer;
      aurora: AuroraLayer;
      fires: FireLayer;
      hurricanes: HurricaneLayer;
      hurricaneTracks: HurricaneTrackLayer;
      lightning: LightningLayer;
      overlay: OverlayLayer;
      eclipse: EclipseLayer;
      sun: Sun;
    };
  }
}

// Expose handles for live tweaking from the JS console
window.__orrery = { particles, globe, atmosphere, trails, coastlines, clouds, aurora, fires, hurricanes, hurricaneTracks, lightning, overlay, eclipse: eclipseLayer, sun: sunBody };

// Display order matches the bottom-left Menu's group order so users can map a button to
// its source row without scanning. Keys not listed sort alphabetically at the end. The
// same list seeds both the user-facing Sources panel (via DataRegistry) and the diagnostic
// Data panel (via Debug.setOrder), so the two panels show entries in the same sequence.
const DATA_ORDER = [
  // Weather row
  "wind", "fires", "lightning", "hurricanes", "storm-tracks", "aurora", "kp",
  // Clouds row
  "viirs", "gfs-clouds",
  // Overlay row
  "mslp", "temp", "rh", "tpw", "tcw",
  // Geography row
  "coastlines", "day map", "night map",
  // Astro row
  "moon", "eclipse",
];

// Shared data-status registry — every loader writes to this; DataPanel + Debug both subscribe.
// Static / bundled assets are reported up-front so they appear in the panel without waiting.
const dataRegistry = new DataRegistry();
dataRegistry.setOrder(DATA_ORDER);
dataRegistry.report("day map",   { source: "Solar System Scope · 2k_earth_daymap.jpg",   bundled: true });
dataRegistry.report("night map", { source: "Solar System Scope · 2k_earth_nightmap.jpg", bundled: true });
dataRegistry.report("moon",      { source: "NASA / USGS · moon_1024.jpg",                 bundled: true });

// Diagnostic overlay (bottom-right). Hidden by default; toggle via the Debug menu entry.
// Each loader reports its state (✓/✗/⋯) here. The "Use test data" button replaces live
// fetches with synthetic fixtures so we can isolate "loader broken" vs "renderer broken".
const debug = new Debug(document.body);
// Pre-register every loader as "pending" in the data registry so the unified Data panel
// shows a `⋯ key  source  fetching…  —` row before the first network response. Loaders
// overwrite each row's status on success/failure via dataRegistry.report().
const PENDING_SOURCES: Array<[string, string, string]> = [
  ["wind",       "NOAA GFS · surface wind",                 "fetching surface wind…"],
  ["fires",      "NASA FIRMS · VIIRS S-NPP NRT",            "fetching FIRMS detections…"],
  ["lightning",  "Blitzortung · community WebSocket",       "connecting to Blitzortung…"],
  ["hurricanes", "NHC · CurrentStorms.json",                "fetching active storms…"],
  ["aurora",     "NOAA SWPC · Ovation aurora forecast",     "fetching SWPC Ovation…"],
  ["kp",         "NOAA SWPC · planetary K-index",           "fetching SWPC K-index…"],
  ["viirs",      "NASA GIBS · VIIRS NOAA-20 True Color",    "fetching VIIRS mosaic…"],
  ["gfs-clouds", "NOAA GFS · cloud cover",                  "fetching GFS cloud cover…"],
  ["mslp",       "NOAA GFS · MSLP",                         "fetching MSLP…"],
  ["temp",       "NOAA GFS · 2 m temperature",              "fetching temperature…"],
  ["rh",         "NOAA GFS · 2 m relative humidity",        "fetching RH…"],
  ["tpw",        "NOAA GFS · total precipitable water",     "fetching TPW…"],
  ["tcw",        "NOAA GFS · total cloud water",            "fetching TCW…"],
  ["coastlines", "Natural Earth · 50 m physical",           "fetching coastlines…"],
];
for (const [key, source, detail] of PENDING_SOURCES) {
  dataRegistry.report(key, { source, detail });
}

// User-facing data sources panel (top-right). Lists source + last-fetched age per layer.
const dataPanel = new DataPanel(document.body, dataRegistry);

// Clock readout (top-left). Big monospace UTC/local clock driven by simulatedTime so it
// reflects time-warp. Click anywhere on the time to flip UTC ⇄ Local; ⏱ reveals time
// controls. `onSnapToLive` is the hook the ↺ Reset button calls — main.ts owns
// `simulatedTime` so the Clock can't write to it directly.
const clock = new Clock(document.body, {
  onSnapToLive: () => { simulatedTime = Date.now(); },
});

// Location panel (top-left). Shows pinned-location coords + solar time. Hidden until the
// user enables Location mode and clicks the globe.
const locationPanel = new LocationPanel(document.body);

// Layer-toggle menu (bottom-left). Inherits styling from the classic earth-clock menu;
// the brand wordmark is the open/close affordance. Selections persist to localStorage.
// Panel keys: `data` = bottom-right diagnostic (formerly Debug); `sources` = top-right
// per-layer source listing (formerly Data). The rename happened to free up the more
// natural "Data" name for the live readout panel.
const menu = new Menu(document.body,
  { globe, atmosphere, moon, coastlines, clouds, aurora, fires, hurricanes, hurricaneTracks,
    lightning, overlay, radiusVectors, eclipse: eclipseLayer, flatMap },
  { data: dataPanel, tools: debug, clock, location: locationPanel },
);

// QA v001dev: the ✕ button now closes the Location panel entirely (toggles off in the menu)
// rather than just clearing the pin. Clearing-but-keeping-panel-open turned out to be
// unhelpful: every click on the globe resets the pin already, so a dedicated "clear" had
// no use. Pin geometry is left in place so re-opening the panel restores the previous mark.
locationPanel.onClear(() => {
  menu.setLayer("location", false);
});

// "Use my location" button on the LocationPanel → drop the pin at the browser's reported
// (lat, lon). Same code path as a click on the globe.
locationPanel.onGeolocate((lat, lon) => {
  pinLocation(lat, lon, "geolocation");
});

// "Sun beam direction" / "Moon beam direction" buttons → drop the pin at the current
// sub-solar or sub-lunar geographic point. Coords are cached by updateAstro() each
// frame; the buttons just read the latest snapshot.
locationPanel.onSunBeam(()  => pinLocation(latestSubSolar.lat, latestSubSolar.lon, "sun beam"));
locationPanel.onMoonBeam(() => pinLocation(latestSubLunar.lat, latestSubLunar.lon, "moon beam"));

// Centralised pin-drop. Sets the 3D + flat pin meshes, fills the panel coords, and kicks
// off a reverse-geocode lookup that fills in the place name asynchronously.
function pinLocation(lat: number, lon: number, source: string) {
  locationPin.setLocation(lat, lon);
  locationPin.setVisible(true);
  locationPanel.setLocation(lat, lon);
  console.log(`[earth-clock] pinned via ${source}: ${lat.toFixed(2)}, ${lon.toFixed(2)}`);
  // Reverse geocode in the background — Nominatim rate-limits to 1 req/s so the function
  // returns null if called too quickly. Don't await; let the UI show "looking up…".
  reverseGeocode(lat, lon)
    .then(place => locationPanel.setPlaceName(place?.short ?? null))
    .catch(err => {
      console.warn(`[earth-clock] reverse geocode failed: ${err.message ?? err}`);
      locationPanel.setPlaceName(null);
    });
}

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
  pinLocation(lat, lon, "click");
});

// "Jump to eclipse" button: snap simulatedTime to T-minus-1-minute on the next upcoming
// eclipse, set time-warp to 60× so the whole event plays out in a few minutes, and turn
// the Eclipse layer on. Mainly a QA/demo affordance — useful for verifying the eclipse
// path & shadow rendering without waiting weeks for the real event.
debug.onJumpEclipse(() => {
  if (!activeEclipse) {
    console.warn("[earth-clock] no upcoming eclipse in the catalog");
    return;
  }
  simulatedTime = activeEclipse.startUtc.getTime() - 60_000;
  window.__orreryTimeWarp = 60;
  menu.setLayer("eclipse", true);
  console.log(
    `[earth-clock] jumped to T-1m of ${activeEclipse.name} (peak ${activeEclipse.peakUtc.toISOString()}). ` +
    `Set window.__orreryTimeWarp = 1 to stop the warp.`,
  );
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

// The fixture cloud texture only renders through CloudLayer's true-color path (uMode=0),
// so onUseTestData has to force the picker onto cloudsViirs — that mutex-collapses
// whatever the user had selected. We stash the prior selection here so onUseLiveData can
// put the picker back where it was instead of leaving the user on VIIRS (which may not
// have any data loaded, in which case applyActiveCloudSource correctly hides the layer).
let preFixtureCloudSource: ReturnType<typeof menu.activeCloudSource> = null;

debug.onUseTestData(() => {
  console.log("[orrery] debug: loading fixture data");
  preFixtureCloudSource = menu.activeCloudSource();
  const auroraGrid = debugAuroraGrid();
  const fireGrid = debugFireDetections();
  const stormGrid = debugStormGrid();
  aurora.update(auroraGrid);
  fires.update(fireGrid);
  hurricanes.update(stormGrid);
  const debugTex = debugCloudTexture();
  clouds.setTexture(debugTex);
  flatMap.setCloudTexture(debugTex);
  // Force VIIRS active so the fixture (true-color path) is visible. Mutex collapses any
  // prior source. onUseLiveData restores the original selection.
  menu.setLayer("cloudsViirs", true);
  menu.setLayer("aurora",      true);
  menu.setLayer("fires",       true);
  menu.setLayer("hurricanes",  true);
  debug.info("clouds",     `fixture: procedural noise (${1024}×${512})`);
  debug.info("aurora",     `fixture: ${auroraGrid.pointCount} pts in 6 bands ±55°…±80°`);
  debug.info("fires",      `fixture: ${fireGrid.detections.length} pts across 8 known fire zones`);
  debug.info("hurricanes", `fixture: ${stormGrid.storms.length} storms in every basin`);
});

// Second click on the (now "Use live data") button: re-trigger the live loaders so the
// fixtures get overwritten by fresh network data, restore the cloud source the user had
// selected before fixtures were loaded, then re-apply that source to overwrite the
// debug texture immediately.
debug.onUseLiveData(() => {
  console.log("[orrery] debug: restoring live data");
  loadClouds();
  loadAurora();
  loadFires();
  loadHurricanes();
  // Step 1: restore prior source picker selection (mutex collapses whatever onUseTestData
  // forced on).
  if (preFixtureCloudSource && preFixtureCloudSource !== menu.activeCloudSource()) {
    menu.setLayer(preFixtureCloudSource, true);
  }
  // Step 2: push the right data into CloudLayer for the now-active source — or hide the
  // layer if the active source has no data loaded (so the fixture texture doesn't linger).
  applyActiveCloudSource();
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

// GFS cloud source — drives the "GFS" entry in the Clouds picker. Prefers TCDC (total
// cloud cover, % 0-100, semantically correct) but falls back to TCW (total cloud water,
// kg/m², already in the weather-service output) when TCDC isn't on disk. This means the
// GFS button works as soon as *any* weather-service run has completed, even before the
// user pulls the TCDC pattern addition and re-runs the service.
type GfsCloudSource = {
  grid: import("./data/DataSource").ScalarGrid;
  /** Linear normalisation: alpha = clamp((value - vmin) / (vmax - vmin), 0, 1). */
  vmin: number;
  vmax: number;
  sourceLabel: string;
  detail: string;
};
let gfsCloudSource: GfsCloudSource | null = null;

async function loadGfsCloudGrid() {
  debug.pending("gfs-clouds", "fetching GFS cloud cover…");

  // Tier 1: TCDC (% cover 0-100). Native cloud-cover product.
  try {
    const grid = await dataSource.getScalar("total_cloud_cover", new Date());
    const validZ = grid.validTime.toISOString().slice(0, 13);
    gfsCloudSource = {
      grid, vmin: 0, vmax: 100,
      sourceLabel: "NOAA GFS · total cloud cover (TCDC)",
      detail: `TCDC valid ${validZ}Z`,
    };
    debug.info("gfs-clouds", `${grid.width}×${grid.height}, TCDC valid ${validZ}Z`);
    dataRegistry.report("gfs-clouds", {
      source: gfsCloudSource.sourceLabel,
      fetched: new Date(),
      detail: gfsCloudSource.detail,
      refreshSeconds: 6 * 3600,
    });
    if (menu.activeCloudSource() === "cloudsGfs") applyActiveCloudSource();
    return;
  } catch (err) {
    debug.pending("gfs-clouds", `TCDC unavailable (${(err as Error).message?.split(":")[0] ?? "error"}); trying TCW fallback…`);
  }

  // Tier 2: TCW (kg/m²). Vmax=1.0 covers the typical visible-cloud range; storm-cell cores
  // saturate to fully opaque, which is fine — they're solid cloud anyway. Slightly different
  // visual character from TCDC (favours rainmaker clouds over thin cirrus) but recognisable
  // and shipped by every recent weather-service run, so the GFS button always works.
  try {
    const grid = await dataSource.getScalar("total_cloud_water", new Date());
    const validZ = grid.validTime.toISOString().slice(0, 13);
    gfsCloudSource = {
      grid, vmin: 0, vmax: 1.0,
      sourceLabel: "NOAA GFS · total cloud water (TCW)",
      detail: `TCW fallback, valid ${validZ}Z — add :TCDC: pattern + restart weather-service for native cover`,
    };
    debug.info("gfs-clouds", `${grid.width}×${grid.height}, TCW fallback valid ${validZ}Z`);
    dataRegistry.report("gfs-clouds", {
      source: gfsCloudSource.sourceLabel,
      fetched: new Date(),
      detail: gfsCloudSource.detail,
      refreshSeconds: 6 * 3600,
    });
    if (menu.activeCloudSource() === "cloudsGfs") applyActiveCloudSource();
  } catch (err2) {
    debug.warn("gfs-clouds", `both TCDC and TCW failed: ${(err2 as Error).message ?? err2} — run \`npm run weather-service\` from the repo root`);
    dataRegistry.report("gfs-clouds", {
      source: "NOAA GFS · cloud cover",
      error: String((err2 as Error).message ?? err2),
    });
  }
}
loadGfsCloudGrid();

// Cloud-source switching. Handles the three menu picker entries:
//   cloudsViirs → CloudLayer.setTexture(viirsTexture)   — true-color GIBS daily mosaic
//   cloudsGfs   → CloudLayer.setScalarField(tcdcGrid)   — GFS Total Cloud Cover (model)
//   cloudsGoes  → not yet implemented; warns and reverts to VIIRS so something stays visible
// `null` means clouds are hidden entirely; CloudLayer's mesh.visible is already false (the
// Menu's apply() sets it based on activeCloudSource() !== null), so we just don't swap data.
let viirsTexture: THREE.Texture | null = null;
let goesWarned = false;
function applyActiveCloudSource() {
  const active = menu.activeCloudSource();
  if (!active) {
    clouds.mesh.visible = false;
    return;
  }
  // Reset to visible at the top — each branch below either confirms a real data binding
  // or hides the layer because the chosen source isn't loaded. This is what stops a
  // previously-installed fixture texture from lingering when the user toggles back to
  // live data after Use test data: an unloaded VIIRS now *hides* the layer instead of
  // silently leaving whatever debug texture was last installed.
  clouds.mesh.visible = true;
  if (active === "cloudsViirs") {
    if (viirsTexture) clouds.setTexture(viirsTexture);
    else clouds.mesh.visible = false;
  } else if (active === "cloudsGfs") {
    if (gfsCloudSource) {
      // vmin/vmax carried alongside the grid so the same code path handles both TCDC
      // (0..100 %) and the TCW fallback (0..1 kg/m²). CloudLayer's scalar mode does the
      // linear normalisation; outside this block we don't need to know which field is in play.
      clouds.setScalarField(gfsCloudSource.grid, gfsCloudSource.vmin, gfsCloudSource.vmax);
    } else {
      clouds.mesh.visible = false;
    }
  } else if (active === "cloudsGoes") {
    if (!goesWarned) {
      goesWarned = true;
      console.warn("[orrery] GOES geostationary composite not yet implemented — falling back to whichever source has data");
    }
    if (viirsTexture) clouds.setTexture(viirsTexture);
    else if (gfsCloudSource) clouds.setScalarField(gfsCloudSource.grid, gfsCloudSource.vmin, gfsCloudSource.vmax);
    else clouds.mesh.visible = false;
  }
}
menu.onCloudsChange(() => applyActiveCloudSource());

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

// Lat/lon → geographic-frame XYZ (the un-tilted, un-rotated Earth frame in which lat
// is asin(y) and lon is atan2(-z, x)). Inverse of the (g.y, -g.z, g.x) decoding used
// elsewhere in this file.
function latLonToGeographic(latDeg: number, lonDeg: number, out = new THREE.Vector3()): THREE.Vector3 {
  const lat = latDeg * Math.PI / 180;
  const lon = lonDeg * Math.PI / 180;
  const cosLat = Math.cos(lat);
  return out.set(cosLat * Math.cos(lon), Math.sin(lat), -cosLat * Math.sin(lon));
}

// Load the next upcoming eclipse from the catalog (if any) and set up its path of totality.
//
// Two paths here, chosen by whether we have NASA's published data for this event:
//
//   - **Catalogued path** ([nasaEclipsePaths.ts](data/nasaEclipsePaths.ts)) — hand-typed
//     centerline waypoints from NASA's predictions. Used for the 2024, 2026, 2027 eclipses.
//     Accurate to ~1° on Earth's surface (well inside the umbra envelope) without depending
//     on the runtime lunar model's precision.
//   - **Astronomical fallback** ([astro/eclipse.ts](astro/eclipse.ts)) — Schlyter-based
//     ray-sphere geometry. Used when the eclipse isn't in our catalogued-paths set
//     (future / historical / non-headline events). Accurate to ~1° angularly, which
//     can be 30°+ on Earth's surface near totality — flagged as the precision bottleneck
//     to fix with a Meeus lunar-theory upgrade (see PLAN.md, Phase A polish).
const activeEclipse = nextEclipse(new Date());
const activeNasaPath = activeEclipse ? getCataloguedEclipsePath(activeEclipse.id) : undefined;
if (activeEclipse) {
  let geographicPath: THREE.Vector3[];
  let sourceLabel: string;
  if (activeNasaPath) {
    geographicPath = activeNasaPath.waypoints.map(wp => latLonToGeographic(wp.lat, wp.lon));
    sourceLabel = "NASA centerline";
  } else {
    const samples = computePathOfTotality(activeEclipse.startUtc, activeEclipse.endUtc, 30);
    geographicPath = samples.map(s => {
      const out = new THREE.Vector3();
      worldToGeographic(s.worldPoint, s.time, out);
      return out;
    });
    sourceLabel = "astronomical fallback (Schlyter)";
  }
  eclipseLayer.setPath(geographicPath);
  const peakLocal = activeEclipse.peakUtc.toISOString().slice(0, 16) + "Z";
  console.log(
    `[earth-clock] eclipse loaded: ${activeEclipse.name} · peak ${peakLocal} · ` +
    `${geographicPath.length} path points · source: ${sourceLabel} · (${activeEclipse.region})`,
  );
  dataRegistry.report("eclipse", {
    source: activeNasaPath ? "NASA centerline · bundled" : "NASA eclipse catalog · bundled",
    fetched: new Date(),
    detail: `${activeEclipse.name} · ${peakLocal}`,
    bundled: true,
  });
} else {
  dataRegistry.report("eclipse", {
    source: "NASA eclipse catalog · bundled",
    detail: "no upcoming eclipse in catalog",
    bundled: true,
  });
}

// Per-frame: feed the live umbra centre to the eclipse layer in the geographic frame.
// The layer then applies the same daily-rotation we apply below, putting it back in world.
const _liveShadowGeoPt = new THREE.Vector3();
// Edge-trigger diagnostic: log once whenever the live shadow transitions on (so we can
// confirm the per-frame eclipse pipeline is firing when the user time-warps into an event,
// without spamming the console every frame). Reset to false whenever the shadow drops.
let _liveShadowWasOn = false;

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

// Fetch the latest fully-published global VIIRS true-color mosaic from NASA GIBS.
//
// Zoom level choice: zoom 3 (10×5 = 50 tiles) is the lowest zoom where the matrix maps
// exactly to 360°×180° of Earth. Lower zooms over-cover — at zoom 1 (3×2 matrix, 144°
// per tile) the bottom row contains only ~25% real Earth and 75% structural off-planet
// black fill, which our no-data check correctly rejected... silently breaking the
// southern hemisphere for the entire life of the project. Zoom 3 fits 360/10 = 36° per
// tile cleanly, and the resulting 5120×2560 mosaic also looks visibly sharper at typical
// globe zooms. Trade-off: 50 small (~50-80 KB) tiles vs 6 larger ones = ~3 MB total
// instead of ~250 KB, still trivial on any modern network.
function loadClouds() {
  debug.pending("clouds", "fetching VIIRS mosaic…");
  fetchGibsTextureWithFallback({
    layer: "VIIRS_NOAA20_CorrectedReflectance_TrueColor",
    tileMatrixSet: "250m",
    zoom: 3,
    ext: "jpg",
    onAttempt: (date, err) => {
      const dateStr = date.toISOString().slice(0, 10);
      debug.warn("clouds", `${dateStr} incomplete (${err.message.split(":").slice(-1)[0].trim()}); trying older`);
    },
  })
    .then(({ texture, date }) => {
      const dateStr = date.toISOString().slice(0, 10);
      // The viirsTexture variable owns the lifetime of the loaded mosaic. Dispose the
      // previous one explicitly when refreshing — CloudLayer.setTexture no longer
      // free-on-swap, so we'd otherwise leak ~6 MB per 24 h refresh.
      if (viirsTexture) viirsTexture.dispose();
      viirsTexture = texture;
      // Re-run the source picker if VIIRS is what's active. This both installs the new
      // texture and re-shows the layer (applyActiveCloudSource hides the layer when its
      // active source has no data loaded, so a successful VIIRS load needs to un-hide it).
      if (menu.activeCloudSource() === "cloudsViirs") applyActiveCloudSource();
      flatMap.setCloudTexture(texture);
      debug.info("viirs", `VIIRS NOAA-20 ${dateStr}`);
      dataRegistry.report("viirs", {
        source: "NASA GIBS · VIIRS NOAA-20 True Color",
        fetched: new Date(),
        detail: dateStr,
        refreshSeconds: 24 * 3600,
      });
    })
    .catch(err => {
      debug.warn("viirs", `load failed: ${err.message ?? err}`);
      dataRegistry.report("viirs", { source: "NASA GIBS VIIRS NOAA-20", error: String(err.message ?? err) });
    });
}
loadClouds();

function updateAstro() {
  const now = new Date(simulatedTime);
  sunDirectionWorld(now, sunDir);
  // Move the directional light to sit along the sun direction (50 units away keeps it well outside the scene)
  sun.position.copy(sunDir).multiplyScalar(50);
  // Visible sun body: placed at the true geometric position along sunDir × 1 AU.
  sunBody.setSunDirection(sunDir);
  globe.setSunDirection(sunDir);
  globe.setRotationY(earthRotationY(now));
  atmosphere.setSunDirection(sunDir);

  // Flat map renders in the geographic frame — pass sub-solar (lat, lon) directly.
  const sol = solarPosition(now);
  const lun = lunarPosition(now);
  const RAD = 180 / Math.PI;
  const gmstDeg = gmst(now) * RAD;
  const subSolLat = sol.dec * RAD;
  const subSolLon = wrapLon(sol.ra * RAD - gmstDeg);
  const subLunLat = lun.dec * RAD;
  const subLunLon = wrapLon(lun.ra * RAD - gmstDeg);
  flatMap.setSubSolar(subSolLat, subSolLon);

  moonPositionWorld(now, moonPos);
  moon.setPosition(moonPos);

  // Cache the latest sub-solar / sub-lunar coords for the LocationPanel beam-direction
  // buttons (clicked from the UI; needs current astro values).
  latestSubSolar.lat = subSolLat; latestSubSolar.lon = subSolLon;
  latestSubLunar.lat = subLunLat; latestSubLunar.lon = subLunLon;
  locationPanel.setBeamCoords(latestSubSolar, latestSubLunar);

  // Sun + moon beams — gold gnomon at the sun, silver gnomon at the moon. Sub-solar /
  // sub-lunar dots on the flat map. Same astro plumbing used for lighting & moon.
  radiusVectors.setSunDirection(sunDir);
  radiusVectors.setMoonPosition(moonPos);
  radiusVectors.setSubSolar(subSolLat, subSolLon);
  radiusVectors.setSubLunar(subLunLat, subLunLon);

  // Moon phase for the flat-map disc. Illuminated fraction = (1 − cos(elongation))/2
  // where elongation is the angle between sun and moon as seen from Earth. Sign of the
  // Y-component of (sunDir × moonUnit) tells us waxing/waning. Empirically the cross-
  // product's Y is +ve while waning and −ve while waxing in this scene (consequence of
  // our world frame's −Z = east convention reversing the handedness vs. the textbook
  // ecliptic-north derivation), so waxing is `_waxCross.y < 0`.
  _moonUnit.copy(moonPos).normalize();
  const cosElongation = THREE.MathUtils.clamp(sunDir.dot(_moonUnit), -1, 1);
  const illumFraction = (1 - cosElongation) * 0.5;
  _waxCross.crossVectors(sunDir, _moonUnit);
  radiusVectors.setMoonPhase(illumFraction, _waxCross.y < 0);

  // Particles, coastlines, clouds, fires, and hurricanes share Earth's rotation so they stay glued to the ground frame
  const earthY = earthRotationY(now);
  particles.setRotationY(earthY);
  trails.setRotationY(earthY);
  coastlines.setRotationY(earthY);
  clouds.setRotationY(earthY);
  clouds.setSunDirection(sunDir);
  fires.setRotationY(earthY);
  hurricanes.setRotationY(earthY);
  hurricaneTracks.setRotationY(earthY);
  lightning.setRotationY(earthY);
  overlay.setRotationY(earthY);
  eclipseLayer.setRotationY(earthY);
  // Only draw the path-of-totality polyline when the simulated time is anywhere near
  // the eclipse window — a static future-eclipse path floating over the globe on a
  // random Wednesday is confusing. ±24h margin so the path is already visible when the
  // user clicks "Jump to eclipse" (which lands at T-1m).
  if (activeEclipse) {
    const PATH_WINDOW_MARGIN_MS = 24 * 3600 * 1000;
    const inWindow =
      simulatedTime >= activeEclipse.startUtc.getTime() - PATH_WINDOW_MARGIN_MS &&
      simulatedTime <= activeEclipse.endUtc.getTime() + PATH_WINDOW_MARGIN_MS;
    eclipseLayer.setPathVisible(inWindow);
  }

  // Live eclipse shadow. Dispatch: if the active eclipse has a NASA-catalogued path,
  // interpolate position from those waypoints (accurate, deterministic). Otherwise fall
  // back to the runtime astronomical computation (less accurate; flagged for upgrade
  // to a Meeus lunar model in PLAN.md).
  let liveLat: number | null = null;
  let liveLon: number | null = null;
  let liveMag = 1.0;
  if (activeNasaPath) {
    const u = interpolateUmbraPosition(activeNasaPath, now);
    if (u) {
      liveLat = u.lat;
      liveLon = u.lon;
      liveMag = u.magnitude;
    }
  } else {
    const sh = computeShadow(now);
    if (sh.hasShadow) {
      worldToGeographic(sh.surfacePoint, now, _liveShadowGeoPt);
      liveLat = Math.asin(_liveShadowGeoPt.y) * 180 / Math.PI;
      liveLon = Math.atan2(-_liveShadowGeoPt.z, _liveShadowGeoPt.x) * 180 / Math.PI;
      liveMag = sh.magnitude;
    }
  }
  if (liveLat !== null && liveLon !== null) {
    latLonToGeographic(liveLat, liveLon, _liveShadowGeoPt);
    eclipseLayer.setLiveShadow(_liveShadowGeoPt);
    if (!_liveShadowWasOn) {
      _liveShadowWasOn = true;
      console.log(
        `[earth-clock] eclipse live shadow ON at ${now.toISOString()} · ` +
        `magnitude ${liveMag.toFixed(3)} · geographic (${liveLat.toFixed(2)}, ${liveLon.toFixed(2)}) · ` +
        `source: ${activeNasaPath ? "NASA centerline" : "astronomical"}`,
      );
    }
  } else {
    eclipseLayer.setLiveShadow(null);
    if (_liveShadowWasOn) {
      _liveShadowWasOn = false;
      console.log(`[earth-clock] eclipse live shadow OFF at ${now.toISOString()}`);
    }
  }
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

  // Update the world-space trail accumulator: fade prev frame, render flat-projected
  // particles into the equirectangular trail texture. The composite (sphere in main scene,
  // plane in flat map) reads the updated texture during the upcoming render passes. Toggle
  // hides the composite meshes and skips the step so the trail texture doesn't churn.
  const windOn = menu.isWindVisible();
  trails.setVisible(windOn);
  if (windOn) trails.step(renderer);

  if (menu.isMapMode()) {
    // Flat equirectangular mode — composite plane is in flatMap.scene so it renders here.
    renderer.render(flatMap.scene, flatMap.camera);
  } else {
    // Main scene render — includes globe, atmosphere, moon, sky, AND the trails composite
    // sphere (added in startup). Trails follow Earth's rotation via trails.setRotationY.
    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
