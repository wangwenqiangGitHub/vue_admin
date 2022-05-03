import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'
import '@/styles/global.scss'

async function boorstrap() {
  const app = createApp(App)
  setupRouter(app)

  setupPlugins(app)
  // 路由都处理好之后再挂载组件
  await router.isReady()
  app.mount('#app')
}
// const app = createApp(App)
// setupRouter(app)
// app.use(router)
// app.mount('#app')
boorstrap()
