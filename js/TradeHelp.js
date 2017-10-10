$(".navActive li").click(function(){
	$(this).addClass("active").siblings().removeClass("active")
})

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('Pie'));
var myChart2 = echarts.init(document.getElementById('Bar'));
// 指定图表的配置项和数据
option1 = {
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b}: {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'left',
		data: ['百度','搜狗','360','百度移动','360移动','搜狗移动']
	},
	series: [{
			name: '访问来源',
			type: 'pie',
			selectedMode: 'single',
			radius: [0,'60%'],
			center: ['65%', '55%'],
			label: {
				normal: {
					position: 'inner'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: 40,
					name: '百度',
					selected: true
				},
				{
					value: 10,
					name: '搜狗'
				},
				{
					value: 5,
					name: '360'
				},
				{
					value: 20,
					name: '百度移动'
				},
				{
					value: 10,
					name: '搜狗移动'
				},
				{
					value: 15,
					name: '360移动'
				},
			]
		},
		{
			name: '访问来源',
			type: 'pie',
			radius: ['60%', '55%'],
		}
	]
};

option2 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        },
        axisLabel:{
        	interval:0
        }
    },
    toolbox: {

    },
    legend: {
        data:['蒸发量','降水量']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
    ]
};

// 使用刚指定的配置项和数据显示图表。

myChart.setOption(option1);

myChart2.setOption(option2);



$(window).resize(function(){
 myChart2.resize();
 myChart.resize();
})
