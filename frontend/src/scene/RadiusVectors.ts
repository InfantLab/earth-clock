import * as THREE from "three";

/**
 * The earth-clock "beams" — visible pointers from Earth's centre toward the sun and moon.
 *
 * Plus a fixed, narrow cyan rod through the true poles showing Earth's axis of rotation,
 * with N / S labels at its tips and a ring + arrowhead near N showing the spin direction.
 *
 * Two visual modes:
 *
 *   • **3D (globe view)**: a tapered glowing cylinder from Earth's surface outward in the
 *     direction of the sun (warm gold) and another toward the moon (pale silver). Thicker
 *     at the base, thinner at the tip — reads as a literal sundial-like gnomon poking out
 *     of the planet. Under time-warp the sun-beam sweeps a full rotation per simulated day.
 *
 *   • **2D (flat map)**: a coloured disc at the sub-solar point (gold) and a phase-aware
 *     shaded disc at the sub-lunar point (silver, with terminator drawn from the current
 *     moon-phase angle). Same conceptual move; the dot's longitude is the "current hour"
 *     the body is overhead.
 *
 * Lives in the inertial world frame in both modes — no axial-tilt or daily-rotation
 * adjustments. main.ts feeds it the already-computed sun/moon world vectors and the
 * sub-solar / sub-lunar geographic coordinates each frame.
 *
 * Menu label: "Beams" (was "Hands" pre-v003). The class name stays `RadiusVectors` for
 * historical reasons but the visible UX is the beams.
 */
export class RadiusVectors {
  /** 3D meshes — tapered cylinders parented under a group added to the main scene. */
  readonly mesh: THREE.Group;
  /** Flat-map meshes — coloured disc + phase-aware moon disc parented under a group
   *  added to FlatMap.scene. */
  readonly flatMesh: THREE.Group;

  private readonly sunBeam: THREE.Mesh;
  private readonly moonBeam: THREE.Mesh;
  private readonly axis: THREE.Group;
  private readonly sunDot: THREE.Mesh;
  private readonly moonDot: THREE.Mesh;
  private readonly moonPhaseMat: THREE.ShaderMaterial;

  private static readonly SUN_COLOR  = 0xffcc44;
  private static readonly MOON_COLOR = 0xc8d8f0;
  private static readonly AXIS_COLOR = 0x33e0ff;

  constructor() {
    this.mesh = new THREE.Group();
    this.flatMesh = new THREE.Group();

    // ---- 3D beams ----
    // Tapered cylinder via CylinderGeometry(radiusTop, radiusBottom, height). Beam
    // sits along +Y in its own local frame and we rotate it via lookAt() each frame to
    // point at the body. depthWrite=false avoids breaking the cloud/atmosphere alpha
    // composite; depthTest=true so the inside-Earth portion is correctly occluded.
    this.sunBeam  = makeBeam(RadiusVectors.SUN_COLOR,  0.7);
    this.moonBeam = makeBeam(RadiusVectors.MOON_COLOR, 0.55);
    this.mesh.add(this.sunBeam, this.moonBeam);

    // Rotation axis: one narrow rod through both true (geographic) poles, poking out
    // AXIS_BEAM_LENGTH beyond each. Unlike the sun/moon beams it never moves — the spin
    // axis is fixed in the inertial frame — so it's oriented once here. Same Z-tilt as
    // Globe's tilted parent group; depthTest hides the portion inside the planet.
    this.axis = makeAxis(RadiusVectors.AXIS_COLOR, 0.7);
    this.mesh.add(this.axis);

    // ---- 2D flat-map dots ----
    // Sun dot: small gold disc. z=+0.01 keeps it just above the plane's other content
    // (clouds, coastlines) without poking through Three.js's transparent sort against
    // the day/night texture beneath. Slightly bigger than the previous build because at
    // 0.018 plane-units the dot was a few pixels — too small to read.
    this.sunDot = makeFlatDot(RadiusVectors.SUN_COLOR, 0.95);
    this.flatMesh.add(this.sunDot);

    // Moon dot: phase-aware shaded disc. Matches the sun dot's size for visual parity
    // (the sun and moon both have ~0.5° apparent diameter in the real sky, so they
    // should read as comparable markers on the flat map). Shader draws an illuminated
    // half + dark half with the terminator at the current phase angle; the terminator's
    // smoothstep is tight enough that the phase reads clearly at FLAT_DOT_RADIUS.
    this.moonPhaseMat = makeMoonPhaseMaterial();
    this.moonDot = new THREE.Mesh(
      new THREE.CircleGeometry(FLAT_DOT_RADIUS, 32),
      this.moonPhaseMat,
    );
    this.moonDot.position.z = 0.01;
    this.flatMesh.add(this.moonDot);
  }

  /** Sun direction in world space (any non-zero magnitude — normalised inside).
   *  Orients the sun beam along the sun direction with its base at Earth's surface. */
  setSunDirection(dir: THREE.Vector3) {
    orientBeam(this.sunBeam, dir);
  }

  /** Moon position in world space (Earth radii). Beam points at the moon. */
  setMoonPosition(pos: THREE.Vector3) {
    orientBeam(this.moonBeam, pos);
  }

  /** Sub-solar lat/lon in degrees — drives the flat-map gold dot. */
  setSubSolar(latDeg: number, lonDeg: number) {
    this.sunDot.position.set(lonDeg / 180, latDeg / 180, 0.01);
  }

  /** Sub-lunar lat/lon in degrees — drives the flat-map phase-aware disc. */
  setSubLunar(latDeg: number, lonDeg: number) {
    this.moonDot.position.set(lonDeg / 180, latDeg / 180, 0.01);
  }

  /**
   * Update the moon-phase shader on the flat-map disc.
   *
   * @param illuminatedFraction 0..1 — fraction of the moon's disc currently lit
   * @param waxing true if waxing (right side lit in northern hemisphere), false if waning
   */
  setMoonPhase(illuminatedFraction: number, waxing: boolean) {
    this.moonPhaseMat.uniforms.uIllumFraction.value = THREE.MathUtils.clamp(illuminatedFraction, 0, 1);
    this.moonPhaseMat.uniforms.uTerminatorXSign.value = waxing ? 1.0 : -1.0;
  }

  /** Toggle both the 3D beams and the flat-map dots. */
  setVisible(v: boolean) {
    this.mesh.visible = v;
    this.flatMesh.visible = v;
  }

  /** Sun beam (3D) visibility — gated by the Beams toggle only. */
  setSunBeamVisible(v: boolean)  { this.sunBeam.visible  = v; }
  /** Moon beam (3D) visibility — gated by BOTH Moon (target exists) and Beams. */
  setMoonBeamVisible(v: boolean) { this.moonBeam.visible = v; }
  /** Rotation axis (3D rod, N/S labels, spin ring) visibility — gated by the Beams toggle only. */
  setAxisBeamVisible(v: boolean) { this.axis.visible = v; }
  /** Sun dot (flat-map) visibility — gated by the Beams toggle only. */
  setSunDotVisible(v: boolean)   { this.sunDot.visible   = v; }
  /** Moon dot (flat-map) visibility — gated by the Moon toggle (the moon dot is the
   *  moon's equivalent rendering in 2D, so it belongs with Moon, not with Beams). */
  setMoonDotVisible(v: boolean)  { this.moonDot.visible  = v; }
}

// ---- helpers ----

/** Length the 3D beams extend, in Earth radii. Base sits at the surface (r=1), tip at
 *  r=1+BEAM_LENGTH. Short enough to read as a gnomon sticking out of the planet rather
 *  than dominating the scene; can shorten if it looks weird. */
const BEAM_LENGTH = 0.6;
/** Base / tip cone-radii in Earth radii. Slight taper, not full point — reads as a beam
 *  rather than a pencil. */
const BEAM_BASE_RADIUS = 0.018;
const BEAM_TIP_RADIUS  = 0.006;
/** How far the axis beam extends beyond each pole, in Earth radii. */
const AXIS_BEAM_LENGTH = 0.5;
/** Axis beam radius — narrower than the sun/moon beams so it reads as a line, not a gnomon. */
const AXIS_BEAM_RADIUS = 0.005;
/** Spin-direction ring: sits around the rod partway out from the north pole. */
const AXIS_RING_HEIGHT = 1 + AXIS_BEAM_LENGTH * 0.55;
const AXIS_RING_RADIUS = 0.1;
const AXIS_RING_TUBE   = 0.004;
/** How much of the circle the ring covers — the gap leaves room for the arrowhead. */
const AXIS_RING_ARC    = Math.PI * 1.7;
/** World size of the N / S label sprites, in Earth radii. */
const AXIS_LABEL_SIZE  = 0.09;
/** Earth's obliquity. Must match Globe.ts and main.ts — search for AXIAL_TILT_RAD. */
const AXIAL_TILT_RAD = 23.44 * Math.PI / 180;
/** Radius of the flat-map sun dot in plane units (the 2×1 plane is 2 wide × 1 tall).
 *  Sized for ~6 px on a 360 px wide mobile screen at default zoom; larger on desktop. */
const FLAT_DOT_RADIUS = 0.036;

function makeBeam(color: number, opacity: number): THREE.Mesh {
  // CylinderGeometry(radiusTop, radiusBottom, height, radialSegments). Base is at -Y/2,
  // top at +Y/2 — we offset positions so base sits at the origin and beam extends along +Y.
  const geom = new THREE.CylinderGeometry(BEAM_TIP_RADIUS, BEAM_BASE_RADIUS, BEAM_LENGTH, 16);
  // Shift so the base of the cone is at y=0 (was at y=-BEAM_LENGTH/2) — easier to anchor.
  geom.translate(0, BEAM_LENGTH / 2, 0);
  const mat = new THREE.MeshBasicMaterial({
    color, transparent: true, opacity, depthWrite: false,
  });
  const mesh = new THREE.Mesh(geom, mat);
  mesh.frustumCulled = false; // bounds change every frame as we re-orient
  return mesh;
}

function makeAxis(color: number, opacity: number): THREE.Group {
  // Built in the equatorial frame (+Y = spin axis, north up), then the whole group gets
  // the same Z-tilt as Globe's parent so it lines up with the true geographic poles.
  const group = new THREE.Group();
  group.rotation.z = AXIAL_TILT_RAD;
  const mat = new THREE.MeshBasicMaterial({
    color, transparent: true, opacity, depthWrite: false,
  });
  const tip = 1 + AXIS_BEAM_LENGTH;

  // Rod: pole to pole plus AXIS_BEAM_LENGTH past each, centred on Earth's centre.
  const rod = new THREE.Mesh(
    new THREE.CylinderGeometry(AXIS_BEAM_RADIUS, AXIS_BEAM_RADIUS, 2 * tip, 12),
    mat,
  );
  rod.frustumCulled = false;
  group.add(rod);

  // Spin ring: a partial torus in the plane orthogonal to the axis, with an arrowhead at
  // the leading end. TorusGeometry lies in local XY, sweeping counter-clockwise about +Z;
  // rotating the ring by −90° about X maps +Z → +Y, so the sweep becomes a positive
  // (right-hand) rotation about the spin axis — i.e. counter-clockwise seen from above
  // the north pole, west → east, matching earthRotationY() increasing with GMST.
  const ring = new THREE.Group();
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = AXIS_RING_HEIGHT;
  ring.add(new THREE.Mesh(
    new THREE.TorusGeometry(AXIS_RING_RADIUS, AXIS_RING_TUBE, 8, 64, AXIS_RING_ARC),
    mat,
  ));
  const arrow = new THREE.Mesh(new THREE.ConeGeometry(AXIS_RING_TUBE * 4, AXIS_RING_TUBE * 10, 12), mat);
  arrow.position.set(
    AXIS_RING_RADIUS * Math.cos(AXIS_RING_ARC), AXIS_RING_RADIUS * Math.sin(AXIS_RING_ARC), 0,
  );
  // Cone points along local +Y; turn it to the ring's tangent at the arc's end.
  arrow.quaternion.setFromUnitVectors(
    _up, new THREE.Vector3(-Math.sin(AXIS_RING_ARC), Math.cos(AXIS_RING_ARC), 0),
  );
  ring.add(arrow);
  group.add(ring);

  // N / S labels just beyond each tip. Sprites always face the camera.
  const n = makeLabel("N", color);
  n.position.y = tip + AXIS_LABEL_SIZE * 0.7;
  const sLabel = makeLabel("S", color);
  sLabel.position.y = -(tip + AXIS_LABEL_SIZE * 0.7);
  group.add(n, sLabel);

  return group;
}

function makeLabel(text: string, color: number): THREE.Sprite {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.font = `bold ${size * 0.8}px system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
  ctx.fillText(text, size / 2, size / 2 + size * 0.04);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: tex, transparent: true, depthWrite: false,
  }));
  sprite.scale.set(AXIS_LABEL_SIZE, AXIS_LABEL_SIZE, 1);
  return sprite;
}

const _up = new THREE.Vector3(0, 1, 0);
const _quat = new THREE.Quaternion();
const _target = new THREE.Vector3();
function orientBeam(beam: THREE.Mesh, target: THREE.Vector3) {
  const len = target.length();
  if (len < 1e-6) return;
  // Anchor the base at Earth's surface in the target direction so the cone protrudes
  // outward from the planet rather than passing through it.
  _target.copy(target).divideScalar(len); // unit direction
  beam.position.copy(_target); // surface point (radius 1)
  // Rotate the local +Y to point along _target.
  _quat.setFromUnitVectors(_up, _target);
  beam.quaternion.copy(_quat);
}

function makeFlatDot(color: number, opacity: number): THREE.Mesh {
  const geom = new THREE.CircleGeometry(FLAT_DOT_RADIUS, 24);
  const mat = new THREE.MeshBasicMaterial({
    color, transparent: true, opacity, depthWrite: false,
  });
  return new THREE.Mesh(geom, mat);
}

/**
 * Tiny moon-phase disc shader for the flat map. Draws a circle with:
 *   - the lit half in pale moonlight white
 *   - the unlit half in a dim slate (still slightly visible so the disc never disappears)
 *   - terminator placed at the current phase's illuminated fraction
 *
 * Standard moon-phase geometry: at illumFraction f, the terminator x-coord (on the
 * normalised unit disc, x in [-1, 1]) is `(1 − 2f) · √(1 − y²)`. The waxing flag tells us
 * which side is lit (right side waxing → first quarter through full; left side waning).
 */
function makeMoonPhaseMaterial(): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uIllumFraction:    { value: 0.5 },
      uTerminatorXSign:  { value: 1.0 }, // +1 waxing (right lit), -1 waning (left lit)
      uLitColor:         { value: new THREE.Color(0xf2eedd) },
      uShadowColor:      { value: new THREE.Color(0x202428) },
    },
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform float uIllumFraction;
      uniform float uTerminatorXSign;
      uniform vec3  uLitColor;
      uniform vec3  uShadowColor;
      varying vec2 vUv;
      void main() {
        vec2 p = vUv * 2.0 - 1.0; // disc-local coords, [-1, 1]²
        float r = length(p);
        if (r > 1.0) discard;

        // Terminator x on the [-1, 1] disc at this y. Real moon's terminator is an
        // ellipse with the same y-extent as the disc and x-axis (1 − 2f) of the radius.
        float xTerm = (1.0 - 2.0 * uIllumFraction) * sqrt(max(0.0, 1.0 - p.y * p.y));

        // Lit if p.x · sign > xTerm · sign. Equivalent to comparing on the correct side.
        float pxSigned   = p.x   * uTerminatorXSign;
        float xTermSigned = xTerm * uTerminatorXSign;
        bool lit = pxSigned > xTermSigned;

        // Soft edge on the terminator so it doesn't alias at small sizes — 0.02 of the
        // disc width is ~half a pixel at typical screen sizes, fine.
        float blend = smoothstep(-0.02, 0.02, (pxSigned - xTermSigned));
        vec3 col = mix(uShadowColor, uLitColor, blend);

        // Anti-alias the disc edge.
        float edge = smoothstep(1.0, 0.97, r);
        gl_FragColor = vec4(col, edge * 0.92);
      }
    `,
    transparent: true,
    depthWrite: false,
  });
}
