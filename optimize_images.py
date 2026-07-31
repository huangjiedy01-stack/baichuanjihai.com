"""图片压缩优化脚本"""
import os
from PIL import Image

IMG_DIR = r"f:\code\百川集海官网\src\assets\images"

# 压缩参数
JPG_QUALITY = 70
MAX_WIDTH = 1920

files = os.listdir(IMG_DIR)
total_before = 0
total_after = 0

for fname in sorted(files):
    fpath = os.path.join(IMG_DIR, fname)
    if not os.path.isfile(fpath):
        continue

    ext = os.path.splitext(fname)[1].lower()
    if ext not in ('.jpg', '.jpeg', '.png'):
        print(f"  [跳过] {fname} - 不支持的格式")
        continue

    size_before = os.path.getsize(fpath)
    total_before += size_before

    try:
        img = Image.open(fpath)
        w, h = img.size

        if ext == '.png':
            # PNG 转 JPG
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGBA')
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[-1])
                img = background
            else:
                img = img.convert('RGB')

            new_name = fname.replace('.png', '.jpg').replace('.PNG', '.jpg')
            new_path = os.path.join(IMG_DIR, new_name)

            if w > MAX_WIDTH:
                ratio = MAX_WIDTH / w
                img = img.resize((MAX_WIDTH, int(h * ratio)), Image.LANCZOS)

            img.save(new_path, 'JPEG', quality=JPG_QUALITY, optimize=True)
            os.remove(fpath)  # 删除原 PNG
            print(f"  [PNG→JPG] {fname} -> {new_name} | {size_before/1024:.0f}KB -> {os.path.getsize(new_path)/1024:.0f}KB")
            total_after += os.path.getsize(new_path)
        else:
            # JPG 压缩
            if w > MAX_WIDTH:
                ratio = MAX_WIDTH / w
                img = img.resize((MAX_WIDTH, int(h * ratio)), Image.LANCZOS)

            # 转为 RGB
            if img.mode != 'RGB':
                img = img.convert('RGB')

            img.save(fpath, 'JPEG', quality=JPG_QUALITY, optimize=True)
            size_after = os.path.getsize(fpath)
            print(f"  [JPG] {fname} | {size_before/1024:.0f}KB -> {size_after/1024:.0f}KB")
            total_after += size_after

    except Exception as e:
        print(f"  [错误] {fname}: {e}")

print(f"\n总计: {total_before/1024:.0f}KB -> {total_after/1024:.0f}KB (节省 {(1-total_after/total_before)*100:.0f}%)")
