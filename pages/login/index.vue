<template>
	<view class="contanner">

		<view class="img-wrapper">
			<image src="/static/nav-img.jpg" :lazy-load="true" class="image" mode="widthFix"></image>
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
					<view class="tips">还没有账号？
						<router-link to="/pages/register/index">
							现在注册
						</router-link>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				userInfo: {
					userName: '',
					password: ''
				}
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
				console.log(valLoginRes)
				if (valLoginRes.isOk) {
					var formdata = this.userInfo
					uni.request({
						url: '/common/login', //仅为示例，并非真实接口地址。
						data: formdata,
						method: 'POST',
						success: (res) => {
							this.loading = false
								uni.showToast({
									title: `登录成功！`,
									icon:'success',
									showCancel: false,
								});
								uni.switchTab({
									url: '/pages/me/index',
									animationType: 'pop-in',
									animationDuration: 200,
									success() {
										uni.hideToast()
									}
								});
					
							// uni.showToast({
							// 	title: `登录成功！`,
							// 	icon:'success',
							// 	showCancel: false,
							// 	success() {
					
							// 	}
							// });
					
							uni.setStorageSync('token', res.data.data)
							// setTimeout(() => {
							// 	// this.$router.push('/pages/index/index')
							// 	uni.navigateTo({
							// 		url: '/pages/index/index',
							// 		animationType: 'pop-in',
							// 		animationDuration: 200
							// 	});
							// },1200)
						}
					})
				}else{
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					this.loading = false
					return false
				}
				
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
