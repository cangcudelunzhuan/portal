<template id="">
  <div class="technology-content">
    <div class="content-box brain-content-item overhidden"  aos="fade-up" >
      <div class="brain-title" >
        <h1>商业智能</h1>
        <p>只需动动手指，就能解决复杂的问题。你可还可以整合来自不同数据来源的数据，创建极具吸引力的数据可视化内容，并运行即席报告</p>
      </div>
      <div class="step-box clearfix">
        <img src="static/images/gdma/intell.png" alt="" class="step-img" aos="fade-up" >
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
            title: '构建业务应用',
            mes: '基于强大的数据源，数据集市和图标功能，可构建各种数据分析看板',
            state: 1
          },
          {
            title: '全局业务分析',
            mes: '对各业务板块进行主题数据分析',
            state: 1
          },
          {
            title: '企业报表平台',
            mes: '一款简单、高效、智能的报表工具，用以快速搭建的企业级Web报表平台',
            state: 1
          }
        ]
      }
    }
  }
</script>
