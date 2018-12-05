<template>
  <div class="login">
    <LoginForm class="loginform"></LoginForm>
    <div class="copyright">Copyright © 2009-2014 evun.cn,inc易云科技有限公司版权所有</div>
  </div>
</template>

<script>
  import LoginForm from '@/modules/login/LoginForm'

  export default {
    components: { LoginForm },
    name: 'login',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  height: 100%;
  position: relative;
  background: url(../../assets/images/login_bg.jpg) no-repeat;
  background-size: cover;
}
.ico {
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
}
.logo {
  top: 50%;
  left: 50%;
  margin-top: -210px;
  margin-left: -94px;
  width: 188px;
  height: 23px;
}
.copyright {
  position: absolute;
  bottom: 30px;
  width: 100%;
  font-size: 12px;
  color: #fff;
  text-align: center;
}
.loginform {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -162px;
  margin-left: -172px;
}
</style>
