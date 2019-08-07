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
                  <input type="text" :placeholder="item.placehold" :disabled="item.disable" :value="item.value" class="inputFrist"/>
                </td>
              </tr>
              <tr align="center">
                <td>安装地址</td>
                <td align="left" colspan="3">
                  <div class="addres-box">
                    <div>
                      <input type="text" class="addres InputAddres"  />省
                    </div>
                    <div>
                      <input type="text" class="addres InputAddres" />市
                    </div>
                    <div>
                      <input type="text" class="addres InputAddres" />区
                    </div>
                  </div>
                </td>
              </tr>
              <tr align="center">
                <td>客户性质</td>
                <td colspan="3">
                  <div class="clientCheck">
                    <div class="check-box" v-for="item in checkList" :key="item.id">
                      <input type="checkbox" class="check" />
                      <span>{{item.name}}</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="vindicatePelope" v-for="item in vindicateList" :key="item.id">
                <td colspan="1" align="center">{{item.name}}</td>
                <td colspan="1" align="center">
                  <input type="text" />
                </td>
                <td colspan="1" align="center">电话</td>
                <td colspan="1" align="center">
                  <input type="text" />
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
                  <div class="headwaters">
                    <div class="headwaters-box" v-for="item in headwatersList" :key="item.id">
                      {{item.name}}
                      <input
                        type="checkbox"
                        style="width:20px;height:20px;vertical"
                        class="headwaters-check"
                      />
                    </div>
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>水源压力</td>
                <td>
                  <div class="pressure">
                    <input type="text" class="pressureLine" />
                    <span>MPa</span>
                    <i>~</i>
                    <input type="text" class="pressureLine" />
                    <span>MPa(公斤力)</span>
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>水源压力</td>
                <td>
                  <div class="pressure">
                    <input type="text" class="pressureLine" />
                    <span>L/天(可按照2L/人·天计算)</span>
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>主机及水箱可摆放的位置</td>
                <td>
                  <div class="positionted">
                    <input type="checkbox" />
                    <div class="positionted-box">
                      露天摆放位置描述:
                      <input type="text" class="positionted-check" />
                    </div>
                  </div>
                  <div class="positionted">
                    <input type="checkbox" />
                    <div class="positionted-box">
                      设备间内，尺寸：
                      长:
                      <input type="text" class="positionted-check2" />
                      <span>米</span>
                      宽:
                      <input type="text" class="positionted-check2" />
                      <span>米</span>
                      高:
                      <input type="text" class="positionted-check2" />
                      <span>米</span>
                    </div>
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>饮水末端建筑性质</td>
                <td>
                  <div class="headwaters">
                    <div class="headwaters-box" v-for="item in natureList" :key="item.id">
                      {{item.name}}
                      <input
                        type="checkbox"
                        style="width:20px;height:20px;vertical"
                        class="headwaters-check"
                      />
                    </div>
                  </div>
                </td>
                <td>可多选</td>
              </tr>
              <tr>
                <td>1</td>
                <td>饮水末端建筑情况</td>
                <td>
                  <div class="condition-box">
                    设备间内，尺寸：
                    楼高:
                    <input type="text" class="condition-check" />
                    <span>米</span>
                    层，最高用水点高度:
                    <input type="text" class="condition-check" />
                    <span>米</span>
                  </div>
                </td>
                <td></td>
              </tr>
              <tr style="height:80px">
                <td>1</td>
                <td>其他</td>
                <td></td>
                <td></td>
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
      checkList: [
        { id: 10, name: "工厂企业" },
        { id: 11, name: "事业单位" },
        { id: 12, name: "办公写字楼" },
        { id: 13, name: "学校" },
        { id: 14, name: "小区" }
      ],
      baseList: [
        { id: 20, name: "机器ID",placehold:"（机器通过wifi/GPRS传输，可修改，以便更换电控板）",disable:true, value:this.item.pdid },
        { id: 21, name: "机器型号", placehold: "（机器通过wifi/GPRS传输）",disable:true, value:this.item.puuid },
        { id: 22, name: "订单号",placehold:"",disable:false,value:"" },
        { id: 23, name: "订单日期",placehold:"",disable:false,value:"" },
        { id: 24, name: "生产日期",placehold:"",disable:false,value:"" },
        { id: 25, name: "安装日期",placehold:"",disable:false,value:"" },
        { id: 26, name: "客户全称",placehold:"",disable:false,value:"" }
      ],
      vindicateList: [
        { id: 30, name: "项目适用方负责人" },
        { id: 31, name: "项目适用方维护人" },
        { id: 32, name: "销售业务" }
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
      ]
    };
  },
  props:{
    item:{
      type:Object,
      default:"未接受到数据"
    }
  },
  methods:{
    hidden(){
      this.$emit('maintain');
    }
  },
  mounted(){
    document.querySelector('.addres').addEventListener('change',()=>{
      console.log(document.querySelector('.addres').value)
    },false)
    let dom = document.querySelectorAll('.inputFrist')
    for(var i =0 ; i < dom.length; i++){
      console.log(dom[i].value)
    }
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
  z-index: 10000;
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
                  width: 488px;
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


