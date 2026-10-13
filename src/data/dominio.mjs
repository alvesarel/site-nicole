// Domínio final do site: FONTE ÚNICA (CONFIRMAR, ver PENDENCIAS.md item 11, inclusive www × sem www).
// Usado pelo astro.config.mjs (sitemap) e por src/data/site.ts (canonical, og:url, JSON-LD, robots.txt, llms.txt).
export const SITE_URL = 'https://www.dranicolealmeida.com.br';

// Data da última atualização geral do conteúdo (rodapé, dateModified e lastmod do sitemap das páginas sem data própria).
// Mude só quando o conteúdo mudar, nunca a cada build.
export const ATUALIZADO_EM = '2026-10-13';
