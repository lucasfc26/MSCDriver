import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Download, Lock, ShieldCheck, FileText, Eye, Share2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/s/$id")({
  head: () => ({ meta: [{ title: "Arquivo compartilhado — Velvet" }] }),
  component: PublicSharePage,
});

function PublicSharePage() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Logo />
          <Button size="sm" variant="outline" className="rounded-xl">Criar conta grátis</Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Card className="rounded-3xl border-border p-8 shadow-elevated">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                <FileText className="h-9 w-9" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Compartilhado por Laura Amaral
                </div>
                <h1 className="mt-1 font-display text-3xl tracking-tight">Relatório Trimestral Q4.pdf</h1>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>4,2 MB</span>
                  <span>·</span>
                  <span>Atualizado há 2 horas</span>
                  <span>·</span>
                  <div className="flex items-center gap-1.5">
                    <Avatar className="h-5 w-5"><AvatarFallback className="text-[9px]">LA</AvatarFallback></Avatar>
                    <span>laura@velvet.co</span>
                  </div>
                </div>
              </div>
            </div>

            {!unlocked ? (
              <div className="mt-8 rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary"><Lock className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-xl">Este link está protegido</h3>
                <p className="text-sm text-muted-foreground">Digite a senha enviada pelo remetente para visualizar o arquivo.</p>
                <div className="mx-auto mt-5 flex max-w-sm gap-2">
                  <div className="flex-1 text-left">
                    <Label className="sr-only">Senha</Label>
                    <Input type="password" placeholder="Senha do link" className="h-11 rounded-xl bg-card" />
                  </div>
                  <Button onClick={() => setUnlocked(true)} className="h-11 rounded-xl bg-primary text-primary-foreground shadow-brand">Desbloquear</Button>
                </div>
              </div>
            ) : (
              <>
                <div className="mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted to-card">
                  <div className="grid h-full place-items-center text-muted-foreground">
                    <div className="text-center">
                      <Eye className="mx-auto h-10 w-10" strokeWidth={1.25} />
                      <div className="mt-2 text-sm">Pré-visualização do documento</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <Button className="h-12 flex-1 sm:flex-none rounded-xl bg-primary px-6 text-primary-foreground shadow-brand">
                    <Download className="h-4 w-4" /> Baixar arquivo (4,2 MB)
                  </Button>
                  <Button variant="outline" className="h-12 rounded-xl bg-card"><Share2 className="h-4 w-4" /> Compartilhar</Button>
                </div>
              </>
            )}
          </Card>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            Conexão criptografada · Verificado por Velvet Drive
          </div>
        </motion.div>
      </main>
    </div>
  );
}
