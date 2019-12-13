<template>
	<view class="contanner">
		<view class="img-wrapper">
			<image src="/static/banner.jpg" :lazy-load="true" class="image" mode="widthFix"></image>
		</view>
		<!-- <xyz-tab :tabList="tabList"></xyz-tab> -->
		<!-- 切换注册用户 -->

		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				<!-- 会员注册 -->
				<view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">手机号：</view>
						<view class="form-inpput">
							<input v-model="userInfo.userName" type="number" placeholder-class="placeholder" placeholder="请填写手机号" />
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">验证码：</view>
						<view class="form-inpput verification-wrapper">
							<input class="verification-input" v-model="userInfo.sms" type="number" />
							<button class="verification-btn" :disabled="btnDisable" @click="handleGetSms">{{btnText}}</button>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">密码：</view>
						<view class="form-inpput">
							<input v-model="userInfo.password" type="password" placeholder-class="placeholder" placeholder="请输入密码" />
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">确认密码：</view>
						<view class="form-inpput">
							<input v-model="userInfo.confirmpassword" type="password" placeholder-class="placeholder" placeholder="请输入确认密码" />
						</view>
					</view>

				</view>


				<view class="uni-btn-v">
					<button type="primary" :loading="loading" form-type="submit">确定</button>
					<view class="tips">
						<navigator url="/pages/login/index" hover-class="navigator-hover">
							去登录
						</navigator>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import xyzTab from "@/components/xyz-tab/xyz-tab"
	import utils from "@/utils/utils.js"
	export default {
		components: {
			xyzTab
		},
		data() {
			return {

				btnDisable: false,
				btnText: '获取验证码',
				loading: false,
				userInfo: {
					userName: '',
					sms: '', //验证码
					password: '',
					confirmpassword: ''
				}
			}
		},
		onLoad() {
			uni.setStorage({
				key: 'storage_key',
				data: 'hello',
				success: function() {
					console.log('success');
				}
			});
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					console.log(res);
				}
			});
		},
		methods: {
			formSubmit() {
				this.loading = true
				this.loading = false
				let registerRules = [{
						name: 'userName',
						required: true,
						type: 'text',
						errmsg: '请输入账号'
					},
					{
						name: 'password',
						type: 'required',
						errmsg: '请输入密码'
					},
					{
						name: 'confirmpassword',
						type: 'required',
						errmsg: '请输入确认密码'
					},
					{
						name: 'sms',
						type: 'required',
						errmsg: '请输入验证码'
					}
				]

				if (!utils.verifPassword(this.userInfo.password)) {
					this.loading = false
					return false
				}

				let valRegisterRes = this.$validate.validate(this.userInfo, registerRules)
				if (!valRegisterRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valRegisterRes.errmsg
					})
					return false
				}
				let {
					password,
					confirmpassword
				} = this.userInfo
				if (password !== confirmpassword) {
					uni.showToast({
						icon: 'none',
						title: '两次密码不一致'
					})
					return false
				}
				var formdata = this.userInfo
				uni.showToast({
					title: "功能占未开通",
					icon: "none"
				})

				uni.request({
					url: 'common/updatePassword', //仅为示例，并非真实接口地址。
					data: formdata,
					method: 'POST',
					success: (res) => {
						let userInfo = res.data.data
						this.loading = false
						try {
							if (userInfo.code == -1) {
								uni.showToast({
									title: userInfo.message,
									icon: "none"
								});
							} else {
								uni.showToast({
									title: `密码修改成功！`,
									icon: 'success',
									showCancel: false,
								});
								setTimeout(() => {
									uni.navigateTo({
										url: '/pages/login/index'
									})
								}, 1200)
							}

						} catch (e) {
							// error
						}

					}
				});
			},
			formReset: (e) => {
				console.log('清空数据')
			},
			// 获取验证码
			handleGetSms() {
				let registerRules = [{
					name: 'userName',
					required: true,
					type: 'text',
					errmsg: '请输入电话号码'
				}]
				let valRegisterRes = this.$validate.validate(this.userInfo, registerRules)
				if (!valRegisterRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valRegisterRes.errmsg
					})
					return false
				}

				let timeNumber = 60
				let timeObj = setInterval(() => {
					if (timeNumber == 0) {
						clearInterval(timeObj)
						this.btnText = "再次获取验证码"
						this.btnDisable = false
					} else {
						this.btnText = `${timeNumber}s后，重新获取`
						timeNumber--
						this.btnDisable = true;
					}
				}, 1000)

				uni.request({
					url: '/common/querySms', //仅为示例，并非真实接口地址。
					data: {
						phone: this.userInfo.userName
					},
					method: 'get',
					success: (res) => {
						uni.showToast({
							title: `短信已发送，请注意查收！`,
							icon: 'success',
							showCancel: false,
							success: () => {
								// console.log(this.userInfo)
								// this.userInfo.sms = res.data.data
								uni.hideToast()
							}
						});
					}
				});
			}
		}
	}
</script>

<style>
	@import url("../../assets/common.css");

	.bar-wrapper {
		display: flex;
		justify-content: center;
	}

	.bar-item {
		line-height: 34px;
		margin-left: 10px;
		font-size: 16px;
		text-align: center;
		padding: 0 20px;
	}

	.bar-item-active {
		border-bottom: 1px solid rgb(255, 119, 170);
	}

	.content {
		padding: 20rpx;
	}

	.tips {
		color: #8F8F94;
		line-height: 35px;
		font-size: 14px;
	}

	.verification-btn {
		font-size: 14px !important;
	}
</style>
