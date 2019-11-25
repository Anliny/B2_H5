<template>
	<view class="contanner">
		<view class="content">
				<view class="uni-form-item uni-column">
					<view style="width: 40vw;" class="form-lable">信息是否公开：</view>
					<switch style="width: 60vw;" @change="switch2Change" />
				</view>
				<view class="uni-btn-v">
					<button type="warn" :plain="true" form-type="submit">注销账号</button>
				</view>
		</view>
	</view>
</template>

<script>
	import {
		Vips
	} from "@/utils/fromCheck.js"
	import appRequest from "@/utils/config.js"
	export default {
		data() {
			return {
				loading: false,
				vips: Vips,
				vipIndex: 0,

				userDetailInfo: {
					phone: '',
					wechatNumber: '',
				}
			}
		},
		computed: {

		},
		methods: {
			switch2Change(e){
				
			},
			
		}
	}
</script>

<style>
	@import url("../../../assets/common.css");

	.img-wrapper {
		height: 200px;
	}

	.bar-wrapper {
		display: flex;
		justify-content: center;
	}

	.bar-item {
		border-bottom: 2rpx solid rgb(255, 119, 170);
		line-height: 80rpx;
		margin-left: 10px;
		font-size: 16px;
	}

	.content {
		padding: 20rpx;
	}

	.tips {
		color: #8F8F94;
		line-height: 35px;
		font-size: 14px;
	}
</style>
