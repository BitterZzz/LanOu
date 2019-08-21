<template>
  <div id="HomePage">
    <div id="title">
      <p>
        您所在的位置 : 首页 >
        <a>首页</a>
      </p>
    </div>
    <div class="equipMent">
      <div class="on-line">
        <div class="on">
          <img src="../../../assets/img/on.png" alt />
          <p>
            <i>39</i>
            <span>在线设备</span>
          </p>
        </div>
        <div class="off">
          <img src="../../../assets/img/off.png" alt />
          <p>
            <i>5</i>
            <span>在线设备</span>
          </p>
        </div>
      </div>
      <div class="info-header">净水机分布</div>
    </div>
    <div class="info">
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
          <ul>
            <li>
              <a>状态</a>
              <a>上报时间</a>
              <a>设备ID</a>
              <a>保养类型</a>
            </li>
            <li v-for="info in 5" :key="info.id">
              <a>
                <img :src="true ? redAlarm : greenAlarm" alt srcset />
              </a>
              <a>2019-03-19</a>
              <a>SZ191-001</a>
              <a>再生盐更换</a>
            </li>
          </ul>
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
          <ul>
            <li>
              <a>状态</a>
              <a>上报时间</a>
              <a>设备ID</a>
              <a>保养类型</a>
            </li>
            <li v-for="info in 5" :key="info.id">
              <a>
                <img :src="true ? redAlarm : greenAlarm" alt srcset />
              </a>
              <a>2019-03-19</a>
              <a>SZ191-001</a>
              <a>再生盐更换</a>
            </li>
          </ul>
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
      stateMsg: {
        maintenanceState: "",
        guaranteState: "",
        did: ""
      },
      stateMsgArr: []
    };
  },
  methods: {
    faultShowAction() {
      this.maintainShow = true;
    },
    mainShowAction() {
      this.faultShow = true;
    },
    hidden() {
      this.faultShow = false;
    },
    mainHidden() {
      this.maintainShow = false;
    },
    //获取相应did的字节
    getDid() {
      let _this = this;
      this.$get("/getDidByPayload", { did: "100" }).then(res => {
        let didMsg = res.data.data;
        let didMsgArr = [];
        //将获取到的数据保存到localstorage
        localStorage.setItem("decodeMsgHome", JSON.stringify(didMsg));
        let localMsg = JSON.parse(localStorage.getItem("decodeMsgHome"));
        //遍历localStorage中的数据并保存到数组
        for (var key in localMsg) {
          didMsgArr.push(key + "|" + localMsg[key]);
        }
        let newDidMsgArr = [];
        //遍历didMsgArr中的数据保存到newDidMsgArr
        for (var i = 0; i < didMsgArr.length; i++) {
          newDidMsgArr.push(didMsgArr[i].split("|"));
          this.stateMsg.did = newDidMsgArr[i][0].substr(3);
          for (var j = 1; j < newDidMsgArr[i].length - 1; j++) {
            let decodeMsg = newDidMsgArr[i][j].substr(2);
            this.decode(decodeMsg);
          }
        }
      });
    },
    //获取该用户可查看的设备
    getWatchDid(val = "1", pageSize = "1000000") {
      this.$postBody(
        "/getLanOuProjectInfoBydid",
        {
          listMap: [
            { did: "13", maintenanceState: "13324", guaranteState: "789787" }
          ],
          onlineDid: []
        },
        {
          pageNum: val,
          pageSize: pageSize,
          did: localStorage.did,
          level: localStorage.getItem("level"),
          sak: "111"
        }
      ).then(res => {
        this.machineList = res.data.data.list;
        let str = "";
        for (let i = 0; i < this.machineList.length; i++) {
          if (str === "") {
            str += this.machineList[0].pdid;
          } else str += "," + this.machineList[i].pdid;
        }
        this.getDid();
      });
    },
    //对获取到的did字节进行解码
    decode(did) {
      let getDidMsg = JSON.parse(localStorage.getItem("decodeMsg"));
      let decode16 = stringToHex(did).substr(18);
      let typeJudge = decode16.substr(0, 2);
      // 第一种数据类型解析
      if (typeJudge === "30") {
        if (decode16.substr(2, 4).length === 4) {
          let temperature = decode16.substr(2, 4);
          temperature = temperature
            .split("")
            .reverse()
            .join("");
          //温度值低字节
          this.typeFrist.lowTemperature = parseInt(
            temperature.substr(2, 2),
            16
          ).toString(10);
          //温度值高字节
          this.typeFrist.TallTemperature = parseInt(
            temperature.substr(0, 2),
            16
          ).toString(10);
          // console.log(parseInt(temperature.substr(0, 2), 16));
          // console.log(this.typeFrist);
        }
        if (decode16.substr(6, 4).length === 4) {
          let malfunction = decode16.substr(6, 4);
          let a = "";
          malfunction = parseInt(malfunction, 16).toString(2);
          for (var i = 0; i < 16 - malfunction.length; i++) {
            a += 0;
          }
          malfunction = a + malfunction;
          let b = [];
          for (var i = 0; i < 8; i++) {
            if (malfunction[i] !== "0") {
              b.push({
                maintain: "1",
                malfunction: "1"
              });
            } else {
              b.push({
                maintain: "0",
                malfunction: "0"
              });
            }
          }
          let guaranteState = "";
          let maintenanceState = "";
          for (var j = 0; j < 8; j++) {
            guaranteState += b[j].malfunction; //故障状态
            maintenanceState += b[j].maintain; //保养状态
          }
          this.stateMsg.guaranteState = guaranteState;
          this.stateMsg.maintenanceState = maintenanceState;
          this.stateMsgArr.push(this.stateMsg);
          console.log(
            this.stateMsg.did,
            this.stateMsg.guaranteState,
            this.stateMsg.maintenanceState
          );
        }
      }
    }
  },
  created() {
    this.getWatchDid();
    console.log(this.stateMsgArr);
    //发送请求保存机器的故障状态和保养状态
    this.$postBody(
      "/getLanOuProjectInfoBydid",
      {
        listMap: this.stateMsgArr,
        onlineDid: []
      },
      {
        pageNum: "1",
        pageSize: "1000000",
        did: localStorage.did,
        level: localStorage.getItem("level"),
        sak: "111"
      }
    );
  }
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
      width:100%;
      height: 121px;
      display: flex;
      justify-content:space-around;

      .on {
        display:flex;
        height: 100%;
        position: relative;
        padding-top: 50px;
        box-sizing: border-box;
        img {
          width: 62px;
          height: 62px;
          position: relative;
          top: 5px;
          margin-right: 20px;
          margin-left: 40px;
        }
        p {
          display: inline-block;
          color: #333;
          font-size: 20px;
          i {
            display: block;
            font-size: 24px;
          }
        }
      }
      .off {
        height: 100%;
        position: relative;
        padding-top: 50px;
        box-sizing: border-box;
        img {
          width: 62px;
          height: 62px;
          position: relative;
          top: 5px;
          margin-right: 20px;
        }
        p {
          display: inline-block;
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
        height: 330px;
        border: 1px solid #cccccc;
        border-bottom: none;
        li:nth-child(1) {
          a {
            font-size: 16px;
            color: #333;
            font-weight: 600;
          }
        }
        li {
          width: 100%;
          height: 54px;
          border-bottom: 1px solid #cccccc;
          a {
            width: 25%;
            display: inline-block;
            height: 54px;
            line-height: 54px;
            border-right: 1px solid #cccccc;
            text-align: center;
            font-weight: 500;
            font-size: 14px;
            color: #333;
            img {
              position: relative;
              top: 10px;
            }
          }
          a:nth-child(1) {
            width: 16%;
          }
          a:nth-child(4) {
            border-right: none;
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
        height: 330px;
        border: 1px solid #cccccc;
        border-bottom: none;
        li:nth-child(1) {
          a {
            font-size: 16px;
            color: #333;
            font-weight: 600;
          }
        }
        li {
          width: 100%;
          height: 54px;
          border-bottom: 1px solid #cccccc;
          a {
            width: 25%;
            display: inline-block;
            height: 54px;
            line-height: 54px;
            border-right: 1px solid #cccccc;
            text-align: center;
            font-weight: 500;
            font-size: 14px;
            color: #333;
            img {
              position: relative;
              top: 10px;
            }
          }
          a:nth-child(1) {
            width: 16%;
          }
          a:nth-child(4) {
            border-right: none;
          }
        }
      }
    }
  }
}
</style>
