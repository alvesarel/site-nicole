# 03 · SEO local, otimização para IA e conformidade (CFO/LGPD)

Projeto: site da Dra. Nicole Almeida, cirurgiã-dentista em Campinas–SP. Pesquisa feita em 12/10/2026.
**Isto não é parecer jurídico.** Os pontos de CFO e LGPD devem ser validados com o CRO-SP ou com um advogado antes de publicar.

---

## 0. O que muda no design (resumo)

1. **Nada de "especialista"** (título, H1, meta, alt, JSON-LD e categoria do Google) até haver registro de especialidade no CRO. Usar "Cirurgiã-dentista · Clínica geral · CRO-SP 00000 · áreas de atuação: prótese e reabilitação oral" (CEO art. 43 §1º I e art. 44 II).
2. **Nome + CRO em todas as páginas** (rodapé) e em toda imagem ou vídeo de caso (legenda). Res. CFO-196/2019, art. 4º.
3. **Depoimentos:** não publicar depoimentos inventados ou "de exemplo". O mais seguro é um bloco "Avaliações no Google" com link para o perfil. Trechos reais só sem foto, com o nome como aparece no Google e com autorização do autor. Nunca marcar `AggregateRating`.
4. **Antes/depois:** permitido só com TCLE, só casos próprios, só diagnóstico e resultado (nunca "durante"), legenda neutra com nome + CRO e sem promessa de resultado.
5. **Sem preços, parcelamento, "avaliação gratuita" ou promoção.** O CTA "Click para agendar" está OK.
6. **Endereço provável:** Allevare Coworking Odontológico, R. Barreto Leme, 2281, Cambuí (seção 6). Falta confirmar a sala.

---

## 1. SEO local (Campinas, 2026)

### 1.1 Palavras-chave e intenções
Os volumes e a dificuldade são **estimativas qualitativas**. Validar no Planejador de Palavras-chave do Google Ads e no Search Console depois de 60–90 dias no ar. Em buscas de serviço + cidade, a SERP é dominada pela Doctoralia e por redes de implante ([exemplo](https://www.doctoralia.com.br/servicos-de-tratamento/protese-tipo-protocolo-sobre-implantes/campinas)).

| Termo (e variações) | Intenção | Volume | Dificuldade | Página-alvo |
|---|---|---|---|---|
| dentista campinas | local / navegação | muito alto | alta (diretórios, redes) | Home + Perfil do Google |
| dentista cambuí, dentista no cambuí | local de proximidade | baixo–médio | média | Home + Perfil do Google (vantagem real de endereço) |
| prótese dentária campinas, prótese fixa, prótese sobre implante | transacional | médio | média | /servicos/protese-dentaria/ (**página pilar**) |
| protocolo dentário campinas, dentadura fixa, protocolo sobre implantes | transacional | médio | alta (redes de "carga imediata") | seção da prótese ou página própria |
| implante dentário campinas | transacional | alto | alta | /servicos/implantes-dentarios/ |
| lente de contato dental campinas, facetas de porcelana/cerâmica | transacional | médio–alto | alta | /servicos/lentes-e-facetas/ |
| clareamento dental campinas | transacional | médio | média | /servicos/clareamento-dental/ |
| gengivoplastia, plástica gengival campinas | transacional | baixo | baixa | dentro de Reabilitação Oral |
| limpeza dental air flow campinas, profilaxia | transacional | baixo | baixa | /servicos/prevencao-e-manutencao/ |
| escaneamento 3D dos dentes, scanner intraoral | informacional | muito baixo | baixa | seção "Avaliação" (diferencial, bom para respostas de IA) |
| botox/harmonização campinas | transacional | alto | muito alta (médicos, estética) + **risco regulatório** | /servicos/estetica-da-face/ (baixa prioridade) |
| "quanto custa", "dói?", "quanto tempo dura", "protocolo ou dentadura?" | informacional | alto (agregado) | média | FAQ + blog futuro, **sem citar preços** (falar dos fatores que influenciam o valor) |

### 1.2 Arquitetura e URLs
```
/                              Home
/dra-nicole-almeida/           Sobre (E-E-A-T)
/servicos/                     Hub (4 categorias)
/servicos/reabilitacao-oral/   Categoria → /protese-dentaria/, /implantes-dentarios/
/servicos/prevencao-e-manutencao/
/servicos/estetica-dental/     Categoria → /lentes-e-facetas/, /clareamento-dental/
/servicos/estetica-da-face/
/consultorio/                  Experiência, fotos e etapas
/perguntas-frequentes/
/contato/                      NAP, mapa, horários
/privacidade/
/blog/                         (futuro)
```
- São cerca de 9 páginas de serviço com conteúdo real (600–1.200 palavras cada). Não criar uma página por variação de bairro ou cidade: o guia de IA do Google cita isso como *scaled content abuse* ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- Slugs curtos, em minúsculas, sem acento. A cidade vai no título e no H1, não na URL.

### 1.3 Títulos e metas (≤ 60 / ≤ 155 caracteres)
- Home: `Dra. Nicole Almeida | Dentista no Cambuí, Campinas`
- Prótese: `Prótese Dentária em Campinas | Dra. Nicole Almeida`
- Meta (modelo): `Cirurgiã-dentista com atuação em prótese e reabilitação oral no Cambuí, Campinas. Planejamento com escaneamento 3D. Agende sua avaliação.`
- Um H1 por página, por exemplo "Prótese dentária em Campinas". Os H2 devem ser perguntas reais ("Para quem é indicada?", "Como é o tratamento?", "Quanto tempo dura?").

### 1.4 Links internos
Home → 4 categorias → páginas de serviço. Cada serviço linka para 2 serviços relacionados (prótese ↔ implantes ↔ gengival), para a FAQ e para /contato/. O breadcrumb fica visível e marcado com schema. O texto âncora é descritivo ("prótese sobre implantes"), nunca "clique aqui". O CTA "Click para agendar" vai para o WhatsApp e não conta como link interno.

### 1.5 NAP e Perfil da Empresa no Google
- **NAP idêntico** em todo lugar (site, Google, Doctoralia, Instagram): `Dra. Nicole Almeida – Cirurgiã-Dentista · R. Barreto Leme, 2281, sala __ – Cambuí, Campinas – SP, 13025-085 · (19) 9____-____`.
- **Perfil próprio de profissional:** o Google permite perfil de profissional individual que atende o público. Em local compartilhado, o perfil tem **apenas o nome da profissional** ("Dra. Nicole Almeida"), e a organização (Allevare) mantém o perfil dela. Coworking só é aceito com **sinalização clara** e atendimento presencial no local. Sala vai na linha 2 do endereço, sem palavras-chave no nome ([Google, diretrizes](https://support.google.com/business/answer/3038177?hl=pt-BR)).
- **Categoria principal:** "Dentista". Não escolher categorias que nomeiem especialidade sem registro (protesista, implantodontista, periodontista), porque a categoria funciona como anúncio público (CEO art. 44 II). Cadastrar os serviços na aba "Serviços".
- **Avaliações:** pedir a todos os pacientes, sem brinde ou desconto em troca (CEO art. 44 X e diretriz de reviews do Google de jul/2026). Responder sem confirmar tratamento nem dados clínicos (sigilo e LGPD).
- **Fotos** do consultório, da fachada com a placa e da profissional, atualizadas todo mês. Usar posts do Google para conteúdo educativo.
- **Citações externas consistentes:** Doctoralia, Instagram (bio com o NAP), Facebook, Apple Business Connect e Bing Places.

### 1.6 Imagens
- Arquivos `dra-nicole-almeida-dentista-campinas.webp`, `consultorio-cambui-sala-atendimento.webp`.
- `alt` descritivo em português ("Dra. Nicole Almeida sorrindo no consultório no Cambuí"), sem empilhar palavras-chave.
- WebP/AVIF com `width`/`height`. Geotag em EXIF não tem evidência de efeito.

---

## 2. Dados estruturados (JSON-LD)

- **Tipos:** `Dentist` (subtipo de LocalBusiness/MedicalBusiness) para o consultório e `Person` para a dentista. `Physician`/`IndividualPhysician` são tipos de **Organization/Place**, não de pessoa, e são médicos; não usar ([schema.org](https://schema.org/IndividualPhysician)). Nos serviços, usar `Service` com `provider`. Usar o subtipo mais específico, com `geo` de pelo menos 5 casas decimais e `openingHoursSpecification` ([Google LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business)).
- **Avaliações (verificado):** o Google trata como *self-serving* a avaliação da entidade publicada no site da própria entidade, "diretamente ou por widget de terceiros (Google, Facebook)". Páginas com LocalBusiness/Organization ficam **inelegíveis para estrelas** ([Google, review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)). **Não usar `AggregateRating`/`Review`.**
- **FAQPage:** o rich result de FAQ foi **descontinuado em 07/05/2026** ([Google, changelog](https://developers.google.com/search/updates)). O marcador é opcional. O que importa é a FAQ visível em HTML.
- Não usar `priceRange` (evita qualquer leitura de preço) nem `medicalSpecialty` além de "Dentistry".

Exemplo (Home; nos serviços, acrescentar `Service` + `BreadcrumbList`):
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": "https://DOMINIO/#website", "url": "https://DOMINIO/",
      "name": "Dra. Nicole Almeida", "inLanguage": "pt-BR" },
    { "@type": "Dentist", "@id": "https://DOMINIO/#consultorio",
      "name": "Dra. Nicole Almeida – Cirurgiã-Dentista", "url": "https://DOMINIO/",
      "image": "https://DOMINIO/img/consultorio-cambui.webp", "logo": "https://DOMINIO/img/logo.svg",
      "telephone": "+55-19-90000-0000", "medicalSpecialty": "Dentistry", "isAcceptingNewPatients": true,
      "address": { "@type": "PostalAddress", "streetAddress": "Rua Barreto Leme, 2281, sala 00",
        "addressLocality": "Campinas", "addressRegion": "SP", "postalCode": "13025-085", "addressCountry": "BR" },
      "geo": { "@type": "GeoCoordinates", "latitude": -22.00000, "longitude": -47.00000 },
      "hasMap": "https://maps.google.com/?cid=000000",
      "areaServed": [{ "@type": "City", "name": "Campinas" }, { "@type": "AdministrativeArea", "name": "Região Metropolitana de Campinas" }],
      "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00:00", "closes": "18:00:00" }],
      "founder": { "@id": "https://DOMINIO/#nicole" },
      "sameAs": ["https://www.instagram.com/PERFIL", "https://www.doctoralia.com.br/PERFIL", "https://maps.google.com/?cid=000000"] },
    { "@type": "Person", "@id": "https://DOMINIO/#nicole", "name": "Nicole Almeida", "honorificPrefix": "Dra.",
      "jobTitle": "Cirurgiã-dentista", "url": "https://DOMINIO/dra-nicole-almeida/",
      "image": "https://DOMINIO/img/dra-nicole-almeida.webp", "worksFor": { "@id": "https://DOMINIO/#consultorio" },
      "knowsAbout": ["Prótese dentária", "Reabilitação oral", "Implantes dentários", "Estética dental"],
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "INSTITUIÇÃO DA GRADUAÇÃO" },
      "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "Inscrição profissional",
        "name": "CRO-SP 00000", "recognizedBy": { "@type": "Organization", "name": "Conselho Regional de Odontologia de São Paulo" } },
      "sameAs": ["https://www.instagram.com/PERFIL"] }
  ]
}
```
Exemplo de serviço: `{"@type":"Service","name":"Prótese dentária","serviceType":"Prótese dentária","provider":{"@id":"https://DOMINIO/#consultorio"},"areaServed":"Campinas – SP"}`.

---

## 3. Otimização para IA (ChatGPT, Perplexity, Gemini/AI Overviews, Claude)

| Ação | Evidência |
|---|---|
| HTML renderizado no servidor, rastreável e indexável | **Forte.** O Google diz que não há requisito extra para AI Overviews/AI Mode além de SEO ([Google AI features](https://developers.google.com/search/docs/appearance/ai-features)) |
| Liberar bots de busca de IA no robots.txt | **Forte.** Sem o OAI-SearchBot, o site fica fora das respostas do ChatGPT search ([OpenAI](https://developers.openai.com/api/docs/bots)). Bloquear o Claude-SearchBot reduz a visibilidade ([Anthropic](https://support.claude.com/en/articles/8896518)). O PerplexityBot é o bot de busca da Perplexity ([Perplexity](https://docs.perplexity.ai/guides/bots)) |
| Perfil do Google completo + avaliações | **Forte para busca local.** O guia de IA do Google recomenda o Perfil da Empresa para negócios locais |
| Entidade clara e NAP consistente (Google, Doctoralia, Instagram) | Boa (desambiguação de entidade) |
| Conteúdo "answer-first" com experiência própria | Boa. O Google pede conteúdo "não-commodity" com visão própria ([guia](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)) |
| Schema.org | Útil para entidade e resultados enriquecidos, mas o Google diz que não existe schema "especial" para IA |
| **llms.txt** | **Hype para o Google:** o Google Search ignora o arquivo (esclarecido em 15/06/2026). Custo baixo, então pode ficar como opcional ([formato](https://llmstxt.org/)) |
| "Chunking", reescrever para IA, comprar menções | **Mito ou contraproducente**, segundo o próprio Google |

**Conteúdo.** Cada serviço abre com 2–3 frases de resposta direta (o que é, para quem, como funciona) e depois vêm as etapas e uma FAQ. Assinatura em toda página: "Conteúdo revisado por Dra. Nicole Almeida, cirurgiã-dentista, CRO-SP 00000 — atualizado em dd/mm/aaaa". A página Sobre traz formação factual, link para a consulta pública do CRO-SP e fotos reais (E-E-A-T, tema de saúde).

**robots.txt:**
```
User-agent: *
Allow: /

# Busca/assistentes de IA (explícito)
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: GPTBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
Allow: /

Sitemap: https://DOMINIO/sitemap.xml
```
- Os bots de treino são GPTBot, ClaudeBot e Google-Extended. Liberá-los é uma decisão do cliente. Para um negócio local, recomendamos liberar.
- O Google-Extended **não** afeta a inclusão nem o ranking no Google Search ([Google](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)).
- **Cuidado:** a Cloudflare bloqueia bots de IA **por padrão** em domínios novos desde 01/07/2025 ([MIT Tech Review](https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/)). Se a hospedagem usar Cloudflare, revisar o "AI Crawl Control".
- Cadastrar o site no Google Search Console e no Bing Webmaster Tools (o Copilot usa o Bing), com sitemap e IndexNow.

**llms.txt (opcional):**
```
# Dra. Nicole Almeida – Cirurgiã-Dentista (Campinas–SP)
> Cirurgiã-dentista (CRO-SP 00000) com atuação em prótese e reabilitação oral, no Cambuí, Campinas.
Endereço: R. Barreto Leme, 2281, sala __, Cambuí, Campinas–SP. Agendamento: WhatsApp (19) 9____-____.
## Serviços
- [Prótese dentária](https://DOMINIO/servicos/protese-dentaria/): prótese fixa, removível e sobre implantes
- [Implantes dentários](https://DOMINIO/servicos/implantes-dentarios/)
## Sobre
- [Dra. Nicole Almeida](https://DOMINIO/dra-nicole-almeida/)
- [Perguntas frequentes](https://DOMINIO/perguntas-frequentes/)
```

---

## 4. Conformidade CFO (crítico)

**Normas vigentes em out/2026:**
- **Código de Ética Odontológica**, Res. CFO-118/2012, cap. XVI, arts. 41–46 ([texto, CROSP](https://site.crosp.org.br/uploads/etica/d7298aa38d661434f465bd376ec1470d.pdf)).
- **Res. CFO-196/2019:** selfies e imagens de diagnóstico e de conclusão, com TCLE ([texto oficial](https://website.cfo.org.br/wp-content/uploads/2019/01/Resolu%c3%a7%c3%a3o-CFO-196-2019.pdf)).
- **Res. CFO-271/2025:** tirou os cartões de desconto do rol de infrações (art. 32 XIII revogado, art. 44 XIV alterado) por determinação do CADE. **Preços e gratuidade continuam vedados** ([Legismap](https://legismap.com.br/conteudos/artigos-e-noticias/em-cumprimento-a-decisao-do-cade-cfo-realiza-alteracoes-pontuais-no-codigo-de-etica); [Nota Técnica CADE 14/2025](https://website.cfo.org.br/wp-content/uploads/2025/03/Nota-Tecnica-no-14-2025-CADE-CFO.pdf)).
- A Decisão CFO-05/2025 criou um grupo para revisar o capítulo de publicidade ([CFO](https://sistemas.cfo.org.br/visualizar/atos/DECIS%C3%83O/SEC/2025/05)). Não achei texto novo publicado até agora. **Monitorar.**

### FAÇA
- Nome + "cirurgiã-dentista" + CRO-SP em todas as páginas (art. 43). Se houver PJ, incluir razão social, inscrição da PJ no CRO-SP e responsável técnico com CRO.
- Usar "clínico geral" antes das áreas de atuação enquanto não houver especialidade registrada (art. 43 §1º I). Exemplo: "Clínica geral · Áreas de atuação: prótese e reabilitação oral".
- Mostrar endereço, telefone, e-mail, horário, convênios e logo (art. 43 §1º IV–V).
- Antes/depois apenas de casos próprios, com TCLE específico arquivado, só diagnóstico e resultado final, com nome + CRO na legenda (Res. 196, arts. 2º e 4º). Exemplo de legenda: "Caso conduzido pela Dra. Nicole Almeida, CRO-SP 00000. Cada tratamento depende de avaliação individual."
- Fotos do consultório e da profissional estão OK. Em selfies com paciente: TCLE, e sem equipamento, instrumental, material ou tecido identificável (Res. 196, art. 1º §1º).
- Tom educativo. Explicar "o que influencia o valor" sem números.

### NÃO FAÇA
- "Especialista", "especializada", "expert", "referência", "a melhor", "nº 1", "único", "o mais moderno" (art. 44 II; Res. 196 art. 2º §1º: autopromoção e concorrência desleal).
- Promessa de resultado: "sorriso perfeito", "garantido", "sem dor", "resultado imediato", "rejuvenesça 10 anos".
- Preços, "a partir de R$", parcelamento ou modalidades de pagamento, "avaliação gratuita", "promoção", sorteio (art. 44 I, IX, X).
- Imagens ou vídeo de procedimento em andamento (Res. 196 art. 3º). Casos ou fotos clínicas de terceiros ou de banco de imagem (art. 4º).
- Criticar técnicas de colegas (art. 44 IV). Anunciar equipamento sem registro na ANVISA (art. 44 III).
- Identificar o paciente para autopromoção (art. 44 VI).

### Depoimentos e avaliações (análise)
- O Código **não proíbe expressamente** depoimentos, mas três pontos pesam contra:
  - art. 44 VI veda identificar o paciente "para fins de autopromoção", mesmo com consentimento;
  - a Res. 196 veda autopromoção e promessa de resultado;
  - republicar um elogio clínico ("ficou perfeito, não doeu nada") equivale a endossá-lo.
- As leituras de mercado divergem ([Agência Meia Palavra Basta](https://agenciameiapalavra.com.br/publicidade-odontologica-regras-cro/), [Codental](https://www.codental.com.br/blog/propaganda-dentista/)).
- **Recomendação em três níveis:**
  - **(a) Mais seguro:** bloco "Avaliações de pacientes no Google" com link para o perfil e a nota como texto atualizado, sem schema.
  - **(b) Intermediário:** 3–4 trechos reais e não editados do Google, só sobre atendimento e acolhimento (não sobre resultado clínico), com o nome como aparece no Google, sem foto, com link para a fonte e autorização escrita do autor.
  - **(c) Nunca:** depoimentos fictícios ou "de exemplo" no ar (também é publicidade enganosa pelo CDC, art. 37), `AggregateRating`, avaliação incentivada, widget que exponha fotos de pacientes.

### Toxina botulínica e preenchedores
- A Res. CFO-198/2019 (Harmonização Orofacial como especialidade) foi **declarada ilegal pela 8ª Turma do TRF-1 em 19/08/2026**. Os efeitos só começam com a publicação do acórdão, e o CFO vai recorrer. O CFO diz que "não há mudança nas atribuições" por enquanto ([CFO via Legismap](https://legismap.com.br/conteudos/artigos-e-noticias/cfo-esclarece-decisao-judicial-sobre-a-harmonizacao-orofacial); [Migalhas](https://www.migalhas.com.br/quentes/462893/trf-1-declara-ilegal-harmonizacao-facial-feita-por-dentistas)).
- As Res. CFO 284–286/2026 (área anatômica e Cirurgia Estética Orofacial) são contestadas pelo [PDL 177/2026](https://www.congressonacional.leg.br/materias/materias-bicamerais/-/ver/pdl-177-2026).
- **No site:**
  - "Toxina botulínica e preenchedores na região orofacial, com indicação após avaliação".
  - Não dizer "harmonização facial" como especialidade, salvo se registrada.
  - Sem antes/depois de rosto e sem "rejuvenescimento" ou "lifting".
  - Página de baixa prioridade de SEO. Revisar quando o acórdão for publicado.

---

## 5. LGPD

- **Cookies** ([Guia ANPD, out/2022](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais)):
  - Cookies de medição e anúncio são "não necessários".
  - Se houver consentimento, o botão **Rejeitar** precisa ter o mesmo destaque do Aceitar, e o aceite não pode ser forçado.
  - **Recomendação:** analytics sem cookies (Cloudflare Web Analytics, Plausible ou Umami) e mapa em *facade* que só carrega o Google Maps com clique ou consentimento. Nesse caso **dispensa banner** e basta o aviso de privacidade. Com GA4, Google Ads ou Pixel da Meta: banner granular + Consent Mode v2, carregando os scripts só depois do aceite.
- **Formulários:**
  - Preferir o link do WhatsApp.
  - Se houver formulário: nome, telefone e preferência de horário, sem campo aberto "conte seu caso". Dado de saúde é **sensível** (LGPD art. 11).
  - Base legal: procedimentos preliminares a pedido do titular (art. 7º, V). Opt-in de marketing nunca pré-marcado.
- **WhatsApp:** o link `wa.me` não coleta dados no site. A política deve informar que a conversa acontece na plataforma da Meta.
- **Política de privacidade mínima** (art. 9º):
  - controlador e contato;
  - dados coletados, finalidades e bases legais;
  - compartilhamento (hospedagem, WhatsApp/Meta, Google Maps, analytics);
  - retenção;
  - direitos do art. 18 e como exercê-los;
  - cookies;
  - data de atualização.
  - Agente de pequeno porte pode dispensar o encarregado, mas precisa manter um canal de contato (Res. CD/ANPD 2/2022).

---

## 6. Endereço: Clínica Allevare (para confirmar com a cliente)

| Candidato | Fonte | Confiança |
|---|---|---|
| **Allevare Coworking Odontológico**: R. Barreto Leme, 2281, Cambuí, Campinas–SP, 13025-085. Plus Code 4W2X+WX. Tel. (19) 99700-0077. Site allevareodontologia.com.br (ainda um WordPress padrão). Nota 5,0. | Ficha no Google Maps (captura feita em 12/10/2026, busca "Allevare Campinas"). A foto da ficha mostra cadeira bege e madeira clara, coerente com as fotos do consultório | **Média-alta** (falta a sala) |
| Mesmo número: Edifício Santa Apolônia, "prédio exclusivo para clínicas" de saúde | Anúncios de salas ([Chaves na Mão](https://www.chavesnamao.com.br/imovel/sala-comercial-a-venda-sp-campinas-cambui-73m2-RS220000/id-32346171/)) | Reforça o endereço |
| Descartados: "Allevare Clínica Odontológica" (CNPJ em Uberlândia–MG), Levare Odontologia (Taquaral) e Aliàre (Barão Geraldo), que são outros negócios | [BuscaSim](https://buscasim.com.br/cnpj/59068814000100-ALLEVARE-CLINICA-ODONTOLOGICA), [Levare](https://levareodontologia.com.br/), [Aliàre](http://www.aliareodontologia.com.br/) | — |

**A confirmar:** sala/conjunto, horário de atendimento, telefone próprio da Dra. Nicole, se a Allevare tem placa individual (requisito do Google para coworking) e se ela atua como pessoa física ou PJ (muda o rodapé, art. 43).
