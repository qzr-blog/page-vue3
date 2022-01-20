import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'

import { defineAsyncComponent } from 'vue'
import Navigation from '@/views/Navigation/index.vue'

const _import = (path) => defineAsyncComponent(() => import(`../views/${path}/index.vue`))

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: _import('Home'),
  },
  {
    path: '/',
    name: 'Navigation',
    component: Navigation,
  }, {
    path: '/:catchAll(.*)',
    component: Navigation,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
