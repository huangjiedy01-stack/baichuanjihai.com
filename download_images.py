"""
百川集海智能家居官网 - 图片下载工具
=============================================
使用方法：
  1. 注册 Pexels 免费 API: https://www.pexels.com/api/
  2. 获取 API Key
  3. 运行: python download_images.py YOUR_PEXELS_API_KEY
  4. 图片自动保存到 ../src/assets/images/ 目录

无需 API Key 的替代方案：
  浏览器直接打开下方链接，手动右键下载图片，放入 src/assets/images/
=============================================
"""
import os
import sys
import urllib.request
import json
import io

# 修复 Windows cmd 编码问题
if sys.platform == 'win32':
    import sys
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# ====== 图片配置 ======
# 格式: (文件名, 搜索关键词, 尺寸)
IMAGES = [
    # 首页 Banner
    ("hero-living-room.jpg", "modern luxury living room interior design bright", "1920x900"),
    
    # 产品空间
    ("living-room.jpg", "modern living room furniture interior wooden", "800x600"),
    ("bedroom.jpg", "modern bedroom custom wardrobe interior", "800x600"),
    ("dining-room.jpg", "elegant dining room interior design", "800x600"),
    ("study-room.jpg", "modern home office study room bookshelf", "800x600"),
    ("kitchen.jpg", "modern kitchen custom cabinet interior", "800x600"),
    
    # 关于我们 - 工厂
    ("factory-workshop.jpg", "modern furniture factory workshop manufacturing", "800x600"),
    ("quality-inspection.jpg", "furniture quality inspection workshop", "800x600"),
    
    # 工艺品质
    ("pur-process.jpg", "furniture edge banding machine modern factory", "800x600"),
    ("wood-material.jpg", "wood material texture close up furniture", "800x600"),
    
    # 安装服务
    ("installation.jpg", "furniture installation service worker modern", "800x600"),
    ("delivery.jpg", "furniture delivery transportation truck", "800x600"),
]

# ====== 手动下载链接 ======
MANUAL_LINKS = {
    "首页Banner": "https://www.pexels.com/search/modern%20living%20room%20interior/",
    "客厅空间": "https://www.pexels.com/search/living%20room%20furniture/",
    "卧室定制衣柜": "https://www.pexels.com/search/bedroom%20wardrobe/",
    "餐厅空间": "https://www.pexels.com/search/dining%20room%20interior/",
    "书房空间": "https://www.pexels.com/search/home%20office%20study/",
    "厨房定制橱柜": "https://www.pexels.com/search/modern%20kitchen%20cabinet/",
    "工厂车间": "https://www.pexels.com/search/furniture%20factory/",
    "安装服务": "https://www.pexels.com/search/furniture%20installation/",
}


def download_with_pexels(api_key, output_dir):
    """使用 Pexels API 下载图片"""
    print("=" * 50)
    print("  使用 Pexels API 下载图片")
    print("=" * 50)
    
    os.makedirs(output_dir, exist_ok=True)
    
    for filename, query, size in IMAGES:
        filepath = os.path.join(output_dir, filename)
        
        if os.path.exists(filepath):
            print(f"  ⏭  已存在: {filename}")
            continue
        
        try:
            url = f"https://api.pexels.com/v1/search?query={urllib.parse.quote(query)}&per_page=1&orientation=landscape"
            req = urllib.request.Request(url, headers={"Authorization": api_key})
            
            with urllib.request.urlopen(req) as resp:
                data = json.loads(resp.read())
            
            if data.get("photos") and len(data["photos"]) > 0:
                # 选择合适尺寸
                photo = data["photos"][0]
                src = photo["src"].get("large2x") or photo["src"].get("large") or photo["src"]["original"]
                
                print(f"  📥 下载: {filename}  ({photo['photographer']})")
                urllib.request.urlretrieve(src, filepath)
            else:
                print(f"  ⚠️  未找到: {query}")
                
        except Exception as e:
            print(f"  ❌ 失败: {filename} - {e}")
    
    print(f"\n  ✅ 完成！图片保存在: {output_dir}")
    print(f"  💡 请检查图片是否符合需求，可替换更好的图片\n")


def show_manual_links():
    """显示手动下载链接"""
    print("=" * 50)
    print("  手动下载替代方案（无需 API Key）")
    print("=" * 50)
    print()
    print("  在浏览器中打开以下链接，右键喜欢的图片 → 另存为")
    print("  保存到: src/assets/images/\n")
    
    name_map = {
        "首页Banner": "hero-living-room.jpg",
        "客厅空间": "living-room.jpg", 
        "卧室定制衣柜": "bedroom.jpg",
        "餐厅空间": "dining-room.jpg",
        "书房空间": "study-room.jpg",
        "厨房定制橱柜": "kitchen.jpg",
        "工厂车间": "factory-workshop.jpg",
    }
    
    for name, url in MANUAL_LINKS.items():
        fname = name_map.get(name, "")
        print(f"  {name} → {fname}")
        print(f"  {url}\n")
    
    print("  💡 Pexels 图片全部免费可商用，无需署名")
    print("  💡 也可使用以下平台:")
    print("     • Pixabay:  https://pixabay.com/  (免费可商用)")
    print("     • Unsplash: https://unsplash.com/  (免费可商用)")
    print("     • Freepik:  https://www.freepik.com/  (部分免费)")


if __name__ == "__main__":
    output_dir = os.path.join(os.path.dirname(__file__), "..", "src", "assets", "images")
    output_dir = os.path.abspath(output_dir)
    
    if len(sys.argv) > 1 and sys.argv[1] not in ["--help", "-h", "help"]:
        api_key = sys.argv[1]
        download_with_pexels(api_key, output_dir)
    else:
        show_manual_links()
        print("\n" + "=" * 50)
        print("  如有 Pexels API Key，运行:")
        print("  python download_images.py YOUR_API_KEY")
        print("=" * 50)
