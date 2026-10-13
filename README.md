# Site — Dra. Nicole Almeida · Odontologia · Campinas–SP

Site institucional da Dra. Nicole Almeida, cirurgiã-dentista com atuação em prótese e
reabilitação oral no Cambuí, Campinas. Feito em [Astro](https://astro.build) (saída
estática), com o design aprovado do conceito 6 ("Editorial Galeria").

> **Antes de publicar:** veja [PENDENCIAS.md](PENDENCIAS.md): CRO, telefone, sala, domínio etc.
> Todos esses dados ficam em um único arquivo: [`src/data/site.ts`](src/data/site.ts).

## Rodar localmente

Requer Node 22.12 ou superior.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npm run preview    # serve o dist/
npm run check      # checagem de tipos
```

## Estrutura

```
src/
  data/site.ts         Fonte única: nome, CRO, WhatsApp, endereço, horário, avaliações, menu
  data/servicos.ts     Índice das 4 categorias de serviço (I–IV)
  data/faq.ts          Perguntas frequentes gerais (as marcadas home: true aparecem na home)
  content/servicos/    Uma página por serviço (Markdown + frontmatter validado)
  content/paginas/     Sobre, Consultório, Privacidade
  components/          Header, Footer, CTA "Click para agendar", mapa, FAQ, etc.
  layouts/Base.astro   <head> com SEO, Open Graph e JSON-LD
  lib/schema.ts        Dados estruturados (Dentist, Person, Service, FAQPage, Breadcrumb)
  assets/fotos/        Imagens-fonte (o build gera AVIF/WebP em vários tamanhos)
public/                Fontes woff2, ícones, imagem de compartilhamento, _headers (o _redirects é gerado no build)
scripts/               Geradores de fontes/imagens/ícones e validador de conteúdo
design-options/        Arquivo dos 6 conceitos de design (não faz parte do site)
pesquisa/              Pesquisa de referências, SEO/IA, conformidade CFO e tecnologia
_originais/            (fora do git) fotos em alta, vídeo e brand book
```

## Editar conteúdo

- **Dados de contato, CRO, endereço, horário:** `src/data/site.ts` (domínio em `src/data/dominio.mjs`; o `/agendar` do `_redirects` é gerado no build a partir de site.ts). Antes de publicar: `npm run check:placeholders`.
- **Texto de um serviço:** `src/content/servicos/<slug>.md`. Depois de editar, valide:
  ```bash
  node scripts/validate-content.mjs src/content/servicos servicos
  ```
  O validador aponta campos inválidos e termos vetados pelo CFO ("especialista", "garantido", "sem dor", preços etc.).
- **Avaliações:** só trechos reais do Google, sobre o atendimento, com autorização do autor, em `AVALIACOES` (`src/data/site.ts`). Nunca usar depoimentos fictícios.

## Publicar (Cloudflare Workers, gratuito)

1. Criar conta na Cloudflare → **Workers & Pages → Create → Import a repository** → escolher `alvesarel/site-nicole`.
2. Build command: `npm run build && npm run check:placeholders` (impede publicar com dados provisórios) · Deploy command: `npx wrangler deploy` (usa `wrangler.jsonc`).
3. Em **Settings → Domains**, adicionar o domínio e apontar o DNS (Registro.br → nameservers da Cloudflare).
4. Em **AI Crawl Control**, liberar os bots de busca de IA (a Cloudflare bloqueia por padrão).
5. Ativar o **Web Analytics** (sem cookies) e cadastrar o site no Google Search Console e no Bing Webmaster Tools com `/sitemap-index.xml`.

Cada push no `main` passa pelo CI (`.github/workflows/ci.yml`: `astro check` + build).

## Regenerar assets (raramente necessário)

```bash
python scripts/build-fonts.py          # fontes woff2 (requer fonttools + brotli)
python scripts/build-images.py         # imagens-fonte a partir de _originais/ (requer pillow)
python scripts/build-brand-assets.py   # favicon, ícones e imagem Open Graph (requer pymupdf + pillow)
```

## Paleta

| Verde Colina | Amarelo Pólen | Azul Nuvem | Creme Pérola |
|---|---|---|---|
| `#3D420A` | `#DBCB79` | `#DEE2FF` | `#FFFDEE` |
