import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { FileIcon, kindFromName } from "@/components/file-icon";
import { UploadCloud, X, CheckCircle2, Pause } from "lucide-react";

const QUEUE = [
  { name: "Reunião Diretoria.mp4",    size: "284 MB", pct: 64, status: "uploading" as const },
  { name: "Mockup – Landing v3.png",  size: "2,1 MB", pct: 100,status: "done" as const },
  { name: "design-system.zip",        size: "42,7 MB",pct: 28, status: "uploading" as const },
  { name: "api-spec.ts",              size: "21 KB",  pct: 100,status: "done" as const },
  { name: "Backup completo.tar.gz",   size: "1,8 GB", pct: 12, status: "paused" as const },
];

export const Route = createFileRoute("/_app/uploads")({
  head: () => ({ meta: [{ title: "Uploads — Velvet" }] }),
  component: () => (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <header>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Em andamento</div>
        <h1 className="font-display text-3xl sm:text-4xl tracking-tight">Uploads</h1>
        <p className="mt-1 text-sm text-muted-foreground">3 ativos · 2 concluídos · 1,2 GB transferidos hoje</p>
      </header>

      <Card className="rounded-3xl border-2 border-dashed border-border bg-card/60 p-10 text-center shadow-soft transition hover:border-primary/40">
        <UploadCloud className="mx-auto h-10 w-10 text-primary" strokeWidth={1.5} />
        <h3 className="mt-3 font-display text-2xl">Solte arquivos aqui para enviar</h3>
        <p className="mt-1 text-sm text-muted-foreground">ou clique para escolher do seu dispositivo · até 5 GB por arquivo</p>
        <Button className="mt-4 rounded-xl bg-primary text-primary-foreground shadow-brand">Selecionar arquivos</Button>
      </Card>

      <div className="space-y-2">
        {QUEUE.map((u, i) => (
          <Card key={i} className="rounded-2xl border-border p-4 shadow-soft">
            <div className="flex items-center gap-3">
              <FileIcon kind={kindFromName(u.name)} size="sm" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-medium">{u.name}</span>
                  <span className="text-xs text-muted-foreground tabular-nums">{u.pct}% · {u.size}</span>
                </div>
                <Progress value={u.pct} className="mt-2 h-1.5" />
              </div>
              {u.status === "done" ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ) : u.status === "paused" ? (
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg"><Pause className="h-4 w-4" /></Button>
              ) : (
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg"><X className="h-4 w-4" /></Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  ),
});
