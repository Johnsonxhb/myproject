// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios' // axios
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './lang' // Internationalization

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
