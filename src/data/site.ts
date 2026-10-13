/**
 * Fonte única de dados do site (NAP, CRO, contato, horários, links).
 *
 * ⚠️ Tudo marcado com `CONFIRMAR` é placeholder e precisa ser validado com a
 * Dra. Nicole antes de publicar. Veja PENDENCIAS.md na raiz do projeto.
 */

import { SITE_URL, ATUALIZADO_EM } from './dominio.mjs';

export const SITE = {
  /** Domínio final (CONFIRMAR): vem de src/data/dominio.mjs, a mesma fonte do sitemap (astro.config.mjs). */
  url: SITE_URL,
  nome: 'Dra. Nicole Almeida',
  nomeCompleto: 'Dra. Nicole Almeida – Cirurgiã-Dentista',
  titulo: 'Dra. Nicole Almeida | Dentista no Cambuí, Campinas',
  descricao:
    'Cirurgiã-dentista, clínica geral com atuação em prótese e reabilitação oral no Cambuí, Campinas. Planejamento com escaneamento 3D. Agende sua avaliação.',
  idioma: 'pt-BR',
  ogImagem: '/og/og-dra-nicole-almeida.jpg',
  /** Data da última atualização do conteúdo (rodapé "Atualizado em" e dateModified). */
  atualizadoEm: ATUALIZADO_EM,
  /**
   * Data em que a Dra. Nicole LEU E APROVOU os textos (AAAA-MM-DD). Enquanto for null, o site NÃO diz
   * "Conteúdo revisado por" nem emite reviewedBy/lastReviewed no JSON-LD (PENDENCIAS §5).
   */
  revisadoEm: null as string | null,
} as const;

export const PROFISSIONAL = {
  tratamento: 'Dra.',
  nome: 'Nicole Almeida',
  cargo: 'Cirurgiã-dentista',
  /** CONFIRMAR: número de inscrição no CRO-SP (o mockup do receituário mostra CRO/MG 61102). Formato: 'CRO-SP 12345'. */
  cro: 'CRO-SP [a confirmar]',
  /** Linha exigida pelo CFO (art. 43 §1º I) enquanto não houver especialidade registrada. */
  atuacao: 'Clínica geral · Áreas de atuação: prótese e reabilitação oral',
  /** Consulta pública de inscrição no CRO-SP. */
  croConsultaUrl: 'https://website.crosp.org.br/',
  /**
   * Formação. `publicar: false` = nota interna, NÃO aparece no site.
   * Regra CFO (Código de Ética, art. 43 §1º III e art. 44 II): só se divulgam graduação, títulos stricto sensu
   * (mestrado/doutorado), magistério e especialidade REGISTRADA no CRO ("Especialista em … — CRO-SP nº …").
   * Pós lato sensu/aperfeiçoamento não entra, concluído ou não.
   */
  formacao: [
    // CONFIRMAR instituição e ano da graduação
    { periodo: '[ano]', titulo: 'Graduação em Odontologia', instituicao: '[instituição a confirmar]', publicar: true },
    // Nota interna: só publicar se virar especialidade registrada no CRO-SP (PENDENCIAS item 9).
    {
      periodo: '[ano]',
      titulo: 'Pós-graduação em Prótese, Implantes e Cirurgias Periodontais',
      instituicao: 'Faculdade São Leopoldo Mandic, Campinas',
      status: '[em andamento ou concluída: a confirmar]',
      publicar: false,
    },
  ],
} as const;

export const CONTATO = {
  /** CONFIRMAR: telefone/WhatsApp da Dra. Nicole. */
  telefone: '(19) 90000-0000',
  telefoneE164: '+5519900000000',
  whatsapp: '5519900000000',
  mensagemPadrao: 'Olá, Dra. Nicole! Vim pelo site e gostaria de agendar uma avaliação.',
  /** CONFIRMAR */
  email: 'contato@dranicolealmeida.com.br',
  /** CONFIRMAR */
  instagramUrl: 'https://www.instagram.com/PERFIL',
  instagramHandle: '@PERFIL',
} as const;

export const ENDERECO = {
  /** Provável (ficha "Allevare Coworking Odontológico" no Google Maps). CONFIRMAR sala. */
  rua: 'R. Barreto Leme, 2281',
  ruaCompleta: 'Rua Barreto Leme, 2281',
  complemento: 'sala [a confirmar]',
  predio: 'Edifício Santa Apolônia',
  bairro: 'Cambuí',
  cidade: 'Campinas',
  uf: 'SP',
  cep: '13025-085',
  pais: 'BR',
  /** Aproximadas. CONFIRMAR com o pin do Google Maps (5 casas decimais). */
  geo: { lat: -22.89769, lng: -47.05006 },
  /** CONFIRMAR: link do Perfil da Empresa no Google (maps.google.com/?cid=...). */
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Barreto+Leme+2281+Campinas+SP',
  wazeUrl: 'https://waze.com/ul?q=Rua%20Barreto%20Leme%202281%20Campinas&navigate=yes',
  appleMapsUrl: 'https://maps.apple.com/?q=Rua+Barreto+Leme+2281&address=Rua+Barreto+Leme,+2281,+Campinas+-+SP,+13025-085',
} as const;

export const HORARIO = {
  /** CONFIRMAR (tire o "[a confirmar]" quando ela confirmar; enquanto houver, o JSON-LD não publica o horário). */
  texto: 'Segunda a sexta, das 9h às 18h [a confirmar]',
  textoCurto: 'Seg. a sex., 9h–18h [a confirmar]',
  dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  abre: '09:00',
  fecha: '18:00',
  observacao: 'Atendimento com hora marcada.',
} as const;

/**
 * Avaliações. Regras (CFO + diretrizes do Google), ver pesquisa/03:
 * - NUNCA publicar depoimentos fictícios ou "de exemplo".
 * - Só trechos reais do Google, sobre atendimento (não sobre resultado clínico),
 *   com autorização do autor, sem foto, com link para a fonte.
 * - Não usar AggregateRating/Review no JSON-LD.
 * Enquanto `trechos` estiver vazio, o site mostra apenas o convite para ler as avaliações no Google.
 */
export const AVALIACOES = {
  /** CONFIRMAR: link "ver avaliações" do Perfil da Empresa no Google. */
  googleUrl: null as string | null,
  /** Nota e total exibidos como texto (opcional; atualizar manualmente). */
  nota: null as string | null,
  total: null as number | null,
  trechos: [] as { texto: string; autor: string; data?: string }[],
};

/**
 * Código neutro de cada origem de CTA (a página de onde a pessoa veio), usado no lugar do nome da página
 * na mensagem do WhatsApp. Motivo (LGPD): o texto pré-preenchido vai à Meta assim que o link abre, e o nome
 * do tratamento ("Implantes dentários", "Estética da face") sugeriria um dado de saúde.
 * Tabela para o consultório: PENDENCIAS.md §7.
 */
export const ORIGEM_CODIGO: Record<string, string> = {
  'página inicial': '01',
  'Sobre a Dra. Nicole': '02',
  'Serviços': '03',
  'Reabilitação oral': '04',
  'Prótese dentária': '05',
  'Implantes dentários': '06',
  'Prevenção e manutenção': '07',
  'Estética dental': '08',
  'Lentes e facetas em cerâmica': '09',
  'Clareamento dental': '10',
  'Estética da face': '11',
  'Consultório': '12',
  'Perguntas frequentes': '13',
  'Contato': '14',
  'Privacidade': '15',
  'Página não encontrada': '16',
  'link curto': '17',
};

/** Monta o link do WhatsApp com mensagem pré-preenchida; a origem vira um código neutro ("ref. 05"). */
export function whatsappUrl(origem?: string, mensagem: string = CONTATO.mensagemPadrao): string {
  const codigo = origem ? ORIGEM_CODIGO[origem] : undefined;
  const texto = codigo ? `${mensagem} (ref. ${codigo})` : mensagem;
  return `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const CTA_TEXTO = 'Click para agendar';
export const CTA_ARIA = 'Click para agendar pelo WhatsApp (abre em nova aba)';

/** Navegação principal (header) e rodapé. */
export const NAV = [
  { href: '/dra-nicole-almeida/', label: 'Sobre' },
  { href: '/servicos/', label: 'Serviços' },
  { href: '/consultorio/', label: 'Consultório' },
  { href: '/perguntas-frequentes/', label: 'Dúvidas' },
  { href: '/contato/', label: 'Contato' },
] as const;
