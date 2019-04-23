import router from './router'
import store from './store'

// const whiteList = ['/login', '/register'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  if (!store.getters.token) {
    console.log('认证已过期')
    // 跳转登录页面
  } else {
    next()
  }
})

router.afterEach((to, from) => {

})
