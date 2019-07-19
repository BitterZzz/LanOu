<template>
  <div id="parameter">
    <header id="header" class="clearfix">
      <div class="header-box clearfix">
        <div class="title">
          <img src="../../assets/img/back.png" />
          <span>机器详情</span>
        </div>
        <div class="IdBox">
          <span>ID:</span>
          <span>12345678</span>
        </div>
        <div class="popupBox">
          <span>型号:</span>
          <span>LOSRO-500-S</span>
        </div>
        <div class="save-set clearfix">
          <img src="../../assets/img/save.png"/>
          <span>保存设置</span>
        </div>
      </div>
    </header>
    <section id="main">
      <div class="system-state">
        <div class="state-header">系统状态</div>
        <div class="state-content">
          <div class="content-frist">
            <div class="pressure">
              <div class="pressure-title">取水压力设置</div>
              <div >
                <span>取水压力上线:</span>
                <div class="">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#parameter {
  position: absolute;
  width: 104%;
  height: 1182px;
  border: solid 1px red;
  background: #ffffff;
  left: -156px;
  top: 20px;
  z-index: 10000;
  display: none;
  #header {
    .header-box {
      margin-top: 10px;
      div {
        float: left;
        line-height: 50px;
        font-size: 16px;
        color: #333;
      }
      .title {
        img {
          vertical-align: middle;
          cursor: pointer;
        }
        span {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }
      }
      .IdBox {
        margin-left: 100px;
      }
      .popupBox {
        margin-left: 76px;
      }
      .save-set{
        width: 160px;
        height: 50px;
        background: #3A9EF4;
        float: right;
        margin-right: 50px;
        img{
          vertical-align: middle;
          margin-left: 25px;
        }
        span{
          margin-left: 4px;
        }
      }
    }
  }
  #main{
    width: 100%;
    height: 876px;
    background: #053272;
    margin-top: 7px;
    overflow: hidden;
    .system-state{
      padding: 0 1.3%;
      margin-top: 16px;
      .state-header{
         font-size: 18px;
         font-weight: bold;
         color: #fff;
      }
      .state-content{
        .content-frist{
          .pressure{
            width: 38.9%;

          }
        }
      }
    }
  }
}
</style>


