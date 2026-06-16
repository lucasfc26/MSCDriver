import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { USERS } from "@/lib/demo-data";
import { Users2, HardDrive, TrendingUp, Activity, Search, MoreHorizontal, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/admin")({
  head: () => ({ meta: [{ title: "Administração — Velvet" }] }),
  component: AdminPage,
});

const STATS = [
  { icon: Users2,    label: "Usuários totais",  value: "248",     sub: "+12 este mês", tone: "primary" },
  { icon: HardDrive, label: "Espaço consumido", value: "1,84 TB", sub: "de 4 TB",      tone: "emerald", pct: 46 },
  { icon: TrendingUp,label: "Crescimento",      value: "+18,2%",  sub: "vs. mês ant.", tone: "blue" },
  { icon: Activity,  label: "Atividade",        value: "2.317",   sub: "ações hoje",   tone: "amber" },
] as const;

function AdminPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> Painel administrativo
          </div>
          <h1 className="font-display text-3xl sm:text-4xl tracking-tight">Visão da organização</h1>
        </div>
        <Button className="rounded-xl bg-primary text-primary-foreground shadow-brand">Convidar usuário</Button>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <Card key={s.label} className="rounded-2xl border-border p-5 shadow-soft">
            <div className={cn(
              "grid h-11 w-11 place-items-center rounded-xl",
              s.tone === "primary" && "bg-primary-soft text-primary",
              s.tone === "emerald" && "bg-emerald-100/70 text-emerald-700",
              s.tone === "blue" && "bg-blue-100/70 text-blue-700",
              s.tone === "amber" && "bg-amber-100/70 text-amber-700",
            )}>
              <s.icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="mt-1 font-display text-3xl tracking-tight">{s.value}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{s.sub}</div>
            {"pct" in s && s.pct && <Progress value={s.pct} className="mt-3 h-1.5" />}
          </Card>
        ))}
      </section>

      <Card className="rounded-2xl border-border p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-semibold">Gerenciamento de usuários</h2>
            <p className="text-sm text-muted-foreground">{USERS.length} membros · 3 convites pendentes</p>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar usuários…" className="h-10 rounded-xl bg-background pl-9" />
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-border">
          <Table>
            <TableHeader>
              <TableRow className="border-border bg-muted/40 hover:bg-muted/40">
                <TableHead className="pl-4">Usuário</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Armazenamento</TableHead>
                <TableHead className="pr-4 text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {USERS.map((u) => (
                <TableRow key={u.id} className="border-border">
                  <TableCell className="pl-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-accent text-xs font-semibold">
                          {u.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <div className="text-sm font-medium">{u.name}</div>
                        <div className="text-xs text-muted-foreground">{u.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-full">{u.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "rounded-full",
                        u.status === "Ativa" && "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
                        u.status === "Convidado" && "bg-blue-100 text-blue-700 hover:bg-blue-100",
                        u.status === "Suspensa" && "bg-primary-soft text-primary hover:bg-primary-soft",
                      )}
                    >
                      {u.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="w-56">
                    <div className="flex items-center gap-3">
                      <Progress value={(u.storage / 50) * 100} className="h-1.5 flex-1" />
                      <span className="text-xs text-muted-foreground tabular-nums">{u.storage} GB</span>
                    </div>
                  </TableCell>
                  <TableCell className="pr-4 text-right">
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg"><MoreHorizontal className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
