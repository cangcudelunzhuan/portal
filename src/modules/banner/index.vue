<template id="">
  <div class="">
    <el-carousel  :autoplay="true"
    class="carouselbox" height="580px" :interval="interval">
      <el-carousel-item v-for="item in componentData" :key="item">
        <router-link :to="item" v-if="item!=='index'">
          <component :is="item"></component>
        </router-link>
        <component :is="item"  v-else></component>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script type="text/javascript">
  // import index from '@/modules/newindex/Banner'
  import product from '@/modules/newproduct/proTop'
  // import consumer from '@/modules/consumer/top'
  import gdma from '@/modules/gdma/top'
  import consumer from '@/modules/newindex/Banner'
  export default {
    components: {
      // index,
      gdma,
      product,
      consumer,
    },
    data () {
      return {
        componentData: [
          // 'index',
          'gdma',
          'consumer',
          'product'
        ],
        interval: 5000
      }
    },
    methods: {
    }
  }
</script>
<style media="screen">
  .carouselbox{
    /* padding-top: 62px; */
    /* background: #396ef4; */
    width: 100%;
    overflow: hidden;
    min-width: 1128px;
  }
  .carouselbox .banner-content{
    padding-top: 0px
  }
  .carouselbox .pronav-box-back{
    display: none;
  }
  .carouselbox .el-carousel__indicators{
    bottom:20px
  }
  .carouselbox .el-carousel__button{
    border-radius:10px
  }
</style>
