import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, Shield, Bell, Palette, User, KeyRound, LogOut } from "lucide-react";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({ meta: [{ title: "Configurações — Velvet" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <header>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Conta</div>
        <h1 className="font-display text-3xl sm:text-4xl tracking-tight">Configurações</h1>
      </header>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="h-11 rounded-xl bg-card p-1 shadow-soft">
          <TabsTrigger value="profile" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"><User className="h-4 w-4" /> Perfil</TabsTrigger>
          <TabsTrigger value="security" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"><Shield className="h-4 w-4" /> Segurança</TabsTrigger>
          <TabsTrigger value="prefs" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"><Bell className="h-4 w-4" /> Preferências</TabsTrigger>
          <TabsTrigger value="appearance" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"><Palette className="h-4 w-4" /> Aparência</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="rounded-2xl border-border p-6 shadow-soft">
            <h2 className="font-semibold">Informações pessoais</h2>
            <p className="text-sm text-muted-foreground">Atualize seus dados de contato e foto.</p>
            <Separator className="my-5" />
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex flex-col items-center gap-3">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="https://i.pravatar.cc/200?img=12" />
                  <AvatarFallback>LA</AvatarFallback>
                </Avatar>
                <Button size="sm" variant="outline" className="rounded-xl">Trocar foto</Button>
              </div>
              <div className="grid flex-1 gap-4 sm:grid-cols-2">
                <Field label="Nome" defaultValue="Laura Amaral" />
                <Field label="Sobrenome" defaultValue="Costa" />
                <Field label="E-mail" defaultValue="laura@velvet.co" type="email" />
                <Field label="Cargo" defaultValue="Head of Design" />
                <div className="sm:col-span-2">
                  <Field label="Bio" defaultValue="Designer focada em sistemas escaláveis e estética calorosa." />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="ghost" className="rounded-xl">Cancelar</Button>
              <Button className="rounded-xl bg-primary text-primary-foreground shadow-brand">Salvar alterações</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="rounded-2xl border-border p-6 shadow-soft">
            <h2 className="font-semibold">Alterar senha</h2>
            <p className="text-sm text-muted-foreground">Use uma senha forte e única.</p>
            <Separator className="my-5" />
            <div className="grid max-w-lg gap-4">
              <Field label="Senha atual" type="password" defaultValue="•••••••••" />
              <Field label="Nova senha" type="password" />
              <Field label="Confirmar nova senha" type="password" />
              <Button className="mt-2 w-fit rounded-xl bg-primary text-primary-foreground shadow-brand"><KeyRound className="h-4 w-4" /> Atualizar senha</Button>
            </div>
          </Card>

          <Card className="rounded-2xl border-border p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold">Autenticação em dois fatores</h2>
                <p className="text-sm text-muted-foreground">Adicione uma camada extra de proteção à sua conta.</p>
              </div>
              <Switch defaultChecked />
            </div>
          </Card>

          <Card className="rounded-2xl border-border p-6 shadow-soft">
            <h2 className="font-semibold">Sessões ativas</h2>
            <Separator className="my-4" />
            <div className="space-y-3">
              {[
                { icon: Monitor, name: "MacBook Pro · Safari", where: "São Paulo, BR", time: "Agora", current: true },
                { icon: Smartphone, name: "iPhone 15 · App", where: "São Paulo, BR", time: "há 2 horas" },
                { icon: Monitor, name: "Windows · Chrome", where: "Rio de Janeiro, BR", time: "há 3 dias" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-border p-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-muted text-muted-foreground"><s.icon className="h-4 w-4" /></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      {s.name}
                      {s.current && <Badge className="rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Atual</Badge>}
                    </div>
                    <div className="text-xs text-muted-foreground">{s.where} · {s.time}</div>
                  </div>
                  {!s.current && (
                    <Button size="sm" variant="ghost" className="h-8 rounded-lg text-primary"><LogOut className="h-3.5 w-3.5" /> Encerrar</Button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="prefs" className="space-y-3">
          <Card className="rounded-2xl border-border p-6 shadow-soft">
            <h2 className="font-semibold">Notificações</h2>
            <Separator className="my-5" />
            <div className="space-y-4">
              {["Receber e-mails de novos compartilhamentos","Avisar quando alguém comentar","Resumo semanal de atividade","Alertas de espaço de armazenamento"].map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm">{p}</span>
                  <Switch defaultChecked={i < 3} />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-3">
          <Card className="rounded-2xl border-border p-6 shadow-soft">
            <h2 className="font-semibold">Tema da interface</h2>
            <Separator className="my-5" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { name: "Claro", bg: "bg-[#F5F0EB]", fg: "bg-primary" },
                { name: "Escuro", bg: "bg-[#1c1614]", fg: "bg-primary" },
                { name: "Sistema", bg: "bg-gradient-to-br from-[#F5F0EB] to-[#1c1614]", fg: "bg-primary" },
              ].map((t, i) => (
                <button key={i} className="rounded-2xl border border-border bg-card p-3 text-left transition hover:border-primary/40">
                  <div className={`h-24 w-full rounded-xl ${t.bg} relative overflow-hidden`}>
                    <div className={`absolute left-3 top-3 h-2 w-12 rounded ${t.fg}`} />
                    <div className="absolute left-3 top-7 h-1.5 w-20 rounded bg-white/60" />
                    <div className="absolute left-3 top-10 h-1.5 w-16 rounded bg-white/40" />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm font-medium">{t.name}{i===0 && <Badge className="rounded-full bg-primary text-primary-foreground hover:bg-primary">Atual</Badge>}</div>
                </button>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      <Input className="h-11 rounded-xl bg-card" {...rest} />
    </div>
  );
}
