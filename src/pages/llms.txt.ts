/**
 * /llms.txt (formato llmstxt.org): resumo, NAP, serviços com links e descrições, sobre e perguntas frequentes.
 * Gerado de src/data/site.ts + coleções no build: muda sozinho quando os dados mudam.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, PROFISSIONAL, CONTATO, HORARIO } from '../data/site';
import { CATEGORIAS } from '../data/servicos';
import { FAQ_GERAL, respostaTexto } from '../data/faq';
import { enderecoUmaLinha } from '../lib/format';
import { ENDERECO } from '../data/site';

export const GET: APIRoute = async () => {
  const base = SITE.url.replace(/\/$/, '');
  const url = (p: string) => `${base}${p}`;
  const servicos = await getCollection('servicos');
  const paginas = await getCollection('paginas');
  const pag = (id: string) => paginas.find((p) => p.id === id)?.data;
  const nome = `${PROFISSIONAL.tratamento} ${PROFISSIONAL.nome}`;

  const linhasServicos = CATEGORIAS.flatMap((c) => {
    const cat = servicos.find((s) => s.id === c.slug);
    const linhas = [`- [${c.nome}](${url(`/servicos/${c.slug}/`)}): ${cat?.data.description ?? c.chamada}`];
    for (const p of c.paginas) {
      const e = servicos.find((s) => s.id === p.slug);
      linhas.push(`  - [${e?.data.nome ?? p.nome}](${url(`/servicos/${p.slug}/`)}): ${e?.data.description ?? ''}`.trimEnd());
    }
    return linhas;
  });

  const sobre = pag('dra-nicole-almeida');
  const consultorio = pag('consultorio');
  const privacidade = pag('privacidade');

  const corpo = [
    `# ${SITE.nomeCompleto} (${ENDERECO.cidade}–${ENDERECO.uf})`,
    '',
    `> ${PROFISSIONAL.cargo} (${PROFISSIONAL.cro}) no ${ENDERECO.bairro}, ${ENDERECO.cidade}. ${PROFISSIONAL.atuacao}. Atendimento individual, com hora marcada e planejamento com escaneamento intraoral 3D.`,
    '',
    `- Endereço: ${enderecoUmaLinha()} (${ENDERECO.predio})`,
    `- Horário: ${HORARIO.texto}. ${HORARIO.observacao}`,
    `- Telefone e WhatsApp: ${CONTATO.telefone}`,
    `- Agendamento: pelo WhatsApp, no botão "Click para agendar" de qualquer página (${url('/contato/')})`,
    '',
    '## Serviços',
    '',
    ...linhasServicos,
    '',
    '## Sobre',
    '',
    `- [${nome}](${url('/dra-nicole-almeida/')}): ${sobre?.description ?? ''}`.trimEnd(),
    `- [Consultório](${url('/consultorio/')}): ${consultorio?.description ?? ''}`.trimEnd(),
    `- [Contato e endereço](${url('/contato/')}): endereço, horário, telefone e rotas (Google Maps, Waze, Apple Maps).`,
    '',
    '## Perguntas frequentes',
    '',
    `- [Todas as perguntas frequentes](${url('/perguntas-frequentes/')})`,
    ...FAQ_GERAL.map((q) => `- ${q.pergunta} ${respostaTexto(q.resposta)}`),
    '',
    '## Optional',
    '',
    `- [Política de privacidade](${url('/privacidade/')}): ${privacidade?.description ?? ''}`.trimEnd(),
    `- [Mapa do site](${url('/sitemap-index.xml')})`,
    '',
  ].join('\n');

  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
