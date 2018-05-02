<template>
  <div class="mRight">
    <div class="mRightTwo">
      <div class="zForm">
        <span>请输入用户组名称进行查询：</span><input class="zInput" type="text" placeholder="" /><button>查询</button><button>全部</button>
        <span class="btnRight"><button>新增</button><button>删除</button></span>
      </div>
      <div class="zTable">
        <div class="elTable">
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="110"></el-table-column>
          <el-table-column type="index" label="序号" width="110"></el-table-column>
          <el-table-column prop="username" label="用户组名称" width="400"></el-table-column>
          <el-table-column prop="name" label="用户组描述" width="400"></el-table-column>
          <el-table-column prop="userGroup" label="用户组级别" width="400"></el-table-column>
          <el-table-column prop="device" label="编辑" width="180">
            <template slot-scope="scope">
              <a href="javascript:;"><img src="../../assets/edit2.png" alt=""></a>
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
        tableData3: [{
          username: 'test',
          name: '123',
          userGroup: '2'
        },{
          username: 'test',
          name: '123',
          userGroup: '2'
        },{
          username: 'test',
          name: '123',
          userGroup: '2'
        },{
          username: 'test',
          name: '123',
          userGroup: '2'
        },{
          username: 'test',
          name: '123',
          userGroup: '2'
        },{
          username: 'test',
          name: '123',
          userGroup: '2'
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
