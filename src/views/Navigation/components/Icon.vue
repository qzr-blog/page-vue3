<!--
 * @Date         : 2021-12-15 14:48:22
 * @Description  : 切换图标
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2023-08-08 12:05:18
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
const props = defineProps({
  info: {
    type: Object,
    default: () => { }
  },
  style: {
    type: Object,
    default: () => { }
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

<style scoped lang='scss'>

</style>
