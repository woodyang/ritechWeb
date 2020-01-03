<template>
	<div class="rcnews">
		<div class="banner">
			<h1>新闻资讯</h1>
			<h2>News</h2>	
		</div>
		<div class="news-box">
			<div class="box-title">
				<el-switch
					v-model="switchNews"
					active-text="公司新闻"
					inactive-text="媒体报道"
					@change="getNews">
				</el-switch>
			</div>
			<!-- 新闻列表区 -->
			<div v-if="!sigNews">
				<div v-for="(item, index) in newsList" :key="index">
					<news-detail :titleCover="item.titleCover" :title="item.title" :decs="item.decs" :index="index" :time="item.time"  @getIndex="getIndex"></news-detail>
				</div>
			</div>
			<!-- 具体新闻区 -->
			<div v-else>
				<div class="back-list">
					<el-button plain icon="el-icon-arrow-left" @click="backToList">返回新闻列表</el-button>
				</div>
				<div class="single-news">
					<div class="newstitle">
						<h2>{{singleNews.title}}</h2>
						<div><span class="publisher">{{singleNews.publisher}}</span><span class="time">发表时间：{{singleNews.updataTime}}</span></div>
					</div>
					<div class="news-body" v-for="item in singleNews.newsBody" :key="item">
						<el-image v-if="item.match('http://ritech.cn')" :src="item"></el-image>
						<a v-else-if="item.match('http')" :href="item" target="_blank">点击查看原文</a>
						<p v-else>{{item}}</p>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import newsDetail from '@/components/company/NewsDetailComponents'
	import axios from 'axios'
	export default {
	  	data () {
	    	return {
	      		switchNews: true,
	      		newsList: false,
	      		sigNews: false,
	      		singleNews:'',
	      		
	    	}
	  	},
	  	components:{
	  		newsDetail
	  	},
	  	methods:{
	  		getNews(value){ //切换获取新闻
	  			let tag = value ? 'c' : 'm';
	  			this.getPartNews(tag).then(res=>{
	  				this.sigNews = false;
		  			this.newsList = res;
		  		})
	  		},
	  		getPartNews(tag){ // 拉取数据
			    return new Promise((resolve, reject) => {
		  			axios.post('http://localhost:3000/news',{
		  				tag:tag
		  			})
				    .then(response=>{
				        if(response.data.code === 200){
					        let responseData = response.data.data;
					        resolve(responseData)
				        }
				    })
				    .catch(error=>{
				        console.log(error);
				        reject(error);
				    })
		  		})
			},
			getIndex(index){ // 显示具体新闻
				this.sigNews = true;
				let singleNews = this.newsList[index];
				this.singleNews = singleNews;
				console.log(singleNews)
			},
			backToList(){
				this.sigNews = false;
			}
	  	},
	  	created(){ // 加载页面，获取
	  		this.getPartNews('c').then(res=>{
	  			this.newsList = res;
	  		})
	  	}
	}
</script>

<style scoped>
	.rcnews{
		margin: 61px 0 30px;
	}
	.banner{
		height: 290px;
		color: white;
		text-align: left;
		text-indent: 150px;
		background: url(../../assets/banner.png) no-repeat center top / 100% 110%;
	}
	h1{
		font-size: 45px;
		font-weight: normal;
		margin-top: 0;
		padding-top: 90px;
	}
	h2{
		font-size: 30px;
		font-weight: normal;
	}
	.news-box{
		width: 80%;
		margin: 21px auto 0;
	}
	.box-title{
		height: 48px;
		line-height: 48px;
		font-size: 16px;
		border-bottom: 2px solid #409EFF;
		text-align: left;	
	}
	
	.back-list{
		text-align: left;
		padding: 20px 0 20px;
	}
	.single-news{
		width: 70%;
		margin: 0 auto 50px;
	}
	.newstitle{
		margin-bottom: 16px;
		padding-bottom: 8px;
		border-bottom: 1px solid #bdbabb;
	}
	.newstitle>h2{
		font-size: 18px;
		text-align: center;
	}
	.newstitle>div{
		margin: 8px 0;
		color: gray;
		height: 16px;
	}
	.publisher{
		float: left;
		margin-left: 32px;
	}
	.time, a{
		float: right;
		margin-right: 32px;
	}
	.news-body p{
		text-align: left;
		font-size: 16px;
		text-indent: 32px;
		line-height: 1.5;
		margin: 10px 0;
	}
</style>