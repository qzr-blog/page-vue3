/*
 * @Date         : 2022-01-07 11:30:11
 * @Description  : 运行前方法
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-01-21 10:07:27
 */

import utils from '@constq/qzr-utils'

/**
 * 自定信息方法
 */
export function preFun() {
  const userInfo = new utils.monitor.UserInfo()
  console.log('用户信息', userInfo)

  const performance = new utils.monitor.Performance()
  console.log('性能指标', performance)

  const errorPerformance = new utils.monitor.ErrorPerformance()
  console.log('错误监控', errorPerformance)
}

/**
 * Dom方法
 */
export function preDom() {
  // 监听视口变化
  window.addEventListener('resize', () => {
    const width = window.innerWidth
    const height = window.innerHeight

    console.log('width', width)
    console.log('height', height)
  })

  // 监听退出页面事件
  window.addEventListener('unload', e => {
    utils.bom.cookie.del('')
  })
}
