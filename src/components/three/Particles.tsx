"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float aScale;
  attribute float aSpeed;
  attribute float aTint;
  varying float vAlpha;
  varying float vTint;
  void main() {
    vec3 p = position;
    // Slow galactic swirl: inner particles orbit faster than outer ones.
    float ang = uTime * 0.07 * (1.6 - clamp(length(p.xz) / 10.0, 0.0, 1.0));
    float cs = cos(ang);
    float sn = sin(ang);
    p.xz = mat2(cs, -sn, sn, cs) * p.xz;
    p.y += sin(uTime * aSpeed + position.x * 1.7) * 0.18;
    p.x += cos(uTime * aSpeed * 0.6 + position.z * 1.3) * 0.12;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aScale * uPixelRatio * (22.0 / -mv.z);
    vAlpha = smoothstep(18.0, 5.0, -mv.z);
    vTint = aTint;
  }
`;

const fragment = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vAlpha;
  varying float vTint;
  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    if (d > 0.5) discard;
    float a = pow(smoothstep(0.5, 0.0, d), 2.4);
    vec3 c = mix(uColorA, uColorB, vTint);
    gl_FragColor = vec4(c, a * vAlpha * 0.85);
  }
`;

/** Small deterministic PRNG (mulberry32) so the memoised layout is pure and stable across renders. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Soft atmospheric particles on a custom additive shader. Static when `reduced`. */
export function Particles({ count, reduced }: { count: number; reduced: boolean }) {
  const pixelRatio = useThree((s) => s.gl.getPixelRatio());
  const material = useRef<THREE.ShaderMaterial>(null);

  const { positions, scales, speeds, tints } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);
    const tints = new Float32Array(count);
    const rand = mulberry32(count * 7919 + 17);
    for (let i = 0; i < count; i++) {
      // Shell around the sculpture, biased away from the centre.
      const r = 3 + rand() * 7;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (r * Math.sin(phi) * Math.sin(theta)) * 0.6;
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.7 - 1;
      scales[i] = 0.6 + rand() * 1.8;
      speeds[i] = 0.2 + rand() * 0.5;
      tints[i] = rand() < 0.3 ? 1 : 0;
    }
    return { positions, scales, speeds, tints };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uColorA: { value: new THREE.Color("#c9ccd4") },
      uColorB: { value: new THREE.Color("#38e1ff") },
    }),
    [],
  );

  // Follows PerformanceMonitor / DPR changes without mutating the memoised uniforms object.
  useEffect(() => {
    if (material.current) material.current.uniforms.uPixelRatio.value = pixelRatio;
  }, [pixelRatio]);

  useFrame((state) => {
    if (reduced || !material.current) return;
    material.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
        <bufferAttribute attach="attributes-aTint" args={[tints, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
