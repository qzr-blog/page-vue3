<!--
 * @Date         : 2021-11-26 17:31:30
 * @Description  : 侧面栏
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-12-16 11:36:25
-->

<template>
  <div class="placeholder" />
  <div class="side-container">
    <div class="avatar-box">
      <el-avatar
        :src="avatar"
        :size="150" />
    </div>
    <div class="content">
      <div v-for="(item, index) of content"
           :key="index"
           @click="goHref(item.alias)">
        <div class="icon-box">
          <Icon :info="item"
                :style="{fontSize: '18px', color: '#898a8a'}" />
        </div>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { markMap } from '@/config/markMap'
import avatar from '@/assets/logo.jpg'
import Icon from '@/views/Navigation/components/Icon.vue'

const content = markMap

function goHref(href:string) {
  window.document.querySelector(`#${href}`)?.scrollIntoView({
    behavior: 'smooth', // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
  })
}
</script>

<style scoped lang="stylus">
.side-container
  {$flex}
  background #2c2e2f
  min-height 100vh
  width 250px
  flex-direction column
  justify-content flex-start
  position fixed
  left 0

.content
  {$flex}
  padding 30px 0
  width 100%
  flex-direction column
  align-items flex-start
  > div
    padding 20px 40px
    margin-left 20px
    {$flex}
    box-sizing border-box
    position relative
    justify-content flex-start
    width 80%
    &:hover
      cursor pointer
      span
        color white
      &:deep(svg)
        color white !important
    // &:not(&:last-child)::after
    //   content ''
    //   height 1px
    //   width 100%
    //   left 0
    //   bottom 0
    //   background #303336
    //   position absolute
    span
      font-size 16px
      color #898A8A

.icon-box
  margin-right 20px

.avatar
  height 150px
  width 150px
  background white
  border-radius 100%

.avatar-box
  padding 50px 0
  position relative
  // &::after
  //   content ''
  //   position absolute
  //   height 1px
  //   background #303336
  //   width 100%
  //   bottom 0
  //   left 0

.placeholder
  width 250px
</style>
