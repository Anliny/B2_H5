<template>
	<view>
		<view class="list-content" v-for="(item,index) in list" :key="index">
			<view class="list-header">
				<text class="list-dateTime">{{item.dateTime}}</text>
				<button class="mini-btn" :plain="true" type="warn" size="mini">删除</button>
			</view>
			<text class="list-dateTime">{{item.desc}}</text>
			<view class="list-image-wrapper">
				<view class="list-image-item" v-for="(imageItem,i) in item.phone" :key="i">
					<image :src="imageItem" class="image" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				list:[
					{
						id:'1',
						dateTime:'2019-03-06',
						desc:"那是一个秋意盎然、金风送爽的日子，我和父母一起来到了位于上师大旁的康健园。一踏进公园，一股浓郁的桂香扑鼻而来，泌人心脾,让我心旷神怡，只见一朵朵开得正烈的金色桂花，迎风而立，仿佛在向我招手。我们追着这桂香，走进了清幽的公园。",
						phone:["/static/header.jpeg","/static/header.jpeg","/static/header.jpeg"]
					},{
						id:'1',
						dateTime:'2019-03-06',
						desc:"那是一个秋意盎然、金风送爽的日子，我和父母一起来到了位于上师大旁的康健园。一踏进公园，一股浓郁的桂香扑鼻而来，泌人心脾,让我心旷神怡，只见一朵朵开得正烈的金色桂花，迎风而立，仿佛在向我招手。我们追着这桂香，走进了清幽的公园。",
						phone:["/static/header.jpeg","/static/header.jpeg","/static/header.jpeg"]
					}
				]
					
				
			}
		},
	}
</script>

<style>
	.list-content{
		margin-top: 8px;
		padding: 8px;
		background-color: #fff;
	}
	.list-header{}
	.list-header .list-dateTime{
		font-size: 25px;
		font-weight: bold;
	}
	.list-header .mini-btn{
		float: right;
	}
	.list-dateTime{
		color: #353535;
		font-size: 16px;
	}
	.list-image-wrapper{
		display: flex;
		padding-top: 8px;
	}
	.list-image-wrapper .list-image-item{
		height: 80px;
		width: 80px;
		margin-right: 8px;
	}
</style>
