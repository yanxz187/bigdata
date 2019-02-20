var dom = document.getElementById("myChart4");
var myChart4 = echarts.init(dom);
var app = {};
option = null;
option = {
    color: ['#04fdf9'],
    legend: {
        x:'40%',
        y:'3%',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
    },
    grid: {
    	top:'20%',
    	bottom: '3%',
        left: '0%',
        right: '4%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        name: '',
        boundaryGap: false,
        axisLine:{
        	show:false,
        	lineStyle:{
        		color:'#525252'
        	}
        },
        axisTick:{
        	show:false
        },
        axisLabel:{
            fontSize:8,
        	color:'#dedfe3'
        },
        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00','14:00','15:00','16:00','17:00','18:00','19:00']
    },
    yAxis: {
        type: 'value',
        name: '',
        min:0,
        max: 40,
        splitNumber:8,
        axisLine:{
        	show:false,
        },
        axisTick:{
        	show:false
        },
        axisLabel:{
            fontSize:8,
        	color:'#fff'
        },
        splitLine:{
        	lineStyle:{
        		type:'dotted',
				color:'#02b2fe'//F3F3F3	
        	}
        }
    },
    series: [{
            smooth: true,
            name: '总户次',
            type: 'line',
            symbol: 'circle',
            data: [5,4, 24, 32, 23, 12, 21, 13,32,25,29,21,36]
        }
    ]
};
if (option && typeof option === "object") {
    myChart4.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart4.resize();
})