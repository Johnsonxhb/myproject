const user = {
  state: {
    login: false, // 登录框状态
    token: '',
    openid: '' // 用户微信open_id
  },
  mutations: {
    SET_TOKEN: (state, newtoken) => {
      state.token = newtoken
      localStorage.setItem('token', newtoken)
    },
    SET_OPENID: (state, openid) => {
      state.openid = openid
      localStorage.setItem('openid', openid)
    },
    SET_LOGIN: (state, loginStatus) => {
      state.login = loginStatus
      localStorage.setItem('login', loginStatus)
    }
  },
  actions: {
    // 获取platId
    // takePlatId ({commit}) {
    //   return new Promise((resolve, reject) => {
    //     Login.platId().then(res => {
    //       if (!res) { // 由于mockjs 不支持自定义状态码只能这样hack
    //         reject('error')
    //       }
    //       console.log('用户登陆平台：' + JSON.stringify(res.obj))
    //       commit('SET_PLATID', res.obj)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}

export default user
