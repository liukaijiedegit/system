<template>
		<div class="loginBody">
		<div id="content-lkj">
			<div class="wraper ">
				<div class="loginTitle">互联网接入平台</div>
				<div class="loginBox">
					<div class="loginMain">
						<div class="loginForm">
							<div class="logo"><img src="../assets/loginlogo.png" alt=""></div>
							<div class="userName inputBg">
								<span><img src="../assets/userName.png" alt=""></span>
								<input @click="blank()" class="username" name="login" type="text" value="admin" maxlength="16" autocomplete="off" placeholder="admin">
							</div>
							<div class="passWord inputBg">
								<span><img src="../assets/password.png" alt=""></span>
								<input @click="blank()" class="password" name="pwd" type="password" maxlength="16" autocomplete="off" placeholder="密码">
							</div>
							<div class="verificationCode">
								<input @click="blank()" class="ValidateNum" name="code" type="text" maxlength="4" autocomplete="off" placeholder="验证码">
								<div class="code">
									<canvas class="J_codeimg" id="myCanvas" @click="Code();">对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas>
								</div>
								<!--<span class="refresh"><img src="../assets/refresh.png" alt=""></span>-->
							</div>
							<div class="errorInfo"></div>
							<div class="submit">
								<input type='button' @click="clickSignIn('signForm')" value='登录'>
							</div>
						</div>
					</div>
					<div class="loginBg"><img src="../assets/loginBg.png" alt=""></div>
				</div>
			</div>
			<div class="Copyright">©2017北京视联动力国际信息技术有限公司</div>
		</div>
	</div>
</template>

<script>

	import $ from 'jquery'

	var CodeVal = 0;
	const canGetCookie = 1;
	//是否支持存储Cookie 0 不支持 1 支持
	const truelogin = "admin";
	const truepwd = "admin888";
	const code = "";
	//生成验证码
	$(document).keypress(function(e) {
		// 回车键事件
		if(e.which == 13) {
			console.log("点击了回车")
			$('input[type="button"]').click();
		}
	});
	$('.refresh').click(function() {
		Code();
	});
	
	export default {
		data() {

			return {}
		},
		mounted() {
			this.loading()
			this.blank()
			this.Code()

		},
		methods: {
			//			背景图适应屏幕
			loading() {
				this.clickSignIn('signForm')
			},
			// 登录验证

			clickSignIn(signForm) {

				var login = $('.username').val();
				var pwd = $('.password').val();
				var code = $('.ValidateNum').val();
				if(login == '') {
					$('.errorInfo').html('<span>*</span>请输入您的账号');
					return false;
				} else if(pwd == '') {
					$('.errorInfo').html('<span>*</span>请输入密码');
					return false;
				} else if(code == '' || code.length != 4) {
					$('.errorInfo').html('<span>*</span>输入验证码')
					return false;

				} else {
					$('.errorInfo').html("")
					this.loginlod()

					console.log(code)

				}
			
			},
			loading() {

				var wid = document.documentElement.clientWidth,
					hei = document.documentElement.clientHeight;

				var fheight = $('.Copyright').height();

				$('.wraper').css('height', hei - fheight);

				$('#content-lkj').css('height', hei - fheight);
				console.log(wid);
				console.log(hei);

			},
			blank() {
				$('.errorInfo').html("")
				console.log("密码")
			},
			loginlod() {
				var login = $('.username').val();
				var pwd = $('.password').val();
				var codes = $('.ValidateNum').val();
				console.log(truelogin)
				console.log(login + pwd + codes)
				console.log(truelogin+truepwd+CodeVal)
				if((login === truelogin) && (pwd === truepwd) && (codes === CodeVal)) {
					console.log("这里是登录")
					this.$router.push({
					path: "/Index"
				})
				
				} else if(login != truelogin) {
					$('.errorInfo').html('<span>*</span>账号输入不正确');
				} else if(pwd != truepwd) {
					$('.errorInfo').html('<span>*</span>密码输入不正确');
				} else if(code != CodeVal) {
					$('.errorInfo').html('<span>*</span>验证码不正确');
				}
			},

			Code() {
				if(canGetCookie == 1) {
					this.createCode("AdminCode");
					var AdminCode = this.getCookieValue("AdminCode");
					this.showCheck(AdminCode);
				} else {
					this.showCheck(createCode(""));
				}
			},
			createCode(e) {
				var code = "";
//				var codeLength = 4;
				var selectChar = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
				for(var i = 0; i < 4; i++) {
					var charIndex = Math.floor(Math.random() * 60);
					code += selectChar[charIndex];
				}
				if(code.length === 3) {
					this.createCode(e);
				}
				if(canGetCookie == 1) {
					this.setCookie(e, code, 60 * 60 * 60, '/');
				} else {
					return code;
				}
			 
				code=code.substr(0,4)
				code=code.toLowerCase()
			
			},
			setCookie(name, value, hours, path) {
				var name = escape(name);
				var value = escape(value);
				var expires = new Date();
				expires.setTime(expires.getTime() + hours * 3600000);
				path = path == "" ? "" : ";path=" + path;
				var _expires = (typeof hours) == "string" ? "" : ";expires=" + expires.toUTCString();
				document.cookie = name + "=" + value + _expires + path;
			},
			//cookie名获取值
			getCookieValue(name) {
				var name = escape(name);
				//读cookie属性，这将返回文档的所有cookie
				var allcookies = document.cookie;
				//查找名为name的cookie的开始位置
				name += "=";
				var pos = allcookies.indexOf(name);
				//如果找到了具有该名字的cookie，那么提取并使用它的值
				if(pos != -1) { //如果pos值为-1则说明搜索"version="失败
					var start = pos + name.length; //cookie值开始的位置
					var end = allcookies.indexOf(";", start); //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
					if(end == -1) end = allcookies.length; //如果end值为-1说明cookie列表里只有一个cookie
					var value = allcookies.substring(start, end); //提取cookie的值
					return unescape(value); //对它解码
				} else return "-1"; //搜索失败，返回-1
			},

			showCheck(a) {
				
				
				 var a=a.substr(0,4)
				 	a=a.toLowerCase()
				   CodeVal = a;
				 
				 console.log('我是验证码'+a)
				var c = document.getElementById("myCanvas");
				if(c != null) {
					var ctx = c.getContext("2d");
					ctx.clearRect(0, 0, 1000, 1000);
					ctx.font = "80px 'Hiragino Sans GB'";
					ctx.fillStyle = "#E8DFE8";
					ctx.fillText(a, 0, 100);
				}

			}

		}
	}
</script>

<style>
</style>