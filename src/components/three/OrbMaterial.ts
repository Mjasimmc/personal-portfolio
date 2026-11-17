import * as THREE from "three";

export const orbVertex = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uHover;
  varying vec3 vView;
  varying vec3 vPos;
  varying float vDisp;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float vnoise(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
      mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
      f.z
    );
  }

  void main() {
    vec3 n = normalize(position);
    float d = vnoise(n * 1.7 + vec3(0.0, uTime * 0.22, 0.0)) * 0.5
            + vnoise(n * 4.2 - vec3(uTime * 0.35, 0.0, 0.0)) * 0.16;
    // Surface bulges toward the pointer.
    vec3 dir = normalize(vec3(uPointer * 1.4, 1.0));
    d += pow(max(dot(n, dir), 0.0), 5.0) * (0.22 + 0.3 * uHover);
    vDisp = d;
    vec3 p = position + n * d;
    vPos = p;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vView = mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`;

export const orbFragment = /* glsl */ `
  uniform float uTime;
  uniform vec3 uCyan;
  uniform vec3 uViolet;
  uniform vec3 uDeep;
  varying vec3 vView;
  varying vec3 vPos;
  varying float vDisp;

  void main() {
    // Faceted normal from screen-space derivatives of the displaced surface.
    vec3 N = normalize(cross(dFdx(vView), dFdy(vView)));
    vec3 V = normalize(-vView);
    float fres = pow(1.0 - abs(dot(N, V)), 2.2);

    float t = smoothstep(0.1, 0.75, vDisp);
    vec3 glow = mix(uViolet, uCyan, t);

    // Horizontal scan bands travelling up the surface.
    float band = smoothstep(0.92, 1.0, sin(vPos.y * 14.0 - uTime * 1.1));
    // Fine latitude lines for a technical, engraved feel.
    float lines = smoothstep(0.96, 1.0, sin(vPos.y * 46.0)) * 0.12;

    vec3 col = uDeep + glow * fres * 1.25;
    col += uCyan * band * 0.35 * (0.4 + fres);
    col += glow * lines;
    col += glow * pow(t, 2.0) * 0.18;
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createOrbUniforms() {
  return {
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uHover: { value: 0 },
    uCyan: { value: new THREE.Color("#38e1ff") },
    uViolet: { value: new THREE.Color("#7b5cff") },
    uDeep: { value: new THREE.Color("#06070d") },
  };
}
