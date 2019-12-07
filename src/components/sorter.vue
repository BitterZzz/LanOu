<template>
  <div class="pagetion">
    <el-pagination
      background
      layout="prev, pager, next,slot, jumper"
      :total="pageMsg.total"
      :page-size="pageMsg.pageSize"
      @size-change="handleSizeChange"
      @current-change="handleCurrent"
    >
      <div class="page-show">
        <span class="nowPage"> {{this.nowPage}} </span>
        <i>/</i>
        <span class="totalPage"> {{pageMsg.pages}} </span>
      </div>
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "pagetion",
  data(){
    return{
      nowPage:'1'
    }
  },
  props:{
    pageMsg:{
      type:Object,
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrent(val) {
      //带有分页器的页面都是通过Information来触发父组件的函数
      this.$emit('Information',val)
      this.nowPage = val;
      localStorage.setItem('paging',val);
    }
  },
  mounted(){
    console.log(this.pageMsg,"pageMsg")
  }
};
</script>
<style lang="scss" scoped>
.pagetion {
  width: 100%;
  text-align: center;
  margin-top: 46px;
  position: absolute;
  bottom: 16px;

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


