/**
 * Comportamentos globais (todas as páginas, < 2 KB):
 * header com fundo ao rolar, revelações abaixo da dobra, menu mobile (<dialog>) e barra fixa do mobile.
 * Os estados ocultos só existem com .js no <html> e sem prefers-reduced-motion (ver global.css).
 */
const d = document;
const $ = <T extends Element = HTMLElement>(s: string, c: ParentNode = d) => c.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, c: ParentNode = d) => [...c.querySelectorAll<T>(s)];
const io = (cb: IntersectionObserverCallback, o?: IntersectionObserverInit) => new IntersectionObserver(cb, o);

/* header ganha fundo ao rolar */
const hdr = $('.hdr');
const sentinela = $('.sentinel');
if (hdr && sentinela) io(([e]) => hdr.classList.toggle('is-scrolled', !e.isIntersecting)).observe(sentinela);

/* revelações: [data-r] (fade/cortina), [data-split] (títulos), [data-bloco] (fundo Pólen), [data-io] (nome) */
const revelar = (seletor: string, rootMargin: string) => {
  const els = $$(seletor);
  if (!els.length) return;
  const obs = io(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          obs.unobserve(e.target);
        }
      }),
    { rootMargin },
  );
  els.forEach((el) => obs.observe(el));
};
revelar('[data-r],[data-split],[data-bloco]', '0px 0px -12% 0px');
revelar('[data-io]', '0px 0px -30% 0px');

/* menu (mobile/tablet) */
const menu = $<HTMLDialogElement>('#menu');
const botaoMenu = $('.hdr-menu');
if (menu && botaoMenu) {
  botaoMenu.addEventListener('click', () => {
    menu.showModal();
    botaoMenu.setAttribute('aria-expanded', 'true');
  });
  menu.addEventListener('close', () => botaoMenu.setAttribute('aria-expanded', 'false'));
  menu.addEventListener('click', (ev) => {
    const alvo = ev.target as Element;
    if (alvo === menu || alvo.closest('[data-close]') || alvo.closest('a')) menu.close();
  });
}

