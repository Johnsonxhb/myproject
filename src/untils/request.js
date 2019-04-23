import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  const token = store.state.user.token || localStorage.getItem('token')
  if (token) {
    config.headers['token'] = token
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
    const res = response
    if (res.code !== 0) {
      Message({
        message: res.message,
        type: 'error',
        duration: 10 * 1000
      })
      return Promise.reject('error')
    } else {
      return res.obj
    }
  },

  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 10 * 1000
    })
    return Promise.reject(error)
  })

export default service
