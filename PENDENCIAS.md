# Pendências

Os dados do site ficam em [`src/data/site.ts`](src/data/site.ts) (domínio em [`src/data/dominio.mjs`](src/data/dominio.mjs)).
Antes de publicar no domínio final: `npm run build && npm run check:placeholders` (a trava falha se houver dado provisório).

**Prévia ao vivo (temporária, não indexada):** https://site-nicole.site-nicole.workers.dev
(conta Cloudflare temporária alvesarel2@gmail.com; atualizar com `npm run build:previa` + `npx wrangler deploy`).

## Já confirmado (13/10/2026)

CRO-SP 180131 e CRO-MG 61102 · endereço R. Barreto Leme, 2281, Cambuí (Edifício Santa Apolônia) · WhatsApp/telefone
(11) 93744-8481 · empresa NICOLE INGRID DE ALMEIDA LTDA, CNPJ 66.942.205/0001-02 · e-mail dranicolealmeida@gmail.com ·
graduação UNINOVE, 2021 · atendimento só particular · domínio nicolealmeida.com.br · Instagram @dranicolealmeida ·
LinkedIn · Perfil no Google · prédio com acessibilidade e estacionamento · textos aprovados (revisão em 13/10/2026).

## Ainda falta

| # | O que | Situação atual no site |
|---|---|---|
| 1 | **Horário de atendimento** (dias e horas) | Mostra "Atendimento com hora marcada"; o JSON-LD não publica horário. Para publicar: preencher `HORARIO.dias/abre/fecha` em site.ts |
| 2 | **Inscrição da empresa no CRO-SP** (nº de inscrição da PJ). O Código de Ética (art. 43) pede, para pessoa jurídica, razão social + inscrição no CRO + responsável técnico | Rodapé mostra razão social, CNPJ e responsável técnica com CRO; o nº da PJ entra em `EMPRESA.croEmpresa` |
| 3 | **Perfil no Google com endereço antigo**: atualizar o endereço no Perfil da Empresa (o Google exige placa com o nome dela no coworking). Sem isso, o NAP fica inconsistente e prejudica o SEO local | O site já usa o endereço novo e linka o perfil para as avaliações |
| 4 | **Trechos de avaliações** (opcional): até 3 trechos reais do Google, sobre o atendimento, com autorização escrita do autor | Hoje o site mostra só o convite para ler as avaliações no Google |
| 5 | **Sala/conjunto** (opcional) | Endereço sem sala |
| 6 | **Pós-graduação na São Leopoldo Mandic (2024–2027)**: fica **fora do site** de propósito. O Código de Ética (art. 43 §1º III e art. 44 II) só permite divulgar graduação, mestrado/doutorado e especialidade **registrada** no CRO. Quando ela registrar o título de especialista, ele pode entrar como "Especialista em … — CRO-SP nº …" | Guardado como nota interna em site.ts (`publicar: false`) |

## Publicação no domínio definitivo

- [ ] Decidir em qual conta Cloudflare fica o site definitivo (a prévia está na conta temporária).
- [ ] Na Cloudflare: Workers & Pages → Create → Import a repository → `alvesarel/site-nicole`. Build: `npm run build && npm run check:placeholders`. Deploy: `npx wrangler deploy`.
- [ ] Domínio nicolealmeida.com.br: hoje há um site temporário nele. Apontar os nameservers do Registro.br para a Cloudflare e, em `wrangler.jsonc`, ativar `routes` (nicolealmeida.com.br + www), `workers_dev: false` e `preview_urls: false`.
- [ ] Na Cloudflare, em **AI Crawl Control**, liberar os bots de busca de IA (OAI-SearchBot, Claude-SearchBot, PerplexityBot).
- [ ] Ativar o **Web Analytics** da Cloudflare (sem cookies) e atualizar a seção "Estatísticas de visita" da Privacidade.
- [ ] Cadastrar o site no **Google Search Console** e no **Bing Webmaster Tools** com `/sitemap-index.xml`.

## Observações

- **Mensagem do WhatsApp:** leva um código neutro de origem ("ref. 05" = Prótese dentária; tabela `ORIGEM_CODIGO` em site.ts) em vez do nome do tratamento, para não enviar à Meta um dado de saúde (LGPD).
- **Estética da face:** texto discreto de propósito (Res. CFO-198/2019 declarada ilegal pelo TRF-1 em 19/08/2026; o CFO vai recorrer). Revisar quando o acórdão for publicado.
