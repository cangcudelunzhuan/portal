<template>
  <div class="top-bar">
    <div class="title">吉利数据管理平台</div>
    <!--<div class="userpic"></div>-->
    <!--<div class="username" v-text="userName"></div>-->
    <el-dropdown class="dropdown" @command="handleCommand">
      <span class="el-dropdown-link">
        <div class="username" v-text="userName"></div>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="e">
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import * as tool from '@/util/tool' 
  export default {
    data () {
      return {
        userName: ''
      }
    },
    created () {
      this.userName = window.sessionStorage.getItem('userName')
    },
    methods: {
      // 登出操作
      handleCommand (command) {
        tool.countlyLogout()
        window.sessionStorage.clear()
        window.location = 'login.html'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dropdown.el-dropdown {
  display: block;
  position: absolute;
  right: 26px;
  top: 0;
}

.title {
  position: absolute;
  top: 0;
  left: 26px;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
}

/*.userpic {*/
  /*position: absolute;*/
  /*top: 12px;*/
  /*right: 110px;*/
  /*width: 36px;*/
  /*height: 36px;*/
  /*border-radius: 50%;*/
  /*background: #FFFFFF;*/
/*}*/

.username {
  /*position: absolute;*/
  /*top: 0;*/
  /*right: 26px;*/
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  color: #FFFFFF;
  cursor: pointer;
}

</style>
