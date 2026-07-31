<template>
  <div class="spaces-page">
    <!-- Banner -->
    <section class="page-banner">
      <div class="banner-content">
        <h1>空间方案</h1>
        <p>SPATIAL SOLUTIONS</p>
      </div>
    </section>

    <!-- 空间列表 -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <div class="en-title">YOUR SPACES</div>
          <h2>定制每一个家的温度</h2>
          <div class="line"></div>
          <div class="subtitle">从客厅到厨房，为不同空间提供个性化定制方案</div>
        </div>
        <div class="spaces-list">
          <div class="space-item" v-for="space in spaces" :key="space.name">
            <div class="space-img-wrap">
              <img :src="getImageUrl(space.image)" :alt="space.name" loading="lazy" />
            </div>
            <div class="space-text">
              <h3>{{ space.name }}</h3>
              <p>{{ space.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta-content container">
        <h2>为您量身打造理想空间</h2>
        <p>免费上门量尺，专业设计师一对一沟通</p>
        <router-link to="/contact" class="btn-primary">免费设计咨询</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getImageUrl } from '@/utils'

const spaces = [
  {
    name: '客厅空间',
    image: 'living-room.jpg',
    desc: '客厅是家的门面，也是家人相聚的核心区域。我们根据户型特点和使用习惯，定制电视柜、沙发背景墙、隔断柜等，兼顾美观与收纳。',
  },
  {
    name: '卧房空间',
    image: 'bedroom.jpg',
    desc: '卧房是私密的休憩港湾。从定制衣柜到梳妆台、床头柜，我们关注每一处细节，营造舒适温馨的睡眠环境。',
  },
  {
    name: '餐厅空间',
    image: 'dining-room.jpg',
    desc: '餐厅承载着家庭的烟火气息。餐边柜、酒柜、嵌入式餐桌等定制方案，让每一餐都充满仪式感。',
  },
  {
    name: '书房空间',
    image: 'study-room.jpg',
    desc: '书房是精神栖息地。书柜、书桌一体化定制，合理规划空间，打造专注舒适的阅读办公环境。',
  },
  {
    name: '厨房空间',
    image: 'kitchen.jpg',
    desc: '厨房是家的能量站。整体橱柜定制，科学动线规划，让下厨成为一种享受。防水防潮工艺，经久耐用。',
  },
]
</script>

<style scoped>
.spaces-list {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.space-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.space-item:nth-child(even) .space-img-wrap {
  order: 2;
}
.space-item:nth-child(even) .space-text {
  order: 1;
}

.space-img-wrap {
  width: 100%;
  height: 380px;
  overflow: hidden;
}

.space-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.space-item:hover .space-img-wrap img {
  transform: scale(1.03);
}

.space-text h3 {
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 16px;
  position: relative;
  padding-bottom: 16px;
}

.space-text h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--primary);
}

.space-text p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 2;
}

.section-padding {
  padding: 80px 0;
}

/* CTA */
.cta {
  padding: 90px 0;
  background: var(--bg-section);
  text-align: center;
}

.cta-content h2 {
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 3px;
  margin-bottom: 14px;
}

.cta-content p {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .space-item,
  .space-item:nth-child(even) .space-img-wrap,
  .space-item:nth-child(even) .space-text {
    grid-template-columns: 1fr;
    order: unset;
  }

  .space-img-wrap {
    height: 240px;
  }

  .space-text h3 {
    font-size: 22px;
  }
}
</style>
