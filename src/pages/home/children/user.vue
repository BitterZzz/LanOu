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
          <p @click="startUsing()">
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
          <input type="text" class="text" id="searchText" placeholder="搜索手机号/真实姓名" />
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
            {{this.isEnabled === "0" ? '禁止': '可用'}}
            <img :src="this.isEnabled === '0' ?  stop : ky" />
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
    <transition
      name="slide-fade"
      enter-active-class=" animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div id="popup" v-if="showPopup">
        <div class="hint">
          <img src="../../../assets/img/card.png" alt /> 确认删除所选项目吗？
          <span @click="cancelSelect()">x</span>
        </div>
        <div class="buttons">
          <a @click="deleteInfo()">确定</a>
          <a @click="cancelSelect()">取消</a>
        </div>
      </div>
    </transition>
    <transition
      name="slide-fade"
      enter-active-class=" animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div id="popup" v-if="showUser">
        <div class="hint">
          <img src="../../../assets/img/card.png" alt /> 确认删除所选项目吗？
          <span @click="cancelSelect()">x</span>
        </div>
        <div class="buttons">
          <a @click="userInfo()">确定</a>
          <a @click="userCancel()">取消</a>
        </div>
      </div>
    </transition>
    <transition
      name="slide-fade"
      enter-active-class=" animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div id="shadow" v-if="showShadow"></div>
    </transition>
    <sorter :pageMsg="sortPage"></sorter>
  </div>
</template>

<script>
import Axios from "axios";
import Qs from "qs";
import ky from "../../../assets/img/ky.png";
import stop from "../../../assets/img/stop.png";
import { setTimeout } from "timers";
import sorter from "../../../components/sorter";
export default {
  components: {
    sorter
  },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      isEnabled: "",
      showPopup: false,
      showShadow: false,
      showUser: false,
      portionUserId: "",
      ky: ky,
      checkEnabled: [],
      stop: stop,
      deleteId: "",
      deleteAllId: "",
      sortPage: {
        pages: 1,
        pageSize: 1,
        total: 1
      }
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
    // 勾选单个用户信息
    handleSelectAlone(useID) {
      let arr = [];
      var checkEnabled = {};
      for (var i = 0; i < useID.length; i++) {
        arr.push(useID[i].id);
        checkEnabled.did = useID[i].did;
        checkEnabled.id = useID[i].id;
        checkEnabled.isEnabled = useID[i].isEnabled;
        checkEnabled.userId = useID[i].userId;
      }
      this.checkEnabled.push(checkEnabled);
      console.log(this.checkEnabled);
      // console.log(checkEnabled);
      this.portionUserId = arr.join(",");
      // console.log(this.portionUserId);
    },
    // 勾选全部用户信息
    handleSelectAll(allUserID) {
      let arry = [];
      let checkEnabled = {};
      let arr = [];
      for (let j = 0; j < allUserID.length; j++) {
        arry.push(allUserID[j].id);
        checkEnabled.did = allUserID[j].did;
        checkEnabled.id = allUserID[j].id;
        checkEnabled.isEnabled = allUserID[j].isEnabled;
        checkEnabled.userId = allUserID[j].userId;
        // this.checkEnabled.push(checkEnabled);
        if(this.checkEnabled === '[]'){
          this.checkEnabled.push(checkEnabled);
          console.log(1111)
        }
      }

      console.log(this.checkEnabled);
      this.portionUserId = arry.join(",");
      // console.log(this.portionUserId);
    },
    // 函数封装
    capsulation(res) {
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
    },
    // 获取全部用户信息
    showUserInfo() {
      this.$get("/getLanOuUserInfo", {
        pageNum: 1,
        pageSize: 5
      }).then(res => {
        console.log(res.data.data.list);
        this.capsulation(res);
      });
    },
    // 启用
    startUsing() {
      for (var i = 0; i < this.checkEnabled.length; i++) {
        Axios.post("/updateByLanOuUserState", {
          did: this.checkEnabled[i].did,
          id: this.checkEnabled[i].id,
          isEnabled: this.checkEnabled[i].isEnabled,
          userId: this.checkEnabled[i].userId
        }).then(res => {
          console.log(res);
        });
      }
    },
    // 禁用
    forbidden() {
      for (var i = 0; i < this.checkEnabled.length; i++) {
        Axios.post("/updateByLanOuUserState", {
          did: this.checkEnabled[i].did,
          id: this.checkEnabled[i].id,
          isEnabled: "0",
          userId: this.checkEnabled[i].userId
        }).then(res => {
          console.log(res);
          this.showUserInfo();
        });
      }
    },
    // 搜索用户信息
    serachAction() {
      let searchText = document.querySelector("#searchText");
      let valuePhone = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (valuePhone.test(searchText.value)) {
        console.log(1);
        this.cellPhoneSear();
      } else {
        console.log(2);
        this.reacNameSear();
      }
    },
    // 封装根据真实姓名realName查询
    reacNameSear() {
      console.log("真实姓名");
      this.$get("/getLanOuUserInfo", {
        pageNum: 1,
        pageSize: 5,
        realName: searchText.value
      }).then(res => {
        console.log(res.data.data.list);
        this.tableData = res.data.data.list;
      });
    },
    // 封装根据手机号cellPhone查询
    cellPhoneSear() {
      console.log("手机号码");
      this.$get("/getLanOuUserInfo", {
        pageNum: 1,
        pageSize: 5,
        cellPhone: searchText.value
      }).then(res => {
        console.log(res.data.data.list);
        this.tableData = res.data.data.list;
      });
    },
    // 删除当前行
    handleClick(aloneId) {
      console.log(aloneId.id);
      this.deleteId = aloneId.id;
      this.showPopup = !this.showPopup;
      this.showShadow = !this.showShadow;
    },
    // 删除单个用户信息
    deleteInfo() {
      console.log("确定删除");
      this.showPopup = false;
      this.showShadow = false;

      this.$delete("/deleteLanOuUser", {
        id: this.deleteId
      }).then(res => {
        this.showUserInfo();
      });
    },
    // 取消删除
    cancelSelect() {
      console.log("取消删除");
      this.showPopup = false;
      this.showShadow = false;
      this.showUserInfo();
    },
    // 判断是否删除所选择用户信息
    RemoveAll() {
      if (this.portionUserId === "") {
        this.$message({
          message: "请勾选需要删除的用户"
        });
        return;
      } else if (this.portionUserId !== "") {
        this.showUser = !this.showUser;
        this.showShadow = !this.showShadow;
      }
    },
    // 确定删除所选择的用户信息
    userInfo() {
      this.showUser = false;
      this.showShadow = false;
      console.log(this.portionUserId);
      this.showUserInfo();

      this.$delete("/deleteLanOuUser", {
        id: this.portionUserId
      }).then(res => {
        console.log("删除所有用户信息");
        this.showUserInfo();
      });
      this.portionUserId = "";

      console.log("已经删除");
    },
    // 取消所选择的用户
    userCancel() {
      this.showUser = false;
      this.showShadow = false;
      console.log(this.portionUserId);
      this.showUserInfo();
      this.portionUserId = "";
      console.log("取消删除");
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
  .el-checkbox__inner {
    z-index: 0;
  }
  .el-table::before {
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
    // border-bottom: none;
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

