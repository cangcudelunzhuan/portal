<template id="">
  <div class="" style="position:relative">
    <div class="banner-content hasback" aos="fade-up-right">
      <div class="content-box banner-box" aos="fade-up-left">
        <img src="../../assets/images/proTop/font.png" alt="" class="font animated" :class="{bounce:ac===0}" >
        <img src="../../assets/images/proTop/computer.png" alt="" class="computer">
        <button type="button" name="button" class="experience-button animated" @click="goexperience">申请体验</button>
      </div>
    </div>
    <div class="pronav-box-back">
      <ul class="pronav-box content-box clearfix">
        <li @click="gotoani(1)" :class="{isac:ac === 1}"><i class="iconfont">&#xe6de;</i>网络负面监控</li>
        <li @click="gotoani(2)" :class="{isac:ac === 2}"><i class="iconfont">&#xe6e0;</i>价格监测</li>
        <li @click="gotoani(3)" :class="{isac:ac === 3}"><i class="iconfont">&#xe6e1;</i>竟品分析</li>
      </ul>
    </div>
  </div>

</template>
<script type="text/javascript">
  export default {
    props: ['active'],
    computed: {
      ac () {
        return this.active
      }
    },
    methods: {
      gotoani (index) {
        this.$emit('getmode',index)
      },
      goexperience () {
        window.open('http://bpm.geely.com/?version=new&origin=dtea#/InformationSystemAccountAndPermissionRequest/Main/Edit')
      }
    }
  }
</script>
<style scoped>
  img{
    display: block;
  }
  .font{
    width: 538px;
    height: 144px;
    margin-top: 54px
  }
  .computer{
    width: 632px;
    height: 424px;
    position: absolute;
    right: -70px;
    top: 90px;
    animation:move 5s linear alternate infinite;
  }
  @keyframes move{
    from {
      transform:translate(0,0);
      -moz-transform:translate(0,0)
    }
    to {
      transform:translate(5px,20px);
      -moz-transform:translate(5px,20px)
    }
  }
</style>
