// Domínio final do site: FONTE ÚNICA (confirmado: nicolealmeida.com.br, sem www; o www redireciona na Cloudflare).
// Usado pelo astro.config.mjs (sitemap) e por src/data/site.ts (canonical, og:url, JSON-LD, robots.txt, llms.txt).
export const SITE_URL = 'https://nicolealmeida.com.br';

// Data da última atualização geral do conteúdo (rodapé, dateModified e lastmod do sitemap das páginas sem data própria).
// Mude só quando o conteúdo mudar, nunca a cada build.
export const ATUALIZADO_EM = '2026-10-13';
