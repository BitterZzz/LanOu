<template>
  <div id="home">
    <div class="header">
      <div class>
        <p class="logo">
          <img src="../../assets/img/LOGO.png" alt title="蓝鸥" />
        </p>
        <h2>广东蓝鸥净水设备管理系统</h2>
        <div class="user">
          <li class="left">
            <img src="../../assets/img/user.png" alt srcset />
            <a href="#">
              欢迎
              <span>管理员 !</span>
            </a>
          </li>
          <li class="right" @click="quit()">
            <a href="#">注销</a> |
            <a href="#">退出管理</a>
          </li>
        </div>
      
      </div>
    </div>
    <div class="mainBox">
      <div class="nav">
        <el-container style="height: 500px; ">
          <el-aside width="100%">
            <el-menu :default-openeds="['1']">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-unfold"></i>系统菜单
                </template>

                <el-menu-item v-for="item in list" :key="item.id" @click="homeAction(item.name)">
                  <router-link :to="item.path">
                    <img :src="isSelect === item.name ? item.require : item.url" alt="item.title" />
                    <a :class="isSelect === item.name ? 'active':''">{{item.name}}</a>
                  </router-link>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
        </el-container>
      </div>
      <div class="main">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      isSelect: "首页",
      list: [
        {
          id: 1,
          name: "首页",
          path: "homePage",
          url: require("../../assets/img/shouye.png"),
          require: require("../../assets/img/shouye_1.png")
        },
        {
          id: 2,
          name: "净水器管理",
          path: "waterPurifier",
          url: require("../../assets/img/icon1.png"),
          require: require("../../assets/img/icon2.png")
        },
        {
          id: 3,
          name: "账号管理",
          path: "account",
          url: require("../../assets/img/icon3.png"),
          require: require("../../assets/img/icon4.png"),
        } ,
        {
          id: 4,
          name: "用户管理",
          path: "user",
          url: require("../../assets/img/icon5.png"),
          require: require("../../assets/img/icon6.png")
        },
        {
          id: 5,
          name: "操作日志",
          path: "operationLog",
          url: require("../../assets/img/icon7.png"),
          require: require("../../assets/img/icon8.png")
        }
      ]
    };
  },
  methods: {
    homeAction(name) {
      this.isSelect = name;
    },
    quit(){
      this.event.clearCookie();
      this.$router.replace('/login');
    }
  },
  mounted() {
    this.isSelect = this.$route.name;
  }
};
</script>

<style lang="scss">
#home {
  position: relative;
  //  margin: auto;
  .header {
    width: 100%;
    height: 112px;
    background: #2488dd;
    color: #fff;
    padding-top: 22px;
    box-sizing: border-box;

    .logo {
      width: 110px;
      height: 57px;
      margin-left: 50px;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h2 {
      width: 384px;
      height: 45px;
      font-size: 26px;
      color: #ffffff;
      margin-left: 50px;
      padding-top: 12px;
      float: left;
    }
    .user {
      width: 338px;
      padding-top: 20px;
      color: #ffffff;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      float: right;
      margin-right: 30px;
      li {
        display: inline-block;
        height: 42px;
        // line-height: 42px;

        padding-top: 2px;
      }
      .left {
        position: relative;
        padding-left: 40px;
        img {
          width: 28px;
          height: 28px;
          position: absolute;
          top: 0px;
          left: 0;
        }
        a {
          color: #fff;
          span {
            color: #feff89;
          }
        }
      }
      .right {
        a {
          color: #ffffff;
        }
      }
    }
  }
  .mainBox {
    width: 100%;
    display: flex;
    .nav {
      width: 230px;
      height: 912px;
      color: #fff;
      background: #fff;
      float: left;
      .el-submenu__title {
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #666666;
        letter-spacing: 0;
        padding-left: 27px !important;
        box-sizing: border-box;
        height: 54px;
        border-left: none;
        border-bottom: 0.1px solid #d9d9d9;
        margin-bottom: 20px;
        .el-submenu__icon-arrow {
          display: none;
        }
        .el-icon-s-unfold::before {
          width: 26px;
          height: 26px;
          margin-right: 40px;
          position: relative;
          top: -2px;
        }
      }
      .el-menu-item {
        height: 68px;
      }
      img {
        width: 22px;
        height: 22px;
        position: absolute;
        left: 25px;
        top: 24px;
        z-index: 4;
      }
      a {
        display: inline-block;
        position: absolute;
        height: 68px;
        line-height: 68px;
        width: 100%;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        box-sizing: border-box;
        left: 0;
        padding-left: 70px;
      }
      .active {
        color: #3999f9;
        background: #ecf9ff;
        border-right: 2px solid #3999F9;
      }
    }
    .main {
      width: 100%;
      height: 912px;
      float: left;
      background: #f7f7f7;
      color: #2488dd;
      padding: 54px 31px 30px 32px;
      box-sizing: border-box;
      position: relative;
      .content {
        position: relative;
        width: 100%;
        height: 828px;
        background: #fff;
      }
    }
  }
}
</style>

