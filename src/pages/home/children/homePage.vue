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
          <div class="userInfo">
                
          </div>
          <div class="question">
               问题
          </div>
     </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #HomePage{
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
        .equipMent{
              width: 705px;
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
                    border: 1px solid blue;
                    left: 24px;
                    font-size: 26px;
                    color: #333;
                    font-weight: 400;
                    padding-left: 24px;
                    box-sizing: border-box;
               }
        }
        .userInfo{
             float: left;
             width: 598px;
             height: 402px;
             border-bottom: 24px solid #f7f7f7;
              
        }
        .question{
             width: 598px;
             height: 402px;
             float: left;
        } 
  }
</style>
