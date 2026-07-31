<template>
  <div class="products-page">
    <section class="page-banner">
      <div class="banner-content">
        <h1>产品中心</h1>
        <p>五大生活空间 · 一站式全屋定制</p>
      </div>
    </section>

    <!-- 产品介绍 -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <p class="en-title">OUR PRODUCTS</p>
          <h2>全屋定制产品</h2>
          <div class="line"></div>
          <p class="subtitle">
            主营定制衣柜、橱柜、酒柜等定制家具和全屋成品家具<br />
            覆盖客厅、卧房、餐厅、书房、厨房五大生活空间
          </p>
        </div>

        <!-- 产品空间 -->
        <div class="space-section" v-for="space in spaces" :key="space.name" :id="space.id">
          <div class="space-header">
            <div class="space-header-left">
              <img :src="getImageUrl(space.image)" :alt="space.name" class="space-header-img" loading="lazy" />
              <div>
                <h2>{{ space.name }}</h2>
                <p>{{ space.desc }}</p>
              </div>
            </div>
          </div>
          <div class="product-list">
            <div class="product-item" v-for="product in space.products" :key="product">
              <div class="product-img">
                <span>{{ getProductIcon(product) }}</span>
              </div>
              <p>{{ product }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品类型总览 -->
    <section class="section-padding bg-gray">
      <div class="container">
        <div class="section-header">
          <p class="en-title">PRODUCT TYPE</p>
          <h2>产品类型</h2>
          <div class="line"></div>
        </div>
        <div class="type-grid">
          <div class="type-card" v-for="t in types" :key="t.name">
            <div class="type-icon">{{ t.icon }}</div>
            <h3>{{ t.name }}</h3>
            <p>{{ t.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
function getImageUrl(filename) {
  try {
    return new URL(`/src/assets/images/${filename}`, import.meta.url).href
  } catch {
    return ''
  }
}

const spaces = [
  {
    id: 'livingroom',
    image: 'living-room.jpg',
    name: '客厅空间',
    desc: '打造温馨舒适的会客与家庭聚会的核心区域',
    products: ['电视柜', '茶几', '玄关柜', '鞋柜', '隔断柜', '装饰柜', '沙发边几'],
  },
  {
    id: 'bedroom',
    image: 'bedroom.jpg',
    name: '卧房空间',
    desc: '营造温暖安心的私人休憩空间',
    products: ['定制衣柜', '床', '床头柜', '梳妆台', '斗柜', '衣帽间', '飘窗柜'],
  },
  {
    id: 'dining',
    image: 'dining-room.png',
    name: '餐厅空间',
    desc: '打造优雅有格调的用餐与社交空间',
    products: ['餐边柜', '酒柜', '吧台', '酒窖定制', '餐具柜'],
  },
  {
    id: 'study',
    image: 'study-room.jpg',
    name: '书房空间',
    desc: '营造安静专注的阅读与工作环境',
    products: ['书柜', '书桌', '榻榻米', '文件柜', '展示柜', '办公桌'],
  },
  {
    id: 'kitchen',
    image: 'kitchen.jpg',
    name: '厨房空间',
    desc: '合理规划烹饪动线，打造高效美观的厨房',
    products: ['定制橱柜', '吊柜', '中岛台', '高柜', '电器柜', '拉篮'],
  },
]

const types = [
  { icon: '🚪', name: '定制衣柜', desc: '根据空间和使用需求，量身定制衣柜方案' },
  { icon: '🍽️', name: '定制橱柜', desc: '厨房整体解决方案，合理规划烹饪动线' },
  { icon: '🍷', name: '定制酒柜', desc: '专业酒柜定制，展示与存储兼具' },
  { icon: '🪑', name: '全屋成品家具', desc: '沙发、床、餐桌椅等成品家具一站式配齐' },
  { icon: '📐', name: '全屋整装', desc: '全屋定制+成品家具，一站式美学整装服务' },
]

const productIcons = {
  '电视柜': '📺', '茶几': '☕', '玄关柜': '🚪', '鞋柜': '👞', '隔断柜': '🧱', '装饰柜': '🏺', '沙发边几': '🛋️',
  '定制衣柜': '👔', '床': '🛏️', '床头柜': '🔦', '梳妆台': '💄', '斗柜': '🗄️', '衣帽间': '👗', '飘窗柜': '🪟',
  '餐边柜': '🍽️', '酒柜': '🍷', '吧台': '🍸', '酒窖定制': '🏺', '餐具柜': '🍴',
  '书柜': '📚', '书桌': '✍️', '榻榻米': '🧘', '文件柜': '📁', '展示柜': '🏆', '办公桌': '💼',
  '定制橱柜': '🍳', '吊柜': '⬆️', '中岛台': '🏝️', '高柜': '📏', '电器柜': '🔌', '拉篮': '🧺',
}

function getProductIcon(name) {
  return productIcons[name] || '📦'
}
</script>

<style scoped>
.section-padding {
  padding: 80px 0;
}

.bg-gray {
  background: var(--bg-section);
}

/* Space Sections */
.space-section {
  margin-bottom: 56px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

.space-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.space-header {
  margin-bottom: 24px;
}

.space-header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.space-header-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.space-header-left h2 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
}

.space-header-left p {
  font-size: 14px;
  color: var(--text-muted);
  margin-top: 4px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 14px;
}

.product-item {
  background: var(--bg);
  padding: 18px 14px;
  border-radius: var(--radius);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.product-item:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
}

.product-img {
  font-size: 32px;
  margin-bottom: 8px;
}

.product-item p {
  font-size: 13px;
  color: var(--text);
  font-weight: 500;
}

/* Type Grid */
.type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.type-card {
  background: var(--white);
  padding: 36px 24px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
}

.type-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.type-icon {
  font-size: 40px;
  margin-bottom: 14px;
}

.type-card h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 8px;
}

.type-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
