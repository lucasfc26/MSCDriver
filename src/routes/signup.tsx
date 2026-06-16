import { createFileRoute, Link, redirect, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Check } from "lucide-react";
import { isAuthenticated, login } from "@/lib/auth";

export const Route = createFileRoute("/signup")({
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({ to: "/" });
    }
  },
  head: () => ({ meta: [{ title: "Criar conta — MSC Drive" }] }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
    navigate({ to: "/" });
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 grain-bg opacity-60" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-primary-soft blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/50 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-10 px-6 py-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-full max-w-md md:order-2"
        >
          <div className="md:hidden mb-8 flex justify-center"><Logo /></div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-elevated">
            <h2 className="font-display text-3xl tracking-tight">Crie sua conta</h2>
            <p className="mt-1 text-sm text-muted-foreground">15 GB grátis para começar. Sem cartão de crédito.</p>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Nome completo</Label>
                <Input placeholder="Como podemos te chamar?" className="h-11 rounded-xl bg-background" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">E-mail profissional</Label>
                <Input type="email" placeholder="voce@empresa.com" className="h-11 rounded-xl bg-background" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Senha</Label>
                  <Input type="password" placeholder="••••••••" className="h-11 rounded-xl bg-background" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Confirmar</Label>
                  <Input type="password" placeholder="••••••••" className="h-11 rounded-xl bg-background" />
                </div>
              </div>

              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <Checkbox className="mt-0.5" />
                <span>Li e aceito os <a className="font-semibold text-primary hover:underline">Termos</a> e a <a className="font-semibold text-primary hover:underline">Política de Privacidade</a>.</span>
              </label>

              <Button type="submit" className="h-11 w-full rounded-xl bg-primary text-primary-foreground shadow-brand transition hover:opacity-95">
                Criar minha conta <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Já tem uma conta?{" "}
              <Link to="/login" className="font-semibold text-primary hover:underline">Entrar</Link>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block md:order-1"
        >
          <Link to="/login"><Logo /></Link>
          <h1 className="mt-16 font-display text-5xl leading-[1.05] tracking-tight">
            Comece com o<br /><em className="text-primary not-italic">pé direito.</em>
          </h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Milhares de times escolhem MSC Drive pela combinação rara de segurança bancária com experiência humana.
          </p>

          <ul className="mt-10 space-y-3 max-w-md">
            {[
              "15 GB grátis para sempre",
              "Compartilhamento com senha e expiração",
              "Histórico de versões ilimitado nos primeiros 30 dias",
              "Suporte humano em português",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-3 shadow-soft">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-3.5 w-3.5" /></div>
                <span className="text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
