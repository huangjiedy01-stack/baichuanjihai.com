<template>
  <footer class="app-footer">
    <div class="footer-main container">
      <div class="footer-col footer-brand">
        <div class="footer-logo">
          <span class="footer-logo-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4L6 20H12V42H19V30H29V42H36V20H42L24 4Z" fill="#B8936B"/>
              <circle cx="24" cy="16" r="3.5" fill="#FFFFFF"/>
            </svg>
          </span>
          <div>
            <div class="footer-logo-name">百川集海</div>
            <div class="footer-logo-sub">成都百川集海智能家居有限公司</div>
          </div>
        </div>
        <p class="footer-desc">以匠心定制美好生活空间，为您打造理想家居。</p>
      </div>
      <div class="footer-col">
        <h4>产品中心</h4>
        <router-link to="/spaces">空间方案</router-link>
        <router-link to="/products">定制产品</router-link>
        <router-link to="/craft">精工品质</router-link>
      </div>
      <div class="footer-col">
        <h4>关于我们</h4>
        <router-link to="/about">品牌介绍</router-link>
        <router-link to="/service">服务支持</router-link>
        <router-link to="/contact">联系我们</router-link>
      </div>
      <div class="footer-col">
        <h4>联系方式</h4>
        <div class="contact-item">
          <span class="icon">📞</span>
          <span>15184476723</span>
        </div>
        <div class="contact-item">
          <span class="icon">📍</span>
          <span>中国-四川-成都-崇州</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-inner container">
        <span>© {{ currentYear }} 成都百川集海智能家居有限公司</span>
        <span class="separator">|</span>
        <span>蜀ICP备xxxxxxxx号</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
  background: #2C2C2C;
  color: #A0A0A0;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding-top: 56px;
  padding-bottom: 40px;
}

.footer-col h4 {
  color: var(--white);
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 22px;
  letter-spacing: 1px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-logo-icon {
  width: 34px;
  height: 34px;
}

.footer-logo-name {
  font-size: 18px;
  font-weight: 500;
  color: var(--white);
  letter-spacing: 3px;
  line-height: 1.4;
}

.footer-logo-sub {
  font-size: 11px;
  color: #888;
  letter-spacing: 1px;
}

.footer-desc {
  font-size: 13px;
  line-height: 1.8;
  color: #888;
}

.footer-col a,
.footer-col span {
  display: block;
  font-size: 13px;
  padding: 6px 0;
  color: #A0A0A0;
  transition: color 0.3s;
  cursor: pointer;
}

.footer-col a:hover {
  color: var(--primary-light);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1.7;
}

.contact-item .icon {
  flex-shrink: 0;
  margin-top: 1px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 18px 0;
}

.footer-bottom-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #777;
  gap: 10px;
  flex-wrap: wrap;
}

.separator {
  color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}
</style>
