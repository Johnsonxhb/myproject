import request from '@/untils/request'

export function userLogin (data) {
  return request({
    url: '/api/points/login/doLogin',
    method: 'post',
    params: data
  })
}

export function getPointsStatistics(data) {
  return request({
    url: '/api/points/mobilepoints/getPointsStatistics',
    method: 'get',
    params: data
  })
}


