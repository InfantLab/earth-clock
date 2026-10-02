import type { VisiblePass } from "../space/passes";
import { compassPoint } from "../space/passes";

/**
 * Human wording for visible passes, shared by the station card and the Location panel.
 * Times are shown in the pinned location's time zone (falls back to the browser's).
 */

function ymd(d: Date, timeZone?: string): number {
  // en-CA formats as YYYY-MM-DD; turn it into a day number for differencing.
  const s = safeFormat(d, { year: "numeric", month: "2-digit", day: "2-digit" }, timeZone, "en-CA");
  const [y, m, day] = s.split("-").map(Number);
  return Date.UTC(y, m - 1, day) / 86_400_000;
}

function safeFormat(d: Date, opts: Intl.DateTimeFormatOptions, timeZone?: string, locale?: string): string {
  try {
    return new Intl.DateTimeFormat(locale, { ...opts, timeZone }).format(d);
  } catch {
    return new Intl.DateTimeFormat(locale, opts).format(d); // unknown zone → browser zone
  }
}

/** "Tonight 21:42", "Tomorrow 05:10", "Sat 04:58", "12 Oct 19:20". */
export function formatPassWhen(at: Date, now: Date, timeZone?: string): string {
  const hm = safeFormat(at, { hour: "2-digit", minute: "2-digit", hour12: false }, timeZone);
  const hour = Number(hm.slice(0, 2));
  const days = ymd(at, timeZone) - ymd(now, timeZone);
  if (days === 0) return `${hour >= 17 ? "Tonight" : "Today"} ${hm}`;
  if (days === 1) return `Tomorrow ${hm}`;
  if (days < 7) return `${safeFormat(at, { weekday: "short" }, timeZone)} ${hm}`;
  return `${safeFormat(at, { day: "numeric", month: "short" }, timeZone)} ${hm}`;
}

/** "4 min · max 67° · WSW → NE · mag −3.2" */
export function formatPassDetail(p: VisiblePass): string {
  const mins = Math.max(1, Math.round((p.end.getTime() - p.start.getTime()) / 60_000));
  const to = p.endsInShadow ? `fades ${compassPoint(p.endAzDeg)}` : compassPoint(p.endAzDeg);
  const mag = p.mag.toFixed(1).replace("-", "−");
  return `${mins} min · max ${Math.round(p.maxElDeg)}° · ${compassPoint(p.startAzDeg)} → ${to} · mag ${mag}`;
}

/** Short zone label for headers, e.g. "BST" or "GMT+2". */
export function zoneLabel(at: Date, timeZone?: string): string {
  const parts = (() => {
    try { return new Intl.DateTimeFormat("en-GB", { timeZone, timeZoneName: "short" }).formatToParts(at); }
    catch { return new Intl.DateTimeFormat("en-GB", { timeZoneName: "short" }).formatToParts(at); }
  })();
  return parts.find(p => p.type === "timeZoneName")?.value ?? "";
}

/** A one-event .ics calendar file for a pass, downloaded via a temporary link. */
export function downloadPassIcs(p: VisiblePass, stationName: string, placeName: string) {
  const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const desc =
    `${stationName} visible from ${placeName}: ${formatPassDetail(p)}. ` +
    `Appears in the ${compassPoint(p.startAzDeg)}, highest at ${Math.round(p.maxElDeg)}°. ` +
    `Predicted by earth-clock.onemonkey.org`;
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//onemonkey//earth-clock//EN", "BEGIN:VEVENT",
    `UID:${stamp(p.start)}-${stationName.replace(/\W/g, "")}@earth-clock.onemonkey.org`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(new Date(p.start.getTime() - 2 * 60_000))}`,
    `DTEND:${stamp(p.end)}`,
    `SUMMARY:🛰️ ${stationName} passes over`,
    `DESCRIPTION:${desc.replace(/[,;]/g, m => "\\" + m)}`,
    "BEGIN:VALARM", "TRIGGER:-PT10M", "ACTION:DISPLAY", `DESCRIPTION:${stationName} in 10 minutes`, "END:VALARM",
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `${stationName.replace(/\W+/g, "-").toLowerCase()}-pass-${stamp(p.start).slice(0, 13)}.ics`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
