import {
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FileSpreadsheet,
  FileCode,
  FileArchive,
  Folder,
  File,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type FileKind =
  | "folder"
  | "doc"
  | "sheet"
  | "image"
  | "video"
  | "audio"
  | "pdf"
  | "code"
  | "zip"
  | "other";

const MAP: Record<FileKind, { icon: LucideIcon; tone: string; bg: string }> = {
  folder:  { icon: Folder,         tone: "text-amber-700",  bg: "bg-amber-100/70" },
  doc:     { icon: FileText,       tone: "text-blue-700",   bg: "bg-blue-100/70" },
  sheet:   { icon: FileSpreadsheet,tone: "text-emerald-700",bg: "bg-emerald-100/70" },
  image:   { icon: FileImage,      tone: "text-fuchsia-700",bg: "bg-fuchsia-100/70" },
  video:   { icon: FileVideo,      tone: "text-rose-700",   bg: "bg-rose-100/70" },
  audio:   { icon: FileAudio,      tone: "text-violet-700", bg: "bg-violet-100/70" },
  pdf:     { icon: FileText,       tone: "text-primary",    bg: "bg-primary-soft" },
  code:    { icon: FileCode,       tone: "text-slate-700",  bg: "bg-slate-100/80" },
  zip:     { icon: FileArchive,    tone: "text-orange-700", bg: "bg-orange-100/70" },
  other:   { icon: File,           tone: "text-stone-600",  bg: "bg-stone-100/80" },
};

export function FileIcon({
  kind,
  size = "md",
  className,
}: {
  kind: FileKind;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { icon: Icon, tone, bg } = MAP[kind];
  const sizes = {
    sm: "h-8 w-8 rounded-lg [&_svg]:h-4 [&_svg]:w-4",
    md: "h-10 w-10 rounded-xl [&_svg]:h-5 [&_svg]:w-5",
    lg: "h-14 w-14 rounded-2xl [&_svg]:h-7 [&_svg]:w-7",
  };
  return (
    <div className={cn("grid shrink-0 place-items-center", sizes[size], bg, tone, className)}>
      <Icon strokeWidth={1.75} />
    </div>
  );
}

export function kindFromName(name: string): FileKind {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  if (!name.includes(".")) return "folder";
  if (["png","jpg","jpeg","gif","webp","svg","heic"].includes(ext)) return "image";
  if (["mp4","mov","webm","mkv","avi"].includes(ext)) return "video";
  if (["mp3","wav","flac","aac"].includes(ext)) return "audio";
  if (["xls","xlsx","csv","numbers"].includes(ext)) return "sheet";
  if (["doc","docx","pages","txt","md"].includes(ext)) return "doc";
  if (["pdf"].includes(ext)) return "pdf";
  if (["js","ts","tsx","jsx","py","go","rs","json","html","css"].includes(ext)) return "code";
  if (["zip","rar","7z","tar","gz"].includes(ext)) return "zip";
  return "other";
}
