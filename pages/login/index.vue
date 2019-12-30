<template>
	<view class="contanner">

		<view class="img-wrapper image-wrapper">
			<image src="/static/banner.jpg" :lazy-load="true" class="image" mode="widthFix"></image>
		</view>
		
		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="form-lable">账号：</view>
					<view class="form-inpput">
						<input v-model="userInfo.userName" placeholder-class="placeholder" type="text" placeholder="请输入电话号码或者ID号" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">密码：</view>
					<view class="form-inpput">
						<input v-model="userInfo.password" type="password" placeholder-class="placeholder" placeholder="请输入密码" />
					</view>
				</view>
				<view class="uni-btn-v">
					<button type="primary" :loading="loading" form-type="submit">登录</button>
					<view class="tips">
						<navigator url="/pages/register/index" hover-class="navigator-hover">
							没有账号？去注册
						</navigator>
						<navigator url="/pages/login/retrieveIndex" hover-class="navigator-hover">
							忘记密码？去找回
						</navigator>
					</view>
				</view>
			</form>
		</view>
		<view class="bottom-tips">实名认证 安全放心</view>
	</view>
</template>

<script>
	import appRequest from "@/utils/config.js"
	export default {
		data() {
			return {
				loading: false,
				tabList: [{
					label: "会员登录"
				}, {
					label: "红娘登录"
				}],
				userInfo: {
					userName: '',
					password: ''
				},
				token: ''
			}
		},
		methods: {
			formSubmit(e) {
				this.loading = true

				let loginRules = [{
						name: 'userName',
						required: true,
						type: 'text',
						errmsg: '请输入账号'
					},
					{
						name: 'password',
						type: 'required',
						errmsg: '请输入密码'
					}
				]
				let valLoginRes = this.$validate.validate(this.userInfo, loginRules)
				if (valLoginRes.isOk) {
					var formdata = this.userInfo
					// 会员
					this.vipRequst(formdata)

				} else {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					this.loading = false
					return false
				}
			},
			// 会员登录
			vipRequst(formdata) {
				uni.request({
					url: '/common/login',
					data: formdata,
					method: 'POST',
					success: (res) => {
						this.loading = false
						try {
							if (res.data.code == "-1") {
								uni.showToast({
									title: res.data.message,
									icon: "none"
								})
							} else {
								uni.setStorageSync('token', res.data.data)
								let type = res.data.data.type
								uni.showToast({
									title: `登录成功！`,
									icon: 'success',
									showCancel: false,
									success: () => {
										this.getUserInfo(type)
									},
								})
							}
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},

			// 获取用户信息
			getUserInfo(bool) {
				appRequest.baseRequest({
					url: bool ? '/matchmaker/queryById' : '/member/queryById',
					method: 'get',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							this.userInfo = res.data.data
							uni.setStorage({
								key: 'userInfo',
								data: res.data.data,
								success: function() {
									uni.switchTab({
										url: '/pages/index/index',
										animationType: 'pop-in',
										animationDuration: 200,
										success() {
											uni.hideToast()
										}
									});
								}
							});
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},

			// 红娘登录
			jokRequst(formdata) {
				uni.request({
					url: '/common/login',
					data: formdata,
					method: 'POST',
					success: (res) => {
						this.loading = false
						try {
							if (res.data.code == "-1") {
								uni.showToast({
									title: res.data.message,
									icon: "none"
								})
							} else {
								uni.setStorageSync('token', res.data.data)
								uni.showToast({
									title: `登录成功！`,
									icon: 'success',
									showCancel: false,
									success: () => {
										this.getUserInfo(false)
									},
								})
							}
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

	.img-wrapper {
		height: 200px;
	}

	.bar-wrapper {
		display: flex;
		justify-content: center;
	}


	.content {
		padding: 20rpx;
	}

	.tips {
		display: flex;
		justify-content: space-between;
		color: #8F8F94;
		line-height: 35px;
		font-size: 14px;
	}
</style>
