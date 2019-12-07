<template>
  <div id="maintain">
    <div id="title">
      <p>
        您所在的位置 : 首页 >
        <a>保养信息</a>
      </p>
    </div>
    <div class="toHome">
      <div class="goHome">
        <img @click="backHome()" src="../../assets/img/back.png" alt />
        <span>保养信息</span>
      </div>
      <div class="title">
        <img src="../../assets/img/untreated.png" alt="">
        <span>未处理</span>
      </div>
    </div>
    <div class="faultInfo">
      <table border="1" cellspacing="0">
        <tr>
          <th>状态</th>
          <th>上报时间</th>
          <th>设备ID</th>
          <th>保养类型</th>
        </tr>
        <tr v-for="item in protectMsg" :key="item.id">
          <td>
            <img src="../../assets/img/untreated.png" alt />
          </td>
          <td>{{item.produceTime.split(' ')[0]}}</td>
          <td>{{item.pdid}}</td>
          <td>{{item.guaranteState.split(',').join('、')}}</td>
        </tr>
      </table>
    </div>
    <sorter :pageMsg="sortPage" @Information="getMaintainMsg" />
  </div>
</template>

<script>
import redAlarm from "../../assets/img/untreated.png";
import greenAlarm from "../../assets/img/dispose.png";
import sorter from "../../components/sorter";
export default {
  components: {
    sorter
  },
  data() {
    return {
      redAlarm: redAlarm,
      greenAlarm: greenAlarm,
      sortPage: {
        pages: 1,
        pageSize: 1,
        total: 1
      },
      protectMsg:[]
    };
  },

  methods: {
    backHome() {
      this.$emit("mainHidden");
    },
    getMaintainMsg(val = "1", pageSize = "8") {
      let data = {
        typeVo: 2,
        pageNum: val,
        pageSize: pageSize
      };
      this.$post(this.$api.getLanOuProjectInfo, data).then(res => {
        console.log(res);
        this.protectMsg = res.data.data.list;
        this.sortPage.pages = res.data.data.pages;
        this.sortPage.total = res.data.data.total;
        this.sortPage.pageSize = res.data.data.pageSize;
      });
    }
  },
  created() {
    this.getMaintainMsg();
    console.log(this.protectMsg,"this.protectMsg");
  }
};
</script>

<style lang="scss" scoped>
#maintain {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  top: 0;
  padding: 8px 24px 0;
  box-sizing: border-box;

  #title {
    width: 330px;
    height: 22px;
    left: -4px;
    position: absolute;
    top: -38px;
    background: #f7f7f7;

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

  .toHome {
    display: flex;
    width: 100%;
    height: 80px;
    background: #eeeeee;
    margin-bottom: 20px;
    justify-content: space-between;
    .goHome {
      display: flex;
      align-items: center;
      color: #333;
      font-size: 22px;
      font-weight: 400;
      padding-left: 18px;
      box-sizing: border-box;

      img {
        width: 43px;
        height: 43px;
        margin-right: 16px;
        cursor: pointer;
      }
    }
    .title {
      display: flex;
      align-items: center;
      padding-right: 28px;
      color: #333333;
    }
  }

  .faultInfo {
    width: 80%;
    height: 59.9%;
    margin: 0 auto;
    border-bottom: none;
    table {
      width: 100%;
      text-align: center;
      tr {
        th {
          font-family: PingFangSC-Medium;
          height: 54px;
          color: #333333;
          font-size: 16px;
        }
        th:nth-child(1) {
          width: 16%;
        }
        td {
          color: #333333;
          height: 54px;
        }
      }
    }
  }
}
</style>
