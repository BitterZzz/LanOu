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
           系统菜单
       </div>
       <div class="main">
           <div class="content">
               系统内容
           </div>
       </div>
    </div>
</template>

<script>
export default {
   name:'home'
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
                .righ{
                   
                }

            }
     }
     .nav{
         width: 230px;
         height: 912px;
         background: burlywood;
         color: #fff;
         float: left;
 
     }
     .main{
         width: 1210px;
         height: 912px;
         float: left;
         background: #F7F7F7;
         color: #2488DD;
      
 
         padding: 54px 31px 30px 31px;
         box-sizing: border-box;
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

