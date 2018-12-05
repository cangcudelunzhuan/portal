<template id="">
  <div class="">
    <div class="content-box brain-content-item overhidden"  aos="fade-up" >
      <div class="brain-title" >
        <h1>多终端支持，随时随地掌握数据</h1>
        <p>快速搭建企业专属的移动数据应用，提升办公效率，多终端随时分享</p>
      </div>
      <div class="step-box clearfix">
        <img src="static/images/gdma/term.png" alt="" class="step-img" aos="fade-up" >
        <step :list="steplist" aos="fade-up" class="big"></step>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import step from '@/modules/step/index.vue'
  export default {
    components: {
      step
    },
    data () {
      return {
        steplist: [
          {
            title: '移动数据分析',
            mes: '快速搭建企业专属的移动数据应用，提升办公效率。',
            state: 1
          },
          {
            title: '电脑Web端',
            mes: '适合进行数据分析，制作和管理报告',
            state: 1
          },
          {
            title: '手机/iPad移动端',
            mes: '适合进行随时随地查看报告，掌握公司实时数据',
            state: 1
          }
        ]
      }
    }
  }
</script>
