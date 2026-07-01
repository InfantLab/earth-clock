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
import { TimezoneLayer } from "./scene/TimezoneLayer";
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
import { LocationPanel, type PinSource } from "./ui/LocationPanel";
import { SunDiscPanel } from "./ui/SunDiscPanel";
import { ScaleKeyPanel } from "./ui/ScaleKeyPanel";
import { computeObserverView } from "./astro/observerView";
import { EclipsePanel } from "./ui/EclipsePanel";
import type { EclipseEvent } from "./data/eclipseCatalog";
import { LiveDataSource } from "./data/DataSource";
import { fetchAuroraGrid } from "./data/auroraLoader";
import { fetchLatestKp, kpActivityLabel, kpVisibleLatitude } from "./data/kpLoader";
import { fetchFireDetections } from "./data/firmsLoader";
import { fetchActiveStorms } from "./data/nhcLoader";
import { fetchAndParseKmz, rewriteNhcUrl } from "./data/kmzParser";
import { reverseGeocode } from "./data/geocoder";
import { computeShadow, computePathOfTotality } from "./astro/eclipse";
import { nextEclipse, ECLIPSE_CATALOG } from "./data/eclipseCatalog";
import {
  lunarEclipseFraction,
  type LunarEclipseEvent,
} from "./data/lunarEclipseCatalog";
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
//
// First paint always kicks off the lo-res (2K, ~250 KB) starfield for snappy boot. The
// Menu's Astro² "Hi-res sky" toggle triggers an upgrade to the 8K NASA Deep Star Map
// (~1.9 MB) via applySkybox() below; if the user had hi-res persisted, the upgrade fires
// once the menu is constructed.
//
// A monotonic token guards against the obvious race — two loads in flight (initial lo-res
// + boot-time hi-res restore, or rapid toggling) resolving out of order would otherwise let
// a stale lo-res clobber a freshly-installed hi-res. Latest call wins; in-flight stragglers
// dispose their texture instead of clobbering the background.
let _skyboxToken = 0;
async function applySkybox(quality: "lo" | "hi") {
  const myToken = ++_skyboxToken;
  const tex = await tryLoadSkybox(quality);
  if (!tex) return;
  if (myToken !== _skyboxToken) { tex.dispose(); return; }
  const old = scene.background as THREE.Texture | THREE.CubeTexture | null;
  if (old === tex) return;
  scene.background = tex;
  sky.mesh.visible = false;
  old?.dispose?.();
}
applySkybox("lo");

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

// Timezone meridian overlay — nominal UTC-hour lines every 15° of longitude with floating
// local-time labels at the equator. Default off (toggled via Geography row in the menu).
const timezoneLayer = new TimezoneLayer();
scene.add(timezoneLayer.mesh);

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
/** Reusable axis for the Z-rotation that all Earth-anchored layers apply. Defined once
 *  so updateAstro() can `applyAxisAngle` cheaply each frame without allocating. */
const TILT_Z_AXIS = new THREE.Vector3(0, 0, 1);

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
flatMap.scene.add(timezoneLayer.flatMesh);
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
// Default view: Africa centre (lon ≈ 20°E, equator) rather than empty Pacific.
// Compute where that longitude sits in world space for the current GMST, then
// park the camera there — the surface-lock on frame 2 keeps it facing that spot.
{
  const africaLon = 20 * Math.PI / 180;
  const gm = earthRotationY(new Date());
  const a = gm + africaLon;
  camera.position.set(Math.cos(a) * 3.2, 0.3, -Math.sin(a) * 3.2);
}
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
// Tracks the previously-seen map-mode flag so the animate loop can edge-trigger
// FlatMap.enableControls / disableControls only on transition (not every frame).
// `null` on startup so the first frame always runs the enable/disable path.
let lastMapMode: boolean | null = null;

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
      /** Dev helper: swap every live loader for synthetic fixtures. */
      useTestData: () => void;
      /** Dev helper: re-trigger live loaders to overwrite fixtures. */
      useLiveData: () => void;
      /** Dev helper: reposition the camera so the moon is in view. */
      findMoon: () => void;
      /** Dev helper: jump simulatedTime to T-1m of a catalogued eclipse and warp to 60×.
       *  Pass an event id (e.g. "20260812"); omit to use the next upcoming event. */
      jumpToEclipse: (id?: string) => void;
    };
  }
}

// Expose handles for live tweaking + dev helpers from the JS console.
// The first block is direct references to scene/data layer instances; the second
// block is the small set of dev affordances that used to live in the retired Tools
// panel (test-data fixtures, find-moon camera repositioning, jump-to-eclipse).
window.__orrery = {
  particles, globe, atmosphere, trails, coastlines, clouds, aurora, fires,
  hurricanes, hurricaneTracks, lightning, overlay, eclipse: eclipseLayer, sun: sunBody,
  useTestData,
  useLiveData,
  findMoon: findMoonInCamera,
  jumpToEclipse: (id?: string) => {
    const event = id
      ? ECLIPSE_CATALOG.find(e => e.id === id)
      : (activeEclipse ?? null);
    if (!event) {
      console.warn(`[earth-clock] jumpToEclipse: ${id ? `id "${id}" not found` : "no upcoming eclipse"}; ` +
                   `available ids: ${ECLIPSE_CATALOG.map(e => e.id).join(", ")}`);
      return;
    }
    jumpToEclipseEvent(event);
  },
};

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

// Slim console logger — the visible bottom-right "tools" panel was retired alongside
// the Tools menu entry. The diagnostic affordances it used to host (Use test data,
// Find moon, Jump to eclipse) are now console helpers on `window.__orrery`. Loaders
// still call debug.info/warn/pending; those write to the console and the user-facing
// status surface is the DataPanel.
const debug = new Debug();
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
dataPanel.onClose(() => { menu.setLayer("data", false); });

// Clock readout (top-left). Big monospace UTC/local clock driven by simulatedTime so it
// reflects time-warp. Click anywhere on the time to flip UTC ⇄ Local; ⏱ reveals time
// controls. `onSnapToLive` is the hook the ↺ Reset button calls — main.ts owns
// `simulatedTime` so the Clock can't write to it directly.
const clock = new Clock(document.body, {
  onSnapToLive: () => { simulatedTime = Date.now(); },
  onClose:      () => { menu.setLayer("clock", false); },
});

// Location panel (top-left). Shows pinned-location coords + solar time. Hidden until the
// user enables Location mode and clicks the globe.
const locationPanel = new LocationPanel(document.body);

// Sun-disc inset. Shows what the sun looks like in the observer's local sky, with the
// moon's disc overlapping it at the geometrically correct offset. Auto-shows when an
// eclipse layer is active AND a location is pinned AND the sun + moon are within ~5°
// of each other in the observer's sky. Otherwise hidden — irrelevant the rest of the
// time. See SunDiscPanel for the visibility logic.
/** Last live warp speed before the scrub bar (or play-button) paused — used to
 *  restore the user's chosen tempo on ▶/play-resume. Mirrors Clock.ts's
 *  `warpBeforePause` (the two pause/resume paths stay independent so they
 *  don't have to share state). */
let _warpBeforeScrubPause = 1;
const sunDiscPanel = new SunDiscPanel(document.body, {
  // Scrub-bar drag → set simulatedTime + pause warp (so it doesn't fight the user).
  onScrubTo: (utcMs) => {
    simulatedTime = utcMs;
    if (window.__orreryTimeWarp !== 0) {
      _warpBeforeScrubPause = window.__orreryTimeWarp ?? 1;
      window.__orreryTimeWarp = 0;
    }
  },
  // ⏪ / ⏩ buttons step simulatedTime by the panel's STEP_MS (±30 s).
  onStep: (deltaMs) => { simulatedTime += deltaMs; },
  // ⏸/▶ button toggles warp between 0 and the last live speed.
  onPlayPause: () => {
    const cur = window.__orreryTimeWarp ?? 1;
    if (cur === 0) {
      window.__orreryTimeWarp = _warpBeforeScrubPause || 1;
    } else {
      _warpBeforeScrubPause = cur;
      window.__orreryTimeWarp = 0;
    }
  },
  // ✕ closes the whole eclipse experience: clears both kinds of active event
  // (so the umbra disc / path / moon-dim all stop), flips the menu's Eclipse
  // toggle off (which hides the EclipsePanel + 3D EclipseLayer), and snaps
  // simulated time back to wall-clock now at warp 1× — the same end-state as
  // closing via the EclipsePanel's own ✕.
  onClose: () => closeEclipseExperience(),
});

/** Centralised close action so the ✕ on either panel ends up in the same
 *  end-state. Without this both close-buttons drift apart as we add behaviour. */
function closeEclipseExperience() {
  loadEclipse(null);
  activeLunarEclipse = null;
  menu.setLayer("eclipse", false);
  simulatedTime = Date.now();
  window.__orreryTimeWarp = 1;
}
/** Cached state of the active pin — updated by `pinLocation` so the per-frame
 *  observer-view update doesn't have to dig through the LocationPanel internals. */
const pinnedLocation: { lat: number; lon: number; visible: boolean } = { lat: 0, lon: 0, visible: false };

// Eclipse catalogue panel (top-left, under the Clock + Location stack). Lists every
// bundled eclipse event with a one-click "jump to peak". Toggled by the Astro row's
// "Eclipse" entry — same toggle drives the 3D EclipseLayer.mesh visibility.
const eclipsePanel = new EclipsePanel(document.body, {
  onJumpSolar: (event) => {
    jumpToEclipseEvent(event);
    // On mobile the picker blocks the globe. Hide it after the jump so the
    // eclipse plays out on the full screen. Use setTimeout so this runs after
    // all synchronous state changes in jumpToEclipseEvent (including any
    // menu.setLayer → apply → setVisible(true) that would re-show the panel).
    if (window.matchMedia("(max-width: 600px)").matches) {
      setTimeout(() => eclipsePanel.setVisible(false), 0);
    }
  },
  onJumpLunar: (event) => {
    jumpToLunarEclipseEvent(event);
    if (window.matchMedia("(max-width: 600px)").matches) {
      setTimeout(() => eclipsePanel.setVisible(false), 0);
    }
  },
  // Tab change — clear the OTHER eclipse kind so its visuals stop. Without
  // this, switching to 🌑 Lunar would leave the previously-loaded solar
  // umbra disc + path-of-totality polyline still drawn on Earth (and vice
  // versa). The catalogue UI implies "I'm browsing this kind now", so it
  // should drive what's rendered.
  onTabChange: (tab) => {
    if (tab === "lunar") loadEclipse(null);
    else                 activeLunarEclipse = null;
    sunDiscPanel.setMode(tab);
  },
  // Closing the panel signals "I'm done with the eclipse experience" — snap simulated
  // time back to wall-clock now and drop warp to 1× so the rest of the app shows the
  // current state of the world. Without this, the user is left staring at 2026-08-12
  // T-1m frozen in time after dismissing the panel. Shared with the SunDiscPanel's
  // ✕ via closeEclipseExperience so both close-buttons land in identical state.
  onClose: () => closeEclipseExperience(),
});

// Layer-toggle menu (bottom-left). Inherits styling from the classic earth-clock menu;
// the brand wordmark is the open/close affordance. Selections persist to localStorage.
const menu = new Menu(document.body,
  { globe, atmosphere, moon, coastlines, timezoneLayer, clouds, aurora, fires, hurricanes,
    hurricaneTracks, lightning, overlay, radiusVectors, eclipse: eclipseLayer, flatMap, trails },
  { data: dataPanel, clock, location: locationPanel, eclipse: eclipsePanel },
);

// Wire the "Find moon" action button at the end of the Astro row. Reuses the same
// camera-repositioning helper that powers `window.__orrery.findMoon()`.
menu.onFindMoon(() => findMoonInCamera());

// Wire the Astro² "Hi-res sky" toggle. Subsequent toggles route through applySkybox;
// on initial mount, if the user had hi-res persisted from a previous session, kick
// off the upgrade now (boot already loaded lo-res for fast first paint above).
menu.onSkyboxHiResChange((hires) => { applySkybox(hires ? "hi" : "lo"); });
if (menu.isSkyboxHiRes()) applySkybox("hi");

// QA v001dev: the ✕ button now closes the Location panel entirely (toggles off in the menu)
// rather than just clearing the pin. Clearing-but-keeping-panel-open turned out to be
// unhelpful: every click on the globe resets the pin already, so a dedicated "clear" had
// no use. Pin geometry is left in place so re-opening the panel restores the previous mark.
locationPanel.onClear(() => {
  timezoneLayer.setReferenceZone(null); // revert ±Hours to browser timezone
  menu.setLayer("location", false);
});

// "Use my location" button on the LocationPanel → drop the pin at the browser's reported
// (lat, lon). Same code path as a click on the globe.
locationPanel.onGeolocate((lat, lon) => {
  pinLocation(lat, lon, "geolocation");
});

// "Sub-solar" / "Sub-lunar" row clicks → drop the pin at the current sub-solar or
// sub-lunar geographic point. Coords are cached by updateAstro() each frame; the
// rows just read the latest snapshot.
locationPanel.onSunBeam(()  => pinLocation(latestSubSolar.lat, latestSubSolar.lon, "sun"));
locationPanel.onMoonBeam(() => pinLocation(latestSubLunar.lat, latestSubLunar.lon, "moon"));

// Centralised pin-drop. Sets the 3D + flat pin meshes, fills the panel coords + source
// (which determines which row gets the "selected" highlight), and kicks off a
// reverse-geocode lookup that fills in the place name asynchronously.
function pinLocation(lat: number, lon: number, source: PinSource) {
  locationPin.setLocation(lat, lon);
  locationPin.setVisible(true);
  locationPanel.setLocation(lat, lon, source);
  // Cache for the per-frame sun-disc inset.
  pinnedLocation.lat = lat;
  pinnedLocation.lon = lon;
  pinnedLocation.visible = true;
  // Timezone lookup: trigger political data load (no-op if already loaded),
  // then immediately set the best-available zone (nominal fallback until data lands).
  timezoneLayer.loadForLookup();
  const zone = timezoneLayer.findZoneAt(lat, lon);
  locationPanel.setPinnedZone(zone.ianaName || null, zone.utcOffset);
  // Drive ±Hours relative to the pinned location so "+0:00" means "same time as here".
  timezoneLayer.setReferenceZone(zone.ianaName || null);
  sunDiscPanel.setPlaceName(`${lat.toFixed(2)}°, ${lon.toFixed(2)}°`); // coord fallback until geocode resolves
  console.log(`[earth-clock] pinned via ${source}: ${lat.toFixed(2)}, ${lon.toFixed(2)}`);
  // Reverse-geocode in the background. The geocoder routes through `/proxy/geocode/`
  // (NGINX in prod, Vite dev-proxy in dev) and returns a structured result; we
  // translate each status into a user-facing place-name string. Don't await — the UI
  // displays "looking up…" until this resolves.
  reverseGeocode(lat, lon).then(result => {
    switch (result.status) {
      case "ok":
        locationPanel.setPlaceName(result.place.short);
        sunDiscPanel.setPlaceName(result.place.short);
        break;
      case "no-name":
        // Upstream returned a valid response but no feature at this location
        // (open ocean, Antarctic interior, etc.). The coords stay accurate; we
        // just have nothing to call the place.
        locationPanel.setPlaceName(null);
        break;
      case "unavailable":
        // 5xx after retry (Nominatim degraded, or network blip). Tell the user;
        // their next pin click will try again and may succeed.
        locationPanel.setPlaceName("geocoder unavailable");
        break;
      case "rate-limited":
        // Too soon since the last click; the throttle dropped this request.
        // Leave the previous place-name in place — clearing it would be the
        // wrong feedback (the user just clicked, they expect SOMETHING).
        break;
    }
  });
}

// Click-to-pin location handler. In globe mode we raycast against the Earth's day mesh
// and convert the world-space hit point back to (lat, lon) via Globe.worldToLatLon. In
// map mode we convert the click's NDC to the plane's (u, v) → (lat, lon).
//
// **Drag suppression**: native browser "click" suppression on drag is platform-dependent
// and OrbitControls' damping sometimes lets a small post-rotate click slip through. We
// record the pointerdown position and reject the click if the pointer travelled further
// than DRAG_THRESHOLD_PX between down and up — that way orbit-rotating the globe never
// drops a stray pin.
const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const DRAG_THRESHOLD_PX = 5;
let pointerDownPos: { x: number; y: number } | null = null;
renderer.domElement.addEventListener("pointerdown", (event) => {
  pointerDownPos = { x: event.clientX, y: event.clientY };
});
renderer.domElement.addEventListener("click", (event) => {
  if (!menu.isLocationActive()) return;
  if (pointerDownPos) {
    const dx = event.clientX - pointerDownPos.x;
    const dy = event.clientY - pointerDownPos.y;
    pointerDownPos = null;
    if (Math.hypot(dx, dy) > DRAG_THRESHOLD_PX) return;
  }
  const rect = renderer.domElement.getBoundingClientRect();
  ndc.x =  ((event.clientX - rect.left) / rect.width)  * 2 - 1;
  ndc.y = -((event.clientY - rect.top)  / rect.height) * 2 + 1;

  let lat: number, lon: number;
  if (menu.isMapMode()) {
    // Unproject NDC at z=0 (the plane sits at z=0) → world position on the plane.
    const planeWorld = new THREE.Vector3(ndc.x, ndc.y, 0).unproject(flatMap.camera);
    // After v0.1.9 pan+zoom: the user can be looking at one of the wrap-around
    // plane copies at x = ±2. Wrap X back into the canonical [-1, +1] range
    // before deriving the longitude. Y is unaffected (no wrap on latitude).
    if (Math.abs(planeWorld.y) > 0.5) return; // clicked outside the map (above the N pole or below the S pole)
    const wrappedX = FlatMap.wrapWorldX(planeWorld.x);
    lon = wrappedX * 180;
    lat = planeWorld.y * 180;
  } else {
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObject(globe.earthMesh, false);
    if (!hits.length) return;
    ({ lat, lon } = globe.worldToLatLon(hits[0].point));
  }
  pinLocation(lat, lon, "click");
});

// Double-click on the 3D globe drops a pin AND auto-enables Location mode — a
// discoverable shortcut for users who haven't found the menu's Location toggle.
// Skipped in flat-map mode because FlatMap already wires dblclick to its
// "reset to whole-world view" gesture (FlatMap.ts), and we don't want to fight
// over the event. The single-click handler above still requires Location mode
// to be on; this dblclick is the bootstrap that turns it on.
renderer.domElement.addEventListener("dblclick", (event) => {
  if (menu.isMapMode()) return;
  const rect = renderer.domElement.getBoundingClientRect();
  ndc.x =  ((event.clientX - rect.left) / rect.width)  * 2 - 1;
  ndc.y = -((event.clientY - rect.top)  / rect.height) * 2 + 1;
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObject(globe.earthMesh, false);
  if (!hits.length) return;
  const { lat, lon } = globe.worldToLatLon(hits[0].point);
  pinLocation(lat, lon, "click");
  menu.setLayer("location", true);
});

/**
 * Snap simulatedTime to T-1m of the given eclipse, dial warp to 60×, swap the eclipse
 * layer over to that event's path of totality, turn the layer on, surface the Clock
 * panel with its time-controls expanded, and highlight the selected row in the
 * EclipsePanel. The whole event plays out in a few minutes. Called from the
 * EclipsePanel's row clicks; also exposed via `window.__orrery.jumpToEclipse(id?)`.
 */
function jumpToEclipseEvent(event: EclipseEvent) {
  // Hot-swap the loaded eclipse so the path-of-totality polyline and the per-frame
  // shadow-interpolation (NASA centerline / Schlyter fallback) both target the event
  // we're jumping into. Without this, only the startup-loaded eclipse ever had a
  // visible path — jumping to 2024 or 2027 used to leave 2026's path on screen.
  loadEclipse(event);
  // Solar jump replaces any loaded lunar eclipse so the moon stops dimming.
  activeLunarEclipse = null;
  sunDiscPanel.setMode("solar");
  simulatedTime = event.startUtc.getTime() - 60_000;
  window.__orreryTimeWarp = 60;
  menu.setLayer("eclipse", true);
  // Eclipse experience hinges on playing / pausing / scrubbing simulated time.
  // Surface the Clock + its time-controls so the user doesn't have to discover
  // the ⏱ icon mid-event. setLayer keeps the menu state + persisted prefs in sync.
  // Row highlight is handled by loadEclipse() above.
  menu.setLayer("clock", true);
  clock.setControlsExpanded(true);
  // Auto-pin to the greatest-eclipse point so the SunDiscPanel inset appears
  // immediately — without this, the inset is gated off (no pinned location) and
  // the user has to know to click somewhere on the path of totality to get the
  // "what you'd see from your spot" view. Only auto-pin if the user hasn't
  // already set one (don't clobber an explicit choice like "use my location").
  if (!pinnedLocation.visible && activeNasaPath) {
    const greatest = activeNasaPath.waypoints.reduce(
      (best, wp) => (wp.magnitude ?? 0) > (best.magnitude ?? 0) ? wp : best,
      activeNasaPath.waypoints[0],
    );
    pinLocation(greatest.lat, greatest.lon, "click");
  }
  console.log(
    `[earth-clock] jumped to T-1m of ${event.name} (peak ${event.peakUtc.toISOString()}). ` +
    `Set window.__orreryTimeWarp = 1 to stop the warp.`,
  );
}

/**
 * Lunar-eclipse jump — same UX as the solar version (set time, dial warp,
 * surface the clock controls) but loads the chosen event into `activeLunarEclipse`
 * for the per-frame moon-mesh dimming/tint. No auto-pin: a lunar eclipse is
 * visible from the entire night-side hemisphere, so there's no "best spot" to
 * point the user at the way there is for a solar umbra path.
 */
function jumpToLunarEclipseEvent(event: LunarEclipseEvent) {
  activeLunarEclipse = event;
  // A lunar jump replaces any loaded solar eclipse — the user is now in lunar
  // mode, so clear activeEclipse / activeNasaPath so the umbra disc + path-of-
  // totality polyline on Earth stop rendering. This matches the tab-change
  // behaviour for users who click a lunar row directly from the catalogue.
  loadEclipse(null);
  eclipsePanel.setSelected("lunar", event.id);
  sunDiscPanel.setMode("lunar");
  sunDiscPanel.setEclipseWindow(event.startUtc, event.endUtc, event.peakUtc);
  simulatedTime = event.startUtc.getTime() - 60_000;
  window.__orreryTimeWarp = 60;
  menu.setLayer("eclipse", true);
  menu.setLayer("clock", true);
  clock.setControlsExpanded(true);
  console.log(
    `[earth-clock] jumped to T-1m of ${event.name} (peak ${event.peakUtc.toISOString()}). ` +
    `Set window.__orreryTimeWarp = 1 to stop the warp.`,
  );
}

/**
 * Reposition the camera along the moon's direction at 1.5× the moon's distance so
 * both the moon (closer) and Earth (farther) sit in view. Useful when the moon is
 * off-screen and the user wants to see it. Exposed via `window.__orrery.findMoon()`.
 */
function findMoonInCamera() {
  if (moonPos.lengthSq() < 0.01) {
    console.warn("[orrery] findMoon: moon position not yet computed");
    return;
  }
  const dist = Math.min(moonPos.length() * 1.5, 199); // stay under maxDistance=200
  camera.position.copy(moonPos).normalize().multiplyScalar(dist);
  controls.target.set(0, 0, 0);
  controls.update();
  console.log(`[orrery] find moon: camera repositioned to ${dist.toFixed(1)} r along moon direction`);
}

// The fixture cloud texture only renders through CloudLayer's true-color path (uMode=0),
// so useTestData has to force the picker onto cloudsViirs — that mutex-collapses
// whatever the user had selected. We stash the prior selection here so useLiveData can
// put the picker back where it was instead of leaving the user on VIIRS (which may not
// have any data loaded, in which case applyActiveCloudSource correctly hides the layer).
let preFixtureCloudSource: ReturnType<typeof menu.activeCloudSource> = null;

/**
 * Swap every live loader for synthetic fixtures (procedural cloud noise, fake aurora
 * grid, known fire zones, demo storm grid). Lets us isolate "loader broken" from
 * "renderer broken" without waiting on the network. Exposed via
 * `window.__orrery.useTestData()`.
 */
function useTestData() {
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
  // Force VIIRS active so the fixture (true-color path) is visible. Mutex collapses
  // any prior source. useLiveData() restores the original selection.
  menu.setLayer("cloudsViirs", true);
  menu.setLayer("aurora",      true);
  menu.setLayer("fires",       true);
  menu.setLayer("hurricanes",  true);
  debug.info("clouds",     `fixture: procedural noise (${1024}×${512})`);
  debug.info("aurora",     `fixture: ${auroraGrid.pointCount} pts in 6 bands ±55°…±80°`);
  debug.info("fires",      `fixture: ${fireGrid.detections.length} pts across 8 known fire zones`);
  debug.info("hurricanes", `fixture: ${stormGrid.storms.length} storms in every basin`);
}

/**
 * Re-trigger the live loaders so the fixtures get overwritten by fresh network
 * data, restore the cloud source the user had selected before fixtures were loaded,
 * then re-apply that source to overwrite the debug texture immediately. Exposed via
 * `window.__orrery.useLiveData()`.
 */
function useLiveData() {
  console.log("[orrery] debug: restoring live data");
  loadClouds();
  loadAurora();
  loadFires();
  loadHurricanes();
  if (preFixtureCloudSource && preFixtureCloudSource !== menu.activeCloudSource()) {
    menu.setLayer(preFixtureCloudSource, true);
  }
  applyActiveCloudSource();
}

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
  /** Human-readable label for the ScaleKeyPanel legend. */
  label: string;
  /** Format a raw value (in the GFS unit — Pa, K, etc.) into a user-facing
   *  string with units (e.g. 101325 Pa → "1013 hPa", 295 K → "22 °C"). */
  format: (raw: number) => string;
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
    label: "Atmospheric pressure",
    format: (pa) => `${Math.round(pa / 100)} hPa`,
  },
  temp: {
    type: "temp",
    registryKey: "temp",
    sourceLabel: "NOAA GFS · 2 m temperature",
    vmin: 240, vmax: 310,         // K  →  -33 to +37 °C
    palette: "temperature",
    label: "Temperature at 2 m",
    format: (k) => `${Math.round(k - 273.15)} °C`,
  },
  rh: {
    type: "relative_humidity",
    registryKey: "rh",
    sourceLabel: "NOAA GFS · 2 m relative humidity",
    vmin: 0, vmax: 100,           // %
    palette: "humidity",
    label: "Relative humidity at 2 m",
    format: (pct) => `${Math.round(pct)}%`,
  },
  tpw: {
    type: "total_precipitable_water",
    registryKey: "tpw",
    sourceLabel: "NOAA GFS · total precipitable water",
    vmin: 0, vmax: 70,            // mm
    palette: "water",
    label: "Total precipitable water",
    format: (mm) => `${Math.round(mm)} mm`,
  },
  tcw: {
    type: "total_cloud_water",
    registryKey: "tcw",
    sourceLabel: "NOAA GFS · total cloud water",
    vmin: 0, vmax: 2,             // kg/m²
    palette: "cloud",
    label: "Total cloud water",
    format: (kgm2) => `${kgm2.toFixed(1)} kg/m²`,
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

// Bottom-centre legend for whichever GFS scalar overlay is active. Shows the
// active palette as a gradient strip with min / mid / max value readouts in
// human-readable units. Auto-hides when no overlay is active.
const scaleKeyPanel = new ScaleKeyPanel(document.body);

function applyActiveOverlay() {
  const active = menu.activeOverlay() as OverlayKey | null;
  if (!active) return;
  const grid = overlayGrids[active];
  const cfg = OVERLAY_CFGS[active];
  if (!grid || !cfg) return; // data may still be loading; will reapply when it arrives
  overlay.setData(grid, cfg.vmin, cfg.vmax, cfg.palette);
  // Sync the scale-key legend with the newly-active overlay's range + palette.
  scaleKeyPanel.update({
    label: cfg.label,
    palette: cfg.palette,
    displayMin: cfg.format(cfg.vmin),
    displayMid: cfg.format((cfg.vmin + cfg.vmax) / 2),
    displayMax: cfg.format(cfg.vmax),
  });
  scaleKeyPanel.setVisible(true);
}

menu.onOverlayChange((active) => {
  if (active) {
    applyActiveOverlay();
  } else {
    // No overlay active → hide the scale key. (overlay.mesh.visible is already
    // false — apply() in Menu handled that.)
    scaleKeyPanel.setVisible(false);
  }
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

// Currently-loaded eclipse + its path source. Mutable so the user can hop between
// catalogued events from the EclipsePanel (▶ jump buttons) and / or the console helper
// — each jump calls `loadEclipse(event)` which rebuilds the path-of-totality polyline
// and reports the new entry into the data registry. Without this, only the eclipse
// loaded at startup (the next upcoming one) ever showed a path on the globe, even when
// simulatedTime was jumped onto a different event.
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
let activeEclipse: ReturnType<typeof nextEclipse> = null;
let activeNasaPath: ReturnType<typeof getCataloguedEclipsePath> = undefined;

/** The currently-loaded lunar eclipse. Null when none is active. The per-frame
 *  animate loop checks this and drives moon.setEclipseShadow() based on how
 *  far through the P1→peak→P4 window simulated time has progressed. */
let activeLunarEclipse: LunarEclipseEvent | null = null;

// Live-data freshness gating. Wind / clouds / aurora / fires / hurricanes /
// lightning / overlay data is sourced from real-time feeds (GFS forecasts,
// VIIRS daily mosaics, SWPC aurora, FIRMS, NHC, Blitzortung, etc.) and is only
// valid for a narrow window around wall-clock now. When the user warps far
// from now we'd rather hide it than render today's wind on a different date.
// Hysteresis: hide once we're >24h out, only re-show once we're back within
// 22h, so scrubbing across the boundary doesn't flicker layers on/off. See
// ROADMAP.md "Live-data freshness gating" for the full design.
const LIVE_DATA_HIDE_MS = 24 * 3600 * 1000;
const LIVE_DATA_SHOW_MS = 22 * 3600 * 1000;
let liveDataInRange = true;
let lastTzDataLoaded = false;

// State for the camera-follows-Earth-spin lock (see the animate-loop comment
// next to the rotation maths). prevEarthY is null on the very first frame so
// we have nothing to diff against; from frame 2 onward we apply the delta.
let _prevEarthY: number | null = null;
const _camOffset = new THREE.Vector3();

function loadEclipse(event: EclipseEvent | null) {
  activeEclipse = event;
  activeNasaPath = event ? getCataloguedEclipsePath(event.id) : undefined;
  // Keep the EclipsePanel's row-highlight in sync with the actually-loaded event.
  // Covers both the startup load (next upcoming) and any later jump.
  eclipsePanel.setSelected("solar", event?.id ?? null);

  // Configure the SunDiscPanel's scrub bar to span this eclipse's window so the
  // slider drags across U1−5m → U4+5m, with the greatest-eclipse marker at the
  // right fraction. Show/hide of the controls themselves is driven by the
  // animate loop (gates on `eclipseModeOn`) — here we just configure the range.
  if (event) sunDiscPanel.setEclipseWindow(event.startUtc, event.endUtc, event.peakUtc);

  if (!event) {
    eclipseLayer.setPath([]);
    dataRegistry.report("eclipse", {
      source: "NASA eclipse catalog · bundled",
      detail: "no upcoming eclipse in catalog",
      bundled: true,
    });
    return;
  }

  let geographicPath: THREE.Vector3[];
  let sourceLabel: string;
  if (activeNasaPath) {
    geographicPath = activeNasaPath.waypoints.map(wp => latLonToGeographic(wp.lat, wp.lon));
    sourceLabel = "NASA centerline";
  } else {
    // No catalogued path — fall back to Schlyter-based computation. Known to be wonky
    // (~30° surface error at alignment), so if it returns an empty array the path just
    // won't render and we surface a warning in the data registry.
    const samples = computePathOfTotality(event.startUtc, event.endUtc, 30);
    geographicPath = samples.map(s => {
      const out = new THREE.Vector3();
      worldToGeographic(s.worldPoint, s.time, out);
      return out;
    });
    sourceLabel = "astronomical fallback (Schlyter)";
  }
  eclipseLayer.setPath(geographicPath);
  const peakLocal = event.peakUtc.toISOString().slice(0, 16) + "Z";
  console.log(
    `[earth-clock] eclipse loaded: ${event.name} · peak ${peakLocal} · ` +
    `${geographicPath.length} path points · source: ${sourceLabel} · (${event.region})`,
  );
  const sourceLine = activeNasaPath ? "NASA centerline · bundled" : "NASA eclipse catalog · bundled";
  if (geographicPath.length === 0) {
    dataRegistry.report("eclipse", {
      source: sourceLine,
      error: `${event.name} · no path samples (runtime lunar model below threshold)`,
    });
  } else {
    dataRegistry.report("eclipse", {
      source: sourceLine,
      fetched: new Date(),
      detail: `${event.name} · ${peakLocal}`,
      bundled: true,
    });
  }
}

loadEclipse(nextEclipse(new Date()));

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
  moonPositionWorld(now, moonPos);
  // ── Axial-tilt unification ────────────────────────────────────────────────
  // sunDirectionWorld and moonPositionWorld return vectors in the equatorial
  // frame (+Y = Earth's spin axis). Every Earth-anchored layer in the scene
  // (Globe, Coastlines, CloudLayer, EclipseLayer, FireLayer, HurricaneLayer,
  // AuroraLayer, Trails, Particles, OverlayLayer, LightningLayer) Z-rotates
  // its mesh by AXIAL_TILT, putting their world-frame content into a
  // "tilted equatorial" frame. To stay consistent with that frame — so the
  // 3D day/night terminator, the sun/moon beams, the eclipse path, and any
  // pin dropped at a geographic (lat, lon) all agree on where solar noon is
  // — we apply the same Z-rotation to sunDir and moonPos here. The visible
  // symptom of NOT doing this was a ~16° offset between the sun beam direction
  // and the location pin dropped at the sub-solar point (LocationPanel "sun
  // beam direction" button), reported QA v0.1.x.
  //
  // The TRUE geographic sub-solar (lat = δ, lon = α − GMST) is unchanged —
  // it's a property of Earth's rotation alone — and is still computed below
  // for the flat map and the panel readouts.
  sunDir.applyAxisAngle(TILT_Z_AXIS, AXIAL_TILT_RAD);
  moonPos.applyAxisAngle(TILT_Z_AXIS, AXIAL_TILT_RAD);

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
  // Y-component of (sunDir × moonUnit) tells us waxing/waning:
  //   sun  ≈ (1, 0, 0) in the world frame
  //   moon ≈ (cos Δ, 0, −sin Δ) when east of the sun (waxing — Δ is the eastward
  //          elongation, RA_moon > RA_sun, and east is −Z in our convention)
  //   sun × moon = (0, sin Δ, 0)  →  Y > 0 ⇔ waxing.
  // The pre-fix code had this inverted (waxing was `y < 0`), so the flat-map disc
  // was showing waning when the moon was actually waxing and vice versa.
  _moonUnit.copy(moonPos).normalize();
  const cosElongation = THREE.MathUtils.clamp(sunDir.dot(_moonUnit), -1, 1);
  const illumFraction = (1 - cosElongation) * 0.5;
  _waxCross.crossVectors(sunDir, _moonUnit);
  radiusVectors.setMoonPhase(illumFraction, _waxCross.y > 0);

  // Particles, coastlines, clouds, fires, and hurricanes share Earth's rotation so they stay glued to the ground frame
  const earthY = earthRotationY(now);
  particles.setRotationY(earthY);
  trails.setRotationY(earthY);
  coastlines.setRotationY(earthY);
  timezoneLayer.setRotationY(earthY);
  timezoneLayer.update(simulatedTime);
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

  // Lunar-eclipse dimming. When the user has picked a lunar eclipse from the
  // 🌑 Lunar tab, drive the moon mesh's emissive intensity + colour from how
  // far through the P1→peak→P4 window we are. Zero outside the window → moon
  // reverts to the default bright disc. The dim curve is linear (visual
  // approximation; not a photometric model) — driven by lunarEclipseFraction.
  // The same fraction also feeds the SunDiscPanel's lunar moon-disc inset so
  // the 3D moon and the panel inset stay visually in lockstep.
  if (activeLunarEclipse) {
    const f = lunarEclipseFraction(activeLunarEclipse, now);
    moon.setEclipseShadow(f, activeLunarEclipse.umbralMagnitude);
    sunDiscPanel.setLunarFraction(f);
    // Magnitude readout mirrors the solar version's shape. Status string maps
    // the fraction back to a human-readable phase: ≤0 outside the event,
    // climbing → "approaching", at peak → either "totality" (umbral mag > 1)
    // or "deepest" (partial / penumbral), then "receding" on the way down.
    const peakMs = activeLunarEclipse.peakUtc.getTime();
    const mag = activeLunarEclipse.umbralMagnitude;
    const magStr = f > 0 ? `magnitude ${mag.toFixed(3)}` : "—";
    let statusStr: string;
    if (f <= 0) {
      statusStr = activeLunarEclipse.type;
    } else if (f >= 0.98) {
      statusStr = mag > 1 ? "totality" : "deepest";
    } else if (simulatedTime < peakMs) {
      statusStr = `approaching · ${(f * 100).toFixed(0)}%`;
    } else {
      statusStr = `receding · ${(f * 100).toFixed(0)}%`;
    }
    sunDiscPanel.setLunarReadout(magStr, statusStr);
  } else {
    moon.setEclipseShadow(0);
    sunDiscPanel.setLunarFraction(0);
  }
}

function wrapLon(d: number): number {
  let x = ((d + 180) % 360 + 360) % 360 - 180;
  return x;
}

function animate(t: number) {
  const dtMs = t - lastFrame;
  lastFrame = t;
  const warp = window.__orreryTimeWarp ?? 1;
  simulatedTime += dtMs * warp;

  const now = new Date(simulatedTime);
  updateAstro();
  clock.setTime(now);
  // If political timezone data just finished loading, re-query the pinned location
  // so we upgrade from the nominal fallback to an accurate DST-aware zone name.
  if (timezoneLayer.dataLoaded !== lastTzDataLoaded) {
    lastTzDataLoaded = timezoneLayer.dataLoaded;
    if (pinnedLocation.visible) {
      const zone = timezoneLayer.findZoneAt(pinnedLocation.lat, pinnedLocation.lon);
      locationPanel.setPinnedZone(zone.ianaName || null, zone.utcOffset);
      timezoneLayer.setReferenceZone(zone.ianaName || null);
    }
  }
  locationPanel.setNow(now);

  // Live-data freshness. When the user warps far from wall-clock now (catalogued
  // 2027 eclipse, scrubbing back to 1923, etc.), we hide every live-weather
  // layer rather than render today's wind + clouds + lightning on the wrong
  // date. Astronomy + day/night + eclipse layer stay on because they track
  // simulated time correctly. Hysteresis bands keep the toggles from flickering
  // at the boundary if the user scrubs across it. See ROADMAP.md.
  const driftMs = Math.abs(simulatedTime - Date.now());
  if (liveDataInRange && driftMs > LIVE_DATA_HIDE_MS)  liveDataInRange = false;
  if (!liveDataInRange && driftMs < LIVE_DATA_SHOW_MS) liveDataInRange = true;
  menu.setLiveFreshnessOk(liveDataInRange);
  clock.setLiveDataStale(!liveDataInRange, liveDataInRange ? null : now);

  // Sun-disc inset (the "what the observer at the pinned location sees" SVG +
  // eclipse scrub controls). Two paths into visibility:
  //   1. Easter egg — geometry match (sun up, moon within 5° at the pin).
  //   2. Eclipse-mode — user clicked an eclipse row, layer is on; we show
  //      the panel even if geometry doesn't match so the scrub controls are
  //      reachable (e.g., the moon may be on the other side of Earth for the
  //      pinned location at U1).
  // Both paths require a pinned location.
  // Two-mode panel visibility:
  //   - Solar: needs a pin (observer-perspective sun+moon SVG is only
  //     meaningful for a specific spot on Earth). Eclipse-mode keeps it on
  //     even if geometry doesn't match (so the user can reach the scrub bar).
  //     Easter-egg path: visible when a geometric eclipse is happening at the
  //     pin even without explicit eclipse-mode.
  //   - Lunar: no pin needed — the moon is the same for every observer on the
  //     night side. Panel visible whenever a lunar event is loaded.
  const eclipseModeOn = activeEclipse !== null && eclipseLayer.mesh.visible;
  const tab = eclipsePanel.getActiveTab();
  if (tab === "lunar") {
    sunDiscPanel.setVisible(activeLunarEclipse !== null);
    sunDiscPanel.setScrubControlsVisible(activeLunarEclipse !== null);
  } else if (pinnedLocation.visible) {
    const view = computeObserverView(pinnedLocation.lat, pinnedLocation.lon, now, sunDir, moonPos);
    const geomMatch = sunDiscPanel.update(view);
    sunDiscPanel.setVisible(geomMatch || eclipseModeOn);
    sunDiscPanel.setScrubControlsVisible(eclipseModeOn);
  } else {
    sunDiscPanel.setVisible(false);
    sunDiscPanel.setScrubControlsVisible(false);
  }
  // Drive the scrub bar's position and the ⏸/▶ icon from the current
  // simulatedTime / warp. SunDiscPanel.setSimulatedTime is a no-op while the
  // user is mid-drag (its own isDragging flag), so this doesn't fight input.
  sunDiscPanel.setSimulatedTime(simulatedTime);
  sunDiscPanel.setPlaying((window.__orreryTimeWarp ?? 1) !== 0);
  // Use real wall-clock dt for particles (independent of simulated-time warp;
  // wind drift should look the same regardless of how fast Earth is spinning).
  particles.update(dtMs / 1000, t / 1000);
  aurora.setTime(t / 1000);
  fires.setTime(t / 1000);
  hurricanes.setTime(t / 1000);
  lightning.setTime(t / 1000);
  // Camera-locks-to-Earth-surface when auto-orbit is off. Without this, time-warp
  // visibly drifts the view: Earth rotates beneath the camera (because
  // globe.setRotationY advances with simulated time) but the camera sits still in
  // the world frame, so the surface point the user was looking at scrolls off
  // screen. Locking means: every frame, rotate camera.position around the
  // controls target (Earth centre) by the same Δ Earth rotated. Net effect — the
  // user keeps staring at the same Spain / Iceland / wherever as time advances,
  // and only the celestial geometry (sun, moon, eclipse umbra) visibly moves.
  // Skipped in flat-map mode (no orbit camera there) and when auto-orbit is on
  // (then the user explicitly wants the camera to revolve in world frame). The
  // user's own drag input remains additive — OrbitControls reads camera.position
  // *after* this rotation, so dragging still spins on top of the lock.
  const earthYNow = earthRotationY(new Date(simulatedTime));
  // Gate the lock on `warp !== 0`: when the user is paused (or scrubbing the
  // eclipse slider, which pauses), don't track Earth's spin. The slider can
  // jump simulatedTime by hours in a single frame; without this gate, the
  // camera swings just as far around Earth and the user sees the viewpoint
  // sweep across the scene. With it gated, scrubbing keeps the camera dead
  // still — surface texture scrolls past as Earth rotates internally, but
  // the viewpoint stays where the user parked it. Lock resumes naturally
  // when warp returns to non-zero (press ▶ / pick a speed).
  const warpForLock = window.__orreryTimeWarp ?? 1;
  if (!menu.isAutoOrbit() && !menu.isMapMode() && _prevEarthY !== null && warpForLock !== 0) {
    const deltaEarthY = earthYNow - _prevEarthY;
    if (deltaEarthY !== 0) {
      _camOffset.subVectors(camera.position, controls.target);
      const cosA = Math.cos(deltaEarthY);
      const sinA = Math.sin(deltaEarthY);
      const x = _camOffset.x, z = _camOffset.z;
      _camOffset.x =  x * cosA + z * sinA;
      _camOffset.z = -x * sinA + z * cosA;
      camera.position.addVectors(controls.target, _camOffset);
    }
  }
  _prevEarthY = earthYNow;
  // OrbitControls' built-in autoRotate. Three.js pauses it automatically while the user is
  // actively dragging, so input handover is implicit; we just keep the flag in sync with
  // the menu toggle each frame.
  controls.autoRotate = menu.isAutoOrbit();
  controls.update();

  // FlatMap pan/zoom controls: enable only while in flat-map mode so they don't
  // intercept events meant for the 3D globe's OrbitControls. Edge-triggered on
  // mode change — lazy-initialised on first enable.
  const mapModeNow = menu.isMapMode();
  if (mapModeNow !== lastMapMode) {
    if (mapModeNow) flatMap.enableControls(renderer.domElement);
    else            flatMap.disableControls();
    lastMapMode = mapModeNow;
  }

  // Update the world-space trail accumulator: fade prev frame, render flat-projected
  // particles into the equirectangular trail texture. The composite (sphere in main scene,
  // plane in flat map) reads the updated texture during the upcoming render passes. Toggle
  // hides the composite meshes and skips the step so the trail texture doesn't churn.
  const windOn = menu.isWindVisible();
  trails.setVisible(windOn);
  if (windOn) trails.step(renderer);

  // Mode-specific update + render. Per-frame pan/zoom damping happens here
  // (only for whichever mode is active so the inactive set of controls doesn't
  // consume input). FlatMap's enable/disable is handled by the menu toggle
  // listener below; we just call update() unconditionally — it short-circuits
  // when disabled.
  if (menu.isMapMode()) {
    flatMap.update();
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
