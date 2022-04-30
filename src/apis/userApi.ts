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
function login() {
  return http.requst<LoginInterface>({
    url: 'login',
  })
}

export default { info, login }
