<template>
	<view v-if="!isVip">
		<view class="content">
			<view class="base">
				<view class="base-wrapper card-shadow" @click="handleShowDetail">
					<view class="img">
						<image :src="userAvatar()" class="image" mode=""></image>
					</view>
					<text class="base-name">{{userInfo.nickName ? userInfo.nickName : "去取一个昵称吧" }}</text>
					<text class="base-id">ID：{{userInfo.memberId}}</text>
					<view class="base-code-wrapper">
						<view class="base-code-item">{{ address }}</view>
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
					<uni-list-item title="设置" :show-extra-icon="true" @click="handleGoSeting" :extra-icon="{color: '#4cd964',size: '22',type: 'gear'}">
					</uni-list-item>
				</uni-list>
			</template>
		</view>
	</view>
	<view v-else>
		<view class="header-warpper">
			<view class="header-image image-wrapper">
				<image src="../../static/header.jpeg" class="image" mode=""></image>
			</view>
			<view class="header-wrapper">
				<view class="header-item">
					<uni-icons type="compose" size="30" @click="handleEditUserContact" color="#ff77aa"></uni-icons>
				</view>
				<view class="header-item">姓名：张三</view>
				<view class="header-item">性别：女</view>
				<view class="header-item">年龄：27</view>
				<view class="header-item">工作年限：3年</view>
			</view>
		</view>
		<view class="btn-warpper">
			<view class="btn-item">我的钱包</view>
			<view class="btn-item">牵线统计</view>
		</view>
		<!-- 基本信息 -->
		<view class="card-warp">
			<view class="card-title">
				<view class="title">基本信息</view>
				<view class="card-edit" @click="handleEditUserContact">
					<uni-icons type="compose" color="#ff77aa"></uni-icons>
				</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>手机号：
				</view>
				<view class="card-item-text">13000000</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					微信号：
				</view>
				<view class="card-item-text">wx33333</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					籍贯：
				</view>
				<view class="card-item-text">重庆潼南</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					工作地：
				</view>
				<view class="card-item-text">重庆渝北</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					擅长领域：
				</view>
				<view class="card-item-text">
					将本地资源上传到开发者服务器，客户端发起一个 POST 请求，其中 content-type 为 multipart/form-data。
					如页面通过 uni.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。
				</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					情感箴言：
				</view>
				<view class="card-item-text">
					将本地资源上传到开发者服务器，客户端发起一个 POST 请求，其中 content-type 为 multipart/form-data。
					如页面通过 uni.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import appRequest from "@/utils/config.js"
	export default {
		components: {
			uniList,
			uniListItem,
			uniIcons
		},
		data() {
			return {
				userInfo: {},
				isVip: 0,
			}
		},
		computed: {

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
			console.log(token.type)
			this.isVip = token.type
			
			uni.startPullDownRefresh();
			this.getUserInfo()
		},
		computed: {
			address() {
				if (this.userInfo.currentAddress) {
					return JSON.parse(this.userInfo.currentAddress).city + '户口'
				} else {
					return '-'
				}
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
			},
			// 用户设置
			handleGoSeting() {
				uni.navigateTo({
					url: '/pages/me/setings/index',
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
			// 判断头像
			userAvatar() {
				return this.userInfo.userAvatar ? this.userInfo.userAvatar : "/static/icon/defult_header.jpg"
			},
			// 编辑红娘信息
			handleEditUserContact(){
				uni.redirectTo({
					url: '/pages/me/editJokin',
					animationType: 'pop-in',
					animationDuration: 200
				})
			}

		}
	}
</script>

<style>
	@import url("style.css");
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
