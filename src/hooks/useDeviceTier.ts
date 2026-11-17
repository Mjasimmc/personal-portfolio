"use client";

import { useSyncExternalStore } from "react";

export type DeviceTier = "low" | "mid" | "high";

type NavigatorExtra = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean; effectiveType?: string };
};

function computeTier(): DeviceTier {
  const nav = navigator as NavigatorExtra;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const small = window.innerWidth < 768;
  const memory = nav.deviceMemory ?? 8;
  const cores = nav.hardwareConcurrency ?? 8;
  const slowNet = nav.connection?.saveData || /2g/.test(nav.connection?.effectiveType ?? "");
  if (slowNet || cores <= 2 || (small && memory <= 4)) return "low";
  if (coarse || small || memory <= 4) return "mid";
  return "high";
}

let cached: DeviceTier | null = null;
const subscribe = () => () => {};
const getSnapshot = () => (cached ??= computeTier());
const getServerSnapshot = () => null;

/** Device capability tier so 3D scenes can size particle counts / DPR. `null` on the server and during hydration. */
export function useDeviceTier(): DeviceTier | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
