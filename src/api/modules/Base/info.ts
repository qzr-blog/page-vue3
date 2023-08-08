/*
 * @Date         : 2023-08-08 14:07:09
 * @Description  : 获取信息接口
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2023-08-08 17:57:14
 */

import { Axios } from '@/api/axios'

/**
 * @description: 调用一言接口
 * @url /plugin/hitokoto
 */
export function getHitokoto() {
  return Axios.get('/plugin/hitokoto')
}

/**
 * @description: 获取什么值得买信息
 * @url /crawler/smzdm
 */
export function getSmzdm() {
  return Axios.get('/crawler/smzdm')
}
