# 00 · Síntese da pesquisa e 5 direções de design

Projeto: site da Dra. Nicole Almeida, cirurgiã-dentista em Campinas–SP (prótese e reabilitação oral, público de alto padrão).
Data: 12/10/2026. Fontes: `BRIEF.md` e os relatórios 01 a 04 desta pasta, as capturas em `pesquisa/refs/` e os catálogos de fotos em `design-options/_shared/`.

Este documento é a especificação que os construtores dos conceitos devem seguir. Onde ele e o BRIEF divergem, vale este documento, porque ele já incorpora as regras do CFO levantadas no relatório 03 (por exemplo: depoimentos "de exemplo" só no protótipo e marcados como tal).

---

## 1. O que aprendemos

### 1.1 O que sinaliza alto padrão (e custa pouco)

1. **Contenção.** Paleta de 2 ou 3 tons, muito respiro e poucos elementos por tela. Chelsea Dental (verde oliva + creme) e Clínica Romana (branco + display fino) mostram isso. [chelseadentalclinic.co.uk](https://www.chelseadentalclinic.co.uk/) · [clinicaromana.com.br](https://clinicaromana.com.br/)
2. **Tipografia editorial.** Display serifada de alto contraste ou versaletes espaçadas nos títulos, texto neutro no corpo. Wolf usa Libre Caslon Display + Jost, Kina usa Cormorant + Inter, Glosman e Smile Code usam caixa-alta espaçada. A Arsenal SC da marca já cumpre o papel das versaletes.
3. **A profissional como pessoa, sem jaleco.** Retrato editorial com luz natural; consultório mostrado como lounge e não como sala cirúrgica. O ensaio da Nicole (terno creme, madeira clara, janelas) é melhor que o da maioria das referências.
4. **Texto com tese, não com promessa.** "A segunda opinião que vira a última." (Wolf), "A estética é consequência. A estrutura é decisão." (Kina). As expressões do brand book ("Sorrisos reais, sem pressa.", "Um sorriso de cada vez.") já têm esse tom.
5. **Um CTA calmo e sempre visível**, que leva a uma pessoa (WhatsApp com mensagem pronta e telefone). No mobile, barra fixa embaixo (modelo Glosman). [arthurglosmandds.com](https://arthurglosmandds.com/)
6. **Processo nomeado e em etapas.** Vende previsibilidade, essencial em reabilitação: Protocolo Wolf em 5 etapas, Design do Sorriso da Clínica KI em 4. Para a Nicole: **"Um sorriso de cada vez"**, com escaneamento 3D → planejamento → tratamento → acompanhamento. [marianawolf.com.br](https://www.marianawolf.com.br/) · [clinicaki.com.br](https://clinicaki.com.br/)
7. **Prova social verificável e perto do CTA.** Nota e número de avaliações com link para a fonte (Dębski põe "892+ opiniões" ao lado do botão). [debskiclinic.pl](https://debskiclinic.pl/)
8. **Velocidade como sinal de cuidado.** O site da Wolf tem 605 KB e abre em cerca de 0,5 s; Orny (concorrente no Cambuí) tem 9,1 MB e leva cerca de 9 s. Site leve parece caro.
9. **Assinatura gráfica própria, usada com parcimônia.** O "R" em marca-d'água da Romana, o kanji do Kina, o wordmark espaçado da Antara. A Nicole tem as letras desconstruídas do logo e a padronagem.
10. **Acolher quem vem de fora** e falar da dor real (Wolf: "Quando procurar", "Para quem mora fora"; Neolife BH: "Você evita sorrir mesmo quando está feliz?").

### 1.2 O que evitar

- **Preto e dourado com brilho e partículas** (Paulo Kano, Viotto). É o oposto da "leveza".
- **Banco de imagem** e **foto intraoral no hero** (CECI, Integral, Rowan Vilar). O mockup `marca-postagem-2.webp` (boca com espelho clínico) fica fora de todos os conceitos.
- **Autoelogio e promessa:** "alto padrão", "premium", "referência", "especialista", "sorriso perfeito", "resultados garantidos", "sem dor".
- **Verde-WhatsApp saturado**, bolhas flutuantes, pop-ups e banner de cookies disputando a tela (Orny, Sculpere, Bespoke).
- **Carrossel no hero** e lista de 10 especialidades com ícones.
- **Preloader com % e hero em 3D/WebGL** (Antara, South Cliff, Henrique Masson): spinner, tela vazia, nenhum CTA e nada para Google ou IA indexar. [antaraspawellness.com](https://antaraspawellness.com/) · [southcliffdentalgroup.com](https://southcliffdentalgroup.com/) · [henriquemasson.com.br](https://henriquemasson.com.br/)
- **Conteúdo que só aparece depois que o JS anima** e scroll sequestrado (Antara mostrou seções inteiras vazias na captura `intl-antara-spa/desktop-part-2.jpg`).
- **Vídeo pesado na home** (Colette cerca de 44 MB, Dębski cerca de 20 MB, Viotto 129 MB).
- **Padronagem em excesso.** A Billig (Brasília) usa verde-escuro com letras do logo espalhadas, quase a mesma ideia da Nicole, e o resultado ficou popular por saturar o padrão e somar verde-limão. [billigodontologia.com.br](https://billigodontologia.com.br/)

### 1.3 Oportunidade em Campinas

Os concorrentes do Cambuí e de Nova Campinas (Orny, Sculpere, Natália Maggi, Luis Antunes) usam templates lentos ou genéricos. Um site editorial com menos de 1 MB, texto acolhedor para quem perdeu dentes, um protocolo com nome e SEO local feito dentro das regras do CFO já coloca a Nicole à frente.

---

## 2. Conformidade CFO que muda o design

Não é parecer jurídico; validar com o CRO-SP ou um advogado antes de publicar (relatório 03).

| Tema | Regra para os conceitos | Regra para o site final |
|---|---|---|
| **"Especialista"** | Proibido em qualquer lugar: H1, title, meta, alt, JSON-LD, microcopy. Usar "cirurgiã-dentista", "atuação em prótese e reabilitação oral", "foco em reabilitação oral". | Igual, até haver especialidade registrada no CRO (CEO art. 44 II). Usar "Clínica geral · Áreas de atuação: prótese e reabilitação oral" (art. 43 §1º I). Categoria do Google: "Dentista". |
| **CRO** | Rodapé com "Dra. Nicole Almeida · Cirurgiã-dentista · CRO-SP 00000 · Clínica geral · Áreas de atuação: prótese e reabilitação oral" e "Responsável técnica: Dra. Nicole Almeida — CRO-SP 00000". | Em todas as páginas; também na legenda de qualquer imagem de caso (Res. CFO-196/2019, art. 4º). Se for PJ: razão social e inscrição da PJ no CRO-SP. |
| **Depoimentos** | Bloco **"Avaliações no Google"**: nota "5,0" com etiqueta visível "placeholder" e link "Ler todas no Google ↗". Até 3 trechos curtos, **sobre o atendimento** (nunca sobre resultado clínico), **sem foto**, com nome abreviado e etiqueta visível **"Exemplo de layout"**. | Só trechos reais do Google, sem edição, com autorização escrita, sem foto, com link para a fonte. Nunca `AggregateRating`/`Review` no JSON-LD (o Google trata como autopromocional). |
| **Antes/depois** | Não usar em nenhum conceito. | Só casos próprios, com TCLE, só diagnóstico e resultado (nunca "durante"), legenda neutra com nome + CRO. |
| **Preço e promoção** | Nada de preço, "a partir de", parcelamento, "avaliação gratuita", "promoção". Nada de `priceRange`. | Igual (art. 44 I, IX, X). Na FAQ, falar dos fatores que influenciam o valor, sem números. |
| **Números de autoridade** | Não inventar anos de experiência, nº de pacientes ou prêmios. Usar fatos seguros ("4 etapas", "atendimento individual") ou placeholders entre colchetes. | Só números verificáveis. |
| **Toxina botulínica** | Card "Estética da face" por último e discreto: "Toxina botulínica e preenchedores na região orofacial, com indicação após avaliação". Nunca "botox" (marca), "harmonização" como especialidade, "rejuvenescimento" ou "lifting". | Página de baixa prioridade; revisar quando o acórdão do TRF-1 sobre a Res. CFO-198/2019 for publicado. |
| **LGPD** | Sem formulário, sem cookie, sem pixel. CTA é link `wa.me`. Mapa interativo só carrega no clique. | Analytics sem cookie (Cloudflare Web Analytics + eventos de CTA via Umami ou Worker próprio) dispensa banner. Política de privacidade mínima (art. 9º). |

---

## 3. Decisões técnicas

### 3.1 Site final (recomendação do relatório 04)

- **Astro 7.3 com saída estática**, sem `<ClientRouter />`. `<Picture>` gera AVIF/WebP com srcset, a Fonts API faz self-host e preload, `build.inlineStylesheets: 'always'`, `@astrojs/sitemap`, JSON-LD por página alimentado por `src/data/site.ts` (fonte única de NAP, WhatsApp, horário e CRO).
- **Hospedagem:** Cloudflare Workers (static assets), deploy do GitHub `alvesarel/site-nicole`. Há PoP em Campinas. **Liberar os bots de busca de IA** (OAI-SearchBot, PerplexityBot, Claude-SearchBot) no "AI Crawl Control", porque a Cloudflare os bloqueia por padrão em domínios novos.
- **Animação:** CSS + IntersectionObserver como base; `animation-timeline: view()/scroll()` e `@view-transition { navigation: auto; }` como melhoria progressiva; sem GSAP e sem Lenis.
- **Mapa:** facade estática na paleta → MapLibre + OpenFreeMap no clique, com links sempre visíveis para Google Maps, Waze e Apple Maps.
- **CTA:** `wa.me` com mensagem pré-preenchida por página (faz o papel de UTM). No desktop, diálogo com QR code, WhatsApp Web e telefone.
- **Metas mobile 4G:** LCP ≤ 2,0 s, INP ≤ 100 ms, CLS ≤ 0,02; JS próprio ≤ 15 KB; CSS ≤ 20 KB; fontes ≤ 70 KB; hero ≤ 100 KB AVIF; home ≤ 400 KB. Lighthouse CI no GitHub Actions.
- **Arquitetura e SEO:** `/`, `/dra-nicole-almeida/`, `/servicos/` + 4 categorias e páginas filhas (prótese, implantes, lentes e facetas, clareamento), `/consultorio/`, `/perguntas-frequentes/`, `/contato/`, `/privacidade/`. Title da home: `Dra. Nicole Almeida | Dentista no Cambuí, Campinas`. robots.txt liberando bots de IA, sitemap, `llms.txt` opcional, Search Console e Bing Webmaster.

### 3.2 Regras para os 5 conceitos (protótipos da home)

- Pasta `design-options/opcao-N-<slug>/index.html`, um arquivo autocontido (CSS e JS inline), assets via `../_shared/...`.
- Sem framework. JS próprio ≤ 15 KB não minificado é aceitável. Bibliotecas externas só no mapa (sob demanda).
- **Fontes:** `../_shared/fonts/arsenal-sc-regular.woff2` com `@font-face` + `<link rel="preload" as="font" type="font/woff2" crossorigin>`. Não usar os pesos bold/italic da Arsenal SC (economiza 75 KB). A fonte complementar vem do Google Fonts (`css2`, `display=swap`, `preconnect` para fonts.googleapis.com e fonts.gstatic.com) com **os eixos e pesos exatos** indicados em cada conceito; itálico, quando houver, sem preload.
- **Hero:** imagem com `<link rel="preload" as="image" fetchpriority="high">`, `fetchpriority="high"`, `width`/`height`, sem `loading="lazy"`. H1 e foto do hero **visíveis no primeiro paint**: nada de `opacity:0`, `clip-path` fechado ou `filter` no H1 ou na imagem do hero. No hero só se anima `transform` (escala 1.04→1) e elementos decorativos.
- **Reveals:** classe `.js` no `<html>`; estado oculto só com JS ativo e só dentro de `@media (prefers-reduced-motion: no-preference)`. Sem JS, tudo aparece.
- **Mobile-first:** 390 → 768 → 1100 → 1440+. Sem scroll horizontal (testar 360 px). Alvos de toque ≥ 48 px.
- **Acessibilidade:** um único H1; `lang="pt-BR"`; contraste AA (tabela 4.2); foco visível (`outline: 2px solid` Verde no claro e Pólen no escuro, `outline-offset: 3px`); `alt` descritivo em português; acordeões com `<details>/<summary>`; links de nova aba com aviso no `aria-label`.
- **SEO no `<head>`:** title e meta description do relatório 03, Open Graph (`og:image` = foto do hero), JSON-LD `@graph` com `WebSite` + `Dentist` + `Person` (modelo do relatório 03, seção 2), sem `AggregateRating`, `Review` ou `priceRange`. `FAQPage` opcional.

---

## 4. Base comum de conteúdo e tokens

### 4.1 Tokens de cor (todos os conceitos)

```css
:root{
  --verde:#3D420A;        /* Verde Colina */
  --verde-escuro:#262A05; /* derivado, fundos escuros e rodapés */
  --verde-2:#5A5E2C;      /* texto secundário: 6,7:1 sobre creme */
  --polen:#DBCB79;        /* Amarelo Pólen */
  --polen-claro:#EFE6BC;  /* derivado, fundo de bloco (verde sobre ele: 8,2:1) */
  --nuvem:#DEE2FF;        /* Azul Nuvem */
  --nuvem-claro:#EEF0FF;  /* derivado */
  --creme:#FFFDEE;        /* Creme Pérola */
  --creme-2:#F5F1DA;      /* derivado, seção alternada (verde sobre ele: 9,0:1) */
}
```

### 4.2 Contrastes calculados (WCAG)

| Combinação | Contraste | Uso |
|---|---|---|
| Verde sobre Creme | 10,0:1 | texto e botões |
| Creme sobre Verde | 10,0:1 | texto em fundos escuros |
| Verde sobre Azul Nuvem | 8,0:1 | FAQ, cards, chips |
| Verde sobre Pólen | 6,3:1 | texto e botão em blocos Pólen |
| Pólen sobre Verde | 6,3:1 | CTA e títulos no escuro |
| Pólen / Creme sobre `--verde-escuro` | 9,1:1 / 14,5:1 | rodapés |
| `--verde-2` sobre Creme | 6,7:1 | texto secundário |
| **Pólen sobre Creme** | **1,6:1** | **nunca texto**; só fios, ornamentos, letras decorativas |
| **Pólen sobre Azul Nuvem** | **1,3:1** | **nunca texto** |

### 4.3 Dados e placeholders

- **Endereço (hipótese do relatório 03, confiança média-alta):** R. Barreto Leme, 2281 — sala [a confirmar] — Cambuí, Campinas – SP, 13025-085 (Allevare Coworking Odontológico, Ed. Santa Apolônia). `conteudo/endereco.txt` está vazio no repositório. A placa do brand book (`marca-placa.webp`) mostra "Consultório 105", que pode ser a sala. Nos conceitos, escrever o endereço completo seguido de "(a confirmar)".
- **Coordenadas aproximadas** (decodificadas do Plus Code 4W2X+WX da ficha no Google Maps; confirmar): lat **-22.89769**, lng **-47.05006**.
- WhatsApp: `https://wa.me/5519900000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o` (cada conceito pode acrescentar a origem: "...vim pelo site...").
- Telefone `(19) 90000-0000` · Horário "Seg. a sex., 9h às 18h (a confirmar)" · Instagram `@PERFIL`.
- Google Maps: `https://www.google.com/maps/search/?api=1&query=Rua+Barreto+Leme+2281+Campinas` · Waze: `https://waze.com/ul?ll=-22.89769,-47.05006&navigate=yes` · Apple Maps: `https://maps.apple.com/?q=Rua+Barreto+Leme+2281+Campinas`.

### 4.4 Textos-base (os conceitos podem ajustar o tom, não o conteúdo regulado)

- **H1 em duas partes:** linha de marca (diferente em cada conceito) + linha descritiva dentro do mesmo H1, em tamanho menor: "Dra. Nicole Almeida, cirurgiã-dentista. Prótese e reabilitação oral no Cambuí, Campinas."
- **Serviços** (links para `servicos/<slug>.html`):
  1. **Reabilitação oral** (`reabilitacao-oral`): implantes unitários e múltiplos · prótese dentária · cirurgia peri-implantar e plásticas gengivais.
  2. **Prevenção e manutenção** (`prevencao-e-manutencao`): limpeza com Air Flow ou ultrassom · consulta criteriosa com escaneamento 3D.
  3. **Estética dental** (`estetica-dental`): clareamento · facetas em cerâmica · contorno estético em resina composta.
  4. **Estética da face** (`estetica-da-face`): toxina botulínica e preenchedores na região orofacial, com indicação após avaliação.
- **Protocolo "Um sorriso de cada vez":** 01 Escuta e escaneamento 3D · 02 Planejamento (o plano explicado com calma, por escrito) · 03 Tratamento (no seu tempo, uma etapa de cada vez) · 04 Acompanhamento (manutenção e revisões).
- **FAQ (6 perguntas, em HTML visível):**
  1. Perdi vários dentes. Ainda é possível ter dentes fixos?
  2. Qual a diferença entre prótese sobre implante, protocolo e dentadura?
  3. Como é a primeira consulta com escaneamento 3D?
  4. O tratamento é desconfortável? (falar de anestesia, conforto e escuta; nunca "sem dor")
  5. Quanto tempo leva uma reabilitação? ("depende do caso; o cronograma é apresentado no planejamento")
  6. Quanto custa? (fatores que influenciam o valor, sem números) — ou "Moro em outra cidade. Como funciona?"
- **Avaliações (protótipo):** três trechos sobre atendimento, cada um com a etiqueta "Exemplo de layout": "Me senti ouvida desde a primeira conversa." — M. R. · "Tudo explicado com calma, sem pressa nenhuma." — C. A. · "O consultório é um lugar tranquilo, e a Dra. Nicole é muito atenciosa." — F. L.
- **Para quem vem de fora:** Valinhos, Vinhedo, Indaiatuba, Jundiaí, Paulínia, São Paulo e outros estados; agenda concentrada para reduzir deslocamentos; links "Traçar rota" (`https://www.google.com/maps/dir/?api=1&origin=Valinhos,SP&destination=Rua+Barreto+Leme+2281+Campinas`).
- **Rodapé:** logo, nav, endereço, telefone, horário, Instagram, "Política de privacidade", CRO completo, "Responsável técnica" e "Conteúdo revisado por Dra. Nicole Almeida, cirurgiã-dentista, CRO-SP 00000 — atualizado em 12/10/2026".

---

## 5. As 5 direções

Quadro comparativo:

| | 1 Editorial Creme | 2 Verde Noturno | 3 Nuvem | 4 Galeria Tipográfica | 5 Precisão Serena |
|---|---|---|---|---|---|
| Tema | claro quente | escuro | claro frio | claro com blocos de cor | claro com painel escuro (split) |
| Cor dominante | Creme 82% | Verde 60% + verde-escuro 15% | Azul Nuvem 40% + Creme 45% | Creme 50% + Pólen 25% | Creme 55% + Verde 33% |
| Fonte complementar | Bodoni Moda | Hanken Grotesk | Fraunces (SOFT 100) | Bricolage Grotesque | Geist |
| Papel da Arsenal SC | rótulos, nav, folios | **display (H1/H2)** | selos e rótulos | etiquetas de galeria | rótulos técnicos |
| Layout | revista, 12 col assimétrico | cinema, full-bleed centrado | cards arredondados, arcos | assimetria e color blocking | grade suíça, split sticky |
| Movimento | lento: cortina e máscara | cinema: letterbox, traço, legendas | respiração e flutuação | cinético: letras que se montam | mecânico: linha de scanner, odômetro |
| Foto do hero | perfil-meio-corpo-1 | ripado-madeira-2 | estante-sorrindo-1 | corpo-inteiro-caminhando | mesa-ripado-1 |
| H1 (linha de marca) | Sorrir é sobre se permitir ser visto. | Criando mudanças profundas, na vida e no sorriso. | Sorrisos reais, sem pressa. | Um sorriso de cada vez. | A técnica transforma, mas só a leveza acolhe. |
| CTA | retângulo Verde, barra inferior dividida | pílula Pólen sobre verde | pílula Verde flutuante + nota Google ao lado | retângulo Verde + selo circular giratório | retângulo Verde + telefone visível, barra dividida |
| Assinatura | capa de revista com chamadas que são links | letterbox que se abre + logo desenhado | "Você se reconhece?" | padronagem que se monta no nome | linha de escaneamento + odômetro de etapas |

---

### 5.1 Opção 1 — Editorial Creme (`opcao-1-editorial-creme`)

**Ideia e sensação.** A home como a edição de uma revista de design e bem-estar. A Nicole aparece como protagonista e autora: retratos grandes, texto bem composto, legendas, tempo. A sensação é de serenidade e sofisticação sem esforço: "sorrisos reais, sem pressa" traduzido em ritmo de leitura.

**Paleta.** Claro. Creme 82% (fundo), Verde 14% (texto, fios, botões, rodapé), `--creme-2` em 1 de cada 3 seções, Pólen 2% (fios de 1 px, sublinhado no hover, numeração decorativa grande, nunca texto pequeno), Azul Nuvem 2% (só no bloco de FAQ e na facade do mapa).

**Tipografia.** Arsenal SC + **Bodoni Moda**.
- URL: `https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400..500&display=swap` (cerca de 45 KB). Itálico só para citações, sem preload: `Bodoni+Moda:ital,opsz,wght@1,6..96,400`.
- H1: Bodoni Moda 400, `font-optical-sizing:auto`, `clamp(2.75rem, 6.2vw, 6.25rem)`, line-height .98, letter-spacing -0.01em, uma palavra em itálico.
- H2: `clamp(2rem, 4vw, 3.75rem)`. Corpo: Bodoni Moda 400, 18px (mobile) a 19px (desktop), line-height 1.65, medida máx. 62ch.
- Arsenal SC: nav, eyebrows, folios ("p. 07"), legendas ("FIG. 03"), botões; 12–14px, letter-spacing .16em.

**Layout.** Grade de 12 colunas, margem lateral `clamp(20px, 6vw, 96px)`, gutter 24px. Composição de revista: colunas de texto estreitas (5–6 col) deslocadas, imagens que sangram até a borda de um lado, fios de 1 px em Verde a 20%, folio ("p. 03") no canto de cada seção.
- **Hero desktop:** header de 72 px (logo-horizontal 200 px à esquerda, nav no centro, CTA à direita). Colunas 1–5: folio "Nº 01 · Campinas · Cambuí", H1, botão e link "Conheça o consultório ↓". Colunas 7–12: retrato em 4:5 com cerca de 78vh de altura e legenda "FIG. 01 — Dra. Nicole Almeida, Cambuí". **Chamadas de capa** sobre a parede clara da foto, alinhadas à esquerda dela, em Arsenal SC 13px com fio acima de cada uma; são links âncora: "Manifesto — p. 03", "Prótese e reabilitação oral — p. 07", "Por dentro do consultório — p. 12", "Um sorriso de cada vez — p. 15".
- **Hero mobile:** folio, H1 (cerca de 44 px), linha descritiva, botão; foto em 4:5 na largura total; chamadas de capa viram lista com fios abaixo da foto.

**Header e CTA.** Header transparente sobre o creme que ganha fundo creme e fio inferior ao rolar. Botão "Click para agendar →" retangular (raio 0), Verde com texto Creme, Arsenal SC 14px. No mobile, **barra inferior dividida**: "Click para agendar" (Verde, 52 px de altura) + quadrado de 52 px com ícone de telefone (`tel:`). A barra aparece quando o CTA do hero sai da tela e some quando o endereço entra (IntersectionObserver).

**Movimento ("lento, de leitura").** Easing `cubic-bezier(.2,.7,.2,1)`, durações de 900 a 1400 ms.
- Intro: imagem do hero escala 1.04→1 em 1,6 s; os fios das chamadas de capa crescem (`scaleX` 0→1, intervalo de 120 ms); folio e chamadas fazem fade.
- Scroll: títulos sobem palavra por palavra por máscara (span com `overflow:clip`, intervalo de 40 ms, 900 ms); parágrafos com fade e 24 px de deslocamento; imagens abaixo da dobra com **cortina** `clip-path: inset(0 0 100% 0)` → `inset(0)` em 1,2 s, e a imagem interna escala 1.08→1.
- Barra de leitura no topo do Manifesto (2 px, Verde, `scaleX` ligado ao scroll com `animation-timeline: view()` dentro de `@supports`).
- Hover no índice de serviços: o título anda 16 px para a direita (transform) e uma miniatura aparece à direita por `clip-path` em 600 ms.
- `@view-transition { navigation: auto; }` com fade de 450 ms.
- Reduced motion: tudo estático e visível.

**Fotos.** Hero `nicole-perfil-meio-corpo-1` (object-position 55% 20%). Sobre: `nicole-janela-terno-creme-1` + detalhe `nicole-detalhe-maos`. Manifesto: `nicole-detalhe-perfil`. Consultório: `consultorio-05`, `consultorio-03`, `consultorio-08`, `consultorio-04`.

**Assinatura.** **A capa de revista**: as chamadas de capa ao lado do retrato são a navegação da página, e cada seção tem o folio correspondente ("p. 07"). Complementos: Manifesto com capitular de 5 linhas e legendas "FIG. 0X" em todas as fotos.

**Seções, na ordem.**
1. Header.
2. Capa (hero).
3. **Manifesto** (p. 03): artigo em 2 colunas no desktop (`column-rule` Verde a 15%), capitular Bodoni em Verde, citação central em itálico "A técnica transforma, mas só a leveza acolhe.", assinatura com o logo-completo (160 px).
4. **Perfil / Sobre** (p. 05): foto grande nas col. 1–6, texto nas col. 8–12; H2 "Apaixonada por dentes e por pessoas."; fatos entre fios (cirurgiã-dentista e CRO; clínica geral e áreas de atuação; formação na São Leopoldo Mandic [status a confirmar]; atendimento individual); detalhe das mãos sobreposto, com legenda "O trabalho minucioso e manual".
5. **Índice de cuidados / Serviços** (p. 07): 4 linhas clicáveis com numeral romano, título Bodoni de 2,4 a 3,4rem, subitens em Arsenal SC e "p. 08 →".
6. **Ensaio: o consultório** (p. 12): fotos assimétricas com legendas e um bloco de texto curto.
7. **Um sorriso de cada vez** (p. 15): 4 colunas com numerais I–IV sobre `--creme-2`.
8. **Avaliações no Google:** "5,0" em Bodoni de 7rem, citações em itálico com etiqueta de exemplo.
9. **Para quem vem de fora.**
10. **FAQ** em bloco Azul Nuvem.
11. **Expediente / Endereço**: endereço composto como expediente de revista + mapa.
12. Rodapé Verde com logo-completo Creme.

**Mapa.** Facade em SVG: ruas em Verde a 25% sobre Creme, pin Verde e o rótulo "Cambuí" em Arsenal SC. No MapLibre: terra Creme, água Azul Nuvem, vias Verde a 25%, rótulos `--verde-2`.

**Referências.**
- Clínica Romana: branco generoso, display fino, retrato dessaturado, serviços em grade de linhas finas.
- Colette Camenisch: marca pessoal tratada como editorial, nav mínima. [colette-camenisch.com](https://www.colette-camenisch.com/)
- Sidney Kina: o dentista como autor, frases curtas. [sidneykina.com.br](https://sidneykina.com.br/)
- Mariana Wolf: ordem das seções e microcopy com tese.
- The Smile Code: caixa-alta espaçada como elemento gráfico. [nycsmiledesign.com](https://www.nycsmiledesign.com/)

**Risco a vigiar.** Bodoni no corpo cansa em telas pequenas: manter 18px ou mais, line-height 1.65 e `font-optical-sizing:auto`.

---

### 5.2 Opção 2 — Verde Noturno (`opcao-2-verde-noturno`)

**Ideia e sensação.** Quiet luxury cinematográfico. O site abre como um filme: cena em proporção de cinema, o logo desenhado em traço dourado, créditos e legendas. O Verde Colina funciona como uma sala escura acolhedora (não preta), e o terno creme da Nicole brilha sobre ele. A sensação é de intimidade, exclusividade e calma noturna.

**Paleta.** Escuro. Verde 60% (base), `--verde-escuro` 15% (seções alternadas, rodapé, créditos finais), Creme 18% (texto e uma única seção clara de respiro: Avaliações), Pólen 6% (CTA, palavra-acento nos títulos, numerais, traço do logo, marquee), Azul Nuvem 1% (água no mapa e anel de foco opcional). Grão SVG (`feTurbulence`, data URI com menos de 1 KB) a 4% de opacidade, estático, sobre as superfícies verdes.

**Tipografia.** Arsenal SC **como display** + **Hanken Grotesk**.
- URL: `https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300..500&display=swap` (cerca de 33 KB).
- H1: Arsenal SC `clamp(2.25rem, 5vw, 4.75rem)`, letter-spacing .02em, line-height 1.06, Creme, com a palavra "profundas" em Pólen.
- H2: Arsenal SC `clamp(1.9rem, 4vw, 3.5rem)`. Corpo: Hanken 400 (300 só em textos de 22px ou mais) 17–18px, line-height 1.75, Creme a 88%.
- Rótulos: Hanken 500, 12px, caixa-alta, letter-spacing .24em, Pólen.

**Layout.** Full-bleed cinematográfico: seções de 100svh alternam "quadros" (foto de ponta a ponta) e "cartelas" (texto centralizado com no máximo 38ch, como créditos). Grade de 12 colunas, mas composição quase sempre simétrica e centralizada. As fotos-chave usam letterbox 2,39:1.
- **Hero desktop:** seção de 100svh em Verde. A foto em tela cheia aparece recortada por letterbox (`clip-path: inset(12vh 0 22vh 0)`, cerca de 2,4:1), com object-position 50% 28%. Gradiente `--verde-escuro` a 75% na base da faixa. H1 sobre a base da faixa, à esquerda (col. 2–8). Na barra inferior (22vh): linha descritiva à esquerda; CTA e rótulo "Cambuí · Campinas" à direita.
- **Hero mobile:** foto em 4:5 no topo (`clip-path: inset(6% 0 6% 0)`), gradiente para Verde, H1 sobre a base da foto, depois a linha descritiva e o CTA.

**Header e CTA.** Header transparente sobre o hero que vira `--verde-escuro` a 92% ao rolar. Logo-horizontal Creme de 220 px, nav em Hanken 13px caixa-alta Creme a 80%. CTA em **pílula Pólen** com texto Verde (6,3:1), 48 px de altura, Hanken 500. No mobile, barra fixa embaixo: pílula Pólen em largura total menos 32 px, com sombra suave escura.

**Movimento ("cinema").** Durações de 1,2 a 1,8 s, easing `cubic-bezier(.16,1,.3,1)`.
- **Intro, uma vez por sessão (`sessionStorage`):** o logo-horizontal do header é desenhado em traço Pólen (cada `<path>` com `pathLength="1"`, `stroke-dasharray:1`, `stroke-dashoffset` 1→0 em 1,6 s, intervalo de 50 ms por path; `stroke-width` em unidades do viewBox para dar cerca de 1 px na tela) e depois o preenchimento Creme entra em 0,5 s. Ao mesmo tempo, um fio Pólen cresce sob o H1 (`scaleX`) e a imagem escala 1.06→1. A foto e o H1 já estão visíveis desde o primeiro paint.
- **Letterbox que se abre com o scroll:** de `inset(12vh 0 22vh 0)` para `inset(0)` nos primeiros 100vh (`animation-timeline: scroll()` em `@supports`; fallback: faixa estática).
- **Marquee** depois do hero: "Sorrisos reais, sem pressa. · Um sorriso de cada vez. · Transformação com leveza. ·" em Arsenal SC 1,5rem Pólen; loop de 45 s, pausa no hover e no foco, cópia duplicada com `aria-hidden`, parado em reduced motion.
- **Legendas de cinema no Sobre:** foto sticky em tela cheia; 4 frases surgem uma por vez na base, em caixa `--verde-escuro` a 70% (IO em espaçadores).
- **Texto que acende** no Protocolo: linhas de opacidade .25 para 1 ao cruzar o centro da tela (`animation-timeline: view()`, `animation-range: entry 20% cover 45%`; fallback com classe IO).
- **Créditos finais:** o logo-completo (cerca de 50vw) é desenhado em traço Pólen quando entra na tela.
- Reduced motion: logo já preenchido, letterbox aberto, legendas todas visíveis.

**Fotos.** Hero `nicole-ripado-madeira-2`, com uma camada Verde em `mix-blend-mode: multiply` a 25% para puxar o marrom da madeira para o oliva. Sobre: `nicole-sofa-concreto-1` em tela cheia. Créditos: `nicole-ripado-madeira-1` em letterbox. Consultório, no tom "noturno" com LED: `consultorio-01`, `consultorio-11`, `consultorio-08`, `consultorio-09`. Tour em vídeo (`consultorio-tour.mp4`) com poster, `preload="none"` e play só no clique.

**Assinatura.** **O letterbox que se abre**: a primeira cena em 2,39:1 vira tela cheia com o scroll, abre com o logo desenhado em traço Pólen e fecha com o logo-completo desenhado como créditos finais. O "Sobre" é contado em legendas de cinema.

**Seções, na ordem.**
1. Header.
2. Hero letterbox.
3. Marquee.
4. **Quando procurar:** 3 cartelas em sequência, cada uma com uma frase em Arsenal SC 2,5rem ("Você evita sorrir em fotos." / "Sua prótese não te dá segurança." / "Já ouviu que seu caso é difícil.") e uma linha de resposta em Hanken.
5. **Sobre** em legendas: frases baseadas no "Por que sou dentista" — "Sou apaixonada por dentes e por pessoas." · "Nosso trabalho é minucioso e manual." · "E muda a vida de outro ser humano." · "Quando a função e a autoestima voltam, tudo muda." Depois, bloco de texto com formação e CRO (bom para SEO).
6. **Serviços — "Quatro cenas":** fundo `--verde-escuro`, 4 linhas em Arsenal SC de 2 a 4,5rem; no hover, a linha fica Pólen e uma miniatura em letterbox (360 px) abre do centro (`clip-path`); no mobile, miniatura sempre visível.
7. **O consultório:** faixa horizontal de quadros 2,39:1 com scroll-snap nativo (setas no desktop, sem sequestro de scroll) + vídeo vertical em moldura com poster.
8. **Um sorriso de cada vez — "em quatro atos":** numerais romanos Pólen em Arsenal SC 5rem, texto que acende.
9. **Avaliações no Google:** a seção Creme de respiro, com "5,0", trechos de exemplo e link.
10. **FAQ:** acordeão sobre Verde com ícones +/− em Pólen.
11. **Endereço e mapa escuro.**
12. **Créditos finais:** logo desenhado, "Sorrir é sobre se permitir ser visto." e CTA Pólen grande.
13. Rodapé `--verde-escuro` com `padronagem-2.webp` a 8% de opacidade.

**Mapa.** Estilo escuro: terra `--verde-escuro`, vias #59601A, água Azul Nuvem a 30%, rótulos Creme a 70%, pin Pólen. Facade em SVG no mesmo tom.

**Referências.**
- Chelsea Dental: verde oliva e creme como quiet luxury; CTA repetido sem gritar.
- Sidney Kina: retrato escuro e quente com nome centralizado; marquee na base do hero.
- Mariana Wolf: hero escuro com retrato em duotone e serifa (aqui transposto para Verde e Pólen).
- Antara Spa: verde musgo e texto que acende linha a linha (sem o preloader com %). [Awwwards](https://www.awwwards.com/sites/antara-spa-wellness)
- Rifkin Raanan: logo geométrico fino em dourado sobre imagem em movimento, base do logo desenhado. [rifkinraanan.com](https://www.rifkinraanan.com/)

**Riscos a vigiar.** Texto fino sobre escuro "treme": corpo em Hanken 400, nunca 300 abaixo de 22px. Garantir que o tema escuro não vire "preto e dourado": nada de gradiente metálico, brilho ou partícula.

---

### 5.3 Opção 3 — Nuvem (`opcao-3-nuvem-acolhimento`)

**Ideia e sensação.** Aéreo, suave e acolhedor, pensado para quem perdeu dentes e se sente fragilizado. Formas arredondadas (arcos, pílulas, cantos de 28 a 48 px), cards que flutuam, cor de céu ao amanhecer. É a direção mais humana e a que mais conversa com o paciente: "pode respirar, aqui ninguém tem pressa".

**Paleta.** Claro frio com calor. Azul Nuvem 40% (fundo do hero, seções alternadas, chips), Creme 45% (base e cards), Verde 12% (texto, CTA, ícones), Pólen 3% (estrelas, ponto do chip ativo, contorno decorativo do arco, círculo dos números das etapas com número Verde). Fundo do hero: `radial-gradient(120% 80% at 70% 0%, #DEE2FF 0%, #EEF0FF 45%, #FFFDEE 100%)`. Sombras suaves `0 12px 40px rgba(61,66,10,.08)`.

**Tipografia.** Arsenal SC + **Fraunces** com eixo SOFT em 100 (serifa arredondada).
- URL: `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..500,100&display=swap` (cerca de 60 KB).
- H1: Fraunces 350, `clamp(2.6rem, 6vw, 5.4rem)`, line-height 1.03, "sem pressa" em itálico (itálico `Fraunces:ital,opsz,wght,SOFT@1,9..144,300..400,100` sem preload; se pesar, usar só a cor `--verde-2` no lugar do itálico).
- Corpo: Fraunces 400, 18px, line-height 1.6, `font-optical-sizing:auto`.
- Arsenal SC: selo do hero, rótulos, nav do mobile, botões, 12–14px, letter-spacing .12em.
- Atenção ao orçamento: Arsenal SC (24 KB) + Fraunces (60 KB) = cerca de 84 KB, acima da meta de 70 KB. No site final, subset Latin-1.

**Layout.** Cards e arcos sobre grade de 12 colunas com cantos grandes, espaçamento generoso e camadas (cards sobrepostos às fotos). Nada de linhas retas duras: bordas de 1 px só em Verde a 10%.
- **Hero desktop:** col. 1–6: selo em pílula Creme "Prótese e reabilitação oral · Cambuí, Campinas", H1, linha descritiva em primeira pessoa ("Cuido de quem perdeu dentes, e um pouco da confiança, com tempo, escuta e técnica."), CTA em pílula + **chip de nota Google ao lado do CTA** ("★ 5,0 no Google · placeholder", link). Col. 7–12: foto em **arco** (`border-radius: 999px 999px 40px 40px`), 3:4, cerca de 76vh, com um contorno Pólen de 1,5 px deslocado 16 px atrás. Dois cards flutuando sobre a borda do arco: "Avaliação com escaneamento 3D" e "Atendimento individual, com hora marcada".
- **Hero mobile:** selo, H1 (cerca de 40 px), texto, CTA + chip de nota; arco em largura total (4:5) com um card sobreposto na base.

**Header e CTA.** **Header em pílula flutuante**: máx. 1100 px, margem 12 px, raio 999px, fundo `rgba(255,253,238,.72)` com `backdrop-filter: blur(12px)`, logo-horizontal Verde de 170 px, nav em Fraunces 15px, CTA em pílula Verde com texto Creme. No mobile, CTA **pílula flutuante centralizada** embaixo (56 px, `bottom: max(16px, env(safe-area-inset-bottom))`), com o mesmo comportamento de aparecer e sumir.

**Movimento ("respiração").** Easing de mola `cubic-bezier(.34,1.56,.64,1)` nas interações; `cubic-bezier(.2,.7,.2,1)` nas entradas; 400 a 800 ms.
- Intro: o arco do hero "respira" uma vez (raio superior de 999px para 46% e de volta, 1,8 s, só decorativo; a imagem fica visível); os cards entram com escala .96→1 e fade, com intervalo de 150 ms.
- Flutuação: cards do hero e de avaliações sobem e descem de 0 a -6 px em loop de 7 s, com fases diferentes, só `transform`; desligado em reduced motion e fora da viewport (`animation-play-state` via IO).
- Scroll: blocos entram com fade, `translateY(16px)` e escala .98→1. O caminho pontilhado entre as etapas do Protocolo é desenhado com `stroke-dashoffset` ligado ao scroll (`animation-timeline: view()`; fallback IO).
- Chips: ao selecionar, mola de escala 1→1.04→1 e troca de cor em 250 ms; o card de resposta abre com altura animada via `grid-template-rows: 0fr → 1fr`.
- Reduced motion: sem loop e sem mola.

**Fotos.** Hero `nicole-estante-sorrindo-1` (object-position 50% 20%). "Você se reconhece?": `nicole-poltrona-janela`. Sobre: `nicole-sofa-sorrindo-1`. Carta final: `nicole-ripado-mao-peito-1`. Consultório: `consultorio-05`, `consultorio-10`, `consultorio-07`, `consultorio-03` + tour em vídeo com poster.

**Assinatura.** **"Você se reconhece?"** Seis chips com situações reais (`<button aria-pressed>`, várias escolhas). Cada um abre uma resposta acolhedora (`aria-live="polite"`) e **personaliza a mensagem do WhatsApp** do CTA logo abaixo ("Olá, Dra. Nicole! Vim pelo site e me identifiquei com: evito sorrir em fotos. Gostaria de agendar uma avaliação."). Nada é armazenado nem enviado pelo site: quem decide enviar é o próprio visitante. Respostas aprovadas (sem promessa):
1. "Evito sorrir em fotos." → "Muita gente chega aqui assim. A primeira conversa serve para entender o que te incomoda e o que você deseja, sem pressa e sem julgamento."
2. "Minha prótese incomoda ou se mexe." → "Existem caminhos para mais firmeza e conforto, inclusive próteses sobre implantes. O plano certo depende da avaliação do seu caso."
3. "Perdi um ou mais dentes." → "Reabilitar é devolver função e estética juntas. Começamos com escaneamento 3D para planejar cada etapa com você."
4. "Já me disseram que meu caso é difícil." → "Casos complexos pedem planejamento cuidadoso. Vamos olhar seus exames, conversar e explicar as possibilidades com clareza."
5. "Quero renovar meu sorriso com naturalidade." → "Clareamento, facetas em cerâmica ou resina: a escolha parte do seu rosto e do que faz sentido para você."
6. "Moro fora de Campinas." → "Organizamos a agenda para concentrar as consultas e reduzir seus deslocamentos."

**Seções, na ordem.**
1. Header em pílula.
2. Hero com arco.
3. **Você se reconhece?** (assinatura).
4. **Como cuidamos de você:** 4 cards de etapa em Creme sobre Azul Nuvem, ligados pelo caminho pontilhado.
5. **Serviços:** bento 2×2 com cards de raio 28 px alternando Creme e `--nuvem-claro`, foto arredondada, título em Fraunces 1,8rem, subitens em tags, "Saiba mais →".
6. **Prazer, Nicole (Sobre):** foto em moldura de raio 48 px, texto em primeira pessoa baseado no manifesto, fatos em chips, logo-completo pequeno como assinatura.
7. **Um lugar para respirar (Consultório):** mosaico de fotos arredondadas + vídeo em moldura vertical.
8. **Avaliações:** cards flutuando em grupo solto (rotação de ±1,5°) sobre Azul Nuvem, nota 5,0 e link.
9. **Vem de fora?**
10. **FAQ:** acordeão em pílulas.
11. **Endereço:** mapa em container de raio 32 px.
12. **Carta final:** "Vamos juntos construir o seu sorriso?" com foto e CTA.
13. Rodapé em Azul Nuvem com texto Verde (8:1).

**Mapa.** Estilo claro: terra Creme, água Azul Nuvem, vias brancas com contorno Verde a 15%, rótulos Verde, pin Verde com halo Pólen.

**Referências.**
- Dębski Clinic: formas orgânicas (máscara oval), avaliações ao lado do CTA, conteúdo longo para SEO/IA. [Awwwards](https://www.awwwards.com/inspiration_search/clinic/)
- Antara Spa: painéis em arco.
- Mariana Wolf: "Quando procurar" (3 situações de dor) e "Para quem mora fora".
- Neolife BH: headline empática "Você evita sorrir mesmo quando está feliz?". [sorrisobh.com](https://www.sorrisobh.com/)
- APA Aesthetic: o foco não são os dentes, mas a vida que eles permitem. [apaaesthetic.com](https://www.apaaesthetic.com/)

**Riscos a vigiar.** Não infantilizar: nada de ícones cartunescos, emojis ou cores além da paleta. `backdrop-filter` só no header. O arco e os cards não podem cobrir o rosto da Nicole.

---

### 5.4 Opção 4 — Galeria Tipográfica (`opcao-4-galeria-tipografica`)

**Ideia e sensação.** A marca como exposição de arte. As letras desconstruídas do logo (N, e, a, l, A, M, c, o, i, d) aparecem em escala monumental, cortadas pelas bordas, e se movem com o scroll até se reorganizar no nome: "Um sorriso de cada vez" vira "uma letra de cada vez". É a energia DINÂMICA da marca: contemporânea, criativa, confiante. Conversa com o público de alto padrão que valoriza design (arquitetos, criativos, Cambuí).

**Paleta.** Claro com blocos de cor. Creme 50%, Pólen 25% (seções inteiras em Pólen: Serviços e Avaliações), Verde 22% (texto, letras montadas, um bloco escuro inteiro: Protocolo, e o rodapé), Azul Nuvem 3% (água do mapa, hover da FAQ). Texto só em Verde sobre Pólen ou Creme, ou Creme e Pólen sobre Verde. Letras gigantes em Pólen sobre Creme apenas como decoração.

**Tipografia.** Arsenal SC + **Bricolage Grotesque**.
- URL: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@200..600&display=swap` (cerca de 40 KB; não incluir os eixos opsz e wdth).
- H1: Bricolage 200, `clamp(3.25rem, 9vw, 9rem)`, letter-spacing -0.035em, line-height .92, Verde.
- H2: Bricolage 300, `clamp(2.2rem, 5.5vw, 5rem)`. Corpo: Bricolage 400, 17–18px, line-height 1.6.
- Arsenal SC: **etiquetas de galeria** (como as fichas ao lado de uma obra): título, "técnica", local, em 11–12px com letter-spacing .14em, às vezes em `writing-mode: vertical-rl` na margem.

**Layout.** Assimetria de galeria: grade de 12 colunas com blocos que começam em colunas diferentes (2, 5, 8), tipografia que atravessa colunas, color blocking em seções full-bleed, e **uma letra gigante por seção** cortada pela borda (no máximo uma por viewport). No mobile, letras a 140vw cortadas, coluna única com recuos alternados de 12 px.
- **Hero desktop:** fundo Creme. Camada de letras dispersas (SVG `logo-horizontal`, cerca de 120vw, letras em Pólen, cada `<path>` deslocado e girado como na padronagem). À frente: etiqueta vertical "SALA 01 — CAMBUÍ, CAMPINAS" na margem esquerda; col. 1–7 com H1 "Um sorriso / de cada vez.", linha descritiva e CTA; col. 8–11 com a foto em lâmina alta (2:3, cerca de 80vh), moldura Verde de 1 px deslocada 12 px e etiqueta de galeria abaixo ("Nicole Almeida, 2026 · Cirurgiã-dentista · Prótese e reabilitação oral · Campinas – SP").
- **Hero mobile:** etiqueta horizontal, H1 (cerca de 56 px em 3 linhas), CTA, foto em 2:3 com 86% da largura, alinhada à direita; letras dispersas atrás em 160vw.

**Header e CTA.** Header mínimo: monograma N.A (48 px) à esquerda, botão "Menu" que abre overlay em tela cheia em Pólen (links em Bricolage 200 de 4 a 6rem e uma letra gigante), CTA retangular Verde "Click para agendar" à direita. **Selo circular** fixo no canto inferior direito, que aparece depois do hero: 96 px no desktop e 84 px no mobile, Verde, com o texto em anel "CLICK PARA AGENDAR • CLICK PARA AGENDAR •" (SVG `textPath`, Arsenal SC 11px Creme) girando em 18 s (pausa no hover e no foco, parado em reduced motion) e o monograma N.A no centro; nome acessível "Click para agendar pelo WhatsApp (abre em nova aba)". No mobile, o selo fica sozinho (sem barra) e o header mantém o CTA compacto.

**Movimento ("cinético tipográfico").**
- **Montagem do nome (assinatura):** o hero e uma seção seguinte de 160svh ficam num container com a camada SVG `position: sticky` (100svh). Entre 0% e 40% do progresso as letras dispersas derivam devagar; entre 40% e 80% cada path vai de `translate(var(--x),var(--y)) rotate(var(--r)) scale(var(--s))` para `none` (`transform-box: fill-box; transform-origin: center`) e a cor passa de Pólen para Verde. Ao fim, "Nicole Almeida" ocupa 92vw e surge a linha "cirurgiã-dentista · Campinas". Usar `animation-timeline: view()` + `animation-range` dentro de `@supports`. Fallback: IO adiciona `.is-assembled` e a montagem acontece por transição de 1,6 s com atraso `calc(var(--i) * 40ms)`. Reduced motion: dispersas paradas no hero e nome já montado na seção seguinte. São 16 paths no `logo-horizontal.svg`, cada um com `--i`, `--x`, `--y`, `--r`, `--s` definidos à mão.
- **Letras gigantes por seção:** parallax de ±12% e rotação de ±4° ligados ao scroll (scroll-driven; fallback estático).
- **Transição de cor entre seções:** o novo bloco de cor entra com `clip-path: circle()` crescendo a partir da letra gigante (IO, 900 ms).
- **Do borrão ao foco (Sobre):** a foto `nicole-em-pe-jeans` entra com `filter: blur(14px)` e escala 1.06 e ganha foco conforme o scroll ("Sorrir é sobre se permitir ser visto."). Fallback IO com 1,4 s.
- Hover nos serviços: a letra gigante gira 8° e escala 1.05; o título sublinha com fio Verde de 2 px.

**Fotos.** Hero `nicole-corpo-inteiro-caminhando` (object-position 45% 50%). Sobre: `nicole-em-pe-jeans` (borrão→foco) + faixa estreita com `nicole-movimento-blur`. Detalhe: `nicole-caminhando-janela`. Consultório como galeria: `consultorio-04` (poltrona dourada, combina com o Pólen), `marca-quadro-consultorio` (o quadro da marca na parede), `consultorio-02`, `consultorio-06`, `marca-placa`.

**Assinatura.** **A padronagem que se organiza no nome**: as 16 letras do logo começam espalhadas como a padronagem da marca e, com o scroll, se montam em "Nicole Almeida". Complemento: etiquetas de galeria em cada seção.

**Seções, na ordem.**
1. Header mínimo + Menu.
2. Hero com letras dispersas.
3. **Montagem do nome** (sticky).
4. **Serviços como obras** (bloco Pólen): 4 blocos assimétricos (col. 1–6; 7–12 deslocado 15vh para baixo; 2–7; 8–12), cada um com uma letra gigante em traço Verde de 1 px (`fill:none`, `vector-effect: non-scaling-stroke`) cortada na borda, título em Bricolage 300 2,5rem, subitens e etiqueta "Técnicas: …".
5. **Sobre — Se permitir ser visto** (Creme): borrão→foco, texto, fatos e CRO.
6. **Um sorriso de cada vez** (bloco Verde): 4 etapas, cada uma ancorada por uma letra gigante em traço Creme a 15% que gira ao entrar; números "01–04" em Arsenal SC.
7. **O consultório como galeria** (Creme): fotos com etiquetas e uma letra cortada.
8. **Avaliações** (bloco Pólen): "5,0" em Bricolage 200 de 14rem, trechos de exemplo e link.
9. **Para quem vem de fora.**
10. **FAQ** (Creme, hover em Azul Nuvem).
11. **Endereço e mapa.**
12. Rodapé Verde com `padronagem-2.webp` como fundo (único lugar com padronagem inteira).

**Mapa.** Terra Creme, vias Pólen, água Azul Nuvem, rótulos e pin Verde. Facade em SVG com uma letra "A" gigante em traço cruzando o mapa.

**Referências.**
- Clínica Romana: letra gigante em marca-d'água (aqui as letras são da própria marca).
- Dębski Clinic: headline em escada e composição assimétrica premiada.
- Antara Spa: wordmark espaçado na largura total.
- Colette Camenisch: tipografia como imagem, nome de ponta a ponta.
- Brand book da Nicole: "letras isoladas grandes e cortadas em Pólen sobre Creme" usadas nos stories.
- **Billig, como contraexemplo:** a mesma ideia fica popular quando saturada. [billigodontologia.com.br](https://billigodontologia.com.br/)

**Riscos a vigiar.** É a direção mais ousada. Conter: só Pólen, Creme e Verde, no máximo uma letra gigante por viewport, padronagem inteira só no rodapé, nada de verde-limão. A montagem precisa terminar legível e rápida (no máximo 160svh de scroll).

---

### 5.5 Opção 5 — Precisão Serena (`opcao-5-precisao-serena`)

**Ideia e sensação.** Transparência e método. O site explica o atendimento como um bom manual ou um cartaz suíço: etapas numeradas, fichas técnicas dos serviços, tecnologia explicada, formação em linha do tempo. A confiança vem da clareza, e o calor vem das fotos da Nicole e da madeira clara. Fala com o paciente analítico (executivos, engenheiros, médicos) que quer entender antes de decidir. "A técnica transforma, mas só a leveza acolhe."

**Paleta.** Claro com painel escuro. Creme 55%, Verde 33% (painel sticky à esquerda no desktop, hero esquerdo, rodapé, números), Azul Nuvem 9% (fichas técnicas, tabelas, FAQ, água do mapa), Pólen 3% (barra de progresso sobre Verde, ponto do índice ativo, linha de escaneamento, eyebrow sobre Verde).

**Tipografia.** Arsenal SC + **Geist**.
- URL: `https://fonts.googleapis.com/css2?family=Geist:wght@100..500&display=swap` (cerca de 28 KB).
- Numerais gigantes: Geist 100, `clamp(6rem, 16vw, 16rem)`, `font-variant-numeric: tabular-nums`.
- H1: Geist 300, `clamp(2.3rem, 4.6vw, 4.4rem)`, letter-spacing -0.02em, line-height 1.05. H2: Geist 300, `clamp(1.9rem, 3.4vw, 3.2rem)`.
- Corpo: Geist 400, 17px, line-height 1.6. Dados e telefone em `tabular-nums`.
- Arsenal SC: rótulos técnicos ("ETAPA 01", "INDICADO PARA"), nav, botões, 12–13px, letter-spacing .14em.

**Layout.** Grade suíça de 12 colunas com fios de 1 px em Verde a 15% como estrutura visível (guias de coluna sutis no hero). Módulos retangulares, raio de 0 a 2 px. **Split sticky 5/7** no desktop: coluna esquerda Verde fixa com número, título e progresso; coluna direita Creme com o conteúdo rolando.
- **Hero desktop:** split 5/7. Painel Verde (col. 1–5, sangrando à esquerda): eyebrow Pólen "Cirurgiã-dentista · Clínica geral · Prótese e reabilitação oral", H1 Creme, linha descritiva, CTA Pólen e uma **mini linha do tempo** horizontal "01 Avaliação 3D — 02 Planejamento — 03 Tratamento — 04 Acompanhamento" (Geist 13px, Creme a 75%, fios ligando os itens; link para #protocolo). Col. 6–12: foto em altura total (object-position 50% 30%) com um **cartão de dados** Creme no canto inferior: "Cambuí · Campinas – SP / 22°53′52″ S · 47°03′00″ O" (coordenadas aproximadas, a confirmar).
- **Hero mobile:** foto 4:5 no topo; painel Verde com H1, CTA e linha do tempo vertical.

**Header e CTA.** Header Creme com fio inferior. Logo-horizontal Verde 180 px à esquerda; no centro, **indicador de seção** "02 / 08 — Protocolo" (Arsenal SC 12px, atualizado por IO) e uma linha de progresso Verde de 2 px na base do header (`scaleX` ligado ao scroll da página). À direita: telefone "(19) 90000-0000" em Geist `tabular-nums` + CTA retangular Verde "Click para agendar →". No mobile, **barra inferior dividida**: "Click para agendar" (Verde, 2/3 da largura) | "Ligar" (`--creme-2` com texto Verde, 1/3).

**Movimento ("mecânico, preciso").** Easing `cubic-bezier(.65,0,.35,1)`, 500 a 700 ms, nada de mola.
- Intro: uma linha Pólen de 2 px com brilho suave passa uma vez de cima para baixo sobre a foto do hero (1,4 s, decorativa, sem esconder a foto); fios da grade se desenham (`scaleY`).
- **Linha de escaneamento:** cada imagem abaixo da dobra é revelada por `clip-path: inset(0 0 100% 0)` → `inset(0)` com uma linha Pólen de 2 px (pseudo-elemento) acompanhando a borda da revelação, 1,1 s, ecoando o scanner intraoral.
- **Odômetro de etapas:** no painel sticky do protocolo, o número gigante troca rolando uma coluna de dígitos (`translateY` em passos de 1em) quando a etapa ativa muda (IO).
- Barra de progresso vertical Pólen no painel (`scaleY` com `animation-timeline: view()`; fallback IO em 4 passos).
- Fios horizontais se desenham (`scaleX` 0→1) quando a seção entra; índice de serviços com ponto Pólen deslizando até o item ativo.
- Reduced motion: imagens visíveis, número troca sem rolar.

**Fotos.** Hero `nicole-mesa-ripado-1`. Sobre: `nicole-sentada-terno-creme-1`. Etapas: `consultorio-02` (01), `marca-receituario` (02, o plano por escrito), `consultorio-07` (03), `nicole-poltrona-1` (04). Consultório: `consultorio-06`, `consultorio-11`, `marca-placa`, `nicole-ripado-mao-peito-2`.

**Assinatura.** **A linha de escaneamento e o protocolo em split sticky**: cada imagem é "escaneada" por uma linha Pólen ao aparecer, e o método "Um sorriso de cada vez" avança 01→04 num odômetro no painel verde fixo.

**Seções, na ordem.**
1. Header com indicador de seção.
2. Hero split.
3. **Um sorriso de cada vez — o método em 4 etapas** (peça central): painel sticky à esquerda; à direita, 4 blocos de cerca de 80svh com rótulo "ETAPA 01", H3, texto, lista "O que acontece", foto. No mobile, sem painel: cada etapa tem um mini-cabeçalho sticky "01 / 04 · Escuta e escaneamento 3D" com linha de progresso.
4. **Serviços em fichas técnicas:** no desktop, índice sticky à esquerda (01–04) e fichas à direita, cada uma com resposta direta em 2–3 frases (o que é, para quem, como funciona) e `<dl>` sobre Azul Nuvem ("Inclui", "Indicado para", "Tecnologia", "Primeiro passo"), mais "Ver página completa →". No mobile, cards horizontais com scroll-snap nativo (88vw) e contador "1 / 4", sem sequestro de scroll.
5. **Tecnologia, explicada:** 3 colunas (escaneamento 3D, limpeza com Air Flow ou ultrassom, planejamento digital), texto educativo, sem marcas de equipamento.
6. **Formação e prática (Sobre):** linha do tempo vertical com anos em `tabular-nums` (placeholders "20XX"): graduação [instituição], Prótese, Implantes e Cirurgia Periodontal na São Leopoldo Mandic [status a confirmar], CRO-SP 00000 com link "Consultar inscrição no CRO-SP". Foto com rótulo técnico.
7. **O consultório:** grade estrita com legendas numeradas "C-01 Sala de atendimento".
8. **Avaliações:** "5,0" em Geist 100 de 10rem + "[nº] avaliações no Google" + trechos de exemplo em lista com fios.
9. **Vindo de outra cidade:** tabela "Vindo de" com cidade + link "Traçar rota ↗".
10. **FAQ:** duas colunas, perguntas numeradas "P.01–P.06", sobre Azul Nuvem.
11. **Endereço:** mapa + bloco com endereço, coordenadas e horário em `<dl>`.
12. Rodapé Verde em 4 colunas com todos os dados legais.

**Mapa.** Estilo claro técnico: terra Creme, vias Verde a 25%, água Azul Nuvem, rótulos Verde, pin quadrado Verde com mira fina Pólen. Facade em SVG com grade de coordenadas.

**Referências.**
- Clínica KI: processo em 4 etapas com nomes sensíveis e JSON-LD completo.
- Mariana Wolf: Protocolo Wolf em 5 etapas e números concretos ("1 cadeira", "24h").
- Billig: H1 local, stats no hero e JSON-LD (como referência de SEO, não de visual).
- The Smile Code: endereço em caixa-alta espaçada usado como grafismo.
- Dębski Clinic: textos longos por especialidade, bons para SEO e IA.
- Lanserhof: "Book now" sempre fixo e navegação clara. [lanserhof.com](https://www.lanserhof.com/)

**Riscos a vigiar.** Pode ficar frio ou "de startup". Compensar com fotos grandes da Nicole, frases da marca nos títulos e Creme (nunca branco puro). Nada de números inventados no hero.

---

## 6. Pendências para confirmar com a cliente

1. Endereço completo e **sala** (`conteudo/endereco.txt` está vazio; hipótese: R. Barreto Leme, 2281, Cambuí; a placa do brand book mostra "Consultório 105").
2. Número do **CRO-SP**, telefone/WhatsApp próprio, horário de atendimento, Instagram.
3. Pessoa física ou PJ (muda o rodapé, art. 43).
4. Formação: instituição e ano da graduação; status da especialização na São Leopoldo Mandic (concluída ou em andamento).
5. Perfil no Google: existe? Tem placa individual no coworking (requisito do Google)? Quantas avaliações? Autorização dos autores para trechos.
6. Página de estética da face: manter, e com qual texto (situação jurídica em aberto).
7. Domínio (`.com.br`) e quem vai ter acesso à Cloudflare e ao Registro.br.

## Fontes

- Relatórios desta pasta: `01-referencias-brasil.md`, `02-referencias-internacionais.md`, `03-seo-ia-conformidade.md`, `04-tecnologia-performance-animacao.md`.
- Sites citados: [marianawolf.com.br](https://www.marianawolf.com.br/), [sidneykina.com.br](https://sidneykina.com.br/), [clinicaromana.com.br](https://clinicaromana.com.br/), [clinicaki.com.br](https://clinicaki.com.br/), [billigodontologia.com.br](https://billigodontologia.com.br/), [ornyodontologia.com.br](https://ornyodontologia.com.br/), [sorrisobh.com](https://www.sorrisobh.com/), [chelseadentalclinic.co.uk](https://www.chelseadentalclinic.co.uk/), [nycsmiledesign.com](https://www.nycsmiledesign.com/), [apaaesthetic.com](https://www.apaaesthetic.com/), [arthurglosmandds.com](https://arthurglosmandds.com/), [rifkinraanan.com](https://www.rifkinraanan.com/), [colette-camenisch.com](https://www.colette-camenisch.com/), [antaraspawellness.com](https://antaraspawellness.com/), [debskiclinic.pl](https://debskiclinic.pl/), [southcliffdentalgroup.com](https://southcliffdentalgroup.com/), [lanserhof.com](https://www.lanserhof.com/).
- Prêmios: [Awwwards Antara](https://www.awwwards.com/sites/antara-spa-wellness), [Awwwards South Cliff](https://www.awwwards.com/sites/south-cliff-dental-group), [Awwwards "clinic"](https://www.awwwards.com/inspiration_search/clinic/), [Webflow, Clinic Beethovenstrasse](https://webflow.com/made-in-webflow/website/clinic-beethovenstrasse).
- Normas: [Código de Ética Odontológica (CROSP)](https://site.crosp.org.br/uploads/etica/d7298aa38d661434f465bd376ec1470d.pdf), [Res. CFO-196/2019](https://website.cfo.org.br/wp-content/uploads/2019/01/Resolu%c3%a7%c3%a3o-CFO-196-2019.pdf), [Google, review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet), [Guia de cookies da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais).
- Fontes tipográficas verificadas no Google Fonts em 12/10/2026 (tamanhos do arquivo latin em woff2): Bodoni Moda (opsz+wght 400–500) cerca de 45 KB; Hanken Grotesk 300–500 cerca de 33 KB; Fraunces (opsz+wght+SOFT 100) cerca de 60 KB; Bricolage Grotesque 200–600 cerca de 40 KB; Geist 100–500 cerca de 28 KB; Arsenal SC regular local, 24 KB.
- Coordenadas: decodificação do Plus Code 4W2X+WX (Campinas) citado no relatório 03; confirmar no Google Maps.
