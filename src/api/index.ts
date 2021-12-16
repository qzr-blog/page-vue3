import axios from './axios'

export default {
  getHitokoto: axios.get('https://v1.hitokoto.cn?c=d')
}
