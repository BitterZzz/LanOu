<template>
    <div id="home" class="container">
      <div class="header">
           <p class="logo">
               <img src="../../assets/img/LOGO.png" alt="" title="蓝鸥">
           </p>
           <h2>广东蓝鸥净水设备管理系统</h2>
           <div class="user">
               <li class="left">
                   <img src="../../assets/img/user.png" alt="" srcset="">
                   <a href="#">欢迎 <span>管理员 !</span></a>
               </li>
               <li class="right">
                   <a href="#">注销</a> |
                   <a href="#">退出管理</a>
               </li>
           </div>
       </div> 
       <div class="nav">
           <el-container style="height: 500px; ">
                <el-aside width="100%" >
                    <el-menu :default-openeds="['1']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-s-unfold"></i>系统菜单</template>
                               
                                    <el-menu-item  
                                    v-for="item in list" 
                                    :key="item.id"
                                    @click="homeAction(item.name)"
                                    >
                                        <router-link :to='item.path'>
                                            <img  :src="isSelect === item.name ? item.require : item.url" alt="item.title">
                                            <a :class="isSelect === item.name ? 'active':''">{{item.name}}</a>
                                        </router-link>
                                    </el-menu-item>
                                
                        </el-submenu>
                    </el-menu>
                </el-aside>
            </el-container>
       </div>
       <div class="main">
           <div class="content">
                 <router-view></router-view>
           </div>
       </div>
    </div>
</template>

<script>
export default {
   name:'home',
   data(){
       return{
               isSelect:"首页",
               list:[
                   {id:1,name:"首页",path:"homePage",url:require("../../assets/img/shouye.png"),require:require("../../assets/img/shouye_1.png")},
                   {id:2,name:"净水器管理",path:"waterPurifier",url:require("../../assets/img/icon1.png"),require:require("../../assets/img/icon2.png")},
                   {id:3,name:"账号管理",path:"account",url:require("../../assets/img/icon3.png"),require:require("../../assets/img/icon4.png")},
                   {id:4,name:"用户管理",path:"user",url:require("../../assets/img/icon5.png"),require:require("../../assets/img/icon6.png")},
                   {id:5,name:"操作日志",path:"operationLog",url:require("../../assets/img/icon7.png"),require:require("../../assets/img/icon8.png")},
               ]
       }
   },
   methods:{
       homeAction(name){
           this.isSelect = name 
           console.log(123)
           
       }
   },
   mounted () { 
       this.isSelect = this.$route.name
   }, 
}
</script>

<style lang="scss" scoped>
 #home{
     position: relative;
    //  margin: auto;
     .header{
         width: 1440px;
         height: 112px;
         background: #2488DD;
         color: #fff;
         padding-top: 22px;
         box-sizing: border-box;
         display: flex;
            .logo{
                width: 130px;
                height: 67px;
                margin-left:30px;
                  img{
                      width: 100%;
                      height: 100%;
                  }
            }
            h2{
                width: 384px;
                height: 45px;
                font-size: 32px;
                color: #FFFFFF;
                margin: 0 460px 0  40px;
                padding-top: 12px;

            }
            .user{
                 width: 338px;
                 padding-top: 20px;
                 color: #FFFFFF;
                 font-size: 18px;
                 display: flex;
                 justify-content: space-between;
                li{
                    display: inline-block;
                    height: 42px;
                    // line-height: 42px;
               
                    padding-top: 2px;
                }
                .left{
                     position: relative;
                     padding-left: 40px;
                   img{
                        width: 28px;
                        height: 28px;
                        position: absolute;
                        top: 0px;
                        left: 0;
                    }
                    a{
                        color: #fff;
                        span{
                            color: #FEFF89
                      } 
                    }
                  }
                .right{
                    a{
                        color: #ffffff;
                    }
                }

            }
     }
     .nav{
         width: 230px;
         height: 912px;
         color: #fff;
         background: #fff;
         float: left;
            img{
                width:22px;
                height: 22px;
                position: absolute;
                left: 25px;
                top: 14px;
                z-index: 4;
            }
            a{
                display: inline-block;
                position: absolute;
                width: 100%;
               
                box-sizing: border-box;
                left: 0;
                padding-left: 70px;
            }
        .active{
            color: #3999F9;
            background: #ECF9FF;
        }
     }
     .main{
         width: 1210px;
         height: 912px;
         float: left;
         background: #F7F7F7;
         color: #2488DD;
         padding: 54px 31px 30px 31px;
         box-sizing: border-box;
         position: relative;
            .content{
                width: 1148px;
                height: 828px;
                background: #fff;
            }
     }
 }
 .container{
    width: 1440px;
    height: 1024px;
    margin: 0 auto;

}

</style>

