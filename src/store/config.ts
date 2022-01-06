import { defineStore } from 'pinia'

const configState = {
  hideSide: false,
  searchActive: 1
}

export const useConfig = defineStore({
  id: 'config',
  state() {
    return configState
  },

  getters: {
    getHideSide(state: typeof configState) {
      return state.hideSide
    },
  }
})
