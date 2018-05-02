<template>
  <div class="mRight">
    <div class="mRightTwo">
      <div class="zForm">
        <span>登录类型：</span>
        <div class="zSelect">
          <el-select v-model="value" class="zgroup" placeholder="--请选择--">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <span class="paddingLeft">账号：</span><input class="zInput" type="text" placeholder="" />
        <span>唯一编码：</span><input class="zInput" type="text" placeholder="" />        
        <span>流媒体服务器：</span>
        <div class="zSelect">
          <el-select v-model="value" class="zgroup" placeholder="--请选择--">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <button>查询</button><button>全部</button>
        <span class="btnRight"><button>批量新增</button><button>新增</button><button>删除</button><button>启用</button><button>禁用</button></span>
      </div>
      <div class="zTable">
        <div class="elTable">
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column type="index" label="序号" width="54"></el-table-column>
          <el-table-column prop="uerId" label="用户编号" width="80"></el-table-column>
          <el-table-column label="头像" width="50">
            <template slot-scope="scope">
              <a href="javascript:;"><img src="../../assets/userimg2.png" alt=""></a>
            </template>
          </el-table-column>
          <el-table-column prop="username" label="账号" width="116"></el-table-column>
          <el-table-column prop="name" label="姓名" width="116"></el-table-column>
          <el-table-column prop="phone" label="手机号" width="116"></el-table-column>
          <el-table-column prop="userGroup" label="用户组" width="68"></el-table-column>
          <el-table-column prop="device" label="绑定设备" width="100"></el-table-column>
          <el-table-column prop="media" label="流媒体" width="90"></el-table-column>
          <el-table-column prop="city" label="组织架构" width="100"></el-table-column>
          <el-table-column prop="role" label="角色" width="100"></el-table-column>
          <el-table-column prop="YesNo" label="是否启用" width="100"></el-table-column>
          <el-table-column prop="police" label="一键报警" width="86"></el-table-column>
          <el-table-column label="添加日期" width="180">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column label="查看" width="60">
            <template slot-scope="scope">
              <a href="javascript:;"><img src="../../assets/edit2.png" alt=""></a>
            </template>
          </el-table-column>
          <el-table-column label="编辑" width="60">
            <template slot-scope="scope">
              <a href="javascript:;"><img src="../../assets/look.png" alt=""></a>
            </template>
          </el-table-column>
          <el-table-column label="移动" width="60">
            <template slot-scope="scope">
              <a href="javascript:;"><img src="../../assets/look.png" alt=""></a>
            </template>
          </el-table-column>
        </el-table>
        </div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    data() {
      return {
        value: "",
        options: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "蚵仔煎"
          },
          {
            value: "选项4",
            label: "龙须面"
          },
          {
            value: "选项5",
            label: "北京烤鸭"
          }
        ],  
        options2: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "蚵仔煎"
          },
          {
            value: "选项4",
            label: "龙须面"
          },
          {
            value: "选项5",
            label: "北京烤鸭"
          }
        ],
        tableData3: [{
          uerId: '1024',
          username: '13600001111',
          name: '18600000002',
          phone: '13600001111',
          userGroup: 'test',
          device: '0',
          media: '223',
          city: '上海市',
          role: 'test',
          YesNo: '启用',
          police: '禁用',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '1024',
          username: '13600001111',
          name: '18600000002',
          phone: '13600001111',
          userGroup: 'test',
          device: '0',
          media: '223',
          city: '上海市',
          role: 'test',
          YesNo: '启用',
          police: '禁用',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '1024',
          username: '13600001111',
          name: '18600000002',
          phone: '13600001111',
          userGroup: 'test',
          device: '0',
          media: '223',
          city: '上海市',
          role: 'test',
          YesNo: '启用',
          police: '禁用',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '1024',
          username: '13600001111',
          name: '18600000002',
          phone: '13600001111',
          userGroup: 'test',
          device: '0',
          media: '223',
          city: '上海市',
          role: 'test',
          YesNo: '启用',
          police: '禁用',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '1024',
          username: '13600001111',
          name: '18600000002',
          phone: '13600001111',
          userGroup: 'test',
          device: '0',
          media: '223',
          city: '上海市',
          role: 'test',
          YesNo: '启用',
          police: '禁用',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '1024',
          username: '13600001111',
          name: '18600000002',
          phone: '13600001111',
          userGroup: 'test',
          device: '0',
          media: '223',
          city: '上海市',
          role: 'test',
          YesNo: '启用',
          police: '禁用',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '1024',
          username: '13600001111',
          name: '18600000002',
          phone: '13600001111',
          userGroup: 'test',
          device: '0',
          media: '223',
          city: '上海市',
          role: 'test',
          YesNo: '启用',
          police: '禁用',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '1024',
          username: '13600001111',
          name: '18600000002',
          phone: '13600001111',
          userGroup: 'test',
          device: '0',
          media: '223',
          city: '上海市',
          role: 'test',
          YesNo: '启用',
          police: '禁用',
          date: '2016/05/03 15:30:21',
        },],
        currentPage4: 4
      }
    },
    mounted: function() {
      var hei = document.documentElement.clientHeight;
      $('.mRightTwo').css('height', hei - 178);
      // $('tr td').addClass('tdaa')
    },
    methods: {
      toggleSelection(rows) {
        if(rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style>
.paddingLeft {
  padding-left: 20px;
}
input.el-input__inner:hover {
  border: 1px #3b4872 solid;
}
</style>
