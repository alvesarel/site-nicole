/**
 * Nós JSON-LD (schema.org) gerados a partir de src/data/site.ts.
 * Regras (pesquisa/03 §2 + CFO): sem AggregateRating, Review ou priceRange; "cirurgiã-dentista", nunca "especialista".
 * O Base.astro já inclui WebSite + Dentist + Person + WebPage em toda página (e BreadcrumbList quando há breadcrumbs).
 * Páginas acrescentam Service, FAQPage etc. pela prop `jsonLd`.
 */
import { SITE, PROFISSIONAL, CONTATO, ENDERECO, HORARIO } from '../data/site';
import { dataIso, ehPlaceholder, enderecoLinha1, horaSchema, semMarcacao } from './format';
import { respostaTexto } from '../data/faq';

export type NoJsonLd = Record<string, unknown>;

const BASE = SITE.url.replace(/\/$/, '');

/** URL absoluta a partir de um caminho do site. */
export function urlAbsoluta(caminho: string): string {
  if (/^https?:\/\//.test(caminho)) return caminho;
  return new URL(caminho, `${BASE}/`).href;
}

export const IDS = {
  website: `${BASE}/#website`,
  consultorio: `${BASE}/#consultorio`,
  nicole: `${BASE}/#nicole`,
} as const;

const sameAs = (): string[] => [CONTATO.instagramUrl].filter((u) => !ehPlaceholder(u));

const UF_NOME: Record<string, string> = { SP: 'São Paulo', MG: 'Minas Gerais', RJ: 'Rio de Janeiro', PR: 'Paraná' };

export function websiteNode(): NoJsonLd {
  return {
    '@type': 'WebSite',
    '@id': IDS.website,
    url: `${BASE}/`,
    name: SITE.nome,
    inLanguage: SITE.idioma,
    publisher: { '@id': IDS.consultorio },
  };
}

/** Fotos reais para o JSON-LD (URLs geradas no Base com getImage): retrato para Person, consultório para Dentist. */
export interface FotosSchema {
  retrato?: string;
  consultorio?: string[];
}

export function dentistNode(fotos: FotosSchema = {}): NoJsonLd {
  // dados ainda não confirmados (placeholders) ficam fora do JSON-LD: nunca publicar NAP falso
  const temTelefone = !ehPlaceholder(CONTATO.telefoneE164);
  const temHorario = !ehPlaceholder(HORARIO.texto);
  const imagens = fotos.consultorio?.length ? fotos.consultorio : [urlAbsoluta(SITE.ogImagem)];
  return {
    '@type': 'Dentist',
    '@id': IDS.consultorio,
    // igual ao nome do Perfil da Empresa no Google (sem palavras-chave); o cargo vai em description/jobTitle
    name: SITE.nome,
    description: `${PROFISSIONAL.cargo} no ${ENDERECO.bairro}, ${ENDERECO.cidade} – ${ENDERECO.uf}. ${PROFISSIONAL.atuacao}.`,
    url: `${BASE}/`,
    image: imagens,
    logo: urlAbsoluta('/icon-512.png'),
    ...(temTelefone ? { telephone: CONTATO.telefoneE164 } : {}),
    // e-mail fica de fora até ser confirmado (CONTATO.email está marcado CONFIRMAR em site.ts)
    medicalSpecialty: 'Dentistry',
    isAcceptingNewPatients: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ehPlaceholder(ENDERECO.complemento) ? ENDERECO.ruaCompleta : enderecoLinha1(),
      addressLocality: ENDERECO.cidade,
      addressRegion: ENDERECO.uf,
      postalCode: ENDERECO.cep,
      addressCountry: ENDERECO.pais,
    },
    geo: { '@type': 'GeoCoordinates', latitude: ENDERECO.geo.lat, longitude: ENDERECO.geo.lng },
    hasMap: ENDERECO.googleMapsUrl,
    areaServed: { '@type': 'City', name: ENDERECO.cidade },
    ...(temHorario
      ? {
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [...HORARIO.dias],
              opens: horaSchema(HORARIO.abre),
              closes: horaSchema(HORARIO.fecha),
            },
          ],
        }
      : {}),
    founder: { '@id': IDS.nicole },
    employee: { '@id': IDS.nicole },
    ...(sameAs().length ? { sameAs: sameAs() } : {}),
  };
}

export function personNode(fotos: FotosSchema = {}): NoJsonLd {
  const graduacao = PROFISSIONAL.formacao[0];
  const temCro = !ehPlaceholder(PROFISSIONAL.cro);
  const ufCro = PROFISSIONAL.cro.match(/CRO-([A-Z]{2})/)?.[1] ?? ENDERECO.uf;
  return {
    '@type': 'Person',
    '@id': IDS.nicole,
    name: PROFISSIONAL.nome,
    honorificPrefix: PROFISSIONAL.tratamento,
    jobTitle: PROFISSIONAL.cargo,
    description: `${PROFISSIONAL.cargo}. ${PROFISSIONAL.atuacao}.`,
    url: urlAbsoluta('/dra-nicole-almeida/'),
    image: fotos.retrato ?? urlAbsoluta(SITE.ogImagem),
    worksFor: { '@id': IDS.consultorio },
    knowsAbout: ['Prótese dentária', 'Reabilitação oral', 'Implantes dentários', 'Estética dental'],
    ...(graduacao && !ehPlaceholder(graduacao.instituicao)
      ? { alumniOf: { '@type': 'CollegeOrUniversity', name: graduacao.instituicao } }
      : {}),
    ...(temCro
      ? {
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Inscrição profissional',
            name: PROFISSIONAL.cro,
            recognizedBy: {
              '@type': 'Organization',
              name: `Conselho Regional de Odontologia de ${UF_NOME[ufCro] ?? ufCro}`,
            },
          },
        }
      : {}),
    ...(sameAs().length ? { sameAs: sameAs() } : {}),
  };
}

export interface OpcoesPagina {
  path: string;
  titulo: string;
  descricao: string;
  atualizadoEm?: Date | string;
  /** WebPage, AboutPage, ContactPage, FAQPage, CollectionPage, MedicalWebPage… */
  tipo?: string;
  /** @id da entidade principal da página (ex.: IDS.nicole no Sobre, IDS.consultorio no Contato). */
  principal?: string;
  /** Página com conteúdo de saúde que a Dra. Nicole revisa (serviços, home, sobre, dúvidas, consultório). */
  revisavel?: boolean;
}

/**
 * Página atual. lastReviewed/reviewedBy (E-E-A-T de conteúdo de saúde) só entram quando a Dra. Nicole de fato
 * revisou os textos (SITE.revisadoEm preenchido) e só nas páginas com conteúdo de saúde (`revisavel`).
 */
export function webPageNode({ path, titulo, descricao, atualizadoEm, tipo = 'WebPage', principal, revisavel = false }: OpcoesPagina): NoJsonLd {
  const url = urlAbsoluta(path);
  const data = dataIso(atualizadoEm ?? SITE.atualizadoEm);
  const revisao = revisavel && SITE.revisadoEm ? dataIso(SITE.revisadoEm) : undefined;
  return {
    '@type': tipo,
    '@id': `${url}#webpage`,
    url,
    name: semMarcacao(titulo),
    description: descricao,
    inLanguage: SITE.idioma,
    isPartOf: { '@id': IDS.website },
    about: { '@id': principal ?? IDS.consultorio },
    ...(principal ? { mainEntity: { '@id': principal } } : {}),
    dateModified: data,
    ...(revisao ? { lastReviewed: revisao, reviewedBy: { '@id': IDS.nicole } } : {}),
  };
}

export interface OpcoesServico {
  nome: string;
  /** caminho da página, ex. /servicos/protese-dentaria/ */
  path: string;
  descricao?: string;
  /** Nome da categoria-mãe (opcional). */
  categoria?: string;
}

export function serviceNode({ nome, path, descricao, categoria }: OpcoesServico): NoJsonLd {
  const url = urlAbsoluta(path);
  return {
    '@type': 'Service',
    '@id': `${url}#servico`,
    name: nome,
    serviceType: nome,
    ...(categoria ? { category: categoria } : {}),
    ...(descricao ? { description: descricao } : {}),
    url,
    provider: { '@id': IDS.consultorio },
    areaServed: { '@type': 'City', name: ENDERECO.cidade },
  };
}

export interface ItemTrilha {
  nome: string;
  href: string;
}

export function breadcrumbListNode(itens: ItemTrilha[], path: string): NoJsonLd {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${urlAbsoluta(path)}#breadcrumbs`,
    itemListElement: itens.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.nome,
      item: urlAbsoluta(it.href),
    })),
  };
}

export function faqPageNode(itens: { pergunta: string; resposta: string }[], path: string): NoJsonLd {
  return {
    '@type': 'FAQPage',
    '@id': `${urlAbsoluta(path)}#faq`,
    mainEntity: itens.map((q) => ({
      '@type': 'Question',
      name: q.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: respostaTexto(q.resposta) },
    })),
  };
}

/** Monta o documento final. */
export function grafo(nos: NoJsonLd[]): string {
  const doc = { '@context': 'https://schema.org', '@graph': nos };
  // evita fechar o <script> por engano
  return JSON.stringify(doc).replace(/</g, '\\u003c');
}
