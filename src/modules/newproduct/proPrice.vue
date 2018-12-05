<template id="">
  <div class="technology-content">
    <div class="content-box brain-content-item overhidden"  aos="fade-up" >
      <div class="brain-title" >
        <h1>价格监测</h1>
        <p>吉利全车系车型，全国经销商报价数据全监控，迅速发现价格异常，自动触发c3异常报价简报</p>
        <p>可视化平台预警异常经销商定位信息，自动设置价格区间、随时查询经销商授权车型</p>
      </div>
      <div class="step-box clearfix">
        <img src="../../assets/images/proTop/price-img.png" alt="" class="step-img" aos="fade-up" >
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
            title: '自动监测吉利市场',
            mes: '监控全国经销商',
            state: 1
          },
          {
            title: '商情智能生成异常简报',
            mes: '一键生成简报',
            state: 1
          },
          {
            title: 'C3预警消息推送',
            mes: '同步消息推送',
            state: 1
          },
          {
            title: '及时处理异常报价',
            mes: '迅速响应处理',
            state: 1
          }
        ]
      }
    }
  }
</script>
