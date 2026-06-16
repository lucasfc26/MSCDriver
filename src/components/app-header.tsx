import {
  Search,
  Bell,
  Plus,
  Upload,
  Command,
  ChevronDown,
  LogOut,
  Settings as SettingsIcon,
  UserCircle2,
  KeyRound,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { NewModal } from "./new-modal";
import { CommandPalette } from "./command-palette";
import { toast } from "sonner";

export function AppHeader({ onMenu }: { onMenu?: () => void }) {
  const [newOpen, setNewOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
          <button onClick={onMenu} className="lg:hidden grid h-9 w-9 place-items-center rounded-lg hover:bg-accent">
            <Menu className="h-5 w-5" />
          </button>

          {/* Search */}
          <button
            onClick={() => setCmdOpen(true)}
            className="group flex h-10 flex-1 max-w-xl items-center gap-2 rounded-xl border border-border bg-card px-3.5 text-left text-sm text-muted-foreground shadow-soft transition hover:border-foreground/15"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Buscar arquivos, pastas e pessoas…</span>
            <span className="sm:hidden">Buscar…</span>
            <span className="ml-auto hidden items-center gap-1 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground md:flex">
              <Command className="h-3 w-3" /> K
            </span>
          </button>

          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden h-10 rounded-xl bg-card font-medium md:inline-flex"
              onClick={() => toast.success("Upload iniciado", { description: "3 arquivos enviando para Meu Drive" })}
            >
              <Upload className="h-4 w-4" /> Upload
            </Button>

            <Button
              size="sm"
              className="h-10 rounded-xl bg-primary px-4 font-medium text-primary-foreground shadow-brand hover:opacity-95"
              onClick={() => setNewOpen(true)}
            >
              <Plus className="h-4 w-4" /> Novo
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-border bg-card transition hover:bg-accent">
                  <Bell className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary ring-2 ring-card" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 rounded-2xl p-2">
                <DropdownMenuLabel className="flex items-center justify-between px-2 py-1.5">
                  <span>Notificações</span>
                  <Badge variant="secondary" className="rounded-full">3 novas</Badge>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {[
                  { t: "Ana Ribeiro compartilhou", s: "Relatório Trimestral.pdf", time: "há 5 min" },
                  { t: "Upload concluído", s: "design-system.zip · 42,7 MB", time: "há 1 h" },
                  { t: "Espaço quase cheio", s: "Você está usando 68% do plano", time: "ontem" },
                ].map((n, i) => (
                  <DropdownMenuItem key={i} className="flex-col items-start gap-0.5 rounded-xl p-3">
                    <div className="text-sm font-medium">{n.t}</div>
                    <div className="text-xs text-muted-foreground">{n.s}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70">{n.time}</div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-xl border border-border bg-card p-1 pr-2 transition hover:bg-accent">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://i.pravatar.cc/64?img=12" alt="" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">LA</AvatarFallback>
                  </Avatar>
                  <span className="hidden text-sm font-medium md:block">Laura A.</span>
                  <ChevronDown className="hidden h-3.5 w-3.5 text-muted-foreground md:block" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 rounded-2xl p-2">
                <div className="flex items-center gap-3 p-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://i.pravatar.cc/64?img=12" />
                    <AvatarFallback>LA</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">Laura Amaral</div>
                    <div className="truncate text-xs text-muted-foreground">laura@velvet.co</div>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="rounded-xl"><UserCircle2 className="h-4 w-4" /> Perfil</DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl"><SettingsIcon className="h-4 w-4" /> Configurações</DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl"><KeyRound className="h-4 w-4" /> Trocar conta</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="rounded-xl text-primary"><LogOut className="h-4 w-4" /> Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <NewModal open={newOpen} onOpenChange={setNewOpen} />
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
    </>
  );
}
