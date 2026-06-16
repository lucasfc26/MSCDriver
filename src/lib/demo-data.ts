export type DemoFile = {
  id: string;
  name: string;
  kind: "folder" | "doc" | "sheet" | "image" | "video" | "audio" | "pdf" | "code" | "zip" | "other";
  owner: { name: string; avatar?: string };
  modified: string;
  size: string;
  shared?: boolean;
  starred?: boolean;
};

export const FILES: DemoFile[] = [
  { id: "1", name: "Marca & Identidade 2026",    kind: "folder", owner: { name: "Você" },             modified: "há 2 horas",   size: "—",         shared: true,  starred: true },
  { id: "2", name: "Contratos – Clientes",        kind: "folder", owner: { name: "Você" },             modified: "ontem",        size: "—",         shared: true },
  { id: "3", name: "Relatório Trimestral.pdf",    kind: "pdf",    owner: { name: "Ana Ribeiro" },      modified: "há 30 min",    size: "4,2 MB",    shared: true,  starred: true },
  { id: "4", name: "Projeção Financeira.xlsx",    kind: "sheet",  owner: { name: "Você" },             modified: "há 3 horas",   size: "812 KB" },
  { id: "5", name: "Apresentação Investidores.key",kind: "doc",   owner: { name: "Diego Souza" },      modified: "há 1 dia",     size: "18,4 MB",   shared: true },
  { id: "6", name: "Mockup – Landing v3.png",     kind: "image",  owner: { name: "Você" },             modified: "há 4 dias",    size: "2,1 MB" },
  { id: "7", name: "Reunião Diretoria.mp4",       kind: "video",  owner: { name: "Marina Lopes" },     modified: "há 1 semana",  size: "284 MB",    shared: true },
  { id: "8", name: "Termos de Uso.docx",          kind: "doc",    owner: { name: "Você" },             modified: "há 2 semanas", size: "126 KB" },
  { id: "9", name: "design-system.zip",           kind: "zip",    owner: { name: "Você" },             modified: "há 3 semanas", size: "42,7 MB" },
  { id: "10", name: "api-spec.ts",                kind: "code",   owner: { name: "Diego Souza" },      modified: "há 1 mês",     size: "21 KB" },
];

export const RECENT = FILES.slice(0, 6);

export const STARRED = FILES.filter((f) => f.starred);

export const SHARES = [
  { id: "s1", name: "Relatório Trimestral.pdf",  access: "Leitura",  expires: "30/11/2026", views: 142, status: "Ativo" as const },
  { id: "s2", name: "Marca & Identidade 2026",    access: "Edição",   expires: "Nunca",      views: 56,  status: "Ativo" as const },
  { id: "s3", name: "Contratos – Clientes",       access: "Leitura",  expires: "15/12/2026", views: 8,   status: "Protegido" as const },
  { id: "s4", name: "Briefing Campanha.pdf",      access: "Leitura",  expires: "expirado",   views: 312, status: "Expirado" as const },
];

export const TRASH = [
  { id: "t1", name: "Backup antigo.zip",          deletedAt: "há 3 dias",  remaining: 27, size: "1,2 GB" },
  { id: "t2", name: "Rascunho proposta.docx",     deletedAt: "há 9 dias",  remaining: 21, size: "84 KB" },
  { id: "t3", name: "Foto perfil v2.png",         deletedAt: "há 18 dias", remaining: 12, size: "320 KB" },
  { id: "t4", name: "Planilha provisória.xlsx",   deletedAt: "há 28 dias", remaining: 2,  size: "412 KB" },
];

export const USERS = [
  { id: "u1", name: "Ana Ribeiro",   email: "ana@velvet.co",     role: "Admin",      storage: 18.4, status: "Ativa"    },
  { id: "u2", name: "Diego Souza",   email: "diego@velvet.co",   role: "Editor",     storage: 42.1, status: "Ativa"    },
  { id: "u3", name: "Marina Lopes",  email: "marina@velvet.co",  role: "Editor",     storage: 12.8, status: "Ativa"    },
  { id: "u4", name: "Pedro Antunes", email: "pedro@velvet.co",   role: "Leitor",     storage: 4.2,  status: "Convidado" },
  { id: "u5", name: "Sofia Martins", email: "sofia@velvet.co",   role: "Editor",     storage: 22.6, status: "Suspensa" },
];
