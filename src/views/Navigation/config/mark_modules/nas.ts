import audio from '@/assets/logo/nas/audio.png'
import calendar from '@/assets/logo/nas/calendar.png'
import chat from '@/assets/logo/nas/chat.png'
import contacts from '@/assets/logo/nas/contacts.png'
import docker from '@/assets/logo/nas/docker.png'
import download from '@/assets/logo/nas/download.png'
import drive from '@/assets/logo/nas/drive.png'
import file from '@/assets/logo/nas/file.png'
import mail from '@/assets/logo/nas/mail.png'
import note from '@/assets/logo/nas/note.png'
import photo from '@/assets/logo/nas/photo.png'
import video from '@/assets/logo/nas/video.png'
import vmm from '@/assets/logo/nas/vmm.png'

import { NASURL } from '@/config/constant'

const index = [{
  name: 'DSM',
  url: NASURL,
  alias: 'Synology',
  desc: '群晖控制台'
}, {
  name: '音乐',
  alias: 'audio',
  img: audio,
}, {
  name: '日历',
  alias: 'calendar',
  img: calendar,
}, {
  name: 'chat',
  alias: 'chat',
  img: chat,
}, {
  name: '联系人',
  alias: 'contacts',
  img: contacts,
}, {
  name: '下载',
  alias: 'download',
  img: download,
}, {
  name: 'drive',
  alias: 'drive',
  img: drive,
}, {
  name: '文件管理',
  alias: 'file',
  img: file,
}, {
  name: '邮件',
  alias: 'mail',
  img: mail,
}, {
  name: '笔记',
  alias: 'note',
  img: note,
}, {
  name: '照片',
  alias: 'photo',
  img: photo,
}, {
  name: '视频',
  alias: 'video',
  img: video,
}, {
  name: 'vmm',
  alias: 'vmm',
  img: vmm,
}]

const Index = index.map((item:any) => {
  item.url = NASURL + item.alias
  item.desc = `群晖的${item.name}`
  return item
})

export default Index
