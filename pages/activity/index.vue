<template>
	<view class="content">
		<view class="list-wrapper">
			<block v-for="(item,index) in dataInfo" :key="index">
				<view class="list-item">
					<view class="list-header">
						<view class="image-wrapper image-wrapper-header">
							<image :src="item.avater" class="image" mode="scaleToFill"></image>
						</view>
						<text class="list-header-title">{{item.name}}</text>
						<text class="list-header-time">{{item.dataTime}}</text>
					</view>
					<text class="list-text">{{item.desc}}</text>
					<view class="list-image-wrapper">
						<view class="list-image-item image-wrapper" v-for="(itemImage,i) in item.imageList" :key="i">
							<image :src="itemImage" class="image" mode="scaleToFill"></image>
						</view>
					</view>
					<view class="list-btn-wrapper">
						<view class="list-btn-text">本次活动限额{{item.total}}人，已有{{item.actual}}参加！</view>
						<button v-if="isActive" type="primary" @click="addActive(index)" :plain="true" size="mini">
							添加活动
						</button>
						<button v-if="!isActive" type="primary" @click="cancelActive(index)" size="mini">
							取消活动
						</button>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				dataInfo: [{
					avater: '/static/logo.png',
					name: 'xxx婚念网',
					dataTime: '2019-08-09 12:20',
					imageList: [
						"/static/header.jpeg",
						"/static/header.jpeg",
						"/static/header.jpeg",
						"/static/header.jpeg"
					],
					desc: "align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。",
					total: 50,
					actual: 30
				}, {
					avater: '/static/logo.png',
					name: 'xxx婚念网',
					dataTime: '2019-08-09 12:20',
					imageList: [
						"/static/header.jpeg",
						"/static/header.jpeg",
						"/static/header.jpeg",
						"/static/header.jpeg",
						"/static/header.jpeg",
						"/static/header.jpeg",
						"/static/header.jpeg",
						"/static/header.jpeg"
					],
					desc: "align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。",
					total: 40,
					actual: 20
				}, {
					avater: '/static/logo.png',
					name: 'xxx婚念网',
					dataTime: '2019-08-09 12:20',
					imageList: [
						"/static/header.jpeg",
						"/static/header.jpeg",
						"/static/header.jpeg",
						"/static/header.jpeg"
					],
					desc: "align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。",
					total: 34,
					actual: 28
				}],
				isActive : true
			}
		},
		methods:{
			addActive(index){
				console.log(index)
				++ this.dataInfo[index]['actual']
				this.isActive = false
			},
			cancelActive(index){
				-- this.dataInfo[index]['actual']
				this.isActive = true
			},
			handleScanCode(){
				uni.scanCode({
				    onlyFromCamera: true,
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			}
		}
	}
</script>

<style>
	.content {
		padding: 8px;
	}

	.list-wrapper {}

	.list-item {
		background-color: #fff;
		border-radius: 5px;
		padding: 0 8px;
		margin-bottom: 8px;
	}

	.list-header {
		height: 60px;
		display: flex;
		padding: 8px 0px;
		box-sizing: content-box;
	}

	.image-wrapper-header {
		height: 60px;
		width: 60px;
		border-radius: 50%;
		margin-right: 8px;
	}

	.list-header-title {
		font-size: 20px;
		font-weight: bold;
		line-height: 60px;
	}

	.list-header-time {
		margin-left: auto;
		font-size: 14px;
		color: #DDDDDD;
		line-height: 60px;
	}

	.list-text {
		font-size: 16px;
	}

	.list-image-wrapper {
		display: flex;
		flex-wrap: wrap;
	}

	.list-image-item {
		margin-bottom: 8px;
		height: calc(33.333vw - 16px);
		margin-right: 8px;
		flex: 0 0 calc(33.333vw - 16px);
	}

	.list-image-item:nth-child(3n+3) {
		margin-right: 0;
	}

	.list-btn-wrapper {
		padding-bottom: 8px;
		display: flex;
	}

	.list-btn-wrapper button {
		margin: 0;
		margin-left: auto;
	}

	.list-btn-wrapper .list-btn-text {
		font-size: 12px;
		line-height: 31px;
		color: #da3b3b;
	}
</style>
