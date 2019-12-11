<template>
	<view class="">
		<skeleton :loading="loading" :avatarSize="skeleton1.avatarSize" :row="skeleton1.row" :imgTitle="true"></skeleton>
		<skeleton :loading="loading" :avatarSize="skeleton1.avatarSize" :nameRow="5" avatarShape="square" flexType="space-between">
		</skeleton>
		<skeleton :loading="loading" :row="skeleton1.row" :showAvatar="skeleton1.showAvatar" :showTitle="true" avatarSize="false"></skeleton>
		<view class="content" v-if="!loading">
			<view class="img-wrapper">
				<image class="img" src="/static/banner.jpg"></image>
			</view>
			<view class="shearch-wrapper">
				<uni-search-bar placeholder="关键字查询" @input="input" @cancel="cancel" />
			</view>
			<view class="content-btn-wrapper" @click="handleBtnGroupVip()">
				<view class="content-btn-item">
					<view class="content-btn-item-icons">
						<image class="img" src="/static/icon/city.png"></image>
					</view>
					<text>同城会员</text>
				</view>
				<view class="content-btn-item" @click="handleBtnGroupRedMather()">
					<view class="content-btn-item-icons">
						<image class="img" src="/static/icon/redMather.png"></image>
					</view>
					<text>红娘牵线</text>
				</view>
				<view class="content-btn-item" @click="handleBtnGroupActive()">
					<view class="content-btn-item-icons">
						<image class="img" src="/static/icon/activity.png"></image>
					</view>
					<text>会员动态</text>
				</view>
			</view>

			<!-- 会员列表 -->
			<view class="list-wrapper">
				<block v-for="(item,index) in dataInfo" :key="index">
					<view class="list-item" @click="handelGetUserInfo(item)">
						<uni-card :title="item.nickName" mode="style" :is-shadow="true" :thumbnail="item.userAvatar" :extra="item.memberID"
						 :note="item.iconArray">
							<view class="uni-card-text">{{item.declaration}}</view>
						</uni-card>
					</view>
				</block>
			</view>
			<!-- <view v-if="loadMore" class="loadMore">
				<uni-icons type="spinner-cycle" class="rotate" color="#cccccc"></uni-icons>
				正在加载···
			</view> -->
			<uni-load-more :status="loadMore"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from "@/components/uni-search-bar/uni-search-bar"
	import uniCard from "@/components/uni-card/uni-card"
	import uniIcons from "@/components/uni-icons/uni-icons"
	import Skeleton from '@/components/J-skeleton/J-skeleton.vue'
	import youScroll from '../components/you-scroll.vue'
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import appRequest from "@/utils/config.js"
	export default {
		components: {
			uniSearchBar,
			uniCard,
			uniIcons,
			Skeleton,
			youScroll,
			uniLoadMore
		},
		data() {
			return {
				loading: true,
				loadMore: "more",
				skeleton1: {
					avatarSize: '52px',
					row: 3,
					showTitle: true,
				},
				skeleton2: {
					avatarSize: '52px',
					row: 3,
					showTitle: true,
				},
				searchData: {
					nickName: "",
					current: 0,
					pages: 1,
					size: 10,
					total: 8
				},
				dataInfo: [],
			}
		},
		onLoad() {
			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			// 获取用户列表
			this.searchData.current = 0
			this.dataInfo = []
			this.getVipList()
			this.loading = true
			
		},
		// 页面滚动到底部触发
		onReachBottom() {
			this.loadMore = 'loading'
			this.getVipList()
		},
		methods: {
			// 获取用户列表
			getVipList() {
				this.searchData.current = this.searchData.current + 1
				appRequest.baseRequest({
					url: '/common/member/queryPage',
					method: 'get',
					data: this.searchData,
					success: (res) => {
						this.loading = false
						let {
							current,
							pages,
							size,
							total,
							records
						} = res.data.data
						this.searchData = {
							current,
							pages: pages,
							size,
							total
						}
						if (records.length <= 0) {
							this.loadMore = "noMore"
								--this.searchData.current
						} else {
							this.loadMore = "more"
							this.dataInfo = [...this.dataInfo, ...records]
						}
						uni.stopPullDownRefresh();
					}
				})
			},
			input(e) {
				this.searchData.nickName = e.value
				this.searchData.current = 0
				this.dataInfo = []
				this.getVipList()
			},
			cancel(e) {
			},
			// 获取用户详细信息
			handelGetUserInfo(item) {
				// 判断是否登录
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
				} else {
					uni.navigateTo({
						url: '/pages/index/userInfo?id='+item.id,
						animationType: 'pop-in',
						animationDuration: 200
					})
				}


			},

			// 同城会员
			handleBtnGroupVip() {},
			// 红娘牵线
			handleBtnGroupRedMather() {
				uni.showToast({
					icon: "none",
					title: "此功能暂未开通,敬请期待"
				})
			},
			// 会员动态
			handleBtnGroupActive() {
				uni.navigateTo({
					url: '/pages/index/vipTrack',
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.content-btn-wrapper {
		width: 100%;
		margin-bottom: 8px;
		padding: 8px;
		display: flex;
		background-color: #fff;
	}

	.content-btn-item {
		border: 1px solid rgb(255, 119, 170);
		margin-right: 10px;
		width: 20vw;
		text-align: center;
		font-size: 14px;
		color: rgb(255, 119, 170);
		border-radius: 5px;
	}

	.content-btn-item .content-btn-item-icons {
		margin: auto;
		height: 35px;
		width: 35px;
		color: #fff;
	}

	.content-btn-item .content-btn-item-icons image {
		height: 100%;
		width: 100%;
	}

	.uni-card__content-extra {
		color: #000;
		font-weight: bold;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.img-wrapper {
		width: 100%;
		height: 180px;
		overflow-y: hidden;
	}

	.img-wrapper .img {
		width: 100%;
		height: 100%;
	}

	.shearch-wrapper {
		padding: 0 8px;
		width: 100%;
	}

	.shearch-btn {
		width: 100%;
		line-height: 35px;
		background-color: #fff;
		text-align: right;
	}

	.list-wrapper {
		display: flex;
		flex-wrap: wrap;
		padding: 0 8px;
		width: 100%;
	}

	.list-wrapper .list-item {
		box-sizing: border-box;
		margin-bottom: 8px;
		flex: 0 0 50%;
	}

	.list-wrapper .list-item:nth-child(2n) {
		padding-left: 4px;
	}

	.list-wrapper .list-item:nth-child(2n-1) {
		padding-right: 4px;
	}

	.list-wrapper .list-item .uni-card {
		margin: 0;
	}

	.uni-card-text {
		font-size: 14px;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}


	/*  */
	.content .block {
		height: 200px;
		line-height: 200px;
		text-align: center;
		margin: 10px;
		background-color: aquamarine;
	}

	.content .loadingText {
		line-height: 30px;
		text-align: center;
		font-size: 12px;
		color: #999;
	}

	#preloader_1 {
		height: 40px;
		line-height: 40px;
		position: relative;
		text-align: center;
	}

	#preloader_1 span {
		width: 5px;
		height: 5px;
		margin: 0 1px;
		display: inline-block;
		vertical-align: middle;
		background: #9b59b6;
		animation: preloader_1 1.5s infinite ease-in-out;
	}

	#preloader_1 span:nth-child(2) {
		animation-delay: .2s;
	}

	#preloader_1 span:nth-child(3) {
		animation-delay: .4s;
	}

	#preloader_1 span:nth-child(4) {
		animation-delay: .6s;
	}

	#preloader_1 span:nth-child(5) {
		animation-delay: .8s;
	}

	@keyframes preloader_1 {
		0% {
			height: 5px;
			background: #9b59b6;
		}

		25% {
			height: 30px;
			background: #3498db;
		}

		50% {
			height: 5px;
			background: #9b59b6;
		}

		100% {
			height: 5px;
			background: #9b59b6;
		}
	}
</style>
