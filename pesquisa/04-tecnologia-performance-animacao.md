# 04 — Tecnologia, performance e animação (pesquisa de out/2026)

Site multipágina da Dra. Nicole Almeida (Campinas–SP). Versões e suporte de navegador conferidos em 12/10/2026 no npm, no caniuse e no MDN.

## Decisões em uma tabela

| Tema | Recomendação |
|---|---|
| Stack | **Astro 7.3** (saída estática, zero JS por padrão), sem ClientRouter |
| Hospedagem | **Cloudflare Workers (static assets)** com deploy do GitHub `alvesarel/site-nicole` |
| Animações | CSS + IntersectionObserver como base; scroll-driven e `@view-transition` como melhoria progressiva; **sem GSAP e sem Lenis** no início |
| Mapa | Imagem estática (facade) na paleta → **MapLibre + OpenFreeMap** ao clicar, mais links para Google Maps/Waze |
| CTA | `wa.me` com texto pré-preenchido por página (faz o papel de UTM), botão fixo no mobile, QR no desktop |
| Medição | Cloudflare Web Analytics (RUM, grátis) + eventos de CTA sem cookie (Umami ou um Worker próprio) |
| Orçamento | LCP ≤ 2,0 s em laboratório no 4G, JS próprio ≤ 15 KB, hero mobile ≤ 100 KB em AVIF |

---

## 1) Stack

| | **Astro 7.3.8** | **Eleventy 3.1.6** (+ eleventy-img 7) | **HTML puro + script** |
|---|---|---|---|
| Imagens AVIF/WebP + srcset | `<Picture formats={['avif','webp']} widths sizes>` no build (Sharp); encoder global desde a 6.1 | Transform de imagem no HTML; AVIF opcional | Manual (sharp-cli), sujeito a erro |
| Fontes | **Fonts API nativa** desde a 6.0 (self-host, preload, fallback métrico) | Manual | Manual |
| Componentes/layouts | `.astro`, coleções de conteúdo com schema | Nunjucks/WebC | Copiar e colar header, footer e JSON-LD |
| Sitemap | `@astrojs/sitemap` 3.7 | Plugin/template | Manual |
| JS no cliente | Zero por padrão; `<script>` empacotado | Zero | Zero |
| DX | Melhor (TS, HMR, Vite 8/Rolldown; builds 15–61% mais rápidos na v7) | Boa, mais configuração | Fraca acima de 5 páginas |

**Recomendo Astro.** O site terá mais de 10 páginas (home, sobre, 4 serviços, consultório, avaliações, contato, 404). Os dados de nome, endereço e telefone, o JSON-LD e o CTA precisam vir de uma fonte única, e o Astro entrega imagens responsivas e fontes otimizadas sem trabalho manual. Ele exige Node ≥ 22.12 (a máquina tem 24.19). Desde jan/2026 o Astro pertence à Cloudflare, então o deploy lá é de primeira linha.

**Não usar `<ClientRouter />`.** Ele transforma o site em SPA e obriga a reinicializar scripts a cada navegação. Joost de Valk trocou o ClientRouter por `@view-transition` nativo + Speculation Rules (abr/2026) e corrigiu bugs de scroll no Reader do iOS. A própria documentação do Astro prevê que o ClientRouter vai se tornar desnecessário.

### Estrutura de pastas
```
site-nicole/
├─ astro.config.mjs        # site, sitemap, image.service.config, fonts, build.inlineStylesheets
├─ wrangler.jsonc          # assets.directory = ./dist, not_found_handling = 404-page
├─ public/  _headers  _redirects  robots.txt  favicon.svg  og/
├─ src/
│  ├─ assets/{nicole,consultorio,marca}/   # ORIGINAIS de _originais/ (não recomprimir WebP)
│  ├─ fonts/arsenal-sc-*.woff2             # subset latin
│  ├─ data/site.ts        # NAP, WhatsApp, horários, CRO — fonte única
│  ├─ content/servicos/*.md  (+ schema zod: título, resumo, faq[], imagem)
│  ├─ components/  Header, CtaAgendar, SplitText, MapaFacade, JsonLd, Faq, Depoimentos
│  ├─ layouts/Base.astro
│  └─ pages/  index, sobre, consultorio, avaliacoes, contato, 404,
│             servicos/index, servicos/[slug], llms.txt.ts
└─ .github/workflows/lighthouse.yml
```

### Como resolver cada item
- **Imagens:** `<Picture src={hero} formats={['avif','webp']} widths={[480,828,1200,1600,2000]} sizes="(min-width: 1024px) 50vw, 100vw" loading="eager" fetchpriority="high" />` no hero; nas demais imagens, o padrão `lazy`/`async`. Configurar AVIF com qualidade em torno de 50 no `image.service.config` (6.1+). Usar as fotos originais como fonte; as WebP de `_shared` já são derivadas.
- **Fontes:** Arsenal SC em woff2 self-hosted, com subset Latin-1, que cobre todo o português (`pyftsubset --unicodes="U+0000-00FF,U+2013-2014,U+2018-201E,U+2022,U+2026"`). Fazer **preload de um único arquivo** (o peso do H1) e usar `font-display: swap` com fallback ajustado (`size-adjust`, que a Fonts API do Astro gera). No máximo 2 famílias e 3 arquivos.
- **CSS crítico:** usar `build.inlineStylesheets: 'always'` enquanto o CSS da página ficar abaixo de ~14 KB. Isso elimina requisições que bloqueiam a renderização, e é mais simples que extrair CSS crítico.
- **Sitemap e robots:** `@astrojs/sitemap` com `site` definido; `robots.txt` com `Sitemap:`. **Pegadinha:** desde jul/2025 a Cloudflare propõe bloquear crawlers de IA por padrão em domínios novos. Para ter visibilidade em IA, liberar ao menos OAI-SearchBot, PerplexityBot, Claude-SearchBot e Googlebot no painel "AI Crawl Control".
- **llms.txt:** gerar no build a partir das coleções (`pages/llms.txt.ts`). O custo é zero, mas o efeito é baixo: um estudo da Ahrefs viu 97% dos llms.txt sem nenhuma requisição em mai/2026, e o Google não o utiliza. O que pesa para IA é HTML semântico, respostas diretas (FAQ) e dados consistentes.
- **JSON-LD por página** (componente `<JsonLd>` alimentado por `site.ts`):
  - Home e contato: `Dentist` (subtipo de LocalBusiness) com `address`, `geo`, `openingHoursSpecification`, `sameAs` e `areaServed: Campinas`.
  - Sobre: `Person` (`jobTitle: Cirurgiã-dentista`, `alumniOf`), ligada por `@id`.
  - Cada serviço: `Service`/`MedicalProcedure` + `BreadcrumbList`.
  - Bloco de FAQ: `FAQPage`. Desde 2023 o Google limita o rich result de FAQ a sites de governo e de saúde reconhecidos, então o valor aqui é semântico e para IA.
  - Avaliações de exemplo **não** devem ir para `Review`/`AggregateRating`; isso viola as diretrizes.

---

## 2) Hospedagem

| | Custo (uso comercial) | Latência no Brasil | `_headers` / `_redirects` | Analytics sem cookie | Observação |
|---|---|---|---|---|---|
| **Cloudflare Workers (assets)** | **US$ 0**; requisições de assets "free and unlimited" | PoPs em **Campinas (VCP)**, São Paulo e Rio | ✔ / ✔ | Web Analytics grátis (RUM + CWV) | Caminho que a Cloudflare recomenda para projetos novos |
| Cloudflare Pages | US$ 0 | idem | ✔ / ✔ | idem | Não foi descontinuado, mas as novidades vão para Workers |
| Vercel Hobby | **Uso comercial proibido** → Pro US$ 20/mês por membro | Edge em GRU | `vercel.json` | Pago/limitado | Bom, porém caro para este caso |
| Netlify Free | 300 créditos/mês (banda, deploys e requisições); taxas subiram em abr/2026 | Boa | ✔ / ✔ | Pago | O site **pausa** quando os créditos acabam |
| GitHub Pages | Grátis, mas "not allowed… to run your online business" | Boa | ✗ / ✗ | — | Sem headers de cache próprios |

**Recomendo Cloudflare Workers com static assets** e Workers Builds conectado ao repositório (preview por branch). O domínio `.com.br` fica no Registro.br, com os DNS apontando para a Cloudflare; o SSL é automático.

```
# public/_headers
/_astro/*
  Cache-Control: public, max-age=31536000, immutable
/fonts/*
  Cache-Control: public, max-age=31536000, immutable
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

# public/_redirects  — link curto para bio do Instagram/Google
/agendar  https://wa.me/5519900000000?text=Ol%C3%A1...%20(via%20bio)  302
```

---

## 3) Animações

### Suporte em out/2026 (caniuse)
| Recurso | Chrome/Edge | Safari (macOS e iOS) | Firefox |
|---|---|---|---|
| `animation-timeline: view()/scroll()` | 115+ | **26.0+** | **160** (Nightly; estável previsto para 10/11/2026) — ~88% global |
| Cross-document `@view-transition` | 126+ | 18.2+ | Parcial (só same-document, 144+) |
| IntersectionObserver | ✔ | ✔ | ✔ |
| Speculation Rules (prerender) | ✔ | ✗ | ✗ |

**Estratégia:**
1. **Base universal:** reveals com IntersectionObserver.
2. **Melhoria progressiva:** parallax suave e barras de progresso com scroll-driven dentro de `@supports`.
3. **Transições entre páginas:** `@view-transition` em que o logo, o card do serviço e o hero da página de serviço viram um único elemento. No Firefox a navegação continua normal.
4. Tudo condicionado a `prefers-reduced-motion: no-preference`.

### Impacto em Core Web Vitals
- **LCP:** **nunca** começar o hero (imagem ou H1) com `opacity: 0`, `clip-path` fechado ou dependente de JS. O LCP só conta quando o elemento fica visível; um caso documentado no DEV caiu para LCP > 6 s por isso. No hero, animar só `transform` (escala 1.04→1) e elementos decorativos (linhas, ornamentos, monograma).
- **CLS:** animar apenas `transform`/`opacity`/`clip-path`; dar `width`/`height`/`aspect-ratio` a toda mídia e à facade do mapa; usar fallback métrico nas fontes.
- **INP:** nenhum listener de scroll. Preferir IO e timelines CSS, que rodam no compositor. Nos cliques do CTA, só `sendBeacon`.
- O estado oculto só se aplica com JS ativo (`.js` no `<html>`). Sem JS, todo o conteúdo aparece.

### Snippets de referência
```css
/* Reveal (IO adiciona .is-in) */
@media (prefers-reduced-motion: no-preference) {
  .js [data-reveal] { opacity: 0; translate: 0 24px;
    transition: opacity .9s var(--ease), translate .9s var(--ease); }
  .js [data-reveal].is-in { opacity: 1; translate: 0 0; }
  /* image reveal "cortina" — só abaixo da dobra */
  .js [data-reveal="clip"] { clip-path: inset(0 0 100% 0); transition: clip-path 1.2s var(--ease); }
  .js [data-reveal="clip"].is-in { clip-path: inset(0); }
}
/* Parallax nativo, progressivo */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .parallax img { animation: drift linear both; animation-timeline: view(); animation-range: cover; }
    @keyframes drift { from { translate: 0 -6% } to { translate: 0 6% } }
  }
}
/* Transição entre páginas (MPA) */
@view-transition { navigation: auto; }
.site-logo { view-transition-name: logo; }
::view-transition-group(*) { animation-duration: .45s; animation-timing-function: cubic-bezier(.2,.7,.2,1); }
@media (prefers-reduced-motion: reduce) { ::view-transition-group(*) { animation: none; } }
```
```js
document.documentElement.classList.add('js');
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
}), { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
```
```html
<!-- Prerender instantâneo no Chromium (combina com @view-transition) -->
<script type="speculationrules">{"prerender":[{"where":{"href_matches":"/*"},"eagerness":"moderate"}]}</script>
```

- **Split de texto acessível:** dividir **no build**, com um componente Astro `<SplitText>`, para ter zero JS e zero CLS. O texto inteiro fica em `<span class="sr-only">` e as palavras, cada uma num `<span aria-hidden="true">` com `overflow: clip` e `--i` para o atraso escalonado. Dividir por palavra ou linha, não por letra.
- **Desenhar o logo:** o lettering é preenchido, então desenhar com stroke funciona melhor numa cópia em traço. Usar `<path pathLength="1">` com `stroke-dasharray: 1; stroke-dashoffset: 1 → 0` (2–2,5 s) e depois um fade do `fill`. Mostrar uma vez por sessão (`sessionStorage`), fora do caminho do LCP (rodapé, "Sobre" ou monograma no hero).
- **Lenis 1.3.26** (~8 KB): o scroll inercial passa sensação de "luxo" e respeita `prefers-reduced-motion` por padrão desde a 1.3.26. Em contrapartida, muda a sensação do scroll no iOS, complica âncoras e tecnologias assistivas e adiciona JS. **Não usar**; no máximo, opcional apenas com `(pointer: fine)`.
- **GSAP 3.15** (abr/2026): **100% gratuito**, incluindo SplitText, ScrollTrigger e DrawSVG, inclusive para uso comercial, pela licença Webflow (cuidado só com a cláusula de "Prohibited Use" para ferramentas concorrentes). Custa cerca de 25 KB gzip no core + ~12 KB do ScrollTrigger. Só vale para coreografias com timeline, pinning ou morph. Fica como plano B se um conceito exigir.

---

## 4) Mapa interativo

| Opção | Peso | Visual na paleta | Chave/licença |
|---|---|---|---|
| Google Maps (iframe Embed) | Centenas de KB a >1 MB e cookies | ✗ (sem estilo) | Embed API grátis e ilimitada, com chave + conta de faturamento |
| Leaflet 1.9.4 (~42 KB gz) + raster | Leve | Depende do provedor | Stadia, CARTO e MapTiler: os planos grátis **não permitem uso comercial** (CARTO exige Enterprise) |
| **MapLibre 6.14 (~200 KB gz) + OpenFreeMap** | Pesado, **só sob demanda** | ✔ estilo vetorial próprio | **Sem chave, sem cookies, uso comercial permitido**; doação, sem SLA |
| Imagem estática + links | ~30–60 KB | ✔ | — |

**Recomendo um híbrido.**
1. A **facade** é uma imagem AVIF do mapa exportada do mesmo estilo (Positron editado no Maputnik: fundo Creme Pérola, água Azul Nuvem, vias Verde Colina a 30%), com pin em Amarelo Pólen e `aspect-ratio` fixo.
2. Um botão "Explorar mapa" carrega MapLibre + `tiles.openfreemap.org/styles/<estilo-proprio>` **no clique**, com prefetch no `pointerenter`.
3. Ficam sempre visíveis os botões "Abrir no Google Maps" (`https://www.google.com/maps/search/?api=1&query=…&query_place_id=…`, que leva às avaliações do perfil no Google), "Waze" e "Apple Maps".
4. Se o OpenFreeMap cair, a facade e os links continuam funcionando. Manter a atribuição do OpenStreetMap.

```html
<figure class="map" style="aspect-ratio:16/10">
  <img src="/img/mapa.avif" alt="Mapa: consultório da Dra. Nicole Almeida em Campinas" width="1600" height="1000" loading="lazy">
  <button type="button" data-map-load>Explorar mapa</button>
</figure>
<script type="module">
  document.querySelector('[data-map-load]').addEventListener('click', async () => {
    const { Map, Marker } = await import('maplibre-gl');  // chunk separado
    /* new Map({ container, style: '/map/estilo-nicole.json', center:[lng,lat], zoom:15 }) */
  }, { once: true });
</script>
```

---

## 5) CTA "Click para agendar"

- **Link:** `https://wa.me/55199XXXXXXXX?text=` + `encodeURIComponent(msg)`, com o número em formato internacional, sem `+`. A mensagem muda por página e é gerada no build: *"Olá, Dra. Nicole! Vim pelo site (página Implantes) e gostaria de agendar uma avaliação."* Como UTM não chega ao WhatsApp, **o texto faz o papel de UTM** e a secretária consegue registrar a origem.
- **Mobile:** `wa.me` abre o app direto. **Desktop:** `wa.me` mostra uma página intermediária. Melhor experiência: com `(hover:hover) and (pointer:fine)`, o clique abre um `<dialog>` com **QR code** (SVG gerado no build, ~2 KB) "Aponte a câmera do celular", mais "Abrir WhatsApp Web" e `tel:`. Pacientes de alto padrão costumam preferir ligar, então o telefone deve aparecer.
- **Botão flutuante acessível:**
  - `<a>` (não `<button>`), `position: fixed`, alvo ≥ 48 px, `bottom: max(16px, env(safe-area-inset-bottom))`.
  - Texto visível "Click para agendar" e `aria-label="Click para agendar pelo WhatsApp (abre em nova aba)"`.
  - Verde Colina com texto Creme Pérola (contraste AA).
  - Aparece depois que o CTA do hero sai da tela e some quando a seção de contato entra (IO). Não cobre conteúdo e não causa CLS.
  - Foco visível; animação de entrada apenas com `transform`.
- **Alternativas:**
  - **Doctoralia:** forte no Brasil para descoberta e avaliações; usar como link externo e evitar o widget em iframe, que é pesado.
  - **Calendly:** impessoal para alto padrão.
  - **Perfil no Google:** botão "Agendar" apontando para o WhatsApp.
  - Para high ticket, o atendimento humano (concierge) no WhatsApp converte melhor; o agendamento online fica como opção secundária.
- **Medição sem cookies:**
  1. **Cloudflare Web Analytics** (grátis): pageviews, referências e CWV reais. Não tem eventos.
  2. **Eventos de CTA:** Umami Cloud (plano Hobby grátis; confirmar o limite atual em umami.is/pricing), com `data-umami-event="agendar" data-umami-event-local="hero"`. Alternativa sem terceiros: `navigator.sendBeacon('/e')` para um Worker de ~20 linhas que grava no Workers Analytics Engine.
  3. **Conciliação mensal:** cliques versus conversas recebidas por código de página.
  - Evitar GA4/Meta Pixel até haver anúncios, porque exigem banner de consentimento (LGPD).

---

## 6) Orçamento de performance (mobile, 4G lento do Lighthouse)

| Métrica | Meta (laboratório) | Limite "bom" do Google (p75 em campo) |
|---|---|---|
| LCP | **≤ 2,0 s** | ≤ 2,5 s |
| INP / TBT | INP ≤ 100 ms, TBT ≤ 50 ms | INP ≤ 200 ms |
| CLS | **≤ 0,02** | ≤ 0,1 |
| TTFB | ≤ 200 ms (edge em Campinas) | — |

Os limites de CWV continuam 2,5 s / 200 ms / 0,1 em 2026. O boato de "LCP 2,0 s" não tem respaldo oficial.

| Recurso (transferido, comprimido) | Orçamento |
|---|---|
| HTML por página (com CSS crítico + JSON-LD) | ≤ 30 KB |
| CSS total | ≤ 20 KB (inline se ≤ 14 KB) |
| JS próprio | **≤ 15 KB** (MapLibre sob demanda fica fora) + analytics ≤ 3 KB |
| Fontes | ≤ 3 arquivos, ≤ 70 KB; 1 preload ≤ 25 KB |
| Imagem do hero | mobile ≤ 100 KB AVIF (≤ 828 px); desktop ≤ 180 KB |
| Página inicial total | ≤ 400 KB e ≤ 25 requisições |
| Vídeo | Nunca em autoplay acima da dobra no mobile; `preload="none"` + poster |

### Checklist de verificação
- [ ] PageSpeed Insights mobile: Performance ≥ 95; SEO, Acessibilidade e Boas práticas = 100 em **todas** as páginas.
- [ ] Lighthouse CI no GitHub Actions com `budget.json` (falha o PR se estourar).
- [ ] WebPageTest a partir de São Paulo, perfil 4G; DevTools mostrando o elemento LCP e suas subpartes (TTFB / load delay / render delay).
- [ ] Hero: `fetchpriority="high"`, sem lazy e sem opacity 0; demais imagens lazy com dimensões.
- [ ] Testar com `prefers-reduced-motion: reduce` (emulação do DevTools), teclado (foco visível) e Firefox/Safari (fallbacks).
- [ ] Rich Results Test + validator.schema.org para cada JSON-LD; dados de nome/endereço/telefone idênticos aos do perfil no Google.
- [ ] `robots.txt`, `sitemap-index.xml`, `llms.txt` e 404 respondendo; bots de busca de IA liberados na Cloudflare.
- [ ] Search Console + Bing Webmaster Tools (o índice do Bing alimenta buscadores de IA).
- [ ] Após 28 dias: CrUX/Search Console (campo) e RUM da Cloudflare.

---

## Fontes
- Astro 7: https://astro.build/blog/astro-7/ · Astro 6.1 (encoder de imagem): https://astro.build/blog/astro-610 · Astro 6 (Fonts API): https://alternativeto.net/news/2026/3/astro-6-0-brings-new-astro-dev-built-in-fonts-api-live-content-collections-and-csp-api/ · View transitions no Astro: https://docs.astro.build/en/guides/client-side-routing/ · versões no npm (astro 7.3.8, gsap 3.15.0, lenis 1.3.26, maplibre-gl 6.14.0, @11ty/eleventy 3.1.6), consultadas em 12/10/2026
- Joost de Valk, sobre largar o ClientRouter: https://joost.blog/replacing-astro-clientrouter/
- Eleventy Image: https://www.11ty.dev/docs/plugins/image/
- caniuse, scroll-driven: https://caniuse.com/mdn-css_properties_animation-timeline_view · cross-document VT: https://caniuse.com/cross-document-view-transitions · Firefox 160: https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/160
- Cross-document VT: https://developer.chrome.com/docs/web-platform/view-transitions/cross-document
- LCP escondido por animação: https://dev.to/gillygangopolus/the-scroll-animation-that-was-hiding-our-lcp-element-2edp · progressive enhancement: https://www.buildmvpfast.com/blog/css-scroll-driven-animations-replace-js-2026
- GSAP gratuito: https://webflow.com/blog/gsap-becomes-free · https://gsap.com/blog/3-13/
- Lenis e reduced motion: https://learnwithhasan.com/js-libraries/lenis/
- Cloudflare, static assets grátis: https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/ · `_headers`: https://developers.cloudflare.com/workers/static-assets/headers/ · migração de Pages: https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/ · PoP Campinas: https://statusfield.com/services/cloudflare/campinas-brazil-vcp · Web Analytics: https://www.cloudflare.com/web-analytics/
- Vercel Hobby (não comercial): https://deploywise.dev/blog/vercel-free-tier-limits-2026 · Netlify (créditos): https://www.netlify.com/changelog/2026-04-14-pricing-updates-april-2026/ · GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Google Maps Embed (grátis): https://developers.google.com/maps/documentation/embed/usage-and-billing · OpenFreeMap: https://openfreemap.org/quick_start/ · Stadia: https://docs.stadiamaps.com/limits/ · CARTO: https://docs.carto.com/faqs/carto-basemaps · MapTiler: https://www.maptiler.com/cloud/terms/ · Leaflet vs MapLibre: https://www.pkgpulse.com/guides/mapbox-vs-leaflet-vs-maplibre-interactive-maps-2026
- llms.txt (97% sem requisições): https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/
- Limites de CWV em 2026: https://rgb.ir/en/blog/core-web-vitals-thresholds-2026/
- Umami (preços): https://umami.is/pricing
