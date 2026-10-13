/**
 * Imagens: larguras padrão e preload da imagem LCP (mesmas URLs que o <Picture> gera).
 */
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/** Qualidade única de compressão (AVIF/WebP/JPG). O preload usa a mesma para gerar as mesmas URLs. */
export const QUALIDADE = 60;

/** Larguras padrão do srcset (filtradas pela largura original). */
export const LARGURAS = [400, 640, 800, 1000, 1280, 1600];

export function larguras(src: ImageMetadata, max = 1600, lista = LARGURAS): number[] {
  const ws = lista.filter((w) => w <= Math.min(max, src.width));
  return ws.length ? ws : [src.width];
}

export interface PreloadImagem {
  srcset: string;
  sizes: string;
  type: string;
  href?: string;
  /** Media query do preload (ex.: só no desktop, quando no mobile a foto fica abaixo da dobra). */
  media?: string;
}

/** Gera o <link rel="preload" as="image"> (AVIF) para a imagem do hero. Passe o resultado para Base (prop preload). */
export async function preloadImagem(src: ImageMetadata, sizes: string, ws: number[] = larguras(src)): Promise<PreloadImagem> {
  const img = await getImage({ src, widths: ws, sizes, format: 'avif', quality: QUALIDADE });
  return { srcset: img.srcSet.attribute, sizes, type: 'image/avif' };
}

/**
 * Foto do cabeçalho das páginas internas (CabecalhoPagina): mesmos sizes/widths no <Picture> e no preload.
 * Desktop: 5 de 12 colunas (≈ 500px em 1440); tablet: até 440px; mobile: ~72% da largura.
 */
export const HERO_INTERNO = {
  sizes: '(min-width: 1440px) 500px, (min-width: 1024px) 35vw, (min-width: 600px) 440px, 72vw',
  widths: [360, 480, 640, 800, 1000],
} as const;

/**
 * Preload da foto do cabeçalho interno (atalho de preloadImagem com HERO_INTERNO).
 * Obs.: testado só-desktop (media) em 13/10/2026: o LCP mobile (Lighthouse) não melhorou; mantido em todas as larguras.
 */
export function preloadCabecalho(src: ImageMetadata): Promise<PreloadImagem> {
  return preloadImagem(src, HERO_INTERNO.sizes, larguras(src, 1000, [...HERO_INTERNO.widths]));
}
