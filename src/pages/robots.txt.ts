/**
 * /robots.txt — libera buscadores e bots de busca/assistentes de IA (pesquisa/03 §3) e aponta o sitemap.
 * Obs.: na Cloudflare, revisar "AI Crawl Control" (bloqueia bots de IA por padrão em domínios novos).
 */
import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

const BOTS_IA = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
];

export const GET: APIRoute = () => {
  const base = SITE.url.replace(/\/$/, '');
  const corpo = [
    'User-agent: *',
    'Allow: /',
    '',
    '# Busca e assistentes de IA (liberados de forma explícita)',
    ...BOTS_IA.map((b) => `User-agent: ${b}`),
    'Allow: /',
    '',
    `Sitemap: ${base}/sitemap-index.xml`,
    '',
  ].join('\n');
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
