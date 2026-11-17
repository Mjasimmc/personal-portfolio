"use client";

import { useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import type { DeviceTier } from "@/hooks/useDeviceTier";
import { SceneCanvas } from "./SceneCanvas";
import { Sculpture } from "./Sculpture";
import { Particles } from "./Particles";
import { CameraRig } from "./CameraRig";

type Props = { tier: DeviceTier; reduced: boolean };

function Composition({ tier, reduced }: Props) {
  const aspect = useThree((s) => s.viewport.aspect);
  const portrait = aspect < 0.9;
  const distance = portrait ? 10.5 : aspect < 1.3 ? 8.6 : 7.2;
  // Portrait: sculpture sits above the headline. Landscape: offset right for an asymmetric composition.
  const position: [number, number, number] = portrait ? [0, 1.5, 0] : [1.6, 0.85, 0];

  return (
    <>
      <CameraRig reduced={reduced} distance={distance} />
      <fog attach="fog" args={["#050507", 7, 19]} />
      <ambientLight intensity={0.12} />
      <spotLight position={[6, 9, 6]} angle={0.4} penumbra={1} intensity={70} color="#e3e9ff" />
      <pointLight position={[-6, -3, -3]} intensity={34} color="#3d7bff" />
      <pointLight position={[4, -5, 2]} intensity={14} color="#7b5cff" />
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={3} position={[0, 5, -5]} scale={[10, 2, 1]} color="#dfe6ff" />
        <Lightformer form="circle" intensity={2.2} position={[-5, 2, 3]} scale={3} color="#3d7bff" />
        <Lightformer form="rect" intensity={1.2} position={[5, -2, 3]} scale={[4, 4, 1]} color="#7b5cff" />
        <Lightformer form="ring" intensity={1} position={[0, -4, -2]} scale={6} color="#c9ccd4" />
      </Environment>

      <group position={position} scale={portrait ? 0.82 : 0.85}>
        <Float speed={reduced ? 0 : 1.1} rotationIntensity={0.35} floatIntensity={0.7}>
          <Sculpture reduced={reduced} detail={tier === "low" ? "low" : "high"} />
        </Float>
      </group>
      <Particles count={tier === "low" ? 260 : tier === "mid" ? 600 : 1100} reduced={reduced} />
    </>
  );
}

export default function HeroScene({ tier, reduced }: Props) {
  return (
    <SceneCanvas
      tier={tier}
      reduced={reduced}
      camera={{ position: [0, 0, 7.2], fov: 38, near: 0.1, far: 60 }}
      className="absolute inset-0"
    >
      <Composition tier={tier} reduced={reduced} />
    </SceneCanvas>
  );
}
