/**
 * Sprite externo do logo horizontal: /logo-<hash>.svg (o hash vem do conteúdo, ver src/lib/logo.ts).
 * Servido com cache immutable (public/_headers, regra /logo-*).
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { SPRITE_ARQUIVO, SPRITE_SVG } from '../lib/logo';

export const getStaticPaths: GetStaticPaths = () => [{ params: { sprite: SPRITE_ARQUIVO } }];

export const GET: APIRoute = () =>
  new Response(SPRITE_SVG, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
