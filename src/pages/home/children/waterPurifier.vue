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
                <span ref="searchType">机器ID</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item,index) in liList"
                  :key="item.Id"
                  @click.native="searchJudge(index)"
                >{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <input type="text" class="search-value" placeholder="请输入内容" value ref="searchInput" />
        </div>
        <button type="submit" class="search-btn" @click="searchMsg">搜索</button>
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
                      v-for="(item,index) in tdList"
                      :key="item.ID"
                      @click.native="dropdown(item,index)"
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
              v-for="(item,index) in this.nowArrMsg[0]"
              :key="index"
            >
              <td>{{item.pdid}}</td>
              <td>
                <div>在线状态: 在线</div>
                <div>故障状态: {{item.maintenanceState != "" ? "异常" : "正常"}}</div>
                <div>保养状态: {{item.guaranteState != "" ? "异常" : "正常"}}</div>
              </td>
              <td>
                <div class="msg">
                  <div>水温 X℃</div>
                  <div>
                    TDS(ppm)原水:{{item.waterDecode.inflowMsgArr.length === 0 ? "" : item.waterDecode.inflowMsgArr[30]}}
                    <span
                      class="bar"
                    ></span>
                    纯水:{{item.waterDecode.pureMsgArr.length === 0 ? "" : item.waterDecode.pureMsgArr[30]}}
                  </div>
                  <div>
                    TOC(mg/l)原水:{{item.waterDecode.TocBeforeMsgArr.length === 0 ? "" : item.waterDecode.TocBeforeMsgArr[30]}}
                    <span
                      class="bar"
                    ></span>
                    纯水:{{item.waterDecode.TocAfterMsgArr.length === 0 ? "" : item.waterDecode.TocAfterMsgArr[30]}}
                  </div>
                  <div>
                    浊度(NTU)原水:{{item.waterDecode.NtuBeforeMsgArr.length === 0 ? "" : item.waterDecode.NtuBeforeMsgArr[30]}}
                    <span
                      class="bar"
                    ></span>
                    纯水:{{item.waterDecode.NtuAfterMsgArr.length === 0 ? "" : item.waterDecode.NtuAfterMsgArr[30]}}
                  </div>
                  <div>
                    COD(mg/l)原水:{{item.waterDecode.CodBeforeMsgArr.length === 0 ? "" : item.waterDecode.CodBeforeMsgArr[30]}}
                    <span
                      class="bar"
                    ></span>
                    纯水:{{item.waterDecode.CodAfterMsgArr.length === 0 ? "" : item.waterDecode.CodAfterMsgArr[30]}}
                  </div>
                  <div>余氧(mg/l)去除率:{{item.waterDecode.RcrrBeforeMsgArr.length === 0 ? "" : item.waterDecode.RcrrBeforeMsgArr[30]}}%</div>
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
              <td>{{item.bindUser[0]}}</td>
              <td>
                <div class="operation" @click="saveIndex(item)">
                  <p @click="showMachine(index)">查看</p>
                  <p @click="detailsShow(index)">参数配置</p>
                  <p @click="maintainShow(item)">信息维护</p>
                  <p>日志</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <sorter :pageMsg="sortPage" @Information="bindPage"></sorter>
    </div>
    <!-- 查看组件 -->
    <div v-if="checkJudge">
      <particulars @hidden="hiddenMachine()" :translateMsg="this.bindArrMsg"></particulars>
    </div>
    <!-- 参数配置组件 -->
    <div v-if="detailsJudge">
      <parameter @hiddenSecond="detailshidden()" :allocationMsg="this.bindArrMsg"></parameter>
    </div>
    <div v-if="maintainJudge">
      <maintain @maintain="maintainHidden()" :item="this.baseMsg"></maintain>
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
import { decode } from "../../../js/decode";
import { decodeMsg } from "../../../js/decode";
export default {
  name: "water",
  data() {
    return {
      liList: [
        {
          name: "机器ID",
          ID: 200
        },
        {
          name: "安装地址",
          ID: 300
        },
        {
          name: "故障状态",
          ID: 400
        },
        {
          name: "保养状态",
          ID: 500
        }
      ],
      tdList: [
        {
          name: "全部",
          ID: 1
        },
        {
          name: "在线",
          ID: 2
        },
        {
          name: "离线",
          ID: 3
        }
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
      transferMsg: {},
      baseMsg: {},
      localDid: "",
      //净水器管理展示所需数据
      waterShow: [],
      //当前数据
      nowObjMsg: {
        pdid: "", //机器ID
        onLineState: "", //机器状态
        guaranteState: "", //故障状态
        maintenanceState: "", //保养状态
        installationAdderss: "", //安装地址
        installTime: "", //安装时间
        oderTime: "", //上传时间
        bindUser: [] //绑定用户
      },
      //存放当前数据的数组
      nowArrMsg: [],
      //点击获取到的数据
      bindArrMsg: {}
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
    showMachine(index) {
      this.$emit("routerJudge");
      this.checkJudge = true;
      this.bindArrMsg = this.nowArrMsg[0][index];
    },
    hiddenMachine() {
      this.checkJudge = false;
    },
    detailsShow(index) {
      this.$emit("routerJudge");
      this.detailsJudge = true;
      this.bindArrMsg = this.nowArrMsg[0][index];
    },
    detailshidden() {
      this.detailsJudge = false;
    },
    maintainShow(item) {
      this.curtainJudge = true;
      this.maintainJudge = true;
      this.baseMsg = item;
    },
    maintainHidden() {
      this.curtainJudge = false;
      this.maintainJudge = false;
    },
    //筛选在线与离线
    dropdown(item, index) {
      for (var i = 0; i < this.trDom.length; i++) {
        this.trDom[i].classList.remove("el-icon-check");
      }
      this.trDom[item.ID - 1].classList.add("el-icon-check");
      let searchType = this.$refs.searchType.innerHTML;
      let inputValue = this.$refs.searchInput.value;
      let machineStatus = this.tdList[index].name;
      if (searchType === "机器ID") {
        if (item.name === "在线") {
          this.getWaterMsg(1, { pdid: inputValue, machineStatus: "1" });
        } else if (item.name === "离线") {
          this.getWaterMsg(1, { pdid: inputValue, machineStatus: "2" });
        } else if (item.name === "全部") {
          this.getWaterMsg(1, { pdid: inputValue, machineStatus: "0" });
        }
        return;
      }
      if (searchType === "安装地址") {
        if (item.name === "在线") {
          this.getWaterMsg(1, {
            installationAdderss: inputValue,
            machineStatus: "1"
          });
        } else if (item.name === "离线") {
          this.getWaterMsg(1, {
            installationAdderss: inputValue,
            machineStatus: "2"
          });
        } else if (item.name === "全部") {
          this.getWaterMsg(1, {
            installationAdderss: inputValue,
            machineStatus: "0"
          });
        }
        return;
      }
      if (searchType === "故障状态") {
        if (item.name === "在线") {
          this.getWaterMsg(1, {
            guaranteState: inputValue,
            machineStatus: "1"
          });
        } else if (item.name === "离线") {
          this.getWaterMsg(1, {
            guaranteState: inputValue,
            machineStatus: "2"
          });
        } else if (item.name === "全部") {
          this.getWaterMsg(1, {
            guaranteState: inputValue,
            machineStatus: "0"
          });
        }
        return;
      }
      if (searchType === "保养状态") {
        if (item.name === "在线") {
          this.getWaterMsg(1, {
            maintenanceState: inputValue,
            machineStatus: "1"
          });
        } else if (item.name === "离线") {
          this.getWaterMsg(1, {
            maintenanceState: inputValue,
            machineStatus: "2"
          });
        } else if (item.name === "全部") {
          this.getWaterMsg(1, {
            maintenanceState: inputValue,
            machineStatus: "0"
          });
        }
        return;
      }
    },
    getWatchDid() {},
    //点击分页器触发获取页面信息
    bindPage(val) {
      this.getWaterMsg(val, { accountId: 1 });
    },
    searchJudge(index) {
      this.$refs.searchType.innerHTML = this.liList[index].name;
    },
    //获取到进入净水器的第页面数据
    getWaterMsg(val = 1, obj) {
      const custom = {
        accountId: 1,
        pageSize: 4,
        guaranteState: "", //故障状态
        installationAdderss: "", //安装地址
        machineStatus: "", //机器状态
        maintenanceState: "", //保养状态
        pdid: "" //具体设备ID
      };
      for (var key in custom) {
        if (key in obj) {
          custom[key] = obj[key];
        }
      }
      let body = {
        guaranteState: custom.guaranteState,
        installationAdderss: custom.installationAdderss,
        machineStatus: custom.machineStatus,
        maintenanceState: custom.maintenanceState,
        pdid: custom.pdid
      };
      let data = {
        accountId: custom.accountId,
        pageNum: val,
        pageSize: custom.pageSize
      };
      this.$postBody(this.$api.getLanOuProjectInfoSearch, body, data).then(
        res => {
          let resMsg = res.data.data;
          let resMsgList = resMsg.list;
          this.machineList = resMsg.list;
          this.sortPage.pages = resMsg.pages;
          this.sortPage.total = resMsg.total;
          this.sortPage.pageSize = resMsg.pageSize;
          this.showMsg(resMsg, resMsgList);
        }
      );
    },
    //搜索
    searchMsg() {
      // search-value
      let searchType = this.$refs.searchType.innerHTML;
      let inputValue = this.$refs.searchInput.value;
      if (searchType === "机器ID") {
        this.getWaterMsg(1, { pdid: inputValue });
        return;
      }
      if (searchType === "安装地址") {
        this.getWaterMsg(1, { installationAdderss: inputValue });
        return;
      }
      if (searchType === "故障状态") {
        this.getWaterMsg(1, { guaranteState: inputValue });
        return;
      }
      if (searchType === "保养状态") {
        this.maintenanceState(1, { maintenanceState: inputValue });
        return;
      }
    },
    //展示数据重组
    showMsg(resMsg, resMsgList) {
      let nowArrMsg = [];
      let _this = this;
      let a = resMsgList.map(item => {
        return {
          pdid: item.pdid,
          puuid: item.puuid,
          installationAdderss: item.installationAdderss,
          installTime: item.installTime,
          oderTime: item.oderTime,
          maintenanceState: item.maintenanceState,
          guaranteState: item.guaranteState,
          bindUser:
            item.bindedUserList !== null
              ? item.bindedUserList.map((item, index) => {
                  return (function() {
                    if (item.nick) {
                      return item.nick;
                    }
                    if (item.realName) {
                      return item.realName;
                    }
                    if (item.uid) {
                      return item.uid;
                    }
                    if (item.did) {
                      return item.did;
                    }
                  })();
                })
              : "",
          waterDecode: (function(item) {
            let waterArrMsg = item.split("|-|");
            let obj;
            let msg;
            let waterDecodeMsg = {
              inflowMsgArr: [],
              pureMsgArr: [],
              TocBeforeMsgArr: [],
              TocAfterMsgArr: [],
              NtuBeforeMsgArr: [],
              NtuAfterMsgArr: [],
              CodBeforeMsgArr: [],
              CodAfterMsgArr: [],
              RcrrBeforeMsgArr: [],
              RcrrAfterMsgArr: [],
              typeSeventArr: [],
              typeEightObj: {}
            };
            if (item !== "") {
              console.log(item,waterArrMsg,"item里面到底是什么")
              for (var i = 0; i < waterArrMsg.length - 1; i++) {
                msg = decode(waterArrMsg[i], decodeMsg);
                for (var key in msg) {
                  if (key in waterDecodeMsg) {
                    waterDecodeMsg[key] = msg[key];
                  }
                }
                obj = {...waterDecodeMsg};
              }
            } else {
              return {
                inflowMsgArr: [],
                pureMsgArr: [],
                TocBeforeMsgArr: [],
                TocAfterMsgArr: [],
                NtuBeforeMsgArr: [],
                NtuAfterMsgArr: [],
                CodBeforeMsgArr: [],
                CodAfterMsgArr: [],
                RcrrBeforeMsgArr: [],
                RcrrAfterMsgArr: [],
                typeSeventArr: [],
                typeEightObj: {}
              };
            }
            return {...obj};
          })(item.waterInfo)
        };
      });
      console.log(a,"我是数据重组中的a")
      _this.nowArrMsg = [];
      _this.nowArrMsg.push({...a});
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
    this.localDid = localStorage.getItem("did");
    this.getWaterMsg(1, { accountId: 1 });
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
                width: 200px;
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
