/**
 * Perguntas frequentes gerais: página /perguntas-frequentes/ e bloco de FAQ da home.
 *
 * - `home: true` marca as que aparecem na home (exatamente 5).
 * - As respostas podem ter links internos em Markdown: [texto](/caminho/).
 *   No HTML, use `respostaHtml()`; no JSON-LD (FAQPage), use `respostaTexto()`.
 * - Nada de links de WhatsApp aqui: o botão "Click para agendar" vem do template.
 * - Revisado contra as regras de publicidade do CFO (sem valores, sem promessa de resultado).
 */

export interface PerguntaFrequente {
  pergunta: string;
  resposta: string;
  home?: boolean;
  tema: 'primeira-consulta' | 'tratamentos' | 'conforto' | 'valores-e-pagamento' | 'consultorio';
}

export const TEMAS_FAQ: Record<PerguntaFrequente['tema'], string> = {
  'primeira-consulta': 'Primeira consulta',
  tratamentos: 'Tratamentos',
  conforto: 'Conforto',
  'valores-e-pagamento': 'Valores e pagamento',
  consultorio: 'Consultório',
};

export const FAQ_GERAL: PerguntaFrequente[] = [
  {
    tema: 'primeira-consulta',
    home: true,
    pergunta: 'Como é a primeira consulta com escaneamento 3D?',
    resposta:
      'Começa com uma conversa sobre a sua história: o que incomoda, o que você espera e como está a sua saúde geral. Depois vêm o exame clínico e o escaneamento intraoral 3D, em que uma pequena câmera percorre os dentes e gera um modelo digital da boca em poucos minutos. Se for preciso, a Dra. Nicole pede radiografias ou tomografia. Com esses dados, ela prepara o planejamento, explicado com calma e entregue por escrito.',
  },
  {
    tema: 'tratamentos',
    home: true,
    pergunta: 'Perdi vários dentes. Ainda é possível ter dentes fixos?',
    resposta:
      'Muitas vezes, sim. Quando há osso suficiente, ou quando ele pode ser reconstruído com enxerto, os implantes podem sustentar próteses fixas, de um dente a uma arcada inteira. Quem não pode ou não quer fazer implantes também tem alternativas, como próteses removíveis bem adaptadas. A indicação depende do exame clínico, da tomografia e da sua saúde geral, e as opções possíveis no seu caso são explicadas no planejamento.',
  },
  {
    tema: 'tratamentos',
    home: true,
    pergunta: 'Qual a diferença entre prótese sobre implante, protocolo e dentadura?',
    resposta:
      'A prótese sobre implante é presa a implantes e repõe de um a vários dentes. O protocolo é uma prótese fixa que repõe todos os dentes de uma arcada, apoiada em geral em quatro a seis implantes. A dentadura, ou prótese total removível, se apoia na gengiva e sai da boca para a higiene. Cada uma tem indicações e cuidados próprios, explicados na página de [prótese dentária](/servicos/protese-dentaria/).',
  },
  {
    tema: 'conforto',
    home: true,
    pergunta: 'O tratamento é desconfortável?',
    resposta:
      'O conforto faz parte do planejamento. Os procedimentos são feitos com anestesia local quando indicada, as sessões têm o tempo adequado e você pode pedir uma pausa sempre que precisar. Cada etapa é explicada antes de começar. Depois de cirurgias, como a colocação de implantes, é comum ter inchaço e sensibilidade por alguns dias; você recebe orientações por escrito e, se necessário, a prescrição de medicamentos.',
  },
  {
    tema: 'tratamentos',
    pergunta: 'Quanto tempo leva uma reabilitação oral?',
    resposta:
      'Depende do ponto de partida. Uma prótese sobre dentes que já estão saudáveis pode ficar pronta em algumas semanas. Com implantes, costuma ser preciso esperar de 2 a 6 meses para que eles se integrem ao osso, e enxertos podem somar alguns meses. Em alguns casos, quando há indicação, uma prótese provisória fixa é instalada logo após os implantes. O cronograma do seu caso faz parte do plano entregue por escrito.',
  },
  {
    tema: 'valores-e-pagamento',
    home: true,
    pergunta: 'Quanto custa o tratamento?',
    resposta:
      'O valor depende do que o seu caso pede: quantos dentes estão envolvidos, se há necessidade de implantes ou enxertos, o tipo de prótese, o material escolhido, os exames complementares e o número de sessões. Por isso não existe um valor de tabela que sirva para todos. Depois da avaliação, você recebe o plano por escrito, com as etapas, as alternativas e o valor de cada uma. As formas de pagamento são conversadas no consultório.',
  },
  {
    tema: 'valores-e-pagamento',
    pergunta: 'A Dra. Nicole atende convênios?',
    resposta:
      'O atendimento é particular: a Dra. Nicole não trabalha com convênios odontológicos. Se o seu plano prevê reembolso, confira as regras com a operadora; os documentos do atendimento, como o recibo, podem ser solicitados no consultório.',
  },
  {
    tema: 'primeira-consulta',
    pergunta: 'Como faço para agendar uma consulta?',
    resposta:
      'Pelo WhatsApp. Toque em “Click para agendar” em qualquer página do site: a conversa abre com uma mensagem pronta, que você pode completar antes de enviar. Diga os dias e horários que funcionam para você e, se quiser, conte em poucas palavras o motivo da consulta. O consultório responde com as opções de agenda, e todo atendimento é com hora marcada.',
  },
  {
    tema: 'consultorio',
    pergunta: 'Onde fica o consultório e qual é o horário de atendimento?',
    resposta:
      'O consultório fica no Cambuí, em Campinas. O endereço completo, o horário de atendimento e os links para abrir a rota no Google Maps, no Waze ou no Apple Maps estão na página de [contato](/contato/). Todas as consultas são com hora marcada, então vale agendar antes de ir.',
  },
  {
    tema: 'tratamentos',
    pergunta: 'A Dra. Nicole atende crianças?',
    resposta:
      'Sim, a Dra. Nicole também atende crianças, mas o foco do consultório é o adulto, principalmente quem precisa de prótese, implantes ou reabilitação oral. Quando o caso pede acompanhamento de odontopediatria ou de ortodontia, a família recebe orientação e a indicação de um profissional dessa área.',
  },
  {
    tema: 'conforto',
    pergunta: 'Posso levar um acompanhante?',
    resposta:
      'Pode, sim. Muita gente prefere vir com alguém de confiança, principalmente na primeira consulta. O acompanhante pode esperar na sala de espera ou, se você quiser, participar da conversa sobre o planejamento. Em dias de cirurgia, como a colocação de implantes, vir acompanhado é recomendado.',
  },
  {
    tema: 'primeira-consulta',
    pergunta: 'O que devo levar na primeira consulta?',
    resposta:
      'Um documento com foto, a lista dos remédios que você usa e, se tiver, exames recentes da boca, como radiografias e tomografias. Se você trata diabetes, problemas cardíacos ou osteoporose, ou usa anticoagulantes, traga também os relatórios médicos, porque isso influencia o planejamento. Quem usa prótese ou placa deve vir com ela. Se você não tiver exames, tudo bem: o que for necessário é pedido na avaliação.',
  },
];

/** As 5 perguntas exibidas na home. */
export const FAQ_HOME: PerguntaFrequente[] = FAQ_GERAL.filter((p) => p.home);

const LINK_MD = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** Resposta em texto puro (sem a marcação dos links), para o JSON-LD FAQPage. */
export function respostaTexto(resposta: string): string {
  return resposta.replace(LINK_MD, '$1');
}

/** Resposta em HTML seguro, com os links internos convertidos em <a>. Use com set:html. */
export function respostaHtml(resposta: string): string {
  const escapado = resposta
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return escapado.replace(LINK_MD, '<a href="$2">$1</a>');
}

/** Compatibilidade: formato mínimo aceito pelo componente Faq (perguntas das páginas de serviço não têm tema). */
export type ItemFaq = Pick<PerguntaFrequente, 'pergunta' | 'resposta'>;
