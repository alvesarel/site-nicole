# Brief — Site Dra. Nicole Almeida (Campinas · SP)

Fonte de verdade para os conceitos de design. Tudo aqui vem do brand book
("Estratégia de Marca", Hugo Ribeiro, 2025), da paleta oficial e dos arquivos do cliente.

## 1. Quem é

- **Dra. Nicole Almeida**, cirurgiã-dentista em **Campinas – SP**.
- Foco: **prótese dentária / reabilitação oral** (sua área de atuação principal), implantes e cirurgias periodontais.
  Fez/está fazendo especialização em Prótese, Implantes e Cirurgias Periodontais na **São Leopoldo Mandic (Campinas)**.
- ⚠️ Conformidade CFO: **não** escrever "especialista em prótese" (só é permitido com título registrado no CFO).
  Usar: "atuação em prótese e reabilitação oral", "foco em reabilitação oral", "cirurgiã-dentista". CRO-SP fica como placeholder `CRO-SP 00000`.
- Atende em consultório próprio dentro de uma clínica de alto padrão (madeira clara, iluminação indireta, poltronas creme).
- Interesse futuro: educação/mentorias.

## 2. Posicionamento e voz

- **Posicionamento:** "Criando mudanças profundas, na vida e no sorriso." — expertise técnica (mudanças profundas) comunicada com leveza.
- **Brand essence:** Transformar vidas através de sorrisos autênticos, utilizando a expertise em próteses dentárias para proporcionar autoconfiança, bem-estar e uma nova fase de vida.
- **Arquétipo:** Prestativo (cuidador) → serviço → conferir estrutura. "Como posso ser útil?"
- **Personalidade:** ATENCIOSA (paciente, cuidadosa, detalhista) · DINÂMICA (adaptável, proativa, facilitadora) · LEVE (otimista, descontraída, comunicativa).
- **Público:** pessoas que perderam dentes e se sentem fragilizadas por isso; tendência a mais mulheres; buscam transformação ("se olhar no espelho e se ver de outra forma"). Para o site: **público de alto padrão (high ticket)** em Campinas e região, e pacientes de outras cidades/estados.
- **O que o paciente espera:** Compreensão (empatia, atendimento personalizado) · Ir além (saúde oral como um todo, adaptação fácil, recuperação estética) · Confiança (transparência, comunicação clara, tecnologia de ponta, funcionalidade e conforto).
- **Expressões de marca (usar como headlines/microcopy):**
  - "Sorrisos reais, sem pressa."
  - "Um sorriso de cada vez."
  - "A técnica transforma, mas só a leveza acolhe."
  - "Sorrir é sobre se permitir ser visto."
  - "Transformação com leveza."
  - "Ser quem você realmente é – sem medos, sem máscaras."
- **Manifesto (resumo, pode ser citado):** "Sorrir é um poder silencioso… Por isso me dedico, com precisão e carinho, a realizar cada transformação com leveza. A experiência deve ser acolhedora, fluida, sem pressa… Sou a Dra. Nicole Almeida e vamos juntos construir o seu sorriso e, com ele, transformar a sua vida?"
- **Por que sou dentista (voz dela):** "Sou apaixonada por dentes e pessoas… mudamos a vida de outro ser humano com nosso trabalho minucioso e manual… quando o paciente tem a funcionalidade e a autoestima devolvidas."
- Tom: acolhedor, elegante, humano, sem jargão excessivo, sem sensacionalismo. Nunca "barato", "promoção", "preço imperdível".

## 3. Identidade visual

### Paleta oficial (usar SOMENTE estas + derivados de tom/opacidade; preto/cinza só se for neutro de apoio)
| Nome | HEX | Uso sugerido |
|---|---|---|
| Verde Colina | `#3D420A` | cor principal, fundos escuros, texto forte |
| Amarelo Pólen | `#DBCB79` | acento (dourado suave), detalhes, CTA em fundo escuro |
| Azul Nuvem | `#DEE2FF` | acento frio/leve, fundos de seção, contraste delicado |
| Creme Pérola | `#FFFDEE` | fundo claro principal |

Contraste: Pólen sobre Creme é fraco (não usar para texto). Verde sobre Creme/Azul = ótimo. Pólen sobre Verde = ok para títulos/CTA.

### Logo (SVG vetorial, cor via `currentColor`)
- `../_shared/logo/logo-completo.svg` — "DRA. Nicole Almeida" empilhado (proporção ~2.65:1)
- `../_shared/logo/logo-horizontal.svg` — "Nicole   Almeida" em linha (~10:1) — ideal para header
- `../_shared/logo/logo-monograma.svg` — "N.A" (~2:1) — favicon, selos, marca d'água
- O lettering do logo é fino, geométrico, com curvas e traços "abertos" (letras N, e, a, l, A, M desconstruídas). Use inline (`<svg>` copiado do arquivo) ou `<img>`; para animar (ex.: desenhar/revelar), use inline com `clip-path`/`mask`.

### Tipografia
- Fonte da marca: **Arsenal SC** (versaletes elegantes) — self-hosted em `../_shared/fonts/arsenal-sc-{regular,bold,italic,bolditalic}.woff2`.
- Cada conceito pode parear Arsenal SC com **uma** fonte complementar do Google Fonts (corpo ou display) — escolha diferente em cada conceito. Evitar Inter, Roboto, Arial, Space Grotesk, Poppins, Montserrat.

### Elementos gráficos
- **Padronagem**: letras do logo espalhadas, traço fino (`../_shared/img/padronagem-{1..6}.webp` — 1 azul, 2 verde, 3 creme, 4 pólen, 5 preto, 6 branco). Pode ser recriada com os paths do logo em SVG.
- **Letras isoladas** grandes e cortadas (N, e, l, A, M) em Pólen sobre Creme — usadas em stories.
- Mockups de marca: `marca-placa.webp`, `marca-receituario.webp`, `marca-quadro-consultorio.webp` (usar com moderação). `marca-postagem-2.webp` parece banco de imagem — evitar.

## 4. Fotos (todas em `../_shared/img/`, WebP otimizado; ver `catalogo-nicole.jpg` e `catalogo-consultorio-marca.jpg`)

Ensaio profissional (retrato vertical 1200×1800, luz natural, tons neutros/creme):
| Arquivo | Descrição |
|---|---|
| nicole-corpo-inteiro-caminhando | corpo inteiro caminhando, terno creme, parede branca, MUITO espaço negativo (ótimo para hero) |
| nicole-movimento-blur | caminhando com motion blur, terno creme — artístico |
| nicole-sofa-concreto-1/2/3 | sentada em sofá claro, parede de concreto, vestido preto + blazer creme nos ombros — elegante |
| nicole-ripado-madeira-1/2 | em pé diante de ripado de madeira, vestido preto + blazer creme — retrato forte (2 mais escura) |
| nicole-poltrona-1/2/3 | sentada em poltrona, blazer creme, olhar para a câmera |
| nicole-poltrona-janela | poltrona junto à janela, luz suave |
| nicole-poltrona-apoiada | apoiada no encosto da poltrona, descontraída |
| nicole-em-pe-jeans | em pé, top preto + jeans, casual |
| nicole-sofa-casual-1/2 | sentada no sofá, top preto + jeans |
| nicole-sofa-sorrindo-1/2 | sentada no sofá, **sorrindo** — calorosa (ótima para "Sobre") |
| nicole-sofa-recostada | recostada no sofá, almofadas |
| nicole-caminhando-janela | caminhando, janela, jeans |
| nicole-estante-sorrindo-1/2 | apoiada em estante, **sorrindo**, luz de janela — acessível |
| nicole-detalhe-perfil | close de perfil, cabelo e brinco — detalhe editorial |
| nicole-janela-terno-creme-1/2 | sentada no parapeito da janela, terno creme, coque — luxo silencioso |
| nicole-sentada-terno-creme-1/2 | sentada, terno creme |
| nicole-perfil-corpo-inteiro | corpo inteiro de perfil, terno creme, parede lisa — espaço negativo |
| nicole-perfil-meio-corpo-1/2 | meio corpo de perfil olhando para a câmera, terno creme — **hero forte** |
| nicole-mesa-ripado-1/2 | sentada à mesa com ripado claro atrás, terno creme |
| nicole-detalhe-maos | detalhe das mãos/terno — textura |
| nicole-ripado-mao-peito-1/2 | sentada, mão no peito, ripado claro — acolhedora |

Consultório (1600×1066 ou 1066×1600):
| consultorio-01/11 | sala de atendimento, cadeira escura, LED |
| consultorio-02/06 | sala de atendimento (horizontal) |
| consultorio-03/07 | sala, cadeira bege |
| consultorio-04 | recepção com poltrona dourada, madeira |
| consultorio-05/09 | sala de espera horizontal, poltronas creme, TV |
| consultorio-08 | marcenaria com LED |
| consultorio-10 | sala de espera vertical, nicho iluminado |

Vídeo: `../_shared/video/consultorio-tour.mp4` (vertical 480×848, 18 s, 800 KB, sem áudio) + poster `consultorio-tour-poster.webp`. Opcional.

## 5. Serviços (do cliente)

1. **Reabilitação Oral** — Implantes unitários e múltiplos · Prótese dentária · Cirurgia peri-implantar e plásticas gengivais
2. **Prevenção e Manutenção** — Limpezas especializadas com Air Flow ou ultrassom · Consulta criteriosa com scanner 3D
3. **Estética Dental** — Clareamento dental · Facetas em cerâmica · Contorno estético com resina composta
4. **Estética da Face** — Toxina botulínica (botox) e preenchedores

## 6. Conteúdo obrigatório da home (conceito)

- Header com logo + navegação + **botão "Click para agendar"** sempre visível (sticky) — link WhatsApp placeholder `https://wa.me/5519900000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o`. No mobile, botão flutuante fixo.
- Hero (impacto + posicionamento + CTA "Click para agendar").
- Serviços (4 categorias, cada uma linkando para página própria `servicos/<slug>.html` no site final).
- Sobre a Dra. Nicole (história, propósito, formação — sem "especialista").
- O consultório / a experiência (fotos do espaço, processo de atendimento em etapas: avaliação com scanner 3D → planejamento → tratamento → acompanhamento).
- Avaliações/depoimentos (placeholders: 3–4 depoimentos de exemplo marcados como exemplo + nota Google 5,0 placeholder).
- FAQ (4–6 perguntas reais de pacientes de prótese/implante — ótimo para SEO e IA).
- Endereço com **mapa interativo** (endereço a confirmar; usar "Campinas – SP" por enquanto), horário placeholder, contato.
- Rodapé: logo, CRO-SP placeholder, "Responsável técnica: Dra. Nicole Almeida — CRO-SP 00000", redes, links.

## 7. Requisitos técnicos dos conceitos

- Um único `index.html` autocontido (CSS e JS inline) por conceito, referenciando assets via `../_shared/...`.
- Sem frameworks/bundlers. JS vanilla. Animações com CSS + IntersectionObserver (ou CSS scroll-driven animations com fallback). Bibliotecas externas só se essenciais e via CDN (cdnjs/jsdelivr), com versão fixa.
- Mobile-first, responsivo (390px → 1440px+), sem scroll horizontal.
- `prefers-reduced-motion` respeitado.
- Performance: hero image com `fetchpriority="high"`, demais `loading="lazy"` + `decoding="async"`, `width`/`height` definidos; fontes com `font-display: swap` e preload da principal; sem layout shift.
- Mapa: carregar sob demanda (facade/placeholder que vira mapa ao clicar ou ao entrar na viewport) para não pesar o carregamento.
- HTML semântico (header/nav/main/section/footer, um único h1), `lang="pt-BR"`, meta description, Open Graph, JSON-LD `Dentist` básico (placeholders).
- Acessibilidade: contraste AA para texto, foco visível, alt descritivo em português.
