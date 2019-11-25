<template>
	<view class="contanner">
		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="form-lable">对方所在地</view>
					<view class="form-inpput" @click="openPicker">
						<block v-if="userDetailInfo.partnerNativePlace.province">
							{{userDetailInfo.partnerNativePlace.province}}
							{{userDetailInfo.partnerNativePlace.city}}
							{{userDetailInfo.partnerNativePlace.town}}
						</block>
						<block v-else>
							请选择籍贯
						</block>
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">年龄</view>
					<view class="form-inpput">
						<picker class="picker" :range="years" @change="handleYearChange">
							{{ years[yearsIndex] }}
						</picker>
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">身高</view>
					<view class="form-inpput">
						<picker class="picker" :range="heights" @change="handelheights">
							{{ heights[heightsIndex] }}
						</picker>
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">收入</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.partnerIncome" type="number" placeholder-class="placeholder" placeholder="请填写收入情况" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">学历</view>
					<view class="form-inpput">
						<picker class="picker" :range="educations" @change="handelEducation">
							{{ educations[educationIndex] }}
						</picker>
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">婚姻状况</view>
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
		marrys,
		heights,
		years,
		educations
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
				heights: heights,
				heightsIndex: 0,
				years: years,
				yearsIndex: 0,
				educations: educations,
				educationIndex: 0,
				userDetailInfo: {
					//对方所在地
					partnerNativePlace: {
						city: "",
						cityCode: "",
						province: "",
						provinceCode: "",
						town: "",
						townCode: ""
					},
					partnerAge: '', //年龄
					partnerHeight: "", //身高
					partnerIncome: "", //收入
					partnerEducation: "", //学历
					partnerIsMarry: "" //婚姻状况
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
				let loginRules = [{
					name: 'partnerAge',
					required: true,
					type: 'text',
					errmsg: '请填写年龄'
				}, {
					name: 'partnerHeight',
					required: true,
					type: 'text',
					errmsg: '请选择身高'
				}, {
					name: 'partnerEducation',
					required: true,
					type: 'text',
					errmsg: '请选择学历'
				}, {
					name: 'partnerIsMarry',
					required: true,
					type: 'text',
					errmsg: '请选择婚姻情况'
				}, {
					name: 'partnerIncome',
					required: true,
					type: 'number',
					errmsg: '请填写收入'
				}]
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
				let {
					partnerNativePlace,
					id,
					partnerAge,
					partnerHeight,
					partnerEducation,
					partnerIsMarry,
					partnerIncome
				} = this.userDetailInfo
				let data = {
					partnerNativePlace: JSON.stringify(partnerNativePlace),
					id,
					partnerAge,
					partnerHeight,
					partnerEducation,
					partnerIsMarry,
					partnerIncome
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
								this.$router.replace('/pages/me/condition/index')
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
			// 选择地址
			openPicker() {
				this.lotusAddressData.visible = true;
				// this.lotusAddressData.provinceName = '广东省';
				// this.lotusAddressData.cityName = '广州市';
				// this.lotusAddressData.townName = '白云区';
				let {
					partnerNativePlace
				} = this.userDetailInfo

				this.lotusAddressData.provinceName = partnerNativePlace.province;
				this.lotusAddressData.cityName = partnerNativePlace.city;
				this.lotusAddressData.townName = partnerNativePlace.town;
			},

			//回传已选的省市区的值
			choseValue(res) {
				//res数据源包括已选省市区与省市区code
				this.lotusAddressData.visible = res.visible; //visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if (res.isChose) {
					console.log(res);
					this.userDetailInfo.partnerNativePlace = res
					// this.lotusAddressData.provinceName = res.province; //省
					// this.lotusAddressData.cityName = res.city; //市
					// this.lotusAddressData.townName = res.town; //区
					this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
				this.isAdress = 0
			},

			// 年龄
			handleYearChange: function(e) {
				console.log(e)
				this.yearsIndex = e.detail.value;
				this.userDetailInfo.partnerAge = years[this.yearsIndex]
			},
			// 身高选择
			handelheights(e) {
				this.heightsIndex = e.target.value
				this.userDetailInfo.partnerHeight = heights[this.heightsIndex]
			},
			// 学历选择
			handelEducation(e) {
				this.educationIndex = e.target.value
				this.userDetailInfo.partnerEducation = educations[this.educationIndex]
			},
			// 婚姻状况
			handleMarryChange(e) {
				this.marrysIndex = e.target.value
				this.userDetailInfo.partnerIsMarry = marrys[this.marrysIndex].val
			}

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
