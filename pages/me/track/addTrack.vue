<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<!-- <view class="form-lable">正文：</view> -->
				<view class="form-inpput" style="width: 100vw;">
					<textarea style="padding: 8px;line-break: 35px;" @blur="handleGetCon" :value="dynamic.content" placeholder-style="color:#cccccc"
					 placeholder="说一说此时此刻的想法" />
					</view>
		    </view>
			<view class="uni-form-item uni-column">
				<an-upload-img ref="uploadimg"></an-upload-img>
			</view>
			<view class="uni-btn-v">
			    <button type="primary" form-type="submit">发布</button>
			</view>
		</form>
	</view>
</template>

<script>
	import anUploadImg from "./components/an-uploadImg.vue"
	import appRequest from "@/utils/config.js"
	export default{
		components: {
			anUploadImg
		},
		data() {
			return {
				imgObj:{
					url:'/common/multiUploads',
					fileList:[],
					name:'trackImg',
					limt:9
				},
				dynamic: {
					content:'',
					pictureUrl:'',
					state:2,
				},
				upImgConfig:{
					iconReplace:''
				}
			}
		},
		methods: {
			formSubmit() {
				let pictureUrls = JSON.stringify(this.$refs.uploadimg.imgList)
				this.dynamic.pictureUrl = pictureUrls
				let loginRules = [
					{
						name: 'content',
						required: true,
						type: 'text',
						errmsg: '请填写文本信息'
					},{
						name: 'pictureUrl',
						required: true,
						type: 'text',
						errmsg: '请上传图片'
					}
				]
				let valLoginRes = this.$validate.validate(this.dynamic, loginRules)
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				appRequest.baseRequest({
					url: 'dynamic/save',
					data: this.dynamic,
					method: 'post',
					success: (res) => {
						this.loading = false
						// 用户状态存到缓存中去
						try {
							uni.showToast({
								title: `保存成功！`,
								icon: 'success',
								showCancel: false,
								success() {
									uni.redirectTo({
										url:'/pages/me/track/index',
										animationType: 'pop-in',
										animationDuration: 200
									})
								}
							});
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},
			formReset(){},
		
			
			// 失去焦点 获取列表框的值
			handleGetCon(e){
				this.dynamic.content = e.detail.value
			}
		},
		
	}
</script>

<style>
	.content{
		padding: 8px;
	}
	.form-lable{
		width: 100%;
	}
	.uni-form-item{
		height: auto;
	}
</style>
