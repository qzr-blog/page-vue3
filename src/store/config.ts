import { defineStore } from 'pinia'

const configState = {
  hideSide: true, // 侧边栏隐藏
  searchActive: 1 // 搜索引擎
}

export const useConfig = defineStore({
  id: 'config',
  // state: () => ({
  //   hideSide: false,
  //   searchActive: 1
  // }),
  state() {
    return configState
  },

  // getters: {
  //   getHideSide(state: typeof configState) {
  //     return state.hideSide
  //   },
  // }
})
