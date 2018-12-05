<template id="">
  <div class="banner-content">
    <div class="content-box banner-box" aos="fade-up-left">
      <div class="computerBox">
        <div class="computer-view">
        </div>
        <!-- <img src="../../assets/images/brainComputer/computer-view.png" alt=""  > -->
        <img src="../../assets/images/brainComputer/piao-1.png" alt=""  class="piao-1">
        <div class="piao-2"></div>
        <!-- <img src="../../assets/images/brainComputer/piao-2.png" alt=""  class="piao-2"> -->
        <img src="../../assets/images/brainComputer/piao-3.png" alt=""  class="piao-3">
        <img src="../../assets/images/brainComputer/piao-4.png" alt=""  class="piao-4">
        <img src="../../assets/images/brainComputer/bottom.png" alt=""  class="bottom">
      </div>
      <!-- <lineALL class="line-all"></lineALL> -->
      <div class="light-box">
        <line1 class="line1" ref="line1"></line1>
        <line2 class="line2" ref="line2"></line2>
        <line3 class="line3"></line3>
        <line4 class="line4"></line4>
      </div>
      <div class="grid-box">
        <img src="../../assets/images/brainComputer/grid.png" alt=""  class="bo-grid">
      </div>
      <div class="user-part animated" :class="{bounce:ac===0}"></div>
      <!-- <img src="../../assets/images/brainbanner-user.png" alt=""  > -->
      <button type="button" name="button" class="experience-button animated" @click="goexperience">申请体验</button>
      <!-- <img src="../../assets/images/computer.png" alt="" class="banner-computer animated" :class="{bounceInRight:ac===0}" > -->
      <svg width="760" height="500"
      xmlns="http://www.w3.org/2000/svg"
      id="svg" v-if="ac===0">
        <defs>
          <filter id="filter" filterUnits="userSpaceOnUse">
            <feOffset result="offset" dy="16" in="SourceAlpha"/>
            <feGaussianBlur result="blur" stdDeviation="4"/>
            <feFlood result="flood" flood-opacity="0.8"/>
            <feComposite result="composite" operator="in" in2="blur"/>
            <feGaussianBlur result="blur-2" stdDeviation="5.333" in="SourceAlpha"/>
            <feComposite result="composite-2"/>
            <feComposite result="composite-3"/>
            <feComposite result="composite-4"/>
            <feFlood result="flood-2" flood-color="#29c2fc" flood-opacity="0.5"/>
            <feComposite result="composite-5" operator="in" in2="composite-4"/>
            <feBlend result="blend" mode="overlay" in2="composite"/>
            <feBlend result="blend-2" in="SourceGraphic"/>
          </filter>
        </defs>
        <!-- <g data-name="光线组 28" class="cls-1">
          <path id="形状_541" data-name="形状 541" class="cls-2" d="M992,484L787,417l221-72,15,5" transform="translate(-691.531 -344.531)"/>
          <path id="形状_540" data-name="形状 540" class="cls-2" d="M1133,530l75,25,142-47-49-16" transform="translate(-691.531 -344.531)"/>
          <path id="形状_539" data-name="形状 539" class="cls-2" d="M993,484l140,46,65-21" transform="translate(-691.531 -344.531)"/>
          <path id="形状_538" data-name="形状 538" class="cls-2" d="M692,582l157-52,204-66" transform="translate(-691.531 -344.531)"/>
        </g> -->
      </svg>
    </div>

  </div>
</template>
<style media="screen">
  .computerBox{
    position: absolute;
    width: 500px;
    height: 521px;
    right: 0;
    top: 97px;
    z-index: 5;
    animation:move 5s linear alternate infinite;
  }
  .light-box{
    width: 100%;
    height: 100%;
    left: 0;
    top: 22px;
    z-index: 1;
    position: absolute;
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
  .computer-view, .piao-1, .piao-2, .piao-3, .piao-4, .bottom, .bo-grid{
    position: absolute;
  }
  .computer-view{
    width: 350px;
    top: 0;
    left: 30px;
    z-index: 1;
    height: 352.72px;
    background: url(../../assets/images/brainComputer/computer-view-m.png) top center no-repeat;
    background-size: 100%
  }
  @media screen and (min-width: 1600px) {
    .computer-view{
      background: url(../../assets/images/brainComputer/computer-view-l.png) top center no-repeat;
      background-size: 100%
    }
  }
  .piao-1{
    width: 105px;
    top: 147px;
    left: -43px;
    z-index: 2
  }
  .piao-2{
    width: 98px;
    height: 112.21px;
    top: 240px;
    left: 185px;
    z-index: 2;
    background: url(../../assets/images/brainComputer/piao-2-m.png) top center no-repeat;
    background-size: 100%
  }
  @media screen and (min-width: 1600px) {
    .piao-2{
      background: url(../../assets/images/brainComputer/piao-2-l.png) top center no-repeat;
      background-size: 100%
    }
  }
  .piao-3{
    width: 85px;
    left: 270px;
    top: -30px;
    z-index: 2
  }
  .piao-4{
    width: 100px;
    left: 420px;
    top: 100px;
    z-index: 2
  }
  .bottom {
    width: 600px;
    bottom: 95px;
    left: -75px;
    z-index: 0;
  }
  .grid-box{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .line1, .line2, .line3, .line4{
    position: absolute;
    z-index: 3
  }
  .line1{
    top: 320px;
    left: 419px
  }
  .line2{
    top: 443px;
    left: 340px
  }
  .line3 {
    right: 293px;
    bottom: -132px
  }
  .line4 {
    right: 148px;
    bottom: -154px
  }
  .line-all{
    position: absolute;
    right: 145px;
    top: 275px;
    opacity:0;
    stroke-dasharray: 780;
    stroke-dashoffset: 0;
    animation: dash2 5s linear 0.1s infinite;
  }
  .bo-grid{
    /* right: -210px;
    top: -86px; */
    z-index: -1;
    right: -282px;
    top: -63px;
    opacity: 0.7

  }
</style>
<script type="text/javascript">
  import line1 from '@/modules/newindex/line1'
  import line2 from '@/modules/newindex/line2'
  import line3 from '@/modules/newindex/line3'
  import line4 from '@/modules/newindex/line4'
  import lineALL from '@//modules/newindex/lineALL'
  export default {
    props: ['active'],
    components: {
      line1,
      line2,
      line3,
      line4,
      lineALL
    },
    computed: {
      ac () {
        return this.active
      }
    },
    mounted () {
    },
    methods: {
      goexperience () {
        window.open('http://bpm.geely.com/?version=new&origin=dtea#/InformationSystemAccountAndPermissionRequest/Main/Edit')
      }
    }
  }
</script>
<style media="screen">
  .user-part{
    display: block;
    margin-left: -30px;
    width: 605px;
    height: 203px;
    background: url(../../assets/images/brainbanner-user-m.png) top center no-repeat;
    background-size: 100%
  }
  @media screen and (min-width: 1600px) {
    .user-part{
      background: url(../../assets/images/brainbanner-user-l.png) top center no-repeat;
      background-size: 100%
    }
  }
  .banner-computer{
    position: absolute;
    right: -350px;
    top: 0
  }
</style>
<style scoped>
  .cls-1 {
    filter: url(#filter);
  }
  .cls-2 {
    fill: none;
    stroke: aqua;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1px;
    fill-rule: evenodd;
  }
  #svg {
    stroke-dasharray: 640;
    stroke-dashoffset: 0;
    animation: dash 3.5s linear 1s infinite;
    position: absolute;
    right: 44px;
    top: 277px;
    opacity: 0
  }
  @keyframes dash {
    from {
      opacity: 1;
      stroke-dashoffset: 780;
     }
    to {
      opacity: 0.4;
      stroke-dashoffset: 0;
     }
  }
  @keyframes dash2 {
    from {
      opacity: 1;
      stroke-dashoffset: 780;
     }
    to {
      opacity: 0.2;
      stroke-dashoffset: 0;
     }
  }
  .line2{
    opacity:0;
    stroke-dasharray: 780;
    stroke-dashoffset: 0;
    animation: dash 7s linear 0s infinite;
  }
  .line1, .line3{
    opacity:0;
    stroke-dasharray: 780;
    stroke-dashoffset: 0;
    animation: dash2 7s ease-out 2.6s infinite;
  }
  .line4{
    opacity:0;
    stroke-dasharray: 780;
    stroke-dashoffset: 0;
    animation: dash2 7s linear 3.5s infinite;
  }

  .line-all{
    opacity:0;
    stroke-dasharray: 780;
    stroke-dashoffset: 0;
    animation: dash2 5s linear 0.1s infinite;
  }
</style>
