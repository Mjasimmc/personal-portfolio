"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";

/** Pointer-responsive camera with responsive distance. Pointer events are ignored when `reduced`. */
export function CameraRig({ reduced, distance }: { reduced: boolean; distance: number }) {
  const camera = useThree((s) => s.camera);
  const invalidate = useThree((s) => s.invalidate);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    camera.position.set(0, 0, distance);
    camera.lookAt(0, 0, 0);
    invalidate();
  }, [camera, distance, invalidate]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  useFrame((state, dt) => {
    if (reduced) return;
    const cam = state.camera;
    // Scroll "travel": as the hero scrolls away the camera dollies in, drifts sideways and banks slightly.
    const p = MathUtils.clamp(window.scrollY / Math.max(window.innerHeight, 1), 0, 1);
    cam.position.x = MathUtils.damp(cam.position.x, target.current.x * 0.9 + p * 1.4, 2.2, dt);
    cam.position.y = MathUtils.damp(cam.position.y, target.current.y * 0.55 - p * 0.5, 2.2, dt);
    cam.position.z = MathUtils.damp(cam.position.z, distance - p * 2.6, 2.6, dt);
    cam.lookAt(0, 0, 0);
    cam.rotateZ(p * 0.14);
  });

  return null;
}
