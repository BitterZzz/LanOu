<template>
  <div id="user">
    <div id="title">
      <p>
        您所在的位置 : 账号管理 >
        <a>账号列表</a>
      </p>
    </div>
    <div class="userBox">
      <ul class="top">
        <li>
          
          <p @click="newAdd()">
            <img src="../../../assets/img/start.png" alt />新增
          </p>
          
          <p>
            <img src="../../../assets/img/forbid.png" alt />删除
          </p>
        </li>
      </ul>
      <ul class="navigation">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        ></el-checkbox>
        <div class="nav-box">
        <a v-for=" item in list" :key="item.id">{{item.value}}</a>
        </div>
      </ul>
      
      <ul class="nav-table">
        <el-checkbox-group
          v-model="checkedCities"

          @change="handleCheckedCitiesChange"
        >
            <div v-for="city in cities" :key="city.id" @click="checkbox(city)">
                <el-checkbox :label="city" :id=" '_'+ city.id">
                  <a>{{city.userName}}</a>
                  <a>{{city.role}}</a>
                  <a>{{city.authorityName}}</a>
                  <a>
                    <i>{{city.description}}</i>
                  </a>
                  <a>{{city.createTime}}</a>
                  <a @click="addPushAction()">编辑</a>
                  <a  @click="deleteAction()">删除</a>
                </el-checkbox>
            </div>
            <p></p>
        </el-checkbox-group>
      </ul>
    </div>
      <addPage class="addPage" ></addPage>
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
    <addPage v-if="showPage" @sonPage="accountPage"/>
    <sorter/>
  </div>
</template>

<script>
import ky from '../../../assets/img/ky.png'
import stop from '../../../assets/img/ky.png'
import addPage from '../../addPage/addPage.vue'
import Axios from 'axios';
import sorter from '../../../components/sorter'
export default {
  components:{
      addPage,
      sorter,
  },
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: "",
      showPopup: false,
      showShadow: false,
      isIndeterminate: false,
      deleteId:'',
      ky: ky,
      stop: stop,
      showPage:false,
      list: [
        { value: "用户名" },
        { value: "角色名称" },
        { value: "基本权限" },
        { value: "操作权限" },
        { value: "创建时间" },
        { value: "操作项" },
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
    showAccountInfo(){
        Axios.get("http://192.168.1.237:7523/getLanOuAccountInfo",{
          params:{
              pageNum :1,
              pageSize : 5,
          }
        }).then(res=>{
           this.cities = res.data.data.list
           for(var i = 0; i<this.cities.length; i++){
             this.cities[i].createTime = this.cities[i].createTime.substring(0,10)
           }
            console.log(this.cities)
        })
    },
    addPushAction(){
          console.log("编辑")
    },
    deleteAction(){
      console.log("删除")
      this.showPopup = !this.showPopup;
      this.showShadow = !this.showShadow;
    },
    checkbox(city){
          this.deleteId = city.id
          console.log(this.deleteId)  //3
     },
    // 删除单个账户信息
    deleteInfo() {
      console.log("确定删除");
      this.showPopup = false;
      this.showShadow = false;
      Axios.delete("http://192.168.1.237:7523/deleteLanOuAccountInfo",{
        params:{
          id: this.deleteId
        }
      }).then(res=>{
        
      // let dom = document.querySelector('#_'+this.deleteId)
      // console.log(dom)
      // dom.style.display ="none"
      this.showAccountInfo();
      })     
    },
    // 取消删除
    cancelSelect() {
      console.log("取消删除");
      this.showPopup = false;
      this.showShadow = false;
    },
    // 新增页面
    newAdd(){
       this.showPage = true
    },
    // 页面传值 显示子页面
    accountPage(){
       this.showPage = false
    }
  },
  created(){
     this.showAccountInfo()
  }
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
    top: -38px;
    left: -4px;
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
    width: 100%;
    height: 594px;
    border: 1px solid #cccccc;
    .top {
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
        line-height: 40px;
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
        background: #3A9EF4;
        border-radius: 3px;
        border-radius: 3px;
        margin-right: 16px;
      }
      p:nth-child(2) {
        background: #FF6259;
        border-radius: 3px;
        border-radius: 3px;
        margin-right: 16px;
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

      .nav-box{
          width:100%;
          display: flex;
          a{
            width: 16.6%;
            text-align: center;
            white-space:normal;
            height: 100%; 
            // border: 1px solid red;
          }
          a:nth-child(4) {
               margin: 0 30px;
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
  .nav-table{
      .el-checkbox-group{
          // display: flex;
          // flex-direction: column;
          padding-top: 20px;
          box-sizing: border-box;
          overflow: hidden;
          // border: 1px solid green;
          position: relative;
           p{
               // border: 1px solid royalblue;
                width: 100%;
                height: 89%;
                position: absolute;
                left: 1%;
                padding-top: 16px;
           }
          .el-checkbox{
              display: block;
              margin-right: 0;
              height: 50px;
              margin-bottom:20px;
              margin-left: 12px;
              width: 100%;
              display: flex;
              flex: 1;
              box-sizing: border-box;
              float: left;
              overflow: hidden;
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
          .el-checkbox__label{
            height: 100%;
            line-height: 50px;
            padding: 0;
            display: flex;
            flex: 1;
              a{
                display: block;
                width: 16.6%;
                white-space:normal;
                height: 100%;
                line-height: 50px;
                font-size: 16px;
                text-align: center;
                // border: 1px solid green;
                 img{
                   position: relative;
                   top: 8px;
                 }
              }
                a:nth-child(3){
                  padding: 0 6px;
                  box-sizing: border-box;
                }
                a:nth-child(4){
                  //  margin: 0 20px;
                   width: 324px;
                   height: 50px;
                   line-height: normal;
                   text-align: initial;
                   padding-top:4px;
                   box-sizing: border-box;
                   display: table;
                   padding: 0 6px;
                      i{
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        padding-top:5px;
                        box-sizing: border-box;
                        vertical-align: middle;
                        display: table-cell;
                        text-align: center;
                        width: 100%;
                      }
               }
               a:nth-child(5){
                //  padding-right: 6%;
                 box-sizing: border-box;
               }
               a:nth-child(6){
                    position: relative;
                    top: 8px;
                    height: 30px;
                    line-height: 30px;
                    margin-left: 5%;
                    margin-right: 5px;
                    width: 3%;
                    z-index: 3;
                    text-decoration: underline;
                    color: #176FFF;
               }
               a:last-child{
                   position: relative;
                   top: 8px;
                   height: 30px;
                   line-height: 30px;
                   width: 3%;
                   z-index: 3;
                   margin-right: 5%;
                   text-decoration: underline;
                   color:#F64330;
               }
          }
      }
    }
   .addPage{
     position: absolute;
     top: 54px;
     left: 32px;
     width: 95.5%;
     background: #ffffff;
     padding: 8px 24px 0 24px;
     box-sizing: border-box;
     height: 828px;
     z-index: 3;
     display: none
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

