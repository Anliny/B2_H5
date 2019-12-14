<template>
	<view v-if="!isVip">
		<view class="content">
			<view class="base">
				<view class="base-wrapper card-shadow">
					<view class="img">
						<image :src="userAvatar()" :data-src="userAvatar()" @tap="previewImage" class="image" mode=""></image>
					</view>
					<view class="edit-btn" @click="handleShowDetail">
						<image src="/static/icon/edit.png" class="image" mode=""></image>
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
			<btn-group :groupBtnData="groupBtnData" @emitBtnGroup="emitBtnGroup"></btn-group>
			<!-- <btn-group :groupBtnData="groupBtnData" @emitBtnGroup="emitBtnGroup"></btn-group> -->

			<template>
				<uni-list>
					<uni-list-item title="我的动态" :show-extra-icon="true" @click="handleGoTrack" :extra-icon="{color: '#4cd964',size: '22',type: 'pengyouquan'}">
					</uni-list-item>
					<uni-list-item title="我的相册" :show-extra-icon="true" @click="handleGoPhone" :extra-icon="{color: '#4cd964',size: '22',type: 'image'}">
					</uni-list-item>
					<!-- <uni-list-item title="征友条件" :show-extra-icon="true" @click="handleGoCondition" :extra-icon="{color: '#4cd964',size: '22',type: 'compose'}">
					</uni-list-item> -->
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
					<uni-icons type="compose" size="30" @click="handleEditUserContact(matchmaker)" color="#ff77aa"></uni-icons>
				</view>
				<view class="header-item">姓名：{{matchmaker.name}}</view>
				<view class="header-item">性别：{{matchmaker.gender == 2 ?"女":"男"}}</view>
				<view class="header-item">年龄：{{matchmaker.age}}岁</view>
				<view class="header-item">工作年限：{{matchmaker.workingLife}}年</view>
			</view>
		</view>
		<view class="btn-warpper">
			<view class="btn-item" @click="handleNobtn">我的钱包</view>
			<view class="btn-item" @click="handleNobtn">牵线统计</view>
		</view>
		<!-- 基本信息 -->
		<view class="card-warp">
			<view class="card-title">
				<view class="title">基本信息</view>
				<!-- <view class="card-edit" @click="handleEditUserContact">
					<uni-icons type="compose" color="#ff77aa"></uni-icons>
				</view> -->
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>手机号：
				</view>
				<view class="card-item-text">{{matchmaker.phone}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					微信号：
				</view>
				<view class="card-item-text">{{matchmaker.wechatNumber}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					籍贯：
				</view>
				<view class="card-item-text">{{nativePlace}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					工作地：
				</view>
				<view class="card-item-text">{{workingAddress}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					擅长领域：
				</view>
				<view class="card-item-text">
					{{matchmaker.field}}
				</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					情感箴言：
				</view>
				<view class="card-item-text">
					{{matchmaker.motto}}
				</view>
			</view>
			<view class="loutBtn">
				<button type="warn" @click="logout">退出登录</button>
			</view>
		</view>
	</view>

</template>

<script>
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import appRequest from "@/utils/config.js"
	import utils from "@/utils/utils.js"
	import btnGroup from "@/components/btnGroup.vue"
	export default {
		components: {
			uniList,
			uniListItem,
			uniIcons,
			btnGroup
		},
		data() {
			return {
				userInfo: {},
				matchmaker: {},
				isVip: 0,
				groupBtnData: [{
					img: require('@/static/icon/btnGroup1.png'),
					url: '/pages/me/editUserHeader',
					text: '头像编辑'
				}, {
					img: require('@/static/icon/btnGroup2.png'),
					url: '/pages/me/editUserInfo',
					text: '基本资料'
				}, {
					img: require('@/static/icon/btnGroup3.png'),
					url: '/pages/me/editUserContact',
					text: '联系方式'
				}, {
					img: require('@/static/icon/btnGroup4.png'),
					url: '/pages/me/editUserInfomation',
					text: '其他信息'
				}, {
					img: require('@/static/icon/btnGroup5.png'),
					url: '/pages/me/editUserAssetStatus',
					text: '资产状况'
				}, {
					img: require('@/static/icon/btnGroup6.png'),
					url: '/pages/me/editUserDescrable',
					text: '自我介绍'
				}, {
					img: require('@/static/icon/btnGroup7.png'),
					url: '/pages/me/condition/editUserCondition',
					text: '征友条件'
				}, {
					img: require('@/static/icon/btnGroup8.png'),
					url: '',
					text: '私密显示设置'
				}]
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
						uni.navigateTo({
							url: '/pages/login/index',
							animationType: 'pop-in',
							animationDuration: 200
						});
					}
				})
			}
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
			},
			nativePlace() {
				if (this.matchmaker.nativePlace) {
					let {
						province,
						city,
						town
					} = JSON.parse(this.matchmaker.nativePlace)
					return `${province}${city}${town}`
				} else {
					return '-'
				}
			},
			workingAddress() {
				if (this.matchmaker.workingAddress) {
					let {
						province,
						city,
						town
					} = JSON.parse(this.matchmaker.workingAddress)
					return `${province}${city}${town}`
				} else {
					return '-'
				}
			}
		},
		methods: {
			// 获取用户信息
			getUserInfo() {
				let token = uni.getStorageSync("token")
				if (!token.type) {
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
				} else {
					appRequest.baseRequest({
						url: 'matchmaker/queryById',
						method: 'get',
						success: (res) => {
							// 用户状态存到缓存中去
							try {
								this.matchmaker = res.data.data
								uni.setStorageSync('userInfo', res.data.data)
							} catch (e) {
								//TODO handle the exception
							}
						}
					})
				}

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
			handleEditUserContact(matchmaker) {
				uni.navigateTo({
					url: '/pages/me/editJokin?matchmakerId=' + matchmaker.id,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 我的钱包   &&  牵线统计
			handleNobtn() {
				uni.showToast({
					title: "暂未开通，敬请期待！",
					icon: "none"
				})
			},
			// 我的相册
			handleGoPhone() {
				uni.navigateTo({
					url: '/pages/me/photo/index',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			//头像大图
			previewImage(e) {
				// var current = e.target.dataset.src
				// uni.previewImage({
				// 	current: current,
				// 	urls: [current]
				// })
				utils.fullImage(e)
			},
			// 红娘退出登录
			logout() {
				appRequest.logOut()
			},
			//  按钮组点击跳转
			emitBtnGroup(data) {
				console.log(data)
				let info = {}
				if (data.index == 0) {
					info = {
						userAvatar: this.userInfo.userAvatar,
						nickName: this.userInfo.nickName
					}
				}
				if (data.index == 1) {
					info = {
						name: this.userInfo.name,
						idCare: this.userInfo.idCare,
						gender: this.userInfo.gender,
						age: this.userInfo.age,
						birthday: this.userInfo.birthday,
						height: this.userInfo.height,
						nation: this.userInfo.nation,
						weight: this.userInfo.weight,
						education: this.userInfo.education,
						nickName: this.userInfo.nickName
					}
				}
				if (data.index == 2) {
					info = {
						phone: this.userInfo.phone,
						wechatNumber: this.userInfo.wechatNumber,
						qq: this.userInfo.qq,
						email: this.userInfo.email
					}
				}
				if (data.index == 3) {
					info = {
						position: this.userInfo.position,
						nativePlace: this.userInfo.nativePlace,
						currentAddress: this.userInfo.currentAddress,
						industry: this.userInfo.industry,
						isMarry: this.userInfo.isMarry
					}
				}
				if (data.index == 4) {
					info = {
						income: this.userInfo.income,
						housing: this.userInfo.housing,
						vehicle: this.userInfo.vehicle
					}
				}
				if (data.index == 5) {
					info = {
						declaration: this.userInfo.declaration,
						hobby: this.userInfo.hobby,
						otherStandards: this.userInfo.otherStandards
					}
				}
				if(data.index == 6) {
					info = {
						partnerAge:this.userInfo.partnerAge,
						partnerHeight:this.userInfo.partnerHeight,
						partnerNation:this.userInfo.partnerNation,
						partnerEducation:this.userInfo.partnerEducation,
						partnerIsMarry:this.userInfo.partnerIsMarry,
						partnerNativePlace:this.userInfo.partnerNativePlace,
						partnerIncome:this.userInfo.partnerIncome
					}
				}
				console.log(info)
				uni.navigateTo({
					url: `${data.item.url}?info=` + JSON.stringify(info),
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
		margin-top: 50px;
		background-color: #fff9f9;
		border-radius: 20px;
	}

	.img {
		width: 100px;
		height: 100px;
		border: 1px solid rgb(255, 119, 170);
		border-radius: 50%;
		overflow: hidden;
		top: -50px;
		left: 50%;
		position: absolute;
		margin-left: -50px;
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
		margin-top: 58px;
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
