import {
	warn,
	err
} from '../helpers/warn.js'
import {
	diffRouter,
	vueDevRouteProxy,
	getRouterNextInfo
} from './util.js'
import {
	parseQuery,
	formatURLQuery,
} from '../helpers/util.js'
import {
	vuelifeHooks,
	vueMount
} from './base.js'

import {
	lifeCycle,
	Global
} from "../helpers/config.js";

let beforeEachCount = 0;
let afterEachCount = 0;
let resolveLaunch = null;
const beforeEachLaunch = new Promise(resolve => resolveLaunch = resolve);

/**
 * 格式化 next传递过来的参数 作为vue-router可用的
 * @param {Object} to   //即将跳转到的路由页面
 * @param {*} Intercept 
 * @param {Funtion} next	//路由连接管道
 * @param {Router} Router	//路由对象
 */
export const forMatNext = function(to, Intercept, next, {
	selfRoutes,
	CONFIG
}) {
	if (CONFIG.h5.vueRouterDev) { //完全使用vue-router开发的时候 vueRouterDev:true 不用做啥直接略过
		next(Intercept);
		return Intercept;
	}
	if (typeof Intercept === 'object') { //只有是对象类型的时候 我们才进行格式化
		const navType = Reflect.get(Intercept, 'NAVTYPE');
		delete Intercept.NAVTYPE
		if (navType == 'push') {
			Intercept.replace = false;
		} else {
			Intercept.replace = true; //uni-app导航api所谓的NAVTYPE取值在h5都是replace:true
		}
		const name = Reflect.get(Intercept, 'name'); //统一格式化path
		Intercept.query = Intercept.params || Intercept.query;
		delete Intercept.name;
		delete Intercept.params;
		if (name != null) {
			for (let key in selfRoutes) {
				const item = selfRoutes[key];
				if (item.name == name) {
					Intercept.path = item.aliasPath || item.path;
					break
				}
			}
		} else {
			Intercept.path = Reflect.get(Intercept, 'path');
		}
		if (Intercept.query == null) {
			Intercept.query = {};
		}
		if (CONFIG.encodeURI) { //如果设置的编码传递则进行编码后传递
			const query = encodeURIComponent(JSON.stringify(Intercept.query));
			const formatQuery = formatURLQuery(query);
			Intercept.query = {};
			if (formatQuery != '') {
				Intercept.query.query = formatQuery;
			}
		}
	}
	next(Intercept);
	return Intercept;
}

/**
 * beforeEnter 生命周期
 * @param {Object} to
 * @param {Object} from
 * @param {Object} next
 * @param {Object} userHooks
 * @param {Object} Router
 */
export const beforeEnterHooks = function(to, from, next, userHooks, Router) {
	return new Promise(async resolve => {
		if (Reflect.get(Router, 'H5RouterReady')) {
			const res = await new Promise(async resolve => {
				let {
					toRoute,
					fromRoute
				} = getRouterNextInfo(to, from, Router);
				await userHooks(toRoute, fromRoute, resolve);
			})
			forMatNext(to, res, next, Router);
		} else {
			next();
		}
		resolve();
	})
}
/**
 * vueAfter 生命周期
 * @param {Object} to
 * @param {Object} from
 * @param {Object} next
 * @param {Object} Router
 */
export const afterHooks = async function(to, from, next, Router) {
	vuelifeHooks['afterHooks'][0](to, from);
	if (lifeCycle["afterHooks"][0]) {
		if (afterEachCount === 0) {
			await beforeEachLaunch;
			appMount(Router);
		}
		const {
			toRoute,
			fromRoute
		} = getRouterNextInfo(to, from, Router);
		lifeCycle["afterHooks"][0](toRoute, fromRoute);
	} else if (afterEachCount === 0) {
		appMount(Router);
	}
	afterEachCount++
	Router.lifeCycle["routerAfterHooks"][0].call(Router)
}
/**
 * vueBefore 生命周期
 * @param {Object} to
 * @param {Object} from
 * @param {Object} next
 * @param {Object} H5Config
 */
export const beforeHooks = function(to, from, next, Router) {
	return new Promise(async resolve => {
		await Router.lifeCycle["routerbeforeHooks"][0].call(Router) //触发Router内置前置生命周期
		if (!lifeCycle['beforeHooks'][0]) {
			next();
			beforeEachCount++;
			resolveLaunch();
			return resolve();
		}
		const H5 = Router.CONFIG.h5;
		vuelifeHooks.beforeHooks[0](to, from, async (Intercept) => {
			if (Intercept != null && H5.keepUniIntercept === true && H5.vueRouterDev === false) {
				next(Intercept);
				warn(`uni-app 内部强制触发跳转拦截`);
				beforeEachCount++;
				return resolve();
			}
			const res = await new Promise(async resolve => {
				const {
					toRoute,
					fromRoute
				} = getRouterNextInfo(to, from, Router);
				await lifeCycle["beforeHooks"][0](toRoute, fromRoute, resolve);
			})
			const beforeIntercept = forMatNext(to, res, next, Router);
			if (beforeEachCount == 0 && beforeIntercept == null && to.meta.isTabBar) { //首次触发beforeEach，并且首页没有进行跳转的情况下才触发beforeEnter 主要是keep-alive
				const {
					selfRoutes
				} = Router;
				const beforeEnter = Reflect.get(selfRoutes[`/${to.meta.pagePath}`], 'beforeEnter');
				if (beforeEnter) {
					await beforeEnterHooks(to, from, next, beforeEnter, Router);
				}
			}
			beforeEachCount++
			resolveLaunch();
			resolve();
		})
	})
}
/**
 * 把vue实例进行挂载到dom下
 * @param {Router} Router uni-simple-router实例对象 
 */
export const appMount = function(Router) {
	if (vueMount.length == 0) {
		return err(`检测到您未进行dom模型挂载操作，请调用api\r\n\r\n RouterMount(Vim: any, el: any): void`)
	}
	const {
		Vim,
		el
	} = vueMount[0];
	if (el == null) {
		el = '#app'; //这是uni-app在h5中的官方节点
	}
	try {
		Vim.$mount(el);
	} catch (error) {
		warn(`挂载vue节点时错误啦${error}`);
	}
}
/**
 * 通过自动调用router api来完成触发生命周期
 * 修复 history 模式下报错的问题  https://github.com/SilurianYang/uni-simple-router/issues/38
 * 
 * @param {Object} Router	//当前simple-router 对象
 * @param {Object} vueRouter vue-router对象
 */
export const triggerLifeCycle = function(Router, vueRouter) {
	const CONFIG = Router.CONFIG;
	const currRoute = vueRouter.currentRoute;
	if (vueRouter.mode === 'hash') {
		const {
			query,
			path
		} = currRoute;
		let URLQuery = '';
		if (CONFIG.encodeURI === true && CONFIG.h5.vueRouterDev === false) {
			URLQuery = `?query=${encodeURIComponent(query.query||'{}')}`
		} else {
			URLQuery = `?${parseQuery('',query,false).query}`
		}
		URLQuery = formatURLQuery(URLQuery);
		vueRouter.replace(`${path}${URLQuery}`);
	} else {
		let {
			toRoute,
			fromRoute
		} = getRouterNextInfo(currRoute, currRoute, Router);
		vueRouter.replace({
			path: toRoute.aliasPath || toRoute.path,
			query: toRoute.query
		});

	}
}

/** 注册自定义的路由到vue-router中 前提是必须使用vueRouter开发模式
 * @param {Object} Router
 * @param {Object} vueRouter
 * @param {Boolean} vueRouterDev
 */
export const registerRouter = function(Router, vueRouter, vueRouterDev) {
	let routeMap = [];
	if (!vueRouterDev) { //则进行对比两个路由表  主要工作是做路径的优化
		routeMap = diffRouter(Router, vueRouter, Router.CONFIG.h5.useUniConfig);
	} else { //完全使用vue-router开发时直接采用开发者的路由表
		routeMap = vueDevRouteProxy(Router.CONFIG.routes, Router);
	}
	const createRouter = () => new vueRouter.constructor({
		base: vueRouter.options.base,
		mode: vueRouter.options.mode,
		routes: routeMap
	});
	const router = createRouter();
	vueRouter.matcher = router.matcher;
	Global.vueRouter = vueRouter; //把当前vueRouter缓存到全局对象中
	Global.RouterReadyPromise(); //router已经准备就绪 调用promise.resolve();
	Router.H5RouterReady = true; //并挂载到Router对象下

	//注册完成所有的钩子及相关参数，手动触发Router的生命周期
	setTimeout(() => {
		triggerLifeCycle(Router, vueRouter);
	});
}