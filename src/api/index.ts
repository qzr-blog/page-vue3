import { axiosObj as axios } from './axios'

export default {
  getHitokoto: axios.get('/plugin/hitokoto'),
  getSmzdm() {
    return axios.post('/crawler/smzdm')
  },
  register(par) {
    return axios.post('/user/register', par)
  },
  login(par) {
    return axios.post('/user/login', par)
  }
}
