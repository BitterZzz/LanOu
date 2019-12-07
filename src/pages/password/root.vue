<template>
  <div id="password">
    <div class="password-box">
      <div class="box-content">
        <div class="telephone-box">
          <input
            maxlength="11"
            ref="tel"
            oninput="value=value.replace(/[^\d]/g,'')"
            type="text"
            placeholder="请输入11位手机号"
            value
          />
        </div>
        <div class="code-box clearfix">
          <input
            maxlength="6"
            ref="code"
            oninput="value=value.replace(/[^\d]/g,'')"
            type="text"
            class="code"
            placeholder="请输入短信验证码"
            value
          />
          <button ref="send" @click="countDown">{{count}}</button>
        </div>
        <div class="newPwd-box">
          <input
            oninput="value = value.replace(/[^\a-\z\A-\Z0-9\u4e00-\u9fe5_]/g, '')"
            maxlength="16"
            ref="pwd"
            type="text"
            placeholder="设置新密码(6~16位字母+数字)"
            value
          />
        </div>
        <div class="rPwd-box">
          <input
            oninput="value = value.replace(/[^\a-\z\A-\Z0-9\u4e00-\u9fe5_]/g, '')"
            maxlength="16"
            ref="repwd"
            type="text"
            placeholder="确认新密码"
            value
          />
        </div>
        <div class="btn clearfix">
          <button class="cancel" @click="cancel">取消</button>
          <button class="submit" @click="checkMobile">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "password",
  data() {
    return {
      show: true,
      count: "发送",
      timer: null
    };
  },
  methods: {
    //
    cancel() {
      this.$emit("cancel");
    },
    //60秒倒计时
    countDown() {
      let _this = this;
      const TIME_COUNT = 60;
      let _phone = this.$refs.tel.value;
      if (_phone === "") {
        this.$message({
          message: "请输入手机号",
          type: "warning"
        });
        return;
      } else {
        this.$get(this.$api.sendPhoneCode, { phone: _phone }).then(res => {
          console.log(res, "res");
        });
      }
      this.$refs.send.disabled = true;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            this.count = "发送";
            clearInterval(this.timer);
            this.timer = null;
            this.$refs.send.disabled = false;
          }
        }, 1000);
      }
    },
    checkMobile() {
      const _this = this;
      var userVerity = /^[1][3,4,5,6,7,8][0-9]{9}$/;
      var pwdVerity = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      let _tel = this.$refs.tel.value;
      let _code = this.$refs.code.value;
      let _pwd = this.$refs.pwd.value;
      let _rePwd = this.$refs.repwd.value;
      if (_tel === "") {
        this.$message({
          message: "用户名不能为空",
          type: "warning"
        });
        return;
      }
      if (_code === "") {
        this.$message({
          message: "请输入验证码",
          type: "warning"
        });
        return;
      }
      if (_pwd === "") {
        this.$message({
          message: "请输入密码",
          type: "warning"
        });
        return;
      }
      if (_rePwd === "") {
        this.$message({
          message: "请输入密码",
          type: "warning"
        });
        return;
      }
      if (userVerity.test(_tel)) {
        if (pwdVerity.test(_pwd)) {
          if (_pwd === _rePwd) {
            _this
              .$get(this.$api.updatePasswordByCode, {
                phone: _tel,
                password: _pwd,
                code: _code
              })
              .then(res => {
                console.log(res, "res");
                if (res.data.code === 0) {
                  _this.$message({
                    message: "修改密码成功",
                    type: "success"
                  });
                  this.$emit("cancel");
                }
              });
          } else {
            this.$message({
              message: "确认密码错误",
              type: "warning"
            });
            return;
          }
        } else {
          this.$message({
            message: "请输入正确密码",
            type: "warning"
          });
          return;
        }
      } else {
        this.$message({
          message: "请输入正确手机号",
          type: "warning"
        });
        return;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#password {
  .password-box {
    position: absolute;
    width: 500px;
    height: 400px;
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .box-content {
      position: relative;
      width: 300px;
      left: 50%;
      top: 50%;
      // margin-left:-150px;
      transform: translate(-50%, -50%);
      input {
        width: 300px;
        height: 40px;
        border: 0;
        border: 1px solid #cfcfcf;
        padding-left: 20px;
        box-sizing: border-box;
      }
      .code-box {
        margin-top: 12px;
        .code {
          float: left;
          width: 240px;
        }
        button {
          float: left;
          width: 60px;
          height: 40px;
          line-height: 40px;
          border: 0;
          text-align: center;
          background: #d7d7d7;
          color: #969696;
          box-sizing: border-box;
          border-radius: 0 5px 5px 0;
          cursor: pointer;
        }
      }
      .newPwd-box {
        margin-top: 40px;
      }
      .rPwd-box {
        margin-top: 12px;
      }
      .btn {
        margin-top: 24px;
        .cancel {
          float: left;
          width: 100px;
          height: 40px;
          border: 0;
          border-radius: 20px 0 0 20px;
          background: #3f7dc8;
          color: #fff;
          cursor: pointer;
        }
        .submit {
          float: right;
          width: 176px;
          height: 40px;
          border: 0;
          border-radius: 0 20px 20px 0;
          cursor: pointer;
          background: #fd6621;
          color: #fff;
        }
      }
    }
  }
}
</style>