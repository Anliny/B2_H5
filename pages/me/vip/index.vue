<template>
	<view class="content">
		<view class="vip-title">开通会员</view>
		<view class="vip-warp" v-for="(item,index) in vipList" :key="index">
			<view class="vip-warp-title">{{item.title}}</view>
			<view class="vip-warp-list">
				<view class="vip-warp-item">原价：￥{{item.originalPrice}}</view>
				<view class="vip-warp-item">现价：￥{{item.presentPrice}}</view>
				<view class="vip-warp-item">
					<button type="primary" class="btn" size="mini" @click="handleBtn" :plain="true">确认开通</button>
				</view>
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
					originalPrice: 20,
					presentPrice: 1,
					desc: "服务说明：这个服务就比较牛B了，  给了钱的，包一年"
				}, {
					title: '金卡会员',
					originalPrice: 20,
					presentPrice: 1,
					desc: "服务说明：这个服务就比较牛B了，  给了钱的，包一年"
				}, {
					title: '砖石会员',
					originalPrice: 20,
					presentPrice: 1,
					desc: "服务说明：这个服务就比较牛B了，  给了钱的，包一年"
				}, {
					title: '黑卡会员',
					originalPrice: 20,
					presentPrice: 1,
					desc: "服务说明：这个服务就比较牛B了，  给了钱的，包一年"
				}]
			}
		},
		methods: {
			handleBtn() {
				uni.showToast({
					icon:"none",
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
		font-size: 16px;
		line-height: 30px;
	}

	.vip-warp-list {
		display: flex;
		justify-content: space-between;
	}
	.vip-warp-item {
		line-height: 25px;
	}
	.vip-warp-item .btn{
		height: 25px;
		line-height: 23px;
	}
	.vip-warp-desc{
		font-size: 13px;
	}
</style>
