var http = ""
export default {
  //登录地址
  login: http + process.env.API_HOST + "/loginLanOu",
  //获取相应did字节
  getDidByPayload: http + process.env.API_HOST + "/getDidByPayload",
  //该用户可查看的设备
  getLanOuProjectInfoBydid: http + process.env.API_HOST + "/getLanOuProjectInfoBydid",
  //后台首页(保障信息和保养信息)
  getLanOuProjectInfo: http + process.env.API_HOST + "/getLanOuProjectInfo",
  //获取在线设备和离线设备
  getOnlineDevice: http + http + process.env.API_HOST + "/getOnlineDevice",
  //信息维护
  updateLanOuProjectInfo:http + process.env.API_HOST + "/updateLanOuProjectInfo",
  //进入净水器显示的数据
  getLanOuProjectInfoSearch:http + process.env.API_HOST + "/getLanOuProjectInfoSearch",
  // 获取所有账户信息
  getLanOuAccountInfo:http+ process.env.API_HOST + "/getLanOuAccountInfo",
  // 编辑页面
  getLanOuAccountInfoById:http + process.env.API_HOST + "/getLanOuAccountInfoById",
  // 删除单个账户信息
  deleteLanOuAccountInfo:http + process.env.API_HOST + "/deleteLanOuAccountInfo",
  // 获取全部用户信息
  getLanOuUserInfo:http + process.env.API_HOST + "/getLanOuUserInfo",
  // 启用与禁用
  updateByLanOuUserState:http + process.env.API_HOST + "/updateByLanOuUserState",
  // 删除单个用户信息
  deleteLanOuUser:http + process.env.API_HOST + "/deleteLanOuUser",
  //保存设置
  issuedData:http + process.env.API_HOST + "/issuedData",
  //所有机器did
  getLanOuByDid:http + process.env.API_HOST + "/getLanOuByDid",
  //新增功能接口
  addLanOuAccountInfo:http + process.env.API_HOST + "/addLanOuAccountInfo",
  //获取菜单信息
  getLanOuAuthority:http + process.env.API_HOST + "/getLanOuAuthority?levelId=0"
}
