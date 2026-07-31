<template>
  <div class="about-page">
    <!-- Banner -->
    <section class="page-banner">
      <div class="banner-content">
        <h1>关于我们</h1>
        <p>了解百川集海的品牌故事</p>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="section-padding">
      <div class="container">
        <div class="about-intro">
          <div class="about-text">
            <div class="section-header" style="text-align: left;">
              <p class="en-title">ABOUT US</p>
              <h2>公司简介</h2>
              <div class="line"></div>
            </div>
            <p class="about-p">
              成都百川集海智能家居有限公司，位于<strong>四川省崇州市</strong>，是一家专注<strong>全屋定制解决方案</strong>的企业。生产基地位于成都市崇州工业园区，集研发、设计、生产、销售、安装、家居配套为一体，是一家综合型家具企业。
            </p>
            <p class="about-p">
              公司主营定制衣柜、橱柜、酒柜等定制家具，以及全屋成品家具。始终以<strong>"把客户需要放首位"</strong>为服务理念，专注全屋定制，提供一站式美学整装服务。
            </p>
            <div class="about-values">
              <div class="value-item">
                <span class="value-icon">🎯</span>
                <div>
                  <h4>企业宗旨</h4>
                  <p>致力于给客户带来一个温馨的家</p>
                </div>
              </div>
              <div class="value-item">
                <span class="value-icon">💡</span>
                <div>
                  <h4>服务理念</h4>
                  <p>始终把客户需要放首位</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img :src="getImageUrl('about-intro.jpg')" alt="成都百川集海工厂车间" class="about-img" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- 工厂简介 -->
    <section class="section-padding bg-gray">
      <div class="container">
        <div class="section-header">
          <p class="en-title">OUR FACTORY</p>
          <h2>工厂简介</h2>
          <div class="line"></div>
          <p class="subtitle">标准化车间，全套南兴设备，确保每一件产品的精工品质</p>
        </div>
        <div class="factory-grid">
          <div class="factory-card" v-for="item in factoryFeatures" :key="item.title">
            <div class="factory-icon">
              <img :src="getImageUrl(item.image)" :alt="item.title" loading="lazy" class="factory-thumb" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 质检报告 -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <p class="en-title">QUALITY REPORT</p>
          <h2>质检保障</h2>
          <div class="line"></div>
          <p class="subtitle">每一批板材均经过严格质量检测，提供权威质检报告</p>
        </div>
        <div class="quality-box">
          <div class="quality-icon">📋</div>
          <h3>权威质检报告</h3>
          <p>
            成都百川集海智能家居致力于给客户提供一个温馨舒适舒心的家，所采用板材全部经过严格质量把控，为客户提供一个安全、安心的环境。定制柜体外观最重点为封边细节，全线使用PUR封边胶，让产品更稳定，外观更美观。
          </p>
          <p>
            定制衣柜最终效果在于安装，公司拥有专业的安装团队，10年以上的安装经验，对现场各种细节调整和配合拥有超高的专业度，让客户有一个暖心的体验。
          </p>
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

const factoryFeatures = [
  { image: 'factory-workshop.jpg', title: '标准化车间', desc: '位于崇州工业园区，现代化标准厂房，规范化的生产流程' },
  { image: 'wood-material.jpg', title: '全套南兴设备', desc: '引进全套南兴品牌先进生产设备，保障产品加工精度与品质' },
  { image: 'Professional.jpg', title: '专业团队', desc: '汇聚行业资深工匠，10年以上生产及安装经验' },
  { image: 'exquisite craftsmanship.jpg', title: '精工细作', desc: '从板材选择到封边工艺，每一道工序都精益求精' },
]
</script>

<style scoped>
.section-padding {
  padding: 80px 0;
}

.bg-gray {
  background: var(--bg-section);
}

/* Company Intro */
.about-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-p {
  font-size: 15px;
  line-height: 2;
  color: var(--text-light);
  margin-bottom: 16px;
}

.about-p strong {
  color: var(--primary);
}

.about-values {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.value-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: var(--bg);
  padding: 16px 20px;
  border-radius: var(--radius);
  border-left: 3px solid var(--primary-light);
}

.value-icon {
  font-size: 26px;
  flex-shrink: 0;
}

.value-item h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 4px;
}

.value-item p {
  font-size: 13px;
  color: var(--text-muted);
}

.about-img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}

/* Factory */
.factory-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.factory-card {
  background: var(--white);
  padding: 36px 24px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
}

.factory-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.factory-icon {
  width: 100%;
  height: 140px;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 16px;
  background: var(--bg-dark);
}

.factory-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.factory-card:hover .factory-thumb {
  transform: scale(1.05);
}

.factory-card h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 8px;
}

.factory-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
}

/* Quality */
.quality-box {
  background: linear-gradient(135deg, var(--bg), var(--accent-light));
  padding: 48px;
  border-radius: var(--radius-lg);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.quality-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.quality-box h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 18px;
  color: var(--primary-dark);
}

.quality-box p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 2;
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .about-intro {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .factory-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .quality-box {
    padding: 28px 20px;
  }

  .about-img {
    height: 260px;
  }
}

@media (max-width: 480px) {
  .factory-grid {
    grid-template-columns: 1fr;
  }
}
</style>
