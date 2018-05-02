<template>
  <div class="mRight">
    <div class="mRightThree">
      <div class="zForm">
        <span>唯一编码：</span><input class="zInput" type="text" placeholder="" /><span>服务器名称：</span><input class="zInput" type="text" placeholder="" /><button>查询</button><button>全部</button>
        <span class="btnRight"><button>新增</button><button>删除</button></span>
      </div>
      <div class="zTable">
        <div class="elTable">
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="30"></el-table-column>
          <el-table-column type="index" label="序号" width="50"></el-table-column>
          <el-table-column prop="uerId" label="名称" width="88"></el-table-column>
          <el-table-column prop="userImg" label="公钥" width="128"></el-table-column>
          <el-table-column prop="username" label="服务器" width="122"></el-table-column>
          <el-table-column prop="phone" label="端口" width="60"></el-table-column>
          <el-table-column prop="name" label="流媒体主消息" width="105"></el-table-column>
          <el-table-column prop="userGroup" label="协转主消息" width="90"></el-table-column>
          <el-table-column prop="device" label="服务器类型" width="90"></el-table-column>
          <el-table-column prop="media" label="唯一编码" width="80"></el-table-column>
          <el-table-column prop="city" label="版本" width="64"></el-table-column>
          <el-table-column prop="role" label="WebSocket" width="96"></el-table-column>
          <el-table-column prop="YesNo" label="是否启用" width="76"></el-table-column>
          <el-table-column prop="police" label="状态" width="48"></el-table-column>
          <el-table-column prop="YesNoT" label="是否默认" width="76"></el-table-column>
          <el-table-column label="活动时间" width="158">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column label="添加时间" width="158">
            <template slot-scope="scope">{{ scope.row.date2 }}</template>
          </el-table-column>
          <el-table-column label="编辑" width="48">
            <template slot-scope="scope">
              <a href="javascript:;"><img src="../../assets/edit2.png" alt=""></a>
          </template>
          </el-table-column>
          <el-table-column prop="dateTb" label="数据同步" width="76">
            <template slot-scope="scope">
              <a href="javascript:;">{{ scope.row.dateTb }}</a>
              
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
          uerId: "130服务器",
          userImg: "20180425#385c",
          username: "192.168.10.130",
          phone: "8886",
          name: "20110",
          userGroup: "25130",
          device: "流媒体",
          media: "654321",
          city: "4.0.1.0",
          role: "8900",
          YesNo: "是",
          police: "离线",
          YesNoT: "是",
          date: "2016/05/03 15:30:21",
          date2: "2016/05/03 15:30:21",
          dateTb: "同步"
        },
        {
          uerId: "130服务器",
          userImg: "20180425#385c",
          username: "192.168.10.130",
          phone: "8886",
          name: "20110",
          userGroup: "25130",
          device: "流媒体",
          media: "654321",
          city: "4.0.1.0",
          role: "8900",
          YesNo: "是",
          police: "离线",
          YesNoT: "是",
          date: "2016/05/03 15:30:21",
          date2: "2016/05/03 15:30:21",
          dateTb: "同步"
        },
        {
          uerId: "130服务器",
          userImg: "20180425#385c",
          username: "192.168.10.130",
          phone: "8886",
          name: "20110",
          userGroup: "25130",
          device: "流媒体",
          media: "654321",
          city: "4.0.1.0",
          role: "8900",
          YesNo: "是",
          police: "离线",
          YesNoT: "是",
          date: "2016/05/03 15:30:21",
          date2: "2016/05/03 15:30:21",
          dateTb: "同步"
        },
        {
          uerId: "130服务器",
          userImg: "20180425#385c",
          username: "192.168.10.130",
          phone: "8886",
          name: "20110",
          userGroup: "25130",
          device: "流媒体",
          media: "654321",
          city: "4.0.1.0",
          role: "8900",
          YesNo: "是",
          police: "离线",
          YesNoT: "是",
          date: "2016/05/03 15:30:21",
          date2: "2016/05/03 15:30:21",
          dateTb: "同步"
        },
        {
          uerId: "130服务器",
          userImg: "20180425#385c",
          username: "192.168.10.130",
          phone: "8886",
          name: "20110",
          userGroup: "25130",
          device: "流媒体",
          media: "654321",
          city: "4.0.1.0",
          role: "8900",
          YesNo: "是",
          police: "离线",
          YesNoT: "是",
          date: "2016/05/03 15:30:21",
          date2: "2016/05/03 15:30:21",
          dateTb: "同步"
        },
        {
          uerId: "130服务器",
          userImg: "20180425#385c",
          username: "192.168.10.130",
          phone: "8886",
          name: "20110",
          userGroup: "25130",
          device: "流媒体",
          media: "654321",
          city: "4.0.1.0",
          role: "8900",
          YesNo: "是",
          police: "离线",
          YesNoT: "是",
          date: "2016/05/03 15:30:21",
          date2: "2016/05/03 15:30:21",
          dateTb: "同步"
        },
        {
          uerId: "130服务器",
          userImg: "20180425#385c",
          username: "192.168.10.130",
          phone: "8886",
          name: "20110",
          userGroup: "25130",
          device: "流媒体",
          media: "654321",
          city: "4.0.1.0",
          role: "8900",
          YesNo: "是",
          police: "离线",
          YesNoT: "是",
          date: "2016/05/03 15:30:21",
          date2: "2016/05/03 15:30:21",
          dateTb: "同步"
        },
        {
          uerId: "130服务器",
          userImg: "20180425#385c",
          username: "192.168.10.130",
          phone: "8886",
          name: "20110",
          userGroup: "25130",
          device: "流媒体",
          media: "654321",
          city: "4.0.1.0",
          role: "8900",
          YesNo: "是",
          police: "离线",
          YesNoT: "是",
          date: "2016/05/03 15:30:21",
          date2: "2016/05/03 15:30:21",
          dateTb: "同步"
        }
      ],
      currentPage4: 4
    };
  },
  mounted: function() {
    var hei = document.documentElement.clientHeight;
    $(".mRightThree").css("height", hei - 178);
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
.mRightThree {
  padding: 34px 21px;
  margin: 15px 27px 15px 15px;
  background: #354166;
  -webkit-box-shadow: 0px 0px 26px #01060e;
  box-shadow: 0px 0px 26px #01060e;
}
</style>
