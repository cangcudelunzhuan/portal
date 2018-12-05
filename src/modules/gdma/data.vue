<template id="">
  <div class="technology-content">
    <div class="content-box brain-content-item overhidden"  aos="fade-up" >
      <div class="brain-title" >
        <h1>强大数据准备功能</h1>
        <p>轻松整合多源数据，形成全局数据视野，实现企业数据化智慧运营。</p>
      </div>
      <div class="step-box clearfix">
        <img src="static/images/gdma/data.png" alt="" class="step-img" aos="fade-up" >
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
            title: '全面清晰度数据掌控',
            mes: '大面积数据预览区域，更易了解数据内容',
            state: 1
          },
          {
            title: '简单高效数据配置',
            mes: '可自动对新分析表建立关联，自动触发数据更新',
            state: 1
          },
          {
            title: '强大友好数据处理',
            mes: '用户可以对自己的数据进行任意处理，获取想要数据',
            state: 1
          }
        ]
      }
    }
  }
</script>
