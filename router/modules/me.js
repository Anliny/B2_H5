// router/modules/home.js
const home = [{
	//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	path: '/pages/me/index',
	// aliasPath: '/', //对于h5端你必须在首页加上aliasPath并设置为/
	name: 'me',
	//可以自定义路由元信息
	myDiy: {
		isTab: true
	},
	meta: {
		title: '个人中心',
	}
},{
	path: '/pages/me/track/index',
	name: 'track',
	meta: {
		title: '我的动态',
	}
},{
	path: '/pages/me/detail',
	name: 'userDetail',
	meta: {
		title: '用户详情',
	}
},{
	path: 'pages/me/editUserInfo',
	name: 'editUserInfo',
	meta: {
		title: '编辑用户基本信息',
	}
}]
export default home
