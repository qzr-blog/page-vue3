<!--
 * @Date         : 2021-11-26 17:31:30
 * @Description  : 侧面栏
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-01-12 11:12:39
-->

<template>
  <div :class="{'hide-trans': configStore.hideSide}">
    <div class="placeholder" />
    <div class="side-container">
      <div class="avatar-box">
        <!-- <el-avatar
          :src="avatar"
          :size="150" /> -->
        <img :src="avatar"
             class="avatar">
      </div>
      <div class="content">
        <div v-for="(item, index) of content"
             :key="index"
             @click="goHref(item.alias)">
          <div class="icon-box">
            <Icon :info="item"
                  :style="{fontSize: '18px', color: '#898a8a'}" />
          </div>
          <span v-show="!configStore.hideSide">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { useConfig } from '@/store/config'

import { markMap } from '@/config/markMap'

import avatar from '@/assets/logo.jpg'
import Icon from '@/views/Navigation/components/Icon.vue'

const content = markMap
const configStore = useConfig()

function goHref(href:string) {
  window.document.querySelector(`#${href}`)?.scrollIntoView({
    behavior: 'smooth', // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
  })
}
</script>

<style scoped lang="stylus">
$zoom = @block {
  transition 1s
}

.hide-trans
  .placeholder
    width 60px !important
  .side-container
    width 60px !important
  .avatar
    width 40px !important
    height 40px !important

.side-container
  {$flex}
  {$zoom}
  background #2c2e2f
  min-height 100vh
  width 200px
  flex-direction column
  justify-content flex-start
  position fixed
  left 0

.content
  {$flex}
  padding 30px 0
  // width 100%
  flex-direction column
  align-items flex-start
  > div
    padding 20px 40px
    {$flex}
    box-sizing border-box
    position relative
    justify-content flex-start
    &:hover
      cursor pointer
      span
        color white
      &:deep(svg)
        color white !important
    span
      font-size 16px
      color #898A8A

.icon-box
  margin-right 20px

.avatar
  {$zoom}
  height 150px
  width 150px
  background white
  border-radius 100%

.avatar-box
  {$zoom}
  padding 50px 0
  position relative

.placeholder
  width 200px
  {$zoom}

.avatar
  width 120px
  height 120px
  border-radius 100%
</style>
