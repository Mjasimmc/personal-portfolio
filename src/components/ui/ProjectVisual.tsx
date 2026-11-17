import type { ProjectVisual as Kind } from "@/types/portfolio";
import { cn } from "@/lib/utils";

/** Abstract, art-directed visuals — deliberately not pretending to be screenshots. */
export function ProjectVisual({ kind, className }: { kind: Kind; className?: string }) {
  return (
    <div
      className={cn("relative overflow-hidden bg-[linear-gradient(160deg,#16161d_0%,#08080a_100%)]", className)}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_15%,rgb(61_123_255/0.16),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_90%,rgb(123_92_255/0.14),transparent_70%)]" />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0v20" stroke="rgb(201 204 212 / 0.07)" strokeWidth="1" />
          </pattern>
          <linearGradient id="metal" x1="0" x2="1">
            <stop offset="0" stopColor="#c9ccd4" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#f3f4f7" stopOpacity="0.6" />
            <stop offset="1" stopColor="#c9ccd4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />
        {kind === "builder" && <Builder />}
        {kind === "campus" && <Campus />}
        {kind === "ledger" && <Ledger />}
        {kind === "commerce" && <Commerce />}
        {kind === "pulse" && <Pulse />}
      </svg>
      <div className="vignette absolute inset-0 opacity-70" />
    </div>
  );
}

const stroke = "rgb(201 204 212 / 0.55)";
const faint = "rgb(201 204 212 / 0.22)";
const blue = "#3d7bff";

function Builder() {
  return (
    <g>
      <rect x="44" y="40" width="312" height="220" rx="6" stroke={stroke} strokeDasharray="4 6" />
      <rect x="64" y="60" width="180" height="90" rx="4" stroke={faint} />
      <rect x="64" y="166" width="88" height="74" rx="4" stroke={faint} />
      <rect x="168" y="166" width="168" height="74" rx="4" stroke={faint} />
      <rect x="260" y="60" width="76" height="90" rx="4" stroke={blue} />
      {[
        [260, 60],
        [336, 60],
        [260, 150],
        [336, 150],
      ].map(([x, y]) => (
        <rect key={`${x}${y}`} x={x - 3} y={y - 3} width="6" height="6" fill="#050507" stroke={blue} />
      ))}
      <path d="M84 80h120M84 96h88M84 112h104" stroke={faint} strokeWidth="2" strokeLinecap="round" />
      <circle cx="298" cy="105" r="14" stroke="url(#metal)" />
      <path d="M298 97v16M290 105h16" stroke={stroke} />
    </g>
  );
}

function Campus() {
  return (
    <g>
      {[60, 95, 130, 165].map((r) => (
        <circle key={r} cx="110" cy="110" r={r} stroke={r === 130 ? blue : faint} />
      ))}
      <circle cx="110" cy="110" r="5" fill="#f3f4f7" />
      <circle cx="202" cy="52" r="4" fill={blue} />
      {Array.from({ length: 35 }).map((_, i) => {
        const x = 236 + (i % 7) * 20;
        const y = 150 + Math.floor(i / 7) * 22;
        const on = [3, 9, 10, 16, 24, 31].includes(i);
        return <circle key={i} cx={x} cy={y} r={on ? 4 : 2} fill={on ? blue : faint} />;
      })}
      <path d="M236 134h120" stroke="url(#metal)" />
    </g>
  );
}

function Ledger() {
  const rows = [240, 180, 260, 150, 210, 120];
  return (
    <g>
      {rows.map((w, i) => (
        <g key={i}>
          <rect x="48" y={56 + i * 28} width="34" height="8" rx="4" fill={faint} />
          <rect x="96" y={56 + i * 28} width={w - 60} height="8" rx="4" fill="rgb(201 204 212 / 0.12)" />
          <rect x={316} y={56 + i * 28} width="38" height="8" rx="4" fill={i === 2 ? blue : faint} />
        </g>
      ))}
      <path d="M48 236h306" stroke="url(#metal)" />
      <rect x="258" y="248" width="96" height="14" rx="7" fill={blue} opacity="0.9" />
      <circle cx="72" cy="258" r="12" stroke={stroke} strokeDasharray="3 3" />
    </g>
  );
}

function Commerce() {
  return (
    <g>
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 56 + (i % 3) * 100;
        const y = 44 + Math.floor(i / 3) * 76;
        const hot = i === 4;
        return (
          <g key={i}>
            <rect x={x} y={y} width="88" height="62" rx="8" stroke={hot ? blue : faint} fill={hot ? "rgb(61 123 255 / 0.08)" : "none"} />
            <rect x={x + 12} y={y + 42} width="40" height="5" rx="2.5" fill={faint} />
            <rect x={x + 12} y={y + 12} width="24" height="20" rx="4" fill="rgb(201 204 212 / 0.1)" />
          </g>
        );
      })}
      <circle cx="344" cy="44" r="14" fill="#f3f4f7" />
      <text x="344" y="48" textAnchor="middle" fontSize="12" fontFamily="monospace" fill="#050507">
        3
      </text>
    </g>
  );
}

function Pulse() {
  const path = Array.from({ length: 41 })
    .map((_, i) => {
      const x = 40 + i * 8;
      const y = 232 + Math.sin(i * 0.5) * 14 * Math.sin(i * 0.11);
      return `${i ? "L" : "M"}${x} ${y.toFixed(1)}`;
    })
    .join(" ");
  const bubbles = [
    [56, 48, 150, true],
    [194, 84, 150, false],
    [56, 120, 110, true],
    [154, 156, 190, false],
  ] as const;
  return (
    <g>
      {bubbles.map(([x, y, w, left], i) => (
        <rect key={i} x={x} y={y} width={w} height="26" rx="13" stroke={left ? faint : blue} fill={left ? "none" : "rgb(61 123 255 / 0.08)"} />
      ))}
      <path d={path} stroke="url(#metal)" strokeWidth="1.5" />
      <circle cx="344" cy="60" r="4" fill={blue}>
        <animate attributeName="opacity" values="1;0.2;1" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </g>
  );
}
