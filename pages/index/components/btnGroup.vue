<template>
	
	<view class="content-btn-wrapper" >
		<template v-for="(item,index) in groupBtnData" >
			<view class="content-btn-item"  @click="handleBtnGroup(item)">
				<view class="content-btn-item-icons" >
					<image class="img" :src="item.img"></image>
				</view>
				<text>{{item.text}}</text>
			</view>
		</template>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons"
	export default {
		components: {
			uniIcons
		},
		props:{
			groupBtnData:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {}
		},
		methods: {
			handleBtnGroup(data){
				this.$emit('emitBtnGroup',data)
			}
			
		}
	}
</script>

<style>
	.content-btn-wrapper {
		width: 100%;
		margin-bottom: 8px;
		display: flex;
		background-color: #fff;
		flex-flow: row wrap;
		align-content: flex-start;
	}
	
	.content-btn-item {
		flex: 0 0 25%;
		text-align: center;
		padding: 8px 0;
		font-size: 12px;
		color: rgb(255, 119, 170);
		border-right: 1px solid #dedede63;
	}
	.content-btn-item:nth-child(4n) {
		border-right:none;
	}
	
	.content-btn-item .content-btn-item-icons {
		margin: auto;
		height: 35px;
		width: 35px;
		color: #fff;
	}
	
	.content-btn-item .content-btn-item-icons image {
		height: 100%;
		width: 100%;
	}
</style>
