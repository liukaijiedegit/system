<template>
	<div class="mRight">
		<div class="mRightTree">
			<h3>组织机构管理</h3>
			<div class="zmainBox">
				<div class="zboxLeft">
					<div class="zTree">
						<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
					</div>
				</div>
				<div class="zboxRight">
					<div class="zrightMenu">
						<ul>
							<li><img src="../../assets/refresh2.png" /><span>刷新</span></li>
							<li><img src="../../assets/add.png" /><span>新增等级组</span></li>
							<li><img src="../../assets/add.png" /><span>新增</span></li>
							<li><img src="../../assets/edit.png" /><span>编辑</span></li>
							<li><img src="../../assets/remove.png" /><span>删除</span></li>
						</ul>
					</div>
					<div class="zrighttable">
						<ul>
							<li class="zname">机构名称：</li>
							<li class="zinput"><input type="text" name="name" id="" value="北京" disabled /></li>
							<li class="zname">父级机构：</li>
							<li class="zinput"><input type="text" name="parentname" value="北京" id="" disabled /></li>
							<li class="zname">组织代码：</li>
							<li class="zinput"><input type="text" name="code" id="" value="北京" disabled /></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				data: [{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}, {
					label: '一级 2',
					children: [{
						label: '二级 2-1',
						children: [{
							label: '三级 2-1-1'
						}]
					}, {
						label: '二级 2-2',
						children: [{
							label: '三级 2-2-1'
						}]
					}]
				}, {
					label: '一级 3',
					children: [{
						label: '二级 3-1',
						children: [{
							label: '三级 3-1-1'
						}]
					}, {
						label: '二级 3-2',
						children: [{
							label: '三级 3-2-1'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		},
		mounted: function() {
			var hei = document.documentElement.clientHeight;
			$('.mRightTree').css('height', hei - 110);
			var boxhei = $('.mRightTree').height();
			$('.zboxLeft').css('height', boxhei - 50)
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			}
		}
	}
</script>
<style>
	.mRightTree {
		margin: 15px 27px 15px 15px;
		background: #354166;
		box-shadow: 0px 0px 26px #01060e;
	}
	
	.mRightTree h3 {
		color: #fff;
		height: 50px;
		font-size: 16px;
		line-height: 50px;
		padding-left: 20px;
		font-weight: normal;
		background: -webkit-linear-gradient(#283357, #404d74);
		background: -o-linear-gradient(#283357, #404d74);
		background: -moz-linear-gradient(#283357, #404d74);
		background: linear-gradient(#283357, #404d74);
	}
	
	.zmainBox {
		overflow: hidden;
	}
	
	.zboxLeft {
		float: left;
		width: 17.5%;
		border-right: 1px #3f4d76 solid;
	}
	
	.zTree {
		padding: 14px 0px 0px 32px;
	}
	
	.zboxRight {
		float: left;
		width: 76%;
		padding: 38px 0 0 35px;
	}
	
	.zrightMenu {
		overflow: hidden;
		padding-bottom: 19px;
	}
	
	.zrightMenu li {
		float: left;
		width: 45px;
		cursor: pointer;
		overflow: hidden;
		text-align: center;
		margin-right: 24px;
	}
	
	.zrightMenu li:nth-child(2) {
		width: 88px;
	}
	
	.zrightMenu li span {
		width: 100%;
		display: inline-block;
	}
	
	.zrighttable {
		width: 844px;
		overflow: hidden;
		border: 1px #4a567c solid;
	}
	
	.zrighttable li {
		float: left;
		width: 418px;
		height: 36px;
		line-height: 36px;
		border: 2px #4a567c solid;
	}
	
	.zrighttable li.zname {
		width: 398px;
		background: #1b274c;
		text-align: right;
		padding-right: 20px;
	}
	
	.zrighttable li.zinput {
		background: #2a3558;
	}
	
	.zrighttable li.zinput input {
		background: none;
		height: 36px;
		padding-left: 8px;
	}
	.el-tree,
	.el-tree-node__content:hover,
	.el-tree-node:focus>.el-tree-node__content {
		background: none;
	}
</style>