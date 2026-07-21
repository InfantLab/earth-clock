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

### Update — likely self-inflicted by today's testing volume, not Hetzner

Two independent checks after the table above both point away from a
hosting-provider fault:

- **Host-level check (Tad, via SSH into `caspar-ghost`)**: load average 0.11,
  RAM plenty free, disk 61%, `journalctl -p err` empty, Hetzner's public
  status page reachable with nothing reported. Host looks healthy.
- **Re-tested throughput after a pause from testing**: earlier in the
  session, repeated back-to-back and concurrent `curl` tests to
  `earth-clock.onemonkey.org` consistently showed 3–14s for a 463KB file.
  After stopping test traffic for a few minutes and re-testing, single
  requests came back fast and consistent (0.4–1.6s), and an 8-concurrent-request
  burst mostly came back fast too (7 of 8 under 1.6s, one 5.1s outlier).

Between these two, the evidence now leans toward **the heavy volume of
testing traffic during the investigation itself (this session's repeated
curl bursts and concurrent-connection tests, plus Tad's own troubleshooting
traffic earlier) contributing to or causing the appearance of a network
problem** — not a genuine Hetzner infrastructure fault, and not (per #9) an
earth-clock app/container issue either. This is **not fully proven** — some
jitter remained even after the pause — but it's a materially better-supported
explanation than "blame the hosting provider," and the earlier "VPS/hosting-
provider network-level issue" framing below should be read with that caveat.

<details>
<summary>Original "VPS/hosting-provider" framing (superseded by the update above, kept for context)</summary>

Given #9 (app is fast internally, 5ms) and #12 (the "problem" is not specific
to earth-clock — a properly controlled comparison shows `onemonkey.org` is
equally slow and equally erratic), this looked like a VPS/hosting-provider
network-level issue affecting the whole box's outbound path to at least some
external networks, not a bug in earth-clock's code, config, or anything
touched during today's Umami/BASE_PATH work. The IP (`91.98.123.241`) is in a
Hetzner Cloud range. Candidates considered: noisy-neighbor contention on
shared infrastructure, an outbound bandwidth cap or throttle triggered on the
account, a peering/congestion issue on the route between the VPS and testing
clients, or an active provider-side incident.

</details>

### Next steps (not yet done)

- If slowness recurs, check whether it correlates with active testing/curl
  volume against the domain before assuming it's infrastructure — that's the
  new leading suspect.
- If it recurs with no unusual traffic in play, an `mtr`/traceroute from the
  VPS itself out to a few different external targets would help characterize
  where packet loss or latency is actually being introduced.
- Re-run the 5-sample back-to-back comparison test (see hypothesis #12 above)
  from a completely different network (not this session's sandbox, not
  Caspar's home connection) to triangulate further if needed.

### 2026-07-20 update — self-inflicted/rate-limit theory killed; packet capture proves real external network loss

Fresh session, new vantage point (a sandbox in Amsterdam, `AS3257 GTT
Communications`, IP `212.56.48.48` — never made a single prior request to
either domain, so it can't have been rate-limited or banned by anything this
investigation itself triggered). Did the two things nobody had done yet:
checked for host-level rate-limiting/security middleware, and captured
packets on the host during a reproduced slow transfer.

**Rate-limiting/fail2ban/iptables check — theory killed outright:**

| Check | Command | Result |
|---|---|---|
| fail2ban jails | `sudo fail2ban-client status` | Only one jail exists: `sshd`. No HTTP/nginx/CapRover jail of any kind. |
| ufw | `sudo ufw status verbose` | `Status: inactive` |
| iptables/nftables | `sudo iptables -L -n -v` / `sudo nft list ruleset` | Only Docker bridge-isolation rules (0 packets matched on all of them) and Tailscale (`ts-input`/`ts-forward`) rules. Nothing rate-limits or drops based on connection rate, and nothing matches port 443/80 traffic at all. |
| CrowdSec / WAF | `systemctl status crowdsec`, `docker ps` grep for waf/proxy/limit | `crowdsec.service` doesn't exist on this host. No WAF/rate-limit container running. |
| nginx `limit_req`/`limit_conn` | grepped `/captain/` config tree and the live `captain-nginx` container's `/etc/nginx/` | Zero matches anywhere. |

There is **no rate-limiting, banning, or connection-throttling infrastructure
of any kind** on this host that could plausibly explain the recovery-after-
pause pattern. That pattern was coincidental, not causal — see below for what
actually explains the variability.

**Reproduced cleanly under the most "innocent" possible test pattern** — a
handful of single, well-spaced (3-8s apart), non-concurrent requests, from a
brand-new IP that had never touched the domain before:

```
run1 TTFB:0.235s TOTAL:2.812s SIZE:463087   (earth_daymap_2k.jpg, 452KB)
run2 TTFB:0.263s TOTAL:2.338s SIZE:463087
run3 TTFB:0.213s TOTAL:2.971s SIZE:463087
```

If the self-inflicted-by-testing-volume theory were correct, this pattern —
one request, wait 8s, next request — should have been unaffected. It wasn't.
This alone is enough to kill the theory, but the session went further and
got direct evidence of the actual mechanism.

**Packet capture during reproduced slow transfers** — `tcpdump -i eth0 -s 0
host <test-client-ip> and tcp port 443 -w /tmp/eq_capture.pcap` on the host,
run for 35s while firing 4 more spaced single-request texture fetches from
the test client. All 4 were captured mid-transfer (totals 1.9s–4.5s). No
`tshark`/`scapy` on the host or in the local toolchain, so the pcap was
converted with `tcpdump -r ... -tttt` and parsed with a small Python script
grouping packets by TCP stream and flagging repeated (seq_start, seq_end)
ranges per direction as retransmissions.

**Every single one of the 4 streams — including the "fast" 1.9s one — showed
genuine server→client TCP retransmissions**, recovered via SACK (not RTO
timeouts — the gaps between original and retransmitted segments were
sub-second, consistent with fast-retransmit, not a full retransmission
timeout). Example from the slowest stream (client port 21076, 4.546s total):
14 distinct retransmitted segments over the life of the transfer, e.g. `seq
65980:68460` (a 2480-byte segment) retransmitted at t+0.511s, `seq
352420:354900` retransmitted at t+2.907s, etc. The "fast" stream (port 9751,
1.944s) still had 6 retransmitted segments — fewer, hence faster, but not
zero. This is real, measurable packet loss on the wire, not an artifact of
curl's timing.

**Ruled out as a local/host-side cause of that loss:**

| Check | Command | Result |
|---|---|---|
| fq_codel qdisc drops on the egress interface | `tc -s qdisc show dev eth0` | `Sent 75015236948 bytes 127811800 pkt (dropped 0, ...)`, `drop_overlimit 0`, `ecn_mark 0` — **zero packets dropped by the local qdisc in 44 days of uptime.** Whatever is dropping these segments, it isn't happening on this host's own egress queue. |
| CPU steal time (noisy-neighbor hypervisor contention) | `vmstat 1 5` | `st` column reads 0 on every sample. No hypervisor-level CPU starvation. |
| NIC-level errors/drops | `ethtool -S eth0` / `ip -s link show eth0` | All error/dropped/fifo/collision counters at 0. |
| ECN black-holing (fq_codel has `ecn` enabled) | `tcpdump -v` for IP ToS bits; `sysctl net.ipv4.tcp_ecn` | Every captured packet has `tos 0x0` — no ECT/CE bits ever set, so ECN was never negotiated on these connections (`tcp_ecn=2`, i.e. server-side ECN is only used if the client requests it, and curl didn't). This isn't an ECN-blackhole problem. |

So the loss is happening **beyond the VPS's own NIC** — somewhere in the
network path outbound from Hetzner, not in anything under this host's or the
app's control.

**Ruled out as "my test network is just generally bad" or "Hetzner's network
is bad in general":**

| Test | Result |
|---|---|
| VPS → cachefly.cachefly.net (external CDN, 10MB file) | `SIZE:10485760 TIME:0.060s SPEED:174MB/s` — blazing fast, zero indication of a general host/provider-wide throughput problem. |
| Test client → cachefly.cachefly.net (same 10MB file) | `SIZE:10485760 TIME:4.018s SPEED:2.6MB/s` (~21 Mbit/s) — normal, healthy throughput for the test client's own connection. |
| Test client → earth-clock (VPS), 452KB–1.9MB files | 110–305 KB/s sustained, with confirmed retransmissions on every transfer. |

Both ends are independently fine talking to a third party (cachefly). Only
the VPS↔test-client path specifically is bad. `ipinfo.io` puts the VPS at
Nuremberg, DE (`AS24940 Hetzner Online GmbH`) and the test client at
Amsterdam, NL (`AS3257 GTT Communications`); TCP connect time was a normal
62ms, so this isn't a long-haul-latency effect either — it's specifically
lossy throughput on (at least) the Hetzner↔GTT path, most consistent with a
congested or under-provisioned **inter-AS peering/transit link**, not a fault
in earth-clock, CapRover, the shared nginx config, or the VPS host itself.
(`mtr`/`traceroute`/`ping` to characterize the exact hop couldn't be run —
ICMP appears to be filtered or deprioritized outbound from this host, `ping
-c5 1.1.1.1` returned 100% loss/0 received, so no ICMP-based hop-by-hop trace
was possible in this session. TCP-based tools would be needed for that; not
attempted here.)

**Congestion control note (not yet acted on):** the host is running `cubic`
(loss-based, halves cwnd on every loss event) via `net.ipv4.tcp_congestion_control
= cubic`; `net.ipv4.tcp_available_congestion_control` only lists `reno cubic`
— the `tcp_bbr` module isn't loaded. BBR handles a lossy/congested path far
more gracefully than cubic (it doesn't slash the window on isolated loss
events) and is compatible with the `fq_codel` qdisc already in use. This
would not fix the underlying loss but would very likely reduce how badly a
lossy segment of path degrades total transfer time. **Not applied** — it's a
host-wide sysctl change affecting every app on the VPS, and per the standing
rule on this investigation, host-level production changes need Caspar's
go-ahead first.

**Conclusion**: the self-inflicted-by-testing-traffic theory is dead — there
is no rate-limiting/banning mechanism on the host that could produce it, and
the problem reproduces cleanly under a single-request, no-concurrency, fresh-
IP test pattern. In its place: this is genuine, confirmed (via packet
capture) TCP segment loss on the network path outbound from the Hetzner VPS,
localized to beyond the host's own NIC (all host-side drop/error/CPU-steal
counters are clean), most likely an inter-AS peering issue between Hetzner
(AS24940) and at least GTT Communications (AS3257) — and plausibly other
transit paths too, which would explain why Caspar sees it from his home
connection. This is a real hosting/network-path problem, not an inference
from timing variance alone; it is not fixable from the app, CapRover config,
or anything in this repo. The two concrete next actions are outside this
repo's scope: (1) Caspar could open a support ticket with Hetzner including
this packet-capture evidence (host-side counters are clean, so the loss is
demonstrably not local to the VM — that's useful ammunition for support to
investigate their peering); (2) with Caspar's sign-off, try switching the
host to BBR congestion control as a mitigation (`modprobe tcp_bbr; sysctl -w
net.ipv4.tcp_congestion_control=bbr` — reversible instantly by setting it
back to `cubic`, no restart required, affects all apps on the box).
Meanwhile the already-shipped `resilientTexture.ts` mitigation (indefinite
retry with backoff, visible status) is the right app-level response to a
problem of this shape, and should stay as-is.

### 2026-07-21 update, part 2 — Hetzner support requirements: opened outbound ICMP, ran the required bidirectional MTR, ran MTU black-hole check

Pasting the draft support ticket in surfaced two Hetzner docs the ticket
needs to follow: their [packet-loss diagnostic
process](https://docs.hetzner.com/cloud/servers/network-diagnosis-and-report-to-hetzner/#packet-loss)
(requires bidirectional `mtr -s 1000 -r -c 200 <target>`, 200 packets each
direction, submitted as file attachments — not something we had) and their
[MTU troubleshooting
guide](https://docs.hetzner.com/networking/networks/troubleshooting/mtu/)
(`ping -M do -s 1422/1423` to check for a PMTUD black hole).

**Blocker found and fixed**: neither could be attempted at all, because the
Cloud Firewall's outbound rules had no ICMP allowed (confirmed earlier as
the reason `ping`/`mtr` got 100% loss in the 2026-07-20 investigation — it
wasn't the network, it was this firewall). Caspar added one new outbound
rule (protocol ICMP, Any IPv4 + Any IPv6, no port) — low-risk, outbound-only,
doesn't open any new inbound attack surface. Confirmed working immediately
(`ping 1.1.1.1` from the host: 0% loss).

**MTU / PMTUD black-hole check — ruled out.** `ping -c 5 -M do -s 1422` and
`-s 1423` to the actual test client (not a random third party) both came
back with the *same* ~20% loss rate — no sharp cliff between the two sizes,
which is what a real black-hole would show (one size clean, the other
failing consistently). A plain small ping (84 bytes, 20 packets) to the same
target came back 0% loss. Same pattern as the TCP-level finding via a
completely different protocol: small packets essentially always get
through, larger ones have a real, non-deterministic chance of loss — not an
MTU-threshold effect.

**Bidirectional MTR — mixed, not a clean single answer, but two concrete
leads inside Hetzner's own network.**

*Server → test client* (`mtr -s 1000 -r -c 200 <target>` from the host):
every hop through Hetzner's own backbone (Nuremberg) and through GTT
Communications' network (Frankfurt → Amsterdam) showed 0% loss; loss (7.5%)
appeared only at the very last hop, the destination itself — the classic
signature of the *destination* deprioritizing ICMP replies, not a path
problem. This test's target (a sandbox client) turned out to be the wrong
one to prioritize — Caspar's real connection is what actually matters — but
it's a useful negative result for GTT's network specifically.

*Server → Caspar's real IP* (re-run targeting his actual connection):
`_gateway` → `101511.your-cloud.host` → (2 non-replying hops, normal) →
`core-spine-rdev2.cloud1.nbg1.hetzner.com` **0.0%** → `core11.nbg1.hetzner.com`
0.0% → **`core6.par.hetzner.com` (Hetzner's Paris PoP) — 6.0% loss** →
`core7.lon.hetzner.com` 0.0% (heals immediately) → `195.66.231.49` (LINX
peering) 0.0% → non-replying hop near Caspar's end.

*Caspar → server* (WinMTR from his home connection, targeting the server's
public IP `91.98.123.241`): his ISP → LINX peering (`195.66.231.49`, the
same IP seen in the reverse direction — confirms both traces share this
peering point) → Core-Backbone GmbH (a transit provider, London PoP then
Nuremberg PoP) → handoff to Hetzner → `core12.nbg1.hetzner.com` 0.0% →
**`core-spine-rdev2.cloud1.nbg1.hetzner.com` — 37.0% loss (85 sent, 54
received)** → `101511.your-cloud.host` 0.0% (heals immediately).

**The honest read**: the *same* spine router (`core-spine-rdev2.cloud1.nbg1.hetzner.com`)
shows 0% loss in the server→client direction but 37% in the client→server
direction — not a clean "same hop confirmed both ways" result. Instead, each
direction implicates a *different* specific router (the Nuremberg spine one
way, the Paris core router the other), each individually showing the classic
"isolated loss at one hop, gone by the very next hop" pattern. That pattern
is genuinely ambiguous from outside the network — it's exactly as consistent
with a router deprioritizing its own ICMP-reply generation under load (not
real forwarding-plane loss) as it is with a real, low-grade forwarding issue
specific to that router. An external MTR trace cannot distinguish between
those two explanations; only Hetzner's own internal interface/queue counters
on those two specific routers can. Which is precisely why their intake
process asks for these traces rather than accepting inferred conclusions —
this hands their network team two concrete, named routers
(`core-spine-rdev2.cloud1.nbg1.hetzner.com` and `core6.par.hetzner.com`) to
check directly, rather than "something on your network is dropping
packets."

Raw trace files (server → sandbox test client, server → Caspar's real IP,
and Caspar's WinMTR export) are session working files, not committed to this
repo — they contain Caspar's home IP address, which doesn't belong in git
history. Ready to attach directly to the Hetzner support ticket when it's
submitted.

### 2026-07-21 update, part 1 — ruled out DNS, Hetzner traffic quota, and Cloud Firewall; confirmed the loss is genuinely random, not a targeted/size-based block

Caspar raised a fair objection to the "real network loss" conclusion above:
"dropping packets doesn't sound like the right explanation — the textures
are being blocked, everything else is served fine." That's worth testing
directly rather than asserting past, since a deliberate throughput-based
rate-limiter (burst credit, then throttle) and genuine random packet loss
both *look* like retransmissions in a packet capture, but imply different
causes. Three things were checked this round:

**Ruled out: Hetzner traffic quota / bandwidth throttling.** Caspar pulled
the server's network traffic graph from the Hetzner Cloud console. Total
traffic over the full month shown never exceeds ~1 MBps even at its single
peak (a Reddit-driven traffic spike in mid-July, several days before the
actual incident) — nowhere near enough cumulative volume to trigger any
plan's included-traffic throttle. The graph also shows no traffic anomaly
at all during the actual incident window — flat baseline throughout —
which is itself consistent with the loss being independent of load, not
caused by it.

**Ruled out: Hetzner Cloud Firewall.** Caspar pulled the firewall rule
table: standard inbound allow-list (22/25/80/110/143/443/465/587/993/995,
plus 2229/3000 restricted to a Tailscale CGNAT range) and a narrow outbound
allow-list (25/53(tcp only)/80/443 — no UDP, no ICMP at all). The missing
outbound ICMP/UDP explains why the earlier `ping`/`mtr` attempts got 100%
loss (straightforwardly blocked by this firewall, not a mystery). But
because Hetzner's Cloud Firewall — like all security-group-style cloud
firewalls — is stateful, return traffic for an already-allowed inbound
connection (the actual texture bytes going back to a browser on the
already-permitted `tcp/443` inbound rule) is automatically passed regardless
of the outbound rule list. So this firewall isn't touching the traffic
that's actually slow.

**Ruled out: the Joker DNS change for `shop.onemonkey.org` (Fourthwall).**
Checked directly: `onemonkey.org`'s nameservers are still Joker's own
(`x/y/z.ns.joker.com`, no migration to any CDN/proxy provider).
`onemonkey.org` and `earth-clock.onemonkey.org` both still resolve directly
to `91.98.123.241` (unchanged). `shop.onemonkey.org` resolves to a
completely separate IP (`34.117.223.165`, a Google Cloud range, consistent
with Fourthwall hosting it themselves) — an isolated new record for
unrelated infrastructure, touching nothing else in the zone. The SOA serial
(`2026071381`) reads as a 2026-07-13 last-edit date in Joker's standard
convention, about a week before the incident. Once a client resolves to the
correct IP and opens a TCP connection there, the DNS provider is out of the
picture for that connection's data-plane performance — there's no
mechanism by which an unrelated subdomain's DNS record could affect it.

**Confirmed: this is genuine random per-packet loss, not a targeted block
on textures and not a deterministic size-based throttle.** Fresh packet
capture (`tcpdump` on the host, same methodology as before) during 3 small
(`index.html`, 805B) and 3 large (`earth_daymap_2k.jpg`, 463KB) requests,
fired alternately from the same fresh test client:

| Request | Size class | Packets | Payload retransmissions | First loss offset |
|---|---|---|---|---|
| small #1 | 805B | 20 | 0 (2 harmless duplicate-FIN retransmits at teardown only) | n/a |
| small #2 | 805B | 19 | 0 | n/a |
| small #3 | 805B | 19 | 0 | n/a |
| large #1 | 463KB | 516 | 11 | ~136KB in |
| large #2 | 463KB | 518 | 7 | ~44KB in |
| large #3 | 463KB | 512 | 6 | ~272KB in |

All three small transfers had **zero actual payload data loss** — the one
that took longer (1.17s) did so because it was a fresh TLS handshake plus
two harmless duplicate FIN packets at connection close, not lost response
bytes. All three large transfers lost multiple real payload segments, but
critically **at wildly different byte offsets each time** (44KB, 136KB,
272KB into otherwise-identical downloads). A deliberate throughput-based
rate-limiter (burst allowance, then throttle) would trip at a consistent
threshold every time, because it's enforcing a fixed policy — this doesn't.
Random loss on a lossy path hits wherever it happens to hit, which is
exactly this pattern. This also resolves why it looked textures-specific:
small requests are short enough (a handful of packets) to usually never
encounter the underlying loss rate at all, while anything sending enough
packets (textures, the JS bundle, or — per the 2026-07-20 update above — the
larger earthquakes JSON feed) has a real chance of being unlucky.

Net: the 2026-07-20 conclusion (real, external, random packet loss between
the Hetzner VPS and outside clients, not fixable from this repo/CapRover)
stands, now with direct evidence against the two most plausible alternative
explanations (a deliberate rate-limiter, and several Hetzner-console-visible
causes: traffic quota, Cloud Firewall, unrelated DNS changes). Nothing left
to check from this repo or the Hetzner console — the support ticket with
this packet-capture evidence is the remaining path forward.

## Problem 3 — shipped: resilient texture loading (mitigation, not a root-cause fix)

Whatever the root cause turns out to be, the app previously had no defense
against a slow/stalled texture load at all — a stalled request just left the
WebGL texture "incomplete" forever, which samples as solid black once bound
to a material's `map`, regardless of the material's base color. First-pass
mitigation (v0.3.1, see Problem 1) only fixed the *known* bug; it didn't add
any resilience to the network condition itself. Follow-up (v0.3.2):

- New `frontend/src/scene/resilientTexture.ts`: wraps `THREE.TextureLoader`
  with a 15s per-attempt timeout and **indefinite** retry with backoff (capped
  at 30s between attempts) — it does not give up permanently, since the
  network condition this mitigates is expected to be transient.
- After 3 failed/timed-out attempts, the failure is reported as a visible
  status rather than only logged to the console — wired into the app's
  existing Data panel (`DataRegistry`/`DataPanel`, the same ✓/✗/⋯ status
  mechanism every other data layer already uses). "day map", "night map",
  and "moon" — previously hardcoded as permanently `bundled: true` (a static
  grey dot, no real health tracking) — now show real ⋯ pending → ✓ ok / ✗
  error status, with the retry attempt count visible in the detail column.
- Confirmed via Playwright with a simulated persistent failure (route abort):
  2 quiet retries, then a visible `✗ slow/unreachable after 3 attempts —
  retrying…` that stays visible while attempts keep climbing in the
  background; confirmed self-heals to `✓` immediately once the simulated
  network condition clears, no reload needed.
- `Globe.ts` / `Moon.ts`: materials still start with a placeholder color
  (muted ocean/land tint for Earth, grey for the Moon) and swap in the real
  texture once it actually loads, as in v0.3.1.

This does not fix whatever is actually causing transfers to be slow — it
makes the app degrade visibly and recover automatically instead of silently
rendering broken while that's ongoing (or being investigated).

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
