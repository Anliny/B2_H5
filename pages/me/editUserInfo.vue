<template>
	<view class="contanner">
		<view class="content">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="form-lable">真实姓名</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.name" type="text" placeholder-class="placeholder" placeholder="请填写真实姓名" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">身份证号</view>
					<view class="form-inpput">
						<input @blur="handleIdCard" v-model="userDetailInfo.idCare" type="text" placeholder-class="placeholder" placeholder="请填写身份证号" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">性别</view>
					<view class="form-inpput">
						<radio-group class="form-radio-group" @change="handleRadioChange">
							<label class="formRadio" v-for="(item, index) in sexList" :key="item.value">
								<view>
									<radio :value="item.value" disabled="true" :checked="index+1 === userDetailInfo.gender" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>

				<view class="uni-form-item uni-column">
					<view class="form-lable">年龄</view>
					<view class="form-inpput">
						<input  v-model="userDetailInfo.age" disabled="true" type="text" placeholder-class="placeholder" placeholder="请填写年龄" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">出生日期</view>
					<view class="form-inpput">
						<input  v-model="userDetailInfo.birthday" disabled="true" type="text" placeholder-class="placeholder" placeholder="请填写身份证号" />
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
					<view class="form-lable">民族</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.nation" type="text" placeholder-class="placeholder" placeholder="请填写民族" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">体重</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.weight" type="text" placeholder-class="placeholder" placeholder="请填写体重" />
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
				<view class="uni-btn-v">
					<button type="primary" :loading="loading" form-type="submit">提交</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import {
		heights,
		years,
		educations
	} from "@/utils/fromCheck.js"
	import appRequest from "@/utils/config.js"
	import utils from "@/utils/utils.js"
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				loading: false,
				heights: heights,
				heightsIndex: 0,
				educations: educations,
				educationIndex: 0,
				date: currentDate,
				sexList: [{
					value: '1',
					name: '男'
				}, {
					value: '2',
					name: '女'
				}],
				userDetailInfo: {
					name: '',
					idCare: '',
					gender: 0,
					age: '',
					birthday: '',
					height: '',
					nation: '',
					weight: '',
					education: ''
				}
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad(option) { 
			
			let  {name,idCare,gender,birthday,age,height,nation,weight,education,nickName} = JSON.parse(option.info) 
			this.userDetailInfo = {
				name: name ? name:'',
				idCare: idCare ? idCare:'',
				gender: gender,
				age: age ? age : "",
				birthday: birthday ? birthday :'',
				height: height,
				nation: nation ? nation:'',
				weight: weight ? weight : '',
				education: education,
				nickName:nickName ? nickName :''
			}
			
			let heightItem = height ? height : "请选择身高";
			this.heightsIndex = this.heights.indexOf(heightItem)
			let educationItem = education ? education :'请选择学历'
			this.educationIndex = this.educations.indexOf(educationItem)
			this.date = birthday ? birthday :new Date()
		},
		methods: {
			upload() {
				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success(res) {
						const src = res.tempFilePaths[0];
						uni.navigateTo({
							url: '/pages/components/uploadAvatar/upload?src=' + src
						});
					}
				});
			},
			
			
			formSubmit(e) {
				let loginRules = [{
						name: 'name',
						required: true,
						type: 'text',
						errmsg: '请输入真实姓名'
					},
					{
						name: 'idCare',
						required: true,
						type: 'text',
						errmsg: '请输入身份证号'
					},
					{
						name: 'gender',
						required: true,
						type: 'text',
						errmsg: '请选择性别'
					},
					{
						name: 'age',
						required: true,
						type: 'text',
						errmsg: '请选择年龄'
					},
					{
						name: 'birthday',
						required: true,
						type: 'text',
						errmsg: '请选择出生日期'
					},
					{
						name: 'height',
						required: true,
						type: 'text',
						errmsg: '请选择身高'
					},
					{
						name: 'nation',
						required: true,
						type: 'text',
						errmsg: '请填写民族'
					},
					{
						name: 'weight',
						required: true,
						type: 'text',
						errmsg: '请填写体重'
					},
					{
						name: 'education',
						required: true,
						type: 'text',
						errmsg: '请选择学历'
					},
				]
				let valLoginRes = this.$validate.validate(this.userDetailInfo, loginRules)
				if(!utils.checkIdCard(this.userDetailInfo.idCare)){
					return false
				}
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
			
			// 身份证号码文本框失去焦点
			handleIdCard(e){
				let idCard = e.detail.value
				if(!idCard) {
					uni.showToast({
						title: "请填写身份证号码",
						icon: "none"
					})
					return false;
				}
				if(!utils.checkIdCard(idCard)){
					return false
				}
				// 身份证号码获取生日
				this.userDetailInfo.birthday = utils.getBirthday(idCard)
				this.userDetailInfo.gender = utils.getSex(idCard)
				this.userDetailInfo.age = utils.getAge(idCard)
			},
			// 城市
			bindPickerChange(e) {
				this.index = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 选择单选框 - 性别
			handleRadioChange(e) {
				console.log(e)
				this.userDetailInfo.gender = e.target.value
			},
			// 身高选择
			handelheights(e) {
				this.heightsIndex = e.target.value
				this.userDetailInfo.height = heights[this.heightsIndex]
			},
			// 学历选择
			handelEducation(e) {
				this.educationIndex = e.target.value
				this.userDetailInfo.education = educations[this.educationIndex]
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
