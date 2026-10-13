/**
 * Utilitários para o HTML que o Astro gera a partir do Markdown das coleções.
 * Permitem intercalar fotos e componentes entre as seções (H2) de uma página institucional.
 */

export interface SecaoMd {
  /** id gerado pelo Astro para o <h2> (âncora). */
  id: string;
  /** Texto do H2, sem tags. */
  titulo: string;
  /** HTML depois do H2, até o próximo H2. */
  corpo: string;
}

/** Remove tags HTML e normaliza espaços. */
export function semTags(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Divide o HTML renderizado em introdução (antes do primeiro H2) e seções por H2. */
export function secoesPorH2(html: string): { intro: string; secoes: SecaoMd[] } {
  const partes = html.split(/(?=<h2[\s>])/);
  const intro = partes[0]?.startsWith('<h2') ? '' : (partes.shift() ?? '');
  const secoes = partes.map((p) => {
    const m = p.match(/^<h2(?:\s+id="([^"]*)")?[^>]*>([\s\S]*?)<\/h2>([\s\S]*)$/);
    return { id: m?.[1] ?? '', titulo: semTags(m?.[2] ?? ''), corpo: (m?.[3] ?? '').trim() };
  });
  return { intro: intro.trim(), secoes };
}

/** Acha a seção cujo título contém o trecho (sem diferenciar maiúsculas). */
export function secao(secoes: SecaoMd[], trecho: string): SecaoMd | undefined {
  const t = trecho.toLowerCase();
  return secoes.find((s) => s.titulo.toLowerCase().includes(t));
}

/**
 * Lê uma lista ordenada no formato "1. **Título.** Texto" e devolve { titulo, texto }[]
 * (para o componente Etapas). Devolve também o HTML sem a lista.
 */
export function etapasDaLista(html: string): { etapas: { titulo: string; texto: string }[]; resto: string } {
  const ol = html.match(/<ol>[\s\S]*?<\/ol>/);
  if (!ol) return { etapas: [], resto: html };
  const etapas = [...ol[0].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => {
    const li = m[1];
    const forte = li.match(/<strong>([\s\S]*?)<\/strong>/);
    const titulo = semTags(forte?.[1] ?? '').replace(/[.:]\s*$/, '');
    const texto = semTags(forte ? li.replace(forte[0], '') : li);
    return { titulo, texto };
  });
  return { etapas, resto: html.replace(ol[0], '').trim() };
}

/** Remove a primeira lista (<ul>) do HTML (quando ela é substituída por um componente). */
export function semPrimeiraLista(html: string): string {
  return html.replace(/<ul>[\s\S]*?<\/ul>/, '').trim();
}

/** Marca a primeira ocorrência de `palavra` com *itálico* (sintaxe de SecaoTitulo/italico()). */
export function comItalico(texto: string, palavra?: string): string {
  if (!palavra || !texto.includes(palavra)) return texto;
  return texto.replace(palavra, `*${palavra}*`);
}

/** Contagem de palavras de um HTML (para QA). */
export function palavras(html: string): number {
  return semTags(html).split(' ').filter(Boolean).length;
}
