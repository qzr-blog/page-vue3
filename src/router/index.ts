import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'

import Home from '@/views/Home/index.vue'
import Navigation from '@/views/Navigation/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/navigation',
    name: 'Navigation',
    component: Navigation,
  }, {
    path: '/:catchAll(.*)',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
