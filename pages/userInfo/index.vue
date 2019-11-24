<template>
	<view class="content">
		<view class="base">
			<view class="base-wrapper card-shadow">
				<view class="img">
					<image src="/static/header.jpeg" class="image" mode=""></image>
				</view>
				<view class="edit-btn">
					<image src="/static/icon/edit.png" class="image" mode=""></image>
				</view>
				<text class="base-name">有难控股</text>
				<text class="base-id">ID：WD12321</text>
				<view class="base-code-wrapper">
					<view class="base-code-item">北京户口</view>
					<view class="base-code-item code2">研究生</view>
					<view class="base-code-item code3">外企经理</view>
					<view class="base-code-item code4">有房有车</view>
				</view>
			</view>
		</view>
		<!-- 基本信息 -->
		<view class="card-warp card-shadow">
			<text class="card-title">基本信息</text>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="person" color="#ff77aa"></uni-icons>
					真实姓名：
				</view>
				<view class="card-text">王立志</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="personadd" color="#ff77aa"></uni-icons>
					身份证号：
				</view>
				<view class="card-text">500223199xxxxxxxxxx</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					性别：
				</view>
				<view class="card-text">男</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					年龄：
				</view>
				<view class="card-text">27</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					身高：
				</view>
				<view class="card-text">176CM</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					民族：
				</view>
				<view class="card-text">汉族</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					体重：
				</view>
				<view class="card-text">50KG</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					学历：
				</view>
				<view class="card-text">全日制本科</view>
			</view>
		</view>
		
		<!-- 联系方式 -->
		<view class="card-warp card-shadow">
			<text class="card-title">联系方式</text>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					手机号码：
				</view>
				<view class="card-text">13900000000</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					微信号码：
				</view>
				<view class="card-text">wx6789</view>
			</view>
		</view>	
		
		<!-- 其他信息 -->
		<view class="card-warp card-shadow">
			<text class="card-title">其他信息</text>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					工作职位：
				</view>
				<view class="card-text">项目总监</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					籍贯住址：
				</view>
				<view class="card-text">重庆渝北区</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					现住地址：
				</view>
				<view class="card-text">重庆江北区</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					工作行业：
				</view>
				<view class="card-text">IT互联网</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					是否婚配：
				</view>
				<view class="card-text">未婚</view>
			</view>
		</view>	
		
		<!-- 资产状况 -->
		<view class="card-warp card-shadow">
			<text class="card-title">资产状况</text>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					收入：
				</view>
				<view class="card-text">25000以上</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					住房情况：
				</view>
				<view class="card-text">两室一厅</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					是否有车：
				</view>
				<view class="card-text">一辆中级帕沙特</view>
			</view>
		</view>	
		
		<!-- 择偶条件 -->
		<view class="card-warp card-shadow">
			<text class="card-title">择偶条件</text>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					年龄：
				</view>
				<view class="card-text">26岁</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					身高：
				</view>
				<view class="card-text">160CM以上</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					最高学历：
				</view>
				<view class="card-text">本科及以上</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					民族：
				</view>
				<view class="card-text">汉族</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					是否婚配：
				</view>
				<view class="card-text">未婚</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					其他要求：
				</view>
				<view class="card-text">三观和，人善良</view>
			</view>
		</view>	
		
		<!-- 自我介绍 -->
		<view class="card-warp card-shadow">
			<text class="card-title">自我介绍</text>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					爱情宣言：
				</view>
				<view class="card-text">愿得一人心，白首不相离</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					兴趣爱好：
				</view>
				<view class="card-text">热爱运动，唱歌跳舞</view>
			</view>
			<view class="card-item">
				<view class="card-lable">
					<uni-icons type="chat" color="#ff77aa"></uni-icons>
					兴趣爱好：
				</view>
				<view class="card-text card-code">
					<view class="card-code-tiem">男球</view>
					<view class="card-code-tiem">羽毛球</view>
					<view class="card-code-tiem">擦边球</view>
				</view>
			</view>
		</view>
		
	</view>	
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons'
	export default{
		components:{
			uniIcons
		},
		data(){
			return{}
		},
		onLoad(options){
			console.log(options)
		}
	}
</script>

<style>
	.base{
		padding: 8px;
	}
	.base-wrapper {
		position: relative;
		margin-top: 83px;
		background-color: #fff9f9;
		border-radius: 20px;
	}
	.img{
		width: 150px;
		height: 150px;
		border: 1px solid rgb(255, 119, 170);
		border-radius: 50%;
		overflow: hidden;
		top: -75px;
		left: -75px;
		position: absolute;
		margin-left: 50%;
	}
	.edit-btn{
		width: 35px;
		height: 35px;
		border-radius: 50%;
		border:1px solid rgb(255, 119, 170);
		background-color: rgb(255, 119, 170);
		overflow: hidden;
		position: absolute;
		right: 5px;
		top: 5px;
	}
	.base-name{
		display: block;
		margin-top:83px;
		font-size: 24px;
		text-align: center;
	}
	.base-id{
		display: block;
		text-align: center;
	}
	.base-code-wrapper {
		display: flex;
		padding: 8px;
	}
	.base-code-item{
		width: 100%;
		height: 30px;
		line-height: 30px;
		color: #fff;
		font-size: 14px;
		text-align: center;
		border-radius: 20px;
		margin-left: 8px;
		background-color: rgb(138,187,214);
	}
	.code2{
		background-color: rgb(121,117,252);
	}
	.code3{
		background-color: rgb(221,145,204);
	}
	.code4{
		background-color: rgb(254,151,62);
	}
	
	.card-warp{
		background-color: #fff;
		border-radius: 20px;
		margin: 0 8px;
		padding: 8px;
		margin-bottom: 8px;
	}
	.card-warp .card-title{
		font-size: 18px;
		line-height: 35px;
	}
	.card-warp .card-item{
		display: flex;
		font-size: 14px;
		line-height: 30px;
	}
	.card-warp .card-item .card-lable{
		color: #808080;
	}
	.card-warp .card-item .card-lable .uni-icons{
		margin-right: 5px;
	}
	.card-code{
		display: flex;
	}
	.card-code-tiem{
		border:1px solid #FF77AA;
		color: #fff;
		background-color: #FF77AA;
		line-height: 25px;
		margin-right: 5px;
		border-radius: 5px;
		text-align: center;
		padding: 0 5px;
	}
</style>
