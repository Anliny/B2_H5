<template>
	<view>
		<view class="list-content" v-for="(item,index) in dynamicList" :key="index">
			<view class="list-header">
				<text class="list-dateTime">{{item.rawAddTime}}</text>
				<uni-icons type="trash" color="red" @click="handleMoveDynamic(item)" size="18"></uni-icons>
			</view>
			<text class="list-dateTime">{{item.content}}</text>
			<view class="list-image-wrapper">
				<view class="list-image-item" v-for="(imageItem,i) in pictureUrl(item.pictureUrl)" :key="i">
					<image :src="imageItem" :data-src="imageItem" @tap="previewImage(imageItem,pictureUrl(item.pictureUrl))" class="image" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons"
	export default {
		components: {
			uniIcons
		},
		props: {
			dynamicList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				imageList:[]
			}
		},
		
		methods: {
			// 序列化
			pictureUrl(url) {
				return JSON.parse(url)
			},
			// 删除动态
			handleMoveDynamic(data) {
				uni.showModal({
					title: '提示',
					content: '确定删除这条动态？',
					success: (res) => {
						if (res.confirm) {
							let id = data.id
							this.$emit('removeDynamic', id)
						} else if (res.cancel) {
							
						}
					}
				});
			},
			//  图片放大
			previewImage: function(e,v) {
				uni.previewImage({
					current: e,
					urls: v
				})
			},
		},
	}
</script>

<style>
	.list-content {
		margin-top: 8px;
		padding: 8px;
		background-color: #fff;
	}

	.list-header {
		display: flex;
		justify-content: space-between;
	}

	.list-header .list-dateTime {
		font-size: 16px;
		font-weight: bold;
	}

	.list-header .mini-btn {
		float: right;
	}

	.list-dateTime {
		color: #353535;
		font-size: 16px;
	}

	.list-image-wrapper {
		display: flex;
		padding-top: 8px;
	}

	.list-image-wrapper .list-image-item {
		height: 80px;
		width: 80px;
		margin-right: 8px;
	}
</style>
