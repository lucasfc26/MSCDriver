import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, ArrowRight, ShieldCheck, Cloud, Folder, File, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Entrar — Velvet Drive" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle geometric backdrop */}
      <div className="pointer-events-none absolute inset-0 grain-bg opacity-60" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-primary-soft blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/50 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-10 px-6 py-10 md:grid-cols-2 md:gap-16">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Link to="/login"><Logo /></Link>

          <div className="mt-16">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Novo · 2026
            </div>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] tracking-tight">
              Seu trabalho,<br /> <em className="text-primary not-italic">organizado com elegância.</em>
            </h1>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Velvet Drive é o espaço onde times exigentes guardam, compartilham e
              protegem seus arquivos com a tranquilidade de um cofre e a leveza de um caderno.
            </p>
          </div>

          {/* Abstract cloud illustration */}
          <div className="relative mt-12 h-72 w-full max-w-md">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-0 top-0 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-soft"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary"><Folder className="h-5 w-5" strokeWidth={1.75} /></div>
              <div className="min-w-0">
                <div className="text-xs font-semibold">Marca & Identidade</div>
                <div className="text-[10px] text-muted-foreground">142 arquivos · 4,2 GB</div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.6 }}
              className="absolute right-2 top-12 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-soft"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-100/70 text-blue-700"><File className="h-5 w-5" strokeWidth={1.75} /></div>
              <div>
                <div className="text-xs font-semibold">Contrato 2026.pdf</div>
                <div className="text-[10px] text-muted-foreground">Compartilhado · 4,2 MB</div>
              </div>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute left-8 bottom-0 grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-brand"
            >
              <Cloud className="h-16 w-16" strokeWidth={1.25} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
              className="absolute right-0 bottom-6 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 shadow-soft"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span className="text-xs font-medium">Criptografia E2E</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side: login card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="md:hidden mb-8 flex justify-center"><Logo /></div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-elevated">
            <h2 className="font-display text-3xl tracking-tight">Bem-vinda de volta</h2>
            <p className="mt-1 text-sm text-muted-foreground">Acesse seu Drive em segundos.</p>

            <form className="mt-8 space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</Label>
                <Input type="email" placeholder="voce@empresa.com" className="h-11 rounded-xl bg-background" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Senha</Label>
                  <a href="#" className="text-xs font-medium text-primary hover:underline">Esqueci minha senha</a>
                </div>
                <div className="relative">
                  <Input
                    type={show ? "text" : "password"}
                    placeholder="••••••••••"
                    className="h-11 rounded-xl bg-background pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md text-muted-foreground hover:bg-accent"
                  >
                    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <Checkbox defaultChecked /> Lembrar-me neste dispositivo
              </label>

              <Link to="/" className="block">
                <Button
                  type="button"
                  className="h-11 w-full rounded-xl bg-primary text-primary-foreground shadow-brand transition hover:opacity-95"
                >
                  Entrar <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </form>

            <div className="my-6 flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">ou continue com</span>
              <Separator className="flex-1" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="h-11 rounded-xl bg-background font-medium">
                <GoogleIcon /> Google
              </Button>
              <Button variant="outline" className="h-11 rounded-xl bg-background font-medium">
                <AppleIcon /> Apple
              </Button>
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Ainda não tem uma conta?{" "}
              <Link to="/signup" className="font-semibold text-primary hover:underline">Criar conta</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5c1.6 0 3 .5 4.2 1.6l3.1-3.1C17.4 1.7 14.9.8 12 .8 7.4.8 3.5 3.4 1.7 7.2l3.6 2.8C6.2 7.2 8.9 5 12 5z"/><path fill="#4285F4" d="M23.2 12.3c0-.8-.1-1.5-.2-2.3H12v4.4h6.3c-.3 1.5-1.1 2.7-2.4 3.5l3.6 2.8c2.1-2 3.7-4.9 3.7-8.4z"/><path fill="#FBBC05" d="M5.3 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.6.4-2.4L1.7 6.8C.6 8.4 0 10.1 0 12s.6 3.6 1.7 5.2l3.6-2.8z"/><path fill="#34A853" d="M12 23.2c3 0 5.5-1 7.4-2.7l-3.6-2.8c-1 .7-2.3 1.1-3.8 1.1-3.1 0-5.8-2.2-6.7-5.1L1.7 16.5C3.5 20.4 7.4 23.2 12 23.2z"/></svg>
  );
}
function AppleIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.5c0-2.8 2.3-4.2 2.4-4.2-1.3-1.9-3.4-2.2-4.1-2.2-1.7-.2-3.4 1-4.3 1-.9 0-2.3-1-3.8-.9-2 0-3.8 1.1-4.8 2.9-2.1 3.6-.5 8.9 1.5 11.8 1 1.4 2.2 3 3.7 3 1.5 0 2.1-1 3.9-1 1.8 0 2.3 1 3.9 1s2.6-1.4 3.6-2.9c1.1-1.6 1.6-3.2 1.6-3.3-.1-.1-3-1.2-3-4.3zM13.6 4.4c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.6.8-3.4 1.8-.7.9-1.4 2.3-1.2 3.7 1.3.1 2.6-.7 3.4-1.7z"/></svg>;
}
