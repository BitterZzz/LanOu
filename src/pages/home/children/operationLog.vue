<template>
  <div id="operation">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column prop="userId" label="机器ID" width="120"></el-table-column>
      <el-table-column prop="didName" label="用户名" width="120"></el-table-column>
      <el-table-column prop="realName" label="真实姓名" show-overflow-tooltip></el-table-column>
      <el-table-column prop="cellPhone" label="手机号码" show-overflow-tooltip></el-table-column>
      <el-table-column prop="position" label="职位" show-overflow-tooltip></el-table-column>
      <el-table-column prop="workUnit" label="工作单位" show-overflow-tooltip></el-table-column>
      <el-table-column prop="productId" label="用户设备" show-overflow-tooltip></el-table-column>
      <el-table-column prop="isEnabled" label="账号状态" show-overflow-tooltip>
        {{this.isEnabled === "1" ? '可用': '禁止'}}
        <img :src="this.isEnabled === '1' ?  stop : ky" />
      </el-table-column>
      <el-table-column prop="createTime" label="注册时间" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作项" show-overflow-tooltip>删除</el-table-column>
    </el-table>
  </div>
</template>

<script>
import Axios from "axios";
import ky from "../../../assets/img/ky.png";
import stop from "../../../assets/img/stop.png";
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      isEnabled: "",
      ky: ky,
      stop: stop
    };
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    info() {
      Axios.get("http://192.168.1.237:7523/getLanOuUserInfo", {
        params: {
          pageNum: 1,
          pageSize: 5
        }
      }).then(res => {
        this.tableData = res.data.data.list;

        for (var i = 0; i < this.tableData.length; i++) {
          this.tableData[i].createTime = this.tableData[i].createTime.substring(
            0,
            10
          );
          console.log(this.tableData[i].createTime);
        }
        for (var i = 0; i < this.tableData.length; i++) {
          this.isEnabled = this.tableData[i].isEnabled;
          console.log(this.isEnabled);
        }
      });
    }
  },
  created() {
    this.info();
  }
};
</script>

<style lang="scss" >
#operation {
  .cell {
    border: 1px solid red;
    text-align: center;
    height: 50px;
    line-height: 50px;
    position: relative;
    font-size: 16px;
    color: #333;
    img {
      position: absolute;
      top: -4px;
    }
  }
}
</style>

