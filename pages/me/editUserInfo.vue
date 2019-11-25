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
					<view class="form-lable">省份证号</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.idCare" type="text" placeholder-class="placeholder" placeholder="请填写身份证号" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-lable">性别</view>
					<view class="form-inpput">
						<radio-group class="form-radio-group" @change="handleRadioChange">
							<label class="formRadio" v-for="(item, index) in sexList" :key="item.value">
								<view>
									<radio :value="item.value" :checked="index === current" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
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
					<view class="form-lable">出生日期</view>
					<view class="form-inpput">
						<picker class="picker" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							{{date}}
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
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				loading: false,
				heights: heights,
				heightsIndex: 0,
				years: years,
				yearsIndex: 0,
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
					gender: '',
					age: '',
					date: '',
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
		methods: {
			formSubmit(e) {
				console.log(e)
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
						name: 'date',
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
								this.$router.replace('/pages/me/detail')
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

			// 城市
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			handleYearChange: function(e) {
				console.log(e)
				this.yearsIndex = e.detail.value;
				this.userDetailInfo.age = years[this.yearsIndex]
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
			bindDateChange: function(e) {
				this.date = e.target.value
				this.userDetailInfo.date = this.date
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
