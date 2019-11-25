<template>
	<view class="content">
		<view class="base">
			<view class="base-wrapper card-shadow">
				<view class="img">
					<image :src="userAvatar" class="image" mode=""></image>
				</view>
				<!-- <view class="edit-btn" @click="handleEditUserHeader">
					<image src="/static/icon/edit.png" class="image" mode=""></image>
				</view> -->
				<text class="base-name">{{userInfo.nickName}}</text>
				<text class="base-id">ID：{{userInfo.memberId}}</text>
				<view class="base-code-wrapper">
					<view class="base-code-item">{{address}}</view>
					<view class="base-code-item code2">{{userInfo.education}}</view>
					<view class="base-code-item code3">{{userInfo.position}}</view>
					<!-- <view class="base-code-item code4">{{}}</view> -->
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
			<view class="tips">仅银卡会员可查看</view>
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
		</view>

		<!-- 资产状况 -->
		<view class="card-warp card-shadow">
			<view class="card-title">
				<view class="title">资产状况</view>
				<!-- <view class="card-edit" @click="handleEditUserAssetStatus">
					<uni-icons type="compose" color="#ff77aa"></uni-icons>
				</view> -->
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
			<view class="tips">仅银卡会员可查看</view>
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
				<view class="card-item-text">{{userInfo.vehicle}}</view>
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
				<view class="card-item-text">{{userInfo.partnerAge}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					身高：
				</view>
				<view class="card-item-text">{{userInfo.partnerHeight}}</view>
			</view>
			<view class="card-item">
				<view class="card-item-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					收入：
				</view>
				<view class="card-item-text">{{userInfo.partnerIncome}}以上</view>
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
			<!-- <view class="tips">仅银卡会员可查看</view> -->
		</view>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item"
	import uniIcons from "@/components/uni-icons/uni-icons"
	import appRequest from "@/utils/config.js"
	export default {
		components: {
			uniList,
			uniListItem,
			uniIcons
		},
		data() {
			return {
				userInfo:{
					userAvatar:''
				}
			}
		},
		onLoad(options) {
			console.log(options)
			appRequest.baseRequest({
				url: '/member/queryById',
				data:options,
				method: 'get',
				success: (res) => {
					// 用户状态存到缓存中去
					try {
						this.userInfo = res.data.data
						console.log(this.userInfo)
					} catch (e) {
						//TODO handle the exception
					}
				}
			})
		},
		computed: {
			isMarry() {
				if(this.userInfo.partnerIsMarry == 1){
					return '未婚'
				}
				if(this.userInfo.partnerIsMarry == 2){
					return '离异'
				}
				if(this.userInfo.partnerIsMarry == 3){
					return '丧偶'
				}
				return "未填写"
			},
			// 判断头像
			userAvatar() {
				return this.userInfo.userAvatar ? this.userInfo.userAvatar : "/static/icon/defult_header.jpg" 
			},
			// 籍贯
			nativePlaceAdress(){
				if(this.userInfo.nativePlace){
					let {province,city,town} = JSON.parse(this.userInfo.nativePlace)
					return `${province}${city}${town}`
				}else{
					return '-'
				}
			},
			// 现住地址
			currentAddress(){
				if(this.userInfo.currentAddress){
					let {province,city,town} = JSON.parse(this.userInfo.nativePlace)
					return `${province}${city}${town}`
				}else{
					return "-"
				}
			},
			// 标签地址
			address() {
				if (this.userInfo.currentAddress) {
					return JSON.parse(this.userInfo.currentAddress).city + '户口'
				} else {
					return '-'
				}
			},
			partnerNativePlace(){
				if(this.userInfo.partnerNativePlace){
					let {province,city,town} = JSON.parse(this.userInfo.partnerNativePlace)
					return `${province}${city}${town}`
				}else{
					return "-"
				}
			}
		},
		methods: {
			// 获取用户信息
			handleGoTrack() {
				// 跳转路由
				uni.navigateTo({
					url: '/pages/me/track/index',
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
			
			// 编辑用户信息
			handleEditUserInfo(){
				uni.navigateTo({
					url: '/pages/me/editUserInfo',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 编辑头像和昵称
			handleEditUserHeader(){
				uni.navigateTo({
					url: '/pages/me/editUserHeader',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 编辑联系方式
			handleEditUserContact(){
				uni.navigateTo({
					url: '/pages/me/editUserContact',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 编辑其他信息
			handleEditUserInfomation(){
				uni.navigateTo({
					url: '/pages/me/editUserInfomation',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 编辑资产状况
			handleEditUserAssetStatus(){
				uni.navigateTo({
					url: '/pages/me/editUserAssetStatus',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 编辑自我描述
			handleEditUserDescrable(){
				uni.navigateTo({
					url: '/pages/me/editUserDescrable',
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style>
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
	}
	.card-warp .card-edit {
		width: 35px;
		height: 35px;
		text-align: center;
	}
	.card-warp .card-edit .uni-icons{
		font-size: 30px !important;
	}

	.card-warp .tips {
		font-size: 12px;
		color: rgb(254, 151, 62);
		line-height: 25px;
	}

	.card-warp .card-item {
		line-height: 30px;
		display: flex;
	}

	.card-warp .card-item-lable {
		font-size: 14px;
		color: #a0a0a0;
	}

	.card-warp .card-item-lable .uni-icons {
		margin-right: 5px;
	}

	.card-warp .card-item-text {
		font-size: 14px;
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
