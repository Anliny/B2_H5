<template>
	<view class="contanner">

		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				
				<view class="uni-form-item uni-column">
					<view class="form-lable">私密可看权限</view>
					<view class="form-inpput">
						<picker class="picker" :range="Vips" range-key="label" @change="handleVipsChange">
							{{ Vips[VipsIndex].label }}
						</picker>
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
		Vips
	} from "@/utils/fromCheck.js"
	import appRequest from "@/utils/config.js"

	export default {
		components: {
			
		},
		data() {
			return {
				loading: false,
				Vips: Vips,
				VipsIndex: 0,
				userDetailInfo: {
					level:''
				}
			}
		},
		onLoad(options) {
			let {
				level
			} = JSON.parse(options.info)
			
			this.userDetailInfo = {
				level: level ? level : ''
			}
			Vips.find((item, index) => {
				if (item.val == level) {
					this.VipsIndex = index
				}
			})
		},
		methods: {
			formSubmit(e) {
				let loginRules = [{
					name: 'level',
					required: true,
					type: 'text',
					errmsg: '请输入职位'
				}]
				this.userDetailInfo.id = uni.getStorageSync('userInfo').id
				let valLoginRes = this.$validate.validate(this.userDetailInfo, loginRules)
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
			},
			// 婚姻状况
			handleVipsChange(e) {
				this.VipsIndex = e.target.value
				this.userDetailInfo.level = Vips[this.VipsIndex].val
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../assets/common.scss");

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
