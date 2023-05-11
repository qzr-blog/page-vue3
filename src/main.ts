import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

import Plugins from '@/plugins'

import 'element-plus/theme-chalk/el-message.css'

import 'virtual:svg-icons-register'

const store = createPinia()
store.use(piniaPluginPersist)

const app = createApp(App)

app.use(Plugins)
app.use(router)
app.use(store)
app.mount('#app')
