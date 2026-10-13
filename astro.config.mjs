// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL, ATUALIZADO_EM } from './src/data/dominio.mjs';
import { whatsappUrl } from './src/data/site.ts';

/**
 * Data real de atualização de cada URL (frontmatter `atualizadoEm` das coleções), para o <lastmod> do sitemap.
 * Páginas sem data própria usam ATUALIZADO_EM (src/data/dominio.mjs). Nunca a data do build.
 */
function datasDoConteudo() {
  /** @type {Record<string, string>} */
  const mapa = {};
  const ler = (/** @type {string} */ pasta, /** @type {(slug: string) => string} */ rota) => {
    const dir = path.resolve('src/content', pasta);
    if (!fs.existsSync(dir)) return;
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md'))) {
      const m = fs.readFileSync(path.join(dir, f), 'utf8').match(/^atualizadoEm:\s*["']?(\d{4}-\d{2}-\d{2})/m);
      if (m) mapa[rota(f.replace(/\.md$/, ''))] = m[1];
    }
  };
  ler('servicos', (s) => `/servicos/${s}/`);
  ler('paginas', (s) => `/${s}/`);
  return mapa;
}
const DATAS = datasDoConteudo();

/**
 * public/_redirects gerado no build a partir de src/data/site.ts (fonte única do WhatsApp):
 * o link curto /agendar nunca fica com um número diferente do site.
 */
/** @returns {import('astro').AstroIntegration} */
const redirects = () => ({
  name: 'redirects-do-site',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const linhas = [
        '# Gerado no build (astro.config.mjs) a partir de src/data/site.ts. Não edite à mão.',
        `/agendar  ${whatsappUrl('link curto')}  302`,
        '/sobre  /dra-nicole-almeida/  301',
        '/faq  /perguntas-frequentes/  301',
        '',
      ];
      fs.writeFileSync(new URL('_redirects', dir), linhas.join('\n'));
    },
  },
});

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
      serialize(item) {
        const caminho = new URL(item.url).pathname;
        item.lastmod = DATAS[caminho] ?? ATUALIZADO_EM;
        delete item.changefreq;
        return item;
      },
    }),
    redirects(),
  ],
});
