<template>
  <div class="nav-menu">
    <el-menu :router=true
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" :route="{path: '/'}">
        <i class="el-icon-menu"></i>
        <span slot="title">应用管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navMenu: []
      }
    },
    created () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-menu, .el-menu-vertical-demo {
  height: 100%;
}
</style>
