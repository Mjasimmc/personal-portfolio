"use client";

import dynamic from "next/dynamic";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { useReducedMotion } from "@/hooks/useMediaQuery";

// ssr:false must live in a Client Component (Next 16).
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/** Atmosphere layer (CSS) + lazily loaded WebGL scene. The CSS layer is also the no-WebGL fallback. */
export function HeroCanvas() {
  const tier = useDeviceTier();
  const reduced = useReducedMotion();
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_45%,rgb(61_123_255/0.16),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_25%_80%,rgb(123_92_255/0.12),transparent_70%)]" />
      {tier && <HeroScene tier={tier} reduced={reduced} />}
      <div className="vignette absolute inset-0" />
    </div>
  );
}
