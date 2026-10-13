/**
 * Utilitários de formatação (pt-BR) usados nos componentes e páginas.
 * Nenhum dado de NAP mora aqui: tudo vem de src/data/site.ts.
 */
import { ENDERECO, CONTATO, HORARIO } from '../data/site';

type DataEntrada = Date | string | number;

/** Converte a entrada em Date. Strings "AAAA-MM-DD" são tratadas como data pura (sem fuso). */
function paraData(d: DataEntrada): Date {
  if (d instanceof Date) return d;
  if (typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d)) return new Date(`${d}T12:00:00Z`);
  return new Date(d);
}

/** 13/10/2026 */
export function dataCurta(d: DataEntrada): string {
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' }).format(paraData(d));
}

/** 13 de outubro de 2026 */
export function dataLonga(d: DataEntrada): string {
  return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(paraData(d));
}

/** 2026-10-13 (para <time datetime> e JSON-LD) */
export function dataIso(d: DataEntrada): string {
  return paraData(d).toISOString().slice(0, 10);
}

/** Escapa texto para uso em set:html. */
export function escaparHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * Converte a marcação de itálico `*palavra*` em <em>. O resto do texto é escapado.
 * Ex.: "Índice de *cuidados*." → "Índice de <em>cuidados</em>."
 */
export function italico(s: string): string {
  return escaparHtml(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** Remove a marcação de itálico (para title, aria-label, JSON-LD). */
export function semMarcacao(s: string): string {
  return s.replace(/\*([^*]+)\*/g, '$1');
}

/**
 * Divide um título em palavras para a animação de entrada (feita no build: zero JS, zero CLS).
 * Cada palavra vira <span class="w"><span class="wi" style="--i:n">…</span></span>; o itálico é preservado.
 */
export function dividirPalavras(s: string): string {
  const palavras: string[] = [];
  let espaco = false;
  for (const parte of s.split(/(\*[^*]+\*)/g).filter(Boolean)) {
    const ehItalico = /^\*[^*]+\*$/.test(parte);
    const texto = ehItalico ? parte.slice(1, -1) : parte;
    for (const t of texto.split(/(\s+)/)) {
      if (!t) continue;
      if (/^\s+$/.test(t)) {
        espaco = true;
        continue;
      }
      const html = ehItalico ? `<em>${escaparHtml(t)}</em>` : escaparHtml(t);
      // pontuação colada (ex.: "*vez*.") fica na mesma caixa da palavra anterior: não quebra sozinha
      if (!espaco && palavras.length) palavras[palavras.length - 1] += html;
      else palavras.push(html);
      espaco = false;
    }
  }
  return palavras.map((p, i) => `<span class="w"><span class="wi" style="--i:${i}">${p}</span></span>`).join(' ');
}

/** Parágrafos a partir de texto com linhas em branco. */
export function paragrafos(s: string): string[] {
  return s
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/** Linhas do endereço para exibição. */
export function enderecoLinhas(): [string, string] {
  const l1 = ENDERECO.complemento ? `${ENDERECO.rua} — ${ENDERECO.complemento}` : ENDERECO.rua;
  const l2 = `${ENDERECO.bairro}, ${ENDERECO.cidade} – ${ENDERECO.uf}, ${ENDERECO.cep}`;
  return [l1, l2];
}

/** Endereço em uma linha (texto corrido, aria-label, llms.txt). */
export function enderecoUmaLinha(): string {
  return enderecoLinhas().join(', ');
}

export const telHref = `tel:${CONTATO.telefoneE164}`;
export const telAria = `Ligar para ${CONTATO.telefone}`;
export const horarioTexto = HORARIO.texto;

/** "09:00" → "09:00:00" (schema.org). */
export function horaSchema(h: string): string {
  return /^\d{2}:\d{2}$/.test(h) ? `${h}:00` : h;
}

/** true se o valor ainda é um placeholder (não publicar em sameAs, alumniOf etc.). */
export function ehPlaceholder(v: string | null | undefined): boolean {
  return !v || /PERFIL|\[|a confirmar|00000|XXXX/i.test(v);
}
