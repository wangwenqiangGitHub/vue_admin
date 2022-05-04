import { store } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}
  public run() {
    // 有next就是空白
    this.router.beforeEach((to, from) => {
      let token = store.get('token')?.token
      if (this.isLogin(to, token) == false) {
        return { name: 'login' }
      }
      if (this.isGuest(to, token) == false) {
        return from
      }
    })
    // 对登录的路由进行验证
  }

  private isGuest(router: RouteLocationNormalized, token: any) {
    return Boolean(!router.meta.guest || (router.meta.guest && !token))
  }

  private isLogin(router: RouteLocationNormalized, token: any) {
    return Boolean(!router.meta.auth || (router.meta.auth && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
