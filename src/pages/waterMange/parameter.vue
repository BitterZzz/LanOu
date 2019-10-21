<template>
  <div id="parameter" class="animated fadeIn">
    <header id="header" class="clearfix">
      <div class="header-box clearfix">
        <div class="title">
          <img src="../../assets/img/back.png" @click="hidden()" />
          <span>参数配置</span>
        </div>
        <div class="IdBox">
          <span>ID:</span>
          <span>{{this.allocationMsg.pdid}}</span>
        </div>
        <div class="popupBox">
          <span>型号:</span>
          <span>LOSRO-500-S</span>
        </div>
        <div class="save-set clearfix">
          <img src="../../assets/img/save.png" />
          <span @click="saveSetting()">保存设置</span>
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
              <div class="pressure-BorderBox">
                <div class="pressure-Box">
                  <div class="pressure-content clearfix">
                    <span class="content-title">取水压力上限:</span>
                    <div class="content-box">
                      <span @click="subtract()">-</span>
                      <input
                        ref="intakingMax"
                        type="number"
                        class="num"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.intakingMax : 0"
                      />
                      <span @click="add()">+</span>
                      <b>MPa</b>
                    </div>
                  </div>
                  <div class="pressure-content clearfix">
                    <span class="content-title">取水压力下限:</span>
                    <div class="content-box">
                      <span @click="subtract()">-</span>
                      <input
                        ref="intakingMin"
                        type="number"
                        class="num"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.intakingMin : 0"
                      />
                      <span @click="add()">+</span>
                      <b>MPa</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="data">
              <div class="data-header">日期设置</div>
              <div class="data-Box">
                <div class="data-content clearfix">
                  <span class="content-title">日期:</span>
                  <div class="data-set">
                    <div class="data-year">
                      <p @click="dayAdd()">+</p>
                      <input
                        ref="year"
                        type="number"
                        class="year"
                        :value="this.allocationMsg.waterDecode.typeEightObj.SublayMax ? '20' + this.allocationMsg.waterDecode.typeEightObj.year : ''"
                      />
                      <p @click="daySubtract()">-</p>
                    </div>
                    <span>年</span>
                    <div class="data-year">
                      <p @click="dayAdd()">+</p>
                      <input
                        ref="month"
                        type="number"
                        class="year"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.month : 0"
                      />
                      <p @click="daySubtract()">-</p>
                    </div>
                    <span>月</span>
                    <div class="data-year">
                      <p @click="dayAdd()">+</p>
                      <input
                        ref="day"
                        type="number"
                        class="year"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.day : 0"
                      />
                      <p @click="daySubtract()">-</p>
                    </div>
                    <span>日</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="cistern">
              <div class="cistern-header">无菌水箱排空</div>
              <div class="cistern-content">
                <p @click="emptying()">自动排空</p>
              </div>
            </div>
          </div>
          <!-- 第二行 -->
          <div class="content-frist clearfix">
            <div class="pressure">
              <div class="pressure-title">膜前压力设置</div>
              <div class="pressure-BorderBox">
                <div class="pressure-Box">
                  <div class="pressure-content clearfix">
                    <span class="content-title">膜前压力上限:</span>
                    <div class="content-box">
                      <span @click="subtract()">-</span>
                      <input
                        ref="SublayMax"
                        type="number"
                        class="num"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.SublayMax : 0"
                      />
                      <span @click="add()">+</span>
                      <b>MPa</b>
                    </div>
                  </div>
                  <div class="pressure-content clearfix">
                    <span class="content-title">膜前压力下限:</span>
                    <div class="content-box">
                      <span @click="subtract()">-</span>
                      <input
                        ref="SublayMin"
                        type="number"
                        class="num"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.SublayMin : 0"
                      />
                      <span @click="add()">+</span>
                      <b>MPa</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="data">
              <div class="data-header">时间设置</div>
              <div class="data-Box">
                <div class="data-content clearfix">
                  <span class="content-title">时间:</span>
                  <div class="data-set">
                    <div class="data-year">
                      <p @click="dayAdd()">+</p>
                      <input
                        ref="hour"
                        type="number"
                        class="year"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.hour : 0"
                      />
                      <p @click="daySubtract()">-</p>
                    </div>
                    <span>:</span>
                    <div class="data-year">
                      <p @click="dayAdd()">+</p>
                      <input
                        ref="minute"
                        type="number"
                        class="year"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.minute : 0"
                      />
                      <p @click="daySubtract()">-</p>
                    </div>
                    <span>:</span>
                    <div class="data-year">
                      <p @click="dayAdd()">+</p>
                      <input
                        ref="second"
                        type="number"
                        class="year"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.second : 0"
                      />
                      <p @click="daySubtract()">-</p>
                    </div>
                    <span style="width:4px"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="cistern">
              <div class="cistern-header">恢复出产设置</div>
              <div class="cistern-content">
                <p @click="reset()">恢复</p>
              </div>
            </div>
          </div>
          <!-- 第三行 -->
          <div class="content-frist clearfix">
            <div class="pressure">
              <div class="pressure-title">进水压力设置</div>
              <div class="pressure-BorderBox">
                <div class="pressure-Box">
                  <div class="pressure-content clearfix">
                    <span class="content-title">进水压力上限:</span>
                    <div class="content-box">
                      <span @click="subtract()">-</span>
                      <input
                        ref="inflowMax"
                        type="number"
                        class="num"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.inflowMax : 0"
                      />
                      <span @click="add()">+</span>
                      <b>MPa</b>
                    </div>
                  </div>
                  <div class="pressure-content clearfix">
                    <span class="content-title">进水压力下限:</span>
                    <div class="content-box">
                      <span @click="subtract()">-</span>
                      <input
                        ref="inflowMin"
                        type="number"
                        class="num"
                        :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.inflowMin : 0"
                      />
                      <span @click="add()">+</span>
                      <b>MPa</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cistern hydraumatic">
              <div class="cistern-header hydraumatic-header">液压传感器系数设置</div>
              <div class="hydraumatic-content hydraumaticTop clearfix">
                <span class="content-title">进水流量:</span>
                <div class="content-box">
                  <span @click="subtract()">-</span>
                  <input
                    ref="rawWater"
                    type="number"
                    class="num"
                    :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.rawWater : 0"
                  />
                  <span @click="add()">+</span>
                  <b>MPa</b>
                </div>
                <div class="space"></div>
              </div>
              <div class="hydraumatic-content clearfix">
                <span class="content-title">纯水流量:</span>
                <div class="content-box">
                  <span @click="subtract()">-</span>
                  <input
                    ref="pureWater"
                    type="number"
                    class="num"
                    :value="this.allocationMsg.waterDecode.typeEightObj ? this.allocationMsg.waterDecode.typeEightObj.pureWater : 0"
                  />
                  <span @click="add()">+</span>
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
          <li v-for="(item,index) in filterMsg" :key="index">
            <div class="sand-header">{{item.name}}</div>
            <div class="sand-content clearfix">
              <div class="content-frist">
                <span>净水流量:</span>
                <div class="frist-input">
                  <input type="number" class="number" :ref="item.ref" :value="item.filterInflow" />
                  <b>m³</b>
                </div>
              </div>
              <div class="content-frist">
                <span>时间:</span>
                <div class="frist-input second-input">
                  <input type="number" class="number" :ref="item.refDay" :value="item.clearDays" />
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
import Axois from "axios";
import Qs from "qs";
export default {
  name: "parameter",
  data() {
    return {
      filterMsg: [
        {
          name: "石英砂使用寿命设置",
          inflow: "",
          filterInflow: "",
          usageDays: "",
          clearDays: "",
          ref: "silicaSand",
          refDay: "silicaSandDay"
        },
        {
          name: "活性炭使用寿命设置",
          inflow: "",
          filterInflow: "",
          usageDays: "",
          clearDays: "",
          ref: "activeCarbon",
          refDay: "activeCarbonDay"
        },
        {
          name: "软化树脂使用寿命设置",
          inflow: "",
          filterInflow: "",
          usageDays: "",
          clearDays: "",
          ref: "softenTheResin",
          refDay: "softenTheResinDay"
        },
        {
          name: "再生盐使用寿命设置",
          inflow: "",
          filterInflow: "",
          usageDays: "",
          clearDays: "",
          ref: "regeneratedSalt",
          refDay: "regeneratedSaltDay"
        },
        {
          name: "精密滤芯使用寿命设置",
          inflow: "",
          filterInflow: "",
          usageDays: "",
          clearDays: "",
          ref: "precisionFilter",
          refDay: "precisionFilterDay"
        },
        {
          name: "RO膜使用寿命设置",
          inflow: "",
          filterInflow: "",
          usageDays: "",
          clearDays: "",
          ref: "roMembrane",
          refDay: "roMembraneDay"
        },
        {
          name: "UV使用寿命设置",
          inflow: "",
          filterInflow: "",
          usageDays: "",
          clearDays: "",
          ref: "uvUse",
          refDay: "uvUseDay"
        }
      ],
      CoreMaterialMsg: {},
      // 排空
      empty: "00",
      //恢复出厂设置
      rest: "00"
    };
  },
  props: {
    allocationMsg: {
      type: Object,
      value: "未接受到参数"
    }
  },
  methods: {
    hidden() {
      //触发home中的getParam使其改变home中的Judge的值
      bus.$emit("getParam");
      this.$emit("hiddenSecond");
    },
    //压力设置加减数值变化
    add(e) {
      e = event || event.target;
      console.log(e.currentTarget.previousElementSibling.value, "e");
      let valueMsg = e.currentTarget.previousElementSibling.value;
      let value;
      if (valueMsg === "") {
        value = 0;
        value++;
        e.currentTarget.previousElementSibling.value = value;
      } else {
        value = valueMsg;
        value++;
        e.currentTarget.previousElementSibling.value = value;
      }
    },
    subtract(e) {
      e = event || event.target;
      console.log(e.currentTarget.nextElementSibling.value, "e");
      let valueMsg = e.currentTarget.nextElementSibling.value;
      let value;
      if (valueMsg === "") {
        value = 0;
        e.currentTarget.nextElementSibling.value = value;
      } else {
        value = valueMsg;
        if (value < 1 || value === 0) {
          e.currentTarget.nextElementSibling.value = 0;
        } else {
          value--;
          e.currentTarget.nextElementSibling.value = value;
        }
      }
    },
    //日期设置加减数值变化
    dayAdd(e) {
      e = event || event.target;
      console.log(e.currentTarget.nextElementSibling.value, "e");
      let valueMsg = e.currentTarget.nextElementSibling.value;
      let value;
      if (valueMsg === "") {
        value = 0;
        value++;
        e.currentTarget.nextElementSibling.value = value;
      } else {
        value = valueMsg;
        value++;
        e.currentTarget.nextElementSibling.value = value;
      }
    },
    daySubtract(e) {
      e = event || event.target;
      console.log(e.currentTarget.previousElementSibling.value, "e");
      let valueMsg = e.currentTarget.previousElementSibling.value;
      let value;
      if (valueMsg === "") {
        value = 0;
        e.currentTarget.previousElementSibling.value = value;
      } else {
        value = valueMsg;
        if (value < 1 || value === 0) {
          e.currentTarget.previousElementSibling.value = 0;
        } else {
          value--;
          e.currentTarget.previousElementSibling.value = value;
        }
      }
    },
    //滤芯滤料数据
    CoreMaterial() {
      let coreMaterialMsg = this.allocationMsg.waterDecode.typeSeventArr;
      if (coreMaterialMsg) {
        for (var i = 0; i < coreMaterialMsg.length; i++) {
          this.filterMsg[i].inflow = coreMaterialMsg[i].inflow;
          this.filterMsg[i].filterInflow = coreMaterialMsg[i].filterInflow;
          this.filterMsg[i].usageDays = coreMaterialMsg[i].usageDays;
          this.filterMsg[i].clearDays = coreMaterialMsg[i].clearDays;
        }
      }
      console.log(this.filterMsg, "this.filterMsg");
    },
    emptying() {
      this.empty = "01";
      console.log("自动排空");
    },
    reset() {
      this.rest = "01";
      console.log("恢复出厂设置");
    },
    //10进制转16进制(value内容，multiple乘以的倍数，numberOfBytes字节数)
    TenToSixteen(value, multiple = 1, numberOfBytes = 2) {
      let zero = "";
      let dataLength = parseInt(value * multiple, 10).toString(16).length;
      if (dataLength < numberOfBytes) {
        for (var i = 0; i < numberOfBytes - dataLength; i++) {
          zero += 0;
        }
      }
      let resultMsg = zero + parseInt(value * multiple, 10).toString(16);
      return resultMsg;
    },
    //2进制转16进制
    TwoToSixteen(value, numberOfBytes = 2) {
      let zero = "";
      let dataLength = parseInt(value, 2).toString(16).length;
      if (dataLength < numberOfBytes) {
        for (var i = 0; i < numberOfBytes - dataLength; i++) {
          zero += 0;
        }
      }
      let resultMsg = zero + parseInt(value, 2).toString(16);
      return resultMsg;
    },
    //系统状态数据转为16进制
    systemState() {
      let _this = this;
      //
      let result = "";
      //进水压力设置下限
      let inflowMin = this.TenToSixteen(this.$refs.inflowMin.value, 100);
      //进水压力设置上限
      let inflowMax = this.TenToSixteen(this.$refs.inflowMax.value, 100);
      //进水压力当前值
      let inflowNow = this.TenToSixteen(
        this.allocationMsg.waterDecode.typeEightObj.inflowNow,
        100,
        4
      );
      //膜前压力设置下限
      let SublayMin = this.TenToSixteen(this.$refs.SublayMin.value, 100);
      //膜前压力设置上限
      let SublayMax = this.TenToSixteen(this.$refs.SublayMax.value, 100);
      //膜前压力当前值
      let SublayNow = this.TenToSixteen(
        this.allocationMsg.waterDecode.typeEightObj.SublayNow,
        100,
        4
      );
      //取水压力下限值
      let intakingMin = this.TenToSixteen(this.$refs.intakingMin.value, 100);
      //取水压力上限值
      let intakingMax = this.TenToSixteen(this.$refs.intakingMax.value, 100);
      //取水压力当前值
      let intakingNow = this.TenToSixteen(
        this.allocationMsg.waterDecode.typeEightObj.intakingNow,
        100,
        4
      );
      //原水进水总量
      let rawWater = this.TenToSixteen(this.$refs.rawWater.value, 10, 4);
      //纯水进水总量
      let pureWater = this.TenToSixteen(this.$refs.pureWater.value, 10, 4);
      //年
      let year = this.TenToSixteen(this.$refs.year.value.substr(2));
      //月
      let month = this.TenToSixteen(this.$refs.month.value);
      //日
      let day = this.TenToSixteen(this.$refs.day.value);
      //时
      let hour = this.TenToSixteen(this.$refs.hour.value);
      //分
      let minute = this.TenToSixteen(this.$refs.minute.value);
      //秒
      let second = this.TenToSixteen(this.$refs.second.value);
      //开关信号输入量
      let Switch = this.TwoToSixteen(
        this.allocationMsg.waterDecode.typeEightObj.switch
      );
      //继电器输出
      let relay = this.TwoToSixteen(
        this.allocationMsg.waterDecode.typeEightObj.relay,
        4
      );
      //排空命令
      let evacuation = this.empty;
      //恢复出厂设置
      let rest = this.rest;
      result =
        "08|08" +
        inflowMin +
        inflowMax +
        inflowNow +
        SublayMin +
        SublayMax +
        SublayNow +
        intakingMin +
        intakingMax +
        intakingNow +
        rawWater +
        pureWater +
        year +
        month +
        day +
        hour +
        minute +
        second +
        Switch +
        relay +
        evacuation +
        rest +
        this.allocationMsg.waterDecode.typeEightObj.rubbish;
      console.log(result, year, Switch, evacuation, "我是result");
      return result;
    },
    materialsLifetime() {
      let _msg = this.allocationMsg.waterDecode.typeSeventArr;
      let result = "";
      let silicaSand =
        this.TenToSixteen(this.$refs.silicaSand[0].value, 10).substr(2, 2) +
        this.TenToSixteen(this.$refs.silicaSand[0].value, 10).substr(0, 2);
      let silicaSandDay =
        this.TenToSixteen(this.$refs.silicaSandDay[0].value).substr(2, 2) +
        this.TenToSixteen(this.$refs.silicaSandDay[0].value).substr(0, 2);
      let AllsilicaSand =
        this.TenToSixteen(_msg[0].inflow).substr(2, 2) +
        this.TenToSixteen(_msg[0].inflow).substr(0, 2);
      let AllsilicaSandDay =
        this.TenToSixteen(_msg[0].usageDays).substr(2, 2) +
        this.TenToSixteen(_msg[0].usageDays).substr(0, 2);

      let activeCarbon =
        this.TenToSixteen(this.$refs.activeCarbon[0].value, 10).substr(2, 2) +
        this.TenToSixteen(this.$refs.activeCarbon[0].value, 10).substr(0, 2);
      let activeCarbonDay =
        this.TenToSixteen(this.$refs.activeCarbonDay[0].value).substr(2, 2) +
        this.TenToSixteen(this.$refs.activeCarbonDay[0].value).substr(0, 2);
      let AllactiveCarbon =
        this.TenToSixteen(_msg[1].inflow).substr(2, 2) +
        this.TenToSixteen(_msg[1].inflow).substr(0, 2);
      let AllactiveCarbonDay =
        this.TenToSixteen(_msg[1].usageDays).substr(2, 2) +
        this.TenToSixteen(_msg[1].usageDays).substr(0, 2);

      let softenTheResin =
        this.TenToSixteen(this.$refs.softenTheResin[0].value, 10).substr(2, 2) +
        this.TenToSixteen(this.$refs.softenTheResin[0].value, 10).substr(0, 2);
      let softenTheResinDay =
        this.TenToSixteen(this.$refs.softenTheResinDay[0].value).substr(2, 2) +
        this.TenToSixteen(this.$refs.softenTheResinDay[0].value).substr(0, 2);
      let AllsoftenTheResin =
        this.TenToSixteen(_msg[2].inflow).substr(2, 2) +
        this.TenToSixteen(_msg[2].inflow).substr(0, 2);
      let AllsoftenTheResinDay =
        this.TenToSixteen(_msg[2].usageDays).substr(2, 2) +
        this.TenToSixteen(_msg[2].usageDays).substr(0, 2);

      let regeneratedSalt =
        this.TenToSixteen(this.$refs.regeneratedSalt[0].value, 10).substr(
          2,
          2
        ) +
        this.TenToSixteen(this.$refs.regeneratedSalt[0].value, 10).substr(0, 2);
      let regeneratedSaltDay =
        this.TenToSixteen(this.$refs.regeneratedSaltDay[0].value).substr(2, 2) +
        this.TenToSixteen(this.$refs.regeneratedSaltDay[0].value).substr(0, 2);
      let AllregeneratedSalt =
        this.TenToSixteen(_msg[3].inflow).substr(2, 2) +
        this.TenToSixteen(_msg[3].inflow).substr(0, 2);
      let AllregeneratedSaltDay =
        this.TenToSixteen(_msg[3].usageDays).substr(2, 2) +
        this.TenToSixteen(_msg[3].usageDays).substr(0, 2);

      let precisionFilter =
        this.TenToSixteen(this.$refs.precisionFilter[0].value, 10).substr(
          2,
          2
        ) +
        this.TenToSixteen(this.$refs.precisionFilter[0].value, 10).substr(0, 2);
      let precisionFilterDay =
        this.TenToSixteen(this.$refs.precisionFilterDay[0].value).substr(2, 2) +
        this.TenToSixteen(this.$refs.precisionFilterDay[0].value).substr(0, 2);
      let AllprecisionFilter =
        this.TenToSixteen(_msg[4].inflow).substr(2, 2) +
        this.TenToSixteen(_msg[4].inflow).substr(0, 2);
      let AllprecisionFilterDay =
        this.TenToSixteen(_msg[4].usageDays).substr(2, 2) +
        this.TenToSixteen(_msg[4].usageDays).substr(0, 2);

      let roMembrane =
        this.TenToSixteen(this.$refs.roMembrane[0].value, 10).substr(2, 2) +
        this.TenToSixteen(this.$refs.roMembrane[0].value, 10).substr(0, 2);
      let roMembraneDay =
        this.TenToSixteen(this.$refs.roMembraneDay[0].value).substr(2, 2) +
        this.TenToSixteen(this.$refs.roMembraneDay[0].value).substr(0, 2);
      let AllroMembrane =
        this.TenToSixteen(_msg[5].inflow).substr(2, 2) +
        this.TenToSixteen(_msg[5].inflow).substr(0, 2);
      let AllroMembraneDay =
        this.TenToSixteen(_msg[5].usageDays).substr(2, 2) +
        this.TenToSixteen(_msg[5].usageDays).substr(0, 2);

      let uvUse =
        this.TenToSixteen(this.$refs.uvUse[0].value, 10).substr(2, 2) +
        this.TenToSixteen(this.$refs.uvUse[0].value, 10).substr(0, 2);
      let uvUseDay =
        this.TenToSixteen(this.$refs.uvUseDay[0].value).substr(2, 2) +
        this.TenToSixteen(this.$refs.uvUseDay[0].value).substr(0, 2);
      let AlluvUse =
        this.TenToSixteen(_msg[6].inflow).substr(2, 2) +
        this.TenToSixteen(_msg[6].inflow).substr(0, 2);
      let AlluvUseDay =
        this.TenToSixteen(_msg[6].usageDays).substr(2, 2) +
        this.TenToSixteen(_msg[6].usageDays).substr(0, 2);
      result =
        "07|07" +
        AllsilicaSand +
        silicaSand +
        AllsilicaSandDay +
        silicaSandDay +
        AllactiveCarbon +
        activeCarbon +
        AllactiveCarbonDay +
        activeCarbonDay +
        AllsoftenTheResin +
        softenTheResin +
        AllsoftenTheResinDay +
        softenTheResinDay +
        AllregeneratedSalt +
        regeneratedSalt +
        AllregeneratedSaltDay +
        regeneratedSaltDay +
        AllprecisionFilter +
        precisionFilter +
        AllprecisionFilterDay +
        precisionFilterDay +
        AllroMembrane +
        roMembrane +
        AllroMembraneDay +
        roMembraneDay +
        AlluvUse +
        uvUse +
        AlluvUseDay +
        uvUseDay +
        this.allocationMsg.waterDecode.typeSeventArr[0].rubbish;
      console.log(
        result,
        this.$refs.activeCarbon[0].value,
        this.filterMsg,
        "我是silicaSand"
      );
      return result;
    },
    //保存设置
    saveSetting() {
      let _this = this;
      let _msg = "";
      _msg = this.materialsLifetime() + "|-|" + this.systemState();
      console.log(_msg, "我是我是");
      let data = {
        token: "4",
        ack: 0,
        did: this.allocationMsg.pdid,
        dataType: 0,
        dataLoad: this.materialsLifetime()
      };
      let data2 = {
        token: "4",
        ack: 0,
        did: this.allocationMsg.pdid,
        dataType: 0,
        dataLoad: this.systemState()
      };
      Axois({
        url: _this.$api.issuedData,
        method: "POST",
        data: data,
        headers: { sak: "444" }
      }).then(res => {
        console.log(res, "我是res");
      });
      Axois({
        url: _this.$api.issuedData,
        method: "POST",
        data: data2,
        headers: { sak: "444" }
      }).then(res => {
        console.log(res, "我是res");
      });
    }
  },
  mounted() {
    console.log(this.allocationMsg, "我是typeSeventArr");
    this.CoreMaterial();
    this.systemState();
  }
};
</script>
<style lang="scss" scoped>
$height: 200px;
#parameter {
  position: absolute;
  width: 104%;
  // height: 1182px;
  border: solid 1px red;
  background: #ffffff;
  left: -156px;
  top: -24px;
  z-index: 10000;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
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
    input {
      text-align: center;
    }
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
            .pressure-BorderBox {
              position: relative;
              width: 100%;
              height: $height;
              .pressure-Box {
                position: absolute;
                width: 100%;
                top: 50%;
                transform: translate(0, -50%);
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
                      cursor: pointer;
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
                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                      -webkit-appearance: none !important;
                      margin: 0;
                    }
                  }
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
            .data-Box {
              position: relative;
              width: 100%;
              height: $height;
              .data-content {
                position: absolute;
                width: 100%;
                top: 50%;
                padding: 0 16px;
                transform: translate(0, -50%);
                box-sizing: border-box;
                .content-title {
                  float: left;
                  font-size: 16px;
                  line-height: 120px;
                  color: #333;
                }
                .data-set {
                  float: right;
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
                      cursor: pointer;
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
              p {
                cursor: pointer;
              }
            }
          }
          .hydraumatic {
            width: 53%;
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
                  cursor: pointer;
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
            .hydraumaticTop {
              padding-top: 40px;
              box-sizing: border-box;
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
    input {
      text-align: center;
    }
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
                width: 80px;
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


