import _ from 'lodash'

export function parseEnv(env: Record<string, any>): ViteEnv {
  // 声明为any类型，防止返回值报错
  const envs: any = _.cloneDeep(env)

  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') {
      envs[key] = value == 'true' ? true : false
    }
    if (/^\d+$/.test(value)) {
      env[key] = parseInt(value)
    }
  })
  return envs
}
