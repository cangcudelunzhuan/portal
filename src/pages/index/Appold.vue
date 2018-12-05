<template>
  <div id="app">
      <Nav></Nav>
      <Banner></Banner> 
      <Product></Product>
      <Foot></Foot>
  </div>
</template>

<script>
  import Nav from '@/modules/index/Nav'
  import Banner from '@/modules/index/Banner'
  import Product from '@/modules/index/Product'
  import Foot from '@/modules/index/Foot'

  import * as tool from '@/util/tool'
  export default {
    name: 'index',
    components: { Nav, Banner, Product, Foot },
    data () {
      return {
      }
    },
    mounted () {
      // 前端埋点
      tool.initCountly()
      window.Countly.track_pageview('企业大脑-首页')
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
  text-align: center;
  color: #2c3e50;
  height: 100%;
  font-family: "PingFang SC";
}
</style>