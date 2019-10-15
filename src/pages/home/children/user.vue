<template>
  <div id="user">
    <div id="title">
      <p>
        您所在的位置 : 用户管理 >
        <a>用户列表</a>
      </p>
    </div>
    <div class="userBox">
      <ul class="Top">
        <li>
          <p @click="startUsing()">
            <img src="../../../assets/img/start.png" alt />启用
          </p>
          <p @click="forbidden()">
            <img src="../../../assets/img/forbid.png" alt />禁止
          </p>
          <p @click="RemoveAll()">
            <img src="../../../assets/img/delete.png" alt />删除
          </p>
        </li>
        <li class="inp">
          <input type="text" class="text" id="searchText" placeholder="搜索手机号/真实姓名" />
          <img src="../../../assets/img/search.png" alt @click="serachAction()" />
        </li>
      </ul>
      <ul class="table">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
          @selection-change="handleSelectionChange" @select="handleSelectAlone" @select-all="handleSelectAll">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="userId" label="机器ID" width="120"></el-table-column>
          <el-table-column prop="didName" label="用户名" width="120"></el-table-column>
          <el-table-column prop="realName" label="真实姓名" show-overflow-tooltip></el-table-column>
          <el-table-column prop="cellPhone" label="手机号码" show-overflow-tooltip></el-table-column>
          <el-table-column prop="position" label="职位" show-overflow-tooltip></el-table-column>
          <el-table-column prop="workUnit" label="工作单位" show-overflow-tooltip></el-table-column>
          <el-table-column prop="productId" label="用户设备" show-overflow-tooltip></el-table-column>
          <el-table-column prop="isEnabled" label="账号状态" :formatter="formatter" show-overflow-tooltip>
            <template slot-scope="scope">
              <span v-html="bs(scope.row)"></span>
              <img v-html="bs(scope.row)" />
            </template>
          </el-table-column>

          <el-table-column prop="createTime" label="注册时间" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作项" show-overflow-tooltip class="delete">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </ul>
    </div>
    <transition name="slide-fade" enter-active-class=" animated fadeIn" leave-active-class="animated fadeOut">
      <div id="popup" v-if="showPopup">
        <div class="hint">
          <img src="../../../assets/img/card.png" alt /> 确认删除所选项目吗？
          <span @click="cancelSelect()">x</span>
        </div>
        <div class="buttons">
          <a @click="deleteInfo()">确定</a>
          <a @click="cancelSelect()">取消</a>
        </div>
      </div>
    </transition>
    <transition name="slide-fade" enter-active-class=" animated fadeIn" leave-active-class="animated fadeOut">
      <div id="popup" v-if="showUser">
        <div class="hint">
          <img src="../../../assets/img/card.png" alt /> 确认删除所选项目吗？
          <span @click="cancelSelect()">x</span>
        </div>
        <div class="buttons">
          <a @click="userInfo()">确定</a>
          <a @click="userCancel()">取消</a>
        </div>
      </div>
    </transition>
    <transition name="slide-fade" enter-active-class=" animated fadeIn" leave-active-class="animated fadeOut">
      <div id="shadow" v-if="showShadow"></div>
    </transition>
    <sorter :pageMsg="sortPage" @Information="showUserInfo"></sorter>
  </div>
</template>

<script>
  import Axios from "axios";
  import Qs from "qs";
  import ky from "../../../assets/img/ky.png";
  import stop from "../../../assets/img/stop.png";
  import {
    setTimeout
  } from "timers";
  import sorter from "../../../components/sorter";
  export default {
    components: {
      sorter
    },
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        isEnabled: "",
        showPopup: false,
        showShadow: false,
        showUser: false,
        portionUserId: "",
        ky: ky,
        checkEnabled: [],
        stop: stop,
        deleteId: "",
        deleteAllId: "",
        sortPage: {
          pages: 1,
          pageSize: 1,
          total: 1
        }
      };
    },
    methods: {
      formatter(row, column) {
        if (row.isEnabled === "1") {
          // return row.isEnabled + "<span>禁用</span>";
        } else if (row.isEnabled === "0") {
          return; // <div id="stop">
          //     <span>禁用</span>
          //     <img src="../../../assets/img/stop.png" />
          //   </div>;
        }
      },
      bs(row) {
        if (row.isEnabled === "1") {
          return (
            "<span>可用<span>" +
            "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAA1JJREFUSA3tVk9IlFEQn3nrrmWaJZhpZqbL7oK3Veui8O0mIV6lSxeTDikZ9kexhG6iUkoHg+wk1SFIz3kpXUyIaHcvXVREU7IsszAlXHXfNG/dT9flW3clgg4++HhvZn4zv/dv5n0A+21/B/7RDuBe4+YPaweSU/GUNGGW8hVB+hpYoZmPLs/qXmIlTGz1uguFgHoEqkaCE5EkhDAHRAMkNx5NlI5ORdpijRMitvm0BgRsB8RfRPQEEIYwCJ9UUDJBLhC4EbGG+zRA2TLu9PTGItT18YjR7tPuIYomSdS++nu9a7Z89KfuHNnnvSk7mnLI3AyAd3g6HWPO4dZI+57Gdq/W6PC7ye5z1ybqqLAhH79Wt5tPzBUX+jRrEuAHRHiw19nbve5OFNAQACiadg7NGE1AGCmVzgyikc90cXGJ2mNhovRoe19+Bl4UWX4syzYiWLIQXY3CbImGxDne4hQ+p2qQsm/B5VnZQu8ycPhc3SiSPKetWdlhnz6+hBesL63JRm6GxAcprYBT5DinzWsjp2idw+vqZvx1klDHWzsbtg+ptKOs3JPReCUbEicJcQwIJQF+USDrSHmmw+fucbzV8pUc2Wx+dxcJuEFBuDRROvyUbRSyS5rjoyJzkGMZNENiibDBhULqeJFi4mBUSRYcLPCW5el6TrX7jLsZQaqbNnvi2ZuCpp3KTcmQWJVBNvOFpmwFmyjxfA8gVqixRVgGVRVz+LUORtziXakJr1SZtxvKHBYQpfi2rdweGRKr2stnNs/fOR2q0mINsVLJJgQ/H0VTaKXOoWc6ZkePJvbFzyrWDn1YMCQOFXzCARCiNnNYS9UdFTnnZhVvxTsp4bLhShkc9qnlI+uP9Xgk6UGje5JrPSjMVzLSoGUB4K5uDxeE87ps1GccFre5Mh3BgHxoZI+r49J3TZU/m1eriQsOAxT2r0qmTmT3ufiRwGaSsm0dlrumSnxLui2yL/AWp5sxvRmQWnm1nfHKLGPiN/UsCsQOLoPqZXoupXwFgkLPIkjMFUJUcJW6yBcuDUG2jBV7HseLmhCxCqIeDTNhPRNUsxj5I8DZym8zQT9sBHvHz45MxyNV9oSJ9WDRvz7B9bV5sTg/M1k1yRd+v+3vwH+wA38AwRxBV6dcaVwAAAAASUVORK5CYII='>"
          );
        } else if (row.isEnabled === "0") {
          return (
            "<span>禁用<span>" +
            "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAA8pJREFUSA3tVU1oVFcU/s6bF9Nq0ZgYLbjpolYxJm+C4EYhGRMVK6aL0i5EXaioWRSxGnXhH3Wh0ahQxd9WEBeFFKQbRVrNRIgbRZmJRgiktaiIxYJamzFxMnP87puMvMT7krgQN7nD8O4759zvO985994HjI7RCrynCsi74Gr8s4+gRbPhYC6g9Vzr8nmMzza8+PemLH2UGineiIj1JArwhbcKIpsgmEayp1A89EkEUwEppu0ebYeR6j4lX3b1DpfAsMR6xZtKXWcJXkPgX/g/he5MEqnb/+Eu36qi4yHZcsBZA9HltFyDykqJJf4einxIYo2XfQpx/yBAEf8rpToZHwpM4948VuQck0wjna6VBR33w+KdMIc2IwIpOEN/KbJaOxypwZFYsg2ZTC3L/jEK3LPaXDYmDD+UGKUV3zD7xchQ6fz2Tr0aPUBF+8KAjM/ESM2dP1nqFdwP1ZjiLg+LtxLn1MoWZn5BapK/+4s1ew+ObNXWiv2DwbTVazQ+aPYv42N/W6F6nv1uCFNtJUZx2XRmXIksTuRJpLr9GEv+HcRp8In6HXrV28vYLcbHmOP5eFbqJO0zUBKZ9cYWmPAcWoYb8ZhxD9I9t4Je9vAoSYWAP5LwFRUp9W2j0g0Saz8ajEWfJuBKime+kvYBOCbOTqw8m4Ln6H3xbAAYX7jJjrCfytIeYQx8pYNJzaLnmWcodJ4wSV42+NmYgsNeakeUCxyMmWQ/bo6WsP9Uy78/D0IG5/QLG2YZdsXAA4JOoBzeSOgOrmOJ91D39ly/CSuOKbsrVckdwThMiBQx+cmkbRtg73+xE6eR4CXJnzOHcUwiN9jfH3xS1U2m38ZKUp5VaaIvyzbs6g8FCnU252OR6XurvybGXuq2ZBd91+E4602QGezrdiqgKt1MgkM5KymrkgeRzTbQt9OPyTvg1LMTtxG5c/eNKTCxEstuFkjRyELWakv5V368aIbWjT5RAMBMuaObSPI9ZaTNu7Z4i5jIUl4kjRJDn7ENHvbNwyjdTZhq71eSx1iumMzvSA5ebHvXy2UzeV3GSXoTmqgLI7YqNoC+6r7etQToglNwWVuiS2xEQZuv1HWvcPVjaHpVGKmPH1xom+vFz0sx9pOfqLyO5fyNn8DT7OktvOx9iv8LFcUyERGnkud6DQm/ZswlvOpZLQs7H9nw8rbQUucDzNNcT4hHl/F7u5m9i9KUovUfP0YxmbZxJOxgdZrwJHFOvuWFOcwYEXEew/94lFR4VDfH7z0PMc96HMjcQGdHQtblNlc+fvQ5WoEPUoHXpXBeAdSX51sAAAAASUVORK5CYII=' />"
          );
        }
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 勾选单个用户信息
      handleSelectAlone(useID) {
        let arr = [];
        let checkEnabled = {};
        for (var i = 0; i < useID.length; i++) {
          arr.push(useID[i].id);
          checkEnabled.did = useID[i].did;
          checkEnabled.id = useID[i].id;
          checkEnabled.isEnabled = useID[i].isEnabled;
          checkEnabled.userId = useID[i].userId;
        }
        this.checkEnabled.push(checkEnabled);
        this.portionUserId = arr.join(",");
        console.log(this.checkEnabled);
        // console.log(checkEnabled);
        // console.log(this.portionUserId);
      },
      // 勾选全部用户信息
      handleSelectAll(allUserID) {
        let arry = [];
        for (let j = 0; j < allUserID.length; j++) {
          let checkEnabled = {};
          arry.push(allUserID[j].id);
          checkEnabled.did = allUserID[j].did;
          checkEnabled.id = allUserID[j].id;
          checkEnabled.isEnabled = allUserID[j].isEnabled;
          checkEnabled.userId = allUserID[j].userId;
          // console.log(checkEnabled);
          this.checkEnabled.push(checkEnabled);
        }
        console.log(this.checkEnabled);
        this.portionUserId = arry.join(",");
        // console.log(this.portionUserId);
      },
      // 函数封装
      capsulation(res) {
        this.tableData = res.data.data.list;
        let tableBled = [];
        for (var i = 0; i < this.tableData.length; i++) {
          this.tableData[i].createTime = this.tableData[i].createTime.substring(
            0,
            10
          );
          // console.log(this.tableData[i].createTime);
        }
        for (var i = 0; i < this.tableData.length; i++) {
          tableBled.push(this.tableData[i].isEnabled);
          // console.log(this.tableData[i].isEnabled);
        }
        this.isEnabled = tableBled.join(",");
        // console.log(this.isEnabled);
      },
      // 获取全部用户信息
      showUserInfo(val = 1) {
        this.$get(this.$api.getLanOuUserInfo, {
          pageNum: val,
          pageSize: 5
        }).then(res => {
          this.sortPage.pageSize = res.data.data.pageSize;
          this.sortPage.pages = res.data.data.pages;
          this.sortPage.total = res.data.data.total;
          this.capsulation(res);
          console.log(111);
        });
      },
      // 启用
      startUsing() {
        for (var i = 0; i < this.checkEnabled.length; i++) {
          Axios.post(this.$api.updateByLanOuUserState, {
            did: this.checkEnabled[i].did,
            id: this.checkEnabled[i].id,
            isEnabled: 1,
            userId: this.checkEnabled[i].userId
          }).then(res => {
            this.showUserInfo();
            this.checkEnabled = [];
          });
        }
      },
      // 禁用
      forbidden() {
        for (var i = 0; i < this.checkEnabled.length; i++) {
          Axios.post(this.$api.updateByLanOuUserState, {
            did: this.checkEnabled[i].did,
            id: this.checkEnabled[i].id,
            isEnabled: "0",
            userId: this.checkEnabled[i].userId
          }).then(res => {
            console.log(res);
            this.checkEnabled = [];
            this.showUserInfo();
          });
        }
      },
      // 搜索用户信息
      serachAction() {
        let searchText = document.querySelector("#searchText");
        let valuePhone = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (valuePhone.test(searchText.value)) {
          console.log(1);
          this.cellPhoneSear();
        } else {
          console.log(2);
          this.reacNameSear();
        }
      },
      // 封装根据真实姓名realName查询
      reacNameSear() {
        console.log("真实姓名");
        this.$get(this.$api.getLanOuUserInfo, {
          pageNum: 1,
          pageSize: 5,
          realName: searchText.value
        }).then(res => {
          console.log(res.data.data.list);
          this.tableData = res.data.data.list;
        });
      },
      // 封装根据手机号cellPhone查询
      cellPhoneSear() {
        console.log("手机号码");
        this.$get(this.$api.getLanOuUserInfo, {
          pageNum: 1,
          pageSize: 5,
          cellPhone: searchText.value
        }).then(res => {
          console.log(res.data.data.list);
          this.tableData = res.data.data.list;
        });
      },
      // 删除当前行
      handleClick(aloneId) {
        console.log(aloneId.id);
        this.deleteId = aloneId.id;
        this.showPopup = !this.showPopup;
        this.showShadow = !this.showShadow;
      },
      // 删除单个用户信息
      deleteInfo() {
        console.log("确定删除");
        this.showPopup = false;
        this.showShadow = false;

        this.$delete(this.$api.deleteLanOuUser, {
          id: this.deleteId
        }).then(res => {
          this.showUserInfo();
        });
      },
      // 取消删除
      cancelSelect() {
        console.log("取消删除");
        this.showPopup = false;
        this.showShadow = false;
        this.showUserInfo();
      },
      // 判断是否删除所选择用户信息
      RemoveAll() {
        if (this.portionUserId === "") {
          this.$message({
            message: "请勾选需要删除的用户"
          });
          return;
        } else if (this.portionUserId !== "") {
          this.showUser = !this.showUser;
          this.showShadow = !this.showShadow;
        }
      },
      // 确定删除所选择的用户信息
      userInfo() {
        this.showUser = false;
        this.showShadow = false;
        console.log(this.portionUserId);
        this.showUserInfo();

        this.$delete(this.$api.deleteLanOuUser, {
          id: this.portionUserId
        }).then(res => {
          console.log("删除所有用户信息");
          this.showUserInfo();
        });
        this.portionUserId = "";

        console.log("已经删除");
      },
      // 取消所选择的用户
      userCancel() {
        this.showUser = false;
        this.showShadow = false;
        console.log(this.portionUserId);
        this.showUserInfo();
        this.portionUserId = "";
        console.log("取消删除");
      }
    },
    mounted() {
      console.log(this.sortPage.total)
    },
    created() {
      this.showUserInfo();
    }
  };

</script>

<style lang="scss">
  #user {
    padding: 8px 24px 0 24px;
    box-sizing: border-box;

    .el-checkbox__inner {
      z-index: 0;
    }

    .el-table::before {
      height: 0;
    }

    #title {
      width: 293px;
      height: 22px;
      position: absolute;
      top: -38px;
      left: -4px;

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
      height: 590px;
      border: 1px solid #cccccc;

      // border-bottom: none;
      // margin: 0 24px;
      .Top {
        height: 80px;
        background: #eeeeee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        box-sizing: border-box;

        p {
          float: left;
          width: 96px;
          height: 40px;
          line-height: 36px;
          text-align: center;
          font-size: 16px;
          color: #ffffff;
          cursor: pointer;

          img {
            width: 25px;
            height: 25px;
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
          box-sizing: border-box;
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
            width: 386px;
            height: 44px;
            border: 1px solid #cccccc;
            border-radius: 5px;
            background: #ffffff;
            font-size: 14px;
            color: #999999;
            padding: 16px 55px 16px 20px;
            box-sizing: border-box;
          }

          img {
            width: 26px;
            height: 26px;
            position: absolute;
            right: 0;
            top: 10px;
            right: 25px;
            cursor: pointer;
          }
        }
      }
    }

    .table {
      tbody {
        .el-table__row {
          border-bottom: #ffffff !important;
        }
      }

      .cell {
        text-align: center;
        height: 60px;
        line-height: 60px;
        position: relative;
        font-size: 16px;
        color: #333;

        img {
          position: absolute;
          top: 15px;
        }
      }

      .el-button--text span {
        font-size: 16px;
        color: #f64330;
        text-decoration: underline;
      }
    }

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
      z-index: 5;
    }
  }

</style>
