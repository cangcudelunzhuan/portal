<template id="">
  <div class="">
    <proTop class="ani" :class="{fixed:topfixed}" :active="active" @getmode="getmode"></proTop>
    <proWeb class="ani small-content" :active="active"></proWeb>
    <proPrice class="ani small-content" :active="active"></proPrice>
    <proCompetitive class="ani small-content" :active="active"></proCompetitive>
  </div>
</template>
<script type="text/javascript">
  import proTop from '@/modules/newproduct/proTop'
  import proWeb from '@/modules/newproduct/proWeb'
  import proPrice from '@/modules/newproduct/proPrice'
  import proCompetitive from '@/modules/newproduct/proCompetitive'
  import * as tool from '@/util/tool'
  export default {
    components: {
      proTop,
      proWeb,
      proPrice,
      proCompetitive
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
      vm.getNavActive('2-1')
      tool.initCountly()
      AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      })
      window.Countly.track_pageview('企业大脑-商情智能')
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
