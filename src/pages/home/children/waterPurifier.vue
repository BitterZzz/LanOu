<template>
  <div id="water">
    <div id="header">
      <div class="header-title">
        <span>您所在的位置 :</span>
        <span>净水机管理</span> >
        <span class="span-thrid">净水机列表</span>
      </div>
    </div>
    <div id="content">
      <div id="search-box">
        <div class="search">
          <div class="ckeck">
            <span>机器Id</span>
            <i class="el-icon-caret-bottom icon-bottom"></i>
          </div>
          <input type="text" class="search-value" placeholder="请输入内容" />
          <button type="submit" class="search-btn">搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#water {
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
    width: 1120px;
    margin: 0 auto;
    #search-box {
      height: 60px;
      
    }
  }
}
</style>
