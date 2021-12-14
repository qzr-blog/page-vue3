import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = resolve(__dirname, './src')

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',
  server: {
    port: 3001,
    cors: true // 允许跨域
    // 设置代理
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
  css: {
    preprocessorOptions: {
      stylus: {
        // additionalData: `@import "${pathSrc}/styles/index.styl";`,
        imports: [resolve(__dirname, 'src/style/index')]
      },
    }
  }
})
