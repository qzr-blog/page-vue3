<!--
 * @Date         : 2021-11-26 17:26:53
 * @Description  : 导航页
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-12-24 16:08:11
-->

<template>
  <div class="navigation-container">
    <Side />
    <div class="content-container">
      <Tab />
      <Content />
    </div>
  </div>
</template>

<script lang='ts' setup>
import Side from './children/Side.vue'
import Tab from './children/Tab.vue'
import Content from './children/Content.vue'
</script>

<style scoped lang='stylus'>
.navigation-container
  display flex

.content-container
  flex 1
</style>
