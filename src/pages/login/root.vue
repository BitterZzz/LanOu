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
            <input type="text" placeholder="账号" class="userInfo input-style"/>
          </div>
          <div class="body-password">
            <input type="password" class="password input-style"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login"
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
      .body{
        width: 400px;
        margin: 0 auto;
        .input-style{
          width: 400px;
          height: 40px;
        }
      }
    }
  }
}
</style>


