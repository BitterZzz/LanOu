<template>
  <div id="HomePage">
    <div id="title" v-if="homePageHidden">
      <p>
        您所在的位置 : 首页 >
        <a>首页</a>
      </p>
    </div>
    <div class="equipMent" v-if="homePageHidden">
      <div class="on-line">
        <div class="on">
          <img src="../../../assets/img/on.png" alt />
          <p>
            <i>{{this.onLine}}</i>
            <span>在线设备</span>
          </p>
        </div>
        <div class="off">
          <img src="../../../assets/img/off.png" alt />
          <p>
            <i>{{this.offLine}}</i>
            <span>离线设备</span>
          </p>
        </div>
      </div>
      <div class="info-header">净水机分布</div>
    </div>
    <div class="info" v-if="homePageHidden">
      <div class="userInfo">
        <div class="upkeep">
          <h1>保养信息</h1>
          <ul class="upInfo">
            <li>
              <img src="../../../assets/img/untreated.png" alt srcset />
              <a>未处理</a>
              <span>(2)</span>
            </li>
            <li>
              <img src="../../../assets/img/dispose.png" alt srcset />
              <img src alt srcset />
              <a>处理中</a>
              <span>(2)</span>
            </li>
            <li @click="faultShowAction()">
              <img src="../../../assets/img/more.png" alt srcset />
            </li>
          </ul>
        </div>
        <div class="upTable">
          <table border="1" cellspacing="0">
            <tr>
              <th>状态</th>
              <th>上报时间</th>
              <th>设备ID</th>
              <th>保养类型</th>
            </tr>
            <tr class="stateBox" v-for="item in unkeep" :key="item.id">
              <td>
                <img src="../../../assets/img/untreated.png" alt />
              </td>
              <td>{{item.produceTime.split(' ')[0]}}</td>
              <td>{{item.pdid}}</td>
              <td>{{item.guaranteState}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="question">
        <div class="upkeep">
          <h1>故障信息</h1>
          <ul class="upInfo">
            <li>
              <img src="../../../assets/img/untreated.png" alt srcset />
              <a>未处理</a>
              <span>(2)</span>
            </li>
            <li>
              <img src="../../../assets/img/dispose.png" alt srcset />
              <img src alt srcset />
              <a>处理中</a>
              <span>(2)</span>
            </li>
            <li @click="mainShowAction()">
              <img src="../../../assets/img/more.png" alt srcset />
            </li>
          </ul>
        </div>
        <div class="upTable">
          <table border="1" cellspacing="0">
            <tr>
              <th>状态</th>
              <th>上报时间</th>
              <th>设备ID</th>
              <th>故障类型</th>
            </tr>
            <tr class="stateBox" v-for="item in breakdown" :key="item.id">
              <td>
                <img src="../../../assets/img/untreated.png" alt />
              </td>
              <td>{{item.produceTime.split(' ')[0]}}</td>
              <td>{{item.pdid}}</td>
              <td>{{item.maintenanceState}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <fault v-if="faultShow" @faultHidden="hidden" />
    <maintain v-if="maintainShow" @mainHidden="mainHidden" />
  </div>
</template>

<script>
import fault from "../../fault/fault";
import maintain from "../../maintain/maintain";
import redAlarm from "../../../assets/img/untreated.png";
import greenAlarm from "../../../assets/img/dispose.png";
import { stringToHex } from "../../../js/stringToHex";
export default {
  components: {
    fault,
    maintain
  },
  data() {
    return {
      redAlarm: redAlarm,
      greenAlarm: greenAlarm,
      faultShow: false,
      maintainShow: false,
      did: {},
      typeFrist: {},
      breakdown: [], //故障状态
      unkeep: [], //保养状态
      stateMsgArr: [],
      //离线与在线数据统计
      onLine: "",
      offLine: "",
      //首页信息
      homePageMsg: [],
      homePageHidden: true
    };
  },
  methods: {
    faultShowAction() {
      this.maintainShow = true;
      this.homePageHidden = false;
    },
    mainShowAction() {
      this.faultShow = true;
      this.homePageHidden = false;
    },
    hidden() {
      this.faultShow = false;
      this.homePageHidden = true;
    },
    mainHidden() {
      this.maintainShow = false;
      this.homePageHidden = true;
    },
    homePageJudge() {
      this.homePageHidden = false;
    },
    //获取在线设备与离线设备的数值
    getStatus() {
      let _this = this;
      let data = {
        sak: "444"
      };
      this.$get(this.$api.getOnlineDevice, data).then(res => {
        let statusArr = res.data.data;
        this.onLine = res.data.data.online;
        this.offLine = res.data.data.offline;
        console.log(res,"resresres");
      });
    },
    //保养信息和故障信息
    MaintenanceFailure(typeVo) {
      let _this = this;
      let data = {
        typeVo: typeVo,
        pageNum: 1,
        pageSize: 5
      };
      _this.$post(this.$api.getLanOuProjectInfo, data).then(res => {
        if (typeVo === 1) {
          this.breakdown = res.data.data.list;
        } else if (typeVo === 2) {
          this.unkeep = res.data.data.list;
        }
      });
    }
  },
  created() {
    this.getStatus();
    this.MaintenanceFailure(1);
    this.MaintenanceFailure(2);
    console.log(this.unkeep, "homePageMsg");
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#HomePage {
  width: 100%;
  display: flex;
  #title {
    width: 330px;
    height: 22px;
    left: -4px;
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

  .equipMent {
    width: 80%;
    float: left;
    border-right: 16px solid #f7f7f7;

    .on-line {
      width: 100%;
      height: 121px;
      display: flex;
      justify-content: space-around;

      .on {
        display: flex;
        align-items: center;
        width: 162px;
        height: 100%;
        padding-top: 50px;
        box-sizing: border-box;

        img {
          width: 62px;
          height: 62px;
          // position: relative;
          // top: 5px;
          margin-right: 20px;
          // margin-left: 40px;
        }

        p {
          display: flex;
          flex-direction: column;
          width: 80px;
          color: #333;
          font-size: 20px;

          i {
            display: block;
            font-size: 24px;
          }
        }
      }

      .off {
        display: flex;
        align-items: center;
        width: 162px;
        height: 100%;
        padding-top: 50px;
        box-sizing: border-box;

        img {
          width: 62px;
          height: 62px;
          // position: relative;
          // top: 5px;
          margin-right: 20px;
        }

        p {
          display: inline-block;
          width: 80px;
          color: #333;
          font-size: 20px;

          i {
            display: block;
            font-size: 24px;
          }
        }
      }
    }

    .info-header {
      width: 100%;
      height: 142px;
      line-height: 142px;
      left: 24px;
      font-size: 26px;
      color: #333;
      font-weight: 400;
      padding-left: 24px;
      box-sizing: border-box;
    }
  }

  .info {
    width: 100%;

    .userInfo {
      width: 100%;
      height: 414px;
      border-bottom: 12px solid #f7f7f7;
      padding: 8px 16px 0 16px;
      box-sizing: border-box;

      .upkeep {
        display: flex;
        justify-content: space-between;
        height: 30px;
        margin-bottom: 10px;

        h1 {
          width: 80px;
          font-size: 20px;
          color: #333333;
          font-weight: 400;
        }

        .upInfo {
          display: flex;
          justify-content: space-between;
          position: relative;
          left: 10px;
          width: 320px;

          li:nth-child(3) {
            cursor: pointer;
          }

          li {
            a {
              display: inline-block;
              font-size: 16px;
              color: #333;
              position: relative;
              top: -10px;
              margin-right: 8px;
            }

            span {
              position: relative;
              top: -10px;
              font-size: 16px;
              color: #333;
            }
          }
        }
      }

      .upTable {
        width: 100%;
        table {
          width: 100%;
          text-align: center;
          tr {
            th {
              font-family: PingFangSC-Medium;
              height: 54px;
              color: #333333;
              font-size: 16px;
            }
            th:nth-child(1) {
              width: 16%;
            }
            td {
              color: #333333;
              height: 54px;
            }
          }
          .stateBox {
           td:nth-child(4){
             width: 268px;
           }
          }
        }
      }
    }

    .question {
      width: 100%;
      height: 414px;
      float: right;
      padding: 8px 16px 0 16px;
      box-sizing: border-box;
      border-top: 12px solid #f7f7f7;

      .upkeep {
        display: flex;
        justify-content: space-between;
        height: 30px;
        margin-bottom: 10px;

        h1 {
          font-size: 20px;
          color: #333333;
          font-weight: 400;
        }

        .upInfo {
          display: flex;
          justify-content: space-between;
          position: relative;
          left: 10px;
          width: 320px;

          li:nth-child(3) {
            cursor: pointer;
          }

          li {
            a {
              display: inline-block;
              font-size: 16px;
              color: #333;
              position: relative;
              top: -10px;
              margin-right: 8px;
            }

            span {
              position: relative;
              top: -10px;
              font-size: 16px;
              color: #333;
            }
          }
        }
      }
      .upTable {
        width: 100%;
        height: 50px;
        table {
          width: 100%;
          text-align: center;
          tr {
            th {
              font-family: PingFangSC-Medium;
              height: 54px;
              color: #333333;
              font-size: 16px;
            }
            th:nth-child(1) {
              width: 16%;
            }
            td {
              color: #333333;
              height: 54px;
            }
          }
          .stateBox{
            td:nth-child(4){
              width: 268px;
            }
          }
        }
      }
    }
  }
}
</style>
