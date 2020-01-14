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
            	<dl class="pages page1">
	                <dt><img src="@/assets/xiaoxiaoq/page1.png"></dt>
	                <dd>至简单</dd>
	                <dd>QQ微信即时通讯交互</dd>
	            </dl>
	            <dl class="pages page2">
	                <dt><img src="@/assets/xiaoxiaoq/page2.png"></dt>
	                <dd>至丰富</dd>
	                <dd>海量QQ音乐语音点播</dd>
	            </dl>
	            <dl class="pages page3">
	                <dt><img src="@/assets/xiaoxiaoq/page3.png"></dt>
	                <dd>至实用</dd>
	                <dd>日常生活讯息智能查询</dd>
	            </dl>
	            <dl class="pages page4">
	                <dt><img src="@/assets/xiaoxiaoq/page4.png"></dt>
	                <dd>至贴心</dd>
	                <dd>专属定制内容远程推送</dd>
	            </dl>
		    </swiper-slide>
		    <swiper-slide class="section">
		    	<swiper :options="sonSwiperOption" class="section3">
		    		<swiper-slide class="sonSwiper">
		    			<h1>将温暖与爱&nbsp;送予家人</h1>
		    		</swiper-slide>
		    		<swiper-slide class="sonSwiper">
		    			<h1>LET'S PLAY<br>再远&nbsp;也亲密无间的沟通</h1>
            			<p>和家人QQ微信远程聊天，再也不需要下载APP<br>亲情、友情圈无限人员绑定，一键沟通最简单了</p>
		    		</swiper-slide>
		    		<swiper-slide class="sonSwiper">
		    			<h1>随时和父母分享美好</h1>
			            <p>直连QQ音乐，无需下载哦，免费就能享受正版<br>相声、古典乐、流行曲、儿歌，只要语音指示，Ta就为我即时播放</p>
			            <img src="@/assets/xiaoxiaoq/music.gif">
		    		</swiper-slide>
		    		<swiper-slide class="sonSwiper">
		    			<h1>让心与心&nbsp;更亲密</h1>
			            <p>Ta能为心爱的人，传递两人专属的亲密心意<br>远程推送定制的信息内容，距离再远没关系，小小Q随时效劳</p>
			            <img src="@/assets/xiaoxiaoq/heart.gif">
		    		</swiper-slide>
		    		<swiper-slide class="sonSwiper">
		    			<h1>给他/她一个全天小玩伴</h1>
			            <p>属于孩子的百科，通过语音沟通，简单获得他们要的信息<br>满足孩子的好奇心，还能查询天气、新闻等更多日常生活资讯</p>
			            <img src="@/assets/xiaoxiaoq/cloud.gif">
		    		</swiper-slide>
		    		<div class="swiper-scrollbar" slot="scrollbar"></div>
		    	</swiper>
		    </swiper-slide>
		    <swiper-slide class="section specs1">
		    	<aside>
	                <span><samp>尺寸</samp><br>102 x 90 x 115mm<br><br><samp>重量</samp><br>220g(机身)</span>
	                <span><samp>材质</samp><br>环保PC材质(通过RoHS国际认证)<br><br><samp>表面加工</samp><br>高级类肤质处理工艺</span>
	                <span><samp>系统／</samp>安卓</span>
	            </aside>
	            <aside>
	                <span><samp>网络／</samp>wifi</span>
	                <span><samp>声音／</samp>高保真音响</span>
	                <span><samp>存储／</samp>8GB</span>
	            </aside>
	            <article class="absolute_center_middle">
	                <div class="ellipse_blue absolute_center_middle"></div>
	                <div class="ellipse_red absolute_center_middle"></div>
	                <div class="ellipse_purple absolute_center_middle"></div>
	                <div class="specs_point absolute_center_middle"></div>
	            </article>
		    </swiper-slide>
		    <swiper-slide class="section specs2">
		    	<h1 id="h1">做工精致 打磨每个细节</h1>
	            <p id="p">为了增加消费者对高科技产品更好的体验，我们对产品品质精益求精，<br>每个器件都经过精心挑选，并经过多次模具和结构设计，<br>最终完美复现经典的QQ形象。<br>
	            整机通过欧盟RoHS消除有害成分国际认证，可安全使用，功能持续升级中。</p>
	            <img v-if="showGif" src="@/assets/xiaoxiaoq/specs_struct.gif">
	            <img v-else src="@/assets/xiaoxiaoq/specs_struct.jpg"">
		    </swiper-slide>
		    <swiper-slide class="section">
		    	<h1>一个新的时代<br>超级品牌&nbsp;超前小小Q</h1>
            	<p>1999年&nbsp;腾讯开始出现在我们的视野<br>18年了&nbsp;给你一个熟悉的小小Q智能机器人</p>
		    </swiper-slide>
		    
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
					}
		    	},
		    	sonSwiperOption:{
		    		autoplay: {
		    			delay: 5000,
		    			disableOnInteraction: false
		    		},
		    		scrollbar: {
					    el: '.swiper-scrollbar',
					    draggable: true,
					},
		    	},
		    	showGif: false, // 第五屏动画的展现
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
	  	},
	  	mounted(){
	  		let swiper = this.swiper;
	  		var that = this;
	  		swiper.on('transitionEnd',function(){ // 滚动到第二屏时 再出发第二屏的动画
	  			that.showGif = false;
	  			if(swiper.activeIndex == '4'){
	  				that.showGif = true;
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


	.section { position: relative; height: 100%; box-sizing: border-box; background-color: #f7f7f7; background-position: 50% 50%; background-size: cover; }
	.section:nth-child(1) { background: url('../../assets/xiaoxiaoq/bg/bg01.jpg') no-repeat bottom center / 100%;}
	.section:nth-child(2) { background: url('../../assets/xiaoxiaoq/bg/bg02.png') no-repeat bottom center / 100%, linear-gradient(to right, #e5edf1, #cad9de,#f7f2f4, #efdce2,#efedf2, #ddd1df,#f3eae4, #efd3c7); }
	.section3{height: 100%;}
	.sonSwiper:nth-child(1) { background: url('../../assets/xiaoxiaoq/bg/bg03.jpg') no-repeat bottom center / 100%; }
	.sonSwiper:nth-child(2) { background: url('../../assets/xiaoxiaoq/bg/bg04.jpg') no-repeat bottom center / 100%; }
	.sonSwiper:nth-child(3) { background: url('../../assets/xiaoxiaoq/bg/bg05.jpg') no-repeat bottom center / 100%; }
	.sonSwiper:nth-child(4) { background: url('../../assets/xiaoxiaoq/bg/bg06.jpg') no-repeat bottom center / 100%; }
	.sonSwiper:nth-child(5) { background: url('../../assets/xiaoxiaoq/bg/bg07.jpg') no-repeat bottom center / 100%; }
	.section:nth-child(6) { background: url('../../assets/xiaoxiaoq/bg/bg08.gif') no-repeat left bottom / auto 80%; }
	@media screen and (min-width: 2000px) {
		.sonSwiper:nth-child(1) { background: url('../../assets/xiaoxiaoq/bg/bg03_retina.jpg') no-repeat bottom center / 100%; }
		.sonSwiper:nth-child(3) { background: url('../../assets/xiaoxiaoq/bg/bg05_retina.jpg') no-repeat bottom center / 100%; }
		.sonSwiper:nth-child(4) { background: url('../../assets/xiaoxiaoq/bg/bg06_retina.jpg') no-repeat bottom center / 100%; }
		.sonSwiper:nth-child(5) { background: url('../../assets/xiaoxiaoq/bg/bg07_retina.jpg') no-repeat bottom center / 100%; }
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
		animation: rotateQrobot 8s infinite;
		animation-timing-function: steps(1);
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
	.section:nth-child(2) > img { position: absolute; width: 107px;}
	.section:nth-child(2) > img.weichat { bottom: 46vh; left: 11vw;}
	.section:nth-child(2) > img.music   { bottom: 63vh; left: 36vw;}
	.section:nth-child(2) > img.cloud   { bottom: 64vh; right: 16vw;}
	.section:nth-child(2) > img.gift    { bottom: 18vh; right: 30vw;}
	
	.pages{ position: absolute; opacity: 0;}
	.pages > dt { overflow: hidden; box-sizing: border-box; width: 22vw; height: 22vw; border-radius: 50%; }
	.pages > dt > img { width: 100%; height: 100%; }
	.pages > dd:first-of-type {width: 100%; font-size: 38px; font-size: 1.9792vw; position: absolute; letter-spacing: 1px; text-align: left;}
	.pages > dd:last-of-type {width: 100%; font-size: 30px; font-size: 1.5625vw; position: absolute; letter-spacing: 1px; text-align: left;}
	
	.page1{ top: 12vw; left: 3vw;}
	.page1 > dt { border: 25px solid rgba(92, 167, 198, .5); }
	.page1 > dd:first-of-type { bottom: -4vw; left: 5vw; color: rgba(92, 167, 198, 1); }
	.page1 > dd:last-of-type  { bottom: -6vw; left: 5vw; }
	
	.page2{ top: 4vw; left: 28vw;}
	.page2 > dt { border: 25px solid rgba(255, 64, 95, .5); }
	.page2 > dd:first-of-type { bottom: 19vw; left: -22vw; color: rgba(255, 64, 95, 1); text-align: right;}
	.page2 > dd:last-of-type  { bottom: 17vw; left: -22vw; text-align: right;}
	
	.page3{ top: 2.5vw; right: 6vw;}
	.page3 > dt { border: 25px solid rgba(255, 148, 92, .5); }
	.page3 > dd:first-of-type { bottom: 7vw; right: 23vw; color: rgba(255, 148, 92, 1); text-align: right;}
	.page3 > dd:last-of-type  { bottom: 5vw; right: 23vw; text-align: right;}
	
	.page4{ bottom: 2vw; right: 21vw;}
	.page4 > dt { border: 25px solid rgba(170, 104, 166, .5); }
	.page4 > dd:first-of-type { bottom: 2vw; right: -21vw; color: rgba(170, 104, 166, 1); }
	.page4 > dd:last-of-type  { bottom: 0vw; right: -21vw; }
	
	.page1{
		animation: enter 5s ease 0.1s ;
		animation-fill-mode: forwards;
	}
	.page2{
		animation: enter 5s ease 5s;
		animation-fill-mode: forwards;
	}
	.page3{
		animation: enter 5s ease 10s;
		animation-fill-mode: forwards;
	}
	.page4{
		animation: enter 5s ease 15s;
		animation-fill-mode: forwards;
	}
	@keyframes enter{
		from{opacity: 0.1;}
		to{opacity: 1;}
	}
	
	/*section3*/
	.sonSwiper > h1,.sonSwiper > p { position: absolute; right: 6.25vw; left: 6.25vw;}
	.sonSwiper > h1 {
		bottom: 34vw;
	}
	.sonSwiper > p {
		bottom: 30vw;
	}
	.sonSwiper:nth-child(1)>h1, .sonSwiper:nth-child(3)>h1, .sonSwiper:nth-child(3)>p,.sonSwiper:nth-child(5)>h1, .sonSwiper:nth-child(5)>p{text-align: right;}
	.sonSwiper:nth-child(2)>h1, .sonSwiper:nth-child(2)>p{text-align: left;}
	.sonSwiper:nth-child(4)>h1, .sonSwiper:nth-child(4)>p{text-align: right; color: #fff;}
	.sonSwiper:nth-child(4)>h1{margin-top: 28vw;}
	.sonSwiper:nth-child(3) > img { position: absolute; bottom: 9vw; left: 46.5vw; width: 15vw; }
	.sonSwiper:nth-child(4) > img { position: absolute; bottom: 12vw; left: 25vw; width: 40vw; }
	.sonSwiper:nth-child(5) > img { position: absolute; bottom: 30vw; left: 15vw; width: 30vw; }
	
	/*section4*/
	.absolute_center_middle { position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; }
	.specs1 { position: relative; }
	.specs1 > aside { position: relative; display: block; width: 23.4375%; height: 100%;}
	.specs1 > aside > span { font-size: 20px; font-size: 1.04vw; position: absolute; display: block;}
	.specs1 > aside > span:before,
	.specs1 > aside > span:after { position: absolute; display: block; content: ''; background: #878787; }
	.specs1 > aside > span:before { width: 12px; height: 12px; border-radius: 50%; }
	.specs1 > aside > span > samp { font-family: 'Microsoft YaHei'; font-size: 22px; font-size: 1.1458vw; font-weight: lighter; color: #3992bc;}
	.specs1 > aside:first-of-type { float: left;}
	.specs1 > aside:last-of-type { float: right;}
	.specs1 > aside:first-of-type > span:nth-of-type(1) { right: 0; bottom: 55%; text-align: right; }
	.specs1 > aside:first-of-type > span:nth-of-type(1):before { top: 10%; right: -15%; }
	.specs1 > aside:first-of-type > span:nth-of-type(1):after { top: 12.5%; right: -260%; width: 245%; height: 2px; }
	.specs1 > aside:first-of-type > span:nth-of-type(2) { right: 0; bottom: 16.5vw; text-align: right; }
	.specs1 > aside:first-of-type > span:nth-of-type(2):before { top: 8%; right: -9%; }
	.specs1 > aside:first-of-type > span:nth-of-type(2):after { top: 11%; right: -122%; width: 115%; height: 2px; }
	.specs1 > aside:first-of-type > span:nth-of-type(3) { right: 0; bottom: 7vw; text-align: right; }
	.specs1 > aside:first-of-type > span:nth-of-type(3):before { top: 35%; right: -24%; }
	.specs1 > aside:first-of-type > span:nth-of-type(3):after { top: -270%; right: -420%; width: 400%; height: 5vw; border: 2px solid #878787; border-top: none; border-left: none; background: transparent; }
	.specs1 > aside:last-of-type > span:nth-of-type(1) { bottom: 31vw; left: 0; text-align: left; }
	.specs1 > aside:last-of-type > span:nth-of-type(1):before { top: 35%; left: -20%; }
	.specs1 > aside:last-of-type > span:nth-of-type(1):after { top: 46%; left: -400%; width: 385%; height: 2px; }
	.specs1 > aside:last-of-type > span:nth-of-type(2) { bottom: 23.5vw; left: 0; text-align: left; }
	.specs1 > aside:last-of-type > span:nth-of-type(2):before { top: 35%; left: -12%; }
	.specs1 > aside:last-of-type > span:nth-of-type(2):after { top: 48%; left: -220%; width: 210%; height: 2px; }
	.specs1 > aside:last-of-type > span:nth-of-type(3) { bottom: 7vw; left: 0; text-align: left; }
	.specs1 > aside:last-of-type > span:nth-of-type(3):before { top: 35%; left: -24%; }
	.specs1 > aside:last-of-type > span:nth-of-type(3):after { top: -270%; left: -420%; width: 400%; height: 5vw; border: 2px solid #878787; border-top: none; border-right: none; background: transparent; }
	.specs1 > article { width: 40%; height: 80%; overflow: visible;
		-webkit-transform-style: preserve-3d;
		   -moz-transform-style: preserve-3d;
		    -ms-transform-style: preserve-3d;
		     -o-transform-style: preserve-3d;
		        transform-style: preserve-3d;
	}
	.ellipse_blue { width: 30vw; height: 30vw; border: 2px solid #3894be; border-radius: 50%;
	    animation: ellipse_blue linear 10s infinite;
	}
	.ellipse_red { width: 40vw; height: 40vw; border: 2px solid #f00; border-radius: 50%;
	    animation: ellipse_red linear 17.5s infinite;
	}
	.ellipse_purple { width: 40vw; height: 40vw; border: 2px solid #b276b1; border-radius: 50%;
	    animation: ellipse_purple linear 25s infinite;
	}
	.specs_point { 
		background: url("../../assets/xiaoxiaoq/specs_point.png") no-repeat center center;
		background-size: 60%;
	}
	@keyframes ellipse_blue {
		from { transform: rotateX(0deg);   }
		to   { transform: rotateX(360deg); }
	}
	@keyframes ellipse_red {
		from { transform: rotateX(0deg) rotateY(0deg);     }
		to   { transform: rotateX(360deg) rotateY(360deg); }
	}
	@keyframes ellipse_purple {
		from { transform: rotateY(0deg);   }
		to   { transform: rotateY(360deg); }
	}
	
	/*section5*/
	.specs2 { width: 86.5vw; margin: 10vh auto 0; }
	.specs2 > img { display: block; float: left; width: 100%; }
	.specs2{
		width: 100%;
		margin: 0; 
	}
	#specs #h1,#specs #p{
		position: inherit;
		opacity: 1;
	}
	
	/*section6*/
	.section:nth-child(6) > h1,.section:nth-child(6) > p { position: absolute; right: 6.25vw; left: 6.25vw;text-align: right;}
	.section:nth-child(6)>h1{bottom: 12vw;}
	.section:nth-child(6)>p{bottom: 8vw;}
</style>