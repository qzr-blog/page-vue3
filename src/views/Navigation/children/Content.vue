<!--
 * @Date         : 2021-11-30 16:56:47
 * @Description  :
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-12-14 17:42:58
-->

<template>
  <div class="content-container">
    <div>
      <div v-for="(marks, index) of markMap"
           :key="index"
           class="mark-box">

        <div class="title">
          <img :src="marks.img">
          <span>{{ marks.title }}</span>
        </div>

        <div class="content-box">
          <div v-for="(item, idx) of marks.content"
               :key="idx"
               class="content"
               @click="goUrl(item)">
            <img :src="item.icon">
            <div>
              <div class="name">{{ item.name }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { inject } from 'vue'
import { markMap } from '@/config/markMap'

function goUrl(item:any) {
  window.location.href = item.url
}
const utils = inject('utils')
</script>

<style scoped lang='stylus'>
.content-container
  background #f9f9f9
  min-height calc(100vh - 450px - 35px - 35px)
  padding 35px 30px

.mark-box
  margin-bottom 64px

.title
  {$flex}
  justify-content flex-start
  margin-bottom 35px
  img
    width 18px
    height 18px
    margin-right 10px
  span
    font-size 18px

.content-box
  {$flex}
  justify-content flex-start

.content
  {$flex}
  align-items flex-start
  background white
  width 270px
  padding 15px 30px
  border-radius 8px
  box-shadow: 0px 2px 5px rgba(153, 153, 153, 0.16)
  margin-right 36px
  cursor pointer
  img
    margin-right 15px

.desc
  font-size 14px
  color #8F8F8F

.name
  color #3C3C3C
  font-size 16px
  margin-bottom 10px
  font-weight bold
</style>
