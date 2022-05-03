import { http } from '@/plugins/axios'

interface User {
  name: string
  age: number
  avatar: string
}

function info() {
  return http.requst<User>({
    url: 'info',
  })
}
interface LoginInterface {
  token: string
}
function login(data: any) {
  return http.requst<LoginInterface>({
    url: 'login',
    method: 'post',
  })
}

export default { info, login }
