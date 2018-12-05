<template id="">
  <div class="technology-content">
    <div class="content-box brain-content-item overhidden"  aos="fade-up" >
      <div class="brain-title" >
        <h1>关联分析</h1>
        <p>基于画像数据，通过关联规则计算，由A联想B，迅速圈定用户，用数据规则关联提取用户特征</p>
        <p>了解吉利用户，并且为更好的服务与吉利用户，利于认识到用户画像所具有的极高价值性</p>
      </div>
      <div class="step-box clearfix">
        <img src="../../assets/images/consumer/step3.png" alt="" class="step-img" aos="fade-up" >
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
            mes: '随机圈定洞察客群',
            state: 1
          },
          {
            title: '关联多重维度',
            mes: '不同维度关联分析，找出用户行为逻辑',
            state: 1
          },
          {
            title: '大数据精细化分析',
            mes: '精准定位产品体验「怒点」',
            state: 1
          },
          {
            title: '及时处理异常',
            mes: '数据深入分析',
            state: 1
          }
        ]
      }
    }
  }
</script>
