<template>
	<view class="contanner">

		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="form-lable">职位</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.position" type="text" placeholder-class="placeholder" placeholder="请填写职位信息" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">籍贯</view>
					<view class="form-inpput" @click="handleCheckNativePlace">
						<block v-if="userDetailInfo.nativePlace.province">
						{{userDetailInfo.nativePlace.province}}
						{{userDetailInfo.nativePlace.city}}
						{{userDetailInfo.nativePlace.town}}
						</block>
						<block v-else>
						请选择籍贯
						</block>
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">现住地址</view>
					<view class="form-inpput" @click="handleCheckAdress">
						{{userDetailInfo.currentAddress.province}}
						{{userDetailInfo.currentAddress.city}}
						{{userDetailInfo.currentAddress.town}}
					</view>
				</view>

				<view class="uni-form-item uni-column">
					<view class="form-lable">行业</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.industry" type="text" placeholder-class="placeholder" placeholder="请填写所在行业" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">是否婚配</view>
					<view class="form-inpput">
						<picker class="picker" :range="marrys" range-key="label" @change="handleMarryChange">
							{{ marrys[marrysIndex].label }}
						</picker>
					</view>
				</view>
				<view class="uni-btn-v">
					<button type="primary" :loading="loading" form-type="submit">提交</button>
				</view>
			</form>
		</view>
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
	</view>
</template>

<script>
	import {
		marrys
	} from "@/utils/fromCheck.js"
	import appRequest from "@/utils/config.js"
	import lotusAddress from "@/components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";

	export default {
		components: {
			lotusAddress
		},
		data() {
			return {
				isAdress: 0,
				loading: false,
				marrys: marrys,
				marrysIndex: 0,
				userDetailInfo: {
					position: '', //职位
					//籍贯
					nativePlace: {
						city: "",
						cityCode: "",
						province: "",
						provinceCode: "",
						town: "",
						townCode: ""
					},
					//现住地址
					currentAddress: {
						city: "",
						cityCode: "",
						province: "",
						provinceCode: "",
						town: "",
						townCode: ""
					},
					industry: '', //行业
					isMarry: "", //是否婚配
				},
				lotusAddressData: {
					visible: false,
					provinceName: '',
					cityName: '',
					townName: '',
				},
				region: ''
			}
		},
		methods: {
			formSubmit(e) {
				// console.log(e)
				let loginRules = [
					{
						name: 'position',
						required: true,
						type: 'text',
						errmsg: '请输入职位'
					},{
						name: 'industry',
						required: true,
						type: 'text',
						errmsg: '请输入行业'
					}
				]
				this.userDetailInfo.id = uni.getStorageSync('userInfo').id
				console.log(this.userDetailInfo)
				let valLoginRes = this.$validate.validate(this.userDetailInfo, loginRules)
				// console.log(this.userDetailInfo);
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				let {currentAddress,id,industry,isMarry,nativePlace,position} = this.userDetailInfo
				console.log(JSON.stringify(currentAddress))
				let data = {
					currentAddress: JSON.stringify(currentAddress),
					id,
					industry,
					isMarry,
					nativePlace: JSON.stringify(nativePlace),
					position
				}
				appRequest.baseRequest({
					url: 'member/save',
					data: data,
					method: 'post',
					success: (res) => {
						// 用户状态存到缓存中去
						try {
							uni.showToast({
								title: `保存成功！`,
								icon: 'success',
								showCancel: false
							});
							this.userInfo = res.data.data
							uni.setStorageSync('userInfo', res.data.data)
							setTimeout(() => {
								this.$router.push('/pages/me/detail')
							}, 1200)

						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},
			formReset: (e) => {
				console.log('清空数据')
			},

			// 身高选择
			handleMarryChange(e) {
				this.marrysIndex = e.target.value
				this.userDetailInfo.isMarry = marrys[this.marrysIndex].val
			},
			// 选择籍贯
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			
			// 选择籍贯
			handleCheckNativePlace() {
				this.isAdress = 1;
				this.openPicker()
			},
			// 选择现住地址
			handleCheckAdress() {
				this.isAdress = 2;
				this.openPicker()
			},
			// 省市区
			//打开picker
			openPicker() {
				this.lotusAddressData.visible = true;
				// this.lotusAddressData.provinceName = '广东省';
				// this.lotusAddressData.cityName = '广州市';
				// this.lotusAddressData.townName = '白云区';
				let {
					nativePlace,
					currentAddress
				} = this.userDetailInfo
				if (this.isAdress == 1) {
					this.lotusAddressData.provinceName = nativePlace.province;
					this.lotusAddressData.cityName = nativePlace.city;
					this.lotusAddressData.townName = nativePlace.town;
				}
				if (this.isAdress == 2) {
					this.lotusAddressData.provinceName = currentAddress.province;
					this.lotusAddressData.cityName = currentAddress.city;
					this.lotusAddressData.townName = currentAddress.town;
				}

			},
			//回传已选的省市区的值
			choseValue(res) {
				//res数据源包括已选省市区与省市区code
				this.lotusAddressData.visible = res.visible; //visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if (res.isChose) {
					console.log(this.isAdress)
					if (this.isAdress == 1) {

						console.log(res);
						this.userDetailInfo.nativePlace = res
					}
					if (this.isAdress == 2) {
						this.userDetailInfo.currentAddress = res
					}
					// this.lotusAddressData.provinceName = res.province; //省
					// this.lotusAddressData.cityName = res.city; //市
					// this.lotusAddressData.townName = res.town; //区
					this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
				this.isAdress = 0
			}
		}
	}
</script>

<style>
	@import url("../../assets/common.css");

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
