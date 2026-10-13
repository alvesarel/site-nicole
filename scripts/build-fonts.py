"""Gera as fontes web (woff2) do site a partir dos pacotes Fontsource e da Arsenal SC.

Uso: python scripts/build-fonts.py
Requer: pip install fonttools brotli
- Limita os eixos variáveis ao intervalo usado no design (menos bytes).
- Subset Latin-1 + pontuação tipográfica (cobre todo o português).
"""
import io
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools import subset

ROOT = Path(__file__).resolve().parent.parent
FS = ROOT / "node_modules" / "@fontsource-variable"
OUT = ROOT / "public" / "fonts"
OUT.mkdir(parents=True, exist_ok=True)

UNICODES = "U+0020-007E,U+00A0-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2013-2014,U+2018-201A,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122,U+2190-2193,U+2197,U+2212"

JOBS = [
    # (fonte, saída, limites de eixo)
    (FS / "bodoni-moda/files/bodoni-moda-latin-opsz-normal.woff2", "bodoni-moda.woff2", {"wght": (400, 500), "opsz": (28, 96)}),
    (FS / "bodoni-moda/files/bodoni-moda-latin-opsz-italic.woff2", "bodoni-moda-italic.woff2", {"wght": 400, "opsz": (28, 96)}),
    (FS / "bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2", "bricolage-grotesque.woff2", {"wght": (300, 600)}),
    (ROOT / "brand/fonts/ArsenalSC-Regular.ttf", "arsenal-sc.woff2", None),
]


def parse_unicodes(spec):
    out = []
    for part in spec.split(","):
        part = part.replace("U+", "")
        if "-" in part:
            a, b = part.split("-")
            out.extend(range(int(a, 16), int(b, 16) + 1))
        else:
            out.append(int(part, 16))
    return out


for src, name, limits in JOBS:
    font = TTFont(src)
    if limits:
        font = instancer.instantiateVariableFont(font, limits)
        buf = io.BytesIO()
        font.save(buf)
        buf.seek(0)
        font = TTFont(buf)
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = ["kern", "liga", "clig", "calt", "lnum", "pnum", "tnum", "onum", "ss01", "smcp", "c2sc"]
    opts.name_IDs = [1, 2, 3, 4, 6]
    opts.notdef_outline = True
    sub = subset.Subsetter(opts)
    sub.populate(unicodes=parse_unicodes(UNICODES))
    sub.subset(font)
    dst = OUT / name
    font.flavor = "woff2"
    font.save(dst)
    print(f"{name:32s} {dst.stat().st_size/1024:6.1f} KB")
