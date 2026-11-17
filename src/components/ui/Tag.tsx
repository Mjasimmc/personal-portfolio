import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wider text-silver-dim",
        className,
      )}
    >
      {children}
    </span>
  );
}
