import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { FileIcon } from "@/components/file-icon";
import { STARRED } from "@/lib/demo-data";
import { Star } from "lucide-react";

export const Route = createFileRoute("/_app/starred")({
  head: () => ({ meta: [{ title: "Favoritos — MSC Drive" }] }),
  component: () => (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <header>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Marcados por você</div>
        <h1 className="font-display text-3xl sm:text-4xl tracking-tight">Favoritos</h1>
      </header>
      {STARRED.length === 0 ? (
        <Card className="grid place-items-center rounded-3xl border-dashed border-border bg-card/60 p-16 text-center shadow-soft">
          <Star className="h-10 w-10 text-muted-foreground" strokeWidth={1.25} />
          <h3 className="mt-3 font-display text-2xl">Nenhum favorito por aqui</h3>
          <p className="mt-1 text-sm text-muted-foreground">Marque arquivos com a estrela para acessá-los rapidamente.</p>
        </Card>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {STARRED.map((f) => (
            <Card key={f.id} className="group rounded-2xl border-border p-4 shadow-soft transition hover:shadow-elevated">
              <div className="flex items-center justify-between">
                <FileIcon kind={f.kind} size="md" />
                <Star className="h-4 w-4 fill-primary text-primary" />
              </div>
              <div className="mt-4 truncate text-sm font-semibold">{f.name}</div>
              <div className="text-xs text-muted-foreground">{f.modified}</div>
            </Card>
          ))}
        </div>
      )}
    </div>
  ),
});
