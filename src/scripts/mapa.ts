/**
 * Mapa sob demanda (parte leve, entra na página): liga o botão "Ver mapa interativo" da facade.
 * O MapLibre e o resto (src/scripts/mapa-ml.ts) só são baixados no hover/foco (pré-carga) ou no clique.
 */
const pesado = () => import('./mapa-ml');

document.querySelectorAll<HTMLElement>('[data-mapa]').forEach((caixa) => {
  const botao = caixa.querySelector<HTMLButtonElement>('[data-map-btn]');
  if (!botao) return;
  const preCarregar = () => void pesado().then((m) => m.carregar()).catch(() => {});
  botao.addEventListener('pointerenter', preCarregar, { once: true });
  botao.addEventListener('focus', preCarregar, { once: true });
  botao.addEventListener('click', async () => {
    botao.disabled = true;
    botao.textContent = 'Carregando o mapa…';
    caixa.setAttribute('aria-busy', 'true');
    const status = caixa.querySelector('[data-map-status]');
    if (status) status.textContent = 'Carregando o mapa';
    try {
      await (await pesado()).abrir(caixa);
    } catch {
      // sem rede para o chunk: devolve o botão e aponta para os links de rota (sempre visíveis)
      botao.disabled = false;
      botao.textContent = 'Ver mapa interativo';
      if (status) status.textContent = 'Não foi possível carregar o mapa. Use os links de rota logo abaixo.';
    }
    caixa.removeAttribute('aria-busy');
  });
});
