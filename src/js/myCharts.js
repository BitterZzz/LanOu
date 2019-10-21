import echarts from 'echarts'
const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          // 双曲线表
          line1: function (id, name, minNum, maxNum, data, data2) {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()
            var colors = ['#FFB402', '#3ADA85', '#675bba']
            const optionData = {
              color: colors,
              tooltip: {
                show:true,
                trigger: 'item',
                axisPointer: function(params){
                  return params;
                }
              },
              // grid: {
              //   top: 70,
              //   bottom: 50
              // },
              xAxis: [
                {
                  type: 'category',
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLine: {
                    onZero: false,
                    lineStyle: {
                      color: '#ffffff'
                    }
                  },
                  axisPointer: {
                    label: {
                      formatter: function (params) {
                        return '降水量  ' + params.value
                          + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                      }
                    }
                  },
                  data: ['23', '24', '25', '26', '27', '28', '29', '30', '31', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']
                },
                {
                  type: 'category',
                  // axisTick: {
                  //   alignWithLabel: true
                  // },
                  // axisLine: {
                  //   onZero: false,
                  //   lineStyle: {
                  //     color: colors[0]
                  //   }
                  // },
                  axisPointer: {
                    label: {
                      formatter: function (params) {
                        return '降水量  ' + params.value
                          + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                      }
                    }
                  }
                }
              ],
              yAxis: [
                {
                  name: name,
                  type: 'value',
                  boundaryGap: [0, '100%'],
                  splitLine: {
                    show: false
                  },
                  axisLine: {
                    lineStyle: {
                      color: '#ffffff'
                    }
                  },
                  max: maxNum,
                  min: minNum,
                  axisLable: {
                    formatter: '{value}'
                  }

                }
              ],
              series: [
                {
                  name: '2015 降水量',
                  type: 'line',
                  // xAxisIndex: 1,
                  smooth: true,
                  data: data
                },
                {
                  name: '2016 降水量',
                  type: 'line',
                  smooth: true,
                  data: data2
                }
              ]
            }

            this.chart.setOption(optionData)
          },
          // 但曲线表
          line2: function (id) {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()
            const optionData = {
              xAxis: {
                type: 'category',
                data: ['1', '8', '15', '22', '30']
              },
              yAxis: [{
                type: 'value',
                splitLine: false,
                max:500,
                min:0
              }],
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
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
install}
