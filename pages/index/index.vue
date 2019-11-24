<template>
	<view class="">
		<skeleton :loading="loading" :avatarSize="skeleton1.avatarSize" :row="skeleton1.row" :imgTitle="true"></skeleton>
		<skeleton :loading="loading" :avatarSize="skeleton1.avatarSize" :nameRow="5" avatarShape="square" flexType="space-between">
		</skeleton>
		<skeleton :loading="loading" :row="skeleton1.row" :showAvatar="skeleton1.showAvatar" :showTitle="true" avatarSize="false"></skeleton>
		<view class="content" v-if="!loading">
			<view class="img-wrapper">
				<image class="img" src="/static/nav-img.jpg"></image>
			</view>
			<view class="shearch-wrapper">
				<uni-search-bar placeholder="自定placeholder" @input="input" @cancel="cancel" />
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
			<view class="list-wrapper">
				<block v-for="(item,index) in dataInfo" :key="index">
					<view class="list-item" @click="handelGetUserInfo(item)">
						<uni-card :title="item.nickName" mode="style" :is-shadow="true" :thumbnail="item.userAvatar" :extra="item.memberID"
						 :note="item.iconArray"
						 >
							<view class="uni-card-text">{{item.declaration}}</view>
						</uni-card>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from "@/components/uni-search-bar/uni-search-bar"
	import uniCard from "@/components/uni-card/uni-card"
	import uniIcons from "@/components/uni-icons/uni-icons"
	import Skeleton from '@/components/J-skeleton/J-skeleton.vue'


	export default {
		components: {
			uniSearchBar,
			uniCard,
			uniIcons,
			Skeleton
		},
		data() {
			return {
				loading: true,
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
					data: ""
				},
				pageObj: {},
				dataInfo: [{
					userAvatar: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
					declaration: '那是一个秋意盎然、金风送爽的日子，我和父母一起来到了位于上师大旁的康健园。一踏进公园，一股浓郁的桂香扑鼻而来，泌人心脾,让我心旷神怡，只见一朵朵开得正烈的金色桂花，迎风而立，仿佛在向我招手。我们追着这桂香，走进了清幽的公园。',
					nickName: '自由自在',
					memberID: 'wbs1235',
					iconArray: [
						'/static/icon/vip.png',
						'/static/icon/userId.png',
						'/static/icon/bank_hight.png',
						'/static/icon/video_hight.png',
					],
					id: 1
				}]
			}
		},
		onLoad() {

			uni.startPullDownRefresh();

			// this.reloadData()
		},
		onPullDownRefresh() {
			// console.log('refresh');
			// setTimeout(function() {
			// 	uni.stopPullDownRefresh();
			// }, 1000);
			// 获取用户列表
			this.getVipList()
			this.loading = true
		},
		methods: {
			// 获取用户列表
			getVipList() {
				uni.request({
					url: '/common/member/queryPage',
					method: 'get',
					success: (res) => {
						this.loading = false
						console.log(res.data.data)
						let {
							current,
							pages,
							size,
							total,
							records
						} = res.data.data
						this.pageObj = {
							current,
							pages,
							size,
							total
						}
						
						this.dataInfo = records

						uni.stopPullDownRefresh();
					}
				})
			},
			search(e) {
				console.log(this.searchData.data)
			},
			input(e) {
				this.searchData.data = e
				console.log(this.searchData.data);
			},
			cancel(e) {
				console.log(e);
			},
			// 获取用户详细信息
			handelGetUserInfo(item) {
				uni.navigateTo({
					url: '/pages/index/userInfo',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},

			// 同城会员
			handleBtnGroupVip() {

			},
			// 红娘牵线
			handleBtnGroupRedMather() {
				uni.showToast({
					icon: "none",
					title: "此功能暂未开通,敬请期待"
				})
			},
			// 会员动态
			handleBtnGroupActive() {}
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
</style>
