import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Serviços: cada arquivo .md em src/content/servicos vira /servicos/<arquivo>/.
 * - tipo "categoria": as 4 categorias do índice (reabilitação oral, prevenção, estética dental, estética da face)
 * - tipo "servico": páginas específicas dentro de uma categoria (prótese, implantes, facetas, clareamento)
 * O corpo em Markdown usa H2 em forma de pergunta real do paciente ("Para quem é indicada?").
 */
const servicos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicos' }),
  schema: ({ image }) =>
    z.object({
      /** H1 da página, com a cidade. Ex.: "Prótese dentária em Campinas" */
      titulo: z.string(),
      /** Nome curto para menus, cards e breadcrumbs. Ex.: "Prótese dentária" */
      nome: z.string(),
      tipo: z.enum(['categoria', 'servico']),
      categoria: z.enum(['reabilitacao-oral', 'prevencao-e-manutencao', 'estetica-dental', 'estetica-da-face']),
      /** Ordem no índice (categorias 1–4; serviços dentro da categoria). */
      ordem: z.number(),
      /** <title> com até 60 caracteres. */
      seoTitle: z.string().max(60),
      /** Meta description com até 158 caracteres. */
      description: z.string().max(158),
      /**
       * Lead do cabeçalho: 1–2 frases (até ~35 palavras) com a resposta direta "o que é". Fica acima da dobra
       * com o CTA, então precisa ser curto (até 5 linhas em 390 px).
       */
      lead: z.string().max(220).optional(),
      /** Continuação da resposta direta (para quem, como funciona): abre o corpo da página, em texto corrido. */
      resumo: z.string(),
      /** Texto curto dos cartões "Nesta área" e "Veja também" (até ~90 caracteres, sem CTA e sem bairro). */
      cartao: z.string().max(110).optional(),
      /** Tratamentos incluídos (aparecem no índice da home e no hub). */
      itens: z.array(z.string()).default([]),
      imagem: image(),
      imagemAlt: z.string(),
      /** Legenda da foto (FIG. 0X): descreve a imagem, não repete o H1. Ex.: "Retrato · sala com ripado". */
      legenda: z.string().optional(),
      /** Situações em que o tratamento costuma ser indicado (sem promessa de resultado). */
      indicacoes: z.array(z.string()).default([]),
      /** Etapas do tratamento, na ordem. */
      etapas: z.array(z.object({ titulo: z.string(), texto: z.string() })).default([]),
      faq: z.array(z.object({ pergunta: z.string(), resposta: z.string() })).default([]),
      /** ids de outros serviços relacionados (links internos). */
      relacionados: z.array(z.string()).default([]),
      atualizadoEm: z.coerce.date(),
      prioridadeSeo: z.enum(['alta', 'media', 'baixa']).default('media'),
    }),
});

/** Páginas institucionais em Markdown (sobre, consultório, privacidade). */
const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
  schema: z.object({
    titulo: z.string(),
    seoTitle: z.string().max(60),
    description: z.string().max(158),
    atualizadoEm: z.coerce.date(),
  }),
});

export const collections = { servicos, paginas };
