<template>
	<view class="content">
		<view class="base">
			<view class="base-wrapper card-shadow" @click="handleShowDetail">
				<view class="img">
					<image :src="userInfo.userAvatar" class="image" mode=""></image>
				</view>
				<!-- <view class="edit-btn">
					<image src="/static/icon/edit.png" class="image" mode=""></image>
				</view> -->
				<text class="base-name">{{userInfo.nickName ? userInfo.nickName : "去取一个昵称吧" }}</text>
				<text class="base-id">ID：{{userInfo.memberId}}</text>
				<view class="base-code-wrapper">
					<view class="base-code-item">{{ address }}户口</view>
					<view class="base-code-item code2">{{userInfo.education}}</view>
					<view class="base-code-item code3">{{userInfo.position}}</view>
				</view>
			</view>
		</view>
		<template>
			<uni-list>
				<uni-list-item title="我的动态" :show-extra-icon="true" @click="handleGoTrack" :extra-icon="{color: '#4cd964',size: '22',type: 'pengyouquan'}">
				</uni-list-item>
				<uni-list-item title="我的相册" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'image'}">
				</uni-list-item>
				<uni-list-item title="征友条件" :show-extra-icon="true" @click="handleGoCondition" :extra-icon="{color: '#4cd964',size: '22',type: 'compose'}">
				</uni-list-item>
				<uni-list-item title="会员中心" :show-extra-icon="true" @click="handleGoVip" :extra-icon="{color: '#4cd964',size: '22',type: 'contact-filled'}">
				</uni-list-item>
				<uni-list-item title="设置" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'gear'}">
				</uni-list-item>
			</uni-list>
		</template>

	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item"
	import appRequest from "@/utils/config.js"
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				userInfo: {}
			}
		},
		onShow() {
			let token = uni.getStorageSync("token")
			if (!token) {
				uni.showModal({
					title: '提示',
					content: "您还未登录，前往登录",
					showCancel: false,
					success: () => {
						// 
						// this.$router.push('/pages/login/index')
						uni.navigateTo({
							url: '/pages/login/index',
							animationType: 'pop-in',
							animationDuration: 200
						});
					}
				})
			}
			this.getUserInfo()
		},
		computed: {
			address() {
				console.log(JSON.parse(this.userInfo.currentAddress))
				if (JSON.parse(this.userInfo.currentAddress)) {
					return JSON.parse(this.userInfo.currentAddress).city
				} else {
					return ''
				}
				// return '北京'
			}
		},
		methods: {
			// 获取用户信息
			getUserInfo() {
				appRequest.baseRequest({
					url: '/member/queryById',
					method: 'get',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							this.userInfo = res.data.data
							uni.setStorageSync('userInfo', res.data.data)
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},
			handleGoTrack() {
				// 跳转路由
				uni.navigateTo({
					url: '/pages/me/track/index',
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
			// 查看用户详情
			handleShowDetail() {
				uni.navigateTo({
					url: '/pages/me/detail',
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
			// 去VIP充值
			handleGoVip() {
				uni.navigateTo({
					url: '/pages/me/vip/index',
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
			// 查看征友条件
			handleGoCondition() {
				uni.navigateTo({
					url: '/pages/me/condition/index',
					animationType: 'pop-in',
					animationDuration: 200
				});
			}

		}
	}
</script>

<style>
	.content {}

	.base {
		padding: 8px;
	}

	.base-wrapper {
		position: relative;
		margin-top: 83px;
		background-color: #fff9f9;
		border-radius: 20px;
	}

	.img {
		width: 150px;
		height: 150px;
		border: 1px solid rgb(255, 119, 170);
		border-radius: 50%;
		overflow: hidden;
		top: -75px;
		left: -75px;
		position: absolute;
		margin-left: 50%;
	}

	.edit-btn {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		border: 1px solid rgb(255, 119, 170);
		background-color: rgb(255, 119, 170);
		overflow: hidden;
		position: absolute;
		right: 5px;
		top: 5px;
	}

	.base-name {
		display: block;
		margin-top: 83px;
		font-size: 24px;
		text-align: center;
	}

	.base-id {
		display: block;
		text-align: center;
	}

	.base-code-wrapper {
		display: flex;
		padding: 8px;
	}

	.base-code-item {
		width: 100%;
		height: 30px;
		line-height: 30px;
		color: #fff;
		font-size: 14px;
		text-align: center;
		border-radius: 20px;
		margin-left: 8px;
		background-color: rgb(138, 187, 214);
	}

	.code2 {
		background-color: rgb(121, 117, 252);
	}

	.code3 {
		background-color: rgb(221, 145, 204);
	}

	.code4 {
		background-color: rgb(254, 151, 62);
	}
</style>
