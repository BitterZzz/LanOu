export function decodeMsg(decode16) {
  let typeJudge = decode16.substr(0, 2);
  //第一种数据类型保存参数
  let typeFrist = {};
  let stateMsg = {};
  let stateMsgArr = [];
  //第二种数据类型最终结果保存参数
  let inflowMsgArr = [];
  let pureMsgArr = [];
  //第三种数据类型最终结果保存参数
  let TocBeforeMsgArr = [];
  let TocAfterMsgArr = [];

  //第四种数据类型最终结果保存参数
  let NtuBeforeMsgArr = [];
  let NtuAfterMsgArr = [];

  //第五种数据类型最终结果保存参数
  let CodBeforeMsgArr = [];
  let CodAfterMsgArr = [];

  //第六种数据类型最终结果保存参数
  let RcrrBeforeMsgArr = [];
  let RcrrAfterMsgArr = [];
  //第八种数据类型最终结果保存参数
  let typeEight = "";
  let typeEightObj = {};
  // 第一种数据类型解析
  if (typeJudge === "01") {
    if (decode16.substr(2, 4).length === 4) {
      let temperature = decode16.substr(2, 4);
      temperature = temperature
        .split("")
        .reverse()
        .join("");
      //温度值低字节
      typeFrist.lowTemperature = parseInt(
        temperature.substr(0, 2) + temperature.substr(2, 2),
        16
      ).toString(10) / 10;
    }
    if (decode16.substr(6, 4).length === 4) {
      let malfunction = decode16.substr(6, 4);
      let a = "";
      malfunction = parseInt(malfunction, 16).toString(2);
      for (var i = 0; i < 16 - malfunction.length; i++) {
        a += 0;
      }
      malfunction = a + malfunction;
      let b = [];
      for (var i = 0; i < 8; i++) {
        if (malfunction[i] !== "0") {
          if (i === 0) {
            b.push({
              maintain: "1:石英砂保养+",
              malfunction: "1:进水压力传感器故障+"
            });
          }
          if (i === 1) {
            b.push({
              maintain: "1:活性炭保养+",
              malfunction: "1:膜前压力传感器故障+"
            });
          }
          if (i === 2) {
            b.push({
              maintain: "1:软化树脂保养+",
              malfunction: "1:取水压力传感器故障+"
            });
          }
          if (i === 3) {
            b.push({
              maintain: "1:RO 膜保养+",
              malfunction: "1:进水流量传感器故障+"
            });
          }
          if (i === 4) {
            b.push({
              maintain: "1:再生盐保养+",
              malfunction: "1:纯水流量传感器故障+"
            });
          }
          if (i === 5) {
            b.push({
              maintain: "1:精密滤芯保养+",
              malfunction: "1:水质模块故障+"
            });
          }
          if (i === 6) {
            b.push({
              maintain: "1:UV 灯保养+",
              malfunction: "1:TDS 模块故障+"
            });
          }
          if (i === 7) {
            b.push({
              maintain: "1:''+",
              malfunction: "1:液位置传感器故障+"
            });
          }
        } else {
          b.push({
            maintain: "0+",
            malfunction: "0+"
          });
        }
      }
      let guaranteState = "";
      let maintenanceState = "";
      for (var j = 0; j < 8; j++) {
        guaranteState += b[j].malfunction; //故障状态
        maintenanceState += b[j].maintain; //保养状态
      }
      stateMsg.guaranteState = guaranteState;
      stateMsg.maintenanceState = maintenanceState;
      stateMsgArr.push(stateMsg);
    }
    // return {stateMsgArr:stateMsgArr}
  }
  //第二种数据类型(TDS 历史 31 天水质数据)
  if (typeJudge === "02") {
    let inflowMsg = decode16.substr(2, 62);
    let pureMsg = decode16.substr(64, 62);
    let inflow;
    let pure;
    for (var i = 0; i < inflowMsg.length; i++) {
      if (i % 2 === 0) {
        inflow = parseInt(inflowMsg.substr(i, 2), 16) * 2;
        pure = parseInt(pureMsg.substr(i, 2), 16) * 2;
        inflowMsgArr.push(inflow);
        pureMsgArr.push(pure.toFixed(1));
      }
    }
    return {
      inflowMsgArr: inflowMsgArr,
      pureMsgArr: pureMsgArr
    }
  }
  //第三种数据类型(TOC 历史 31 天水质数据)
  if (typeJudge === "03") {
    let TocBeforeMsg = decode16.substr(2, 62);
    let TocAfterMsg = decode16.substr(64, 62);
    let tocBefore;
    let tocAfter;
    for (var i = 0; i < TocBeforeMsg.length; i++) {
      if (i % 2 === 0) {
        tocBefore = parseInt(TocBeforeMsg.substr(i, 2), 16) / 10;
        tocAfter = parseInt(TocAfterMsg.substr(i, 2), 16) / 10
        TocBeforeMsgArr.push(tocBefore.toFixed(1));
        TocAfterMsgArr.push(tocAfter.toFixed(1));
      }
    }
    return {
      TocBeforeMsgArr: TocBeforeMsgArr,
      TocAfterMsgArr: TocAfterMsgArr
    }
  }
  //第四种数据类型(NTU(浊度)历史 31 天水质数据)
  if (typeJudge === "04") {
    let NtuBeforeMsg = decode16.substr(2, 62);
    let NtuAfterMsg = decode16.substr(64, 62);
    let ntuBefore;
    let ntuAfter;
    for (var i = 0; i < NtuBeforeMsg.length; i++) {
      if (i % 2 === 0) {
        ntuBefore = parseInt(NtuBeforeMsg.substr(i, 2), 16) / 100;
        ntuAfter = parseInt(NtuAfterMsg.substr(i, 2), 16) / 100
        NtuBeforeMsgArr.push(ntuBefore.toFixed(1));
        NtuAfterMsgArr.push(ntuAfter.toFixed(1));
      }
    }
    return {
      NtuBeforeMsgArr: NtuBeforeMsgArr,
      NtuAfterMsgArr: NtuAfterMsgArr
    }
  } //第五种数据类型(COD 历史 31 天水质数据)
  if (typeJudge === "05") {
    let CodBeforeMsg = decode16.substr(2, 62);
    let CodAfterMsg = decode16.substr(64, 62);
    let codeBefore;
    let codeAfter;
    for (var i = 0; i < CodBeforeMsg.length; i++) {
      if (i % 2 === 0) {
        codeBefore = parseInt(CodBeforeMsg.substr(i, 2), 16) / 10;
        codeAfter = parseInt(CodAfterMsg.substr(i, 2), 16) / 10;
        CodBeforeMsgArr.push(codeBefore.toFixed(1));
        CodAfterMsgArr.push(codeAfter.toFixed(1));
      }
    }
    return {
      CodBeforeMsgArr: CodBeforeMsgArr,
      CodAfterMsgArr: CodAfterMsgArr
    }
  } //第六种数据类型(RCRR 历史 31 天水质数据(余氯去除率))
  if (typeJudge === "06") {
    let RcrrBeforeMsg = decode16.substr(2, 62);
    let rerrBefor;
    for (var i = 0; i < RcrrBeforeMsg.length; i++) {
      if (i % 2 === 0) {
        rerrBefor = parseInt(RcrrBeforeMsg.substr(i, 2), 16);
        RcrrBeforeMsgArr.push(rerrBefor);
      }
    }
    return {
      RcrrBeforeMsgArr: RcrrBeforeMsgArr
    }
  }
  //第七种数据类型(滤芯滤料)
  if (typeJudge === "07") {
    console.log(decode16, "decode16");
    let typeSevent = decode16.substr(2, 112);
    let typeSeventArr = [];
    let typeBranch;
    let rubbish = decode16.substr(114);
    for (var i = 0; i < typeSevent.length; i++) {
      if (i % 16 === 0) {
        typeBranch = typeSevent.substr(i, 16);
        typeSeventArr.push(typeBranch);
      }
    }
    let arr = []
    let a = typeSeventArr.map((item, index) => {
      return {
        //进水量
        inflow: parseInt(item.substr(2, 2) + item.substr(0, 2), 16).toFixed(0),
        //已滤进水量(实际已用水量)
        filterInflow: (parseInt(item.substr(6, 2) + item.substr(4, 2), 16) / 10).toFixed(0),
        //使用天数
        usageDays: parseInt(item.substr(10, 2) + item.substr(8, 2), 16).toFixed(0),
        //实际使用天数
        clearDays: parseInt(item.substr(14, 2) + item.substr(12, 2), 16).toFixed(0),
        rubbish: rubbish
      };
    })
    return {
      typeSeventArr: a
    };
  }

  //第八种数据类型
  if (typeJudge === "08") {
    console.log(decode16, "decode16");
    typeEight = decode16.substr(2, 78);
    let rubbish = decode16.substr(80);
    // 进水压力设置下限
    typeEightObj.inflowMin = parseInt(typeEight.substr(0, 2), 16) / 100;
    // 进水压力设置上限
    typeEightObj.inflowMax = parseInt(typeEight.substr(2, 2), 16) / 100;
    // 进水压力当前值
    typeEightObj.inflowNow = parseInt(typeEight.substr(4, 4), 16) / 100;
    // 膜前压力设置下限
    typeEightObj.SublayMin = parseInt(typeEight.substr(8, 2), 16) / 100;
    // 膜前压力设置上限
    typeEightObj.SublayMax = parseInt(typeEight.substr(10, 2), 16) / 100;
    // 膜前压力当前值
    typeEightObj.SublayNow = parseInt(typeEight.substr(12, 4), 16) / 100;
    // 取水压力下限值
    typeEightObj.intakingMin = parseInt(typeEight.substr(16, 2), 16) / 100;
    // 取水压力上限值
    typeEightObj.intakingMax = parseInt(typeEight.substr(18, 2), 16) / 100;
    // 取水压力当前值
    typeEightObj.intakingNow = parseInt(typeEight.substr(20, 4), 16) / 100;
    // 原水进水总量
    typeEightObj.rawWater = parseInt(typeEight.substr(24, 8), 16) / 10;
    // 纯水进水总量
    typeEightObj.pureWater = parseInt(typeEight.substr(32, 8), 16) / 10;
    // 年
    typeEightObj.year = parseInt(typeEight.substr(40, 2), 16);
    // 月
    typeEightObj.month = parseInt(typeEight.substr(42, 2), 16);
    // 日
    typeEightObj.day = parseInt(typeEight.substr(44, 2), 16);
    // 时
    typeEightObj.hour = parseInt(typeEight.substr(46, 2), 16);
    // 分
    typeEightObj.minute = parseInt(typeEight.substr(48, 2), 16);
    // 秒
    typeEightObj.second = parseInt(typeEight.substr(50, 2), 16);
    // 开关信号输入量
    let switchThere = "";
    let switchThereNum = "";
    switchThere = parseInt(typeEight.substr(52, 2), 16).toString(2);
    for (var i = 0; i < 8 - switchThere.length; i++) {
      switchThereNum += 0;
    }
    switchThere = switchThereNum + switchThere;
    typeEightObj.switch = switchThere;
    // 继电器输出
    let relayThere = "";
    let relayThereNum = "";
    relayThere = parseInt(typeEight.substr(54, 4), 16).toString(2);
    for (var i = 0; i < 16 - relayThere.length; i++) {
      relayThereNum += 0;
    }
    relayThere = relayThereNum + relayThere
    typeEightObj.relay = relayThere.substr(5);
    // 排空命令
    typeEightObj.evacuation = parseInt(typeEight.substr(58, 2), 16);
    // 恢复出厂设置
    typeEightObj.rest = parseInt(typeEight.substr(60, 2), 16);
    // 进水流量
    typeEightObj.feedWaterFlow = (parseInt(typeEight.substr(62, 4), 16) / 100).toFixed(2);
    //纯水流量
    typeEightObj.pureWaterFlow = (parseInt(typeEight.substr(66, 4), 16) / 100).toFixed(2);
    //软水压力上限
    typeEightObj.softWaterPressureMax = (parseInt(typeEight.substr(70, 2), 16) / 100).toFixed(2);
    //软水压力下限
    typeEightObj.softWaterPressureMin = (parseInt(typeEight.substr(72, 2), 16) / 100).toFixed(2);
    //软水k值设置
    typeEightObj.softWaterPressureK = (parseInt(typeEight.substr(74, 4), 16) / 100).toFixed(2);
    typeEightObj.rubbish = rubbish;
    return {
      typeEightObj: typeEightObj
    };
  }
}
export function decode(did, callBack) {
  let decode16 = did.substr(3) //stringToHex(did).substr(18);
  return callBack(decode16)
  // localStorage.setItem("allTypeMsg", JSON.stringify(this.transferMsg));             
}
