// Valida arquivos de conteúdo (frontmatter + regras de publicidade do CFO) sem rodar o build.
// Uso: node scripts/validate-content.mjs <pasta> [servicos|paginas]
// Ex.:  node scripts/validate-content.mjs src/content/servicos servicos
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { z } from 'astro/zod';

const [dir, kind = 'servicos'] = process.argv.slice(2);
if (!dir) {
  console.error('uso: node scripts/validate-content.mjs <pasta> [servicos|paginas]');
  process.exit(1);
}
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FINAL_DIR = path.join(ROOT, 'src', 'content', kind);

const servicos = z.object({
  titulo: z.string(),
  nome: z.string(),
  tipo: z.enum(['categoria', 'servico']),
  categoria: z.enum(['reabilitacao-oral', 'prevencao-e-manutencao', 'estetica-dental', 'estetica-da-face']),
  ordem: z.number(),
  seoTitle: z.string().max(60),
  description: z.string().max(158),
  lead: z.string().max(220).optional(),
  resumo: z.string(),
  cartao: z.string().max(110).optional(),
  itens: z.array(z.string()).default([]),
  imagem: z.string(),
  imagemAlt: z.string(),
  legenda: z.string().optional(),
  indicacoes: z.array(z.string()).default([]),
  etapas: z.array(z.object({ titulo: z.string(), texto: z.string() })).default([]),
  faq: z.array(z.object({ pergunta: z.string(), resposta: z.string() })).default([]),
  relacionados: z.array(z.string()).default([]),
  atualizadoEm: z.union([z.string(), z.date()]),
  prioridadeSeo: z.enum(['alta', 'media', 'baixa']).default('media'),
}).strict();

const paginas = z.object({
  titulo: z.string(),
  seoTitle: z.string().max(60),
  description: z.string().max(158),
  atualizadoEm: z.union([z.string(), z.date()]),
}).strict();

// Termos vedados ou de risco (Código de Ética Odontológica art. 44; Res. CFO-196/2019)
const PROIBIDOS = [
  /\bespecialista/i, /\bespecializad[ao]/i, /\bexpert\b/i, /\bn[º°o]\.?\s?1\b/i, /\bo mais moderno/i, /\bmais modern[ao]s? de/i,
  /\bperfeit[ao]s?\b/i, /\bgarant(id[ao]s?|ia|imos|e)\b/i, /\bsem dor\b/i, /\bindolor/i, /\bresultado imediato/i,
  /\brejuvenesc/i, /\blifting\b/i, /\bpromo[çc][ãa]o/i, /\bgratuit[ao]/i, /\bgr[áa]tis\b/i, /R\$\s?\d/, /\bparcel(a|amento)/i,
  /\bdesconto/i, /\bpremium\b/i, /\balto padr[ãa]o/i, /\bbotox\b/i, /\bharmoniza[çc][ãa]o facial\b/i, /\blíder\b/i,
  /\bantes e depois\b/i, /\bnúmero 1\b/i,
];
const ATENCAO = [/\bmelhor(es)?\b/i, /\brefer[êe]ncia\b/i, /\búnic[ao]\b/i, /\bnatural(idade)?\b/i, /\bdefinitiv[ao]/i, /\bpara sempre\b/i, /\bseguro\b/i];

let erros = 0;
let avisos = 0;
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
if (!files.length) {
  console.error('nenhum .md em', dir);
  process.exit(1);
}
for (const f of files) {
  const raw = fs.readFileSync(path.join(dir, f), 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  const out = [];
  if (!m) {
    console.log(`✗ ${f}: sem frontmatter`);
    erros++;
    continue;
  }
  let data;
  try {
    data = parse(m[1]);
  } catch (e) {
    console.log(`✗ ${f}: YAML inválido — ${e.message}`);
    erros++;
    continue;
  }
  const body = m[2];
  const schema = kind === 'paginas' ? paginas : servicos;
  const r = schema.safeParse(data);
  if (!r.success) {
    for (const i of r.error.issues) out.push(`✗ campo ${i.path.join('.')}: ${i.message}`);
  }
  if (kind === 'servicos' && data?.imagem) {
    const img = path.resolve(FINAL_DIR, data.imagem);
    if (!fs.existsSync(img)) out.push(`✗ imagem não encontrada a partir de src/content/servicos: ${data.imagem}`);
  }
  const texto = JSON.stringify(data) + '\n' + body;
  for (const re of PROIBIDOS) {
    const hit = texto.match(re);
    if (hit) out.push(`✗ termo vedado/de risco (CFO): "${hit[0]}"`);
  }
  for (const re of ATENCAO) {
    const hit = texto.match(re);
    if (hit) out.push(`! revisar contexto: "${hit[0]}"`);
  }
  if (/^#\s/m.test(body)) out.push('✗ o corpo não pode ter H1 (# ...): o H1 vem do campo titulo');
  const h2 = (body.match(/^##\s.+$/gm) || []).length;
  const palavras = (body + ' ' + (data?.lead || '') + ' ' + (data?.resumo || '') + ' ' + (data?.faq || []).map((q) => q.pergunta + ' ' + q.resposta).join(' '))
    .split(/\s+/).filter(Boolean).length;
  if (kind === 'servicos' && h2 < 3) out.push(`! poucos H2 (${h2}); use perguntas reais como H2`);
  const e = out.filter((x) => x.startsWith('✗')).length;
  erros += e;
  avisos += out.length - e;
  console.log(`${e ? '✗' : '✓'} ${f} — ${palavras} palavras, ${h2} H2${out.length ? '\n   ' + out.join('\n   ') : ''}`);
}
console.log(`\n${files.length} arquivo(s), ${erros} erro(s), ${avisos} aviso(s)`);
process.exit(erros ? 1 : 0);
