"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { skillCategories } from "@/data/portfolio";
import type { SkillCategoryId } from "@/types/portfolio";
import type { DeviceTier } from "@/hooks/useDeviceTier";
import { SceneCanvas } from "./SceneCanvas";
import { skillNodes } from "./skillLayout";

type Props = {
  tier: DeviceTier;
  reduced: boolean;
  filter: "all" | SkillCategoryId;
  /** Freeze the orbit (e.g. while a chip is hovered) so labels stay put. */
  paused: boolean;
  /** DOM overlay whose children (in `skillNodes` order) follow the 3D nodes every frame. */
  labelsRef: RefObject<HTMLDivElement | null>;
};

const CAMERA_Z = 9.5;
const world = new THREE.Vector3();

function Ring({
  ring,
  dimmed,
  frozen,
  geometry,
}: {
  ring: number;
  dimmed: boolean;
  frozen: boolean;
  geometry: THREE.BufferGeometry;
}) {
  const category = skillCategories[ring];
  const spinner = useRef<THREE.Group>(null);
  const nodes = useMemo(() => skillNodes.filter((n) => n.ring === ring), [ring]);
  const radius = nodes[0]?.radius ?? 1;
  const tilt = useMemo(() => new THREE.Euler(0.55 + ring * 0.32, ring * 0.55, 0), [ring]);
  const speed = (ring % 2 ? -1 : 1) * (0.05 + ring * 0.012);

  useFrame((_, dt) => {
    if (!frozen && spinner.current) spinner.current.rotation.z += dt * speed;
  });

  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.004, 6, 160]} />
        <meshBasicMaterial color={category.accent} transparent opacity={dimmed ? 0.05 : 0.22} />
      </mesh>
      <group ref={spinner}>
        {nodes.map((n) => (
          <mesh
            key={n.skill}
            geometry={geometry}
            position={[Math.cos(n.angle) * radius, Math.sin(n.angle) * radius, 0]}
            userData={{ skillIndex: n.index }}
          >
            <meshBasicMaterial color={category.accent} transparent opacity={dimmed ? 0.15 : 1} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/**
 * Projects every node to screen space and moves the matching DOM chip: one pass per frame,
 * no per-chip React roots (drei Html would create one root per skill).
 */
function Labels({ labelsRef }: { labelsRef: Props["labelsRef"] }) {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  const scene = useThree((s) => s.scene);
  const objects = useRef<THREE.Object3D[]>([]);

  useFrame(() => {
    const wrap = labelsRef.current;
    if (!wrap) return;
    if (objects.current.length !== skillNodes.length) {
      const found: THREE.Object3D[] = [];
      scene.traverse((o) => {
        const i = o.userData.skillIndex;
        if (typeof i === "number") found[i] = o;
      });
      if (found.filter(Boolean).length !== skillNodes.length) return;
      objects.current = found;
    }
    const els = wrap.children;
    for (let i = 0; i < objects.current.length; i++) {
      const el = els[i] as HTMLElement | undefined;
      if (!el) continue;
      objects.current[i].getWorldPosition(world);
      const dist = camera.position.distanceTo(world);
      world.project(camera);
      const x = (world.x * 0.5 + 0.5) * size.width;
      const y = (0.5 - world.y * 0.5) * size.height;
      const scale = THREE.MathUtils.clamp(CAMERA_Z / dist, 0.6, 1.1);
      const depth = THREE.MathUtils.clamp(1.5 - dist / 10.5, 0.2, 1);
      el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) translate(-50%,calc(-100% - 10px)) scale(${scale.toFixed(3)})`;
      el.style.setProperty("--depth", depth.toFixed(3));
      el.style.zIndex = String(Math.round((20 - dist) * 10));
    }
  });

  return null;
}

function Rig({ reduced, children }: { reduced: boolean; children: React.ReactNode }) {
  const root = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    if (reduced || !root.current) return;
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, state.pointer.x * 0.4, 2, dt);
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, -state.pointer.y * 0.25, 2, dt);
  });
  return <group ref={root}>{children}</group>;
}

export default function SkillsScene({ tier, reduced, filter, paused, labelsRef }: Props) {
  const geometry = useMemo(() => new THREE.SphereGeometry(0.05, 10, 10), []);
  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <SceneCanvas
      tier={tier}
      reduced={reduced}
      camera={{ position: [0, 0, CAMERA_Z], fov: 40, near: 0.1, far: 50 }}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <Rig reduced={reduced}>
        {skillCategories.map((c, i) => (
          <Ring
            key={c.id}
            ring={i}
            dimmed={filter !== "all" && filter !== c.id}
            frozen={reduced || paused}
            geometry={geometry}
          />
        ))}
        <mesh>
          <sphereGeometry args={[0.35, 24, 24]} />
          <meshStandardMaterial color="#15161c" metalness={0.9} roughness={0.3} emissive="#3d7bff" emissiveIntensity={0.15} />
        </mesh>
      </Rig>
      <Labels labelsRef={labelsRef} />
    </SceneCanvas>
  );
}
