<template>
	<view class="content">
		<!-- #ifndef MP-WEIXIN -->
		<nav-bar transparentFixedFontColor="#333" fontColor="#fff" bgColor="#ff77aa" type="transparentFixed" title="用户信息">
			<!-- //透明状态下的按钮 -->
			<view class="transparent_fixed_preview" slot="transparentFixedRight">
				<!-- <uni-icons type="plus" size="26" color="#fff"></uni-icons> -->
			</view>
			<view class="transparent_fixed_preview" slot="transparentFixedLeft" @click="handleGoBack">
				<uni-icons type="arrowleft" size="26" color="#333"></uni-icons>
			</view>
			<!-- //不透明状态下的按钮 -->
			<view class="preview" slot="right">
				<!-- <uni-icons type="plus" size="26" color="#fff"></uni-icons> -->
			</view>
			<view class="transparent_fixed_preview" slot="left" @click="handleGoBack">
				<uni-icons type="arrowleft" size="26" color="#fff"></uni-icons>
			</view>
		</nav-bar>
		<!-- #endif -->
		<view class="base">
			<view class="base-wrapper card-shadow">
				<view class="img">
					<image :src="userAvatar" :data-src="userAvatar" @tap="previewImage" class="image" mode=""></image>
				</view>
				<view class="base-name">
					<view class="item">{{userInfo.nickName ? userInfo.nickName : "该用户还没设置昵称" }}</view>
					<view class="item">
						<uni-tag style="display: inline-block;" size="small" type="error" :inverted="true" :text="compVip"></uni-tag>
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

		<!-- 个人信息 -->
		<view class="card-warp card-shadow">
			<view class="card-title">
				<view class="">基本信息</view>
				<!-- <view class="card-edit" @click="handleEditUserInfo()">
					<uni-icons type="compose" color="#ff77aa"></uni-icons>
				</view> -->
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>真实姓名：
				</view>
				<view class="card-item-text">{{userInfo.name}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					身份证号：
				</view>
				<view class="card-item-text">{{userInfo.idCare}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					性 别：
				</view>
				<view class="card-item-text">{{userInfo.gender==1 ? "男":"女"}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					年 龄：
				</view>
				<view class="card-item-text">{{userInfo.age}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					身 高：
				</view>
				<view class="card-item-text">{{userInfo.height}}CM</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					民 族：
				</view>
				<view class="card-item-text">{{userInfo.nation}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					体 重：
				</view>
				<view class="card-item-text">{{userInfo.weight}}KG</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					最高学历：
				</view>
				<view class="card-item-text">{{userInfo.education}}</view>
			</view>
		</view>

		<!-- 联系方式 -->
		<view class="card-warp card-shadow">
			<view class="card-title">
				<view class="title">联系方式</view>
				<!-- <view class="card-edit" @click="handleEditUserContact">
					<uni-icons type="compose" color="#ff77aa"></uni-icons>
				</view> -->
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>手机号：
				</view>
				<view class="card-item-text">{{userInfo.phone}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					微信号：
				</view>
				<view class="card-item-text">{{userInfo.wechatNumber}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					QQ：
				</view>
				<view class="card-item-text">{{userInfo.qq}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					E-mail：
				</view>
				<view class="card-item-text">{{userInfo.email}}</view>
			</view>
			<view class="tips">{{compGrade}}</view>
		</view>

		<!-- 其他信息 -->
		<view class="card-warp card-shadow">
			<view class="card-title">
				<view class="title">其他信息</view>
				<!-- <view class="card-edit" @click="handleEditUserInfomation">
					<uni-icons type="compose" color="#ff77aa"></uni-icons>
				</view> -->
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>职位：
				</view>
				<view class="card-item-text">{{userInfo.position}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					籍贯：
				</view>
				<view class="card-item-text">{{nativePlaceAdress}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					现住地址：
				</view>
				<view class="card-item-text">{{currentAddress}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					行业：
				</view>
				<view class="card-item-text">{{userInfo.industry}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					是否婚配：
				</view>
				<view class="card-item-text">{{isMarry}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					是否有小孩：
				</view>
				<view class="card-item-text">{{userInfo.isChild ?  "无" :"有"}}</view>
			</view>
		</view>

		<!-- 资产状况 -->
		<view class="card-warp card-shadow">
			<view class="card-title">
				<view class="title">资产状况</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					收入：
				</view>
				<view class="card-item-text">{{userInfo.income}}以上</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					住房情况：
				</view>
				<view class="card-item-text">{{userInfo.housing}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					是否有车：
				</view>
				<view class="card-item-text">{{userInfo.vehicle}}</view>
			</view>
		</view>

		<!-- 自我描述 -->
		<view class="card-warp card-shadow">
			<view class="card-title">
				<view class="title">自我介绍</view>
				<!-- <view class="card-edit" @click="handleEditUserDescrable">
					<uni-icons type="compose" color="#ff77aa"></uni-icons>
				</view> -->
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					爱情宣言：
				</view>
				<view class="card-item-text">{{userInfo.declaration}}以上</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					兴趣爱好：
				</view>
				<view class="card-item-text">{{userInfo.hobby}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					选择标签：
				</view>
				<view class="card-item-text">
					<view class="item-lable item-lable-active" v-for="(item,index) in otherList" :key="index">{{item.name}}</view>
				</view>
			</view>
		</view>

		<!-- 征友条件 -->
		<view class="card-warp card-shadow">
			<view class="card-title">
				<view class="title">征友条件</view>
				<!-- <view class="card-edit" @click="handleEeditUserConditon">
					<uni-icons type="compose" color="#ff77aa"></uni-icons>
				</view> -->
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>对方所在地：
				</view>
				<view class="card-item-text">{{partnerNativePlace}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					年龄：
				</view>
				<view class="card-item-text">{{partnerAge}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					身高：
				</view>
				<view class="card-item-text">{{partnerHeight}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					收入：
				</view>
				<view class="card-item-text">{{partnerIncome}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					学历：
				</view>
				<view class="card-item-text">{{userInfo.partnerEducation}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					婚姻状况：
				</view>
				<view class="card-item-text">{{isMarry}}</view>
			</view>
		</view>

		<!-- 聊天 -->
		<view style="height: 44px;" v-if="type==0"></view>
		<view class="bottom-wrapper" v-if="type==0">
			<view class="item item-border-right">
				<uni-icons type="redo" size="24" color="#fff" @click="handleFollow"></uni-icons> &nbsp;&nbsp;
				关注
			</view>
			<view class="item">
				<uni-icons type="chatbubble" size="24" color="#fff"  @click="handleFollow"></uni-icons> &nbsp;&nbsp;
				聊天
			</view>
		</view>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item"
	import uniIcons from "@/components/uni-icons/uni-icons"
	import appRequest from "@/utils/config.js"
	import {
		Vips
	} from "@/utils/fromCheck.js"
	import uniTag from "@/components/uni-tag/uni-tag.vue"
	export default {
		components: {
			uniList,
			uniListItem,
			uniIcons,
			uniTag
		},
		data() {
			return {
				userInfo: {
					userAvatar: ''
				},
				otherList: [],
				type: uni.getStorageSync('token').type
			}
		},
		onLoad(options) {

			if (this.type == 1) {
				appRequest.baseRequest({
					url: '/member/queryBackById',
					data: options,
					method: 'get',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							this.userInfo = res.data.data
							// 标签
							this.getLable()
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			} else {
				appRequest.baseRequest({
					url: '/member/queryById',
					data: options,
					method: 'get',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							if (res.data.code == "-1") {
								uni.showToast({
									title: "未查询到用户信息！",
									icon: "none"
								})
							} else {
								this.userInfo = res.data.data
								// 标签
								this.getLable()
							}

						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			}

		},
		computed: {
			// 年龄
			partnerAge() {
				if (this.userInfo.partnerAge) {
					let ageArr = JSON.parse(this.userInfo.partnerAge)
					return `${ageArr[0]}岁 - ${ageArr[1]}岁之间`
				}
			},
			// 身高
			partnerHeight() {
				if (this.userInfo.partnerHeight) {
					let heightArr = JSON.parse(this.userInfo.partnerHeight)
					return `${heightArr[0]}CM - ${heightArr[1]}CM`
				}
			},
			// 收入
			partnerIncome() {
				if (this.userInfo.partnerIncome) {
					let incomeArr = JSON.parse(this.userInfo.partnerIncome)
					return `月收入${incomeArr[0]} - ${incomeArr[1]}`
				}
			},
			compGrade() {
				let str = ""
				Vips.find((item, index) => {
					if (item.val == this.userInfo.level) {
						str = `对方设置仅${item.label}以上会员可查看`
					}
				})
				return str
			},
			compVip() {
				let str = ""
				Vips.find((item, index) => {
					if (item.val == this.userInfo.grade) {
						str = `${item.label}`
					}
				})
				return str
			},
			isMarry() {
				if (this.userInfo.partnerIsMarry == 1) {
					return '未婚'
				}
				if (this.userInfo.partnerIsMarry == 2) {
					return '离异'
				}
				if (this.userInfo.partnerIsMarry == 3) {
					return '丧偶'
				}
				return "未填写"
			},
			// 判断头像
			userAvatar() {
				return this.userInfo.userAvatar || "/static/icon/defult_header.jpg"
			},
			// 籍贯
			nativePlaceAdress() {
				if (this.userInfo.nativePlace) {
					let {
						province,
						city,
						town
					} = JSON.parse(this.userInfo.nativePlace)
					return `${province}${city}${town}`
				} else {
					return '-'
				}
			},
			// 现住地址
			currentAddress() {

				if (this.userInfo.currentAddress) {
					let {
						province,
						city,
						town
					} = JSON.parse(this.userInfo.currentAddress)
					return `${province}${city}${town}`
				} else {
					return "-"
				}
			},
			// 标签地址
			address() {
				if (this.userInfo.currentAddress) {
					return JSON.parse(this.userInfo.currentAddress).city
				} else {
					return '-'
				}
			},
			partnerNativePlace() {
				if (this.userInfo.partnerNativePlace) {
					let {
						province,
						city,
						town
					} = JSON.parse(this.userInfo.partnerNativePlace)
					return `${province}${city}${town}`
				} else {
					return "-"
				}
			}
		},
		methods: {
			// 获取标签
			getLable() {
				let query = {
					current: 1,
					size: 9999
				}
				appRequest.baseRequest({
					url: 'label/queryPage',
					data: query,
					method: 'get',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							this.lableList = res.data.data.records;
							let otherStandardsId = JSON.parse(this.userInfo.otherStandardsId)

							this.lableList.forEach((item, index) => {
								otherStandardsId.forEach(row => {
									if (row == item.id) {
										this.otherList.push(item);
									}
								})
							})
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},

			//头像大图
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: [current]
				})
			},
			handleGoBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			//关注、、、聊天
			 handleFollow(){
				 uni.showToast({
					title:"该功能暂未开通,敬请期待！",
					icon:"none"
				 })
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../uni.scss");

	.content {}

	.base {
		margin-top: 44px;
		padding: 8px;
	}

	.base-wrapper {
		position: relative;
		background-color: #fff9f9;
		border-radius: 20px;
		margin: 200upx 8px 8px 8px;

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
		font-size: 12px;
		text-align: center;
		border-radius: 20px;
		margin-left: 8px;
		background-color: rgb(138, 187, 214);
	}

	.card-warp {
		background-color: #fff;
		margin: 0 8px 8px 8px;
		border-radius: 25px;
		padding: 8px;
		line-height: 35px;
	}

	.card-warp .card-title {
		display: flex;
		justify-content: space-between;
		line-height: 1.9;
	}

	.card-warp .card-edit {
		width: 35px;
		height: 35px;
		text-align: center;
	}

	.card-warp .card-edit .uni-icons {
		font-size: 30px !important;
	}

	.card-warp .tips {
		font-size: $uni-font-size-base;
		color: rgb(254, 151, 62);
		line-height: 1.9;
	}

	.card-warp .card-item {
		line-height: 1.9;
		display: flex;
	}

	.card-warp .card-item-lable {
		// font-size: $uni-font-size-base;
		font-size: 28rpx;
		color: #a0a0a0;
		flex: 0 0 200upx
	}

	.card-warp .card-item-lable .uni-icons {
		margin-right: 5px;
		// font-size: $uni-font-size-base;
		font-size: 28px;
	}

	.card-warp .card-item-text {
		font-size: $uni-font-size-base;
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

	.bottom-wrapper {
		background-color: #FF77AA;
		height: 44px;
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;

		.item {
			flex: 1;
			font-size: 14px;
			color: #fff;
			height: 100%;
			line-height: 44px;
			text-align: center;
		}

		.item-border-right {
			border-right: 1px solid #fff;
		}
	}
</style>
