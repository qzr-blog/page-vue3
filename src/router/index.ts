import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'

import { defineAsyncComponent } from 'vue'
import Navigation from '@/views/Navigation/index.vue'

import beforeEach from './guard/beforeEach'

const _import = (path) => defineAsyncComponent(() => import(`../views/${path}/index.vue`))

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: _import('Home'),
  }, {
    path: '/',
    name: 'Navigation',
    component: Navigation,
  }, {
    path: '/:catchAll(.*)',
    component: Navigation,
  }, {
    path: '/back',
    name: 'Back',
    component: _import('Back')
  }
]

routes.forEach(item => {
  item.meta = {
    ...{
      keepAlive: true
    }, ...item
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(beforeEach)

export default router
