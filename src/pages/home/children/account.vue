<template>
  <div id="user">
    <div id="title">
      <p>
        您所在的位置 : 账号管理 >
        <a>账号列表</a>
      </p>
    </div>
    <div class="accountBox">
      <ul class="top">
        <li>
          <p @click="newAdd()">
            <img src="../../../assets/img/start.png"
                 alt />新增
          </p>

          <p @click="deleteAllInfo()">
            <img src="../../../assets/img/forbid.png"
                 alt />删除
          </p>
        </li>
      </ul>

      <ul class="nav-table">
        <el-table ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange"
                  @select="handleSelectAlone"
                  @select-all="handleSelectAll">
          <el-table-column type="selection"
                           width="55"></el-table-column>
          <el-table-column prop="userName"
                           label="用户名"
                           width="220"></el-table-column>
          <el-table-column prop="role"
                           label="角色名称"
                           width="220"></el-table-column>
          <el-table-column prop="authorityName"
                           label="基本权限"
                           show-overflow-tooltip></el-table-column>
          <el-table-column prop="description"
                           label="操作权限"
                           show-overflow-tooltip></el-table-column>
          <el-table-column prop="createTime"
                           label="创建时间"
                           show-overflow-tooltip></el-table-column>

          <el-table-column label="操作项"
                           show-overflow-tooltip
                           class="delete">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)"
                         type="text"
                         size="small">编辑</el-button>
              <el-button @click="handleClick(scope.row)"
                         type="text"
                         size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </ul>
    </div>
    <transition name="slide-fade"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
      <div id="popup"
           v-if="showPopup">
        <div class="hint">
          <img src="../../../assets/img/card.png"
               alt /> 确认删除所选项目吗？
          <span>x</span>
        </div>
        <div class="buttons">
          <a @click="deleteInfo()">确定</a>
          <a @click="cancelSelect()">取消</a>
        </div>
      </div>
    </transition>
    <transition name="slide-fade"
                enter-active-class=" animated fadeIn"
                leave-active-class="animated fadeOut">
      <div id="entire"
           v-if="showEntire">
        <div class="hint">
          <img src="../../../assets/img/card.png" /> 确认删除所选项目吗？
          <span @click="entireSelect()">x</span>
        </div>
        <div class="buttons">
          <a @click="entireInfo()">确定</a>
          <a @click="entireSelect()">取消</a>
        </div>
      </div>
    </transition>
    <transition name="slide-fade"
                enter-active-class=" animated fadeIn"
                leave-active-class="animated fadeOut">
      <div id="shadow"
           v-if="showShadow"></div>
    </transition>
    <addPage v-if="addPage"
             @addPage="addAcdPage"
             :addData="addData" />
    <appendPage v-if="showPage"
                @sonPage="accountPage"
                :sonData="sonData" />
    <sorter :pageMsg="sortPage"
            @Information="showAccountInfo" />
  </div>
</template>

<script>
import appendPage from '../../compile/compile.vue'
import addPage from '../../addPage/addPage.vue'
import Axios from 'axios'
import sorter from '../../../components/sorter'
export default {
  components: {
    appendPage,
    addPage,
    sorter
  },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      isEnabled: '',
      showEntire: false,
      showPopup: false,
      showShadow: false,
      selectId: '',
      valueId: '',
      showPage: false,
      addPage: false,
      sortPage: {
        pages: 1,
        pageSize: 1,
        total: 1
      },
      sonData: [{ relative: '' }],
      addData: [{ relative: '' }]
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      console.log(val, 'val')
      this.multipleSelection = val
      console.log(this.multipleSelection, 'multipleSelection')
    },
    // 选择单个账户Id
    handleSelectAlone(val) {
      console.log(val)
      let Alone = val
      var arr = []
      for (var i = 0; i < Alone.length; i++) {
        arr.push(Alone[i].id)
      }
      this.selectId = arr.join(',')
      // console.log(this.selectId);
    },
    // 选择全部用户信息
    handleSelectAll(val) {
      let handleId = val
      let arr = []
      for (var i = 0; i < handleId.length; i++) {
        arr.push(handleId[i].id)
      }
      this.selectId = arr.join(',')
    },
    // 获取所有账户信息
    showAccountInfo(val = 1) {
      this.$get(this.$api.getLanOuAccountInfo, {
        pageNum: val,
        pageSize: 5
      }).then(res => {
        console.log(res, 'res')
        this.tableData = res.data.data.list
        console.log(res, '获取所有账户信息')
        this.sortPage.pageSize = res.data.data.pageSize
        this.sortPage.pages = Math.ceil(res.data.data.total / res.data.data.pageSize);
        this.sortPage.total = res.data.data.total
        for (var i = 0; i < this.tableData.length; i++) {
          this.tableData[i].createTime = this.tableData[i].createTime.substring(
            0,
            10
          )
        }
      })
    },
    // 编辑页面
    handleEdit(res) {
      console.log(res.id)
      this.$get(this.$api.getLanOuAccountInfoById + '?id=' + res.id, {}).then(
        res => {
          this.sonData = res.data.data
          this.showPage = true
          console.log(res.data.data, 'data')
        }
      )
    },
    // 判断是否删除单个信息
    handleClick(value) {
      this.valueId = value.id
      this.showPopup = !this.showPopup
      this.showShadow = !this.showShadow
    },

    // 删除单个账户信息
    deleteInfo() {
      this.showPopup = false
      this.showShadow = false
      this.$delete(this.$api.deleteLanOuAccountInfo, {
        id: this.valueId
      }).then(res => {
        this.showAccountInfo()
      })
    },
    // 取消删除单个账户信息
    cancelSelect() {
      this.showPopup = false
      this.showShadow = false
    },
    // 判断是否删除选中的账户信息（可选择）
    deleteAllInfo() {
      // this.showEntire = true;
      // this.showShadow = true;

      if (this.selectId === '') {
        this.$message({
          message: '请勾选需要删除的账户'
        })
        return
      } else if (this.selectId !== '') {
        this.showEntire = true
        this.showShadow = true
      }
    },
    // 确定删除选中的全部账户信息
    entireInfo() {
      this.$delete(this.$api.deleteLanOuAccountInfo, {
        id: this.selectId
      }).then(res => {
        this.showAccountInfo()
      })
      this.selectId = ''
      this.showEntire = false
      this.showShadow = false
      this.showAccountInfo()
    },
    // 取消选中的账户信息
    entireSelect() {
      this.selectId = ''
      this.showEntire = false
      this.showShadow = false
      this.showAccountInfo()
    },
    // 新增页面
    newAdd() {
      this.addPage = true
    },
    // 页面传值 显示子页面
    accountPage() {
      this.showPage = false
      this.showAccountInfo(1)
    },
    addAcdPage() {
      this.addPage = false
      this.showAccountInfo(1)
    }
  },
  created() {
    this.showAccountInfo()
  }
}
</script>

<style lang="scss" >
#user {
  padding: 8px 24px 0 24px;
  box-sizing: border-box;
  .el-checkbox__inner {
    z-index: 0;
  }
  #title {
    position: absolute;
    width: 400px;
    height: 22px;
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
  .accountBox {
    height: 590px;
    border: 1px solid #cccccc;
    // border-bottom: none;
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
        width: 96px;
        height: 40px;
        line-height: 40px;
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
        background: #3a9ef4;
        border-radius: 3px;
        border-radius: 3px;
        margin-right: 16px;
      }
      p:nth-child(2) {
        background: #ff6259;
        border-radius: 3px;
        border-radius: 3px;
        margin-right: 16px;
      }
    }

    .nav-table {
      .cell {
        text-align: center;
        height: 60px;
        line-height: 60px;
        position: relative;
        font-size: 16px;
        color: #333;
        img {
          position: absolute;
          top: 10px;
        }
      }
      .el-button--text span {
        font-size: 16px;
        color: #f64330;
        text-decoration: underline;
      }
    }
    .el-tooltip {
      .el-button:nth-child(1) {
        span {
          font-size: 16px;
          color: #176fff;
          text-decoration: underline;
        }
      }
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
  #entire {
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

