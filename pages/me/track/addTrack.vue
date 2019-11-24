<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
		    <view class="uni-form-item uni-column">
		        <view class="form-lable">正文：</view>
		        <view class="form-inpput">
					<textarea style="padding: 8px;line-break: 35px;" placeholder-style="color:#ff7737" placeholder="请输入内容"/>
				</view>
		    </view>
			<view class="uni-form-item uni-column">
			    <view class="form-lable">正文：</view>
				<ss-upload-image 
					:url="url" 
					:file-list="fileList" 
					:name="name" 
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
				url:'http://www.baidu.com',
				fileList:[],
				name:"",
				userInfo: {
					phone:''
				},
				upImgConfig:{
					iconReplace:''
				}
			}
		},
		methods: {
			formSubmit() {},
			formReset(){}
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
