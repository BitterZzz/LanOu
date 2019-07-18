<template>
  <div id="particulars">
    <header id="header" class="clearfix">
      <div class="header-box">
        <div class="title">
          <img src="../../assets/img/back.png" alt />
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
              <div id="table-echarts" style="width:280px;height:200px"></div>
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
              <div id="table-echarts3" style="width:280px;height:200px"></div>
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
              <div id="table-echarts4" style="width:280px;height:200px"></div>
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
              <div id="table-echarts5" style="width:280px;height:200px"></div>
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
        <div class="Cartridge-title">
          滤芯寿命
        </div>
        <div class="Cartridge-content">
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/ppm.png" alt="">
              <span class="inflow">145</span>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/ppm2.png" alt="">
              <span class="clearwater">145</span>
            </div>
            <strong class="content-title">石英砂</strong>
          </div>
        </div>
      </div>
      <div class="State"></div>
    </section>
  </div>
</template>
<script>
export default {
  name: "particulars",
  data() {
    return {};
  },
  mounted() {
    this.$chart.line1("table-echarts");
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
  #header {
    .header-box {
      div {
        float: left;
        line-height: 50px;
        font-size: 16px;
        color: #333;
      }
      .title {
        img {
          vertical-align: middle;
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
      .Cartridge-title{
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
        margin-left: 1.8%;
        margin-top: 10px;
      }
      .Cartridge-content{
        .content-meter{
          position: relative;
          .inflow-box{
            position: relative;
            float: left;
            .inflow{
              position: absolute;
              left:38px;
              top: 38px;
            }
          }
          .clearwater-box{
            position: relative;
            float: left;
            margin-left: 20px;
            .clearwater{
              position: absolute;
              left: 38px;
              top: 38px;
            }
          }
          .content-title{
            position: absolute;
            left: 50px;
            top: 0;
          }
        }
      }
    }
    .State {
      width: 100%;
      height: 1340px;
      background: #053272;
      margin-top: 21px;
    }
  }
}
</style>
