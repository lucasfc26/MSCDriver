import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileIcon, kindFromName } from "@/components/file-icon";
import { TRASH } from "@/lib/demo-data";
import { Trash2, RotateCcw, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/trash")({
  head: () => ({ meta: [{ title: "Lixeira — MSC Drive" }] }),
  component: TrashPage,
});

function TrashPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <header>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Recuperação</div>
        <h1 className="font-display text-3xl sm:text-4xl tracking-tight">Lixeira</h1>
        <p className="mt-1 text-sm text-muted-foreground">Itens excluídos são removidos automaticamente após 30 dias.</p>
      </header>

      <Alert className="rounded-2xl border-primary/20 bg-primary-soft/40 text-foreground">
        <Info className="h-4 w-4 text-primary" />
        <AlertTitle className="text-sm font-semibold">Você pode restaurar a qualquer momento</AlertTitle>
        <AlertDescription className="text-xs text-muted-foreground">
          Restaure os arquivos para sua localização original ou exclua-os permanentemente.
        </AlertDescription>
      </Alert>

      <Card className="overflow-hidden rounded-2xl border-border p-0 shadow-soft">
        <Table>
          <TableHeader>
            <TableRow className="border-border bg-muted/40 hover:bg-muted/40">
              <TableHead className="pl-6">Nome</TableHead>
              <TableHead>Excluído</TableHead>
              <TableHead>Tamanho</TableHead>
              <TableHead>Tempo restante</TableHead>
              <TableHead className="pr-6 text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TRASH.map((t) => (
              <TableRow key={t.id} className="group border-border">
                <TableCell className="pl-6">
                  <div className="flex items-center gap-3">
                    <FileIcon kind={kindFromName(t.name)} size="sm" />
                    <span className="text-sm font-medium">{t.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{t.deletedAt}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{t.size}</TableCell>
                <TableCell>
                  <Badge
                    className={cn(
                      "rounded-full",
                      t.remaining <= 5
                        ? "bg-primary-soft text-primary hover:bg-primary-soft"
                        : t.remaining <= 14
                        ? "bg-amber-100 text-amber-700 hover:bg-amber-100"
                        : "bg-muted text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {t.remaining} dias
                  </Badge>
                </TableCell>
                <TableCell className="pr-6 text-right">
                  <div className="inline-flex gap-1">
                    <Button size="sm" variant="ghost" className="h-8 rounded-lg"><RotateCcw className="h-3.5 w-3.5" /> Restaurar</Button>
                    <Button size="sm" variant="ghost" className="h-8 rounded-lg text-primary"><Trash2 className="h-3.5 w-3.5" /> Excluir</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
