<template>
  <div>
    登录页
  </div>
</template>

<script>
import {userLogin} from '@/api/login'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      let param = {
        username: this.username,
        password: this.password
      }
      userLogin(param).then(res => {
        // 登录成功

      })
    }
  }
}
</script>

<style>

</style>
