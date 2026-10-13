# 01 · Referências Brasil: sites odontológicos high ticket

*Pesquisa de 12/10/2026 para o site da Dra. Nicole Almeida (Campinas–SP). Capturei 31 sites em Chromium headless; 20 deles também passaram por uma análise estrutural. As capturas estão em `pesquisa/refs/br-<slug>/` (desktop-hero, mobile-hero e, nos principais, overview-full + probe.json com headings, CTAs, JSON-LD, fontes e peso). Os tempos de carga e o peso são indicativos, medidos uma vez numa conexão doméstica.*

## Referências do brand book

| Referência | Situação |
|---|---|
| **Clínica Romana**, [clinicaromana.com.br](https://clinicaromana.com.br/) | Analisada (ficha 4) |
| **CECI / Dr. Henrique Masson**, [ceciclinica.com](https://ceciclinica.com/) | Analisada (ficha 5) |
| **Dr. Henrique Masson**, [henriquemasson.com.br](https://henriquemasson.com.br/) | Fica em tela cinza: há uma camada three.js, o H1 está vazio e a página tem 980 px de altura. Não há nada para Google ou IA indexar. **Lição: efeito nunca pode esconder conteúdo.** |
| **Dra. Nathalia Berres Friedrich** (dermato) | Não encontrei site próprio. A presença dela deve estar só no Instagram. |

## Fichas

### 1. Dra. Mariana Wolf, reabilitação oral e implante (Leblon, RJ) ★
[marianawolf.com.br](https://www.marianawolf.com.br/) · `br-mariana-wolf`
- **Alto padrão:** Libre Caslon Display (serifa de alto contraste) com Jost; azul-marinho, dourado suave e creme; retrato editorial em duotone; cards brancos arredondados sobre creme. O microcopy tem tese: *"A segunda opinião que vira a última."*, *"Uma cadeira, uma paciente por vez."*
- **Estrutura:** hero → *Quando procurar* (3 situações de dor) → Sobre + consultório → endereço como H2 + 3 fotos reais → *Protocolo Wolf* em 5 etapas → números (19 anos, 5,0 Google, 24h, 1 cadeira) → widget Google + 3 depoimentos → *Para quem mora fora* (janela de 1–2 semanas, hospedagem, inglês) → FAQ com 6 perguntas → formulário → rodapé com CRO.
- **CTA:** "Agendar avaliação" no header e no hero, WhatsApp pré-preenchido e um formulário curto com "Sobre o seu caso" (opções: implante, prótese, mora fora…).
- **Prova social:** Google 5,0 com 195 avaliações e depoimentos com nome abreviado.
- **Animação:** discreta, sem bibliotecas JS.
- **Performance/SEO:** cerca de 0,5 s, 605 KB e 13 requisições, o melhor resultado da amostra. Um H1, JSON-LD `Dentist`.
- **Fracos:** o par marinho e dourado é seguro e previsível. Ela cita uma estatística britânica (86%) que não tem relação com a clínica.

### 2. Clínica KI, Dr. Ronaldo Hirata (Curitiba) ★
[clinicaki.com.br](https://clinicaki.com.br/) · `br-clinica-ki`
- **Alto padrão:** conceito japonês 気美間 em cartela de linhas finas, muito branco e manifesto em versos (*"Estética com essência. Ciência com silêncio."*). O site é trilíngue (PT/EN/ES).
- **Estrutura:** manifesto → 3 pilares → equipe → 10 especialidades → Google reviews → *Design do Sorriso* em 4 etapas (escuta, planejamento, execução artesanal, presença) → Ki Education → contato com mapa.
- **CTA:** botão flutuante verde "Agendar ou dúvidas?" que leva ao WhatsApp. **Prova social:** widget Google 5,0.
- **Animação:** AOS (fade-up).
- **SEO:** JSON-LD completo (`Dentist`, `Person`, `FAQPage`, `SiteNavigationElement`).
- **Fracos:** a foto do hero parece render 3D ou imagem gerada. O texto branco sobre a imagem clara tem pouco contraste. A lista de especialidades com ícones é genérica.
- O site pessoal do Hirata ([ronaldohirata.com.br](https://www.ronaldohirata.com.br/)) segue a linha de revista: nome gigante em serifa, menu tipo índice, Lenis smooth scroll.

### 3. Sidney Kina, estética e reabilitação (Londrina, PR) ★
[sidneykina.com.br](https://sidneykina.com.br/) · `br-sidney-kina`
- **Alto padrão:** Cormorant Garamond com Inter; retrato escuro e quente com o nome centralizado; fundo off-white; kanji como marcador de seção (教 Ensino, 書 Publicações, 診 Clínica, 筆 Coluna). O microcopy é aforístico: *"A estética é consequência. A estrutura é decisão."*
- **Estrutura:** o dentista aparece como autor (cursos, livros, clínica, coluna), com um *marquee* de cursos no rodapé do hero.
- **CTA:** WhatsApp flutuante discreto e formulário de contato. **Prova social:** livros e docência, sem reviews.
- **Fracos:** a clínica fica em segundo plano, quase não há prova social de pacientes e as imagens somam 4,5 MB.

### 4. Clínica Romana, medicina capilar (Jd. América, SP)
[clinicaromana.com.br](https://clinicaromana.com.br/) · `br-romana`
- **Alto padrão:** muito espaço em branco; display fino de alto contraste (BW Vivant); logo em bege-dourado; retrato P&B dessaturado; **"R" gigante em marca-d'água** e a palavra "a clínica" fantasma atrás das seções. Microcopy: *"Descubra a leveza de se cuidar."*
- **Estrutura:** hero com grade de tratamentos (cards de linha fina + seta) → propósito → espaço (fotografia da casa) → médica → rodapé com responsável técnico, CRM e RQE.
- **CTA:** botão outline "Agende uma consulta" que abre o WhatsApp com mensagem pronta.
- **Animação:** AOS.
- **Fracos:** **nenhuma prova social**, nenhum H1, banner de cookies pesado. No mobile o título só aparece depois de um bloco vazio.

### 5. CECI, Centro Estético e Clínica Integrada (SP)
[ceciclinica.com](https://ceciclinica.com/) · `br-ceci`
- **Alto padrão (parcial):** paleta nude e terracota, logo com serifa incisa, Yeseva One.
- **Estrutura:** hero com **formulário de lead** (nome, e-mail, WhatsApp, botão "EU QUERO") → O que é a CECI → valores (Humanizada / Acolhedora / Natural) → Face | Sorriso → fundadores.
- **Fracos:** foto de banco, cara de funil de tráfego pago, headings duplicados, erro de JS e nenhum H1.

### 6. Dr. Cesar Ferraz, lentes e reabilitação (Brasília)
[drcesarferraz.com.br](https://www.drcesarferraz.com.br/) · `br-cesar-ferraz`
- **Alto padrão:** Cormorant itálico dourado combinado com Inter e rótulos em JetBrains Mono; off-white; retrato em card arredondado com a tag do Instagram flutuando.
- **Estrutura:** especialidades → diferenciais → galeria → FAQ → CTA final.
- **CTA:** "Falar via WhatsApp" (pílula dourada) e "Agendar consulta" no header.
- **Fracos:** usa "Especialista" em tudo, as imagens pesam 6,6 MB, não tem JSON-LD e o visual lembra template de construtor com IA.

### 7. Clínica Viotto, lentes de contato (SP e licenciados)
[clinicaviotto.com.br](https://clinicaviotto.com.br/) · `br-viotto`
- **Linguagem:** preto, louro dourado, partículas e rostos de famosos animados no hero, Poppins.
- **Estrutura:** processo em 4 passos → "resultados reais de alguns famosos" → licenciados → "RESULTADOS GARANTIDOS".
- **Fracos:** **129 MB transferidos (vídeo)**. Promessa de resultado é um risco ético-publicitário. É o luxo-ostentação oposto à "leveza".

### 8. Ateliê Oral (Vila Nova Conceição, SP)
[atelieoral.com.br](https://atelieoral.com.br/) · `br-atelie-oral`
- **Linguagem:** marinho e dourado em versaletes Libre Baskerville; foto da equipe em carrossel; *"Como se tornar cliente do Ateliê Oral?"*, um enquadramento de exclusividade interessante.
- **Prova social:** seção *Nossos clientes* com celebridades.
- **Fracos:** carrossel no hero, nenhum H1, fontes carregadas de outro domínio (erro de CORS) e só formulário, sem WhatsApp.

### 9. Billig Odontologia (Asa Norte, Brasília), referência de SEO, não de luxo
[billigodontologia.com.br](https://billigodontologia.com.br/) · `br-billig`
- **Visual:** **verde-escuro com padronagem das letras do logo**, muito próximo do Verde Colina e da padronagem da Nicole, mas com verde-limão e tom "toda a família". Um alerta do que *não* fazer com a mesma paleta.
- **Pontos fortes:** stats no hero (4,9★ Google, +1000 pacientes), H1 local ("Dentista na Asa Norte, Brasília"), avaliações reais, "Como chegar" e o JSON-LD mais completo da amostra (`Dentist`, `Person`, `Service`, `Place`).

### 10. Orny Odontologia (Cambuí, Campinas), concorrente local
[ornyodontologia.com.br](https://ornyodontologia.com.br/) · `br-orny`
- **Proposta:** "Clínica Odontológica Premium Campinas", com reabilitação oral em destaque; header caramelo com **botão verde-WhatsApp que destoa**; Poppins; depoimentos em vídeo e FAQ.
- **Fracos:** **9,1 MB e cerca de 9 s no desktop**, 4 H1, visual de template.

### 11. Sculpere, "Odontologia e Arte" (Nova Campinas), concorrente local
[sculpere.com.br](https://sculpere.com.br/) · `br-sculpere`
- **Proposta:** barra superior com "NÃO ACEITAMOS CONVÊNIO" e endereço; foto real da recepção (ripado e poltronas, parecida com o espaço da Nicole); CTA verde-neon "Quero Agendar Minha Avaliação"; mapa e depoimentos.
- **Fracos:** cerca de 4 MB e 4,5 s, autoelogio ("Referência em…"), cores que brigam entre si.

### 12. Outros vistos (padrão médio, úteis como contraexemplo)
- **SP:** [Paulo Kano](https://paulokano.com.br/) (preto com gradiente dourado, foco em cursos); [Bibancos](https://bibancos.com.br/) (Jardins, mosaico de sorrisos em amarelo, 5,5 MB, *"Nosso Pequeno Palácio do Sorriso"*); [Topázio](https://topazioodontologia.com.br/) e [Joana Ozi](https://joanaozi.com.br/) (Itaim, "dentista de alto padrão" escrito literalmente); [ImplArt](https://implart.com.br/) (hero cheio de palavras-chave); [Inst. Odontologia Integral](https://www.odintegral.com.br/) (foto de banco).
- **Campinas:** [Natália Maggi](https://nataliamaggi.com/) (Cambuí, monograma elegante e serifa Lusitana, a melhor da cidade; tem bloco "5.0" e feed do Instagram); [Luis Antunes](https://luisantunesodontologia.com.br/) (prótese, hero lavado e ilegível); [Martinelli](https://martinelliodontologia.com/) (*"Conquiste o sorriso dos seus sonhos!"*); [Mançano Melhado](https://www.mancanomelhado.com.br/) (slider).
- **Rio, BH e Brasília:** [Rowan Vilar](https://rowanvilar.com.br/) (foto intraoral crua no hero); [Neolife BH](https://www.sorrisobh.com/) (Wix com 275 requisições, mas boa headline: *"Você evita sorrir mesmo quando está feliz?"*); Adriana Koeppel, Implantec e Marcelle Chedid (cores saturadas e banners).

---

## (a) 10 padrões recorrentes que funcionam
1. **Serifa de alto contraste nos títulos com sans neutra no corpo** (Wolf, Kina, Romana, Ferraz). Arsenal SC com uma serifa display ou uma sans humanista cumpre esse papel.
2. **Paleta restrita** a 2–3 tons, fundo creme ou off-white e **um** acento metálico suave usado com parcimônia.
3. **Retrato editorial da profissional**, sem jaleco e com espaço negativo, às vezes dessaturado. A foto passa autoridade calma.
4. **Headline com tese, não com promessa** ("A segunda opinião que vira a última"; "A estética é consequência…").
5. **Um único CTA repetido** com verbo calmo ("Agendar avaliação"), WhatsApp com mensagem pré-preenchida e botão flutuante discreto no mobile.
6. **Processo em etapas numeradas** (Wolf 5, KI 4, Viotto 4): vende previsibilidade, essencial em reabilitação.
7. **Prova social verificável:** nota e nº de avaliações do Google, 3 depoimentos curtos com nome abreviado e números concretos (anos, "1 cadeira", "24h").
8. **O consultório como argumento:** endereço como título, fotos reais e "consultório de uma cadeira só".
9. **FAQ sobre dúvidas de casos complexos com JSON-LD** (`Dentist`, `FAQPage`, `Person`), presente em KI, Billig e Wolf.
10. **Acolhimento de quem vem de fora:** seção própria (Wolf) e/ou versão bilíngue (KI).

## (b) 6 clichês a evitar
1. **Luxo em preto e dourado** com gradiente, brilho e partículas (Kano, Viotto).
2. **Banco de imagem** de mulher rindo com a mão no rosto (Integral, CECI) e **foto intraoral crua no hero** (Rowan Vilar).
3. **Autoelogio literal e promessas:** "alto padrão", "premium", "referência", "sorriso dos seus sonhos", "resultados garantidos", e "especialista" sem título.
4. **Verde-WhatsApp saturado** que rompe a paleta, com vários flutuantes, pop-ups e banner de cookies disputando a tela (Topázio, Sculpere, Orny).
5. **Carrossel ou slider no hero e lista de 10 especialidades com ícones** (Ateliê, Mançano, ImplArt, KI).
6. **Peso e lentidão:** vídeo de 129 MB (Viotto), 9 MB e 9 s (Orny), Wix com 275 requisições. Isso mata o mobile e o SEO.

## (c) 5 oportunidades para a Dra. Nicole em Campinas
1. **Há um vácuo de design no topo de Campinas.** Os concorrentes do Cambuí e de Nova Campinas usam templates Elementor lentos e genéricos. Um site editorial com menos de 1 MB e carga abaixo de 1 s (como o da Wolf) já se destaca.
2. **Falar com quem perdeu dentes.** Ninguém na cidade nomeia a fragilidade emocional do público do brand book. Dá para adaptar o *"Quando procurar"* da Wolf: "uso prótese e não me sinto segura", "evito sorrir em fotos", "me disseram que não tenho osso". Tudo com o tom de *"Sorrisos reais, sem pressa."*
3. **Um protocolo nomeado e visual:** *"Um sorriso de cada vez"*, com scanner 3D → planejamento e ensaio do resultado → tratamento → acompanhamento. A animação de traço fino do logo pode "desenhar" cada etapa.
4. **Identidade própria e anticlichê:** Verde Colina, Pólen e Creme fogem do preto/dourado e do marinho/dourado. As **letras do logo, grandes e recortadas**, viram assinatura (como o "R" da Romana), mas com contenção. A Billig mostra como a mesma ideia fica popular quando saturada.
5. **SEO local e para IA bem feitos, e dentro das regras:** páginas por serviço com FAQ e JSON-LD (`Dentist`, `Person`, `Service`, `FAQPage`); termos "Campinas + Cambuí/Nova Campinas/Taquaral/Alphaville Dom Pedro"; um bloco *"Vem de Valinhos, Vinhedo, Indaiatuba, Jundiaí ou de outro estado?"*; nota Google visível. Usar "atuação em reabilitação oral", enquanto vários concorrentes se arriscam com "especialista". Mais tarde, uma seção "Educação" para as mentorias, como fazem Kina e Hirata.

## (d) Os 3 sites mais inspiradores
1. **Dra. Mariana Wolf:** é a mesma especialidade e o mesmo formato de consultório solo. Tem a melhor arquitetura de informação (dor → profissional → espaço → protocolo → números → reviews → quem vem de fora → FAQ → agendar), o melhor microcopy e a melhor performance (cerca de 605 KB). **Usar como esqueleto da home.**
2. **Sidney Kina:** tipografia editorial, retrato calmo, frases curtas, marcadores de seção e um *marquee* sutil. Mostra o dentista como autor. **Inspiração para "Sobre" e para o tom de leveza com profundidade.**
3. **Clínica Romana** (citada no brand book): branco generoso, display fino, foto P&B e letra gigante em marca-d'água, que corresponde diretamente às "letras isoladas" da marca da Nicole, além dos serviços como grade de linhas finas. **Copiar a atmosfera e corrigir as falhas** (incluir H1, prova social e CTA mais visível no mobile).

*Menção honrosa:* a Clínica KI, pelo bilinguismo, pelo JSON-LD completo e pelo processo em 4 etapas com nomes sensíveis.
