<template>
	<view class="">
		<!-- #ifndef MP-WEIXIN -->
		<nav-bar transparentFixedFontColor="#fff" fontColor="#fff" bgColor="#ff77aa" type="transparentFixed" title="会员动态">
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
			<list :dynamicList="dynamicList" @removeDynamic='removeDynamic'></list>
		</template>
		<uni-load-more :status="loadMore"></uni-load-more>
	</view>

</template>

<script>
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item"
	import uniIcons from "@/components/uni-icons/uni-icons"
	import list from "./components/list.vue"
	import appRequest from "@/utils/config.js"
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		components: {
			uniList,
			uniListItem,
			list,
			uniIcons,
			uniLoadMore
		},
		data() {
			return {
				userInfo: uni.getStorageSync("userInfo"),
				loadMore: "more",
				pageObj: {
					current: 0
				},
				dynamicList:[]
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo')
			this.getDynamics()
		},
		onShow() {
			// this.getDynamics()
		},
		onPullDownRefresh() {
			// 获取用户列表
			this.pageObj.current = 0
			this.dynamicList = []
			this.getDynamics()
			// this.loading = true
			
		},
		methods: {
			// 获取列表
			getDynamics() {
				this.pageObj.current ++
				appRequest.baseRequest({
					url: 'dynamic/queryPage',
					data: this.pageObj,
					method: 'get',
					success: (res) => {
						this.loading = false
						// 用户状态存到缓存中去
						try {
							let {
								current,
								pages,
								size,
								total,
								records
							} = res.data.data
							if (records.length <= 0) {
								this.loadMore = "noMore"
									--this.pageObj.current
							} else {
								this.loadMore = "more"
								this.dynamicList = [...this.dynamicList, ...records]
								
							}
							uni.stopPullDownRefresh();
						} catch (e) {
							//TODO handle the exception
						}
					},
				})
			},
			// 页面滚动到底部触发
			onReachBottom() {
				this.loadMore = 'loading'
				this.getDynamics()
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
			},
			// 删除动态
			removeDynamic(id){
				console.log(id);
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
