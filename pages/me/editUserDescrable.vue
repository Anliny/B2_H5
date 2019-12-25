<template>
	<view class="contanner">
		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="form-lable">爱情宣言：</view>
					<view class="form-inpput">
						<textarea @blur="bindTextAreaBlur" style="font-size: 14px;line-height: 35px;" placeholder-style="color:#F76260"
						 placeholder="请输入爱情宣言" v-model="userDetailInfo.declaration" auto-height />
						</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">兴趣爱好：</view>
					<view class="form-inpput">
						<textarea @blur="bindTextAreaBlur" style="font-size: 14px;line-height: 35px;" placeholder-style="color:#F76260" placeholder="请输入兴趣爱好" v-model="userDetailInfo.hobby" auto-height />
					</view>
				</view>
				<view class="uni-form-item uni-column" style="display: block;">
					<view class="form-lable">选择标签：</view>
					<view class="form-inpput clearfix" style="width: 100%;padding: 8px;">
						<!-- item-lable-active -->
						<view class="item-lable" @click="handleLable(item,index)" v-for="(item,index) in lableList" :key="index">{{item.name}}</view>
					</view>
				</view>
				<view class="uni-btn-v">
					<button type="primary" :loading="loading" form-type="submit">提交</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import {Vips} from "@/utils/fromCheck.js"
	import appRequest from "@/utils/config.js"
	export default {
		data() {
			return {
				loading: false,
				vips: Vips,
				vipIndex: 0,
				lableList:[],
				userDetailInfo: {
					declaration: '',
					hobby: '',
					otherStandardsId:''
				}
			}
		},
		onLoad(options) {
			
			let {
				declaration,
				hobby,
				otherStandards
			} = JSON.parse(options.info)
			this.userDetailInfo = {
				declaration:declaration?declaration:'',
				hobby:hobby?hobby:'',
				otherStandardsId:otherStandardsId? otherStandardsId :""
			},
			
			// 查询标签
			this.getLable()
		},
		methods: {
			formSubmit(e) {
				let loginRules = [{
						name: 'declaration',
						required: true,
						type: 'text',
						errmsg: '请输入真实姓名'
					},
					{
						name: 'hobby',
						required: true,
						type: 'text',
						errmsg: '请输入身份证号'
					}
				]
				let valLoginRes = this.$validate.validate(this.userDetailInfo, loginRules)
				console.log(this.userDetailInfo);
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				this.userDetailInfo.id = uni.getStorageSync('userInfo').id
				appRequest.baseRequest({
					url: 'member/save',
					data:this.userDetailInfo,
					method: 'post',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							uni.showToast({
								title: `保存成功！`,
								icon:'success',
								showCancel: false
							});
							this.userInfo = res.data.data
							uni.setStorageSync('userInfo', res.data.data)
							
							setTimeout(() => {
								uni.switchTab({
									url: '/pages/me/index',
									animationType: 'pop-in',
									animationDuration: 200
								});
							},1200)
							
						} catch (e) {
							//TODO handle the exception
						}
					}
				})

			},
			formReset: (e) => {
				console.log('清空数据')
			},
			// 获取标签
			getLable(){
				let query = {
					current:1,
					size:9999
				}
				appRequest.baseRequest({
					url: 'label/queryPage',
					data:query,
					method: 'get',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							console.log(res);
							this.lableList = res.data.data.records;
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},
			// 点击lable
			handleLable(item,index){
				
			},
			// 
			bindTextAreaBlur(){}
			
			
		}
	}
</script>

<style>
	@import url("../../assets/common.css");
	.uni-form-item{
		height: auto;
	}
	
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
	
	.item-lable{
		padding: 0px 6px;
		float: left;
		border: 1px solid #dedede;
		margin: 0px 4px 4px 0px;
		line-height: 25px;
	}
	.item-lable-active{
		border: 1px solid #FF77AA;
		color: #FF77AA;
	}
	
</style>
