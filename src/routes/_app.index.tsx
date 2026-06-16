import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  HardDrive,
  Files,
  FolderOpen,
  Share2,
  ChevronRight,
  LayoutGrid,
  List,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Star,
  Pin,
  Users2,
  Download,
  Link2,
  Pencil,
  Trash2,
  Eye,
  Info,
  Copy,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { FileIcon } from "@/components/file-icon";
import { FILES, RECENT, STARRED } from "@/lib/demo-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/")({
  head: () => ({
    meta: [
      { title: "Meu Drive — Velvet" },
      { name: "description", content: "Visão geral do seu armazenamento Velvet Drive." },
    ],
  }),
  component: DashboardPage,
});

const STATS = [
  { icon: HardDrive, label: "Espaço utilizado", value: "136,2 GB", total: "200 GB", pct: 68, tone: "primary" },
  { icon: Files,     label: "Arquivos",         value: "12.847",   sub: "+318 esta semana", pct: 42, tone: "amber" },
  { icon: FolderOpen,label: "Pastas",           value: "284",      sub: "32 favoritas",     pct: 24, tone: "emerald" },
  { icon: Share2,    label: "Compartilhamentos",value: "47",       sub: "12 com senha",     pct: 56, tone: "blue" },
] as const;

function DashboardPage() {
  const [view, setView] = useState<"grid" | "list">("list");
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Hero greeting */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft"
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-soft blur-3xl opacity-70" />
        <div className="absolute right-10 bottom-0 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Bom dia, Laura
            </div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl tracking-tight">
              Tudo organizado <em className="text-primary not-italic">do seu jeito</em>.
            </h1>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Você tem 3 compartilhamentos novos e 12 arquivos aguardando revisão hoje.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button className="rounded-xl bg-primary text-primary-foreground shadow-brand hover:opacity-95">
              Continuar de onde parou
            </Button>
            <Button variant="outline" className="rounded-xl bg-card">
              Ver atividade
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
          >
            <Card className="group rounded-2xl border-border p-5 shadow-soft transition hover:shadow-elevated">
              <div className="flex items-start justify-between">
                <div
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-xl",
                    s.tone === "primary" && "bg-primary-soft text-primary",
                    s.tone === "amber" && "bg-amber-100/70 text-amber-700",
                    s.tone === "emerald" && "bg-emerald-100/70 text-emerald-700",
                    s.tone === "blue" && "bg-blue-100/70 text-blue-700",
                  )}
                >
                  <s.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <button className="opacity-0 transition group-hover:opacity-100">
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="mt-5">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-3xl tracking-tight">{s.value}</span>
                  {"total" in s && s.total && (
                    <span className="text-xs text-muted-foreground">/ {s.total}</span>
                  )}
                </div>
                {"sub" in s && s.sub && (
                  <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
                )}
                <Progress value={s.pct} className="mt-4 h-1.5" />
              </div>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Quick access */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Acesso rápido
            </div>
            <h2 className="font-display text-2xl tracking-tight">Fixados por você</h2>
          </div>
          <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
            Ver todos <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {STARRED.concat(FILES.slice(2, 5)).slice(0, 4).map((f, i) => (
            <motion.div
              key={f.id + i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -3 }}
            >
              <Card className="group cursor-pointer rounded-2xl border-border p-4 shadow-soft transition hover:shadow-elevated">
                <div className="flex items-center justify-between">
                  <FileIcon kind={f.kind} size="md" />
                  <Pin className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="mt-4 truncate text-sm font-semibold">{f.name}</div>
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{f.modified}</span>
                  {f.shared && <Users2 className="h-3.5 w-3.5" />}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* File browser */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Breadcrumb>
            <BreadcrumbList className="text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-muted-foreground">Meu Drive</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-muted-foreground">2026</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">Projetos ativos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-xl bg-card">
              <Filter className="h-4 w-4" /> Filtrar
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl bg-card">
              <ArrowUpDown className="h-4 w-4" /> Modificado
            </Button>
            <div className="flex rounded-xl border border-border bg-card p-0.5">
              <button
                onClick={() => setView("grid")}
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-lg transition",
                  view === "grid" ? "bg-primary text-primary-foreground shadow-brand" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setView("list")}
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-lg transition",
                  view === "list" ? "bg-primary text-primary-foreground shadow-brand" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {selected.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary-soft/60 px-4 py-2.5 text-sm"
          >
            <span className="font-medium">
              {selected.length} {selected.length === 1 ? "item selecionado" : "itens selecionados"}
            </span>
            <div className="flex items-center gap-1.5">
              <Button size="sm" variant="ghost" className="h-8"><Download className="h-3.5 w-3.5" /> Baixar</Button>
              <Button size="sm" variant="ghost" className="h-8"><Link2 className="h-3.5 w-3.5" /> Compartilhar</Button>
              <Button size="sm" variant="ghost" className="h-8 text-primary"><Trash2 className="h-3.5 w-3.5" /> Excluir</Button>
            </div>
          </motion.div>
        )}

        {view === "list" ? (
          <Card className="overflow-hidden rounded-2xl border-border p-0 shadow-soft">
            <Table>
              <TableHeader>
                <TableRow className="border-border bg-muted/40 hover:bg-muted/40">
                  <TableHead className="w-[40%] pl-6">Nome</TableHead>
                  <TableHead>Proprietário</TableHead>
                  <TableHead>Modificado</TableHead>
                  <TableHead>Tamanho</TableHead>
                  <TableHead className="w-12 text-right pr-4"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {FILES.map((f) => (
                  <ContextMenu key={f.id}>
                    <ContextMenuTrigger asChild>
                      <TableRow
                        onClick={() => toggle(f.id)}
                        className={cn(
                          "group cursor-pointer border-border transition",
                          selected.includes(f.id) && "bg-primary-soft/40",
                        )}
                      >
                        <TableCell className="pl-6">
                          <div className="flex items-center gap-3">
                            <FileIcon kind={f.kind} size="sm" />
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 truncate text-sm font-medium">
                                {f.name}
                                {f.starred && <Star className="h-3 w-3 fill-primary text-primary" />}
                                {f.shared && <Users2 className="h-3 w-3 text-muted-foreground" />}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className="bg-accent text-[10px] font-semibold">
                                {f.owner.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-muted-foreground">{f.owner.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{f.modified}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{f.size}</TableCell>
                        <TableCell className="pr-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                              <button className="grid h-8 w-8 place-items-center rounded-lg opacity-0 transition group-hover:opacity-100 hover:bg-accent">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-52 rounded-xl">
                              <DropdownMenuItem><Eye className="h-4 w-4" /> Visualizar</DropdownMenuItem>
                              <DropdownMenuItem><Download className="h-4 w-4" /> Baixar</DropdownMenuItem>
                              <DropdownMenuItem><Link2 className="h-4 w-4" /> Copiar link</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem><Pencil className="h-4 w-4" /> Renomear</DropdownMenuItem>
                              <DropdownMenuItem><Star className="h-4 w-4" /> Favoritar</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-primary"><Trash2 className="h-4 w-4" /> Mover para lixeira</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </ContextMenuTrigger>
                    <ContextMenuContent className="w-52 rounded-xl">
                      <ContextMenuItem><Eye className="h-4 w-4" /> Visualizar</ContextMenuItem>
                      <ContextMenuItem onSelect={() => toast.success("Link copiado")}><Copy className="h-4 w-4" /> Copiar link</ContextMenuItem>
                      <ContextMenuItem><Download className="h-4 w-4" /> Baixar</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem><Pencil className="h-4 w-4" /> Renomear</ContextMenuItem>
                      <ContextMenuItem><Info className="h-4 w-4" /> Detalhes</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem className="text-primary"><Trash2 className="h-4 w-4" /> Excluir</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                ))}
              </TableBody>
            </Table>
          </Card>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
            {FILES.map((f) => (
              <ContextMenu key={f.id}>
                <ContextMenuTrigger asChild>
                  <motion.div whileHover={{ y: -2 }} onClick={() => toggle(f.id)}>
                    <Card
                      className={cn(
                        "group cursor-pointer rounded-2xl border-border p-4 shadow-soft transition hover:shadow-elevated",
                        selected.includes(f.id) && "border-primary/40 bg-primary-soft/30",
                      )}
                    >
                      <div className="flex items-start justify-between">
                        <FileIcon kind={f.kind} size="lg" />
                        <button className="opacity-0 transition group-hover:opacity-100">
                          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </div>
                      <div className="mt-4 truncate text-sm font-semibold">{f.name}</div>
                      <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                        <span>{f.modified}</span>
                        {f.shared && <Users2 className="h-3 w-3" />}
                      </div>
                    </Card>
                  </motion.div>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-52 rounded-xl">
                  <ContextMenuItem><Eye className="h-4 w-4" /> Visualizar</ContextMenuItem>
                  <ContextMenuItem><Download className="h-4 w-4" /> Baixar</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem className="text-primary"><Trash2 className="h-4 w-4" /> Excluir</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ))}
          </div>
        )}
      </section>

      {/* Recent activity */}
      <section className="space-y-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Recentes</div>
          <h2 className="font-display text-2xl tracking-tight">Atividade da última semana</h2>
        </div>
        <Card className="rounded-2xl border-border p-2 shadow-soft">
          <div className="divide-y divide-border">
            {RECENT.map((f) => (
              <div key={f.id} className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-accent/30">
                <FileIcon kind={f.kind} size="sm" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{f.name}</div>
                  <div className="text-xs text-muted-foreground">{f.owner.name} · {f.modified}</div>
                </div>
                <Badge variant="secondary" className="rounded-full bg-muted text-xs text-muted-foreground">{f.size}</Badge>
                <Button variant="ghost" size="sm" className="h-8 rounded-lg">
                  Abrir <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
