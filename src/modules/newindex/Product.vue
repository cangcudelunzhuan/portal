<template id="">
  <div class="producut-back" aos="fade-up">
    <div class="content-box brain-content-item" aos="fade-up" >
      <div class="brain-title product-title">
        <h1>我们的PRD</h1>
        <!-- <p>业务数据化\数据资产化\资产价值化</p> -->
      </div>
      <ul class="prd-content clearfix" aos="fade-up">
        <li v-for="(item, index) in list">
          <div class="probubble" :id="'probubble'+ index">
          </div>
          <img :src="item.url" alt="" class="prd-content-itemback">
          <section class="default-state">
            <h1>{{item.title}}</h1>
            <p class="enTitle">{{item.Entitle}}</p>
            <article class="innerbox">
              <p v-for="p in item.inner">{{p}}</p>
              <button type="button" name="button" class="experience-button" @click="godetail(item.appUri)">查看详情</button>
            </article>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
  import bubble from '@/util/bubble'
  export default {
    props: ['linkList', 'active'],
    computed: {
      list () {
        return this.linkList
      },
      ac () {
        return this.active
      }
    },
    data () {
      return {
      }
    },
    mounted () {
      for (let i = 0; i <= 3; i++) {
        bubble.generateBubbles('probubble' + i)
      }

    },
    methods: {
      godetail (appUri) {
        window.open(appUri)
      }
    }
  }
</script>
<style media="screen">
  .producut-back{
    background: url('../../assets/images/brain-product-back.png') #1B42A0 top center no-repeat;
    width: 100%;
    height: 759px;
    min-width: 1128px;
    opacity: 0
  }
  .product-title h1, .brain-title.product-title p{
    color: #fff
  }
  .prd-content{
    display: flex;
    position:absolute;
    width: 1132px\0;
    left: 0;
    top: 250px;
  }
  .prd-content>li{
    cursor: pointer;
    position: relative;
    width: 282px;
    height: 408px;
    overflow: hidden;
    z-index: 11;
    float: left\9
  }
  .prd-content-itemback{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1
  }
  .default-state{
    color: #fff;
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    flex-direction: column;
    margin-top: 240px;
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
  }
  .default-state h1{
    font-size: 24px;
    font-weight: 400;
    margin-top: 30px
  }
  .default-state p{
    font-size: 16px;
    margin-top: 20px
  }
  .enTitle{
    opacity: 0.6
  }
  .prd-content li:nth-child(1){
    border-radius: 16px 0 0 16px
  }
  .prd-content li:nth-child(4){
    border-radius: 0px 16px 16px 0
  }
  .innerbox{
    margin-top: 65px;
    margin-top: 75px\0;
    margin-top: 105px\9
  }
  .innerbox p {
    text-align: center;
    font-size: 14px;
    margin: 0 auto;
  }
  .innerbox p + p{
    margin-top: 12px
  }
  .prd-content>li:hover .default-state{
    transform: translateY(-240px);
    background: #396ef4;
    opacity: 0.9;
    padding-top: 30px
  }
  .prd-content>li:hover .default-state .innerbox{
    margin-top: 30px
  }
  .innerbox .experience-button{
    margin-top: 30px;
    -moz-box-shadow:0px 6px 60px #1c3f91;
    -webkit-box-shadow:0px 6px 60px #1c3f91;
    box-shadow:0px 6px 60px #1c3f91;
  }
</style>
