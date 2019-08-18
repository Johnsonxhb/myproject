<template>
  <div class="main">
    <div class="banner">
      <img class="response" src="./../../../static/login/images/login_bg.jpg" alt="" srcset="">
    </div>
    <div class="login-wrap">
      <h3>登录</h3>
      <el-form :model="loginForm" status-icon :rules="loginrules" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="username">
          <span slot="label"><img class="icon" src="./../../../static/login/images/icon_mobile.png" alt=""></span>
          <el-input type="text" placeholder="输入你的用户名/手机号" v-model="loginForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <span slot="label"><img class="icon" src="./../../../static/login/images/icon_lock.png" alt=""></span>
          <el-input type="password" placeholder="输入你的密码" v-model="loginForm.pass" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn"  @click="submitForm('loginForm')">登 录</div>
      
    </div>
  </div>
</template>

<script>
import {userLogin} from '@/api/login'
export default {
  name: 'Login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.loginForm.checkPass !== '') {
          this.$refs.loginForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      loginForm: {
        username:'',
        pass: ''
      },
      loginrules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pass: [
          { min: 3, max: 5, message: '密码在 3 到 5 个字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ]     
      }
    }
  },
  methods: {
    login () {
      let param = {
        username: this.loginForm.username,
        password: this.loginForm.pass
      }
      alert(param)
      this.$router.push('/list')
      // userLogin(param).then(res => {
      //   // 登录成功

      // })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }

  }
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(to right,#bbf2f2,#cdd4f6)
}

.response{
  width: 100%;
}

.login-wrap{
  width: 90%;
  min-height: 220px;
  background: #fff;
  border-radius: 5px;
  position: relative;
  padding:10px;
  margin: -30px auto;
}

.login-wrap .icon{
  width: 20px;
  text-align: center;
}

.login-wrap h3{
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 20px 10px;
}

.btn{
  width: 80%;
  position: absolute;
  left:10%;
  bottom:-20px;
  padding:8px;
  background: linear-gradient(to right, #17ead9,#6078ea);
  text-align: center;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
}


/*修改插件样式*/
.login-wrap >>> .el-form-item__label{
  width:50px !important;
}

.login-wrap >>> .el-form-item__content{
  margin-left: 50px !important;
}

.login-wrap >>>  .el-form-item{
  border-bottom: 1px solid #d3dfef;
}


.login-wrap >>> .el-input__inner{
  border: none;
}
</style>
