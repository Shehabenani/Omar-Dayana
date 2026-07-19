from pathlib import Path

out = Path(__file__).resolve().parent.parent / "assets" / "moments"
out.mkdir(parents=True, exist_ok=True)

gradients = [
    ((232, 217, 196), (196, 165, 116)),
    ((245, 239, 230), (221, 210, 196)),
    ((228, 210, 188), (180, 155, 120)),
    ((250, 247, 242), (212, 196, 172)),
    ((210, 190, 165), (154, 123, 82)),
    ((238, 228, 214), (201, 168, 124)),
]

try:
    from PIL import Image, ImageDraw

    for i, (c1, c2) in enumerate(gradients, 1):
        w, h = 360, 480
        img = Image.new("RGB", (w, h))
        draw = ImageDraw.Draw(img)
        for y in range(h):
            t = y / h
            color = tuple(int(c1[j] * (1 - t) + c2[j] * t) for j in range(3))
            draw.line([(0, y), (w, y)], fill=color)
        img.save(out / f"moment-0{i}.jpg", quality=88)
    print("Created 6 JPG placeholders")
except ImportError:
    for i, (c1, c2) in enumerate(gradients, 1):
        svg = (
            f'<svg xmlns="http://www.w3.org/2000/svg" width="360" height="480" viewBox="0 0 360 480">'
            f'<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">'
            f'<stop offset="0%" stop-color="rgb({c1[0]},{c1[1]},{c1[2]})"/>'
            f'<stop offset="100%" stop-color="rgb({c2[0]},{c2[1]},{c2[2]})"/>'
            f"</linearGradient></defs>"
            f'<rect width="360" height="480" fill="url(#g)"/>'
            f"</svg>"
        )
        (out / f"moment-0{i}.svg").write_text(svg, encoding="utf-8")
    print("Created 6 SVG placeholders")
