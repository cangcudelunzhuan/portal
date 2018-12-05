<template id="">
  <div class="content-box brain-content-item overhidden"  aos="fade-up" >
    <div class="brain-title">
      <h1>网络负面监控</h1>
      <p>监测多方媒体来源，7*24小时网络负面监控，抓取负面舆论信息，自动触发C3预警紧急推送</p>
      <p>完美利用大数据算法应用，精准定位用户信息，及时控制负面舆论扩大化，降低吉利品牌影响</p>
    </div>
    <section class="arrow">
      <i class="iconfont" aos="fade-up">&#xe6dc;</i>
      <i class="iconfont" aos="fade-up">&#xe6db;</i>
      <i class="iconfont" aos="fade-up">&#xe6dc;</i>
      <i class="iconfont" aos="fade-up">&#xe6db;</i>
    </section>
    <ul class="has-dropbox clearfix" aos="fade-up">
      <li v-for="(item, index) in weblist">
        <p>{{'0' + (index + 1) +item.title}}</p>
        <img :src="item.iconUrl" alt="" class="drop-icon">
        <img src="../../assets/images/proTop/under-drop.png" class="under-drop" alt="">
      </li>
    </ul>
    <div class="step-box clearfix">
      <img src="../../assets/images/proTop/mac.png" alt="" class="step-img" aos="fade-up" >
      <step :list="steplist" aos="fade-up" class="small"></step>
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
        weblist: [
          {
            title: '抓住网络负面舆论',
            iconUrl: 'static/images/product/p-01.png'
          },
          {
            title: '商情智能自动分析',
            iconUrl: 'static/images/product/p-02.png'
          },
          {
            title: '大数据搜索用户信息',
            iconUrl: 'static/images/product/p-03.png'
          },
          {
            title: '分派人员处理',
            iconUrl: 'static/images/product/p-04.png'
          },
          {
            title: '负面舆论事件成功处理',
            iconUrl: 'static/images/product/p-05.png'
          }
        ],
        steplist: [
          {
            title: '7月28日 9:28分',
            mes: '用户在汽车之家发布负面帖',
            state: 1
          },
          {
            title: '7月28日 10:35分',
            mes: '商情智能已自动抓取此负面帖',
            state: 1
          },
          {
            title: '7月28日 10:35分',
            mes: '春晓基地开始人工寻找用户未果',
            state: 1
          },
          {
            title: '7月28日 16:06分',
            mes: '春晓基地尝试使用商情智能',
            state: 1
          },
          {
            title: '7月28日 16:07分',
            mes: '大数据计算匹配用户信息',
            state: 1
          },
          {
            title: '7月28日 16:15分',
            mes: '联系上用户并确认用户信息全匹配',
            state: 1
          }
        ]
      }
    }
  }
</script>
