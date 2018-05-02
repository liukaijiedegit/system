<template>
	<div class="mRight">
		<div class="mrLeft">
			<div class="mrLtop mrLblock boxShadow MytableLoading">
				<div class="tableBox">
					<div class="tableTitle">
						<ul>
							<li>地点</li>
							<li>名称</li>
							<li>时间</li>
							<li>状态</li>
						</ul>
					</div>
					<div class="table">
						<table border="0" cellpadding="0" cellspacing="0">
							<tr>
								<td>广州省某地区</td>
								<td>最懂事美丽善良的梦梦</td>
								<td>2018-03-12 14:12:36</td>
								<td>在线</td>
							</tr>
							<tr>
								<td>广州省某地区</td>
								<td>最懂事美丽善良的梦梦</td>
								<td>2018-03-12 14:12:36</td>
								<td>在线</td>
							</tr>
							<tr>
								<td>广州省某地区</td>
								<td>最懂事美丽善良的梦梦</td>
								<td>2018-03-12 14:12:36</td>
								<td>在线</td>
							</tr>
							<tr>
								<td>广州省某地区</td>
								<td>最懂事美丽善良的梦梦</td>
								<td>2018-03-12 14:12:36</td>
								<td>在线</td>
							</tr>
							<tr>
								<td>广州省某地区</td>
								<td>最懂事美丽善良的梦梦</td>
								<td>2018-03-12 14:12:36</td>
								<td>在线</td>
							</tr>
							<tr>
								<td>广州省某地区</td>
								<td>最懂事美丽善良的梦梦</td>
								<td>2018-03-12 14:12:36</td>
								<td>在线</td>
							</tr>
							<tr>
								<td>广州省某地区</td>
								<td>最懂事美丽善良的梦梦</td>
								<td>2018-03-12 14:12:36</td>
								<td>在线</td>
							</tr>
							<tr>
								<td>广州省某地区</td>
								<td>最懂事美丽善良的梦梦</td>
								<td>2018-03-12 14:12:36</td>
								<td>在线</td>
							</tr>
							<tr>
								<td>广州省某地区</td>
								<td>最懂事美丽善良的梦梦</td>
								<td>2018-03-12 14:12:36</td>
								<td>在线</td>
							</tr>
							<tr>
								<td>广州省某地区</td>
								<td>最懂事美丽善良的梦梦</td>
								<td>2018-03-12 14:12:36</td>
								<td>在线</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div class="mrLfoot mrLblock boxShadow">
				<div class="mRightShowspan"><span class="Showspan"></span>
					<h5>告警系统</h5></div>
				<div id="Bar" class="Showloading"></div>
			</div>
		</div>
		<div class="mrCenter">
			<div class="centerBox boxShadow">
				<div class="mrCblock">
					<div class="mRightShowspan mRightShowspan2"><span class="Showspan"></span>
						<h5> 系统在线用户</h5></div>
					<div id="count" class="Showcentre mrbox"></div>
				</div>
				<div class="mrCblock">
					<div class="mRightShowspan mRightShowspan2"><span class="Showspan"></span>
						<h5>流媒体</h5></div>
					<!--	<Userunmber></Userunmber>-->
					<div id="userunmber" class="Showmedia mrbox"></div>
				</div>
				<div class="mrCblock">
					<div class="mRightShowspan mRightShowspan2"><span class="Showspan"></span>
						<h5>盒子使用量</h5></div>
					<div id="amount" class="Showcentre mrbox"></div>
				</div>
			</div>
		</div>
		<div class="mrRight">
			<div class="mrRtop mrRblock boxShadow">
				<div class="mRightShowspan"><span class="Showspan"></span>
					<h5>TOP5主机CPU利用率</h5></div>
				<div id="cpuBar"></div>
			</div>
			<div class="mrRfoot mrRblock boxShadow">
				<div class="mRightShowspan"><span class="Showspan"></span>
					<h5>TOP5主机内存利用率</h5></div>
				<div id="line"></div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import customed from "../../script/customed";
echarts.registerTheme("customed", customed);

$(function() {
  var hei = document.documentElement.clientHeight;
  $(".centerBox").css("height", "97.1%");
});

export default {
  data() {
    return {};
  },
  mounted() {
    this.createChartOne(),
      this.createChartTwo(),
      this.createChartAmount(),
      this.createChartCount(),
      this.createChartLine(),
      this.createChartCpu();
    var wid = document.documentElement.clientWidth,
		hei = document.documentElement.clientHeight;
    var fheight = $(".head").height();

    $(".mLeft").css("height", hei - fheight);
    $(".mrLeft").css("height", hei - fheight - 12);
    $(".mrCenter").css("height", hei - fheight - 12);
    $(".centerBox").css("height", $(".centerBox").height() + 24);
    $(".navMenubox").css("height", hei - fheight + 24);
    $(".mrRight").css("height", hei - fheight - 12);
  },
  methods: {
    createChartOne: function() {
      var wid = document.documentElement.clientWidth;
      var ss = "135";
      var ChartWidth = [20, 18, 14];
      if (wid < 1441) {
        ChartWidth = [15, 12, 10];
      }
      let myChart = this.$echarts.init(
        document.getElementById("userunmber"),
        "customed"
      );
      myChart.setOption({
        title: {
          text: "流媒体" + "\n" + ss,
          x: "center",
          top: "50%",
          textStyle: {
            color: "#ffffff",
            fontWeight: "normal",
            fontSize: ChartWidth[0]
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          itemWidth: 12,
          itemHeight: 12,
          left: "19%",
          top: "2%",
          data: ["在线", "离线"],
          textStyle: {
            color: "#ffffff"
          }
        },
        series: [
          {
            name: "在线率" + "135",
            type: "pie",
            radius: ["50%", "72%"],
            center: ["50%", "58%"],

            data: [
              {
                value: 135,
                name: "在线"
              },
              {
                value: 1548,
                name: "离线"
              }
            ],
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#57e28d",
                    "#9e9ea6",
                    "#FCCE10",
                    "#E87C25",
                    "#27727B",
                    "#FE8463",
                    "#9BCA63",
                    "#FAD860",
                    "#F3A43B",
                    "#60C0DD",
                    "#D7504B",
                    "#C6E579",
                    "#F4E001",
                    "#F0805A",
                    "#26C0C0"
                  ];
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true,
                  position: "top",
                  formatter: "{b}\n{c}"
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    createChartTwo: function() {
      var wid = document.documentElement.clientWidth,
        hei = document.documentElement.clientHeight;
      var fheight = $(".Copyright").height();
      $(".wraper").css("height", hei - fheight);
      $("#content-lkj").css("height", hei - fheight);
      var ss = "135";
      var ChartWidth = [20, 18, 14];
      if (wid < 1441) {
        ChartWidth = [15, 12, 10];
      }
      let myChart = this.$echarts.init(
        document.getElementById("Bar"),
        "customed"
      );
      myChart.setOption({
        title: {
          top: "7%",
          left: "2%",
          textStyle: {
            color: "#ffffff",
            fontWeight: "normal",
            fontSize: 14
          }
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        grid: {
          top: "20%"
        },
        xAxis: {
          type: "category",
          data: ["紧急", "严重", "一般", "提示"]
        },
        yAxis: {
          max: 1,
          type: "value"
        },
        series: [
          {
            data: [0.4, 0.8, 0.3, 0.58],
            type: "bar",
            barWidth: 14,
            label: {
              normal: {
                textStyle: {
                  color: "#FFFFFF"
                }
              }
            },
            itemStyle: {
              emphasis: {
                barBorderRadius: [8, 8, 0, 0]
              },
              normal: {
                barBorderRadius: [8, 8, 0, 0],
                color: function(params) {
                  var colorList = [
                    ["#3c87fc", "#27cdfd"],
                    ["#ff6396", "#fea57d"],
                    ["#ff6340", "#ffb62c"],
                    ["#1af58f", "#4de3c6"],
                    ["#64fb30", "#e8f88d"]
                  ];
                  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colorList[params.dataIndex][0]
                    },
                    {
                      offset: 1,
                      color: colorList[params.dataIndex][1]
                    }
                  ]);
                },
                label: {
                  show: true,
                  position: "top",
                  formatter: "{b}\n{c}"
                }
              }
            }
          }
        ]
      });
    },
    createChartAmount: function() {
      var wid = document.documentElement.clientWidth,
        hei = document.documentElement.clientHeight;
      var fheight = $(".Copyright").height();
      $(".wraper").css("height", hei - fheight);
      $("#content-lkj").css("height", hei - fheight);
      var ss = "135";
      var ChartWidth = [20, 18, 14];
      if (wid < 1441) {
        ChartWidth = [15, 12, 10];
      }
      var myChart = this.$echarts.init(
        document.getElementById("amount"),
        "customed"
      );
      var data = [
        {
          value: 3661,
          name: "使用中"
        },
        {
          value: 5713,
          name: "未使用"
        }
      ];
      myChart.setOption({
        title: {
          text: "盒子" + "\n" + "使用量",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            fontSize: ChartWidth[1]
          }
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        //		legend: {
        //			orient: 'horizontal',
        //			bottom: '0%',
        //
        //		},
        series: [
          {
            type: "pie",
            selectedMode: "single",
            radius: ["25%", "58%"],
            color: ["#86D560", "#7F7F7F", "#59ADF3", "#FF999A", "#FFCC67"],

            label: {
              normal: {
                position: "inner",
                formatter: "{d}%",

                textStyle: {
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: ChartWidth[2]
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data
          },
          {
            type: "pie",
            radius: ["58%", "83%"],
            itemStyle: {
              normal: {
                color: "#505b7c"
              },
              emphasis: {
                color: "#ADADAD"
              }
            },
            label: {
              normal: {
                position: "inner",
                formatter: "{c}台",
                textStyle: {
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: ChartWidth[2]
                }
              }
            },
            data: data
          }
        ]
      });
    },

    createChartCount: function() {
      var wid = document.documentElement.clientWidth,
        hei = document.documentElement.clientHeight;
      var fheight = $(".Copyright").height();
      $(".wraper").css("height", hei - fheight);
      $("#content-lkj").css("height", hei - fheight);
      var ss = "135";
      var ChartWidth = [20, 18, 14];
      if (wid < 1441) {
        ChartWidth = [15, 12, 10];
      }
      var font = "在线人数";
      var myChart = this.$echarts.init(
        document.getElementById("count"),
        "customed"
      );
      var percent = 400;
      var number = 100;

      function getData() {
        return [
          {
            value: percent,
            itemStyle: {
              normal: {
                color: "#57e28d",
                shadowBlur: 10,
                shadowColor: "#57e28d"
              }
            }
          },
          {
            itemStyle: {
              normal: {
                color: "transparent"
              }
            }
          }
        ];
      }

      myChart.setOption({
        title: {
          text: font + "\n" + percent,
          x: "center",
          y: "center",
          textStyle: {
            color: "#ffffff",
            fontWeight: "bolder",
            fontSize: ChartWidth[0]
          }
        },

        series: [
          {
            type: "pie",
            radius: ["49%", "69%"],
            silent: true,
            label: {
              normal: {
                show: false
              }
            },

            data: [
              {
                value: 1,
                itemStyle: {
                  normal: {
                    color: "#313443",
                    shadowBlur: 10,
                    shadowColor: "#313443"
                  }
                }
              }
            ],

            animation: false
          },

          {
            type: "pie",
            radius: ["49%", "69%"],
            silent: true,
            label: {
              normal: {
                show: false
              }
            },

            data: [
              {
                value: 1,
                itemStyle: {
                  normal: {
                    color: "#586590",
                    shadowBlur: 50,
                    shadowColor: "#586590"
                  }
                }
              }
            ],

            animation: false
          },

          {
            name: "main",
            type: "pie",
            radius: ["69%", "71%"],
            label: {
              normal: {
                show: false
              }
            },
            data: getData(),

            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500
          }
        ]
      });

      setInterval(function() {
        percent = +Math.floor(Math.random() * 1000) + 60;

        myChart.setOption({
          title: {
            text: font + "\n" + percent
          },
          series: [
            {
              name: "main",
              data: getData()
            }
          ]
        });
      }, 1000);
    },
    createChartLine: function() {
      var wid = document.documentElement.clientWidth,
        hei = document.documentElement.clientHeight;
      var fheight = $(".Copyright").height();
      $(".wraper").css("height", hei - fheight);
      $("#content-lkj").css("height", hei - fheight);
      var ss = "135";
      var ChartWidth = [20, 18, 14];
      if (wid < 1441) {
        ChartWidth = [15, 12, 10];
      }
      var Memory_Chart = echarts.init(
        document.getElementById("line"),
        "customed"
      );
      var equipment = [],
        data_time = [],
        seriesData = [],
        //颜色组
        colors = [
          "#3c87fe",
          "#ff5c40",
          "#ff6199",
          "#1ce3c2",
          "#50fc1c",
          "#FAD860",
          "#F3A43B",
          "#60C0DD"
        ],
        //数据组
        storageData = {
          0: [11.6, 5.9, 9.0, 26.4, 30],
          1: [33.9, 5.9, 11.1, 18.7, 22],
          2: [22.9, 5.9, 11.1, 18.7, 48.3],
          3: [43.9, 5.9, 11.1, 18.7, 25],
          4: [3.9, 5.9, 11.1, 18.7, 22]
        },
        //渐变颜色组
        linear = [
          {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(81, 227, 120, 0.5)"
              },
              {
                offset: 1,
                color: "rgba(81, 227, 120, 0)"
              }
            ])
          },
          {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(255, 127, 59, 0.5)"
              },
              {
                offset: 1,
                color: "rgba(255, 127, 59, 0)"
              }
            ])
          },
          {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(255, 94, 66, 0.5)"
              },
              {
                offset: 1,
                color: "rgba(255, 94, 66, 0)"
              }
            ])
          },
          {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(60, 135, 254, 0.5)"
              },
              {
                offset: 1,
                color: "rgba(60, 135, 254, 0)"
              }
            ])
          },
          {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(245, 249, 152, 0.5)"
              },
              {
                offset: 1,
                color: "rgba(245, 249, 152, 0)"
              }
            ])
          }
        ];
      $.ajax({
        url: "../../static/date/indexs.json",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function(data) {
          console.log(data);
          if (data.length === 0) {
            var option = {
              title: {},
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow"
                }
              },
              legend: {
                data: [
                  {
                    name: "2011年",
                    icon: "circle"
                  }
                ]
              },
              grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                top: "20%",
                containLabel: true
              },
              xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["10:37", "10:45", "10:50", "10:55", "11:00"]
              },
              yAxis: {
                type: "value"
              },
              series: [
                {
                  data: [56, 36, 81, 45, 28],
                  type: "line",
                  smooth: true,
                  areaStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "rgba(81, 227, 120, 0.5)"
                        },
                        {
                          offset: 1,
                          color: "rgba(81, 227, 120, 0)"
                        }
                      ])
                    }
                  }
                },
                {
                  data: [22, 66, 26, 70, 8],
                  type: "line",
                  smooth: true,
                  areaStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "rgba(255, 127, 59, 0.5)"
                        },
                        {
                          offset: 1,
                          color: "rgba(255, 127, 59, 0)"
                        }
                      ])
                    }
                  }
                }
              ]
            };
            Memory_Chart.setOption(option);
            return false;
          }

          console.log(data.length);
          for (var i = 0; i < data.length; i++) {
            var serverName = data[i].ServerName;
            equipment.push(serverName);
            var SysServerMemoryRateList = data[i].SysServerMemoryRateList;
            var Server_time = [],
              Server_numder = [];
            for (var j = 0; j < SysServerMemoryRateList.length; j++) {
              Server_numder.push(SysServerMemoryRateList[j].MemoryRate);
              var times = SysServerMemoryRateList[j].UpdateTime;
              // 去掉年月
              var arr = times.split(" ");
              arr.shift();
              //去掉秒
              var ary = arr[0];
              var s = ary.split(":", 2);
              var work = s[0] + ":" + s[1];
              Server_time.push(work);
            }
            storageData[i] = Server_numder;
            console.log(storageData[i]);
            data_time = Server_time;
            //console.log('我是时间' + data_time)

            var ymarry = {
              smooth: true,
              name: equipment[i],
              type: "line",
              xAxisIndex: 0,
              areaStyle: {
                normal: linear[i]
              },
              data: storageData[i]
            };
            seriesData.push(ymarry);
          }
          var option_Memory = {
            title: {},
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross"
              }
            },
            legend: {
              bottom: "5%",
              data: equipment
            },
            grid: {
              bottom: 80,
              top: "20%",
              containLabel: true
            },
            xAxis: {
              type: "category",
              data: data_time,
              boundaryGap: false
            },
            yAxis: {
              type: "value"
            },
            series: seriesData
          };
          Memory_Chart.setOption(option_Memory);
        },
        error: function() {
          console.log("内存报错");
        }
      });
    },
    createChartCpu: function() {
      var wid = document.documentElement.clientWidth,
        hei = document.documentElement.clientHeight;
      var fheight = $(".Copyright").height();
      $(".wraper").css("height", hei - fheight);
      $("#content-lkj").css("height", hei - fheight);
      var ss = "135";
      var ChartWidth = [20, 18, 14];
      if (wid < 1441) {
        ChartWidth = [15, 12, 10];
      }
      var cpuData = [];
      var aDiv = '<div id="hBar"></div>';
      $("#cpuBar").append(aDiv);
      $.get(
        "../../static/date/cpuData.json",
        function(msg) {
          console.log(msg);
          cpuData = msg;
          if (msg.length === 0) {
            //获取 数据出错的情况
            var option = {
              title: {
                subtext: "无设备数据"
              },
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow"
                }
              },
              legend: {
                data: [
                  {
                    name: "2011年",
                    icon: "circle"
                  }
                ]
              },
              grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
              },
              xAxis: {
                type: "value",
                boundaryGap: [0, 0.01]
              },
              yAxis: {
                type: "category",
                data: ["数值", "数值", "数值", "数值", "数值"]
              },
              series: [
                {
                  type: "bar",
                  data: [0, 0, 0, 0, 0]
                }
              ]
            };
            hBar.setOption(option);
            return false;
          }
          var arrY = []; //y轴服务器名称
          var arrX = []; //x轴CPU使用率
          $.each(cpuData, function(index, value) {
            arrY.push(value.ServerName);
            arrX.push(parseFloat(value.CpuRate).toFixed(2));
          });
          console.log(arrY);
          var myChart = echarts.init(
            document.getElementById("hBar"),
            "customed"
          );
          var optionCpu = {
            title: {
              textStyle: {
                fontSize: 20,
                fontWeight: "900"
              }
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {
              data: arrY
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "10%",
              containLabel: true
            },
            xAxis: {
              type: "value",
              max: 100,
              boundaryGap: [0, 0.01]
            },
            yAxis: {
              type: "category",
              data: arrY
            },
            series: [
              {
                type: "bar",
                barWidth: 20,
                label: {
                  normal: {
                    textStyle: {
                      color: "#FFFFFF"
                    }
                  }
                },
                data: arrX,
                itemStyle: {
                  normal: {
                    color: function(params) {
                      var colorList = [
                        ["#64fb30", "#e8f88d"],
                        ["#1af58f", "#4de3c6"],
                        ["#ff6396", "#fea57d"],
                        ["#ff6340", "#ffb62c"],
                        ["#3c87fc", "#27cdfd"]
                      ];
                      return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                          offset: 1,
                          color: colorList[params.dataIndex][0]
                        },
                        {
                          offset: 0,
                          color: colorList[params.dataIndex][1]
                        }
                      ]);
                    },
                    label: {
                      show: true,
                      position: "insideRight"
                    }
                  }
                },
                barWidth: ChartWidth
              }
            ]
          };
          myChart.setOption(optionCpu);
        },
        "json"
      );
    }
  }
};
</script>

<style>

.mRightTwo {
  padding: 34px 42px;
  margin: 15px 27px 15px 15px;
  background: #354166;
  box-shadow: 0px 0px 26px #01060e;
}

.zForm span {
  float: left;
  color: #eee;
  display: block;
  font-size: 14px;
  overflow: hidden;
  line-height: 36px;
}

.zTable {
  clear: both;
  height: 94%;
  overflow: hidden;
  padding-top: 37px;
}

.elTable {
  height: 84.9%;
  overflow: hidden;
}
.zInput {
  float: left;
  width: 120px;
  height: 36px;
  font-size: 14px;
  margin-left: 3px;
  line-height: 36px;
  padding-left: 14px;
  margin-right: 20px;
  background: #2a3558;
  border: 1px #3b4872 solid;
}

.zForm button {
  float: left;
  color: #eee;
  height: 38px;
  font-size: 14px;
  margin-left: 11px;
  text-align: center;
  line-height: 38px;
  padding: 0px 15px;
  background: #1b274c;
  border: 1px #3b4872 solid;
}
.zSelect {
  float: left;
  width: 148px;
}
.zForm span.btnRight {
  float: right;
  display: inline-block;
}
.el-input--suffix .el-input__inner {
  height: 38px;
  line-height: 38px;
  border: 1px #3b4872 solid;
  border-radius: 0;
}
.el-input--suffix .el-input__inner:hover {
  border: 1px #3b4872 solid;
}
input.el-input__inner:hover {
  border: 1px #3b4872 solid;
}
.el-select .el-input__inner:focus {
  border: 1px #3b4872 solid;
}
.el-select .el-input.is-focus .el-input__inner {
  border: 1px #3b4872 solid;
}
.el-table,
.el-table__expanded-cell,
.el-table th,
.el-table tr {
  background: none;
}

.el-table thead {
  font-size: 14px;
}

.el-table td,
.el-table th.is-leaf {
  font-weight: normal;
  text-align: center;
}
.el-table tr td {
  border-left: none; 
  border-right: none;
  border-top: 1px #4a567c solid;
  border-bottom: 1px #4a567c solid;
}
.el-table tr td:first-child {
  border-radius: 6px 0 0 6px;

  border-left: 1px #4a567c solid;
}
.el-table tr td:last-child {
  border-radius: 0 6px 6px 0;
  border-right:  1px #4a567c solid;
}

.el-table .el-table__body-wrapper .el-table__row td {
  background: #4a567c;
}

.el-table td,
.el-table th.is-leaf {
  border: none;
}

.el-table::before {
  height: 0px;
}

.el-checkbox__inner {
  background: none;
  border-color: #6c789f;
}

.el-table .cell {
  font-size: 14px;
}

.el-pagination {
  padding-top: 28px;
  text-align: right;
}

.el-pagination__total,
.el-pagination__jump {
  color: #fff;
}

.el-pagination .btn-next,
.el-pagination .btn-prev,
.el-pager li,
.el-pagination button:disabled {
  background: none;
}

.el-input__inner {
  color: #fff;
  background: #2a3558;
  border: 1px #3b4872 solid;
}

.el-select-dropdown {
  background: #2a3558;
  border: 1px #3b4872 solid;
}

.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background: #1b274c;
}

.el-popper[x-placement^="top"] .popper__arrow::after {
  border-top-color: #2a3558;
}

.el-pagination__sizes .el-input .el-input__inner:hover,
.el-input__inner:hover {
  border: 1px #3b4872 solid;
}

.el-table--enable-row-hover .el-table__body tr:hover > td {
  background: none;
}
.el-table--enable-row-hover .el-table__body tr:hover td {
  background: -webkit-linear-gradient(#3f7984, #485b7d, #3f7984);
  background: -o-linear-gradient(#3f7984, #485b7d, #3f7984);
  background: -moz-linear-gradient(#3f7984, #485b7d, #3f7984);
  background: linear-gradient(#3f7984, #485b7d, #3f7984);

  border-top: 1px #57e29b solid;
  border-bottom: 1px #57e29b solid;
}
.el-table tr:hover td:first-child {
  border-left: 1px #57e29b solid;
}
.el-table tr:hover td:last-child {
  border-right:  1px #57e29b solid;
}
.el-input--suffix .el-input__inner:hover {
  border: 1px #3b4872 solid;
}
.el-select .el-input__inner:focus {
  border: 1px #3b4872 solid;
}
.el-select .el-input.is-focus .el-input__inner {
  border: 1px #3b4872 solid;
}
.el-table thead.is-group th {
  background: none;
}
.el-checkbox__inner:hover {
	border-color: #57e29b;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
	border-color: #57e29b
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background: none;
    border-color: #57e29b;
}

</style>
