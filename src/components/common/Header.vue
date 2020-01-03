<template>
	<div class="header">
    	<router-link class="company-logo" to="/Xiaoxiaoq"></router-link>
    	<el-menu
			:default-active="activeIndex"
			class="nav-menu"
			mode="horizontal"
			text-color="#767271"
			active-text-color="#409eff"
			:router="router" >
			<el-submenu index="6">
			    <template slot="title">关于我们</template>
			    <el-menu-item index="Profile">公司简介</el-menu-item>
			    <el-menu-item index="News">新闻资讯</el-menu-item>
			    <el-menu-item index="Customer">客户定制</el-menu-item>
			    <el-menu-item index="Join">加入我们</el-menu-item>
			</el-submenu>
			<el-submenu index="5">
			    <template slot="title">消费电子</template>
			    <el-menu-item index="Productions?id=BT-13">BT13蓝牙音箱</el-menu-item>
			    <el-menu-item index="Productions?id=SLC-071">SLC071蓝牙音箱</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
			    <template slot="title">居家用品</template>
			    <el-menu-item index="Productions?id=S30">香薰机</el-menu-item>
			    <el-menu-item index="Productions?id=ODM-4">数字温湿度计</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">个护美容</template>
			    <el-menu-item index="Productions?id=PD-14">磨脚器</el-menu-item>
			    <el-menu-item index="Productions?id=PD-17">男士洁面仪</el-menu-item>
			    <el-menu-item index="Productions?id=PD-24">女式洁面仪</el-menu-item>
			    <el-menu-item index="Productions?id=PD-25">数字皮肤测试仪</el-menu-item>
			    <el-menu-item index="Productions?id=PD-27">冷热美眼仪</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
			    <template slot="title">感应灯系列</template>
			    <el-menu-item index="Productions?id=B01">圆形小壁灯</el-menu-item>
			    <el-menu-item index="Productions?id=B03">人体感应灯</el-menu-item>
			    <el-menu-item index="Productions?id=B05">床头感应灯</el-menu-item>
			    <el-menu-item index="Productions?id=D03">人体感应灯</el-menu-item>
			    <el-menu-item index="Productions?id=MSL28">太阳能壁灯</el-menu-item>
			</el-submenu>
			<el-submenu index="1">
			    <template slot="title">AI智能产品</template>
			    <el-menu-item index="Xiaoxiaoq">小小Q(WIFI)</el-menu-item>
			    <el-menu-item index="Plushq">小小Q毛绒版</el-menu-item>
			    <el-menu-item index="Rcradio">RC微聊音箱</el-menu-item>
			    <el-menu-item index="Qrv">Q影</el-menu-item>
			</el-submenu>
		</el-menu>
    </div>
</template>

<script>
	export default {
		data(){
		  	return{
		  		activeIndex:'Xiaoxiaoq',
		  		router: true
		  	}
	  },
	  methods: {
			handleSelect(key, keyPath) {
		    	console.log(key)
			}
		},
		created(){
		}
	}
</script>

<style>
	.header{
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1111;
	}
	.company-logo{
		position: absolute;
		top: 16px;
		left: 6vw;
		z-index: 111;
		width: 120px;
		height: 40px;
		background: url(../../assets/logo.svg) no-repeat;
	}
	.el-menu--horizontal{
		padding-right: 1rem;
	}
	.el-menu--horizontal>.el-submenu{
		float: right;
	}
	.el-submenu__title{
		font-size: 16px;
	}
</style>