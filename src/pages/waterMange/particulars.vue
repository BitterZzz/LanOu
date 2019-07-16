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
                <img src="../../assets/img/ppm.png" alt />
                <span class="TDS-num">145</span>
              </div>
              <div id="aaaa" style="width:208px;height:200px"></div>
            </div>
          </div>
        </div>
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
        </div>
      </div>
      <!-- 滤芯寿命 -->
      <div class="Cartridge"></div>
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
    this.$chart.line1("aaaa");
  }
};
</script>
<style lang="scss" scoped>
#particulars {
  position: absolute;
  width: 110%;
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
          margin-top: 50px;
          .table-box {
            position: relative;
            margin-left: 38px;
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
          }
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
          .title-left {
            float: left;
            margin-left: 1.5%;
          }
          .title-right {
            float: right;
            margin-right: 1.9%;
          }
        }
      }
    }
    .Cartridge {
      width: 100%;
      height: 376px;
      background: #053272;
      margin-top: 20px;
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
