import type { FireDetection } from "./firmsLoader";
import type { VolcanoRecord } from "../scene/VolcanoLayer";

const EARTH_RADIUS_KM = 6371;

/**
 * Flag volcanoes whose position is within `radiusKm` of any FIRMS thermal-anomaly
 * detection — a cheap proxy for "this volcano is currently erupting" without a
 * second live data feed (GVP's own eruption RSS is a future enhancement).
 *
 * Equirectangular approximation for distance: fine at a ~20 km threshold (volcanic
 * cones are compact features; the projection only distorts meaningfully at
 * Antarctica-scale extents this never approaches).
 */
export function crossReferenceEruptions(
  detections: readonly FireDetection[],
  volcanoes: readonly VolcanoRecord[],
  radiusKm = 20,
): Set<number> {
  const erupting = new Set<number>();
  if (detections.length === 0) return erupting;

  for (const v of volcanoes) {
    const cosLat = Math.cos(v.lat * Math.PI / 180);
    for (const d of detections) {
      const dLat = (d.lat - v.lat) * Math.PI / 180;
      const dLon = (d.lon - v.lon) * Math.PI / 180 * cosLat;
      const distKm = EARTH_RADIUS_KM * Math.sqrt(dLat * dLat + dLon * dLon);
      if (distKm <= radiusKm) {
        erupting.add(v.id);
        break;
      }
    }
  }
  return erupting;
}
