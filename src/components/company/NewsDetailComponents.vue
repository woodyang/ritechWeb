<template>
	<div class="newsDetail">
		<div class="img-box">
			<el-image :src="titleCover" lazy></el-image>
		</div>
		<div class="detail-box">
			<h3>{{title}}</h3>
			<p>{{decs}}</p>
			<div>
				<el-button type="primary" @click="$emit('getIndex', index)">详情<i class="el-icon-arrow-right el-icon--right"></i></el-button>
			</div>
		</div>
		<div class="relise-time">
			<p>{{time}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'newsDetail',
        props:['titleCover','title','decs','index','time'],
    }
</script>

<style scoped>
	.newsDetail{
		padding: 22px 0 35px;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		border-bottom: 1px solid #dad9d9;
	}
	.img-box{
		width: 20.1%;
		font-size: 0;
	}
	.el-image{
		width: 100%;
		height: 157px;
	}
	.detail-box{
		width: 60.4%;
		margin-left: 2.8%;
		text-align: left;
	}
	.detail-box>h3{
		font-size: 16px;
		color: #0f0f0f;
	}
	.detail-box>p{
		height: 78px;
		color: #5E5F5E;
		font-size: 16px;
		margin-top: 16px;
		line-height: 1.3;
	}
	.detail-box>div>a{
		display: inline-block;
		width: 85px;
		height: 32px;
		line-height: 32px;
		margin-top: 20px;
		text-align: center;
		color: white;
		font-size: 16px;
		background-color: #3993bb;
	}
	.detail-box>div>a:hover,.box-title>span:hover{
		cursor: pointer;
		text-decoration: none;
	}
	.relise-time{
		width: 10.3%;
		text-align: center;
		margin-left: 2.8%;
		color: #5e5f5e;
	}
</style>