import { defineStore } from 'pinia'
import api from '@/api'
import { loginParam } from '@/types/login'

const userState = {
  token: '', // token
  username: '', // 用户名
  mobile: '', // 手机号
  email: '', // 邮箱
}

export const useUser = defineStore({
  id: 'user',
  state() {
    return userState
  },

  actions: {
    login(par:loginParam) {
      api.login(par)
    },
    logout() {
      console.log('logout')
    }
  }
})
