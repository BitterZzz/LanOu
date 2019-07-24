<template>
    <div id="addPage">
        <div id="title">
               <p>
                    您所在的位置 : 账号管理 > 账号列表 >
                    <a>新增账户</a>
               </p>
          </div>
        <div class="toBack">
            <div class="goHome" >
                <img @click="backHome()" src="../../assets/img/back.png" alt="">
                <span>返回列表</span>
            </div>
        </div>
        <div class="import">
             <ul class="userPassword">
                  <li>
                      <i>*</i><span>用户名 :</span>
                      <input type="text" id="username" name="username">
                  </li>
                  <li>
                      <i>*</i><span>密码 :</span>
                      <input type="password" id="password" name="password"  placeholder="密码为8-16位的字母+数字组成">
                  </li>
             </ul>
             <ul class="userPassword">
                  <li>
                      <span class="upleft">手机 :</span>
                      <input type="text" id="phone" name="phone" >
                  </li>
                  <li>
                      <span>邮箱 :</span>
                      <input type="email" name="email" id="email">
                  </li>
             </ul>
              <ul class="userPassword">
                  <li>
                      <span class="upleft">角色 :</span>
                      <input type="text" id="role" name="role">
                  </li>
                  <li>
                      <span>部门 :</span>
                      <input type="text" name="section" id="section" placeholder="">
                  </li>
             </ul>
        </div>
        <div class="alt">
            <span> 带 * 号为必填</span>
        </div>
        <div class="restrict">
             <h2>基本权限：</h2>
             <div class="choice">
                    <div v-for="item in check" :key="item.id">
                        <input type="checkbox" name="" id="" @click="robotShow()"><span>{{item.value}}</span>
                    </div>
             </div>
        </div>
        <div class="robot" v-if="showRobot">
            <h2>指定查看机器：</h2>
            <div>
                 <button type="submit" class="submit">全部机器</button><br/>
                 <input type="text" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');" placeholder="请输入机器ID">
                 <span>+ 添加</span>
            </div>
        </div>
        <div class="buttom">
              <button type="submit" @click="submitAction()">
              <img src='../../assets/img/root.png' alt="" srcset="">
                  新增提交
              </button>
        </div>
    </div>
</template>

<script>
export default {
  name:'addPage',
  data(){
    return{
        check:[
            {id:1,value:"查看水质曲线"},
            {id:2,value:"查看用水曲线"},
            {id:3,value:"查看滤芯寿命"},
            {id:4,value:"查看设备状态"},
            {id:5,value:"查看安装信息"},
            {id:6,value:"查看工作日志"},
            {id:7,value:"设置机器参数"},
            {id:8,value:"设置机器安装信息"},
            {id:9,value:"查看角色管理"},
            {id:10,value:"查看用户管理 "},
            {id:11,value:"查看后台操作日志"},
        ],
        robotId:[],
        showRobot:false,
    }
  },
  methods:{

     robotShow(){
         let id = this.check.id
        console.log(id)
     },
     backHome(){
         this.$emit('sonPage')
     },
     submitAction(){
           let username = document.querySelector("#username")
           let password = document.querySelector("#password")
           
         if(username.value === "" || password.value ===""){
              this.$message({
                  message:"账号或密码不能为空",
                  type:"warninig"
              })
              
         }
     },
     importInfo(){
         
           
     }
  },
  mounted(){
     
  },
  created(){
     this.importInfo()
  }
}
</script>

<style lang="scss" scoped>
    #addPage{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 8px 24px 0;
        box-sizing: border-box;
        background: #ffffff;
        z-index: 10;
         #title{
             width: 400px;
             height: 22px;
             background: #f7f7f7;
             position: absolute;
             
             top: -38px;
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
        .toBack{
            width: 100%;
            height:54px;
            background: #EEEEEE;
            margin-bottom: 32px;
           
               .goHome{
                    display: flex;
                    align-items: center;
                    color: #333;
                    font-size: 16px;
                    font-weight: 400;
                    padding-left: 18px;
                    padding-top: 5px;
                    box-sizing: border-box;
                   
                    img{
                        width: 43px;
                        height: 43px;
                        margin-right: 16px;
                         cursor: pointer;
                    }
               }
        }
        .import{
            .userPassword{
                 display: flex;
                 margin-bottom: 24px;
                 li{
                      width: 50%;
                      height: 50px;
                      padding-left: 8px;
                      box-sizing: border-box;
                      position: relative;
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                        i{
                            position: absolute;
                            color: #FE3824 ;
                            font-size: 18px;
                            left: 48px;
                            padding-top: 5px;
                        }
                        span{
                            font-size: 18px;
                            color: #333333;
                            font-weight: 500;
                            font-weight: block;
                            
                        }
                        .upleft{
                            margin-left: 16px;
                        }
                        input{
                            width: 390px;
                            height: 100%;
                            border: 1px solid #cccccc;
                            border-radius: 5px;
                            margin-left: -50px;
                            padding-left: 16px;
                            color: #999;
                        }
                 }
            }
        } 
        .alt{
            width: 100%;
            height: 28px;
            line-height: 28px;
            font-size: 16px;
            color: #FE3824;
            padding-left: 40px;
            box-sizing: border-box;
            margin-bottom: 41px;
        }
        .restrict{
             display: flex;
             margin-bottom: 26px;
            h2{
                font-size: 16px;
                color: #333333;
                margin:0 40px 0 22px;
            }
            .choice{
                position: relative;
                top: -1px;
                width: 908px;
                // border: 1px solid red;
                 
                  div{
                    //    border: 1px solid blue;
                       line-height: 28px;
                       font-size: 16px;
                       float: left;
                       display: flex;
                       margin-bottom: 11px;
                       margin-right: 24px;
                       
                        input{
                           width: 16px;
                           height: 16px;
                           position: relative;
                           top: 6px;
                           border-radius: 5px;
                           margin-right: 8px;
                        }
                        span{
                            display: inline-block;
                            min-width: 120px;
                            color: #333333;
                            font-size: 16px;
                        }
                  }
                  div:nth-child(8){
                      margin-right: 48px;
                  }
            }
        }
        .robot{
            display: flex;
            padding-left:22px;
              h2{
                  color: #333;
                  font-size: 16px;
                  margin-right: 8px;
                  position: relative;
                  top: 7px;
              }
              div{
                  .submit{
                      width: 150px;
                      height: 40px;
                      line-height: 40px;
                      font-size: 16px;
                      color: #3999F9;
                      background: #ECF9FF;
                      border: none;
                      outline: none;
                      cursor: pointer;
                      margin-bottom: 16px;
                    }
                  input{
                      width: 390px;
                      height: 50px;
                      padding-left: 20px;
                      box-sizing: border-box;
                      font-size: 14px;
                      color: #999999;
                      border: 1px solid #CCCCCC;
                      border-radius: 5px;
                      margin-right: 24px;
                    }
                span{
                    display: inline-block;
                    width: 90px;
                    height: 50px;
                    line-height: 50px;
                    font-size: 16px;
                    font-weight: 400;
                    text-align: center;
                    color: #333;
                    border: 1px solid #CCCCCC;
                    border-radius: 5px;
                    cursor: pointer;
                }
                  
              }
        }
        .buttom{
            width: 95%;
            height: 60px;
            position: absolute;
            bottom: 48px;
            text-align: center;
              button{
                     width: 180px;
                     height: 60px;
                     background: #3A9EF4;
                     color: #ffffff;
                     outline: none;
                     border: none;
                     cursor: pointer;
                     border-radius: 3px;
                     font-size: 20px;
                     padding-bottom: 10px;
                     box-sizing: border-box;
                       img{
                          width: 30px;
                          height: 30px;
                          position: relative;
                          left: -4px;
                          top: 8px;
                       }
              }
        }
    }
</style>
