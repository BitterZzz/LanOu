<template>
     <div id="HomePage">
          <div id="title">
               <p>
                    您所在的位置 : 首页 >
                    <a>首页</a>
               </p>
          </div>
          <div class="equipMent">
                <div class="on-line">
                      <div class="on">
                           <img src="../../../assets/img/on.png" alt="">
                           <p>
                               <i>39</i>
                               <span>在线设备</span>
                           </p>
                      </div>
                      <div class="off">
                           <img src="../../../assets/img/off.png" alt="">
                           <p>
                               <i>5</i>
                               <span>在线设备</span>
                           </p>
                      </div>
                </div>
                <div class="info-header">
                     净水机分布
                </div>
          </div>
          <div class="info">
               <div class="userInfo">
                    <div class="upkeep">
                         <h1>保养信息</h1>
                         <ul class="upInfo">
                              <li>
                                   <img src="../../../assets/img/untreated.png" alt="" srcset="">
                                   <a>未处理</a>
                                   <span>(2)</span>
                              </li>
                              <li>
                                   <img src="../../../assets/img/dispose.png" alt="" srcset="">
                                   <img src="" alt="" srcset="">
                                   <a>处理中</a>
                                   <span>(2)</span>
                              </li>
                              <li @click="faultShowAction()">
                              <img src="../../../assets/img/more.png" alt="" srcset="">
                              </li>  
                         </ul>
                    </div>
                    <div class="upTable">
                    <ul>
                         <li>
                              <a>状态</a>
                              <a>上报时间</a>
                              <a>设备ID</a>
                              <a>保养类型</a>
                         </li>
                         <li v-for="info in 5" :key="info.id">
                              <a>
                                   <img :src="true ? redAlarm : greenAlarm" alt="" srcset="">
                              </a>
                              <a>2019-03-19</a>
                              <a>SZ191-001</a>
                              <a>再生盐更换</a>
                         </li>
                         
                    </ul>           
                    </div>
               </div>
               <div class="question">
                    <div class="upkeep">
                         <h1>故障信息</h1>
                         <ul class="upInfo">
                              <li>
                                   <img src="../../../assets/img/untreated.png" alt="" srcset="">
                                   <a>未处理</a>
                                   <span>(2)</span>
                              </li>
                              <li>
                                   <img src="../../../assets/img/dispose.png" alt="" srcset="">
                                   <img src="" alt="" srcset="">
                                   <a>处理中</a>
                                   <span>(2)</span>
                              </li>
                              <li @click="mainShowAction()">
                              <img src="../../../assets/img/more.png" alt="" srcset="">
                              </li>  
                         </ul>
                    </div>
                    <div class="upTable">
                    <ul>
                         <li>
                              <a>状态</a>
                              <a>上报时间</a>
                              <a>设备ID</a>
                              <a>保养类型</a>
                         </li>
                         <li v-for="info in 5" :key="info.id">
                              <a>
                                   <img :src="true ? redAlarm : greenAlarm" alt="" srcset="">
                              </a>
                              <a>2019-03-19</a>
                              <a>SZ191-001</a>
                              <a>再生盐更换</a>
                         </li>
                         
                    </ul>           
                    </div>
               </div>
              
          </div>
           <fault v-if="faultShow"  @faultHidden="hidden"/>
           <maintain v-if="maintainShow" @mainHidden="mainHidden"/>
     </div>
</template>

<script>
import fault from  '../../fault/fault'
import maintain from '../../maintain/maintain'
import redAlarm from '../../../assets/img/untreated.png'
import greenAlarm from '../../../assets/img/dispose.png'
export default {
        components:{
               fault,
               maintain,
         },
        data(){
             return{
                  redAlarm:redAlarm,
                  greenAlarm:greenAlarm,
                  faultShow:false,
                  maintainShow:false,
             }
        },
        methods:{
             faultShowAction(){
                   this.maintainShow = true                  
                 
             },
             mainShowAction(){
                   this.faultShow = true
             },
             hidden(){
                  this.faultShow = false
             },
             mainHidden(){
                  this.maintainShow = false
             }
             
        }
}
</script>

<style lang="scss" scoped>
  #HomePage{
       width: 100%;
       display: flex;
        #title {
          width: 330px;
          height: 22px;
          left: -4px;
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
        .equipMent{
              width: 50%;
              height: 828px;
              float: left;
              border-right: 16px solid #f7f7f7;
                 .on-line{
                       width: 705px;
                       height: 121px;
                       display: flex;

                         .on{
                              width: 50%;
                              height: 100%;
                              position: relative;
                              padding-top: 50px;
                              box-sizing: border-box;
                              img{
                                   width: 62px;
                                   height: 62px;
                                   position: relative;
                                   top: 5px;
                                   margin-right: 20px;
                                   margin-left: 40px;
                              }
                              p{   
                                   display: inline-block;
                                   color: #333;
                                   font-size: 20px;
                                     i{
                                          display: block;
                                          font-size: 24px;
                                     }
                              }
                         }
                         .off{
                              width: 50%;
                              height: 100%;
                              position: relative;
                              padding-top: 50px;
                              box-sizing: border-box;
                              img{
                                   width: 62px;
                                   height: 62px;
                                   position: relative;
                                   top: 5px;
                                   margin-right: 20px;
                                   margin-left: 40px;
                              }
                              p{   
                                   display: inline-block;
                                   color: #333;
                                   font-size: 20px;
                                     i{
                                          display: block;
                                          font-size: 24px;
                                     }
                              }
                         }
                 }
                 .info-header{
                    width: 100%;
                    height: 142px;
                    line-height: 142px;
                  
                    left: 24px;
                    font-size: 26px;
                    color: #333;
                    font-weight: 400;
                    padding-left: 24px;
                    box-sizing: border-box;
               }
        }
        .info{
             width: 100%;
             .userInfo{
               width: 100%;
               height: 414px;
               border-bottom: 12px solid #f7f7f7;
               padding: 8px 16px 0 16px;
               box-sizing: border-box;
               .upkeep{
                         display: flex;
                         justify-content: space-between;
                         height: 30px;
                         margin-bottom: 10px;
                    
                         h1{
                              font-size: 20px;
                              color: #333333;
                              font-weight: 400;
                         }
                         .upInfo{
                              display: flex;
                              justify-content: space-between;
                              position: relative;
                              left: 10px;
                              width: 320px;
                              li:nth-child(3){
                                   cursor: pointer;
                              }
                              li{
                                  
                                   a{
                                        display: inline-block;
                                        font-size: 16px;
                                        color: #333;
                                        position: relative;
                                        top:-10px;
                                        margin-right: 8px;
                                   }
                                   span{
                                        position: relative;
                                        top:-10px;
                                        font-size: 16px;
                                        color: #333;
                                   }
                              }
                         }
               }  
              .upTable{
                         width: 100%;
                         height: 330px;
                         border: 1px solid #CCCCCC;
                         border-bottom: none;
                             li:nth-child(1){
                                  a{
                                       font-size: 16px;
                                        color: #333;
                                        font-weight: 600;
                                  }
                             }
                              li{
                                   width: 100%;
                                   height: 54px;
                                   border-bottom: 1px solid #cccccc;
                                   a{
                                        width: 27%;
                                        display: inline-block;
                                        height: 54px;
                                        line-height: 54px;
                                        border-right: 1px solid #cccccc;
                                        text-align: center;
                                        font-weight: 500;
                                        font-size: 14px;
                                        color: #333;
                                         img{
                                              position: relative;
                                              top: 10px;
                                             
                                         }
                                        
                                   }
                                   a:nth-child(1){
                                        width: 16%;
                                       
                                   }
                                   a:nth-child(4){
                                        border-right: none
                                   }
                              }
                    }
                    
               }
             .question{
                    width: 100%;
                    height: 414px;
                    float: right;
                    padding: 8px 16px 0 16px;
                    box-sizing: border-box;
                    border-top: 12px solid #f7f7f7;
                       .upkeep{
                         display: flex;
                         justify-content: space-between;
                         height: 30px;
                         margin-bottom: 10px;
                    
                         h1{
                              font-size: 20px;
                              color: #333333;
                              font-weight: 400;

                         }
                         .upInfo{
                              display: flex;
                              justify-content: space-between;
                              position: relative;
                              left: 10px;
                              width: 320px;
                              li:nth-child(3){
                                   cursor: pointer;
                              }
                              li{
                                   
                                   a{
                                        display: inline-block;
                                        font-size: 16px;
                                        color: #333;
                                        position: relative;
                                        top:-10px;
                                        margin-right: 8px;
                                   }
                                   span{
                                        position: relative;
                                        top:-10px;
                                        font-size: 16px;
                                        color: #333;
                                   }
                              }
                         }
               }  
              .upTable{
                         width: 100%;
                         height: 330px;
                         border: 1px solid #CCCCCC;
                         border-bottom: none;
                             li:nth-child(1){
                                  a{
                                       font-size: 16px;
                                        color: #333;
                                        font-weight: 600;
                                  }
                             }
                              li{
                                   width: 100%;
                                   height: 54px;
                                   border-bottom: 1px solid #cccccc;
                                   a{
                                        width: 27%;
                                        display: inline-block;
                                        height: 54px;
                                        line-height: 54px;
                                        border-right: 1px solid #cccccc;
                                        text-align: center;
                                        font-weight: 500;
                                        font-size: 14px;
                                        color: #333;
                                         img{
                                              position: relative;
                                              top: 10px;
                                             
                                         }
                                        
                                   }
                                   a:nth-child(1){
                                        width: 16%;
                                       
                                   }
                                   a:nth-child(4){
                                        border-right: none
                                   }
                              }
                      }
               } 
        }
       
  }
</style>
