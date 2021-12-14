<!--
 * @Date         : 2021-04-19 18:00:02
 * @Description  :
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-11-30 18:01:21
-->

<template>
  <div>
    <img :src="testImg">
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import testImg from '@/assets/test.png'

const test = ref('Home')
</script>

<style scoped lang='stylus'>
img
  width 100vw
</style>
