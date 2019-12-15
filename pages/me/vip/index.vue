<template>
	<view class="content">
		<view class="vip-title">开通会员</view>
		<view class="vip-warp" v-for="(item,index) in vipList" :key="index">
			<view class="vip-warp-title">
				<view class="title">{{item.title}}
				</view>
				<view class="vip-warp-item">
					<button type="primary" class="btn" size="mini" @click="handleBtn" :plain="true">确认开通</button>
				</view>
			</view>
			<view class="vip-warp-list">
				<view class="vip-warp-item">原价：{{item.originalPrice}}</view>
				<view class="vip-warp-item">现价：{{item.presentPrice}}</view>

			</view>
			<view class="vip-warp-desc">{{item.desc}}</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vipList: [{
					title: '银卡会员',
					originalPrice: '19或1元加一本小学生课外书',
					presentPrice: "优惠价1元需在一个月内拉四名实名会员",
					desc: "服务说明：每天查看五名信息占广告一次"
				}, {
					title: '金卡会员',
					originalPrice: 99,
					presentPrice: '优惠价1元需在一个月内拉二十名实名会员',
					desc: "服务说明：每天查看五名信息占广告一次"
				}, {
					title: '砖石会员',
					originalPrice: 1999,
					presentPrice: '',
					desc: "服务说明：无需看广告"
				}, {
					title: '黑卡会员',
					originalPrice: "洽谈",
					presentPrice: '',
					desc: "服务说明：无需看广告"
				}]
			}
		},
		methods: {
			handleBtn() {
				uni.showToast({
					icon: "none",
					title: `该功能暂未开通，请与管理联系！`,
					showCancel: false
				});
			}
		},
	}
</script>

<style>
	@import url("../../../assets/common.css");

	.content {
		padding: 8px;
		background-color: #fff;
	}

	.vip-title {
		font-size: 18px;
		line-height: 35px;
	}

	.vip-warp {
		border-bottom: 1px solid #dedede;
		padding: 8px 0;
	}

	.vip-warp:last-child {
		border: none;
	}

	.vip-warp-title {
		display: flex; 
		justify-content: space-between;
		font-size: 16px;
		line-height: 30px;
	}
	.vip-warp-title .title{
		font-size: 16px;
	}

	.vip-warp-list {
		/* display: flex; */
		/* justify-content: space-between; */
	}

	.vip-warp-item {
		line-height: 25px;
	}

	.vip-warp-item .btn {
		height: 20px;
		line-height: 18px;
		font-size: 12px;
	}

	.vip-warp-desc {
		font-size: 13px;
	}
</style>
