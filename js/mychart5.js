var dom = document.getElementById("myChart5");
var myChart5 = echarts.init(dom);
var app = {};
option = null;
option = {
    color: ['#f7d301'],
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
        data: ['1号', '2号', '3号', '4号', '5号', '6号', '7号','8号','9号','10号','11号','12号','13号','14号','15号']
    },
    yAxis: {
        type: 'value',
        name: '',
        min:0,
        max: 400,
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
            data: [150,340, 240, 320, 230, 120, 210, 130,320,250,290,201,306,150,90]
        }
    ]
};
if (option && typeof option === "object") {
    myChart5.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart5.resize();
})