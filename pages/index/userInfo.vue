<template>
	<view class="content">
		<view class="base">
			<view class="base-wrapper card-shadow">
				<view class="img">
					<image src="/static/header.jpeg" class="image" mode=""></image>
				</view>
				<!-- <view class="edit-btn">
					<image src="/static/icon/edit.png" class="image" mode=""></image>
				</view> -->
				<text class="base-name">有难控股</text>
				<text class="base-id">ID：WD12321</text>
				<view class="base-code-wrapper">
					<view class="base-code-item">北京户口</view>
					<view class="base-code-item code2">研究生</view>
					<view class="base-code-item code3">外企经理</view>
					<view class="base-code-item code4">有房有车</view>
				</view>
			</view>
		</view>
		<template>
			<uni-list>
			    <uni-list-item 
					title="他的动态" 
					:show-extra-icon="true" 
					@click="handleGoTrack"
					:extra-icon="{color: '#4cd964',size: '22',type: 'pengyouquan'}">
				</uni-list-item>
				<uni-list-item
					title="我的相册" 
					:show-extra-icon="true" 
					:extra-icon="{color: '#4cd964',size: '22',type: 'image'}">
				</uni-list-item>
				<uni-list-item
					title="征友条件" 
					:show-extra-icon="true" 
					:extra-icon="{color: '#4cd964',size: '22',type: 'compose'}">
				</uni-list-item>
				<uni-list-item
					title="会员中心" 
					:show-extra-icon="true" 
					:extra-icon="{color: '#4cd964',size: '22',type: 'contact-filled'}">
				</uni-list-item>
				<uni-list-item
					title="设置" 
					:show-extra-icon="true" 
					:extra-icon="{color: '#4cd964',size: '22',type: 'gear'}">
				</uni-list-item>
			</uni-list>
		</template>
		
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item"
	export default{
		components:{
			uniList,uniListItem
		},
		methods:{
			handleGoTrack(){
				// 跳转路由
				uni.navigateTo({
				    url: '/pages/me/track/index',
					animationType: 'pop-in',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style>
	.content {}
	.base{
		padding: 8px;
	}
	.base-wrapper {
		position: relative;
		margin-top: 83px;
		background-color: #fff9f9;
		border-radius: 20px;
	}
	.img{
		width: 150px;
		height: 150px;
		border: 1px solid rgb(255, 119, 170);
		border-radius: 50%;
		overflow: hidden;
		top: -75px;
		left: -75px;
		position: absolute;
		margin-left: 50%;
	}
	.edit-btn{
		width: 35px;
		height: 35px;
		border-radius: 50%;
		border:1px solid rgb(255, 119, 170);
		background-color: rgb(255, 119, 170);
		overflow: hidden;
		position: absolute;
		right: 5px;
		top: 5px;
	}
	.base-name{
		display: block;
		margin-top:83px;
		font-size: 24px;
		text-align: center;
	}
	.base-id{
		display: block;
		text-align: center;
	}
	.base-code-wrapper {
		display: flex;
		padding: 8px;
	}
	.base-code-item{
		width: 100%;
		height: 30px;
		line-height: 30px;
		color: #fff;
		font-size: 14px;
		text-align: center;
		border-radius: 20px;
		margin-left: 8px;
		background-color: rgb(138,187,214);
	}
	.code2{
		background-color: rgb(121,117,252);
	}
	.code3{
		background-color: rgb(221,145,204);
	}
	.code4{
		background-color: rgb(254,151,62);
	}
</style>
