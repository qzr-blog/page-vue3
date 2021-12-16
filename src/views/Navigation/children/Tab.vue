<!--
 * @Date         : 2021-11-26 17:44:31
 * @Description  : 顶部tab
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-12-16 10:16:19
-->

<template>
  <div class="tab-container">
    <div class="tab-box">
      <img src="@/assets/navigation/tab/ic_pickup.png"
           class="ic-pickup">
      <!-- <div>武汉 晴 8°C 良</div> -->
      <div id="he-plugin-simple" />
      <div>
        <img src="@/assets/navigation/tab/ic_home.png">
        <span>首页</span>
      </div>
      <div>
        <img src="@/assets/navigation/tab/ic_blog.png">
        <span>家园</span>
      </div>
    </div>

    <div class="search-box">
      <Search />
    </div>
  </div>
</template>

<script lang='ts' setup>
import Search from '@/views/Navigation/components/Search.vue'
import { onMounted, inject } from 'vue'
import initWeather from '@/utils/weather'

const api:any = inject('$api')

onMounted(async () => {
  initWeather()
  const hitokoto = await api.getHitokoto
  console.log(hitokoto)
})
</script>

<style scoped lang='stylus'>
.tab-container
  position relative
  height 450px
  background-size 100% 100%
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
  width 27px
  height 27
  margin-left 30px

.search-box
  {$flex}
  z-index 9
  position relative
  width 100%
  margin-top 100px
</style>
