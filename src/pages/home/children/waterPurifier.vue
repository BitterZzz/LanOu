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
      <div id="search-box" class="clearfix">
        <div class="search">
          <div class="ckeck">
            <span>机器Id</span>
            <i class="el-icon-caret-bottom icon-bottom"></i>
          </div>
          <input type="text" class="search-value" placeholder="请输入内容" />
        </div>
        <button type="submit" class="search-btn">搜索</button>
      </div>
      <div class="detalis">
        <div class="table-box">
          <table border="1" cellspacing="0" width="100%" class="table-style">
            <tr class="tr-header" align="center">
              <th>机器ID</th>
              <th>机器状态</th>
              <th>水质数据</th>
              <th>安装地址</th>
              <th>时间</th>
              <th>用户</th>
              <th>操作项</th>
            </tr>
            <tr class="tr-main" align="center" v-for="item in this.list" :key="item.Id">
              <td>1</td>
              <td>
                <div>在线状态:在线</div>
                <div>在线状态:在线</div>
                <div>在线状态:在线</div>
              </td>
              <td>
                <div class="msg">
                  <div>水温 X℃</div>
                  <div>TDS(ppm)原水:XX 纯水:XX</div>
                  <div>TDS(ppm)原水:XX 纯水:XX</div>
                  <div>TDS(ppm)原水:XX 纯水:XX</div>
                  <div>TDS(ppm)原水:XX 纯水:XX</div>
                  <div>余氧(mg/l)去除率:XX%</div>
                </div>
              </td>
              <td>
                <div class="addres">
                  <div>深圳市宝安区高新奇工业园2期1号楼</div>
                </div>
              </td>
              <td>
                <div class="time">
                  <div class="time-title">
                    <span>安装时间:</span>
                    <img src="../../../assets/img/time.png" alt="">
                  </div>
                  <div>2019-04-06</div>
                  <div>14:23:12</div>
                  <div class="time-title">
                    <span>上传时间:</span>
                    <img src="../../../assets/img/time.png" alt="">
                  </div>
                  <div>2019-04-06</div>
                  <div>14:23:12</div>
                </div>
              </td>
              <td>6</td>
              <td>7</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{ ID: 123 }, { ID: 123 }, { ID: 123 }]
    };
  }
};
</script>

<style lang="scss" scoped>
#water {
  overflow: hidden;
  height: 100%;
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
    margin: 0 auto;
    #search-box {
      margin-left: 24px;
      margin-top: 16px;
      .search {
        width: 680px;
        height: 60px;
        border: solid 1px #cccccc;
        border-radius: 5px;
        border-radius: 5px;
        float: left;
        .ckeck {
          display: inline-block;
          width: 100px;
          height: 60px;
          text-align: center;
          color: #333333;
        }
        .search-value {
          display: inline-block;
          width: 552px;
          height: 60px;
          border: 0;
          border-left: solid 1px #cccccc;
          padding-left: 32px;
          box-sizing: border-box;
        }
      }
      .search-btn {
        float: left;
        width: 120px;
        height: 60px;
        background: #ffffff;
        border: solid 1px #cccccc;
        border-radius: 5px;
        margin-left: 16px;
      }
    }
    .detalis {
      box-sizing: border-box;
      width: 100%;
      padding: 0 24px;
      padding-top: 16px;
      .table-box {
        .table-style {
          // display: table-row-group;
          font-family: PingFangSC-Regular;
          border: 0;
          border: solid 1px #cccccc;
          border-collapse: collapse;
          vertical-align: middle;
          color: #333333;
          .tr-header {
            color: #333333;
            font-size: 16px;
            th {
              padding: 16px 0;
              background: #eeeeee;
            }
          }
          .tr-main {
            display: table-row;
            color: #333333;
            font-size: 14px;
            td:nth-child(1) {
              padding: 64px 0;
              box-sizing: border-box;
            }
            td:nth-child(3) {
              .msg {
                width: 196px;
                text-align: left;
              }
            }
            td:nth-child(4){
              .addres{
                width: 92px;
                text-align: left;
              }
            }
            td:nth-child(5){
              .time{
                .time-title{
                  img{
                    vertical-align: middle;
                    padding-bottom: 6px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
