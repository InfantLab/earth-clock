# Incident log — 2026-07-19: Umami rollout, black globe, slow transfers

Two separate problems got tangled together this session. This doc splits them
apart: one was found and fixed; the other is an open investigation with a long
list of ruled-out causes, so the next person (or next session) doesn't repeat
the work.

## Problem 1 — fixed: stale BASE_PATH broke asset paths, then two bad hotfixes made it worse

**Root cause**: a stale `BASE_PATH=/earth-clock` environment variable was left
set on the live CapRover app config (production is documented in
[DEPLOYMENT.md](DEPLOYMENT.md) §3 as always serving from the domain root).
`server.js` used that to inject a `<base href="/earth-clock/">` tag into every
page, breaking every relative asset URL — textures, the JS bundle, everything.

**How it was found**: added while rolling out Umami analytics tracking (commit
`294b631`) — the Umami snippet itself was not the cause, it just coincided
with someone touching the deploy surface enough to notice the site was broken.

**Two hotfixes made in response, both reverted**:
1. A temporary `/earth-clock/*` compatibility shim in `server.js` (commit
   `3d462a5`) — reverted once the stale env var was actually removed from the
   CapRover config, since the shim was only needed for stale cached HTML.
2. An emissive-map addition to the globe's day-texture material in
   `Globe.ts` (commit `8ccd43b`) — a guess at "the lit surface goes
   implausibly black" that didn't fix anything and actively regressed the
   day/night terminator (emissive isn't affected by lighting, so it washed the
   day texture through on the night side too, at all times).

**Fix**: commit `e4dd098` (v0.3.1) reverted the emissive hack, removed the
shim, kept the Umami snippet and the one good defensive change (`server.js`'s
`needsBaseTag` now only fires when `BASE_PATH` is actually set). Verified
locally that the reverted code renders the globe correctly (full colour,
correct day/night lighting) under the same GL backend that was rendering the
live (un-reverted) bundle solid black.

**Status**: shipped and confirmed correct. This part is done.

## Problem 2 — open: intermittent slow asset transfers ("black globe" persists)

After Problem 1 shipped, the site was still loading slowly (~10s+) with a dark
globe. Below is the full chain of hypotheses tested and ruled out, in the
order they were investigated, so nobody re-treads this ground.

| # | Hypothesis | Test | Result |
|---|---|---|---|
| 1 | Synchronous GRIB2 parsing in `weather-service.js` blocks Node's single event loop | Read `grib-js` source — confirmed `readData`/`convertData` are synchronous. But timed the actual production log: full 6-field fetch+parse cycle completes in ~3.5s total, not per-file. Too fast to explain multi-second stalls. | **Ruled out** |
| 2 | Background services (weather/oscar/earthquake) compete for bandwidth with visitor traffic | Checked production logs: a completely quiet 15-minute window with zero background activity logged, during which both a test request and Caspar's real page load were slow. | **Ruled out** |
| 3 | CapRover container CPU/memory resource limits | `docker stats --no-stream`: 0.00% CPU, 24 MiB RAM at idle. `docker service inspect --pretty`: `Resources:` block empty — no limit set at all. | **Ruled out** |
| 4 | Chrome-specific `ERR_HTTP2_PROTOCOL_ERROR` / HTTP2-to-upstream proxy framing bug | Enabled CapRover's "Websocket Support" toggle (forces `proxy_http_version 1.1` to upstream per the nginx template) — no change. Confirmed via `curl --http1.1` that the slow transfer reproduces over plain HTTP/1.1 too (this environment's libcurl doesn't even support HTTP/2, so all curl-based tests all session were HTTP/1.1 regardless) — the browser's HTTP/2 error is very likely just Chrome's stricter flow-control timeout reacting to a connection that's trickling data too slowly, not a distinct protocol bug. | **Ruled out as HTTP/2-specific** (see #9) |
| 5 | DNS / CDN / WAF routing earth-clock differently than the main domain | `earth-clock.onemonkey.org` and `onemonkey.org` resolve to the identical IP (`91.98.123.241`). No CDN in front of either. | **Ruled out** |
| 6 | Docker Swarm overlay network corruption specific to earth-clock (VXLAN checksum-offload bug) | `docker network inspect wjwg9j0vi4ua344tblovfs2x4`: it's `captain-overlay-network`, a single network **shared by every app on the box** (ghost, ghost-babies, tada.living, mysql, umami, earth-clock, etc.), 236 free IPs, nothing isolated. If this were corrupted, every app sharing it would be affected, not just one. | **Ruled out** |
| 7 | Stale container/network state from today's rapid redeploys (Tad's manual image rolls 84→85→86, then the v0.3.1 push) | CapRover has no "Save & Update"-only restart for this setup; "Save & Restart" was run — no change. | **Ruled out** |
| 8 | Dockerfile / dependency drift introduced today | `git diff c467508 HEAD -- Dockerfile package.json package-lock.json`: no diff. Last real Dockerfile change was 2025-12-16. | **Ruled out** |
| 9 | The app/container itself is slow internally | Decisive test: from `captain-nginx` (the actual ingress container, the real peer on the overlay network) directly to earth-clock's container IP (`10.0.1.210`) — **5ms**. The app is fast. Bottleneck is entirely on the public-facing side of nginx. | **Ruled out** — `server.js` is exonerated |
| 10 | Live CapRover NGINX override for earth-clock has drifted from the committed template, or has an earth-clock-specific directive causing the slowdown | Pulled the actual live "Edit Default NGINX Configurations" content from CapRover and diffed against `infra/nginx-caprover-override.conf`. It's one shared instance-level template used by every app on the VPS (conditional per `s.publicDomain`), structurally identical to the committed version. Nothing earth-clock-specific beyond the NHC/geocode proxy blocks (irrelevant to texture loading). | **Ruled out** |
| 11 | earth-clock's TLS certificate is unusual (chain length, key type, expiry) in a way that degrades large transfers | `openssl s_client` against both domains: both Let's Encrypt ECDSA P-256, both TLS 1.3 / `TLS_AES_256_GCM_SHA384`, both valid, nothing unusual. | **Ruled out** |
| 12 | earth-clock specifically has degraded public-facing throughput while other apps on the same VPS are fine | **This was the load-bearing assumption behind hypotheses 4–11**, based on one early sample showing `onemonkey.org` transferring faster than earth-clock. Re-tested properly: 5 back-to-back requests to each domain, same test conditions. `onemonkey.org` came back at 5.3s, 8.3s, 5.3s, 8.8s for a 415KB file — just as bad as earth-clock, sometimes worse. | **Ruled out — the premise itself was wrong** |

### Current leading hypothesis

Given #9 (app is fast internally, 5ms) and #12 (the "problem" is not specific
to earth-clock — a properly controlled comparison shows `onemonkey.org` is
equally slow and equally erratic), this looks like a **VPS/hosting-provider
network-level issue affecting the whole box's outbound path to at least some
external networks**, not a bug in earth-clock's code, config, or anything
touched during today's Umami/BASE_PATH work. The IP (`91.98.123.241`) is in a
Hetzner Cloud range. Candidates: noisy-neighbor contention on shared
infrastructure, an outbound bandwidth cap or throttle triggered on the
account, a peering/congestion issue on the route between the VPS and testing
clients, or an active provider-side incident.

### Next steps (not yet done)

- Check the hosting provider's status page / account dashboard directly for
  bandwidth alerts, abuse flags, or active network incidents — this is
  outside anything queryable from inside the VPS or over HTTP.
- If the provider confirms nothing, consider an `mtr`/traceroute from the VPS
  itself out to a few different external targets to characterize where
  packet loss or latency is actually being introduced.
- Re-run the 5-sample back-to-back comparison test (see hypothesis #12 above)
  from a completely different network (not this session's sandbox, not
  Caspar's home connection) to triangulate whether it's provider-wide or
  specific to certain routes.

### Secondary items noticed but not yet resolved

- `server.js`'s static file serving doesn't set `Content-Length` (relies on
  chunked transfer encoding) and has no `ETag`/`Last-Modified`/`Accept-Ranges`
  support, unlike Ghost's Express-based static serving on the other domains.
  Not proven to cause the slowness (the app itself tested fast internally),
  but worth hardening regardless — explicit `Content-Length` and range-request
  support are generally more robust for a hand-rolled static file server,
  independent of this incident.
- `docker service inspect` showed the running image tag as `:85` at one point
  in the investigation, which didn't match the expected tag sequence from the
  day's redeploys. Live content served (bundle hash, version badge) did match
  the intended v0.3.1 deploy, so this was likely a stale/reused tag label
  rather than a real deploy mismatch — but worth a glance if deploy weirdness
  comes up again.
