<template id="">
  <div class="nav-box">
    <div class="content-box nav-content">
        <div class="nav-left">
          <a class="logo" href="index.html"><img src="../../assets/images/logo.svg" alt=""></a>
          <ul class="nav-link">
            <li class="active">
              <a href="javascript:;">首页</a>
            </li>
            <li>
              <a href="javascript:;">产品</a>
            </li>
            <li>
              <a href="javascript:;">云屏</a>
            </li>
          </ul>
        </div>
        <div class="nav-right">
          <div v-if="user.userName" class="hasinfo-box">
            <span>{{user.userName}}</span>
            <span @click="loginOut">退出</span>
          </div>
          <a href="javascript:;" @click="login" v-else>登陆</a>
        </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { countlyLogout, countlyUserDetail } from '@/util/tool'
import authApi from '@/api/authApi'
import personalInfoApi from '@/api/personalInfoApi'
import apps from '@/api/apps'
export default {
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.getPersonalInfo()
  },
  methods: {
    login () {
      if (!this.loginFlag) {
        authApi.LoginSSO()
        .then(res => {
          if (res.code === 'user-not-login') {
            window.location.href = res.data
          }
        })
        .catch(() => {
        })
      }
    },
    getPersonalInfo () {
      let vm = this
      personalInfoApi.personalInfo()
      .then(res => {
        if (res.code === 'success') {
          vm.loginFlag = true
          vm.user = res.data
          const userInfo = {
            empNo: res.data.empNo,
            userName: res.data.userName,
            userHead: res.data.userHead,
            userJob: res.data.userJob,
            userDepartment: res.data.userDepartment
          }
          let data = {
            loginFlag: this.loginFlag,
            userInfo: userInfo
          }
          vm.$emit('loginInfo', data)
          // 埋点用户画像
          let info = {
            'name': res.data.userName,
            'username': res.data.userName,
            'custom': {
              '工号':　res.data.empNo
            }
          }
          countlyUserDetail(info)
        } else {
          let data = {
            loginFlag: vm.loginFlag
          }
          vm.$emit('loginInfo', data)
        }
      })
      .catch(() => {
      })
    },
    loginOut () {
      apps.LoginOut()
      .then(res => {
        if (res.code === 'success') {
          sessionStorage.removeItem('userInfo')
          this.loginFlag = false
          // 前端埋点，登出记录
          countlyLogout()
          window.location.href = 'index.html'
        }
      })
    }
  }
}
</script>
<style media="screen">
.hasinfo-box>span + span {
  margin-left: 10px
}
.hasinfo-box>span:nth-child(2){
  cursor: pointer;
}
</style>
