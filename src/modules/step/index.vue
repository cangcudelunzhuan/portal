<template id="">
  <div class="">
    <ul class="step-content" :style="{height:height+'px'}">
      <li v-for="item in steplist" :class="{highlight:item.state === 1}" ref="li" aos="fade-up">
        <h3>{{item.title}}</h3>
        <p>{{item.mes}}</p>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    props: ['list'],
    data () {
      return {
        height: 0
      }
    },
    mounted () {
      let vm = this
      let li = this.$refs.li
      let len = li.length
      this.$nextTick(() => {
        let height = li[len-1].offsetTop
        vm.height = height
      })
    },
    computed: {
      steplist () {
        return this. list
      }
    }
  }
</script>
<style scoped>
  .step-content{
    position: relative;
    margin-top: 20px;
    margin-left: 26px
  }
  .step-content::before{
    position: absolute;
    content: '';
    height: 100%;
    width: 1px;
    border-left: 1px dashed #BAC8E9;
    top: 10px;
    bottom: 10px;
    left: -6px;
  }
  .step-content li{
    position: relative;
    padding-left: 20px;
    max-width: 285px
  }
  .step-content li+li{
    margin-top: 40px
  }
  .small .step-content li+li{
    margin-top: 32px
  }
  .step-content li>h3{
    font-size: 16px;
    color: #515152;
    margin: 0;
    line-height: 16px
  }
  .step-content li>p{
    font-size: 14px;
    color: #8e8e8f;
    margin: 0;
    margin-top: 24px;
    line-height: 1.5
  }
  .small .step-content li>p{
    margin-top: 16px;
    line-height: 14px
  }
  .big .step-content li>h3{
    font-size: 22px;
    line-height: 22px
  }
  .step-content li.highlight>p{
    color: #515152;
  }
  .step-content li::before{
    position: absolute;
    content:'';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #BAC8E9;
    top: 10px;
    left: -10px;
    z-index: 2
  }
  .step-content li.highlight::before{
    background: #1C6CEF;
    box-shadow: 0 0 0 2px #a6c2fe, 0 0 0 3px #cad4f5, 0 0 0 4px #dde7f5;
  }
  .step-content li.highlight::after{
    position: absolute;
    content: '';
  	width: 8px;
  	height: 8px;
    top: 10px;
    left: -10px;
  	box-shadow: 0 0 0 5px #c0d2fa, 0 0 0 10px #b6c5f5, 0 0 0 15px #b7d0f2;
  	-webkit-border-radius: 30px;
  	-moz-border-radius: 30px;
  	border-radius: 30px;
  	z-index: 1;
  	opacity: 0;
  	-webkit-animation: warn 3s ease-out;
  	-moz-animation: warn 3s ease-out;
  	animation: warn 3s ease-out;
  	-webkit-animation-iteration-count: infinite;
  	-moz-animation-iteration-count: infinite;
  	animation-iteration-count: infinite;
  }

  @keyframes warn {
  	0% {
  		transform: scale(0);
  		opacity: 0.5;
  	}
  	25% {
  		transform: scale(0);
  		opacity: 0.6;
  	}
  	50% {
  		transform: scale(0.1);
  		opacity: 0.7;
  	}
  	75% {
  		transform: scale(0.5);
  		opacity: 0.8;
  	}
  	100% {
  		transform: scale(1);
  		opacity: 0.0;
  	}
  }
  @-webkit-keyframes "warn" {
  	0% {
  		-webkit-transform: scale(0);
  		opacity: 0.5;
  	}
  	25% {
  		-webkit-transform: scale(0);
  		opacity: 0.6;
  	}
  	50% {
  		-webkit-transform: scale(0.1);
  		opacity: 0.7;
  	}
  	75% {
  		-webkit-transform: scale(0.5);
  		opacity: 0.8;
  	}
  	100% {
  		-webkit-transform: scale(1);
  		opacity: 0.0;
  	}
  }
</style>
