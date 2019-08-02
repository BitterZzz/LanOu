<template>
  <div id="login">
    <div id="login-box">
      <div class="contenr">
        <div class="logo">
          <div class="logo-box">
            <img src="../../assets/img/LOGO_lo.png" />
          </div>
        </div>
        <div class="body">
          <div class="body-title">
            <p>欢迎登陆蓝鸥后台管理系统</p>
          </div>
          <div class="body-user">
            <input type="text" placeholder="账号" class="userInfo input-style" />
            <img src="../../assets/img/userInfo.png" alt class="userImg" />
          </div>
          <div class="body-password">
            <input type="password" class="password input-style" placeholder="密码" />
            <img src="../../assets/img/pwd.png" alt class="pwdImg" />
          </div>
          <div class="body-button">
            <button type="submit" class="logoBtn" @click="login()">登录</button>
          </div>
          <div class="forget-password clearfix">
            <span class="forget-title">忘记密码?</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import QS from "qs";
import install from "../../js/cookie";
export default {
  name: "login",
  data() {
    return {
      dom: {
        userDom: "",
        pwdDom: ""
      },
      userMsg: {
        phone: "",
        pwd: ""
      }
    };
  },
  methods: {
    //登录判断
    login() {
      var userVerity = /^[1][3,4,5,7,8][0-9]{9}$/;
      var pwdVerity = /^[\w_-]{6,16}$/;
      if (this.dom.userDom.value === "") {
        this.$message({
          message: "用户名不能为空",
          type: "warning"
        });
        return;
      }
      if (this.dom.pwdDom.value === "") {
        this.$message({
          message: "密码不能为空",
          type: "warninig"
        });
        return;
      }
      if (userVerity.test(this.dom.userDom.value)) {
        if (pwdVerity.test(this.dom.userDom.value)) {
          this.$message({
            message: "密码正确",
            type: "success"
          });
          this.RequestLogin();
        } else {
          this.$message({
            message: "密码不正确",
            type: "warninig"
          });
          return;
        }
      } else {
        this.$message({
          message: "请输入正确手机号",
          type: "warninig"
        });
        return;
      }
    },
    //请求登录
    RequestLogin() {
      var _this = this;
      this.$post("/loginLanOu", {
        phone: this.dom.userDom.value,
        passWord: this.dom.pwdDom.value
      }).then(res => {
        setTimeout(() => {
          console.log(res.data);
          if (res.data.code === 0) {
            this.event.setCookie(res.data.code, 7);
            this.$router.replace("/homepage");
            let _data = res.data.data;
            let _dataArr = [];
            localStorage.setItem("did", res.data.data[0].lanOuDid);
            localStorage.setItem("level",res.data.data[0].level)
          }
        }, 2000);
      });
    }
  },
  mounted() {
    this.dom.userDom = document.querySelector(".userInfo");
    this.dom.pwdDom = document.querySelector(".password");
  }
};
</script>
<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/bg.png") no-repeat;
  overflow: hidden;
  background-size: cover;
  #login-box {
    // background: url("../../assets/img/bg.png") center;
    .contenr {
      position: absolute;
      width: 500px;
      height: 400px;
      background: #ffffff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .logo {
        margin-top: 31px;
        .logo-box {
          width: 130px;
          height: 67px;
          margin: 0 auto;
        }
      }
      .body {
        width: 400px;
        margin: 0 auto;
        margin-top: 34px;
        .body-title {
          p {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #666666;
            letter-spacing: 0;
          }
        }
        .input-style {
          width: 400px;
          height: 40px;
          border: 1px solid #3b7bcb;
          border-radius: 5px;
          border-radius: 5px;
          padding-left: 40px;
          box-sizing: border-box;
        }
        .body-user {
          position: relative;
          margin-top: 10px;
          .userImg {
            position: absolute;
            width: 20px;
            height: 20px;
            left: 12px;
            top: 10px;
          }
        }
        .body-password {
          position: relative;
          margin-top: 20px;
          .pwdImg {
            position: absolute;
            width: 20px;
            height: 20px;
            left: 12px;
            top: 10px;
          }
        }
        .body-button {
          margin-top: 20px;
          .logoBtn {
            width: 400px;
            height: 40px;
            border: 0;
            background: #3b7bcb;
            border-radius: 5px;
            border-radius: 5px;
            font-family: PingFangSC-Regular;
            font-size: 15px;
            color: #ffffff;
            letter-spacing: 0;
          }
        }
        .forget-password {
          margin-top: 14px;
          .forget-title {
            float: right;
            font-family: PingFangSC-Regular;
            font-size: 15px;
            color: #999999;
            letter-spacing: 0;
          }
        }
      }
    }
  }
}
</style>


