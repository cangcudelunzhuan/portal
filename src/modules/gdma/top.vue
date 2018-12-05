<template id="">
  <div class="" style="position:relative">
    <div class="banner-content hasback gdma" aos="fade-up-right">
      <div class="content-box banner-box" aos="fade-up-left">
        <img src="static/images/gdma/font.png" alt="" class="font animated" :class="{bounce:ac===0}" >
        <div class="imgbox">
          <img src="static/images/gdma/ipad.png" alt="" class="ipad">
        </div>
        <button type="button" name="button" class="experience-button animated" @click="goexperience">申请体验</button>
      </div>
    </div>
    <div class="pronav-box-back">
      <ul class="pronav-box content-box clearfix">
        <li @click="gotoani(1)" :class="{isac:ac === 1}"><i class="iconfont">&#xe6e3;</i>数据掌控</li>
        <li @click="gotoani(2)" :class="{isac:ac === 2}"><i class="iconfont">&#xe6e2;</i>多终端共享</li>
        <li @click="gotoani(3)" :class="{isac:ac === 3}"><i class="iconfont">&#xe6e4;</i>商业智能</li>
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
    width: 557px;
    height: 172px;
    margin-top: 54px
  }
  .imgbox{
    position: absolute;
    right: -160px;
    height: 424px;
    animation:move 5s linear alternate infinite;
    top: 112px;
    z-index: 4;
    width: 749px
  }
  .imgbox img{
    display: block;
    position: absolute;
  }
  .imgbox .ipad{
    width: 789px
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
