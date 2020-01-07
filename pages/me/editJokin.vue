<template>
	<view class="contanner">
		<form @submit="formSubmit" @reset="formReset">
			<view class="flex">
				<view style="text-align: center;background-color: #fff;">
					<image :src="jokinInfo.userAvatar" class="avatar" @tap="upload"></image>
					<view class="item flex" @tap="upload">点击头像上传</view>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">姓名：</view>
				<view class="form-inpput">
					<input v-model="jokinInfo.name" type="text" placeholder-class="placeholder" placeholder="请填写昵称" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">性别</view>
				<view class="form-inpput">
					<radio-group class="form-radio-group" @change="handleRadioChange">
						<label class="formRadio" v-for="(item, index) in sexList" :key="item.value">
							<view>
								<radio :value="item.value" :checked="index+1 === jokinInfo.gender" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">年龄：</view>
				<view class="form-inpput">
					<picker class="picker" :range="years" @change="handleYearChange">
						{{ years[yearsIndex] }}
					</picker>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">工作年限：</view>
				<view class="form-inpput">
					<picker class="picker" :range="jobYars" @change="handlejobYarsChange">
						{{ jobYars[jobYarIndex] }}
					</picker>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">手机号：</view>
				<view class="form-inpput">
					<input v-model="jokinInfo.phone" type="text" placeholder-class="placeholder" placeholder="请填写手机号" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">微信号：</view>
				<view class="form-inpput">
					<input v-model="jokinInfo.wechatNumber" type="text" placeholder-class="placeholder" placeholder="请填写微信号" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">籍贯：</view>
				<view class="form-inpput" @click="handleCheckNativePlace">
					<!-- <block v-if="jokinInfo.nativePlace.province"> -->
					<!-- {{jokinInfo.nativePlace.province}}
						{{jokinInfo.nativePlace.city}}
						{{jokinInfo.nativePlace.town}} -->
					<!-- </block>
					<block v-else>
						请选择籍贯
					</block> -->
					{{nativePlace}}
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">工作地：</view>
				<view class="form-inpput" @click="handleCheckAdress">
					{{working}}
				</view>
			</view>
			<view class="uni-form-item uni-column" style="height: auto;">
				<view class="form-lable">擅长领域：</view>
				<view class="form-inpput form-inpput-textarea">
					<textarea @blur="handleField" style="font-size: 14px;line-height: 35px;" placeholder-style="color:#808080"
					 placeholder="请输入擅长领域" v-model="jokinInfo.field" />
					</view>
			</view>
			<view class="uni-form-item uni-column" style="height: auto;">
				<view class="form-lable">情感箴言：</view>
				<view class="form-inpput form-inpput-textarea">
					 <textarea @blur="handleMotto" style="font-size: 14px;line-height: 35px;" placeholder-style="color:#808080" placeholder="请输入情感箴言" v-model="jokinInfo.motto"  />
				</view>
			</view>
			<view class="uni-btn-v">
				<button type="primary" :loading="loading" form-type="submit">提交</button>
			</view>
		</form>
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
	</view>
</template>

<script>
	import appRequest from "@/utils/config.js"
	import lotusAddress from "@/components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";
	import {
		heights,
		years,
		educations,
		jobYars
	} from "@/utils/fromCheck.js"
	export default {
		components: {
			lotusAddress
		},
		data() {
			return {
				loading: false,
				isAdress: 0,
				sexList: [{
					value: '1',
					name: '男'
				}, {
					value: '2',
					name: '女'
				}],
				years: years,
				yearsIndex: 0,
				jobYars: jobYars,
				jobYarIndex: 0,
				jokinInfo: {
					userAvatar: '',
					name: '',
					age:0,
					gender: 0,
					workingLife: '',
					phone: '',
					wechatNumber: '',
					nativePlace: {
						city: "",
						cityCode: "",
						province: "",
						provinceCode: "",
						town: "",
						townCode: ""
					},
					workingAddress: {
						city: "",
						cityCode: "",
						province: "",
						provinceCode: "",
						town: "",
						townCode: ""
					},
					field: '',
					motto: '',
					state: '',
				},
				lotusAddressData: {
					visible: false,
					provinceName: '',
					cityName: '',
					townName: '',
				},
				region: '',
				matchmakerId:'',
				userAvatar:''
			}
		},
		computed: {
			working() {
				let {province,city,town} = this.jokinInfo.workingAddress
				return `${province}${city}${town}`
			},
			nativePlace(){
				if(this.jokinInfo.nativePlace == 'null'){return ""}
				let {province,city,town} = this.jokinInfo.nativePlace
				return `${province}${city}${town}`
			}
		},
		onLoad(option) {
			this.matchmakerId = option.matchmakerId
			this.userAvatar = option.userAvatar
			// this.jokinInfo.userAvatar = option.userAvatar
			this.getUserInfo()
		},
		methods: {
			// 获取用户信息
			getUserInfo(){
				appRequest.baseRequest({
					url: 'matchmaker/queryById',
					data: {id:this.matchmakerId},
					method: 'get',
					success: (res) => {
						try {
							let {userAvatar,name,gender,age,workingLife,phone,wechatNumber,nativePlace,workingAddress,field,motto} = res.data.data
							let dataNativePlace = {}
							let dataWorkingAddress = {}
							if(!nativePlace){
								dataNativePlace = {
									city: "",
									cityCode: "",
									province: "",
									provinceCode: "",
									town: "",
									townCode: ""
								}
							}else{
								dataNativePlace = JSON.parse(nativePlace)
							}
							if(!workingAddress){
								dataWorkingAddress = {
									city: "",
									cityCode: "",
									province: "",
									provinceCode: "",
									town: "",
									townCode: ""
								}
							}else{
								dataWorkingAddress = JSON.parse(workingAddress)
							}
							this.jokinInfo = {
								userAvatar:this.userAvatar,
								name:name ? name :"",
								gender,
								age,
								workingLife,
								phone,
								wechatNumber: wechatNumber ? wechatNumber : "",
								nativePlace:dataNativePlace,
								workingAddress:dataWorkingAddress,
								field:field ? field : "",
								motto:motto ? motto :""
							}
							let ages = age ? age : "请选择年龄";
							this.yearsIndex = this.years.indexOf(ages)
							this.jobYarIndex = this.jobYars.indexOf(workingLife)
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},
			// 上传图片
			upload() {
				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success:(res) => {
						const src = res.tempFilePaths[0];
						uni.navigateTo({
							url: '/pages/components/uploadAvatar/jokinAvatar?src=' + src + "&id=" + this.matchmakerId
						});
					}
				});
			},
			formSubmit(e) {
				this.loading = true
				let loginRules = [{
					name: 'userAvatar',
					required: true,
					type: 'text',
					errmsg: '请上传头像'
				}, {
					name: 'name',
					required: true,
					type: 'text',
					errmsg: '请填写名称'
				}, {
					name: 'gender',
					required: true,
					type: 'text',
					errmsg: '请填写请选择性别'
				}, {
					name: 'age',
					required: true,
					type: 'text',
					errmsg: '请填写请选择年龄'
				}, {
					name: 'workingLife',
					required: true,
					type: 'text',
					errmsg: '请填写请选择工作年限'
				}, {
					name: 'phone',
					required: true,
					type: 'text',
					errmsg: '请填写手机号码'
				}, {
					name: 'wechatNumber',
					required: true,
					type: 'text',
					errmsg: '请填写微信号'
				},{
					name: 'nativePlace',
					required: true,
					type: 'text',
					errmsg: '请选择籍贯'
				},{
					name: 'workingAddress',
					required: true,
					type: 'text',
					errmsg: '请选择工作地点'
				},{
					name: 'field',
					required: true,
					type: 'text',
					errmsg: '请填写擅长领域'
				},{
					name: 'motto',
					required: true,
					type: 'text',
					errmsg: '请填写情感箴言'
				}]
				this.jokinInfo.id = uni.getStorageSync('userInfo').id
				let valLoginRes = this.$validate.validate(this.jokinInfo, loginRules)
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				let {userAvatar,
					name,
					gender,
					id,
					workingLife,
					phone,
					wechatNumber,
					nativePlace,
					workingAddress,
					field,
					age,
					motto,
					state} = this.jokinInfo
				let data = {
					userAvatar,
						name,
						gender,
						id,
						workingLife,
						phone,
						age,
						wechatNumber,
						nativePlace:JSON.stringify(nativePlace),
						workingAddress:JSON.stringify(workingAddress),
						field,
						motto,
						state
				}
				appRequest.baseRequest({
					url: 'matchmaker/save',
					data: data,
					method: 'post',
					success: (res) => {
						this.loading = false
						// 用户状态存到缓存中去
						try {
							uni.showToast({
								title: `保存成功！`,
								icon: 'success',
								showCancel: false
							});
							uni.setStorageSync('userInfo', res.data.data)
							setTimeout(() => {
								uni.switchTab({
								url:'/pages/me/index'
							})
							},1200)
							

						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},

			// 性别选择
			handleRadioChange(e) {
				this.jokinInfo.gender = e.target.value
			},
			// 年龄选择
			handleYearChange: function(e) {
				this.yearsIndex = e.detail.value;
				this.jokinInfo.age = years[this.yearsIndex]
			},
			// 选择工作年限
			handlejobYarsChange: function(e) {
				this.jobYarIndex = e.detail.value;
				this.jokinInfo.workingLife = jobYars[this.jobYarIndex]
			},
			// 地址籍贯
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
				let {
					nativePlace,
					workingAddress
				} = this.jokinInfo
			},
			//回传已选的省市区的值
			choseValue(res) {
				//res数据源包括已选省市区与省市区code
				this.lotusAddressData.visible = res.visible; //visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if (res.isChose) {
					if (this.isAdress == 1) {
						this.jokinInfo.nativePlace = res
					}
					if (this.isAdress == 2) {
						this.jokinInfo.workingAddress = res
					}
				}
				this.isAdress = 0
			},
			// 擅长领域
			handleField(e){
				console.log(e);
			},
			//情感箴言
			handleMotto(e){
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../assets/common.scss");

	.contanner {
		width: 100%;
		height: 100%;
		padding: 8px;
	}

	.avatar-container {
		position: relative;
		text-align: center;
		padding-top: 50%;
	}


	.avatar {
		width: 5rem;
		height: 5rem;
		background-color: #e5e5e5;
		border-radius: 50%;
	}

	.item {
		line-height: 3rem;
	}

	.uni-form-item {
		margin-top: 8px;
	}
</style>
