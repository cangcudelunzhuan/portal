<template>
  <div id="app">
      <!-- <Nav @loginInfo="loginInfo"></Nav> -->
      <Navs @loginInfo="loginInfo" @tabClick="tabClick" :class="{hascolor:has}"
      :cloudLink="cloudLink"  :navActive="navActive"></Navs>
      <router-view></router-view>
      <Foot></Foot>
  </div>
</template>

<script>
  import authApi from '@/api/authApi'
  import Navs from '@/modules/index/Nav'
  import Nav from '@/modules/newindex/nav'
  import Foot from '@/modules/index/Foot'
  import $ from 'jquery'
  import * as tool from '@/util/tool'
  export default {
    name: 'index',
    components: {Navs, Nav, Foot},
    provide () {
      return {
        getNavActive: this.getNavActive
      }
    },
    data () {
      return {
        show: 1,
        cloudLink: {
          appUri: 'http://data.geely.com/cloudbigscreen/#/'
        },
        navActive: '1',
        has: false
      }
    },
    mounted () {
      tool.initCountly()
      window.Countly.track_pageview('企业大脑-首页')
      $(window).scroll(() => {
        let top = $(window).scrollTop()
        if (top > 80) {
          this.has = true
        } else {
          this.has = false
        }
      })
    },
    methods: {
      loginInfo (data) {
        if(data.userInfo === undefined){
          return false
        }
        let empNo = data.userInfo.empNo
        let vm = this
        if (empNo) {
          authApi.getApps(empNo).then(res =>{
            tool.countlyLogin()
            let added = res.data.added
            let proLIST = vm.$store.getters.prdList
            proLIST.map((item, i) => {
              added.map((aitem, x) => {
                if (item.code === aitem.code){
                  let res = item
                  res.appUri = aitem.appUri
                  proLIST.splice(i, 1, res)
                }
                if (aitem.code === '000015') {
                  vm.cloudLink = aitem
                }
              })
            })
            vm.$store.commit('PRDLIST', {prdList: proLIST})
          })
        }
      },
      getNavActive (index) {
        this.navActive = index
      },
      tabClick (id) {
        this.show = id
        if(id === 1) {
          this.$router.push({name: 'index'})
        } else if (id === 2) {
          this.$router.push({name: 'product'})
        }
      }
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
