import _ from 'lodash'
export default new (class {
  public env = {} as ImportMetaEnv
  constructor() {
    this.env = this.getEnvs()
  }
  private getEnvs(): ImportMetaEnv {
    // 声明为any类型，防止返回值报错
    const envs: any = _.cloneDeep(import.meta.env)

    Object.entries(import.meta.env).forEach(([key, value]) => {
      if (value == 'true' || value == 'false') {
        envs[key] = value == 'true' ? true : false
      } else if (/^\d+$/.test(value)) envs[key] = Number(value)
      else if (value == 'null') envs[key] = null
      else if (value == 'undefined') envs[key] = undefined
    })
    return envs
  }
})()
