<template>
	<div class="customer-box">
		<div class="customer-design">
			<h1 class="pagTitle">客户定制<span class="pageFtitle">Customer Design</span></h1>
			<div class="introduce">
				<p>定制介绍：个性定制，打造属于您企业的个性化外形，或广告用语、开机问候、客户馈赠、客户绑定等。</p>
				<p>量身定制：此服务向战略合作伙伴开放！可与腾讯、中科院达成战略合作伙伴关系！</p>
			</div>
			<p>定制服务专线：400-8813 163</p>
		</div>
		<div class="custom-case">
			<h2 class="pagTitle">定制案例<span class="pageFtitle">Custom Case</span></h2>
			<div class="case-box">
				<div class="tencent-case">
					<div>
						<el-image src="http://ritech.cn/images/tencentCustom.png"></el-image>
					</div>
					<h4>腾讯广点通定制</h4>
				</div>
				<div class="tax-bureau-case">
					<div>
						<el-image src="http://ritech.cn/images/taxBureauCustom.jpg"></el-image>
					</div>
					<h4>深圳国家地税局定制</h4>
				</div>
			</div>
		</div>
		<div class="nationwide-investment">
			<h2 class="pagTitle">全国招商<span class="pageFtitle">Nationwide Investment</span></h2>
			<div class="introduce">
				<h3>线下招商：</h3>
				<p>全国设市级代理</p>
			</div>
			<div class="invest-number">
				<p>线下招商电话：0755-23225450</p>
			</div>
			<div class="introduce">
				<h3>线上招商：</h3>
				<p>招商平台：京东商城 天猫商城 淘宝店铺 微商渠道</p>
			</div>
			<div class="invest-number">
				<p>线上招商电话：0755-86591033</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.customer-box{
		width: 70%;
		height: auto;
		margin: 130px auto 0;
		text-align: left;
	}
	.customer-design,.custom-case,.nationwide-investment{
		margin-top: 70px;
	}
	.pagTitle{
		color: #3a93bd;
		font-size: 30px;
		font-weight: normal;
		letter-spacing: 4px;
		border-bottom: 1px solid #dad9d9;
	}
	.pageFtitle{
		margin-left: 10px;
		color: #5e5f5e;
		font-size: 14px;
		letter-spacing: 0;
		font-family: arial;
	}
	.introduce{
		margin-top: 33px;
	}
	.customer-design>div{
	}
	p,.case-box>div>h4{
		color: #0f0f0f;
		font-size: 16px;
		letter-spacing: 2px;
	}
	.introduce>p,.introduce>h3{
		color: #3a93bd;
	}
	
	/* 定制案例 */
	.case-box{
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		margin-top: 22px;
		justify-content: space-between;
	}
	.case-box>div{
		height: 165px;
		text-align: center;
	}
	.tencent-case{
		width: 21%;
	}
	.tax-bureau-case{
		width: 59%;
	}
	.case-box>div>div{
		height: 141px;
		line-height: 141px;
	}
	img{
		vertical-align: middle;
	}
	.case-box>div>h4{
		font-weight: normal;
		margin-top: 4px;
	}
	
	/* 全国招商 */
	.nationwide-investment{
		padding-bottom: 70px;
	}
	.nationwide-investment>.introduce{
		margin-top: 40px;
	}
	.introduce>h3{
		font-size: 16px;
	}
	.invest-number, .customer-design>p{
		margin-top: 10px;
	}
</style>