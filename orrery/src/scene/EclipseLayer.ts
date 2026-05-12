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
  // Umbra is ~75 km wide on average → 75/6371 ≈ 0.012 rad ≈ 0.7°.
  private static readonly UMBRA_ANGULAR_RADIUS = 0.012;
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

          // Within the umbra → solid dim. Between umbra and penumbra → smoothly fade.
          float dim;
          if (cosAng >= uUmbraCosCutoff) {
            dim = uMaxDim;
          } else {
            // Smooth ramp from uMaxDim at umbra edge → 0 at penumbra edge.
            float t = (cosAng - uPenumbraCosCutoff) / (uUmbraCosCutoff - uPenumbraCosCutoff);
            dim = uMaxDim * smoothstep(0.0, 1.0, t);
          }
          // Alpha-blend a dark colour: the more "dim" we want, the higher the alpha of black.
          gl_FragColor = vec4(0.0, 0.0, 0.05, dim);
        }
      `,
      transparent: true,
      depthWrite: false,
    });
    this.shell = new THREE.Mesh(geom, this.shellMat);
    this.inner.add(this.shell);

    // Path of totality polyline. Coloured bright orange so it stands out against the
    // dimmed shadow corridor.
    this.pathMat = new THREE.LineBasicMaterial({
      color: 0xff9933, transparent: true, opacity: 0.9, depthWrite: false,
    });
    this.pathLine = new THREE.Line(new THREE.BufferGeometry(), this.pathMat);
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

  /** Replace the path-of-totality polyline. Pass points in the *geographic* frame. */
  setPath(geographicPoints: THREE.Vector3[]) {
    if (geographicPoints.length === 0) {
      this.pathLine.geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(0), 3));
      return;
    }
    // Lift the path slightly above the shadow shell so the orange line draws on top.
    const R = 1.0015;
    const positions = new Float32Array(geographicPoints.length * 3);
    for (let i = 0; i < geographicPoints.length; i++) {
      const p = geographicPoints[i].clone().normalize().multiplyScalar(R);
      positions[i * 3]     = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
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
}
