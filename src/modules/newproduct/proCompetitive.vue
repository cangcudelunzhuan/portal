<template id="">
  <div class="">
    <div class="content-box brain-content-item overhidden"  aos="fade-up" >
      <div class="brain-title" >
        <h1>竟品分析</h1>
        <p>聚焦对标重点竞品车型，关注产品正负面口碑，实时关注各大媒体渠道资讯、论坛、问答内容 </p>
        <p>多维大数据分析，及时发现、追踪、了解舆情，助力产品优化，帮助产品创新，提升产品口碑</p>
      </div>
      <div class="step-box clearfix">
        <img src="../../assets/images/proTop/competitive.png" alt="" class="step-img" aos="fade-up" >
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
            title: '重点竞品车型聚焦对比',
            mes: '聚焦竞品车型，直击竞品舆情',
            state: 1
          },
          {
            title: '商情智能自动对比正负面',
            mes: '灵活可配，监测竞品市场活动趋势',
            state: 1
          },
          {
            title: '自动配置竞品活动监测',
            mes: '随时配置，了解吉利与竞品正负面口碑',
            state: 1
          },
          {
            title: '及时发现、追踪、了解舆情',
            mes: '舆情可追溯，实时追踪',
            state: 1
          }
        ]
      }
    }
  }
</script>
