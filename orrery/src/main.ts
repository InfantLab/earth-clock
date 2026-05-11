import * as THREE from "three";
import { Globe } from "./scene/Globe";
import { Sky } from "./scene/Sky";
import { Atmosphere } from "./scene/Atmosphere";
import { Moon } from "./scene/Moon";
import { Particles } from "./scene/Particles";
import { Trails } from "./scene/Trails";
import { Coastlines } from "./scene/Coastlines";
import { CloudLayer } from "./scene/CloudLayer";
import { LiveDataSource } from "./data/DataSource";
import { windGridToTexture } from "./data/windToTexture";
import { fetchGibsTexture, bestAvailableDailyDate } from "./data/gibsLoader";
import { createCamera, attachOrbitControls } from "./scene/Camera";
import { sunDirectionWorld, earthRotationY } from "./astro/solar";
import { moonPositionWorld } from "./astro/lunar";

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
    };
  }
}

// Expose handles for live tweaking from the JS console
window.__orrery = { particles, globe, trails, coastlines, clouds };

// Fetch real GFS surface wind and hand it to the particles. Mock east-wind keeps running until
// this resolves, so the scene is never blank.
const dataSource = new LiveDataSource();
dataSource.getWindGrid(new Date())
  .then(grid => {
    particles.setWindTexture(windGridToTexture(grid));
    console.log(
      `[orrery] wind data loaded: ${grid.width}×${grid.height}, valid ${grid.validTime.toISOString()}`
    );
  })
  .catch(err => console.error("[orrery] wind data load failed:", err));

// Load Natural Earth coastlines (TopoJSON). Renders empty until this resolves.
fetch("/data/earth-topo.json")
  .then(r => r.ok ? r.json() : Promise.reject(new Error(`coastlines: ${r.status}`)))
  .then(topo => {
    coastlines.loadFromTopology(topo, "coastline_50m");
    console.log("[orrery] coastlines loaded (50m)");
  })
  .catch(err => console.error("[orrery] coastlines load failed:", err));

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
    console.log(`[orrery] cloud composite loaded (${cloudDate.toISOString().slice(0,10)})`);
  })
  .catch(err => console.error("[orrery] cloud composite load failed:", err));

function updateAstro() {
  const now = new Date(simulatedTime);
  sunDirectionWorld(now, sunDir);
  // Move the directional light to sit along the sun direction (50 units away keeps it well outside the scene)
  sun.position.copy(sunDir).multiplyScalar(50);
  globe.setSunDirection(sunDir);
  globe.setRotationY(earthRotationY(now));
  atmosphere.setSunDirection(sunDir);

  moonPositionWorld(now, moonPos);
  moon.setPosition(moonPos);

  // Particles, coastlines, and clouds share Earth's rotation so they stay glued to the ground frame
  const earthY = earthRotationY(now);
  particles.setRotationY(earthY);
  coastlines.setRotationY(earthY);
  clouds.setRotationY(earthY);
  clouds.setSunDirection(sunDir);
}

function animate(t: number) {
  const dtMs = t - lastFrame;
  lastFrame = t;
  const warp = window.__orreryTimeWarp ?? 1;
  simulatedTime += dtMs * warp;

  updateAstro();
  // Use real wall-clock dt for particles (independent of simulated-time warp;
  // wind drift should look the same regardless of how fast Earth is spinning).
  particles.update(dtMs / 1000, t / 1000);
  controls.update();
  // Main scene first (globe, atmosphere, moon, sky) — depth populated, particles NOT here
  renderer.render(scene, camera);
  // Then composite trails over the top using the same camera
  trails.render(renderer, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
