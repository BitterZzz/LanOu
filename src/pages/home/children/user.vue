<template>
    <div id="user">
        <div id="title">
            <p>您所在的位置 : 用户管理 > <a>用户列表</a></p>
        </div>
        <div class="userBox">
            <ul class="top">
                 
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #user{
      padding-top:8px;
      box-sizing: border-box;
      #title{
          width: 293px;
          height: 22px;
          position: absolute;
          top: 16px;
            p{
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #999999;
                 a{
                     font-size: 16px;
                     color: #3999F9;
                 }
            }
      }
      .userBox{
          width: 1100px;
          height: 594px;
          border: 1px solid #CCCCCC;
          margin: 0 24px;
      }
  }
</style>

