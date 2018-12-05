<template id="">
  <div class="content-box brain-content-item overhidden"  aos="fade-up" >
    <div class="brain-title" >
      <h1>用户画像标签</h1>
      <p>搭建并提供可视化操作的标签生命周期管理平台，构建人群属性特征标签模型及管控标签生产流程</p>
      <p>精准划分用户群体，还原用户路径，勾勒全画像，分析各项指标，洞察群体特点，制定精细化方案</p>
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
      <img src="../../assets/images/consumer/step1.png" alt="" class="step-img" aos="fade-up" >
      <step :list="steplist" aos="fade-up" class="big"></step>
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
            title: '全面数据采集',
            iconUrl: 'static/images/product/p-01.png'
          },
          {
            title: '潜客、吉利用户标签模型',
            iconUrl: 'static/images/product/p-02.png'
          },
          {
            title: '圈定洞察客群',
            iconUrl: 'static/images/product/p-03.png'
          },
          {
            title: '深入场景分析',
            iconUrl: 'static/images/product/p-04.png'
          },
          {
            title: '精准触达用户',
            iconUrl: 'static/images/product/p-05.png'
          }
        ],
        steplist: [
          {
            title: '身份管理',
            mes: '系统圈定60+用户标签，精准划分不同用户群体',
            state: 1
          },
          {
            title: '人群细分',
            mes: '分析不同群体的各项行为指标，洞察用户群体核心特点',
            state: 1
          },
          {
            title: '用数据了解用户',
            mes: '勾勒用户行为画像，根据不同特点制定精细化运营方案',
            state: 1
          },
          {
            title: '千人千面个性推荐',
            mes: '保存客户群体，精准触达用户',
            state: 1
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .step-img{
    transform: translateX(40px);
  }
</style>
