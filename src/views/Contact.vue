<template>
  <div class="contact-page">
    <section class="page-banner">
      <div class="banner-content">
        <h1>联系我们</h1>
        <p>期待与您的合作</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="contact-grid">
          <!-- 联系方式 -->
          <div class="contact-info">
            <div class="section-header" style="text-align: left; margin-bottom: 36px;">
              <p class="en-title">CONTACT US</p>
              <h2>联系方式</h2>
              <div class="line"></div>
            </div>

            <p class="contact-intro">
              成都百川集海智能家居有限公司，专注全屋定制解决方案。期待您的来电、来访咨询，我们将竭诚为您服务。
            </p>

            <div class="info-list">
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div>
                  <h4>公司地址</h4>
                  <p>中国-四川-成都-崇州</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div>
                  <h4>联系电话</h4>
                  <p>15184476723</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">🕐</div>
                <div>
                  <h4>工作时间</h4>
                  <p>周一至周六 8:30 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 留言表单 -->
          <div class="contact-form-wrapper">
            <div class="section-header" style="text-align: left; margin-bottom: 36px;">
              <p class="en-title">SEND MESSAGE</p>
              <h2>在线留言</h2>
              <div class="line"></div>
            </div>

            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label>您的姓名 <span class="required">*</span></label>
                  <input v-model="form.name" type="text" placeholder="请输入您的姓名" required />
                </div>
                <div class="form-group">
                  <label>联系电话 <span class="required">*</span></label>
                  <input v-model="form.phone" type="tel" placeholder="请输入您的联系电话" required />
                </div>
              </div>
              <div class="form-group">
                <label>咨询类型</label>
                <select v-model="form.type">
                  <option value="">请选择咨询类型</option>
                  <option value="wardrobe">定制衣柜</option>
                  <option value="kitchen">定制橱柜</option>
                  <option value="whole-house">全屋定制</option>
                  <option value="furniture">成品家具</option>
                  <option value="other">其他咨询</option>
                </select>
              </div>
              <div class="form-group">
                <label>留言内容 <span class="required">*</span></label>
                <textarea v-model="form.message" rows="5" placeholder="请描述您的需求，我们将尽快与您联系..." required></textarea>
              </div>
              <button type="submit" class="submit-btn" :disabled="submitting">
                {{ submitting ? '提交中...' : '提交留言' }}
              </button>
              <p class="form-success" v-if="submitted">✅ 感谢您的留言，我们将尽快与您联系！</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 地图占位 -->
    <section class="map-section">
      <div class="map-placeholder">
        <div class="map-content">
          <span>🗺️</span>
          <h3>公司地址</h3>
          <p>中国-四川-成都-崇州</p>
          <p class="map-hint">（可嵌入百度地图或高德地图）</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const submitting = ref(false)
const submitted = ref(false)

const form = reactive({
  name: '',
  phone: '',
  type: '',
  message: '',
})

async function handleSubmit() {
  submitting.value = true

  try {
    const body = new URLSearchParams()
    body.append('form-name', 'contact')
    body.append('姓名', form.name)
    body.append('电话', form.phone)
    body.append('咨询类型', form.type)
    body.append('留言内容', form.message)

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })

    submitted.value = true
    Object.assign(form, { name: '', phone: '', type: '', message: '' })
  } catch {
    alert('提交失败，请稍后重试')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.section-padding {
  padding: 80px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 64px;
  align-items: start;
}

/* Contact Info */
.contact-intro {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.9;
  margin-bottom: 32px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: var(--bg-section);
  transition: all 0.3s ease;
}

.info-item:hover {
  background: var(--accent-light);
}

.info-icon {
  font-size: 26px;
  flex-shrink: 0;
}

.info-item h4 {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
  color: var(--text);
}

.info-item p {
  font-size: 13px;
  color: var(--text-muted);
}

/* Form */
.contact-form-wrapper {
  background: var(--white);
  padding: 40px;
  box-shadow: var(--shadow);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
}

.required {
  color: #D44;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 2px;
  font-size: 14px;
  font-family: inherit;
  color: var(--text);
  background: var(--white);
  transition: border-color 0.3s ease;
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--primary);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  padding: 14px 0;
  background: var(--primary);
  color: var(--white);
  border-radius: 2px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 3px;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: var(--primary-dark);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-success {
  text-align: center;
  color: #27AE60;
  font-size: 14px;
  font-weight: 500;
}

/* Map */
.map-section {
  margin-top: 0;
}

.map-placeholder {
  height: 300px;
  background: var(--bg-section);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-content {
  text-align: center;
}

.map-content span {
  font-size: 48px;
}

.map-content h3 {
  font-size: 20px;
  font-weight: 400;
  margin: 12px 0 6px;
}

.map-content p {
  font-size: 14px;
  color: var(--text-muted);
}

.map-hint {
  margin-top: 8px;
  font-size: 12px !important;
  color: var(--text-muted) !important;
  font-style: italic;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form-wrapper {
    padding: 24px 20px;
  }
}
</style>
