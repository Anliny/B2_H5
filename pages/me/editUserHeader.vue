<template>
	<view class="contanner">
		<!-- <upload-avatar></upload-avatar> -->
		<view class="container flex">
			<view style="text-align: center;">
				<image :src="src" class="avatar" @tap="upload"></image>
				<view class="item flex" @tap="upload">点我头像</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: ''
			}
		},
		onLoad(option) {
			let {
				avatar
			} = option;
			if (avatar) {
				this.src = avatar;
			}
		},
		methods: {
			upload() {
				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success(res) {
						const src = res.tempFilePaths[0];

						uni.redirectTo({
							url: '/pages/components/uploadAvatar/upload?src=' + src
						});
					}
				});
			}
		}
	}
</script>

<style>
	@import url("../../assets/common.css");
	.container{
	    width: 100%;
	    height: 100%;
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
		margin: 20px;
	}
	
	.item{
	    line-height: 3rem;
	}
</style>
