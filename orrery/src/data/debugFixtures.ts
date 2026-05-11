import * as THREE from "three";
import type { AuroraGrid } from "./auroraLoader";
import type { FireGrid } from "./firmsLoader";
import type { StormGrid } from "./nhcLoader";

/**
 * Static fixtures for offline / debug verification. Use these via the Debug panel's
 * "Use test data" button. If the live loaders are broken (CORS, schema drift, etc.)
 * but the fixtures render correctly, the bug is in the loader, not the renderer.
 *
 * Fixtures are deliberately small and obvious — a ring of bright aurora, a half-dozen
 * famous wildfires, a hand-placed mid-Atlantic hurricane — so it's instantly visible
 * whether the renderer is doing its job.
 */

export function debugAuroraGrid(): AuroraGrid {
  // Fat polar "caps" at high latitudes — multiple concentric rings so something is always visible
  // regardless of camera angle. Maxed-out probability so the shader's ramp lands at peak brightness.
  const points: number[] = [];
  const latBands = [55, 60, 65, 70, 75, 80];
  for (const baseLat of latBands) {
    for (let lon = -180; lon < 180; lon += 0.5) {
      points.push(lon,  baseLat, 100);
      points.push(lon, -baseLat,  90);
    }
  }
  const buf = new Float32Array(points);
  return {
    forecastTime: new Date(),
    data: buf,
    pointCount: points.length / 3,
  };
}

export function debugFireDetections(): FireGrid {
  // A handful of dramatic, obvious fire locations: California, Amazon, Siberia, Australia,
  // Canada, Greece. Two pixels each so they're impossible to miss.
  const seeds: [string, number, number, number][] = [
    ["California",  36.5,  -119.5, 200],
    ["Amazon",      -5.0,   -60.0, 150],
    ["Siberia",     65.0,   115.0, 300],
    ["Australia",  -33.0,   148.0, 250],
    ["Canada-BC",   55.0,  -123.0, 180],
    ["Greece",      38.5,    22.0,  90],
    ["Congo",       -2.0,    23.0,  60],
    ["Indonesia",   -1.5,   115.0, 140],
  ];
  // Sprinkle a tight cluster of secondary points around each seed for a "fire-zone" look
  const detections = seeds.flatMap(([_name, lat, lon, frp]) => {
    const cluster = [];
    for (let i = 0; i < 30; i++) {
      const dLat = (Math.random() - 0.5) * 2.5;
      const dLon = (Math.random() - 0.5) * 2.5;
      cluster.push({
        lat: lat + dLat,
        lon: lon + dLon,
        frp: frp * (0.4 + 0.6 * Math.random()),
        brightTi4: 320 + Math.random() * 40,
        daynight: "D",
      });
    }
    return cluster;
  });
  return { detections, fetchedAt: new Date() };
}

export function debugStormGrid(): StormGrid {
  // Synthetic storms across every basin so at least one is on the visible hemisphere
  // regardless of camera angle or time of day.
  const seeds: Array<[string, string, string, number, number, number]> = [
    // id,            name,           class, intensity-kt, lat,   lon
    ["DEBUG-AL01", "Athena (test)",   "MH",  115, 18.5, -55.0],   // mid-Atlantic
    ["DEBUG-AL02", "Boreas (test)",   "HU",   90, 28.0, -78.0],   // Gulf / Florida
    ["DEBUG-EP01", "Calypso (test)",  "TS",   55, 15.0, -110.0],  // East Pacific
    ["DEBUG-WP01", "Daiyu (test)",    "TY",  105, 16.0, 132.0],   // W Pacific typhoon
    ["DEBUG-WP02", "Erebus (test)",   "STY", 145, 13.0, 152.0],   // super typhoon
    ["DEBUG-IO01", "Fanindra (test)", "TS",   48, -12.0, 65.0],   // S Indian Ocean
    ["DEBUG-SH01", "Galene (test)",   "MH",  120, -18.0, 95.0],   // S hemisphere
  ];
  return {
    storms: seeds.map(([id, name, classification, intensityKt, lat, lon]) => ({
      id, name, classification, intensityKt,
      pressureMb: Math.round(1010 - intensityKt * 0.6),
      lat, lon,
      movementDir: 280, movementSpeedKt: 12,
      lastUpdate: new Date().toISOString(),
    })),
    fetchedAt: new Date(),
  };
}

/**
 * A procedural "cloud" texture: bright noise concentrated over the tropics + a swirl band.
 * Lets us verify the cloud shader's luminance-threshold + day-side masking with no network.
 */
export function debugCloudTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const ctx = c.getContext("2d")!;

  // Base ocean blue so the luma threshold has something to discard
  ctx.fillStyle = "#103050";
  ctx.fillRect(0, 0, W, H);

  // Cloud blobs — bright white where luma > 0.5 (matches the cloud shader's threshold)
  ctx.globalAlpha = 0.9;
  for (let i = 0; i < 400; i++) {
    const lat = (Math.random() - 0.5) * 90;       // most clouds within tropics
    const lon = (Math.random() - 0.5) * 360;
    const x = (lon + 180) / 360 * W;
    const y = (90 - lat) / 180 * H;
    const r = 8 + Math.random() * 30;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(255,255,255,0.95)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}
