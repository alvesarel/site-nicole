# 07 · Direções da rodada 2 — opções 7 a 11

Direção de arte de 13/10/2026 para cinco novas homes da Dra. Nicole Almeida, a partir da pesquisa 05 (referências) e 06 (motion). A cliente aprovou o conceito 6 (Editorial Galeria) e pediu mais cinco para comparar, com fotos diferentes de si mesma. As cinco direções abaixo não repetem nada dos conceitos 1–6 (revista Bodoni, cinema escuro, nuvem com arcos, letras do logo gigantes, grade suíça com odômetro, editorial-galeria), nem entre si: cada uma tem outra cor dominante, outra fonte, outra lógica de layout, outra assinatura de movimento e outra frase de marca no H1.

| | 7 Pólen | 8 Colina | 9 Mosaico | 10 Ateliê | 11 Silêncio |
|---|---|---|---|---|---|
| Tema | claro, solar | claro, orgânico | claro, modular | claro, papel | claro, vazio (uma cena escura) |
| Cor dominante | Pólen 38% + Pólen-claro 27% | Creme 50% + verdes das colinas 24% | Creme-2 30% + tiles de 4 cores | Creme com grão 68% | Creme 70% + verde-escuro 16% |
| Fonte Google | Gabarito | Newsreader | Schibsted Grotesk | Spectral (+ mono do sistema) | Source Serif 4 |
| Papel da Arsenal SC | rótulos com "sol", nav, botões | rótulos, numerais, nav | rótulos nos cantos dos tiles | numerais romanos, nav, botões | rótulos verticais, nav vertical |
| Layout | blocos de cor full-bleed, foto em janela arredondada | curvas: colinas em SVG fecham as seções, foto em folha | grade bento 12 col, gap 12–16 px, tiles de 24 px | livro-razão sticky + fichas técnicas + moldura colada | uma coisa por tela, margens de até 160 px, nav vertical |
| Movimento | lanterna quente + parallax de calor + grão | parallax de colinas + folha em offset-path + protocolo pinado | pilha sticky + scroll-state + âncoras + contadores | máscara que "escreve" as anotações + grão de papel | timeline nomeada (4 cenas) + light-dark + indicador ancorado |
| Foto do hero | 21 sofa-recostada | 09 poltrona-3 | 19 sofa-concreto-2 | 05 mesa-ripado-2 | 07 perfil-corpo-inteiro |
| H1 (linha de marca) | Transformação com leveza. | Vamos juntos construir o seu sorriso? | Ser quem você realmente é — sem medos, sem máscaras. | Sou apaixonada por dentes e por pessoas. | Sorrir é um poder silencioso. |
| Assinatura | o Sol (disco Creme atrás da foto + ponto solar nos rótulos) | o horizonte de colinas que atravessa a página | rótulos nos cantos + painel de três dados | ficha técnica + lápis Pólen | rótulos verticais + manifesto em quatro telas |

## 0. Esqueleto comum às cinco

- **Seis seções + rodapé, nesta ordem (a forma muda, o conteúdo não):** 1 Hero · 2 Sobre + manifesto · 3 Serviços (I–IV) · 4 Consultório + protocolo "Um sorriso de cada vez" · 5 Avaliações (convite + link) + FAQ (5 perguntas) · 6 Endereço + mapa · Rodapé legal.
- **H1 em duas partes:** `<span class="h1-a">` linha de marca (diferente por conceito, ver tabela) + `<span class="h1-b">` "Dra. Nicole Almeida, cirurgiã-dentista. Clínica geral, com atuação em prótese e reabilitação oral no Cambuí, Campinas." A parte B sempre em fonte de corpo, 1,15–1,25 rem, cor de texto, nunca escondida.
- **CTA:** "Click para agendar" no header sticky, no hero e no botão fixo de WhatsApp (canto inferior direito, ícone + texto; só ícone abaixo de 360 px; cores da paleta, nunca verde-WhatsApp). Link `https://wa.me/...` com `target="_blank" rel="noopener" aria-label="Click para agendar pelo WhatsApp (abre em nova aba)"`.
- **Fotos:** uma no hero, no máximo duas por seção, cerca de cinco por página; somente as 22 novas da Nicole + consultório 01–11; nunca `marca-postagem-2.webp`. Nenhuma foto da Nicole se repete entre os cinco conceitos (tabela abaixo), para a cliente se ver de cinco jeitos.
- **Tipografia:** Arsenal SC local (preload, swap) + uma única família do Google por conceito, verificada em 13/10/2026 (HTTP 200 nas URLs abaixo). Corpo 18 px mobile / 19 px desktop, line-height ≥ 1,6, ≤ 64ch, contraste ≥ 7:1; rótulos Arsenal SC nunca abaixo de 15 px, letter-spacing ≤ .08em.
- **Movimento:** nada oculto no primeiro paint (H1, lead, CTA e foto do hero visíveis); reveals só abaixo da dobra, com `.js` e dentro de `@media (prefers-reduced-motion: no-preference)`; scroll-driven só em `@supports (animation-timeline: view())`; sem listeners de scroll, sem preloader, sem GSAP/Lenis.
- **CFO:** vocabulário da regra geral; avaliações só como convite + link (nenhuma nota numérica — a ideia "4,9 por extenso" de Neko/Klearmind fica de fora); Estética da face por último, discreta e com a frase "Toxina botulínica e preenchedores na região orofacial, com indicação após avaliação". Fatos numéricos só neutros (4 etapas, escaneamento 3D, horário).
- **Mapa:** facade em SVG na paleta → MapLibre (jsdelivr, versão fixa) com OpenFreeMap positron recolorido ao clicar; fallback iframe Google Maps. Links Google Maps / Waze / Apple Maps sempre visíveis.

**Distribuição das fotos (sem repetição entre conceitos)**

| Conceito | Hero | Outras da Nicole | Consultório |
|---|---|---|---|
| 7 Pólen | 21 sofa-recostada | 22 sofa-sorrindo-2 (Sobre); 17 sofa-casual-2 (avatar Ø 96 px no convite do Google, opcional) | 04 recepção dourada · 09 sala de espera |
| 8 Colina | 09 poltrona-3 | 04 janela-terno-creme-2 (Sobre); 13 ripado-mao-peito-2 (FAQ/convite) | 03 · 02 |
| 9 Mosaico | 19 sofa-concreto-2 | 03 em-pe-jeans (Sobre); 12 ripado-madeira-2 (tile escuro do manifesto) | 01 + vídeo `consultorio-tour.mp4` em card pequeno |
| 10 Ateliê | 05 mesa-ripado-2 | 02 detalhe-maos (ficha nº 01); 14 sentada-terno-creme-1 (manifesto) | 08 marcenaria LED · 07 cadeira bege |
| 11 Silêncio | 07 perfil-corpo-inteiro | 06 movimento-blur (última cena do manifesto); 10 poltrona-apoiada (Sobre) | 10 · 11 (tiras verticais) |

Reserva (permitidas, não usadas): 01 caminhando-janela, 08 poltrona-2, 11 poltrona-janela, 15 sentada-terno-creme-2, 16 sofa-casual-1, 18 sofa-concreto-1, 20 sofa-concreto-3.

---

## 7. Pólen (`opcao-7-polen`)

**Ideia e sensação.** A manhã de sol. Pela primeira vez o Amarelo Pólen é fundo, não acento: blocos grandes de Pólen e Pólen-claro com texto Verde. É a direção mais otimista e encorajadora, pensada para quem perdeu dentes e chega com vergonha: a página sorri primeiro. "Transformação com leveza" vira cor. Referência de que amarelo claro pode ser clínico e sereno: Neko Health.

**Paleta.** Claro. Pólen `#DBCB79` 38% (hero, faixa final do degradê das etapas), Pólen-claro `#EFE6BC` 27% (Sobre, FAQ), Creme `#FFFDEE` 20% (Serviços, Endereço, cards, o "Sol"), Verde `#3D420A` 13% (títulos, CTA, rodapé), `--verde-escuro #262A05` para corpo sobre Pólen, Azul Nuvem 2% (ícones de linha dos três fatos, água do mapa). Grão SVG (`feTurbulence`, `numOctaves 2`, tile 120 px, data URI) a 5% só nas superfícies Pólen.
Contrastes calculados: Verde sobre Pólen 6,5:1 (só títulos ≥ 24 px e rótulos ≥ 15 px); `--verde-escuro` sobre Pólen 9,1:1 (corpo); Verde sobre Pólen-claro 8,4:1 (corpo); Creme sobre Verde 10:1 (CTA). Pólen nunca como texto.

**Tipografia.** Arsenal SC + **Gabarito** (geométrica com personalidade: "a", "g" e "y" abertos, numerais redondos).
- URL: `https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap` (1 variável, cerca de 30 KB latin).
- H1: Gabarito 700, `clamp(2.75rem, 7vw, 6.5rem)`, line-height .95, letter-spacing −.02em, Verde, `text-wrap: balance`. Parte B: Gabarito 500, 1,25 rem, `--verde-escuro`.
- H2: Gabarito 600, `clamp(2rem, 4.2vw, 3.5rem)`, line-height 1.02. Corpo: Gabarito 400, 18/19 px, line-height 1.6, 62ch. Gabarito não tem itálico: ênfase com um "marcador" Creme atrás da palavra (`box-decoration-break: clone`, padding .05em .25em, raio 6 px).
- Arsenal SC: rótulos 15 px, letter-spacing .06em, sempre precedidos do ponto solar (círculo Creme ou Verde de 10 px); nav 15 px; botões 16 px.

**Layout.** Grade de 12 colunas, margem `clamp(20px, 6vw, 96px)`, gutter 24 px; seções full-bleed de cor, alternando Pólen / Pólen-claro / Creme para o amarelo não cansar. Cantos de 40 px nas fotos e 12 px nos botões; sem sombras (fios de 1 px Verde a 10%).
- **Hero desktop:** bloco Pólen de `min-height: 100svh` com o header dentro. Colunas 1–6: rótulo "● Cambuí · Campinas – SP", H1, parte B, lead de 19 px em `--verde-escuro` ("Para quem perdeu dentes e quer voltar a sorrir sem pensar nisso: planejamento com escaneamento 3D, atendimento individual e tempo para conversar."), CTA Verde/Creme + "ou ligue (19) …". Abaixo, **três fatos com ícone de linha** (ideia Oula/Tia, sem números de avaliação): "Escaneamento 3D na primeira consulta" · "Atendimento individual, com hora marcada" · "Prótese e reabilitação oral". Colunas 7–12: foto 21 em janela arredondada (raio 40 px), 4:5, cerca de 78vh, `object-position: 50% 30%`, com borda Creme de 8 px; atrás do canto superior direito, o **Sol**: disco Creme Ø `clamp(200px, 26vw, 360px)`, deslocado +40 px / −60 px.
- **Hero mobile:** rótulo, H1 em 2,75 rem, parte B, lead, CTA; foto 4:5 em largura total com o Sol espreitando pelo canto; os três fatos viram lista com ícone.

**Header e CTA.** Header Pólen (transparente sobre o hero; ao rolar Pólen a 94% com `backdrop-filter`), logo-horizontal Verde 190 px, nav Arsenal SC. CTA retangular de raio 12 px, Verde com Creme. Botão fixo de WhatsApp: pílula Verde com Creme, ícone + "Click para agendar".

**Movimento ("calor").** Easing `cubic-bezier(.2,.7,.2,1)`, 500–900 ms.
- **Lanterna quente** (06 §2.6): sobre a foto do hero, uma camada `aria-hidden` Pólen com `mix-blend-mode: soft-light`, `mask: radial-gradient(260px at var(--x) var(--y), #000, transparent)`; um `pointermove` no container escreve `--x/--y`. Só em `@media (hover:hover) and (pointer:fine)`; no toque, não existe. A foto base está sempre visível (LCP intacto).
- **Parallax de calor** (§2.16): com `animation-timeline: view()` e `animation-range: cover`, o Sol sobe 24 px, a foto 8 px e o texto fica parado. Fallback: estático.
- **Amanhecer das etapas:** a seção 4 tem fundo `linear-gradient(180deg, #FFFDEE 0%, #DBCB79 100%)` (Neko) e os quatro cards Creme entram com 16 px de subida e fade (IO, intervalo de 90 ms).
- Hover nas linhas de serviço: fundo Pólen-claro cresce da esquerda (`scaleX` 0→1, 400 ms) e a seta anda 8 px. FAQ com `::details-content` (transição de altura em Chromium, instantâneo nos demais). Botões com mola `linear(0, 1.08, .97, 1)` em `scale(1.02)`.
- Reduced motion: lanterna, parallax e molas desligados.

**Fotos.** Hero 21 `nicole-sofa-recostada` (o sorriso mais aberto; recorte 4:5 descarta o rodapé do sofá). Sobre: 22 `nicole-sofa-sorrindo-2` em janela de raio 40 px, 4:5, colunas 1–5. Consultório: `consultorio-04` (recepção com poltrona dourada, que ecoa o Pólen) e `consultorio-09` (sala de espera), lado a lado 3:2. Opcional: 17 `nicole-sofa-casual-2` como avatar circular de 96 px ao lado do convite "Avalie no Google".

**Assinatura.** **O Sol**: o disco Creme atrás da foto do hero e o ponto solar antes de cada rótulo de seção; a página "amanhece" no degradê Creme → Pólen da seção de etapas e termina no rodapé Verde ("noite") com um último ponto Pólen.

**Seções, na ordem.**
1. **Hero** (Pólen): H1 + três fatos + foto em janela + Sol.
2. **Sobre + manifesto** (Pólen-claro): H2 "Apaixonada por dentes e por pessoas." Foto 22 à esquerda; texto do BRIEF à direita (formação, atuação, CRO); manifesto como bloco de 3 parágrafos curtos em Gabarito 500 de 1,5 rem com as palavras "precisão e carinho" e "sem pressa" marcadas em Creme; assinatura com `logo-completo.svg` Verde 150 px.
3. **Serviços** (Creme): quatro linhas I–IV, título Gabarito 600 de 2 rem, subitens em Gabarito 400, seta; link `servicos/<slug>.html`; Estética da face por último em linha menor e sem destaque.
4. **Consultório + Um sorriso de cada vez** (degradê Creme → Pólen): duas fotos do consultório à esquerda; quatro cards Creme (01 Escuta e escaneamento 3D · 02 Planejamento · 03 Tratamento · 04 Acompanhamento) com número Gabarito 700 Verde e um ícone de linha; fechamento "Um sorriso de cada vez." + CTA.
5. **Avaliações + FAQ** (Pólen-claro): convite "Se foi atendida pela Dra. Nicole, conte como foi" + link "Avaliar no Google ↗" (sem nota); FAQ em `details/summary`, pergunta em Gabarito 600 1,25 rem, ícone + / −.
6. **Endereço** (Creme): endereço, horário, telefone, links Google Maps / Waze / Apple Maps; facade do mapa à direita.
7. **Rodapé** (Verde): logo-completo Creme, bloco legal completo, Instagram, Política de privacidade.

**Mapa.** Facade: Pólen-claro com ruas Verde a 30%, pin Verde com miolo Creme, rótulo "Cambuí" em Arsenal SC. MapLibre positron: terra `#EFE6BC`, vias `#B9AA5A`, água `#DEE2FF`, rótulos `#5A5E2C`, edifícios `#E6DCA8`.

**Referências.** Neko Health (`r2-neko-health`: degradê creme → amarelo, cards brancos das etapas, fechamento curto) · Golde (`r2-golde`: microcopy e calor de foto) · Oula (`r2-oula`: três fatos com ícone sob o H1, faixa com telefone) · Tia (`r2-tia`: checklist com ícones, dois CTAs) · Yard (`r2-yard-dental`: pílula telefone + mensagem).

**Riscos a vigiar.** Amarelo demais cansa: nunca duas seções Pólen seguidas; corpo sobre Pólen só em `--verde-escuro`; a foto sobre fundo amarelo precisa da borda Creme de 8 px para não "afundar". Gabarito 700 muito grande fica infantil: travar o H1 em 6,5 rem e letter-spacing negativo.

---

## 8. Colina (`opcao-8-colina`)

**Ideia e sensação.** A paisagem que já está nos nomes da paleta: Verde Colina, Amarelo Pólen, Azul Nuvem, Creme Pérola. A home é uma caminhada de manhã por colinas com névoa: horizonte em SVG que fecha cada seção, foto recortada em folha, uma folha que flutua, serif humanista. Para o paciente: "não é uma consulta, é um caminho", e o convite do manifesto vira H1: "Vamos juntos construir o seu sorriso?".

**Paleta.** Claro. Creme 50% (base), Nuvem-claro `#EEF0FF` 14% (céu do hero, névoa entre colinas), colinas: Azul Nuvem `#DEE2FF` (colina distante), `--verde-2 #5A5E2C` (meio) e Verde `#3D420A` (frente) somando 24% com rodapé, Pólen-claro 8% (luz na colina da frente ao hover, fundo do FAQ), Pólen 2% (folha, ponto que caminha, fios), `--verde-escuro` 2% (texto de legendas sobre fotos).
Contrastes: Verde sobre Creme 10:1, Verde sobre Nuvem-claro 8,6:1, Verde sobre Pólen-claro 8,4:1.

**Tipografia.** Arsenal SC + **Newsreader** (serif humanista com eixo óptico; itálico expressivo em corpo grande).
- URL: `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..500;1,6..72,400&display=swap` (3 arquivos variáveis, cerca de 70 KB).
- H1: Newsreader 400, `font-optical-sizing: auto` (opsz 72 no tamanho máximo), `clamp(2.75rem, 6.5vw, 6rem)`, line-height 1.0, "sorriso?" em itálico 400. Parte B: Newsreader 500, 1,2 rem.
- H2: `clamp(2rem, 4vw, 3.5rem)`, 400. Citação do manifesto: itálico 400, `clamp(1.6rem, 3vw, 2.6rem)`. Corpo: 400, 18/19 px (opsz 16–18), line-height 1.65, 62ch.
- Arsenal SC: rótulos 15 px .08em, numerais I–IV, nav, botões 16 px.

**Layout.** Grade de 12 colunas, margem `clamp(20px, 6vw, 96px)`. Nenhuma seção termina em linha reta: o divisor é o SVG de colinas (`preserveAspectRatio="none"`, altura `clamp(80px, 12vw, 180px)`, três `<path>` com 2–3 ondas suaves cada). Fotos em folha: `border-radius: 0 45% 0 45%` (dois cantos opostos arredondados), nunca arco (conceito 3) nem moldura (6).
- **Hero desktop:** céu `linear-gradient(180deg, #EEF0FF 0%, #FFFDEE 55%)`. Colunas 1–6: rótulo "Cambuí · Campinas – SP", H1, parte B, lead, CTA em **pílula larga com seta** (Truekind), "ou ligue". Colunas 7–12: foto 09 em folha, 4:5, cerca de 76vh, `object-position: 50% 24%` (os galhos secos ficam no canto superior direito). As colinas fecham o hero e cobrem os 10% inferiores da foto, como se ela estivesse atrás do morro. Uma folha de linha (SVG 28 px, Pólen, `aria-hidden`) percorre um `offset-path` do alto da foto até o fim do H1 em 14 s, uma vez.
- **Hero mobile:** texto, CTA, foto em folha 4:5, colinas a 90 px de altura.

**Header e CTA.** Header transparente → Creme a 94% com fio; logo-horizontal Verde; nav Arsenal SC; CTA pílula Verde com Creme. Botão fixo: pílula Verde com Creme.

**Movimento ("vento").** Durações de 900–1400 ms, easing `cubic-bezier(.22,.61,.36,1)`.
- **Parallax de colinas** (06 §2.16): as três camadas se movem com `animation-timeline: view()` em amplitudes de 6 / 12 / 20 px (`translateY`), `animation-range: cover`. Zero JS. Fallback: estático.
- **Folha em `offset-path`** (§2.18) no hero, uma iteração, `pointer-events: none`; parada em reduced motion.
- **O caminho (protocolo pinado)** (§2.2): a seção 4 usa `timeline-scope: --caminho` num container de 320svh com palco `sticky` de 100svh. No palco, as colinas ficam fixas e as quatro etapas surgem uma de cada vez (`animation-range` 0–25%, 25–50%, 50–75%, 75–100%) enquanto um ponto Pólen de 14 px anda por um `offset-path` sobre a crista da colina. Em `@supports` negativo ou reduced motion: quatro etapas empilhadas, legíveis, com o ponto estático.
- Fotos em folha mudam levemente de forma no hover (`border-radius` de 8 valores, 600 ms). FAQ com `::details-content` e um ramo de linha desenhado em Verde-2 na borda esquerda (estático). `text-wrap: balance` nos títulos.

**Fotos.** Hero 09 `nicole-poltrona-3` (galhos secos ao fundo: o único elemento botânico real do ensaio). Sobre: 04 `nicole-janela-terno-creme-2` (parapeito com a cidade ao fundo: horizonte real), raio 32 px, 3:4. Consultório: `consultorio-03` e `consultorio-02` lado a lado, cantos 32 px. Avaliações/FAQ: 13 `nicole-ripado-mao-peito-2` em folha de 200 px ao lado do convite.

**Assinatura.** **O horizonte de colinas**: o mesmo SVG em três camadas fecha o hero, divide as seções 2 e 4, segura o protocolo pinado e vira a borda superior do rodapé, sempre com fase diferente, para a página se ler como uma caminhada. O ponto Pólen que percorre o caminho das quatro etapas é a Nicole acompanhando.

**Seções, na ordem.**
1. **Hero**: céu, H1, pílula, foto em folha, colinas.
2. **Sobre + manifesto** (Creme → colinas): H2 "Quem cuida do seu sorriso"; foto 04; texto do BRIEF; manifesto como citação corrida em itálico com "com precisão e carinho" e "sem pressa" em Verde-2; assinatura com logo-completo.
3. **Serviços — "Quatro caminhos"** (Nuvem-claro): lista I–IV com fios finos e um broto de linha como marcador; Estética da face por último, menor.
4. **Consultório + "Não é uma consulta, é um caminho"** (Creme, pinado): duas fotos do consultório; as quatro etapas no palco das colinas.
5. **Avaliações + FAQ** (Pólen-claro): convite + link; FAQ com ramo de linha.
6. **Endereço** (Creme): dados + mapa em curvas de nível.
7. **Rodapé** (Verde, colinas na borda superior): logo Creme, legal, Instagram, privacidade.

**Mapa.** Facade: curvas de nível em Verde-2 a 25% sobre Creme, pin em forma de folha Pólen com ponto Verde. MapLibre positron: terra `#FFFDEE`, parques `#EFE6BC`, vias `#5A5E2C` a 35%, água `#DEE2FF`, rótulos `#5A5E2C`.

**Referências.** Klearmind (`r2-klearmind`: elemento natural isolado, fotos em pétala, FAQ ilustrado) · Truekind (`r2-truekind`: itálico + sans na mesma frase, pílula única larga) · Tia (`r2-tia`: consultório e checklist) · Parsley (`r2-parsley-health`: tom) · Oula (`r2-oula`: foto recortada, aqui folha em vez de arco).

**Riscos a vigiar.** Ilustração de linha vira "cottagecore" com facilidade: traço de 1 px, Verde-2, nunca flores abertas, no máximo um elemento por seção. Colinas com ondas demais parecem desenho infantil: 2–3 curvas por camada, amplitude baixa.

---

## 9. Mosaico (`opcao-9-mosaico`)

**Ideia e sensação.** Um painel claro e organizado: cada informação num tile da paleta, grade bento de cantos arredondados, app-like, tudo a um toque no celular. Para quem chega pelo Instagram e quer saber em dez segundos quem é, o que faz, onde fica e como agendar. O H1 "Ser quem você realmente é — sem medos, sem máscaras" ganha um tile Verde inteiro.

**Paleta.** Claro. Fundo da página `--creme-2 #F5F1DA` 30%; tiles: Creme 25%, Verde 18%, Azul Nuvem 12%, Pólen 10%; `--verde-escuro` 3% (rodapé); Pólen-claro 2% (hover). Texto Verde nos tiles claros, Creme nos tiles Verde, Verde nos tiles Pólen (títulos e rótulos ≥ 15 px; corpo em `--verde-escuro`, 9,1:1). Sem sombras: fio de 1 px Verde a 8%; sem degradês.

**Tipografia.** Arsenal SC + **Schibsted Grotesk** (grotesca moderna de jornal escandinavo, eixo de peso 400–900 + itálico).
- URL: `https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..700;1,400&display=swap` (2 variáveis, cerca de 45 KB).
- H1: 600, `clamp(2.5rem, 6vw, 5.5rem)`, line-height .98, letter-spacing −.025em, Creme sobre Verde. Parte B: 400, 1,2 rem, Creme.
- Títulos de tile (H2): 500, `clamp(1.5rem, 2.4vw, 2.25rem)`. Números dos dados e etapas: 700, `clamp(3rem, 6vw, 5rem)`, `font-variant-numeric: tabular-nums`. Corpo: 400, 18/19 px, line-height 1.6, 56ch (tiles são estreitos).
- Arsenal SC: rótulos nos cantos dos tiles 15 px .06em em pílulas Creme; nav.

**Layout.** Container de 1360 px, margem `clamp(16px, 4vw, 48px)`, grade de 12 colunas com gap 12 px (16 px a partir de 1024 px), tiles com raio 24 px (`corner-shape: squircle` onde houver) e padding 28–40 px. Cada seção é um bento próprio; no mobile tudo vira uma coluna (ou 2 colunas para dados e FAQ).
- **Hero desktop** (altura ≈ 100svh − header): **Tile A** (col. 1–7, linhas 1–2) Verde: rótulo "Cambuí · Campinas – SP", H1, parte B, CTA Pólen com Verde + "ou ligue". **Tile B** (col. 8–12, linhas 1–3): foto 19, `object-position: 50% 18%`, com **três rótulos nos cantos** em pílulas Creme (Rejuvenation): "Dra. Nicole Almeida · CRO-SP 180131" (alto-esquerda), "Cambuí · Campinas" (baixo-esquerda), "Prótese e reabilitação oral" (baixo-direita). **Linha 3** (col. 1–7): três tiles de dados (Function Health) — Creme "3D / escaneamento na primeira consulta" · Nuvem "Hora marcada / atendimento individual" · Pólen "4 etapas / um sorriso de cada vez".
- **Hero mobile:** Tile A (H1 em 2,5 rem), Tile B 4:5, dados em grade 2+1, CTA repetido.

**Header e CTA.** Header sticky com `container-type: scroll-state`: ao grudar (`scroll-state(stuck: top)`) ganha fundo Creme a 94% e fio; fallback por IO em sentinela. Indicador de nav que desliza sob o item ativo por anchor positioning. CTA do header em tile Pólen de raio 14 px. Botão fixo de WhatsApp: tile Pólen de raio 16 px com Verde, ícone + texto.

**Movimento ("pilha e grade").** Easing `cubic-bezier(.2,.8,.2,1)`, 400–700 ms.
- **Pilha sticky de serviços** (06 §2.1): quatro cards em `ul`, cada `li` `position: sticky; top: calc(5rem + 1rem * sibling-index())` (fallback `nth-child`); ao ser coberto, o conteúdo interno faz `scale(.94)` e um overlay Verde sobe para 12% de opacidade (`animation-timeline: view()`, `animation-range: exit-crossing`). Sem JS; em reduced motion, pilha estática.
- **Contadores** (§2.17): números das etapas 01–04 e o "4" do tile de dados contam de 0 ao valor (`@property --n` + `counter-reset`), disparados por IO. Só fatos neutros.
- **Âncoras** (§2.12): indicador da nav e popovers dos tiles de dados ("o que é o escaneamento 3D?") com `position-anchor` + `@starting-style`; fallback estático.
- `:has()` (§2.14) em grades pequenas: `.bento:has(.tile:hover) .tile:not(:hover){opacity:.85}`. CTA magnético (§2.7) com deslocamento máximo de 6 px e mola `linear()`. Tiles abaixo da dobra entram com 16 px de subida (IO, intervalo de 70 ms).

**Fotos.** Hero 19 `nicole-sofa-concreto-2` (parede de concreto: arquitetura, contemporâneo, olhar para a câmera). Sobre: 03 `nicole-em-pe-jeans` em tile 3:4 (col. 1–4) e 12 `nicole-ripado-madeira-2` em tile escuro pequeno (col. 9–12) na linha do manifesto, conversando com o tile Verde. Consultório: `consultorio-01` em tile largo + **vídeo em card pequeno** (`consultorio-tour.mp4`, poster, `preload="none"`, play no clique, LAVA).

**Assinatura.** **Rótulos nos cantos + painel de três dados**: toda foto da Nicole leva pílulas Arsenal SC nos cantos (nome, bairro, atuação) e o hero termina numa linha de três tiles de dados; os serviços são uma pilha sticky que se empilha ao rolar.

**Seções, na ordem.**
1. **Hero bento**: Tile A Verde, Tile B foto, três dados.
2. **Sobre + manifesto**: tile foto 03 (col. 1–4) + tile Creme de texto (col. 5–12); segunda linha: tile Nuvem com o manifesto em 500 de 1,5 rem (col. 1–8) + tile foto 12 (col. 9–12).
3. **Serviços — pilha**: I Verde (Reabilitação oral, Creme), II Nuvem (Prevenção e manutenção), III Creme (Estética dental), IV Creme-2 menor e discreto (Estética da face, com a frase da regra). Cada card com número 01–04, itens e seta "Ver mais →".
4. **Consultório + Um sorriso de cada vez**: tile foto larga + vídeo em card pequeno; quatro tiles de etapas em linha com números que contam.
5. **Avaliações + FAQ**: tile Pólen "Avaliar no Google ↗" (convite) + FAQ em tiles `details` de duas colunas.
6. **Endereço**: tile Creme com dados e links + tile Nuvem com o mapa.
7. **Rodapé**: tile `--verde-escuro` de largura total, logo Creme, legal.

**Mapa.** Facade: tile Nuvem com ruas Verde a 25% e pin Verde em quadrado arredondado. MapLibre positron: terra `#EEF0FF`, vias `#FFFDEE`, água `#DEE2FF`, edifícios `#DEE2FF`, rótulos `#5A5E2C`.

**Referências.** Function Health (`r2-function-health`: três tiles de dados com legenda) · Rejuvenation Dentistry (`r2-rejuv-health`: rótulos nos cantos do hero) · LAVA (`r2-lava-dental`: serviços numerados, vídeo em card pequeno) · Neko (`r2-neko-health`: cards com miniatura) · Aventura (`r2-aventura-dental`: notas nos cantos, rodapé em colunas).

**Riscos a vigiar.** Bento vira "SaaS" em um passo: nada de ícones de pacote, degradês ou sombras; fotos grandes, Arsenal SC nos rótulos, fios de 1 px. Tiles estreitos pedem corpo em 56ch e nunca abaixo de 18 px. Reduced motion: a pilha tem de funcionar como lista comum.

---

## 10. Ateliê (`opcao-10-atelier`)

**Ideia e sensação.** A prótese como ofício: "trabalho minucioso e manual". Papel com grão, fichas técnicas, anotações a lápis Pólen, mesa de trabalho, serif humanista de livro e rótulos datilografados. A Nicole como autora e artesã; a calma de uma oficina de luthier, não de um laboratório. H1 na voz dela: "Sou apaixonada por dentes e por pessoas."

**Paleta.** Claro. Creme 68% com grão (papel), `--creme-2` 14% (fichas, chips, rodapé), Verde 13% (texto, fios, botão), `--verde-2` (rótulos mono, traços secundários), Pólen 4% só como lápis (sublinhados, círculos, setas; nunca texto), Nuvem 1% (água do mapa). Grão: `feTurbulence` estático (`numOctaves 2`, tile 120 px, data URI) num pseudo-elemento `position: fixed; inset: 0; opacity: .06; mix-blend-mode: multiply; pointer-events: none`.

**Tipografia.** Arsenal SC + **Spectral** (serif humanista de leitura em tela, Production Type, com itálico 300 leve) + monoespaçada do sistema para as fichas.
- URL: `https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,500;1,300&display=swap` (4 estáticas, cerca de 95 KB latin).
- H1: Spectral 300, `clamp(2.5rem, 5.5vw, 5rem)`, line-height 1.05, "pessoas" em itálico 300. Parte B: Spectral 400, 1,2 rem.
- H2: Spectral 400, `clamp(1.9rem, 3.6vw, 3rem)`. Citação do manifesto: itálico 300, `clamp(1.5rem, 2.6vw, 2.25rem)`. Corpo: 400, 18/19 px, line-height 1.65, 62ch.
- Fichas e livro-razão: `ui-monospace, "Cascadia Mono", "SF Mono", Menlo, Consolas, monospace`, 15 px, caixa-alta, letter-spacing .04em, `tabular-nums`, Verde-2 — 0 KB, respeita a regra de uma única fonte Google e dá o ar "datilografado"; se a cliente preferir uniformidade, trocar por Arsenal SC 15 px.
- Arsenal SC: numerais romanos I–IV, nav, botões 16 px, rótulos 15 px .08em.

**Layout.** Grade de 12 colunas, margem `clamp(20px, 6vw, 96px)`; fios pontilhados (`border-style: dotted`, Verde a 25%) em vez de linhas cheias; cantos retos (raio 2 px); fotos em moldura "colada" (fundo Creme-2 de 8 px + fio Verde-2 de 1 px, `rotate(.6deg)`, endireita no hover).
- **Hero desktop:** colunas 1–3, **livro-razão** (Ffern) `position: sticky; top: 96px`: quatro pares rótulo/valor em mono com valores em chips Creme-2 — "Atendimento — com hora marcada" · "Agenda — seg. a sex., 9h–18h" · "Consultório — Cambuí, Campinas" · "Registro — CRO-SP 180131". Colunas 4–8: rótulo "Ficha nº 00 · Apresentação", H1, parte B, lead, **CTA retangular** (Vintner's: fundo Creme, borda 1,5 px Verde, texto Verde; hover inverte) + "ou ligue". Colunas 9–12: foto 05 em moldura colada, 4:5, `object-position: 50% 20%`, com **anotação a lápis**: círculo irregular Pólen (SVG `<path>`, stroke 2 px) ao redor das mãos, seta curta e nota em mono "trabalho minucioso e manual".
- **Hero mobile:** livro-razão vira linha de chips rolável (`overflow-x: auto`, scroll-snap) sob o H1; foto depois do CTA; anotação mantida.

**Header e CTA.** Header Creme com fio pontilhado inferior; logo-horizontal Verde; nav Arsenal SC; CTA retangular. Botão fixo de WhatsApp: retângulo Creme com borda 1,5 px Verde e sombra chapada `0 2px 0 #3D420A` (carimbo), ícone + texto.

**Movimento ("mão que revela").** 700–1000 ms, easing `cubic-bezier(.3,.7,.3,1)`.
- **Máscara que escreve** (06 §2.5): as anotações SVG (círculos, sublinhados, setas) aparecem com `mask-image: linear-gradient(100deg, #000 var(--p), transparent calc(var(--p) + 10%))` e `@property --p` de 0% a 100% em 900 ms quando entram na tela (IO). Não é o traço `stroke-dashoffset` do conceito 2: aqui a tinta "passa" sobre o papel. Hover nos links de serviço revela o sublinhado Pólen do mesmo jeito.
- **Grão de papel** (§2.19) estático em tela cheia.
- **Fichas do protocolo** como cartões verticais (Ffern) em carrossel CSS (§2.11: `scroll-snap-type: x mandatory`, `::scroll-button` em Chromium) no mobile; em linha no desktop.
- `:has()` (§2.14) na lista de serviços: `ul:has(li:hover) li:not(:hover){opacity:.55}` e miniatura do consultório aparece à direita. FAQ com `::details-content`. Livro-razão sticky sem animação. Reduced motion: anotações já visíveis.

**Fotos.** Hero 05 `nicole-mesa-ripado-2` (à mesa: cena de consulta, a "bancada"). Sobre: 02 `nicole-detalhe-maos` como "Ficha nº 01 — as mãos" em moldura colada 4:5, colunas 1–5, com anotação; 14 `nicole-sentada-terno-creme-1` (mão no rosto, pensativa) ao lado do manifesto, 3:4 pequena. Consultório: `consultorio-08` (marcenaria com LED) e `consultorio-07` (cadeira bege), como fotos da bancada.

**Assinatura.** **Ficha técnica + lápis Pólen**: cada seção abre com uma ficha em mono (N.º · título · "revisado em 13/10/2026") e carrega uma única anotação à mão em Pólen; o hero tem o livro-razão que acompanha a rolagem.

**Seções, na ordem.**
1. **Hero** com livro-razão, H1, foto anotada.
2. **Sobre + manifesto** ("Ficha nº 01 — Quem faz"): foto 02 à esquerda; texto do BRIEF; manifesto como citação corrida em itálico (Ffern) com sublinhado Pólen em "com precisão e carinho"; foto 14 pequena; assinatura com logo-completo.
3. **Serviços — "Catálogo do ofício"** ("Ficha nº 02"): lista com fios pontilhados, numeral romano, título Spectral 400 de 1,75 rem, subitens, "p. 01 →"; Estética da face por último, menor.
4. **Consultório + Um sorriso de cada vez** ("Ficha nº 03 — A bancada"): duas fotos; quatro fichas verticais (01–04) com rótulos mono "Etapa · O que acontece · Quanto tempo leva (varia)".
5. **Avaliações + FAQ** ("Ficha nº 04 — Perguntas"): convite + link com círculo a lápis em "Google"; FAQ em `details` com pergunta em Spectral 400.
6. **Endereço** ("Ficha nº 05 — Onde"): dados + mapa-croqui.
7. **Rodapé** (Creme-2 com grão): logo Verde, legal em mono 15 px, Instagram, privacidade.

**Mapa.** Facade "croqui": ruas em traço Verde-2 (`stroke-dasharray: 6 3`), nomes em mono, pin = círculo Pólen à mão com ponto Verde. MapLibre positron: terra `#FFFDEE`, vias `#5A5E2C` a 35%, água `#DEE2FF`, edifícios `#F5F1DA`, rótulos `#5A5E2C`.

**Referências.** Ffern (`r2-ffern`: livro-razão, serif + mono, papel, citação corrida, cartões verticais) · Vintner's Daughter (`r2-vintners-daughter`: botão branco fino, versaletes + itálico) · Santa Maria Novella (`r2-smnovella`: lista com fios) · Golde (`r2-golde`: microcopy mono) · Truekind (`r2-truekind`: macro de textura → as mãos).

**Riscos a vigiar.** "Artesanal" não pode virar scrapbook: uma anotação por tela, traço de 2 px, sem fita, sem fonte manuscrita; mono só em rótulos (nunca corpo); grão a 6% e estático (nunca animar o filtro). Spectral 300 em corpo é fino demais: corpo sempre 400.

---

## 11. Silêncio (`opcao-11-silencio`)

**Ideia e sensação.** "Ma", o intervalo japonês: uma coisa por tela, muito ar, rótulos verticais, serif fina, ritmo lento. A página respira como o consultório ao fim do dia. O manifesto vira quatro telas escuras com uma frase cada. H1: "Sorrir é um poder silencioso." Nada do cinema escuro do conceito 2 (sem letterbox, sem legendas) nem da revista dos conceitos 1 e 6.

**Paleta.** Claro. Creme 70% (quase tudo), `--verde-escuro #262A05` 16% (a cena do manifesto), Nuvem-claro `#EEF0FF` 8% (moldura da foto do hero e faixa das tiras do consultório), Verde 5% (texto), Pólen 1% (ponto da nav vertical e o indicador "role"). Sobre a cena escura, texto Creme (14,5:1).

**Tipografia.** Arsenal SC + **Source Serif 4** (uma família com eixo óptico: display fino em opsz 60, texto sólido em opsz 14).
- URL: `https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..500;1,8..60,300&display=swap` (2 variáveis, cerca de 80 KB).
- H1: Source Serif 4 200, opsz 60, `clamp(2.75rem, 7.5vw, 7.5rem)`, line-height 1.0, letter-spacing −.01em, `text-wrap: balance`; abaixo de 48 px ou em `max-resolution: 1.5dppx`, peso 300. Parte B: 400, opsz 20, 1,2 rem.
- H2: 300, opsz 40, `clamp(1.9rem, 3.5vw, 3.25rem)`. Frases do manifesto: 200, opsz 60, `clamp(2rem, 4.5vw, 4rem)`, Creme. Corpo: 400, opsz 14, 18/19 px, line-height 1.7, 58ch.
- Arsenal SC: rótulos verticais 15 px .08em (`writing-mode: vertical-rl`), nav vertical 15 px, numerais "01–04", botões 16 px.

**Layout.** Grade de 12 colunas, margens largas `clamp(24px, 8vw, 160px)`; no desktop cada seção tem `min-height: 100svh` e um só assunto; no mobile, altura automática e nunca mais de 100svh de vazio.
- **Hero desktop:** foto 07 nas colunas 1–5, altura `100svh − header`, `object-position: 60% 50%` (a Nicole fica no terço esquerdo e a parede vazia ocupa o resto), **emoldurada** por uma faixa Nuvem-claro 24 px mais larga que a foto (Takayanagi). Colunas 7–12, centradas verticalmente: rótulo "01 · Cambuí", H1, parte B, **três botões empilhados** (Takayanagi): "Click para agendar" (pílula Verde com Creme), "Como chegar" (pílula com fio 1 px) e "ou ligue (19) …". Na borda direita, texto vertical "Cambuí · Campinas – SP"; no canto inferior esquerdo, "role" com fio de 40 px e ponto Pólen. **Nav vertical** à direita (≥ 1100 px): Sobre · Serviços · Consultório · Perguntas · Endereço, item ativo com ponto Pólen ancorado.
- **Hero mobile:** H1 em 3 rem, parte B, botões, foto 3:4 com moldura Nuvem-claro de 12 px; rótulo vertical vira linha horizontal.

**Header e CTA.** Header transparente com logo-horizontal Verde 160 px, "Menu" (abre painel com `@starting-style`) e CTA; ao rolar, só um fio de 1 px. Botão fixo de WhatsApp: pílula Verde com Creme, ícone + texto.

**Movimento ("Ma").** Durações de 1000–1400 ms, easing `cubic-bezier(.16,1,.3,1)`.
- **Manifesto em quatro cenas** (06 §2.2): `.cena{timeline-scope:--cena}` com trilho de 360svh (`scroll-timeline: --cena block`) e palco `sticky` de 100svh em `--verde-escuro`; as quatro frases fazem crossfade por `animation-timeline: --cena` nos intervalos 0–22%, 25–47%, 50–72%, 75–100%: "Sorrir é um poder silencioso." · "Me dedico, com precisão e carinho, a cada transformação." · "A experiência deve ser acolhedora, fluida, sem pressa." · "Vamos juntos construir o seu sorriso?". Na última, a foto 06 (movimento-blur) entra a 30% de opacidade em `mix-blend-mode: multiply`. Fallback (`@supports` negativo ou reduced motion): quatro frases empilhadas sobre o verde-escuro, legíveis.
- **`light-dark()`** (§2.13): a cena declara `color-scheme: dark` e os tokens (`--ink`, `--paper`) invertem sem duplicar regras.
- **Indicador ancorado** (§2.12): ponto Pólen com `position-anchor` no item ativo da nav (IO troca a classe), transição de 400 ms; fallback estático.
- Respiro magnético (§2.7) de no máximo 2 px nos botões; `text-wrap: balance` nos títulos e `pretty` no corpo; tiras do consultório em `scroll-snap` horizontal; reveals só de opacidade e 24 px de subida (IO, 120 ms de intervalo).

**Fotos.** Hero 07 `nicole-perfil-corpo-inteiro` (o maior espaço negativo do ensaio). Manifesto: 06 `nicole-movimento-blur`, tênue, só na última cena. Sobre: 10 `nicole-poltrona-apoiada` (sorriso leve, luz de janela: o calor que o vazio precisa), 3:4, colunas 2–5, moldura Nuvem-claro. Consultório: `consultorio-10` e `consultorio-11` como **tiras verticais** (Kishimoto) de proporção 3:5, sem texto, em faixa Nuvem-claro.

**Assinatura.** **Rótulos verticais + uma coisa por tela**: texto em `vertical-rl` na borda, nav vertical com ponto Pólen que desliza, e o manifesto como quatro telas silenciosas em verde-escuro.

**Seções, na ordem.**
1. **Hero**: foto emoldurada, H1 fino, três botões empilhados, rótulo vertical.
2. **Manifesto em cenas + Sobre**: as quatro telas escuras; depois, no Creme, H2 "Dra. Nicole Almeida", foto 10 e texto do BRIEF em lista com fios finos (formação, atuação, CRO, atendimento individual).
3. **Serviços — "em escada"** (Sky): quatro linhas com deslocamento à esquerda de 0 / 4 / 8 / 12%, numeral "01" em Arsenal SC, título Source Serif 300 de 2,25 rem, subitens, "Descobrir →"; Estética da face por último, menor.
4. **Consultório + Um sorriso de cada vez**: duas tiras verticais; as quatro etapas como quatro linhas com muito espaço ("01 — Escuta e escaneamento 3D").
5. **Avaliações + FAQ**: convite em uma linha + link; FAQ com pergunta em Source Serif 300 de 1,5 rem e fios de 1 px.
6. **Endereço**: dados em coluna estreita + mapa mínimo.
7. **Rodapé** (Creme, fio superior): logo-completo Verde pequeno, legal em 15 px, Instagram, privacidade.

**Mapa.** Facade: Nuvem-claro com uma única linha Verde de 1 px (Rua Barreto Leme), ponto Verde e rótulo vertical "Cambuí". MapLibre positron: terra `#FFFDEE`, vias `#C9CEF2`, água `#DEE2FF`, rótulos `#5A5E2C` só em zoom alto.

**Referências.** Yard Dental (`r2-yard-dental`: creme igual ao Creme Pérola, nav vertical, pílula de contato) · J. Takayanagi (`r2-j-ortho-omotesando`: foto emoldurada, texto vertical, botões empilhados) · Kishimoto (`r2-kishimoto-dental`: tiras verticais sem texto) · Sky Clinics (`r2-sky-clinics`: serviços em escada) · Aman (`r2-aman`: ritmo e margens).

**Riscos a vigiar.** Vazio demais no celular: seções com altura automática, nunca mais de uma tela de respiro. Peso 200 some em telas de baixa densidade: 300 abaixo de 48 px. A cena escura não pode virar o conceito 2: sem foto em letterbox, sem legendas, só tipografia.

---

## Checklist de distinção (conferido contra os conceitos 1–6)

- Cor dominante: 7 Pólen (inédito), 8 verdes de paisagem + Creme, 9 Creme-2 com tiles, 10 Creme com grão, 11 Creme + uma cena verde-escuro. Nenhum repete Creme-revista (1/6), Verde noturno (2), Nuvem (3) ou Creme + Pólen em blocos tipográficos (4).
- Fontes: Gabarito, Newsreader, Schibsted Grotesk, Spectral, Source Serif 4 — nenhuma usada antes; nenhuma da lista proibida.
- Assinaturas: Sol / colinas / rótulos nos cantos + dados / ficha + lápis / rótulos verticais + cenas — nada de capa de revista, letterbox, chips "você se reconhece?", letras do logo, odômetro ou selo giratório.
- Movimento: lanterna, parallax de camadas, offset-path, timeline nomeada, pilha sticky, scroll-state, anchor positioning, contadores, máscara com `@property`, light-dark — todos da pesquisa 06, nenhum dos conceitos anteriores.
- H1: Transformação com leveza · Vamos juntos construir o seu sorriso? · Ser quem você realmente é — sem medos, sem máscaras · Sou apaixonada por dentes e por pessoas · Sorrir é um poder silencioso — cinco expressões do BRIEF ainda não usadas.
- Fotos do hero: 21, 09, 19, 05, 07 — todas da lista permitida; nenhuma das proibidas; sem repetição entre conceitos.
