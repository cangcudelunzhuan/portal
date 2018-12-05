<template id="">
  <div class="">
    <top class="ani" :class="{fixed:topfixed}"  :active="active" @getmode="getmode"></top>
    <portrait class="ani small-content" :active="active"></portrait>
    <relation class="ani small-content" :active="active"></relation>
    <Competitive class="ani small-content" :active="active"></Competitive>
  </div>
</template>
<script type="text/javascript">
  import top from '@/modules/consumer/top'
  import portrait from '@/modules/consumer/portrait'
  import relation from '@/modules/consumer/relation'
  import Competitive from '@/modules/consumer/Competitive'
  import * as tool from '@/util/tool'
  export default {
    components: {
      top,
      portrait,
      relation,
      Competitive
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
      vm.getNavActive('2-2')
      tool.initCountly()
      AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      })
      window.Countly.track_pageview('企业大脑-消费者智能')
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
