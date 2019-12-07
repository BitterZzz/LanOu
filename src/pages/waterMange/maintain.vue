<template>
  <div id="maintain">
    <div id="maintain-header">
      <img src="../../assets/img/backb.png" alt @click="hidden()" />
      <span>工程项目基础信息</span>
    </div>
    <div id="maintain-main">
      <div class="mainm">
        <div class="maintain-box">
          <table class="maintain-table" border="1" cellspacing="0">
            <thead>
              <th class="box-header" colspan="4">工程基础信息</th>
            </thead>
            <tbody class="maintain-tbody" align="center">
              <tr align="center" v-for="item in baseList" :key="item.id">
                <td>{{item.name}}</td>
                <td colspan="3">
                  <input
                    type="text"
                    :placeholder="item.placehold"
                    :disabled="item.disable"
                    :value="item.value"
                    class="inputFrist"
                    :ref="item.refName"
                  />
                </td>
              </tr>
              <tr align="center">
                <td>安装地址</td>
                <td align="left" colspan="3">
                  <div class="addres-box">
                    <div>
                      <input type="text" class="addres InputAddres" ref="provoice" value />
                      <span>省</span>
                    </div>
                    <div>
                      <input type="text" class="addres InputAddres" ref="city" value />
                      <span>市</span>
                    </div>
                    <div>
                      <input type="text" class="addres InputAddres" ref="district" value />
                      <span>区</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr align="center">
                <td>客户性质</td>
                <td colspan="3">
                  <div class="clientCheck" ref="clientNature">
                    <div class="check-box" v-for="(item,index) in checkList" :key="item.id">
                      <input type="checkbox" class="check" @click="checkMsg(index)" value />
                      <span>{{item.name}}</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="vindicatePelope" v-for="item in vindicateList" :key="item.id">
                <td colspan="1" align="center">{{item.name}}</td>
                <td colspan="1" align="center">
                  <input type="text" value :ref="item.refName" />
                </td>
                <td colspan="1" align="center">电话</td>
                <td colspan="1" align="center">
                  <input type="text" value :ref="item.refPhone" />
                </td>
              </tr>
            </tbody>
          </table>
          <table class="maintain-table2" border="1" cellspacing="0">
            <thead>
              <th>序号</th>
              <th style="width:18%">项 目</th>
              <th>具体情况</th>
              <th>备注</th>
            </thead>
            <tbody align="center">
              <tr>
                <td>1</td>
                <td>水源</td>
                <td>
                  <div class="headwaters" ref="headwaters">
                    <div
                      class="headwaters-box"
                      v-for="(item,index) in headwatersList"
                      :key="item.id"
                    >
                      <span>{{item.name}}</span>
                      <input
                        type="checkbox"
                        style="width:20px;height:20px;vertical"
                        class="headwaters-check"
                        @click="headwaterJudge(index)"
                        value
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <textarea
                    ref="waterMsg"
                    autocomplete="off"
                    class="el-textarea__inner"
                    style="min-height:35px"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>水源压力</td>
                <td>
                  <div class="pressure">
                    <input type="text" class="pressureLine" ref="minPressureLine" value />
                    <span>MPa</span>
                    <i>~</i>
                    <input type="text" class="pressureLine" ref="maxPressureLine" value />
                    <span>MPa(公斤力)</span>
                  </div>
                </td>
                <td>
                  <textarea
                    ref="pressureWaterMsg"
                    autocomplete="off"
                    class="el-textarea__inner"
                    style="min-height:35px"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>日饮水量估算</td>
                <td>
                  <div class="pressure">
                    <input type="text" class="pressureLine" ref="dayDrinking" value />
                    <span>L/天(可按照2L/人·天计算)</span>
                  </div>
                </td>
                <td>
                  <textarea
                    ref="dayDrinkingMsg"
                    autocomplete="off"
                    class="el-textarea__inner"
                    style="min-height:35px"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>主机及水箱可摆放的位置</td>
                <td>
                  <div class="positionted">
                    <input type="checkbox" value ref="position" @click="positionPut(1)" />
                    <div class="positionted-box">
                      露天摆放, 位置描述:
                      <input
                        type="text"
                        class="positionted-check"
                        ref="positionDescription"
                        value
                      />
                    </div>
                  </div>
                  <div class="positionted">
                    <input type="checkbox" value ref="position2" @click="positionPut(2)" />
                    <div class="positionted-box" id="positiontedBox">
                      设备间内，尺寸：
                      长:
                      <input
                        type="text"
                        class="positionted-check2"
                        value
                        ref="positionDescription2"
                      />
                      <span>米</span>
                      宽:
                      <input
                        type="text"
                        class="positionted-check2"
                        value
                        ref="positionDescription3"
                      />
                      <span>米</span>
                      高:
                      <input
                        type="text"
                        class="positionted-check2"
                        value
                        ref="positionDescription4"
                      />
                      <span>米</span>
                    </div>
                  </div>
                </td>
                <td>
                  <textarea
                    ref="positionMsg"
                    autocomplete="off"
                    class="el-textarea__inner"
                    style="min-height:54px"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>饮水末端建筑性质</td>
                <td>
                  <div class="headwaters" ref="buildingProperty">
                    <div class="headwaters-box" v-for="(item,index) in natureList" :key="item.id">
                      <span>{{item.name}}</span>
                      <input
                        type="checkbox"
                        style="width:20px;height:20px;vertical"
                        class="headwaters-check"
                        @click="buildingProperty(index)"
                        value
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <textarea
                    ref="architecturalTypeMsg"
                    autocomplete="off"
                    class="el-textarea__inner"
                    style="min-height:35px"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>饮水末端建筑情况</td>
                <td>
                  <div class="condition-box">
                    设备间内，尺寸：
                    楼高:
                    <input
                      type="text"
                      class="condition-check"
                      value
                      ref="buildHeight"
                    />
                    层，最高用水点高度:
                    <input
                      type="text"
                      class="condition-check"
                      value
                      ref="maxWater"
                    />
                    <span>米</span>
                  </div>
                </td>
                <td>
                  <textarea
                    ref="architeMsg"
                    autocomplete="off"
                    class="el-textarea__inner"
                    style="min-height:35px"
                  ></textarea>
                </td>
              </tr>
              <tr style="height:80px">
                <td>1</td>
                <td>其他</td>
                <td>
                  <textarea
                    ref="orther"
                    autocomplete="off"
                    class="el-textarea__inner"
                    style="min-height:100px"
                  ></textarea>
                </td>
                <td>
                  <textarea
                    ref="ortherMsg"
                    autocomplete="off"
                    class="el-textarea__inner"
                    style="min-height:100px"
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "maintain",
  data() {
    return {
      lanOuProjectInfo: {
        oderTime: "", //订单时间
        produceTime: "", //生产时间
        installTime: "", //安装时间
        clientName: "", //客户名称
        installationAdderss: "", //安装地址
        clientType: "", //客户性质,
        leadingCard: "", //负责人
        defender: "", //维护人
        sales: "", //销售
        water: "", //水源
        waterMsg: "", //水源备注(现在没有给参数)
        pressureWater: "", //水源压力
        pressureWaterMsg: "", //水源压力备注
        dayDrinking: "", //日饮量估计
        dayDrinkingMsg: "", //日饮量估算配置
        position: "", //摆放位置,
        positionMsg: "", //摆放位置备注(现在没有参数)
        architecturalType: "", //建筑性质
        architecturalTypeMsg: "", //建筑性质备注(现在没有参数)
        architecturalCondition: "", //建筑情况(现在没有参数)
        architeMsg: "", //建筑情况备注(现在没有参数)
        orther: "", //其他
        ortherMsg: "" //其她备注
      },
      checkList: [
        { id: 10, name: "工厂企业" },
        { id: 11, name: "事业单位" },
        { id: 12, name: "办公写字楼" },
        { id: 13, name: "学校" },
        { id: 14, name: "小区" }
      ],
      baseList: [
        {
          id: 20,
          name: "机器ID",
          placehold: "（机器通过wifi/GPRS传输，可修改，以便更换电控板）",
          disable: true,
          value: this.item.pdid,
          refName: "robotId"
        },
        {
          id: 21,
          name: "机器型号",
          placehold: "（机器通过wifi/GPRS传输）",
          disable: true,
          value: this.item.puuid,
          refName: "machineModel"
        },
        {
          id: 22,
          name: "订单号",
          placehold: "",
          disable: false,
          value: "",
          refName: "orderNumber"
        },
        {
          id: 23,
          name: "订单日期",
          placehold: "",
          disable: false,
          value: "",
          refName: "orderDate"
        },
        {
          id: 24,
          name: "生产日期",
          placehold: "",
          disable: false,
          value: "",
          refName: "productionDate"
        },
        {
          id: 25,
          name: "安装日期",
          placehold: "",
          disable: false,
          value: "",
          refName: "installDate"
        },
        {
          id: 26,
          name: "客户全称",
          placehold: "",
          disable: false,
          value: "",
          refName: "customerName"
        }
      ],
      vindicateList: [
        {
          id: 30,
          name: "项目适用方负责人",
          refName: "leadingCard",
          refPhone: "leadingPhone"
        },
        {
          id: 31,
          name: "项目适用方维护人",
          refName: "defender",
          refPhone: "defenderPhone"
        },
        { id: 32, name: "销售业务", refName: "sales", refPhone: "salesPhone" }
      ],
      headwatersList: [
        { id: 40, name: "自来水" },
        { id: 41, name: "地下水" },
        { id: 42, name: "地表水" },
        { id: 43, name: "进水" }
      ],
      natureList: [
        { id: 50, name: "教室" },
        { id: 51, name: "办公室" },
        { id: 52, name: "宿舍楼" },
        { id: 53, name: "食堂" },
        { id: 54, name: "其它" }
      ],
      id: "", //设备的id
      leadingPhone: "", //负责人手机号
      defenderPhone: "", //维护人手机号
      salesPhone: "" //销售手机号
    };
  },
  props: {
    item: {
      type: Object,
      default: "未接受到数据"
    }
  },
  methods: {
    //获取进入
    hidden() {
      var userVerity = /^[1][3,4,5,6,7,8][0-9]{9}$/;
      this.getMsg();
      console.log(this.lanOuProjectInfo,"this.lanOuProjectInfo")
      if (
        !userVerity.test(this.leadingPhone) ||
        !userVerity.test(this.defenderPhone) ||
        !userVerity.test(this.salesPhone)
      ) {
        this.$message({
          message: "手机号格式不正确",
          type: "warning"
        });
        this.$emit("maintain");
        return;
      } else {
        this.$postBody(
          this.$api.updateLanOuProjectInfo,
          {
            lanOuProjectInfo: this.lanOuProjectInfo
          },
          {
            id: this.id,
            leadingPhone: this.leadingPhone,
            defenderPhone: this.defenderPhone,
            salesPhone: this.salesPhone
          }
        ).then(res => {
          console.log(res);
        });
        console.log(this.lanOuProjectInfo);
        this.$emit("maintain");
      }
    },
    getMsg() {
      //订单日期
      let orderDate = this.$refs.orderDate[0].value;
      //生产日期
      let productionDate = this.$refs.productionDate[0].value;
      //安装日期
      let installDate = this.$refs.installDate[0].value;
      //客户全称
      let customerName = this.$refs.customerName[0].value;
      //省
      let provoice = this.$refs.provoice.value;
      //市
      let city = this.$refs.city.value;
      //区
      let district = this.$refs.district.value;
      //项目试用方负责人
      let leadingCard = this.$refs.leadingCard[0].value;
      console.log(leadingCard, "leadingCard");
      //项目方负责人手机号
      let leadingPhone = this.$refs.leadingPhone[0].value;
      //项目方维护人
      let defender = this.$refs.defender[0].value;
      //项目方维护人姓名
      let defenderPhone = this.$refs.defenderPhone[0].value;
      //销售业务
      let sales = this.$refs.sales[0].value;
      //销售业务电话
      let salesPhone = this.$refs.salesPhone[0].value;
      //水源压力
      let pressureWater =
        this.$refs.minPressureLine.value +
        "~" +
        this.$refs.maxPressureLine.value;
      //水源压力备注
      let pressureWaterMsg = this.$refs.pressureWaterMsg.value;
      //日饮水量估计
      let dayDrinking = this.$refs.dayDrinking.value;
      //日饮水量估计备注
      let dayDrinkingMsg = this.$refs.dayDrinkingMsg.value;
      // 饮水末端建筑情况
      let architecturalCondition =
        this.$refs.buildHeight.value + "," + this.$refs.maxWater.value;
      // //位置摆放备注
      let positionMsg = this.$refs.positionMsg.value;
      //建筑性质备注
      let architecturalTypeMsg = this.$refs.architecturalTypeMsg.value;
      //建筑情况备注
      let architeMsg = this.$refs.architeMsg.value;
      //其它
      let orther = this.$refs.orther.value;
      //其它备注
      let ortherMsg = this.$refs.ortherMsg.value;

      this.lanOuProjectInfo.oderTime = orderDate;
      this.lanOuProjectInfo.produceTime = productionDate;
      this.lanOuProjectInfo.installTime = installDate;
      this.lanOuProjectInfo.clientName = customerName;
      this.lanOuProjectInfo.installationAdderss =
        provoice + "省," + city + "市," + district + "区";
      this.lanOuProjectInfo.leadingCard = leadingCard;
      this.leadingPhone = leadingPhone;
      this.lanOuProjectInfo.defender = defender;
      this.defenderPhone = defenderPhone;
      this.lanOuProjectInfo.sales = sales;
      this.salesPhone = salesPhone;
      this.lanOuProjectInfo.pressureWater = pressureWater;
      this.lanOuProjectInfo.pressureWaterMsg = pressureWaterMsg;
      this.lanOuProjectInfo.dayDrinking = dayDrinking;
      this.lanOuProjectInfo.dayDrinkingMsg = dayDrinkingMsg;
      this.lanOuProjectInfo.architecturalCondition = architecturalCondition;
      this.lanOuProjectInfo.orther = orther;
      this.lanOuProjectInfo.ortherMsg = ortherMsg;
      this.lanOuProjectInfo.positionMsg = positionMsg;
      this.lanOuProjectInfo.architecturalTypeMsg = architecturalTypeMsg;
      this.lanOuProjectInfo.architeMsg = architeMsg;
    },
    //客户性质判断
    checkMsg(index) {
      let _this = this;
      let checkDom = this.$refs.clientNature.getElementsByClassName("check");
      let representative = this.checkJudge(index, _this.checkList, checkDom);
      this.lanOuProjectInfo.clientType = representative;
      console.log(representative, "representative");
    },
    //水源判断
    headwaterJudge(index) {
      let _this = this;
      let checkDom = this.$refs.headwaters.getElementsByClassName(
        "headwaters-check"
      );
      let representative = this.checkJudge(
        index,
        _this.headwatersList,
        checkDom
      );
      //水源
      this.lanOuProjectInfo.water = representative;
      //水源备注
      this.lanOuProjectInfo.waterMsg = "";
    },
    //建筑性质!!!!!!!
    buildingProperty(index) {
      let _this = this;
      let checkDom = this.$refs.buildingProperty.getElementsByClassName(
        "headwaters-check"
      );
      let representative = this.checkJudge(index, _this.natureList, checkDom);
      this.lanOuProjectInfo.architecturalType = "1"; //representative;
    },
    //摆放位置
    positionPut(number) {
      if (number === 1) {
        if (this.$refs.position.checked === true) {
          this.$refs.position2.checked = false;
          this.lanOuProjectInfo.position =
            "1+" + this.$refs.positionDescription.value;
          console.log(
            this.lanOuProjectInfo.position,
            "我是this.lanOuProjectInfo.position"
          );
        } else {
          this.$refs.position2.checked = false;
          this.lanOuProjectInfo.position = "";
        }
      } else if (number === 2) {
        if (this.$refs.position2.checked === true) {
          this.$refs.position.checked = false;
          this.lanOuProjectInfo.position =
            "设备间内+" +
            this.$refs.positionDescription2.value +
            "," +
            this.$refs.positionDescription3.value +
            "," +
            this.$refs.positionDescription3.value;
          console.log(
            this.lanOuProjectInfo.position,
            "我是positionDescription2"
          );
        } else {
          this.$refs.position.checked = false;
          this.lanOuProjectInfo.position = "";
        }
      }
    },
    //判断点击哪个选择框
    checkJudge(index, checkList, checkDom) {
      console.log(checkDom);
      let str = "";
      let num;
      for (var i = 0; i < checkDom.length; i++) {
        checkDom[i].checked = false;
      }
      checkDom[index].checked = true;
      if (checkDom[index].checked === true) {
        str =
          checkDom[index].nextElementSibling !== null
            ? checkDom[index].nextElementSibling.innerHTML
            : checkDom[index].previousElementSibling.innerHTML;
        console.log(str);
        for (var j = 0; j < checkList.length; j++) {
          console.log(str, checkList[j].name);
          if (str === checkList[j].name) {
            console.log(j + 1);
            num = j + 1;
            return num;
          }
        }
      }
    },
    //进入信息维护时获取数据
    EnterGet() {
      this.$post(this.$api.getLanOuProjectInfoByDidAndUuid, {
        did: this.item.pdid,
        uuid: this.item.puuid
      }).then(res => {
        console.log(res, "res");
        let _this = this;
        let $data = res.data.data[0];
        console.log($data, "res");
        if (res.data.code === 0) {
          let provoice = $data.installationAdderss.split(",");
          this.id = $data.id;
          console.log(this.id, "this.id");
          this.baseList[2].value = $data.pOderId;
          this.baseList[3].value = $data.oderTime;
          this.baseList[4].value = $data.produceTime;
          this.baseList[5].value = $data.installTime;
          this.baseList[6].value = $data.clientName;
          this.$refs.provoice.value = provoice[0];
          this.$refs.city.value = provoice[1];
          this.$refs.district.value = provoice[2];
          this.$refs.leadingCard[0].value = $data.leadingCadre;
          this.$refs.leadingPhone[0].value = $data.leadingPhone;
          this.$refs.defender[0].value = $data.defender;
          this.$refs.defenderPhone[0].value = $data.defenderPhone;
          console.log(this.$refs.defenderPhone);
          this.$refs.sales[0].value = $data.sales;
          this.$refs.salesPhone[0].value = $data.salesPhone;
          this.$refs.waterMsg.value = $data.waterMsg;
          this.$refs.minPressureLine.value =
            $data.pressureWater.split("~")[0] == "undefined"
              ? $data.pressureWater.split("~")[0]
              : "";
          this.$refs.maxPressureLine.value =
            $data.pressureWater.split("~")[1] == "undefined"
              ? $data.pressureWater.split("~")[1]
              : "";
          this.$refs.pressureWaterMsg.value = $data.pressureWaterMsg;
          this.$refs.dayDrinking.value = $data.dayDrinking;
          this.$refs.dayDrinkingMsg.value = $data.dayDrinkingMsg;
          this.$refs.positionMsg.value = $data.positionMsg;
          this.$refs.architecturalTypeMsg.value = $data.architecturalTypeMsg;
          this.$refs.architeMsg.value = $data.architeMsg;
          this.$refs.buildHeight.value =
            $data.architecturalCondition == ""
              ? ""
              : $data.architecturalCondition.split(",")[0];
          this.$refs.maxWater.value =
            $data.architecturalCondition == ""
              ? ""
              : $data.architecturalCondition.split(",")[1];
          this.$refs.orther.value = $data.orther;
          this.$refs.ortherMsg.value = $data.ortherMsg;
          if ($data.clientType !== "") {
            let index = Number($data.clientType) - 1
            console.log($data.clientType,"index")
            let checkDom3 = this.$refs.clientNature.getElementsByClassName(
              "check"
            );
            let representative = this.checkJudge(index, _this.checkList, checkDom3);
          }
          if ($data.water !== "") {
            let index2 = $data.water - 1
            console.log(index2,"index2")
            let checkDom2 = this.$refs.headwaters.getElementsByClassName(
              "headwaters-check"
            );
            this.checkJudge(index2, _this.headwatersList, checkDom2);
          }
          if ($data.architecturalType !== "") {
            let index3 = $data.architecturalType - 1
            let checkDom = this.$refs.buildingProperty.getElementsByClassName(
              "headwaters-check"
            );
            this.checkJudge(index3, _this.natureList, checkDom);
          }
        } else {
          this.$message({
            message: "暂无该设备数据",
            type: "warning"
          });
        }
      });
    }
  },
  created() {},
  mounted() {
    let _this = this;
    // this.getMsg();
    // this.checkJudge();
    this.EnterGet();
  }
};
</script>
<style lang="scss" scoped>
#maintain {
  position: absolute;
  width: 90%;
  background: #e4e4e4;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  #maintain-header {
    width: 100%;
    height: 60px;
    color: #ffffff;
    background: #2488dd;
    img {
      vertical-align: middle;
      cursor: pointer;
    }
    span {
      display: inline-block;
      color: #ffffff;
      line-height: 60px;
    }
  }
  #maintain-main {
    padding: 20px 30px 0 30px;
    .mainm {
      .maintain-box {
        width: 100%;
        background: #ffffff;
        .box-header {
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          box-sizing: border-box;
          color: #333333;
        }
        .maintain-table {
          width: 100%;
          background: #ffffff;
          .maintain-tbody {
            tr {
              height: 40px;
              color: #333333;
              td:nth-child(1) {
                width: 19%;
                color: #333333;
              }
              td:nth-child(2) {
                height: 40px;
                color: #333333;
                .addres-box {
                  display: flex;
                  justify-content: space-around;
                }
                input {
                  width: 100%;
                  height: 100%;
                  border: 0;
                  padding-left: 6px;
                  box-sizing: border-box;
                  color: #333333;
                }
                .addres {
                  width: 100px;
                  height: 100%;
                  text-align: right;
                  font-size: 16px;
                  color: #333333;
                }
                .clientCheck {
                  display: flex;
                  justify-content: space-around;
                  .check-box {
                    .check {
                      width: 20px;
                      height: 20px;
                      border: solid 1px red;
                      vertical-align: middle;
                    }
                  }
                }
              }
            }
            .vindicatePelope {
              td:nth-child(3) {
                width: 10%;
              }
              td {
                input {
                  width: 100%;
                  height: 100%;
                  border: 0;
                  padding-left: 6px;
                  box-sizing: border-box;
                }
              }
            }
          }
        }
        .maintain-table2 {
          width: 100%;
          color: #333333;
          border-top: 0;
          thead {
            th {
              height: 40px;
            }
            th:nth-child(1) {
              width: 6.4%;
            }
            th:nth-child(2) {
              width: 17.8%;
            }
            th:nth-child(4) {
              width: 6.5%;
            }
          }
          tbody {
            tr {
              td {
                .el-textarea__inner {
                  display: block;
                  resize: vertical;
                  padding: 5px 15px;
                  line-height: 1.5;
                  box-sizing: border-box;
                  width: 100%;
                  font-size: inherit;
                  color: #606266;
                  background-color: #fff;
                  background-image: none;
                  // border: 1px solid #dcdfe6;
                  border: 0;
                  border-radius: 4px;
                  // transition: border-color 0.2s
                  //   cubic-bezier(0.645, 0.045, 0.355, 1);
                }
              }
              td:nth-child(3) {
                padding: 6px 0;
                .headwaters {
                  display: flex;
                  justify-content: space-around;
                  .headwaters-check {
                    vertical-align: middle;
                  }
                }
                .pressureLine {
                  width: 40px;
                  border: 0;
                  border-bottom: solid 1px #333333;
                }
                .positionted {
                  width: 600px;
                  text-align: left;
                  input {
                    width: 20px;
                    height: 20px;
                    vertical-align: middle;
                  }
                  .positionted-box {
                    display: inline-block;
                    .positionted-check {
                      width: 180px;
                      border: 0;
                      border-bottom: solid 1px #333;
                    }
                    .positionted-check2 {
                      width: 60px;
                      border: 0;
                      border-bottom: solid 1px #333;
                    }
                  }
                }
                .condition-box {
                  .condition-check {
                    width: 60px;
                    border: 0;
                    border-bottom: solid 1px #333;
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


