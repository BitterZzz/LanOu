<template>
  <div id="user">
    <div id="title">
      <p>
        您所在的位置 : 用户管理 >
        <a>用户列表</a>
      </p>
    </div>
    <div class="userBox">
      <ul class="top">
        <li>
          <p>
            <img src="../../../assets/img/start.png" alt />启用
          </p>
          <p>
            <img src="../../../assets/img/forbid.png" alt />禁止
          </p>
          <p>
            <img src="../../../assets/img/delete.png" alt />删除
          </p>
        </li>
        <li class="inp">
          <input type="text" class="text" placeholder="搜索用户名/真实姓名" />
          <img src="../../../assets/img/search.png" alt />
        </li>
      </ul>
      <ul class="navigation">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        ></el-checkbox>
        <a v-for=" item in list" :key="item.id">{{item.value}}</a>
      </ul>
      <ul class="table">
        <el-checkbox-group
          v-model="checkedCities"
          @click="tabAction()"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox v-for="city in cities" :label="city" :key="city.id">
            <a>{{city.ID}}</a>
            <a>{{city.user}}</a>
            <a>{{city.true}}</a>
            <a>{{city.phone}}</a>
            <a>{{city.position}}</a>
          </el-checkbox>
        </el-checkbox-group>
      </ul>
    </div>
  </div>
</template>

<script>
const cityOptions = [
  {
    ID: "17001",
    user: "卡尔门",
    true: "天天",
    phone: "15689742568",
    position: "管理"
  },
  {
    ID: "17002",
    user: "ener门",
    true: "天天",
    phone: "15689742568",
    position: "管理"
  }
];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      // [
      // {ID:'17001',user:'卡尔门',true:'天天',phone:'15689742568',position:'管理',},
      // {ID:'17002',user:'ener门',true:'天天',phone:'15689742568',position:'管理',}
      // ]
      isIndeterminate: false,
      list: [
        { value: "机器ID" },
        { value: "用户名" },
        { value: "真实姓名" },
        { value: "手机号码" },
        { value: "职位" },
        { value: "工作单位" },
        { value: "用户设备" },
        { value: "账号状态" },
        { value: "注册时间" },
        { value: "操作项" }
      ]
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style lang="scss" >
#user {
  padding: 8px 24px 0 24px;
  box-sizing: border-box;
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
  .userBox {
    // width: 1100px;
    width: 100%;
    height: 594px;
    border: 1px solid #cccccc;
    // margin: 0 24px;
    .top {
      height: 80px;
      background: #eeeeee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      box-sizing: border-box;
      p {
        float: left;
        width: 108px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 20px;
        color: #ffffff;
        cursor: pointer;
        img {
          width: 30px;
          height: 30px;
          position: relative;
          top: 8px;
          left: -8px;
        }
      }
      p:nth-child(1) {
        background: #28ce42;
        border-radius: 3px;
        border-radius: 3px;
        margin-right: 16px;
      }
      p:nth-child(2) {
        background: #ffc130;
        border-radius: 3px;
        border-radius: 3px;
        margin-right: 16px;
      }
      p:nth-child(3) {
        background: #ff6259;
        border-radius: 3px;
        border-radius: 3px;
      }
      .inp {
        position: relative;
        input {
          width: 426px;
          height: 60px;
          border: 1px solid #cccccc;
          border-radius: 5px;
          background: #ffffff;
          font-size: 20px;
          color: #999999;
          padding: 16px 55px 16px 20px;
          box-sizing: border-box;
        }
        img {
          width: 30px;
          height: 30px;
          position: absolute;
          right: 0;
          top: 15px;
          right: 25px;
          cursor: pointer;
        }
      }
    }
    .navigation {
      height: 87.5px;
      border-bottom: 1px solid #cccccc;
      line-height: 87.5px;
      padding: 0 16px 0 24px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      align-content: center;
      .el-checkbox {
        margin-right: 0;
        
        .el-checkbox__input {
          .el-checkbox__inner {
            width: 18px;
            height: 18px;
          }
          .el-checkbox__inner::after {
            height: 10px;
            left: 6px;
            top: 1px;
            width: 4px;
          }
        }
      }
      a {
        font-size: 16px;
        color: #333333;
        font-weight: 600;

        // border: 1px solid red;
      }

      // a:nth-child(2) {
      //   margin: 0 23px 0 10px;
      // }
      // a:nth-child(3) {
      //   margin-right: 24px;
      // }
      // a:nth-child(4) {
      //   margin-right: 24px;
      // }
      // a:nth-child(5) {
      //   margin-right: 37px;
      // }
      // a:nth-child(6) {
      //   margin-right: 29px;
      // }
      // a:nth-child(7) {
      //   margin-right: 79px;
      // }
      // a:nth-child(8) {
      //   margin-right: 64px;
      // }
      // a:nth-child(9) {
      //   margin-right: 22px;
      // }
      // a:nth-child(10) {
      //   margin-right: 20px;
      // }
    }
  }
  .table{
      .el-checkbox-group{
          padding-left: 24px;
          box-sizing: border-box;
          .el-checkbox{
              display: block;
              border: 1px solid red;
              height: 50px;
              line-height: 50px;
              margin: 20px 0;
                 .el-checkbox__inner {
                        width: 18px;
                        height: 18px;
                    }
                    .el-checkbox__inner::after {
                        height: 10px;
                        left: 6px;
                        top: 1px;
                        width: 4px;
                    }
          }
      }
  }
}
</style>

