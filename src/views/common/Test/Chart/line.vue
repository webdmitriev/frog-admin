<template>
	<div>
		<v-chart
				:forceFit="true"
				height="400"
				:data="data"
				:scale="scale"
				:padding="padding"
		>
			<v-tooltip crosshairs="y" :shared="true"></v-tooltip>
			<v-line
					position="date*price"
					color="country"
					shape='hv'
			>
			</v-line>
			<v-axis
					dataKey="date"
					:label="label"
			>
			</v-axis>
			<v-axis
					dataKey="price"
					:label="label"
			>
			</v-axis>
		</v-chart>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: [
					{"country": "America", "date": "2018/3/12", "price": 4.475}, {
					"country": "America",
					"date": "2018/3/5",
					"price": 4.4811
				}, {"country": "America", "date": "2018/2/26", "price": 4.4601}, {
					"country": "America",
					"date": "2018/2/19",
					"price": 4.4846
				}, {"country": "America", "date": "2018/2/12", "price": 4.5385}, {
					"country": "America",
					"date": "2018/2/5",
					"price": 4.5806
				}, {"country": "America", "date": "2018/1/29", "price": 4.5461}, {
					"country": "America",
					"date": "2018/1/22",
					"price": 4.5428
				}, {"country": "America", "date": "2018/1/15", "price": 4.562}, {
					"country": "America",
					"date": "2018/1/8",
					"price": 4.5227
				}, {"country": "America", "date": "2018/1/1", "price": 4.5324}, {
					"country": "America",
					"date": "2017/12/25",
					"price": 4.4762
				}, {"country": "America", "date": "2017/12/18", "price": 4.4833}, {
					"country": "America",
					"date": "2017/12/11",
					"price": 4.5485
				}, {"country": "America", "date": "2017/12/4", "price": 4.5723}, {
					"country": "America",
					"date": "2017/11/27",
					"price": 4.6208
				}, {"country": "America", "date": "2017/11/20", "price": 4.7028}, {
					"country": "America",
					"date": "2017/11/13",
					"price": 4.7465
				}, {"country": "America", "date": "2017/11/6", "price": 4.6779}, {
					"country": "America",
					"date": "2017/10/30",
					"price": 4.5708
				}, {"country": "America", "date": "2017/10/23", "price": 4.5353}, {
					"country": "America",
					"date": "2017/10/16",
					"price": 4.527
				}, {"country": "America", "date": "2017/10/9", "price": 4.6084}, {
					"country": "America",
					"date": "2017/10/2",
					"price": 4.7139
				}, {"country": "America", "date": "2017/9/25", "price": 4.702}, {
					"country": "America",
					"date": "2017/9/18",
					"price": 4.7583
				}, {"country": "America", "date": "2017/9/11", "price": 4.7911}, {
					"country": "America",
					"date": "2017/9/4",
					"price": 4.8469
				}, {"country": "America", "date": "2017/8/28", "price": 4.4123}, {
					"country": "America",
					"date": "2017/8/21",
					"price": 4.3592
				}, {"country": "America", "date": "2017/8/14", "price": 4.3939}, {
					"country": "America",
					"date": "2017/8/7",
					"price": 4.4254
				}, {"country": "America", "date": "2017/7/31", "price": 4.39}, {
					"country": "America",
					"date": "2017/7/24",
					"price": 4.3363
				}, {"country": "America", "date": "2017/7/17", "price": 4.2858}, {
					"country": "America",
					"date": "2017/7/10",
					"price": 4.3335
				}, {"country": "America", "date": "2017/7/3", "price": 4.2551}, {
					"country": "America",
					"date": "2017/6/26",
					"price": 4.3448
				}, {"country": "America", "date": "2017/6/19", "price": 4.3768}, {
					"country": "America",
					"date": "2017/6/12",
					"price": 4.4512
				}, {"country": "America", "date": "2017/6/5", "price": 4.6039}, {
					"country": "America",
					"date": "2017/5/29",
					"price": 4.5545
				}, {"country": "America", "date": "2017/5/22", "price": 4.5639}, {
					"country": "America",
					"date": "2017/5/15",
					"price": 4.5205
				}, {"country": "America", "date": "2017/5/8", "price": 4.5292}, {
					"country": "America",
					"date": "2017/5/1",
					"price": 4.5904
				}, {"country": "America", "date": "2017/4/24", "price": 4.654}, {
					"country": "America",
					"date": "2017/4/17",
					"price": 4.6275
				}, {"country": "America", "date": "2017/4/10", "price": 4.6174}, {
					"country": "America",
					"date": "2017/4/3",
					"price": 4.5011
				}, {"country": "America", "date": "2017/3/27", "price": 4.4131}, {
					"country": "America",
					"date": "2017/3/20",
					"price": 4.4348
				}, {"country": "America", "date": "2017/3/13", "price": 4.4399}, {
					"country": "America",
					"date": "2017/3/6",
					"price": 4.4665
				}, {"country": "America", "date": "2017/2/27", "price": 4.4011}, {
					"country": "America",
					"date": "2017/2/20",
					"price": 4.3772
				}, {"country": "America", "date": "2017/2/13", "price": 4.3975}, {
					"country": "America",
					"date": "2017/2/6",
					"price": 4.3556
				}, {"country": "America", "date": "2017/1/30", "price": 4.3745}, {
					"country": "America",
					"date": "2017/1/23",
					"price": 4.4228
				}, {"country": "America", "date": "2017/1/16", "price": 4.4958}, {
					"country": "America",
					"date": "2017/1/9",
					"price": 4.5622
				}, {"country": "America", "date": "2017/1/2", "price": 4.5578}, {
					"country": "China",
					"date": "2018/3/14",
					"price": 6.74
				}, {"country": "China", "date": "2018/2/28", "price": 6.9}, {
					"country": "China",
					"date": "2018/2/9",
					"price": 6.98
				}, {"country": "China", "date": "2018/1/26", "price": 7.03}, {
					"country": "China",
					"date": "2018/1/12",
					"price": 6.98
				}, {"country": "China", "date": "2017/11/17", "price": 6.78}, {
					"country": "China",
					"date": "2017/11/3",
					"price": 6.57
				}, {"country": "China", "date": "2017/9/30", "price": 6.45}, {
					"country": "China",
					"date": "2017/9/16",
					"price": 6.28
				}, {"country": "China", "date": "2017/8/5", "price": 6.2}, {
					"country": "China",
					"date": "2017/7/22",
					"price": 6.06
				}, {"country": "China", "date": "2017/6/24", "price": 6}, {
					"country": "China",
					"date": "2017/6/10",
					"price": 6.2
				}, {"country": "China", "date": "2017/5/26", "price": 6.35}, {
					"country": "China",
					"date": "2017/5/12",
					"price": 6.23
				}, {"country": "China", "date": "2017/4/13", "price": 6.44}, {
					"country": "China",
					"date": "2017/3/29",
					"price": 6.28
				}, {"country": "China", "date": "2017/3/15", "price": 6.46}, {
					"country": "China",
					"date": "2017/2/15",
					"price": 6.53
				}, {"country": "China", "date": "2017/1/26", "price": 6.49}, {
					"country": "China",
					"date": "2017/1/13",
					"price": 6.54
				}, {"country": "China", "date": "2017/12/29", "price": 6.49}, {
					"country": "Brent",
					"date": "2018/3/19",
					"price": 2.6331
				}, {"country": "Brent", "date": "2018/3/9", "price": 2.6277}, {
					"country": "Brent",
					"date": "2018/3/8",
					"price": 2.5412
				}, {"country": "Brent", "date": "2018/3/5", "price": 2.611}, {
					"country": "Brent",
					"date": "2018/2/28",
					"price": 2.5501
				}, {"country": "Brent", "date": "2018/2/14", "price": 2.6914}, {
					"country": "Brent",
					"date": "2018/2/2",
					"price": 2.4955
				}, {"country": "Brent", "date": "2018/2/1", "price": 2.7558}, {
					"country": "Brent",
					"date": "2018/1/30",
					"price": 2.7081
				}, {"country": "Brent", "date": "2018/1/24", "price": 2.7664}, {
					"country": "Brent",
					"date": "2017/12/20",
					"price": 2.9105
				}, {"country": "Brent", "date": "2017/12/13", "price": 2.6092}, {
					"country": "Brent",
					"date": "2017/12/8",
					"price": 2.6935
				}, {"country": "Brent", "date": "2017/12/6", "price": 2.5484}, {
					"country": "Brent",
					"date": "2017/11/17",
					"price": 2.6558
				}, {"country": "Brent", "date": "2017/11/14", "price": 2.5617}, {
					"country": "Brent",
					"date": "2017/10/13",
					"price": 2.6527
				}, {"country": "Brent", "date": "2017/9/27", "price": 2.2982}, {
					"country": "Brent",
					"date": "2017/8/31",
					"price": 2.4535
				}, {"country": "Brent", "date": "2017/8/30", "price": 2.1905}, {
					"country": "Brent",
					"date": "2017/8/14",
					"price": 2.1105
				}, {"country": "Brent", "date": "2017/7/25", "price": 2.2398}, {
					"country": "Brent",
					"date": "2017/7/21",
					"price": 2.0325
				}, {"country": "Brent", "date": "2017/7/13", "price": 2.1141}, {
					"country": "Brent",
					"date": "2017/7/6",
					"price": 2.0001
				}, {"country": "Brent", "date": "2017/6/27", "price": 2.1279}, {
					"country": "Brent",
					"date": "2017/5/25",
					"price": 1.9391
				}, {"country": "Brent", "date": "2017/5/10", "price": 2.3518}, {
					"country": "Brent",
					"date": "2017/4/18",
					"price": 2.0902
				}, {"country": "Brent", "date": "2017/3/29", "price": 2.4244}, {
					"country": "Brent",
					"date": "2017/3/2",
					"price": 2.1839
				}, {"country": "Brent", "date": "2017/2/10", "price": 2.4475}, {
					"country": "Brent",
					"date": "2017/2/7",
					"price": 2.3673
				}, {"country": "Brent", "date": "2017/1/26", "price": 2.4572}, {
					"country": "Brent",
					"date": "2017/1/18",
					"price": 2.3351
				}, {"country": "Brent", "date": "2017/1/11", "price": 2.4381}, {
					"country": "Brent",
					"date": "2017/1/9",
					"price": 2.7788
				}],
				label: {
					textStyle: {
						fill: '#aaaaaa'
					}
				},
				scale: [{
					dataKey: 'date',
					range: [0, 1],
					tickCount: 10,
					type: 'timeCat'
				}],
				padding: [50, 50, 70, 50],
			};
		}
	};
</script>

