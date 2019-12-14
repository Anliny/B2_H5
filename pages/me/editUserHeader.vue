<template>
	<view class="contanner">
		<form @submit="formSubmit" @reset="formReset">
			<view class="flex">
				<view style="text-align: center;background-color: #fff;">
					<image :src="userDetailInfo.userAvatar" class="avatar" @tap="upload"></image>
					<view class="item flex" @tap="upload">点击头像上传</view>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">昵称：</view>
				<view class="form-inpput">
					<input v-model="userDetailInfo.nickName" type="text" placeholder-class="placeholder" placeholder="请填写昵称" />
				</view>
			</view>
			
			<view class="uni-btn-v">
				<button type="primary" :loading="loading" form-type="submit">提交</button>
			</view>
		</form>
	</view>
	
</template>

<script>
	import appRequest from "@/utils/config.js"
	export default {
		data() {
			return {
				loading:false,
				userDetailInfo: {
					userAvatar: '',
					nickName: '',
				}
			}
		},
		onLoad(option) {
			let {
				userAvatar,
				nickName
			} = option;
			if (userAvatar) {
				this.userDetailInfo.userAvatar = userAvatar;
			}
			this.userDetailInfo.nickName = uni.getStorageSync("userInfo").nickName
		},
		methods: {
			upload() {
				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success(res) {
						const src = res.tempFilePaths[0];
						uni.navigateTo({
							url: '/pages/components/uploadAvatar/upload?src=' + src
						});
					}
				});
			},
			formSubmit(e) {
				this.loading = true
				let loginRules = [
					{
						name: 'userAvatar',
						required: true,
						type: 'text',
						errmsg: '请上传头像'
					},{
						name: 'nickName',
						required: true,
						type: 'text',
						errmsg: '请填写昵称'
					}
				]
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
						this.loading = false
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
		}
	}
</script>

<style>
	@import url("../../assets/common.css");
	.contanner{
	    width: 100%;
	    height: 100%;
		padding: 8px;
	}
	
	.avatar-container{
	    position: relative;
	    text-align: center;
	    padding-top: 50%;
	}
	
	
	.avatar{
	    width: 5rem;
	    height: 5rem;
	    background-color: #e5e5e5;
	    border-radius: 50%;
	}
	
	.item{
	    line-height: 3rem;
	}
	.uni-form-item{
		margin-top: 8px;
	}
</style>
