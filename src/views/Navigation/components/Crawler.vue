<!--
 * @Date         : 2022-01-12 11:13:15
 * @Description  : 爬虫
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2023-08-08 13:58:53
-->

<template>
  <div class="crawler-container">
    <transition-group name="container">
      <div v-for="(it, index) of crawler"
           :key="index"
           class="crawler-box">

        <div class="title">{{ it.title }}</div>
        <div v-for="(item, idx) of it.content"
             v-show="setShow(idx, it)"
             :key="idx"
             class="content"
             @click="goUrl(item.url)">

          <el-tooltip effect="dark"
                      :content="item.title"
                      placement="left">
            <div>
              <div class="main-box">
                <img :src="item.img">
                <div class="main">
                  <div class="name">{{ item.title }}</div>
                  <div class="price">{{ item.price }}</div>
                </div>
              </div>

              <div v-if="item.chance"
                   class="attrinfo">
                <div>值{{ item.chance }}%({{ item.up }}:{{ item.down }})</div>
                <div>收藏{{ item.collcet }}</div>
                <div>评论{{ item.comment }}</div>
              </div>

              <div v-else
                   class="attrinfo">
                <div>值{{ item.up }}</div>
                <div>评论{{ item.comment }}</div>
              </div>
            </div>
          </el-tooltip>

        </div>

        <div v-if="it.content.length >= 5"
             class="more"
             @click="changeHide(index)">{{ crawler[index].hide ? '收起' : '更多' }}</div>

      </div>
    </transition-group>
  </div>
</template>

<script lang='ts' setup>
import { goUrl } from '@/utils'
import api from '@/api'

const crawler:any = ref([])

async function getSmzdm() {
  const res = await api.getSmzdm()
  crawler.value = res
  console.log(res)
  return res
}

function changeHide(index) {
  crawler.value[index].hide = !crawler.value[index]?.hide
}

function setShow(idx, it) {
  return idx < (!it?.hide ? 5 : it.content.length)
}

onMounted(() => {
  getSmzdm()
})
</script>

<style scoped lang='scss'>
.crawler-container {
  width: 250px;
}

.crawler-box {
  padding: 15px;
  background: white;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: 1s;
  cursor: pointer;
}

.content {
  margin: 15px 0;
}

.main-box {
  @include flex;
  img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
  .name {
    @include textHideLine2;
    font-size: 14px;
    color: #3c3c3c;
  }
  .price {
    font-size: 14px;
    color: #e62828;
    width: 130px;
    margin-top: 5px;
    @include textHideLine1;
  }
}

.main {
  @include flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.attrinfo {
  @include flex;
  justify-content: space-between;
  margin-top: 5px;
  div {
    font-size: 12px;
  }
}

.more {
  text-align: center;
  color: #8f8f8f;
  font-size: 12px;
}
</style>
