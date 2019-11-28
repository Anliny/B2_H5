<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<view class="form-lable">活动主题</view>
				<view class="form-inpput">
					<input v-model="activity.title"  type="text" placeholder-class="placeholder" placeholder="请填写活动标题" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-inpput" style="width: 100vw;">
					<textarea style="padding: 8px;line-break: 35px;" @blur="handleGetCon" :value="activity.desc" placeholder-style="color:#cccccc"
					 placeholder="发布交友活动,可以填写活动内容,活动地点等说明信息" />
				</view>
		    </view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">开始日期</view>
				<view class="form-inpput">
					<picker class="picker" mode="date" :value="startTime" :start="startDate" :end="endDate" @change="handleStartTime">
						{{startTime}}
					</picker>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">结束日期</view>
				<view class="form-inpput">
					<picker class="picker" mode="date" :value="endTime" :start="startDate" :end="endDate" @change="handleEndTime">
						{{endTime}}
					</picker>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="form-lable">活动人数</view>
				<view class="form-inpput">
					<picker class="picker" :range="activeUser" @change="handelactiveUser">
						{{ activeUser[activeUserIndex] }}
					</picker>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<an-upload-img ref="uploadimg"></an-upload-img>
			</view>
			<view class="uni-btn-v">
			    <button type="primary" form-type="submit">发布</button>
			</view>
		</form>
	</view>
</template>

<script>
	import anUploadImg from "./components/an-uploadImg.vue"
	import appRequest from "@/utils/config.js"
	import {
		activeUser
	} from "@/utils/fromCheck.js"
	export default{
		components: {
			anUploadImg
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				startTime: currentDate,
				endTime: currentDate,
				imgObj:{
					url:'/common/multiUploads',
					fileList:[],
					name:'trackImg',
					limt:9
				},
				activeUser: activeUser,
				activeUserIndex: 0,
				activity: {
					title:'',  //活动标题
					content:'',  // 活动描述
					startTime:'',  //开始时间
					endTime:'',    //结束时间
					pictureUrl:[],      //上传图片数组
					activityNumber:0,
					state:1
				},
				upImgConfig:{
					iconReplace:''
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
			// 日期
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
			// 开始日期选择
			handleStartTime: function(e) {
				console.log(e)
				this.startTime = e.target.value
				this.activity.startTime = e.target.value
			},
			// 结束日期选择
			handleEndTime:function(e){
				this.endTime = e.target.value
				this.activity.endTime = e.target.value
			},
			// 选择人数限制
			handelactiveUser(e) {
				this.activeUserIndex = e.target.value
				this.activity.activityNumber = this.activeUser[this.activeUserIndex]
			},
			
			formSubmit() {
				let pictureUrls = JSON.stringify(this.$refs.uploadimg.imgList)
				this.activity.pictureUrl = pictureUrls
				let loginRules = [
					{
						name: 'title',
						required: true,
						type: 'text',
						errmsg: '请填写活动标题'
					},{
						name: 'content',
						required: true,
						type: 'text',
						errmsg: '请填写活动详情'
					},{
						name: 'startTime',
						required: true,
						type: 'text',
						errmsg: '请选择活动开始时间'
					},{
						name: 'startTime',
						required: true,
						type: 'text',
						errmsg: '请选择活动结束时间'
					},{
						name: 'activityNumber',
						required: true,
						type: 'text',
						errmsg: '请选择活动参与人数'
					}
				]
				let valLoginRes = this.$validate.validate(this.activity, loginRules)
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}
				appRequest.baseRequest({
					url: 'activity/save',
					data: this.activity,
					method: 'post',
					success: (res) => {
						this.loading = false
						// 用户状态存到缓存中去
						try {
							uni.showToast({
								title: `活动保存成功！`,
								icon: 'success',
								showCancel: false,
								success() {
									uni.switchTab({
										url:'/pages/activity/index',
										animationType: 'pop-in',
										animationDuration: 200
									})
								}
							});
						} catch (e) {
							//TODO handle the exception
						}
					}
				})
			},
			formReset(){},
		
			
			// 失去焦点 获取列表框的值
			handleGetCon(e){
				this.activity.content = e.detail.value
			}
		},
		
	}
</script>

<style>
	@import url("../../assets/common.css");
	.content{
		padding: 8px;
	}
	.uni-form-item{
		height: auto;
	}
</style>
