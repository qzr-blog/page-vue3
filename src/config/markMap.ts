import ic_sign from '@/assets/navigation/side/ic_sign.png'
import ic_video from '@/assets/navigation/side/ic_video.png'
import ic_img from '@/assets/navigation/side/ic_img.png'
import ic_note from '@/assets/navigation/side/ic_note.png'
import ic_music from '@/assets/navigation/side/ic_music.png'

import often from './mark_modules/often'

const markMap = [
  {
    title: '常用分类',
    alias: 'often',
    img: ic_sign,
    content: often
  },
  {
    title: '视频媒体',
    img: ic_video
  },
  {
    title: '高清图库',
    img: ic_img
  },
  {
    title: '便签笔记',
    img: ic_note
  },
  {
    title: '音乐平台',
    img: ic_music
  }
]

export { markMap }
