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

function login() {}

export default { info, login }
