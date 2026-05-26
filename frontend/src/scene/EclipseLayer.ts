import * as THREE from "three";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * Renders solar-eclipse shadows on Earth:
 *
 *   - **Umbra disc** — small dark spot where totality is happening *right now*. Centre
 *     position is the world-frame surface point computed by `computeShadow(simulatedTime)`,
 *     fed in via `setLiveShadow()` each frame.
 *   - **Penumbra disc** — large faint dimming around the umbra; the partial-eclipse region.
 *   - **Path of totality** — a precomputed polyline tracing where the umbra has been + will
 *     be over the full eclipse window. Drawn at the eclipse's geographic frame (so it stays
 *     glued to the ground as Earth rotates).
 *
 * Architecture: one parent group (axial tilt), with two sub-groups:
 *   - `liveShadowGroup` — rotates with Earth's *current* `setRotationY` so the umbra/penumbra
 *     discs follow the umbra centre, which we feed in as the *geographic-frame* surface point.
 *   - `pathGroup` — also rotates with Earth so the precomputed path stays geographically anchored.
 *
 * The shadow itself is a translucent shell at r=1.001 whose shader dims pixels based on the
 * great-circle distance from the umbra centre — close = dark (umbra), medium = dim (penumbra).
 */
export class EclipseLayer {
  readonly mesh: THREE.Group;
  private readonly shell: THREE.Mesh;
  private readonly shellMat: THREE.ShaderMaterial;
  private readonly pathLine: THREE.Line;
  private readonly pathMat: THREE.LineBasicMaterial;
  private inner: THREE.Group;

  /** Angular radii in radians (great-circle distance on Earth's surface). */
  // Umbra (path of totality) is ~290 km wide for the 2026 Spain eclipse → half-width
  // 145 km → asin(145/6371) ≈ 0.023 rad ≈ 1.3°. Widening this from the old 0.012 rad
  // (which was tracking a much narrower "centerline-only" idea) so the umbra disc on
  // the globe matches the size of the actual path of totality visually.
  private static readonly UMBRA_ANGULAR_RADIUS = 0.023;
  // Penumbra is ~3 000 km radius → 3000/6371 ≈ 0.47 rad ≈ 27°.
  private static readonly PENUMBRA_ANGULAR_RADIUS = 0.47;

  constructor() {
    this.inner = new THREE.Group();
    // The shell that does the shadow dimming. Slightly above the surface so it doesn't
    // z-fight with the day texture; transparent + depthWrite false so its only effect is
    // alpha-blending dimness onto whatever's behind.
    const geom = new THREE.SphereGeometry(1.001, 96, 48);
    this.shellMat = new THREE.ShaderMaterial({
      uniforms: {
        // Direction to the umbra centre in the *layer's local frame* (which is the
        // geographic frame, since the layer rotates with Earth). Unit vector.
        uShadowDir:       { value: new THREE.Vector3(1, 0, 0) },
        uHasShadow:       { value: 0.0 },
        uUmbraCosCutoff:  { value: Math.cos(EclipseLayer.UMBRA_ANGULAR_RADIUS) },
        uPenumbraCosCutoff: { value: Math.cos(EclipseLayer.PENUMBRA_ANGULAR_RADIUS) },
        uMaxDim:          { value: 0.85 }, // how dark the umbra centre gets
      },
      vertexShader: /* glsl */`
        varying vec3 vNormal;
        void main() {
          // The sphere's vertex positions are already unit-length normals in local space.
          vNormal = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform vec3  uShadowDir;
        uniform float uHasShadow;
        uniform float uUmbraCosCutoff;
        uniform float uPenumbraCosCutoff;
        uniform float uMaxDim;
        varying vec3 vNormal;
        void main() {
          if (uHasShadow < 0.5) discard;
          float cosAng = dot(normalize(vNormal), normalize(uShadowDir));
          // cosAng = 1 at the shadow centre, cos(penumbra) at the penumbra edge.
          if (cosAng < uPenumbraCosCutoff) discard;

          // Dim ramp: solid uMaxDim inside the umbra, smooth fade out through the
          // penumbra to fully transparent at the penumbra edge. Same dark-blue tint
          // for the whole shadow — matches what you actually see during an eclipse
          // (deep dim that softens off, not two coloured regions).
          float dim;
          if (cosAng >= uUmbraCosCutoff) {
            dim = uMaxDim;
          } else {
            float t = (cosAng - uPenumbraCosCutoff) / (uUmbraCosCutoff - uPenumbraCosCutoff);
            dim = uMaxDim * smoothstep(0.0, 1.0, t);
          }
          vec3 color = vec3(0.0, 0.0, 0.05);

          // Diamond-ring at the umbra boundary — a thin, hard-edged warm outline
          // straddling the umbra/penumbra cutoff.
          //
          // CRITICAL: in cos-angle space the entire umbra interior only spans
          // 1 − cos(UMBRA_ANGULAR_RADIUS) ≈ 0.00026, so ringHalfWidth must be
          // *much* smaller than that or the band swallows the whole disc and the
          // umbra reads as solid orange. Mapping cos-distance back to surface
          // arc: at the umbra edge, sin(0.023) ≈ 0.023, so 1° on the surface
          // equals about 0.023 × π/180 = 4 × 10⁻⁴ rad → cos-distance ≈ 0.023 ×
          // 4 × 10⁻⁴ = ~10⁻⁵. Hence the values below: 0.0001 cos-half-width is
          // a ~0.5° band on each side of the boundary, ~1° total — visible but
          // narrow. AA is one-tenth of that for crisp edges.
          float ringDist      = abs(cosAng - uUmbraCosCutoff);
          float ringHalfWidth = 0.00006;    // ~0.3° per side → ~0.6° band total
          float ringEdgeAA    = 0.000010;   // crisp edges
          float ring = 1.0 - smoothstep(ringHalfWidth, ringHalfWidth + ringEdgeAA, ringDist);
          color = mix(color, vec3(1.0, 0.75, 0.30), ring * 0.9);

          gl_FragColor = vec4(color, dim);
        }
      `,
      transparent: true,
      depthWrite: false,
    });
    this.shell = new THREE.Mesh(geom, this.shellMat);
    // Draw the shell BEFORE coastlines / clouds / atmosphere so it never z-fight-flickers
    // over them (both shell and coastlines are transparent + concentric, so the default
    // distance-sort is undefined and flips as the camera moves).
    this.shell.renderOrder = -1;
    this.inner.add(this.shell);

    // Path of totality polyline. Coloured bright orange so it stands out against the
    // dimmed shadow corridor. renderOrder is set above coastlines so the path is always
    // visible on top — without this, transparent sort flips and the path winks in/out.
    this.pathMat = new THREE.LineBasicMaterial({
      color: 0xff9933, transparent: true, opacity: 0.9, depthWrite: false,
    });
    this.pathLine = new THREE.Line(new THREE.BufferGeometry(), this.pathMat);
    this.pathLine.renderOrder = 2;
    this.inner.add(this.pathLine);

    this.mesh = new THREE.Group();
    this.mesh.rotation.z = AXIAL_TILT;
    this.mesh.add(this.inner);
    // Hidden until an active eclipse is loaded + the user toggles the layer on.
    this.mesh.visible = false;
  }

  /**
   * Set the current shadow centre in the *geographic* frame (i.e. the same frame as the
   * earth mesh's local frame after axial tilt + daily rotation). Pass a unit vector and
   * `hasShadow=true`; pass `hasShadow=false` to hide the live discs.
   */
  setLiveShadow(geographicPoint: THREE.Vector3 | null) {
    if (!geographicPoint) {
      this.shellMat.uniforms.uHasShadow.value = 0.0;
      return;
    }
    this.shellMat.uniforms.uShadowDir.value.copy(geographicPoint).normalize();
    this.shellMat.uniforms.uHasShadow.value = 1.0;
  }

  /** Number of slerp-interpolated points to insert between each pair of input waypoints
   *  when building the path-of-totality polyline. NASA paths arrive as sparse 9-11 point
   *  centerlines; without subdivision the rendered "line" is a sequence of straight 3D
   *  chords through the planet, which reads as a broken zigzag against the curved
   *  surface. 24 sub-segments per waypoint pair = ~220 total points for the 2026 path
   *  → smooth-looking great-circle arc. */
  private static readonly PATH_SUBDIVISIONS_PER_SEGMENT = 24;

  /**
   * Replace the path-of-totality polyline. Pass points in the *geographic* frame.
   * Each consecutive pair is interpolated with slerp (great-circle interpolation on
   * the unit sphere) so the rendered line follows Earth's curvature.
   */
  setPath(geographicPoints: THREE.Vector3[]) {
    if (geographicPoints.length === 0) {
      this.pathLine.geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(0), 3));
      return;
    }
    // Lift the path slightly above the shadow shell so the orange line draws on top.
    const R = 1.0015;
    const subs = EclipseLayer.PATH_SUBDIVISIONS_PER_SEGMENT;
    // Output point count: each segment between adjacent inputs contributes `subs` new
    // points + the inputs themselves at the seams. Last input added explicitly at the end.
    const segmentCount = geographicPoints.length - 1;
    const totalPoints  = geographicPoints.length === 1 ? 1 : segmentCount * subs + 1;
    const positions    = new Float32Array(totalPoints * 3);

    const a = new THREE.Vector3();
    const b = new THREE.Vector3();
    const out = new THREE.Vector3();

    let cursor = 0;
    const writeUnit = (v: THREE.Vector3) => {
      positions[cursor * 3]     = v.x * R;
      positions[cursor * 3 + 1] = v.y * R;
      positions[cursor * 3 + 2] = v.z * R;
      cursor++;
    };

    if (geographicPoints.length === 1) {
      a.copy(geographicPoints[0]).normalize();
      writeUnit(a);
    } else {
      for (let i = 0; i < segmentCount; i++) {
        a.copy(geographicPoints[i]).normalize();
        b.copy(geographicPoints[i + 1]).normalize();
        // Slerp: spherical linear interpolation between two unit vectors.
        //   omega = angle between a and b; if very small, fall back to lerp+normalize
        //   to avoid numerical instability.
        const dot   = THREE.MathUtils.clamp(a.dot(b), -1, 1);
        const omega = Math.acos(dot);
        const sinOmega = Math.sin(omega);
        for (let j = 0; j < subs; j++) {
          const t = j / subs;
          if (sinOmega < 1e-6) {
            // Adjacent points are essentially coincident — linear interpolation is fine.
            out.copy(a).lerp(b, t).normalize();
          } else {
            const wa = Math.sin((1 - t) * omega) / sinOmega;
            const wb = Math.sin(t * omega) / sinOmega;
            out.set(
              a.x * wa + b.x * wb,
              a.y * wa + b.y * wb,
              a.z * wa + b.z * wb,
            );
            // Already unit length within float precision; explicit normalize is cheap insurance.
            out.normalize();
          }
          writeUnit(out);
        }
      }
      // Final endpoint.
      b.copy(geographicPoints[segmentCount]).normalize();
      writeUnit(b);
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.computeBoundingSphere();
    this.pathLine.geometry.dispose();
    this.pathLine.geometry = geom;
  }

  /** Rotate the layer's geographic frame to match Earth's current spin. */
  setRotationY(angle: number) {
    this.inner.rotation.y = angle;
  }

  /** Show/hide just the precomputed path polyline (independent of the layer's overall
   *  visibility). main.ts gates this on whether the simulated time is anywhere near
   *  the eclipse window — drawing a static "future eclipse" path over a globe on a
   *  random Wednesday is more confusing than useful. */
  setPathVisible(v: boolean) {
    this.pathLine.visible = v;
  }
}
