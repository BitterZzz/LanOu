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
          <span>{{this.translateMsg.pdid}}</span>
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
                <span class="TDS-num">{{this.chartHeader.inflowMsgArr}}</span>
                <div class="waterCavas">
                  <canvas id="aaa" width="102" height="102"></canvas>
                </div>
              </div>
              <span>TDS</span>
              <div class="table-TDS table-TDS2">
                <img src="../../assets/img/ppm2.png" alt />
                <span class="TDS-num TDS-color">{{this.chartHeader.pureMsgArr}}</span>
                <div class="waterCavas">
                  <canvas id="bbb" width="102" height="102"></canvas>
                </div>
              </div>
              <div id="table-echarts" class="echarts"></div>
            </div>
            <div class="table-box">
              <div class="table-TDS">
                <img src="../../assets/img/TOC_1.png" alt />
                <span class="TDS-num">{{this.chartHeader.TocBeforeMsgArr}}</span>
                <div class="waterCavas">
                  <canvas id="ccc" width="102" height="102"></canvas>
                </div>
              </div>
              <span>TOC</span>
              <div class="table-TDS table-TDS2">
                <img src="../../assets/img/TOC_2.png" alt />
                <span class="TDS-num TDS-color">{{this.chartHeader.TocAfterMsgArr}}</span>
                <div class="waterCavas">
                  <canvas id="ddd" width="102" height="102"></canvas>
                </div>
              </div>
              <div id="table-echarts2" class="echarts"></div>
            </div>
            <div class="table-box">
              <div class="table-TDS">
                <img src="../../assets/img/ZD.png" alt />
                <span class="TDS-num">{{this.chartHeader.NtuBeforeMsgArr}}</span>
                <div class="waterCavas">
                  <canvas id="eee" width="102" height="102"></canvas>
                </div>
              </div>
              <span>浊度</span>
              <div class="table-TDS table-TDS2">
                <img src="../../assets/img/ZD2.png" alt />
                <span class="TDS-num TDS-color">{{this.chartHeader.NtuAfterMsgArr}}</span>
                <div class="waterCavas">
                  <canvas id="fff" width="102" height="102"></canvas>
                </div>
              </div>
              <div id="table-echarts3" class="echarts"></div>
            </div>
          </div>
          <div class="data-table data-table2">
            <div class="table-box">
              <div class="table-TDS">
                <img src="../../assets/img/TOC_1.png" alt />
                <span class="TDS-num">{{this.chartHeader.CodBeforeMsgArr}}</span>
                <div class="waterCavas">
                  <canvas id="ggg" width="102" height="102"></canvas>
                </div>
              </div>
              <span>COD</span>
              <div class="table-TDS table-TDS2">
                <img src="../../assets/img/TOC_2.png" alt />
                <span class="TDS-num TDS-color">{{this.chartHeader.CodAfterMsgArr}}</span>
                <div class="waterCavas">
                  <canvas id="jjj" width="102" height="102"></canvas>
                </div>
              </div>
              <div id="table-echarts4" class="echarts"></div>
            </div>
            <div class="table-box chlorine">
              <div class="table-TDS">
                <img src="../../assets/img/ppm.png" alt />
                <span class="TDS-num TDS-style">{{this.chartHeader.RcrrBeforeMsgArr}}</span>
                <div class="waterCavas">
                  <canvas id="kkk" width="102" height="102"></canvas>
                </div>
              </div>
              <span>余氯</span>
              <div id="table-echarts5" class="echarts" style="width:240px;height:220px"></div>
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
                <span>{{this.pureWater}}</span>
              </p>
              <p>
                纯水总量:
                <span>{{this.rawWater}}</span>
              </p>
            </div>
          </div>
          <div class="right-table">
            <div class="right-calendar">
              <i class="el-icon-caret-left" style="color:#333" @click="deleteMouth()"></i>
              <span>{{this.allWaterTime}}</span>
              <i class="el-icon-caret-right" style="color:#333" @click="addMouth()"></i>
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
              <img src="../../assets/img/Hasthefilter.png" alt />
              <span class="inflow">{{this.typeSeventArr[0].filterInflow}}</span>
              <span class="scope">0-{{this.typeSeventArr[0].inflow}}</span>
              <div class="dashBoard">
                <canvas id="sand-canvas" width="84" height="84"></canvas>
              </div>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/day.png" alt />
              <span class="clearwater">{{this.typeSeventArr[0].clearDays}}</span>
              <span class="day">0-{{this.typeSeventArr[0].usageDays}}</span>
              <div class="dashBoard">
                <canvas id="sand-canvasDay" width="84" height="84"></canvas>
              </div>
            </div>
            <strong class="content-title">石英砂</strong>
          </div>
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/Hasthefilter.png" alt />
              <span class="inflow">{{this.typeSeventArr[1].filterInflow}}</span>
              <span class="scope">0-{{this.typeSeventArr[1].inflow}}</span>
              <div class="dashBoard">
                <canvas id="enough-canvas" width="84" height="84"></canvas>
              </div>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/day.png" alt />
              <span class="clearwater">{{this.typeSeventArr[1].clearDays}}</span>
              <span class="day">0-{{this.typeSeventArr[1].usageDays}}</span>
              <div class="dashBoard">
                <canvas id="enough-canvasDay" width="84" height="84"></canvas>
              </div>
            </div>
            <strong class="content-title">活性炭</strong>
          </div>
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/Hasthefilter.png" alt />
              <span class="inflow">{{this.typeSeventArr[2].filterInflow}}</span>
              <span class="scope">0-{{this.typeSeventArr[2].inflow}}</span>
              <div class="dashBoard">
                <canvas id="SR-canvas" width="84" height="84"></canvas>
              </div>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/day.png" alt />
              <span class="clearwater">{{this.typeSeventArr[2].clearDays}}</span>
              <span class="day">0-{{this.typeSeventArr[2].usageDays}}</span>
              <div class="dashBoard">
                <canvas id="SR-canvasDay" width="84" height="84"></canvas>
              </div>
            </div>
            <strong class="content-title">软化树脂</strong>
          </div>
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/Hasthefilter.png" alt />
              <span class="inflow">{{this.typeSeventArr[3].filterInflow}}</span>
              <span class="scope">0-{{this.typeSeventArr[3].inflow}}</span>
              <div class="dashBoard">
                <canvas id="salt-canvas" width="84" height="84"></canvas>
              </div>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/day.png" alt />
              <span class="clearwater">{{this.typeSeventArr[3].clearDays}}</span>
              <span class="day">0-{{this.typeSeventArr[3].usageDays}}</span>
              <div class="dashBoard">
                <canvas id="salt-canvasDay" width="84" height="84"></canvas>
              </div>
            </div>
            <strong class="content-title">再生盐</strong>
          </div>
        </div>
        <div class="Cartridge-content">
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/Hasthefilter.png" alt />
              <span class="inflow">{{this.typeSeventArr[4].filterInflow}}</span>
              <span class="scope">0-{{this.typeSeventArr[4].inflow}}</span>
              <div class="dashBoard">
                <canvas id="filterElement-canvas" width="84" height="84"></canvas>
              </div>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/day.png" alt />
              <span class="clearwater">{{this.typeSeventArr[4].clearDays}}</span>
              <span class="day">0-{{this.typeSeventArr[4].usageDays}}</span>
              <div class="dashBoard">
                <canvas id="filterElement-canvasDay" width="84" height="84"></canvas>
              </div>
            </div>
            <strong class="content-title">精密滤芯</strong>
          </div>
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/Hasthefilter.png" alt />
              <span class="inflow">{{this.typeSeventArr[5].filterInflow}}</span>
              <span class="scope">0-{{this.typeSeventArr[5].inflow}}</span>
              <div class="dashBoard">
                <canvas id="RO-canvas" width="84" height="84"></canvas>
              </div>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/day.png" alt />
              <span class="clearwater">{{this.typeSeventArr[5].clearDays}}</span>
              <span class="day">0-{{this.typeSeventArr[5].usageDays}}</span>
              <div class="dashBoard">
                <canvas id="RO-canvasDay" width="84" height="84"></canvas>
              </div>
            </div>
            <strong class="content-title">RO膜</strong>
          </div>
          <div class="content-meter">
            <div class="inflow-box">
              <img src="../../assets/img/Hasthefilter.png" alt />
              <span class="inflow">{{this.typeSeventArr[6].filterInflow}}</span>
              <span class="scope">0-{{this.typeSeventArr[6].inflow}}</span>
              <div class="dashBoard">
                <canvas id="UV-canvas" width="84" height="84"></canvas>
              </div>
            </div>
            <div class="clearwater-box">
              <img src="../../assets/img/day.png" alt />
              <span class="clearwater">{{this.typeSeventArr[6].clearDays}}</span>
              <span class="day">0-{{this.typeSeventArr[6].usageDays}}</span>
              <div class="dashBoard">
                <canvas id="UV-canvasDay" width="84" height="84"></canvas>
              </div>
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
                    <span class="disconnect" v-if="this.signal.substr(2,1) === '0'">断开</span>
                    <span class="close" v-if="this.signal.substr(2,1) === '1'">闭合</span>
                  </li>
                  <li>
                    <span class="state-span">纯水箱中水位开关</span>
                    <span class="disconnect" v-if="this.signal.substr(3,1) === '0'">断开</span>
                    <span class="close" v-if="this.signal.substr(3,1) === '1'">闭合</span>
                  </li>
                  <li>
                    <span class="state-span">纯水箱高水位开关</span>
                    <span class="disconnect" v-if="this.signal.substr(4,1) === '0'">断开</span>
                    <span class="close" v-if="this.signal.substr(4,1) === '1'">闭合</span>
                  </li>
                  <li>
                    <span class="state-span">纯水箱防溢开关</span>
                    <span class="disconnect" v-if="this.signal.substr(5,1) === '0'">断开</span>
                    <span class="close" v-if="this.signal.substr(5,1) === '1'">闭合</span>
                  </li>
                  <li>
                    <span class="state-span">软水信号开关</span>
                    <span class="disconnect" v-if="this.signal.substr(6,1) === '0'">断开</span>
                    <span class="close" v-if="this.signal.substr(6,1) === '1'">闭合</span>
                  </li>
                  <li>
                    <span class="state-span">阀头反冲洗信号开关</span>
                    <span class="disconnect" v-if="this.signal.substr(7,1) === '0'">断开</span>
                    <span class="close" v-if="this.signal.substr(7,1) === '1'">闭合</span>
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
                    <span class="state-span">{{list.name}}</span>
                    <span class="disconnect" v-if="list.onOff === '0'">断开</span>
                    <span class="close" v-if="list.onOff === '1'">闭合</span>
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
import bus from "../../js/bus";
import { initCanvas, waterCanvas } from "../../js/dashBoard";
export default {
  name: "particulars",
  data() {
    return {
      AnalogList: [
        { ID: 100, name: "进水压力", unit: "MPa", num: "" },
        { ID: 101, name: "膜前压力", unit: "MPa", num: "" },
        { ID: 102, name: "取水压力", unit: "Mpa", num: "" },
        { ID: 103, name: "进水流量", unit: "m³/H", num: "" },
        { ID: 104, name: "净水流量", unit: "m³/H", num: "" },
        { ID: 105, name: "累计进水总量", unit: "m³", num: "" },
        { ID: 106, name: "累计净水总量", unit: "m³", num: "" }
      ],
      relayList: [
        { ID: 200, name: "进水电磁阀", onOff: "" },
        { ID: 201, name: "浓水电磁阀", onOff: "" },
        { ID: 202, name: "取水电磁阀", onOff: "" },
        { ID: 203, name: "循环电磁阀", onOff: "" },
        { ID: 204, name: "排空电磁阀", onOff: "" },
        { ID: 205, name: "原水检测电磁阀", onOff: "" },
        { ID: 206, name: "纯水检测电磁阀", onOff: "" },
        { ID: 208, name: "原水泵", onOff: "" },
        { ID: 209, name: "高压泵", onOff: "" },
        { ID: 210, name: "取水泵", onOff: "" },
        { ID: 211, name: "水路闭合电磁阀", onOff: "" }
      ],
      chartHeader: {
        inflowMsgArr: "",
        pureMsgArr: "",
        TocBeforeMsgArr: "",
        TocAfterMsgArr: "",
        NtuBeforeMsgArr: "",
        NtuAfterMsgArr: "",
        CodBeforeMsgArr: "",
        CodAfterMsgArr: "",
        RcrrBeforeMsgArr: "",
        RcrrAfterMsgArr: "",
        typeEightObj: {}
      },
      signal: {},
      typeSeventArr: [],
      //用水曲线年月
      allWaterTime: "",
      time: {
        year: "",
        day: "",
        mouth: ""
      },
      //rawWater原水进水总量
      rawWater: "",
      //pureWater纯水进水总量
      pureWater: ""
    };
  },
  props: {
    translateMsg: {
      type: Object,
      default: "未获取到数据"
    }
  },
  methods: {
    hidden() {
      //触发home中的getParam使其改变home中的Judge的值
      bus.$emit("getParam");
      this.$emit("hidden");
    },
    //获取到仪表盘所需的数据
    dashBoardMsg() {
      console.log(this.translateMsg, "this.translateMsg");
    },
    //水质曲线数据处理
    WaterMsg() {
      let _msg = this.translateMsg.waterDecode;
      for (var key in _msg) {
        if (key in this.chartHeader) {
          if (_msg[key].length !== 0) {
            this.chartHeader[key] = _msg[key][30];
          }
        }
      }

      console.log(this.chartHeader, "this.chartHeader");
    },
    //进入数据判断是否存在
    dataJudge() {
      //pureWater纯水进水总量,rawWater原水进水总量
      if (this.translateMsg.waterDecode.typeEightObj.switch) {
        this.signal = this.translateMsg.waterDecode.typeEightObj.switch;
        this.rawWater =
          this.translateMsg.waterDecode.typeEightObj.rawWater + "m³";
        this.pureWater =
          this.translateMsg.waterDecode.typeEightObj.pureWater + "m³";
        console.log(
          this.translateMsg.waterDecode.typeEightObj.relay,
          "这是继电器输出的数据"
        );
        for (var i = 0; i < this.relayList.length; i++) {
          this.relayList[
            i
          ].onOff = this.translateMsg.waterDecode.typeEightObj.relay.substr(
            i,
            1
          );
        }
      } else {
        this.signal = "222222";
        this.rawWater = "";
        this.pureWater = "";
        for (var i = 0; i < this.relayList.length; i++) {
          this.relayList[i].onOff = "2";
        }
      }
      if (this.translateMsg.waterDecode.typeSeventArr[0] !== undefined) {
        this.typeSeventArr = this.translateMsg.waterDecode.typeSeventArr;
        console.log("获取到了this.translateMsg.waterDecode的数据");
      } else {
        console.log("获取到自定义的数据");
        this.typeSeventArr = [
          { inflow: "", filterInflow: "", usageDays: "", clearDays: "" },
          { inflow: "", filterInflow: "", usageDays: "", clearDays: "" },
          { inflow: "", filterInflow: "", usageDays: "", clearDays: "" },
          { inflow: "", filterInflow: "", usageDays: "", clearDays: "" },
          { inflow: "", filterInflow: "", usageDays: "", clearDays: "" },
          { inflow: "", filterInflow: "", usageDays: "", clearDays: "" },
          { inflow: "", filterInflow: "", usageDays: "", clearDays: "" }
        ];
      }
    },
    //模拟量输入数据
    analogQuantity() {
      let _msg = this.translateMsg.waterDecode.typeEightObj;
      this.AnalogList[0].num = _msg.inflowNow;
      this.AnalogList[1].num = _msg.SublayNow;
      this.AnalogList[2].num = _msg.intakingNow;
      this.AnalogList[3].num = _msg.inflowNow;
      this.AnalogList[4].num = _msg.inflowNow;
      this.AnalogList[5].num = _msg.rawWater;
      this.AnalogList[6].num = _msg.pureWater;
    },
    //仪表盘显示
    canvas() {
      let _msg = this.typeSeventArr;
      console.log(_msg, "这是canvas的——msg");
      initCanvas(
        "sand-canvas",
        _msg[0].filterInflow,
        _msg[0].inflow,
        "#3DDA85"
      );
      initCanvas(
        "sand-canvasDay",
        _msg[0].clearDays,
        _msg[0].usageDays,
        "#07DBFF"
      );
      initCanvas(
        "enough-canvas",
        _msg[1].filterInflow,
        _msg[1].inflow,
        "#3DDA85"
      );
      initCanvas(
        "enough-canvasDay",
        _msg[1].clearDays,
        _msg[1].usageDays,
        "#07DBFF"
      );
      initCanvas("SR-canvas", _msg[2].filterInflow, _msg[2].inflow, "#3DDA85");
      initCanvas(
        "SR-canvasDay",
        _msg[2].clearDays,
        _msg[2].usageDays,
        "#07DBFF"
      );
      initCanvas(
        "salt-canvas",
        _msg[3].filterInflow,
        _msg[3].inflow,
        "#3DDA85"
      );
      initCanvas(
        "salt-canvasDay",
        _msg[3].clearDays,
        _msg[3].usageDays,
        "#07DBFF"
      );
      initCanvas(
        "filterElement-canvas",
        _msg[4].filterInflow,
        _msg[4].inflow,
        "#3DDA85"
      );
      initCanvas(
        "filterElement-canvasDay",
        _msg[4].clearDays,
        _msg[4].usageDays,
        "#07DBFF"
      );
      initCanvas("RO-canvas", _msg[5].filterInflow, _msg[5].inflow, "#3DDA85");
      initCanvas(
        "RO-canvasDay",
        _msg[5].clearDays,
        _msg[5].usageDays,
        "#07DBFF"
      );
      initCanvas("UV-canvas", _msg[6].filterInflow, _msg[6].inflow, "#3DDA85");
      initCanvas(
        "UV-canvasDay",
        _msg[6].clearDays,
        _msg[6].usageDays,
        "#07DBFF"
      );
    },
    //水质曲线仪表盘
    WaterDashBoard() {
      //TDS 历史 31 天水质数据
      let inflowMsgArr = this.translateMsg.waterDecode.inflowMsgArr;
      let pureMsgArr = this.translateMsg.waterDecode.pureMsgArr;
      //TOC 历史 31 天水质数据
      let TocBeforeMsgArr = this.translateMsg.waterDecode.TocBeforeMsgArr;
      let TocAfterMsgArr = this.translateMsg.waterDecode.TocAfterMsgArr;
      //NTU(浊度)历史 31 天水质数据
      let NtuBeforeMsgArr = this.translateMsg.waterDecode.NtuBeforeMsgArr;
      let NtuAfterMsgArr = this.translateMsg.waterDecode.NtuAfterMsgArr;
      //COD 历史 31 天水质数据
      let CodBeforeMsgArr = this.translateMsg.waterDecode.CodBeforeMsgArr;
      let CodAfterMsgArr = this.translateMsg.waterDecode.CodAfterMsgArr;
      //RCRR 历史 31 天水质数据(余氯去除率)
      let RcrrBeforeMsgArr = this.translateMsg.waterDecode.RcrrBeforeMsgArr;
      waterCanvas("aaa", inflowMsgArr[30], 500, "#FFB400");
      waterCanvas("bbb", pureMsgArr[30], 30, "#3DDA85");
      waterCanvas("ccc", TocBeforeMsgArr[30], 10, "#FFB400");
      waterCanvas("ddd", TocAfterMsgArr[30], 1, "#3DDA85");
      waterCanvas("eee", NtuBeforeMsgArr[30], 5, "#FFB400");
      waterCanvas("fff", NtuAfterMsgArr[30], 1.5, "#3DDA85");
      waterCanvas("ggg", CodBeforeMsgArr[30], 10, "#FFB400");
      waterCanvas("jjj", CodAfterMsgArr[30], 1, "#3DDA85");
      waterCanvas("kkk", RcrrBeforeMsgArr[30], 500, "#FFB400");
    },
    //点击加月份
    addMouth() {
      this.time.mouth = this.time.mouth + 1;
      if (this.time.mouth > 12) {
        this.time.mouth = 1;
      }
      this.getLanOuWaterInfo();
    },
    //点击减月份
    deleteMouth() {
      this.time.mouth = this.time.mouth - 1;
      if (this.time.mouth < 1) {
        this.time.mouth = 12;
      }
      this.getLanOuWaterInfo();
    },
    //获取用水曲线的数据
    getLanOuWaterInfo() {
      let time = "";
      let year = this.time.year;
      let mouth = this.time.mouth;
      let day = this.time.day;
      console.log(year, mouth, day, "这是我的day");
      time = year + "/" + mouth;
      this.allWaterTime = year + "-" + mouth;

      this.$post(this.$api.getLanOuWaterInfo, {
        did: this.translateMsg.pdid,
        time: time
      }).then(res => {
        console.log(res);
        let msgList = res.data.data;
        let newMsg = msgList.map(item => {
          return (function(item) {
            let obj = {};
            let _time = Number(item.time.split("-")[2]);
            let _mouth = Number(item.time.split("-")[1]);
            let _year = Number(item.time.split("-")[0]);
            let waterMsg = item.newWater - item.oldWater;
            return {
              year: _year,
              mouth: _mouth,
              time: _time,
              waterMsg: waterMsg
            };
          })(item);
        });
        let newArr = [];
        if (newMsg.length !== 0) {
          for (var i = 0; i < newMsg[0].time - 1; i++) {
            newArr.push("");
          }
          for (var j = 0; j < newMsg.length; j++) {
            newArr.push(newMsg[j].waterMsg / 10);
          }
        }
        //保存newArr的数组
        let saveNewArr = [...newArr];
        let _length = newArr.length - 1;
        let minNum;
        let maxNum;
        newArr.sort();
        if (newArr[0] === "") {
          minNum = 0;
          maxNum = newArr[_length];
          //最大值的取整
          let length2 = String(Math.ceil(maxNum)).length - 1;
          let multiple = Math.pow(10, length2);
          maxNum = Math.ceil(maxNum / multiple) * multiple;
        } else {
          console.log("是否进入了", newArr);
          if (newArr.length === 0) {
            minNum = 0;
            maxNum = 500;
          } else {
            minNum = newArr[0];
            maxNum = newArr[_length];
            //最小值取整
            if (String(Math.ceil(minNum)).length !== 1) {
              let length = String(Math.floor(minNum)).length - 1;
              let multiple = Math.pow(10, length);
              minNum = Math.ceil(minNum / multiple) * multiple;
              console.log(minNum, "是否进");
            } else {
              minNum = Math.floor(minNum);
            }
            //最大值的取整
            let length2 = String(Math.ceil(maxNum)).length - 1;
            let multiple = Math.pow(10, length2);
            maxNum = Math.ceil(maxNum / multiple) * multiple;
          }
        }
        this.$chart.line2("table-line2", saveNewArr, minNum, maxNum);
      });
    },
    //初始化获取时间
    getDate() {
      let date = new Date();
      let year = date.getFullYear();
      let mouth = date.getMonth() + 1;
      if (mouth === 1) {
        mouth = 1;
      } else if (mouth === 12) {
        mouth = 12;
      } else {
        mouth = mouth - 1;
      }
      let day = date.getDate();
      this.time.year = year;
      this.time.mouth = mouth;
      this.time.day = day;
    }
  },
  created() {
    this.dashBoardMsg();
    this.getDate();
    this.WaterMsg();
    this.dataJudge();
    this.analogQuantity();
    this.getLanOuWaterInfo();
  },
  mounted() {
    this.canvas();
    this.WaterDashBoard();
    console.log(this.translateMsg, "translateMsg");
    //进水标准
    this.$chart.line1(
      "table-echarts",
      "ppm",
      0,
      500,
      this.translateMsg.waterDecode.inflowMsgArr,
      this.translateMsg.waterDecode.pureMsgArr
    );
    this.$chart.line1(
      "table-echarts2",
      "mg/L",
      0,
      5.0,
      this.translateMsg.waterDecode.TocBeforeMsgArr,
      this.translateMsg.waterDecode.TocAfterMsgArr
    );
    this.$chart.line1(
      "table-echarts3",
      "NTU",
      0,
      5.0,
      this.translateMsg.waterDecode.NtuBeforeMsgArr,
      this.translateMsg.waterDecode.NtuAfterMsgArr
    );
    this.$chart.line1(
      "table-echarts4",
      "mg/L",
      0,
      5.0,
      this.translateMsg.waterDecode.CodBeforeMsgArr,
      this.translateMsg.waterDecode.CodAfterMsgArr
    );
    this.$chart.line1(
      "table-echarts5",
      "ppm",
      50,
      100,
      [],
      this.translateMsg.waterDecode.RcrrBeforeMsgArr
    );
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
  top: -24px;
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
          margin-top: 50px;
          display: flex;
          justify-content: space-around;
          .chlorine {
            width: 230px;
            display: flex;
            justify-content: center;
          }
          .table-box {
            position: relative;
            box-sizing: border-box;
            width: 280px;
            height: 276px;
            // float: left;
            .table-TDS {
              display: inline-block;
              position: relative;
              .TDS-num {
                position: absolute;
                left: 52px;
                top: 50px;
                color: #ffb400;
                transform: translate(-50%, -50%);
              }
              .TDS-style {
                position: absolute;
                left: 50%;
                top: 40px;
                color: #ffb400;
                transform: translate(-50%, 0);
              }
              .TDS-color {
                color: #3dda85;
              }
              .waterCavas {
                position: absolute;
                left: 0;
                top: 0;
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
            .echarts {
              // display: none;
              width: 240px;
              height: 220px;
            }
            #table-echarts2 {
              position: absolute;
              top: 60px;
              left: -10px;
            }
            #table-echarts3,
            #table-echarts4,
            #table-echarts5 {
              position: absolute;
              top: 60px;
              left: -10px;
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
          position: relative;
          width: 100%;
          height: 80%;
          .right-calendar {
            width: 106px;
            margin: 40px auto;
            i {
              cursor: pointer;
            }
          }
        }
        .table-box {
          overflow: hidden;
          #table-line2 {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
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
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              color: #3dda85;
            }
            .scope {
              position: absolute;
              width: 41px;
              height: 16px;
              left: 50%;
              bottom: 0;
              transform: translate(-50%);
              color: #3dda85;
              font-size: 2px;
            }
            .dashBoard {
              position: absolute;
              left: 1px;
              top: 16px;
            }
          }
          .clearwater-box {
            position: relative;
            float: left;
            margin-left: 20px;
            .clearwater {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              color: #07dbff;
            }
            .day {
              position: absolute;
              left: 50%;
              bottom: 0;
              transform: translate(-50%);
              font-size: 8px;
            }
            .dashBoard {
              position: absolute;
              left: 1px;
              top: 16.5px;
            }
          }
          .content-title {
            position: absolute;
            left: 76px;
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
          padding-bottom: 182px;
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
