<template>
  <div id="particulars" class="animated fadeIn">
    <header id="header" class="clearfix">
      <div class="header-box">
        <div class="title" @click="hidden()">
          <img src="../../assets/img/back.png" />
          <span>机器详情</span>
        </div>
        <div class="IdBox">
          <span>ID:</span>
          <span>12345678</span>
        </div>
        <div class="popupBox">
          <span>型号:</span>
          <span>LOSRO-500-S</span>
        </div>
      </div>
    </header>
    <section id="main">
      <!-- 水质曲线与用水曲线 -->
      <div class="waterQuality">
        <div class="waterQuality-left">
          <div class="left-title">
            <span>水质曲线</span>
            <img src="../../assets/img/water.png" alt />
          </div>
          <div class="data-table">
            <div class="table-box">
              <div class="table-TDS">
                <img src="../../assets/img/ppm.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <span>TDS</span>
              <div class="table-TDS table-TDS2">
                <img src="../../assets/img/ppm2.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <div id="table-echarts" class="echarts" style="width:280px;height:200px"></div>
            </div>
            <div class="table-box">
              <div class="table-TDS">
                <img src="../../assets/img/ppm.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <span>TOC</span>
              <div class="table-TDS table-TDS2">
                <img src="../../assets/img/ppm2.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <div id="table-echarts2" style="width:280px;height:200px"></div>
            </div>
            <div class="table-box">
              <div class="table-TDS">
                <img src="../../assets/img/ppm.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <span>浊度</span>
              <div class="table-TDS table-TDS2">
                <img src="../../assets/img/ppm2.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <div id="table-echarts3" class="echarts" style="width:280px;height:200px"></div>
            </div>
          </div>
          <div class="data-table data-table2">
            <div class="table-box">
              <div class="table-TDS">
                <img src="../../assets/img/ppm.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <span>COD</span>
              <div class="table-TDS table-TDS2">
                <img src="../../assets/img/ppm2.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <div id="table-echarts4" class="echarts" style="width:280px;height:200px"></div>
            </div>
            <div class="table-box">
              <div class="table-TDS">
                <img src="../../assets/img/ppm.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <span>余氯</span>
              <div class="table-TDS table-TDS2">
                <img src="../../assets/img/ppm2.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <div id="table-echarts5" class="echarts" style="width:280px;height:200px"></div>
            </div>
          </div>
        </div>
        <!-- 用水曲线 -->
        <div class="waterQuality-right">
          <div class="right-title clearfix">
            <div class="title-left">用水曲线</div>
            <div class="title-right">
              <p>
                进水总量:
                <span>1280m³</span>
              </p>
              <p>
                纯水总量:
                <span>890m³</span>
              </p>
            </div>
          </div>
          <div class="right-table">
            <div class="right-calendar">
              <i class="el-icon-caret-left" style="color:#333"></i>
              <span>2019-05</span>
              <i class="el-icon-caret-right" style="color:#333"></i>
            </div>
            <div class="table-box">
              <div id="table-line2" style="width:320px;height:400px"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 滤芯寿命 -->
      <div class="Cartridge">
        <div class="Cartridge-title">滤芯寿命</div>
        <div class="Cartridge-content">
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/ppm.png" alt />
              <span class="inflow">145</span>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/ppm2.png" alt />
              <span class="clearwater">145</span>
            </div>
            <strong class="content-title">石英砂</strong>
          </div>
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/ppm.png" alt />
              <span class="inflow">145</span>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/ppm2.png" alt />
              <span class="clearwater">145</span>
            </div>
            <strong class="content-title">活性炭</strong>
          </div>
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/ppm.png" alt />
              <span class="inflow">145</span>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/ppm2.png" alt />
              <span class="clearwater">145</span>
            </div>
            <strong class="content-title">软化树脂</strong>
          </div>
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/ppm.png" alt />
              <span class="inflow">145</span>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/ppm2.png" alt />
              <span class="clearwater">145</span>
            </div>
            <strong class="content-title">再生盐</strong>
          </div>
        </div>
        <div class="Cartridge-content">
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/ppm.png" alt />
              <span class="inflow">145</span>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/ppm2.png" alt />
              <span class="clearwater">145</span>
            </div>
            <strong class="content-title">精密滤芯</strong>
          </div>
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/ppm.png" alt />
              <span class="inflow">145</span>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/ppm2.png" alt />
              <span class="clearwater">145</span>
            </div>
            <strong class="content-title">RO膜</strong>
          </div>
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/ppm.png" alt />
              <span class="inflow">145</span>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/ppm2.png" alt />
              <span class="clearwater">145</span>
            </div>
            <strong class="content-title" style="left:100px">UV</strong>
          </div>
          <div class="content-meter" style="width:224px;"></div>
        </div>
      </div>
      <!-- 机器状态 -->
      <div class="State">
        <div class="State-header">机器状态</div>
        <div class="State-main clearfix">
          <div class="operation-left">
            <div class="switch">
              <div class="switch-title">开关信号量输出</div>
              <div class="switch-main">
                <ul>
                  <li>
                    <span class="state-span">纯水箱低水位开关</span>
                    <span class="disconnect">断开</span>
                  </li>
                  <li>
                    <span class="state-span">纯水箱低水位开关</span>
                    <span class="close">闭合</span>
                  </li>
                  <li>
                    <span class="state-span">纯水箱低水位开关</span>
                    <span class="close">闭合</span>
                  </li>
                  <li>
                    <span class="state-span">纯水箱低水位开关</span>
                    <span class="close">闭合</span>
                  </li>
                  <li>
                    <span class="state-span">纯水箱低水位开关</span>
                    <span class="disconnect">断开</span>
                  </li>
                  <li>
                    <span class="state-span">纯水箱低水位开关</span>
                    <span class="disconnect">断开</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="Analog switch">
              <div class="switch-title">模拟量输入</div>
              <div class="switch-main Analog-main">
                <ul>
                  <li v-for="item in AnalogList" :key="item.ID">
                    <span class="state-span">{{item.name}}</span>
                    <div style="width:140px">
                      <span class="Analog-value">{{item.num}}</span>
                      <span class="Analog-unit">{{item.unit}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="operation-right">
            <div class="relay-header">继电器输出</div>
            <div class="relay-headr switch">
              <div class="switch-main">
                <ul>
                  <li v-for="list in relayList" :key="list.ID">
                    <span class="state-span"> {{list.name}} </span>
                    <span class="disconnect"> {{list.operation}} </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import bus from '../../js/bus'
export default {
  name: "particulars",
  data() {
    return {
      AnalogList: [
        { ID: 100, name: "纯水箱低水位开关", unit: "MPa", num: "9.2" },
        { ID: 101, name: "纯水箱中水位开关", unit: "MPa", num: "9.2" },
        { ID: 102, name: "纯水箱高水位开关", unit: "Mpa", num: "9.2" },
        { ID: 103, name: "纯水箱防溢开关", unit: "m³/H", num: "9.2" },
        { ID: 104, name: "软水信号开关", unit: "m³/H", num: "9.2" },
        { ID: 105, name: "软水信号开关", unit: "m³", num: "9.2" },
        { ID: 106, name: "阀头反冲洗信号开关", unit: "m³", num: "9.2" }
      ],
      relayList: [
        { ID: 200, name:"进水电磁阀", operation:"断开" },
        { ID: 201, name:"浓水电磁阀", operation:"断开" },
        { ID: 202, name:"进水电磁阀", operation:"断开" },
        { ID: 203, name:"进水电磁阀", operation:"断开" },
        { ID: 204, name:"进水电磁阀", operation:"断开" },
        { ID: 205, name:"进水电磁阀", operation:"断开" },
        { ID: 206, name:"进水电磁阀", operation:"断开" },
        { ID: 207, name:"进水电磁阀", operation:"断开" },
        { ID: 208, name:"进水电磁阀", operation:"断开" },
        { ID: 209, name:"进水电磁阀", operation:"断开" },
        { ID: 210, name:"进水电磁阀", operation:"断开" },
        { ID: 211, name:"进水电磁阀", operation:"断开" },
        ]
    };
  },
  methods:{
    hidden(){
      //触发home中的getParam使其改变home中的Judge的值
      bus.$emit('getParam');
      this.$emit('hidden');
    }
  },
  created(){
    
  },
  mounted() {
    this.$chart.line1("table-echarts",'mg/L');
    this.$chart.line1("table-echarts2");
    this.$chart.line1("table-echarts3");
    this.$chart.line1("table-echarts4");
    this.$chart.line1("table-echarts5");
    this.$chart.line2("table-line2");
  }
};
</script>
<style lang="scss" scoped>
#particulars {
  position: absolute;
  width: 104%;
  border: solid 1px red;
  background: #ffffff;
  left: -156px;
  top: 20px;
  z-index: 10000;
  display: block;
  #header {
    .header-box {
      margin-top: 10px;
      div {
        float: left;
        line-height: 50px;
        font-size: 16px;
        color: #333;
      }
      .title {
        img {
          vertical-align: middle;
          cursor: pointer;
        }
        span {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }
      }
      .IdBox {
        margin-left: 100px;
      }
      .popupBox {
        margin-left: 76px;
      }
    }
  }
  #main {
    margin-top: 10px;
    .waterQuality {
      width: 100%;
      height: 640px;
      .waterQuality-left {
        float: left;
        width: 62.4%;
        height: 100%;
        background: #053272;
        .left-title {
          margin-left: 1.8%;
          margin-top: 10px;
          color: #ffffff;
          img {
            vertical-align: middle;
            margin-left: 4px;
          }
          span {
            font-weight: bold;
            font-size: 18px;
          }
        }
        .data-table {
          // width: 1106px;
          margin-top: 50px;
          // .table-box:nth-child(1){
          //   margin-left: 4%;
          // }
          display: flex;
          justify-content: space-around;

          .table-box {
            position: relative;
            height: 300px;
            float: left;
            .table-TDS {
              display: inline-block;
              position: relative;
              .TDS-num {
                position: absolute;
                left: 38px;
                top: 36px;
                color: #ffb400;
              }
            }
            span {
              position: absolute;
              left: 98px;
              top: -30px;
              color: #176fff;
              font-size: 18px;
            }
            .table-TDS2 {
              margin-left: 22px;
            }
            #table-echarts {
              position: absolute;
              top: 60px;
              left: 0;
            }
            #table-echarts2 {
              position: absolute;
              top: 60px;
              left: 0;
            }
            #table-echarts3,
            #table-echarts4,
            #table-echarts5 {
              position: absolute;
              top: 60px;
              left: 0;
            }
          }
        }
        .data-table2 {
          margin-top: 0;
        }
      }
      .waterQuality-right {
        float: right;
        width: 35.2%;
        height: 100%;
        margin-right: 0.6%;
        border: solid 1px #053272;
        .right-title {
          height: 60px;
          padding-top: 6px;
          background: #053272;
          color: #ffffff;

          .title-left {
            float: left;
            margin-left: 1.5%;
            color: #ffffff;
          }
          .title-right {
            float: right;
            margin-right: 1.9%;
            color: #ffffff;
          }
        }
        .right-table {
          .right-calendar {
            width: 106px;
            margin: 40px auto;
          }
        }
        .table-box {
          #table-line2 {
            margin: 0 auto;
          }
        }
      }
    }
    .Cartridge {
      width: 100%;
      height: 376px;
      background: #053272;
      margin-top: 20px;
      overflow: hidden;
      .Cartridge-title {
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
        margin-left: 1.8%;
        margin-top: 10px;
      }
      .Cartridge-content {
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
        .content-meter {
          position: relative;
          .inflow-box {
            position: relative;
            float: left;
            .inflow {
              position: absolute;
              left: 38px;
              top: 38px;
            }
          }
          .clearwater-box {
            position: relative;
            float: left;
            margin-left: 20px;
            .clearwater {
              position: absolute;
              left: 38px;
              top: 38px;
            }
          }
          .content-title {
            position: absolute;
            left: 90px;
            top: -34px;
          }
        }
      }
    }
    .State {
      width: 100%;
      background: #053272;
      margin-top: 21px;
      overflow: hidden;
      .State-header {
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
        margin-left: 1.8%;
        margin-top: 10px;
      }
      .State-main {
        margin-top: 28px;
        margin-bottom: 40px;
        .operation-left {
          width: 44.4%;
          margin-left: 1.3%;
          float: left;
          .switch {
            background: #ffffff;
            .switch-title {
              width: 100%;
              height: 80px;
              line-height: 80px;
              color: #333;
              font-family: PingFangSC-Medium;
              font-weight: bold;
              background: #d8d8d8;
              text-align: center;
            }
            .switch-main {
              ul {
                width: 100%;
                li {
                  display: flex;
                  margin: 0 5.6% 0 2.8%;
                  padding: 20px 0;
                  justify-content: space-between;
                  align-items: center;
                  .disconnect {
                    display: inline-block;
                    width: 88px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background: #ffc130;
                    color: #ffffff;
                  }
                  .close {
                    display: inline-block;
                    width: 88px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background: #ff6259;
                    color: #ffffff;
                  }
                  .state-span {
                    color: #333;
                    font-size: 14px;
                  }
                }
              }
            }
          }
          .Analog {
            margin-top: 20px;
            .Analog-main {
              ul {
                li {
                  color: #333;
                  padding: 19px 0;
                  .Analog-value {
                    display: inline-block;
                    width: 88px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    border: solid 1px #979797;
                    color: #333;
                  }
                  // .Analog-unit{
                  //   display: inline-block;
                  //   height: 42px;
                  //   line-height: 42px;
                  // }
                }
              }
            }
          }
        }
        .operation-right {
          width: 44.4%;
          height: 100%;
          padding-bottom:180px; 
          background: #ffffff;
          float: right;
          margin-right: 4.8%;
          .relay-header {
            width: 100%;
            height: 80px;
            line-height: 80px;
            text-align: center;
            background: #d8d8d8;
            color: #333;
            font-family: PingFangSC-Medium;
            font-weight: bold;
          }
          .switch {
            background: #ffffff;
            .switch-title {
              width: 100%;
              height: 80px;
              line-height: 80px;
              color: #333;
              font-family: PingFangSC-Medium;
              font-weight: bold;
              background: #d8d8d8;
              text-align: center;
            }
            .switch-main {
              ul {
                width: 100%;
                li {
                  display: flex;
                  margin: 0 5.6% 0 2.8%;
                  padding: 20px 0;
                  justify-content: space-between;
                  align-items: center;
                  .disconnect {
                    display: inline-block;
                    width: 88px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background: #ffc130;
                    color: #ffffff;
                  }
                  .close {
                    display: inline-block;
                    width: 88px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background: #ff6259;
                    color: #ffffff;
                  }
                  .state-span {
                    color: #333;
                    font-size: 14px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
