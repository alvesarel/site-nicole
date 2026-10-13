"""Prepara as imagens-fonte do site (src/assets/fotos) a partir de _originais/.

As originais (4000x6000) ficam fora do git; aqui geramos JPEGs de alta qualidade
(2000 px no lado maior) com nomes descritivos. O Astro gera AVIF/WebP + srcset no build.
Uso: python scripts/build-images.py
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC_N = ROOT / "_originais" / "fotos-nicole"
SRC_C = ROOT / "_originais" / "fotos-consultorio"
OUT = ROOT / "src" / "assets" / "fotos"
OUT.mkdir(parents=True, exist_ok=True)

NICOLE = {
    "0X5A9960": "dra-nicole-almeida-dentista-campinas",
    "0X5A9962": "dra-nicole-almeida-retrato-perfil",
    "0X5A9859": "dra-nicole-almeida-sorrindo-consultorio",
    "0X5A9867": "dra-nicole-almeida-sorrindo-estante",
    "0X5A9758": "dra-nicole-almeida-sorrindo-sofa",
    "0X5A9884": "dra-nicole-almeida-janela",
    "0X5A9969": "dra-nicole-almeida-planejamento",
    "0X5A9993": "dra-nicole-almeida-acolhimento",
    "0X5A9608": "dra-nicole-almeida-poltrona",
    "0X5A9874": "dra-nicole-almeida-detalhe",
    "0X5A0011": "dra-nicole-almeida-caminhando",
    "0X5A9529": "dra-nicole-almeida-retrato-ripado",
}
CONSULTORIO = {
    "consultorio-05": "consultorio-cambui-sala-de-espera",
    "consultorio-09": "consultorio-cambui-sala-de-espera-2",
    "consultorio-10": "consultorio-cambui-sala-de-espera-3",
    "consultorio-04": "consultorio-cambui-recepcao",
    "consultorio-03": "consultorio-cambui-sala-de-atendimento",
    "consultorio-07": "consultorio-cambui-sala-de-atendimento-2",
    "consultorio-11": "consultorio-cambui-sala-de-atendimento-3",
    "consultorio-01": "consultorio-cambui-sala-de-atendimento-4",
    "consultorio-02": "consultorio-cambui-sala-de-atendimento-5",
    "consultorio-06": "consultorio-cambui-sala-de-atendimento-6",
    "consultorio-08": "consultorio-cambui-marcenaria",
}

for src, name in NICOLE.items():
    im = Image.open(SRC_N / f"{src}.jpg")
    im.draft("RGB", (2000, 3000))
    im = ImageOps.exif_transpose(im).convert("RGB")
    im.thumbnail((2000, 2000), Image.LANCZOS)
    dst = OUT / f"{name}.jpg"
    im.save(dst, "JPEG", quality=86, optimize=True, progressive=True)
    print(f"{dst.name:48s} {im.size} {dst.stat().st_size//1024} KB")

for src, name in CONSULTORIO.items():
    im = ImageOps.exif_transpose(Image.open(SRC_C / f"{src}.jpg")).convert("RGB")
    dst = OUT / f"{name}.jpg"
    im.save(dst, "JPEG", quality=90, optimize=True, progressive=True)
    print(f"{dst.name:48s} {im.size} {dst.stat().st_size//1024} KB")
