<template>
  <div>
    <div id="addPage" v-for="item in sonData" :key="item.id">
      <div id="title">
        <p>
          您所在的位置 : 账号管理 > 账号列表 >
          <a>新增账户</a>
        </p>
      </div>
      <div class="toBack">
        <div class="goHome">
          <img @click="backHome()" src="../../assets/img/back.png" alt />
          <span>返回列表</span>
        </div>
      </div>
      <div class="import">
        <ul class="userPassword">
          <li>
            <i>*</i>
            <span>用户名 :</span>
            <input type="text" id="username" name="username" maxlength="11" :value="item.userName" />
          </li>
          <li>
            <i>*</i>
            <span>密码 :</span>
            <input type="password" id="password" name="password" placeholder="密码为8-16位的字母+数字组成" :value="item.passWord"  />
          </li>
        </ul>
        <ul class="userPassword">
          <li>
            <span class="upleft">手机 :</span>
            <input id="phone" type="text" maxlength="11"  :value="item.phone" />
          </li>
          <li>
            <span>邮箱 :</span>
            <input type="email" name="email" id="email"   :value="item.email"/>
          </li>
        </ul>
        <ul class="userPassword">
          <li>
            <span class="upleft">角色 :</span>
            <input type="text" id="role" name="role"  :value="item.role"/>
          </li>
          <li>
            <span>部门 :</span>
            <input type="text" name="section" id="section" placeholder  :value="item.dept" />
          </li>
        </ul>
      </div>
      <div class="alt">
        <span>带 * 号为必填</span>
      </div>
      <div class="restrict">
        <h2>基本权限：</h2>
        <div class="choice">
          <el-checkbox-group
            v-model="checkedCities"
            v-for="city in cities"
            :key="city.id"
            @change="change"
          >
            <el-checkbox :label="city">{{city.split(',')[0]}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="robot">
        <h2>指定查看机器：</h2>
        <div>
          <button type="submit" class="submit" @click="SelectId()">全部机器</button>
          <br />
          <input type="text" name="text" id="rotID" />
          <div class="append" @click="appendFile()">+ 添加</div>
          <div class="reveal" v-if="showReveal">
            <div class="botId" v-for="item in append" :key="item.id">{{item}}</div>
          </div>
        </div>
      </div>
      <div class="buttom">
        <button type="submit" @click="submitAction()">
          <img src="../../assets/img/root.png" alt srcset />
          新增提交
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { format, relative } from "path";
import Axios from "axios";
import { setTimeout } from 'timers';
export default {
  name: "appendPage",
  data() {
    return {
      robotId: [],
      check: [],
      showReveal: false,
      append: [],
      checkedCities: ["查看水质曲线,5"],
      cities: [],
      DidInfo: [],
      charaID: [],
      checkId: "",
      emailInfo: "",
      userInfo: "",
      passInfo: "",
      phoneInfo: "",
      roleInfo: "",
      sectionInfo: "",
      Data: "",
    };
  },
  props: {
    sonData: {
      type: Array
    }
  },
  methods: {
    // 返回
    backHome() {
      this.$emit("sonPage");
    },
    // 添加did
    appendFile() {
      let botID = document.querySelector("#rotID");
      if (botID.value === "") {
        return;
      } else if (botID.value !== "") {
        this.showReveal = true;
        this.DidInfo = botID.value;
        this.append.push(botID.value);
      }
      // 获取全部did
      this.charaID = this.append.join(",");
      console.log(this.charaID);
    },
    // 全部机器did
    SelectId() {
      console.log(1);
      this.$get("/getLanOuByDid", {
        sak: 1
      }).then(res => {
        console.log(res.data);
      });
    },

    // 提交新增页面
    submitAction() {
      let username = document.querySelector("#username");
      let password = document.querySelector("#password");
      let phone = document.querySelector("#phone");
      let email = document.querySelector("#email");
      let role = document.querySelector("#role");
      let section = document.querySelector("#section");
      let userNorm = /^[a-zA-Z0-9]{8,16}$/;
      let phoneNorm = /^[1][3,4,5,6,7,8][0-9]{9}$/;
      if (
        username.value === "" ||
        password.value === "" ||
        phone.value === "" ||
        email.value === "" ||
        role.value === "" ||
        section.value === ""
      ) {
        this.$message({
          message: "用户名,密码,手机号,角色,邮箱,部门不能为空",
          type: "warning"
        });
        return;
      }
      if (!userNorm.test(password.value)) {
        this.$message({
          message: "密码输入错误",
          type: "warning"
        });
        return;
      }
      if (!phoneNorm.test(phone.value)) {
        this.$message({
          message: "手机号输入错误",
          type: "warning"
        });
        return;
      }
      Axios.post("/addLanOuAccountInfo", {
        dept: section.value,
        lanOuDid: this.charaID,
        mail: email.value,
        passWord: password.value,
        phone: phone.value,
        position: " ",
        relationId: this.levelId,
        role: role.value,
        userName: username.value,
        workUnit: ""
      }).then(res => {
        console.log(res);
        this.$router.go(-1);
      });
    },
    // 获取菜单信息
    checkAction() {
      this.$get("/getLanOuAuthority?levelId=0", {
        levelId: 0
      }).then(res => {
        console.log(res.data.data,);
        let data = res.data.data;
        this.cities = data.slice(4, 15);
        this.cities = this.cities.map((item) => {return item.authorityName + ',' + item.id});
        console.log(this.cities,"citys");
      });
    },
    
    // 获取checkId
    change(res) {
      console.log(res);
      let relative = [];

      for (var i = 0; i < res.length; i++) {
        relative[i] = res[i].id;
      }
      //  arr = relative.join(",")
      this.checkId = relative.join(",");
      console.log(this.checkId);
    },
    dataAction() {
       this.checkedCities = this.sonData[0].relationId.split(',').map((item) => {
         return 
       });
      // console.log(  this.checkedCities,"基本权限");
    }
  },
  mounted() {},
  created() {
    this.checkAction();
    this.dataAction();
  }
};
</script>

<style lang="scss" >
#addPage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 8px 24px 0;
  box-sizing: border-box;
  background: #ffffff;
  z-index: 8;
  #title {
    width: 400px;
    height: 22px;
    background: #f7f7f7;
    position: absolute;

    top: -38px;
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
  .toBack {
    width: 100%;
    height: 54px;
    background: #eeeeee;
    margin-bottom: 32px;

    .goHome {
      display: flex;
      align-items: center;
      color: #333;
      font-size: 16px;
      font-weight: 400;
      padding-left: 18px;
      padding-top: 5px;
      box-sizing: border-box;

      img {
        width: 43px;
        height: 43px;
        margin-right: 16px;
        cursor: pointer;
      }
    }
  }
  .import {
    .userPassword {
      display: flex;
      margin-bottom: 24px;
      li {
        width: 50%;
        height: 50px;
        padding-left: 8px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        i {
          position: absolute;
          color: #fe3824;
          font-size: 18px;
          left: 48px;
          padding-top: 5px;
        }
        span {
          font-size: 18px;
          color: #333333;
          font-weight: 500;
          font-weight: block;
        }
        .upleft {
          margin-left: 16px;
        }
        input {
          width: 390px;
          height: 100%;
          border: 1px solid #cccccc;
          border-radius: 5px;
          margin-left: -50px;
          padding-left: 16px;
          color: #999;
        }
      }
    }
  }
  .alt {
    width: 100%;
    height: 28px;
    line-height: 28px;
    font-size: 16px;
    color: #fe3824;
    padding-left: 40px;
    box-sizing: border-box;
    margin-bottom: 41px;
  }
  .restrict {
    display: flex;
    margin-bottom: 26px;
    h2 {
      font-size: 16px;
      color: #333333;
      margin: 0 40px 0 22px;
    }
    .choice {
      position: relative;
      top: -1px;
      max-width: 898px;

      font-size: 16px;
      .el-checkbox-group {
        width: 150px;
        margin-bottom: 11px;
        margin-right: 23px;
        float: left;
        .el-checkbox__inner {
          width: 16px;
          height: 16px;
        }
        .el-checkbox__label {
          font-size: 18px;
          color: #333333;
        }
      }
    }
  }
  .robot {
    display: flex;
    padding-left: 22px;
    h2 {
      color: #333;
      font-size: 16px;
      margin-right: 8px;
      position: relative;
      top: 7px;
    }
    div {
      .submit {
        width: 150px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #3999f9;
        background: #ecf9ff;
        border: none;
        outline: none;
        cursor: pointer;
        margin-bottom: 16px;
      }
      input {
        width: 390px;
        height: 50px;
        padding-left: 20px;
        box-sizing: border-box;
        font-size: 14px;
        color: #999999;
        border: 1px solid #cccccc;
        border-radius: 5px;
        margin-right: 24px;
      }
      .append {
        display: inline-block;
        width: 90px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        color: #333;
        border: 1px solid #cccccc;
        border-radius: 5px;
        cursor: pointer;
      }
      .reveal {
        margin-top: 5px;
        max-width: 390px;
        height: 80px;
        border: 1px solid #cccccc;
        overflow: auto;
        padding-top: 5px;
        box-sizing: border-box;
        padding-left: 5px;

        div {
          min-width: 100px;
          height: 30px;
          padding: 0 5px;
          box-sizing: border-box;
          line-height: 30px;
          margin: 0 5px 5px 0;
          border: 1px solid #cccccc;
          text-align: center;
          float: left;
          background: #ecf9ff;
        }
      }
    }
  }
  .buttom {
    width: 95%;
    height: 60px;
    position: absolute;
    bottom: 48px;
    text-align: center;
    button {
      width: 180px;
      height: 60px;
      background: #3a9ef4;
      color: #ffffff;
      outline: none;
      border: none;
      cursor: pointer;
      border-radius: 3px;
      font-size: 20px;
      padding-bottom: 10px;
      box-sizing: border-box;
      img {
        width: 30px;
        height: 30px;
        position: relative;
        left: -4px;
        top: 8px;
      }
    }
  }
}
</style>
