import Vue from 'vue'
import App from './App'
import validate from '@/js_sdk/fshjie-formvalidate/ys-validate.js'
import zhouWeiNavBar from "@/components/zhouWei-navBar"
// import {RouterMount} from '@/js_sdk/hhyang-uni-simple-router/index.js'
// import router from "@/router/index"

Vue.prototype.$validate = validate
Vue.config.productionTip = false
Vue.component("nav-bar", zhouWeiNavBar);
// Vue.use(router)
App.mpType = 'app'
	
const app = new Vue({
    ...App
})
app.$mount()
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// // #ifdef H5
// 	RouterMount(app,'#app');
// // #endif

// // #ifndef H5
// 	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// // #endif