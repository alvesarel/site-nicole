# Pendências para publicar o site

Tudo abaixo está como placeholder no site. Os dados ficam centralizados em
[`src/data/site.ts`](src/data/site.ts): basta trocar ali (e no `public/_redirects`)
que o site inteiro se atualiza.

## 1. Dados obrigatórios (CFO e Google)

| # | O que falta | Onde aparece | Placeholder atual |
|---|---|---|---|
| 1 | **Número do CRO-SP** da Dra. Nicole. O mockup do receituário mostra "CRO/MG 61102": é dela? Já tem inscrição (ou secundária) no CRO-SP? | Rodapé de todas as páginas, Sobre, JSON-LD | `CRO-SP 00000` |
| 2 | **Sala/conjunto** no Edifício Santa Apolônia (R. Barreto Leme, 2281, Cambuí). O endereço veio da ficha "Allevare Coworking Odontológico" no Google Maps: confirmar | Rodapé, Contato, mapa, JSON-LD | `sala [a confirmar]` |
| 3 | **WhatsApp e telefone** para o botão "Click para agendar" | Todos os CTAs, `/agendar` | `(19) 90000-0000` |
| 4 | **Horário de atendimento** | Rodapé, Contato, JSON-LD | Seg. a sex., 9h às 18h |
| 5 | **Coordenadas exatas** (pin do Google Maps) | Mapa e JSON-LD | aproximadas |
| 6 | Atende como **pessoa física ou empresa (PJ)**? Se PJ: razão social, CNPJ e inscrição da empresa no CRO-SP (o CFO exige no rodapé) | Rodapé, Privacidade | — |
| 7 | **E-mail** de contato | Privacidade, Contato | `contato@dranicolealmeida.com.br` |

## 2. Formação e credenciais

| # | Pergunta |
|---|---|
| 8 | Instituição e ano da **graduação** em Odontologia |
| 9 | A pós em **Prótese, Implantes e Cirurgias Periodontais (São Leopoldo Mandic)** já foi concluída? O título de especialista foi **registrado no CFO**? Enquanto não houver registro, o site não pode usar a palavra "especialista" (Código de Ética, art. 44). |
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

- [ ] Criar conta na **Cloudflare** e conectar o repositório `alvesarel/site-nicole` (Workers & Pages → Create → Import a repository). Build: `npm run build`. Deploy: `npx wrangler deploy`.
- [ ] Apontar o domínio (Registro.br → DNS da Cloudflare).
- [ ] Na Cloudflare, em **AI Crawl Control**, liberar os bots de busca de IA (OAI-SearchBot, Claude-SearchBot, PerplexityBot): por padrão a Cloudflare bloqueia.
- [ ] Ativar o **Cloudflare Web Analytics** (sem cookies, dispensa banner).
- [ ] Cadastrar o site no **Google Search Console** e no **Bing Webmaster Tools** e enviar o sitemap (`/sitemap-index.xml`).
- [ ] Considerar deixar o repositório **privado** (a hospedagem na Cloudflare funciona igual).

## 5. Conteúdo para revisão da Dra. Nicole

- Todos os textos dos serviços foram escritos com base no brand book e em informação clínica geral. **Ela precisa ler e aprovar** (o rodapé diz "Conteúdo revisado por Dra. Nicole Almeida").
- A página de **Estética da face** (toxina botulínica e preenchedores) está discreta de propósito: a Res. CFO-198/2019 foi declarada ilegal pelo TRF-1 em 19/08/2026 e o CFO vai recorrer. Revisar quando o acórdão for publicado.

## 6. Trechos "[a confirmar]" no conteúdo das páginas

Aparecem no site como texto entre colchetes até serem respondidos (arquivos em `src/content/` e `src/data/faq.ts`).

| Página | O que confirmar |
|---|---|
| Sobre (`paginas/dra-nicole-almeida.md`) | Nº do CRO-SP; instituição e ano da graduação; se a pós na São Leopoldo Mandic está concluída; formato e datas das mentorias |
| Consultório (`paginas/consultorio.md`) | Acesso para cadeira de rodas/elevador; estacionamento no prédio ou nas proximidades |
| Privacidade (`paginas/privacidade.md`) | CPF ou CNPJ da controladora; e-mail; enquadramento como agente de pequeno porte (Res. CD/ANPD nº 2/2022); se o Cloudflare Web Analytics será ativado; prazo de guarda dos logs e das conversas de WhatsApp |
| Perguntas frequentes (`src/data/faq.ts`) | Convênios aceitos e reembolso; idade e tipos de atendimento para crianças |
| Contato | O e-mail não aparece na página nem no JSON-LD até ser confirmado (só na Privacidade) |
