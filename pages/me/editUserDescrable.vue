<template>
	<view class="contanner">
		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="form-lable">爱情宣言：</view>
					<view class="form-inpput">
						<textarea @blur="bindTextAreaBlur" style="font-size: 14px;line-height: 35px;" placeholder-style="color:#F76260"
						 placeholder="请输入爱情宣言" v-model="userDetailInfo.declaration" auto-height />
						</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">兴趣爱好：</view>
					<view class="form-inpput">
						<textarea @blur="bindTextAreaBlur" style="font-size: 14px;line-height: 35px;" placeholder-style="color:#F76260" placeholder="请输入兴趣爱好" v-model="userDetailInfo.hobby" auto-height />
					</view>
				</view>
				<!-- <view class="uni-form-item uni-column">
					<view class="form-lable">选择标签：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.wechatNumber" type="text" placeholder-class="placeholder" placeholder="请填写微信号" />
					</view>
				</view> -->
				<view class="uni-btn-v">
					<button type="primary" :loading="loading" form-type="submit">提交</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import {Vips} from "@/utils/fromCheck.js"
	import appRequest from "@/utils/config.js"
	export default {
		data() {
			return {
				loading: false,
				vips: Vips,
				vipIndex: 0,
				
				userDetailInfo: {
					declaration: '',
					hobby: '',
				}
			}
		},
		onLoad(options) {
			console.log(options);
			let {
				declaration,
				hobby,
				otherStandards
			} = JSON.parse(options.info)
			this.userDetailInfo = {
				declaration:declaration?declaration:'',
				hobby:hobby?hobby:''
			}
			
		},
		methods: {
			formSubmit(e) {
				let loginRules = [{
						name: 'declaration',
						required: true,
						type: 'text',
						errmsg: '请输入真实姓名'
					},
					{
						name: 'hobby',
						required: true,
						type: 'text',
						errmsg: '请输入身份证号'
					}
				]
				let valLoginRes = this.$validate.validate(this.userDetailInfo, loginRules)
				console.log(this.userDetailInfo);
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
					data:this.userDetailInfo,
					method: 'post',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							uni.showToast({
								title: `保存成功！`,
								icon:'success',
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
							},1200)
							
						} catch (e) {
							//TODO handle the exception
						}
					}
				})

			},
			formReset: (e) => {
				console.log('清空数据')
			},

			// 
			bindTextAreaBlur(){}
		}
	}
</script>

<style>
	@import url("../../assets/common.css");
	.uni-form-item{
		height: auto;
	}
	
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
