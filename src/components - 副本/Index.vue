<template>
	<div class="wrapper">
		<div class="head">
			<div class="user">
				<div class="userImg"><img src="../assets/userImg.jpg" /></div>
				<span><a href="javascript:;">admin</a></span>
				<router-link to="/" class="out"><img src="../assets/out.png"/></router-link>
			</div>
			<div class="indexlogo"><span><img src="../assets/logo.png"/></span>互联网接入平台</div>
		</div>
		<div class="main">
			<NavView></NavView>
		<!--	<HomeView></HomeView>-->
			 <router-view/>
		</div>
	</div>
	
</template>

<script>
	import NavView from '../components/Nav.vue'
	import $ from 'jquery'
	export default {
		components:{
		    NavView,	    
		},
		mounted () {
		}
	}
</script>

<style>
.wrapper {
	height: 100%;
}
.user span {
	float: left;
	display: block;
	overflow: hidden;
}
.out {
	float: left;
	width: 18px;
	height: 18px;
	display: block;
	overflow: hidden;
	line-height: 18px;
	margin: 18px 0px 0px 10px;
}
</style>