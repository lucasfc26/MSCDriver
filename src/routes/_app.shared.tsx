import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SHARES } from "@/lib/demo-data";
import { Copy, Link2, Lock, Eye, Pencil, Calendar, Plus } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/shared")({
  head: () => ({ meta: [{ title: "Compartilhamentos — Velvet" }] }),
  component: SharedPage,
});

function SharedPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Acessos externos</div>
          <h1 className="font-display text-3xl sm:text-4xl tracking-tight">Compartilhamentos</h1>
          <p className="mt-1 text-sm text-muted-foreground">Gerencie todos os links e permissões emitidos pela sua conta.</p>
        </div>
        <Button className="rounded-xl bg-primary text-primary-foreground shadow-brand" onClick={() => setOpen(true)}>
          <Plus className="h-4 w-4" /> Novo link
        </Button>
      </header>

      <Card className="overflow-hidden rounded-2xl border-border p-0 shadow-soft">
        <Table>
          <TableHeader>
            <TableRow className="border-border bg-muted/40 hover:bg-muted/40">
              <TableHead className="pl-6">Arquivo</TableHead>
              <TableHead>Acesso</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Expira</TableHead>
              <TableHead className="text-right">Acessos</TableHead>
              <TableHead className="pr-6 text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SHARES.map((s) => (
              <TableRow key={s.id} className="border-border">
                <TableCell className="pl-6 font-medium">{s.name}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="rounded-full">
                    {s.access === "Edição" ? <Pencil className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                    {s.access}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      s.status === "Ativo"
                        ? "rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                        : s.status === "Protegido"
                        ? "rounded-full bg-blue-100 text-blue-700 hover:bg-blue-100"
                        : "rounded-full bg-muted text-muted-foreground hover:bg-muted"
                    }
                  >
                    {s.status === "Protegido" && <Lock className="h-3 w-3" />}
                    {s.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{s.expires}</span>
                </TableCell>
                <TableCell className="text-right text-sm font-medium">{s.views}</TableCell>
                <TableCell className="pr-6 text-right">
                  <Button variant="ghost" size="sm" className="h-8 rounded-lg" onClick={() => toast.success("Link copiado")}>
                    <Copy className="h-3.5 w-3.5" /> Copiar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <ShareLinkDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}

function ShareLinkDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [usePwd, setUsePwd] = useState(false);
  const [permission, setPermission] = useState("read");
  const link = "https://velvet.cloud/s/9hZ4-K2pL";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Gerar link compartilhável</DialogTitle>
          <DialogDescription>Defina o nível de acesso e proteja com senha se necessário.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-wider text-muted-foreground">Permissão</Label>
            <Select value={permission} onValueChange={setPermission}>
              <SelectTrigger className="h-11 rounded-xl bg-card"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="read">Somente leitura</SelectItem>
                <SelectItem value="edit">Edição</SelectItem>
                <SelectItem value="comment">Comentários</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-wider text-muted-foreground">Expira em</Label>
            <Input type="date" className="h-11 rounded-xl bg-card" defaultValue="2026-12-31" />
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium"><Lock className="h-4 w-4 text-primary" /> Proteger com senha</div>
              <div className="text-xs text-muted-foreground">Visitantes precisarão digitar a senha para acessar.</div>
            </div>
            <Switch checked={usePwd} onCheckedChange={setUsePwd} />
          </div>
          {usePwd && <Input placeholder="Senha do link" className="h-11 rounded-xl bg-card" />}

          <div className="rounded-xl border border-dashed border-border bg-muted/40 p-3">
            <Label className="text-xs uppercase tracking-wider text-muted-foreground">Link gerado</Label>
            <div className="mt-1.5 flex items-center gap-2">
              <Input readOnly value={link} className="h-10 rounded-lg bg-card font-mono text-xs" />
              <Button size="sm" className="h-10 rounded-lg" onClick={() => { navigator.clipboard?.writeText(link); toast.success("Link copiado"); }}>
                <Copy className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" className="rounded-xl" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button className="rounded-xl bg-primary text-primary-foreground shadow-brand"><Link2 className="h-4 w-4" /> Gerar link</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
