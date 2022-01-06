<!--
 * @Date         : 2021-04-19 17:49:35
 * @Description  :
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-12-27 10:41:11
-->


<template>
  <router-view />
</template>

<script lang="ts" setup>
import { inject, onMounted } from 'vue'

const $api = inject('$api')
const $utils:any = inject('$utils')

console.log($utils)
console.log($api)
console.log('env', import.meta.env)

function listenResize() {
  // 监听视口变化
  window.addEventListener('resize', () => {
    const width = window.innerWidth
    const height = window.innerHeight

    console.log('width', width)
    console.log('height', height)
  })
}

function listenUnload() {
  // 监听退出页面事件
  window.addEventListener('unload', e => {
    $utils.bom.cookie.del('')
  })
}

onMounted(() => {
  listenResize()
  listenUnload()
})
</script>

<style lang="stylus">
body
	margin 0
</style>
