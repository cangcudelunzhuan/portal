<template>
  <div class="navWrap" ref="navWrap">
    <div class="navBg"></div>
    <div class="nav">
      <a class="logo" href="index.html"><img src="../../assets/images/logo.svg" alt=""></a>
      <el-menu :default-active="activeIndex2" class="el-menu-demo languageMenu" mode="horizontal" @select="selectLanguage" >
        <el-submenu index="1">
          <template slot="title">{{language}}</template>
          <el-menu-item index="1-1">{{$t("language.chinese")}}</el-menu-item>
          <!--<el-menu-item index="1-2">{{$t("language.english")}}</el-menu-item>-->
        </el-submenu>
      </el-menu>
      <el-menu :default-active="activeIndex" class="el-menu-demo loginMenu" mode="horizontal">
        <div v-if='page'>
          <el-menu-item index="1">
           <a v-if='loginFlag' @click='loginOut'>{{$t("nav.signUp")}}</a>
          </el-menu-item>
        </div>
        <div v-else>
          <el-menu-item index="1" class="workBench" @click='workBench'>
            <a href='javascript:;'><img src="../../assets/images/workBench.svg" alt="工作台">{{$t("nav.workBench")}}</a>
          </el-menu-item>
          <el-submenu index="2" v-if='loginFlag'>
            <template slot="title">{{user.userName}}</template>
            <el-menu-item index="2-1" @click='loginOut'>{{$t("nav.signUp")}}</el-menu-item>
          </el-submenu>
          <el-menu-item class='loginActive' index="2" v-else>
            <a @click='login'>{{$t("nav.signIn")}}</a>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { countlyLogout, countlyUserDetail } from '@/util/tool'

import authApi from '@/api/authApi'
import personalInfoApi from '@/api/personalInfoApi'
import apps from '@/api/apps'

export default {
  name: 'app',
  props: ['page'],
  data () {
    return {
      activeIndex2: '1',
      activeIndex: '1',
      loginFlag: false,
      user: {
        userName: ''
      },
      // 加载提示状态
      loading: {
        active: false,
        text: ''
      },
      language: '中文'
    }
  },
  created () {
    this.getPersonalInfo()
  },
  mounted () {
    if (this.page === 'work') {
      this.$refs.navWrap.style.position = 'relative'
      this.$refs.navWrap.childNodes[0].style.opacity = '1'
    }
    // 获取localStorage中的语言
    let language = window.localStorage.getItem('language') ? window.localStorage.getItem('language') : '中文'
    if (language === 'English') {
      this.$i18n.locale = 'EN'
    } else {
      this.$i18n.locale = 'CN'
    }
    this.language = language
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
    workBench () {
      if (this.loginFlag) {
        window.location.href = 'work.html'
      } else {
        authApi.LoginSSOW()
        .then(res => {
          if (res.code === 'user-not-login') {
            window.location.href = res.data
          }
        })
      }
    },
    getPersonalInfo () {
      personalInfoApi.personalInfo()
      .then(res => {
        if (res.code === 'success') {
          this.loginFlag = true
          this.user.userName = res.data.userName
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
          this.$emit('loginInfo', data)
          // 埋点用户画像
          let info = {
            'name': res.data.empNo,
            'username': res.data.userName
          }
          countlyUserDetail(info)
        } else {
          let data = {
            loginFlag: this.loginFlag
          }
          this.$emit('loginInfo', data)
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
    },
    selectLanguage (key, keyPath) {
      if (key === '1-2') {
        this.language = 'English'
        this.$i18n.locale = 'EN'
      } else {
        this.language = '中文'
        this.$i18n.locale = 'CN'
      }
      window.localStorage.setItem('language', this.language)
    },
    // 本页显示加载进度条
    showLoading: function (text) {
      this.loading = {
        active: true,
        text: text
      }
    },
    // 本页隐藏加载进度条
    hideLoading: function () {
      this.loading = {
        active: false,
        text: ''
      }
    }
  }
}
</script>

<style scoped>
.navWrap {
  width: 100%;
  position: fixed;
  z-index: 99
}
.navBg {
  height: 60px;
  background: #292C4B;
  opacity: 0.5;
}
.nav {
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  color: #fff;
  padding: 0 24px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  margin-top: -60px;
  max-width: 1360px;
}
.nav > .logo {
  float:left;
  font-size: 38px;
}
.nav > .logo img {
  border: none;
  height: 30px;
}
.el-menu--horizontal .el-menu-item a>img {
  display: inline-block;
  margin-right: 5px;
  margin-top: -3px;
  border: none;
}

.el-menu--horizontal .el-menu-item:hover.workBench {
  background: linear-gradient(0deg, #44486C 0%, #292C4B 100%, #11153B 100%);
  font-weight: normal
}
.el-menu--horizontal .el-menu-item:hover.loginActive {
  color: #108CEE;
}
</style>
