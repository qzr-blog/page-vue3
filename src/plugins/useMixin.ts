export default function(Vue:any) {
  Vue.mixin({
    methods: {
      goUrl(url:string) {
        window.open(url)
      }
    }
  })
}
