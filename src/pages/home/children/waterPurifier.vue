<template>
  <div id="water">
    <div id="header">
      <div class="header-title">
        <span>您所在的位置 :</span>
        <span>净水机管理</span> >
        <span class="span-thrid">净水机列表</span>
      </div>
    </div>
    <div id="content">
      <div id="search-box" class="clearfix">
        <div class="search">
          <div class="ckeck">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                机器ID
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>机器ID</el-dropdown-item>
                <el-dropdown-item>安装地址</el-dropdown-item>
                <el-dropdown-item>故障状态</el-dropdown-item>
                <el-dropdown-item>保养状态</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <input type="text" class="search-value" placeholder="请输入内容" />
        </div>
        <button type="submit" class="search-btn">搜索</button>
      </div>
      <div class="detalis">
        <div class="table-box">
          <table border="1" cellspacing="0" width="100%" class="table-style">
            <tr class="tr-header" align="center">
              <th>机器ID</th>
              <th class="down">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:#333333">
                    机器状态
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      icon="el-icon-check"
                      v-for="item in tdList"
                      :key="item.ID"
                      @click.native="dropdown(item)"
                    >{{item.name}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </th>
              <th>水质数据</th>
              <th>安装地址</th>
              <th>时间</th>
              <th>用户</th>
              <th>操作项</th>
            </tr>
            <tr
              class="tr-main"
              align="center"
              v-for="(item,index) in this.machineList"
              :key="index"
            >
              <td>{{item.pdid}}</td>
              <td>
                <div>在线状态: 在线</div>
                <div>在线状态: 在线</div>
                <div>在线状态: 在线</div>
              </td>
              <td>
                <div class="msg">
                  <div>水温 X℃</div>
                  <div>
                    TDS(ppm)原水:XX
                    <span class="bar"></span> 纯水:XX
                  </div>
                  <div>
                    TOC(mg/l)原水:XX
                    <span class="bar"></span> 纯水:XX
                  </div>
                  <div>
                    浊度(NTU)原水:XX
                    <span class="bar"></span> 纯水:XX
                  </div>
                  <div>
                    COD(mg/l)原水:XX
                    <span class="bar"></span> 纯水:XX
                  </div>
                  <div>余氧(mg/l)去除率:XX%</div>
                </div>
              </td>
              <td>
                <div class="addres">
                  <div>{{item.installationAdderss}}</div>
                </div>
              </td>
              <td>
                <div class="time">
                  <div class="time-title">
                    <span>安装时间:</span>
                    <img src="../../../assets/img/time.png" alt @click="installation()" />
                  </div>
                  <div class="installationDateI" style="height:40px">{{item.installTime}}</div>
                  <!-- <div class="hhmmssI">14:23:12</div> -->
                  <div class="time-title">
                    <span>上传时间:</span>
                    <img src="../../../assets/img/time.png" alt @click="uploadtime()" />
                  </div>
                  <div class="installationDateU">{{item.oderTime}}</div>
                  <!-- <div class="hhmmssU">14:23:12</div> -->
                </div>
              </td>
              <td>6</td>
              <td>
                <div class="operation" @click="saveIndex(item)">
                  <p @click="showMachine()">查看</p>
                  <p @click="detailsShow()">参数配置</p>
                  <p @click="maintainShow()">信息维护</p>
                  <p>日志</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <sorter :pageMsg="sortPage" @Information="getWatchDid"></sorter>
    </div>
    <!-- 查看组件 -->
    <div v-if="checkJudge">
      <particulars @hidden="hiddenMachine()" :translateMsg="this.transferMsg"></particulars>
    </div>
    <!-- 参数配置组件 -->
    <div v-if="detailsJudge">
      <parameter @hiddenSecond="detailshidden()"></parameter>
    </div>
    <div v-if="maintainJudge">
      <maintain @maintain="maintainHidden()"></maintain>
    </div>
    <div class="curtain" v-if="curtainJudge"></div>
  </div>
</template>

<script>
import particulars from "../../waterMange/particulars";
import sorter from "../../../components/sorter";
import parameter from "../../waterMange/parameter";
import maintain from "../../waterMange/maintain";
import { stringToHex } from "../../../js/stringToHex";
export default {
  name: "water",
  data() {
    return {
      list: [{ ID: 123 }, { ID: 123 }, { ID: 123 }, { ID: 123 }],
      liList: [
        { name: "机器Id", ID: 200 },
        { name: "安装地址", ID: 300 },
        { name: "故障状态", ID: 400 },
        { name: "保养状态", ID: 500 }
      ],
      tdList: [
        { name: "全部", ID: 1 },
        { name: "在线", ID: 2 },
        { name: "离线", ID: 3 }
      ],
      test: "",
      dom: "",
      trDom: "",
      checkJudge: false,
      detailsJudge: false,
      maintainJudge: false,
      curtainJudge: false,
      sortPage: {
        pages: 1,
        pageSize: 1,
        total: 1
      },
      machineList: [],
      did: {},
      typeFrist: {},
      transferMsg: {
        inflowMsgArr: [],
        pureMsgArr: [],
        TocBeforeMsgArr: [],
        TocAfterMsgArr: [],
        NtuBeforeMsgArr: [],
        NtuAfterMsgArr: [],
        CodBeforeMsgArr: [],
        CodAfterMsgArr: [],
        RcrrBeforeMsgArr: [],
        RcrrAfterMsgArr: []
      }
    };
  },
  methods: {
    installation() {
      console.log("installation");
    },
    uploadtime() {
      console.log("uploadtime");
    },

    show() {},
    //保存点击时获取到的index
    saveIndex(item) {
      this.test = item.ID;
      console.log(this.test);
    },
    showMachine() {
      this.$emit("routerJudge");
      this.checkJudge = true;
    },
    hiddenMachine() {
      this.checkJudge = false;
    },
    detailsShow() {
      this.$emit("routerJudge");
      this.detailsJudge = true;
    },
    detailshidden() {
      this.detailsJudge = false;
    },
    maintainShow() {
      this.curtainJudge = true;
      this.maintainJudge = true;
    },
    maintainHidden() {
      this.curtainJudge = false;
      this.maintainJudge = false;
    },
    dropdown(item) {
      for (var i = 0; i < this.trDom.length; i++) {
        this.trDom[i].classList.remove("el-icon-check");
      }
      this.trDom[item.ID].classList.add("el-icon-check");
    },
    machineID() {
      // this.machineList = localStorage.getItem("did").split(",");
    },
    //获取相应did的字节
    getDid() {
      let _this = this;
      this.$get("/getDidByPayload", { did: this.did.did }).then(res => {
        let didMsg = res.data.data;
        localStorage.setItem("decodeMsg", JSON.stringify(didMsg));
      });
    },
    //获取该用户可查看的设备
    getWatchDid(val = "1", pageSize = "4") {
      this.$get("/getLanOuProjectInfoBydid", {
        pageNum: val,
        pageSize: pageSize,
        did: localStorage.did,
        level: localStorage.getItem("level")
      }).then(res => {
        console.log(res.data.data);
        this.machineList = res.data.data.list;
        let str = "";
        for (let i = 0; i < this.machineList.length; i++) {
          if (str === "") {
            str += this.machineList[0].pdid;
          } else str += "," + this.machineList[i].pdid;
        }
        this.did.did = str;
        this.sortPage.pageSize = res.data.data.pageSize;
        this.sortPage.pages = res.data.data.pages;
        this.sortPage.total = res.data.data.total;
        this.getDid();
      });
    },
    //对获取到的did字节进行解码
    decode() {
      let getDidMsg = JSON.parse(localStorage.getItem("decodeMsg"));
      let did13 =
        "ZZ       lK͍P     Z2432432333343234       !  ?abbbbbb`bbbbbbb`bbbb`bbbbb`````abbbbbb`bbbbbbb`bbbb`bbbbb`````";
      let decode16 = stringToHex(did13).substr(18);
      let typeJudge = decode16.substr(0, 2);
      this.typeFrist.type = decode16.substr(0, 2);
      console.log(stringToHex(did13).length);
      // 第一种数据类型解析
      // if(typeJudge === "01"){
      //   if(decode16.substr(2,4).length === 4){
      //     let temperature = decode16.substr(2,4);
      //     temperature = temperature.split('').reverse().join('')
      //     //温度值低字节
      //     this.typeFrist.lowTemperature = parseInt(temperature.substr(2,2),16).toString(10);
      //     //温度值高字节
      //     this.typeFrist.TallTemperature = parseInt(temperature.substr(0,2),16).toString(10);
      //     console.log(parseInt(temperature.substr(0,2),16))
      //     console.log(this.typeFrist)
      //   }
      //   if(decode16.substr(6,4).length === 4){
      //     let malfunction = decode16.substr(6,4);
      //     let a = ''
      //     malfunction = parseInt((malfunction),16).toString(2);
      //     for(var i = 0; i < 16 - malfunction.length; i++){
      //       a += 0;
      //     }
      //     malfunction = a + malfunction;
      //     for(var i = 0; i < malfunction.length; i++){
      //       if(this){}
      //     }
      //   }
      // }
      //第二种数据类型(TDS 历史 31 天水质数据)
      if (typeJudge === "02") {
        let inflowMsg = decode16.substr(2, 62);
        let inflowMsgArr = [];
        let pureMsg = decode16.substr(64, 62);
        let pureMsgArr = [];
        for (var i = 0; i < inflowMsg.length; i++) {
          if (i % 2 === 0) {
            inflowMsgArr[i] = parseInt(inflowMsg.substr(i, 2), 16);
            pureMsgArr[i] = parseInt(pureMsg.substr(i, 2), 16);
          }
        }
        this.transferMsg.inflowMsgArr = inflowMsgArr;
        this.transferMsg.pureMsgArr = pureMsgArr;
        console.log(inflowMsgArr);
        console.log(inflowMsgArr);
        return;
      }
      //第三种数据类型(TOC 历史 31 天水质数据)
      if (typeJudge === "03") {
        let TocBeforeMsg = decode16.substr(2, 62);
        let TocBeforeMsgArr = [];
        let TocAfterMsg = decode16.substr(64, 62);
        let TocAfterMsgArr = [];
        for (var i = 0; i < TocBeforeMsg.length; i++) {
          if (i % 2 === 0) {
            TocBeforeMsgArr.push(parseInt(TocBeforeMsg.substr(i, 2), 16) / 10);
            TocAfterMsgArr.push(parseInt(TocAfterMsg.substr(i, 2), 16) / 10);
          }
        }
        this.transferMsg.TocBeforeMsgArr = TocBeforeMsgArr;
        this.transferMsg.TocAfterMsgArr = TocAfterMsgArr;
        console.log(TocBeforeMsgArr);
        console.log(ocAfterMsgArr);
        return;
      }
      //第四种数据类型(NTU(浊度)历史 31 天水质数据)
      if (typeJudge === "04") {
        let NtuBeforeMsg = decode16.substr(2, 62);
        let NtuBeforeMsgArr = [];
        let NtuAfterMsg = decode16.substr(64, 62);
        let NtuAfterMsgArr = [];
        for (var i = 0; i < NtuBeforeMsg.length; i++) {
          if (i % 2 === 0) {
            NtuBeforeMsgArr.push(parseInt(NtuBeforeMsg.substr(i, 2), 16) / 10);
            NtuAfterMsgArr.push(parseInt(NtuAfterMsg.substr(i, 2), 16) / 10);
          }
        }
        this.transferMsg.NtuBeforeMsgArr = NtuBeforeMsgArr;
        this.transferMsg.NtuAfterMsgArr = NtuAfterMsgArr;
        console.log(NtuBeforeMsgArr);
        console.log(NtuAfterMsgArr);
        return;
      } //第五种数据类型(COD 历史 31 天水质数据)
      if (typeJudge === "05") {
        let CodBeforeMsg = decode16.substr(2, 62);
        let CodBeforeMsgArr = [];
        let CodAfterMsg = decode16.substr(64, 62);
        let CodAfterMsgArr = [];
        for (var i = 0; i < CodBeforeMsg.length; i++) {
          if (i % 2 === 0) {
            CodBeforeMsgArr.push(parseInt(CodBeforeMsg.substr(i, 2), 16) / 10);
            CodAfterMsgArr.push(parseInt(CodAfterMsg.substr(i, 2), 16) / 10);
          }
        }
        this.transferMsg.CodBeforeMsgArr = CodBeforeMsgArr;
        this.transferMsg.CodAfterMsgArr = CodBeforeMsgArr;
        console.log(CodBeforeMsgArr);
        console.log(CodAfterMsgArr);
        return;
      } //第六种数据类型(RCRR 历史 31 天水质数据(余氯去除率))
      if (typeJudge === "06") {
        let RcrrBeforeMsg = decode16.substr(2, 62);
        let RcrrBeforeMsgArr = [];
        let RcrrAfterMsg = decode16.substr(64, 62);
        let RcrrAfterMsgArr = [];
        for (var i = 0; i < RcrrBeforeMsg.length; i++) {
          if (i % 2 === 0) {
            RcrrBeforeMsgArr.push(parseInt(RcrrBeforeMsg.substr(i, 2), 16));
            RcrrAfterMsgArr.push(parseInt(RcrrAfterMsg.substr(i, 2), 16));
          }
        }
        this.transferMsg.RcrrBeforeMsgArr = RcrrBeforeMsgArr;
        this.transferMsg.RcrrAfterMsgArr = RcrrAfterMsgArr;
        console.log(RcrrBeforeMsgArr);
        console.log(RcrrAfterMsgArr);
        console.log(this.transferMsg);
        return;
      }
      //第七种数据类型(滤芯滤料)
      if (typeJudge === "07") {
        let typeSevent = decode16.substr(2, 8);
        console.log(typeSevent);
        let typeSeventArr = [];
        for (var i = 0; i < typeSevent.length; i++) {
          if (i % 2 === 0) {
            typeSeventArr.push(parseInt(typeSevent.substr(i, 2), 16));
          }
        }
        console.log(typeSeventArr);
        let a =
          typeSeventArr[0] /
          (typeSeventArr[1] / 10) /
          typeSeventArr[2] /
          typeSeventArr[3];
        console.log(a);
      }
    }
  },
  //封装的组件
  components: {
    particulars,
    sorter,
    parameter,
    maintain
  },
  created() {
    this.machineID();
    this.getWatchDid();
    this.decode();
  },
  mounted() {
    this.trDom = document.querySelectorAll(".el-icon-check");
    for (var i = 0; i < this.trDom.length; i++) {
      this.trDom[i].classList.remove("el-icon-check");
    }
  }
};
</script>

<style lang="scss" scoped>
#water {
  overflow: hidden;
  height: 100%;
  #header {
    .header-title {
      color: #999999;
      position: absolute;
      top: -38px;
      span {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #999999;
        letter-spacing: 0;
      }
      .span-thrid {
        color: #3999f9;
      }
    }
  }
  #content {
    margin: 0 auto;
    #search-box {
      margin-left: 24px;
      margin-top: 16px;
      .search {
        border: solid 1px #cccccc;
        border-radius: 5px;
        border-radius: 5px;
        box-sizing: border-box;
        float: left;
        .ckeck {
          position: relative;
          float: left;
          width: 84px;
          height: 46px;
          line-height: 46px;
          text-align: center;
          color: #333333;
          border-radius: 5px;
          box-sizing: border-box;
          cursor: pointer;
          span {
            font-size: 14px;
          }
          .downLable {
            position: absolute;
            width: 106px;
            left: 0;
            top: 42px;
            display: none;
            i {
              position: absolute;
              left: 38px;
              top: 0;
            }
            ul {
              position: absolute;
              width: 84px;
              background-color: #ffffff;
              box-shadow: 2px 2px 5px #cccccc;
              top: 10px;
              li {
                width: 100%;
                font-size: 12px;
              }
              .liColor {
                background: #ecf9ff;
              }
            }
          }
        }
        .newCkeck {
          border: solid 1px #3999f9;
        }
        .search-value {
          display: inline-block;
          width: 400px;
          height: 46px;
          border: 0;
          border-left: solid 1px #cccccc;
          padding-left: 32px;
          box-sizing: border-box;
        }
      }
      .search-btn {
        float: left;
        width: 120px;
        height: 46px;
        background: #ffffff;
        border: solid 1px #cccccc;
        border-radius: 5px;
        margin-left: 16px;
      }
    }
    .detalis {
      box-sizing: border-box;
      width: 100%;
      padding: 0 24px;
      padding-top: 16px;
      .table-box {
        cursor: pointer;
        .table-style {
          font-family: PingFangSC-Regular;
          border: 0;
          border: solid 1px #cccccc;
          border-collapse: collapse;
          vertical-align: middle;
          color: #333333;
          .tr-header {
            color: #333333;
            font-size: 16px;
            th {
              padding: 16px 0;
              background: #eeeeee;
            }
            th:nth-child(2) {
              position: relative;
              // .table-down {
              //   display: none;
              //   position: absolute;
              //   width: 106px;
              //   left: 18%;
              //   top: 46px;
              //   ul {
              //     position: absolute;
              //     width: 100%;
              //     top: 14px;
              //     font-size: 12px;
              //     box-shadow: 2px 2px 5px #cccccc;
              //     background-color: #ffffff;
              //     color: #cccccc;
              //     li {
              //       width: 100%;
              //       padding: 12px;
              //       background-color: #ffffff;
              //       box-sizing: border-box;
              //     }
              //     .liColor {
              //       background: #3999f9;
              //     }
              //   }
              // }
            }
          }
          .tr-main {
            display: table-row;
            color: #333333;
            font-size: 14px;
            td:nth-child(1) {
              padding: 64px 0;
              box-sizing: border-box;
            }
            td:nth-child(1) {
              width: 150px;
            }
            td:nth-child(2) {
              width: 164px;
            }
            td:nth-child(3) {
              width: 200px;
              .msg {
                width: 196px;
                text-align: left;
                div {
                  .bar {
                    display: inline-block;
                    width: 4px;
                  }
                }
              }
            }
            td:nth-child(4) {
              width: 140px;
              .addres {
                width: 92px;
                text-align: left;
              }
            }
            td:nth-child(5) {
              width: 200px;
              .time {
                width: 110px;
                text-align: left;
                div {
                  padding: 0 2px;
                }
                .time-title {
                  position: relative;
                  img {
                    position: absolute;
                    right: 16px;
                    top: -6px;
                    vertical-align: middle;
                    box-sizing: border-box;
                  }
                }
              }
            }
            td:nth-child(6) {
              width: 150px;
            }
            td:nth-child(7) {
              width: 140px;
              .operation {
                width: 56px;
                text-align: left;
                p {
                  margin: 10px 0;
                  color: #176fff;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
    .popup {
      position: absolute;
      left: 0;
      top: 0;
    }
    .el-dropdown-menu {
      width: 90px;
    }
  }
  .curtain {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #333333;
    opacity: 0.3;
  }
}
</style>
