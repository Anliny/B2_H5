<template>
	<view class="contanner">
		<view class="content">
			<template>
				<uni-list>
					<!-- <uni-list-item title="动态设置" :show-extra-icon="true" @switchChange="handleTrackChange" :show-switch="true" :show-arrow="false" :extra-icon="{color: '#4cd964',size: '22',type: 'pengyouquan'}"></uni-list-item> -->
					<!-- <uni-list-item title="个人信息设置" :show-extra-icon="true" @switchChange="handleUserChange" :show-switch="true" :show-arrow="false" :extra-icon="{color: '#4cd964',size: '22',type: 'gear-filled'}"></uni-list-item> -->
					<!-- <uni-list-item title="修改密码" :show-extra-icon="true" :show-arrow="true" :extra-icon="{color: '#4cd964',size: '22',type: 'gear-filled'}"></uni-list-item> -->
					<uni-list-item title="生成推荐码" @click="handleGetRecommend" :show-extra-icon="true" :show-arrow="true" :extra-icon="{color: '#4cd964',size: '22',type: 'gear-filled'}"></uni-list-item>
				</uni-list>
			</template>
			<view class="recommendCode" v-if="recommendCode" @click="paste(recommendCode)">你的推荐码：<span>{{recommendCode}}</span>(长按复制)</view>
			<view class="loutBtn">
				<button type="warn" @click="logout">退出登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		Vips
	} from "@/utils/fromCheck.js"
	import appRequest from "@/utils/config.js"
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item"
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				loading: false,
				vips: Vips,
				vipIndex: 0,
				recommendCode: '',
				userDetailInfo: {
					phone: '',
					wechatNumber: '',
				}
			}
		},
		computed: {

		},
		methods: {
			switch2Change(e) {

			},
			// 切换是否显示朋友圈
			handleTrackChange(e) {
				console.log(e)
			},
			// 设置是否显示个人信息
			handleUserChange(e) {
				console.log(e)
			},
			// 退出登录
			logout() {
				appRequest.logOut()
			},

			// 生成推荐码
			handleGetRecommend() {
				let {
					phone,
					wechatNumber
				} = uni.getStorageSync("userInfo")
				appRequest.baseRequest({
					url: 'recommend/save',
					data: {
						phone,
						wechatNumber
					},
					method: 'post',
					success: (res) => {
						this.recommendCode = res.data.data.recommendCode
					},
				})
			},
			paste(value) {
				uni.setClipboardData({
					data: value
				});
			}

		}
	}
</script>

<style>
	@import url("../../../assets/common.css");

	uni-page-body {
		height: 100%;
	}

	.contanner {
		height: 100%;
		position: relative;
	}

	.img-wrapper {
		height: 200px;
	}

	.bar-wrapper {
		display: flex;
		justify-content: center;
	}

	.bar-item {
		border-bottom: 2rpx solid rgb(255, 119, 170);
		line-height: 80rpx;
		margin-left: 10px;
		font-size: 16px;
	}

	.tips {
		color: #8F8F94;
		line-height: 35px;
		font-size: 14px;
	}

	.recommendCode {
		background-color: #fff;
		margin: 8px 8px;
		line-height: 2.3;
	}

	.recommendCode span {
		font-size: 16px;
		color: #ff77aa;
	}
</style>
