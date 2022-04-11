<!--
 * @Date         : 2021-04-19 17:49:35
 * @Description  :
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-04-11 10:09:15
-->


<template>
  <router-view />
</template>

<script lang="ts" setup>
import { inject, onMounted } from 'vue'

import { preFun, preDom } from '@/utils/preFun'

const $api = inject('$api')
const $utils:any = inject('$utils')

console.log($utils)
console.log($api)
console.log('env', import.meta.env)


onMounted(() => {
  preFun()
  preDom()
})
</script>

<style lang="scss">
body {
  margin: 0;
}

</style>
