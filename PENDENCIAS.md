# Pendências para publicar o site

Tudo abaixo está como placeholder no site. Os dados ficam centralizados em
[`src/data/site.ts`](src/data/site.ts) (e o domínio em [`src/data/dominio.mjs`](src/data/dominio.mjs)):
basta trocar ali que o site inteiro se atualiza, inclusive o link curto `/agendar` (o `_redirects` é gerado no build).

**Trava de publicação:** `node scripts/check-placeholders.mjs dist` (ou `npm run check:placeholders`) falha
enquanto o build tiver telefone `90000-0000`, CRO ou qualquer trecho `[a confirmar]`. No CI do GitHub ela só avisa
(não bloqueia); o bloqueio real fica no build da Cloudflare (`npm run build && npm run check:placeholders`) e no
`npm run deploy`. Só some quando todos os itens abaixo estiverem preenchidos.

## 1. Dados obrigatórios (CFO e Google)

| # | O que falta | Onde aparece | Placeholder atual |
|---|---|---|---|
| 1 | **Número do CRO-SP** da Dra. Nicole. O mockup do receituário mostra "CRO/MG 61102": é dela? Já tem inscrição (ou secundária) no CRO-SP? | Rodapé de todas as páginas, Sobre, JSON-LD (só entra no JSON-LD depois de confirmado) | `CRO-SP [a confirmar]` |
| 2 | **Sala/conjunto** no Edifício Santa Apolônia (R. Barreto Leme, 2281, Cambuí). O endereço veio da ficha "Allevare Coworking Odontológico" no Google Maps: confirmar | Rodapé, Contato, mapa, JSON-LD | `sala [a confirmar]` |
| 3 | **WhatsApp e telefone** para o botão "Click para agendar" | Todos os CTAs, `/agendar` (gerado no build) | `(19) 90000-0000` (fora do JSON-LD até confirmar) |
| 4 | **Horário de atendimento** | Rodapé, Contato, JSON-LD (só depois de confirmado) | `Segunda a sexta, das 9h às 18h [a confirmar]` |
| 5 | **Coordenadas exatas** (pin do Google Maps) | Mapa e JSON-LD | aproximadas |
| 6 | Atende como **pessoa física ou empresa (PJ)**? Se PJ: razão social, CNPJ e inscrição da empresa no CRO-SP (o CFO exige no rodapé) | Rodapé, Privacidade | — |
| 7 | **E-mail** de contato | Privacidade, Contato | `contato@dranicolealmeida.com.br` |

## 2. Formação e credenciais

| # | Pergunta |
|---|---|
| 8 | Instituição e ano da **graduação** em Odontologia |
| 9 | A pós em **Prótese, Implantes e Cirurgias Periodontais (São Leopoldo Mandic)** já foi concluída? O título de especialista foi **registrado no CFO**? Enquanto não houver registro, o site não pode usar a palavra "especialista" (Código de Ética, art. 44) **nem divulgar o curso**: pelo art. 43 §1º III só se anunciam títulos stricto sensu (mestrado/doutorado), magistério e especialidade registrada. Por isso a pós saiu da home e do Sobre e ficou só como nota interna em `site.ts` (`publicar: false`). Se virar especialidade registrada, publicar no formato "Especialista em … — CRO-SP nº …". |
| 10 | Atende **convênios**? Quais? |

## 3. Presença online

| # | O que falta |
|---|---|
| 11 | **Domínio** (ex.: dranicolealmeida.com.br) — hoje o site usa `www.dranicolealmeida.com.br` como provisório |
| 12 | **Instagram** (@) |
| 13 | **Perfil da Empresa no Google**: link das avaliações. O Google exige placa com o nome dela no coworking para criar perfil próprio |
| 14 | Avaliações reais para exibir no site: até 3 trechos do Google **sobre o atendimento** (não sobre resultado), com **autorização escrita** do autor. Sem isso, o site mostra apenas o convite para ler as avaliações no Google |
| 15 | Doctoralia ou outros perfis (para `sameAs` no JSON-LD) |

## 4. Publicação (precisa de acesso do cliente)

- [ ] Criar conta na **Cloudflare** e conectar o repositório `alvesarel/site-nicole` (Workers & Pages → Create → Import a repository). Build: `npm run build && npm run check:placeholders` (a trava impede publicar dados provisórios). Deploy: `npx wrangler deploy`. Localmente, `npm run deploy` faz build + trava + deploy.
- [ ] Apontar o domínio (Registro.br → DNS da Cloudflare). Decidir **www × sem www** e trocar só em `src/data/dominio.mjs`.
- [ ] Com o domínio na Cloudflare, ativar no `wrangler.jsonc` as linhas comentadas `workers_dev: false`, `preview_urls: false` e `routes` (custom domain): sem isso, o site fica duplicado e rastreável em `*.workers.dev` e nas URLs de preview.
- [ ] Criar uma **Redirect Rule 301** de `dranicolealmeida.com.br/*` para `https://www.dranicolealmeida.com.br/${1}` (mantendo a query string). O `_redirects` não redireciona por host.
- [ ] Em **Security → Bots**, deixar **desligados** "Managed robots.txt" e "Block AI bots": eles reescrevem o `robots.txt` com `Disallow` para GPTBot, ClaudeBot e Google-Extended, contra o arquivo do projeto.
- [ ] Depois do deploy: `curl -sI https://dranicolealmeida.com.br/` deve responder 301 para o www, e `curl -s https://www.dranicolealmeida.com.br/robots.txt` deve vir idêntico a `dist/robots.txt`.
- [ ] Na Cloudflare, em **AI Crawl Control**, liberar os bots de busca de IA (OAI-SearchBot, Claude-SearchBot, PerplexityBot): por padrão a Cloudflare bloqueia.
- [ ] Ativar o **Cloudflare Web Analytics** (sem cookies, dispensa banner).
- [ ] Cadastrar o site no **Google Search Console** e no **Bing Webmaster Tools** e enviar o sitemap (`/sitemap-index.xml`).
- [ ] Considerar deixar o repositório **privado** (a hospedagem na Cloudflare funciona igual).

## 5. Conteúdo para revisão da Dra. Nicole

- Todos os textos dos serviços foram escritos com base no brand book e em informação clínica geral. **Ela precisa ler e aprovar.** Até lá o site **não** diz "Conteúdo revisado por" nem emite `reviewedBy` no JSON-LD. Quando ela aprovar, preencher `SITE.revisadoEm` (AAAA-MM-DD) em `src/data/site.ts`: a linha de revisão volta no fim de cada serviço e no rodapé das páginas de conteúdo (nunca na Privacidade nem na 404).
- **Imagem de compartilhamento** (`public/og/og-dra-nicole-almeida.jpg`): depois de confirmar o CRO, gerar de novo com a linha "Cirurgiã-dentista · CRO-SP nº ____ · Cambuí, Campinas" (`scripts/build-brand-assets.py`): o art. 43 pede nome e inscrição em toda divulgação.
- A página de **Estética da face** (toxina botulínica e preenchedores) está discreta de propósito: a Res. CFO-198/2019 foi declarada ilegal pelo TRF-1 em 19/08/2026 e o CFO vai recorrer. Revisar quando o acórdão for publicado.

## 6. Trechos "[a confirmar]" no conteúdo das páginas

Aparecem no site como texto entre colchetes até serem respondidos (arquivos em `src/content/` e `src/data/faq.ts`).

| Página | O que confirmar |
|---|---|
| Sobre (`paginas/dra-nicole-almeida.md`) | Nº do CRO-SP; instituição e ano da graduação. A seção "Ensino e mentorias" saiu até existir mentoria real, com formato e datas |
| Consultório (`paginas/consultorio.md`) | Acesso para cadeira de rodas/elevador; estacionamento no prédio ou nas proximidades; confirmar se o equipamento é mesmo **EMS AIRFLOW®** (marca registrada; se não for, usar "jato de pó (profilaxia com jato)") |
| Privacidade (`paginas/privacidade.md`) | CPF ou CNPJ da controladora; e-mail; enquadramento como agente de pequeno porte (Res. CD/ANPD nº 2/2022); se o Cloudflare Web Analytics será ativado; prazo de guarda dos logs e das conversas de WhatsApp |
| Perguntas frequentes (`src/data/faq.ts`) | Convênios aceitos e reembolso; **se atende crianças** (a resposta agora começa com "[A confirmar…]"), a partir de que idade e com quais atendimentos |
| Home | O bloco "Avaliações no Google" só aparece quando `AVALIACOES.googleUrl` (link direto das avaliações do Perfil da Empresa) estiver preenchido; use o mesmo link em `ENDERECO.googleMapsUrl` |
| Contato | O e-mail não aparece na página nem no JSON-LD até ser confirmado (só na Privacidade) |

## 7. Código de origem na mensagem do WhatsApp

Para não mandar à Meta o nome de um tratamento (dado que sugere saúde, LGPD art. 11), a mensagem pronta traz só
um código da página de onde a pessoa veio: "Olá, Dra. Nicole! Vim pelo site e gostaria de agendar uma avaliação. (ref. 05)".
Tabela (fonte: `ORIGEM_CODIGO` em `src/data/site.ts`):

| ref. | Página | ref. | Página |
|---|---|---|---|
| 01 | Página inicial | 10 | Clareamento dental |
| 02 | Sobre a Dra. Nicole | 11 | Estética da face |
| 03 | Serviços | 12 | Consultório |
| 04 | Reabilitação oral | 13 | Perguntas frequentes |
| 05 | Prótese dentária | 14 | Contato |
| 06 | Implantes dentários | 15 | Privacidade |
| 07 | Prevenção e manutenção | 16 | Página não encontrada |
| 08 | Estética dental | 17 | Link curto `/agendar` (bio e Perfil do Google) |
| 09 | Lentes e facetas em cerâmica | | |
