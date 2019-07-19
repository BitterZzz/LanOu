<template>
  <div id="user">
    <div id="title">
      <p>
        您所在的位置 : 用户管理 >
        <a>用户列表</a>
      </p>
    </div>
    <div class="userBox">
      <ul class="Top">
        <li>
          <p>
            <img src="../../../assets/img/start.png" alt />启用
          </p>
          <p @click="forbidden()">
            <img src="../../../assets/img/forbid.png" alt />禁止
          </p>
          <p @click="RemoveAll()">
            <img src="../../../assets/img/delete.png" alt />删除
          </p>
        </li>
        <li class="inp">
          <input type="text" class="text" placeholder="搜索用户名/真实姓名" />
          <img src="../../../assets/img/search.png" alt @click="serachAction()" />
        </li>
      </ul>
      <ul class="navigation">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
         
        ></el-checkbox>
        <div class="box-nav">
          <a v-for=" item in list" :key="item.id">{{item.value}}</a>
        </div>
      </ul>

      <ul class="table">
        <el-checkbox-group
          v-model="checkedCities"
         
          @change="handleCheckedCitiesChange"
        >
         <div v-for="city in cities" :key="city.id" @click="checkbox(city)">
          <el-checkbox   :label="city"  >
           
            <a>{{city.userId}}</a>
            <a>{{city.didName}}</a>
            <a>{{city.realName}}</a>
            <a>{{city.cellPhone}}</a>
            <a>{{city.position}}</a>
            <a>
              <div>{{city.workUnit}}</div>
            </a>
            <a>{{city.productId}}</a>
            <a id="decide">
              {{city.isEnabled === "1" ? '可用': '禁止'}}
              <img :src="city.isEnabled === '1' ?  stop : ky" />
            </a>
            <a>{{city.createTime}}</a>
            <a @click="deleteShow">删除</a> 
           
          </el-checkbox>
           </div>
          <p>
            <el-button v-for="i in 5" :key="i" type="text" ></el-button>
          </p>
        </el-checkbox-group>
      </ul>
    </div>
    <transition
      name="slide-fade"
      enter-active-class=" animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div id="popup" v-if="showPopup">
        <div class="hint">
          <img src="../../../assets/img/card.png" alt /> 确认删除所选项目吗？
          <span>x</span>
        </div>
        <div class="buttons">
          <a @click="deleteInfo()">确定</a>
          <a @click="cancelSelect()">取消</a>
        </div>
      </div>
    </transition>
    <transition
      name="slide-fade"
      enter-active-class=" animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div id="shadow" v-if="showShadow"></div>
    </transition>
  </div>
</template>

<script>
import Axios from "axios";
import ky from "../../../assets/img/ky.png";
import stop from "../../../assets/img/stop.png";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: "",
      isIndeterminate: false,
      showPopup: false,
      showShadow: false,
      ky: ky,
      stop: stop,
      deleteId:'',
      deleteAllId:"",
      list: [
        { value: "机器ID" },
        { value: "用户名" },
        { value: "真实姓名" },
        { value: "手机号码" },
        { value: "职位" },
        { value: "工作单位" },
        { value: "用户设备" },
        { value: "账号状态" },
        { value: "注册时间" },
        { value: "操作项" }
      ]
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    showUserInfo() {
      Axios.get("http://192.168.1.237:7523/getLanOuUserInfo", {
        params: {
          pageNum: 1,
          pageSize: 5
        }
      }).then(res => {
        this.cities = res.data.data.list;
        console.log(this.cities);
        for (var i = 0; i < this.cities.length; i++) {
          this.cities[i].createTime = this.cities[i].createTime.substring(0,10)
          
        }
      });
    },
    // 禁用
    forbidden(){
          Axios.get("http://192.168.1.237:7523/updateByLanOuUserState",{
            params:{
             lanOuUserStateVo	: {
                "did":"16",
                "id":"6",
                "isEnabled":"1",
                "userId":"1124"
              }
            }
          }).then(res=>{
             console.log(res)
          })
    },
    serachAction() {
      console.log("搜索");
    },
    deleteShow() {
      this.showPopup = !this.showPopup;
      this.showShadow = !this.showShadow;
    },
    checkbox(city){
          this.deleteId = city.id
          console.log(this.deleteId)  //3
     },
    // 删除单个用户信息
    deleteInfo() {
      console.log("确定删除");
      this.showPopup = false;
      this.showShadow = false;
      Axios.delete("http://192.168.1.237:7523/deleteLanOuUser",{
        params:{
          id: this.deleteId
        }
      }).then(res=>{
           this.showUserInfo()
      })
    },
    // 取消删除
    cancelSelect() {
      console.log("取消删除");
      this.showPopup = false;
      this.showShadow = false;
    },
    // 删除所有用户信息
    RemoveAll(){
      for (var i = 0; i < this.cities.length; i++) {
          this.deleteAllId = this.cities[i].id 
           console.log(this.deleteAllId)
        }
          console.log("删除所有用户信息")
         
    }
  },
  created() {
     this.showUserInfo();
  },
};
</script>

<style lang="scss" >
#user {
  padding: 8px 24px 0 24px;
  box-sizing: border-box;
  #title {
    width: 293px;
    height: 22px;
    position: absolute;
    top: 16px;
    p {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #999999;
      a {
        font-size: 16px;
        color: #3999f9;
      }
    }
  }
  .userBox {
    // width: 1100px;
    width: 100%;
    height: 594px;
    border: 1px solid #cccccc;
    // margin: 0 24px;
    .Top {
      height: 80px;
      background: #eeeeee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      box-sizing: border-box;

      p {
        float: left;
        width: 96px;
        height: 40px;
        line-height: 36px;
        text-align: center;
        font-size: 16px;
        color: #ffffff;
        cursor: pointer;
        img {
          width: 25px;
          height: 25px;
          position: relative;
          top: 8px;
          left: -8px;
        }
      }
      p:nth-child(1) {
        background: #28ce42;
        border-radius: 3px;
        border-radius: 3px;
        margin-right: 16px;
      }
      p:nth-child(2) {
        background: #ffc130;
        border-radius: 3px;
        border-radius: 3px;
        margin-right: 16px;
      }
      p:nth-child(3) {
        background: #ff6259;
        border-radius: 3px;
        border-radius: 3px;
      }
      .inp {
        position: relative;
        input {
          width: 386px;
          height: 44px;
          border: 1px solid #cccccc;
          border-radius: 5px;
          background: #ffffff;
          font-size: 14px;
          color: #999999;
          padding: 16px 55px 16px 20px;
          box-sizing: border-box;
        }
        img {
          width: 26px;
          height: 26px;
          position: absolute;
          right: 0;
          top: 10px;
          right: 25px;
          cursor: pointer;
        }
      }
    }
    .navigation {
      height: 87.5px;
      border-bottom: 1px solid #cccccc;
      line-height: 87.5px;
      box-sizing: border-box;
      display: flex;
      padding-left: 12px;
      box-sizing: border-box;

      .box-nav {
        // border: 1px saddlebrown solid;
        width: 100%;
        display: flex;
        a {
          width: 10%;

          text-align: center;
          white-space: normal;
          height: 100%;
        }
        a:nth-child(7) {
          width: 170px;
        }
      }

      .el-checkbox {
        margin-right: 0;

        .el-checkbox__input {
          .el-checkbox__inner {
            width: 18px;
            height: 18px;
          }
          .el-checkbox__inner::after {
            height: 10px;
            left: 6px;
            top: 1px;
            width: 4px;
          }
        }
      }
      a {
        font-size: 16px;
        color: #333333;
        font-weight: 600;
      }
    }
  }
  .table {
    .el-checkbox-group {
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      box-sizing: border-box;
      overflow: hidden;
      // border: 1px solid green;
      position: relative;
      p {
        // border: 1px solid royalblue;
        width: 100%;
        height: 89%;
        position: absolute;
        left: 1%;
        padding-top: 16px;
       
        .el-button {
          display: block;
          position: relative;
          right: 0;
          width: 3%;
          height: 20px;
          // border: 1px solid forestgreen;
          margin-bottom: 42px;
          left: 92.8%;
          cursor: pointer;
          opacity: 0;
           display: none;
        }
        .el-button:first-child {
          margin-left: 10px;
        }
      }
      .el-checkbox {
        display: block;
        margin-right: 0;
        height: 50px;
        margin-bottom: 20px;
        margin-left: 12px;
        width: 100%;
        display: flex;
        flex: 1;
        box-sizing: border-box;
        float: left;
        // border: 1px solid red;
        .el-checkbox__inner {
          width: 18px;
          height: 18px;
          display: block;
          float: left;
          position: relative;
          top: 16px;
          //  background: #D8D8D8;
          outline: none;
        }
        .el-checkbox__inner::after {
          height: 10px;
          left: 6px;
          top: 1px;
          width: 4px;
          //  color: red;
        }
      }
      .el-checkbox__label {
        height: 100%;
        line-height: 50px;
        padding: 0;
        display: flex;
        flex: 1;
        a {
          display: block;
          width: 10%;
          white-space: normal;
          height: 100%;
          line-height: 50px;
          font-size: 16px;
          text-align: center;
          // border: 1px solid red;
          
          img {
            position: relative;
            top: 8px;
          }
        }
        a:nth-child(5) {
          padding:0 4px;
        }
        a:nth-child(6) {
          width: 130px;
          height: 52px;
          line-height: normal;
          text-align: initial;
          padding:0 6px;
          box-sizing: border-box;
          display: table;
             div{
                 vertical-align: middle;
                 display: table-cell;
                 text-align: center;
                 width: 100%;
             }
        }
        a:nth-child(7) {
          width: 170px;
        }
        a:nth-child(10) {
          text-decoration: underline;
          color: #f64330;
          z-index: 3;
          cursor: pointer;
         
            span{
                display: block;
                border: 1px solid blue;
               
            }
          // border: 1px solid red;
        }
      }
    }
  }
  #popup {
    width: 430px;
    height: 170px;
    position: absolute;
    background: #ffffff;
    left: 0;
    right: 0;
    top: -150px;
    bottom: 0;
    margin: auto;
    padding-top: 24px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    z-index: 6;
    .hint {
      font-size: 16px;
      width: 100%;
      height: 29px;
      line-height: 29px;
      color: #333333;
      span {
        position: relative;
        left: 180px;
        font-size: 18px;
      }
      img {
        width: 25px;
        height: 25px;
        margin: 0 4px 0 20px;
        position: relative;
        top: 7px;
      }
    }
    .buttons {
      width: 100%;
      height: 35px;
      position: relative;
      top: 64px;
      padding-left: 60%;
      a {
        display: inline-block;
        width: 55px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        font-size: 16px;
        text-align: center;
      }
      a:nth-child(1) {
        background: #3a9ef4;
        margin-right: 10px;
        color: #ffffff;
      }
      a:nth-child(2) {
        border: 1px solid #cccccc;
      }
    }
  }
  #shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 5;
  }
}
</style>

