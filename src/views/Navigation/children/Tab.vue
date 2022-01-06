<!--
 * @Date         : 2021-11-26 17:44:31
 * @Description  : 顶部tab
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-01-06 18:01:45
-->

<template>
  <div class="tab-container">
    <div class="tab">
      <div class="tab-box">
        <img src="@/assets/navigation/tab/ic_pickup.png"
             class="ic-pickup"
             :class="{'ic-pickup-trans': configStore.hideSide}"
             @click="hideSide">
        <!-- <div>武汉 晴 8°C 良</div> -->
        <div id="he-plugin-simple" />
        <div>
          <img src="@/assets/navigation/tab/ic_home.png">
          <span>首页</span>
        </div>
        <div @click="goBlog">
          <img src="@/assets/navigation/tab/ic_blog.png">
          <span>博客</span>
        </div>
      </div>

      <div class="textInfo">{{ textInfo }}</div>
    </div>

    <div class="search-box">
      <Search />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Search from '@/views/Navigation/components/Search.vue'

import { onMounted, inject, ref } from 'vue'
import { useConfig } from '@/store/config'

import initWeather from '@/utils/weather'

const api: any = inject('$api')
const textInfo = ref('')

const configStore = useConfig()

function hideSide() {
  configStore.hideSide = !configStore.hideSide
}

function goBlog() {
  location.href = 'https://www.qzran.cn'
}

onMounted(async () => {
  initWeather()
  const hitokoto = await api.getHitokoto
  textInfo.value = hitokoto.hitokoto
  console.log(hitokoto)
})
</script>

<style scoped lang="stylus">
$zoom = @block {
  transition 1s
}

.tab-container
  position relative
  height 450px
  background-size cover
  &::after
    position absolute
    top 0
    left 0
    content ''
    background url('@/assets/navigation/tab/bg_tab.png') no-repeat
    background-position center
    background-size cover
    width 100%
    height 100%
    filter brightness(0.5)

.tab-box
  position relative
  z-index 9
  justify-content left !important
  height 80px
  {$flex}
  div
    {$flex}
    color white
    padding-left 50px
    font-size 14px
    font-weight bold
    img
      width 18px
      height 18px
      margin-right 10px
    &:hover
      color #3390FF
      cursor pointer

.ic-pickup
  {$zoom}
  width 27px
  height 27
  margin-left 30px

.ic-pickup-trans
  transform:rotateY(180deg)

.search-box
  {$flex}
  z-index 9
  position relative
  width 100%
  margin-top 100px

.tab
  {$flex}
  z-index 9
  justify-content space-between
  .textInfo
    z-index 9
    color white
</style>
