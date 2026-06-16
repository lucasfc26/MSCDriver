import { Link, useRouterState } from "@tanstack/react-router";
import {
  Cloud,
  Clock3,
  Users2,
  Star,
  Trash2,
  Upload,
  Settings,
  Shield,
  HardDrive,
} from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const NAV = [
  { to: "/",         label: "Meu Drive",     icon: HardDrive, exact: true },
  { to: "/recent",   label: "Recentes",      icon: Clock3 },
  { to: "/shared",   label: "Compartilhados",icon: Users2 },
  { to: "/starred",  label: "Favoritos",     icon: Star },
  { to: "/trash",    label: "Lixeira",       icon: Trash2 },
  { to: "/uploads",  label: "Uploads",       icon: Upload },
];

const BOTTOM = [
  { to: "/settings", label: "Configurações", icon: Settings },
  { to: "/admin",    label: "Administração", icon: Shield },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center px-5">
        <Link to="/"><Logo /></Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        <div className="px-2 pb-2 pt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Navegação
        </div>
        <ul className="space-y-0.5">
          {NAV.map((item) => {
            const active = item.exact ? pathname === item.to : pathname === item.to || pathname.startsWith(item.to + "/");
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/40 hover:text-sidebar-foreground"
                  )}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-primary" />
                  )}
                  <item.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-2 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Conta
        </div>
        <ul className="space-y-0.5">
          {BOTTOM.map((item) => {
            const active = pathname === item.to || pathname.startsWith(item.to + "/");
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/40 hover:text-sidebar-foreground"
                  )}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-primary" />
                  )}
                  <item.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Storage widget */}
      <div className="m-3 rounded-2xl border border-sidebar-border bg-card p-4 shadow-soft">
        <div className="mb-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <Cloud className="h-3.5 w-3.5 text-primary" />
            Armazenamento
          </div>
          <span className="text-muted-foreground">68%</span>
        </div>
        <Progress value={68} className="h-1.5" />
        <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
          <span>136,2 GB usados</span>
          <span>de 200 GB</span>
        </div>
        <button className="mt-3 w-full rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-brand transition hover:opacity-95">
          Fazer upgrade
        </button>
      </div>
    </aside>
  );
}
