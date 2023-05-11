export type IAPISchema = Record<string, {
  req: Record<string, any> | void
  res: Record<string, any> | any
}>

export default interface APISchema extends IAPISchema {
  getHitokoto: {
    req: {}
    res: any
  }
  getSmzdm: {
    req: {}
    res: any
  }
  register: {
    req: any
    res: any
  }
  login: {
    req: {
      username: string
      password: string
    }
    res: any
  }
}
