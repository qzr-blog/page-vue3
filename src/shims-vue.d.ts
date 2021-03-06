declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@constq/qzr-utils'

declare let goUrl:(url: string) => void
declare let goPage:(par: any) => void

