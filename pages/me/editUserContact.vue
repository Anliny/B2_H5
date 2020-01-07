<template>
	<view class="contanner">
		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="form-lable">手机号：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.phone" type="text" placeholder-class="placeholder" placeholder="请填写手机号" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">微信号：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.wechatNumber" type="text" placeholder-class="placeholder" placeholder="请填写微信号" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">QQ号：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.qq" type="text" placeholder-class="placeholder" placeholder="请填写微信号" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">E-mail：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.email" type="text" placeholder-class="placeholder" placeholder="请填写微信号" />
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
	import utils from "@/utils/utils.js"
	import uniTag from "@/components/uni-tag/uni-tag.vue"

	export default {
		components: {
			uniTag
		},
		data() {
			return {
				loading: false,
				vips: Vips,
				vipIndex: 0,

				userDetailInfo: {
					phone: '',
					wechatNumber: '',
					qq: '',
					email: ''
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
				phone,
				wechatNumber,
				qq,
				email,
				level
			} = JSON.parse(options.info)
			this.userDetailInfo = {
				phone: phone ? phone : '',
				wechatNumber: wechatNumber ? wechatNumber : '',
				qq: qq ? qq : '',
				email: email ? email : '',
				level: level
			}
		},
		methods: {
			formSubmit(e) {
				let loginRules = [{
						name: 'phone',
						required: true,
						type: 'text',
						errmsg: '请输入真实姓名'
					},
					{
						name: 'wechatNumber',
						required: true,
						type: 'text',
						errmsg: '请输入微信号'
					},
					{
						name: 'qq',
						required: true,
						type: 'text',
						errmsg: '请输入QQ号码'
					},
					{
						name: 'email',
						required: true,
						type: 'text',
						errmsg: '请输入邮箱'
					}
				]
				let valLoginRes = this.$validate.validate(this.userDetailInfo, loginRules)
				if (!utils.verifEmail(this.userDetailInfo.email)) {
					return false
				}
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				this.userDetailInfo.id = uni.getStorageSync('userInfo').id

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

			// 选择哪个等级可看
			handleVipChange(e) {
				this.vipIndex = e.target.value
				this.userDetailInfo.vips = Vips[this.vipIndex]
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
