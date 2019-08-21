<template>
  <div id="fault">
    <div id="title">
      <p>
        您所在的位置 : 首页 >
        <a>故障信息</a>
      </p>
    </div>
    <div class="toHome">
      <div class="goHome">
        <img @click="backHome()" src="../../assets/img/back.png" alt />
        <span>返回列表</span>
      </div>
    </div>
    <div class="faultInfo">
      <ul>
        <li>
          <a>状态</a>
          <a>上报时间</a>
          <a>设备ID</a>
          <a>故障原因</a>
        </li>
        <li v-for="item in 8" :key="item.id">
          <a>
            <img :src="true ? greenAlarm : redAlarm " alt srcset />
          </a>
          <a>2019-03-19</a>
          <a>SZ191-001</a>
          <a>石英砂更换</a>
        </li>
      </ul>
    </div>
    <sorter />
  </div>
</template>

<script>
import redAlarm from "../../assets/img/untreated.png";
import greenAlarm from "../../assets/img/dispose.png";
import sorter from "../../components/sorter";
export default {
  components: {
    sorter
  },
  data() {
    return {
      redAlarm: redAlarm,
      greenAlarm: greenAlarm
    };
  },

  methods: {
    backHome() {
      this.$emit("faultHidden");
    }
  }
};
</script>

<style lang="scss" scoped>
#fault {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  top: 0;
  padding: 8px 24px 0;
  box-sizing: border-box;
  #title {
    width: 330px;
    height: 22px;
    left: -4px;
    position: absolute;
    top: -38px;
    background: #f7f7f7;
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
  .toHome {
    width: 100%;
    height: 80px;
    background: #eeeeee;
    margin-bottom: 20px;
    .goHome {
      display: flex;
      align-items: center;
      color: #333;
      font-size: 22px;
      font-weight: 400;
      padding-left: 18px;
      padding-top: 17px;
      box-sizing: border-box;

      img {
        width: 43px;
        height: 43px;
        margin-right: 16px;
        cursor: pointer;
      }
    }
  }
  .faultInfo {
    width: 80%;
    height: 59.9%;
    border: 1px solid #cccccc;
    margin: 0 auto;
    border-bottom: none;
    li {
      width: 100%;
      height: 53px;
      border-bottom: 1px solid #ccc;
      a {
        display: inline-block;
        width: 25%;
        height: 53px;
        line-height: 53px;
        text-align: center;
        font-size: 18px;
        color: #333333;
        font-weight: 400;
        border-right: 1px solid #cccccc;
        img {
          position: relative;
          top: 8px;
        }
      }
      a:nth-child(1) {
        width: 20%;
      }
      a:nth-child(4) {
        border-right: none;
      }
    }
    li:nth-child(1) {
      width: 100%;
      height: 58px;
      a {
        display: inline-block;
        width: 25%;
        height: 58px;
        line-height: 58px;
        text-align: center;
        border-right: 1px solid #cccccc;
      }
      a:nth-child(1) {
        width: 20%;
      }
      a:nth-child(4) {
        border-right: none;
      }
    }
  }
}
</style>

