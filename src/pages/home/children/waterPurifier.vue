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
                下拉菜单
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
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
                <!-- 机器状态
                <i class="el-icon-caret-bottom"></i>
                <div class="table-down">
                  <i class="el-icon-caret-top"></i>
                  <ul>
                    <li v-for="item in tdList" :key="item.ID">{{item.name}}</li>
                  </ul>
                </div>-->
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
              <td>{{item}}</td>
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
                  <div>深圳市宝安区高新奇工业园2期1号楼</div>
                </div>
              </td>
              <td>
                <div class="time">
                  <div class="time-title">
                    <span>安装时间:</span>
                    <img src="../../../assets/img/time.png" alt />
                  </div>
                  <div>2019-04-06</div>
                  <div>14:23:12</div>
                  <div class="time-title">
                    <span>上传时间:</span>
                    <img src="../../../assets/img/time.png" alt />
                  </div>
                  <div>2019-04-06</div>
                  <div>14:23:12</div>
                </div>
              </td>
              <td>6</td>
              <td>
                <div class="operation" @click="saveIndex(item)">
                  <p @click="showMachine()">查看</p>
                  <p @click="detailsShow()">参数配置</p>
                  <p>信息维护</p>
                  <p>日志</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <sorter :pageMsg="sortPage"></sorter>
    </div>
    <div v-if="checkJudge">
      <particulars @hidden="hiddenMachine()"></particulars>
    </div>
    <div v-if="detailsJudge">
      <parameter @hiddenSecond="detailshidden()"></parameter>
    </div>
  </div>
</template>

<script>
import particulars from "../../waterMange/particulars";
import sorter from "../../../components/sorter";
import parameter from "../../waterMange/parameter";
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
      sortPage: {
        pages: 1,
        pageSize: 1,
        total: 1
      },
      machineList: []
    };
  },
  methods: {
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
    dropdown(item) {
      for (var i = 0; i < this.trDom.length; i++) {
        this.trDom[i].classList.remove("el-icon-check");
      }
      this.trDom[item.ID].classList.add("el-icon-check");
    },
    machineID() {
      this.machineList = JSON.parse(localStorage.getItem("did"));
    },
    getDid() {
      let _this = this;
      for (let i = 0; i < this.machineList.length; i++) {
        console.log(this.machineList[i]);
        this.$get("/getDidByPayload", { did: this.machineList[i] }).then(
          res => {
            localStorage.setItem(
              "information" + _this.machineList[i],
              res.data.data
            );
          }
        );
      }
    }
  },
  components: {
    particulars,
    sorter,
    parameter
  },
  created() {
    this.machineID();
    this.getDid();
  },
  mounted() {
    this.trDom = document.querySelectorAll(".el-icon-check");
    for (var i = 0; i < this.trDom.length; i++) {
      this.trDom[i].classList.remove("el-icon-check");
    }
    this.$get('/getLanOuProjectInfoBydid',{
      pageNum:'1',
      pageSize:'5',
      did:'16',
      accountId:'1'
    }).then(res => console.log(res.data))
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
}
</style>
