<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="header-inner container">
      <router-link to="/" class="logo">
        <span class="logo-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L6 20H12V42H19V30H29V42H36V20H42L24 4Z" fill="#B8936B"/>
            <circle cx="24" cy="16" r="3.5" fill="#FFFFFF"/>
          </svg>
        </span>
        <div class="logo-text">
          <span class="logo-name">百川集海</span>
          <span class="logo-sub">SMART HOME</span>
        </div>
      </router-link>
      <nav class="nav" :class="{ active: menuOpen }">
        <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="nav-link" @click="menuOpen = false">
          {{ item.name }}
        </router-link>
        <router-link to="/contact" class="nav-contact-mobile">联系我们</router-link>
      </nav>
      <div class="header-right">
        <router-link to="/contact" class="btn-contact">在线咨询</router-link>
        <button class="menu-toggle" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '空间方案', path: '/spaces' },
  { name: '定制产品', path: '/products' },
  { name: '精工品质', path: '/craft' },
  { name: '关于我们', path: '/about' },
  { name: '服务支持', path: '/service' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--header-height);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.app-header.scrolled {
  border-bottom-color: var(--border);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1001;
}

.logo-icon {
  width: 34px;
  height: 34px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  color: var(--text);
  line-height: 1.2;
}

.logo-sub {
  font-size: 9px;
  color: var(--primary);
  letter-spacing: 2px;
  font-weight: 400;
}

/* Nav */
.nav {
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-link {
  font-size: 14px;
  color: var(--text);
  letter-spacing: 1px;
  position: relative;
  padding: 4px 0;
  transition: color 0.3s;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: var(--primary);
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  width: 100%;
}

/* Contact button */
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-contact {
  padding: 8px 22px;
  border: 1px solid var(--text);
  color: var(--text);
  font-size: 13px;
  letter-spacing: 1px;
  border-radius: 2px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-contact:hover {
  background: var(--text);
  color: var(--white);
}

.nav-contact-mobile {
  display: none;
}

/* Mobile toggle */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  padding: 6px;
  z-index: 1001;
}

.menu-toggle span {
  width: 22px;
  height: 1.5px;
  background: var(--text);
  transition: all 0.3s ease;
}

.menu-toggle.open span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}
.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}
.menu-toggle.open span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .btn-contact {
    display: none;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--white);
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    transform: translateY(-100%);
    transition: transform 0.4s ease;
  }

  .nav.active {
    transform: translateY(0);
  }

  .nav-link {
    font-size: 18px;
  }

  .nav-contact-mobile {
    display: block;
    margin-top: 10px;
    padding: 10px 30px;
    border: 1px solid var(--text);
    font-size: 14px;
    letter-spacing: 2px;
    border-radius: 2px;
  }
}
</style>
