<template id="">
  <div class="content-box brain-content-item">
    <div class="brain-title">
      <h1>吉利企业大脑</h1>
      <p>业务数据化\数据资产化\资产价值化</p>
    </div>
    <div class="svg-box">
      <img src="../../assets/images/brain-main.png" alt="" class="animated brainIMg" :class="{pulse:ac===1}">
      <!-- 箭头列表 顺序为左、右、上、中、下 -->
      <div class="" style="position:absolute">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"> -->
        <svg xmlns="http://www.w3.org/2000/svg"  class="svg-path" width="400" height="400">
          <circle fill="#f90" r="10">

          <defs>
            <linearGradient id="linear-gradient" x1="480.44" y1="548" x2="477.529" y2="540" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#1a52cb"/>
              <stop offset="1" stop-color="#23edff"/>
            </linearGradient>
            <filter id="filter" x="468" y="537" width="23" height="27" filterUnits="userSpaceOnUse">
              <feOffset result="offset" dy="8" in="SourceAlpha"/>
              <feGaussianBlur result="blur" stdDeviation="2.828"/>
              <feFlood result="flood" flood-opacity="0.16"/>
              <feComposite result="composite" operator="in" in2="blur"/>
              <feBlend result="blend" in="SourceGraphic"/>
              <feImage preserveAspectRatio="none" x="475" y="540" width="7.969" height="8" result="image" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNy45NjkiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDcuOTY5IDgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iNy45NjkiIHkxPSI2Ljc5IiB4Mj0iMCIgeTI9IjEuMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNGVlM2ZkIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI0NmFmMyIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNy45NjkiIGhlaWdodD0iOCIvPgo8L3N2Zz4K"/>
              <feComposite result="composite-2" operator="in" in2="SourceGraphic"/>
              <feBlend result="blend-2" mode="multiply" in2="blend"/>
              <feGaussianBlur result="blur-2" in="SourceAlpha"/>
              <feFlood result="flood-2" flood-opacity="0.5"/>
              <feComposite result="composite-3" operator="out" in2="blur-2"/>
              <feOffset result="offset-2" dy="14"/>
              <feComposite result="composite-4" operator="in" in2="SourceAlpha"/>
              <feBlend result="blend-3" mode="overlay" in2="blend-2"/>
            </filter>
          </defs>
          <g transform="translate(-468.5 -537.5)" style="fill: none; filter: url(#filter)">
            <path id="箭头" class="cls-1" d="M482.974,540.009l-0.036,8L475,548" style="stroke: inherit; filter: none; fill: inherit"/>
          </g>
          <use transform="translate(-468.5 -537.5)" xlink:href="#箭头" style="stroke: url(#linear-gradient); filter: none; fill: none"/>
          <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
            <mpath xlink:href="#road"/>
          </animateMotion>
          <animateTransform dur="3s" attributeName="transform" keySplines="0,0,.58,1"
          fill="freeze" type="rotate" from="-70" to="-20" repeatCount="indefinite" />
          </circle>

        </svg>
      </div>

    </div>
    <!-- 路径列表 顺序为左、右、上、中、下 -->
    <svg xmlns="http://www.w3.org/2000/svg"  class="svg-path">
      <path id="road" fill="none" stroke="none" stroke-width="1" stroke-linecap="round" stroke-miterlimit="20" d="m182.40601,3.5s-271.62601,22.60001 -137.85202,140"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg"  class="svg-path" width="400" height="400">
      <path id="roads" fill="none" stroke="#78EADF" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" d="M10 80 Q 77.5 10, 145 80 T 280 80"/>
      <circle fill="#F8B62D" r="10">
        <animateMotion dur="3s" repeatCount="indefinite">
          <mpath xlink:href="#roads"/>
        </animateMotion>
        <animateTransform dur="3s" attributeName="transform" keySplines="0,0,.58,1"
        fill="freeze" type="scale" from="1 1" to="0.5 0.5" repeatCount="indefinite" />
      </circle>
    </svg >
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
    data () {
      return {
        list:[
          {
            class: 'left-icon',
            path: '#road',
            id:'road',
            rotate: [-70, -20],
            pathInner: 'm182.40601,3.5s-271.62601,22.60001 -137.85202,140'
          },
          {
            class: 'right-icon',
            path: '#road2',
            id: 'road2',
            rotate: [-50, -55],
            pathInner: 'm7.5,2.5s271.92004,22.60001 138,140'
          },
          {
            class: 'first-icon',
            path: '#line1',
            id: 'line1',
            rotate: [-30, -40],
            pathInner: 'm14.5,304.5l445,-297.5c14.44598,-4.69299 37.90002,-4.69299 52.37903,0l445.62097,297.5'
          },
          {
            class: 'second-icon',
            path: '#line2',
            id: 'line2',
            rotate: [-50, -30],
            pathInner: 'm6.522,192.71198l445.03299,-186.95697c10.13599,-3.28799 26.58899,-3.28799 36.74902,0l446.12604,186.95697'
          },
          {
            class: 'bottom-icon',
            path: '#line3',
            id: 'line3',
            rotate: [-40, -40],
            pathInner: 'm985.5,101.5l0,4l-444,145.20801c-21.93701,7.75702 -34.91602,5.77002 -52.37903,0l-446.75198,-144.28003l0.13101,-4.92798'
          }
        ]
      }
    }
  }
</script>
<style scoped>
.cls-1 {
  fill: none;
  stroke-linejoin: round;
  stroke-opacity: 0.5;
  stroke-width: 1px;
  fill-rule: evenodd;
  stroke: url(#linear-gradient);
  filter: url(#filter);
}
  .brain-content-item{
    position: relative;
  }
  .brainIMg{
    width: 100%;
    margin:6rem 0 3rem 3rem
  }
  .svg-box{
    position: relative;
    margin-left: 2rem
  }
  .svg-icon{
    position: absolute;
    height: 4rem;
    width: 4rem
  }
  .svg-path{
    position: absolute;
    height: 100rem;
    width: 100rem;
    left: 0;
    top: 0
  }
  .left-icon{
    top: 19.5rem;
    left: 0.7rem;
  }
  .right-icon{
    top: 20.1rem;
    right: 23.5rem;
  }
  .first-icon{
    left: 3.88rem;
    top: 4.66rem
  }
  .second-icon{
    top: 15.2rem;
    left: 5rem;
  }
  .bottom-icon{
    top: 22.5rem;
    left: 1.3rem
  }
</style>
