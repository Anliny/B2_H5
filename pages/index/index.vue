<template>
	<view class="">
		<skeleton :loading="loading" :avatarSize="skeleton1.avatarSize" :row="skeleton1.row" :imgTitle="true"></skeleton>
		<skeleton :loading="loading" :avatarSize="skeleton1.avatarSize" :nameRow="5" avatarShape="square" flexType="space-between">
		</skeleton>
		<skeleton :loading="loading" :row="skeleton1.row" :showAvatar="skeleton1.showAvatar" :showTitle="true" avatarSize="false"></skeleton>
		<view class="content" v-if="!loading">
			<!-- banner 开始 -->
			<!-- <view class="img-wrapper">
				<image class="img" src="/static/banner.jpg"></image>
			</view> -->
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item>
								<view class="swiper-item">
									<image class="" src="/static/banner.jpg" mode="widthFix"></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">
									<image src="/static/banner.jpg" mode="widthFix"></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">
									<image src="/static/banner.jpg" mode="widthFix"></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>


			<!-- banner结束 -->
			<view class="shearch-wrapper">
				<uni-search-bar placeholder="关键字查询" @input="input" @cancel="cancel" />
			</view>
			<!-- 首页列表 -->
			<btn-group :groupBtnData="groupBtnData" @emitBtnGroup="emitBtnGroup"></btn-group>

			<!-- 会员列表 -->
			<view class="list-wrapper">
				<block v-for="(item,index) in dataInfo" :key="index">
					<view class="list-item" @click="handelGetUserInfo(item)">
						<uni-card :title="item.nickName" mode="style" :is-shadow="true" :thumbnail="item.userAvatar" :extra="item.memberID"
						 :note="item.iconArray">
							<view class="uni-card-text">{{compGender(item.gender)}} | {{item.age ? item.age : "-" }}岁 |
								{{compIsMarry(item.isMarry)}}</view>
							<view class="uni-card-text">{{item.declaration ? item.declaration :'-' }}</view>
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
	import btnGroup from "./components/btnGroup.vue"
	import appRequest from "@/utils/config.js"
	export default {
		components: {
			uniSearchBar,
			uniCard,
			uniIcons,
			Skeleton,
			youScroll,
			uniLoadMore,
			btnGroup
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000000,
				duration: 500,
				// banner属性结束
				groupBtnData: [{
					img: require('@/static/icon/city.png'),
					url: '',
					text: '同城会员'
				}, {
					img: require('@/static/icon/redMather.png'),
					url: '',
					text: '红娘牵线'
				}, {
					img: require('@/static/icon/activity.png'),
					url: '/pages/index/vipTrack',
					text: '会员动态'
				}, {
					img: require('@/static/icon/Chat.png'),
					url: '',
					text: '群聊天申请'
				}],
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
					currentAddress: "",
					current: 0,
					pages: 1,
					size: 10,
					total: 8
				},
				dataInfo: [],
			}
		},
		onLoad() {
			// uni.startPullDownRefresh();
			this.searchData.current = 0
			this.dataInfo = []
			this.getVipList()
			// this.getAdress()
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
			// banner事件
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			// // 获取地理位置
			// getAdress() {
			// 	console.log(1111)
			// 	uni.getLocation({
			// 		type: 'wgs84',
			// 		success: function(res) {
			// 			console.log('当前位置的经度：' + res.longitude);
			// 			console.log('当前位置的纬度：' + res.latitude);
			// 			uni.showModal({
			// 				content: '当前位置的经度：' + res.longitude + '当前位置的纬度：' + res.latitude,
			// 				showCancel: false
			// 			});
			// 			var point = new plus.maps.Point(res.longitude, res.latitude);
			// 			plus.maps.Map.reverseGeocode(
			// 				point, {},
			// 				function(event) {
			// 					var address = event.address; // 转换后的地理位置
			// 					var point = event.coord; // 转换后的坐标信息
			// 					var coordType = event.coordType; // 转换后的坐标系类型
			// 					console.log(address, 'address');
			// 					var reg = /.+?(省|市|自治区|自治州|县|区)/g;

			// 					console.log(address.match(reg));
			// 					uni.showModal({
			// 						content: address.match(reg),
			// 						showCancel: false
			// 					});
			// 					this.addressList = address.match(reg).toString().split(",");
			// 					this.address = this.addressList[1];
			// 					console.log(this.addressList[0]);
			// 					console.log(this.addressList[1]);
			// 					console.log(this.addressList[2]);
			// 					uni.showModal({
			// 						content: this.addressList[0] + this.addressList[1] + this.addressList[2],
			// 						showCancel: false
			// 					});

			// 				},
			// 				function(e) {}
			// 			);
			// 		}
			// 	});
			// },

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
				setTimeout(() => {
					this.getVipList()
				}, 300)
			},
			cancel(e) {},
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
						url: '/pages/index/userInfo?id=' + item.id,
						animationType: 'pop-in',
						animationDuration: 200
					})
				}


			},
			// 点击按钮组
			emitBtnGroup(data) {
				let {
					currentAddress
				} = uni.getStorageSync('userInfo')
				// 同城搜索
				if (data.index == 0) {
					this.searchData.currentAddress = currentAddress
					this.searchData.current = 0
					this.dataInfo = []
					this.getVipList()
					this.loading = true
					// this.onPullDownRefresh()
				}
				// 红娘牵线
				if (data.index == 1) {
					uni.showToast({
						icon: "none",
						title: "此功能暂未开通,敬请期待"
					})
				}
				// 会员动态
				if (data.index == 2) {
					uni.navigateTo({
						url: '/pages/index/vipTrack',
						animationType: 'pop-in',
						animationDuration: 200
					})
				}
				// 聊天
				if (data.index == 3) {
					uni.showToast({
						icon: "none",
						title: "此功能暂未开通,敬请期待"
					})
				}
			},
			// 格式化姓名，性别，是否已婚
			compGender(gender) {
				return gender == 1 ? "男" : "女";
			},
			compIsMarry(marry) {
				if (marry == 1) {
					return "未婚"
				}
				if (marry == 2) {
					return "离异"
				}
				if (marry == 3) {
					return "丧偶"
				}
				return "-"
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
		font-size: 12px;
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
