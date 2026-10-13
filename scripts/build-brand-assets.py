"""Gera favicon, ícones e a imagem de compartilhamento (Open Graph) a partir dos logos SVG.

Uso: python scripts/build-brand-assets.py   (requer pymupdf e pillow)
"""
import io
from pathlib import Path
import pymupdf
from PIL import Image, ImageOps, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "brand" / "logo"
PUB = ROOT / "public"
VERDE, CREME, POLEN = "#3D420A", "#FFFDEE", "#DBCB79"


def render_svg(path, color, width):
    svg = (LOGO / path).read_text(encoding="utf-8").replace("currentColor", color)
    doc = pymupdf.open(stream=svg.encode(), filetype="svg")
    page = doc[0]
    zoom = width / page.rect.width
    pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=True)
    return Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGBA")


# favicon.svg: monograma Verde sobre Creme, cantos arredondados
mono = (LOGO / "logo-monograma.svg").read_text(encoding="utf-8")
vb = mono.split('viewBox="')[1].split('"')[0].split()
w, h = float(vb[2]), float(vb[3])
inner = mono.split(">", 1)[1].rsplit("</svg>", 1)[0]
side = w * 1.36
ox, oy = (side - w) / 2, (side - h) / 2
fav = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {side:.2f} {side:.2f}">'
       f'<rect width="{side:.2f}" height="{side:.2f}" rx="{side*0.18:.2f}" fill="{CREME}"/>'
       f'<g transform="translate({ox:.2f} {oy:.2f})" fill="{VERDE}">{inner}</g></svg>\n')
(PUB / "favicon.svg").write_text(fav, encoding="utf-8")

# PNG icons
for size, name in [(180, "apple-touch-icon.png"), (192, "icon-192.png"), (512, "icon-512.png"), (48, "favicon-48.png")]:
    bg = Image.new("RGBA", (size, size), CREME)
    m = render_svg("logo-monograma.svg", VERDE, int(size * 0.66))
    bg.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
    bg.convert("RGB").save(PUB / name, optimize=True)

# favicon.ico (48/32/16)
Image.open(PUB / "favicon-48.png").save(PUB / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
(PUB / "favicon-48.png").unlink()

# Open Graph 1200x630: Creme, logo à esquerda, retrato à direita
og = Image.new("RGBA", (1200, 630), CREME)
photo = Image.open(ROOT / "src/assets/fotos/dra-nicole-almeida-dentista-campinas.jpg").convert("RGBA")
photo = ImageOps.fit(photo, (470, 630), centering=(0.55, 0.22))
og.alpha_composite(photo, (730, 0))
logo = render_svg("logo-completo.svg", VERDE, 520)
og.alpha_composite(logo, (90, 170))
line = Image.new("RGBA", (120, 3), POLEN)
og.alpha_composite(line, (92, 170 + logo.height + 46))
font = ImageFont.truetype(str(ROOT / "brand/fonts/ArsenalSC-Regular.ttf"), 30)
ImageDraw.Draw(og).text((92, 170 + logo.height + 76), "Cirurgiã-dentista · Cambuí, Campinas", font=font, fill=VERDE)
og.convert("RGB").save(PUB / "og" / "og-dra-nicole-almeida.jpg", quality=86, optimize=True, progressive=True)
for f in ["favicon.svg", "favicon.ico", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "og/og-dra-nicole-almeida.jpg"]:
    print(f, (PUB / f).stat().st_size, "bytes")
