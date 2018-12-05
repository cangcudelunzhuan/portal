<template>
	<div class="footer" ref='footer'>
		<p>{{$t('foot')}}</p>
	</div>
</template>

<script scoped>
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    methods: {
      setRelative () {
        this.$refs.footer.style.position = 'relative'
        this.$refs.footer.style.width = '100%'
        this.$refs.footer.style.marginLeft = '0'
        this.$refs.footer.style.margin = 'auto'
        this.$refs.footer.style.left = '0'
      },
      setAbsolute () {
        this.$refs.footer.style.position = 'absolute'
        this.$refs.footer.style.width = '100%'
        this.$refs.footer.style.marginLeft = '-681px'
        this.$refs.footer.style.left = '50%'
        this.$refs.footer.style.bottom = '0'
      }
    }
  }
</script>

<style scoped>
	.footer {
		/*background: #F6F6FA;
		box-shadow: inset 0 1px 0 0 #D6DAE6;*/
		height: 80px;
		line-height: 80px;
		max-width: 1366px;
		margin: 0 auto;
		clear: both;
		overflow: hidden;
	}
	.footer > p {
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #8E8E8F;
		line-height: 80px;
	}
	@media only screen and (width: 1920px) {
		.footer {
		  /* position: absolute;
		  bottom: 0; */
		  width: 100%;
		  /* margin-left: -681px;
		  left: 50%; */
		}
	}
</style>
