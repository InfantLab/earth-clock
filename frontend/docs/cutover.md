# Production cutover

> **Historical document.** The cutover happened in v0.1.0 (2026-05) and the procedure below describes how it ran. The folder shown throughout as `orrery/` is what is now called `frontend/` (renamed post-cutover). Keep this for reference / rollback planning; new operational instructions live in [DEPLOYMENT.md](../../DEPLOYMENT.md).

How `earth-clock.onemonkey.org/` swapped from serving classic earth-clock to serving the WebGL 3D rebuild. The classic site moved to `/classic/` as a permanent archive.

This is a one-time, mostly-reversible operation. The whole thing is ~10 minutes of file moves + a `git push`, plus an NGINX config paste in the CapRover dashboard.

---

## Trigger criteria

Don't cut over until all of these are true:

- [ ] Phase A layers all load and render correctly with live data (clouds, aurora, fires, hurricanes, wind, coastlines, lightning)
- [ ] Phase B Path A overlays load (MSLP / Temp / RH / TPW / TCW) — requires `npm run weather-service` running on the server
- [ ] Visual QA passed across the three target browsers (Chrome, Firefox, Safari) at three different times of day
- [ ] The CORS proxy NGINX rule is deployed (see [proxy.md](proxy.md)) and verified with curl
- [ ] No console errors at idle (Debug overlay shows ✓ for every layer or expected `bundled` / `no data`)
- [ ] Docs split into /docs and an in-app About panel exists, OR the long README is acceptable for launch

Eclipse tool should ideally be deployed before 2026-08-12 so we can use it as the launch headline.

---

## Pre-cutover checklist

```text
□ Run `npm install` in both orrery/ and earth-clock/ root
□ Run `npm run weather-service` once to confirm it produces all 5 GFS JSON files:
     current-wind-surface-level-gfs-1.0.json
     current-temp-surface-level-gfs-1.0.json
     current-relative_humidity-surface-level-gfs-1.0.json
     current-air_density-surface-level-gfs-1.0.json
     current-total_precipitable_water-gfs-1.0.json
     current-total_cloud_water-gfs-1.0.json
     current-mean_sea_level_pressure-gfs-1.0.json
□ Run `npm run build` in orrery/ to confirm the orrery build is clean
□ Confirm CapRover NGINX override has the /proxy/nhc/ block deployed and curl-tested
□ Optional: deploy /proxy/nominatim/ block too (place-name lookups are direct-to-Nominatim
  in dev; production should proxy with a descriptive User-Agent to comply with their
  usage policy). NGINX block at the end of this doc.
□ Confirm weather-service is set to run on a schedule (every 6 h) in prod
□ Take a backup of /public/ so rollback is trivial
```

---

## The swap

### 1. Relocate classic to `/public/classic/`

The classic site's source files live in `/public/`. They need to be tucked into a subdirectory so orrery's build can take over the root.

```bash
cd c:/Users/caspar/code/earth-clock/public
mkdir classic
# Move classic-only files. Keep /data/ at the root because the orrery build uses it
# at /data/weather/current/* for the GFS overlays.
for f in about.html cf-gray.jpg cover.jpg cover.png favicon.ico images index.html ipad-icon.png \
         iphone-icon.png jp libs natural-earth.jpg natural-earth.png preview.jpg preview.png \
         styles templates test; do
  mv "$f" classic/
done
```

Verify `/public/data/` still exists at the root (orrery needs it).

### 2. Build orrery into the public root

```bash
cd c:/Users/caspar/code/earth-clock/orrery
BUILD_AS_ROOT=1 npm run build
```

The env var flips `vite.config.ts` to write into `../public/` instead of `../public/orrery/`. `emptyOutDir` is automatically disabled in this mode so the classic backup at `/public/classic/` and the `/public/data/` tree are preserved.

After this, `/public/` should contain:
- `index.html` — orrery
- `assets/` — bundled JS/CSS (Vite output)
- `textures/` — orrery's bundled images
- `classic/` — the old site, intact
- `data/` — the GFS JSON + coastlines, shared

### 3. Verify locally

```bash
cd c:/Users/caspar/code/earth-clock/orrery
npm run preview
```

Open the preview URL and confirm:
- [ ] orrery loads at root `/`
- [ ] `/classic/` serves the classic site
- [ ] No 404s in the network tab

### 4. Deploy

CapRover redeploy as usual. The NGINX `location /proxy/nhc/` rule (from [proxy.md](proxy.md)) should already be in place; verify with:

```bash
curl -i https://earth-clock.onemonkey.org/proxy/nhc/CurrentStorms.json
```

Should return `200 OK` + the JSON payload + `Access-Control-Allow-Origin: *` header.

### 5. Post-cutover smoke test

Open `https://earth-clock.onemonkey.org/` in a clean browser session and confirm:
- [ ] orrery loads
- [ ] All default-on layers render
- [ ] Data panel shows ✓ for every live source (after a few seconds for fetches)
- [ ] `https://earth-clock.onemonkey.org/classic/` serves the old site

Announce on whatever channels makes sense.

---

## Rollback

If something's badly broken in prod:

1. Restore the `/public/` backup from before the swap.
2. CapRover redeploy.

The orrery build artefacts go into `/public/assets/`, `/public/index.html`, etc., which don't collide with classic's file names (classic uses `index.html` at the root, `libs/`, `styles/`, etc., relocated to `/public/classic/` by the cutover). So the rollback is just "put the old files back at root".

---

## After cutover

- Update `/public/classic/index.html` to add a banner pointing at the new site, or a 410 / 301 redirect if we want to retire it entirely.
- Document the swap in DEPLOYMENT.md (repo root) for future operators.
- Keep `weather-service.js` running on its 6-hour schedule.

---

## Related

- [PLAN.md](../PLAN.md) — "Replace-classic cutover" row in the Infrastructure table.
- [docs/proxy.md](proxy.md) — the CORS-proxy NGINX rule that must be in place before cutover.
- [docs/qa-checklist.md](qa-checklist.md) — visual QA checklist for the deep-dive testing pass.

---

## Appendix: optional Nominatim NGINX proxy

Place-name reverse geocoding (LocationPanel) currently hits `nominatim.openstreetmap.org`
directly. Nominatim's usage policy requires a descriptive `User-Agent` (which the browser
won't set) and rate-limits to 1 req/s per IP. For production, route through the same NGINX
host with a polite User-Agent. Paste this into the CapRover NGINX override alongside the
NHC block:

```nginx
location /proxy/nominatim/ {
    proxy_pass         https://nominatim.openstreetmap.org/;
    proxy_ssl_server_name on;
    proxy_set_header   Host nominatim.openstreetmap.org;
    proxy_set_header   User-Agent "earth-clock (https://earth-clock.onemonkey.org; contact: <your-email>)";
    proxy_intercept_errors on;
    add_header Access-Control-Allow-Origin *  always;

    # Cache results for 7 days — same lat/lon resolves to the same place name reliably,
    # and Nominatim explicitly encourages caching.
    proxy_cache_valid 200 7d;
}
```

If deployed, edit `src/data/geocoder.ts` to point `NOMINATIM_URL` at `/proxy/nominatim/reverse`
so prod uses the proxy while dev (currently no Vite proxy entry for Nominatim) hits direct.
