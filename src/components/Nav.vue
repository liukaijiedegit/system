<template>

	<div class="mLeft">
		<div class="navMenubox">
			<el-row class="tac">
				<el-col :span="24">
					<el-menu uniqueOpened=true  default-active="1-1" @open="handleOpen" @close="handleClose" class="el-icon-caret-top" background-color="#2d3859" text-color="#fff" active-text-color="#ffd04b">
						<el-submenu index="1">
							<template slot="title">
								<!-- <i class="el-icon-location"></i> -->
								<span slot="title">系统运维</span>
							</template>
							<el-menu-item-group>
								<router-link to="/Index" class="MyOption Myopen Mydefault">
									<el-menu-item class="MyOptionli" index="1-1"><img class="box-log" src="../assets/ico1.png"><span></span>运维总揽 </el-menu-item>
								</router-link>
								<router-link to="/Index/Register" class="MyOption">
									<el-menu-item index="1-2"><img class="box-log" src="../assets/ico2.png"><span></span>服务器实时状态</el-menu-item>
								</router-link>
								<router-link to="/Index/UserStatusDetialList" class="MyOption">
									<el-menu-item index="1-3"><img class="box-log" src="../assets/ico3.png"><span></span>用户实时状态</el-menu-item>
								</router-link>

							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">
								<!-- <i class="el-icon-location"></i> -->
								<span slot="title">组织管理</span>
							</template>
							<el-menu-item-group>
								<router-link to="/Index/Tree" class="MyOption">
									<el-menu-item index="2-1"><img class="box-log" src="../assets/ico4.png"><span></span>组织机构 </el-menu-item>
								</router-link>
								<router-link to="/Index/GroupList" class="MyOption">
									<el-menu-item index="2-2"><img class="box-log" src="../assets/ico5.png"><span></span>用户组管理</el-menu-item>
								</router-link>

							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title">
								<!-- <i class="el-icon-location"></i> -->
								<span slot="title">设备管理</span>
							</template>
							<el-menu-item-group>
								<router-link to="/Index/MediaServer" class="MyOption">
									<el-menu-item index="3-2"><img class="box-log" src="../assets/ico6.png"><span></span>服务器管理</el-menu-item>
								</router-link>
								<router-link to="/Index/DeviceList" class="MyOption">
									<el-menu-item index="3-3"><img class="box-log" src="../assets/ico7.png"><span></span>设备管理 </el-menu-item>
								</router-link>
								<router-link to="/Index/BoxDeviceList" class="MyOption">
									<el-menu-item index="3-1"><img class="box-log" src="../assets/ico8.png"><span></span>协转服务器版本管理</el-menu-item>
								</router-link>
								<router-link to="/Index/TerminalList" class="MyOption">
									<el-menu-item index="3-4"><img class="box-log" src="../assets/ico9.png"><span></span>网管数据设备管理</el-menu-item>
								</router-link>
								<router-link to="/Index/BoxDeviceReStartList" class="MyOption">
									<el-menu-item index="3-5"><img class="box-log" src="../assets/ico10.png"><span></span>协转服务器自动重启配置 </el-menu-item>
								</router-link>

							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="4">
							<template slot="title">
								<!-- <i class="el-icon-location"></i> -->
								<span slot="title">用户管理</span>
							</template>
							<el-menu-item-group>
								<router-link to="/Index/UserList" class="MyOption">
									<el-menu-item index="4-1"><img class="box-log" src="../assets/ico11.png"><span></span>用户管理 </el-menu-item>
								</router-link>
								<router-link to="/Index/AuthorizeList" class="MyOption">
									<el-menu-item index="4-2"><img class="box-log" src="../assets/ico12.png"><span></span>权限管理</el-menu-item>
								</router-link>
								<router-link to="/Index/MenuList" class="MyOption">
									<el-menu-item index="4-3"><img class="box-log" src="../assets/ico13.png"><span></span>菜单管理 </el-menu-item>
								</router-link>

							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="5">
							<template slot="title">
								<!-- <i class="el-icon-location"></i> -->
								<span slot="title">直播管理</span>
							</template>
							<el-menu-item-group>
								<router-link to="/Index/ChannelList" class="MyOption">
									<el-menu-item index="5-1"><img class="box-log" src="../assets/ico14.png"><span></span>IPTV频道管理 </el-menu-item>
								</router-link>

							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="6">
							<template slot="title">
								<!-- <i class="el-icon-location"></i> -->
								<span slot="title">点播管理</span>
							</template>
							<el-menu-item-group>
								<router-link to="/Index/ProgramCategoryList" class="MyOption">
									<el-menu-item index="6-1"><img class="box-log" src="../assets/ico15.png"><span></span>资源类别 </el-menu-item>
								</router-link>
								<router-link to="/Index/ResourcesList" class="MyOption">
									<el-menu-item index="6-2"><img class="box-log" src="../assets/ico16.png"><span></span>资源管理</el-menu-item>
								</router-link>
								<router-link to="/Index/VodManager" class="MyOption">
									<el-menu-item index="6-3"><img class="box-log" src="../assets/ico17.png"><span></span>媒体库管理 </el-menu-item>
								</router-link>
<router-link to="/Index/ResourcesAuditList" class="MyOption">
									<el-menu-item index="6-3"><img class="box-log" src="../assets/ico18.png"><span></span>资源审核 </el-menu-item>
								</router-link>

							</el-menu-item-group>
						</el-submenu>
						
						<el-submenu index="7">
							<template slot="title">
								<!-- <i class="el-icon-location"></i> -->
								<span slot="title">监控管理</span>
							</template>
							<el-menu-item-group>
								<router-link to="/Index/MonitorList" class="MyOption ">
									<el-menu-item index="7-1"><img class="box-log" src="../assets/ico19.png"><span></span>监控资源 </el-menu-item>
								</router-link>
								<router-link to="/Index/CameraGroup" class="MyOption">
									<el-menu-item index="7-2"><img class="box-log" src="../assets/ico20.png"><span></span>摄像机组管理</el-menu-item>
								</router-link>
								
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="8">
							<template slot="title">
								<!-- <i class="el-icon-location"></i> -->
								<span slot="title">日志管理</span>
							</template>
							<el-menu-item-group>
								<router-link to="/Index/UserControlLog" class="MyOption">
									<el-menu-item index="8-1"><img class="box-log" src="../assets/ico21.png"><span></span>用户操作日志 </el-menu-item>
								</router-link>
								<router-link to="/Index/MediaServerOnlineLog" class="MyOption">
									<el-menu-item index="8-2"><img class="box-log" src="../assets/ico22.png"><span></span>流媒体状态日志</el-menu-item>
								</router-link>
								<router-link to="/Index/MediaServerUpgradeLog" class="MyOption">
									<el-menu-item index="8-2"><img class="box-log" src="../assets/ico23.png"><span></span>协转升级日志</el-menu-item>
								</router-link>
								
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="9">
							<template slot="title">
								<!-- <i class="el-icon-location"></i> -->
								<span slot="title">系统管理</span>
							</template>
							<el-menu-item-group>
								<router-link to="/Index/VersionList" class="MyOption">
									<el-menu-item index="9-1"><img class="box-log" src="../assets/ico24.png"><span></span>版本管理 </el-menu-item>
								</router-link>
								<router-link to="/Index/SysConfig" class="MyOption">
									<el-menu-item index="9-2"><img class="box-log" src="../assets/ico25.png"><span></span>系统设置</el-menu-item>
								</router-link>
								<router-link to="/Index/NetworkManageConfig" class="MyOption">
									<el-menu-item index="9-2"><img class="box-log" src="../assets/ico26.png"><span></span>导入网管数据设置</el-menu-item>
								</router-link>
								
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-col>
			</el-row>

		</div>
	</div>
</template>

<script>




	export default {
	
		methods: {
		
			handleOpen(key, keyPath) {
				// console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				// console.log(key, keyPath);
			}
		}
	}
	import $ from 'jquery'




	$(function() {
		var wid = document.documentElement.clientWidth,
			hei = document.documentElement.clientHeight;
		var fheight = $('.head').height();

		$('.mLeft').css('height', hei - fheight);
		$('.mrLeft').css('height', hei - fheight - 12);
		$('.mrCenter').css('height', hei - fheight - 12);;
		$('.navMenubox').css('height', hei - fheight);
		$('.centerBox').css('height', $(".centerBox").height() + 24);
		console.log("11")
		
		

	});
</script>

<style>
.el-menu{
	width: 100%;
}
	.el-menu-item {
		padding-left: 10px !important;
	}
	
	.mLeft {
		float: left;
		width: 8.8%;
		/*width: 169px;*/
		overflow: hidden;
		background: #2e3859;
	}
	
	.navMenubox {
		overflow: hidden;
		overflow-y: auto;
	}
	
	.navMenu>li {
		display: block;
		margin: 0;
		padding: 0;
		border: 0px;
	}
	
	.box-log {
		width: 15px;
		height: 15px;
	}
	.Myopen li{
    color: #FFF;
    background: #161d33 !important;
    border-left: 2px solid #57e29b;
}
	.MyOption span {
		display: inline-block;
		width: 10px;
		height: 10px;
	}
	.Mydefault li{
			 color: #FFF;
    background: #161d33 !important;
    border-left: 2px solid #57e29b;
	}
	
	.MyOption li:focus{
		 color: #FFF;
    background: #161d33 !important;
    border-left: 2px solid #57e29b;
	}
	.MyOption li{
    color: #FFF;
    background:transparent !important;
    border-left: 2px solid transparent;
	}
    /* .is-opened{
     background: #161d33
    } */


</style>