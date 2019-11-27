<template>
	<view class="">
		<!-- #ifndef MP-WEIXIN -->
		<nav-bar transparentFixedFontColor="#fff" fontColor="#fff" bgColor="#ff77aa" type="transparentFixed" title="我的动态">
			<!-- //透明状态下的按钮 -->
			<view class="transparent_fixed_preview" slot="transparentFixedRight" @click="handleTrack">
				<uni-icons type="plus" size="26" color="#fff"></uni-icons>
			</view>
			<!-- //不透明状态下的按钮 -->
			<view class="preview" slot="right" @click="handleTrack">
				<uni-icons type="plus" size="26" color="#fff"></uni-icons>
			</view>
		</nav-bar>
		<!-- #endif -->
		<view class="backImg">
			<image src="/static/header.jpeg" class="image" mode=""></image>
			<text class="name">{{userInfo.nickName}}</text>
			<view class="header">
				<image :src="userAvatar()" class="image" mode=""></image>
			</view>
		</view>
		<view class="desc text-two-line">
			{{userInfo.declaration}}
		</view>
		<template>
			<list></list>
		</template>
	</view>

</template>

<script>
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item"
	import uniIcons from "@/components/uni-icons/uni-icons"
	import list from "./components/list.vue"
	import appRequest from "@/utils/config.js"
	export default {
		components: {
			uniList,
			uniListItem,
			list,
			uniIcons
		},
		data() {
			return {
				userInfo: uni.getStorageSync("userInfo"),
				pageObj: {
					current: 0
				}
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo')
			this.getDynamics()
		},
		onShow() {
			// this.getDynamics()
		},
		methods: {
			// 获取列表
			getDynamics() {
				appRequest.baseRequest({
					url: 'dynamic/queryPage',
					data: this.dynamic,
					method: 'get',
					success: (res) => {
						this.loading = false
						// 用户状态存到缓存中去
						try {
							uni.showToast({
								title: `保存成功！`,
								icon: 'success',
								showCancel: false,
								success() {
									// uni.redirectTo({
									// 	url: '/pages/me/track/index'
									// })
								}
							});
						} catch (e) {
							//TODO handle the exception
						}
					},
				})
			},
			// 判断头像
			userAvatar() {
				return this.userInfo.userAvatar ? this.userInfo.userAvatar : "/static/icon/defult_header.jpg"
			},
			handleTrack() {
				// 跳转路由
				uni.navigateTo({
					url: 'addTrack',
					animationDuration: 500
				});
			}
		},
	}
</script>

<style>
	.backImg {
		margin-top: -45px;
		height: 250px;
		width: 100%;
		position: relative;
	}

	.backImg .name {
		display: block;
		text-align: right;
		position: absolute;
		top: 215px;
		right: 100px;
		color: #fff;
		font-weight: bold;
		font-size: 20px;
	}

	.backImg .header {
		width: 80px;
		height: 80px;
		position: absolute;
		border: 2px solid #fff;
		right: 10px;
		top: 200px;
	}

	.desc {
		margin-top: 30px;
		font-size: 14px;
		padding: 0 8px;
		color: #353535;
	}
</style>
