<template>
  <div class="mRight">
    <div class="mRightTwo">
      <div class="zForm">
        <span>请输入设备号码进行查询：</span><input class="zInput" type="text" placeholder="" /><span>流媒体服务器：</span>
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
          <el-table-column type="selection" width="90"></el-table-column>
          <el-table-column type="index" label="序号" width="100"></el-table-column>
          <el-table-column prop="name" label="视联网设备号码" width="180"></el-table-column>
          <el-table-column prop="userId" label="Mac地址" width="180"></el-table-column>
          <el-table-column prop="phone" label="视联网设备型号" width="180"></el-table-column>
          <el-table-column prop="userImg" label="绑定用户" width="180"></el-table-column>x
          <el-table-column prop="internet" label="设备使用类型" width="180"></el-table-column>
          <el-table-column label="添加时间" width="186">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="device" label="流媒体服务器" width="180"></el-table-column>
          <el-table-column prop="edit" label="编辑" width="130">
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
      tableData3: [{
          name: "05011",
          userId: "60F2EF025E83",
          phone: "2131",
          userImg: "",
          internet: "主消息",
          date: "2018/4/26 10:02:28",
          device: "147"
        },{
          name: "05011",
          userId: "60F2EF025E83",
          phone: "2131",
          userImg: "",
          internet: "主消息",
          date: "2018/4/26 10:02:28",
          device: "147"
        },{
          name: "05011",
          userId: "60F2EF025E83",
          phone: "2131",
          userImg: "",
          internet: "主消息",
          date: "2018/4/26 10:02:28",
          device: "147"
        },{
          name: "05011",
          userId: "60F2EF025E83",
          phone: "2131",
          userImg: "",
          internet: "主消息",
          date: "2018/4/26 10:02:28",
          device: "147"
        },{
          name: "05011",
          userId: "60F2EF025E83",
          phone: "2131",
          userImg: "",
          internet: "主消息",
          date: "2018/4/26 10:02:28",
          device: "147"
        },{
          name: "05011",
          userId: "60F2EF025E83",
          phone: "2131",
          userImg: "",
          internet: "主消息",
          date: "2018/4/26 10:02:28",
          device: "147"
        },{
          name: "05011",
          userId: "60F2EF025E83",
          phone: "2131",
          userImg: "",
          internet: "主消息",
          date: "2018/4/26 10:02:28",
          device: "147"
        },{
          name: "05011",
          userId: "60F2EF025E83",
          phone: "2131",
          userImg: "",
          internet: "主消息",
          date: "2018/4/26 10:02:28",
          device: "147"
        },{
          name: "05011",
          userId: "60F2EF025E83",
          phone: "2131",
          userImg: "",
          internet: "主消息",
          date: "2018/4/26 10:02:28",
          device: "147"
        },{
          name: "05011",
          userId: "60F2EF025E83",
          phone: "2131",
          userImg: "",
          internet: "主消息",
          date: "2018/4/26 10:02:28",
          device: "147"
        }],
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
    },
    toggle: function() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style>

</style>
