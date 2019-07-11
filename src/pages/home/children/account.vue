<template>
  <div id="account">
    <div id="header">
      <div class="header-title">
        <span>您所在的位置 :</span>
        <span>账号管理</span> >
        <span class="span-thrid">账号列表</span>
      </div>
    </div>
    <div id="content">
      <div id="content-header">
        <div class="btn-box">
          <div class="btn-add">
            <img src="../../../assets/img/add.png" alt class="addImg" />
            <span>新增</span>
          </div>
          <div class="btn-delet">
            <img src="../../../assets/img/delet.png" alt class="deletImg" />
            <span>删除</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account"
};
</script>

<style lang="scss" scoped>
#account {
  overflow: hidden;
  #header {
    .header-title {
      color: #999999;
      position: absolute;
      top: 16px;
      span {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #999999;
        letter-spacing: 0;
      }
      .span-thrid {
        color: #3999f9;
      }
    }
  }
  #content {
    width: 1100px;
    margin: 0 auto;
    margin-top: 8px;
    #content-header {
      height: 80px;
      background: #eeeeee;
      overflow: hidden;
      .btn-box {
        .btn-add {
          display: inline-block;
          width: 108px;
          height: 46px;
          background: #3999f9;
          padding-top: 8px;
          margin-left: 16px;
          margin-top: 17px;
          box-sizing: border-box;
          overflow: hidden;

          .addImg {
            width: 30px;
            height: 30px;
            border: 0;
            margin-left: 14px;
            margin-top: -2px;
            vertical-align: middle;
          }
          span {
            display: inline-block;
            color: #ffffff;
            font-size: 20px;
          }
        }
        .btn-delet {
          display: inline-block;
          width: 108px;
          height: 46px;
          background-color: #ff6259;
          overflow: hidden;
          padding-top: 8px;
          margin-left: 16px;
          margin-top: 17px;
          box-sizing: border-box;
          span {
            display: inline-block;
            color: #ffffff;
            font-size: 20px;
          }
          .deletImg {
            width: 30px;
            height: 30px;
            margin-left: 14px;
            margin-top: -2px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
