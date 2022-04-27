//类型声明文件,由于env，没有类型提示，增加这个文件
// 对环境变量增加类型声明文件

interface ViteEnv {
  VITE_SOME_KEY: number
  VITE_ROUTE_AUTOLOAD: boolean
  VITE_API_URL: string
}
