import { cn } from "@/lib/utils";

export function Logo({ className, mark = false }: { className?: string; mark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-brand">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 17a4 4 0 0 1-.6-7.96A6 6 0 0 1 17.3 9.2 4.5 4.5 0 0 1 17 18H6z"
            fill="currentColor"
            opacity=".95"
          />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-card ring-2 ring-primary" />
      </div>
      {!mark && (
        <div className="flex items-baseline gap-1 leading-none">
          <span className="font-display text-xl tracking-tight">Velvet</span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Drive
          </span>
        </div>
      )}
    </div>
  );
}
