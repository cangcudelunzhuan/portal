<template id="">
  <div class="content-box brain-content-item" aos="fade-up">
    <div class="brain-title" >
      <h1>吉利企业大脑</h1>
      <p>业务数据化\数据资产化\资产价值化</p>
    </div>
    <div class="svg-box" aos="fade-up">
      <!-- <img src="../../assets/images/brain-main-m.png" alt="" class="brainIMg" > -->
      <div class="brainIMg">
      </div>
      <!-- 气泡 -->
      <div class="glass" id="glass"></div>
      <!-- 箭头列表 顺序为左、右、上、中、下 -->
      <svg xmlns="http://www.w3.org/2000/svg"
      class="svg-icon" :class="item.class" v-for="item in list">
        <g fill="none" filter="none" >
          <path stroke="none" filter="none"
          fill="#396ef4" d="m14.474,2.50897l-0.03601,8l-7.93799,-0.00897" class="cls-1" id=""/>
          <animateMotion :dur="item.dur + 's'" repeatCount="indefinite" rotate="auto">
            <mpath :xlink:href="item.path"/>
          </animateMotion>
          <animateTransform :dur="item.dur +'s'" attributeName="transform" keySplines="0,0,.58,1"
          fill="freeze" type="rotate" :from="item.rotate[0]" :to="item.rotate[1]" repeatCount="indefinite" />
        </g>
      </svg>
    </div>
    <!-- 路径列表 顺序为左、右、上、中、下 -->
    <svg xmlns="http://www.w3.org/2000/svg"  class="svg-path">
      <path :id="item.id" fill="none" stroke="none" v-for = "item in list"
      stroke-width="1" stroke-linecap="round" stroke-miterlimit="10" :d="item.pathInner"/>
    </svg>
    <!-- <svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
      <path id="roads" fill="none" stroke="#78EADF" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" d="M10 80 Q 77.5 10, 145 80 T 280 80"/>
      <circle fill="#F8B62D" r="10">
        <animateMotion dur="3s" repeatCount="indefinite">
          <mpath xlink:href="#roads"/>
        </animateMotion>
        <animateTransform dur="3s" attributeName="transform" keySplines="0,0,.58,1"
        fill="freeze" type="scale" from="1 1" to="0.5 0.5" repeatCount="indefinite" />
      </circle>
    </svg > -->

  </div>
</template>
<script type="text/javascript">
  import bubble from '@/util/bubble'
  export default {
    props: ['active'],
    computed: {
      ac () {
        return this.active
      }
    },
    data () {
      return {
        list: [
          {
            class: 'left-icon',
            path: '#road',
            id: 'road',
            rotate: [-40, -40],
            pathInner: 'm182.40601,3.5s-271.62601,22.60001 -137.85202,140',
            dur: 6
          },
          {
            class: 'right-icon',
            path: '#road2',
            id: 'road2',
            rotate: [-40, -40],
            pathInner: 'm7.5,2.5s271.92004,22.60001 138,140',
            dur: 6
          },
          {
            class: 'first-icon',
            path: '#line1',
            id: 'line1',
            rotate: [-30, -40],
            pathInner: 'M513.877,11.999 L959.500,309.500 L959.500,313.500 L515.502,458.708 C493.565,466.465 480.586,464.478 463.123,458.708 L16.369,314.428 L16.500,309.500 L461.498,11.999 C490.500,-3.203 490.500,-3.465 513.877,11.999 Z',
            dur: 15
          },
          {
            class: 'second-icon',
            path: '#line2',
            id: 'line2',
            rotate: [-50, -30],
            pathInner: 'm6.522,192.71198l445.03299,-186.95697c10.13599,-3.28799 26.58899,-3.28799 36.74902,0l446.12604,186.95697',
            dur: 15
          },
          {
            class: 'bottom-icon',
            path: '#line3',
            id: 'line3',
            rotate: [-40, -40],
            pathInner: 'm985.5,101.5l0,4l-444,145.20801c-21.93701,7.75702 -34.91602,5.77002 -52.37903,0l-446.75198,-144.28003l0.13101,-4.92798',
            dur: 15
          }
        ]
      }
    },
    mounted () {
        bubble.generateBubbles('glass')
    },
    methods: {
    }
  }
</script>
<style scoped>
  .brain-content-item{
    position: relative;
    overflow: hidden;
    opacity: 0
  }
  .brainIMg{
    width: 1127px;
    height: 572px;
    position: absolute;
    top: 31px;
    left: -1px;
    background: url(../../assets/images/brain-main-m.png) top center no-repeat;
    background-size: 100%
  }
  @media screen and (min-width: 1600px) {
    .brainIMg{
      background: url(../../assets/images/brain-main-l.png) top center no-repeat;
      background-size: 100%
    }
  }
  .svg-box{
    position: relative;
    width: 100%;
    z-index: 99;
    height: 544px
    /* margin-left: 20px */
  }
  .svg-icon{
    position: absolute;
  }
  .svg-path{
    position: absolute;
    height: 1000px;
    width: 1000px;
    left: 0;
    top: 0
  }
  .left-icon{
    top: 220px;
    left: 46px;
    height: 145px;
    width: 300px;
  }
  .right-icon{
    top: 223px;
    right: -56px;
    height: 145px;
    width: 300px;
  }
  .first-icon{
    left: 75px;
    top: -4px;
    height: 310px;
    width: 1000px;
    padding-top: 60px
  }
  .second-icon{
    top: 170px;
    left: 94px;
    height: 350px;
    width: 1000px;
  }
  .bottom-icon{
    top: 260px;
    left: 47px;
    height: 300px;
    width: 1000px;
  }
</style>
