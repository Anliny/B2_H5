<template>
	<view>
		<view class="an-uploadImg-group">
			<view class="upload-wrapper">
				<view class="an-img" v-for="(item, index) in imgList" :key="index" @click="perviewImg(index)">
					<image :src="item" v-if="item"></image>
					<view class="an-icon-close" @click.stop="handleRemove(index)">
						<uni-icons type="closeempty" size="26" color="#F00"></uni-icons>
					</view>
				</view>
				<view class="an-img-add" @click="chooseImage">
					<uni-icons type="plus" size="50" color="#FFFFFF"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	
	export default {
		name: 'AnUploadImg',
		components: {
			uniIcons
		},
		data() {
			return {
				imgList: [],
				imgBase64List: []
			};
		},
		methods: {
			chooseImage() {
				uni.chooseImage({
					count: 9,
					success: (chooseImageRes) => {
						for (var i = 0; i < chooseImageRes.tempFilePaths.length; i++) {
							// this.imgList.push(chooseImageRes.tempFilePaths[i]);
							// uni.getFileSystemManager().readFile({
							// 	filePath: chooseImageRes.tempFilePaths[i], //选择图片返回的相对路径
							// 	encoding: 'base64', //编码格式
							// 	success: res => { //成功的回调
							// 		let base64 = 'data:image/jpeg;base64,' + res.data //不加上这串字符，在页面无法显示的哦
							// 		this.imgBase64List.push(base64);
							// 	}
							// })
							uni.uploadFile({
								url: '/common/multiUpload',
								filePath: chooseImageRes.tempFilePaths[i],
								name: 'file',
								success: res => {
									let imgs = JSON.parse(res.data).data
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									});
									this.imgList.push(imgs)
								},
							})
						}
					}
				})
			},
			perviewImg(index) {
				let urls = [];
				if (index != -1) {
					urls[0] = this.imgList[index];
				} else {
					urls = this.imgList;
				}
				uni.previewImage({
					urls: urls
				});
			},
			handleRemove(index) {
				let il = [],
					ibl = [];
				for (var i = 0; i < this.imgList.length; i++) {
					if (i != index) {
						il.push(this.imgList[i]);
						ibl.push(this.imgBase64List[i]);
					}
				}
				this.imgList = il;
				this.imgBase64List = ibl;
			}
		}
	}
</script>

<style scoped>
	.an-uploadImg-group {
		display: flex;
	}
	.upload-wrapper{
		display: flex;
		flex-flow: row wrap;
		     align-content: flex-start;
	}
	.an-img {
		flex: 0 0 25%;
		margin-right: 10upx;
	}

	.an-img-add {
		float: left;
		margin-right: 10upx;
		height: 80px;
		width: 80px;
		background-color: #ccc;
		text-align: center;
		line-height: 80px;
	}

	.an-img>image {
		height: 80px;
		width: 80px;
	}

	.an-icon-close {
		position: relative;
		right: -54px;
		top: -85px;
		width: 26px;
		height: 26px;
		background-color: #fff;
	}
</style>
