<template>
  <div id="app">
 
    <router-view/>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'App',
  mounted: function(){
    var wid = document.documentElement.clientWidth,
					hei = document.documentElement.clientHeight;
				var fheight = $('.Copyright').height();
				$('.wraper').css('height', hei - fheight);
  },
  //  created() {
  //   this.$router.push('/index')
  //  }
 
}

</script>

<style>
 @import url("style/init.css");
 #app {
   height: 100%;
 }
</style>
