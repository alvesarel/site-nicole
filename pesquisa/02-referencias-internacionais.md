# Referências internacionais: odontologia e clínicas de luxo

Pesquisa feita em 12/10/2026. Os screenshots estão em `pesquisa/refs/intl-<slug>/`, em desktop 1440×900 e mobile 390×844. Para os 5 sites principais também há a página inteira, em `desktop-part-N` e `mobile-part-N`. Peso e tempo são medições indicativas em Chromium headless a partir do Brasil (soma de `content-length`), não Lighthouse.

Ficaram de fora: cosmeticdentalstudios.com, hellotend.com e drlinhart.com, que bloquearam o navegador automatizado (Cloudflare, não contornado); kevinsandsdds.com, que está à venda; asterieclinic.com.au (Awwwards HM 2023), com domínio estacionado; e cliniquelaprairie.com, que carregou só em parte.

## 1. Odontologia premium

### Chelsea Dental Clinic: Londres (Chelsea)
[chelseadentalclinic.co.uk](https://www.chelseadentalclinic.co.uk/) · `intl-chelsea-dental`
- **Visual:** creme quente com verde oliva na barra, no CTA e no bloco "The Chelsea Look", quase a paleta da Nicole. Serifa clássica (CenturyOld) nos títulos e grotesca neutra no corpo. O hero mostra o lounge, sem dente e sem jaleco: "Quiet luxury dentistry, thoughtfully delivered."
- **Motion:** discreto (Elementor + Lenis + Swiper), com fades e carrossel. **Leve:** cerca de 6 MB e 1,9 s.
- **CTA:** "Book an Appointment" 3 vezes no topo e cerca de 5 no total, em botões fantasma com seta.
- **Prova social:** imprensa (Harper's Bazaar, Grazia, Vogue), Smile Stories e reviews do Google.
- **Pontos fracos:** fotos de serviços com luva azul quebram o luxo, o widget de reviews tem o visual padrão do Google, e há 8 px de scroll horizontal no mobile.

### The Smile Code: Nova York (Fifth Ave, Upper East Side)
[nycsmiledesign.com](https://www.nycsmiledesign.com/) · `intl-smile-code-nyc`
- **Visual:** P&B editorial com caixa-alta bem espaçada ("PERFECTION IS FAKE / HARMONY IS HUMAN"). Usa um bloco cinza-oliva e o endereço espaçado como elemento gráfico.
- **Motion:** WordPress/Avada + Swiper, com fades. **Médio:** cerca de 4,5 MB.
- **CTA:** "Schedule Online" e telefone no topo. O "CALL NOW" do hero é fraco.
- **Prova social:** "Smile Journeys", com retratos P&B de pacientes no lugar de closes de boca. É o ponto forte: em prótese, a pessoa importa mais que o dente.
- **Pontos fracos:** o P&B fica frio demais para a "leveza" da marca da Nicole.

### APA Aesthetic: NY, Miami, LA e Dubai
[apaaesthetic.com](https://www.apaaesthetic.com/) · `intl-apa-aesthetic`
- **Visual:** logo manuscrito, nav em caixa-alta espaçada e vídeo aéreo de NY. O hero diz que o foco não são os dentes, mas a vida que eles permitem, a mesma lógica da Nicole.
- **CTA:** "Schedule a consultation" sublinhado. É elegante, mas pouco visível.
- **Pontos fracos:** no mobile, o vídeo deixa uma faixa vazia à direita. O load no desktop levou cerca de 7,9 s.

### Arthur Glosman: Beverly Hills
[arthurglosmandds.com](https://arthurglosmandds.com/) · `intl-glosman-beverly-hills`
- **Visual:** serifa garalde com itálico de ênfase ("A Beautiful Smile *Never* Goes Out of Style"), versaletes espaçadas e retrato do dentista diante de mosaico dourado.
- **CTA:** "BOOK ONLINE" sólido, em verde quase preto, no header. No mobile, **barra fixa inferior dividida** ("CONTACT US" | telefone): o modelo para o "Click para agendar".
- **Leve:** cerca de 0,9 s. **Pontos fracos:** muitos carrosséis e retrato corporativo genérico.

### Outras clínicas de odontologia premium
- **[Rifkin Raanan](https://www.rifkinraanan.com/) (Beverly Hills):** logo geométrico fino dourado sobre vídeo, parecido com o lettering da Nicole. O CTA "Book Appointment!" leva exclamação, e o dourado sobre branco tem contraste ruim.
- **[Harley Street Dental Studio](https://www.harleystreetdentalstudio.com/) (Londres):** Playfair + Open Sans em caramelo, formulário no hero, WhatsApp e telefone no header. Converte bem, mas o luxo é moderado.
- **[Bespoke Smile](https://www.bespokesmile.co.uk/) (Londres):** script dourado e a placa da Wimpole St como status, com faixa Tatler/Bazaar/The Times. O ponto fraco é o ruído: 4 botões, 7 dropdowns, Poppins e bolha do WhatsApp.
- **[Maló Clinic](https://www.maloclinics.com/) (Lisboa):** referência em implantes, mas com visual corporativo. O Cookiebot vem com todas as categorias pré-ativadas.

### Contra-exemplos

| Site | O que evitar |
|---|---|
| [Marylebone Smile Clinic](https://www.marylebonesmileclinic.co.uk/) (Londres) | 3 faixas de navegação, azul corporativo, botão "Play" sobre o rosto, aba lateral e WhatsApp verde |
| [Swiss Smile](https://www.swiss-smile.com/) (Zurique) | equipe sobre fundo cinza, faixa vermelha diagonal "Termin buchen!" e Google Maps quebrado |
| [Dr. Michael's](https://www.drmichaels.com/) (Dubai) | família de banco de imagem e "600k+ patients": vende volume, não exclusividade |
| [Smile Creators](https://www.bayharbordentistry.com/) (Miami) | "$1,000 OFF", "BOOK NOW!" e logo cartoon: o oposto do high ticket |
| [Dr. Gutman](https://www.clinique-esthetique-dentaire-et-du-sourire.com/) (Paris) | layout de blog, "Hollywood smile" e "bijoux dentaires" |

**Lição:** em Paris, Zurique, Dubai e Miami, a odontologia "de luxo" ainda tem sites fracos. O nível de design mais alto está nas clínicas de estética e wellness.

## 2. Sites premiados e quiet luxury (motion e layout)

### Clinic Beethovenstrasse (Dra. Colette Camenisch): Zurique
[colette-camenisch.com](https://www.colette-camenisch.com/) · `intl-colette-camenisch`
- **Prêmios:** CSSDA Website of the Day, Best UI, Best UX e Best Innovation ([Webflow showcase](https://webflow.com/made-in-webflow/website/clinic-beethovenstrasse)).
- **Visual:** o nome da clínica em serifa enorme de ponta a ponta, vídeo num card arredondado e nav reduzida a "Menu", logo e "Termin ↗". É a clínica de uma única médica, como a da Nicole.
- **Motion:** Webflow + Lenis, com smooth scroll num contêiner próprio.
- **Pontos fracos:** **cerca de 44 MB** na home, no desktop e no mobile (vídeo e podcast em MP3). O player de terceiros falhou, e o hero ficou com um card preto.

### Antara Spa & Wellness
[antaraspawellness.com](https://antaraspawellness.com/) · `intl-antara-spa`
- **Prêmio:** Awwwards Honorable Mention, 07/02/2025 ([Awwwards](https://www.awwwards.com/sites/antara-spa-wellness)).
- **Visual:** verde musgo com taupe, wordmark "A n t a r A" na largura toda, painéis em arco e Fraunces itálico em caixa-alta com Manrope.
- **Motion:** preloader com cortinas em arco, contador de % e citação; texto que acende linha a linha no scroll; menu em pílula, que no mobile fica embaixo (zona do polegar).
- **Pontos fracos:** o preloader ainda estava em 99% cerca de 8 s após o início, seções ficam vazias até o JS animar, e há 100 px de scroll horizontal no desktop.

### Dębski Clinic: Varsóvia
[debskiclinic.pl](https://debskiclinic.pl/) · `intl-debski-clinic`
- **Prêmio:** Awwwards Honorable Mention, 24/10/2023, pela agência Targa ([Awwwards](https://www.awwwards.com/inspiration_search/clinic/)).
- **Visual:** rosa-pó, headline em serifa display pesada em escada ("Silna / Zdrowa / Kobieca"), vídeo em máscara oval com selo circular e botões em pílula.
- **Prova social colada ao CTA:** ★★★★★ "892+ opiniões" no ZnanyLekarz, o Doctoralia polonês.
- **Conteúdo:** textos longos por especialidade, com fios e ícones circulares. Ótimo para SEO e IA.
- **Pontos fracos:** **cerca de 20 MB** de vídeos e uma barra promocional vermelha destoante.

### South Cliff Dental Group: Inglaterra
[southcliffdentalgroup.com](https://southcliffdentalgroup.com/) · `intl-south-cliff`
- **Prêmio:** Awwwards Honorable Mention, 16/06/2026 ([Awwwards](https://www.awwwards.com/sites/south-cliff-dental-group)). Feito com Three.js, WebGL e Next.js.
- **Experiência:** um penhasco em 3D, com "Scroll to discover", "Explore the cliff" e som.
- **O que a captura mostrou:** aos 1,8 s, só um spinner. Aos 5 s, uma cena escura com o título apagado e **nenhum CTA de agendamento**. Agrada ao júri, mas não ao paciente.

### Outros sites observados
- **[Rafaela Salvato](https://ricardoseola.com/salvato/) (dermatologia, Brasil):** Awwwards Nominee 2026, com GSAP, SplitText e Lenis. Serifa display e aura em gradiente, mas a foto é de banco.
- **[Lanserhof](https://www.lanserhof.com/):** nav em pílulas translúcidas, itálico misturado com caixa-alta e "Book now" fixo. Feito em Framer, cerca de 1,6 s.

## 3. Síntese

### (a) 10 técnicas que elevam a percepção de valor sem pesar
1. **Tipografia como imagem:** nome ou claim em serifa display enorme (Colette, Antara). Custo quase zero com woff2 subsetado.
2. **Reveal de foto** com `clip-path: inset()` + IntersectionObserver, em 600–900 ms, sem recalcular layout.
3. **Máscaras orgânicas** (arco ou oval) em fotos e vídeo (Antara, Dębski), só com `border-radius` ou `clip-path`.
4. **Texto entrando por linha, não por letra**, ou `animation-timeline: view()` com fallback.
5. **Monograma "N.A" desenhado** com `stroke-dashoffset` em até 1,2 s sobre um hero já visível: intro sem preloader.
6. **Marquee lento** com expressões da marca ("Sorrisos reais, sem pressa."), em CSS puro e pausável.
7. **Header que fica sólido no scroll, com CTA fixo.** No mobile, barra inferior dividida como a de Glosman: "Click para agendar" | WhatsApp.
8. **Prova social ao lado do CTA:** nota do Google e número de avaliações (Dębski).
9. **Pacientes como retratos** (Smile Code) e consultório como lounge (Chelsea), no lugar de closes de boca.
10. **Transições leves:** View Transitions API entre páginas de serviço e grão em SVG (menos de 2 KB) sobre fundos de cor.

### (b) 5 técnicas que parecem bonitas, mas pesam ou atrapalham a conversão
1. **Preloader com %** (Antara): atrasa o LCP e esconde o CTA.
2. **Hero em WebGL ou 3D** (South Cliff): spinner, tela escura, nenhum CTA e nenhum texto indexável.
3. **Vídeo e áudio pesados na home** (Colette com cerca de 44 MB, Dębski com cerca de 20 MB). Para a Nicole: usar o tour de 800 KB só com poster e lazy load.
4. **Conteúdo escondido até o JS animar, com smooth scroll sequestrado** (Antara, Colette). Buscadores, robôs de IA, leitores de tela e quem não rola veem seções vazias, e as âncoras quebram.
5. **Pilhas de widgets de terceiros** (cookies, chat, bolha do WhatsApp, acessibilidade, carrossel de reviews), como em Maló, Bespoke e Smile Creators. Cobrem o hero e pesam.

### (c) Os 3 sites mais inspiradores
1. **Chelsea Dental Clinic.** Prova que o quiet luxury funciona em odontologia com verde oliva e creme, repete o CTA sem gritar e usa a imprensa como prova social. Aproveitar a atmosfera, não as fotos clínicas.
2. **Clinic Beethovenstrasse (Colette Camenisch).** Trata a marca pessoal de uma médica como editorial, com navegação mínima ("Termin ↗"). Aproveitar a tipografia e o vazio, não o peso.
3. **Dębski Clinic.** Junta forma orgânica, headline em escada, avaliações no CTA e conteúdo profundo para SEO e IA. É o melhor equilíbrio entre prêmio e conversão.

Menções honrosas: The Smile Code, pelos retratos de pacientes e pelo tom de manifesto, e Antara, pelos arcos e pelo verde.

### (d) Como adaptar à paleta da Nicole
- **Base:** Creme Pérola `#FFFDEE`, com texto e blocos fortes em Verde Colina `#3D420A`. O contraste do verde sobre o creme é **10,4:1**.
- **Seções-âncora em verde** (Sobre, Experiência e rodapé), como o "Chelsea Look". As fotos da Nicole em terno creme se destacam sobre o verde. Pólen `#DBCB79` sobre verde dá **6,5:1** e serve para CTA e títulos nas áreas escuras.
- **Pólen nunca como texto sobre o creme** (1,6:1). Use só em fios, sublinhado animado, estrelas, traço do monograma e marquee sobre o verde.
- **Azul Nuvem `#DEE2FF`** em FAQ, etapas do atendimento e facade do mapa. O verde sobre ele dá **8,3:1** e traz frescor clínico sem o branco hospitalar.
- **Tipografia:** Arsenal SC em eyebrows e na nav, com tracking largo, como as versaletes de Glosman e Smile Code. Pareie com uma serifa display de alto contraste (Cormorant Garamond, Fraunces ou Instrument Serif) ou com uma sans humanista no corpo.
- **Formas:** os arcos e ovais de Antara e Dębski conversam com as curvas abertas do lettering. A padronagem do logo pode virar marca-d'água com 4–6% de opacidade.
- **CTA:** no fundo claro, botão verde com texto creme. No fundo escuro, botão pólen com texto verde. No mobile, barra fixa inferior com "Click para agendar".

## Fontes
- Sites: links em cada seção acima.
- Awwwards: [South Cliff](https://www.awwwards.com/sites/south-cliff-dental-group), [Antara](https://www.awwwards.com/sites/antara-spa-wellness), [Rafaela Salvato](https://www.awwwards.com/sites/rafaela-salvato-clinica-dermatologica), [nominees "clinic"](https://www.awwwards.com/inspiration_search/clinic/).
- CSSDA via [Webflow Made in Webflow, Clinic Beethovenstrasse](https://webflow.com/made-in-webflow/website/clinic-beethovenstrasse).
- Stacks (GSAP, Lenis, Elementor, Framer etc.) identificados no HTML público de cada site.
