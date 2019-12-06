<template>
	<view class="content">
		<!-- 征友条件 -->
		<view class="card-warp card-shadow">
			<view class="card-title">
				<view class="title">征友条件</view>
				<view class="card-edit" @click="handleEeditUserConditon(userInfo)">
					<uni-icons type="compose" color="#ff77aa"></uni-icons>
				</view>
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
	import uniIcons from "@/components/uni-icons/uni-icons"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				userInfo: uni.getStorageSync("userInfo")
			}
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
			partnerNativePlace(){
				if(this.userInfo.partnerNativePlace){
					let {province,city,town} = JSON.parse(this.userInfo.partnerNativePlace)
					return `${province}${city}${town}`
				}else{
					return "-"
				}
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync("userInfo")
		},
		methods: {
			handleEeditUserConditon(data) {
				let info = {
					partnerAge:data.partnerAge,
					partnerHeight:data.partnerHeight,
					partnerNation:data.partnerNation,
					partnerEducation:data.partnerEducation,
					partnerIsMarry:data.partnerIsMarry,
					partnerNativePlace:data.partnerNativePlace,
					partnerIncome:data.partnerIncome
				}
				uni.navigateTo({
					url: '/pages/me/condition/editUserCondition?info='+JSON.stringify(info),
					animationType: 'pop-in',
					animationDuration: 200
				});
			}
		},
	}
</script>

<style>
	@import url("../../../assets/common.css");

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

	.content {
		padding-top: 8px;
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
