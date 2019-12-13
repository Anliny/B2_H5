<template>
	<view>
		<view class="list-content" v-for="(item,index) in dynamicList" :key="index">
			<view class="list-header">
				<view class="img-wrapper header">
					<image :src="item.userAvatar" class="image" mode=""></image>
				</view>
				<view class="">
					<text class="name">{{item.nickName}}</text><br />
					<text class="list-dateTime time">{{item.rawAddTime}}</text>
				</view>
			</view>
			<text class="list-dateTime content">{{item.content}}</text>
			<view class="list-image-wrapper">
				<view class="list-image-item" v-for="(imageItem,i) in pictureUrl(item.pictureUrl)" :key="i">
					<image :src="imageItem" :data-src="imageItem" @tap="previewImage" class="image" mode=""></image>
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
				imageList: []
			}
		},

		methods: {
			// 序列化
			pictureUrl(url) {

				if (url.indexOf('[') == '-1') {
					return url
				} else {

					return JSON.parse(url)
				}
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
			previewImage: function(e) {
				var current = e.target.dataset.src
				let array = []
				array = [...this.dynamicList.map(item => {
					return JSON.parse(item.pictureUrl)
				})]
				this.imageList = array.flat(); //flat()   降维数组
				uni.previewImage({
					current: current,
					urls: this.imageList
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
		margin-bottom: 8px;
		/* justify-content: space-between; */
	}

	.list-header .header {
		width: 40px;
		height: 40px;
		margin-right: 8px;
	}

	.list-header .list-dateTime,
	.list-header .name {
		font-size: 16px;
		font-weight: bold;
	}

	.list-header .time {
		color: #969696;
		font-weight: 100;
		font-size: 12px;
	}

	.list-header .mini-btn {
		float: right;
	}

	.list-dateTime {
		color: #353535;
		font-size: 16px;
	}

	.content {
		margin-top: 8px;
		font-size: 14px;
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
