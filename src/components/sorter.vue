<template>
  <div class="pagetion">
    <el-pagination
      background
      layout="prev, pager, next,slot, jumper"
      :total="100"
      @size-change="handleSizeChange"
      @current-change="handleCurrent"
    >
      <div class="page-show">
        <span class="nowPage">4</span>
        <i>/</i>
        <span class="totalPage">10</span>
      </div>
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "pagetion",
  methods: {
    handleSizeChange() {
      console.log(1111);
    },
    handleCurrent() {
      console.log(2222);
    }
  }
};
</script>
<style lang="scss" scoped>
.pagetion {
  width: 100%;
  text-align: center;
  margin-top: 46px;
  .page-show {
    display: inline-block;
    .nowPage {
      color: #3a9ef4;
      margin-right: -10px;
    }
    .totalPage {
      color: #151515;
      margin-left: -10px;
    }
    i {
      display: inline-block;
      margin-top: 2px;
      padding: 0;
    }
  }
}
</style>


