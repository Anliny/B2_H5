<template>
	<view class="content">
		<view class="vip-title">开通会员</view>
		<view class="vip-warp" v-for="(item,index) in gradeList" :key="index">
			<view class="vip-warp-title">
				<view class="title">{{item.gradeName}}
				</view>
				<view class="vip-warp-item">
					<button type="primary" class="btn" size="mini" @click="handleBtn" :plain="true">确认开通</button>
				</view>
			</view>
			<view class="vip-warp-list">
				<view class="vip-warp-item">原价：￥{{item.originalPrice}}</view>
				<view class="vip-warp-item">现价：￥{{item.presentPrice}}</view>

			</view>
			<view class="vip-warp-desc">{{item.illustrate}}</view>

		</view>
	</view>
</template>

<script>
	import appRequest from "@/utils/config.js"
	export default {
		data() {
			return {
				gradeList: []
			}
		},
		onLoad() {
			this.getGradeList()
		},
		methods: {
			// 获取资费列表
			getGradeList(){
				appRequest.baseRequest({
					url: '/grade/queryPage',
					method: 'get',
					success: (res) => {
						// 用户状态存到缓存中去
						console.log(res)
						try {
							let data = res.data.data.records
							this.gradeList = data
							uni.setStorageSync('vipList', data)
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},
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
