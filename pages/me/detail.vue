<template>
	<view class="content">
		<!-- <view class="base">
			<view class="base-wrapper ">
				<view class="img">
					<image :src="userAvatar" :data-src="userAvatar" @tap="previewImage" class="image" mode=""></image>
				</view>
				<view class="edit-btn" @click="handleEditUserHeader(userInfo)">
					<image src="/static/icon/edit.png" class="image" mode=""></image>
				</view>
				<text class="base-name">{{userInfo.nickName}}</text>
				<text class="base-id">ID：{{userInfo.memberId}}</text>
				<view class="base-code-wrapper">
					<view class="base-code-item">{{address}}</view>
					<view class="base-code-item code2">{{userInfo.education}}</view>
					<view class="base-code-item code3">{{userInfo.position}}</view>
				</view>
			</view>
		</view> -->

		<!-- 头部信息 -->
		<view class="card-warp" style="margin-top: 8px;">
			<view class="card-title">
				<view class="">基本信息</view>
			</view>
			<uni-list>
				<uni-list-item @click="handleEdit('name')" title="真实姓名" :show-badge="true" :badge-text="userInfo.name"></uni-list-item>
				<uni-list-item @click="handleEdit('idCare')" title="身份证号" :show-badge="true" :badge-text="userInfo.idCare"></uni-list-item>
				<uni-list-item  disabled='true' title="性别" :show-arrow='false' :show-badge="true" :badge-text="userInfo.gender==1 ? '男':'女'"></uni-list-item>
				<uni-list-item  disabled='true' title="年龄" :show-arrow='false' :show-badge="true" :badge-text="userInfo.age"></uni-list-item>
				<uni-list-item  disabled='true' title="出生日期" :show-arrow='false' :show-badge="true" :badge-text="userInfo.birthday"></uni-list-item>
				<uni-list-item @click="handleEdit('height')" title="身 高" :show-badge="true" :badge-text="userInfo.height+'CM'"></uni-list-item>
				<uni-list-item @click="handleEdit('nation')" title="民 族" :show-badge="true" :badge-text="userInfo.nation"></uni-list-item>
				<uni-list-item @click="handleEdit('weight')" title="体 重" :show-badge="true" :badge-text="userInfo.weight + 'KG'"></uni-list-item>
				<uni-list-item @click="handleEdit('education')" title="最高学历" :show-badge="true" :badge-text="userInfo.education"></uni-list-item>
				
			</uni-list>
		</view>

		<!-- 联系方式 -->
		<view class="card-warp">
			<view class="card-title">
				<view class="title">联系方式</view>
			</view>
			<uni-list>
				<uni-list-item @click="handleEdit('phone')" title="手机号" :show-badge="true" :badge-text="userInfo.phone"></uni-list-item>
				<uni-list-item @click="handleEdit('wechatNumber')" title="微信号" :show-badge="true" :badge-text="userInfo.wechatNumber"></uni-list-item>
				<uni-list-item @click="handleEdit('qq')" title="qq号" :show-badge="true" :badge-text="userInfo.qq"></uni-list-item>
				<uni-list-item @click="handleEdit('email')" title="email" :show-badge="true" :badge-text="userInfo.email"></uni-list-item>
				<uni-list-item @click="handleEdit('level')" title="设置查看等级" :show-badge="true" :badge-text="level"></uni-list-item>
			</uni-list>
		</view>

		<!-- 其他信息 -->
		<view class="card-warp ">
			<view class="card-title">
				<view class="title">其他信息</view>
			</view>
			<uni-list>
				<uni-list-item @click="handleEdit('position')" title="职位" :show-badge="true" :badge-text="userInfo.position"></uni-list-item>
				<uni-list-item @click="handleEdit('nativePlaceAdress')" title="籍贯" :show-badge="true" :badge-text="nativePlaceAdress"></uni-list-item>
				<uni-list-item @click="handleEdit('currentAddress')" title="现住地址" :show-badge="true" :badge-text="currentAddress"></uni-list-item>
				<uni-list-item @click="handleEdit('industry')" title="行业" :show-badge="true" :badge-text="userInfo.industry"></uni-list-item>
				<uni-list-item @click="handleEdit('isMarry')" title="是否婚配" :show-badge="true" :badge-text="isMarry"></uni-list-item>
				<uni-list-item @click="handleEdit('isChild')" title="是否有小孩" :show-badge="true" :badge-text="userInfo.isChild == '0' ? '有':'无'"></uni-list-item>
			</uni-list>
		</view>

		<!-- 资产状况 -->
		<view class="card-warp ">
			<view class="card-title">
				<view class="title">资产状况</view>
			</view>
			<uni-list>
				<uni-list-item @click="handleEdit('income')" title="收入" :show-badge="true" :badge-text="userInfo.income+'以上'"></uni-list-item>
				<uni-list-item @click="handleEdit('housing')" title="住房情况" :show-badge="true" :badge-text="userInfo.housing"></uni-list-item>
				<uni-list-item @click="handleEdit('vehicle')" title="是否有车" :show-badge="true" :badge-text="userInfo.vehicle"></uni-list-item>
			</uni-list>
		</view>

		<!-- 自我描述 -->
		<view class="card-warp ">
			<view class="card-title">
				<view class="title">自我介绍</view>

			</view>
			<uni-list>
				<uni-list-item @click="handleEdit('declaration')" title="爱情宣言" :note="userInfo.declaration"></uni-list-item>
				<uni-list-item @click="handleEdit('hobby')" title="兴趣爱好" :note="userInfo.hobby"></uni-list-item>
				<uni-list-item @click="handleEdit('otherStandardsId')" :isLabel="true" :label="otherStandardsId" title="我的标签"></uni-list-item>
			</uni-list>

		</view>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item1.vue"
	import uniIcons from "@/components/uni-icons/uni-icons"
	import utils from "@/utils/utils.js"
	import {Vips} from "@/utils/fromCheck.js"
	export default {
		components: {
			uniList,
			uniListItem,
			uniIcons
		},
		data() {
			return {
				userInfo: uni.getStorageSync("userInfo")
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync("userInfo")
		},
		computed: {
			isMarry() {
				if (this.userInfo.isMarry == 1) {
					return '未婚'
				}
				if (this.userInfo.isMarry == 2) {
					return '离异'
				}
				if (this.userInfo.isMarry == 3) {
					return '丧偶'
				}
				return "未填写"
			},
			level(){
				return Vips.filter(item => item.val == this.userInfo.level)[0].label
			},
			// 格式化 个人标签
			otherStandardsId(){
				if(this.userInfo.otherStandardsId){
					let lebelList = uni.getStorageSync('lableList')
					let arrId = JSON.parse(this.userInfo.otherStandardsId)
					let arr = []
					arrId.forEach((label,index) => {
						arr = [...arr,...lebelList.filter(item => item.id == label)]
					})
					
					return arr
				}else{
					return []
				}
			},
			// 判断头像
			userAvatar() {
				return this.userInfo.userAvatar ? this.userInfo.userAvatar : "/static/icon/defult_header.jpg"
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
					return JSON.parse(this.userInfo.currentAddress).city + '户口'
				} else {
					return '-'
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
			handleEditUserInfo(data) {
				let info = {
					name: data.name,
					idCare: data.idCare,
					gender: data.gender,
					age: data.age,
					birthday: data.birthday,
					height: data.height,
					nation: data.nation,
					weight: data.weight,
					education: data.education
				}
				uni.navigateTo({
					url: '/pages/me/editUserInfo?data=' + JSON.stringify(info),
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 编辑头像和昵称
			handleEditUserHeader(item) {
				let {
					userAvatar,
					nickName
				} = item
				uni.navigateTo({
					url: `/pages/me/editUserHeader?userAvatar=${userAvatar}&&nickName=${nickName}`,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 编辑联系方式
			handleEditUserContact(data) {
				let info = {
					phone: data.phone,
					wechatNumber: data.wechatNumber,
					qq: data.qq,
					email: data.email
				}
				uni.navigateTo({
					url: '/pages/me/editUserContact?info=' + JSON.stringify(info),
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 编辑其他信息
			handleEditUserInfomation(data) {
				let info = {
					position: data.position,
					nativePlace: data.nativePlace,
					currentAddress: data.currentAddress,
					industry: data.industry,
					isMarry: data.isMarry
				}
				uni.navigateTo({
					url: '/pages/me/editUserInfomation?info=' + JSON.stringify(info),
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 编辑资产状况
			handleEditUserAssetStatus(data) {
				let info = {
					income: data.income,
					housing: data.housing,
					vehicle: data.vehicle
				}
				uni.navigateTo({
					url: '/pages/me/editUserAssetStatus?info=' + JSON.stringify(info),
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			// 编辑自我描述
			handleEditUserDescrable(data) {
				let info = {
					declaration: data.declaration,
					hobby: data.hobby,
					otherStandards: data.otherStandards
				}
				uni.navigateTo({
					url: '/pages/me/editUserDescrable?info=' + JSON.stringify(info),
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			//头像大图
			previewImage(e) {
				utils.fullImage(e)
			},
			// 编辑用户信息
			handleEdit(text){
				uni.navigateTo({
					url: '/pages/me/editUserDescrable?text='+text,
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
		font-size: 12px;
		text-align: center;
		border-radius: 20px;
		margin-left: 8px;
		background-color: rgb(138, 187, 214);
	}

	.card-warp {
		background-color: #fff;
		margin: 0 8px 8px 8px;
		border-radius: 5px;
		padding: 8px;
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

	.card-warp .card-edit .uni-icons {
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
		font-size: 12px;
		color: #a0a0a0;
		flex: 0 0 95px;
	}

	.card-warp .card-item-lable .uni-icons {
		margin-right: 5px;
	}

	.card-warp .card-item-text {
		font-size: 12px;
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

	.uni-badge--success {
		color: #333;
		background-color: #fff;
	}
</style>
