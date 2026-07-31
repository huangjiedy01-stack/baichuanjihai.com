import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '成都百川集海智能家居 - 全屋定制解决方案专家' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { title: '关于我们 - 成都百川集海智能家居' },
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products.vue'),
    meta: { title: '产品中心 - 成都百川集海智能家居' },
  },
  {
    path: '/craft',
    name: 'Craft',
    component: () => import('@/views/Craft.vue'),
    meta: { title: '工艺品质 - 成都百川集海智能家居' },
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('@/views/Service.vue'),
    meta: { title: '服务保障 - 成都百川集海智能家居' },
  },
  {
    path: '/spaces',
    name: 'Spaces',
    component: () => import('@/views/Spaces.vue'),
    meta: { title: '空间方案 - 成都百川集海智能家居' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: { title: '联系我们 - 成都百川集海智能家居' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || '成都百川集海智能家居'
})

export default router
