import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { FileIcon } from "@/components/file-icon";
import { RECENT } from "@/lib/demo-data";
import { Clock3 } from "lucide-react";

export const Route = createFileRoute("/_app/recent")({
  head: () => ({ meta: [{ title: "Recentes — Velvet" }] }),
  component: () => (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <header>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Últimos acessos</div>
        <h1 className="font-display text-3xl sm:text-4xl tracking-tight">Recentes</h1>
        <p className="mt-1 text-sm text-muted-foreground">Os arquivos que você abriu ou editou nas últimas semanas.</p>
      </header>

      <Card className="rounded-2xl border-border p-2 shadow-soft">
        <div className="divide-y divide-border">
          {RECENT.map((f) => (
            <div key={f.id} className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-accent/30">
              <FileIcon kind={f.kind} size="sm" />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium">{f.name}</div>
                <div className="text-xs text-muted-foreground">{f.owner.name} · {f.modified}</div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock3 className="h-3.5 w-3.5" /> {f.modified}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  ),
});
