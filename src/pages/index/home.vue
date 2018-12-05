<template id="">
  <div class="">
    <!-- <Banner class="ani" :active="active"></Banner> -->
    <banner></banner>
    <Brain class="ani" :active="active"></Brain>
    <Technology class="ani" :active="active" ></Technology>
    <Product :linkList="proLIST" class="ani" :active="active"></Product>
  </div>
</template>
<script type="text/javascript">
// import Banner from '@/modules/newindex/Banner'
import banner from '@/modules/banner/index'
import Brain from '@/modules/newindex/Brain'
import Technology from '@/modules/newindex/Technology'
import Product from '@/modules/newindex/Product'
import $ from 'jquery'
import * as tool from '@/util/tool'
export default {
  name: 'index',
  inject: ['getNavActive'],
  components: {
    // Banner,
    banner,
    Brain,
    Product,
    Technology
  },
  data () {
    return {
      active: 0
    }
  },
  computed: {
    proLIST () {
      return this.$store.getters.prdList
    }
  },
  mounted () {
    require('@/util/aos/aos')
    // 前端埋点
    let vm = this
    vm.getNavActive('1')
    tool.initCountly()
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    })
    window.Countly.track_pageview('企业大脑-首页')
    $(window).scroll(() => {
      vm.scrolls()
    })
  },
  methods: {
    scrolls () {
      let vm = this
      let top = $(window).scrollTop()
      let ani = $('.ani')
      ani.each((i, item) => {
        let thisTop = $(item).offset().top
        let xh = $(window).height()/3
        // let fh = thisTop - (top - xh)
        let ff = top + 200 - thisTop
        if (ff > 0) {
          vm.active = i
        }
      })
    },
    tabClick (id) {
      this.show = id
    }
  }
}
</script>
