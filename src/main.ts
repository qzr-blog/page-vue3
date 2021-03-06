import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
// import store from './store/index'
import { createPinia } from 'pinia'

import Plugins from '@/plugins'

import 'element-plus/theme-chalk/el-message.css'


const app = createApp(App)

app.use(Plugins)
app.use(router)
app.use(createPinia())
app.mount('#app')
