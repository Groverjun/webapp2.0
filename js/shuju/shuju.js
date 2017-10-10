$("#C_left a").on("click",function(){
			$(this).find("a").addClass("act").siblings().removeClass("act")
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
				data: ['百度', '搜狗', '360', '百度移动', '360移动', '搜狗移动'],
				textStyle: {
					color: '#fff'
				}
			},
			series: [{
					name: '访问来源',
					type: 'pie',
					selectedMode: 'single',
					 radius : ['50%','70%'],
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
							textStyle:{color:"red"},
							selected: true,
							
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
				axisLabel: {
					interval: 0
				}
			},
			toolbox: {

			},

			legend: {
				data: ['主词数量', '产品词数量', '地区产品词数量', '产品行业词数量', '地区产品行业词数量'],
				textStyle: {
					color: '#fff'
				}
			},
			xAxis: [{
				type: 'category',
				data: ['百度', '搜狗', '360', '百度移动', '360移动', '搜狗移动'],
				axisPointer: {
					type: 'shadow',
					textStyle: {
						color: '#fff'
					}
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#fff'
					}
				}
			}],
			yAxis: [{
					type: 'value',
					min: 0,
					max: 1200,
					interval: 200,
					axisLabel: {
						formatter: '{value} ml'
					},
					axisLabel: {
						show: true,
						textStyle: {
							color: '#fff'
						}
					}
			},
			],
			series: [{
					name: '主词数量',
					type: 'bar',
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
					name: '产品词数量',
					type: 'bar',
					data: [{
							value: 400,
							name: '百度',
							selected: true
						},
						{
							value: 500,
							name: '搜狗'
						},
						{
							value: 5,
							name: '360'
						},
						{
							value: 200,
							name: '百度移动'
						},
						{
							value: 330,
							name: '搜狗移动'
						},
						{
							value: 150,
							name: '360移动'
						},
					]
				},
								{
					name: '地区产品词数量',
					type: 'bar',
					data: [{
							value: 400,
							name: '百度',
							selected: true
						},
						{
							value: 500,
							name: '搜狗'
						},
						{
							value: 5,
							name: '360'
						},
						{
							value: 200,
							name: '百度移动'
						},
						{
							value: 330,
							name: '搜狗移动'
						},
						{
							value: 150,
							name: '360移动'
						},
					]
				},
								{
					name: '产品行业词数量',
					type: 'bar',
					data: [{
							value: 400,
							name: '百度',
							selected: true
						},
						{
							value: 500,
							name: '搜狗'
						},
						{
							value: 5,
							name: '360'
						},
						{
							value: 200,
							name: '百度移动'
						},
						{
							value: 330,
							name: '搜狗移动'
						},
						{
							value: 150,
							name: '360移动'
						},
					]
				},
								{
					name: '地区产品行业词数量',
					type: 'bar',
					data: [{
							value: 400,
							name: '百度',
							selected: true
						},
						{
							value: 500,
							name: '搜狗'
						},
						{
							value: 5,
							name: '360'
						},
						{
							value: 200,
							name: '百度移动'
						},
						{
							value: 330,
							name: '搜狗移动'
						},
						{
							value: 150,
							name: '360移动'
						},
					]
				}
			]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option1);

		myChart2.setOption(option2);
		$(window).resize(function() {
			myChart2.resize();
			myChart.resize();
		})