<template>
	<div class="banner">
		<div class="bannerContent">
			<h1>{{$t('banner.text')}}</h1>
			<h6>{{$t('banner.text2')}}</h6>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.banner {
		height: 540px;
		width: 100%;
		background: url(../../assets/images/banner.jpg) no-repeat center top;
		padding-top: 149px;
		box-sizing: border-box
  }
  .bannerContent {
     width: 100%;
     margin: 0 auto;
     text-align: left;
     max-width: 1366px;
	}
  h1 {
		font-family: PingFangSC-Semibold;
		font-size: 48px;
		color: #FFFFFF;
		padding-left: 104px
 	}
 	h6 {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
		padding: 24px 0 0 104px
 	}
</style>