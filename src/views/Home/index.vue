<!--
 * @Date         : 2021-04-19 18:00:02
 * @Description  :
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2023-08-08 12:14:11
-->

<template>
  <div>
    <img :src="testImg">
  </div>
</template>

<script lang='ts' setup>
import testImg from '@/assets/test.png'

const test = ref('Home')
</script>

<style scoped lang='scss'>
img {
  width: 100vw;
}
</style>
