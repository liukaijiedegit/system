<template>
  <div class="mRight">
    <div class="mRightTwo">
      <div class="zForm">
        <span>服务器名称：</span><input class="zInput" type="text" placeholder="" /><button>查询</button><button>全部</button>
      </div>
      <div class="zTable">
        <div class="elTable">
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
          <el-table-column type="index" label="序号" width="90"></el-table-column>
          <el-table-column prop="uerId" label="区域" width="90"></el-table-column>
          <el-table-column prop="userImg" label="服务器名称" width="100"></el-table-column>
          <el-table-column prop="username" label="版本号" width="130"></el-table-column>
          <el-table-column prop="name" label="IP地址" width="130"></el-table-column>
          <el-table-column prop="phone" label="端口" width="122"></el-table-column>
          <el-table-column prop="userGroup" label="号码总数" width="100"></el-table-column>
          <el-table-column prop="device" label="号码使用量" width="130"></el-table-column>
          <el-table-column prop="media" label="在线用户" width="98"></el-table-column>
          <el-table-column prop="city" label="CPU" width="108"></el-table-column>
          <el-table-column prop="role" label="流量" width="108"></el-table-column>
          <el-table-column prop="YesNo" label="内存" width="108"></el-table-column>
          <el-table-column prop="police" label="线程" width="86"></el-table-column>
          <el-table-column label="添加日期" width="190">
            <template slot-scope="scope">{{ scope.row.date }}</template>
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
        tableData3: [{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        }, {
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        },{
          uerId: '北京市',
          userImg: '147',
          username: '3.26.3.0',
          name: '58.30.9.142',
          phone: '12310',
          userGroup: '2',
          device: '0.00%',
          media: '3',
          city: '5.00%',
          role: '37.00%',
          YesNo: '59.31%',
          police: '50',
          date: '2016/05/03 15:30:21',
        }],
        currentPage4: 4
      }
    },
    mounted: function() {
      var hei = document.documentElement.clientHeight;
      $('.mRightTwo').css('height', hei - 178);
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

</style>

