<!--
 * @Date         : 2022-02-09 18:27:06
 * @Description  : 侧边栏
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2023-08-08 12:14:20
-->

<template>
  <div>test</div>
  <!-- <div :class="{'hide-trans': configStore.hideSide}">
    <div class="placeholder" />
    <div class="side-container">
      <div class="avatar-box">
        <el-avatar
          :src="avatar"
          :size="150" />
        <img :src="avatar"
             class="avatar"
             @click="goBack">
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

  </div> -->

</template>

<script lang="ts" setup>
// import { useConfig } from '@/store/config'
// import { useRouter } from 'vue-router'

// import avatar from '@/assets/logo.jpg'
// import Icon from '@/views/Navigation/components/Icon.vue'

</script>

<style scoped lang="scss">
@mixin zoom {
  transition: 1s;
}

.hide-trans {
  .placeholder {
    width: 60px !important;
  }
  .side-container {
    width: 60px !important;
  }
  .avatar {
    width: 40px !important;
    height: 40px !important;
  }
}

.side-container {
  @include flex;
  @include zoom;
  background: #2c2e2f;
  min-height: 100vh;
  width: 200px;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  left: 0;
}

.content {
  @include flex;
  padding: 30px 0;
  flex-direction: column;
  align-items: flex-start;
  > div{
    padding: 20px 0;
    @include flex;
    box-sizing: border-box;
    position: relative;
    justify-content: flex-start;
    &:hover {
      cursor: pointer;
      span {
        color: white;
      }
      &:deep(svg) {
        color: white !important;
      }
      span {
        font-size: 16px;
        color: #898A8A;
        margin-left: 20px;
      }
    }
  }
}


.avatar {
  @include zoom;
  height: 150px;
  width: 150px;
  background: white;
  border-radius: 100%;
}

.avatar-box {
  @include zoom;
  padding: 50px 0;
  position: relative;
}

.placeholder {
  @include zoom;
  width: 200px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 100%;
}
</style>
