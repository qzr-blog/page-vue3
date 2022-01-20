<!--
 * @Date         : 2021-12-15 14:48:22
 * @Description  : 切换图标
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-01-14 11:02:16
-->

<template>
  <img v-if="info.img"
       :src="info.img"
       :style="style">

  <div v-else>
    <common-icon v-if="info.fine && props.fine"
                 :name="info.fine"
                 :style="style" />
    <common-icon v-else
                 :name="info.alias"
                 :style="style" />
  </div>
</template>

<script lang='ts' setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  info: {
    type: Object,
    default: () => {}
  },
  style: {
    type: Object,
    default: () => {}
  },
  fine: {
    type: Boolean,
    default: false
  }
})

const style = computed(() => {
  const styleObj = props.style
  if (props.info.img) {
    styleObj.width = styleObj?.fontSize
    styleObj.height = styleObj?.fontSize
  }
  return styleObj
})
</script>

<style scoped lang='stylus'>

</style>
