<template>
  <div class="craft-page">
    <section class="page-banner">
      <div class="banner-content">
        <h1>工艺品质</h1>
        <p>精工细作 · 品质为先</p>
      </div>
    </section>

    <!-- PUR 封边工艺 -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <p class="en-title">CORE CRAFT</p>
          <h2>全线 PUR 封边工艺</h2>
          <div class="line"></div>
          <p class="subtitle">
            定制柜体外观最重点为封边细节。百川集海柜体、柜门全线使用 PUR 封边胶，<br />让产品更稳定，外观更美观，让客户拥有一个舒心的体验。
          </p>
        </div>

        <div class="craft-features">
          <div class="craft-feature" v-for="item in purFeatures" :key="item.title">
            <div class="cf-icon">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 封边对比 -->
    <section class="section-padding bg-gray">
      <div class="container">
        <div class="section-header">
          <p class="en-title">EDGE BANDING</p>
          <h2>封边工艺对比</h2>
          <div class="line"></div>
        </div>
        <div class="compare-table">
          <div class="compare-header">
            <div class="compare-cell label"></div>
            <div class="compare-cell">普通 EVA 封边</div>
            <div class="compare-cell highlight-col">PUR 封边</div>
          </div>
          <div class="compare-row" v-for="row in compareData" :key="row.label">
            <div class="compare-cell label">{{ row.label }}</div>
            <div class="compare-cell">{{ row.eva }}</div>
            <div class="compare-cell highlight-col">{{ row.pur }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品细节 -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <p class="en-title">PRODUCT DETAILS</p>
          <h2>产品细节</h2>
          <div class="line"></div>
          <p class="subtitle">于细节处见真章，每一处都精心打磨</p>
        </div>
        <div class="details-grid">
          <div class="detail-card" v-for="d in details" :key="d.title">
            <div class="detail-img">
              <img :src="getImageUrl(d.image)" :alt="d.title" loading="lazy" />
            </div>
            <h3>{{ d.title }}</h3>
            <p>{{ d.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 质检标准 -->
    <section class="section-padding bg-gray">
      <div class="container">
        <div class="section-header">
          <p class="en-title">QUALITY STANDARD</p>
          <h2>定制产品质量标准</h2>
          <div class="line"></div>
        </div>
        <div class="quality-grid">
          <div class="quality-card" v-for="q in quality" :key="q.title">
            <div class="qc-num">{{ q.num }}</div>
            <h3>{{ q.title }}</h3>
            <p>{{ q.desc }}</p>
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

const purFeatures = [
  {
    icon: '💧',
    title: '超强防水性',
    desc: 'PUR 胶固化后形成不可逆的网状结构，防水性能远超 EVA 封边，特别适合厨房、卫生间等潮湿环境',
  },
  {
    icon: '⏳',
    title: '耐久性更强',
    desc: '耐高低温，不易老化脱落，长期使用依然牢固如初，大大延长产品使用寿命',
  },
  {
    icon: '✨',
    title: '胶线更细',
    desc: 'PUR 胶线仅 0.1-0.2mm，几乎看不到封边痕迹，整体视觉效果更完整、更美观',
  },
  {
    icon: '🌿',
    title: '健康环保',
    desc: 'PUR 胶不含溶剂，固化后无有害物质释放，为客户提供安全安心的家居环境',
  },
]

const compareData = [
  { label: '胶线宽度', eva: '0.5-1.0mm（明显可见）', pur: '0.1-0.2mm（几乎不可见）' },
  { label: '防水性能', eva: '一般，潮湿环境易脱胶', pur: '极强，适合厨房卫生间' },
  { label: '耐高温', eva: '50-60℃', pur: '100-120℃' },
  { label: '耐低温', eva: '低温变脆', pur: '-40℃仍保持韧性' },
  { label: '耐久年限', eva: '3-5 年可能出现脱胶', pur: '10 年以上不脱落' },
  { label: '环保等级', eva: '一般', pur: '高（无溶剂）' },
]

const details = [
  {
    image: 'pur-process.jpg',
    title: '封边细节',
    desc: '全 PUR 封边，防水性和耐久性更强，胶线细腻美观',
  },
  {
    image: 'Door gap design.jpg',
    title: '门缝设计',
    desc: '门缝设计美观，对缝尺寸精准，结构适用美观',
  },
  {
    image: 'quality-inspection.jpg',
    title: '水平测量',
    desc: '水平测量精确，门缝细节、细条比例等专业化处理',
  },
]

const quality = [
  {
    num: '01',
    title: '基材质量',
    desc: '定制柜体质量核心为基材质量，所有板材均经过严格质量把控，为客户提供安全安心的环境',
  },
  {
    num: '02',
    title: '封边标准',
    desc: '全线使用 PUR 封边胶，封边细节精益求精，让产品更稳定、外观更美观',
  },
  {
    num: '03',
    title: '安装交付',
    desc: '10 年以上安装经验团队，对现场各种细节调整和配合拥有超高专业度，让客户有暖心体验',
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

/* Craft Features */
.craft-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.craft-feature {
  background: var(--white);
  padding: 36px 24px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
}

.craft-feature:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.cf-icon {
  font-size: 44px;
  margin-bottom: 16px;
}

.craft-feature h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
}

.craft-feature p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
}

/* Compare Table */
.compare-table {
  max-width: 800px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  background: var(--white);
}

.compare-header,
.compare-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
}

.compare-header {
  background: var(--primary-dark);
  color: var(--white);
}

.compare-header .compare-cell {
  padding: 16px 20px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
}

.compare-row {
  border-bottom: 1px solid var(--border);
}

.compare-row:last-child {
  border-bottom: none;
}

.compare-cell {
  padding: 14px 20px;
  font-size: 13px;
  color: var(--text-light);
  display: flex;
  align-items: center;
}

.compare-cell.label {
  font-weight: 600;
  color: var(--text);
}

.highlight-col {
  background: var(--accent-light);
  color: var(--primary-dark);
  font-weight: 500;
}

.compare-header .highlight-col {
  background: var(--primary);
}

/* Details Grid */
.details-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.detail-card {
  background: var(--white);
  padding: 40px 28px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.detail-img {
  width: 100%;
  height: 180px;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 18px;
  background: var(--bg-dark);
}

.detail-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.detail-card:hover .detail-img img {
  transform: scale(1.05);
}

.detail-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.detail-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
}

/* Quality */
.quality-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.quality-card {
  background: var(--white);
  padding: 36px 28px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
  border-top: 3px solid var(--primary-light);
}

.quality-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.qc-num {
  font-size: 36px;
  font-weight: 800;
  color: var(--accent-light);
  margin-bottom: 10px;
}

.quality-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.quality-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.8;
}

@media (max-width: 1024px) {
  .craft-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .craft-features,
  .details-grid,
  .quality-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .compare-header,
  .compare-row {
    grid-template-columns: 100px 1fr 1fr;
  }

  .compare-cell {
    padding: 10px 12px;
    font-size: 12px;
  }
}
</style>
