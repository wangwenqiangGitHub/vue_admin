import { ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import alias from './vite/alias'
import { parseEnv } from './vite/util'

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build'
  const root = process.cwd()
  const env = loadEnv(mode, root)
  parseEnv(env)
  console.log(typeof parseEnv(env).VITE_SOME_KEY)

  return {
    plugins: [vue()],
    resolve: {
      alias,
    },
  }
}
