from PIL import Image
import math
from pathlib import Path

# 路径
root = Path(__file__).resolve().parent.parent
input_path = root / 'public' / 'logo.png'
output_path = root / 'public' / 'logo.png'
backup_path = root / 'public' / 'logo_original.png'

# 备份原图
img = Image.open(input_path).convert('RGBA')
img.save(backup_path)

width, height = img.size
cx, cy = width / 2, height / 2
radius = min(width, height) / 2

# 创建圆形遮罩
mask = Image.new('L', (width, height), 0)
for y in range(height):
    for x in range(width):
        dist = math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        if dist <= radius:
            # 边缘抗锯齿：距离越接近半径，alpha 越小
            if dist > radius - 1:
                mask.putpixel((x, y), int(255 * (radius - dist)))
            else:
                mask.putpixel((x, y), 255)

# 应用遮罩
result = Image.new('RGBA', (width, height), (0, 0, 0, 0))
result.paste(img, (0, 0), mask)

# 裁剪透明边缘，保留少量边距
bbox = result.getbbox()
if bbox:
    left, top, right, bottom = bbox
    # 保持正方形，以直径为边长
    size = max(right - left, bottom - top)
    # 居中扩展
    cx_bbox = (left + right) / 2
    cy_bbox = (top + bottom) / 2
    new_left = int(cx_bbox - size / 2)
    new_top = int(cy_bbox - size / 2)
    new_right = new_left + size
    new_bottom = new_top + size
    result = result.crop((new_left, new_top, new_right, new_bottom))

result.save(output_path)
print(f'已保存: {output_path}，尺寸: {result.size}')
