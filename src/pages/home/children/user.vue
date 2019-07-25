<template>
  <div id="user">
    <div id="title">
      <p>
        您所在的位置 : 用户管理 >
        <a>用户列表</a>
      </p>
    </div>
    <div class="userBox">
      <ul class="Top">
        <li>
          <p>
            <img src="../../../assets/img/start.png" alt />启用
          </p>
          <p @click="forbidden()">
            <img src="../../../assets/img/forbid.png" alt />禁止
          </p>
          <p @click="RemoveAll()">
            <img src="../../../assets/img/delete.png" alt />删除
          </p>
        </li>
        <li class="inp">
          <input type="text" class="text" placeholder="搜索用户名/真实姓名" />
          <img src="../../../assets/img/search.png" alt @click="serachAction()" />
        </li>
      </ul>
      <ul class="table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          @select="handleSelectAlone"
          @select-all="handleSelectAll"
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
          <el-table-column label="操作项" show-overflow-tooltip class="delete">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </ul>
    </div>
    <!-- <transition
      name="slide-fade"
      enter-active-class=" animated fadeIn"
      leave-active-class="animated fadeOut"
    >
     
    </transition>-->
    <!-- <transition
      name="slide-fade"
      enter-active-class=" animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      
    </transition> -->
    <removeMeg
        v-if="showMessage"
        @cancelSelect="cancelSelect"
        @showPopup="showPopup"
        @deleteInfo="deleteInfo"
        @showShadow="showShadow"
      />
    <sorter></sorter>
  </div>
</template>

<script>
import Axios from "axios";
import ky from "../../../assets/img/ky.png";
import stop from "../../../assets/img/stop.png";
import { setTimeout } from "timers";
import sorter from "../../../components/sorter";
import removeMeg from "../../../components/removeMeg";
export default {
  components: {
    sorter,
    removeMeg
  },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      isEnabled: "",
      showMessage: false,
      ky: ky,
      stop: stop,
      deleteId: "",
      deleteAllId: "",
      list: [
        { value: "机器ID" },
        { value: "用户名" },
        { value: "真实姓名" },
        { value: "手机号码" },
        { value: "职位" },
        { value: "工作单位" },
        { value: "用户设备" },
        { value: "账号状态" },
        { value: "注册时间" },
        { value: "操作项" }
      ]
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
    // 选择单个
    handleSelectAlone(val) {
      console.log(val);
    },
    // 选择全部用户信息
    handleSelectAll(val) {
      console.log(val);
      // console.log("选择全部")
    },
    showUserInfo() {
      this.$get("/getLanOuUserInfo", {
        pageNum: 1,
        pageSize: 5
      }).then(res => {
        this.tableData = res.data.data.list;

        for (var i = 0; i < this.tableData.length; i++) {
          this.tableData[i].createTime = this.tableData[i].createTime.substring(
            0,
            10
          );
          // console.log(this.tableData[i].createTime);
        }
        for (var i = 0; i < this.tableData.length; i++) {
          this.isEnabled = this.tableData[i].isEnabled;
          // console.log(this.isEnabled);
        }
      });
    },
    // 禁用
    forbidden() {
      this.$get("/updateByLanOuUserState", {
        lanOuUserStateVo: {
          did: "16",
          id: "6",
          isEnabled: "1",
          userId: "1124"
        }
      }).then(res => {
        console.log(res);
      });
    },
    serachAction() {
      console.log("搜索");
    },
    // 删除当前行
    handleClick(aloneId) {
      console.log(aloneId);
      this.deleteId = aloneId.id;
      this.showMessage = true;
    },
    showPopup() {
      this.showMessage = false;
    },
    showShadow() {
      this.showMessage = false;
    },
    // 删除单个用户信息
    deleteInfo() {
      console.log("确定删除");
      this.showMessage = false;

      this.$delete("/deleteLanOuUser", {
        id: this.deleteId
      }).then(res => {
        this.showUserInfo();
      });
    },
    // 取消删除
    cancelSelect() {
      console.log("取消删除");
      this.showMessage = false;

      this.showUserInfo();
    },
    // 删除所有用户信息
    RemoveAll() {
      let arr = [];
      for (var i = 0; i < this.cities.length; i++) {
        arr[i] = this.cities[i].id;
      }
      let list = arr.join(",");
      console.log(list);

      this.$delete("/deleteLanOuUser", {
        id: list
      }).then(res => {
        console.log("删除所有用户信息");
        this.showUserInfo();
      });
    }
  },
  created() {
    this.showUserInfo();
  }
};
</script>

<style lang="scss" >
#user {
  padding: 8px 24px 0 24px;
  box-sizing: border-box;
  .el-checkbox__inner{
     z-index: 0;
  }
  .el-table::before{
    height: 0;
  }
  #title {
    width: 293px;
    height: 22px;
    position: absolute;
    top: -38px;
    left: -4px;
    p {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #999999;
      a {
        font-size: 16px;
        color: #3999f9;
      }
    }
  }
  .userBox {
    height: 590px;
    border: 1px solid #cccccc;
    border-bottom: none;
    // margin: 0 24px;
    .Top {
      height: 80px;
      background: #eeeeee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      box-sizing: border-box;

      p {
        float: left;
        width: 96px;
        height: 40px;
        line-height: 36px;
        text-align: center;
        font-size: 16px;
        color: #ffffff;
        cursor: pointer;
        img {
          width: 25px;
          height: 25px;
          position: relative;
          top: 8px;
          left: -8px;
        }
      }
      p:nth-child(1) {
        background: #28ce42;
        border-radius: 3px;
        border-radius: 3px;
        margin-right: 16px;
        box-sizing: border-box;
      }
      p:nth-child(2) {
        background: #ffc130;
        border-radius: 3px;
        border-radius: 3px;
        margin-right: 16px;
      }
      p:nth-child(3) {
        background: #ff6259;
        border-radius: 3px;
        border-radius: 3px;
      }
      .inp {
        position: relative;
        input {
          width: 386px;
          height: 44px;
          border: 1px solid #cccccc;
          border-radius: 5px;
          background: #ffffff;
          font-size: 14px;
          color: #999999;
          padding: 16px 55px 16px 20px;
          box-sizing: border-box;
        }
        img {
          width: 26px;
          height: 26px;
          position: absolute;
          right: 0;
          top: 10px;
          right: 25px;
          cursor: pointer;
        }
      }
    }
  }
  .table {
    tbody {
      .el-table__row {
        border-bottom: #ffffff !important;
      }
    }
    .cell {
      text-align: center;
      height: 60px;
      line-height: 60px;
      position: relative;
      font-size: 16px;
      color: #333;
      img {
        position: absolute;
        top: 15px;
      }
    }
    .el-button--text span {
      font-size: 16px;
      color: #f64330;
      text-decoration: underline;
    }
  }
  #popup {
    width: 430px;
    height: 170px;
    position: absolute;
    background: #ffffff;
    left: 0;
    right: 0;
    top: -150px;
    bottom: 0;
    margin: auto;
    padding-top: 24px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    z-index: 6;
    .hint {
      font-size: 16px;
      width: 100%;
      height: 29px;
      line-height: 29px;
      color: #333333;
      span {
        position: relative;
        left: 180px;
        font-size: 18px;
      }
      img {
        width: 25px;
        height: 25px;
        margin: 0 4px 0 20px;
        position: relative;
        top: 7px;
      }
    }
    .buttons {
      width: 100%;
      height: 35px;
      position: relative;
      top: 64px;
      padding-left: 60%;
      a {
        display: inline-block;
        width: 55px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        font-size: 16px;
        text-align: center;
      }
      a:nth-child(1) {
        background: #3a9ef4;
        margin-right: 10px;
        color: #ffffff;
      }
      a:nth-child(2) {
        border: 1px solid #cccccc;
      }
    }
  }
  #shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 5;
  }
}
</style>

