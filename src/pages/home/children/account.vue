<template>
  <div id="user">
    <div id="title">
      <p>
        您所在的位置 : 用户管理 >
        <a>账号列表</a>
      </p>
    </div>
    <div class="userBox">
      <ul class="top">
        <li>
          
          <p>
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
          @click="tabAction()"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox v-for="city in cities" :label="city" :key="city.id">
            <a>{{city.username}}</a>
            <a>{{city.name}}</a>
            <a>{{city.basic}}</a>
            <a>{{city.operation}}</a>
            <a>{{city.time}}</a>
            <a><span>{{city.redact}}</span><i>{{city.delete}}</i></a>

            
          </el-checkbox>
          <div>
           <p class="add"><span  v-for="add in 5" :key="add" @click="addPushAction()">新增</span></p>
           <p class="delete"><i v-for="i in 5" :key="i" @click="deleteAction()"></i></p>
          </div>
        </el-checkbox-group>
      </ul>
    </div>
      <addPage class="addPage" v-if="pageShow"></addPage>
  </div>
</template>

<script>
import ky from '../../../assets/img/ky.png'
import stop from '../../../assets/img/ky.png'
import addPage from '../../addPage/addPage.vue'
const cityOptions = [
  {
    id:"1",
    username: "diaodong",
    name: "超级管理员",
    basic: "查看所有页面",
    operation:"编辑、发布、预览、保存、删除、推送、还原、添加人员、添加角色、添加权限",
    time:'2019-03-14',
    delete:"删除",
    redact:'编辑',

  },
  {
    id:"2",
    username: "diaodong",
    name: "超级管理员",
    basic: "查看所有页面",
    operation:"编辑、发布、预览、保存、删除、推送、还原、添加人员、添加角色、添加权限",
    time:'2019-03-14',
    delete:"删除",
    redact:'编辑',

  },
 {
    id:"3",
    username: "diaodong",
    name: "超级管理员",
    basic: "查看所有页面",
    operation:"编辑、发布、预览、保存、删除、推送、还原、添加人员、添加角色、添加权限",
    time:'2019-03-14',
    delete:"删除",
    redact:'编辑',

  },
 {
    id:"4",
    username: "diaodong",
    name: "超级管理员",
    basic: "查看所有页面",
    operation:"编辑、发布、预览、保存、删除、推送、还原、添加人员、添加角色、添加权限",
    time:'2019-03-14',
    delete:"删除",
    redact:'编辑',

  },
   {
    id:"5",
    username: "diaodong",
    name: "超级管理员",
    basic: "查看所有页面",
    operation:"编辑、发布、预览、保存、删除、推送、还原、添加人员、添加角色、添加权限",
    time:'2019-03-14',
    delete:"删除",
    redact:'编辑',

  }
];
export default {
  components:{
      addPage,
  },
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,

      isIndeterminate: false,
      ky: ky,
      stop: stop,
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
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    addPushAction(){
            console.log("编辑")
    },
    
    deleteAction(){
      console.log("删除")
    }
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
               margin: 0 60px;
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
          div{
              // border: 1px solid royalblue;
              width: 100%;
              height: 89%;
              position: absolute;
              left: 1%;
              padding-top: 16px;
              top: 16px;
                p{
                  display:inline-block;
                  width: 44px;
                  height: 100%;
                  position: relative;
                  left:88.8%;
                  cursor: pointer;
                  
                     span{
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 20px;
                        margin-bottom: 48px;
                        color: #176FFF;
                        // border: 1px solid blue;
                        
                        }
                     i{
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 20px;
                        margin-bottom: 48px;
                        // border: 1px solid red;
                     }
                     i:nth-child(1){
                       top: 0;
                     }
                     i:nth-child(2){
                       top: 22%;
                     }
                     i:nth-child(3){
                       top: 43%;
                     }
                     i:nth-child(4){
                       top: 64%;
                     }
                     i:nth-child(5){
                       top: 85.5%;
                     }
                     span:nth-child(1){
                       top: 0;
                     }
                     span:nth-child(1){
                       top: 0;
                     }
                     span:nth-child(2){
                       top: 22%;
                     }
                     span:nth-child(3){
                       top: 43%;
                     }
                     span:nth-child(4){
                       top: 64%;
                     }
                     span:nth-child(5){
                       top: 85.5%;
                     }
                     
                     
                } 
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
            
                a:nth-child(4){
                  //  margin: 0 20px;
                   width: 324px;
                   height: 50px;
                   line-height: normal;
                   text-align: left;
                   padding-top: 3px;
                   box-sizing: border-box;
               }
               a:nth-child(6){
                 span{
                   text-decoration:underline;
                   color: #176FFF;
                 }
                 i{
                   text-decoration:underline;
                   color: #F64330;
                 }
               }
               a:last-child{
                   span{
                     margin-right: 16px;
                   }
               }
          }
      }
    }
   .addPage{
     position: absolute;
     top: 54px;
     left: 32px;
     width: 95.5%;
     background: rgb(218, 245, 218);
     padding: 8px 24px 0 24px;
     box-sizing: border-box;
     height: 828px;
     z-index: 3;
     display: none;
   }
  }
</style>

