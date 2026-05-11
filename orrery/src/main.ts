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
import { FlatMap } from "./scene/FlatMap";
import { Menu } from "./ui/Menu";
import { Debug } from "./ui/Debug";
import { LiveDataSource } from "./data/DataSource";
import { fetchAuroraGrid } from "./data/auroraLoader";
import { fetchFireDetections } from "./data/firmsLoader";
import { fetchActiveStorms } from "./data/nhcLoader";
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

// Equirectangular flat-map mode. Owns its own scene + ortho camera; rendered instead of the
// 3D scene when the menu's "Map" toggle is on. v1 has day + night + clouds + terminator;
// aurora/fires/hurricanes/wind in flat-map are deferred (see PLAN.md).
const flatMap = new FlatMap();
flatMap.resize(window.innerWidth, window.innerHeight);

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
    };
  }
}

// Expose handles for live tweaking from the JS console
window.__orrery = { particles, globe, trails, coastlines, clouds, aurora, fires, hurricanes };

// Diagnostic overlay (top-right). Hidden by default; toggle via the Debug menu entry.
// Each loader reports its state (✓/✗/⋯) here. The "Use test data" button replaces live
// fetches with synthetic fixtures so we can isolate "loader broken" vs "renderer broken".
const debug = new Debug(document.body);
debug.pending("clouds",     "fetching VIIRS mosaic…");
debug.pending("aurora",     "fetching SWPC Ovation…");
debug.pending("fires",      "fetching FIRMS detections…");
debug.pending("hurricanes", "fetching NHC CurrentStorms…");
debug.pending("wind",       "fetching GFS surface wind…");
debug.pending("coastlines", "fetching Natural Earth…");

// Layer-toggle menu (bottom-left). Inherits styling from the classic earth-clock menu;
// the brand wordmark is the open/close affordance. Selections persist to localStorage.
const menu = new Menu(document.body, {
  globe, atmosphere, moon, coastlines, clouds, aurora, fires, hurricanes, flatMap,
}, debug);

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
// this resolves, so the scene is never blank.
const dataSource = new LiveDataSource();
dataSource.getWindGrid(new Date())
  .then(grid => {
    particles.setWindTexture(windGridToTexture(grid));
    debug.info("wind", `${grid.width}×${grid.height}, valid ${grid.validTime.toISOString().slice(0, 16)}Z`);
  })
  .catch(err => debug.warn("wind", `load failed: ${err.message ?? err}`));

// Load Natural Earth coastlines (TopoJSON). Renders empty until this resolves.
fetch("/data/earth-topo.json")
  .then(r => r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))
  .then(topo => {
    coastlines.loadFromTopology(topo, "coastline_50m");
    debug.info("coastlines", "Natural Earth 50 m loaded");
  })
  .catch(err => debug.warn("coastlines", `load failed: ${err.message ?? err}`));

// Fetch NOAA SWPC aurora probability grid. CORS-clean, no auth, ~900 KB, refreshes every 5 min.
function loadAurora() {
  fetchAuroraGrid()
    .then(grid => {
      aurora.update(grid);
      debug.info("aurora", `${grid.pointCount} pts, fc ${grid.forecastTime.toISOString().slice(11, 16)}Z`);
    })
    .catch(err => debug.warn("aurora", `load failed: ${err.message ?? err}`));
}
loadAurora();
setInterval(loadAurora, 5 * 60 * 1000);

// Fetch NASA FIRMS active fire detections (last 24 h of VIIRS S-NPP NRT).
// Free key in .env.local (VITE_FIRMS_MAP_KEY). Rate-limited; refresh hourly is well within budget.
function loadFires() {
  fetchFireDetections()
    .then(grid => {
      fires.update(grid);
      debug.info("fires", `${grid.detections.length} detections`);
    })
    .catch(err => debug.warn("fires", `load failed: ${err.message ?? err}`));
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
      } else {
        debug.info("hurricanes", "no active storms (off-season)");
      }
    })
    .catch(err => debug.warn("hurricanes", `load failed: ${err.message ?? err}`));
}
loadHurricanes();
setInterval(loadHurricanes, 15 * 60 * 1000);

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
  })
  .catch(err => debug.warn("clouds", `load failed: ${err.message ?? err}`));

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

  updateAstro();
  updateDebugAstro(new Date(simulatedTime));
  // Use real wall-clock dt for particles (independent of simulated-time warp;
  // wind drift should look the same regardless of how fast Earth is spinning).
  particles.update(dtMs / 1000, t / 1000);
  aurora.setTime(t / 1000);
  fires.setTime(t / 1000);
  hurricanes.setTime(t / 1000);
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
