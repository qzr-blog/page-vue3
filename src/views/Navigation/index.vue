<!--
 * @Date         : 2021-11-26 17:26:53
 * @Description  : 导航页
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-04-11 10:09:07
-->

<template>
  <div class="navigation-container">
    <Side />
    <div class="content-container">
      <Tab />
      <Content />
    </div>

    <el-backtop />
  </div>
</template>

<script lang='ts' setup>
import Side from './children/Side.vue'
import Tab from './children/Tab.vue'
import Content from './children/Content.vue'
</script>

<style scoped lang='scss'>
.navigation-container {
  display: flex;
}

.content-container {
  flex: 1;
}
</style>
