import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { FILES } from "@/lib/demo-data";
import { FileIcon } from "./file-icon";
import { HardDrive, Star, Trash2, Users2, Settings, Plus, Upload } from "lucide-react";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Buscar arquivos, pessoas ou ações…" />
      <CommandList className="max-h-[420px]">
        <CommandEmpty>Nada encontrado.</CommandEmpty>
        <CommandGroup heading="Ações rápidas">
          <CommandItem><Plus className="h-4 w-4" /> Criar nova pasta</CommandItem>
          <CommandItem><Upload className="h-4 w-4" /> Fazer upload de arquivos</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Navegação">
          <CommandItem onSelect={() => { onOpenChange(false); navigate({ to: "/" }); }}>
            <HardDrive className="h-4 w-4" /> Meu Drive
          </CommandItem>
          <CommandItem onSelect={() => { onOpenChange(false); navigate({ to: "/shared" }); }}>
            <Users2 className="h-4 w-4" /> Compartilhados
          </CommandItem>
          <CommandItem onSelect={() => { onOpenChange(false); navigate({ to: "/starred" }); }}>
            <Star className="h-4 w-4" /> Favoritos
          </CommandItem>
          <CommandItem onSelect={() => { onOpenChange(false); navigate({ to: "/trash" }); }}>
            <Trash2 className="h-4 w-4" /> Lixeira
          </CommandItem>
          <CommandItem onSelect={() => { onOpenChange(false); navigate({ to: "/settings" }); }}>
            <Settings className="h-4 w-4" /> Configurações
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Arquivos recentes">
          {FILES.slice(0, 6).map((f) => (
            <CommandItem key={f.id}>
              <FileIcon kind={f.kind} size="sm" />
              <span>{f.name}</span>
              <span className="ml-auto text-xs text-muted-foreground">{f.modified}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
