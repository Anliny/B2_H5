<template>
	<view class="">
		<!-- #ifndef MP-WEIXIN -->
		<nav-bar transparentFixedFontColor="#fff" fontColor="#fff" bgColor="#ff77aa" type="transparentFixed" title="我的动态">
			<!-- //透明状态下的按钮 -->
		    <view class="transparent_fixed_preview" slot="transparentFixedRight" @click="onPreview">
				 <uni-icons type="plus" @click="handleTrack" size="26" color="#fff"></uni-icons>
			</view> 
			<!-- //不透明状态下的按钮 -->
		    <view class="preview" slot="right" @click="onPreview">
				<uni-icons type="plus" size="26" @click="handleTrack"  color="#fff"></uni-icons>
			</view> 
		</nav-bar>
		<!-- #endif -->
		<view class="backImg">
			<image src="/static/header.jpeg" class="image" mode=""></image>
			<text class="name">{{userInfo.nickName}}</text>
			<view class="header">
				<image :src="userAvatar()" class="image" mode=""></image>
			</view>
		</view>
		<view class="desc text-two-line">
			{{userInfo.declaration}}
		</view>
		<template>
			<list></list>
		</template>
	</view>
	
</template>

<script>
	import uniList from "@/components/uni-list/uni-list"
	import uniListItem from "@/components/uni-list-item/uni-list-item"
	import uniIcons from "@/components/uni-icons/uni-icons"
	import list from "./components/list.vue"
	export default {
		components:{
			uniList,uniListItem,list,uniIcons
		},
		data() {
			return {
				userInfo: uni.getStorageSync("userInfo")
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo')
		},
		methods: {
			// 判断头像
			userAvatar() {
				return this.userInfo.userAvatar ? this.userInfo.userAvatar : "/static/icon/defult_header.jpg" 
			},
			handleTrack() {
				// 跳转路由
				uni.navigateTo({
				    url: 'addTrack',
					animationDuration:500
				});
			}
		},
	}
</script>

<style>
	.backImg{
		margin-top: -45px;
		height: 250px;
		width: 100%;
		position: relative;
	}
	.backImg .name{
		    display: block;
		    text-align: right;
		    position: absolute;
		    top: 215px;
		    right: 100px;
		    color: #fff;
		    font-weight: bold;
		    font-size: 20px;
	}
	.backImg .header{
		width: 80px;
		height: 80px;
		position: absolute;
		border:2px solid #fff;
		right: 10px;
		top:200px;
	}
	.desc{
		margin-top: 30px;
		    font-size: 14px;
		    padding: 0 8px;
		    color: #353535;
	}
</style>
