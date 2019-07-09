<template>
  <div id="login">
    <div id="login-box" class="container">
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
            <button type="button" class="logoBtn" @click="login()">登录</button>
          </div>
          <div class="forget-password clearfix">
            <span class="forget-title">忘记密码?</span>
          </div>
        </div>
      </div>
    </div>
    <el-button :plain="true" @click="openVn">VNode</el-button>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      dom: {
        userDom: "",
        pwdDom: ""
      }
    };
  },
  methods: {
    login() {},
    open() {
      this.$message("这是一条消息提示");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
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


