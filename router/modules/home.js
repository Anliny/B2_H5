// router/modules/home.js
const home = [{
	//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	path: '/pages/index/index',
	aliasPath: '/', //对于h5端你必须在首页加上aliasPath并设置为/
	name: 'home',
	//可以自定义路由元信息
	myDiy: {
		isTab: true
	},
	meta: {
		title: '首页',
	}
},{
	//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	path: '/pages/index/userInfo',
	// aliasPath: '/', //对于h5端你必须在首页加上aliasPath并设置为/
	name: 'userInfo',
	meta: {
		title: '用户详细信息',
	}
}]
export default home
