"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import type { DeviceTier } from "@/hooks/useDeviceTier";
import { SceneErrorBoundary } from "./SceneErrorBoundary";

type Props = {
  children: ReactNode;
  tier: DeviceTier;
  reduced: boolean;
  camera?: { position: [number, number, number]; fov: number; near: number; far: number };
  className?: string;
  /** Pause rendering when the canvas leaves the viewport (default true). */
  pauseOffscreen?: boolean;
};

/**
 * Shared Canvas wrapper: adaptive DPR, antialias by tier, transparent clear colour,
 * and a frameloop that stops when offscreen or when the user prefers reduced motion.
 */
export function SceneCanvas({ children, tier, reduced, camera, className, pauseOffscreen = true }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const maxDpr = tier === "high" ? 2 : tier === "mid" ? 1.5 : 1;
  const [dpr, setDpr] = useState(() =>
    typeof window === "undefined" ? 1 : Math.min(maxDpr, window.devicePixelRatio || 1),
  );

  useEffect(() => {
    const el = wrap.current;
    if (!el || !pauseOffscreen) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: "160px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, [pauseOffscreen]);

  const frameloop = reduced ? "demand" : visible ? "always" : "never";

  return (
    <div ref={wrap} className={className}>
      <SceneErrorBoundary>
        <Canvas
          dpr={dpr}
          camera={camera}
          frameloop={frameloop}
          gl={{
            antialias: tier !== "low",
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
          }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        >
          <PerformanceMonitor
            flipflops={2}
            onDecline={() => setDpr(1)}
            onIncline={() => setDpr(Math.min(maxDpr, window.devicePixelRatio || 1))}
            onFallback={() => setDpr(1)}
          />
          {children}
        </Canvas>
      </SceneErrorBoundary>
    </div>
  );
}
