<template>
	<view v-if="!isVip">
		<view class="content">
			<view class="base">
				<view class="base-wrapper card-shadow">
					<view class="img">
						<image :src="userAvatar()" :data-src="userAvatar()" @tap="previewImage" class="image" mode=""></image>
					</view>
					<view class="base-name">
						<view class="item">{{userInfo.nickName ? userInfo.nickName : "去取一个昵称吧" }}</view>
						<view class="item">
							<uni-tag style="display: inline-block;" size="small" type="error" :inverted="true" :text="compGrade"></uni-tag>
						</view>
					</view>
					<text class="base-id">ID：{{userInfo.memberId}}</text>
					<view class="base-code-wrapper">
						<view class="base-code-item">{{ address }}</view>
						<view class="base-code-item code2">{{userInfo.education}}</view>
						<view class="base-code-item code3">{{userInfo.position}}</view>
					</view>
				</view>
			</view>
			<btn-group :groupBtnData="groupBtnData" @emitBtnGroup="emitBtnGroup"></btn-group>
			<view class="btn-group-title">其他信息</view>
			<btn-group :groupBtnData="groupBtnOther" @emitBtnGroup="emitBtnOther"></btn-group>
			<view class="btn-group-title">认证信息</view>
			<btn-group :groupBtnData="groupBtnAuthentication" @emitBtnGroup="emitAuthenticationGroup"></btn-group>
			
		</view>
	</view>
	<view v-else>
		<view class="header-warpper">
			<view class="header-image image-wrapper">
				<image :src="userAvatar()" :data-src="userAvatar()" @tap="previewImage" class="image" mode=""></image>
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
	import uniListItem from "@/components/uni-list-item/uni-list-item1.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import appRequest from "@/utils/config.js"
	import utils from "@/utils/utils.js"
	import btnGroup from "@/components/btnGroup.vue"
	import uniTag from "@/components/uni-tag/uni-tag.vue"
	import {
		Vips
	} from "@/utils/fromCheck.js"
	export default {
		components: {
			uniList,
			uniListItem,
			uniIcons,
			btnGroup,
			uniTag
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
					url: '/pages/me/detail',
					text: '基本资料'
				}, {
					img: require('@/static/icon/btnGroup7.png'),
					url: '/pages/me/condition/editUserCondition',
					text: '征友条件'
				}, {
					img: '',
					url: '',
					text: ''
				}],
				
				groupBtnOther: [{
					img: require('@/static/icon/btnGroup9.png'),
					url: '/pages/me/track/index',
					text: '我的动态'
				}, {
					img: require('@/static/icon/btnGroup10.png'),
					url: '/pages/me/photo/index',
					text: '我的相册'
				}, {
					img: require('@/static/icon/btnGroup11.png'),
					url: '/pages/me/vip/index',
					text: '开通会员'
				},  {
					img: require('@/static/icon/btnGroup13.png'),
					url: '/pages/me/setings/index',
					text: '设置'
				}],
				groupBtnAuthentication: [{
					img: require('@/static/icon/btnGroup14.png'),
					url: '/pages/me/condition/editUserCondition',
					text: '身份证认证'
				}, {
					img: require('@/static/icon/btnGroup15.png'),
					url: '/pages/me/condition/editUserCondition',
					text: '视频认证'
				}, {
					img: require('@/static/icon/btnGroup16.png'),
					url: '/pages/me/condition/editUserCondition',
					text: '银行卡认证'
				}, {
					img: require('@/static/icon/btnGroup17.png'),
					url: '/pages/me/condition/editUserCondition',
					text: '钱包'
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
			this.getLable()
		},
		computed: {
			address() {
				if (this.userInfo.currentAddress) {
					return JSON.parse(this.userInfo.currentAddress).city
				} else {
					return '-'
				}
			},
			compGrade() {
				let str = ""
				Vips.find((item, index) => {
					if (item.val == this.userInfo.grade) {
						str = `${item.label}`
					}
				})
				return str
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
				if (token.type == 0) {
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
			
			// 判断会员头像
			userAvatar() {
				if(this.isVip){
					return this.matchmaker.userAvatar ? this.matchmaker.userAvatar : "/static/icon/defult_header.jpg"
				}else{
					
				return this.userInfo.userAvatar ? this.userInfo.userAvatar : "/static/icon/defult_header.jpg"
				}
			},
			// 编辑红娘信息
			handleEditUserContact(matchmaker) {
				uni.navigateTo({
					url: '/pages/me/editJokin?matchmakerId=' + matchmaker.id + "&userAvatar=" + matchmaker.userAvatar,
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
				let info = {}
				if (data.index == 0) {
					info = {
						userAvatar: this.userInfo.userAvatar,
						nickName: this.userInfo.nickName
					}
				}
			
				if (data.index == 6) {
					info = {
						partnerAge: this.userInfo.partnerAge,
						partnerHeight: this.userInfo.partnerHeight,
						partnerNation: this.userInfo.partnerNation,
						partnerEducation: this.userInfo.partnerEducation,
						partnerIsMarry: this.userInfo.partnerIsMarry,
						partnerNativePlace: this.userInfo.partnerNativePlace,
						partnerIncome: this.userInfo.partnerIncome
					}
				}
				
				uni.navigateTo({
					url: `${data.item.url}`,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			
			emitBtnOther(data) {
				uni.navigateTo({
					url: data.item.url,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 认证
			emitAuthenticationGroup(){
				uni.showToast({
					title:"该目录信息，暂时未开通",
					icon:"none"
				})
			},
			// 获取标签
			getLable(){
				console.log(222)
				let query = {
					current:1,
					size:9999
				}
				appRequest.baseRequest({
					url: 'label/queryPage',
					data:query,
					method: 'get',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							let data = res.data
							if(data.code == '0'){
								uni.setStorageSync('lableList',data.data.records)
							}
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			}
		}
	}
</script>

<style>
	@import url("style.css");

	.content {}

	.btn-group-title {
		font-size: 12px;
		text-indent: 12px;
		color: #a7a7a7;
		line-height: 20px;
	}

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
		display: flex;
		margin-top: 58px;
		font-size: 24px;
	}

	.base-name .item {
		flex: 1;
		margin-right: 8px;
	}

	.base-name .item:first-child {
		text-align: right;
		font-size: 16px;
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
