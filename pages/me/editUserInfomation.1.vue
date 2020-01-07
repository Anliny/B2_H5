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
				<view class="uni-form-item uni-column">
					<view class="form-lable">是否有小孩</view>
					<view class="form-inpput">
						<radio-group class="form-radio-group" @change="handleRadioChange">
							<label class="formRadio" v-for="(item, index) in isChildList" :key="item.value">
								<view>
									<radio :value="item.value" :checked="index === userDetailInfo.isChild" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
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
				isChildList: [{
					value: '0',
					name: '有'
				}, {
					value: '1',
					name: '无'
				}],
				userDetailInfo: {
					position: '', //职位
					isChild: '',
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
		onLoad(options) {
			let {
				position,
				nativePlace,
				currentAddress,
				industry,
				isMarry,
				isChild
			} = JSON.parse(options.info)
			if (!nativePlace) {
				nativePlace = {
					city: "",
					cityCode: "",
					province: "",
					provinceCode: "",
					town: "",
					townCode: ""
				}
			}else{
				nativePlace = JSON.parse(nativePlace)
			}
			if (!currentAddress) {
				currentAddress = {
					city: "",
					cityCode: "",
					province: "",
					provinceCode: "",
					town: "",
					townCode: ""
				}
			}else{
				currentAddress = JSON.parse(currentAddress)
			}
			this.userDetailInfo = {
				position: position ? position : '',
				industry: industry ? industry : '',
				isMarry: isMarry ? isMarry : '',
				isChild: isChild,
				nativePlace,
				currentAddress
			}
			marrys.find((item, index) => {
				if (item.val == isMarry) {
					this.marrysIndex = index
				}
			})
		},
		methods: {
			//是否有小孩
			 handleRadioChange(e) {
			 	this.userDetailInfo.isChild = e.target.value
			 },
			formSubmit(e) {
				let loginRules = [{
					name: 'position',
					required: true,
					type: 'text',
					errmsg: '请输入职位'
				}, {
					name: 'industry',
					required: true,
					type: 'text',
					errmsg: '请输入行业'
				}]
				this.userDetailInfo.id = uni.getStorageSync('userInfo').id
				let valLoginRes = this.$validate.validate(this.userDetailInfo, loginRules)
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				let {
					currentAddress,
					id,
					industry,
					isMarry,
					nativePlace,
					isChild,
					position
				} = this.userDetailInfo
				let data = {
					currentAddress: JSON.stringify(currentAddress),
					id,
					industry,
					isMarry,
					isChild,
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
								uni.switchTab({
									url: '/pages/me/index',
									animationType: 'pop-in',
									animationDuration: 200
								});
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

			// 婚姻状况
			handleMarryChange(e) {
				this.marrysIndex = e.target.value
				this.userDetailInfo.isMarry = marrys[this.marrysIndex].val
			},
			// 选择籍贯
			bindPickerChange: function(e) {
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
					if (this.isAdress == 1) {
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

<style lang="scss" scoped>
	@import url("../../assets/common.scss");

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
