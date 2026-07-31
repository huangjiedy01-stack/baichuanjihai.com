import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '成都百川集海智能家居 - 全屋定制解决方案专家',
      description: '成都百川集海智能家居有限公司，专注全屋定制解决方案，集研发、设计、生产、销售、安装为一体，致力于给客户带来一个温馨的家。',
      keywords: '成都百川集海智能家居,全屋定制,定制衣柜,定制橱柜,全屋家具,崇州家具,智能家居',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于我们 - 成都百川集海智能家居',
      description: '了解成都百川集海智能家居有限公司，专注全屋定制，集研发、设计、生产、销售、安装为一体，致力于为每个家庭打造温馨舒适的家。',
      keywords: '百川集海,关于我们,成都智能家居公司,全屋定制企业,崇州家具企业',
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products.vue'),
    meta: {
      title: '产品中心 - 成都百川集海智能家居',
      description: '成都百川集海提供全系列全屋定制产品：定制衣柜、定制橱柜、酒柜、书柜、榻榻米及全屋成品家具，满足不同空间需求。',
      keywords: '定制衣柜,定制橱柜,全屋定制产品,定制酒柜,定制书柜,榻榻米定制,百川集海产品',
    },
  },
  {
    path: '/craft',
    name: 'Craft',
    component: () => import('@/views/Craft.vue'),
    meta: {
      title: '工艺品质 - 成都百川集海智能家居',
      description: '百川集海采用先进生产工艺和环保板材，从设计到安装层层把控，确保每一件定制家具都达到最高品质标准。',
      keywords: '定制家具工艺,环保板材,家具生产工艺,百川集海品质,全屋定制工艺',
    },
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('@/views/Service.vue'),
    meta: {
      title: '服务流程 - 成都百川集海智能家居',
      description: '成都百川集海提供从免费上门量尺、3D效果设计、专业生产到安装售后的一站式全屋定制服务。',
      keywords: '全屋定制服务,免费量尺,免费设计,定制家具安装,家具售后服务,百川集海服务',
    },
  },
  {
    path: '/spaces',
    name: 'Spaces',
    component: () => import('@/views/Spaces.vue'),
    meta: {
      title: '空间案例 - 成都百川集海智能家居',
      description: '百川集海全屋定制实景案例展示：卧室、客厅、厨房、书房等空间定制方案，为您提供装修灵感。',
      keywords: '全屋定制案例,装修案例,家居空间设计,卧室定制,客厅定制,厨房定制,书房定制',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: '联系我们 - 成都百川集海智能家居',
      description: '联系成都百川集海智能家居，获取免费全屋定制方案咨询。地址：四川省成都市崇州市，电话/微信在线预约免费量尺设计。',
      keywords: '百川集海联系方式,成都全屋定制咨询,崇州家具厂,免费量尺预约,定制家具咨询',
    },
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const { title, description, keywords } = to.meta
  // 更新标题
  if (title) document.title = title
  // 更新 meta description
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    document.head.appendChild(metaDesc)
  }
  if (description) metaDesc.setAttribute('content', description)
  // 更新 meta keywords
  let metaKw = document.querySelector('meta[name="keywords"]')
  if (!metaKw) {
    metaKw = document.createElement('meta')
    metaKw.setAttribute('name', 'keywords')
    document.head.appendChild(metaKw)
  }
  if (keywords) metaKw.setAttribute('content', keywords)
})

export default router
