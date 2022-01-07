import ic_sign from '@/assets/navigation/side/ic_sign.png'
import ic_dsm from '@/assets/logo/nas/nas.png'
import ic_video from '@/assets/navigation/side/ic_video.png'
import ic_img from '@/assets/navigation/side/ic_img.png'
import ic_note from '@/assets/navigation/side/ic_note.png'
import ic_music from '@/assets/navigation/side/ic_music.png'

import often from './mark_modules/often'
import nas from './mark_modules/nas'
import docker from './mark_modules/docker'

interface mark {
  title: string   // 标题名
  alias: string   // 别名 定义symbol icon
  fine?: string    // 定义带颜色的symbol icon
  img?: any       // 定义png图标
  content: any[]  // 定义子项目
}

const markMap: mark[] = [
  {
    title: '常用',
    alias: 'often',
    content: often
  },
  {
    title: 'Docker',
    alias: 'docker',
    fine: 'Docker',
    content: docker
  },
  {
    title: 'Nas',
    alias: 'nas',
    fine: 'synology',
    content: nas
  },
]

export { markMap }
