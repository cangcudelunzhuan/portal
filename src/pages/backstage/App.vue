<template>
  <div id="app">
    <el-row :span="24" class="top-bar">
      <TopBar></TopBar>
    </el-row>
    <el-row :span="24" class="bottom">
      <el-col :span="3" class="bottom-col">
        <NavMenu></NavMenu>
      </el-col>
      <el-col :span="21" class="bottom-col">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TopBar from '@/modules/backstage/TopBar'
  import NavMenu from '@/modules/backstage/NavMenu'

  export default {
    name: 'index',
    components: { TopBar, NavMenu },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  padding-top: 60px;
  box-sizing: border-box;
  font-size: 16px;
}

.top-bar {
  position: absolute!important;
  width: 100%;
  height:60px;
  left: 0;
  top: 0;
  background: #343d50;
  color: #FFFFFF;
}

.bottom {
  height: 100%;
}

.bottom-col {
  height: 100%;
}

.el-menu-item {
  height: 40px;
  line-height: 40px;
}
</style>
