# Credits

Canonical list of every external asset, library, and idea used in **orrery**. When the app gains a visible About / credits panel, every entry below with `attribution_required: true` MUST appear there. Public-domain entries are courtesy credits — legally optional, ethically right.

Update this file every time a new external source is introduced. The whole project is downstream of other people's work; we name them all.

---

## Lineage

**Classic earth-clock** is a fork of [`cambecc/earth`](https://github.com/cambecc/earth) (Cameron Beccario, [@cambecc](https://twitter.com/cambecc)) and remains the reference implementation. Orrery is a ground-up rebuild for 3D / WebGL but inherits the project's purpose, scope, and the astronomical formulae used for sub-solar/sub-lunar computation.

- **earth-clock fork**: <https://github.com/infantlab/earth-clock> (Caspar Addyman)
- **Original earth**: <https://github.com/cambecc/earth> (Cameron Beccario, MIT)
- `attribution_required`: yes (MIT requires copyright notice retention; in-app credit also planned out of respect for prior work)

---

## Visual assets

### Earth — daytime surface ([`earth_daymap_2k.jpg`](public/textures/earth_daymap_2k.jpg))
- **Source**: [Solar System Scope textures](https://www.solarsystemscope.com/textures/) — `2k_earth_daymap.jpg`
- **Author**: Solar System Scope (INOVE s.r.o.)
- **License**: CC-BY 4.0 — <https://creativecommons.org/licenses/by/4.0/>
- `attribution_required`: **yes**

### Earth — night-side city lights ([`earth_nightmap_2k.jpg`](public/textures/earth_nightmap_2k.jpg))
- **Source**: [Solar System Scope textures](https://www.solarsystemscope.com/textures/) — `2k_earth_nightmap.jpg`
- **Author**: Solar System Scope (INOVE s.r.o.)
- **License**: CC-BY 4.0
- `attribution_required`: **yes**

### Earth — normal map ([`earth_normal_2048.jpg`](public/textures/earth_normal_2048.jpg))
- **Source**: [Three.js examples](https://github.com/mrdoob/three.js/blob/dev/examples/textures/planets/earth_normal_2048.jpg)
- **Origin**: NASA Blue Marble Next Generation derivative
- **License**: Public domain (NASA imagery)
- `attribution_required`: no, but credited

### Earth — specular/water mask ([`earth_specular_2048.jpg`](public/textures/earth_specular_2048.jpg))
- **Source**: [Three.js examples](https://github.com/mrdoob/three.js/blob/dev/examples/textures/planets/earth_specular_2048.jpg)
- **Origin**: NASA Blue Marble derivative
- **License**: Public domain
- `attribution_required`: no, but credited

### Moon texture ([`moon_1024.jpg`](public/textures/moon_1024.jpg))
- **Source**: [Three.js examples](https://github.com/mrdoob/three.js/blob/dev/examples/textures/planets/moon_1024.jpg) (originally fetched for the classic earth-clock moon-phase overlay; copied into orrery)
- **Origin**: NASA / USGS lunar imagery (1024×512 equirectangular)
- **License**: Public domain
- `attribution_required`: no, but credited

---

## Astronomical formulae

### Sub-solar position (`src/astro/solar.ts`)
- **Method**: Low-precision (~0.01°) sun position from mean longitude, mean anomaly, and obliquity.
- **References**:
  - [NOAA SPA simplified equations](https://gml.noaa.gov/grad/solcalc/calcdetails.html)
  - Paul Schlyter, [How to compute planetary positions](https://www.stjarnhimlen.se/comp/ppcomp.html)
- **License**: Formulae are mathematical facts; references credited courtesy.

### GMST (Greenwich Mean Sidereal Time)
- **Reference**: USNO simplified GMST formula (`18.697374558 + 24.06570982441908 × d`)
- **License**: Public formulation.

### Lunar position (`src/astro/lunar.ts`)
- **Method**: Schlyter simplified orbital elements (~1–2° accuracy). Returns geocentric RA/dec/distance; we use it to place the moon mesh in 3D.
- **Reference**: Paul Schlyter, [How to compute planetary positions](https://www.stjarnhimlen.se/comp/ppcomp.html).
- **License**: Mathematical formulae; reference credited courtesy.

---

## Software libraries

| Package | Version | License | Use |
|---|---|---|---|
| [three](https://github.com/mrdoob/three.js) | ^0.170 | MIT | WebGL renderer, scene graph |
| [vite](https://vitejs.dev/) | ^5.4 | MIT | Dev server / bundler |
| [typescript](https://www.typescriptlang.org/) | ^5.6 | Apache-2.0 | Language |

License texts ship via `node_modules` and `npm`. For the published site we'll bundle a single concatenated `THIRD_PARTY_LICENSES.txt`.

---

## Planned sources (not yet integrated)

Anything below moves up into the active sections when we actually use it.

### Star map / skybox (Phase 3)
- **Candidate**: Tycho-2 Catalogue (ESA) — public domain, or [NASA Deepstar](https://svs.gsfc.nasa.gov/4851) cubemap.
- **Action when used**: add full attribution; cubemap files go in `public/textures/sky/`.

### Weather data (Phase 1)
- **Source**: NOAA GFS forecast model via the existing earth-clock data pipeline.
- **Note**: NOAA outputs are public domain, but the classic project's data extraction scripts (`grib2json` + custom processing) belong to Cameron Beccario / contributors. Whatever pipeline orrery ends up using — re-using the classic one or a fresh one — must credit the upstream tools.

### Planetary surface textures (Phase 3)
- **Likely source**: Solar System Scope textures (CC-BY 4.0) for Mars, Jupiter, etc., to keep one consistent visual style.
- **Action when used**: each planet texture gets its own entry above, attribution to Solar System Scope.

---

## How to add a new source

1. Pick the right section (Visual / Formulae / Library / Data).
2. Include: what it is, where it came from (link), author, license.
3. Mark `attribution_required: yes` if license is anything stricter than public domain / "no attribution required".
4. If the asset ships in the repo (e.g. a texture in `public/`), keep the file path next to it.
5. Update the in-app About panel when one exists.
