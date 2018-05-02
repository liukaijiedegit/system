<template>
  <div class="mRight">
    <div class="mRightTwo">
      <div class="zForm">
        <span>姓名：</span><input class="zInput" type="text" placeholder="" /><span>所属分组：</span>
        <div class="zSelect">
          <el-select v-model="value" class="zgroup" placeholder="--请选择--">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        </div>
        <button>查询</button><button>全部</button>
      </div>
      <div class="zTable">
        <div class="elTable">
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
          <el-table-column type="index" label="序号" width="80"></el-table-column>
          <el-table-column prop="name" label="姓名" width="100"></el-table-column>
          <el-table-column prop="userId" label="账号" width="100"></el-table-column>
          <el-table-column prop="phone" label="手机" width="130"></el-table-column>
          <el-table-column prop="userImg" label="登录方式" width="130"></el-table-column>x
          <el-table-column prop="internet" label="联网方式" width="110"></el-table-column>
          <el-table-column prop="device" label="登录IP" width="140"></el-table-column>
          <el-table-column prop="media" label="登录端口" width="108"></el-table-column>
          <el-table-column prop="city" label="业务状态" width="186"></el-table-column>
          <el-table-column prop="role" label="GPS" width="120"></el-table-column>
          <el-table-column prop="userGroup" label="所属分组" width="130"></el-table-column>
          <el-table-column prop="police" label="服务器" width="100"></el-table-column>
          <el-table-column prop="edition" label="版本" width="140"></el-table-column>
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
        isShow:false,
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        tableData3: [{
          name: '25051',
          userId: '25051',
          phone: '13252632548',
          userImg: '',
          internet: '0',
          device: '192.168.12',
          media: '12310',
          city: '25051呼叫可视电话到',
          role: ',',
          userGroup: 'Saab',
          police: '224',
          edition: '',
        },{
          name: '25051',
          userId: '25051',
          phone: '13252632548',
          userImg: '',
          internet: '0',
          device: '192.168.12',
          media: '12310',
          city: '25051呼叫可视电话到',
          role: ',',
          userGroup: 'Saab',
          police: '224',
          edition: '',
        },{
          name: '25051',
          userId: '25051',
          phone: '13252632548',
          userImg: '',
          internet: '0',
          device: '192.168.12',
          media: '12310',
          city: '25051呼叫可视电话到',
          role: ',',
          userGroup: 'Saab',
          police: '224',
          edition: '',
        },{
          name: '25051',
          userId: '25051',
          phone: '13252632548',
          userImg: '',
          internet: '0',
          device: '192.168.12',
          media: '12310',
          city: '25051呼叫可视电话到',
          role: ',',
          userGroup: 'Saab',
          police: '224',
          edition: '',
        },{
          name: '25051',
          userId: '25051',
          phone: '13252632548',
          userImg: '',
          internet: '0',
          device: '192.168.12',
          media: '12310',
          city: '25051呼叫可视电话到',
          role: ',',
          userGroup: 'Saab',
          police: '224',
          edition: '',
        },{
          name: '25051',
          userId: '25051',
          phone: '13252632548',
          userImg: '',
          internet: '0',
          device: '192.168.12',
          media: '12310',
          city: '25051呼叫可视电话到',
          role: ',',
          userGroup: 'Saab',
          police: '224',
          edition: '',
        },{
          name: '25051',
          userId: '25051',
          phone: '13252632548',
          userImg: '',
          internet: '0',
          device: '192.168.12',
          media: '12310',
          city: '25051呼叫可视电话到',
          role: ',',
          userGroup: 'Saab',
          police: '224',
          edition: '',
        },{
          name: '25051',
          userId: '25051',
          phone: '13252632548',
          userImg: '',
          internet: '0',
          device: '192.168.12',
          media: '12310',
          city: '25051呼叫可视电话到',
          role: ',',
          userGroup: 'Saab',
          police: '224',
          edition: '',
        },],
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
      },
      toggle:function(){
        this.isShow = !this.isShow;
      }
    }
  }
</script>
<style>

</style>
