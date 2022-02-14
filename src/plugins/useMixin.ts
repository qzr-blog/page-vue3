import { useRouter } from 'vue-router'

export default function(Vue:any) {
  Vue.mixin({
    methods: {
      goUrl(url:any) {
        window.open(url)
      }
    }
  })
}
