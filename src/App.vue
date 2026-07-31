<template>
  <div id="app-root">
    <AppHeader />
    <main :class="{ 'has-banner': $route.name !== 'Home' }">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
main {
  min-height: calc(100vh - 72px - 300px);
}
main.has-banner {
  padding-top: 0;
}
</style>
