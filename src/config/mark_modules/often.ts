import jellyfin from '@/assets/logo/often/jellyfin.png'
import { NASURL } from '@/config/constant'

const index = [{
  name: 'DSM',
  url: NASURL,
  alias: 'Synology',
  desc: '群晖控制台'
}, {
  name: 'Jellyfin',
  url: 'https://router.qzran.cn:8001/web/index.html',
  img: jellyfin,
  desc: '一个自由软件媒体系统，控制媒体管理和流媒体'
}]

export default index
