<template>
  <div class="home-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg" :style="{ backgroundImage: `url(${getImageUrl('hero-living-room.jpg')})` }"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-tag">BAICHUAN · SMART HOME</p>
        <h1>致生活空间</h1>
        <p class="hero-desc">以匠心定制每一寸家居，用品质成就理想生活</p>
        <router-link to="/contact" class="hero-cta">免费预约设计</router-link>
      </div>
      <a class="scroll-hint" href="#features" aria-label="向下滚动">
        <span></span>
      </a>
    </section>

    <!-- 品牌优势 -->
    <section id="features" class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-item" v-for="f in features" :key="f.title">
            <div class="feature-icon">{{ f.icon }}</div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 空间方案 -->
    <section class="spaces">
      <div class="container">
        <div class="section-header">
          <div class="en-title">SPATIAL SOLUTIONS</div>
          <h2>空间方案</h2>
          <div class="line"></div>
          <div class="subtitle">从设计到落地，为每个家居空间提供完整定制方案</div>
        </div>
        <div class="spaces-grid">
          <router-link v-for="space in spaces" :key="space.name" :to="space.link" class="space-card">
            <div class="space-img">
              <img :src="getImageUrl(space.image)" :alt="space.name" loading="lazy" />
            </div>
            <div class="space-info">
              <span class="space-name">{{ space.name }}</span>
              <span class="space-arrow">→</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 精工品质 -->
    <section class="highlight">
      <div class="container">
        <div class="highlight-row">
          <div class="highlight-text">
            <div class="en-title">QUALITY ASSURANCE</div>
            <h2>精工品质</h2>
            <div class="line"></div>
            <p class="highlight-desc">采用行业领先的PUR无缝封边工艺，精选优质环保板材，每一件产品都经过严格品质检测，以匠心成就卓越品质。</p>
            <ul class="highlight-list">
              <li>PUR无缝封边 · 防水防潮</li>
              <li>ENF级环保板材 · 健康无忧</li>
              <li>精密数控 · 误差≤0.1mm</li>
              <li>层层质检 · 严苛品控</li>
            </ul>
            <router-link to="/craft" class="btn-outline-dark">了解更多</router-link>
          </div>
          <div class="highlight-img">
            <img :src="getImageUrl('craft-quality.jpg')" alt="精工品质" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- 三大承诺 -->
    <section class="promises">
      <div class="container">
        <div class="section-header">
          <div class="en-title">OUR PROMISE</div>
          <h2>匠心承诺</h2>
          <div class="line"></div>
        </div>
        <div class="promises-grid">
          <div class="promise-card" v-for="p in promises" :key="p.title">
            <div class="promise-num">{{ p.num }}</div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta-content container">
        <h2>开启你的理想家居</h2>
        <p>百川集海专业设计师团队，为您提供一对一免费设计咨询</p>
        <router-link to="/contact" class="btn-primary">立即预约</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getImageUrl } from '@/utils'

const features = [
  { icon: '✦', title: '原创设计', desc: '经验丰富的设计团队，提供个性化创意方案' },
  { icon: '◆', title: '环保板材', desc: '甄选ENF级环保板材，守护家人健康' },
  { icon: '▲', title: '德系工艺', desc: '引进德系精工设备，品质精益求精' },
  { icon: '⬡', title: '无忧售后', desc: '完善的服务体系，让您用得放心安心' },
]

const spaces = [
  { name: '客厅空间', image: 'living-room.jpg', link: '/spaces' },
  { name: '卧房空间', image: 'bedroom.jpg', link: '/spaces' },
  { name: '餐厅空间', image: 'dining-room.jpg', link: '/spaces' },
  { name: '书房空间', image: 'study-room.jpg', link: '/spaces' },
  { name: '厨房空间', image: 'kitchen.jpg', link: '/spaces' },
]

const promises = [
  { num: '01', title: '环保承诺', desc: '全线采用ENF级环保板材，严格把控甲醛释放量，守护您和家人的呼吸健康' },
  { num: '02', title: '品质承诺', desc: '从板材到五金，每一道工序都历经严苛检验，只为给您经得起时间考验的品质' },
  { num: '03', title: '服务承诺', desc: '从免费量尺设计到上门安装，一站式服务让您省心省力，享受无忧定制体验' },
]
</script>

<style scoped>
/* ========== Hero ========== */
.hero {
  height: 100vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  transition: transform 8s ease;
}

.home-page:hover .hero-bg {
  transform: scale(1);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    rgba(0, 0, 0, 0.18) 0%,
    rgba(0, 0, 0, 0.05) 45%,
    rgba(0, 0, 0, 0.22) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  color: var(--white);
  text-align: center;
  padding: 0 24px;
}

.hero-tag {
  font-size: 13px;
  letter-spacing: 6px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 24px;
}

.hero-content h1 {
  font-size: 72px;
  font-weight: 300;
  letter-spacing: 20px;
  margin-bottom: 26px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
}

.hero-desc {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 44px;
  letter-spacing: 3px;
}

.hero-cta {
  display: inline-block;
  padding: 16px 52px;
  background: var(--primary);
  color: var(--white);
  font-size: 15px;
  letter-spacing: 3px;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hero-cta:hover {
  background: var(--primary-dark);
}

.scroll-hint {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
  z-index: 1;
}

.scroll-hint span {
  width: 3px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  animation: scrollBounce 2s infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(8px); opacity: 0.4; }
}

/* ========== Features ========== */
.features {
  padding: 80px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  background: var(--white);
}

.feature-item {
  padding: 40px 30px;
  text-align: center;
  border-right: 1px solid var(--border);
  transition: background 0.3s ease;
}

.feature-item:last-child {
  border-right: none;
}

.feature-item:hover {
  background: var(--bg-section);
}

.feature-icon {
  font-size: 22px;
  color: var(--primary);
  margin-bottom: 14px;
}

.feature-item h3 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.feature-item p {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.7;
}

/* ========== Spaces ========== */
.spaces {
  padding: 100px 0;
}

.spaces-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.space-card {
  display: block;
  background: var(--white);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.space-card:hover {
  box-shadow: var(--shadow-hover);
}

.space-img {
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
}

.space-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.space-card:hover .space-img img {
  transform: scale(1.05);
}

.space-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}

.space-name {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
}

.space-arrow {
  font-size: 16px;
  color: var(--primary);
  transition: transform 0.3s ease;
}

.space-card:hover .space-arrow {
  transform: translateX(4px);
}

/* ========== Highlight ========== */
.highlight {
  padding: 90px 0;
  background: var(--bg-section);
}

.highlight-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.highlight-text .en-title {
  font-size: 12px;
  color: var(--primary);
  letter-spacing: 4px;
  margin-bottom: 12px;
}

.highlight-text h2 {
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 14px;
}

.highlight-text .line {
  width: 40px;
  height: 2px;
  background: var(--primary);
  margin-bottom: 24px;
}

.highlight-desc {
  font-size: 14px;
  color: var(--text-light);
  line-height: 2;
  margin-bottom: 20px;
}

.highlight-list {
  margin-bottom: 30px;
}

.highlight-list li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--text-light);
}

.highlight-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  background: var(--primary);
  border-radius: 50%;
}

.highlight-img {
  width: 100%;
  height: 420px;
  overflow: hidden;
}

.highlight-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ========== Promises ========== */
.promises {
  padding: 100px 0;
}

.promises-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.promise-card {
  text-align: center;
  padding: 50px 30px;
  background: var(--white);
  border: 1px solid var(--border);
  transition: all 0.4s ease;
}

.promise-card:hover {
  border-color: transparent;
  box-shadow: var(--shadow-hover);
}

.promise-num {
  font-size: 48px;
  font-weight: 200;
  color: var(--primary-light);
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.promise-card h3 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 14px;
  letter-spacing: 1px;
}

.promise-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.9;
}

/* ========== CTA ========== */
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

/* ========== 响应式 ========== */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 34px;
    letter-spacing: 4px;
  }

  .hero-desc {
    font-size: 14px;
  }

  .hero-btns {
    flex-direction: column;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-item {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .spaces-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .highlight-row {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .promises-grid {
    grid-template-columns: 1fr;
  }
}
</style>
