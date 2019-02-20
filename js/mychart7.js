var dom = document.getElementById("myChart7");
var myChart7 = echarts.init(dom);
var app = {};
option = null;
var test_data = [
    {
        "name": "省级以上",
        "value": "32.62"
    }
];
var maxData = 87.8,
    seriesd = [],
    legend = [];

for (var j in test_data) {
    if (legend.indexOf(test_data[j]["name"] == -1)) {
        legend.push({
            'icon': 'rect',
            "name": test_data[j]["name"]
        });
    }
    var ra = test_data.length - 1 - j;
    seriesd.push({
        name: test_data[j]["name"],
        type: 'pie',
        radius: ['40%', '100%'],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    formatter: function(params) {
                        if (params.name == "hide") {
                            return null
                        } else {
                            if (params.name.indexOf("showtip_") != -1) {
                                var num = Number(params.name.split("_")[1]);
                            } else {
                                var num = params.value;
                            }
                            if (Number(num) == 0) return params.seriesName + ":" + Number(num) + "";
                            return  parseFloat(num * 100 / maxData).toFixed(2) + "%";
                        }
                    },
                    position:'inner',
                    textStyle:{
                        color:'#fff',
                        fontSize:10,
                    } 
                }
            }
        },
        hoverAnimation: false,
        startAngle: 180,
        center: ["50%", "80%"],
        data: [{
                value: test_data[j]["value"],
                name: test_data[j]["name"],
                label: {
                    normal: {
                        postion: "center"
                    }
                },
            },
            {
                value: maxData - test_data[j]["value"],
                itemStyle: {
                    normal: {
                        color: '#fedc00',
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        }
                    },
                },
                name: '市级以上'
            },
            {
                value: maxData,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)'
                    }
                }
            }
        ]
    })
}
var initnum = parseFloat(seriesd[0].data[0]["value"] * 100 / maxData).toFixed(2);
seriesd.push({
    type: 'gauge',
    z: 3,
    min: 0,
    max: 100,
    splitNumber: 5,
    // center: ['45%', '75%'], // 默认全局居中
    radius: '0%',
    endAngle: 0,
    startAngle: 180,
    axisLabel: {
        show: false,
        formatter: "{value}%"
    },
    axisLine: { // 坐标轴线 
        show: false,
        lineStyle: {
            color: [
                [1, "rgba(203,203,203,1)"]
            ], //仪表盘颜色
            width: 2, //仪表盘宽度
        }
    },
    axisTick: { // 坐标轴小标记
        show:false,
        length: 5, // 属性length控制线长
        lineStyle: { // 属性lineStyle控制线条样式
            color: 'auto'
        }
    },
    splitLabel: {show: false},
    pointer: {show: false},
    splitLine: { // 分隔线
        show: false,
        
    },
    title: {
        show: false
    },
    detail: { //显示数据
        show: false,
    },
    itemStyle: {
        normal: {
            color: "#676767", //仪表盘颜色
        }
    },
    data: [{
        value: initnum
    }]

})
option = {
    maxnum: maxData,
    tooltip: {
    show: false,
    formatter: function(params) {
        if (params.name == "hide") {
            return null
        } else {
            if (params.name.indexOf("showtip_") != -1) {
                var num = Number(params.name.split("_")[1]);
            } else {
                var num = params.value;
            }
        if (Number(num) == 0) return params.seriesName + ":" + Number(num) + "";
        return params.seriesName + ":" + parseFloat(num * 100 / maxData).toFixed(2) + "%";
        }
    }
},
grid: {
    top: "5%",
    bottom: "5%",
// height: 0,
    left: "1%",
    right: '1%',
},
legend: {
    orient: '',
    x:'7%',
    y:'-2%',
    itemWidth: 8,
    itemHeight: 4,
    textStyle:{
        color:'#fff',
        fontSize:12
    }
},
series: seriesd,
color:["#04fdf7"]
};
if (option && typeof option === "object") {
    myChart7.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart7.resize();
})