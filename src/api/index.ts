import axios from './axios'

export default {
  getHitokoto: axios.get('/plugin/hitokoto'),
  getSmzdm() {
    return axios.post('/crawler/smzdm')
  }
}
