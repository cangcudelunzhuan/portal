<template id="">
  <div class="content-box">
    <ul class="gdmalistbox">
      <li v-for="item in list">
        <img :src="item.iconUrl" alt="" class="imgs">
        <p>{{item.title}}</p>
        <img src="static/images/gdma/shadow.png" alt="" class="shadowimg">
        <!-- <i class="shadows"></i> -->
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        list: [
          {
            iconUrl: 'static/images/gdma/icon1.png',
            title: '无限视觉分析'
          },
          {
            iconUrl: 'static/images/gdma/icon2.png',
            title: '智能图标推荐'
          },
          {
            iconUrl: 'static/images/gdma/icon3.png',
            title: '更多适应模式'
          },
          {
            iconUrl: 'static/images/gdma/icon4.png',
            title: '性能大幅提升'
          }
        ]
      }
    }
  }
</script>
<style media="screen">
  .gdmalistbox li{
    display: inline-block;
    padding: 88px 0;
    width: 25%;
    text-align: center;
    position: relative;
  }
  .imgs{
    width: 88px;
    height: 88px;
    margin: auto;
  }
  .shadows{
    position: relative;
    width: 40px;
    display: inline-block;
    margin: auto;
  }
  .shadowimg{
    position: absolute;
    top: 180px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 130px;
  }
  .shadows::after{
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    /* -moz-box-shadow:0px -60px 10px #ddd;
    -webkit-box-shadow:0px -60px 10px #ddd;
    box-shadow:0px -60px 10px #ddd; */
  }
  .gdmalistbox li p {
    font-size: 16px;
    line-height: 16px;
    margin-top: 48px;
    color: #262626;
    font-weight: 500
  }
</style>
