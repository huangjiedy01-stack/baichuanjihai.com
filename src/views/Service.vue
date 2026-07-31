<template>
  <div class="service-page">
    <section class="page-banner">
      <div class="banner-content">
        <h1>服务保障</h1>
        <p>专业 · 规范 · 贴心</p>
      </div>
    </section>

    <!-- 服务流程 -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <p class="en-title">SERVICE FLOW</p>
          <h2>服务流程</h2>
          <div class="line"></div>
          <p class="subtitle">从咨询到交付，每一步都用心服务</p>
        </div>
        <div class="flow">
          <div class="flow-item" v-for="(step, idx) in flowSteps" :key="idx">
            <div class="flow-num">{{ String(idx + 1).padStart(2, '0') }}</div>
            <div class="flow-icon">{{ step.icon }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
            <div class="flow-arrow" v-if="idx < flowSteps.length - 1">→</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 安装服务 -->
    <section class="section-padding bg-gray">
      <div class="container">
        <div class="section-header">
          <p class="en-title">INSTALLATION</p>
          <h2>专业安装服务</h2>
          <div class="line"></div>
          <p class="subtitle">
            定制衣柜最终效果在于安装。公司拥有专业的安装团队，<br />10 年以上的安装经验，对现场各种细节调整和配合拥有超高的专业度。
          </p>
        </div>
        <div class="install-grid">
          <div class="install-card" v-for="item in installFeatures" :key="item.title">
            <div class="install-icon">
              <img :src="getImageUrl(item.image)" :alt="item.title" loading="lazy" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 形象保护 -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <p class="en-title">PROTECTION STANDARD</p>
          <h2>形象保护服务标准</h2>
          <div class="line"></div>
        </div>
        <div class="protection-grid">
          <div class="protection-card">
            <div class="protect-icon">🧹</div>
            <h3>现场清理</h3>
            <p>安装完成后进行现场清理，确保交付环境整洁有序</p>
          </div>
          <div class="protection-card">
            <div class="protect-icon">🛡️</div>
            <h3>柜体保护</h3>
            <p>所有柜体做好保护工作，防止运输和安装过程中的磕碰损伤</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 售后承诺 -->
    <section class="section-padding bg-gray">
      <div class="container">
        <div class="section-header">
          <p class="en-title">AFTER-SALES</p>
          <h2>售后服务承诺</h2>
          <div class="line"></div>
        </div>
        <div class="promise-list">
          <div class="promise-item" v-for="p in afterSales" :key="p.title">
            <span class="check">✓</span>
            <div>
              <h3>{{ p.title }}</h3>
              <p>{{ p.desc }}</p>
            </div>
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

const flowSteps = [
  { icon: '📞', title: '在线咨询', desc: '联系客服，沟通需求，了解产品' },
  { icon: '📐', title: '免费量尺', desc: '专业团队上门量尺，精确测量空间尺寸' },
  { icon: '✏️', title: '方案设计', desc: '根据需求定制设计方案，一对一沟通优化' },
  { icon: '🏭', title: '工厂生产', desc: '标准化车间，全套南兴设备，精工制造' },
  { icon: '🚚', title: '配送安装', desc: '专业物流配送，10年经验安装团队上门服务' },
  { icon: '✅', title: '验收交付', desc: '现场清理，柜体保护，客户验收满意后交付' },
]

const installFeatures = [
  {
    image: 'installation.jpg',
    title: '10 年经验团队',
    desc: '安装师傅均拥有 10 年以上从业经验，技术娴熟',
  },
  {
    image: 'Detail adjustment.jpg',
    title: '细节调整',
    desc: '对现场各种细节调整和配合拥有超高的专业度',
  },
  {
    image: 'Thoughtful Service.jpg',
    title: '贴心服务',
    desc: '始终坚持客户至上，提供暖心的安装体验',
  },
]

const afterSales = [
  {
    title: '质量保证',
    desc: '所有产品严格执行定制产品质量标准，板材质检合格，工艺达标',
  },
  {
    title: '售后维护',
    desc: '提供完善的售后服务体系，出现质量问题及时响应处理',
  },
  {
    title: '终身维护',
    desc: '建立客户档案，定期回访，提供长期维护服务支持',
  },
]
</script>

<style scoped>
.section-padding {
  padding: 80px 0;
}

.bg-gray {
  background: var(--bg-section);
}

/* Flow */
.flow {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  position: relative;
}

.flow-item {
  background: var(--white);
  padding: 32px 16px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
}

.flow-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.flow-num {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 11px;
  font-weight: 700;
  color: var(--accent-light);
  letter-spacing: 1px;
}

.flow-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.flow-item h3 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
}

.flow-item p {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.6;
}

.flow-arrow {
  display: none;
}

/* Install */
.install-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.install-card {
  background: var(--white);
  padding: 40px 28px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
}

.install-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.install-icon {
  width: 100%;
  height: 180px;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 16px;
  background: var(--bg-dark);
}

.install-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.install-card:hover .install-icon img {
  transform: scale(1.05);
}

.install-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.install-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
}

/* Protection */
.protection-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.protection-card {
  background: var(--white);
  padding: 40px 32px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.protection-card:hover {
  border-color: var(--accent-light);
  transform: translateY(-4px);
}

.protect-icon {
  font-size: 44px;
  margin-bottom: 16px;
}

.protection-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.protection-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
}

/* After Sales */
.promise-list {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.promise-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  background: var(--white);
  padding: 24px 28px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.promise-item:hover {
  transform: translateX(6px);
  box-shadow: var(--shadow-hover);
}

.check {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: var(--primary);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
}

.promise-item h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.promise-item p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .flow {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .flow {
    grid-template-columns: repeat(2, 1fr);
  }

  .install-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .protection-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .flow {
    grid-template-columns: 1fr;
  }
}
</style>
