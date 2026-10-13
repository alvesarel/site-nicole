// Trava de publicação: falha (exit 1) se o build (dist/) ainda tiver dados provisórios.
// Uso: node scripts/check-placeholders.mjs [dist]
// Rode depois de `npm run build` e ANTES de qualquer deploy (ver package.json "deploy" e PENDENCIAS.md §4).
// Os padrões seguem ehPlaceholder() de src/lib/format.ts, mais o telefone e o CRO provisórios.
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve(process.argv[2] ?? 'dist');
if (!fs.existsSync(dir)) {
  console.error(`pasta não encontrada: ${dir} (rode npm run build antes)`);
  process.exit(2);
}

const PADROES = [
  /\[[^\]]{0,80}a confirmar[^\]]{0,80}\]/i, // "[a confirmar]", "[A confirmar: …]", "[instituição a confirmar]"
  /\[ano\]/i,
  /\[instituiç/i,
  /\b0{5}\b|CRO-SP 0{5}/, // CRO 00000
  /9?0000-0000|5519900000000|\+5519900000000/, // telefone/WhatsApp provisório
  /instagram\.com\/PERFIL|@PERFIL/,
  /XXXX/,
];
const TEXTO = /\.(html|txt|xml|webmanifest|json)$/i;
const SEM_EXT = new Set(['_redirects', '_headers']);

function* arquivos(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) yield* arquivos(p);
    else if (TEXTO.test(e.name) || SEM_EXT.has(e.name)) yield p;
  }
}

let total = 0;
const porArquivo = [];
for (const arq of arquivos(dir)) {
  const txt = fs.readFileSync(arq, 'utf8');
  const achados = [];
  for (const re of PADROES) {
    const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
    for (const m of txt.matchAll(g)) {
      const i = m.index ?? 0;
      achados.push(txt.slice(Math.max(0, i - 40), i + m[0].length + 40).replace(/\s+/g, ' '));
    }
  }
  if (achados.length) {
    total += achados.length;
    porArquivo.push({ arq: path.relative(dir, arq), achados });
  }
}

if (!total) {
  console.log(`✓ nenhum dado provisório em ${path.relative(process.cwd(), dir) || dir}`);
  process.exit(0);
}
for (const { arq, achados } of porArquivo) {
  console.log(`✗ ${arq} (${achados.length})`);
  for (const a of [...new Set(achados)].slice(0, 4)) console.log(`    …${a}…`);
}
console.log(`\n${total} ocorrência(s) de dados provisórios em ${porArquivo.length} arquivo(s). Publicação bloqueada.`);
console.log('Preencha src/data/site.ts e os trechos "[a confirmar]" (PENDENCIAS.md) e rode o build de novo.');
process.exit(1);
