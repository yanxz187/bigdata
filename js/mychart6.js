var dom = document.getElementById("myChart6");
var myChart6 = echarts.init(dom);
var app = {};
option = null;
option = {
    grid: {
        top:"6%",
        left: '10%',
        right: '10%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['省级以上', '市级以上'],
        axisLabel: {
            show: true,
            textStyle:{
                color:'#d3d7e2',
                fontSize:12,
            }
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:'#01b2fe'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        min:0,
        max:'60',
        axisLabel: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:'#01b2fe'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        data: ['32.62', '52.68'],
        type: 'bar',
        itemStyle:{
            normal:{
               color: function(params) {
                    var colorList = ['#05fef8','#fedc00'];
                    return colorList[params.dataIndex]
                },
                label:{
                    show:true,
                    formatter: "{c} 万",
                    position:'top',
                    textStyle:{
                        color:'#fff',
                    } 
                }
            }
        }
    }]
};
if (option && typeof option === "object") {
    myChart6.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart6.resize();
})