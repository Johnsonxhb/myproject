import request from '@/untils/request'

export function userLogin (data) {
  return request({
    url: '/api/points/login/doLogin',
    method: 'post',
    params: data
  })
}
