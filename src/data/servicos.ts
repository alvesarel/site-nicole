/**
 * Índice fixo dos serviços (do arquivo conteudo/servicos.txt do cliente).
 * Usado na home, no hub /servicos/, no menu e no rodapé.
 * Cada `slug` corresponde a um arquivo em src/content/servicos/<slug>.md.
 */
export type CategoriaSlug = 'reabilitacao-oral' | 'prevencao-e-manutencao' | 'estetica-dental' | 'estetica-da-face';

export interface Categoria {
  slug: CategoriaSlug;
  numeral: string;
  nome: string;
  /** Uma frase para o índice da home. */
  chamada: string;
  itens: string[];
  /** Páginas específicas dentro da categoria. */
  paginas: { slug: string; nome: string }[];
}

export const CATEGORIAS: Categoria[] = [
  {
    slug: 'reabilitacao-oral',
    numeral: 'I',
    nome: 'Reabilitação oral',
    chamada: 'Para quem perdeu um ou mais dentes e quer voltar a mastigar, falar e sorrir com segurança.',
    itens: ['Implantes unitários e múltiplos', 'Prótese dentária', 'Cirurgia peri-implantar e plásticas gengivais'],
    paginas: [
      { slug: 'protese-dentaria', nome: 'Prótese dentária' },
      { slug: 'implantes-dentarios', nome: 'Implantes dentários' },
    ],
  },
  {
    slug: 'prevencao-e-manutencao',
    numeral: 'II',
    nome: 'Prevenção e manutenção',
    chamada: 'A base que sustenta qualquer tratamento e mantém o que foi construído.',
    itens: ['Limpeza profissional com Air Flow ou ultrassom', 'Consulta criteriosa com escaneamento intraoral 3D'],
    paginas: [],
  },
  {
    slug: 'estetica-dental',
    numeral: 'III',
    nome: 'Estética dental',
    chamada: 'Ajustes de cor, forma e proporção que respeitam o seu rosto e o seu jeito de sorrir.',
    itens: ['Clareamento dental', 'Facetas em cerâmica', 'Contorno estético com resina composta'],
    paginas: [
      { slug: 'lentes-e-facetas', nome: 'Lentes e facetas em cerâmica' },
      { slug: 'clareamento-dental', nome: 'Clareamento dental' },
    ],
  },
  {
    slug: 'estetica-da-face',
    numeral: 'IV',
    nome: 'Estética da face',
    chamada: 'Toxina botulínica e preenchedores na região orofacial, com indicação após avaliação.',
    itens: ['Toxina botulínica e preenchedores na região orofacial'],
    paginas: [],
  },
];

/** Todas as páginas de serviço (categorias + específicas), na ordem de navegação. */
export const TODAS_AS_PAGINAS = CATEGORIAS.flatMap((c) => [
  { slug: c.slug, nome: c.nome, categoria: c.slug, tipo: 'categoria' as const },
  ...c.paginas.map((p) => ({ slug: p.slug, nome: p.nome, categoria: c.slug, tipo: 'servico' as const })),
]);
