# Handover: find the real cause of earth-clock's slow/erratic asset loading

**2026-07-20 update — read this first, it supersedes most of the theory
below.** The previous session's leading theory (self-inflicted by the
investigation's own test traffic, possibly rate-limited) is now **dead** —
checked and ruled out: no fail2ban jail beyond `sshd`, `ufw` inactive, no
CrowdSec, no `limit_req`/`limit_conn` anywhere in the nginx config. The
problem reproduces cleanly with single, well-spaced, non-concurrent requests
from a brand-new IP that had never touched the domain before. A packet
capture on the host during reproduced slow transfers showed genuine TCP
retransmissions (real packet loss, SACK-recovered) on **every** transfer,
fast and slow alike — and all host-side counters that could explain local
loss (fq_codel qdisc drops, NIC errors, CPU steal time) are clean/zero. The
loss is happening beyond the VPS's own NIC, most likely on an inter-AS
peering path between Hetzner (AS24940) and at least one external transit
network (`AS3257 GTT Communications`, confirmed from a test vantage point in
Amsterdam). Full evidence and exact commands: see the "2026-07-20 update" in
[INCIDENT-2026-07-19-slow-transfers.md](INCIDENT-2026-07-19-slow-transfers.md)
under Problem 2. **Not fixable from this repo or CapRover config** — the two
live options are (1) Caspar opens a Hetzner support ticket with the
packet-capture evidence, since host-side counters prove it's not local to the
VM, and (2) with Caspar's explicit sign-off, try switching the host from
`cubic` to `BBR` congestion control as a mitigation (doesn't fix the loss,
but handles it far more gracefully than cubic's halve-the-window-on-loss
behavior) — reversible instantly, no restart needed, but it's a host-wide
change affecting every app on the box, so don't do it without asking first.

---

Written for a fresh agent with no prior context. Caspar is **not convinced**
the leading theory in the incident log is right, and wants a genuinely
skeptical second pass — not a rubber stamp of what's already been concluded,
and not another round of mitigation. The goal of this handover is to get you
oriented fast so you can spend your effort on new ground, not re-deriving
what's already been tested.

**Read [INCIDENT-2026-07-19-slow-transfers.md](INCIDENT-2026-07-19-slow-transfers.md)
first** — it has the full blow-by-blow with exact commands and results. This
document is the condensed, action-oriented version.

## The actual, current problem

`earth-clock.onemonkey.org` sometimes takes 10s+ to load and the 3D globe
renders with a solid black surface (clouds/atmosphere/other layers render
fine — just the Earth's own day/night texture doesn't). Root network
behavior observed: TTFB (time to first byte) is consistently fast (~0.2s),
but the response *body* for larger files (textures, ~250-770KB; the JS
bundle, ~765KB) sometimes takes anywhere from under 1s to 14s to fully
arrive. Small files (JSON, HTML) are unaffected. This is a *bandwidth/
throughput* signature, not a hung connection or an outright failure — the
requests all eventually return `200`.

**This is a live production site.** Be careful: don't push destructive
changes, don't force-redeploy without checking with Caspar first (pushing to
`master` auto-deploys via CapRover), and don't hammer the live domain with
heavy concurrent test traffic without reading the section below on why that
matters.

## What's already fixed (don't re-investigate this part)

A real, confirmed bug shipped this session and is fixed: a stale
`BASE_PATH=/earth-clock` env var on the CapRover config injected a bad
`<base>` tag that broke every relative asset URL. That's been removed from
the CapRover config, and two bad follow-up hotfixes (a compatibility shim, an
emissive-texture hack that broke the night/day terminator) were reverted.
Confirmed fixed and shipped in commit `e4dd098` (v0.3.1). This is **not**
the thing you're investigating — see Problem 1 in the incident doc if you
want the history, but there's nothing left to do there.

## What's already mitigated (also don't re-investigate)

Commits `8c876b6` and `9f9d5aa` (v0.3.2) added resilient texture loading:
`frontend/src/scene/resilientTexture.ts` retries stalled/failed texture
loads indefinitely with capped backoff, and surfaces status (pending →
ok/error, with retry count) in the app's existing Data panel instead of
silently rendering a black sphere forever. This is a good, verified
mitigation for the *symptom* — it does not explain or fix the *cause*. Your
job is the cause.

## What's been ruled out for the root cause (full detail in the incident doc)

In order tested: synchronous GRIB2 parsing blocking Node's event loop (too
fast to explain the stalls, measured ~3.5s for the whole 6-file cycle);
background service (weather/oscar/earthquake) bandwidth contention (stalls
reproduced during a confirmed-quiet 15-minute window with zero background
activity logged); CapRover container CPU/memory limits (`docker stats`
showed 0% CPU, `docker service inspect` showed an empty `Resources:` block);
HTTP/2-specific framing bug (forcing `proxy_http_version 1.1` via the
websocket toggle didn't help, and plain HTTP/1.1 curl reproduces the same
slowness); DNS/CDN routing difference (`earth-clock.onemonkey.org` and
`onemonkey.org` resolve to the identical IP, no CDN in front of either);
Docker Swarm overlay network corruption (it's one network shared by *every*
app on the VPS, not isolated to earth-clock); stale container/network state
from repeated redeploys (a full service restart didn't help); Dockerfile/
dependency drift (no diff since the last known-good build); the app/
container being internally slow (ruled out decisively — `captain-nginx`
hitting the container's internal IP directly took 5ms); the live NGINX
config having earth-clock-specific drift (it's one shared instance-level
template, verified structurally identical to the committed version); and
an unusual TLS certificate (both domains: same CA, same algorithm, same TLS
version, nothing unusual).

**The load-bearing assumption behind several of those tests** — that
`onemonkey.org` (same VPS, different app) was measurably faster than
earth-clock — turned out to be wrong when retested properly: 5 back-to-back
requests to `onemonkey.org` came back just as slow and erratic (5.3s, 8.3s,
5.3s, 8.8s for a 415KB file) as earth-clock. **So whatever this is, it is not
specific to earth-clock's app or config** — it affects (at least) the whole
VPS's outbound path, or possibly something even further upstream/downstream
of that.

## The unproven, currently-leading-by-default theory — treat this with suspicion

**Status as of 2026-07-20: dead.** See the update at the top of this
document — fail2ban/ufw/iptables/CrowdSec/nginx rate-limiting were all
checked and none exist, and the problem reproduces under single-request,
no-concurrency conditions from a fresh IP. Kept below for the historical
record of how the theory arose.

Two things happened late in the investigation that pointed away from a
Hetzner/hosting-provider fault:

1. Tad SSH'd into the host (`caspar-ghost`) and found it healthy: load
   0.11, RAM mostly free, disk 61%, empty error journal, Hetzner's public
   status page showing nothing.
2. After the *investigating agent* (heavy curl testing, concurrent bursts,
   Playwright automation — a lot of repeated traffic against the domain
   over roughly an hour) paused testing for a few minutes, throughput
   recovered to fast and mostly consistent (0.4–1.6s for requests that had
   been taking 3–14s shortly before).

The tempting conclusion is "the investigation's own test traffic was
somehow throttled/rate-limited and that's what looked like a network
problem." **This was never actually verified** — nobody checked for
fail2ban, ufw/iptables rate-limiting rules, CrowdSec, or any other
connection-rate-based mitigation on the host or in CapRover. It's a
plausible story that fits the timing, but it is a hypothesis, not a
finding. Caspar is explicitly skeptical of it. **This is probably the
single most valuable thing for you to actually check**, since nobody has:

```
sudo fail2ban-client status
sudo iptables -L -n -v | grep -i drop
sudo ufw status verbose
```

If something like fail2ban has banned or rate-limited the source IPs used
for testing this session, that would fully explain the recovery-after-pause
pattern *and* mean the "problem" was never really in production traffic's
path at all — worth knowing either way.

## Concrete new angles worth trying (none of these were done)

- **Server-side visibility during a slow request.** Every diagnosis so far
  has been from the outside (curl/browser) or via one internal hop
  (`captain-nginx` → container, which was fast). Nobody has looked at
  nginx's own access/error logs with per-request timing (`$request_time`,
  `$upstream_response_time`) during an actual slow transfer. If CapRover's
  nginx doesn't log those by default, consider temporarily adding a custom
  log format via the per-app "Edit Default NGINX Configurations" override —
  cheap, reversible, and would show exactly where time is spent (upstream
  vs. client-facing) for a real slow request, not an inference from several
  indirect tests.
- **Packet capture during a reproduced slow transfer.** `tcpdump -i any
  port 443 -w capture.pcap` on the host while triggering a slow request
  from outside, then inspect for retransmissions, zero-window events, or
  duplicate ACKs. This would directly confirm or rule out packet loss/
  congestion as the mechanism, rather than inferring it from timing
  variance alone.
- **Check for any rate-limiting/security middleware system-wide** (see
  fail2ban/iptables above) — this is the fastest way to either confirm or
  kill the "self-inflicted by testing" theory outright.
- **Reproduce without any of this session's tooling.** Test from a
  completely fresh vantage point (different ISP/network than both the
  investigating sandbox and Caspar's home connection) with a totally clean,
  low-volume test pattern (a handful of single, well-spaced requests, no
  concurrency, no repeated bursts) and see if the problem is even
  reproducible under "innocent" conditions. If it isn't, that's strong
  evidence for the self-inflicted theory. If it still reproduces cleanly
  under light, spaced-out traffic, the self-inflicted theory is dead and
  something else is going on.
- **CapRover/system-level rate limiting you haven't checked**: CapRover's
  own settings (beyond the per-app "Service Update Override," which was
  confirmed empty) — check if there's an instance-wide nginx rate-limit
  zone (`limit_req_zone`) defined outside the per-app template, or any
  reverse proxy/WAF Caspar may have set up separately from CapRover itself.

## What NOT to do

- Don't re-run the same battery of tests already documented in the incident
  log unless you have a specific reason to doubt a specific result — they're
  reproducible and documented with exact commands.
- Don't push more mitigation code without first trying to find the actual
  cause — that's what this handover is for. If you genuinely exhaust the
  angles above and still can't find a root cause, that's a valid outcome to
  report, but it shouldn't be the first move.
- Don't force a redeploy or restart the production app without checking
  with Caspar — it's live, and gratuitous restarts already didn't help once.

## Update the incident doc as you go

Please add your findings to `INCIDENT-2026-07-19-slow-transfers.md` in the
same style (hypothesis → test → result table, or a new dated section) so the
next person — human or agent — has the full trail. Don't let this handover
doc go stale; if you disprove or confirm the fail2ban/rate-limit theory,
update both this file and the incident log.
