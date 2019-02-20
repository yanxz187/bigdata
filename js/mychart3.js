var dom = document.getElementById("myChart3");
var myChart3 = echarts.init(dom);
var app = {};
option = null;
/**
 * 图标所需数据
 */
var data = {
    id: 'echartPie',
    value: [98, 180, 45, 50,36,128],
    legend: ['发票代开', '发票发售', '纳税申报', '发票验旧','发票认证','综合业务'],
    color: ['#01b7ff', '#fd7c28', '#6fb440', '#fec900','#2e89dc','#00edf5'],
    tooltipShow:false,    //设置悬浮提示显示              --默认显示true
    hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
}

////////////////////////////////////////

/**
 * 数据处理
 */
var seriesData = []
data.value.forEach(function(item, index) {
    seriesData.push({
        value: item,
        name: data.legend[index]
    })
})
////////////////////////////////////////

var option = {
    tooltip: {
        trigger: 'item',
        show: data.tooltipShow === false ? false : true
    },
    legend: {
        orient: '',
        x:'55%',
        y:'0%',
        selectedMode: false,
        itemWidth: 8,
        itemHeight: 8,
        data: data.legend,
        textStyle:{
            color:'#fff',
            fontSize:12
        }
    },
    series: [{
        type: 'pie',
        hoverAnimation: data.hoverAnimation === false ? false : true,
        radius: ['25%', '64%'],
        center:['22%', '32%'],
        color: data.color,
        itemStyle:{
            show:false,
            borderColor:'#05fef8',
            borderWidth:1,
        },
        label: {
            normal: {
                position: 'inner',
                // formatter: '{d}%',
                formatter: function(param) {
                    if (!param.percent) return ''
                    var f = Math.round(param.percent * 10) / 10;
                    var s = f.toString();
                    var rs = s.indexOf('.');
                    if (rs < 0) {
                        rs = s.length;
                        s += '.';
                    }
                    while (s.length <= rs + 1) {
                        s += '0';
                    }
                    return s + '%';
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 8
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: seriesData
    }]
};
if (option && typeof option === "object") {
    myChart3.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart3.resize();
})