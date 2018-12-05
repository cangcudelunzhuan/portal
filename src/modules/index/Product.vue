<template>
	<div class="productWrap">
		<div class="product">
		  <div>
        <img src="../../assets/images/dataTechnology.svg" alt=""><br>
        <p class="title">{{$t('products.dataTechnology.title')}}</p>
        <p class="desc">{{$t('products.dataTechnology.desc')}}</p>
      </div>
			<div>
				<img src="../../assets/images/dataMoney.svg" alt="">
				<p class="title">{{$t('products.dataAssets.title')}}</p>
				<p class="desc">{{$t('products.dataAssets.desc')}}</p>
			</div>
			<div>
        <img src="../../assets/images/dataProduct.svg" alt=""><br>
        <p class="title">{{$t('products.dataProducts.title')}}</p>
        <p class="desc">{{$t('products.dataProducts.desc')}}</p>
      </div>
			<div>
				<img src="../../assets/images/dataService.svg" alt=""><br>
				<p class="title">{{$t('products.dataService.title')}}</p>
				<p class="desc">{{$t('products.dataService.desc')}}</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.productWrap {
		background: #fff;
		width: 100%;
		margin: 64px auto 88px auto;
		max-width: 1366px;
	}
	.product {
		height: 236px;
		width: 100%;
		margin: 0 auto
	}
	.product > div {
		width: 24.5%;
		float: left;
		padding: 24px 54px;
		box-sizing: border-box
	}
	.product .title {
		font-family: PingFangSC-Semibold;
		font-size: 18px;
		color: #515152;
		margin: 15px 0 24px 0;
		font-weight: bold;
	}
	.product .desc {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #8E8E8F;
		margin: 0 26px;
		line-height: 18px
	}
</style>