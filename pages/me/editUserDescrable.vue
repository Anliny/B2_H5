<template>
	<view class="contanner">
		<view class="content">
			<form @submit="formSubmit" @reset="formReset">

				<!-- 姓名 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'name'">
					<view class="form-lable">姓名：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.name || ''" type="text" placeholder-class="placeholder" placeholder="请填写真实姓名" />
					</view>
				</view>

				<!-- 身份证号码 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'idCare'">
					<view class="form-lable">身份证号：</view>
					<view class="form-inpput">
						<input @blur="handleIdCard" v-model="userDetailInfo.idCare || ''" type="text" placeholder-class="placeholder"
						 placeholder="请填写身份证号" />
					</view>
				</view>

				<!-- 身份证号码 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'height'">
					<view class="form-lable">选择身高：</view>
					<view class="form-inpput">
						<picker class="picker" :range="heights" @change="handelheights">
							{{ heights[heightsIndex] }}CM
						</picker>
					</view>
				</view>

				<!-- 民族 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'nation'">
					<view class="form-lable">民族：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.nation" type="text" placeholder-class="placeholder" placeholder="请填写民族" />
					</view>
				</view>

				<!-- 体重 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'weight'">
					<view class="form-lable">体重：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.weight" type="text" placeholder-class="placeholder" placeholder="请填写体重" />
					</view>
				</view>

				<!-- 最高学历 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'education'">
					<view class="form-lable">最高学历：</view>
					<view class="form-inpput">
						<picker class="picker" :range="educations" @change="handelEducation">
							{{ educations[educationIndex] }}
						</picker>
					</view>
				</view>

				<!-- 手机号码 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'phone'">
					<view class="form-lable">手机号码：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.phone" type="text" placeholder-class="placeholder" placeholder="请填写手机号" />
					</view>
				</view>

				<!-- 微信号码 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'wechatNumber'">
					<view class="form-lable">微信号码：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.wechatNumber" type="text" placeholder-class="placeholder" placeholder="请填写微信号" />
					</view>
				</view>

				<!-- QQ号码 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'qq'">
					<view class="form-lable">qq号码：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.qq" type="text" placeholder-class="placeholder" placeholder="请填写qq号" />
					</view>
				</view>

				<!-- 邮箱 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'email'">
					<view class="form-lable">邮箱：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.email" type="text" placeholder-class="placeholder" placeholder="请填写邮箱" />
					</view>
				</view>

				<!-- 设置查看等级 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'level'">
					<view class="form-lable">查看等级：</view>
					<view class="form-inpput">
						<picker class="picker" :range="vips" range-key="label" @change="handleVipsChange">
							{{ vips[vipIndex].label }}
						</picker>
					</view>
				</view>

				<!-- 设置职位 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'position'">
					<view class="form-lable">职位：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.position" type="text" placeholder-class="placeholder" placeholder="请填写职位信息" />
					</view>
				</view>

				<!-- 设置籍贯 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'nativePlaceAdress'">
					<view class="form-lable">籍贯：</view>
					<view class="form-inpput form-address" @click="handleCheckNativePlace">
						<block v-if="nativePlace.province">
							{{nativePlace.province}}
							{{nativePlace.city}}
							{{nativePlace.town}}
						</block>
						<block v-else>
							请选择籍贯
						</block>
					</view>
				</view>
				
				<!-- 设置现住地址 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'currentAddress'">
					<view class="form-lable">现住地址：</view>
					<view class="form-inpput form-address" @click="handleCheckAdress">
						<block v-if="currentAddress.province">
							{{currentAddress.province}}
							{{currentAddress.city}}
							{{currentAddress.town}}
						</block>
						<block v-else>
							请选择现住地址
						</block>
					</view>
				</view>
				
				<!-- 设置行业 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification=='industry'">
					<view class="form-lable">行业</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.industry" type="text" placeholder-class="placeholder" placeholder="请填写所在行业" />
					</view>
				</view>
				
				<!-- 设置是否婚配 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'isMarry'">
					<view class="form-lable">查看等级：</view>
					<view class="form-inpput">
						<picker class="picker" :range="marrys" range-key="label" @change="handleMarryChange">
							{{ marrys[marrysIndex].label }}
						</picker>
					</view>
				</view>
				
				<!-- 选择是否有子女 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'isChild'">
					<view class="form-lable">是否有小孩：</view>
					<view class="form-inpput">
						<picker class="picker" :range="isChilds" range-key="label" @change="handleIsChildChange">
							{{ isChilds[isChildsIndex].label }}
						</picker>
					</view>
				</view>
				
				<!-- 设置收入情况 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'income'">
					<view class="form-lable">月收入：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.income" type="text" placeholder-class="placeholder" placeholder="请填写职位信息" />
					</view>
				</view>
				
				<!-- 设置住房情况 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'housing'">
					<view class="form-lable">住房情况：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.housing" type="text" placeholder-class="placeholder" placeholder="请填写职位信息" />
					</view>
				</view>
				
				<!-- 设置是否有车 -->
				<view class="uni-form-item uni-column edit-input" v-if="identification == 'vehicle'">
					<view class="form-lable">住房情况：</view>
					<view class="form-inpput">
						<input v-model="userDetailInfo.vehicle" type="text" placeholder-class="placeholder" placeholder="请填写职位信息" />
					</view>
				</view>


				<!-- 设置爱情宣言 -->
				<view class="uni-form-item uni-column" v-if="identification =='declaration'">
					<view class="form-lable">爱情宣言：</view>
					<view class="form-inpput">
						<textarea @blur="bindTextAreaBlur" style="font-size: 14px;line-height: 35px;" placeholder-style="color:#F76260"
						 placeholder="请输入爱情宣言" v-model="userDetailInfo.declaration" auto-height />
						</view>
				</view>
				<view class="uni-form-item uni-column" v-if="identification =='hobby'">
					<view class="form-lable">兴趣爱好：</view>
					<view class="form-inpput">
						<textarea @blur="bindTextAreaBlur" style="font-size: 14px;line-height: 35px;" placeholder-style="color:#F76260" placeholder="请输入兴趣爱好" v-model="userDetailInfo.hobby" auto-height />
					</view>
				</view>
				<view class="uni-form-item uni-column" style="display: block;" v-if="identification =='otherStandardsId'">
					<view class="form-lable">选择标签：</view>
					<view class="form-inpput clearfix" style="width: 100%;padding: 8px;">
						<view class="item-lable"   @click="handleLable(item,index)" v-for="(item,index) in lableList" :key="index" :class="item.isCheck ? 'item-lable-active' : ''">{{item.name}}</view>
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
	import {Vips,heights,years,educations,marrys,isChilds} from "@/utils/fromCheck.js"
	import appRequest from "@/utils/config.js"
	import utils from "@/utils/utils.js"
	import lotusAddress from "@/components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";
	export default {
		components: {
			lotusAddress
		},
		data() {
			return {
				loading: false,
				vips: Vips,
				vipIndex: 0,
				heights:heights,
				heightsIndex:0,
				educations: educations,
				educationIndex: 0,
				marrys: marrys,
				marrysIndex: 0,
				isChilds:isChilds,
				isChildsIndex:0,
				lableList:[],
				userDetailInfo: {},
				otherStandardsId:[],
				identification:'',
				sexList: [{
					value: '1',
					name: '男'
				}, {
					value: '2',
					name: '女'
				}],
				lotusAddressData: {
					visible: false,
					provinceName: '',
					cityName: '',
					townName: '',
				},
				region: '',
				nativePlace:{},
				currentAddress:{},
				isAdress:0
			}
		},
		onLoad(options) {
			this.userDetailInfo = uni.getStorageSync('userInfo');
			this.identification = options.text
			
			let {height,education,level,nativePlace,currentAddress,isMarry,isChild,otherStandardsId} = this.userDetailInfo
			
			let heightItem = height ? height : "请选择身高";
			this.heightsIndex = this.heights.indexOf(heightItem)
			
			let educationItem = education ? education :'请选择学历'
			this.educationIndex = this.educations.indexOf(educationItem)
			
			// 会员等级
			Vips.find((item, index) => {
				if (item.val == level) {
					this.vipIndex = index
				}
			})
			
			// 是否婚配
			marrys.find((item, index) => {
				if (item.val == isMarry) {
					this.marrysIndex = index
				}
			})
			
			// 是否有小孩
			isChilds.find((item,index) => {
				if (item.val == isChild) {
					this.isChildsIndex = index
				}
			})
			
			
			// 籍贯地址
			if (!nativePlace) {
				this.nativePlace = {
					city: "",
					cityCode: "",
					province: "",
					provinceCode: "",
					town: "",
					townCode: ""
				}
			}else{
				this.nativePlace = JSON.parse(nativePlace)
			}
			// 现住地址
			if(!currentAddress){
				this.currentAddress = {
					city: "",
					cityCode: "",
					province: "",
					provinceCode: "",
					town: "",
					townCode: ""
				}
			}else{
				this.currentAddress = JSON.parse(nativePlace)
			}
			// 查询标签
			this.lableList = uni.getStorageSync('lableList')
			
			if(otherStandardsId){
				let otherStandardsIdSelect = JSON.parse(otherStandardsId)
				let arr = []
				this.lableList.forEach((item,index) => {
					otherStandardsIdSelect.forEach(row => {
						if(row == item.id){
							item.isCheck = true
						}
					})
				})
			}
		},
		methods: {
			formSubmit(e) {
				
				if(this.identification == 'nativePlaceAdress'){
					this.userDetailInfo.nativePlace = JSON.stringify(this.nativePlace)
				}
				if(this.identification == 'currentAddress'){
					this.userDetailInfo.currentAddress = JSON.stringify(this.currentAddress)
				}
				// 个人标签
				let list= [];
				this.lableList.forEach((item,index) => {
					if(item.isCheck){
						list.push(item.id)
					}
				})
				this.userDetailInfo.otherStandardsId = JSON.stringify(list)
				
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
								uni.redirectTo({
									url: '/pages/me/detail',
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
		
			// 点击lable
			handleLable(data,index){
				this.lableList[index].isCheck = !this.lableList[index].isCheck
				// 强制刷新列表
				this.$forceUpdate() 
				
			},
			// 
			bindTextAreaBlur(){},
			
			// 身份证号码文本框失去焦点   
			// 身份证获取用户年龄，性别，出生日期
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
			// 身高选择
			handelheights(e) {
				this.heightsIndex = e.target.value
				this.userDetailInfo.height = heights[this.heightsIndex]
			},
			// 学历选择
			handelEducation(e) {
				this.educationIndex = e.target.value
				this.userDetailInfo.education = educations[this.educationIndex]
			},
			// 私密信息查看等级
			handleVipsChange(e) {
				this.vipIndex = e.target.value
				this.userDetailInfo.level = this.vips[this.vipIndex].val
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
				// let {
				// 	nativePlace,
				// 	currentAddress
				// } = this.nativePlace
				if (this.isAdress == 1) {
					this.lotusAddressData.provinceName = this.nativePlace.province;
					this.lotusAddressData.cityName = this.nativePlace.city;
					this.lotusAddressData.townName = this.nativePlace.town;
				}
				if (this.isAdress == 2) {
					this.lotusAddressData.provinceName = this.currentAddress.province;
					this.lotusAddressData.cityName = this.currentAddress.city;
					this.lotusAddressData.townName = this.currentAddress.town;
				}
			},
			//回传已选的省市区的值
			choseValue(res) {
				//res数据源包括已选省市区与省市区code
				this.lotusAddressData.visible = res.visible; //visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if (res.isChose) {
					if (this.isAdress == 1) {
						this.nativePlace = res
					}
					if (this.isAdress == 2) {
						this.currentAddress = res
					}
					// this.lotusAddressData.provinceName = res.province; //省
					// this.lotusAddressData.cityName = res.city; //市
					// this.lotusAddressData.townName = res.town; //区
					this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
				this.isAdress = 0
			},
			
			// 选择是否结婚
			handleMarryChange(e) {
				this.marrysIndex = e.target.value
				this.userDetailInfo.isMarry = marrys[this.marrysIndex].val
			},
			// 是否有小孩
			handleIsChildChange(e){
				this.isChildsIndex = e.target.value
				this.userDetailInfo.isChild = isChilds[this.isChildsIndex].val
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../assets/common.scss");
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
	
	
	
</style>
