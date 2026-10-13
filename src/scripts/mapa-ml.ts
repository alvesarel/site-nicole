/**
 * Parte pesada do mapa (chunk separado, só baixa no hover/foco/clique do botão "Ver mapa interativo"):
 * MapLibre GL (npm) + CSS + worker, estilo OpenFreeMap Positron recolorido na paleta.
 * Se algo falhar (rede, WebGL, timeout), usa o iframe do Google Maps.
 */
import cssUrl from 'maplibre-gl/dist/maplibre-gl.css?url';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url';

type MapLibre = typeof import('maplibre-gl');
type MapaML = import('maplibre-gl').Map;

const ESTILO = 'https://tiles.openfreemap.org/styles/positron';
const COR = {
  fundo: '#FFFDEE',
  agua: '#DEE2FF',
  area: '#F5F1DA',
  predio: 'rgba(61,66,10,.07)',
  via: 'rgba(61,66,10,.25)',
  contorno: 'rgba(61,66,10,.08)',
  limite: 'rgba(61,66,10,.18)',
  texto: '#3D420A',
};
const LOCALE: Record<string, string> = {
  'AttributionControl.ToggleAttribution': 'Mostrar ou ocultar créditos do mapa',
  'NavigationControl.ZoomIn': 'Aproximar',
  'NavigationControl.ZoomOut': 'Afastar',
  'NavigationControl.ResetBearing': 'Voltar o norte para cima',
  'Map.Title': 'Mapa',
  'Marker.Title': 'Consultório',
  'CooperativeGesturesHandler.WindowsHelpText': 'Use Ctrl + rolagem para aproximar o mapa',
  'CooperativeGesturesHandler.MacHelpText': 'Use ⌘ + rolagem para aproximar o mapa',
  'CooperativeGesturesHandler.MobileHelpText': 'Use dois dedos para mover o mapa',
};

let lib: Promise<MapLibre> | undefined;

function carregarCss(): Promise<void> {
  return new Promise((ok, falha) => {
    if (document.querySelector('link[data-maplibre]')) return ok();
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = cssUrl;
    l.dataset.maplibre = '';
    l.onload = () => ok();
    l.onerror = () => falha(new Error('css'));
    document.head.append(l);
  });
}

/** Código do worker como Blob (MIME correto em qualquer servidor, mesmo os que servem .mjs como text/plain). */
async function workerBlob(): Promise<string> {
  const r = await fetch(workerUrl);
  if (!r.ok) throw new Error(`worker ${r.status}`);
  return URL.createObjectURL(new Blob([await r.text()], { type: 'text/javascript' }));
}

export function carregar(): Promise<MapLibre> {
  lib ??= Promise.all([import('maplibre-gl'), carregarCss(), workerBlob()]).then(([m, , worker]) => {
    m.setWorkerUrl(worker);
    return m;
  });
  lib.catch(() => (lib = undefined));
  return lib;
}

const limite = (ms: number) => new Promise<never>((_, falha) => setTimeout(() => falha(new Error('timeout')), ms));

function tingir(mapa: MapaML) {
  for (const camada of mapa.getStyle().layers ?? []) {
    const { id, type } = camada;
    const p = (prop: string, valor: string) => {
      try {
        mapa.setPaintProperty(id, prop as Parameters<MapaML['setPaintProperty']>[1], valor);
      } catch {
        /* camada sem a propriedade */
      }
    };
    if (type === 'background') p('background-color', COR.fundo);
    else if (type === 'fill') p('fill-color', /water/.test(id) ? COR.agua : /building/.test(id) ? COR.predio : COR.area);
    else if (type === 'line') {
      if (/water|river/.test(id)) p('line-color', COR.agua);
      else if (/boundary|admin/.test(id)) p('line-color', COR.limite);
      else if (/casing/.test(id)) p('line-color', COR.contorno);
      else p('line-color', COR.via);
    } else if (type === 'symbol') {
      p('text-color', COR.texto);
      p('text-halo-color', COR.fundo);
    }
  }
}

/** Troca a facade pelo mapa interativo (ou pelo iframe do Google Maps, se falhar). */
export async function abrir(caixa: HTMLElement) {
  const botao = caixa.querySelector<HTMLButtonElement>('[data-map-btn]');
  const tela = caixa.querySelector<HTMLElement>('.map-canvas');
  const status = caixa.querySelector<HTMLElement>('[data-map-status]');
  if (!botao || !tela) return;
  const lngLat: [number, number] = [Number(caixa.dataset.lng), Number(caixa.dataset.lat)];
  const zoom = Number(caixa.dataset.zoom || 15);
  const rotulo = caixa.dataset.rotulo || 'Consultório';
  const nome = caixa.dataset.nome || 'Consultório';
  const avisar = (t: string) => status && (status.textContent = t);

  const reserva = () => {
    tela.hidden = true;
    tela.textContent = '';
    const f = document.createElement('iframe');
    f.src = `https://www.google.com/maps?q=${encodeURIComponent(caixa.dataset.q || rotulo)}&output=embed`;
    f.title = `Mapa: ${rotulo}`;
    f.loading = 'lazy';
    f.referrerPolicy = 'no-referrer-when-downgrade';
    caixa.append(f);
    caixa.classList.add('is-live');
    f.focus();
    avisar('Mapa carregado');
  };

  let mapa: MapaML | undefined;
  try {
    const ml = await Promise.race([carregar(), limite(10000)]);
    tela.hidden = false;
    mapa = new ml.Map({
      container: tela,
      style: ESTILO,
      center: lngLat,
      zoom,
      cooperativeGestures: true,
      attributionControl: { compact: true },
      locale: LOCALE,
    });
    // falha do estilo/tiles (bloqueador, firewall, queda do OpenFreeMap) cai na reserva na hora, sem esperar 12 s
    const m = mapa;
    await Promise.race([
      new Promise<void>((ok, falha) => {
        const erro = (e: { error?: unknown }) => {
          if (!m.isStyleLoaded()) falha(e.error ?? new Error('estilo'));
        };
        m.on('error', erro);
        m.once('load', () => {
          m.off('error', erro);
          ok();
        });
      }),
      limite(12000),
    ]);
    tingir(m);
    m.addControl(new ml.NavigationControl({ showCompass: false }), 'top-right');
    const pino = document.createElement('div');
    pino.className = 'map-pin';
    pino.setAttribute('role', 'img');
    pino.setAttribute('aria-label', nome);
    new ml.Marker({ element: pino }).setLngLat(lngLat).addTo(m);
    caixa.classList.add('is-live');
    const canvas = m.getCanvas();
    canvas.setAttribute('aria-label', `Mapa interativo: ${rotulo}`);
    canvas.focus();
    avisar('Mapa carregado');
  } catch {
    // libera o contexto WebGL e as requisições de tiles antes de mostrar o iframe
    try {
      mapa?.remove();
    } catch {
      /* ignora */
    }
    reserva();
  }
}
