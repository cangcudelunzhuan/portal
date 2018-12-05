<template>
  <div class="navWrap" ref="navWrap">
    <div class="navBg"></div>
    <div class="nav">
      <section class="nav-left">
        <a class="logo" href="index.html"><img src="../../assets/images/logo.svg" alt=""></a>
        <!-- <el-menu class="el-menu-demo languageMenu" mode="horizontal" @select="selectLanguage" >
          <el-submenu index="1">
            <template slot="title">{{language}}</template>
            <el-menu-item index="1-1">{{$t("language.chinese")}}</el-menu-item>

          </el-submenu>
        </el-menu> -->
        <!-- <ul class="nav-link">
          <li  @click="getId(1)">
            <a href="javascript:;">首页</a>
          </li>
          <li @click="getId(2)">
            <a href="javascript:;" >产品</a>
          </li>
          <li @click="go(cloud.appUri)">
            <a href="javascript:;" >云屏</a>
          </li>
          <div class="after" :style="{left:left+'px'}"></div>
        </ul> -->

        <el-menu :default-active="activeIndex" class="top-left-nav" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">产品</template>
            <el-menu-item index="2-1">商情智能</el-menu-item>
            <el-menu-item index="2-2">消费者智能</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">云屏</el-menu-item>
          <el-menu-item index="4">GDMA</el-menu-item>
        </el-menu>
      </section>
      <el-menu  class="el-menu-demo loginMenu" mode="horizontal">
        <div v-if='page === "index"'>
          <el-menu-item index="1">
           <a v-if='loginFlag' @click='loginOut'>{{$t("nav.signUp")}}</a>
          </el-menu-item>
        </div>
        <div v-else>
          <el-menu-item index="1" class="workBench" @click='workBench'>
            <a href='javascript:;'><img src="../../assets/images/workBench.svg" alt="工作台">{{$t("nav.workBench")}}</a>
          </el-menu-item>
          <el-submenu index="2" class="workLogin" v-if='loginFlag'>
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
import { accessLog } from '@/util/tool'

import authApi from '@/api/authApi'
import personalInfoApi from '@/api/personalInfoApi'
import apps from '@/api/apps'

export default {
  name: 'app',
  props: ['page', 'cloudLink', 'navActive'],
  data () {
    return {
      loginFlag: false,
      user: {
        userName: ''
      },
      // 加载提示状态
      loading: {
        active: false,
        text: ''
      },
      language: '中文',
    }
  },
  computed: {
    cloud () {
      return this.cloudLink
    },
    activeIndex () {
      return this.navActive
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
        authApi.LoginSSO('index')
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
        authApi.LoginSSO('work')
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
            'name': res.data.userName,
            'username': res.data.userName,
            'custom': {
              '工号': res.data.empNo
            }
          }
          countlyUserDetail(info)

          // 埋点记录页面访问信息
          let inf = {
            userId: userInfo.empNo,
            serviceId: 1000,
            menuName: (this.page === 'work' ? '工作台' : '首页')
          }
          accessLog(inf)
        } else {
          let data = {
            loginFlag: this.loginFlag
          }
          this.$emit('loginInfo', data)
        }
      })
      .then(()=>{
        authApi.loginForToken()
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
    handleSelect(key, keyPath) {
      let vm = this
      let baseUrl = 'index.html'
      let t = Date.parse(new Date())
      switch (key) {
        case '1':
          location.href = baseUrl
          break
        case '2-1':
          location.href = baseUrl + '?t=' + t + '#/product'
          // vm.$router.push({name: 'product'})
          break
        case '2-2':
          location.href = baseUrl + '?t=' + t + '#/consumer'
          // vm.$router.push({name: 'consumer'})
          break
        case '3':
          window.open(vm.cloud.appUri)
          break
        case '4':
          location.href = baseUrl + '?t=' + t + '#/gdma'
          // vm.$router.push({name: 'gdma'})
          break
      }
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
    },
    go (url) {
      window.open(url)
    },
    getId (id) {
      // this.left = (id - 1) * 76
      this.$emit('tabClick', id)
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
  /* opacity: 0.5; */
}
.hascolor .navBg, .worknav .navBg{
  background: #396ef4;
}
.nav {
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  color: #fff;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  margin-top: -60px;
  max-width: 1128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-left {
  display: flex;
  align-items: center;
  float: left\9;
}
.nav .logo {
  float:left;
  font-size: 38px;
  width: 140px;
  margin-right: 50px
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

.workLogin .el-menu {
    width: 100%!important;
    background: #292c4b!important;
}
.worknav .workLogin .el-menu-item{
	color: #666
}
</style>
<style media="screen">
  .top-left-nav{
    display: flex;
    align-items: center;
  }
  .navWrap .el-menu-item, .navWrap .el-submenu__title{
    font-size: 16px;
    border-bottom:0px
  }
  .navWrap .el-submenu__title i{
    color: #fff
  }
  .top-left-nav .el-menu--horizontal > .el-menu-item.is-active,
  .top-left-nav .el-menu--horizontal > .el-submenu.is-active .el-submenu__title{
    position: relative;
  }
  .top-left-nav .is-active::after{
    position: absolute;
    content: '';
    bottom: 0px;
    left: 0px;
    right: 0;
    margin: auto;
    width: 90%;
    height: 4px;
    border-radius: 4px;
    background: #7FEB17
  }
  .navWrap .el-menu--horizontal .el-submenu>.el-menu{
    /* background: #000; */
    padding:0;
    border-radius: 0px;
    box-shadow: 0px 5px 5px 0 rgba(0,0,0,.1);
  }
  .navWrap .el-submenu>.el-menu .el-menu-item{
    color: #fff;
    font-size: 14px
  }

  .navWrap .el-menu--horizontal > .el-menu-item.is-active,
  .navWrap .el-menu--horizontal > .el-submenu.is-active .el-submenu__title{
    color: #fff
  }
  .navWrap .el-submenu>.el-menu .el-menu-item.is-active{
    font-weight: bold;
  }
  .navWrap .el-submenu>.el-menu .el-menu-item.is-active::after{
    /* height: 0px; */
    opacity: .55;
  }
  .navWrap  .el-menu--horizontal .el-submenu > .el-menu{
    top: 60px
  }
  .navWrap .el-menu--horizontal .el-menu-item:hover,
  .navWrap .el-menu--horizontal .el-submenu .el-menu-item:hover{
    color:#fff
  }
  .navWrap .el-menu--horizontal .el-menu-item:hover:after,
  .navWrap .el-menu--horizontal .el-menu-item:focus:after,
  .navWrap .is-opened .el-submenu__title:after,
  .navWrap .el-menu--horizontal .el-submenu .el-menu-item::after{
    position:absolute;
    content:'';
    width:100%;
    height:100%;
    background-color: #000;
    opacity:0.25;
    left:0;
    top:0;
    z-index:-1;
    border-radius:0
  }
  .navWrap .top-left-nav.el-menu--horizontal .el-menu-item{
    float: left\9;
  }
</style>
