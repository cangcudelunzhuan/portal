<template id="">
  <div class="">
    <div class="content-box brain-content-item overhidden"  aos="fade-up" >
      <div class="brain-title">
        <h1>客群洞察</h1>
        <p>从售前、售中乃至到售后的全用户旅程洞察，提供认证车主、潜客等360度全方位洞察报告</p>
        <p>可视化多维度大数据分析，提供即时更新下载，清晰勾勒行为画像，关注用户群体差异</p>
      </div>
      <div class="step-box clearfix">
        <img src="../../assets/images/consumer/step2.png" alt="" class="step-img" aos="fade-up" >
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
            title: '圈定洞察客群',
            mes: '洞察消费者结构变化、消费族群及品牌用户群',
            state: 1
          },
          {
            title: '根据标签大类360度分析',
            mes: '把握现阶段用户汽车消费趋势',
            state: 1
          },
          {
            title: '可视化洞察报告',
            mes: '帮助品牌客户从宏观角度掌握购车需求变化',
            state: 1
          }
        ]
      }
    }
  }
</script>
