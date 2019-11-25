<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
		    <view class="uni-form-item uni-column">
		        <!-- <view class="form-lable">正文：</view> -->
		        <view class="form-inpput" style="width: 100vw;">
					<textarea style="padding: 8px;line-break: 35px;" placeholder-style="color:#ff7737" placeholder="说一说此时此刻的想法"/>
				</view>
		    </view>
			<view class="uni-form-item uni-column">
			    <!-- <view class="form-lable">正文：</view> -->
				<ss-upload-image 
					:url="imgObj.url" 
					:file-list="imgObj.fileList" 
					:name="imgObj.name"
					:limit="imgObj.limt"
					@on-success="onSuccess" 
					@on-error="onError" 
					@on-remove="onRemove" 
					@on-process="onProcess" />
			</view>
			<view class="uni-btn-v">
			    <button type="primary" form-type="submit">注册</button>
			    <button type="success" form-type="reset">Reset</button>
			</view>
		</form>
	</view>
</template>

<script>
	import ssUploadImage from '@/components/ss-upload-image/ss-upload-image.vue'
	export default{
		components: {
			ssUploadImage
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
					state:0,
				},
				upImgConfig:{
					iconReplace:''
				}
			}
		},
		methods: {
			formSubmit() {},
			formReset(){},
			// 上传成功
			onSuccess(e){
				console.log(e)
			},
			// 上传失败
			onError(e){
				console.log(e);
			},
			// 删除上传图片
			onRemove(e){
				console.log(e);
			},
			// 上传进度
			onProcess(e){
				console.log(e)
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
