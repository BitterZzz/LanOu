import echarts from 'echarts'
const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          // 双曲线表
          line1: function (id, name, minNum, maxNum, data, data2, inflowValue,clearwaterValue) {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()
            var colors = ['#FFB402', '#3ADA85', '#675bba']
            const optionData = {
              color: colors,
              grid: {
                left: 40,
                top: 70,
                right: 80,
                bottom: 60
              },
              tooltip: {
                show: true,
                trigger: 'item',
                axisPointer: function (params) {
                  return params;
                }
              },
              xAxis: [{
                  type: 'category',
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLine: {
                    symbol: ['none', 'path://M5,20 L5,5 L8,8 L5,2 L2,8 L5,5 L5.3,6 L5.3,20'],
                    symbolSize: [35, 38],
                    onZero: false,
                    lineStyle: {
                      color: '#ffffff'
                    }
                  },
                  axisPointer: {
                    label: {
                      formatter: function (params) {
                        return '降水量  ' + params.value +
                          (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                      }
                    }
                  },
                  axisTick: {
                    inside: true,
                  },
                  data: ['23', '24', '25', '26', '27', '28', '29', '30', '31', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']
                },
                {
                  type: 'category',
                  axisLine:{
                    lineStyle: {
                      color: "#ffffff"
                    }
                  },
                  axisPointer: {
                    label: {
                      formatter: function (params) {
                        return '降水量  ' + params.value +
                          (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                      }
                    }
                  }
                }
              ],
              yAxis: [{
                name: name,
                type: 'value',
                boundaryGap: [0, '100%'],
                splitNumber:11,
                splitLine: {
                  show: false
                },
                axisLine: {
                  symbol: ['none', 'path://M5,20 L5,5 L8,8 L5,2 L2,8 L5,5 L5.3,6 L5.3,20'],
                  symbolSize: [35, 38],
                  lineStyle: {
                    color: '#ffffff'
                  }
                },
                max: maxNum,
                min: minNum,
                axisLable: {
                  formatter: '{value}'
                },
                axisTick: {
                  inside: true,
                }

              }],
              series: [{
                  name: '2015 降水量',
                  type: 'line',
                  // xAxisIndex: 1,
                  smooth: true,
                  data: data,
                  markLine: {
                    symbol: ['none','none'],
                    data:[{
                      silent:true,
                      lineStyle:{
                        type:"solid",
                        color:"rgba(238,99,99)"
                      },
                      label:{
                        position:'end',
                        formatter:'纯净水指标'
                      },
                      yAxis:inflowValue
                    }]
                  }
                },
                {
                  name: '2016 降水量',
                  type: 'line',
                  smooth: true,
                  data: data2,
                  markLine: {
                    symbol: ['none','none'],
                    label:{
                      position:"end",
                      formatter:"进水指标"
                    },
                    data:[{
                      silent:false,
                      lineStyle:{
                        type:"solid",
                        color:"rgba(238,99,99)"
                      },
                      yAxis:clearwaterValue
                    }]
                  }                  
                }
              ]
            }

            this.chart.setOption(optionData)
          },
          // 但曲线表
          line2: function (id, value, minNum = 0, maxNum = 500) {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()
            const optionData = {
              grid: {
                x: 50,
                y: 20,
                x2: 30,
                y2: 20,
                borderWidth: 1
              },
              tooltip: {
                show: true,
                trigger: 'item',
                axisPointer: function (params) {
                  return params;
                }
              },              
              xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],
                splitNumber: 5,
                axisLine: {
                  symbol: ['none', 'path://M5,20 L5,5 L8,8 L5,2 L2,8 L5,5 L5.3,6 L5.3,20'],
                  onZero: false,
                  symbolSize: [35, 38]
                },
                axisTick: {
                  alignWithLabel: true,
                  length: 5,
                  inside: true
                }
              }],
              yAxis: [{
                type: 'value',
                splitLine: false,
                max: maxNum,
                min: minNum,
                splitNumber:20,
                axisTick: {
                  inside: true
                },
                axisLine: {
                  symbol: ['none', 'path://M5,20 L5,5 L8,8 L5,2 L2,8 L5,5 L5.3,6 L5.3,20'],
                  symbolSize: [35, 38]
                }
              }],
              series: [{
                data: value,
                type: 'line',
                smooth: true
              }]
            }
            this.chart.setOption(optionData)
          }
        }
      }
    }
  })
}

export default {
  install
}
