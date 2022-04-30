import { MockMethod } from 'vite-plugin-mock'
// 采用mock模拟后台数据
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请示成功',
        type: 'success',
        result: {
          name: 'test name',
          age: 18,
          avatar: '/avatar/wwq.jpg',
        },
      }
    },
  },
] as MockMethod[]
