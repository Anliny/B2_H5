<template>
	<view>
		<!-- #ifndef MP-WEIXIN -->
		<nav-bar transparentFixedFontColor="#fff" fontColor="#fff" bgColor="#ff77aa" type="transparentFixed" title="交友活动">
			<!-- //透明状态下的按钮 -->
			<view class="transparent_fixed_preview" slot="transparentFixedLeft"></view>
			<view v-if="token.type == 1" class="transparent_fixed_preview" slot="transparentFixedRight" @click="handleAddActive">
				<uni-icons type="plus" size="26" color="#fff"></uni-icons>
			</view>
			<!-- //不透明状态下的按钮 -->
			<view class="preview" slot="left"></view>
			<view v-if="token.type == 1" class="preview" slot="right" @click="handleAddActive">
				<uni-icons type="plus" size="26" color="#fff"></uni-icons>
			</view>
		</nav-bar>
		<!-- #endif -->
		<view class="backImg" >
			<image src="/static/active.jpg" class="image"  mode="aspectFill"></image>
			<text class="name">{{token.type != 1 ? userInfo.nickName : userInfo.name}}</text>
			<view class="header">
				<image :src="userInfo.userAvatar ? userInfo.userAvatar :'/static/header.jpeg'" class="image" ></image>
			</view>
		</view>

		<view class="list-wrapper">
			<block v-for="(item,index) in activityList" :key="index">
				<view class="list-item">
					<view class="list-header">
						<view class="image-wrapper image-wrapper-header">
							<image :src="item.userAvatar ? item.userAvatar : '/static/admin.jpg'" class="image" mode="scaleToFill"></image>
						</view>
						<view>
							<view class="list-header-title">{{item.name}}</view>
							<text class="list-header-time">{{item.rawAddTime}}</text>
						</view>
						
					</view>
					<view class="list-title">{{item.title}}</view>
					<text class="list-text">{{item.content}}</text>
					<view class="list-image-wrapper">
						<view class="list-image-item image-wrapper" v-for="(itemImage,i) in pictureUrl(item.pictureUrl)" :key="i">
							<image :src="itemImage" class="image" mode="scaleToFill"></image>
						</view>
					</view>
					<view class="list-time-warp">
						活动起止日期：{{item.startTime}} 到 {{item.endTime}}
					</view>
					<view class="list-time-warp">报名截止日期：{{item.startTime}}</view>
					<view class="list-btn-wrapper">
						<view class="list-btn-text">本次活动限额{{item.activityNumber}}人，已有{{item.partakes}}参加！</view>
						<view v-if="token.type == 0">
							<button v-if="item.isPartake" type="primary" @click="addActive(index)" :plain="true" size="mini">
								参加活动
							</button>
							<button v-if="!item.isPartake" type="primary" @click="cancelActive(index)" size="mini">
								取消活动
							</button>
						</view>

					</view>
				</view>
			</block>
		</view>
		<uni-load-more :status="loadMore"></uni-load-more>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons"
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import appRequest from "@/utils/config.js"
	export default {
		components: {
			uniIcons,
			uniLoadMore
		},
		data() {
			return {
				token: uni.getStorageSync("token"),
				userInfo: uni.getStorageSync("userInfo"),
				activityList: [],
				pageObj: {
					current: 0
				},
				loadMore: "more",
				isActive: true
			}
		},
		onPullDownRefresh() {
			// 获取用户列表
			this.pageObj.current = 0
			this.activityList = []
			this.getActivitys()
		},
		onLoad() {
			
		},
		onShow() {
			this.token = uni.getStorageSync("token")
			console.log(this.token);
			this.userInfo = uni.getStorageSync("userInfo")
			this.getActivitys()
		},
		methods: {
			// 添加数据成功  调用的方法
			parmentOnLoad() {
				this.pageObj.current = 0
				this.activityList = []
				this.getActivitys()
			},
			// 添加交友活动
			handleAddActive() {
				uni.navigateTo({
					url: '/pages/activity/addActivity',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 获取活动列表
			getActivitys() {
				this.pageObj.current++
				appRequest.baseRequest({
					url: 'activity/queryPage',
					data: this.pageObj,
					method: 'get',
					success: (res) => {
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
								this.activityList = [...this.activityList, ...records]

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
				this.getActivitys()
			},
			addActive(index) {
				++this.activityList[index]['partakes']
				this.activityList[index]['isPartake'] = 0
				appRequest.baseRequest({
					url: 'memberActivity/save',
					data: {
						activityId: this.activityList[index].id
					},
					method: 'post',
					success: (res) => {
					},
				})
			},
			cancelActive(index) {
				--this.activityList[index]['partakes']
				this.activityList[index]['isPartake'] = 1
				appRequest.baseRequest({
					url: 'memberActivity/save',
					data: {
						activityId: this.activityList[index].id,
						deleted: true
					},
					method: 'post',
					success: (res) => {
						console.log(res)
					},
				})
			},
			handleScanCode() {
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			// 序列化
			pictureUrl(url) {
				if (url) {
					console.log(); // true
					if (url.indexOf("[") != -1) {
						return JSON.parse(url)

					}
					return [url]
				}
			},
		}
	}
</script>

<style>
	.content {
		padding: 8px;
	}

	.list-wrapper {}

	.list-item {
		background-color: #fff;
		border-radius: 5px;
		padding: 0 8px;
		margin-bottom: 8px;
	}

	.list-header {
		height: 60px;
		display: flex;
		padding: 8px 0px;
		box-sizing: content-box;
	}

	.image-wrapper-header {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		margin-right: 8px;
	}

	.list-header-title {
		font-size: 16px;
		font-weight: bold;
		line-height: 30px;
	}

	.list-header-time {
		margin-left: auto;
		font-size: 12px;
		color: #333;
	}

	.list-title {
		width: 100%;
		height: 30px;
		font-size: 16px;
		font-weight: bold;
	}

	.list-time-warp {
		font-size: 13px;
		color: #969696;
	}

	.list-text {
		font-size: 13px;
	}

	.list-image-wrapper {
		display: flex;
		flex-wrap: wrap;
	}

	.list-image-item {
		margin-bottom: 8px;
		height: calc(33.333vw - 16px);
		margin-right: 8px;
		flex: 0 0 calc(33.333vw - 16px);
	}

	.list-image-item:nth-child(3n+3) {
		margin-right: 0;
	}

	.list-btn-wrapper {
		padding-bottom: 8px;
		display: flex;
		justify-content: space-between;

	}

	.list-btn-wrapper button {
		margin: 0;
		margin-left: auto;
	}

	.list-btn-wrapper .list-btn-text {
		font-size: 12px;
		line-height: 31px;
		color: #da3b3b;
	}

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
