<template id="">
  <div class="" style="position:relative">
    <div class="banner-content hasback" aos="fade-up-right">
      <div class="content-box banner-box" aos="fade-up-left">
        <img src="../../assets/images/consumer/font.png" alt="" class="font animated" :class="{bounce:ac===0}" >
        <div class="imgbox">
          <img src="../../assets/images/consumer/board.png" alt="" class="board">
          <img src="../../assets/images/consumer/girl.png" alt="" class="girl">
          <img src="../../assets/images/consumer/bottom.png" alt="" class="bottom">
        </div>
        <button type="button" name="button" class="experience-button animated" @click="goexperience">申请体验</button>
      </div>
    </div>
    <div class="pronav-box-back">
      <ul class="pronav-box content-box clearfix">
        <li @click="gotoani(1)" :class="{isac:ac === 1}"><i class="iconfont">&#xe6df;</i>用户画像标签</li>
        <li @click="gotoani(2)" :class="{isac:ac === 2}"><i class="iconfont">&#xe6e1;</i>关联分析</li>
        <li @click="gotoani(3)" :class="{isac:ac === 3}"><i class="iconfont">&#xe6dd;</i>客群洞察</li>
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
  .imgbox{
    position: absolute;
    right: 0px;
    height: 424px;
    animation:move 5s linear alternate infinite;
    top: 90px;
    z-index: 4;
    width: 632px
  }
  .imgbox img{
    display: block;
    position: absolute;
  }
  .imgbox .bottom{
    width: 632px;
    bottom: 0;
    right: 0;
    z-index: 1
  }
  .imgbox .girl{
    width: 160px;
    right: 60px;
    top: 55px;
    z-index: 2
  }
  .imgbox .board{
    width: 556px;
    right: 150px
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
