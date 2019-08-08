<template>
  <div id="parameter" class="animated fadeIn">
    <header id="header" class="clearfix">
      <div class="header-box clearfix">
        <div class="title">
          <img src="../../assets/img/back.png" @click="hidden()" />
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
        <div class="save-set clearfix">
          <img src="../../assets/img/save.png" />
          <span>保存设置</span>
        </div>
      </div>
    </header>
    <section id="main">
      <div class="system-state">
        <div class="state-header">系统状态</div>
        <div class="state-content">
          <!-- 第一行 -->
          <div class="content-frist clearfix">
            <div class="pressure">
              <div class="pressure-title">取水压力设置</div>
              <div class="pressure-content clearfix">
                <span class="content-title">取水压力上限:</span>
                <div class="content-box">
                  <span>-</span>
                  <input type="text" class="num" />
                  <span>+</span>
                  <b>MPa</b>
                </div>
              </div>
              <div class="pressure-content clearfix">
                <span class="content-title">取水压力下限:</span>
                <div class="content-box">
                  <span>-</span>
                  <input type="text" class="num" />
                  <span>+</span>
                  <b>MPa</b>
                </div>
              </div>
            </div>
            <div class="data">
              <div class="data-header">日期设置</div>
              <div class="data-content clearfix">
                <span class="content-title">日期:</span>
                <div class="data-set">
                  <div class="data-year">
                    <p>+</p>
                    <input type="text" class="year" />
                    <p>-</p>
                  </div>
                  <span>年</span>
                  <div class="data-year">
                    <p>+</p>
                    <input type="text" class="year" />
                    <p>-</p>
                  </div>
                  <span>月</span>
                  <div class="data-year">
                    <p>+</p>
                    <input type="text" class="year" />
                    <p>-</p>
                  </div>
                  <span>日</span>
                </div>
              </div>
            </div>
            <div class="cistern">
              <div class="cistern-header">无菌水箱排空</div>
              <div class="cistern-content">
                <p>自动排空</p>
              </div>
            </div>
          </div>
          <!-- 第二行 -->
          <div class="content-frist clearfix">
            <div class="pressure">
              <div class="pressure-title">膜前压力设置</div>
              <div class="pressure-content clearfix">
                <span class="content-title">膜前压力上限:</span>
                <div class="content-box">
                  <span>-</span>
                  <input type="text" class="num" />
                  <span>+</span>
                  <b>MPa</b>
                </div>
              </div>
              <div class="pressure-content clearfix">
                <span class="content-title">膜前压力下限:</span>
                <div class="content-box">
                  <span>-</span>
                  <input type="text" class="num" />
                  <span>+</span>
                  <b>MPa</b>
                </div>
              </div>
            </div>
            <div class="data">
              <div class="data-header">时间设置</div>
              <div class="data-content clearfix">
                <span class="content-title">时间:</span>
                <div class="data-set">
                  <div class="data-year">
                    <p>+</p>
                    <input type="text" class="year" />
                    <p>-</p>
                  </div>
                  <span>:</span>
                  <div class="data-year">
                    <p>+</p>
                    <input type="text" class="year" />
                    <p>-</p>
                  </div>
                  <span>:</span>
                  <div class="data-year">
                    <p>+</p>
                    <input type="text" class="year" />
                    <p>-</p>
                  </div>
                  <span style="width:4px"></span>
                </div>
              </div>
            </div>
            <div class="cistern">
              <div class="cistern-header">恢复出产设置</div>
              <div class="cistern-content">
                <p>恢复</p>
              </div>
            </div>
          </div>
          <!-- 第三行 -->
          <div class="content-frist clearfix">
            <div class="pressure">
              <div class="pressure-title">进水压力设置</div>
              <div class="pressure-content clearfix">
                <span class="content-title">进水压力上限:</span>
                <div class="content-box">
                  <span>-</span>
                  <input type="text" class="num" />
                  <span>+</span>
                  <b>MPa</b>
                </div>
              </div>
              <div class="pressure-content clearfix">
                <span class="content-title">进水压力下限:</span>
                <div class="content-box">
                  <span>-</span>
                  <input type="text" class="num" />
                  <span>+</span>
                  <b>MPa</b>
                </div>
              </div>
            </div>
            <div class="cistern hydraumatic">
              <div class="cistern-header hydraumatic-header">液压传感器系数设置</div>
              <div class="hydraumatic-content clearfix">
                <span class="content-title">进水压力上限:</span>
                <div class="content-box">
                  <span>-</span>
                  <input type="text" class="num" />
                  <span>+</span>
                  <b>MPa</b>
                </div>
                <div class="space"></div>
              </div>
              <div class="hydraumatic-content clearfix">
                <span class="content-title">进水压力上限:</span>
                <div class="content-box">
                  <span>-</span>
                  <input type="text" class="num" />
                  <span>+</span>
                  <b>MPa</b>
                </div>
                <div class="space"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="filter-wrapper">
      <div id="filter">
        <div class="filter-header">滤芯滤料寿命</div>
        <ul class="clearfix">
          <li>
            <div class="sand-header">石英砂使用寿命设置</div>
            <div class="sand-content clearfix">
              <div class="content-frist">
                <span>净水流量:</span>
                <div class="frist-input">
                  <input type="text" class="number" />
                  <b>m³</b>
                </div>
              </div>
              <div class="content-frist">
                <span>时间:</span>
                <div class="frist-input second-input">
                  <input type="text" class="number" />
                  <b>D</b>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="sand-header">石英砂使用寿命设置</div>
            <div class="sand-content clearfix">
              <div class="content-frist">
                <span>净水流量:</span>
                <div class="frist-input">
                  <input type="text" class="number" />
                  <b>m³</b>
                </div>
              </div>
              <div class="content-frist">
                <span>时间:</span>
                <div class="frist-input second-input">
                  <input type="text" class="number" />
                  <b>D</b>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="sand-header">石英砂使用寿命设置</div>
            <div class="sand-content clearfix">
              <div class="content-frist">
                <span>净水流量:</span>
                <div class="frist-input">
                  <input type="text" class="number" />
                  <b>m³</b>
                </div>
              </div>
              <div class="content-frist">
                <span>时间:</span>
                <div class="frist-input second-input">
                  <input type="text" class="number" />
                  <b>D</b>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="sand-header">石英砂使用寿命设置</div>
            <div class="sand-content clearfix">
              <div class="content-frist">
                <span>净水流量:</span>
                <div class="frist-input">
                  <input type="text" class="number" />
                  <b>m³</b>
                </div>
              </div>
              <div class="content-frist">
                <span>时间:</span>
                <div class="frist-input second-input">
                  <input type="text" class="number" />
                  <b>D</b>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="sand-header">石英砂使用寿命设置</div>
            <div class="sand-content clearfix">
              <div class="content-frist">
                <span>净水流量:</span>
                <div class="frist-input">
                  <input type="text" class="number" />
                  <b>m³</b>
                </div>
              </div>
              <div class="content-frist">
                <span>时间:</span>
                <div class="frist-input second-input">
                  <input type="text" class="number" />
                  <b>D</b>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="sand-header">石英砂使用寿命设置</div>
            <div class="sand-content clearfix">
              <div class="content-frist">
                <span>净水流量:</span>
                <div class="frist-input">
                  <input type="text" class="number" />
                  <b>m³</b>
                </div>
              </div>
              <div class="content-frist">
                <span>时间:</span>
                <div class="frist-input second-input">
                  <input type="text" class="number" />
                  <b>D</b>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="sand-header">石英砂使用寿命设置</div>
            <div class="sand-content clearfix">
              <div class="content-frist">
                <span>净水流量:</span>
                <div class="frist-input">
                  <input type="text" class="number" />
                  <b>m³</b>
                </div>
              </div>
              <div class="content-frist">
                <span>时间:</span>
                <div class="frist-input second-input">
                  <input type="text" class="number" />
                  <b>D</b>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="sand-header">石英砂使用寿命设置</div>
            <div class="sand-content clearfix">
              <div class="content-frist">
                <span>净水流量:</span>
                <div class="frist-input">
                  <input type="text" class="number" />
                  <b>m³</b>
                </div>
              </div>
              <div class="content-frist">
                <span>时间:</span>
                <div class="frist-input second-input">
                  <input type="text" class="number" />
                  <b>D</b>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import bus from "../../js/bus";
export default {
  name: "parameter",
  props: {},
  methods: {
    hidden() {
      //触发home中的getParam使其改变home中的Judge的值
      bus.$emit("getParam");
      this.$emit("hiddenSecond");
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
#parameter {
  position: absolute;
  width: 104%;
  // height: 1182px;
  border: solid 1px red;
  background: #ffffff;
  left: -156px;
  top: -24px;
  z-index: 10000;
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
      .save-set {
        width: 160px;
        height: 50px;
        background: #3a9ef4;
        float: right;
        margin-right: 50px;
        img {
          vertical-align: middle;
          margin-left: 25px;
        }
        span {
          margin-left: 4px;
        }
      }
    }
  }
  #main {
    width: 100%;
    background: #053272;
    margin-top: 7px;
    padding-bottom: 30px;
    overflow: hidden;
    .system-state {
      padding: 0 1.3%;
      margin-top: 16px;
      .state-header {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
      }
      .state-content {
        .content-frist {
          overflow: hidden;
          display: flex;
          margin-top: 26px;
          justify-content: space-around;
          .pressure {
            width: 38.9%;
            background: #fff;
            padding-bottom: 24px;
            float: left;
            border-radius: 10px;
            .pressure-title {
              width: 100%;
              height: 70px;
              line-height: 70px;
              text-align: center;
              background: #d8d8d8;
              color: #333;
              font-size: 16px;
              font-weight: bold;
              border-radius: 10px 10px 0 0;
            }
            .pressure-content {
              margin: 16px 16px 0;
              .content-title {
                float: left;
                font-size: 16px;
                font-family: PingFangSC-Regular;
                line-height: 40px;
                color: #333;
              }
              .content-box {
                float: right;
                width: 244px;
                span {
                  float: left;
                  width: 46px;
                  height: 40px;
                  line-height: 40px;
                  font-size: 30px;
                  font-weight: bold;
                  background: #8cc9fd;
                  color: #fff;
                  text-align: center;
                }
                b {
                  line-height: 40px;
                  margin: 0 0 0 14px;
                  color: #333;
                  font-weight: bold;
                }
                .num {
                  float: left;
                  width: 100px;
                  height: 40px;
                  border: 0;
                  border: solid 1px #cecece;
                  box-sizing: border-box;
                }
              }
            }
          }
          .data {
            width: 31.7%;
            float: left;
            margin-left: 0.7%;
            background: #fff;
            border-radius: 10px;
            .data-header {
              height: 70px;
              line-height: 70px;
              color: #333;
              font-weight: bold;
              background: #d8d8d8;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .data-content {
              padding-top: 5px;
              padding-bottom: 15px;
              display: flex;
              justify-content: space-around;
              .content-title {
                float: left;
                width: 36px;
                font-size: 16px;
                line-height: 120px;
                color: #333;
              }
              .data-set {
                float: left;
                width: 240px;
                display: flex;
                justify-content: space-around;
                margin: auto 0;
                // margin: auto 0;
                .data-year {
                  float: left;
                  .year {
                    width: 60px;
                    height: 40px;
                    border: 0;
                    border: solid 1px #cecece;
                    box-sizing: border-box;
                  }
                  p {
                    width: 60px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 40px;
                    font-weight: bold;
                    background: #8cc9fd;
                    text-align: center;
                    color: #fff;
                  }
                }
                span {
                  float: left;
                  font-size: 16px;
                  line-height: 120px;
                  color: #333;
                  margin: 0 2px;
                }
              }
            }
          }
          .cistern {
            width: 18.8%;
            float: left;
            margin-left: 0.7%;
            background: #fff;
            border-radius: 10px;
            .cistern-header {
              height: 70px;
              line-height: 70px;
              color: #333;
              font-weight: bold;
              text-align: center;
              background: #d8d8d8;
              border-radius: 10px 10px 0 0;
            }
            .cistern-content {
              width: 116px;
              height: 60px;
              background: #8cc9fd;
              line-height: 60px;
              text-align: center;
              margin: 40px auto;
            }
          }
          .hydraumatic {
            width: 53%;
            .hydraumatic-header {
            }
            .hydraumatic-content {
              margin: 16px 0 0 0;
              display: flex;
              justify-content: space-around;
              .content-title {
                float: left;
                width: 100px;
                line-height: 40px;
                font-size: 16px;
                font-family: PingFangSC-Regular;
                color: #333;
              }
              .content-box {
                width: 244px;
                float: left;
                span {
                  float: left;
                  width: 46px;
                  height: 40px;
                  line-height: 40px;
                  font-size: 30px;
                  font-weight: bold;
                  background: #8cc9fd;
                  color: #fff;
                  text-align: center;
                }
                .num {
                  float: left;
                  width: 100px;
                  height: 40px;
                  border: 0;
                  border: solid 1px #cecece;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                }
                b {
                  line-height: 40px;
                  margin: 0 0 0 14px;
                  color: #333;
                  font-weight: bold;
                }
              }
              .space {
                width: 140px;
              }
            }
          }
        }
      }
    }
  }
  #filter-wrapper {
    background: #053272;
    margin-top: 20px;
    padding: 0 1.3%;
    #filter {
      overflow: hidden;
      .filter-header {
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        margin-top: 16px;
      }
      ul {
        width: 100%;
        margin-top: 20px;
        li {
          width: 28.5%;
          background: #fff;
          border-radius: 10px 10px 0 0;
          margin: 0 2.4%;
          margin-bottom: 16px;
          float: left;
          .sand-header {
            height: 70px;
            line-height: 70px;
            text-align: center;
            background: #d8d8d8;
            color: #333;
            font-size: 16px;
            font-weight: bold;
            border-radius: 10px 10px 0 0;
          }
          .sand-content {
            width: 100%;
            padding-bottom: 26px;
            .content-frist {
              width: 100%;
              float: left;
              margin-top: 16px;
              span {
                float: left;
                width: 70px;
                line-height: 40px;
                margin-left: 20px;
                color: #333;
                font-size: 16px;
                font-weight: bold;
              }
              .frist-input {
                float: right;
                margin-right: 30px;
                .number {
                  width: 100px;
                  height: 40px;
                  ::placeholder {
                    color: #333;
                  }
                }
                b {
                  color: #333;
                  font-size: 16px;
                  font-weight: bold;
                }
              }
              .second-input {
                margin-right: 39px;
              }
            }
          }
        }
      }
    }
  }
}
</style>


