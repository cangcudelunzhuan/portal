<template id="">
  <div class="">
    <Top class="ani" :class="{fixed:topfixed}" :active="active" @getmode="getmode"></Top>
    <List></List>
    <gdmaData class="ani" :active="active"></gdmaData>
    <terminal class="ani" :active="active"></terminal>
    <Intelligence class="ani" :active="active"></Intelligence>
  </div>
</template>
<script type="text/javascript">
  import Top from '@/modules/gdma/top'
  import List from '@/modules/gdma/List'
  import gdmaData from '@/modules/gdma/data'
  import terminal from '@/modules/gdma/terminal'
  import Intelligence from '@/modules/gdma/Intelligence'
  import * as tool from '@/util/tool'
  export default {
    components: {
      Top,
      List,
      gdmaData,
      terminal,
      Intelligence
    },
    data () {
      return {
        active: 0,
        topfixed: false
      }
    },
    inject: ['getNavActive'],
    mounted () {
      require('@/util/aos/aos')
      // 前端埋点
      let vm = this
      vm.getNavActive('4')
      tool.initCountly()
      AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      })
      window.Countly.track_pageview('企业大脑-gdma')
      $(window).scroll(() => {
        vm.scrolls()
      })
    },
    methods: {
      scrolls () {
        let vm = this
        let top = $(window).scrollTop()
        let ani = $('.ani')
        let topfixedHeight = ani.eq(0).height()
        if (top >= topfixedHeight - 80) {
          vm.topfixed = true
        } else {
          vm.topfixed = false
        }
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
      getmode (index) {
        let ani = $('.ani')
        let top = ani.eq(index).offset().top
        $('html,body').animate({scrollTop:top - 100}, 500);
      }
    }
  }
</script>
