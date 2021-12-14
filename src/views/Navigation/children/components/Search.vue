<!--
 * @Date         : 2021-11-30 17:09:21
 * @Description  : 搜索框控件
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-12-14 18:23:03
-->

<template>
  <div>
    <div class="check-tab">
      <div class="active">百度</div>
      <div>谷歌</div>
    </div>

    <div class="search-container">
      <el-input v-model="inputText"
                placeholder="请输入关键字，按回车 / Enter 搜索"
                clearable
                @keyup.enter="goSearch">
        <template #suffix>
          <img class="icon-search"
               :src="ic_search">
        </template>
      </el-input>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { inject, ref } from 'vue'
import ic_search from '@/assets/navigation/search/ic_search.png'

const inputText = ref('')
const utils = inject('utils')

function goSearch() {
  window.location.href = `https://www.baidu.com/s?wd=${inputText.value}`
}
</script>

<style scoped lang='stylus'>
.search-container
  width 950px
  height 60px
  >>> .el-input__inner
    height 55px !important
    border-radius 50px
    font-size 18px
    background rgba(0,0,0,0.6)
    border none
    padding 0 30px
    color white
  >>> .el-input__suffix-inner
    {$flex}
    padding-right 5px

.icon-search
  width 24px
  height 24px
  margin-right 15px

.check-tab
  {$flex}
  color white
  // justify-content flex-start
  margin-bottom 10px
  div
    margin 0 25px
    font-size 18px
    padding-bottom 10px
  .active
    position relative
    // border-bottom 3px solid white
    &::after
      content ''
      height 3px
      background white
      position absolute
      width 100%
      bottom 0
      left 0
      border-radius 20px
</style>
