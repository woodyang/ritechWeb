<template>
  <div id="app">
    <div>
    	<router-link class="company-logo" to="/Productions"></router-link>
    	<el-menu
			  :default-active="activeIndex"
			  class="nav-menu"
			  mode="horizontal"
			  @select="handleSelect"
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
			    <el-menu-item index="1-1">小小Q(WIFI)</el-menu-item>
			    <el-menu-item index="1-2">小小Q毛绒版</el-menu-item>
			    <el-menu-item index="1-3">RC微聊音箱</el-menu-item>
			    <el-menu-item index="1-4">Q影</el-menu-item>
			  </el-submenu>
			</el-menu>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
import axios from 'axios'
var qs = require('qs');
export default {
  name: 'App',
  data(){
  	return{
  		activeIndex:'2-1',
  		router: true
  	}
  },
  methods: {
	  handleSelect(key, keyPath) {
	    console.log(key)
	  }
	},
	created(){
		let data = {
			"grant_type": "client_credentials",
    	"client_id":"ZTJlZTFiYWEtYTVlYy0xMWU4LTkyM2YtMDAxNjNlMDAyMGFk",
			"client_secret":"MWMwZGQ4MDAtNDllYS0zNjQ1LTk3ZWItYmRhMjk4OGY2ZWI0"
		};
		
		axios.post('/apis/auth/v7/access',qs.stringify(data))
	    .then(response=>{
	    	console.log(response)
	    })
	    .catch(error=>{
	        // 【务必注意】这里的error输出的不是一个对象【error.response才是一个对象】
        console.log(error);
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log( error.response.data );
            console.log( error.response.status );
            console.log( error.response.headers );
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log( "Error", error.message );
        }
        console.log( error.config );
	    })
	}
}
</script>

<style>
html,body{
	margin: 0;
	padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}
.company-logo{
	position: absolute;
	top: 16px;
	left: 1rem;
	z-index: 111;
	width: 120px;
	height: 40px;
	background: url(assets/logo.svg) no-repeat;
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
