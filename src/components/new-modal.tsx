import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FolderPlus, UploadCloud, FolderUp, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const OPTIONS = [
  { icon: FolderPlus, title: "Nova pasta",       desc: "Organize seus arquivos em uma nova coleção." },
  { icon: UploadCloud,title: "Upload de arquivos", desc: "Envie um ou vários arquivos do seu dispositivo." },
  { icon: FolderUp,   title: "Upload de pasta",    desc: "Mantenha a estrutura completa de pastas locais." },
  { icon: FileText,   title: "Documento em branco",desc: "Inicie um documento de texto colaborativo." },
];

export function NewModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl rounded-3xl border-border bg-card p-0 overflow-hidden">
        <div className="relative border-b border-border bg-gradient-to-br from-primary-soft/50 via-transparent to-transparent p-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Criar algo novo
          </div>
          <DialogHeader className="mt-2">
            <DialogTitle className="font-display text-3xl tracking-tight">
              O que você quer adicionar hoje?
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Escolha uma opção abaixo. Você também pode arrastar arquivos diretamente para a janela.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-2">
          {OPTIONS.map((o, i) => (
            <motion.button
              key={o.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -2 }}
              onClick={() => {
                onOpenChange(false);
                toast.success(o.title, { description: "Operação iniciada com sucesso." });
              }}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-background p-4 text-left transition hover:border-primary/40 hover:shadow-soft"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition group-hover:scale-105">
                <o.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold">{o.title}</div>
                <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{o.desc}</div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="border-t border-dashed border-border bg-muted/30 p-6 text-center">
          <UploadCloud className="mx-auto h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
          <div className="mt-2 text-sm font-medium">Arraste arquivos para qualquer lugar</div>
          <div className="text-xs text-muted-foreground">Suportamos arquivos de até 5 GB no plano atual.</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
