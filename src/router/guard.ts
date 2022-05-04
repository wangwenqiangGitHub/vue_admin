import { Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}
  public run() {
    // 有next就是空白
    this.router.beforeEach((to, from, next) => {})
    console.log('run..')
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
