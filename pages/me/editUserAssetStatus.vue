<template>
	<view class="contanner">
		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="form-lable">收入</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.income" type="text" placeholder-class="placeholder" placeholder="请填写每月收入情况" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">住房情况</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.housing" type="text" placeholder-class="placeholder" placeholder="请填写住房情况" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">是否有车</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.vehicle" type="text" placeholder-class="placeholder" placeholder="请填写是否购车" />
					</view>
				</view>
				
				
				<view class="uni-btn-v">
					<button type="primary" :loading="loading" form-type="submit">提交</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import {
		marrys
	} from "@/utils/fromCheck.js"
	import appRequest from "@/utils/config.js"

	export default {
		data() {
			return {
				isAdress: 0,
				loading: false,
				marrys: marrys,
				marrysIndex: 0,
				userDetailInfo: {
					income: '', //收入
					housing:'' ,//住房情况，
					vehicle:''  //是否有车
				}
			}
		},
		methods: {
			formSubmit(e) {
				// console.log(e)
				let loginRules = [
					{
						name: 'income',
						required: true,
						type: 'text',
						errmsg: '请填写每月收入情况'
					},{
						name: 'housing',
						required: true,
						type: 'text',
						errmsg: '请填写住房情况'
					},{
						name: 'housing',
						required: true,
						type: 'text',
						errmsg: '请填写是否购车'
					}
				]
				this.userDetailInfo.id = uni.getStorageSync('userInfo').id
				console.log(this.userDetailInfo)
				let valLoginRes = this.$validate.validate(this.userDetailInfo, loginRules)
				// console.log(this.userDetailInfo);
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				
				appRequest.baseRequest({
					url: 'member/save',
					data: this.userDetailInfo,
					method: 'post',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							uni.showToast({
								title: `保存成功！`,
								icon: 'success',
								showCancel: false
							});
							this.userInfo = res.data.data
							uni.setStorageSync('userInfo', res.data.data)
							setTimeout(() => {
								this.$router.replace('/pages/me/detail')
							}, 1200)

						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},
			formReset: (e) => {
				console.log('清空数据')
			}
		}
	}
</script>

<style>
	@import url("../../assets/common.css");

	.img-wrapper {
		height: 200px;
	}

	.bar-wrapper {
		display: flex;
		justify-content: center;
	}

	.bar-item {
		border-bottom: 2rpx solid rgb(255, 119, 170);
		line-height: 80rpx;
		margin-left: 10px;
		font-size: 16px;
	}

	.content {
		padding: 20rpx;
	}

	.tips {
		color: #8F8F94;
		line-height: 35px;
		font-size: 14px;
	}
</style>
