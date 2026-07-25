import * as THREE from "three";

const AXIAL_TILT = 23.44 * Math.PI / 180;

/**
 * The shadow's shading maths, shared verbatim by the 3D shell and the flat-map
 * plane. Both take a surface normal in the *geographic* frame and return the
 * dimming colour + alpha, so the two views cannot drift apart — the ring
 * constants below are delicate enough (see the note inside) that maintaining two
 * copies would be asking for one of them to be wrong.
 *
 * Declares the uniforms it reads, so both materials must supply the same set.
 */
const SHADOW_SHADING_GLSL = /* glsl */`
  uniform vec3  uShadowDir;
  uniform float uHasShadow;
  uniform float uUmbraCosCutoff;
  uniform float uPenumbraCosCutoff;
  uniform float uMaxDim;

  vec4 shadowColorAt(vec3 surfaceNormal) {
    float cosAng = dot(normalize(surfaceNormal), normalize(uShadowDir));
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

    return vec4(color, dim);
  }
`;

/** Flat-map z offsets. The base plane sits at z = 0; these lift our content just
 *  clear of it without reaching the vector overlays (LocationPin ring 0.001,
 *  aurora 0.004, trails 0.005). Render order does the real layering work — z is
 *  only here to avoid coplanar z-fighting with the base plane. */
const FLAT_Z_SHADOW = 0.0003;
const FLAT_Z_PATH   = 0.0035;

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
 *
 * ## Flat map (`flatMesh`)
 *
 * The equirectangular view gets the same treatment via a second plane + polyline,
 * sharing both the shading GLSL and the uniform object with the 3D shell. The
 * flat map *is* the geographic frame (no axial tilt, no daily spin), so `flatMesh`
 * consumes the geographic shadow direction directly and ignores `setRotationY`.
 *
 * Two things fall out of doing this in a shader rather than as a drawn ellipse.
 * The shadow's shape in equirectangular space is exact — the same great-circle
 * distance test, so the umbra stretches correctly toward the poles instead of
 * needing an oval approximation. And longitude wrap-around is free: the plane is
 * 3 world-widths wide and `lon = x·π`, so the trig is periodic and the shadow
 * simply continues onto the wrap copies with no duplicate meshes. The path
 * polyline can't use that trick, so it does get three copies, matching how
 * FlatMap draws its terminator arc.
 */
export class EclipseLayer {
  readonly mesh: THREE.Group;
  /** Equirectangular counterpart of `mesh`, added to `flatMap.scene` by main.ts. */
  readonly flatMesh: THREE.Group;
  private readonly shell: THREE.Mesh;
  private readonly shellMat: THREE.ShaderMaterial;
  private readonly pathLine: THREE.Line;
  private readonly pathMat: THREE.LineBasicMaterial;
  private inner: THREE.Group;
  /** Shared by the three wrap-around copies, so one geometry update moves all of them. */
  private flatPathGeom: THREE.BufferGeometry;
  private readonly flatPathLines: THREE.LineSegments[];

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
    // ONE uniforms object, handed to both the 3D shell and the flat-map plane by
    // reference. setLiveShadow therefore updates both views in a single write, and
    // no code path exists that could set the shadow on one view but not the other.
    const shadowUniforms = {
      // Direction to the umbra centre in the *layer's local frame* (which is the
      // geographic frame, since the layer rotates with Earth). Unit vector.
      uShadowDir:       { value: new THREE.Vector3(1, 0, 0) },
      uHasShadow:       { value: 0.0 },
      uUmbraCosCutoff:  { value: Math.cos(EclipseLayer.UMBRA_ANGULAR_RADIUS) },
      uPenumbraCosCutoff: { value: Math.cos(EclipseLayer.PENUMBRA_ANGULAR_RADIUS) },
      uMaxDim:          { value: 0.85 }, // how dark the umbra centre gets
    };
    this.shellMat = new THREE.ShaderMaterial({
      uniforms: shadowUniforms,
      vertexShader: /* glsl */`
        varying vec3 vNormal;
        void main() {
          // The sphere's vertex positions are already unit-length normals in local space.
          vNormal = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        varying vec3 vNormal;
        ${SHADOW_SHADING_GLSL}
        void main() {
          if (uHasShadow < 0.5) discard;
          gl_FragColor = shadowColorAt(vNormal);
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

    // ── Flat-map counterparts ────────────────────────────────────────────────
    this.flatMesh = new THREE.Group();

    // Shadow plane, 3 world-widths wide (x ∈ [−3, 3]) so it also covers FlatMap's
    // ±2 wrap copies of the base plane. No wrap maths needed: the fragment shader
    // derives longitude as x·π, and sin/cos are periodic, so x = 1.5 (lon 270°)
    // shades identically to x = −0.5 (lon −90°). Single mesh, correct everywhere.
    const flatShellGeom = new THREE.PlaneGeometry(6, 1);
    const flatShellMat = new THREE.ShaderMaterial({
      uniforms: shadowUniforms,
      vertexShader: /* glsl */`
        varying vec2 vGeo;
        void main() {
          // Pass plane-local x/y straight through; the fragment shader turns them
          // into lon/lat. Using position (not uv) is what makes the wrap copies
          // work, since uv would restart at 0 on each copy.
          vGeo = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        varying vec2 vGeo;
        ${SHADOW_SHADING_GLSL}
        void main() {
          if (uHasShadow < 0.5) discard;
          // Plane spans x ∈ [−1, 1] → lon ∈ [−180°, 180°] and y ∈ [−0.5, 0.5] →
          // lat ∈ [−90°, 90°], so both are simply ·π to reach radians.
          float lon = vGeo.x * ${Math.PI};
          float lat = vGeo.y * ${Math.PI};
          float cosLat = cos(lat);
          // Same geographic convention as the rest of the app: Greenwich at +X,
          // +90°E at −Z (see EarthquakeLayer's position write-up).
          gl_FragColor = shadowColorAt(vec3(cosLat * cos(lon), sin(lat), -cosLat * sin(lon)));
        }
      `,
      transparent: true,
      depthWrite: false,
    });
    const flatShell = new THREE.Mesh(flatShellGeom, flatShellMat);
    flatShell.position.z = FLAT_Z_SHADOW;
    // Matches the 3D shell: draw before the other transparent overlays (coastlines,
    // plates, dots) so they stay legible on top of the dimming rather than fighting
    // it in an undefined transparent sort.
    flatShell.renderOrder = -1;
    this.flatMesh.add(flatShell);

    // Path of totality — three copies sharing one geometry, offset by a world-width
    // each way, exactly as FlatMap does for its terminator arc. LineSegments rather
    // than Line so `setPath` can drop individual antimeridian-spanning pairs instead
    // of drawing a streak across the map.
    this.flatPathGeom = new THREE.BufferGeometry();
    this.flatPathLines = [0, -2, 2].map(dx => {
      const line = new THREE.LineSegments(this.flatPathGeom, this.pathMat);
      line.position.x = dx;
      line.position.z = FLAT_Z_PATH;
      line.renderOrder = 2;
      // The geometry's bounding sphere is only as wide as the path itself, so a
      // copy shifted off-centre can be culled while still partly on screen.
      line.frustumCulled = false;
      return line;
    });
    for (const line of this.flatPathLines) this.flatMesh.add(line);

    this.flatMesh.visible = false;
  }

  /**
   * Set the current shadow centre in the *geographic* frame (i.e. the same frame as the
   * earth mesh's local frame after axial tilt + daily rotation). Pass a unit vector and
   * `hasShadow=true`; pass `hasShadow=false` to hide the live discs.
   *
   * Updates the flat map at the same time — the uniform object is shared with the
   * flat plane's material, and the flat map is already the geographic frame, so the
   * very same vector is correct there with no transform.
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
   *
   * Builds the flat-map polyline from the same subdivided points, so the two views
   * trace an identical path — the subdivision that keeps the 3D line hugging the
   * sphere also keeps the flat line smooth where the path runs steeply north/south.
   */
  setPath(geographicPoints: THREE.Vector3[]) {
    if (geographicPoints.length === 0) {
      this.pathLine.geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(0), 3));
      this.setFlatPath([]);
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

    // Longitude/latitude in degrees for each emitted point, in order — the flat-map
    // polyline is built from these once the sphere buffer is complete.
    const lonLat: number[] = [];

    let cursor = 0;
    const writeUnit = (v: THREE.Vector3) => {
      positions[cursor * 3]     = v.x * R;
      positions[cursor * 3 + 1] = v.y * R;
      positions[cursor * 3 + 2] = v.z * R;
      cursor++;
      // Inverse of the geographic convention used above: lat = asin(y),
      // lon = atan2(−z, x).
      lonLat.push(
        Math.atan2(-v.z, v.x) * 180 / Math.PI,
        Math.asin(THREE.MathUtils.clamp(v.y, -1, 1)) * 180 / Math.PI,
      );
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

    this.setFlatPath(lonLat);
  }

  /**
   * Rebuild the flat-map path from a flat `[lon, lat, lon, lat, …]` list in degrees.
   *
   * Emitted as discrete segment pairs so that pairs spanning the ±180° meridian can
   * simply be dropped. Without that, a path crossing the antimeridian draws a
   * horizontal streak right across the map — technically the shortest route in
   * screen space, but visually nonsense. Same compromise Coastlines makes, and for
   * the same reason: the alternative is splitting the segment at the seam, which is
   * a lot of geometry work for a case none of the catalogued paths currently hit.
   */
  private setFlatPath(lonLat: number[]) {
    const pointCount = lonLat.length / 2;
    const segments: number[] = [];
    for (let i = 1; i < pointCount; i++) {
      const lonA = lonLat[(i - 1) * 2], latA = lonLat[(i - 1) * 2 + 1];
      const lonB = lonLat[i * 2],       latB = lonLat[i * 2 + 1];
      if (Math.abs(lonB - lonA) > 180) continue;
      // z stays 0 here; the three line copies carry FLAT_Z_PATH on their transforms.
      segments.push(lonA / 180, latA / 180, 0,
                    lonB / 180, latB / 180, 0);
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(segments, 3));
    geom.computeBoundingSphere();
    // All three copies reference this.flatPathGeom, so swap the shared handle and
    // re-point each of them rather than mutating one line's geometry.
    this.flatPathGeom.dispose();
    this.flatPathGeom = geom;
    for (const line of this.flatPathLines) line.geometry = geom;
  }

  /** Rotate the layer's geographic frame to match Earth's current spin.
   *  Flat-map content is exempt: that view *is* the geographic frame, so its
   *  shadow and path are already where they belong. */
  setRotationY(angle: number) {
    this.inner.rotation.y = angle;
  }

  /** Show/hide just the precomputed path polyline (independent of the layer's overall
   *  visibility). main.ts gates this on whether the simulated time is anywhere near
   *  the eclipse window — drawing a static "future eclipse" path over a globe on a
   *  random Wednesday is more confusing than useful. */
  setPathVisible(v: boolean) {
    this.pathLine.visible = v;
    for (const line of this.flatPathLines) line.visible = v;
  }
}
