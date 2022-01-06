<!--
 * @Date         : 2021-11-30 17:09:21
 * @Description  : 搜索框控件
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-12-16 10:09:27
-->

<template>
  <div>
    <div class="check-tab">
      <div v-for="(item, index) of checkList"
           :key="index"
           :class="{active: configStore.searchActive === index}"
           @click="configStore.searchActive = index">
        {{ item.name }}
      </div>
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
import { ref } from 'vue'
import { useConfig } from '@/store/config'

import ic_search from '@/assets/navigation/search/ic_search.png'

const configStore = useConfig()

const inputText = ref('')

const checkList = [{
  name: '百度',
  href: 'https://www.baidu.com/s?wd='
}, {
  name: '谷歌',
  href: 'https://www.google.com/search?q='
}]

function goSearch() {
  const href = `${checkList[configStore.searchActive].href}${inputText.value}`

  window.open(href)
}
</script>

<style scoped lang='stylus'>
.search-container
  width 950px
  height 60px
  :deep(.el-input__inner)
    height 55px !important
    border-radius 50px
    font-size 18px
    background rgba(0,0,0,0.6)
    border none
    padding 0 30px
    color white
  :deep(.el-input__suffix-inner)
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
    cursor pointer
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
