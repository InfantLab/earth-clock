import * as THREE from "three";

// Cheap-but-convincing atmospheric rim glow.
// A slightly oversized sphere with Fresnel-falloff alpha and additive blending:
// transparent at the centre of Earth's disc, brightest at the limb. The Fresnel
// factor is modulated by the sun direction so the atmosphere is bright on the
// day side, dim on the night side, with a soft twilight gradient at the terminator.
export class Atmosphere {
  readonly mesh: THREE.Mesh;
  private readonly sunDirUniform: { value: THREE.Vector3 };

  constructor(earthRadius = 1, thickness = 0.025) {
    this.sunDirUniform = { value: new THREE.Vector3(1, 0, 0) };

    const geometry = new THREE.SphereGeometry(earthRadius + thickness, 96, 48);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uSunDirection: this.sunDirUniform,
        uColorDay: { value: new THREE.Color(0x88bbff) },
        uColorTwilight: { value: new THREE.Color(0xff9966) },
        uPower: { value: 2.6 },     // Fresnel exponent — higher = thinner rim
        uIntensity: { value: 1.4 },
      },
      vertexShader: /* glsl */`
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: /* glsl */`
        uniform vec3 uSunDirection;
        uniform vec3 uColorDay;
        uniform vec3 uColorTwilight;
        uniform float uPower;
        uniform float uIntensity;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;

        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPos);
          float fresnel = pow(1.0 - max(0.0, dot(vWorldNormal, viewDir)), uPower);

          float sunDot = dot(vWorldNormal, normalize(uSunDirection));
          // Day: full atmosphere, twilight: warm at terminator, night: faint cool tint
          float daySide = smoothstep(-0.15, 0.20, sunDot);
          float twilight = smoothstep(0.30, -0.15, abs(sunDot - 0.05)); // bump near horizon
          vec3 col = mix(vec3(0.0), uColorDay, daySide);
          col += uColorTwilight * twilight * 0.6;

          // Keep a faint blue glow even on the night limb so Earth has a halo against the stars
          float nightFloor = smoothstep(-0.4, -0.1, sunDot) * 0.15;
          col += uColorDay * nightFloor;

          gl_FragColor = vec4(col * fresnel * uIntensity, fresnel);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });

    this.mesh = new THREE.Mesh(geometry, material);
  }

  setSunDirection(dir: THREE.Vector3) {
    this.sunDirUniform.value.copy(dir);
  }
}
