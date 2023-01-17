<!--
 * @Date         : 2021-11-30 16:56:47
 * @Description  :
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2023-01-04 15:09:46
-->

<template>
  <div class="content-container">
    <div class="bookmarks">
      <div v-for="(marks, index) of markMap"
           :id="marks.alias"
           :key="index"
           class="mark-box">

        <div class="title">
          <div class="title-icon">
            <Icon :info="marks"
                  :fine="true"
                  :style="{fontSize: '18px', color: '#666'}" />
          </div>
          <span>{{ marks.title }}</span>
        </div>

        <div class="content-box">
          <div v-for="(item, idx) of marks.content"
               :key="idx"
               class="content"
               @click="goUrl(item.url)">
            <div class="content-icon">
              <Icon :info="item"
                    :fine="true"
                    :style="{fontSize: '32px', color: '#666'}" />
            </div>
            <div>
              <div class="name">{{ item.name }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </div>

        </div>

      </div>

    </div>

    <Crawler />
  </div>
</template>

<script lang='ts' setup>
import { goUrl } from '@/utils'
import Icon from '@/views/Navigation/components/Icon.vue'
import { markMap } from '@/config/markMap'
import Crawler from '../components/Crawler.vue'
</script>

<style scoped lang='scss'>
@keyframes hoverContent {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-6px);
    box-shadow: 0 26px 40px -24px rgb(0 36 100 / 30%);
  }
}

.content-container {
  @include flex;
  align-items: flex-start;
  background: #f9f9f9;
  min-height: calc(100vh - 450px - 35px - 35px);
  padding: 35px 20px;
}

.bookmarks {
  flex: 1;
  padding-right: 20px;
}

.mark-box {
  margin-bottom: 64px;
}

.title {
  @include flex;
  justify-content: flex-start;
  margin-bottom: 35px;
  .title-icon {
    margin-right: 10px;
  }
  span {
    font-size: 18px;
  }
}

.content-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 36px;
  justify-items: center;
  align-items: center;
  justify-content: stretch;
  align-content: stretch;
  width: 100%;
}

.content {
  display: inline-grid;
  justify-self: stretch;
  @include flex;
  flex: auto;
  align-items: flex-start;
  justify-content: flex-start;
  background: white;
  height: 65px;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(153, 153, 153, 0.16);
  cursor: pointer;
  .content-icon {
    margin-right: 15px;
  }
  &:hover {
    animation: hoverContent .3s ease forwards;
  }
}

.desc {
  font-size: 14px;
  color: #8F8F8F;
  display:-webkit-box;
  overflow:hidden;
  -webkit-box-orient:vertical; //子元素应该被水平或垂直排列
  -webkit-line-clamp:2;  //3行后显示省略号
}

.name {
  color: #3C3C3C;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .desc {
    font-size: 14px;
    color: #8F8F8F;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical; //子元素应该被水平或垂直排列
    -webkit-line-clamp: 2;  //3行后显示省略号
  }
}
</style>
