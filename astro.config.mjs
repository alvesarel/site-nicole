// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domínio final: CONFIRMAR (mantenha igual a SITE.url em src/data/site.ts)
const SITE_URL = 'https://www.dranicolealmeida.com.br';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    // CSS pequeno inline: elimina requisições que bloqueiam a renderização
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
    }),
  ],
});
