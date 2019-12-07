<template>
  <div>
    <div id="addPage">
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
            <span>
              <i>*</i>
              用户名 :
            </span>
            <input type="text" id="username" name="username" maxlength="11" />
          </li>
          <li>
            <span>
              <i>*</i>
              密码 :
            </span>
            <input type="password" id="password" name="password" placeholder="密码为8-16位的字母+数字组成" />
          </li>
        </ul>
        <ul class="userPassword">
          <li>
            <span class="upleft">手机 :</span>
            <input id="phone" type="text" maxlength="11" />
          </li>
          <li>
            <span>邮箱 :</span>
            <input type="email" name="email" id="email" />
          </li>
        </ul>
        <ul class="userPassword">
          <li>
            <span class="upleft">角色 :</span>
            <input type="text" id="role" name="role" />
          </li>
          <li>
            <span>部门 :</span>
            <input type="text" name="section" id="section" placeholder />
          </li>
        </ul>
      </div>
      <div class="alt">
        <span>带 * 号为必填</span>
      </div>
      <checkbox />
      <robot />
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
import robot from "../compile/robot";
import checkbox from "./addCompile";
import Axios from "axios";
import { setTimeout } from "timers";
export default {
  name: "addPage",
  components: {
    checkbox,
    robot
  },
  data() {
    return {
      robotId: [],
      check: [],
      checkId: "",
      emailInfo: "",
      userInfo: "",
      passInfo: "",
      phoneInfo: "",
      roleInfo: "",
      sectionInfo: "",
      Data: "",
      levelId: "",
      charaID: ""
    };
  },
  props: {
    addData: {
      type: Array
    }
  },
  methods: {
    // 返回
    backHome() {
      this.$emit("addPage");
      console.log(1);
    },

    // 提交新增页面
    submitAction() {
      console.log(this.charaID, "charaID");
      this.charaID = localStorage.getItem("lanOuDid");
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
      this.levelId = localStorage.getItem("checkId");
      console.log(
        localStorage.getItem("checkId"),
        "localStorage.getItem('checkId')"
      );
      this.$postBody(
        this.$api.addLanOuAccountInfo,
        {
          dept: section.value,
          lanOuDid: this.charaID,
          mail: email.value,
          passWord: password.value,
          phone: phone.value,
          position: "",
          relationId: this.levelId,
          role: role.value,
          userName: username.value,
          workUnit: ""
        },
        {}
      )
        .then(res => {
          console.log(res);
          this.$emit("addPage");
        })
        .catch(res => {
          console.log(res, "失败");
        });
    }
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
    width: 100%;
    height: 22px;
    background: #f7f7f7;
    p {
      display: inline-block;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #999999;
      a {
        display: inline-block;
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
        width: 46%;
        height: 50px;
        padding-left: 8px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 18px;
          color: #333333;
          font-weight: 500;
          font-weight: block;
          i {
            display: inline-block;
            color: #fe3824;
            // font-size: 18px;
          }
        }
        .upleft {
          margin-left: 16px;
        }
        input {
          width: 390px;
          height: 100%;
          border: 1px solid #cccccc;
          border-radius: 5px;
          padding-left: 16px;
          box-sizing: border-box;
          color: #999;
        }
        #username {
          width: 386px;
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
