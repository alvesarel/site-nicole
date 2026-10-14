# 06 · Motion e interação — rodada 2 (opções 7–11), out/2026

Levantamento de padrões de animação e interação de 2025–2026 **ainda não usados** nos conceitos 1–6. Fora da lista (já gastos): cortina clip-path, split por palavra, letterbox, logo em traço, chips aria-pressed, montagem de letras, clip-path circle, selo giratório, scanner, odômetro sticky, caminho pontilhado, marquee e faixa com scroll-snap simples (conceito 2), parallax de letras (conceito 4).

Direções desta rodada: **Q** quente/amarela · **O** orgânica/botânica · **B** bento/modular · **A** atelier/artesanal · **M** minimal japonês/escandinavo.

Regras que valem para tudo (herdadas do relatório 04): hero nunca começa oculto (LCP); animar só `transform`/`opacity`/`clip-path`/`mask`; nenhum listener de `scroll`; tudo dentro de `@media (prefers-reduced-motion: no-preference)` ou de `@supports`; sem JS o conteúdo aparece inteiro.

## 1. Suporte (caniuse/MDN, out/2026)

| Recurso | Chrome/Edge | Safari | Firefox | Uso global | Leitura |
|---|---|---|---|---|---|
| `animation-timeline: view()/scroll()`, `timeline-scope` | 115 | 26.0 | 160 (ainda não estável) | ~88% | melhoria progressiva |
| `sibling-index()` | 138 | 26.2 | 154 | ~86% | ok com fallback `nth-child` |
| `@container scroll-state(stuck/snapped)` | 133 | — | — | ~70% | só Chromium; fallback IO |
| `::scroll-marker` / `::scroll-button()` | 135 | — | — | ~71% | só Chromium; scroll-snap base funciona em todos |
| View Transitions (mesmo documento) | 111 | 18.0 | 144 | ~93% | Baseline |
| `@view-transition` cross-document | 126 | 18.2 | — | ~75% | Firefox navega normal |
| `@starting-style` | 117 | 17.5 | 129 | ~93% | Baseline |
| `interpolate-size` / `calc-size()` | 129 | — | — | ~72% | só Chromium |
| `::details-content` | 131 | 18.4 | 143 | ~89% | Baseline |
| `text-wrap: balance` | 130 (114 parcial) | 17.5 | 121 | ~94% | Baseline |
| `text-wrap: pretty` | 117 | 26.0 | — | ~88% | degrada para normal |
| Anchor positioning | 125 | 26.0 | 147 | Baseline newly (jan/2026) | ok com fallback estático |
| `light-dark()` | 123 | 17.5 | 120 | ~91% | Baseline |
| `@property` | 85 | 16.4 | 128 | ~96% | Baseline |
| `linear()` easing | 113 | 17.2 | 112 | Baseline dez/2023 | — |
| `offset-path` | 46 | 16.0 | 72 | ~97% | Baseline |
| `shape()` em `clip-path` | 135 | 18.4 | 148 | ~89% | Baseline 2026 |
| `d` (path SVG via CSS) | 52 | — | 97 | ~79% | evitar como único caminho |
| `corner-shape` | 139 | — | — | — | só Chromium, decorativo |
| `:has()`, `mask-image`, `color-mix()` | Baseline | Baseline | Baseline | >95% | — |

## 2. Padrões

### 2.1 Pilha de cards sticky (B, A)
Cada card é `position: sticky; top: …` dentro de um `ul`; conforme o próximo chega, o anterior encolhe e escurece com `view()`. Zero JS e sem alterar a altura do scroll (anima o conteúdo interno, não o `li`). `sibling-index()` dá escala e offset por posição sem classes.
```css
.card{position:sticky;top:calc(4rem + 1rem*sibling-index())}
@supports(animation-timeline:view()){
.card>div{animation:shrink linear both;animation-timeline:view();animation-range:exit-crossing 0% exit-crossing 100%}}
@keyframes shrink{to{transform:scale(.92);opacity:.85}}
```
Custo: compositor; evitar `filter` em foto grande — usar `opacity` num overlay. A11y: só transform; em reduced-motion vira pilha estática legível. Perfeito para "Serviços" em bento ou "Etapas" no atelier.

### 2.2 Sequência "pinada" com timeline nomeada (M, O)
Palco `sticky` de 100svh dentro de um container de 300–400svh; o container declara `scroll-timeline: --cena block` e um ancestral comum `timeline-scope: --cena`. Textos e fotos trocam com `animation-timeline: --cena` e `animation-range` em porcentagens. É o "pin" do GSAP sem biblioteca.
```css
.wrap{timeline-scope:--cena}.track{scroll-timeline:--cena;height:360svh}
.stage{position:sticky;top:0;height:100svh}
.foto-2{animation:fade both linear;animation-timeline:--cena;animation-range:30% 60%}
```
Custo: baixo; cuidado com `svh` no iOS (barra de endereço). A11y: sem `@supports` o fallback são seções empilhadas normais, então o conteúdo precisa fazer sentido linear. Ideal para o manifesto em M (uma frase por cena) ou para a "estação" botânica em O.

### 2.3 Estado "grudado" via `scroll-state()` (B)
Header que ganha fundo e encolhe quando `stuck: top`, ou card da faixa que acende quando `snapped: x` — sem IO, sem classe. Só Chromium; manter versão padrão aceitável e gatear com `@supports (container-type: scroll-state)`.
```css
header{container-type:scroll-state;position:sticky;top:0}
@container scroll-state(stuck:top){.bar{backdrop-filter:blur(8px);padding-block:.5rem}}
```

### 2.4 View Transitions entre páginas e dentro da página (todas)
`@view-transition{navigation:auto}` + `view-transition-name` no logo e no card da foto: ao abrir /servicos/protese o card vira o hero. Já previsto no 04 para o site final; **novo nesta rodada**: usar `document.startViewTransition` em mesmo documento para filtros da galeria e troca de depoimentos (Baseline, inclusive Firefox 144). Custo: snapshot de tela; evitar em elementos com `backdrop-filter`. A11y: `@media (prefers-reduced-motion){::view-transition-group(*){animation:none}}`.

### 2.5 Revelação de imagem com máscara (A, Q)
Hover/foco troca `mask-image` de um gradiente linear de `--p: 0%` para `100%`, animável via `@property`. Variante "antes/depois" da mesma foto (nítida/suave) sem slider JS. Gradiente de grão na máscara dá textura artesanal.
```css
@property --p{syntax:'<percentage>';inherits:false;initial-value:0%}
.img{mask-image:linear-gradient(110deg,#000 var(--p),transparent calc(var(--p) + 12%));transition:--p .9s cubic-bezier(.2,.7,.2,1)}
.fig:is(:hover,:focus-within) .img{--p:100%}
```
Custo: máscara é composição, sem reflow. A11y: a imagem base precisa estar visível (nunca `--p:0` na foto do hero). No toque, revelar ao entrar na viewport (IO) em vez de hover.

### 2.6 Lanterna / spotlight (Q, A)
Camada com `mask: radial-gradient(240px at var(--x) var(--y), #000, transparent)` revelando a padronagem Pólen ou uma versão quente da foto. Um `pointermove` no container escreve `--x/--y`. Só em `@media (hover:hover) and (pointer:fine)`; no toque fica a versão estática. Custo: ~0 (variável CSS; mask no compositor). A11y: decorativo, `aria-hidden`, nada de conteúdo exclusivo dentro do círculo.

### 2.7 Botão magnético + easing `linear()` (B, M)
Um listener no container; o botão traduz 15–25% da distância ao cursor e volta com mola CSS (`transition-timing-function: linear(0,1.08,.97,1)`), sem biblioteca. Custo: transform no compositor; `requestAnimationFrame` só para suavizar. A11y: `hover:hover`, deslocamento máximo de 8 px (área de clique estável), desligado em reduced-motion. Em M, um "respiro" de 2 px basta.

### 2.8 Acordeão com transição de altura (O, M, todas)
`<details>` nativo + `::details-content` com `transition: height .35s, content-visibility .35s allow-discrete`. Em Chromium, `interpolate-size: allow-keywords` anima até `height:auto`; nos demais a troca é instantânea e correta. Alternativa universal: painel em grid com `grid-template-rows: 0fr → 1fr`. FAQ e "o que esperar da primeira consulta" ganham leveza sem JS. A11y: semântica nativa gratuita; não esconder o `summary`.

### 2.9 Tipografia: `text-wrap: balance` em títulos, `pretty` em corpo (todas)
`balance` para H1–H3 e citações (até ~6 linhas), `pretty` em parágrafos (evita viúvas; Safari 26 refina rios). Firefox ignora `pretty` sem dano. Custo: layout um pouco mais caro — não usar em textos longos (>10 linhas) nem em listas grandes.

### 2.10 Entrada com `@starting-style` (B, M)
Menu mobile, popover do mapa, `dialog` e cards inseridos pelo filtro da galeria animam a partir do `@starting-style`, sem classe `is-open` nem IO. Combina com `popover` + anchor positioning.
```css
[popover]{opacity:1;transform:none;transition:opacity .3s,transform .3s,display .3s allow-discrete,overlay .3s allow-discrete}
[popover]:not(:popover-open){opacity:0;transform:translateY(8px)}
@starting-style{[popover]:popover-open{opacity:0;transform:translateY(8px)}}
```

### 2.11 Carrossel CSS da galeria (O, A)
Base: `overflow-x:auto; scroll-snap-type:x mandatory` (todos). Melhoria em Chromium: `::scroll-button(right){content:"→"}` e `::scroll-marker-group` geram setas e pontos acessíveis sem JS; `scroll-state(snapped)` destaca o slide atual. Sem sequestro de scroll; no desktop manter setas. Custo: nativo, zero. A11y: `::scroll-button` já é botão focável; nos demais navegadores o track rola por teclado com `tabindex="0"`.

### 2.12 Anchor positioning (B, M)
Legendas ancoradas em pontos da foto ("faceta", "coroa") com `position-anchor` + `position-area: top`, e indicador da navegação que desliza sob o item ativo (`left: anchor(--ativo left)` com transition). Fallback: legendas listadas abaixo da foto. Custo: layout, mas só no elemento ancorado. A11y: `popover` + `aria-describedby`; hotspots são botões.

### 2.13 `light-dark()` e `color-scheme` (M)
Uma paleta, duas leituras: `color: light-dark(var(--verde), var(--creme))`. Permite uma seção noturna (depoimentos) ou modo escuro opcional sem duplicar variáveis. Custo nulo. Em M sugere o "papel e tinta" japonês com inversão limpa.

### 2.14 `:has()` para estados (B, A)
Galeria onde `.grid:has(.card:hover) .card:not(:hover){opacity:.6}`, abas com `input:checked` sem JS, formulário que mostra o botão só quando `form:has(:valid)`. Custo: seletor caro em DOM grande — limitar a containers pequenos.

### 2.15 Blur-up nativo (todas)
Técnica de Lean Rada: um inteiro em `style="--lqip:…"` é decodificado só em CSS para gradientes radiais oklab usados como `background` do próprio `<img>`; a foto lazy carrega por cima e cobre o placeholder. Zero wrappers, zero JS, ~20 bytes por imagem. Nunca aplicar opacidade inicial à foto do hero (LCP).

### 2.16 Parallax por camadas (O, Q)
Três camadas (folhas/padronagem, foto, letra Pólen) com `view()` e amplitudes diferentes (`translateY` ±6/±12/±20 px), `animation-range: cover`. Difere do conceito 4 porque não é tipografia: é profundidade botânica ou de calor. Custo: compositor. A11y: amplitudes pequenas; reduced-motion zera.

### 2.17 Números que contam (M, B)
`@property --n{syntax:'<integer>'}` + `counter-reset: n var(--n)` + `::after{content:counter(n)}`, disparado por classe via IO. Só fatos neutros (anos de formação, etapas, cidades atendidas) — nada que soe como promessa de resultado (CFO). Fallback: número final estático.

### 2.18 Formas orgânicas que mudam (O)
Preferir `border-radius` de 8 valores animado (universal) ou `clip-path: shape()` com a mesma estrutura de comandos (Chromium 135, Safari 18.4, Firefox 148). Não depender de `d` em CSS (sem Safari). `offset-path` leva uma folha/pétala por um caminho suave no hero. Custo: `clip-path` compositor; `shape()` repintura leve.

### 2.19 Grão via SVG (A, Q)
Um `feTurbulence` estático em `data:` como `background` repetido (~110 px) num pseudo-elemento com `opacity: .05–.08`, `mix-blend-mode: multiply`, `pointer-events:none`. Nunca animar o filtro nem aplicá-lo ao elemento inteiro; `numOctaves ≤ 3`. Custo: rasteriza uma vez, depois composição. Dá papel ao creme do atelier e calor ao amarelo.

### 2.20 `corner-shape: squircle` (M, B, opcional)
Cantos "iOS" em cards e botões, Chromium apenas; os demais ficam com `border-radius`. Cosmético, dispensa `@supports`.

## 3. Mapa rápido por direção
- **Q quente/amarela:** lanterna (2.6), grão (2.19), parallax de calor (2.16), máscara (2.5).
- **O orgânica/botânica:** timeline nomeada (2.2), formas/offset-path (2.18), carrossel (2.11), acordeão (2.8), parallax (2.16).
- **B bento/modular:** pilha sticky (2.1), scroll-state (2.3), anchor (2.12), :has (2.14), magnético (2.7), starting-style (2.10).
- **A atelier/artesanal:** máscara (2.5), grão (2.19), pilha (2.1), carrossel (2.11), :has (2.14).
- **M minimal:** timeline nomeada (2.2), light-dark (2.13), números (2.17), balance/pretty (2.9), anchor nav (2.12), magnético sutil (2.7).

## Fontes
- Scroll-driven/view(): https://caniuse.com/mdn-css_properties_animation-timeline_view · demo pilha: https://scroll-driven-animations.style/demos/stacking-cards/css/
- `sibling-index()`: https://caniuse.com/mdn-css_types_sibling-index
- `scroll-state()`: https://caniuse.com/mdn-css_at-rules_container_scroll-state_queries · https://developer.chrome.com/blog/css-scroll-state-queries
- `::scroll-marker`: https://caniuse.com/mdn-css_selectors_scroll-marker · https://developer.chrome.com/blog/carousels-with-css
- View Transitions: https://caniuse.com/view-transitions · https://developer.chrome.com/docs/web-platform/view-transitions/cross-document
- `@starting-style`: https://caniuse.com/mdn-css_at-rules_starting-style
- `interpolate-size`: https://caniuse.com/mdn-css_properties_interpolate-size · https://developer.chrome.com/docs/css-ui/animate-to-height-auto
- `::details-content`: https://caniuse.com/mdn-css_selectors_details-content
- `text-wrap`: https://caniuse.com/css-text-wrap-balance · https://caniuse.com/mdn-css_properties_text-wrap_pretty · Safari 26: https://webkit.org/blog/17333/webkit-features-in-safari-26-0/
- Anchor positioning (Firefox 147, Baseline jan/2026): https://web.dev/blog/web-platform-01-2026
- `light-dark()`: https://caniuse.com/mdn-css_types_color_light-dark · `@property`: https://caniuse.com/mdn-css_at-rules_property
- `linear()`: https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/linear · `offset-path`: https://caniuse.com/css-motion-paths
- `shape()`: https://caniuse.com/mdn-css_types_basic-shape_shape · `d`: https://caniuse.com/mdn-css_properties_d · `corner-shape`: https://www.smashingmagazine.com/2026/03/beyond-border-radius-css-corner-shape-property-ui/
- Spotlight: https://frontendmasters.com/blog/css-spotlight-effect/ · Botões magnéticos: https://tympanus.net/codrops/2020/08/05/magnetic-buttons
- LQIP só CSS: https://leanrada.com/notes/css-only-lqip/
- Grão/feTurbulence: https://css-tricks.com/grainy-gradients/ · Interop 2026 (scroll snap, shape()): https://web.dev/blog/interop-2026
