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

<uni-tag type="error" style="display: inline-block;" size="small" :inverted="true" :text="compLevel"></uni-tag><br /><br />
				<view class="uni-btn-v">
					<button type="primary" :loading="loading" form-type="submit">提交</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import {
		Vips
	} from "@/utils/fromCheck.js"
	import appRequest from "@/utils/config.js"
import uniTag from "@/components/uni-tag/uni-tag.vue"
	export default {
		components: {
			uniTag
		},
		data() {
			return {
				isAdress: 0,
				loading: false,
				vips: Vips,
				vipIndex: 0,
				userDetailInfo: {
					income: '', //收入
					housing: '', //住房情况，
					vehicle: '',//是否有车
				}
			}
		},
		computed: {
			compLevel() {
				let str = ""
				Vips.find((item, index) => {
					if (item.val == this.userDetailInfo.level) {
						console.log(`你设置了${item.label}以上会员可查看！`)
						str = `你设置了${item.label}以上会员可查看！(如想修改请移步私密设置)`
					}
				})
				return str
			}
		},
		onLoad(options) {
			let {
				income,
				housing,
				vehicle,
				level
			} = JSON.parse(options.info)
			this.userDetailInfo = {
				income: income ? income : "",
				housing: housing ? housing : '',
				vehicle: vehicle ? vehicle : '',
				level:level
			}
		},
		methods: {
			formSubmit(e) {
				// console.log(e)
				let loginRules = [{
					name: 'income',
					required: true,
					type: 'text',
					errmsg: '请填写每月收入情况'
				}, {
					name: 'housing',
					required: true,
					type: 'text',
					errmsg: '请填写住房情况'
				}, {
					name: 'housing',
					required: true,
					type: 'text',
					errmsg: '请填写是否购车'
				}]
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
								uni.switchTab({
									url: '/pages/me/index',
									animationType: 'pop-in',
									animationDuration: 200
								});
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
