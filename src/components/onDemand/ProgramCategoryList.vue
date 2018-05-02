<template>
  <div class="mRight">
    <div class="mRightTwo">
      <div class="zForm">
        <span>名称：</span><input class="zInput" type="text" placeholder="" /><button>查询</button><button>全部</button>
        <span class="btnRight"><button>新增</button><button>删除</button></span>
      </div>
      <div class="zTable">
        <div class="elTable">
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="120"></el-table-column>
          <el-table-column type="index" label="序号" width="200"></el-table-column>
          <el-table-column prop="uerId" label="角色名称" width="800"></el-table-column>
          <el-table-column label="编辑" width="482">
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
import $ from "jquery";
export default {
  data() {
    return {
      tableData3: [
        {
          uerId: "test889900"
        },
        {
          uerId: "test889900"
        },
        {
          uerId: "test889900"
        },
        {
          uerId: "test889900"
        },
        {
          uerId: "test889900"
        },
        {
          uerId: "test889900"
        },
        {
          uerId: "test889900"
        },
        {
          uerId: "test889900"
        }
      ],
      currentPage4: 4
    };
  },
  mounted: function() {
    var hei = document.documentElement.clientHeight;
    $(".mRightTwo").css("height", hei - 178);
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
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
};
</script>
<style>
</style>
