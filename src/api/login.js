import request from '@/untils/request'

export function userLogin (data) {
  return request({
    url: '/api/login',
    method: 'post',
    params: data
  })
}
