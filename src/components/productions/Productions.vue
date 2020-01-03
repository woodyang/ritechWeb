<template>
	<div class="container">
		<swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide v-for="item in productData.productImgUrl" :key="item">
		    	<el-image :src="item"></el-image>
		    </swiper-slide>
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		</swiper>
		
		<h3>产品名称：{{productData.productId}} {{productData.productName}}</h3>
		<ul>
			<li v-for="(item,key) in productData.productDetail" :key="item">
				{{ key }} : {{ item }}
			</li>
		</ul>
	</div>
	
</template>

<script>
	import axios from 'axios'
	export default {
	  	data () {
	    	return {
	      		productData:'',
	      		swiperOption: {
		        	autoplay: true,
		        	loop : true,
		        	navigation: {
				    	nextEl: '.swiper-button-next',
				    	prevEl: '.swiper-button-prev',
				    },
		        }
	    	}
	  	},
	  	methods:{
	  		getProducts(productId){
	  			axios.post('http://localhost:3000/products',{
	  				productId:productId
	  			})
			    .then(response=>{
			        if(response.data.code === 200){
				        let responseData = response.data.data;
				        this.productData = responseData;
			        }
			    })
			    .catch(error=>{
			        console.log(error);
			    })
	  		}
	  	},
	  	created(){
	  		let productId = this.$route.query.id;
	  		this.getProducts(productId);
		},
		watch:{
		  	$route: {
			    handler: function(val, oldVal){
			    	let productId = val.query.id;
			    	this.getProducts(productId)
			    },
			    // 深度观察监听
			    deep: true
			}
	  	}
	}
</script>

<style scoped>
	.container{
		width: 80%;
		margin: 61px auto 30px;
		color: #767271;
	}
	.swiper-container{
		height: 500px;
	}
	.el-image{
		width: 70%;
		height: 100%;
		margin: 0 auto;
	}
	h3{
		text-align: left;
		color: #409EFF;
		margin: 20px 0;
	}
	ul{
		display: flex;
		display: -ms-flexbox;
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	li{
		width: 50%;
		height: 45px;
		line-height: 45px;
		text-align: left;
	}
</style>