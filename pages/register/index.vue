<template>
	<view class="contanner">
		<view class="img-wrapper">
			<image src="/static/nav-img.jpg" :lazy-load="true" class="image" mode="widthFix"></image>
		</view>
		<!-- <xyz-tab :tabList="tabList"></xyz-tab> -->
		<!-- 切换注册用户 -->
		<view class="bar-wrapper">
			<view class="bar-item" v-for="(item,index) in tabList" :key="index" :class="isTitleBar == index ? 'bar-item-active' : ''"
			 @click="handleCheckLabel(index)">{{item.label}}</view>
		</view>
		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				<!-- 会员注册 -->
				<view v-if="!isTitleBar">
					<view class="uni-form-item uni-column">
						<view class="form-lable">手机号：</view>
						<view class="form-inpput">
							<input v-model="userInfo.phone" type="number" />
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">推荐码：</view>
						<view class="form-inpput">
							<input v-model="userInfo.inviteCode" type="number" />
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">密码：</view>
						<view class="form-inpput">
							<input v-model="userInfo.password" type="number" />
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">确认密码：</view>
						<view class="form-inpput">
							<input v-model="userInfo.confirmpassword" type="number" />
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">验证码：</view>
						<view class="form-inpput verification-wrapper">
							<input class="verification-input" v-model="userInfo.verificationCode" type="number" />
							<button class="verification-btn">获取验证码</button>
						</view>
					</view>
				</view>

				<!-- 红娘注册 -->
				<view v-if="isTitleBar">
					<view class="uni-form-item uni-column">
						<view class="form-lable">手机号：</view>
						<view class="form-inpput">
							<input v-model="userInfo.phone" type="number" />
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">密码：</view>
						<view class="form-inpput">
							<input v-model="userInfo.password" type="number" />
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">确认密码：</view>
						<view class="form-inpput">
							<input v-model="userInfo.confirmpassword" type="number" />
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-lable">验证码：</view>
						<view class="form-inpput verification-wrapper">
							<input class="verification-input" v-model="userInfo.verificationCode" type="number" />
							<button class="verification-btn">获取验证码</button>
						</view>
					</view>
				</view>

				<view class="uni-btn-v">
					<button type="primary" :loading="loading" form-type="submit">注册</button>
					<view class="tips">已有账号？
						<router-link to="/pages/login/index">
							现在登录
						</router-link>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import xyzTab from "@/components/xyz-tab/xyz-tab"
	export default {
		components: {
			xyzTab
		},
		data() {
			return {
				tabList: [{
					label: "会员注册"
				}, {
					label: "红娘注册"
				}],
				loading: false,
				isTitleBar: 0,
				userInfo: {
					phone: '',
					inviteCode: '', //邀请码
					verificationCode: '',
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
				let registerRules = [{
						name: 'phone',
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
						name: 'verificationCode',
						type: 'required',
						errmsg: '请输入验证码'
					}
				]


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
				formdata.type = this.isTitleBar

				console.log(this.isTitleBar)
				uni.request({
					url: '/common/register', //仅为示例，并非真实接口地址。
					data: formdata,
					method: 'POST',
					success: (res) => {
						console.log(res.data);
						let userInfo = res.data.data
						try {
						    uni.setStorageSync('userInfo', userInfo);
							this.loading = false
							uni.showToast({
								title: `注册成功！`,
								icon: 'success',
								showCancel: false,
							});
							setTimeout(() => {
								this.$router.push('/pages/login/index')
							},1200)
						} catch (e) {
						    // error
						}
						
					}
				});



			},
			formReset: (e) => {
				console.log('清空数据')
			},
			handleCheckLabel(index) {
				this.isTitleBar = index;
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
</style>
