/*
 * @Date         : 2023-08-08 14:01:23
 * @Description  :
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2023-08-08 14:07:02
 */

import { Axios } from '@/api/axios'
import { loginParam } from '@/types/login'

/**
 * @description: 登陆
 * @url /user/login
 */
export function login(par: loginParam) {
  return Axios.post('/user/login', par)
}

/**
 * @description: 注册
 * @url /user/register
 */
export function register(par) {
  return Axios.put('/user/register', par)
}
