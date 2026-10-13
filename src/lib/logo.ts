/**
 * Logos vetoriais (src/assets/logo/*.svg, fill currentColor) lidos no build via ?raw.
 * - O logo horizontal vai para um sprite EXTERNO (/logo-<hash>.svg, gerado por src/pages/[sprite].svg.ts, cache
 *   immutable) e é reutilizado com <use href="/logo-<hash>.svg#lg-h">: ~15 KB a menos em cada HTML (LCP mobile).
 * - As "letras desconstruídas" são recortes (viewBox) do logo horizontal.
 */
import { createHash } from 'node:crypto';
import horizontalRaw from '../assets/logo/logo-horizontal.svg?raw';
import completoRaw from '../assets/logo/logo-completo.svg?raw';
import monogramaRaw from '../assets/logo/logo-monograma.svg?raw';

export type VarianteLogo = 'horizontal' | 'completo' | 'monograma';

interface SvgParseado {
  viewBox: string;
  /** Conteúdo interno (paths), sem o <svg> externo. */
  inner: string;
  paths: string[];
}

function parse(raw: string): SvgParseado {
  const viewBox = raw.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 100 100';
  const inner = raw.slice(raw.indexOf('>') + 1, raw.lastIndexOf('</svg>')).trim();
  const paths = inner.match(/<path\b[^>]*\/>/g) ?? [];
  return { viewBox, inner, paths };
}

export const LOGOS: Record<VarianteLogo, SvgParseado> = {
  horizontal: parse(horizontalRaw),
  completo: parse(completoRaw),
  monograma: parse(monogramaRaw),
};

/** id do <g> do logo horizontal no sprite. */
export const SPRITE_LOGO_ID = 'lg-h';

/** Conteúdo do sprite: cada letra do logo horizontal ganha id próprio (lg-h-0…), para ser reutilizada com <use>. */
export const SPRITE_LOGO_INNER = LOGOS.horizontal.paths
  .map((p, i) => p.replace('<path', `<path id="${SPRITE_LOGO_ID}-${i}"`))
  .join('');

/** Arquivo do sprite (servido em /<SPRITE_ARQUIVO>.svg); o hash muda quando o logo muda. */
export const SPRITE_SVG = `<svg xmlns="http://www.w3.org/2000/svg"><defs><g id="${SPRITE_LOGO_ID}">${SPRITE_LOGO_INNER}</g></defs></svg>`;
export const SPRITE_ARQUIVO = `logo-${createHash('sha256').update(SPRITE_SVG).digest('hex').slice(0, 10)}`;
export const SPRITE_URL = `/${SPRITE_ARQUIVO}.svg`;

/** href para <use>: o logo inteiro (padrão) ou uma letra (`lg-h-N`). */
export const spriteHref = (id: string = SPRITE_LOGO_ID) => `${SPRITE_URL}#${id}`;

/**
 * Recortes de letras do logo horizontal (viewBox em coordenadas do logo, altura 128).
 * Use no máximo uma letra por viewport e nunca atrás de texto.
 */
export const LETRAS = {
  N: '0 0 126 128',
  co: '151 0 223 128',
  e: '407 0 110 128',
  A: '658 0 113 128',
  M: '797 0 144 128',
  da: '1077 0 222 128',
} as const;
export type Letra = keyof typeof LETRAS;

/**
 * Montagem do nome: deslocamento inicial de cada letra, na ordem de entrada (--o).
 * Chave = transform do <path> no logo horizontal.
 */
const MONTAGEM: Record<string, { x: number; y: number; r: number; s: number }> = {
  'matrix(1,0,0,-1,7.15,12.57)': { x: -35, y: -60, r: -9, s: 1.15 },
  'matrix(1,0,0,-1,20.27,13.2)': { x: -15, y: -30, r: 7, s: 1.06 },
  'matrix(1,0,0,-1,109.65,11.31)': { x: 40, y: -70, r: 15, s: 1.16 },
  'matrix(1,0,0,-1,140.98,32.63)': { x: 75, y: -20, r: -20, s: 1.19 },
  'matrix(1,0,0,-1,330.45,23.88)': { x: 25, y: -65, r: -5, s: 1.08 },
  'matrix(1,0,0,-1,390.07,9.53)': { x: -25, y: -45, r: 17, s: 1.16 },
  'matrix(1,0,0,-1,506.28,45.42)': { x: 55, y: -27, r: 11, s: 1.1 },
  'matrix(1,0,0,-1,483.32,46.58)': { x: 85, y: -72, r: -14, s: 1.19 },
  'matrix(1,0,0,-1,766.74,84.08)': { x: -45, y: -57, r: -8, s: 1.13 },
  'matrix(1,0,0,-1,782.9,10.71)': { x: 30, y: -17, r: -19, s: 1.19 },
  'matrix(1,0,0,-1,934.81,108.91)': { x: 15, y: -70, r: 6, s: 1.08 },
  'matrix(1,0,0,-1,1000.43,21.03)': { x: -55, y: -27, r: -12, s: 1.12 },
  'matrix(1,0,0,-1,1015.49,45.87)': { x: -30, y: -75, r: 15, s: 1.19 },
  'matrix(1,0,0,-1,1065.2,30.91)': { x: 60, y: -50, r: 20, s: 1.16 },
  'matrix(1,0,0,-1,1294.72,67.8)': { x: -20, y: -40, r: -6, s: 1.06 },
  'matrix(1,0,0,-1,1207.16,70.94)': { x: 65, y: -72, r: 12, s: 1.19 },
};
const ORDEM = Object.keys(MONTAGEM);

/**
 * Letras do logo horizontal com os parâmetros da montagem, ordenadas pela entrada.
 * `href` aponta para a letra no sprite externo (…svg#lg-h-N): o nome montado não repete os paths no HTML.
 */
export function letrasDoNome(): { href: string; path: string; estilo: string }[] {
  return LOGOS.horizontal.paths
    .map((path, i) => {
      const t = path.match(/transform="([^"]+)"/)?.[1] ?? '';
      const o = ORDEM.indexOf(t);
      const m = MONTAGEM[t] ?? { x: 0, y: -40, r: 0, s: 1.1 };
      return { o: o < 0 ? ORDEM.length : o, i, path, m };
    })
    .sort((a, b) => a.o - b.o)
    .map(({ o, i, path, m }) => ({
      href: spriteHref(`${SPRITE_LOGO_ID}-${i}`),
      path,
      estilo: `--o:${o};--x:${m.x}px;--y:${m.y}px;--r:${m.r}deg;--s:${m.s}`,
    }));
}
