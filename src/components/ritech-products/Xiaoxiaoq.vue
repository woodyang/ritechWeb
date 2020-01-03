<template>
	<div class="container">
	    <swiper :options="swiperOption" ref="mySwiper" :style="height">
		    <!-- slides -->
		    <swiper-slide class="section">
		    	<hgroup>
	                <h2 style="white-space: nowrap; text-align: justify;">小小Q/Qrobot智能机器人</h2>
	                <p style="white-space: nowrap; text-align: justify;">以 最 简 单 的 方 式 &nbsp; 智 慧 链 接 你 和 你 的 家<span style="display: inline-block; padding-left: 100%;"></span></p>
	                <h2>售价：588元<img @click="showShoppingList" src="@/assets/xiaoxiaoq/shoppingButton.svg"></h2>
	                <div class="shoppingList" v-if="shoppingList">
	                    <a href="https://ritech.taobao.com" target="_blank">淘宝商城</a>
	                    <a href="map.html" target="_blank">实体终端</a>
	                </div>
	            </hgroup>
	            <div id="myQrobot"></div>
		    </swiper-slide>
		    <swiper-slide class="section">
		    	<img class="weichat" src="@/assets/xiaoxiaoq/weichat.svg">
            	<img class="music" src="@/assets/xiaoxiaoq/music.svg">
            	<img class="cloud" src="@/assets/xiaoxiaoq/cloud.svg">
            	<img class="gift" src="@/assets/xiaoxiaoq/gift.svg">
	            <dl class="pages page1" :class="{current: isCurrent[0]}">
	                <dt><img src="@/assets/xiaoxiaoq/page1.png"></dt>
	                <dd>至简单</dd>
	                <dd>QQ微信即时通讯交互</dd>
	            </dl>
	            <dl class="pages page2" :class="{current: isCurrent[1]}">
	                <dt><img src="@/assets/xiaoxiaoq/page2.png"></dt>
	                <dd>至丰富</dd>
	                <dd>海量QQ音乐语音点播</dd>
	            </dl>
	            <dl class="pages page3" :class="{current: isCurrent[2]}">
	                <dt><img src="@/assets/xiaoxiaoq/page3.png"></dt>
	                <dd>至实用</dd>
	                <dd>日常生活讯息智能查询</dd>
	            </dl>
	            <dl class="pages page4" :class="{current: isCurrent[3]}">
	                <dt><img src="@/assets/xiaoxiaoq/page4.png"></dt>
	                <dd>至贴心</dd>
	                <dd>专属定制内容远程推送</dd>
	            </dl>
		    </swiper-slide>
		    <swiper-slide class="section"></swiper-slide>
		    <swiper-slide class="section"></swiper-slide>
		    <swiper-slide class="section"></swiper-slide>
		    <swiper-slide class="section"></swiper-slide>
		    <swiper-slide class="section"></swiper-slide>
		    <swiper-slide class="section"></swiper-slide>
		    <swiper-slide class="section"></swiper-slide>
		    <swiper-slide class="section"></swiper-slide>
		    
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
	  	data () {
	    	return {
		    	shoppingList: false, // 第一屏，购买链接，默认为不显示
		    	height:{ // 动态设置每一屏的高度
		       		height: ''
		    	},
		    	swiperOption: {
		    		direction: 'vertical',
		        	pagination: {
				    	el: '.swiper-pagination',
				    	clickable: true, // 分页按钮可点击
				    },
				    mousewheel: {
					    releaseOnEdges: true, // 开启鼠标滚动控制页面，并且位于swiper边缘时，释放滚轮时间，鼠标可控制页面
					},
			    	effect: 'cube', // 切换效果
		    	},
		    	isCurrent: [true, false, false, false], // 用于第二屏几个功能的切换显示
//		    	isCurrent:{ // 用于第二屏几个功能的切换显示
//		    		page1: true,
//		    		page2: false,
//		    		page3: false,
//		    		page4: false
//		    	}
	    	}
	  	},
	  	computed:{
	  		swiper(){
	  			return this.$refs.mySwiper.swiper
	  		}
	  	},
	  	methods:{
	  		showShoppingList(){ // 切换购买链接显示
	  			this.shoppingList = !this.shoppingList
	  		},
	  		toggleCurrent(){
	  			let indexPage = 0;
	  			let isCurrent = this.isCurrent;
  				function timeOutFun(){
  					isCurrent[indexPage] = false;
				    indexPage++;
				    isCurrent[indexPage] = true;
				    console.log(isCurrent)
				    if(indexPage<3){
				        setTimeout(timeOutFun,2000);
				    }else{
				    	console.log(that.isCurrent)
				    }
				}
  				
  				setTimeout(timeOutFun,2000);
	  		}
	  	},
	  	mounted(){
	  		let swiper = this.swiper;
	  		var that = this;
	  		swiper.on('transitionEnd',function(){ // 滚动到第二屏时 再出发第二屏的动画
	  			if(swiper.activeIndex == '1'){
	  				that.$nextTick(function () {
	  				that.isCurrent[2] = true;
					})
//	  				that.toggleCurrent();
	  			}
	  		})
	  	},
	  	created(){
	  		// 动态设置每一屏的高度
	  		this.height.height=window.innerHeight-61+'px';
		},
	}
</script>

<style scoped>
	.container{
		color: #767271;
		margin: 61px 0 30px;
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	h1 { font-size: 2.5vw; font-weight: lighter; margin-bottom: 4vh; letter-spacing: 2px; color: #3992bc; }
	h2 { font-size: 2.4vw; font-weight: lighter; }
	p { font-size: 1.146vw; line-height: 1.875vw; margin-bottom: 3vh; letter-spacing: 2px; }


	.section { position: relative; height: 100%; box-sizing: border-box; background-color: #dfdad6; background-position: 50% 50%; background-size: cover; }
	.section:nth-child(1) { background: url('../../assets/xiaoxiaoq/bg/bg01.jpg') no-repeat bottom center / 100%;}
	.section:nth-child(2) { background: url('../../assets/xiaoxiaoq/bg/bg02.png') no-repeat bottom center / 100%; }
	.section:nth-child(3) { background: url('../../assets/xiaoxiaoq/bg/bg03.jpg') no-repeat bottom center / 100%; }
	.section:nth-child(4) { background: url('../../assets/xiaoxiaoq/bg/bg04.jpg') no-repeat bottom center / 100%; }
	.section:nth-child(5) { background: url('../../assets/xiaoxiaoq/bg/bg05.jpg') no-repeat bottom center / 100%; }
	.section:nth-child(6) { background: url('../../assets/xiaoxiaoq/bg/bg06.jpg') no-repeat bottom center / 100%; }
	.section:nth-child(7) { background: url('../../assets/xiaoxiaoq/bg/bg07.jpg') no-repeat bottom center / 100%; }
	.section:nth-child(10) { background: url('../../assets/xiaoxiaoq/bg/bg08.png') no-repeat bottom center / 100%; }
	@media screen and (min-width: 2000px) {
		.section:nth-child(3) { background: url('../../assets/xiaoxiaoq/bg/bg03_retina.jpg') no-repeat bottom center / 100%; }
		.section:nth-child(5) { background: url('../../assets/xiaoxiaoq/bg/bg05_retina.jpg') no-repeat bottom center / 100%; }
		.section:nth-child(6) { background: url('../../assets/xiaoxiaoq/bg/bg06_retina.jpg') no-repeat bottom center / 100%; }
		.section:nth-child(7) { background: url('../../assets/xiaoxiaoq/bg/bg07_retina.jpg') no-repeat bottom center / 100%; }
	}
	
	/* section 1 */
	.section:nth-child(1) > hgroup { position: absolute; top: 19vh; right: 6.5vw; width: 27.5vw; }
	.section:nth-child(1) > hgroup > h2 > img { cursor: pointer; float: right; width: 40%; }
	.section:nth-child(1) > hgroup > div { width: 100%; height: 58px; margin-top: 35px; border: 1px solid #3992bc; border-radius: 7px; }
	.section:nth-child(1) > hgroup > div > a { font-size: 24px; font-size: 1.25vw; line-height: 24px; display: block; float: left; width: 49%; height: 24px; margin-top: 17px; text-align: center; color: #3992bc; border-right: 1px solid #3992bc; }
	.section:nth-child(1) > hgroup > div > a:last-of-type { border: none; }
	
	.section:nth-child(1) > figure { position: absolute; bottom: 10vh; left: 25vw; }
	@media screen and (max-width: 1280px) {
		.section:nth-child(1) > figure { position: absolute; bottom: 4vh; left: 6vw; }
	}
	@media screen and (max-width: 1440px) and (min-width: 1281px) {
		.section:nth-child(1) > figure { position: absolute; bottom: 8vh; left: 15vw; }
	}
	#myQrobot{
		width: 500px;
		height: 450px;
		background-color: red;
		position: absolute;
		top: 35%;
		left: 24%;
		background: url(../../assets/xiaoxiaoq/360/1.png) no-repeat center center;
		/*animation: rotateQrobot 16s infinite;
		animation-timing-function: steps(1);*/
	}
	@keyframes rotateQrobot{
		0%{background-image: url(../../assets/xiaoxiaoq/360/1.png)}
		12.5%{background: url(../../assets/xiaoxiaoq/360/2.png)}
		25%{background: url(../../assets/xiaoxiaoq/360/3.png)}
		37.5%{background: url(../../assets/xiaoxiaoq/360/4.png)}
		50%{background: url(../../assets/xiaoxiaoq/360/5.png)}
		62.5%{background: url(../../assets/xiaoxiaoq/360/6.png)}
		75%{background: url(../../assets/xiaoxiaoq/360/7.png)}
		87.5%{background: url(../../assets/xiaoxiaoq/360/8.png)}
		100%{background: url(../../assets/xiaoxiaoq/360/1.png)}
	}
	
	/* section 2 */
	.section:nth-child(2) > img { position: absolute; z-index: 1;	}
	.section:nth-child(2) > img.weichat { bottom: 48vh; left: 19vw; width: 107px; }
	.section:nth-child(2) > img.music   { bottom: 43vh; left: 44.8vw; width: 57px; }
	.section:nth-child(2) > img.cloud   { bottom: 58vh; right: 27vw; width: 57px;}
	.section:nth-child(2) > img.gift    { bottom: 20vh; right: 34vw; width: 47px; }
	
	.pages{ position: relative; z-index: 2; display: none; width: 100%; height: 100%; }
	.current { display: block; }
	.pages > dt { position: absolute; overflow: hidden; box-sizing: border-box; width: 25vw; height: 25vw; border-radius: 50%; }
	.current > dt{z-index: 2;}
	.pages > dt > img { width: 100%; height: 100%; }
	.pages > dd:first-of-type { font-size: 38px; font-size: 1.9792vw; position: absolute; letter-spacing: 1px; }
	.pages > dd:last-of-type { font-size: 30px; font-size: 1.5625vw; position: absolute; letter-spacing: 1px; }
	
	
	.page1 > dt { bottom: 16vw; left: 9vw; border: 25px solid rgba(92, 167, 198, .5); }
	.page1 > dd:first-of-type { bottom: 34vw; left: 34.5vw; color: rgba(92, 167, 198, 1); }
	.page1 > dd:last-of-type  { bottom: 32vw; left: 34.5vw; }
	
	.page2 > dt { bottom: 18.5vw; left: 30vw; border: 25px solid rgba(255, 64, 95, .5); }
	.page2 > dd:first-of-type { bottom: 17vw; left: 28.5vw; color: rgba(255, 64, 95, 1); }
	.page2 > dd:last-of-type  { bottom: 15vw; left: 19.5vw; }
	
	.page3 > dt { bottom: 22vw; right: 18vw; border: 25px solid rgba(255, 148, 92, .5); }
	.page3 > dd:first-of-type { bottom: 36vw; right: 45vw; color: rgba(255, 148, 92, 1); }
	.page3 > dd:last-of-type  { bottom: 34vw; right: 45vw; }
	
	.page4 > dt { bottom: 3vw; right: 17vw; border: 25px solid rgba(170, 104, 166, .5); }
	.page4 > dd:first-of-type { bottom: 26vw; right: 39vw; color: rgba(170, 104, 166, 1); }
	.page4 > dd:last-of-type  { bottom: 24vw; right: 39vw; }
</style>