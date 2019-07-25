<template>
  <div id="removeMeg" class="animated fadeIn">
    <div id="popup" >
      <div class="hint">
        <img src="../assets/img/card.png" alt /> 确认删除所选项目吗？
        <span @click="cancelSelect()">x</span>
      </div>
      <div class="buttons">
        <a @click="deleteInfo()">确定</a>
        <a @click="cancelSelect()">取消</a>
      </div>
    </div>
     <div id="shadow" ></div>
  </div>
</template>

<script>
export default {
  name:'removeMeg',
  methods:{
     deleteInfo(){
        this.$emit('showPopup')
        this.$emit('showShadow')
        this.$emit('deleteInfo')
     },
     cancelSelect(){
        this.$emit('showPopup')
        this.$emit('showShadow')
        this.$emit('cancelSelect')
     }
  }
};
</script>

<style lang="scss" scoped>
#removeMeg {
  #popup {
    width: 430px;
    height: 170px;
    position: absolute;
    background: #ffffff;
    left: 0;
    right: 0;
    top: -150px;
    bottom: 0;
    margin: auto;
    padding-top: 24px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    z-index: 6;
    .hint {
      font-size: 16px;
      width: 100%;
      height: 29px;
      line-height: 29px;
      color: #333333;
      span {
        position: relative;
        left: 180px;
        font-size: 18px;
      }
      img {
        width: 25px;
        height: 25px;
        margin: 0 4px 0 20px;
        position: relative;
        top: 7px;
      }
    }
    .buttons {
      width: 100%;
      height: 35px;
      position: relative;
      top: 64px;
      padding-left: 60%;
      a {
        display: inline-block;
        width: 55px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        font-size: 16px;
        text-align: center;
      }
      a:nth-child(1) {
        background: #3a9ef4;
        margin-right: 10px;
        color: #ffffff;
      }
      a:nth-child(2) {
        border: 1px solid #cccccc;
      }
    }
  }
  #shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 4;
  }
}
</style>

