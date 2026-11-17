"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createOrbUniforms, orbFragment, orbVertex } from "./OrbMaterial";

type Props = { reduced: boolean; detail: "low" | "high" };

/**
 * Central "digital architecture" sculpture: a faceted obsidian core with clearcoat,
 * an architectural edge shell, two metallic orbital rings and three travelling nodes.
 */
export function Sculpture({ reduced, detail }: Props) {
  const core = useRef<THREE.Mesh>(null);
  const orb = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(createOrbUniforms, []);
  const shell = useRef<THREE.LineSegments>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const orbiters = useRef<THREE.Group>(null);

  const edges = useMemo(() => {
    const base = new THREE.IcosahedronGeometry(2.05, 1);
    const e = new THREE.EdgesGeometry(base, 18);
    base.dispose();
    return e;
  }, []);
  useEffect(() => () => edges.dispose(), [edges]);

  useFrame((state, dt) => {
    if (reduced) return;
    const t = state.clock.elapsedTime;
    const u = orb.current?.uniforms;
    if (u) {
      u.uTime.value = t;
      // Ease toward the pointer; idle drift keeps touch devices alive too.
      const px = state.pointer.x || Math.sin(t * 0.3) * 0.5;
      const py = state.pointer.y || Math.cos(t * 0.23) * 0.4;
      u.uPointer.value.x += (px - u.uPointer.value.x) * Math.min(1, dt * 3);
      u.uPointer.value.y += (py - u.uPointer.value.y) * Math.min(1, dt * 3);
      const near = Math.hypot(state.pointer.x, state.pointer.y) < 0.9 ? 1 : 0;
      u.uHover.value += (near - u.uHover.value) * Math.min(1, dt * 2);
    }
    if (core.current) {
      core.current.rotation.y += dt * 0.1;
      core.current.rotation.x = Math.sin(t * 0.22) * 0.12;
    }
    if (shell.current) {
      shell.current.rotation.y -= dt * 0.05;
      shell.current.rotation.z += dt * 0.02;
    }
    if (ringA.current) ringA.current.rotation.z += dt * 0.1;
    if (ringB.current) ringB.current.rotation.z -= dt * 0.07;
    if (orbiters.current) orbiters.current.rotation.z += dt * 0.32;
  });

  const segments = detail === "high" ? 200 : 96;
  const ringTilt: [number, number, number] = [Math.PI / 2.4, 0.25, 0];

  return (
    <group>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.15, detail === "high" ? 28 : 12]} />
        <shaderMaterial
          ref={orb}
          vertexShader={orbVertex}
          fragmentShader={orbFragment}
          uniforms={uniforms}
        />
      </mesh>

      <lineSegments ref={shell} geometry={edges}>
        <lineBasicMaterial color="#7fe7ff" transparent opacity={0.2} />
      </lineSegments>

      <mesh ref={ringA} rotation={ringTilt}>
        <torusGeometry args={[2.55, 0.011, 10, segments]} />
        <meshStandardMaterial
          color="#e2e6ee"
          metalness={1}
          roughness={0.25}
          emissive="#38e1ff"
          emissiveIntensity={0.6}
        />
      </mesh>

      <mesh ref={ringB} rotation={[Math.PI / 1.65, -0.55, 0.4]}>
        <torusGeometry args={[3.15, 0.006, 8, segments]} />
        <meshStandardMaterial
          color="#c9ccd4"
          metalness={1}
          roughness={0.3}
          emissive="#7b5cff"
          emissiveIntensity={0.25}
        />
      </mesh>

      <group ref={orbiters} rotation={ringTilt}>
        {[0, 2.1, 4.2].map((a) => (
          <mesh key={a} position={[Math.cos(a) * 2.55, Math.sin(a) * 2.55, 0]}>
            <sphereGeometry args={[0.055, 10, 10]} />
            <meshBasicMaterial color="#bff4ff" />
          </mesh>
        ))}
      </group>
    </group>
  );
}
