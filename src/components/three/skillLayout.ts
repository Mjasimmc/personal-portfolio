import { skillCategories } from "@/data/portfolio";
import type { SkillCategory } from "@/types/portfolio";

export const RING_BASE = 1.7;
export const RING_STEP = 0.42;

export type SkillNode = {
  /** Position in the flat list; the DOM overlay renders chips in this exact order. */
  index: number;
  skill: string;
  category: SkillCategory;
  ring: number;
  angle: number;
  radius: number;
};

/** One node per skill, ring = category index. Shared by the 3D scene and the DOM label overlay. */
export const skillNodes: SkillNode[] = skillCategories
  .flatMap((category, ring) =>
    category.skills.map((skill, i) => ({
      index: 0,
      skill,
      category,
      ring,
      angle: (i / category.skills.length) * Math.PI * 2,
      radius: RING_BASE + ring * RING_STEP,
    })),
  )
  .map((n, index) => ({ ...n, index }));
