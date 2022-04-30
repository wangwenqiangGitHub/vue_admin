import Axios from './Axios'

const http = new Axios({
  baseURL: '/api',
  timeout: 1000000,
  headers: {},
})

export { http }
