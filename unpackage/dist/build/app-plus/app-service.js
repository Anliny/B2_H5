var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  


__wxAppCode__['app.json']={"pages":["pages/index/index","pages/index/userInfo","pages/activity/index","pages/me/index","pages/userInfo/index","pages/me/editUserInfo","pages/me/detail","pages/me/editUserHeader","pages/me/editJokin","pages/me/editUserContact","pages/me/condition/index","pages/me/condition/editUserCondition","pages/me/editUserInfomation","pages/me/editUserAssetStatus","pages/components/uploadAvatar/upload","pages/components/uploadAvatar/jokinAvatar","pages/me/track/index","pages/index/vipTrack","pages/me/photo/index","pages/me/photo/addPhoto","pages/me/vip/index","pages/me/editUserDescrable","pages/me/setings/index","pages/me/track/addTrack","pages/activity/addActivity","pages/login/index","pages/register/index"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"rgb(255,119,170)","backgroundColor":"rgb(255,119,170)"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/icon/tuijian.png","selectedIconPath":"static/icon/tuijian_active.png","text":"推荐"},{"pagePath":"pages/activity/index","iconPath":"static/icon/dongtai.png","selectedIconPath":"static/icon/dongtai_active.png","text":"活动"},{"pagePath":"pages/me/index","iconPath":"static/icon/me.png","selectedIconPath":"static/icon/me_active.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"B2APP","compilerVersion":"2.4.2","usingComponents":{"nav-bar":"/components/zhouWei-navBar/index"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/J-skeleton/J-skeleton.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/J-skeleton/J-skeleton.wxml']=$gwx('./components/J-skeleton/J-skeleton.wxml');

__wxAppCode__['components/uni-badge/uni-badge.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-card/uni-card.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-card/uni-card.wxml']=$gwx('./components/uni-card/uni-card.wxml');

__wxAppCode__['components/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-list-item/uni-list-item.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons","uni-badge":"/components/uni-badge/uni-badge"},"component":true};
__wxAppCode__['components/uni-list-item/uni-list-item.wxml']=$gwx('./components/uni-list-item/uni-list-item.wxml');

__wxAppCode__['components/uni-list/uni-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-list/uni-list.wxml']=$gwx('./components/uni-list/uni-list.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['components/uni-search-bar/uni-search-bar.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['components/uni-search-bar/uni-search-bar.wxml']=$gwx('./components/uni-search-bar/uni-search-bar.wxml');

__wxAppCode__['components/Winglau14-lotusAddress/Winglau14-lotusAddress.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/Winglau14-lotusAddress/Winglau14-lotusAddress.wxml']=$gwx('./components/Winglau14-lotusAddress/Winglau14-lotusAddress.wxml');

__wxAppCode__['components/xyz-tab/xyz-tab.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/xyz-tab/xyz-tab.wxml']=$gwx('./components/xyz-tab/xyz-tab.wxml');

__wxAppCode__['components/zhouWei-navBar/index.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/zhouWei-navBar/index.wxml']=$gwx('./components/zhouWei-navBar/index.wxml');

__wxAppCode__['pages/activity/addActivity.json']={"navigationBarTitleText":"添加交友活动","navigationBarBackgroundColor":"rgb(255,119,55)","backgroundColor":"rgb(255,119,55)","animationType":"pop-in","animationDuration":200,"usingComponents":{"an-upload-img":"/pages/activity/components/an-uploadImg"}};
__wxAppCode__['pages/activity/addActivity.wxml']=$gwx('./pages/activity/addActivity.wxml');

__wxAppCode__['pages/activity/components/an-uploadImg.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['pages/activity/components/an-uploadImg.wxml']=$gwx('./pages/activity/components/an-uploadImg.wxml');

__wxAppCode__['pages/activity/index.json']={"navigationBarTitleText":"交友活动1111","navigationBarBackgroundColor":"rgb(255,119,55)","backgroundColor":"rgb(255,119,55)","transparentTitle":"auto","navigatonStyle":"custom","enablePullDownRefresh":true,"backgroundTextStyle":"dark","onReachBottomDistance":50,"usingComponents":{"nav-bar":"/components/zhouWei-navBar/index","uni-icons":"/components/uni-icons/uni-icons","uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/activity/index.wxml']=$gwx('./pages/activity/index.wxml');

__wxAppCode__['pages/components/uploadAvatar/jokinAvatar.json']={"navigationBarTitleText":"上传头像","animationType":"pop-in","animationDuration":200,"usingComponents":{}};
__wxAppCode__['pages/components/uploadAvatar/jokinAvatar.wxml']=$gwx('./pages/components/uploadAvatar/jokinAvatar.wxml');

__wxAppCode__['pages/components/uploadAvatar/upload.json']={"navigationBarTitleText":"上传图像编辑","animationType":"pop-in","animationDuration":200,"usingComponents":{}};
__wxAppCode__['pages/components/uploadAvatar/upload.wxml']=$gwx('./pages/components/uploadAvatar/upload.wxml');

__wxAppCode__['pages/components/you-scroll.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/components/you-scroll.wxml']=$gwx('./pages/components/you-scroll.wxml');

__wxAppCode__['pages/index/components/list.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['pages/index/components/list.wxml']=$gwx('./pages/index/components/list.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"首页","enablePullDownRefresh":true,"backgroundTextStyle":"dark","onReachBottomDistance":50,"usingComponents":{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-card":"/components/uni-card/uni-card","uni-icons":"/components/uni-icons/uni-icons","skeleton":"/components/J-skeleton/J-skeleton","you-scroll":"/pages/components/you-scroll","uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index/userInfo.json']={"navigationBarTitleText":"用户信息","usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-icons":"/components/uni-icons/uni-icons"}};
__wxAppCode__['pages/index/userInfo.wxml']=$gwx('./pages/index/userInfo.wxml');

__wxAppCode__['pages/index/vipTrack.json']={"navigationBarTitleText":"会员动态","navigationBarBackgroundColor":"rgb(255,119,55)","backgroundColor":"rgb(255,119,55)","transparentTitle":"auto","navigatonStyle":"custom","enablePullDownRefresh":true,"backgroundTextStyle":"dark","onReachBottomDistance":50,"usingComponents":{"nav-bar":"/components/zhouWei-navBar/index","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","list":"/pages/index/components/list","uni-icons":"/components/uni-icons/uni-icons","uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/index/vipTrack.wxml']=$gwx('./pages/index/vipTrack.wxml');

__wxAppCode__['pages/login/index.json']={"navigationBarTitleText":"用户登录","usingComponents":{}};
__wxAppCode__['pages/login/index.wxml']=$gwx('./pages/login/index.wxml');

__wxAppCode__['pages/me/condition/editUserCondition.json']={"navigationBarTitleText":"编辑征友条件","animationType":"pop-in","animationDuration":200,"usingComponents":{"lotus-address":"/components/Winglau14-lotusAddress/Winglau14-lotusAddress"}};
__wxAppCode__['pages/me/condition/editUserCondition.wxml']=$gwx('./pages/me/condition/editUserCondition.wxml');

__wxAppCode__['pages/me/condition/index.json']={"navigationBarTitleText":"查看征友条件","animationType":"pop-in","animationDuration":200,"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"}};
__wxAppCode__['pages/me/condition/index.wxml']=$gwx('./pages/me/condition/index.wxml');

__wxAppCode__['pages/me/detail.json']={"navigationBarTitleText":"用户详情","usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-icons":"/components/uni-icons/uni-icons"}};
__wxAppCode__['pages/me/detail.wxml']=$gwx('./pages/me/detail.wxml');

__wxAppCode__['pages/me/editJokin.json']={"navigationBarTitleText":"编辑红娘信息","animationType":"pop-in","animationDuration":200,"usingComponents":{"lotus-address":"/components/Winglau14-lotusAddress/Winglau14-lotusAddress"}};
__wxAppCode__['pages/me/editJokin.wxml']=$gwx('./pages/me/editJokin.wxml');

__wxAppCode__['pages/me/editUserAssetStatus.json']={"navigationBarTitleText":"编辑资产状况","animationType":"pop-in","animationDuration":200,"usingComponents":{}};
__wxAppCode__['pages/me/editUserAssetStatus.wxml']=$gwx('./pages/me/editUserAssetStatus.wxml');

__wxAppCode__['pages/me/editUserContact.json']={"navigationBarTitleText":"编辑用户联系方式","animationType":"pop-in","animationDuration":200,"usingComponents":{}};
__wxAppCode__['pages/me/editUserContact.wxml']=$gwx('./pages/me/editUserContact.wxml');

__wxAppCode__['pages/me/editUserDescrable.json']={"navigationBarTitleText":"自我描述","animationType":"pop-in","animationDuration":200,"usingComponents":{}};
__wxAppCode__['pages/me/editUserDescrable.wxml']=$gwx('./pages/me/editUserDescrable.wxml');

__wxAppCode__['pages/me/editUserHeader.json']={"navigationBarTitleText":"编辑用户头部信息","animationType":"pop-in","animationDuration":200,"usingComponents":{}};
__wxAppCode__['pages/me/editUserHeader.wxml']=$gwx('./pages/me/editUserHeader.wxml');

__wxAppCode__['pages/me/editUserInfo.json']={"navigationBarTitleText":"编辑用户基础信息","animationType":"pop-in","animationDuration":200,"usingComponents":{}};
__wxAppCode__['pages/me/editUserInfo.wxml']=$gwx('./pages/me/editUserInfo.wxml');

__wxAppCode__['pages/me/editUserInfomation.json']={"navigationBarTitleText":"编辑其他信息","animationType":"pop-in","animationDuration":200,"usingComponents":{"lotus-address":"/components/Winglau14-lotusAddress/Winglau14-lotusAddress"}};
__wxAppCode__['pages/me/editUserInfomation.wxml']=$gwx('./pages/me/editUserInfomation.wxml');

__wxAppCode__['pages/me/index.json']={"navigationBarTitleText":"个人中心","usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-icons":"/components/uni-icons/uni-icons"}};
__wxAppCode__['pages/me/index.wxml']=$gwx('./pages/me/index.wxml');

__wxAppCode__['pages/me/photo/addPhoto.json']={"navigationBarTitleText":"添加相册","navigationBarBackgroundColor":"rgb(255,119,55)","backgroundColor":"rgb(255,119,55)","animationType":"pop-in","animationDuration":200,"usingComponents":{"an-upload-img":"/pages/me/photo/components/an-uploadImg"}};
__wxAppCode__['pages/me/photo/addPhoto.wxml']=$gwx('./pages/me/photo/addPhoto.wxml');

__wxAppCode__['pages/me/photo/components/an-uploadImg.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['pages/me/photo/components/an-uploadImg.wxml']=$gwx('./pages/me/photo/components/an-uploadImg.wxml');

__wxAppCode__['pages/me/photo/components/list.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['pages/me/photo/components/list.wxml']=$gwx('./pages/me/photo/components/list.wxml');

__wxAppCode__['pages/me/photo/index.json']={"navigationBarTitleText":"我的相册","navigationBarBackgroundColor":"rgb(255,119,55)","backgroundColor":"rgb(255,119,55)","transparentTitle":"auto","navigatonStyle":"custom","enablePullDownRefresh":true,"backgroundTextStyle":"dark","onReachBottomDistance":50,"usingComponents":{"nav-bar":"/components/zhouWei-navBar/index","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","list":"/pages/me/photo/components/list","uni-icons":"/components/uni-icons/uni-icons","uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/me/photo/index.wxml']=$gwx('./pages/me/photo/index.wxml');

__wxAppCode__['pages/me/setings/index.json']={"navigationBarTitleText":"设置","animationType":"pop-in","animationDuration":200,"usingComponents":{}};
__wxAppCode__['pages/me/setings/index.wxml']=$gwx('./pages/me/setings/index.wxml');

__wxAppCode__['pages/me/track/addTrack.json']={"navigationBarTitleText":"添加动态","navigationBarBackgroundColor":"rgb(255,119,55)","backgroundColor":"rgb(255,119,55)","animationType":"pop-in","animationDuration":200,"usingComponents":{"an-upload-img":"/pages/me/track/components/an-uploadImg"}};
__wxAppCode__['pages/me/track/addTrack.wxml']=$gwx('./pages/me/track/addTrack.wxml');

__wxAppCode__['pages/me/track/components/an-uploadImg.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['pages/me/track/components/an-uploadImg.wxml']=$gwx('./pages/me/track/components/an-uploadImg.wxml');

__wxAppCode__['pages/me/track/components/list.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['pages/me/track/components/list.wxml']=$gwx('./pages/me/track/components/list.wxml');

__wxAppCode__['pages/me/track/index.json']={"navigationBarTitleText":"我的动态","navigationBarBackgroundColor":"rgb(255,119,55)","backgroundColor":"rgb(255,119,55)","transparentTitle":"auto","navigatonStyle":"custom","enablePullDownRefresh":true,"backgroundTextStyle":"dark","onReachBottomDistance":50,"usingComponents":{"nav-bar":"/components/zhouWei-navBar/index","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","list":"/pages/me/track/components/list","uni-icons":"/components/uni-icons/uni-icons","uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/me/track/index.wxml']=$gwx('./pages/me/track/index.wxml');

__wxAppCode__['pages/me/vip/index.json']={"navigationBarTitleText":"购买会员","animationType":"pop-in","animationDuration":200,"usingComponents":{}};
__wxAppCode__['pages/me/vip/index.wxml']=$gwx('./pages/me/vip/index.wxml');

__wxAppCode__['pages/register/index.json']={"navigationBarTitleText":"用户注册","backgroundColor":"#F0AD4E","usingComponents":{"xyz-tab":"/components/xyz-tab/xyz-tab"}};
__wxAppCode__['pages/register/index.wxml']=$gwx('./pages/register/index.wxml');

__wxAppCode__['pages/userInfo/index.json']={"navigationBarTitleText":"用户信息","usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"}};
__wxAppCode__['pages/userInfo/index.wxml']=$gwx('./pages/userInfo/index.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"4eab":function(e,n,t){"use strict";t.r(n);var u=t("b8b1"),r=t.n(u);for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);n["default"]=r.a},"79ae":function(e,n,t){"use strict";t.r(n);var u=t("4eab");for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);t("da9d");var o,a,c=t("2877"),l=Object(c["a"])(u["default"],o,a,!1,null,null,null);n["default"]=l.exports},b8b1:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={onLaunch:function(){},onShow:function(){},onHide:function(){}};n.default=u},c8d0:function(e,n,t){"use strict";(function(e,n){t("fc8c"),t("921b");var u=a(t("66fd")),r=a(t("79ae")),o=a(t("99b3"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},u=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),u.forEach(function(n){l(e,n,t[n])})}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=function(){return t.e("components/zhouWei-navBar/index").then(t.bind(null,"8f88"))},f=e.request,d=e.uploadFile;e.request=function(e){var n=/^\//.test(e.url);return n||(e.url="/"+e.url),e["url"]="/apis"+e.url,f(e)},e.uploadFile=function(e){return e["url"]="/apis"+e.url,d(e)},u.default.prototype.$validate=o.default,u.default.config.productionTip=!1,u.default.component("nav-bar",i),r.default.mpType="app";var p=new u.default(c({},r.default));n(p).$mount()}).call(this,t("6e42")["default"],t("6e42")["createApp"])},da9d:function(e,n,t){"use strict";var u=t("e462"),r=t.n(u);r.a},e462:function(e,n,t){}},[["c8d0","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var t, s, i = n[0], u = n[1], c = n[2], p = 0, l = []; p < i.length; p++) {
      s = i[p], r[s] && l.push(r[s][0]), r[s] = 0;
    }

    for (t in u) {
      Object.prototype.hasOwnProperty.call(u, t) && (e[t] = u[t]);
    }

    m && m(n);

    while (l.length) {
      l.shift()();
    }

    return a.push.apply(a, c || []), o();
  }

  function o() {
    for (var e, n = 0; n < a.length; n++) {
      for (var o = a[n], t = !0, s = 1; s < o.length; s++) {
        var i = o[s];
        0 !== r[i] && (t = !1);
      }

      t && (a.splice(n--, 1), e = u(u.s = o[0]));
    }

    return e;
  }

  var t = {},
      s = {
    "common/runtime": 0
  },
      r = {
    "common/runtime": 0
  },
      a = [];

  function i(e) {
    return u.p + "" + e + ".js";
  }

  function u(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, u), o.l = !0, o.exports;
  }

  u.e = function (e) {
    var n = [],
        o = {
      "components/zhouWei-navBar/index": 1,
      "components/uni-icons/uni-icons": 1,
      "components/J-skeleton/J-skeleton": 1,
      "components/uni-card/uni-card": 1,
      "components/uni-load-more/uni-load-more": 1,
      "components/uni-search-bar/uni-search-bar": 1,
      "pages/components/you-scroll": 1,
      "components/uni-list-item/uni-list-item": 1,
      "components/uni-list/uni-list": 1,
      "components/Winglau14-lotusAddress/Winglau14-lotusAddress": 1,
      "pages/me/track/components/list": 1,
      "pages/index/components/list": 1,
      "pages/me/photo/components/list": 1,
      "pages/me/photo/components/an-uploadImg": 1,
      "pages/me/track/components/an-uploadImg": 1,
      "pages/activity/components/an-uploadImg": 1,
      "components/xyz-tab/xyz-tab": 1,
      "components/uni-badge/uni-badge": 1
    };
    s[e] ? n.push(s[e]) : 0 !== s[e] && o[e] && n.push(s[e] = new Promise(function (n, o) {
      for (var t = ({
        "components/zhouWei-navBar/index": "components/zhouWei-navBar/index",
        "components/uni-icons/uni-icons": "components/uni-icons/uni-icons",
        "components/J-skeleton/J-skeleton": "components/J-skeleton/J-skeleton",
        "components/uni-card/uni-card": "components/uni-card/uni-card",
        "components/uni-load-more/uni-load-more": "components/uni-load-more/uni-load-more",
        "components/uni-search-bar/uni-search-bar": "components/uni-search-bar/uni-search-bar",
        "pages/components/you-scroll": "pages/components/you-scroll",
        "components/uni-list-item/uni-list-item": "components/uni-list-item/uni-list-item",
        "components/uni-list/uni-list": "components/uni-list/uni-list",
        "components/Winglau14-lotusAddress/Winglau14-lotusAddress": "components/Winglau14-lotusAddress/Winglau14-lotusAddress",
        "pages/me/track/components/list": "pages/me/track/components/list",
        "pages/index/components/list": "pages/index/components/list",
        "pages/me/photo/components/list": "pages/me/photo/components/list",
        "pages/me/photo/components/an-uploadImg": "pages/me/photo/components/an-uploadImg",
        "pages/me/track/components/an-uploadImg": "pages/me/track/components/an-uploadImg",
        "pages/activity/components/an-uploadImg": "pages/activity/components/an-uploadImg",
        "components/xyz-tab/xyz-tab": "components/xyz-tab/xyz-tab",
        "components/uni-badge/uni-badge": "components/uni-badge/uni-badge"
      }[e] || e) + ".wxss", r = u.p + t, a = document.getElementsByTagName("link"), i = 0; i < a.length; i++) {
        var c = a[i],
            p = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (p === t || p === r)) return n();
      }

      var l = document.getElementsByTagName("style");

      for (i = 0; i < l.length; i++) {
        c = l[i], p = c.getAttribute("data-href");
        if (p === t || p === r) return n();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = n, m.onerror = function (n) {
        var t = n && n.target && n.target.src || r,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
        a.request = t, delete s[e], m.parentNode.removeChild(m), o(a);
      }, m.href = r;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(m);
    }).then(function () {
      s[e] = 0;
    }));
    var t = r[e];
    if (0 !== t) if (t) n.push(t[2]);else {
      var a = new Promise(function (n, o) {
        t = r[e] = [n, o];
      });
      n.push(t[2] = a);
      var c,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, u.nc && p.setAttribute("nonce", u.nc), p.src = i(e), c = function c(n) {
        p.onerror = p.onload = null, clearTimeout(l);
        var o = r[e];

        if (0 !== o) {
          if (o) {
            var t = n && ("load" === n.type ? "missing" : n.type),
                s = n && n.target && n.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + t + ": " + s + ")");
            a.type = t, a.request = s, o[1](a);
          }

          r[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        c({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = c, document.head.appendChild(p);
    }
    return Promise.all(n);
  }, u.m = e, u.c = t, u.d = function (e, n, o) {
    u.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    });
  }, u.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, u.t = function (e, n) {
    if (1 & n && (e = u(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (u.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var t in e) {
      u.d(o, t, function (n) {
        return e[n];
      }.bind(null, t));
    }
    return o;
  }, u.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return u.d(n, "a", n), n;
  }, u.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, u.p = "/", u.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = c.push.bind(c);
  c.push = n, c = c.slice();

  for (var l = 0; l < c.length; l++) {
    n(c[l]);
  }

  var m = p;
  o();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(e,a,n){"use strict";function t(e){var a=Object.prototype.toString.call(e);return a.substring(8,a.length-1)}function r(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];var r=a.map(function(e){var a=Object.prototype.toString.call(e);if("[object object]"===a.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(r){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=t(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e}),u="";if(r.length>1){var l=r.pop();u=r.join("---COMMA---"),0===l.indexOf(" at ")?u+=l:u+="---COMMA---"+l}else u=r[0];return u}Object.defineProperty(a,"__esModule",{value:!0}),a.default=r},"1d9e":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={appid:"__UNI__4BB26D8"};a.default=t},"222a":function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={baseRequest:function(a){try{var n=e.getStorageSync("token");n?(a.header?a.header["Authorization"]=n.token:a.header={Authorization:n.token},e.request(a)):e.showToast({title:"用户信息不存在",success:function(){}})}catch(t){e.showToast({title:"用户信息不存在"})}}},t=n;a.default=t}).call(this,n("6e42")["default"])},2877:function(e,a,n){"use strict";function t(e,a,n,t,r,u,l,p){var v,m="function"===typeof e?e.options:e;if(a&&(m.render=a,m.staticRenderFns=n,m._compiled=!0),t&&(m.functional=!0),u&&(m._scopeId="data-v-"+u),l?(v=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},m._ssrRegister=v):r&&(v=p?function(){r.call(this,this.$root.$options.shadowRoot)}:r),v)if(m.functional){m._injectStyles=v;var o=m.render;m.render=function(e,a){return v.call(a),o(e,a)}}else{var i=m.beforeCreate;m.beforeCreate=i?[].concat(i,v):[v]}return{exports:e,options:m}}n.d(a,"a",function(){return t})},"4d6c":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.activeUser=a.jobYars=a.marrys=a.Vips=a.educations=a.years=a.heights=void 0;var t=function(){for(var e=["请选择身高"],a=140;a<=240;a++)e.push("".concat(a));return e}();a.heights=t;var r=function(e,a){for(var n=["请选择年龄"],t=e;t<=a;t++)n.push("".concat(t));return n}(18,60);a.years=r;var u=["请选择学历","小学","初中","高中","全日制专科","全日制本科","硕士研究生","博士研究生"];a.educations=u;var l=[{val:1,label:"普通会员"},{val:2,label:"银卡会员"},{val:3,label:"金卡会员"},{val:4,label:"砖石会员"},{val:5,label:"黑卡会员"}];a.Vips=l;var p=[{val:"",label:"请选择婚姻状况"},{val:1,label:"未婚"},{val:2,label:"离异"},{val:3,label:"丧偶"}];a.marrys=p;var v=function(e,a){for(var n=["请选择工作年限"],t=e;t<=a;t++)n.push("".concat(t));return n}(1,20);a.jobYars=v;var m=function(e,a){for(var n=["请选择活动人数"],t=e;t<=a;t++)n.push("".concat(t));return n}(1,100);a.activeUser=m},"66fd":function(e,a,n){"use strict";n.r(a),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function t(e){return void 0===e||null===e}function r(e){return void 0!==e&&null!==e}function u(e){return!0===e}function l(e){return!1===e}function p(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function v(e){return null!==e&&"object"===typeof e}var m=Object.prototype.toString;function o(e){return"[object Object]"===m.call(e)}function i(e){return"[object RegExp]"===m.call(e)}function s(e){var a=parseFloat(String(e));return a>=0&&Math.floor(a)===a&&isFinite(e)}function c(e){return r(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function f(e){return null==e?"":Array.isArray(e)||o(e)&&e.toString===m?JSON.stringify(e,null,2):String(e)}function d(e){var a=parseFloat(e);return isNaN(a)?e:a}function h(e,a){for(var n=Object.create(null),t=e.split(","),r=0;r<t.length;r++)n[t[r]]=!0;return a?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}h("slot,component",!0);var g=h("key,ref,slot,slot-scope,is");function y(e,a){if(e.length){var n=e.indexOf(a);if(n>-1)return e.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(e,a){return _.call(e,a)}function w(e){var a=Object.create(null);return function(n){var t=a[n];return t||(a[n]=e(n))}}var $=/-(\w)/g,x=w(function(e){return e.replace($,function(e,a){return a?a.toUpperCase():""})}),k=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),O=/\B([A-Z])/g,S=w(function(e){return e.replace(O,"-$1").toLowerCase()});function A(e,a){function n(n){var t=arguments.length;return t?t>1?e.apply(a,arguments):e.call(a,n):e.call(a)}return n._length=e.length,n}function T(e,a){return e.bind(a)}var j=Function.prototype.bind?T:A;function D(e,a){a=a||0;var n=e.length-a,t=new Array(n);while(n--)t[n]=e[n+a];return t}function P(e,a){for(var n in a)e[n]=a[n];return e}function E(e){for(var a={},n=0;n<e.length;n++)e[n]&&P(a,e[n]);return a}function C(e,a,n){}var I=function(e,a,n){return!1},B=function(e){return e};function R(e,a){if(e===a)return!0;var n=v(e),t=v(a);if(!n||!t)return!n&&!t&&String(e)===String(a);try{var r=Array.isArray(e),u=Array.isArray(a);if(r&&u)return e.length===a.length&&e.every(function(e,n){return R(e,a[n])});if(e instanceof Date&&a instanceof Date)return e.getTime()===a.getTime();if(r||u)return!1;var l=Object.keys(e),p=Object.keys(a);return l.length===p.length&&l.every(function(n){return R(e[n],a[n])})}catch(m){return!1}}function N(e,a){for(var n=0;n<e.length;n++)if(R(e[n],a))return n;return-1}function M(e){var a=!1;return function(){a||(a=!0,e.apply(this,arguments))}}var U=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],L={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:C,parsePlatformTagName:B,mustUseProp:I,async:!0,_lifecycleHooks:q},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(e){var a=(e+"").charCodeAt(0);return 36===a||95===a}function H(e,a,n,t){Object.defineProperty(e,a,{value:n,enumerable:!!t,writable:!0,configurable:!0})}var W=new RegExp("[^"+V.source+".$_\\d]");function z(e){if(!W.test(e)){var a=e.split(".");return function(e){for(var n=0;n<a.length;n++){if(!e)return;e=e[a[n]]}return e}}}var J,X="__proto__"in{},Y="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,G=K&&WXEnvironment.platform.toLowerCase(),Q=Y&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),ee=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),ae=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===G),ne=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(Y)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(ar){}var re=function(){return void 0===J&&(J=!Y&&!K&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),J},ue=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function le(e){return"function"===typeof e&&/native code/.test(e.toString())}var pe,ve="undefined"!==typeof Symbol&&le(Symbol)&&"undefined"!==typeof Reflect&&le(Reflect.ownKeys);pe="undefined"!==typeof Set&&le(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=C,oe=0,ie=function(){this.id=oe++,this.subs=[]};function se(e){ie.SharedObject.targetStack.push(e),ie.SharedObject.target=e}function ce(){ie.SharedObject.targetStack.pop(),ie.SharedObject.target=ie.SharedObject.targetStack[ie.SharedObject.targetStack.length-1]}ie.prototype.addSub=function(e){this.subs.push(e)},ie.prototype.removeSub=function(e){y(this.subs,e)},ie.prototype.depend=function(){ie.SharedObject.target&&ie.SharedObject.target.addDep(this)},ie.prototype.notify=function(){var e=this.subs.slice();for(var a=0,n=e.length;a<n;a++)e[a].update()},ie.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ie.SharedObject.target=null,ie.SharedObject.targetStack=[];var fe=function(e,a,n,t,r,u,l,p){this.tag=e,this.data=a,this.children=n,this.text=t,this.elm=r,this.ns=void 0,this.context=u,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=a&&a.key,this.componentOptions=l,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=p,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(fe.prototype,de);var he=function(e){void 0===e&&(e="");var a=new fe;return a.text=e,a.isComment=!0,a};function ge(e){return new fe(void 0,void 0,void 0,String(e))}function ye(e){var a=new fe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return a.ns=e.ns,a.isStatic=e.isStatic,a.key=e.key,a.isComment=e.isComment,a.fnContext=e.fnContext,a.fnOptions=e.fnOptions,a.fnScopeId=e.fnScopeId,a.asyncMeta=e.asyncMeta,a.isCloned=!0,a}var _e=Array.prototype,be=Object.create(_e),we=["push","pop","shift","unshift","splice","sort","reverse"];we.forEach(function(e){var a=_e[e];H(be,e,function(){var n=[],t=arguments.length;while(t--)n[t]=arguments[t];var r,u=a.apply(this,n),l=this.__ob__;switch(e){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&l.observeArray(r),l.dep.notify(),u})});var $e=Object.getOwnPropertyNames(be),xe=!0;function ke(e){xe=e}var Oe=function(e){this.value=e,this.dep=new ie,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(X?e.push!==e.__proto__.push?Ae(e,be,$e):Se(e,be):Ae(e,be,$e),this.observeArray(e)):this.walk(e)};function Se(e,a){e.__proto__=a}function Ae(e,a,n){for(var t=0,r=n.length;t<r;t++){var u=n[t];H(e,u,a[u])}}function Te(e,a){var n;if(v(e)&&!(e instanceof fe))return b(e,"__ob__")&&e.__ob__ instanceof Oe?n=e.__ob__:xe&&!re()&&(Array.isArray(e)||o(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Oe(e)),a&&n&&n.vmCount++,n}function je(e,a,n,t,r){var u=new ie,l=Object.getOwnPropertyDescriptor(e,a);if(!l||!1!==l.configurable){var p=l&&l.get,v=l&&l.set;p&&!v||2!==arguments.length||(n=e[a]);var m=!r&&Te(n);Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:function(){var a=p?p.call(e):n;return ie.SharedObject.target&&(u.depend(),m&&(m.dep.depend(),Array.isArray(a)&&Ee(a))),a},set:function(a){var t=p?p.call(e):n;a===t||a!==a&&t!==t||p&&!v||(v?v.call(e,a):n=a,m=!r&&Te(a),u.notify())}})}}function De(e,a,n){if(Array.isArray(e)&&s(a))return e.length=Math.max(e.length,a),e.splice(a,1,n),n;if(a in e&&!(a in Object.prototype))return e[a]=n,n;var t=e.__ob__;return e._isVue||t&&t.vmCount?n:t?(je(t.value,a,n),t.dep.notify(),n):(e[a]=n,n)}function Pe(e,a){if(Array.isArray(e)&&s(a))e.splice(a,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||b(e,a)&&(delete e[a],n&&n.dep.notify())}}function Ee(e){for(var a=void 0,n=0,t=e.length;n<t;n++)a=e[n],a&&a.__ob__&&a.__ob__.dep.depend(),Array.isArray(a)&&Ee(a)}Oe.prototype.walk=function(e){for(var a=Object.keys(e),n=0;n<a.length;n++)je(e,a[n])},Oe.prototype.observeArray=function(e){for(var a=0,n=e.length;a<n;a++)Te(e[a])};var Ce=L.optionMergeStrategies;function Ie(e,a){if(!a)return e;for(var n,t,r,u=ve?Reflect.ownKeys(a):Object.keys(a),l=0;l<u.length;l++)n=u[l],"__ob__"!==n&&(t=e[n],r=a[n],b(e,n)?t!==r&&o(t)&&o(r)&&Ie(t,r):De(e,n,r));return e}function Be(e,a,n){return n?function(){var t="function"===typeof a?a.call(n,n):a,r="function"===typeof e?e.call(n,n):e;return t?Ie(t,r):r}:a?e?function(){return Ie("function"===typeof a?a.call(this,this):a,"function"===typeof e?e.call(this,this):e)}:a:e}function Re(e,a){var n=a?e?e.concat(a):Array.isArray(a)?a:[a]:e;return n?Ne(n):n}function Ne(e){for(var a=[],n=0;n<e.length;n++)-1===a.indexOf(e[n])&&a.push(e[n]);return a}function Me(e,a,n,t){var r=Object.create(e||null);return a?P(r,a):r}Ce.data=function(e,a,n){return n?Be(e,a,n):a&&"function"!==typeof a?e:Be(e,a)},q.forEach(function(e){Ce[e]=Re}),U.forEach(function(e){Ce[e+"s"]=Me}),Ce.watch=function(e,a,n,t){if(e===ne&&(e=void 0),a===ne&&(a=void 0),!a)return Object.create(e||null);if(!e)return a;var r={};for(var u in P(r,e),a){var l=r[u],p=a[u];l&&!Array.isArray(l)&&(l=[l]),r[u]=l?l.concat(p):Array.isArray(p)?p:[p]}return r},Ce.props=Ce.methods=Ce.inject=Ce.computed=function(e,a,n,t){if(!e)return a;var r=Object.create(null);return P(r,e),a&&P(r,a),r},Ce.provide=Be;var Ue=function(e,a){return void 0===a?e:a};function qe(e,a){var n=e.props;if(n){var t,r,u,l={};if(Array.isArray(n)){t=n.length;while(t--)r=n[t],"string"===typeof r&&(u=x(r),l[u]={type:null})}else if(o(n))for(var p in n)r=n[p],u=x(p),l[u]=o(r)?r:{type:r};else 0;e.props=l}}function Le(e,a){var n=e.inject;if(n){var t=e.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)t[n[r]]={from:n[r]};else if(o(n))for(var u in n){var l=n[u];t[u]=o(l)?P({from:u},l):{from:l}}else 0}}function Ve(e){var a=e.directives;if(a)for(var n in a){var t=a[n];"function"===typeof t&&(a[n]={bind:t,update:t})}}function Fe(e,a,n){if("function"===typeof a&&(a=a.options),qe(a,n),Le(a,n),Ve(a),!a._base&&(a.extends&&(e=Fe(e,a.extends,n)),a.mixins))for(var t=0,r=a.mixins.length;t<r;t++)e=Fe(e,a.mixins[t],n);var u,l={};for(u in e)p(u);for(u in a)b(e,u)||p(u);function p(t){var r=Ce[t]||Ue;l[t]=r(e[t],a[t],n,t)}return l}function He(e,a,n,t){if("string"===typeof n){var r=e[a];if(b(r,n))return r[n];var u=x(n);if(b(r,u))return r[u];var l=k(u);if(b(r,l))return r[l];var p=r[n]||r[u]||r[l];return p}}function We(e,a,n,t){var r=a[e],u=!b(n,e),l=n[e],p=Ye(Boolean,r.type);if(p>-1)if(u&&!b(r,"default"))l=!1;else if(""===l||l===S(e)){var v=Ye(String,r.type);(v<0||p<v)&&(l=!0)}if(void 0===l){l=ze(t,r,e);var m=xe;ke(!0),Te(l),ke(m)}return l}function ze(e,a,n){if(b(a,"default")){var t=a.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof t&&"Function"!==Je(a.type)?t.call(e):t}}function Je(e){var a=e&&e.toString().match(/^\s*function (\w+)/);return a?a[1]:""}function Xe(e,a){return Je(e)===Je(a)}function Ye(e,a){if(!Array.isArray(a))return Xe(a,e)?0:-1;for(var n=0,t=a.length;n<t;n++)if(Xe(a[n],e))return n;return-1}function Ke(e,a,n){se();try{if(a){var t=a;while(t=t.$parent){var r=t.$options.errorCaptured;if(r)for(var u=0;u<r.length;u++)try{var l=!1===r[u].call(t,e,a,n);if(l)return}catch(ar){Qe(ar,t,"errorCaptured hook")}}}Qe(e,a,n)}finally{ce()}}function Ge(e,a,n,t,r){var u;try{u=n?e.apply(a,n):e.call(a),u&&!u._isVue&&c(u)&&!u._handled&&(u.catch(function(e){return Ke(e,t,r+" (Promise/async)")}),u._handled=!0)}catch(ar){Ke(ar,t,r)}return u}function Qe(e,a,n){if(L.errorHandler)try{return L.errorHandler.call(null,e,a,n)}catch(ar){ar!==e&&Ze(ar,null,"config.errorHandler")}Ze(e,a,n)}function Ze(e,a,n){if(!Y&&!K||"undefined"===typeof console)throw e;console.error(e)}var ea,aa=[],na=!1;function ta(){na=!1;var e=aa.slice(0);aa.length=0;for(var a=0;a<e.length;a++)e[a]()}if("undefined"!==typeof Promise&&le(Promise)){var ra=Promise.resolve();ea=function(){ra.then(ta),ae&&setTimeout(C)}}else if(Z||"undefined"===typeof MutationObserver||!le(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ea="undefined"!==typeof setImmediate&&le(setImmediate)?function(){setImmediate(ta)}:function(){setTimeout(ta,0)};else{var ua=1,la=new MutationObserver(ta),pa=document.createTextNode(String(ua));la.observe(pa,{characterData:!0}),ea=function(){ua=(ua+1)%2,pa.data=String(ua)}}function va(e,a){var n;if(aa.push(function(){if(e)try{e.call(a)}catch(ar){Ke(ar,a,"nextTick")}else n&&n(a)}),na||(na=!0,ea()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}var ma=new pe;function oa(e){ia(e,ma),ma.clear()}function ia(e,a){var n,t,r=Array.isArray(e);if(!(!r&&!v(e)||Object.isFrozen(e)||e instanceof fe)){if(e.__ob__){var u=e.__ob__.dep.id;if(a.has(u))return;a.add(u)}if(r){n=e.length;while(n--)ia(e[n],a)}else{t=Object.keys(e),n=t.length;while(n--)ia(e[t[n]],a)}}}var sa=w(function(e){var a="&"===e.charAt(0);e=a?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:n,capture:t,passive:a}});function ca(e,a){function n(){var e=arguments,t=n.fns;if(!Array.isArray(t))return Ge(t,null,arguments,a,"v-on handler");for(var r=t.slice(),u=0;u<r.length;u++)Ge(r[u],null,e,a,"v-on handler")}return n.fns=e,n}function fa(e,a,n,r,l,p){var v,m,o,i;for(v in e)m=e[v],o=a[v],i=sa(v),t(m)||(t(o)?(t(m.fns)&&(m=e[v]=ca(m,p)),u(i.once)&&(m=e[v]=l(i.name,m,i.capture)),n(i.name,m,i.capture,i.passive,i.params)):m!==o&&(o.fns=m,e[v]=o));for(v in a)t(e[v])&&(i=sa(v),r(i.name,a[v],i.capture))}function da(e,a,n){var u=a.options.props;if(!t(u)){var l={},p=e.attrs,v=e.props;if(r(p)||r(v))for(var m in u){var o=S(m);ha(l,v,m,o,!0)||ha(l,p,m,o,!1)}return l}}function ha(e,a,n,t,u){if(r(a)){if(b(a,n))return e[n]=a[n],u||delete a[n],!0;if(b(a,t))return e[n]=a[t],u||delete a[t],!0}return!1}function ga(e){for(var a=0;a<e.length;a++)if(Array.isArray(e[a]))return Array.prototype.concat.apply([],e);return e}function ya(e){return p(e)?[ge(e)]:Array.isArray(e)?ba(e):void 0}function _a(e){return r(e)&&r(e.text)&&l(e.isComment)}function ba(e,a){var n,l,v,m,o=[];for(n=0;n<e.length;n++)l=e[n],t(l)||"boolean"===typeof l||(v=o.length-1,m=o[v],Array.isArray(l)?l.length>0&&(l=ba(l,(a||"")+"_"+n),_a(l[0])&&_a(m)&&(o[v]=ge(m.text+l[0].text),l.shift()),o.push.apply(o,l)):p(l)?_a(m)?o[v]=ge(m.text+l):""!==l&&o.push(ge(l)):_a(l)&&_a(m)?o[v]=ge(m.text+l.text):(u(e._isVList)&&r(l.tag)&&t(l.key)&&r(a)&&(l.key="__vlist"+a+"_"+n+"__"),o.push(l)));return o}function wa(e){var a=e.$options.provide;a&&(e._provided="function"===typeof a?a.call(e):a)}function $a(e){var a=xa(e.$options.inject,e);a&&(ke(!1),Object.keys(a).forEach(function(n){je(e,n,a[n])}),ke(!0))}function xa(e,a){if(e){for(var n=Object.create(null),t=ve?Reflect.ownKeys(e):Object.keys(e),r=0;r<t.length;r++){var u=t[r];if("__ob__"!==u){var l=e[u].from,p=a;while(p){if(p._provided&&b(p._provided,l)){n[u]=p._provided[l];break}p=p.$parent}if(!p)if("default"in e[u]){var v=e[u].default;n[u]="function"===typeof v?v.call(a):v}else 0}}return n}}function ka(e,a){if(!e||!e.length)return{};for(var n={},t=0,r=e.length;t<r;t++){var u=e[t],l=u.data;if(l&&l.attrs&&l.attrs.slot&&delete l.attrs.slot,u.context!==a&&u.fnContext!==a||!l||null==l.slot)u.asyncMeta&&u.asyncMeta.data&&"page"===u.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(u):(n.default||(n.default=[])).push(u);else{var p=l.slot,v=n[p]||(n[p]=[]);"template"===u.tag?v.push.apply(v,u.children||[]):v.push(u)}}for(var m in n)n[m].every(Oa)&&delete n[m];return n}function Oa(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Sa(e,a,t){var r,u=Object.keys(a).length>0,l=e?!!e.$stable:!u,p=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(l&&t&&t!==n&&p===t.$key&&!u&&!t.$hasNormal)return t;for(var v in r={},e)e[v]&&"$"!==v[0]&&(r[v]=Aa(a,v,e[v]))}else r={};for(var m in a)m in r||(r[m]=Ta(a,m));return e&&Object.isExtensible(e)&&(e._normalized=r),H(r,"$stable",l),H(r,"$key",p),H(r,"$hasNormal",u),r}function Aa(e,a,n){var t=function(){var e=arguments.length?n.apply(null,arguments):n({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:ya(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,a,{get:t,enumerable:!0,configurable:!0}),t}function Ta(e,a){return function(){return e[a]}}function ja(e,a){var n,t,u,l,p;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),t=0,u=e.length;t<u;t++)n[t]=a(e[t],t);else if("number"===typeof e)for(n=new Array(e),t=0;t<e;t++)n[t]=a(t+1,t);else if(v(e))if(ve&&e[Symbol.iterator]){n=[];var m=e[Symbol.iterator](),o=m.next();while(!o.done)n.push(a(o.value,n.length)),o=m.next()}else for(l=Object.keys(e),n=new Array(l.length),t=0,u=l.length;t<u;t++)p=l[t],n[t]=a(e[p],p,t);return r(n)||(n=[]),n._isVList=!0,n}function Da(e,a,n,t){var r,u=this.$scopedSlots[e];u?(n=n||{},t&&(n=P(P({},t),n)),r=u(n)||a):r=this.$slots[e]||a;var l=n&&n.slot;return l?this.$createElement("template",{slot:l},r):r}function Pa(e){return He(this.$options,"filters",e,!0)||B}function Ea(e,a){return Array.isArray(e)?-1===e.indexOf(a):e!==a}function Ca(e,a,n,t,r){var u=L.keyCodes[a]||n;return r&&t&&!L.keyCodes[a]?Ea(r,t):u?Ea(u,e):t?S(t)!==a:void 0}function Ia(e,a,n,t,r){if(n)if(v(n)){var u;Array.isArray(n)&&(n=E(n));var l=function(l){if("class"===l||"style"===l||g(l))u=e;else{var p=e.attrs&&e.attrs.type;u=t||L.mustUseProp(a,p,l)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var v=x(l),m=S(l);if(!(v in u)&&!(m in u)&&(u[l]=n[l],r)){var o=e.on||(e.on={});o["update:"+l]=function(e){n[l]=e}}};for(var p in n)l(p)}else;return e}function Ba(e,a){var n=this._staticTrees||(this._staticTrees=[]),t=n[e];return t&&!a?t:(t=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Na(t,"__static__"+e,!1),t)}function Ra(e,a,n){return Na(e,"__once__"+a+(n?"_"+n:""),!0),e}function Na(e,a,n){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&Ma(e[t],a+"_"+t,n);else Ma(e,a,n)}function Ma(e,a,n){e.isStatic=!0,e.key=a,e.isOnce=n}function Ua(e,a){if(a)if(o(a)){var n=e.on=e.on?P({},e.on):{};for(var t in a){var r=n[t],u=a[t];n[t]=r?[].concat(r,u):u}}else;return e}function qa(e,a,n,t){a=a||{$stable:!n};for(var r=0;r<e.length;r++){var u=e[r];Array.isArray(u)?qa(u,a,n):u&&(u.proxy&&(u.fn.proxy=!0),a[u.key]=u.fn)}return t&&(a.$key=t),a}function La(e,a){for(var n=0;n<a.length;n+=2){var t=a[n];"string"===typeof t&&t&&(e[a[n]]=a[n+1])}return e}function Va(e,a){return"string"===typeof e?a+e:e}function Fa(e){e._o=Ra,e._n=d,e._s=f,e._l=ja,e._t=Da,e._q=R,e._i=N,e._m=Ba,e._f=Pa,e._k=Ca,e._b=Ia,e._v=ge,e._e=he,e._u=qa,e._g=Ua,e._d=La,e._p=Va}function Ha(e,a,t,r,l){var p,v=this,m=l.options;b(r,"_uid")?(p=Object.create(r),p._original=r):(p=r,r=r._original);var o=u(m._compiled),i=!o;this.data=e,this.props=a,this.children=t,this.parent=r,this.listeners=e.on||n,this.injections=xa(m.inject,r),this.slots=function(){return v.$slots||Sa(e.scopedSlots,v.$slots=ka(t,r)),v.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Sa(e.scopedSlots,this.slots())}}),o&&(this.$options=m,this.$slots=this.slots(),this.$scopedSlots=Sa(e.scopedSlots,this.$slots)),m._scopeId?this._c=function(e,a,n,t){var u=tn(p,e,a,n,t,i);return u&&!Array.isArray(u)&&(u.fnScopeId=m._scopeId,u.fnContext=r),u}:this._c=function(e,a,n,t){return tn(p,e,a,n,t,i)}}function Wa(e,a,t,u,l){var p=e.options,v={},m=p.props;if(r(m))for(var o in m)v[o]=We(o,m,a||n);else r(t.attrs)&&Ja(v,t.attrs),r(t.props)&&Ja(v,t.props);var i=new Ha(t,v,l,u,e),s=p.render.call(null,i._c,i);if(s instanceof fe)return za(s,t,i.parent,p,i);if(Array.isArray(s)){for(var c=ya(s)||[],f=new Array(c.length),d=0;d<c.length;d++)f[d]=za(c[d],t,i.parent,p,i);return f}}function za(e,a,n,t,r){var u=ye(e);return u.fnContext=n,u.fnOptions=t,a.slot&&((u.data||(u.data={})).slot=a.slot),u}function Ja(e,a){for(var n in a)e[x(n)]=a[n]}Fa(Ha.prototype);var Xa={init:function(e,a){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Xa.prepatch(n,n)}else{var t=e.componentInstance=Ga(e,xn);t.$mount(a?e.elm:void 0,a)}},prepatch:function(e,a){var n=a.componentOptions,t=a.componentInstance=e.componentInstance;An(t,n.propsData,n.listeners,a,n.children)},insert:function(e){var a=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),e.data.keepAlive&&(a._isMounted?Fn(n):jn(n,!0))},destroy:function(e){var a=e.componentInstance;a._isDestroyed||(e.data.keepAlive?Dn(a,!0):a.$destroy())}},Ya=Object.keys(Xa);function Ka(e,a,n,l,p){if(!t(e)){var m=n.$options._base;if(v(e)&&(e=m.extend(e)),"function"===typeof e){var o;if(t(e.cid)&&(o=e,e=fn(o,m),void 0===e))return cn(o,a,n,l,p);a=a||{},st(e),r(a.model)&&en(e.options,a);var i=da(a,e,p);if(u(e.options.functional))return Wa(e,i,a,n,l);var s=a.on;if(a.on=a.nativeOn,u(e.options.abstract)){var c=a.slot;a={},c&&(a.slot=c)}Qa(a);var f=e.options.name||p,d=new fe("vue-component-"+e.cid+(f?"-"+f:""),a,void 0,void 0,void 0,n,{Ctor:e,propsData:i,listeners:s,tag:p,children:l},o);return d}}}function Ga(e,a){var n={_isComponent:!0,_parentVnode:e,parent:a},t=e.data.inlineTemplate;return r(t)&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(n)}function Qa(e){for(var a=e.hook||(e.hook={}),n=0;n<Ya.length;n++){var t=Ya[n],r=a[t],u=Xa[t];r===u||r&&r._merged||(a[t]=r?Za(u,r):u)}}function Za(e,a){var n=function(n,t){e(n,t),a(n,t)};return n._merged=!0,n}function en(e,a){var n=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(a.attrs||(a.attrs={}))[n]=a.model.value;var u=a.on||(a.on={}),l=u[t],p=a.model.callback;r(l)?(Array.isArray(l)?-1===l.indexOf(p):l!==p)&&(u[t]=[p].concat(l)):u[t]=p}var an=1,nn=2;function tn(e,a,n,t,r,l){return(Array.isArray(n)||p(n))&&(r=t,t=n,n=void 0),u(l)&&(r=nn),rn(e,a,n,t,r)}function rn(e,a,n,t,u){if(r(n)&&r(n.__ob__))return he();if(r(n)&&r(n.is)&&(a=n.is),!a)return he();var l,p,v;(Array.isArray(t)&&"function"===typeof t[0]&&(n=n||{},n.scopedSlots={default:t[0]},t.length=0),u===nn?t=ya(t):u===an&&(t=ga(t)),"string"===typeof a)?(p=e.$vnode&&e.$vnode.ns||L.getTagNamespace(a),l=L.isReservedTag(a)?new fe(L.parsePlatformTagName(a),n,t,void 0,void 0,e):n&&n.pre||!r(v=He(e.$options,"components",a))?new fe(a,n,t,void 0,void 0,e):Ka(v,n,e,t,a)):l=Ka(a,n,e,t);return Array.isArray(l)?l:r(l)?(r(p)&&un(l,p),r(n)&&ln(n),l):he()}function un(e,a,n){if(e.ns=a,"foreignObject"===e.tag&&(a=void 0,n=!0),r(e.children))for(var l=0,p=e.children.length;l<p;l++){var v=e.children[l];r(v.tag)&&(t(v.ns)||u(n)&&"svg"!==v.tag)&&un(v,a,n)}}function ln(e){v(e.style)&&oa(e.style),v(e.class)&&oa(e.class)}function pn(e){e._vnode=null,e._staticTrees=null;var a=e.$options,t=e.$vnode=a._parentVnode,r=t&&t.context;e.$slots=ka(a._renderChildren,r),e.$scopedSlots=n,e._c=function(a,n,t,r){return tn(e,a,n,t,r,!1)},e.$createElement=function(a,n,t,r){return tn(e,a,n,t,r,!0)};var u=t&&t.data;je(e,"$attrs",u&&u.attrs||n,null,!0),je(e,"$listeners",a._parentListeners||n,null,!0)}var vn,mn=null;function on(e){Fa(e.prototype),e.prototype.$nextTick=function(e){return va(e,this)},e.prototype._render=function(){var e,a=this,n=a.$options,t=n.render,r=n._parentVnode;r&&(a.$scopedSlots=Sa(r.data.scopedSlots,a.$slots,a.$scopedSlots)),a.$vnode=r;try{mn=a,e=t.call(a._renderProxy,a.$createElement)}catch(ar){Ke(ar,a,"render"),e=a._vnode}finally{mn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof fe||(e=he()),e.parent=r,e}}function sn(e,a){return(e.__esModule||ve&&"Module"===e[Symbol.toStringTag])&&(e=e.default),v(e)?a.extend(e):e}function cn(e,a,n,t,r){var u=he();return u.asyncFactory=e,u.asyncMeta={data:a,context:n,children:t,tag:r},u}function fn(e,a){if(u(e.error)&&r(e.errorComp))return e.errorComp;if(r(e.resolved))return e.resolved;var n=mn;if(n&&r(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),u(e.loading)&&r(e.loadingComp))return e.loadingComp;if(n&&!r(e.owners)){var l=e.owners=[n],p=!0,m=null,o=null;n.$on("hook:destroyed",function(){return y(l,n)});var i=function(e){for(var a=0,n=l.length;a<n;a++)l[a].$forceUpdate();e&&(l.length=0,null!==m&&(clearTimeout(m),m=null),null!==o&&(clearTimeout(o),o=null))},s=M(function(n){e.resolved=sn(n,a),p?l.length=0:i(!0)}),f=M(function(a){r(e.errorComp)&&(e.error=!0,i(!0))}),d=e(s,f);return v(d)&&(c(d)?t(e.resolved)&&d.then(s,f):c(d.component)&&(d.component.then(s,f),r(d.error)&&(e.errorComp=sn(d.error,a)),r(d.loading)&&(e.loadingComp=sn(d.loading,a),0===d.delay?e.loading=!0:m=setTimeout(function(){m=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,i(!1))},d.delay||200)),r(d.timeout)&&(o=setTimeout(function(){o=null,t(e.resolved)&&f(null)},d.timeout)))),p=!1,e.loading?e.loadingComp:e.resolved}}function dn(e){return e.isComment&&e.asyncFactory}function hn(e){if(Array.isArray(e))for(var a=0;a<e.length;a++){var n=e[a];if(r(n)&&(r(n.componentOptions)||dn(n)))return n}}function gn(e){e._events=Object.create(null),e._hasHookEvent=!1;var a=e.$options._parentListeners;a&&wn(e,a)}function yn(e,a){vn.$on(e,a)}function _n(e,a){vn.$off(e,a)}function bn(e,a){var n=vn;return function t(){var r=a.apply(null,arguments);null!==r&&n.$off(e,t)}}function wn(e,a,n){vn=e,fa(a,n||{},yn,_n,bn,e),vn=void 0}function $n(e){var a=/^hook:/;e.prototype.$on=function(e,n){var t=this;if(Array.isArray(e))for(var r=0,u=e.length;r<u;r++)t.$on(e[r],n);else(t._events[e]||(t._events[e]=[])).push(n),a.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,a){var n=this;function t(){n.$off(e,t),a.apply(n,arguments)}return t.fn=a,n.$on(e,t),n},e.prototype.$off=function(e,a){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var t=0,r=e.length;t<r;t++)n.$off(e[t],a);return n}var u,l=n._events[e];if(!l)return n;if(!a)return n._events[e]=null,n;var p=l.length;while(p--)if(u=l[p],u===a||u.fn===a){l.splice(p,1);break}return n},e.prototype.$emit=function(e){var a=this,n=a._events[e];if(n){n=n.length>1?D(n):n;for(var t=D(arguments,1),r='event handler for "'+e+'"',u=0,l=n.length;u<l;u++)Ge(n[u],a,t,a,r)}return a}}var xn=null;function kn(e){var a=xn;return xn=e,function(){xn=a}}function On(e){var a=e.$options,n=a.parent;if(n&&!a.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Sn(e){e.prototype._update=function(e,a){var n=this,t=n.$el,r=n._vnode,u=kn(n);n._vnode=e,n.$el=r?n.__patch__(r,e):n.__patch__(n.$el,e,a,!1),u(),t&&(t.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Pn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var a=e.$parent;!a||a._isBeingDestroyed||e.$options.abstract||y(a.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Pn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function An(e,a,t,r,u){var l=r.data.scopedSlots,p=e.$scopedSlots,v=!!(l&&!l.$stable||p!==n&&!p.$stable||l&&e.$scopedSlots.$key!==l.$key),m=!!(u||e.$options._renderChildren||v);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=u,e.$attrs=r.data.attrs||n,e.$listeners=t||n,a&&e.$options.props){ke(!1);for(var o=e._props,i=e.$options._propKeys||[],s=0;s<i.length;s++){var c=i[s],f=e.$options.props;o[c]=We(c,f,a,e)}ke(!0),e.$options.propsData=a}t=t||n;var d=e.$options._parentListeners;e.$options._parentListeners=t,wn(e,t,d),m&&(e.$slots=ka(u,r.context),e.$forceUpdate())}function Tn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function jn(e,a){if(a){if(e._directInactive=!1,Tn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)jn(e.$children[n]);Pn(e,"activated")}}function Dn(e,a){if((!a||(e._directInactive=!0,!Tn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Dn(e.$children[n]);Pn(e,"deactivated")}}function Pn(e,a){se();var n=e.$options[a],t=a+" hook";if(n)for(var r=0,u=n.length;r<u;r++)Ge(n[r],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+a),ce()}var En=[],Cn=[],In={},Bn=!1,Rn=!1,Nn=0;function Mn(){Nn=En.length=Cn.length=0,In={},Bn=Rn=!1}var Un=Date.now;if(Y&&!Z){var qn=window.performance;qn&&"function"===typeof qn.now&&Un()>document.createEvent("Event").timeStamp&&(Un=function(){return qn.now()})}function Ln(){var e,a;for(Un(),Rn=!0,En.sort(function(e,a){return e.id-a.id}),Nn=0;Nn<En.length;Nn++)e=En[Nn],e.before&&e.before(),a=e.id,In[a]=null,e.run();var n=Cn.slice(),t=En.slice();Mn(),Hn(n),Vn(t),ue&&L.devtools&&ue.emit("flush")}function Vn(e){var a=e.length;while(a--){var n=e[a],t=n.vm;t._watcher===n&&t._isMounted&&!t._isDestroyed&&Pn(t,"updated")}}function Fn(e){e._inactive=!1,Cn.push(e)}function Hn(e){for(var a=0;a<e.length;a++)e[a]._inactive=!0,jn(e[a],!0)}function Wn(e){var a=e.id;if(null==In[a]){if(In[a]=!0,Rn){var n=En.length-1;while(n>Nn&&En[n].id>e.id)n--;En.splice(n+1,0,e)}else En.push(e);Bn||(Bn=!0,va(Ln))}}var zn=0,Jn=function(e,a,n,t,r){this.vm=e,r&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pe,this.newDepIds=new pe,this.expression="","function"===typeof a?this.getter=a:(this.getter=z(a),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var e;se(this);var a=this.vm;try{e=this.getter.call(a,a)}catch(ar){if(!this.user)throw ar;Ke(ar,a,'getter for watcher "'+this.expression+'"')}finally{this.deep&&oa(e),ce(),this.cleanupDeps()}return e},Jn.prototype.addDep=function(e){var a=e.id;this.newDepIds.has(a)||(this.newDepIds.add(a),this.newDeps.push(e),this.depIds.has(a)||e.addSub(this))},Jn.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var a=this.deps[e];this.newDepIds.has(a.id)||a.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Wn(this)},Jn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||v(e)||this.deep){var a=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,a)}catch(ar){Ke(ar,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,a)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Xn={enumerable:!0,configurable:!0,get:C,set:C};function Yn(e,a,n){Xn.get=function(){return this[a][n]},Xn.set=function(e){this[a][n]=e},Object.defineProperty(e,n,Xn)}function Kn(e){e._watchers=[];var a=e.$options;a.props&&Gn(e,a.props),a.methods&&ut(e,a.methods),a.data?Qn(e):Te(e._data={},!0),a.computed&&at(e,a.computed),a.watch&&a.watch!==ne&&lt(e,a.watch)}function Gn(e,a){var n=e.$options.propsData||{},t=e._props={},r=e.$options._propKeys=[],u=!e.$parent;u||ke(!1);var l=function(u){r.push(u);var l=We(u,a,n,e);je(t,u,l),u in e||Yn(e,"_props",u)};for(var p in a)l(p);ke(!0)}function Qn(e){var a=e.$options.data;a=e._data="function"===typeof a?Zn(a,e):a||{},o(a)||(a={});var n=Object.keys(a),t=e.$options.props,r=(e.$options.methods,n.length);while(r--){var u=n[r];0,t&&b(t,u)||F(u)||Yn(e,"_data",u)}Te(a,!0)}function Zn(e,a){se();try{return e.call(a,a)}catch(ar){return Ke(ar,a,"data()"),{}}finally{ce()}}var et={lazy:!0};function at(e,a){var n=e._computedWatchers=Object.create(null),t=re();for(var r in a){var u=a[r],l="function"===typeof u?u:u.get;0,t||(n[r]=new Jn(e,l||C,C,et)),r in e||nt(e,r,u)}}function nt(e,a,n){var t=!re();"function"===typeof n?(Xn.get=t?tt(a):rt(n),Xn.set=C):(Xn.get=n.get?t&&!1!==n.cache?tt(a):rt(n.get):C,Xn.set=n.set||C),Object.defineProperty(e,a,Xn)}function tt(e){return function(){var a=this._computedWatchers&&this._computedWatchers[e];if(a)return a.dirty&&a.evaluate(),ie.SharedObject.target&&a.depend(),a.value}}function rt(e){return function(){return e.call(this,this)}}function ut(e,a){e.$options.props;for(var n in a)e[n]="function"!==typeof a[n]?C:j(a[n],e)}function lt(e,a){for(var n in a){var t=a[n];if(Array.isArray(t))for(var r=0;r<t.length;r++)pt(e,n,t[r]);else pt(e,n,t)}}function pt(e,a,n,t){return o(n)&&(t=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(a,n,t)}function vt(e){var a={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",a),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=De,e.prototype.$delete=Pe,e.prototype.$watch=function(e,a,n){var t=this;if(o(a))return pt(t,e,a,n);n=n||{},n.user=!0;var r=new Jn(t,e,a,n);if(n.immediate)try{a.call(t,r.value)}catch(u){Ke(u,t,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var mt=0;function ot(e){e.prototype._init=function(e){var a=this;a._uid=mt++,a._isVue=!0,e&&e._isComponent?it(a,e):a.$options=Fe(st(a.constructor),e||{},a),a._renderProxy=a,a._self=a,On(a),gn(a),pn(a),Pn(a,"beforeCreate"),"mp-toutiao"!==a.mpHost&&$a(a),Kn(a),"mp-toutiao"!==a.mpHost&&wa(a),"mp-toutiao"!==a.mpHost&&Pn(a,"created"),a.$options.el&&a.$mount(a.$options.el)}}function it(e,a){var n=e.$options=Object.create(e.constructor.options),t=a._parentVnode;n.parent=a.parent,n._parentVnode=t;var r=t.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,a.render&&(n.render=a.render,n.staticRenderFns=a.staticRenderFns)}function st(e){var a=e.options;if(e.super){var n=st(e.super),t=e.superOptions;if(n!==t){e.superOptions=n;var r=ct(e);r&&P(e.extendOptions,r),a=e.options=Fe(n,e.extendOptions),a.name&&(a.components[a.name]=e)}}return a}function ct(e){var a,n=e.options,t=e.sealedOptions;for(var r in n)n[r]!==t[r]&&(a||(a={}),a[r]=n[r]);return a}function ft(e){this._init(e)}function dt(e){e.use=function(e){var a=this._installedPlugins||(this._installedPlugins=[]);if(a.indexOf(e)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),a.push(e),this}}function ht(e){e.mixin=function(e){return this.options=Fe(this.options,e),this}}function gt(e){e.cid=0;var a=1;e.extend=function(e){e=e||{};var n=this,t=n.cid,r=e._Ctor||(e._Ctor={});if(r[t])return r[t];var u=e.name||n.options.name;var l=function(e){this._init(e)};return l.prototype=Object.create(n.prototype),l.prototype.constructor=l,l.cid=a++,l.options=Fe(n.options,e),l["super"]=n,l.options.props&&yt(l),l.options.computed&&_t(l),l.extend=n.extend,l.mixin=n.mixin,l.use=n.use,U.forEach(function(e){l[e]=n[e]}),u&&(l.options.components[u]=l),l.superOptions=n.options,l.extendOptions=e,l.sealedOptions=P({},l.options),r[t]=l,l}}function yt(e){var a=e.options.props;for(var n in a)Yn(e.prototype,"_props",n)}function _t(e){var a=e.options.computed;for(var n in a)nt(e.prototype,n,a[n])}function bt(e){U.forEach(function(a){e[a]=function(e,n){return n?("component"===a&&o(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===a&&"function"===typeof n&&(n={bind:n,update:n}),this.options[a+"s"][e]=n,n):this.options[a+"s"][e]}})}function wt(e){return e&&(e.Ctor.options.name||e.tag)}function $t(e,a){return Array.isArray(e)?e.indexOf(a)>-1:"string"===typeof e?e.split(",").indexOf(a)>-1:!!i(e)&&e.test(a)}function xt(e,a){var n=e.cache,t=e.keys,r=e._vnode;for(var u in n){var l=n[u];if(l){var p=wt(l.componentOptions);p&&!a(p)&&kt(n,u,t,r)}}}function kt(e,a,n,t){var r=e[a];!r||t&&r.tag===t.tag||r.componentInstance.$destroy(),e[a]=null,y(n,a)}ot(ft),vt(ft),$n(ft),Sn(ft),on(ft);var Ot=[String,RegExp,Array],St={name:"keep-alive",abstract:!0,props:{include:Ot,exclude:Ot,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)kt(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(a){xt(e,function(e){return $t(a,e)})}),this.$watch("exclude",function(a){xt(e,function(e){return!$t(a,e)})})},render:function(){var e=this.$slots.default,a=hn(e),n=a&&a.componentOptions;if(n){var t=wt(n),r=this,u=r.include,l=r.exclude;if(u&&(!t||!$t(u,t))||l&&t&&$t(l,t))return a;var p=this,v=p.cache,m=p.keys,o=null==a.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):a.key;v[o]?(a.componentInstance=v[o].componentInstance,y(m,o),m.push(o)):(v[o]=a,m.push(o),this.max&&m.length>parseInt(this.max)&&kt(v,m[0],m,this._vnode)),a.data.keepAlive=!0}return a||e&&e[0]}},At={KeepAlive:St};function Tt(e){var a={get:function(){return L}};Object.defineProperty(e,"config",a),e.util={warn:me,extend:P,mergeOptions:Fe,defineReactive:je},e.set=De,e.delete=Pe,e.nextTick=va,e.observable=function(e){return Te(e),e},e.options=Object.create(null),U.forEach(function(a){e.options[a+"s"]=Object.create(null)}),e.options._base=e,P(e.options.components,At),dt(e),ht(e),gt(e),bt(e)}Tt(ft),Object.defineProperty(ft.prototype,"$isServer",{get:re}),Object.defineProperty(ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ft,"FunctionalRenderContext",{value:Ha}),ft.version="2.6.10";var jt="[object Array]",Dt="[object Object]";function Pt(e,a){var n={};return Et(e,a),Ct(e,a,"",n),n}function Et(e,a){if(e!==a){var n=Bt(e),t=Bt(a);if(n==Dt&&t==Dt){if(Object.keys(e).length>=Object.keys(a).length)for(var r in a){var u=e[r];void 0===u?e[r]=null:Et(u,a[r])}}else n==jt&&t==jt&&e.length>=a.length&&a.forEach(function(a,n){Et(e[n],a)})}}function Ct(e,a,n,t){if(e!==a){var r=Bt(e),u=Bt(a);if(r==Dt)if(u!=Dt||Object.keys(e).length<Object.keys(a).length)It(t,n,e);else{var l=function(r){var u=e[r],l=a[r],p=Bt(u),v=Bt(l);if(p!=jt&&p!=Dt)u!=a[r]&&It(t,(""==n?"":n+".")+r,u);else if(p==jt)v!=jt?It(t,(""==n?"":n+".")+r,u):u.length<l.length?It(t,(""==n?"":n+".")+r,u):u.forEach(function(e,a){Ct(e,l[a],(""==n?"":n+".")+r+"["+a+"]",t)});else if(p==Dt)if(v!=Dt||Object.keys(u).length<Object.keys(l).length)It(t,(""==n?"":n+".")+r,u);else for(var m in u)Ct(u[m],l[m],(""==n?"":n+".")+r+"."+m,t)};for(var p in e)l(p)}else r==jt?u!=jt?It(t,n,e):e.length<a.length?It(t,n,e):e.forEach(function(e,r){Ct(e,a[r],n+"["+r+"]",t)}):It(t,n,e)}}function It(e,a,n){e[a]=n}function Bt(e){return Object.prototype.toString.call(e)}function Rt(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var n=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<n.length;t++)n[t]()}}function Nt(e){return En.find(function(a){return e._watcher===a})}function Mt(e,a){if(!e.__next_tick_pending&&!Nt(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=e.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+e._uid+"]:nextVueTick")}return va(a,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var r;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(a)try{a.call(e)}catch(ar){Ke(ar,e,"nextTick")}else r&&r(e)}),!a&&"undefined"!==typeof Promise)return new Promise(function(e){r=e})}function Ut(e){var a=Object.create(null),n=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return n.reduce(function(a,n){return a[n]=e[n],a},a),Object.assign(a,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(a["name"]=e.name,a["value"]=e.value),JSON.parse(JSON.stringify(a))}var qt=function(e,a){var n=this;if(null!==a&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,r=Object.create(null);try{r=Ut(this)}catch(p){console.error(p)}r.__webviewId__=t.data.__webviewId__;var u=Object.create(null);Object.keys(r).forEach(function(e){u[e]=t.data[e]});var l=Pt(r,u);Object.keys(l).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(l)),this.__next_tick_pending=!0,t.setData(l,function(){n.__next_tick_pending=!1,Rt(n)})):Rt(this)}};function Lt(){}function Vt(e,a,n){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Lt),e.$options.render||(e.$options.render=Lt),"mp-toutiao"!==e.mpHost&&Pn(e,"beforeMount");var t=function(){e._update(e._render(),n)};return new Jn(e,t,C,{before:function(){e._isMounted&&!e._isDestroyed&&Pn(e,"beforeUpdate")}},!0),n=!1,e}function Ft(e,a){return r(e)||r(a)?Ht(e,Wt(a)):""}function Ht(e,a){return e?a?e+" "+a:e:a||""}function Wt(e){return Array.isArray(e)?zt(e):v(e)?Jt(e):"string"===typeof e?e:""}function zt(e){for(var a,n="",t=0,u=e.length;t<u;t++)r(a=Wt(e[t]))&&""!==a&&(n&&(n+=" "),n+=a);return n}function Jt(e){var a="";for(var n in e)e[n]&&(a&&(a+=" "),a+=n);return a}var Xt=w(function(e){var a={},n=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(t);n.length>1&&(a[n[0].trim()]=n[1].trim())}}),a});function Yt(e){return Array.isArray(e)?E(e):"string"===typeof e?Xt(e):e}var Kt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Gt(e,a){var n=a.split("."),t=n[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===n.length?e[t]:Gt(e[t],n.slice(1).join("."))}function Qt(e){e.config.errorHandler=function(e){console.error(e)};var a=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:D(arguments,1)}),a.apply(this,arguments)},e.prototype.$nextTick=function(e){return Mt(this,e)},Kt.forEach(function(a){e.prototype[a]=function(e){if(this.$scope)return this.$scope[a](e)}}),e.prototype.__init_provide=wa,e.prototype.__init_injections=$a,e.prototype.__call_hook=function(e,a){var n=this;se();var t,r=n.$options[e],u=e+" hook";if(r)for(var l=0,p=r.length;l<p;l++)t=Ge(r[l],n,a?[a]:null,n,u);return n._hasHookEvent&&n.$emit("hook:"+e),ce(),t},e.prototype.__set_model=function(e,a,n,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(n=n.trim()),-1!==t.indexOf("number")&&(n=this._n(n))),e||(e=this),e[a]=n},e.prototype.__set_sync=function(e,a,n){e||(e=this),e[a]=n},e.prototype.__get_orig=function(e){return o(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,a){return Gt(a||this,e)},e.prototype.__get_class=function(e,a){return Ft(a,e)},e.prototype.__get_style=function(e,a){if(!e&&!a)return"";var n=Yt(e),t=a?P(a,n):n;return Object.keys(t).map(function(e){return S(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,a){var n,t,r,u,l;if(Array.isArray(e)){for(n=new Array(e.length),t=0,r=e.length;t<r;t++)n[t]=a(e[t],t);return n}if(v(e)){for(u=Object.keys(e),n=Object.create(null),t=0,r=u.length;t<r;t++)l=u[t],n[l]=a(e[l],l,t);return n}return[]}}var Zt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(e){var a=e.extend;e.extend=function(e){e=e||{};var n=e.methods;return n&&Object.keys(n).forEach(function(a){-1!==Zt.indexOf(a)&&(e[a]=n[a],delete n[a])}),a.call(this,e)};var n=e.config.optionMergeStrategies,t=n.created;Zt.forEach(function(e){n[e]=t}),e.prototype.__lifecycle_hooks__=Zt}ft.prototype.__patch__=qt,ft.prototype.$mount=function(e,a){return Vt(this,e,a)},er(ft),Qt(ft),a["default"]=ft}.call(this,n("c8ba"))},"6e42":function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.createApp=fa,a.createComponent=ka,a.createPage=xa,a.default=void 0;var t=r(n("66fd"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,a){return v(e)||p(e,a)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function p(e,a){var n=[],t=!0,r=!1,u=void 0;try{for(var l,p=e[Symbol.iterator]();!(t=(l=p.next()).done);t=!0)if(n.push(l.value),a&&n.length===a)break}catch(v){r=!0,u=v}finally{try{t||null==p["return"]||p["return"]()}finally{if(r)throw u}}return n}function v(e){if(Array.isArray(e))return e}function m(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e){return c(e)||s(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function c(e){if(Array.isArray(e)){for(var a=0,n=new Array(e.length);a<e.length;a++)n[a]=e[a];return n}}var f=Object.prototype.toString,d=Object.prototype.hasOwnProperty;function h(e){return"function"===typeof e}function g(e){return"string"===typeof e}function y(e){return"[object Object]"===f.call(e)}function _(e,a){return d.call(e,a)}function b(){}function w(e){var a=Object.create(null);return function(n){var t=a[n];return t||(a[n]=e(n))}}var $=/-(\w)/g,x=w(function(e){return e.replace($,function(e,a){return a?a.toUpperCase():""})}),k=["invoke","success","fail","complete","returnValue"],O={},S={};function A(e,a){var n=a?e?e.concat(a):Array.isArray(a)?a:[a]:e;return n?T(n):n}function T(e){for(var a=[],n=0;n<e.length;n++)-1===a.indexOf(e[n])&&a.push(e[n]);return a}function j(e,a){var n=e.indexOf(a);-1!==n&&e.splice(n,1)}function D(e,a){Object.keys(a).forEach(function(n){-1!==k.indexOf(n)&&h(a[n])&&(e[n]=A(e[n],a[n]))})}function P(e,a){e&&a&&Object.keys(a).forEach(function(n){-1!==k.indexOf(n)&&h(a[n])&&j(e[n],a[n])})}function E(e,a){"string"===typeof e&&y(a)?D(S[e]||(S[e]={}),a):y(e)&&D(O,e)}function C(e,a){"string"===typeof e?y(a)?P(S[e],a):delete S[e]:y(e)&&P(O,e)}function I(e){return function(a){return e(a)||a}}function B(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function R(e,a){for(var n=!1,t=0;t<e.length;t++){var r=e[t];if(n)n=Promise.then(I(r));else{var u=r(a);if(B(u)&&(n=Promise.resolve(u)),!1===u)return{then:function(){}}}}return n||{then:function(e){return e(a)}}}function N(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(e[n])){var t=a[n];a[n]=function(a){R(e[n],a).then(function(e){return h(t)&&t(e)||e})}}}),a}function M(e,a){var n=[];Array.isArray(O.returnValue)&&n.push.apply(n,o(O.returnValue));var t=S[e];return t&&Array.isArray(t.returnValue)&&n.push.apply(n,o(t.returnValue)),n.forEach(function(e){a=e(a)||a}),a}function U(e){var a=Object.create(null);Object.keys(O).forEach(function(e){"returnValue"!==e&&(a[e]=O[e].slice())});var n=S[e];return n&&Object.keys(n).forEach(function(e){"returnValue"!==e&&(a[e]=(a[e]||[]).concat(n[e]))}),a}function q(e,a,n){for(var t=arguments.length,r=new Array(t>3?t-3:0),u=3;u<t;u++)r[u-3]=arguments[u];var l=U(e);if(l&&Object.keys(l).length){if(Array.isArray(l.invoke)){var p=R(l.invoke,n);return p.then(function(e){return a.apply(void 0,[N(l,e)].concat(r))})}return a.apply(void 0,[N(l,n)].concat(r))}return a.apply(void 0,[n].concat(r))}var L={returnValue:function(e){return B(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},V=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,H=/^on/;function W(e){return F.test(e)}function z(e){return V.test(e)}function J(e){return H.test(e)&&"onPush"!==e}function X(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function Y(e){return!(W(e)||z(e)||J(e))}function K(e,a){return Y(e)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,r=new Array(t>1?t-1:0),u=1;u<t;u++)r[u-1]=arguments[u];return h(n.success)||h(n.fail)||h(n.complete)?M(e,q.apply(void 0,[e,a,n].concat(r))):M(e,X(new Promise(function(t,u){q.apply(void 0,[e,a,Object.assign({},n,{success:t,fail:u})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var a=this.constructor;return this.then(function(n){return a.resolve(e()).then(function(){return n})},function(n){return a.resolve(e()).then(function(){throw n})})})})))}:a}var G=1e-4,Q=750,Z=!1,ee=0,ae=0;function ne(){var e=wx.getSystemInfoSync(),a=e.platform,n=e.pixelRatio,t=e.windowWidth;ee=t,ae=n,Z="ios"===a}function te(e,a){if(0===ee&&ne(),e=Number(e),0===e)return 0;var n=e/Q*(a||ee);return n<0&&(n=-n),n=Math.floor(n+G),0===n?1!==ae&&Z?.5:1:e<0?-n:n}var re={promiseInterceptor:L},ue=Object.freeze({upx2px:te,interceptors:re,addInterceptor:E,removeInterceptor:C}),le={},pe=[],ve=[],me=["success","fail","cancel","complete"];function oe(e,a,n){return function(t){return a(se(e,t,n))}}function ie(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(a)){var u=!0===r?a:{};for(var l in h(n)&&(n=n(a,u)||{}),a)if(_(n,l)){var p=n[l];h(p)&&(p=p(a[l],a,u)),p?g(p)?u[p]=a[l]:y(p)&&(u[p.name?p.name:l]=p.value):console.warn("app-plus ".concat(e,"暂不支持").concat(l))}else-1!==me.indexOf(l)?u[l]=oe(e,a[l],t):r||(u[l]=a[l]);return u}return h(a)&&(a=oe(e,a,t)),a}function se(e,a,n){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return h(le.returnValue)&&(a=le.returnValue(e,a)),ie(e,a,n,{},t)}function ce(e,a){if(_(le,e)){var n=le[e];return n?function(a,t){var r=n;h(n)&&(r=n(a)),a=ie(e,a,r.args,r.returnValue);var u=[a];"undefined"!==typeof t&&u.push(t);var l=wx[r.name||e].apply(wx,u);return z(e)?se(e,l,r.returnValue,W(e)):l}:function(){console.error("app-plus 暂不支持".concat(e))}}return a}var fe=Object.create(null),de=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function he(e){return function(a){var n=a.fail,t=a.complete,r={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};h(n)&&n(r),h(t)&&t(r)}}de.forEach(function(e){fe[e]=he(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ye(e,a,n){return e[a].apply(e,n)}function _e(){return ye(ge(),"$on",Array.prototype.slice.call(arguments))}function be(){return ye(ge(),"$off",Array.prototype.slice.call(arguments))}function we(){return ye(ge(),"$once",Array.prototype.slice.call(arguments))}function $e(){return ye(ge(),"$emit",Array.prototype.slice.call(arguments))}var xe=Object.freeze({$on:_e,$off:be,$once:we,$emit:$e});function ke(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function Oe(e){e.$processed=!0,e.postMessage=function(a){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:a},e.id)};var a=[];if(e.onMessage=function(e){a.push(e)},e.$consumeMessage=function(e){a.forEach(function(a){return a(e)})},e.__uniapp_mask_id){var n=e.__uniapp_mask,t="0"===e.__uniapp_mask_id?{setStyle:function(e){var a=e.mask;ke("uni-tabview").setMask({color:a})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),r=e.show,u=e.hide,l=e.close,p=function(){t.setStyle({mask:n})},v=function(){t.setStyle({mask:"none"})};e.show=function(){p();for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];return r.apply(e,n)},e.hide=function(){v();for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];return u.apply(e,n)},e.close=function(){v(),a=[];for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return l.apply(e,t)}}}function Se(e){var a=plus.webview.getWebviewById(e);return a&&!a.$processed&&Oe(a),a}var Ae=Object.freeze({getSubNVueById:Se,requireNativePlugin:ke}),Te=Page,je=Component,De=/:/g,Pe=w(function(e){return x(e.replace(De,"-"))});function Ee(e){if(wx.canIUse("nextTick")){var a=e.triggerEvent;e.triggerEvent=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),u=1;u<t;u++)r[u-1]=arguments[u];return a.apply(e,[Pe(n)].concat(r))}}}function Ce(e,a){var n=a[e];a[e]=n?function(){Ee(this);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return n.apply(this,a)}:function(){Ee(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("onLoad",e),Te(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("created",e),je(e)};var Ie=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Be(e,a){var n=e.$mp[e.mpType];a.forEach(function(a){_(n,a)&&(e[a]=n[a])})}function Re(e,a){if(!a)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(a=a.default||a,h(a))return!!h(a.extendOptions[e])||!!(a.super&&a.super.options&&Array.isArray(a.super.options[e]));if(h(a[e]))return!0;var n=a.mixins;return Array.isArray(n)?!!n.find(function(a){return Re(e,a)}):void 0}function Ne(e,a,n){a.forEach(function(a){Re(a,n)&&(e[a]=function(e){return this.$vm&&this.$vm.__call_hook(a,e)})})}function Me(e,a){var n;return a=a.default||a,h(a)?(n=a,a=n.extendOptions):n=e.extend(a),[n,a]}function Ue(e,a){if(Array.isArray(a)&&a.length){var n=Object.create(null);a.forEach(function(e){n[e]=!0}),e.$scopedSlots=e.$slots=n}}function qe(e,a){e=(e||"").split(",");var n=e.length;1===n?a._$vueId=e[0]:2===n&&(a._$vueId=e[0],a._$vuePid=e[1])}function Le(e,a){var n=e.data||{},t=e.methods||{};if("function"===typeof n)try{n=n.call(a)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return y(n)||(n={}),Object.keys(t).forEach(function(e){-1!==a.__lifecycle_hooks__.indexOf(e)||_(n,e)||(n[e]=t[e])}),n}var Ve=[String,Number,Boolean,Object,Array,null];function Fe(e){return function(a,n){this.$vm&&(this.$vm[e]=a)}}function He(e,a){var n=e["behaviors"],t=e["extends"],r=e["mixins"],u=e["props"];u||(e["props"]=u=[]);var l=[];return Array.isArray(n)&&n.forEach(function(e){l.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(u)?(u.push("name"),u.push("value")):(u["name"]={type:String,default:""},u["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(t)&&t.props&&l.push(a({properties:ze(t.props,!0)})),Array.isArray(r)&&r.forEach(function(e){y(e)&&e.props&&l.push(a({properties:ze(e.props,!0)}))}),l}function We(e,a,n,t){return Array.isArray(a)&&1===a.length?a[0]:a}function ze(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return a||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(e,a){var n=Object.create(null);e.forEach(function(e){n[e]=!0}),this.setData({$slots:n})}}),Array.isArray(e)?e.forEach(function(e){n[e]={type:null,observer:Fe(e)}}):y(e)&&Object.keys(e).forEach(function(a){var t=e[a];if(y(t)){var r=t["default"];h(r)&&(r=r()),t.type=We(a,t.type),n[a]={type:-1!==Ve.indexOf(t.type)?t.type:null,value:r,observer:Fe(a)}}else{var u=We(a,t);n[a]={type:-1!==Ve.indexOf(u)?u:null,observer:Fe(a)}}}),n}function Je(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(a){}return e.stopPropagation=b,e.preventDefault=b,e.target=e.target||{},_(e,"detail")||(e.detail={}),y(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Xe(e,a){var n=e;return a.forEach(function(a){var t=a[0],r=a[2];if(t||"undefined"!==typeof r){var u=a[1],l=a[3],p=t?e.__get_value(t,n):n;Number.isInteger(p)?n=r:u?Array.isArray(p)?n=p.find(function(a){return e.__get_value(u,a)===r}):y(p)?n=Object.keys(p).find(function(a){return e.__get_value(u,p[a])===r}):console.error("v-for 暂不支持循环数据：",p):n=p[r],l&&(n=e.__get_value(l,n))}}),n}function Ye(e,a,n){var t={};return Array.isArray(a)&&a.length&&a.forEach(function(a,r){"string"===typeof a?a?"$event"===a?t["$"+r]=n:0===a.indexOf("$event.")?t["$"+r]=e.__get_value(a.replace("$event.",""),n):t["$"+r]=e.__get_value(a):t["$"+r]=e:t["$"+r]=Xe(e,a)}),t}function Ke(e){for(var a={},n=1;n<e.length;n++){var t=e[n];a[t[0]]=t[1]}return a}function Ge(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,l=!1;if(r&&(l=a.currentTarget&&a.currentTarget.dataset&&"wx"===a.currentTarget.dataset.comType,!n.length))return l?[a]:a.detail.__args__||a.detail;var p=Ye(e,t,a),v=[];return n.forEach(function(e){"$event"===e?"__set_model"!==u||r?r&&!l?v.push(a.detail.__args__[0]):v.push(a):v.push(a.target.value):Array.isArray(e)&&"o"===e[0]?v.push(Ke(e)):"string"===typeof e&&_(p,e)?v.push(p[e]):v.push(e)}),v}var Qe="~",Ze="^";function ea(e,a){return e===a||"regionchange"===a&&("begin"===e||"end"===e)}function aa(e){var a=this;e=Je(e);var n=(e.currentTarget||e.target).dataset;if(!n)return console.warn("事件信息不存在");var t=n.eventOpts||n["event-opts"];if(!t)return console.warn("事件信息不存在");var r=e.type,u=[];return t.forEach(function(n){var t=n[0],l=n[1],p=t.charAt(0)===Ze;t=p?t.slice(1):t;var v=t.charAt(0)===Qe;t=v?t.slice(1):t,l&&ea(r,t)&&l.forEach(function(n){var t=n[0];if(t){var r=a.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var l=r[t];if(!h(l))throw new Error(" _vm.".concat(t," is not a function"));if(v){if(l.once)return;l.once=!0}u.push(l.apply(r,Ge(a.$vm,e,n[1],n[2],p,t)))}})}),"input"===r&&1===u.length&&"undefined"!==typeof u[0]?u[0]:void 0}var na=["onShow","onHide","onError","onPageNotFound"];function ta(e,a){var n=a.mocks,r=a.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=m({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Be(this,n)))}});var u={onLaunch:function(a){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",a),this.$vm.__call_hook("onLaunch",a))}};return u.globalData=e.$options.globalData||{},Ne(u,na),u}var ra=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ua(e,a){var n=e.$children,t=n.find(function(e){return e.$scope._$vueId===a});if(t)return t;for(var r=n.length-1;r>=0;r--)if(t=ua(n[r],a),t)return t}function la(e){return Behavior(e)}function pa(){return!!this.route}function va(e){this.triggerEvent("__l",e)}function ma(e){var a=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},n=a.selectAllComponents(".vue-ref");n.forEach(function(a){var n=a.dataset.ref;e[n]=a.$vm||a});var t=a.selectAllComponents(".vue-ref-in-for");return t.forEach(function(a){var n=a.dataset.ref;e[n]||(e[n]=[]),e[n].push(a.$vm||a)}),e}})}function oa(e){var a,n=e.detail||e.value,t=n.vuePid,r=n.vueOptions;t&&(a=ua(this.$vm,t)),a||(a=this.$vm),r.parent=a}function ia(e){return ta(e,{mocks:ra,initRefs:ma})}var sa=["onUniNViewMessage"];function ca(e){var a=ia(e);return Ne(a,sa),a}function fa(e){return App(ca(e)),e}function da(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.isPage,r=a.initRelation,l=Me(t.default,e),p=u(l,2),v=p[0],m=p[1],o={multipleSlots:!0,addGlobalClass:!0},i={options:o,data:Le(m,t.default.prototype),behaviors:He(m,la),properties:ze(m.props,!1,m.__file),lifetimes:{attached:function(){var e=this.properties,a={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:e};qe(e.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:a}),this.$vm=new v(a),Ue(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:oa,__e:aa}};return Array.isArray(m.wxsCallMethods)&&m.wxsCallMethods.forEach(function(e){i.methods[e]=function(a){return this.$vm[e](a)}}),n?i:[i,v]}function ha(e){return da(e,{isPage:pa,initRelation:va})}function ga(e){var a=ha(e);return a.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},a}var ya=["onShow","onHide","onUnload"];function _a(e,a){a.isPage,a.initRelation;var n=ga(e);return Ne(n.methods,ya,e),n.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},n}function ba(e){return _a(e,{isPage:pa,initRelation:va})}ya.push.apply(ya,Ie);var wa=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $a(e){var a=ba(e);return Ne(a.methods,wa),a}function xa(e){return Component($a(e))}function ka(e){return Component(ga(e))}pe.forEach(function(e){le[e]=!1}),ve.forEach(function(e){var a=le[e]&&le[e].name?le[e].name:e;wx.canIUse(a)||(le[e]=!1)});var Oa={};Object.keys(ue).forEach(function(e){Oa[e]=ue[e]}),Object.keys(xe).forEach(function(e){Oa[e]=xe[e]}),Object.keys(Ae).forEach(function(e){Oa[e]=K(e,Ae[e])}),Object.keys(wx).forEach(function(e){(_(wx,e)||_(le,e))&&(Oa[e]=K(e,ce(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=Oa,e.UniEmitter=xe),wx.createApp=fa,wx.createPage=xa,wx.createComponent=ka;var Sa=Oa,Aa=Sa;a.default=Aa}).call(this,n("c8ba"))},7438:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={pages:{"pages/index/index":{navigationBarTitleText:"首页",enablePullDownRefresh:!0,backgroundTextStyle:"dark",onReachBottomDistance:50},"pages/index/userInfo":{navigationBarTitleText:"用户信息"},"pages/activity/index":{navigationBarTitleText:"交友活动1111",navigationBarBackgroundColor:"rgb(255,119,55)",backgroundColor:"rgb(255,119,55)",transparentTitle:"auto",navigatonStyle:"custom",enablePullDownRefresh:!0,backgroundTextStyle:"dark",onReachBottomDistance:50},"pages/me/index":{navigationBarTitleText:"个人中心"},"pages/userInfo/index":{navigationBarTitleText:"用户信息"},"pages/me/editUserInfo":{navigationBarTitleText:"编辑用户基础信息",animationType:"pop-in",animationDuration:200},"pages/me/detail":{navigationBarTitleText:"用户详情"},"pages/me/editUserHeader":{navigationBarTitleText:"编辑用户头部信息",animationType:"pop-in",animationDuration:200},"pages/me/editJokin":{navigationBarTitleText:"编辑红娘信息",animationType:"pop-in",animationDuration:200},"pages/me/editUserContact":{navigationBarTitleText:"编辑用户联系方式",animationType:"pop-in",animationDuration:200},"pages/me/condition/index":{navigationBarTitleText:"查看征友条件",animationType:"pop-in",animationDuration:200},"pages/me/condition/editUserCondition":{navigationBarTitleText:"编辑征友条件",animationType:"pop-in",animationDuration:200},"pages/me/editUserInfomation":{navigationBarTitleText:"编辑其他信息",animationType:"pop-in",animationDuration:200},"pages/me/editUserAssetStatus":{navigationBarTitleText:"编辑资产状况",animationType:"pop-in",animationDuration:200},"pages/components/uploadAvatar/upload":{navigationBarTitleText:"上传图像编辑",animationType:"pop-in",animationDuration:200},"pages/components/uploadAvatar/jokinAvatar":{navigationBarTitleText:"上传头像",animationType:"pop-in",animationDuration:200},"pages/me/track/index":{navigationBarTitleText:"我的动态",navigationBarBackgroundColor:"rgb(255,119,55)",backgroundColor:"rgb(255,119,55)",transparentTitle:"auto",navigatonStyle:"custom",enablePullDownRefresh:!0,backgroundTextStyle:"dark",onReachBottomDistance:50},"pages/index/vipTrack":{navigationBarTitleText:"会员动态",navigationBarBackgroundColor:"rgb(255,119,55)",backgroundColor:"rgb(255,119,55)",transparentTitle:"auto",navigatonStyle:"custom",enablePullDownRefresh:!0,backgroundTextStyle:"dark",onReachBottomDistance:50},"pages/me/photo/index":{navigationBarTitleText:"我的相册",navigationBarBackgroundColor:"rgb(255,119,55)",backgroundColor:"rgb(255,119,55)",transparentTitle:"auto",navigatonStyle:"custom",enablePullDownRefresh:!0,backgroundTextStyle:"dark",onReachBottomDistance:50},"pages/me/photo/addPhoto":{navigationBarTitleText:"添加相册",navigationBarBackgroundColor:"rgb(255,119,55)",backgroundColor:"rgb(255,119,55)",animationType:"pop-in",animationDuration:200},"pages/me/vip/index":{navigationBarTitleText:"购买会员",animationType:"pop-in",animationDuration:200},"pages/me/editUserDescrable":{navigationBarTitleText:"自我描述",animationType:"pop-in",animationDuration:200},"pages/me/setings/index":{navigationBarTitleText:"设置",animationType:"pop-in",animationDuration:200},"pages/me/track/addTrack":{navigationBarTitleText:"添加动态",navigationBarBackgroundColor:"rgb(255,119,55)",backgroundColor:"rgb(255,119,55)",animationType:"pop-in",animationDuration:200},"pages/activity/addActivity":{navigationBarTitleText:"添加交友活动",navigationBarBackgroundColor:"rgb(255,119,55)",backgroundColor:"rgb(255,119,55)",animationType:"pop-in",animationDuration:200},"pages/login/index":{navigationBarTitleText:"用户登录"},"pages/register/index":{navigationBarTitleText:"用户注册",backgroundColor:"#F0AD4E"}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"rgb(255,119,170)",backgroundColor:"rgb(255,119,170)"}};a.default=t},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},"830f":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={contact:"",person:"",personadd:"","contact-filled":"","person-filled":"","personadd-filled":"",phone:"",email:"",chatbubble:"",chatboxes:"","phone-filled":"","email-filled":"","chatbubble-filled":"","chatboxes-filled":"",weibo:"",weixin:"",pengyouquan:"",chat:"",qq:"",videocam:"",camera:"",mic:"",location:"","mic-filled":"",speech:"","location-filled":"",micoff:"",image:"",map:"",compose:"",trash:"",upload:"",download:"",close:"",redo:"",undo:"",refresh:"",star:"",plus:"",minus:"",circle:"",checkbox:"","close-filled":"",clear:"","refresh-filled":"","star-filled":"","plus-filled":"","minus-filled":"","circle-filled":"","checkbox-filled":"",closeempty:"",refreshempty:"",reload:"",starhalf:"",spinner:"","spinner-cycle":"",search:"",plusempty:"",forward:"",back:"","left-nav":"",checkmarkempty:"",home:"",navigate:"",gear:"",paperplane:"",info:"",help:"",locked:"",more:"",flag:"","home-filled":"","gear-filled":"","info-filled":"","help-filled":"","more-filled":"",settings:"",list:"",bars:"",loop:"",paperclip:"",eye:"",arrowup:"",arrowdown:"",arrowleft:"",arrowright:"",arrowthinup:"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",pulldown:"",closefill:"",sound:"",scan:""};a.default=t},8401:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.lotusAddressJson=void 0;var t=[{value:"110000",name:"北京"},{value:"120000",name:"天津"},{value:"130000",name:"河北省"},{value:"140000",name:"山西省"},{value:"150000",name:"内蒙古自治区"},{value:"210000",name:"辽宁省"},{value:"220000",name:"吉林省"},{value:"230000",name:"黑龙江省"},{value:"310000",name:"上海"},{value:"320000",name:"江苏省"},{value:"330000",name:"浙江省"},{value:"340000",name:"安徽省"},{value:"350000",name:"福建省"},{value:"360000",name:"江西省"},{value:"370000",name:"山东省"},{value:"410000",name:"河南省"},{value:"420000",name:"湖北省"},{value:"430000",name:"湖南省"},{value:"440000",name:"广东省"},{value:"450000",name:"广西壮族自治区"},{value:"460000",name:"海南省"},{value:"500000",name:"重庆"},{value:"510000",name:"四川省"},{value:"520000",name:"贵州省"},{value:"530000",name:"云南省"},{value:"540000",name:"西藏自治区"},{value:"610000",name:"陕西省"},{value:"620000",name:"甘肃省"},{value:"630000",name:"青海省"},{value:"640000",name:"宁夏回族自治区"},{value:"650000",name:"新疆维吾尔自治区"},{value:"710000",name:"台湾"},{value:"810000",name:"香港特别行政区"},{value:"820000",name:"澳门特别行政区"},{value:"990000",name:"海外"},{value:"110100",name:"北京市",parent:"110000"},{value:"120100",name:"天津市",parent:"120000"},{value:"130100",name:"石家庄市",parent:"130000"},{value:"130200",name:"唐山市",parent:"130000"},{value:"130300",name:"秦皇岛市",parent:"130000"},{value:"130400",name:"邯郸市",parent:"130000"},{value:"130500",name:"邢台市",parent:"130000"},{value:"130600",name:"保定市",parent:"130000"},{value:"130700",name:"张家口市",parent:"130000"},{value:"130800",name:"承德市",parent:"130000"},{value:"130900",name:"沧州市",parent:"130000"},{value:"131000",name:"廊坊市",parent:"130000"},{value:"131100",name:"衡水市",parent:"130000"},{value:"140100",name:"太原市",parent:"140000"},{value:"140200",name:"大同市",parent:"140000"},{value:"140300",name:"阳泉市",parent:"140000"},{value:"140400",name:"长治市",parent:"140000"},{value:"140500",name:"晋城市",parent:"140000"},{value:"140600",name:"朔州市",parent:"140000"},{value:"140700",name:"晋中市",parent:"140000"},{value:"140800",name:"运城市",parent:"140000"},{value:"140900",name:"忻州市",parent:"140000"},{value:"141000",name:"临汾市",parent:"140000"},{value:"141100",name:"吕梁市",parent:"140000"},{value:"150100",name:"呼和浩特市",parent:"150000"},{value:"150200",name:"包头市",parent:"150000"},{value:"150300",name:"乌海市",parent:"150000"},{value:"150400",name:"赤峰市",parent:"150000"},{value:"150500",name:"通辽市",parent:"150000"},{value:"150600",name:"鄂尔多斯市",parent:"150000"},{value:"150700",name:"呼伦贝尔市",parent:"150000"},{value:"150800",name:"巴彦淖尔市",parent:"150000"},{value:"150900",name:"乌兰察布市",parent:"150000"},{value:"152200",name:"兴安盟",parent:"150000"},{value:"152500",name:"锡林郭勒盟",parent:"150000"},{value:"152900",name:"阿拉善盟",parent:"150000"},{value:"210100",name:"沈阳市",parent:"210000"},{value:"210200",name:"大连市",parent:"210000"},{value:"210300",name:"鞍山市",parent:"210000"},{value:"210400",name:"抚顺市",parent:"210000"},{value:"210500",name:"本溪市",parent:"210000"},{value:"210600",name:"丹东市",parent:"210000"},{value:"210700",name:"锦州市",parent:"210000"},{value:"210800",name:"营口市",parent:"210000"},{value:"210900",name:"阜新市",parent:"210000"},{value:"211000",name:"辽阳市",parent:"210000"},{value:"211100",name:"盘锦市",parent:"210000"},{value:"211200",name:"铁岭市",parent:"210000"},{value:"211300",name:"朝阳市",parent:"210000"},{value:"211400",name:"葫芦岛市",parent:"210000"},{value:"220100",name:"长春市",parent:"220000"},{value:"220200",name:"吉林市",parent:"220000"},{value:"220300",name:"四平市",parent:"220000"},{value:"220400",name:"辽源市",parent:"220000"},{value:"220500",name:"通化市",parent:"220000"},{value:"220600",name:"白山市",parent:"220000"},{value:"220700",name:"松原市",parent:"220000"},{value:"220800",name:"白城市",parent:"220000"},{value:"222400",name:"延边朝鲜族自治州",parent:"220000"},{value:"230100",name:"哈尔滨市",parent:"230000"},{value:"230200",name:"齐齐哈尔市",parent:"230000"},{value:"230300",name:"鸡西市",parent:"230000"},{value:"230400",name:"鹤岗市",parent:"230000"},{value:"230500",name:"双鸭山市",parent:"230000"},{value:"230600",name:"大庆市",parent:"230000"},{value:"230700",name:"伊春市",parent:"230000"},{value:"230800",name:"佳木斯市",parent:"230000"},{value:"230900",name:"七台河市",parent:"230000"},{value:"231000",name:"牡丹江市",parent:"230000"},{value:"231100",name:"黑河市",parent:"230000"},{value:"231200",name:"绥化市",parent:"230000"},{value:"232700",name:"大兴安岭地区",parent:"230000"},{value:"310100",name:"上海市",parent:"310000"},{value:"320100",name:"南京市",parent:"320000"},{value:"320200",name:"无锡市",parent:"320000"},{value:"320300",name:"徐州市",parent:"320000"},{value:"320400",name:"常州市",parent:"320000"},{value:"320500",name:"苏州市",parent:"320000"},{value:"320600",name:"南通市",parent:"320000"},{value:"320700",name:"连云港市",parent:"320000"},{value:"320800",name:"淮安市",parent:"320000"},{value:"320900",name:"盐城市",parent:"320000"},{value:"321000",name:"扬州市",parent:"320000"},{value:"321100",name:"镇江市",parent:"320000"},{value:"321200",name:"泰州市",parent:"320000"},{value:"321300",name:"宿迁市",parent:"320000"},{value:"330100",name:"杭州市",parent:"330000"},{value:"330200",name:"宁波市",parent:"330000"},{value:"330300",name:"温州市",parent:"330000"},{value:"330400",name:"嘉兴市",parent:"330000"},{value:"330500",name:"湖州市",parent:"330000"},{value:"330600",name:"绍兴市",parent:"330000"},{value:"330700",name:"金华市",parent:"330000"},{value:"330800",name:"衢州市",parent:"330000"},{value:"330900",name:"舟山市",parent:"330000"},{value:"331000",name:"台州市",parent:"330000"},{value:"331100",name:"丽水市",parent:"330000"},{value:"340100",name:"合肥市",parent:"340000"},{value:"340200",name:"芜湖市",parent:"340000"},{value:"340300",name:"蚌埠市",parent:"340000"},{value:"340400",name:"淮南市",parent:"340000"},{value:"340500",name:"马鞍山市",parent:"340000"},{value:"340600",name:"淮北市",parent:"340000"},{value:"340700",name:"铜陵市",parent:"340000"},{value:"340800",name:"安庆市",parent:"340000"},{value:"341000",name:"黄山市",parent:"340000"},{value:"341100",name:"滁州市",parent:"340000"},{value:"341200",name:"阜阳市",parent:"340000"},{value:"341300",name:"宿州市",parent:"340000"},{value:"341500",name:"六安市",parent:"340000"},{value:"341600",name:"亳州市",parent:"340000"},{value:"341700",name:"池州市",parent:"340000"},{value:"341800",name:"宣城市",parent:"340000"},{value:"350100",name:"福州市",parent:"350000"},{value:"350200",name:"厦门市",parent:"350000"},{value:"350300",name:"莆田市",parent:"350000"},{value:"350400",name:"三明市",parent:"350000"},{value:"350500",name:"泉州市",parent:"350000"},{value:"350600",name:"漳州市",parent:"350000"},{value:"350700",name:"南平市",parent:"350000"},{value:"350800",name:"龙岩市",parent:"350000"},{value:"350900",name:"宁德市",parent:"350000"},{value:"360100",name:"南昌市",parent:"360000"},{value:"360200",name:"景德镇市",parent:"360000"},{value:"360300",name:"萍乡市",parent:"360000"},{value:"360400",name:"九江市",parent:"360000"},{value:"360500",name:"新余市",parent:"360000"},{value:"360600",name:"鹰潭市",parent:"360000"},{value:"360700",name:"赣州市",parent:"360000"},{value:"360800",name:"吉安市",parent:"360000"},{value:"360900",name:"宜春市",parent:"360000"},{value:"361000",name:"抚州市",parent:"360000"},{value:"361100",name:"上饶市",parent:"360000"},{value:"370100",name:"济南市",parent:"370000"},{value:"370200",name:"青岛市",parent:"370000"},{value:"370300",name:"淄博市",parent:"370000"},{value:"370400",name:"枣庄市",parent:"370000"},{value:"370500",name:"东营市",parent:"370000"},{value:"370600",name:"烟台市",parent:"370000"},{value:"370700",name:"潍坊市",parent:"370000"},{value:"370800",name:"济宁市",parent:"370000"},{value:"370900",name:"泰安市",parent:"370000"},{value:"371000",name:"威海市",parent:"370000"},{value:"371100",name:"日照市",parent:"370000"},{value:"371200",name:"莱芜市",parent:"370000"},{value:"371300",name:"临沂市",parent:"370000"},{value:"371400",name:"德州市",parent:"370000"},{value:"371500",name:"聊城市",parent:"370000"},{value:"371600",name:"滨州市",parent:"370000"},{value:"371700",name:"菏泽市",parent:"370000"},{value:"410100",name:"郑州市",parent:"410000"},{value:"410200",name:"开封市",parent:"410000"},{value:"410300",name:"洛阳市",parent:"410000"},{value:"410400",name:"平顶山市",parent:"410000"},{value:"410500",name:"安阳市",parent:"410000"},{value:"410600",name:"鹤壁市",parent:"410000"},{value:"410700",name:"新乡市",parent:"410000"},{value:"410800",name:"焦作市",parent:"410000"},{value:"410900",name:"濮阳市",parent:"410000"},{value:"411000",name:"许昌市",parent:"410000"},{value:"411100",name:"漯河市",parent:"410000"},{value:"411200",name:"三门峡市",parent:"410000"},{value:"411300",name:"南阳市",parent:"410000"},{value:"411400",name:"商丘市",parent:"410000"},{value:"411500",name:"信阳市",parent:"410000"},{value:"411600",name:"周口市",parent:"410000"},{value:"411700",name:"驻马店市",parent:"410000"},{value:"420100",name:"武汉市",parent:"420000"},{value:"420200",name:"黄石市",parent:"420000"},{value:"420300",name:"十堰市",parent:"420000"},{value:"420500",name:"宜昌市",parent:"420000"},{value:"420600",name:"襄阳市",parent:"420000"},{value:"420700",name:"鄂州市",parent:"420000"},{value:"420800",name:"荆门市",parent:"420000"},{value:"420900",name:"孝感市",parent:"420000"},{value:"421000",name:"荆州市",parent:"420000"},{value:"421100",name:"黄冈市",parent:"420000"},{value:"421200",name:"咸宁市",parent:"420000"},{value:"421300",name:"随州市",parent:"420000"},{value:"422800",name:"恩施土家族苗族自治州",parent:"420000"},{value:"430100",name:"长沙市",parent:"430000"},{value:"430200",name:"株洲市",parent:"430000"},{value:"430300",name:"湘潭市",parent:"430000"},{value:"430400",name:"衡阳市",parent:"430000"},{value:"430500",name:"邵阳市",parent:"430000"},{value:"430600",name:"岳阳市",parent:"430000"},{value:"430700",name:"常德市",parent:"430000"},{value:"430800",name:"张家界市",parent:"430000"},{value:"430900",name:"益阳市",parent:"430000"},{value:"431000",name:"郴州市",parent:"430000"},{value:"431100",name:"永州市",parent:"430000"},{value:"431200",name:"怀化市",parent:"430000"},{value:"431300",name:"娄底市",parent:"430000"},{value:"433100",name:"湘西土家族苗族自治州",parent:"430000"},{value:"440100",name:"广州市",parent:"440000"},{value:"440200",name:"韶关市",parent:"440000"},{value:"440300",name:"深圳市",parent:"440000"},{value:"440400",name:"珠海市",parent:"440000"},{value:"440500",name:"汕头市",parent:"440000"},{value:"440600",name:"佛山市",parent:"440000"},{value:"440700",name:"江门市",parent:"440000"},{value:"440800",name:"湛江市",parent:"440000"},{value:"440900",name:"茂名市",parent:"440000"},{value:"441200",name:"肇庆市",parent:"440000"},{value:"441300",name:"惠州市",parent:"440000"},{value:"441400",name:"梅州市",parent:"440000"},{value:"441500",name:"汕尾市",parent:"440000"},{value:"441600",name:"河源市",parent:"440000"},{value:"441700",name:"阳江市",parent:"440000"},{value:"441800",name:"清远市",parent:"440000"},{value:"441900",name:"东莞市",parent:"440000"},{value:"442000",name:"中山市",parent:"440000"},{value:"442101",name:"东沙群岛",parent:"440000"},{value:"445100",name:"潮州市",parent:"440000"},{value:"445200",name:"揭阳市",parent:"440000"},{value:"445300",name:"云浮市",parent:"440000"},{value:"450100",name:"南宁市",parent:"450000"},{value:"450200",name:"柳州市",parent:"450000"},{value:"450300",name:"桂林市",parent:"450000"},{value:"450400",name:"梧州市",parent:"450000"},{value:"450500",name:"北海市",parent:"450000"},{value:"450600",name:"防城港市",parent:"450000"},{value:"450700",name:"钦州市",parent:"450000"},{value:"450800",name:"贵港市",parent:"450000"},{value:"450900",name:"玉林市",parent:"450000"},{value:"451000",name:"百色市",parent:"450000"},{value:"451100",name:"贺州市",parent:"450000"},{value:"451200",name:"河池市",parent:"450000"},{value:"451300",name:"来宾市",parent:"450000"},{value:"451400",name:"崇左市",parent:"450000"},{value:"460100",name:"海口市",parent:"460000"},{value:"460200",name:"三亚市",parent:"460000"},{value:"460300",name:"三沙市",parent:"460000"},{value:"500100",name:"重庆市",parent:"500000"},{value:"510100",name:"成都市",parent:"510000"},{value:"510300",name:"自贡市",parent:"510000"},{value:"510400",name:"攀枝花市",parent:"510000"},{value:"510500",name:"泸州市",parent:"510000"},{value:"510600",name:"德阳市",parent:"510000"},{value:"510700",name:"绵阳市",parent:"510000"},{value:"510800",name:"广元市",parent:"510000"},{value:"510900",name:"遂宁市",parent:"510000"},{value:"511000",name:"内江市",parent:"510000"},{value:"511100",name:"乐山市",parent:"510000"},{value:"511300",name:"南充市",parent:"510000"},{value:"511400",name:"眉山市",parent:"510000"},{value:"511500",name:"宜宾市",parent:"510000"},{value:"511600",name:"广安市",parent:"510000"},{value:"511700",name:"达州市",parent:"510000"},{value:"511800",name:"雅安市",parent:"510000"},{value:"511900",name:"巴中市",parent:"510000"},{value:"512000",name:"资阳市",parent:"510000"},{value:"513200",name:"阿坝藏族羌族自治州",parent:"510000"},{value:"513300",name:"甘孜藏族自治州",parent:"510000"},{value:"513400",name:"凉山彝族自治州",parent:"510000"},{value:"520100",name:"贵阳市",parent:"520000"},{value:"520200",name:"六盘水市",parent:"520000"},{value:"520300",name:"遵义市",parent:"520000"},{value:"520400",name:"安顺市",parent:"520000"},{value:"522200",name:"铜仁市",parent:"520000"},{value:"522300",name:"黔西南布依族苗族自治州",parent:"520000"},{value:"522400",name:"毕节市",parent:"520000"},{value:"522600",name:"黔东南苗族侗族自治州",parent:"520000"},{value:"522700",name:"黔南布依族苗族自治州",parent:"520000"},{value:"530100",name:"昆明市",parent:"530000"},{value:"530300",name:"曲靖市",parent:"530000"},{value:"530400",name:"玉溪市",parent:"530000"},{value:"530500",name:"保山市",parent:"530000"},{value:"530600",name:"昭通市",parent:"530000"},{value:"530700",name:"丽江市",parent:"530000"},{value:"530800",name:"普洱市",parent:"530000"},{value:"530900",name:"临沧市",parent:"530000"},{value:"532300",name:"楚雄彝族自治州",parent:"530000"},{value:"532500",name:"红河哈尼族彝族自治州",parent:"530000"},{value:"532600",name:"文山壮族苗族自治州",parent:"530000"},{value:"532800",name:"西双版纳傣族自治州",parent:"530000"},{value:"532900",name:"大理白族自治州",parent:"530000"},{value:"533100",name:"德宏傣族景颇族自治州",parent:"530000"},{value:"533300",name:"怒江傈僳族自治州",parent:"530000"},{value:"533400",name:"迪庆藏族自治州",parent:"530000"},{value:"540100",name:"拉萨市",parent:"540000"},{value:"542100",name:"昌都市",parent:"540000"},{value:"542200",name:"山南地区",parent:"540000"},{value:"542300",name:"日喀则市",parent:"540000"},{value:"542400",name:"那曲地区",parent:"540000"},{value:"542500",name:"阿里地区",parent:"540000"},{value:"542600",name:"林芝市",parent:"540000"},{value:"610100",name:"西安市",parent:"610000"},{value:"610200",name:"铜川市",parent:"610000"},{value:"610300",name:"宝鸡市",parent:"610000"},{value:"610400",name:"咸阳市",parent:"610000"},{value:"610500",name:"渭南市",parent:"610000"},{value:"610600",name:"延安市",parent:"610000"},{value:"610700",name:"汉中市",parent:"610000"},{value:"610800",name:"榆林市",parent:"610000"},{value:"610900",name:"安康市",parent:"610000"},{value:"611000",name:"商洛市",parent:"610000"},{value:"620100",name:"兰州市",parent:"620000"},{value:"620200",name:"嘉峪关市",parent:"620000"},{value:"620300",name:"金昌市",parent:"620000"},{value:"620400",name:"白银市",parent:"620000"},{value:"620500",name:"天水市",parent:"620000"},{value:"620600",name:"武威市",parent:"620000"},{value:"620700",name:"张掖市",parent:"620000"},{value:"620800",name:"平凉市",parent:"620000"},{value:"620900",name:"酒泉市",parent:"620000"},{value:"621000",name:"庆阳市",parent:"620000"},{value:"621100",name:"定西市",parent:"620000"},{value:"621200",name:"陇南市",parent:"620000"},{value:"622900",name:"临夏回族自治州",parent:"620000"},{value:"623000",name:"甘南藏族自治州",parent:"620000"},{value:"630100",name:"西宁市",parent:"630000"},{value:"632100",name:"海东市",parent:"630000"},{value:"632200",name:"海北藏族自治州",parent:"630000"},{value:"632300",name:"黄南藏族自治州",parent:"630000"},{value:"632500",name:"海南藏族自治州",parent:"630000"},{value:"632600",name:"果洛藏族自治州",parent:"630000"},{value:"632700",name:"玉树藏族自治州",parent:"630000"},{value:"632800",name:"海西蒙古族藏族自治州",parent:"630000"},{value:"640100",name:"银川市",parent:"640000"},{value:"640200",name:"石嘴山市",parent:"640000"},{value:"640300",name:"吴忠市",parent:"640000"},{value:"640400",name:"固原市",parent:"640000"},{value:"640500",name:"中卫市",parent:"640000"},{value:"650100",name:"乌鲁木齐市",parent:"650000"},{value:"650200",name:"克拉玛依市",parent:"650000"},{value:"652100",name:"吐鲁番市",parent:"650000"},{value:"652200",name:"哈密地区",parent:"650000"},{value:"652300",name:"昌吉回族自治州",parent:"650000"},{value:"652700",name:"博尔塔拉蒙古自治州",parent:"650000"},{value:"652800",name:"巴音郭楞蒙古自治州",parent:"650000"},{value:"652900",name:"阿克苏地区",parent:"650000"},{value:"653000",name:"克孜勒苏柯尔克孜自治州",parent:"650000"},{value:"653100",name:"喀什地区",parent:"650000"},{value:"653200",name:"和田地区",parent:"650000"},{value:"654000",name:"伊犁哈萨克自治州",parent:"650000"},{value:"654200",name:"塔城地区",parent:"650000"},{value:"654300",name:"阿勒泰地区",parent:"650000"},{value:"659000",name:"可克达拉市",parent:"650000"},{value:"710100",name:"台北市",parent:"710000"},{value:"710200",name:"高雄市",parent:"710000"},{value:"710300",name:"台南市",parent:"710000"},{value:"710400",name:"台中市",parent:"710000"},{value:"710500",name:"金门县",parent:"710000"},{value:"710600",name:"南投县",parent:"710000"},{value:"710700",name:"基隆市",parent:"710000"},{value:"710800",name:"新竹市",parent:"710000"},{value:"710900",name:"嘉义市",parent:"710000"},{value:"711100",name:"新北市",parent:"710000"},{value:"711200",name:"宜兰县",parent:"710000"},{value:"711300",name:"新竹县",parent:"710000"},{value:"711400",name:"桃园县",parent:"710000"},{value:"711500",name:"苗栗县",parent:"710000"},{value:"711700",name:"彰化县",parent:"710000"},{value:"711900",name:"嘉义县",parent:"710000"},{value:"712100",name:"云林县",parent:"710000"},{value:"712400",name:"屏东县",parent:"710000"},{value:"712500",name:"台东县",parent:"710000"},{value:"712600",name:"花莲县",parent:"710000"},{value:"712700",name:"澎湖县",parent:"710000"},{value:"712800",name:"连江县",parent:"710000"},{value:"810100",name:"香港岛",parent:"810000"},{value:"810200",name:"九龙",parent:"810000"},{value:"810300",name:"新界",parent:"810000"},{value:"820100",name:"澳门半岛",parent:"820000"},{value:"820200",name:"离岛",parent:"820000"},{value:"990100",name:"海外",parent:"990000"},{value:"110101",name:"东城区",parent:"110100"},{value:"110102",name:"西城区",parent:"110100"},{value:"110103",name:"崇文区",parent:"110100"},{value:"110104",name:"宣武区",parent:"110100"},{value:"110105",name:"朝阳区",parent:"110100"},{value:"110106",name:"丰台区",parent:"110100"},{value:"110107",name:"石景山区",parent:"110100"},{value:"110108",name:"海淀区",parent:"110100"},{value:"110109",name:"门头沟区",parent:"110100"},{value:"110111",name:"房山区",parent:"110100"},{value:"110112",name:"通州区",parent:"110100"},{value:"110113",name:"顺义区",parent:"110100"},{value:"110114",name:"昌平区",parent:"110100"},{value:"110115",name:"大兴区",parent:"110100"},{value:"110116",name:"怀柔区",parent:"110100"},{value:"110117",name:"平谷区",parent:"110100"},{value:"110228",name:"密云县",parent:"110100"},{value:"110229",name:"延庆县",parent:"110100"},{value:"110230",name:"其它区",parent:"110100"},{value:"120101",name:"和平区",parent:"120100"},{value:"120102",name:"河东区",parent:"120100"},{value:"120103",name:"河西区",parent:"120100"},{value:"120104",name:"南开区",parent:"120100"},{value:"120105",name:"河北区",parent:"120100"},{value:"120106",name:"红桥区",parent:"120100"},{value:"120107",name:"塘沽区",parent:"120100"},{value:"120108",name:"汉沽区",parent:"120100"},{value:"120109",name:"大港区",parent:"120100"},{value:"120110",name:"东丽区",parent:"120100"},{value:"120111",name:"西青区",parent:"120100"},{value:"120112",name:"津南区",parent:"120100"},{value:"120113",name:"北辰区",parent:"120100"},{value:"120114",name:"武清区",parent:"120100"},{value:"120115",name:"宝坻区",parent:"120100"},{value:"120116",name:"滨海新区",parent:"120100"},{value:"120221",name:"宁河县",parent:"120100"},{value:"120223",name:"静海县",parent:"120100"},{value:"120225",name:"蓟县",parent:"120100"},{value:"120226",name:"其它区",parent:"120100"},{value:"130102",name:"长安区",parent:"130100"},{value:"130103",name:"桥东区",parent:"130100"},{value:"130104",name:"桥西区",parent:"130100"},{value:"130105",name:"新华区",parent:"130100"},{value:"130107",name:"井陉矿区",parent:"130100"},{value:"130108",name:"裕华区",parent:"130100"},{value:"130121",name:"井陉县",parent:"130100"},{value:"130123",name:"正定县",parent:"130100"},{value:"130124",name:"栾城区",parent:"130100"},{value:"130125",name:"行唐县",parent:"130100"},{value:"130126",name:"灵寿县",parent:"130100"},{value:"130127",name:"高邑县",parent:"130100"},{value:"130128",name:"深泽县",parent:"130100"},{value:"130129",name:"赞皇县",parent:"130100"},{value:"130130",name:"无极县",parent:"130100"},{value:"130131",name:"平山县",parent:"130100"},{value:"130132",name:"元氏县",parent:"130100"},{value:"130133",name:"赵县",parent:"130100"},{value:"130181",name:"辛集市",parent:"130100"},{value:"130182",name:"藁城区",parent:"130100"},{value:"130183",name:"晋州市",parent:"130100"},{value:"130184",name:"新乐市",parent:"130100"},{value:"130185",name:"鹿泉区",parent:"130100"},{value:"130186",name:"其它区",parent:"130100"},{value:"130202",name:"路南区",parent:"130200"},{value:"130203",name:"路北区",parent:"130200"},{value:"130204",name:"古冶区",parent:"130200"},{value:"130205",name:"开平区",parent:"130200"},{value:"130207",name:"丰南区",parent:"130200"},{value:"130208",name:"丰润区",parent:"130200"},{value:"130223",name:"滦县",parent:"130200"},{value:"130224",name:"滦南县",parent:"130200"},{value:"130225",name:"乐亭县",parent:"130200"},{value:"130227",name:"迁西县",parent:"130200"},{value:"130229",name:"玉田县",parent:"130200"},{value:"130230",name:"曹妃甸区",parent:"130200"},{value:"130281",name:"遵化市",parent:"130200"},{value:"130283",name:"迁安市",parent:"130200"},{value:"130284",name:"其它区",parent:"130200"},{value:"130302",name:"海港区",parent:"130300"},{value:"130303",name:"山海关区",parent:"130300"},{value:"130304",name:"北戴河区",parent:"130300"},{value:"130321",name:"青龙满族自治县",parent:"130300"},{value:"130322",name:"昌黎县",parent:"130300"},{value:"130323",name:"抚宁县",parent:"130300"},{value:"130324",name:"卢龙县",parent:"130300"},{value:"130398",name:"其它区",parent:"130300"},{value:"130399",name:"经济技术开发区",parent:"130300"},{value:"130402",name:"邯山区",parent:"130400"},{value:"130403",name:"丛台区",parent:"130400"},{value:"130404",name:"复兴区",parent:"130400"},{value:"130406",name:"峰峰矿区",parent:"130400"},{value:"130421",name:"邯郸县",parent:"130400"},{value:"130423",name:"临漳县",parent:"130400"},{value:"130424",name:"成安县",parent:"130400"},{value:"130425",name:"大名县",parent:"130400"},{value:"130426",name:"涉县",parent:"130400"},{value:"130427",name:"磁县",parent:"130400"},{value:"130428",name:"肥乡县",parent:"130400"},{value:"130429",name:"永年县",parent:"130400"},{value:"130430",name:"邱县",parent:"130400"},{value:"130431",name:"鸡泽县",parent:"130400"},{value:"130432",name:"广平县",parent:"130400"},{value:"130433",name:"馆陶县",parent:"130400"},{value:"130434",name:"魏县",parent:"130400"},{value:"130435",name:"曲周县",parent:"130400"},{value:"130481",name:"武安市",parent:"130400"},{value:"130482",name:"其它区",parent:"130400"},{value:"130502",name:"桥东区",parent:"130500"},{value:"130503",name:"桥西区",parent:"130500"},{value:"130521",name:"邢台县",parent:"130500"},{value:"130522",name:"临城县",parent:"130500"},{value:"130523",name:"内丘县",parent:"130500"},{value:"130524",name:"柏乡县",parent:"130500"},{value:"130525",name:"隆尧县",parent:"130500"},{value:"130526",name:"任县",parent:"130500"},{value:"130527",name:"南和县",parent:"130500"},{value:"130528",name:"宁晋县",parent:"130500"},{value:"130529",name:"巨鹿县",parent:"130500"},{value:"130530",name:"新河县",parent:"130500"},{value:"130531",name:"广宗县",parent:"130500"},{value:"130532",name:"平乡县",parent:"130500"},{value:"130533",name:"威县",parent:"130500"},{value:"130534",name:"清河县",parent:"130500"},{value:"130535",name:"临西县",parent:"130500"},{value:"130581",name:"南宫市",parent:"130500"},{value:"130582",name:"沙河市",parent:"130500"},{value:"130583",name:"其它区",parent:"130500"},{value:"130602",name:"新市区",parent:"130600"},{value:"130603",name:"北市区",parent:"130600"},{value:"130604",name:"南市区",parent:"130600"},{value:"130621",name:"满城县",parent:"130600"},{value:"130622",name:"清苑县",parent:"130600"},{value:"130623",name:"涞水县",parent:"130600"},{value:"130624",name:"阜平县",parent:"130600"},{value:"130625",name:"徐水县",parent:"130600"},{value:"130626",name:"定兴县",parent:"130600"},{value:"130627",name:"唐县",parent:"130600"},{value:"130628",name:"高阳县",parent:"130600"},{value:"130629",name:"容城县",parent:"130600"},{value:"130630",name:"涞源县",parent:"130600"},{value:"130631",name:"望都县",parent:"130600"},{value:"130632",name:"安新县",parent:"130600"},{value:"130633",name:"易县",parent:"130600"},{value:"130634",name:"曲阳县",parent:"130600"},{value:"130635",name:"蠡县",parent:"130600"},{value:"130636",name:"顺平县",parent:"130600"},{value:"130637",name:"博野县",parent:"130600"},{value:"130638",name:"雄县",parent:"130600"},{value:"130681",name:"涿州市",parent:"130600"},{value:"130682",name:"定州市",parent:"130600"},{value:"130683",name:"安国市",parent:"130600"},{value:"130684",name:"高碑店市",parent:"130600"},{value:"130698",name:"高开区",parent:"130600"},{value:"130699",name:"其它区",parent:"130600"},{value:"130702",name:"桥东区",parent:"130700"},{value:"130703",name:"桥西区",parent:"130700"},{value:"130705",name:"宣化区",parent:"130700"},{value:"130706",name:"下花园区",parent:"130700"},{value:"130721",name:"宣化县",parent:"130700"},{value:"130722",name:"张北县",parent:"130700"},{value:"130723",name:"康保县",parent:"130700"},{value:"130724",name:"沽源县",parent:"130700"},{value:"130725",name:"尚义县",parent:"130700"},{value:"130726",name:"蔚县",parent:"130700"},{value:"130727",name:"阳原县",parent:"130700"},{value:"130728",name:"怀安县",parent:"130700"},{value:"130729",name:"万全县",parent:"130700"},{value:"130730",name:"怀来县",parent:"130700"},{value:"130731",name:"涿鹿县",parent:"130700"},{value:"130732",name:"赤城县",parent:"130700"},{value:"130733",name:"崇礼县",parent:"130700"},{value:"130734",name:"其它区",parent:"130700"},{value:"130802",name:"双桥区",parent:"130800"},{value:"130803",name:"双滦区",parent:"130800"},{value:"130804",name:"鹰手营子矿区",parent:"130800"},{value:"130821",name:"承德县",parent:"130800"},{value:"130822",name:"兴隆县",parent:"130800"},{value:"130823",name:"平泉县",parent:"130800"},{value:"130824",name:"滦平县",parent:"130800"},{value:"130825",name:"隆化县",parent:"130800"},{value:"130826",name:"丰宁满族自治县",parent:"130800"},{value:"130827",name:"宽城满族自治县",parent:"130800"},{value:"130828",name:"围场满族蒙古族自治县",parent:"130800"},{value:"130829",name:"其它区",parent:"130800"},{value:"130902",name:"新华区",parent:"130900"},{value:"130903",name:"运河区",parent:"130900"},{value:"130921",name:"沧县",parent:"130900"},{value:"130922",name:"青县",parent:"130900"},{value:"130923",name:"东光县",parent:"130900"},{value:"130924",name:"海兴县",parent:"130900"},{value:"130925",name:"盐山县",parent:"130900"},{value:"130926",name:"肃宁县",parent:"130900"},{value:"130927",name:"南皮县",parent:"130900"},{value:"130928",name:"吴桥县",parent:"130900"},{value:"130929",name:"献县",parent:"130900"},{value:"130930",name:"孟村回族自治县",parent:"130900"},{value:"130981",name:"泊头市",parent:"130900"},{value:"130982",name:"任丘市",parent:"130900"},{value:"130983",name:"黄骅市",parent:"130900"},{value:"130984",name:"河间市",parent:"130900"},{value:"130985",name:"其它区",parent:"130900"},{value:"131002",name:"安次区",parent:"131000"},{value:"131003",name:"广阳区",parent:"131000"},{value:"131022",name:"固安县",parent:"131000"},{value:"131023",name:"永清县",parent:"131000"},{value:"131024",name:"香河县",parent:"131000"},{value:"131025",name:"大城县",parent:"131000"},{value:"131026",name:"文安县",parent:"131000"},{value:"131028",name:"大厂回族自治县",parent:"131000"},{value:"131051",name:"开发区",parent:"131000"},{value:"131052",name:"燕郊经济技术开发区",parent:"131000"},{value:"131081",name:"霸州市",parent:"131000"},{value:"131082",name:"三河市",parent:"131000"},{value:"131083",name:"其它区",parent:"131000"},{value:"131102",name:"桃城区",parent:"131100"},{value:"131121",name:"枣强县",parent:"131100"},{value:"131122",name:"武邑县",parent:"131100"},{value:"131123",name:"武强县",parent:"131100"},{value:"131124",name:"饶阳县",parent:"131100"},{value:"131125",name:"安平县",parent:"131100"},{value:"131126",name:"故城县",parent:"131100"},{value:"131127",name:"景县",parent:"131100"},{value:"131128",name:"阜城县",parent:"131100"},{value:"131181",name:"冀州市",parent:"131100"},{value:"131182",name:"深州市",parent:"131100"},{value:"131183",name:"其它区",parent:"131100"},{value:"140105",name:"小店区",parent:"140100"},{value:"140106",name:"迎泽区",parent:"140100"},{value:"140107",name:"杏花岭区",parent:"140100"},{value:"140108",name:"尖草坪区",parent:"140100"},{value:"140109",name:"万柏林区",parent:"140100"},{value:"140110",name:"晋源区",parent:"140100"},{value:"140121",name:"清徐县",parent:"140100"},{value:"140122",name:"阳曲县",parent:"140100"},{value:"140123",name:"娄烦县",parent:"140100"},{value:"140181",name:"古交市",parent:"140100"},{value:"140182",name:"其它区",parent:"140100"},{value:"140202",name:"城区",parent:"140200"},{value:"140203",name:"矿区",parent:"140200"},{value:"140211",name:"南郊区",parent:"140200"},{value:"140212",name:"新荣区",parent:"140200"},{value:"140221",name:"阳高县",parent:"140200"},{value:"140222",name:"天镇县",parent:"140200"},{value:"140223",name:"广灵县",parent:"140200"},{value:"140224",name:"灵丘县",parent:"140200"},{value:"140225",name:"浑源县",parent:"140200"},{value:"140226",name:"左云县",parent:"140200"},{value:"140227",name:"大同县",parent:"140200"},{value:"140228",name:"其它区",parent:"140200"},{value:"140302",name:"城区",parent:"140300"},{value:"140303",name:"矿区",parent:"140300"},{value:"140311",name:"郊区",parent:"140300"},{value:"140321",name:"平定县",parent:"140300"},{value:"140322",name:"盂县",parent:"140300"},{value:"140323",name:"其它区",parent:"140300"},{value:"140421",name:"长治县",parent:"140400"},{value:"140423",name:"襄垣县",parent:"140400"},{value:"140424",name:"屯留县",parent:"140400"},{value:"140425",name:"平顺县",parent:"140400"},{value:"140426",name:"黎城县",parent:"140400"},{value:"140427",name:"壶关县",parent:"140400"},{value:"140428",name:"长子县",parent:"140400"},{value:"140429",name:"武乡县",parent:"140400"},{value:"140430",name:"沁县",parent:"140400"},{value:"140431",name:"沁源县",parent:"140400"},{value:"140481",name:"潞城市",parent:"140400"},{value:"140482",name:"城区",parent:"140400"},{value:"140483",name:"郊区",parent:"140400"},{value:"140484",name:"高新区",parent:"140400"},{value:"140485",name:"其它区",parent:"140400"},{value:"140502",name:"城区",parent:"140500"},{value:"140521",name:"沁水县",parent:"140500"},{value:"140522",name:"阳城县",parent:"140500"},{value:"140524",name:"陵川县",parent:"140500"},{value:"140525",name:"泽州县",parent:"140500"},{value:"140581",name:"高平市",parent:"140500"},{value:"140582",name:"其它区",parent:"140500"},{value:"140602",name:"朔城区",parent:"140600"},{value:"140603",name:"平鲁区",parent:"140600"},{value:"140621",name:"山阴县",parent:"140600"},{value:"140622",name:"应县",parent:"140600"},{value:"140623",name:"右玉县",parent:"140600"},{value:"140624",name:"怀仁县",parent:"140600"},{value:"140625",name:"其它区",parent:"140600"},{value:"140702",name:"榆次区",parent:"140700"},{value:"140721",name:"榆社县",parent:"140700"},{value:"140722",name:"左权县",parent:"140700"},{value:"140723",name:"和顺县",parent:"140700"},{value:"140724",name:"昔阳县",parent:"140700"},{value:"140725",name:"寿阳县",parent:"140700"},{value:"140726",name:"太谷县",parent:"140700"},{value:"140727",name:"祁县",parent:"140700"},{value:"140728",name:"平遥县",parent:"140700"},{value:"140729",name:"灵石县",parent:"140700"},{value:"140781",name:"介休市",parent:"140700"},{value:"140782",name:"其它区",parent:"140700"},{value:"140802",name:"盐湖区",parent:"140800"},{value:"140821",name:"临猗县",parent:"140800"},{value:"140822",name:"万荣县",parent:"140800"},{value:"140823",name:"闻喜县",parent:"140800"},{value:"140824",name:"稷山县",parent:"140800"},{value:"140825",name:"新绛县",parent:"140800"},{value:"140826",name:"绛县",parent:"140800"},{value:"140827",name:"垣曲县",parent:"140800"},{value:"140828",name:"夏县",parent:"140800"},{value:"140829",name:"平陆县",parent:"140800"},{value:"140830",name:"芮城县",parent:"140800"},{value:"140881",name:"永济市",parent:"140800"},{value:"140882",name:"河津市",parent:"140800"},{value:"140883",name:"其它区",parent:"140800"},{value:"140902",name:"忻府区",parent:"140900"},{value:"140921",name:"定襄县",parent:"140900"},{value:"140922",name:"五台县",parent:"140900"},{value:"140923",name:"代县",parent:"140900"},{value:"140924",name:"繁峙县",parent:"140900"},{value:"140925",name:"宁武县",parent:"140900"},{value:"140926",name:"静乐县",parent:"140900"},{value:"140927",name:"神池县",parent:"140900"},{value:"140928",name:"五寨县",parent:"140900"},{value:"140929",name:"岢岚县",parent:"140900"},{value:"140930",name:"河曲县",parent:"140900"},{value:"140931",name:"保德县",parent:"140900"},{value:"140932",name:"偏关县",parent:"140900"},{value:"140981",name:"原平市",parent:"140900"},{value:"140982",name:"其它区",parent:"140900"},{value:"141002",name:"尧都区",parent:"141000"},{value:"141021",name:"曲沃县",parent:"141000"},{value:"141022",name:"翼城县",parent:"141000"},{value:"141023",name:"襄汾县",parent:"141000"},{value:"141024",name:"洪洞县",parent:"141000"},{value:"141025",name:"古县",parent:"141000"},{value:"141026",name:"安泽县",parent:"141000"},{value:"141027",name:"浮山县",parent:"141000"},{value:"141028",name:"吉县",parent:"141000"},{value:"141029",name:"乡宁县",parent:"141000"},{value:"141030",name:"大宁县",parent:"141000"},{value:"141031",name:"隰县",parent:"141000"},{value:"141032",name:"永和县",parent:"141000"},{value:"141033",name:"蒲县",parent:"141000"},{value:"141034",name:"汾西县",parent:"141000"},{value:"141081",name:"侯马市",parent:"141000"},{value:"141082",name:"霍州市",parent:"141000"},{value:"141083",name:"其它区",parent:"141000"},{value:"141102",name:"离石区",parent:"141100"},{value:"141121",name:"文水县",parent:"141100"},{value:"141122",name:"交城县",parent:"141100"},{value:"141123",name:"兴县",parent:"141100"},{value:"141124",name:"临县",parent:"141100"},{value:"141125",name:"柳林县",parent:"141100"},{value:"141126",name:"石楼县",parent:"141100"},{value:"141127",name:"岚县",parent:"141100"},{value:"141128",name:"方山县",parent:"141100"},{value:"141129",name:"中阳县",parent:"141100"},{value:"141130",name:"交口县",parent:"141100"},{value:"141181",name:"孝义市",parent:"141100"},{value:"141182",name:"汾阳市",parent:"141100"},{value:"141183",name:"其它区",parent:"141100"},{value:"150102",name:"新城区",parent:"150100"},{value:"150103",name:"回民区",parent:"150100"},{value:"150104",name:"玉泉区",parent:"150100"},{value:"150105",name:"赛罕区",parent:"150100"},{value:"150121",name:"土默特左旗",parent:"150100"},{value:"150122",name:"托克托县",parent:"150100"},{value:"150123",name:"和林格尔县",parent:"150100"},{value:"150124",name:"清水河县",parent:"150100"},{value:"150125",name:"武川县",parent:"150100"},{value:"150126",name:"其它区",parent:"150100"},{value:"150202",name:"东河区",parent:"150200"},{value:"150203",name:"昆都仑区",parent:"150200"},{value:"150204",name:"青山区",parent:"150200"},{value:"150205",name:"石拐区",parent:"150200"},{value:"150206",name:"白云鄂博矿区",parent:"150200"},{value:"150207",name:"九原区",parent:"150200"},{value:"150221",name:"土默特右旗",parent:"150200"},{value:"150222",name:"固阳县",parent:"150200"},{value:"150223",name:"达尔罕茂明安联合旗",parent:"150200"},{value:"150224",name:"其它区",parent:"150200"},{value:"150302",name:"海勃湾区",parent:"150300"},{value:"150303",name:"海南区",parent:"150300"},{value:"150304",name:"乌达区",parent:"150300"},{value:"150305",name:"其它区",parent:"150300"},{value:"150402",name:"红山区",parent:"150400"},{value:"150403",name:"元宝山区",parent:"150400"},{value:"150404",name:"松山区",parent:"150400"},{value:"150421",name:"阿鲁科尔沁旗",parent:"150400"},{value:"150422",name:"巴林左旗",parent:"150400"},{value:"150423",name:"巴林右旗",parent:"150400"},{value:"150424",name:"林西县",parent:"150400"},{value:"150425",name:"克什克腾旗",parent:"150400"},{value:"150426",name:"翁牛特旗",parent:"150400"},{value:"150428",name:"喀喇沁旗",parent:"150400"},{value:"150429",name:"宁城县",parent:"150400"},{value:"150430",name:"敖汉旗",parent:"150400"},{value:"150431",name:"其它区",parent:"150400"},{value:"150502",name:"科尔沁区",parent:"150500"},{value:"150521",name:"科尔沁左翼中旗",parent:"150500"},{value:"150522",name:"科尔沁左翼后旗",parent:"150500"},{value:"150523",name:"开鲁县",parent:"150500"},{value:"150524",name:"库伦旗",parent:"150500"},{value:"150525",name:"奈曼旗",parent:"150500"},{value:"150526",name:"扎鲁特旗",parent:"150500"},{value:"150581",name:"霍林郭勒市",parent:"150500"},{value:"150582",name:"其它区",parent:"150500"},{value:"150602",name:"东胜区",parent:"150600"},{value:"150621",name:"达拉特旗",parent:"150600"},{value:"150622",name:"准格尔旗",parent:"150600"},{value:"150623",name:"鄂托克前旗",parent:"150600"},{value:"150624",name:"鄂托克旗",parent:"150600"},{value:"150625",name:"杭锦旗",parent:"150600"},{value:"150626",name:"乌审旗",parent:"150600"},{value:"150627",name:"伊金霍洛旗",parent:"150600"},{value:"150628",name:"其它区",parent:"150600"},{value:"150702",name:"海拉尔区",parent:"150700"},{value:"150703",name:"扎赉诺尔区",parent:"150700"},{value:"150721",name:"阿荣旗",parent:"150700"},{value:"150722",name:"莫力达瓦达斡尔族自治旗",parent:"150700"},{value:"150723",name:"鄂伦春自治旗",parent:"150700"},{value:"150724",name:"鄂温克族自治旗",parent:"150700"},{value:"150725",name:"陈巴尔虎旗",parent:"150700"},{value:"150726",name:"新巴尔虎左旗",parent:"150700"},{value:"150727",name:"新巴尔虎右旗",parent:"150700"},{value:"150781",name:"满洲里市",parent:"150700"},{value:"150782",name:"牙克石市",parent:"150700"},{value:"150783",name:"扎兰屯市",parent:"150700"},{value:"150784",name:"额尔古纳市",parent:"150700"},{value:"150785",name:"根河市",parent:"150700"},{value:"150786",name:"其它区",parent:"150700"},{value:"150802",name:"临河区",parent:"150800"},{value:"150821",name:"五原县",parent:"150800"},{value:"150822",name:"磴口县",parent:"150800"},{value:"150823",name:"乌拉特前旗",parent:"150800"},{value:"150824",name:"乌拉特中旗",parent:"150800"},{value:"150825",name:"乌拉特后旗",parent:"150800"},{value:"150826",name:"杭锦后旗",parent:"150800"},{value:"150827",name:"其它区",parent:"150800"},{value:"150902",name:"集宁区",parent:"150900"},{value:"150921",name:"卓资县",parent:"150900"},{value:"150922",name:"化德县",parent:"150900"},{value:"150923",name:"商都县",parent:"150900"},{value:"150924",name:"兴和县",parent:"150900"},{value:"150925",name:"凉城县",parent:"150900"},{value:"150926",name:"察哈尔右翼前旗",parent:"150900"},{value:"150927",name:"察哈尔右翼中旗",parent:"150900"},{value:"150928",name:"察哈尔右翼后旗",parent:"150900"},{value:"150929",name:"四子王旗",parent:"150900"},{value:"150981",name:"丰镇市",parent:"150900"},{value:"150982",name:"其它区",parent:"150900"},{value:"152201",name:"乌兰浩特市",parent:"152200"},{value:"152202",name:"阿尔山市",parent:"152200"},{value:"152221",name:"科尔沁右翼前旗",parent:"152200"},{value:"152222",name:"科尔沁右翼中旗",parent:"152200"},{value:"152223",name:"扎赉特旗",parent:"152200"},{value:"152224",name:"突泉县",parent:"152200"},{value:"152225",name:"其它区",parent:"152200"},{value:"152501",name:"二连浩特市",parent:"152500"},{value:"152502",name:"锡林浩特市",parent:"152500"},{value:"152522",name:"阿巴嘎旗",parent:"152500"},{value:"152523",name:"苏尼特左旗",parent:"152500"},{value:"152524",name:"苏尼特右旗",parent:"152500"},{value:"152525",name:"东乌珠穆沁旗",parent:"152500"},{value:"152526",name:"西乌珠穆沁旗",parent:"152500"},{value:"152527",name:"太仆寺旗",parent:"152500"},{value:"152528",name:"镶黄旗",parent:"152500"},{value:"152529",name:"正镶白旗",parent:"152500"},{value:"152530",name:"正蓝旗",parent:"152500"},{value:"152531",name:"多伦县",parent:"152500"},{value:"152532",name:"其它区",parent:"152500"},{value:"152921",name:"阿拉善左旗",parent:"152900"},{value:"152922",name:"阿拉善右旗",parent:"152900"},{value:"152923",name:"额济纳旗",parent:"152900"},{value:"152924",name:"其它区",parent:"152900"},{value:"210102",name:"和平区",parent:"210100"},{value:"210103",name:"沈河区",parent:"210100"},{value:"210104",name:"大东区",parent:"210100"},{value:"210105",name:"皇姑区",parent:"210100"},{value:"210106",name:"铁西区",parent:"210100"},{value:"210111",name:"苏家屯区",parent:"210100"},{value:"210112",name:"浑南区",parent:"210100"},{value:"210113",name:"新城子区",parent:"210100"},{value:"210114",name:"于洪区",parent:"210100"},{value:"210122",name:"辽中县",parent:"210100"},{value:"210123",name:"康平县",parent:"210100"},{value:"210124",name:"法库县",parent:"210100"},{value:"210181",name:"新民市",parent:"210100"},{value:"210182",name:"浑南新区",parent:"210100"},{value:"210183",name:"张士开发区",parent:"210100"},{value:"210184",name:"沈北新区",parent:"210100"},{value:"210185",name:"其它区",parent:"210100"},{value:"210202",name:"中山区",parent:"210200"},{value:"210203",name:"西岗区",parent:"210200"},{value:"210204",name:"沙河口区",parent:"210200"},{value:"210211",name:"甘井子区",parent:"210200"},{value:"210212",name:"旅顺口区",parent:"210200"},{value:"210213",name:"金州区",parent:"210200"},{value:"210224",name:"长海县",parent:"210200"},{value:"210251",name:"开发区",parent:"210200"},{value:"210281",name:"瓦房店市",parent:"210200"},{value:"210282",name:"普兰店市",parent:"210200"},{value:"210283",name:"庄河市",parent:"210200"},{value:"210297",name:"岭前区",parent:"210200"},{value:"210298",name:"其它区",parent:"210200"},{value:"210302",name:"铁东区",parent:"210300"},{value:"210303",name:"铁西区",parent:"210300"},{value:"210304",name:"立山区",parent:"210300"},{value:"210311",name:"千山区",parent:"210300"},{value:"210321",name:"台安县",parent:"210300"},{value:"210323",name:"岫岩满族自治县",parent:"210300"},{value:"210351",name:"高新区",parent:"210300"},{value:"210381",name:"海城市",parent:"210300"},{value:"210382",name:"其它区",parent:"210300"},{value:"210402",name:"新抚区",parent:"210400"},{value:"210403",name:"东洲区",parent:"210400"},{value:"210404",name:"望花区",parent:"210400"},{value:"210411",name:"顺城区",parent:"210400"},{value:"210421",name:"抚顺县",parent:"210400"},{value:"210422",name:"新宾满族自治县",parent:"210400"},{value:"210423",name:"清原满族自治县",parent:"210400"},{value:"210424",name:"其它区",parent:"210400"},{value:"210502",name:"平山区",parent:"210500"},{value:"210503",name:"溪湖区",parent:"210500"},{value:"210504",name:"明山区",parent:"210500"},{value:"210505",name:"南芬区",parent:"210500"},{value:"210521",name:"本溪满族自治县",parent:"210500"},{value:"210522",name:"桓仁满族自治县",parent:"210500"},{value:"210523",name:"其它区",parent:"210500"},{value:"210602",name:"元宝区",parent:"210600"},{value:"210603",name:"振兴区",parent:"210600"},{value:"210604",name:"振安区",parent:"210600"},{value:"210624",name:"宽甸满族自治县",parent:"210600"},{value:"210681",name:"东港市",parent:"210600"},{value:"210682",name:"凤城市",parent:"210600"},{value:"210683",name:"其它区",parent:"210600"},{value:"210702",name:"古塔区",parent:"210700"},{value:"210703",name:"凌河区",parent:"210700"},{value:"210711",name:"太和区",parent:"210700"},{value:"210726",name:"黑山县",parent:"210700"},{value:"210727",name:"义县",parent:"210700"},{value:"210781",name:"凌海市",parent:"210700"},{value:"210782",name:"北镇市",parent:"210700"},{value:"210783",name:"其它区",parent:"210700"},{value:"210802",name:"站前区",parent:"210800"},{value:"210803",name:"西市区",parent:"210800"},{value:"210804",name:"鲅鱼圈区",parent:"210800"},{value:"210811",name:"老边区",parent:"210800"},{value:"210881",name:"盖州市",parent:"210800"},{value:"210882",name:"大石桥市",parent:"210800"},{value:"210883",name:"其它区",parent:"210800"},{value:"210902",name:"海州区",parent:"210900"},{value:"210903",name:"新邱区",parent:"210900"},{value:"210904",name:"太平区",parent:"210900"},{value:"210905",name:"清河门区",parent:"210900"},{value:"210911",name:"细河区",parent:"210900"},{value:"210921",name:"阜新蒙古族自治县",parent:"210900"},{value:"210922",name:"彰武县",parent:"210900"},{value:"210923",name:"其它区",parent:"210900"},{value:"211002",name:"白塔区",parent:"211000"},{value:"211003",name:"文圣区",parent:"211000"},{value:"211004",name:"宏伟区",parent:"211000"},{value:"211005",name:"弓长岭区",parent:"211000"},{value:"211011",name:"太子河区",parent:"211000"},{value:"211021",name:"辽阳县",parent:"211000"},{value:"211081",name:"灯塔市",parent:"211000"},{value:"211082",name:"其它区",parent:"211000"},{value:"211102",name:"双台子区",parent:"211100"},{value:"211103",name:"兴隆台区",parent:"211100"},{value:"211121",name:"大洼县",parent:"211100"},{value:"211122",name:"盘山县",parent:"211100"},{value:"211123",name:"其它区",parent:"211100"},{value:"211202",name:"银州区",parent:"211200"},{value:"211204",name:"清河区",parent:"211200"},{value:"211221",name:"铁岭县",parent:"211200"},{value:"211223",name:"西丰县",parent:"211200"},{value:"211224",name:"昌图县",parent:"211200"},{value:"211281",name:"调兵山市",parent:"211200"},{value:"211282",name:"开原市",parent:"211200"},{value:"211283",name:"其它区",parent:"211200"},{value:"211302",name:"双塔区",parent:"211300"},{value:"211303",name:"龙城区",parent:"211300"},{value:"211321",name:"朝阳县",parent:"211300"},{value:"211322",name:"建平县",parent:"211300"},{value:"211324",name:"喀喇沁左翼蒙古族自治县",parent:"211300"},{value:"211381",name:"北票市",parent:"211300"},{value:"211382",name:"凌源市",parent:"211300"},{value:"211383",name:"其它区",parent:"211300"},{value:"211402",name:"连山区",parent:"211400"},{value:"211403",name:"龙港区",parent:"211400"},{value:"211404",name:"南票区",parent:"211400"},{value:"211421",name:"绥中县",parent:"211400"},{value:"211422",name:"建昌县",parent:"211400"},{value:"211481",name:"兴城市",parent:"211400"},{value:"211482",name:"其它区",parent:"211400"},{value:"220102",name:"南关区",parent:"220100"},{value:"220103",name:"宽城区",parent:"220100"},{value:"220104",name:"朝阳区",parent:"220100"},{value:"220105",name:"二道区",parent:"220100"},{value:"220106",name:"绿园区",parent:"220100"},{value:"220112",name:"双阳区",parent:"220100"},{value:"220122",name:"农安县",parent:"220100"},{value:"220181",name:"九台区",parent:"220100"},{value:"220182",name:"榆树市",parent:"220100"},{value:"220183",name:"德惠市",parent:"220100"},{value:"220184",name:"高新技术产业开发区",parent:"220100"},{value:"220185",name:"汽车产业开发区",parent:"220100"},{value:"220186",name:"经济技术开发区",parent:"220100"},{value:"220187",name:"净月旅游开发区",parent:"220100"},{value:"220188",name:"其它区",parent:"220100"},{value:"220202",name:"昌邑区",parent:"220200"},{value:"220203",name:"龙潭区",parent:"220200"},{value:"220204",name:"船营区",parent:"220200"},{value:"220211",name:"丰满区",parent:"220200"},{value:"220221",name:"永吉县",parent:"220200"},{value:"220281",name:"蛟河市",parent:"220200"},{value:"220282",name:"桦甸市",parent:"220200"},{value:"220283",name:"舒兰市",parent:"220200"},{value:"220284",name:"磐石市",parent:"220200"},{value:"220285",name:"其它区",parent:"220200"},{value:"220302",name:"铁西区",parent:"220300"},{value:"220303",name:"铁东区",parent:"220300"},{value:"220322",name:"梨树县",parent:"220300"},{value:"220323",name:"伊通满族自治县",parent:"220300"},{value:"220381",name:"公主岭市",parent:"220300"},{value:"220382",name:"双辽市",parent:"220300"},{value:"220383",name:"其它区",parent:"220300"},{value:"220402",name:"龙山区",parent:"220400"},{value:"220403",name:"西安区",parent:"220400"},{value:"220421",name:"东丰县",parent:"220400"},{value:"220422",name:"东辽县",parent:"220400"},{value:"220423",name:"其它区",parent:"220400"},{value:"220502",name:"东昌区",parent:"220500"},{value:"220503",name:"二道江区",parent:"220500"},{value:"220521",name:"通化县",parent:"220500"},{value:"220523",name:"辉南县",parent:"220500"},{value:"220524",name:"柳河县",parent:"220500"},{value:"220581",name:"梅河口市",parent:"220500"},{value:"220582",name:"集安市",parent:"220500"},{value:"220583",name:"其它区",parent:"220500"},{value:"220602",name:"浑江区",parent:"220600"},{value:"220621",name:"抚松县",parent:"220600"},{value:"220622",name:"靖宇县",parent:"220600"},{value:"220623",name:"长白朝鲜族自治县",parent:"220600"},{value:"220625",name:"江源区",parent:"220600"},{value:"220681",name:"临江市",parent:"220600"},{value:"220682",name:"其它区",parent:"220600"},{value:"220702",name:"宁江区",parent:"220700"},{value:"220721",name:"前郭尔罗斯蒙古族自治县",parent:"220700"},{value:"220722",name:"长岭县",parent:"220700"},{value:"220723",name:"乾安县",parent:"220700"},{value:"220724",name:"扶余市",parent:"220700"},{value:"220725",name:"其它区",parent:"220700"},{value:"220802",name:"洮北区",parent:"220800"},{value:"220821",name:"镇赉县",parent:"220800"},{value:"220822",name:"通榆县",parent:"220800"},{value:"220881",name:"洮南市",parent:"220800"},{value:"220882",name:"大安市",parent:"220800"},{value:"220883",name:"其它区",parent:"220800"},{value:"222401",name:"延吉市",parent:"222400"},{value:"222402",name:"图们市",parent:"222400"},{value:"222403",name:"敦化市",parent:"222400"},{value:"222404",name:"珲春市",parent:"222400"},{value:"222405",name:"龙井市",parent:"222400"},{value:"222406",name:"和龙市",parent:"222400"},{value:"222424",name:"汪清县",parent:"222400"},{value:"222426",name:"安图县",parent:"222400"},{value:"222427",name:"其它区",parent:"222400"},{value:"230102",name:"道里区",parent:"230100"},{value:"230103",name:"南岗区",parent:"230100"},{value:"230104",name:"道外区",parent:"230100"},{value:"230106",name:"香坊区",parent:"230100"},{value:"230107",name:"动力区",parent:"230100"},{value:"230108",name:"平房区",parent:"230100"},{value:"230109",name:"松北区",parent:"230100"},{value:"230111",name:"呼兰区",parent:"230100"},{value:"230123",name:"依兰县",parent:"230100"},{value:"230124",name:"方正县",parent:"230100"},{value:"230125",name:"宾县",parent:"230100"},{value:"230126",name:"巴彦县",parent:"230100"},{value:"230127",name:"木兰县",parent:"230100"},{value:"230128",name:"通河县",parent:"230100"},{value:"230129",name:"延寿县",parent:"230100"},{value:"230181",name:"阿城区",parent:"230100"},{value:"230182",name:"双城区",parent:"230100"},{value:"230183",name:"尚志市",parent:"230100"},{value:"230184",name:"五常市",parent:"230100"},{value:"230185",name:"阿城市",parent:"230100"},{value:"230186",name:"其它区",parent:"230100"},{value:"230202",name:"龙沙区",parent:"230200"},{value:"230203",name:"建华区",parent:"230200"},{value:"230204",name:"铁锋区",parent:"230200"},{value:"230205",name:"昂昂溪区",parent:"230200"},{value:"230206",name:"富拉尔基区",parent:"230200"},{value:"230207",name:"碾子山区",parent:"230200"},{value:"230208",name:"梅里斯达斡尔族区",parent:"230200"},{value:"230221",name:"龙江县",parent:"230200"},{value:"230223",name:"依安县",parent:"230200"},{value:"230224",name:"泰来县",parent:"230200"},{value:"230225",name:"甘南县",parent:"230200"},{value:"230227",name:"富裕县",parent:"230200"},{value:"230229",name:"克山县",parent:"230200"},{value:"230230",name:"克东县",parent:"230200"},{value:"230231",name:"拜泉县",parent:"230200"},{value:"230281",name:"讷河市",parent:"230200"},{value:"230282",name:"其它区",parent:"230200"},{value:"230302",name:"鸡冠区",parent:"230300"},{value:"230303",name:"恒山区",parent:"230300"},{value:"230304",name:"滴道区",parent:"230300"},{value:"230305",name:"梨树区",parent:"230300"},{value:"230306",name:"城子河区",parent:"230300"},{value:"230307",name:"麻山区",parent:"230300"},{value:"230321",name:"鸡东县",parent:"230300"},{value:"230381",name:"虎林市",parent:"230300"},{value:"230382",name:"密山市",parent:"230300"},{value:"230383",name:"其它区",parent:"230300"},{value:"230402",name:"向阳区",parent:"230400"},{value:"230403",name:"工农区",parent:"230400"},{value:"230404",name:"南山区",parent:"230400"},{value:"230405",name:"兴安区",parent:"230400"},{value:"230406",name:"东山区",parent:"230400"},{value:"230407",name:"兴山区",parent:"230400"},{value:"230421",name:"萝北县",parent:"230400"},{value:"230422",name:"绥滨县",parent:"230400"},{value:"230423",name:"其它区",parent:"230400"},{value:"230502",name:"尖山区",parent:"230500"},{value:"230503",name:"岭东区",parent:"230500"},{value:"230505",name:"四方台区",parent:"230500"},{value:"230506",name:"宝山区",parent:"230500"},{value:"230521",name:"集贤县",parent:"230500"},{value:"230522",name:"友谊县",parent:"230500"},{value:"230523",name:"宝清县",parent:"230500"},{value:"230524",name:"饶河县",parent:"230500"},{value:"230525",name:"其它区",parent:"230500"},{value:"230602",name:"萨尔图区",parent:"230600"},{value:"230603",name:"龙凤区",parent:"230600"},{value:"230604",name:"让胡路区",parent:"230600"},{value:"230605",name:"红岗区",parent:"230600"},{value:"230606",name:"大同区",parent:"230600"},{value:"230621",name:"肇州县",parent:"230600"},{value:"230622",name:"肇源县",parent:"230600"},{value:"230623",name:"林甸县",parent:"230600"},{value:"230624",name:"杜尔伯特蒙古族自治县",parent:"230600"},{value:"230625",name:"其它区",parent:"230600"},{value:"230702",name:"伊春区",parent:"230700"},{value:"230703",name:"南岔区",parent:"230700"},{value:"230704",name:"友好区",parent:"230700"},{value:"230705",name:"西林区",parent:"230700"},{value:"230706",name:"翠峦区",parent:"230700"},{value:"230707",name:"新青区",parent:"230700"},{value:"230708",name:"美溪区",parent:"230700"},{value:"230709",name:"金山屯区",parent:"230700"},{value:"230710",name:"五营区",parent:"230700"},{value:"230711",name:"乌马河区",parent:"230700"},{value:"230712",name:"汤旺河区",parent:"230700"},{value:"230713",name:"带岭区",parent:"230700"},{value:"230714",name:"乌伊岭区",parent:"230700"},{value:"230715",name:"红星区",parent:"230700"},{value:"230716",name:"上甘岭区",parent:"230700"},{value:"230722",name:"嘉荫县",parent:"230700"},{value:"230781",name:"铁力市",parent:"230700"},{value:"230782",name:"其它区",parent:"230700"},{value:"230802",name:"永红区",parent:"230800"},{value:"230803",name:"向阳区",parent:"230800"},{value:"230804",name:"前进区",parent:"230800"},{value:"230805",name:"东风区",parent:"230800"},{value:"230811",name:"郊区",parent:"230800"},{value:"230822",name:"桦南县",parent:"230800"},{value:"230826",name:"桦川县",parent:"230800"},{value:"230828",name:"汤原县",parent:"230800"},{value:"230833",name:"抚远县",parent:"230800"},{value:"230881",name:"同江市",parent:"230800"},{value:"230882",name:"富锦市",parent:"230800"},{value:"230883",name:"其它区",parent:"230800"},{value:"230902",name:"新兴区",parent:"230900"},{value:"230903",name:"桃山区",parent:"230900"},{value:"230904",name:"茄子河区",parent:"230900"},{value:"230921",name:"勃利县",parent:"230900"},{value:"230922",name:"其它区",parent:"230900"},{value:"231002",name:"东安区",parent:"231000"},{value:"231003",name:"阳明区",parent:"231000"},{value:"231004",name:"爱民区",parent:"231000"},{value:"231005",name:"西安区",parent:"231000"},{value:"231024",name:"东宁县",parent:"231000"},{value:"231025",name:"林口县",parent:"231000"},{value:"231081",name:"绥芬河市",parent:"231000"},{value:"231083",name:"海林市",parent:"231000"},{value:"231084",name:"宁安市",parent:"231000"},{value:"231085",name:"穆棱市",parent:"231000"},{value:"231086",name:"其它区",parent:"231000"},{value:"231102",name:"爱辉区",parent:"231100"},{value:"231121",name:"嫩江县",parent:"231100"},{value:"231123",name:"逊克县",parent:"231100"},{value:"231124",name:"孙吴县",parent:"231100"},{value:"231181",name:"北安市",parent:"231100"},{value:"231182",name:"五大连池市",parent:"231100"},{value:"231183",name:"其它区",parent:"231100"},{value:"231202",name:"北林区",parent:"231200"},{value:"231221",name:"望奎县",parent:"231200"},{value:"231222",name:"兰西县",parent:"231200"},{value:"231223",name:"青冈县",parent:"231200"},{value:"231224",name:"庆安县",parent:"231200"},{value:"231225",name:"明水县",parent:"231200"},{value:"231226",name:"绥棱县",parent:"231200"},{value:"231281",name:"安达市",parent:"231200"},{value:"231282",name:"肇东市",parent:"231200"},{value:"231283",name:"海伦市",parent:"231200"},{value:"231284",name:"其它区",parent:"231200"},{value:"232702",name:"松岭区",parent:"232700"},{value:"232703",name:"新林区",parent:"232700"},{value:"232704",name:"呼中区",parent:"232700"},{value:"232721",name:"呼玛县",parent:"232700"},{value:"232722",name:"塔河县",parent:"232700"},{value:"232723",name:"漠河县",parent:"232700"},{value:"232724",name:"加格达奇区",parent:"232700"},{value:"232725",name:"其它区",parent:"232700"},{value:"310101",name:"黄浦区",parent:"310100"},{value:"310103",name:"卢湾区",parent:"310100"},{value:"310104",name:"徐汇区",parent:"310100"},{value:"310105",name:"长宁区",parent:"310100"},{value:"310106",name:"静安区",parent:"310100"},{value:"310107",name:"普陀区",parent:"310100"},{value:"310108",name:"闸北区",parent:"310100"},{value:"310109",name:"虹口区",parent:"310100"},{value:"310110",name:"杨浦区",parent:"310100"},{value:"310112",name:"闵行区",parent:"310100"},{value:"310113",name:"宝山区",parent:"310100"},{value:"310114",name:"嘉定区",parent:"310100"},{value:"310115",name:"浦东新区",parent:"310100"},{value:"310116",name:"金山区",parent:"310100"},{value:"310117",name:"松江区",parent:"310100"},{value:"310118",name:"青浦区",parent:"310100"},{value:"310119",name:"南汇区",parent:"310100"},{value:"310120",name:"奉贤区",parent:"310100"},{value:"310152",name:"川沙区",parent:"310100"},{value:"310230",name:"崇明县",parent:"310100"},{value:"310231",name:"其它区",parent:"310100"},{value:"320102",name:"玄武区",parent:"320100"},{value:"320103",name:"白下区",parent:"320100"},{value:"320104",name:"秦淮区",parent:"320100"},{value:"320105",name:"建邺区",parent:"320100"},{value:"320106",name:"鼓楼区",parent:"320100"},{value:"320107",name:"下关区",parent:"320100"},{value:"320111",name:"浦口区",parent:"320100"},{value:"320113",name:"栖霞区",parent:"320100"},{value:"320114",name:"雨花台区",parent:"320100"},{value:"320115",name:"江宁区",parent:"320100"},{value:"320116",name:"六合区",parent:"320100"},{value:"320124",name:"溧水区",parent:"320100"},{value:"320125",name:"高淳区",parent:"320100"},{value:"320126",name:"其它区",parent:"320100"},{value:"320202",name:"崇安区",parent:"320200"},{value:"320203",name:"南长区",parent:"320200"},{value:"320204",name:"北塘区",parent:"320200"},{value:"320205",name:"锡山区",parent:"320200"},{value:"320206",name:"惠山区",parent:"320200"},{value:"320211",name:"滨湖区",parent:"320200"},{value:"320213",name:"梁溪区",parent:"320200"},{value:"320214",name:"新吴区",parent:"320200"},{value:"320281",name:"江阴市",parent:"320200"},{value:"320282",name:"宜兴市",parent:"320200"},{value:"320296",name:"新区",parent:"320200"},{value:"320297",name:"其它区",parent:"320200"},{value:"320302",name:"鼓楼区",parent:"320300"},{value:"320303",name:"云龙区",parent:"320300"},{value:"320304",name:"九里区",parent:"320300"},{value:"320305",name:"贾汪区",parent:"320300"},{value:"320311",name:"泉山区",parent:"320300"},{value:"320321",name:"丰县",parent:"320300"},{value:"320322",name:"沛县",parent:"320300"},{value:"320323",name:"铜山区",parent:"320300"},{value:"320324",name:"睢宁县",parent:"320300"},{value:"320381",name:"新沂市",parent:"320300"},{value:"320382",name:"邳州市",parent:"320300"},{value:"320383",name:"其它区",parent:"320300"},{value:"320402",name:"天宁区",parent:"320400"},{value:"320404",name:"钟楼区",parent:"320400"},{value:"320405",name:"戚墅堰区",parent:"320400"},{value:"320411",name:"新北区",parent:"320400"},{value:"320412",name:"武进区",parent:"320400"},{value:"320481",name:"溧阳市",parent:"320400"},{value:"320482",name:"金坛市",parent:"320400"},{value:"320483",name:"其它区",parent:"320400"},{value:"320502",name:"沧浪区",parent:"320500"},{value:"320503",name:"平江区",parent:"320500"},{value:"320504",name:"金阊区",parent:"320500"},{value:"320505",name:"虎丘区",parent:"320500"},{value:"320506",name:"吴中区",parent:"320500"},{value:"320507",name:"相城区",parent:"320500"},{value:"320508",name:"姑苏区",parent:"320500"},{value:"320581",name:"常熟市",parent:"320500"},{value:"320582",name:"张家港市",parent:"320500"},{value:"320583",name:"昆山市",parent:"320500"},{value:"320584",name:"吴江区",parent:"320500"},{value:"320585",name:"太仓市",parent:"320500"},{value:"320594",name:"新区",parent:"320500"},{value:"320595",name:"园区",parent:"320500"},{value:"320596",name:"其它区",parent:"320500"},{value:"320602",name:"崇川区",parent:"320600"},{value:"320611",name:"港闸区",parent:"320600"},{value:"320612",name:"通州区",parent:"320600"},{value:"320621",name:"海安县",parent:"320600"},{value:"320623",name:"如东县",parent:"320600"},{value:"320681",name:"启东市",parent:"320600"},{value:"320682",name:"如皋市",parent:"320600"},{value:"320683",name:"通州市",parent:"320600"},{value:"320684",name:"海门市",parent:"320600"},{value:"320693",name:"开发区",parent:"320600"},{value:"320694",name:"其它区",parent:"320600"},{value:"320703",name:"连云区",parent:"320700"},{value:"320705",name:"新浦区",parent:"320700"},{value:"320706",name:"海州区",parent:"320700"},{value:"320721",name:"赣榆区",parent:"320700"},{value:"320722",name:"东海县",parent:"320700"},{value:"320723",name:"灌云县",parent:"320700"},{value:"320724",name:"灌南县",parent:"320700"},{value:"320725",name:"其它区",parent:"320700"},{value:"320802",name:"清河区",parent:"320800"},{value:"320803",name:"淮安区",parent:"320800"},{value:"320804",name:"淮阴区",parent:"320800"},{value:"320811",name:"清浦区",parent:"320800"},{value:"320826",name:"涟水县",parent:"320800"},{value:"320829",name:"洪泽县",parent:"320800"},{value:"320830",name:"盱眙县",parent:"320800"},{value:"320831",name:"金湖县",parent:"320800"},{value:"320832",name:"其它区",parent:"320800"},{value:"320902",name:"亭湖区",parent:"320900"},{value:"320903",name:"盐都区",parent:"320900"},{value:"320921",name:"响水县",parent:"320900"},{value:"320922",name:"滨海县",parent:"320900"},{value:"320923",name:"阜宁县",parent:"320900"},{value:"320924",name:"射阳县",parent:"320900"},{value:"320925",name:"建湖县",parent:"320900"},{value:"320981",name:"东台市",parent:"320900"},{value:"320982",name:"大丰市",parent:"320900"},{value:"320983",name:"其它区",parent:"320900"},{value:"321002",name:"广陵区",parent:"321000"},{value:"321003",name:"邗江区",parent:"321000"},{value:"321011",name:"维扬区",parent:"321000"},{value:"321023",name:"宝应县",parent:"321000"},{value:"321081",name:"仪征市",parent:"321000"},{value:"321084",name:"高邮市",parent:"321000"},{value:"321088",name:"江都区",parent:"321000"},{value:"321092",name:"经济开发区",parent:"321000"},{value:"321093",name:"其它区",parent:"321000"},{value:"321102",name:"京口区",parent:"321100"},{value:"321111",name:"润州区",parent:"321100"},{value:"321112",name:"丹徒区",parent:"321100"},{value:"321181",name:"丹阳市",parent:"321100"},{value:"321182",name:"扬中市",parent:"321100"},{value:"321183",name:"句容市",parent:"321100"},{value:"321184",name:"其它区",parent:"321100"},{value:"321202",name:"海陵区",parent:"321200"},{value:"321203",name:"高港区",parent:"321200"},{value:"321281",name:"兴化市",parent:"321200"},{value:"321282",name:"靖江市",parent:"321200"},{value:"321283",name:"泰兴市",parent:"321200"},{value:"321284",name:"姜堰区",parent:"321200"},{value:"321285",name:"其它区",parent:"321200"},{value:"321302",name:"宿城区",parent:"321300"},{value:"321311",name:"宿豫区",parent:"321300"},{value:"321322",name:"沭阳县",parent:"321300"},{value:"321323",name:"泗阳县",parent:"321300"},{value:"321324",name:"泗洪县",parent:"321300"},{value:"321325",name:"其它区",parent:"321300"},{value:"330102",name:"上城区",parent:"330100"},{value:"330103",name:"下城区",parent:"330100"},{value:"330104",name:"江干区",parent:"330100"},{value:"330105",name:"拱墅区",parent:"330100"},{value:"330106",name:"西湖区",parent:"330100"},{value:"330108",name:"滨江区",parent:"330100"},{value:"330109",name:"萧山区",parent:"330100"},{value:"330110",name:"余杭区",parent:"330100"},{value:"330122",name:"桐庐县",parent:"330100"},{value:"330127",name:"淳安县",parent:"330100"},{value:"330182",name:"建德市",parent:"330100"},{value:"330183",name:"富阳区",parent:"330100"},{value:"330185",name:"临安市",parent:"330100"},{value:"330186",name:"其它区",parent:"330100"},{value:"330203",name:"海曙区",parent:"330200"},{value:"330204",name:"江东区",parent:"330200"},{value:"330205",name:"江北区",parent:"330200"},{value:"330206",name:"北仑区",parent:"330200"},{value:"330211",name:"镇海区",parent:"330200"},{value:"330212",name:"鄞州区",parent:"330200"},{value:"330225",name:"象山县",parent:"330200"},{value:"330226",name:"宁海县",parent:"330200"},{value:"330281",name:"余姚市",parent:"330200"},{value:"330282",name:"慈溪市",parent:"330200"},{value:"330283",name:"奉化市",parent:"330200"},{value:"330284",name:"其它区",parent:"330200"},{value:"330302",name:"鹿城区",parent:"330300"},{value:"330303",name:"龙湾区",parent:"330300"},{value:"330304",name:"瓯海区",parent:"330300"},{value:"330322",name:"洞头县",parent:"330300"},{value:"330324",name:"永嘉县",parent:"330300"},{value:"330326",name:"平阳县",parent:"330300"},{value:"330327",name:"苍南县",parent:"330300"},{value:"330328",name:"文成县",parent:"330300"},{value:"330329",name:"泰顺县",parent:"330300"},{value:"330381",name:"瑞安市",parent:"330300"},{value:"330382",name:"乐清市",parent:"330300"},{value:"330383",name:"其它区",parent:"330300"},{value:"330402",name:"南湖区",parent:"330400"},{value:"330411",name:"秀洲区",parent:"330400"},{value:"330421",name:"嘉善县",parent:"330400"},{value:"330424",name:"海盐县",parent:"330400"},{value:"330481",name:"海宁市",parent:"330400"},{value:"330482",name:"平湖市",parent:"330400"},{value:"330483",name:"桐乡市",parent:"330400"},{value:"330484",name:"其它区",parent:"330400"},{value:"330502",name:"吴兴区",parent:"330500"},{value:"330503",name:"南浔区",parent:"330500"},{value:"330521",name:"德清县",parent:"330500"},{value:"330522",name:"长兴县",parent:"330500"},{value:"330523",name:"安吉县",parent:"330500"},{value:"330524",name:"其它区",parent:"330500"},{value:"330602",name:"越城区",parent:"330600"},{value:"330621",name:"柯桥区",parent:"330600"},{value:"330624",name:"新昌县",parent:"330600"},{value:"330681",name:"诸暨市",parent:"330600"},{value:"330682",name:"上虞区",parent:"330600"},{value:"330683",name:"嵊州市",parent:"330600"},{value:"330684",name:"其它区",parent:"330600"},{value:"330702",name:"婺城区",parent:"330700"},{value:"330703",name:"金东区",parent:"330700"},{value:"330723",name:"武义县",parent:"330700"},{value:"330726",name:"浦江县",parent:"330700"},{value:"330727",name:"磐安县",parent:"330700"},{value:"330781",name:"兰溪市",parent:"330700"},{value:"330782",name:"义乌市",parent:"330700"},{value:"330783",name:"东阳市",parent:"330700"},{value:"330784",name:"永康市",parent:"330700"},{value:"330785",name:"其它区",parent:"330700"},{value:"330802",name:"柯城区",parent:"330800"},{value:"330803",name:"衢江区",parent:"330800"},{value:"330822",name:"常山县",parent:"330800"},{value:"330824",name:"开化县",parent:"330800"},{value:"330825",name:"龙游县",parent:"330800"},{value:"330881",name:"江山市",parent:"330800"},{value:"330882",name:"其它区",parent:"330800"},{value:"330902",name:"定海区",parent:"330900"},{value:"330903",name:"普陀区",parent:"330900"},{value:"330921",name:"岱山县",parent:"330900"},{value:"330922",name:"嵊泗县",parent:"330900"},{value:"330923",name:"其它区",parent:"330900"},{value:"331002",name:"椒江区",parent:"331000"},{value:"331003",name:"黄岩区",parent:"331000"},{value:"331004",name:"路桥区",parent:"331000"},{value:"331021",name:"玉环县",parent:"331000"},{value:"331022",name:"三门县",parent:"331000"},{value:"331023",name:"天台县",parent:"331000"},{value:"331024",name:"仙居县",parent:"331000"},{value:"331081",name:"温岭市",parent:"331000"},{value:"331082",name:"临海市",parent:"331000"},{value:"331083",name:"其它区",parent:"331000"},{value:"331102",name:"莲都区",parent:"331100"},{value:"331121",name:"青田县",parent:"331100"},{value:"331122",name:"缙云县",parent:"331100"},{value:"331123",name:"遂昌县",parent:"331100"},{value:"331124",name:"松阳县",parent:"331100"},{value:"331125",name:"云和县",parent:"331100"},{value:"331126",name:"庆元县",parent:"331100"},{value:"331127",name:"景宁畲族自治县",parent:"331100"},{value:"331181",name:"龙泉市",parent:"331100"},{value:"331182",name:"其它区",parent:"331100"},{value:"340102",name:"瑶海区",parent:"340100"},{value:"340103",name:"庐阳区",parent:"340100"},{value:"340104",name:"蜀山区",parent:"340100"},{value:"340111",name:"包河区",parent:"340100"},{value:"340121",name:"长丰县",parent:"340100"},{value:"340122",name:"肥东县",parent:"340100"},{value:"340123",name:"肥西县",parent:"340100"},{value:"340151",name:"高新区",parent:"340100"},{value:"340191",name:"中区",parent:"340100"},{value:"340192",name:"其它区",parent:"340100"},{value:"340202",name:"镜湖区",parent:"340200"},{value:"340203",name:"弋江区",parent:"340200"},{value:"340207",name:"鸠江区",parent:"340200"},{value:"340208",name:"三山区",parent:"340200"},{value:"340221",name:"芜湖县",parent:"340200"},{value:"340222",name:"繁昌县",parent:"340200"},{value:"340223",name:"南陵县",parent:"340200"},{value:"340224",name:"其它区",parent:"340200"},{value:"340302",name:"龙子湖区",parent:"340300"},{value:"340303",name:"蚌山区",parent:"340300"},{value:"340304",name:"禹会区",parent:"340300"},{value:"340311",name:"淮上区",parent:"340300"},{value:"340321",name:"怀远县",parent:"340300"},{value:"340322",name:"五河县",parent:"340300"},{value:"340323",name:"固镇县",parent:"340300"},{value:"340324",name:"其它区",parent:"340300"},{value:"340402",name:"大通区",parent:"340400"},{value:"340403",name:"田家庵区",parent:"340400"},{value:"340404",name:"谢家集区",parent:"340400"},{value:"340405",name:"八公山区",parent:"340400"},{value:"340406",name:"潘集区",parent:"340400"},{value:"340421",name:"凤台县",parent:"340400"},{value:"340422",name:"其它区",parent:"340400"},{value:"340499",name:"寿县",parent:"340400"},{value:"340502",name:"金家庄区",parent:"340500"},{value:"340503",name:"花山区",parent:"340500"},{value:"340504",name:"雨山区",parent:"340500"},{value:"340506",name:"博望区",parent:"340500"},{value:"340521",name:"当涂县",parent:"340500"},{value:"340522",name:"其它区",parent:"340500"},{value:"340602",name:"杜集区",parent:"340600"},{value:"340603",name:"相山区",parent:"340600"},{value:"340604",name:"烈山区",parent:"340600"},{value:"340621",name:"濉溪县",parent:"340600"},{value:"340622",name:"其它区",parent:"340600"},{value:"340702",name:"铜官山区",parent:"340700"},{value:"340703",name:"狮子山区",parent:"340700"},{value:"340705",name:"铜官区",parent:"340700"},{value:"340711",name:"郊区",parent:"340700"},{value:"340721",name:"铜陵县",parent:"340700"},{value:"340722",name:"其它区",parent:"340700"},{value:"340799",name:"枞阳县",parent:"340700"},{value:"340802",name:"迎江区",parent:"340800"},{value:"340803",name:"大观区",parent:"340800"},{value:"340811",name:"宜秀区",parent:"340800"},{value:"340822",name:"怀宁县",parent:"340800"},{value:"340823",name:"枞阳县",parent:"340800"},{value:"340824",name:"潜山县",parent:"340800"},{value:"340825",name:"太湖县",parent:"340800"},{value:"340826",name:"宿松县",parent:"340800"},{value:"340827",name:"望江县",parent:"340800"},{value:"340828",name:"岳西县",parent:"340800"},{value:"340881",name:"桐城市",parent:"340800"},{value:"340882",name:"其它区",parent:"340800"},{value:"341002",name:"屯溪区",parent:"341000"},{value:"341003",name:"黄山区",parent:"341000"},{value:"341004",name:"徽州区",parent:"341000"},{value:"341021",name:"歙县",parent:"341000"},{value:"341022",name:"休宁县",parent:"341000"},{value:"341023",name:"黟县",parent:"341000"},{value:"341024",name:"祁门县",parent:"341000"},{value:"341025",name:"其它区",parent:"341000"},{value:"341102",name:"琅琊区",parent:"341100"},{value:"341103",name:"南谯区",parent:"341100"},{value:"341122",name:"来安县",parent:"341100"},{value:"341124",name:"全椒县",parent:"341100"},{value:"341125",name:"定远县",parent:"341100"},{value:"341126",name:"凤阳县",parent:"341100"},{value:"341181",name:"天长市",parent:"341100"},{value:"341182",name:"明光市",parent:"341100"},{value:"341183",name:"其它区",parent:"341100"},{value:"341202",name:"颍州区",parent:"341200"},{value:"341203",name:"颍东区",parent:"341200"},{value:"341204",name:"颍泉区",parent:"341200"},{value:"341221",name:"临泉县",parent:"341200"},{value:"341222",name:"太和县",parent:"341200"},{value:"341225",name:"阜南县",parent:"341200"},{value:"341226",name:"颍上县",parent:"341200"},{value:"341282",name:"界首市",parent:"341200"},{value:"341283",name:"其它区",parent:"341200"},{value:"341302",name:"埇桥区",parent:"341300"},{value:"341321",name:"砀山县",parent:"341300"},{value:"341322",name:"萧县",parent:"341300"},{value:"341323",name:"灵璧县",parent:"341300"},{value:"341324",name:"泗县",parent:"341300"},{value:"341325",name:"其它区",parent:"341300"},{value:"341400",name:"巢湖市",parent:"340100"},{value:"341402",name:"居巢区",parent:"340100"},{value:"341421",name:"庐江县",parent:"340100"},{value:"341422",name:"无为县",parent:"340200"},{value:"341423",name:"含山县",parent:"340500"},{value:"341424",name:"和县",parent:"340500"},{value:"341502",name:"金安区",parent:"341500"},{value:"341503",name:"裕安区",parent:"341500"},{value:"341504",name:"叶集区",parent:"341500"},{value:"341521",name:"寿县",parent:"341500"},{value:"341522",name:"霍邱县",parent:"341500"},{value:"341523",name:"舒城县",parent:"341500"},{value:"341524",name:"金寨县",parent:"341500"},{value:"341525",name:"霍山县",parent:"341500"},{value:"341526",name:"其它区",parent:"341500"},{value:"341602",name:"谯城区",parent:"341600"},{value:"341621",name:"涡阳县",parent:"341600"},{value:"341622",name:"蒙城县",parent:"341600"},{value:"341623",name:"利辛县",parent:"341600"},{value:"341624",name:"其它区",parent:"341600"},{value:"341702",name:"贵池区",parent:"341700"},{value:"341721",name:"东至县",parent:"341700"},{value:"341722",name:"石台县",parent:"341700"},{value:"341723",name:"青阳县",parent:"341700"},{value:"341724",name:"其它区",parent:"341700"},{value:"341802",name:"宣州区",parent:"341800"},{value:"341821",name:"郎溪县",parent:"341800"},{value:"341822",name:"广德县",parent:"341800"},{value:"341823",name:"泾县",parent:"341800"},{value:"341824",name:"绩溪县",parent:"341800"},{value:"341825",name:"旌德县",parent:"341800"},{value:"341881",name:"宁国市",parent:"341800"},{value:"341882",name:"其它区",parent:"341800"},{value:"350102",name:"鼓楼区",parent:"350100"},{value:"350103",name:"台江区",parent:"350100"},{value:"350104",name:"仓山区",parent:"350100"},{value:"350105",name:"马尾区",parent:"350100"},{value:"350111",name:"晋安区",parent:"350100"},{value:"350121",name:"闽侯县",parent:"350100"},{value:"350122",name:"连江县",parent:"350100"},{value:"350123",name:"罗源县",parent:"350100"},{value:"350124",name:"闽清县",parent:"350100"},{value:"350125",name:"永泰县",parent:"350100"},{value:"350128",name:"平潭县",parent:"350100"},{value:"350181",name:"福清市",parent:"350100"},{value:"350182",name:"长乐市",parent:"350100"},{value:"350183",name:"其它区",parent:"350100"},{value:"350203",name:"思明区",parent:"350200"},{value:"350205",name:"海沧区",parent:"350200"},{value:"350206",name:"湖里区",parent:"350200"},{value:"350211",name:"集美区",parent:"350200"},{value:"350212",name:"同安区",parent:"350200"},{value:"350213",name:"翔安区",parent:"350200"},{value:"350214",name:"其它区",parent:"350200"},{value:"350302",name:"城厢区",parent:"350300"},{value:"350303",name:"涵江区",parent:"350300"},{value:"350304",name:"荔城区",parent:"350300"},{value:"350305",name:"秀屿区",parent:"350300"},{value:"350322",name:"仙游县",parent:"350300"},{value:"350323",name:"其它区",parent:"350300"},{value:"350402",name:"梅列区",parent:"350400"},{value:"350403",name:"三元区",parent:"350400"},{value:"350421",name:"明溪县",parent:"350400"},{value:"350423",name:"清流县",parent:"350400"},{value:"350424",name:"宁化县",parent:"350400"},{value:"350425",name:"大田县",parent:"350400"},{value:"350426",name:"尤溪县",parent:"350400"},{value:"350427",name:"沙县",parent:"350400"},{value:"350428",name:"将乐县",parent:"350400"},{value:"350429",name:"泰宁县",parent:"350400"},{value:"350430",name:"建宁县",parent:"350400"},{value:"350481",name:"永安市",parent:"350400"},{value:"350482",name:"其它区",parent:"350400"},{value:"350502",name:"鲤城区",parent:"350500"},{value:"350503",name:"丰泽区",parent:"350500"},{value:"350504",name:"洛江区",parent:"350500"},{value:"350505",name:"泉港区",parent:"350500"},{value:"350521",name:"惠安县",parent:"350500"},{value:"350524",name:"安溪县",parent:"350500"},{value:"350525",name:"永春县",parent:"350500"},{value:"350526",name:"德化县",parent:"350500"},{value:"350527",name:"金门县",parent:"350500"},{value:"350581",name:"石狮市",parent:"350500"},{value:"350582",name:"晋江市",parent:"350500"},{value:"350583",name:"南安市",parent:"350500"},{value:"350584",name:"其它区",parent:"350500"},{value:"350602",name:"芗城区",parent:"350600"},{value:"350603",name:"龙文区",parent:"350600"},{value:"350622",name:"云霄县",parent:"350600"},{value:"350623",name:"漳浦县",parent:"350600"},{value:"350624",name:"诏安县",parent:"350600"},{value:"350625",name:"长泰县",parent:"350600"},{value:"350626",name:"东山县",parent:"350600"},{value:"350627",name:"南靖县",parent:"350600"},{value:"350628",name:"平和县",parent:"350600"},{value:"350629",name:"华安县",parent:"350600"},{value:"350681",name:"龙海市",parent:"350600"},{value:"350682",name:"其它区",parent:"350600"},{value:"350702",name:"延平区",parent:"350700"},{value:"350721",name:"顺昌县",parent:"350700"},{value:"350722",name:"浦城县",parent:"350700"},{value:"350723",name:"光泽县",parent:"350700"},{value:"350724",name:"松溪县",parent:"350700"},{value:"350725",name:"政和县",parent:"350700"},{value:"350781",name:"邵武市",parent:"350700"},{value:"350782",name:"武夷山市",parent:"350700"},{value:"350783",name:"建瓯市",parent:"350700"},{value:"350784",name:"建阳区",parent:"350700"},{value:"350785",name:"其它区",parent:"350700"},{value:"350802",name:"新罗区",parent:"350800"},{value:"350821",name:"长汀县",parent:"350800"},{value:"350822",name:"永定区",parent:"350800"},{value:"350823",name:"上杭县",parent:"350800"},{value:"350824",name:"武平县",parent:"350800"},{value:"350825",name:"连城县",parent:"350800"},{value:"350881",name:"漳平市",parent:"350800"},{value:"350882",name:"其它区",parent:"350800"},{value:"350902",name:"蕉城区",parent:"350900"},{value:"350921",name:"霞浦县",parent:"350900"},{value:"350922",name:"古田县",parent:"350900"},{value:"350923",name:"屏南县",parent:"350900"},{value:"350924",name:"寿宁县",parent:"350900"},{value:"350925",name:"周宁县",parent:"350900"},{value:"350926",name:"柘荣县",parent:"350900"},{value:"350981",name:"福安市",parent:"350900"},{value:"350982",name:"福鼎市",parent:"350900"},{value:"350983",name:"其它区",parent:"350900"},{value:"360102",name:"东湖区",parent:"360100"},{value:"360103",name:"西湖区",parent:"360100"},{value:"360104",name:"青云谱区",parent:"360100"},{value:"360105",name:"湾里区",parent:"360100"},{value:"360111",name:"青山湖区",parent:"360100"},{value:"360121",name:"南昌县",parent:"360100"},{value:"360122",name:"新建县",parent:"360100"},{value:"360123",name:"安义县",parent:"360100"},{value:"360124",name:"进贤县",parent:"360100"},{value:"360125",name:"红谷滩新区",parent:"360100"},{value:"360126",name:"经济技术开发区",parent:"360100"},{value:"360127",name:"昌北区",parent:"360100"},{value:"360128",name:"其它区",parent:"360100"},{value:"360202",name:"昌江区",parent:"360200"},{value:"360203",name:"珠山区",parent:"360200"},{value:"360222",name:"浮梁县",parent:"360200"},{value:"360281",name:"乐平市",parent:"360200"},{value:"360282",name:"其它区",parent:"360200"},{value:"360302",name:"安源区",parent:"360300"},{value:"360313",name:"湘东区",parent:"360300"},{value:"360321",name:"莲花县",parent:"360300"},{value:"360322",name:"上栗县",parent:"360300"},{value:"360323",name:"芦溪县",parent:"360300"},{value:"360324",name:"其它区",parent:"360300"},{value:"360402",name:"庐山区",parent:"360400"},{value:"360403",name:"浔阳区",parent:"360400"},{value:"360421",name:"九江县",parent:"360400"},{value:"360423",name:"武宁县",parent:"360400"},{value:"360424",name:"修水县",parent:"360400"},{value:"360425",name:"永修县",parent:"360400"},{value:"360426",name:"德安县",parent:"360400"},{value:"360427",name:"星子县",parent:"360400"},{value:"360428",name:"都昌县",parent:"360400"},{value:"360429",name:"湖口县",parent:"360400"},{value:"360430",name:"彭泽县",parent:"360400"},{value:"360481",name:"瑞昌市",parent:"360400"},{value:"360482",name:"其它区",parent:"360400"},{value:"360483",name:"共青城市",parent:"360400"},{value:"360502",name:"渝水区",parent:"360500"},{value:"360521",name:"分宜县",parent:"360500"},{value:"360522",name:"其它区",parent:"360500"},{value:"360602",name:"月湖区",parent:"360600"},{value:"360622",name:"余江县",parent:"360600"},{value:"360681",name:"贵溪市",parent:"360600"},{value:"360682",name:"其它区",parent:"360600"},{value:"360702",name:"章贡区",parent:"360700"},{value:"360721",name:"赣县",parent:"360700"},{value:"360722",name:"信丰县",parent:"360700"},{value:"360723",name:"大余县",parent:"360700"},{value:"360724",name:"上犹县",parent:"360700"},{value:"360725",name:"崇义县",parent:"360700"},{value:"360726",name:"安远县",parent:"360700"},{value:"360727",name:"龙南县",parent:"360700"},{value:"360728",name:"定南县",parent:"360700"},{value:"360729",name:"全南县",parent:"360700"},{value:"360730",name:"宁都县",parent:"360700"},{value:"360731",name:"于都县",parent:"360700"},{value:"360732",name:"兴国县",parent:"360700"},{value:"360733",name:"会昌县",parent:"360700"},{value:"360734",name:"寻乌县",parent:"360700"},{value:"360735",name:"石城县",parent:"360700"},{value:"360751",name:"黄金区",parent:"360700"},{value:"360781",name:"瑞金市",parent:"360700"},{value:"360782",name:"南康区",parent:"360700"},{value:"360783",name:"其它区",parent:"360700"},{value:"360802",name:"吉州区",parent:"360800"},{value:"360803",name:"青原区",parent:"360800"},{value:"360821",name:"吉安县",parent:"360800"},{value:"360822",name:"吉水县",parent:"360800"},{value:"360823",name:"峡江县",parent:"360800"},{value:"360824",name:"新干县",parent:"360800"},{value:"360825",name:"永丰县",parent:"360800"},{value:"360826",name:"泰和县",parent:"360800"},{value:"360827",name:"遂川县",parent:"360800"},{value:"360828",name:"万安县",parent:"360800"},{value:"360829",name:"安福县",parent:"360800"},{value:"360830",name:"永新县",parent:"360800"},{value:"360881",name:"井冈山市",parent:"360800"},{value:"360882",name:"其它区",parent:"360800"},{value:"360902",name:"袁州区",parent:"360900"},{value:"360921",name:"奉新县",parent:"360900"},{value:"360922",name:"万载县",parent:"360900"},{value:"360923",name:"上高县",parent:"360900"},{value:"360924",name:"宜丰县",parent:"360900"},{value:"360925",name:"靖安县",parent:"360900"},{value:"360926",name:"铜鼓县",parent:"360900"},{value:"360981",name:"丰城市",parent:"360900"},{value:"360982",name:"樟树市",parent:"360900"},{value:"360983",name:"高安市",parent:"360900"},{value:"360984",name:"其它区",parent:"360900"},{value:"361002",name:"临川区",parent:"361000"},{value:"361021",name:"南城县",parent:"361000"},{value:"361022",name:"黎川县",parent:"361000"},{value:"361023",name:"南丰县",parent:"361000"},{value:"361024",name:"崇仁县",parent:"361000"},{value:"361025",name:"乐安县",parent:"361000"},{value:"361026",name:"宜黄县",parent:"361000"},{value:"361027",name:"金溪县",parent:"361000"},{value:"361028",name:"资溪县",parent:"361000"},{value:"361029",name:"东乡县",parent:"361000"},{value:"361030",name:"广昌县",parent:"361000"},{value:"361031",name:"其它区",parent:"361000"},{value:"361102",name:"信州区",parent:"361100"},{value:"361121",name:"上饶县",parent:"361100"},{value:"361122",name:"广丰区",parent:"361100"},{value:"361123",name:"玉山县",parent:"361100"},{value:"361124",name:"铅山县",parent:"361100"},{value:"361125",name:"横峰县",parent:"361100"},{value:"361126",name:"弋阳县",parent:"361100"},{value:"361127",name:"余干县",parent:"361100"},{value:"361128",name:"鄱阳县",parent:"361100"},{value:"361129",name:"万年县",parent:"361100"},{value:"361130",name:"婺源县",parent:"361100"},{value:"361181",name:"德兴市",parent:"361100"},{value:"361182",name:"其它区",parent:"361100"},{value:"370102",name:"历下区",parent:"370100"},{value:"370103",name:"市中区",parent:"370100"},{value:"370104",name:"槐荫区",parent:"370100"},{value:"370105",name:"天桥区",parent:"370100"},{value:"370112",name:"历城区",parent:"370100"},{value:"370113",name:"长清区",parent:"370100"},{value:"370124",name:"平阴县",parent:"370100"},{value:"370125",name:"济阳县",parent:"370100"},{value:"370126",name:"商河县",parent:"370100"},{value:"370181",name:"章丘市",parent:"370100"},{value:"370182",name:"其它区",parent:"370100"},{value:"370202",name:"市南区",parent:"370200"},{value:"370203",name:"市北区",parent:"370200"},{value:"370205",name:"四方区",parent:"370200"},{value:"370211",name:"黄岛区",parent:"370200"},{value:"370212",name:"崂山区",parent:"370200"},{value:"370213",name:"李沧区",parent:"370200"},{value:"370214",name:"城阳区",parent:"370200"},{value:"370251",name:"开发区",parent:"370200"},{value:"370281",name:"胶州市",parent:"370200"},{value:"370282",name:"即墨市",parent:"370200"},{value:"370283",name:"平度市",parent:"370200"},{value:"370284",name:"胶南市",parent:"370200"},{value:"370285",name:"莱西市",parent:"370200"},{value:"370286",name:"其它区",parent:"370200"},{value:"370302",name:"淄川区",parent:"370300"},{value:"370303",name:"张店区",parent:"370300"},{value:"370304",name:"博山区",parent:"370300"},{value:"370305",name:"临淄区",parent:"370300"},{value:"370306",name:"周村区",parent:"370300"},{value:"370321",name:"桓台县",parent:"370300"},{value:"370322",name:"高青县",parent:"370300"},{value:"370323",name:"沂源县",parent:"370300"},{value:"370324",name:"其它区",parent:"370300"},{value:"370402",name:"市中区",parent:"370400"},{value:"370403",name:"薛城区",parent:"370400"},{value:"370404",name:"峄城区",parent:"370400"},{value:"370405",name:"台儿庄区",parent:"370400"},{value:"370406",name:"山亭区",parent:"370400"},{value:"370481",name:"滕州市",parent:"370400"},{value:"370482",name:"其它区",parent:"370400"},{value:"370502",name:"东营区",parent:"370500"},{value:"370503",name:"河口区",parent:"370500"},{value:"370521",name:"垦利县",parent:"370500"},{value:"370522",name:"利津县",parent:"370500"},{value:"370523",name:"广饶县",parent:"370500"},{value:"370589",name:"西城区",parent:"370500"},{value:"370590",name:"东城区",parent:"370500"},{value:"370591",name:"其它区",parent:"370500"},{value:"370602",name:"芝罘区",parent:"370600"},{value:"370611",name:"福山区",parent:"370600"},{value:"370612",name:"牟平区",parent:"370600"},{value:"370613",name:"莱山区",parent:"370600"},{value:"370634",name:"长岛县",parent:"370600"},{value:"370681",name:"龙口市",parent:"370600"},{value:"370682",name:"莱阳市",parent:"370600"},{value:"370683",name:"莱州市",parent:"370600"},{value:"370684",name:"蓬莱市",parent:"370600"},{value:"370685",name:"招远市",parent:"370600"},{value:"370686",name:"栖霞市",parent:"370600"},{value:"370687",name:"海阳市",parent:"370600"},{value:"370688",name:"其它区",parent:"370600"},{value:"370702",name:"潍城区",parent:"370700"},{value:"370703",name:"寒亭区",parent:"370700"},{value:"370704",name:"坊子区",parent:"370700"},{value:"370705",name:"奎文区",parent:"370700"},{value:"370724",name:"临朐县",parent:"370700"},{value:"370725",name:"昌乐县",parent:"370700"},{value:"370751",name:"开发区",parent:"370700"},{value:"370781",name:"青州市",parent:"370700"},{value:"370782",name:"诸城市",parent:"370700"},{value:"370783",name:"寿光市",parent:"370700"},{value:"370784",name:"安丘市",parent:"370700"},{value:"370785",name:"高密市",parent:"370700"},{value:"370786",name:"昌邑市",parent:"370700"},{value:"370787",name:"其它区",parent:"370700"},{value:"370802",name:"市中区",parent:"370800"},{value:"370811",name:"任城区",parent:"370800"},{value:"370826",name:"微山县",parent:"370800"},{value:"370827",name:"鱼台县",parent:"370800"},{value:"370828",name:"金乡县",parent:"370800"},{value:"370829",name:"嘉祥县",parent:"370800"},{value:"370830",name:"汶上县",parent:"370800"},{value:"370831",name:"泗水县",parent:"370800"},{value:"370832",name:"梁山县",parent:"370800"},{value:"370881",name:"曲阜市",parent:"370800"},{value:"370882",name:"兖州区",parent:"370800"},{value:"370883",name:"邹城市",parent:"370800"},{value:"370884",name:"其它区",parent:"370800"},{value:"370902",name:"泰山区",parent:"370900"},{value:"370903",name:"岱岳区",parent:"370900"},{value:"370921",name:"宁阳县",parent:"370900"},{value:"370923",name:"东平县",parent:"370900"},{value:"370982",name:"新泰市",parent:"370900"},{value:"370983",name:"肥城市",parent:"370900"},{value:"370984",name:"其它区",parent:"370900"},{value:"371002",name:"环翠区",parent:"371000"},{value:"371081",name:"文登区",parent:"371000"},{value:"371082",name:"荣成市",parent:"371000"},{value:"371083",name:"乳山市",parent:"371000"},{value:"371084",name:"其它区",parent:"371000"},{value:"371102",name:"东港区",parent:"371100"},{value:"371103",name:"岚山区",parent:"371100"},{value:"371121",name:"五莲县",parent:"371100"},{value:"371122",name:"莒县",parent:"371100"},{value:"371123",name:"其它区",parent:"371100"},{value:"371202",name:"莱城区",parent:"371200"},{value:"371203",name:"钢城区",parent:"371200"},{value:"371204",name:"其它区",parent:"371200"},{value:"371302",name:"兰山区",parent:"371300"},{value:"371311",name:"罗庄区",parent:"371300"},{value:"371312",name:"河东区",parent:"371300"},{value:"371321",name:"沂南县",parent:"371300"},{value:"371322",name:"郯城县",parent:"371300"},{value:"371323",name:"沂水县",parent:"371300"},{value:"371324",name:"兰陵县",parent:"371300"},{value:"371325",name:"费县",parent:"371300"},{value:"371326",name:"平邑县",parent:"371300"},{value:"371327",name:"莒南县",parent:"371300"},{value:"371328",name:"蒙阴县",parent:"371300"},{value:"371329",name:"临沭县",parent:"371300"},{value:"371330",name:"其它区",parent:"371300"},{value:"371402",name:"德城区",parent:"371400"},{value:"371421",name:"陵城区",parent:"371400"},{value:"371422",name:"宁津县",parent:"371400"},{value:"371423",name:"庆云县",parent:"371400"},{value:"371424",name:"临邑县",parent:"371400"},{value:"371425",name:"齐河县",parent:"371400"},{value:"371426",name:"平原县",parent:"371400"},{value:"371427",name:"夏津县",parent:"371400"},{value:"371428",name:"武城县",parent:"371400"},{value:"371451",name:"开发区",parent:"371400"},{value:"371481",name:"乐陵市",parent:"371400"},{value:"371482",name:"禹城市",parent:"371400"},{value:"371483",name:"其它区",parent:"371400"},{value:"371502",name:"东昌府区",parent:"371500"},{value:"371521",name:"阳谷县",parent:"371500"},{value:"371522",name:"莘县",parent:"371500"},{value:"371523",name:"茌平县",parent:"371500"},{value:"371524",name:"东阿县",parent:"371500"},{value:"371525",name:"冠县",parent:"371500"},{value:"371526",name:"高唐县",parent:"371500"},{value:"371581",name:"临清市",parent:"371500"},{value:"371582",name:"其它区",parent:"371500"},{value:"371602",name:"滨城区",parent:"371600"},{value:"371621",name:"惠民县",parent:"371600"},{value:"371622",name:"阳信县",parent:"371600"},{value:"371623",name:"无棣县",parent:"371600"},{value:"371624",name:"沾化区",parent:"371600"},{value:"371625",name:"博兴县",parent:"371600"},{value:"371626",name:"邹平县",parent:"371600"},{value:"371627",name:"其它区",parent:"371600"},{value:"371702",name:"牡丹区",parent:"371700"},{value:"371721",name:"曹县",parent:"371700"},{value:"371722",name:"单县",parent:"371700"},{value:"371723",name:"成武县",parent:"371700"},{value:"371724",name:"巨野县",parent:"371700"},{value:"371725",name:"郓城县",parent:"371700"},{value:"371726",name:"鄄城县",parent:"371700"},{value:"371727",name:"定陶县",parent:"371700"},{value:"371728",name:"东明县",parent:"371700"},{value:"371729",name:"其它区",parent:"371700"},{value:"410102",name:"中原区",parent:"410100"},{value:"410103",name:"二七区",parent:"410100"},{value:"410104",name:"管城回族区",parent:"410100"},{value:"410105",name:"金水区",parent:"410100"},{value:"410106",name:"上街区",parent:"410100"},{value:"410108",name:"惠济区",parent:"410100"},{value:"410122",name:"中牟县",parent:"410100"},{value:"410181",name:"巩义市",parent:"410100"},{value:"410182",name:"荥阳市",parent:"410100"},{value:"410183",name:"新密市",parent:"410100"},{value:"410184",name:"新郑市",parent:"410100"},{value:"410185",name:"登封市",parent:"410100"},{value:"410186",name:"郑东新区",parent:"410100"},{value:"410187",name:"高新区",parent:"410100"},{value:"410188",name:"其它区",parent:"410100"},{value:"410202",name:"龙亭区",parent:"410200"},{value:"410203",name:"顺河回族区",parent:"410200"},{value:"410204",name:"鼓楼区",parent:"410200"},{value:"410205",name:"禹王台区",parent:"410200"},{value:"410211",name:"金明区",parent:"410200"},{value:"410221",name:"杞县",parent:"410200"},{value:"410222",name:"通许县",parent:"410200"},{value:"410223",name:"尉氏县",parent:"410200"},{value:"410224",name:"祥符区",parent:"410200"},{value:"410225",name:"兰考县",parent:"410200"},{value:"410226",name:"其它区",parent:"410200"},{value:"410302",name:"老城区",parent:"410300"},{value:"410303",name:"西工区",parent:"410300"},{value:"410304",name:"瀍河回族区",parent:"410300"},{value:"410305",name:"涧西区",parent:"410300"},{value:"410306",name:"吉利区",parent:"410300"},{value:"410307",name:"洛龙区",parent:"410300"},{value:"410322",name:"孟津县",parent:"410300"},{value:"410323",name:"新安县",parent:"410300"},{value:"410324",name:"栾川县",parent:"410300"},{value:"410325",name:"嵩县",parent:"410300"},{value:"410326",name:"汝阳县",parent:"410300"},{value:"410327",name:"宜阳县",parent:"410300"},{value:"410328",name:"洛宁县",parent:"410300"},{value:"410329",name:"伊川县",parent:"410300"},{value:"410381",name:"偃师市",parent:"410300"},{value:"410402",name:"新华区",parent:"410400"},{value:"410403",name:"卫东区",parent:"410400"},{value:"410404",name:"石龙区",parent:"410400"},{value:"410411",name:"湛河区",parent:"410400"},{value:"410421",name:"宝丰县",parent:"410400"},{value:"410422",name:"叶县",parent:"410400"},{value:"410423",name:"鲁山县",parent:"410400"},{value:"410425",name:"郏县",parent:"410400"},{value:"410481",name:"舞钢市",parent:"410400"},{value:"410482",name:"汝州市",parent:"410400"},{value:"410483",name:"其它区",parent:"410400"},{value:"410502",name:"文峰区",parent:"410500"},{value:"410503",name:"北关区",parent:"410500"},{value:"410505",name:"殷都区",parent:"410500"},{value:"410506",name:"龙安区",parent:"410500"},{value:"410522",name:"安阳县",parent:"410500"},{value:"410523",name:"汤阴县",parent:"410500"},{value:"410526",name:"滑县",parent:"410500"},{value:"410527",name:"内黄县",parent:"410500"},{value:"410581",name:"林州市",parent:"410500"},{value:"410582",name:"其它区",parent:"410500"},{value:"410602",name:"鹤山区",parent:"410600"},{value:"410603",name:"山城区",parent:"410600"},{value:"410611",name:"淇滨区",parent:"410600"},{value:"410621",name:"浚县",parent:"410600"},{value:"410622",name:"淇县",parent:"410600"},{value:"410623",name:"其它区",parent:"410600"},{value:"410702",name:"红旗区",parent:"410700"},{value:"410703",name:"卫滨区",parent:"410700"},{value:"410704",name:"凤泉区",parent:"410700"},{value:"410711",name:"牧野区",parent:"410700"},{value:"410721",name:"新乡县",parent:"410700"},{value:"410724",name:"获嘉县",parent:"410700"},{value:"410725",name:"原阳县",parent:"410700"},{value:"410726",name:"延津县",parent:"410700"},{value:"410727",name:"封丘县",parent:"410700"},{value:"410728",name:"长垣县",parent:"410700"},{value:"410781",name:"卫辉市",parent:"410700"},{value:"410782",name:"辉县市",parent:"410700"},{value:"410783",name:"其它区",parent:"410700"},{value:"410802",name:"解放区",parent:"410800"},{value:"410803",name:"中站区",parent:"410800"},{value:"410804",name:"马村区",parent:"410800"},{value:"410811",name:"山阳区",parent:"410800"},{value:"410821",name:"修武县",parent:"410800"},{value:"410822",name:"博爱县",parent:"410800"},{value:"410823",name:"武陟县",parent:"410800"},{value:"410825",name:"温县",parent:"410800"},{value:"410881",name:"济源市",parent:"410000"},{value:"410882",name:"沁阳市",parent:"410800"},{value:"410883",name:"孟州市",parent:"410800"},{value:"410884",name:"其它区",parent:"410800"},{value:"410902",name:"华龙区",parent:"410900"},{value:"410922",name:"清丰县",parent:"410900"},{value:"410923",name:"南乐县",parent:"410900"},{value:"410926",name:"范县",parent:"410900"},{value:"410927",name:"台前县",parent:"410900"},{value:"410928",name:"濮阳县",parent:"410900"},{value:"410929",name:"其它区",parent:"410900"},{value:"411002",name:"魏都区",parent:"411000"},{value:"411023",name:"许昌县",parent:"411000"},{value:"411024",name:"鄢陵县",parent:"411000"},{value:"411025",name:"襄城县",parent:"411000"},{value:"411081",name:"禹州市",parent:"411000"},{value:"411082",name:"长葛市",parent:"411000"},{value:"411083",name:"其它区",parent:"411000"},{value:"411102",name:"源汇区",parent:"411100"},{value:"411103",name:"郾城区",parent:"411100"},{value:"411104",name:"召陵区",parent:"411100"},{value:"411121",name:"舞阳县",parent:"411100"},{value:"411122",name:"临颍县",parent:"411100"},{value:"411123",name:"其它区",parent:"411100"},{value:"411202",name:"湖滨区",parent:"411200"},{value:"411221",name:"渑池县",parent:"411200"},{value:"411222",name:"陕州区",parent:"411200"},{value:"411224",name:"卢氏县",parent:"411200"},{value:"411281",name:"义马市",parent:"411200"},{value:"411282",name:"灵宝市",parent:"411200"},{value:"411283",name:"其它区",parent:"411200"},{value:"411302",name:"宛城区",parent:"411300"},{value:"411303",name:"卧龙区",parent:"411300"},{value:"411321",name:"南召县",parent:"411300"},{value:"411322",name:"方城县",parent:"411300"},{value:"411323",name:"西峡县",parent:"411300"},{value:"411324",name:"镇平县",parent:"411300"},{value:"411325",name:"内乡县",parent:"411300"},{value:"411326",name:"淅川县",parent:"411300"},{value:"411327",name:"社旗县",parent:"411300"},{value:"411328",name:"唐河县",parent:"411300"},{value:"411329",name:"新野县",parent:"411300"},{value:"411330",name:"桐柏县",parent:"411300"},{value:"411381",name:"邓州市",parent:"411300"},{value:"411382",name:"其它区",parent:"411300"},{value:"411402",name:"梁园区",parent:"411400"},{value:"411403",name:"睢阳区",parent:"411400"},{value:"411421",name:"民权县",parent:"411400"},{value:"411422",name:"睢县",parent:"411400"},{value:"411423",name:"宁陵县",parent:"411400"},{value:"411424",name:"柘城县",parent:"411400"},{value:"411425",name:"虞城县",parent:"411400"},{value:"411426",name:"夏邑县",parent:"411400"},{value:"411481",name:"永城市",parent:"411400"},{value:"411482",name:"其它区",parent:"411400"},{value:"411502",name:"浉河区",parent:"411500"},{value:"411503",name:"平桥区",parent:"411500"},{value:"411521",name:"罗山县",parent:"411500"},{value:"411522",name:"光山县",parent:"411500"},{value:"411523",name:"新县",parent:"411500"},{value:"411524",name:"商城县",parent:"411500"},{value:"411525",name:"固始县",parent:"411500"},{value:"411526",name:"潢川县",parent:"411500"},{value:"411527",name:"淮滨县",parent:"411500"},{value:"411528",name:"息县",parent:"411500"},{value:"411529",name:"其它区",parent:"411500"},{value:"411602",name:"川汇区",parent:"411600"},{value:"411621",name:"扶沟县",parent:"411600"},{value:"411622",name:"西华县",parent:"411600"},{value:"411623",name:"商水县",parent:"411600"},{value:"411624",name:"沈丘县",parent:"411600"},{value:"411625",name:"郸城县",parent:"411600"},{value:"411626",name:"淮阳县",parent:"411600"},{value:"411627",name:"太康县",parent:"411600"},{value:"411628",name:"鹿邑县",parent:"411600"},{value:"411681",name:"项城市",parent:"411600"},{value:"411682",name:"其它区",parent:"411600"},{value:"411702",name:"驿城区",parent:"411700"},{value:"411721",name:"西平县",parent:"411700"},{value:"411722",name:"上蔡县",parent:"411700"},{value:"411723",name:"平舆县",parent:"411700"},{value:"411724",name:"正阳县",parent:"411700"},{value:"411725",name:"确山县",parent:"411700"},{value:"411726",name:"泌阳县",parent:"411700"},{value:"411727",name:"汝南县",parent:"411700"},{value:"411728",name:"遂平县",parent:"411700"},{value:"411729",name:"新蔡县",parent:"411700"},{value:"411730",name:"其它区",parent:"411700"},{value:"420102",name:"江岸区",parent:"420100"},{value:"420103",name:"江汉区",parent:"420100"},{value:"420104",name:"硚口区",parent:"420100"},{value:"420105",name:"汉阳区",parent:"420100"},{value:"420106",name:"武昌区",parent:"420100"},{value:"420107",name:"青山区",parent:"420100"},{value:"420111",name:"洪山区",parent:"420100"},{value:"420112",name:"东西湖区",parent:"420100"},{value:"420113",name:"汉南区",parent:"420100"},{value:"420114",name:"蔡甸区",parent:"420100"},{value:"420115",name:"江夏区",parent:"420100"},{value:"420116",name:"黄陂区",parent:"420100"},{value:"420117",name:"新洲区",parent:"420100"},{value:"420118",name:"其它区",parent:"420100"},{value:"420202",name:"黄石港区",parent:"420200"},{value:"420203",name:"西塞山区",parent:"420200"},{value:"420204",name:"下陆区",parent:"420200"},{value:"420205",name:"铁山区",parent:"420200"},{value:"420222",name:"阳新县",parent:"420200"},{value:"420281",name:"大冶市",parent:"420200"},{value:"420282",name:"其它区",parent:"420200"},{value:"420302",name:"茅箭区",parent:"420300"},{value:"420303",name:"张湾区",parent:"420300"},{value:"420321",name:"郧阳区",parent:"420300"},{value:"420322",name:"郧西县",parent:"420300"},{value:"420323",name:"竹山县",parent:"420300"},{value:"420324",name:"竹溪县",parent:"420300"},{value:"420325",name:"房县",parent:"420300"},{value:"420381",name:"丹江口市",parent:"420300"},{value:"420382",name:"城区",parent:"420300"},{value:"420383",name:"其它区",parent:"420300"},{value:"420502",name:"西陵区",parent:"420500"},{value:"420503",name:"伍家岗区",parent:"420500"},{value:"420504",name:"点军区",parent:"420500"},{value:"420505",name:"猇亭区",parent:"420500"},{value:"420506",name:"夷陵区",parent:"420500"},{value:"420525",name:"远安县",parent:"420500"},{value:"420526",name:"兴山县",parent:"420500"},{value:"420527",name:"秭归县",parent:"420500"},{value:"420528",name:"长阳土家族自治县",parent:"420500"},{value:"420529",name:"五峰土家族自治县",parent:"420500"},{value:"420551",name:"葛洲坝区",parent:"420500"},{value:"420552",name:"开发区",parent:"420500"},{value:"420581",name:"宜都市",parent:"420500"},{value:"420582",name:"当阳市",parent:"420500"},{value:"420583",name:"枝江市",parent:"420500"},{value:"420584",name:"其它区",parent:"420500"},{value:"420602",name:"襄城区",parent:"420600"},{value:"420606",name:"樊城区",parent:"420600"},{value:"420607",name:"襄州区",parent:"420600"},{value:"420624",name:"南漳县",parent:"420600"},{value:"420625",name:"谷城县",parent:"420600"},{value:"420626",name:"保康县",parent:"420600"},{value:"420682",name:"老河口市",parent:"420600"},{value:"420683",name:"枣阳市",parent:"420600"},{value:"420684",name:"宜城市",parent:"420600"},{value:"420685",name:"其它区",parent:"420600"},{value:"420702",name:"梁子湖区",parent:"420700"},{value:"420703",name:"华容区",parent:"420700"},{value:"420704",name:"鄂城区",parent:"420700"},{value:"420705",name:"其它区",parent:"420700"},{value:"420802",name:"东宝区",parent:"420800"},{value:"420804",name:"掇刀区",parent:"420800"},{value:"420821",name:"京山县",parent:"420800"},{value:"420822",name:"沙洋县",parent:"420800"},{value:"420881",name:"钟祥市",parent:"420800"},{value:"420882",name:"其它区",parent:"420800"},{value:"420902",name:"孝南区",parent:"420900"},{value:"420921",name:"孝昌县",parent:"420900"},{value:"420922",name:"大悟县",parent:"420900"},{value:"420923",name:"云梦县",parent:"420900"},{value:"420981",name:"应城市",parent:"420900"},{value:"420982",name:"安陆市",parent:"420900"},{value:"420984",name:"汉川市",parent:"420900"},{value:"420985",name:"其它区",parent:"420900"},{value:"421002",name:"沙市区",parent:"421000"},{value:"421003",name:"荆州区",parent:"421000"},{value:"421022",name:"公安县",parent:"421000"},{value:"421023",name:"监利县",parent:"421000"},{value:"421024",name:"江陵县",parent:"421000"},{value:"421081",name:"石首市",parent:"421000"},{value:"421083",name:"洪湖市",parent:"421000"},{value:"421087",name:"松滋市",parent:"421000"},{value:"421088",name:"其它区",parent:"421000"},{value:"421102",name:"黄州区",parent:"421100"},{value:"421121",name:"团风县",parent:"421100"},{value:"421122",name:"红安县",parent:"421100"},{value:"421123",name:"罗田县",parent:"421100"},{value:"421124",name:"英山县",parent:"421100"},{value:"421125",name:"浠水县",parent:"421100"},{value:"421126",name:"蕲春县",parent:"421100"},{value:"421127",name:"黄梅县",parent:"421100"},{value:"421181",name:"麻城市",parent:"421100"},{value:"421182",name:"武穴市",parent:"421100"},{value:"421183",name:"其它区",parent:"421100"},{value:"421202",name:"咸安区",parent:"421200"},{value:"421221",name:"嘉鱼县",parent:"421200"},{value:"421222",name:"通城县",parent:"421200"},{value:"421223",name:"崇阳县",parent:"421200"},{value:"421224",name:"通山县",parent:"421200"},{value:"421281",name:"赤壁市",parent:"421200"},{value:"421282",name:"温泉城区",parent:"421200"},{value:"421283",name:"其它区",parent:"421200"},{value:"421302",name:"曾都区",parent:"421300"},{value:"421321",name:"随县",parent:"421300"},{value:"421381",name:"广水市",parent:"421300"},{value:"421382",name:"其它区",parent:"421300"},{value:"422801",name:"恩施市",parent:"422800"},{value:"422802",name:"利川市",parent:"422800"},{value:"422822",name:"建始县",parent:"422800"},{value:"422823",name:"巴东县",parent:"422800"},{value:"422825",name:"宣恩县",parent:"422800"},{value:"422826",name:"咸丰县",parent:"422800"},{value:"422827",name:"来凤县",parent:"422800"},{value:"422828",name:"鹤峰县",parent:"422800"},{value:"422829",name:"其它区",parent:"422800"},{value:"429004",name:"仙桃市",parent:"420000"},{value:"429005",name:"潜江市",parent:"420000"},{value:"429006",name:"天门市",parent:"420000"},{value:"429021",name:"神农架林区",parent:"420000"},{value:"430102",name:"芙蓉区",parent:"430100"},{value:"430103",name:"天心区",parent:"430100"},{value:"430104",name:"岳麓区",parent:"430100"},{value:"430105",name:"开福区",parent:"430100"},{value:"430111",name:"雨花区",parent:"430100"},{value:"430121",name:"长沙县",parent:"430100"},{value:"430122",name:"望城区",parent:"430100"},{value:"430124",name:"宁乡县",parent:"430100"},{value:"430181",name:"浏阳市",parent:"430100"},{value:"430182",name:"其它区",parent:"430100"},{value:"430202",name:"荷塘区",parent:"430200"},{value:"430203",name:"芦淞区",parent:"430200"},{value:"430204",name:"石峰区",parent:"430200"},{value:"430211",name:"天元区",parent:"430200"},{value:"430221",name:"株洲县",parent:"430200"},{value:"430223",name:"攸县",parent:"430200"},{value:"430224",name:"茶陵县",parent:"430200"},{value:"430225",name:"炎陵县",parent:"430200"},{value:"430281",name:"醴陵市",parent:"430200"},{value:"430282",name:"其它区",parent:"430200"},{value:"430302",name:"雨湖区",parent:"430300"},{value:"430304",name:"岳塘区",parent:"430300"},{value:"430321",name:"湘潭县",parent:"430300"},{value:"430381",name:"湘乡市",parent:"430300"},{value:"430382",name:"韶山市",parent:"430300"},{value:"430383",name:"其它区",parent:"430300"},{value:"430405",name:"珠晖区",parent:"430400"},{value:"430406",name:"雁峰区",parent:"430400"},{value:"430407",name:"石鼓区",parent:"430400"},{value:"430408",name:"蒸湘区",parent:"430400"},{value:"430412",name:"南岳区",parent:"430400"},{value:"430421",name:"衡阳县",parent:"430400"},{value:"430422",name:"衡南县",parent:"430400"},{value:"430423",name:"衡山县",parent:"430400"},{value:"430424",name:"衡东县",parent:"430400"},{value:"430426",name:"祁东县",parent:"430400"},{value:"430481",name:"耒阳市",parent:"430400"},{value:"430482",name:"常宁市",parent:"430400"},{value:"430483",name:"其它区",parent:"430400"},{value:"430502",name:"双清区",parent:"430500"},{value:"430503",name:"大祥区",parent:"430500"},{value:"430511",name:"北塔区",parent:"430500"},{value:"430521",name:"邵东县",parent:"430500"},{value:"430522",name:"新邵县",parent:"430500"},{value:"430523",name:"邵阳县",parent:"430500"},{value:"430524",name:"隆回县",parent:"430500"},{value:"430525",name:"洞口县",parent:"430500"},{value:"430527",name:"绥宁县",parent:"430500"},{value:"430528",name:"新宁县",parent:"430500"},{value:"430529",name:"城步苗族自治县",parent:"430500"},{value:"430581",name:"武冈市",parent:"430500"},{value:"430582",name:"其它区",parent:"430500"},{value:"430602",name:"岳阳楼区",parent:"430600"},{value:"430603",name:"云溪区",parent:"430600"},{value:"430611",name:"君山区",parent:"430600"},{value:"430621",name:"岳阳县",parent:"430600"},{value:"430623",name:"华容县",parent:"430600"},{value:"430624",name:"湘阴县",parent:"430600"},{value:"430626",name:"平江县",parent:"430600"},{value:"430681",name:"汨罗市",parent:"430600"},{value:"430682",name:"临湘市",parent:"430600"},{value:"430683",name:"其它区",parent:"430600"},{value:"430702",name:"武陵区",parent:"430700"},{value:"430703",name:"鼎城区",parent:"430700"},{value:"430721",name:"安乡县",parent:"430700"},{value:"430722",name:"汉寿县",parent:"430700"},{value:"430723",name:"澧县",parent:"430700"},{value:"430724",name:"临澧县",parent:"430700"},{value:"430725",name:"桃源县",parent:"430700"},{value:"430726",name:"石门县",parent:"430700"},{value:"430781",name:"津市市",parent:"430700"},{value:"430782",name:"其它区",parent:"430700"},{value:"430802",name:"永定区",parent:"430800"},{value:"430811",name:"武陵源区",parent:"430800"},{value:"430821",name:"慈利县",parent:"430800"},{value:"430822",name:"桑植县",parent:"430800"},{value:"430823",name:"其它区",parent:"430800"},{value:"430902",name:"资阳区",parent:"430900"},{value:"430903",name:"赫山区",parent:"430900"},{value:"430921",name:"南县",parent:"430900"},{value:"430922",name:"桃江县",parent:"430900"},{value:"430923",name:"安化县",parent:"430900"},{value:"430981",name:"沅江市",parent:"430900"},{value:"430982",name:"其它区",parent:"430900"},{value:"431002",name:"北湖区",parent:"431000"},{value:"431003",name:"苏仙区",parent:"431000"},{value:"431021",name:"桂阳县",parent:"431000"},{value:"431022",name:"宜章县",parent:"431000"},{value:"431023",name:"永兴县",parent:"431000"},{value:"431024",name:"嘉禾县",parent:"431000"},{value:"431025",name:"临武县",parent:"431000"},{value:"431026",name:"汝城县",parent:"431000"},{value:"431027",name:"桂东县",parent:"431000"},{value:"431028",name:"安仁县",parent:"431000"},{value:"431081",name:"资兴市",parent:"431000"},{value:"431082",name:"其它区",parent:"431000"},{value:"431102",name:"零陵区",parent:"431100"},{value:"431103",name:"冷水滩区",parent:"431100"},{value:"431121",name:"祁阳县",parent:"431100"},{value:"431122",name:"东安县",parent:"431100"},{value:"431123",name:"双牌县",parent:"431100"},{value:"431124",name:"道县",parent:"431100"},{value:"431125",name:"江永县",parent:"431100"},{value:"431126",name:"宁远县",parent:"431100"},{value:"431127",name:"蓝山县",parent:"431100"},{value:"431128",name:"新田县",parent:"431100"},{value:"431129",name:"江华瑶族自治县",parent:"431100"},{value:"431130",name:"其它区",parent:"431100"},{value:"431202",name:"鹤城区",parent:"431200"},{value:"431221",name:"中方县",parent:"431200"},{value:"431222",name:"沅陵县",parent:"431200"},{value:"431223",name:"辰溪县",parent:"431200"},{value:"431224",name:"溆浦县",parent:"431200"},{value:"431225",name:"会同县",parent:"431200"},{value:"431226",name:"麻阳苗族自治县",parent:"431200"},{value:"431227",name:"新晃侗族自治县",parent:"431200"},{value:"431228",name:"芷江侗族自治县",parent:"431200"},{value:"431229",name:"靖州苗族侗族自治县",parent:"431200"},{value:"431230",name:"通道侗族自治县",parent:"431200"},{value:"431281",name:"洪江市",parent:"431200"},{value:"431282",name:"其它区",parent:"431200"},{value:"431302",name:"娄星区",parent:"431300"},{value:"431321",name:"双峰县",parent:"431300"},{value:"431322",name:"新化县",parent:"431300"},{value:"431381",name:"冷水江市",parent:"431300"},{value:"431382",name:"涟源市",parent:"431300"},{value:"431383",name:"其它区",parent:"431300"},{value:"433101",name:"吉首市",parent:"433100"},{value:"433122",name:"泸溪县",parent:"433100"},{value:"433123",name:"凤凰县",parent:"433100"},{value:"433124",name:"花垣县",parent:"433100"},{value:"433125",name:"保靖县",parent:"433100"},{value:"433126",name:"古丈县",parent:"433100"},{value:"433127",name:"永顺县",parent:"433100"},{value:"433130",name:"龙山县",parent:"433100"},{value:"433131",name:"其它区",parent:"433100"},{value:"440103",name:"荔湾区",parent:"440100"},{value:"440104",name:"越秀区",parent:"440100"},{value:"440105",name:"海珠区",parent:"440100"},{value:"440106",name:"天河区",parent:"440100"},{value:"440111",name:"白云区",parent:"440100"},{value:"440112",name:"黄埔区",parent:"440100"},{value:"440113",name:"番禺区",parent:"440100"},{value:"440114",name:"花都区",parent:"440100"},{value:"440115",name:"南沙区",parent:"440100"},{value:"440116",name:"萝岗区",parent:"440100"},{value:"440183",name:"增城区",parent:"440100"},{value:"440184",name:"从化区",parent:"440100"},{value:"440188",name:"东山区",parent:"440100"},{value:"440189",name:"其它区",parent:"440100"},{value:"440203",name:"武江区",parent:"440200"},{value:"440204",name:"浈江区",parent:"440200"},{value:"440205",name:"曲江区",parent:"440200"},{value:"440222",name:"始兴县",parent:"440200"},{value:"440224",name:"仁化县",parent:"440200"},{value:"440229",name:"翁源县",parent:"440200"},{value:"440232",name:"乳源瑶族自治县",parent:"440200"},{value:"440233",name:"新丰县",parent:"440200"},{value:"440281",name:"乐昌市",parent:"440200"},{value:"440282",name:"南雄市",parent:"440200"},{value:"440283",name:"其它区",parent:"440200"},{value:"440303",name:"罗湖区",parent:"440300"},{value:"440304",name:"福田区",parent:"440300"},{value:"440305",name:"南山区",parent:"440300"},{value:"440306",name:"宝安区",parent:"440300"},{value:"440307",name:"龙岗区",parent:"440300"},{value:"440308",name:"盐田区",parent:"440300"},{value:"440309",name:"其它区",parent:"440300"},{value:"440320",name:"光明新区",parent:"440300"},{value:"440321",name:"坪山新区",parent:"440300"},{value:"440322",name:"大鹏新区",parent:"440300"},{value:"440323",name:"龙华新区",parent:"440300"},{value:"440402",name:"香洲区",parent:"440400"},{value:"440403",name:"斗门区",parent:"440400"},{value:"440404",name:"金湾区",parent:"440400"},{value:"440486",name:"金唐区",parent:"440400"},{value:"440487",name:"南湾区",parent:"440400"},{value:"440488",name:"其它区",parent:"440400"},{value:"440507",name:"龙湖区",parent:"440500"},{value:"440511",name:"金平区",parent:"440500"},{value:"440512",name:"濠江区",parent:"440500"},{value:"440513",name:"潮阳区",parent:"440500"},{value:"440514",name:"潮南区",parent:"440500"},{value:"440515",name:"澄海区",parent:"440500"},{value:"440523",name:"南澳县",parent:"440500"},{value:"440524",name:"其它区",parent:"440500"},{value:"440604",name:"禅城区",parent:"440600"},{value:"440605",name:"南海区",parent:"440600"},{value:"440606",name:"顺德区",parent:"440600"},{value:"440607",name:"三水区",parent:"440600"},{value:"440608",name:"高明区",parent:"440600"},{value:"440609",name:"其它区",parent:"440600"},{value:"440703",name:"蓬江区",parent:"440700"},{value:"440704",name:"江海区",parent:"440700"},{value:"440705",name:"新会区",parent:"440700"},{value:"440781",name:"台山市",parent:"440700"},{value:"440783",name:"开平市",parent:"440700"},{value:"440784",name:"鹤山市",parent:"440700"},{value:"440785",name:"恩平市",parent:"440700"},{value:"440786",name:"其它区",parent:"440700"},{value:"440802",name:"赤坎区",parent:"440800"},{value:"440803",name:"霞山区",parent:"440800"},{value:"440804",name:"坡头区",parent:"440800"},{value:"440811",name:"麻章区",parent:"440800"},{value:"440823",name:"遂溪县",parent:"440800"},{value:"440825",name:"徐闻县",parent:"440800"},{value:"440881",name:"廉江市",parent:"440800"},{value:"440882",name:"雷州市",parent:"440800"},{value:"440883",name:"吴川市",parent:"440800"},{value:"440884",name:"其它区",parent:"440800"},{value:"440902",name:"茂南区",parent:"440900"},{value:"440903",name:"电白区",parent:"440900"},{value:"440923",name:"电白县",parent:"440900"},{value:"440981",name:"高州市",parent:"440900"},{value:"440982",name:"化州市",parent:"440900"},{value:"440983",name:"信宜市",parent:"440900"},{value:"440984",name:"其它区",parent:"440900"},{value:"441202",name:"端州区",parent:"441200"},{value:"441203",name:"鼎湖区",parent:"441200"},{value:"441223",name:"广宁县",parent:"441200"},{value:"441224",name:"怀集县",parent:"441200"},{value:"441225",name:"封开县",parent:"441200"},{value:"441226",name:"德庆县",parent:"441200"},{value:"441283",name:"高要市",parent:"441200"},{value:"441284",name:"四会市",parent:"441200"},{value:"441285",name:"其它区",parent:"441200"},{value:"441302",name:"惠城区",parent:"441300"},{value:"441303",name:"惠阳区",parent:"441300"},{value:"441322",name:"博罗县",parent:"441300"},{value:"441323",name:"惠东县",parent:"441300"},{value:"441324",name:"龙门县",parent:"441300"},{value:"441325",name:"其它区",parent:"441300"},{value:"441402",name:"梅江区",parent:"441400"},{value:"441421",name:"梅县区",parent:"441400"},{value:"441422",name:"大埔县",parent:"441400"},{value:"441423",name:"丰顺县",parent:"441400"},{value:"441424",name:"五华县",parent:"441400"},{value:"441426",name:"平远县",parent:"441400"},{value:"441427",name:"蕉岭县",parent:"441400"},{value:"441481",name:"兴宁市",parent:"441400"},{value:"441482",name:"其它区",parent:"441400"},{value:"441502",name:"城区",parent:"441500"},{value:"441521",name:"海丰县",parent:"441500"},{value:"441523",name:"陆河县",parent:"441500"},{value:"441581",name:"陆丰市",parent:"441500"},{value:"441582",name:"其它区",parent:"441500"},{value:"441602",name:"源城区",parent:"441600"},{value:"441621",name:"紫金县",parent:"441600"},{value:"441622",name:"龙川县",parent:"441600"},{value:"441623",name:"连平县",parent:"441600"},{value:"441624",name:"和平县",parent:"441600"},{value:"441625",name:"东源县",parent:"441600"},{value:"441626",name:"其它区",parent:"441600"},{value:"441702",name:"江城区",parent:"441700"},{value:"441721",name:"阳西县",parent:"441700"},{value:"441723",name:"阳东区",parent:"441700"},{value:"441781",name:"阳春市",parent:"441700"},{value:"441782",name:"其它区",parent:"441700"},{value:"441802",name:"清城区",parent:"441800"},{value:"441821",name:"佛冈县",parent:"441800"},{value:"441823",name:"阳山县",parent:"441800"},{value:"441825",name:"连山壮族瑶族自治县",parent:"441800"},{value:"441826",name:"连南瑶族自治县",parent:"441800"},{value:"441827",name:"清新区",parent:"441800"},{value:"441881",name:"英德市",parent:"441800"},{value:"441882",name:"连州市",parent:"441800"},{value:"441883",name:"其它区",parent:"441800"},{value:"445102",name:"湘桥区",parent:"445100"},{value:"445121",name:"潮安区",parent:"445100"},{value:"445122",name:"饶平县",parent:"445100"},{value:"445185",name:"枫溪区",parent:"445100"},{value:"445186",name:"其它区",parent:"445100"},{value:"445202",name:"榕城区",parent:"445200"},{value:"445221",name:"揭东区",parent:"445200"},{value:"445222",name:"揭西县",parent:"445200"},{value:"445224",name:"惠来县",parent:"445200"},{value:"445281",name:"普宁市",parent:"445200"},{value:"445284",name:"东山区",parent:"445200"},{value:"445285",name:"其它区",parent:"445200"},{value:"445302",name:"云城区",parent:"445300"},{value:"445321",name:"新兴县",parent:"445300"},{value:"445322",name:"郁南县",parent:"445300"},{value:"445323",name:"云安区",parent:"445300"},{value:"445381",name:"罗定市",parent:"445300"},{value:"445382",name:"其它区",parent:"445300"},{value:"450102",name:"兴宁区",parent:"450100"},{value:"450103",name:"青秀区",parent:"450100"},{value:"450105",name:"江南区",parent:"450100"},{value:"450107",name:"西乡塘区",parent:"450100"},{value:"450108",name:"良庆区",parent:"450100"},{value:"450109",name:"邕宁区",parent:"450100"},{value:"450122",name:"武鸣区",parent:"450100"},{value:"450123",name:"隆安县",parent:"450100"},{value:"450124",name:"马山县",parent:"450100"},{value:"450125",name:"上林县",parent:"450100"},{value:"450126",name:"宾阳县",parent:"450100"},{value:"450127",name:"横县",parent:"450100"},{value:"450128",name:"其它区",parent:"450100"},{value:"450202",name:"城中区",parent:"450200"},{value:"450203",name:"鱼峰区",parent:"450200"},{value:"450204",name:"柳南区",parent:"450200"},{value:"450205",name:"柳北区",parent:"450200"},{value:"450221",name:"柳江县",parent:"450200"},{value:"450222",name:"柳城县",parent:"450200"},{value:"450223",name:"鹿寨县",parent:"450200"},{value:"450224",name:"融安县",parent:"450200"},{value:"450225",name:"融水苗族自治县",parent:"450200"},{value:"450226",name:"三江侗族自治县",parent:"450200"},{value:"450227",name:"其它区",parent:"450200"},{value:"450302",name:"秀峰区",parent:"450300"},{value:"450303",name:"叠彩区",parent:"450300"},{value:"450304",name:"象山区",parent:"450300"},{value:"450305",name:"七星区",parent:"450300"},{value:"450311",name:"雁山区",parent:"450300"},{value:"450321",name:"阳朔县",parent:"450300"},{value:"450322",name:"临桂区",parent:"450300"},{value:"450323",name:"灵川县",parent:"450300"},{value:"450324",name:"全州县",parent:"450300"},{value:"450325",name:"兴安县",parent:"450300"},{value:"450326",name:"永福县",parent:"450300"},{value:"450327",name:"灌阳县",parent:"450300"},{value:"450328",name:"龙胜各族自治县",parent:"450300"},{value:"450329",name:"资源县",parent:"450300"},{value:"450330",name:"平乐县",parent:"450300"},{value:"450331",name:"荔浦县",parent:"450300"},{value:"450332",name:"恭城瑶族自治县",parent:"450300"},{value:"450333",name:"其它区",parent:"450300"},{value:"450403",name:"万秀区",parent:"450400"},{value:"450404",name:"蝶山区",parent:"450400"},{value:"450405",name:"长洲区",parent:"450400"},{value:"450406",name:"龙圩区",parent:"450400"},{value:"450421",name:"苍梧县",parent:"450400"},{value:"450422",name:"藤县",parent:"450400"},{value:"450423",name:"蒙山县",parent:"450400"},{value:"450481",name:"岑溪市",parent:"450400"},{value:"450482",name:"其它区",parent:"450400"},{value:"450502",name:"海城区",parent:"450500"},{value:"450503",name:"银海区",parent:"450500"},{value:"450512",name:"铁山港区",parent:"450500"},{value:"450521",name:"合浦县",parent:"450500"},{value:"450522",name:"其它区",parent:"450500"},{value:"450602",name:"港口区",parent:"450600"},{value:"450603",name:"防城区",parent:"450600"},{value:"450621",name:"上思县",parent:"450600"},{value:"450681",name:"东兴市",parent:"450600"},{value:"450682",name:"其它区",parent:"450600"},{value:"450702",name:"钦南区",parent:"450700"},{value:"450703",name:"钦北区",parent:"450700"},{value:"450721",name:"灵山县",parent:"450700"},{value:"450722",name:"浦北县",parent:"450700"},{value:"450723",name:"其它区",parent:"450700"},{value:"450802",name:"港北区",parent:"450800"},{value:"450803",name:"港南区",parent:"450800"},{value:"450804",name:"覃塘区",parent:"450800"},{value:"450821",name:"平南县",parent:"450800"},{value:"450881",name:"桂平市",parent:"450800"},{value:"450882",name:"其它区",parent:"450800"},{value:"450902",name:"玉州区",parent:"450900"},{value:"450903",name:"福绵区",parent:"450900"},{value:"450921",name:"容县",parent:"450900"},{value:"450922",name:"陆川县",parent:"450900"},{value:"450923",name:"博白县",parent:"450900"},{value:"450924",name:"兴业县",parent:"450900"},{value:"450981",name:"北流市",parent:"450900"},{value:"450982",name:"其它区",parent:"450900"},{value:"451002",name:"右江区",parent:"451000"},{value:"451021",name:"田阳县",parent:"451000"},{value:"451022",name:"田东县",parent:"451000"},{value:"451023",name:"平果县",parent:"451000"},{value:"451024",name:"德保县",parent:"451000"},{value:"451025",name:"靖西县",parent:"451000"},{value:"451026",name:"那坡县",parent:"451000"},{value:"451027",name:"凌云县",parent:"451000"},{value:"451028",name:"乐业县",parent:"451000"},{value:"451029",name:"田林县",parent:"451000"},{value:"451030",name:"西林县",parent:"451000"},{value:"451031",name:"隆林各族自治县",parent:"451000"},{value:"451032",name:"其它区",parent:"451000"},{value:"451102",name:"八步区",parent:"451100"},{value:"451119",name:"平桂管理区",parent:"451100"},{value:"451121",name:"昭平县",parent:"451100"},{value:"451122",name:"钟山县",parent:"451100"},{value:"451123",name:"富川瑶族自治县",parent:"451100"},{value:"451124",name:"其它区",parent:"451100"},{value:"451202",name:"金城江区",parent:"451200"},{value:"451221",name:"南丹县",parent:"451200"},{value:"451222",name:"天峨县",parent:"451200"},{value:"451223",name:"凤山县",parent:"451200"},{value:"451224",name:"东兰县",parent:"451200"},{value:"451225",name:"罗城仫佬族自治县",parent:"451200"},{value:"451226",name:"环江毛南族自治县",parent:"451200"},{value:"451227",name:"巴马瑶族自治县",parent:"451200"},{value:"451228",name:"都安瑶族自治县",parent:"451200"},{value:"451229",name:"大化瑶族自治县",parent:"451200"},{value:"451281",name:"宜州市",parent:"451200"},{value:"451282",name:"其它区",parent:"451200"},{value:"451302",name:"兴宾区",parent:"451300"},{value:"451321",name:"忻城县",parent:"451300"},{value:"451322",name:"象州县",parent:"451300"},{value:"451323",name:"武宣县",parent:"451300"},{value:"451324",name:"金秀瑶族自治县",parent:"451300"},{value:"451381",name:"合山市",parent:"451300"},{value:"451382",name:"其它区",parent:"451300"},{value:"451402",name:"江州区",parent:"451400"},{value:"451421",name:"扶绥县",parent:"451400"},{value:"451422",name:"宁明县",parent:"451400"},{value:"451423",name:"龙州县",parent:"451400"},{value:"451424",name:"大新县",parent:"451400"},{value:"451425",name:"天等县",parent:"451400"},{value:"451481",name:"凭祥市",parent:"451400"},{value:"451482",name:"其它区",parent:"451400"},{value:"460105",name:"秀英区",parent:"460100"},{value:"460106",name:"龙华区",parent:"460100"},{value:"460107",name:"琼山区",parent:"460100"},{value:"460108",name:"美兰区",parent:"460100"},{value:"460109",name:"其它区",parent:"460100"},{value:"460321",name:"西沙群岛",parent:"460300"},{value:"460322",name:"南沙群岛",parent:"460300"},{value:"460323",name:"中沙群岛的岛礁及其海域",parent:"460300"},{value:"469001",name:"五指山市",parent:"460000"},{value:"469002",name:"琼海市",parent:"460000"},{value:"469003",name:"儋州市",parent:"460000"},{value:"469005",name:"文昌市",parent:"460000"},{value:"469006",name:"万宁市",parent:"460000"},{value:"469007",name:"东方市",parent:"460000"},{value:"469025",name:"定安县",parent:"460000"},{value:"469026",name:"屯昌县",parent:"460000"},{value:"469027",name:"澄迈县",parent:"460000"},{value:"469028",name:"临高县",parent:"460000"},{value:"469030",name:"白沙黎族自治县",parent:"460000"},{value:"469031",name:"昌江黎族自治县",parent:"460000"},{value:"469033",name:"乐东黎族自治县",parent:"460000"},{value:"469034",name:"陵水黎族自治县",parent:"460000"},{value:"469035",name:"保亭黎族苗族自治县",parent:"460000"},{value:"469036",name:"琼中黎族苗族自治县",parent:"460000"},{value:"469037",name:"西沙群岛",parent:"460000"},{value:"469038",name:"南沙群岛",parent:"460000"},{value:"469039",name:"中沙群岛的岛礁及其海域",parent:"460000"},{value:"471004",name:"高新区",parent:"410300"},{value:"471005",name:"其它区",parent:"410300"},{value:"500101",name:"万州区",parent:"500100"},{value:"500102",name:"涪陵区",parent:"500100"},{value:"500103",name:"渝中区",parent:"500100"},{value:"500104",name:"大渡口区",parent:"500100"},{value:"500105",name:"江北区",parent:"500100"},{value:"500106",name:"沙坪坝区",parent:"500100"},{value:"500107",name:"九龙坡区",parent:"500100"},{value:"500108",name:"南岸区",parent:"500100"},{value:"500109",name:"北碚区",parent:"500100"},{value:"500110",name:"万盛区",parent:"500100"},{value:"500111",name:"双桥区",parent:"500100"},{value:"500112",name:"渝北区",parent:"500100"},{value:"500113",name:"巴南区",parent:"500100"},{value:"500114",name:"黔江区",parent:"500100"},{value:"500115",name:"长寿区",parent:"500100"},{value:"500222",name:"綦江区",parent:"500100"},{value:"500223",name:"潼南县",parent:"500100"},{value:"500224",name:"铜梁区",parent:"500100"},{value:"500225",name:"大足区",parent:"500100"},{value:"500226",name:"荣昌县",parent:"500100"},{value:"500227",name:"璧山区",parent:"500100"},{value:"500228",name:"梁平县",parent:"500100"},{value:"500229",name:"城口县",parent:"500100"},{value:"500230",name:"丰都县",parent:"500100"},{value:"500231",name:"垫江县",parent:"500100"},{value:"500232",name:"武隆县",parent:"500100"},{value:"500233",name:"忠县",parent:"500100"},{value:"500234",name:"开县",parent:"500100"},{value:"500235",name:"云阳县",parent:"500100"},{value:"500236",name:"奉节县",parent:"500100"},{value:"500237",name:"巫山县",parent:"500100"},{value:"500238",name:"巫溪县",parent:"500100"},{value:"500240",name:"石柱土家族自治县",parent:"500100"},{value:"500241",name:"秀山土家族苗族自治县",parent:"500100"},{value:"500242",name:"酉阳土家族苗族自治县",parent:"500100"},{value:"500243",name:"彭水苗族土家族自治县",parent:"500100"},{value:"500381",name:"江津区",parent:"500100"},{value:"500382",name:"合川区",parent:"500100"},{value:"500383",name:"永川区",parent:"500100"},{value:"500384",name:"南川区",parent:"500100"},{value:"500385",name:"其它区",parent:"500100"},{value:"510104",name:"锦江区",parent:"510100"},{value:"510105",name:"青羊区",parent:"510100"},{value:"510106",name:"金牛区",parent:"510100"},{value:"510107",name:"武侯区",parent:"510100"},{value:"510108",name:"成华区",parent:"510100"},{value:"510112",name:"龙泉驿区",parent:"510100"},{value:"510113",name:"青白江区",parent:"510100"},{value:"510114",name:"新都区",parent:"510100"},{value:"510115",name:"温江区",parent:"510100"},{value:"510121",name:"金堂县",parent:"510100"},{value:"510122",name:"双流县",parent:"510100"},{value:"510124",name:"郫县",parent:"510100"},{value:"510129",name:"大邑县",parent:"510100"},{value:"510131",name:"蒲江县",parent:"510100"},{value:"510132",name:"新津县",parent:"510100"},{value:"510181",name:"都江堰市",parent:"510100"},{value:"510182",name:"彭州市",parent:"510100"},{value:"510183",name:"邛崃市",parent:"510100"},{value:"510184",name:"崇州市",parent:"510100"},{value:"510185",name:"其它区",parent:"510100"},{value:"510302",name:"自流井区",parent:"510300"},{value:"510303",name:"贡井区",parent:"510300"},{value:"510304",name:"大安区",parent:"510300"},{value:"510311",name:"沿滩区",parent:"510300"},{value:"510321",name:"荣县",parent:"510300"},{value:"510322",name:"富顺县",parent:"510300"},{value:"510323",name:"其它区",parent:"510300"},{value:"510402",name:"东区",parent:"510400"},{value:"510403",name:"西区",parent:"510400"},{value:"510411",name:"仁和区",parent:"510400"},{value:"510421",name:"米易县",parent:"510400"},{value:"510422",name:"盐边县",parent:"510400"},{value:"510423",name:"其它区",parent:"510400"},{value:"510502",name:"江阳区",parent:"510500"},{value:"510503",name:"纳溪区",parent:"510500"},{value:"510504",name:"龙马潭区",parent:"510500"},{value:"510521",name:"泸县",parent:"510500"},{value:"510522",name:"合江县",parent:"510500"},{value:"510524",name:"叙永县",parent:"510500"},{value:"510525",name:"古蔺县",parent:"510500"},{value:"510526",name:"其它区",parent:"510500"},{value:"510603",name:"旌阳区",parent:"510600"},{value:"510623",name:"中江县",parent:"510600"},{value:"510626",name:"罗江县",parent:"510600"},{value:"510681",name:"广汉市",parent:"510600"},{value:"510682",name:"什邡市",parent:"510600"},{value:"510683",name:"绵竹市",parent:"510600"},{value:"510684",name:"其它区",parent:"510600"},{value:"510703",name:"涪城区",parent:"510700"},{value:"510704",name:"游仙区",parent:"510700"},{value:"510722",name:"三台县",parent:"510700"},{value:"510723",name:"盐亭县",parent:"510700"},{value:"510724",name:"安县",parent:"510700"},{value:"510725",name:"梓潼县",parent:"510700"},{value:"510726",name:"北川羌族自治县",parent:"510700"},{value:"510727",name:"平武县",parent:"510700"},{value:"510751",name:"高新区",parent:"510700"},{value:"510781",name:"江油市",parent:"510700"},{value:"510782",name:"其它区",parent:"510700"},{value:"510802",name:"利州区",parent:"510800"},{value:"510811",name:"昭化区",parent:"510800"},{value:"510812",name:"朝天区",parent:"510800"},{value:"510821",name:"旺苍县",parent:"510800"},{value:"510822",name:"青川县",parent:"510800"},{value:"510823",name:"剑阁县",parent:"510800"},{value:"510824",name:"苍溪县",parent:"510800"},{value:"510825",name:"其它区",parent:"510800"},{value:"510903",name:"船山区",parent:"510900"},{value:"510904",name:"安居区",parent:"510900"},{value:"510921",name:"蓬溪县",parent:"510900"},{value:"510922",name:"射洪县",parent:"510900"},{value:"510923",name:"大英县",parent:"510900"},{value:"510924",name:"其它区",parent:"510900"},{value:"511002",name:"市中区",parent:"511000"},{value:"511011",name:"东兴区",parent:"511000"},{value:"511024",name:"威远县",parent:"511000"},{value:"511025",name:"资中县",parent:"511000"},{value:"511028",name:"隆昌县",parent:"511000"},{value:"511029",name:"其它区",parent:"511000"},{value:"511102",name:"市中区",parent:"511100"},{value:"511111",name:"沙湾区",parent:"511100"},{value:"511112",name:"五通桥区",parent:"511100"},{value:"511113",name:"金口河区",parent:"511100"},{value:"511123",name:"犍为县",parent:"511100"},{value:"511124",name:"井研县",parent:"511100"},{value:"511126",name:"夹江县",parent:"511100"},{value:"511129",name:"沐川县",parent:"511100"},{value:"511132",name:"峨边彝族自治县",parent:"511100"},{value:"511133",name:"马边彝族自治县",parent:"511100"},{value:"511181",name:"峨眉山市",parent:"511100"},{value:"511182",name:"其它区",parent:"511100"},{value:"511302",name:"顺庆区",parent:"511300"},{value:"511303",name:"高坪区",parent:"511300"},{value:"511304",name:"嘉陵区",parent:"511300"},{value:"511321",name:"南部县",parent:"511300"},{value:"511322",name:"营山县",parent:"511300"},{value:"511323",name:"蓬安县",parent:"511300"},{value:"511324",name:"仪陇县",parent:"511300"},{value:"511325",name:"西充县",parent:"511300"},{value:"511381",name:"阆中市",parent:"511300"},{value:"511382",name:"其它区",parent:"511300"},{value:"511402",name:"东坡区",parent:"511400"},{value:"511421",name:"仁寿县",parent:"511400"},{value:"511422",name:"彭山区",parent:"511400"},{value:"511423",name:"洪雅县",parent:"511400"},{value:"511424",name:"丹棱县",parent:"511400"},{value:"511425",name:"青神县",parent:"511400"},{value:"511426",name:"其它区",parent:"511400"},{value:"511502",name:"翠屏区",parent:"511500"},{value:"511521",name:"宜宾县",parent:"511500"},{value:"511522",name:"南溪区",parent:"511500"},{value:"511523",name:"江安县",parent:"511500"},{value:"511524",name:"长宁县",parent:"511500"},{value:"511525",name:"高县",parent:"511500"},{value:"511526",name:"珙县",parent:"511500"},{value:"511527",name:"筠连县",parent:"511500"},{value:"511528",name:"兴文县",parent:"511500"},{value:"511529",name:"屏山县",parent:"511500"},{value:"511530",name:"其它区",parent:"511500"},{value:"511602",name:"广安区",parent:"511600"},{value:"511603",name:"前锋区",parent:"511600"},{value:"511621",name:"岳池县",parent:"511600"},{value:"511622",name:"武胜县",parent:"511600"},{value:"511623",name:"邻水县",parent:"511600"},{value:"511681",name:"华蓥市",parent:"511600"},{value:"511682",name:"市辖区",parent:"511600"},{value:"511683",name:"其它区",parent:"511600"},{value:"511702",name:"通川区",parent:"511700"},{value:"511721",name:"达川区",parent:"511700"},{value:"511722",name:"宣汉县",parent:"511700"},{value:"511723",name:"开江县",parent:"511700"},{value:"511724",name:"大竹县",parent:"511700"},{value:"511725",name:"渠县",parent:"511700"},{value:"511781",name:"万源市",parent:"511700"},{value:"511782",name:"其它区",parent:"511700"},{value:"511802",name:"雨城区",parent:"511800"},{value:"511821",name:"名山区",parent:"511800"},{value:"511822",name:"荥经县",parent:"511800"},{value:"511823",name:"汉源县",parent:"511800"},{value:"511824",name:"石棉县",parent:"511800"},{value:"511825",name:"天全县",parent:"511800"},{value:"511826",name:"芦山县",parent:"511800"},{value:"511827",name:"宝兴县",parent:"511800"},{value:"511828",name:"其它区",parent:"511800"},{value:"511902",name:"巴州区",parent:"511900"},{value:"511903",name:"恩阳区",parent:"511900"},{value:"511921",name:"通江县",parent:"511900"},{value:"511922",name:"南江县",parent:"511900"},{value:"511923",name:"平昌县",parent:"511900"},{value:"511924",name:"其它区",parent:"511900"},{value:"512002",name:"雁江区",parent:"512000"},{value:"512021",name:"安岳县",parent:"512000"},{value:"512022",name:"乐至县",parent:"512000"},{value:"512081",name:"简阳市",parent:"512000"},{value:"512082",name:"其它区",parent:"512000"},{value:"513221",name:"汶川县",parent:"513200"},{value:"513222",name:"理县",parent:"513200"},{value:"513223",name:"茂县",parent:"513200"},{value:"513224",name:"松潘县",parent:"513200"},{value:"513225",name:"九寨沟县",parent:"513200"},{value:"513226",name:"金川县",parent:"513200"},{value:"513227",name:"小金县",parent:"513200"},{value:"513228",name:"黑水县",parent:"513200"},{value:"513229",name:"马尔康县",parent:"513200"},{value:"513230",name:"壤塘县",parent:"513200"},{value:"513231",name:"阿坝县",parent:"513200"},{value:"513232",name:"若尔盖县",parent:"513200"},{value:"513233",name:"红原县",parent:"513200"},{value:"513234",name:"其它区",parent:"513200"},{value:"513321",name:"康定市",parent:"513300"},{value:"513322",name:"泸定县",parent:"513300"},{value:"513323",name:"丹巴县",parent:"513300"},{value:"513324",name:"九龙县",parent:"513300"},{value:"513325",name:"雅江县",parent:"513300"},{value:"513326",name:"道孚县",parent:"513300"},{value:"513327",name:"炉霍县",parent:"513300"},{value:"513328",name:"甘孜县",parent:"513300"},{value:"513329",name:"新龙县",parent:"513300"},{value:"513330",name:"德格县",parent:"513300"},{value:"513331",name:"白玉县",parent:"513300"},{value:"513332",name:"石渠县",parent:"513300"},{value:"513333",name:"色达县",parent:"513300"},{value:"513334",name:"理塘县",parent:"513300"},{value:"513335",name:"巴塘县",parent:"513300"},{value:"513336",name:"乡城县",parent:"513300"},{value:"513337",name:"稻城县",parent:"513300"},{value:"513338",name:"得荣县",parent:"513300"},{value:"513339",name:"其它区",parent:"513300"},{value:"513401",name:"西昌市",parent:"513400"},{value:"513422",name:"木里藏族自治县",parent:"513400"},{value:"513423",name:"盐源县",parent:"513400"},{value:"513424",name:"德昌县",parent:"513400"},{value:"513425",name:"会理县",parent:"513400"},{value:"513426",name:"会东县",parent:"513400"},{value:"513427",name:"宁南县",parent:"513400"},{value:"513428",name:"普格县",parent:"513400"},{value:"513429",name:"布拖县",parent:"513400"},{value:"513430",name:"金阳县",parent:"513400"},{value:"513431",name:"昭觉县",parent:"513400"},{value:"513432",name:"喜德县",parent:"513400"},{value:"513433",name:"冕宁县",parent:"513400"},{value:"513434",name:"越西县",parent:"513400"},{value:"513435",name:"甘洛县",parent:"513400"},{value:"513436",name:"美姑县",parent:"513400"},{value:"513437",name:"雷波县",parent:"513400"},{value:"513438",name:"其它区",parent:"513400"},{value:"520102",name:"南明区",parent:"520100"},{value:"520103",name:"云岩区",parent:"520100"},{value:"520111",name:"花溪区",parent:"520100"},{value:"520112",name:"乌当区",parent:"520100"},{value:"520113",name:"白云区",parent:"520100"},{value:"520114",name:"小河区",parent:"520100"},{value:"520121",name:"开阳县",parent:"520100"},{value:"520122",name:"息烽县",parent:"520100"},{value:"520123",name:"修文县",parent:"520100"},{value:"520151",name:"观山湖区",parent:"520100"},{value:"520181",name:"清镇市",parent:"520100"},{value:"520182",name:"其它区",parent:"520100"},{value:"520201",name:"钟山区",parent:"520200"},{value:"520203",name:"六枝特区",parent:"520200"},{value:"520221",name:"水城县",parent:"520200"},{value:"520222",name:"盘县",parent:"520200"},{value:"520223",name:"其它区",parent:"520200"},{value:"520302",name:"红花岗区",parent:"520300"},{value:"520303",name:"汇川区",parent:"520300"},{value:"520321",name:"遵义县",parent:"520300"},{value:"520322",name:"桐梓县",parent:"520300"},{value:"520323",name:"绥阳县",parent:"520300"},{value:"520324",name:"正安县",parent:"520300"},{value:"520325",name:"道真仡佬族苗族自治县",parent:"520300"},{value:"520326",name:"务川仡佬族苗族自治县",parent:"520300"},{value:"520327",name:"凤冈县",parent:"520300"},{value:"520328",name:"湄潭县",parent:"520300"},{value:"520329",name:"余庆县",parent:"520300"},{value:"520330",name:"习水县",parent:"520300"},{value:"520381",name:"赤水市",parent:"520300"},{value:"520382",name:"仁怀市",parent:"520300"},{value:"520383",name:"其它区",parent:"520300"},{value:"520402",name:"西秀区",parent:"520400"},{value:"520421",name:"平坝区",parent:"520400"},{value:"520422",name:"普定县",parent:"520400"},{value:"520423",name:"镇宁布依族苗族自治县",parent:"520400"},{value:"520424",name:"关岭布依族苗族自治县",parent:"520400"},{value:"520425",name:"紫云苗族布依族自治县",parent:"520400"},{value:"520426",name:"其它区",parent:"520400"},{value:"522201",name:"碧江区",parent:"522200"},{value:"522222",name:"江口县",parent:"522200"},{value:"522223",name:"玉屏侗族自治县",parent:"522200"},{value:"522224",name:"石阡县",parent:"522200"},{value:"522225",name:"思南县",parent:"522200"},{value:"522226",name:"印江土家族苗族自治县",parent:"522200"},{value:"522227",name:"德江县",parent:"522200"},{value:"522228",name:"沿河土家族自治县",parent:"522200"},{value:"522229",name:"松桃苗族自治县",parent:"522200"},{value:"522230",name:"万山区",parent:"522200"},{value:"522231",name:"其它区",parent:"522200"},{value:"522301",name:"兴义市",parent:"522300"},{value:"522322",name:"兴仁县",parent:"522300"},{value:"522323",name:"普安县",parent:"522300"},{value:"522324",name:"晴隆县",parent:"522300"},{value:"522325",name:"贞丰县",parent:"522300"},{value:"522326",name:"望谟县",parent:"522300"},{value:"522327",name:"册亨县",parent:"522300"},{value:"522328",name:"安龙县",parent:"522300"},{value:"522329",name:"其它区",parent:"522300"},{value:"522401",name:"七星关区",parent:"522400"},{value:"522422",name:"大方县",parent:"522400"},{value:"522423",name:"黔西县",parent:"522400"},{value:"522424",name:"金沙县",parent:"522400"},{value:"522425",name:"织金县",parent:"522400"},{value:"522426",name:"纳雍县",parent:"522400"},{value:"522427",name:"威宁彝族回族苗族自治县",parent:"522400"},{value:"522428",name:"赫章县",parent:"522400"},{value:"522429",name:"其它区",parent:"522400"},{value:"522601",name:"凯里市",parent:"522600"},{value:"522622",name:"黄平县",parent:"522600"},{value:"522623",name:"施秉县",parent:"522600"},{value:"522624",name:"三穗县",parent:"522600"},{value:"522625",name:"镇远县",parent:"522600"},{value:"522626",name:"岑巩县",parent:"522600"},{value:"522627",name:"天柱县",parent:"522600"},{value:"522628",name:"锦屏县",parent:"522600"},{value:"522629",name:"剑河县",parent:"522600"},{value:"522630",name:"台江县",parent:"522600"},{value:"522631",name:"黎平县",parent:"522600"},{value:"522632",name:"榕江县",parent:"522600"},{value:"522633",name:"从江县",parent:"522600"},{value:"522634",name:"雷山县",parent:"522600"},{value:"522635",name:"麻江县",parent:"522600"},{value:"522636",name:"丹寨县",parent:"522600"},{value:"522637",name:"其它区",parent:"522600"},{value:"522701",name:"都匀市",parent:"522700"},{value:"522702",name:"福泉市",parent:"522700"},{value:"522722",name:"荔波县",parent:"522700"},{value:"522723",name:"贵定县",parent:"522700"},{value:"522725",name:"瓮安县",parent:"522700"},{value:"522726",name:"独山县",parent:"522700"},{value:"522727",name:"平塘县",parent:"522700"},{value:"522728",name:"罗甸县",parent:"522700"},{value:"522729",name:"长顺县",parent:"522700"},{value:"522730",name:"龙里县",parent:"522700"},{value:"522731",name:"惠水县",parent:"522700"},{value:"522732",name:"三都水族自治县",parent:"522700"},{value:"522733",name:"其它区",parent:"522700"},{value:"530102",name:"五华区",parent:"530100"},{value:"530103",name:"盘龙区",parent:"530100"},{value:"530111",name:"官渡区",parent:"530100"},{value:"530112",name:"西山区",parent:"530100"},{value:"530113",name:"东川区",parent:"530100"},{value:"530121",name:"呈贡区",parent:"530100"},{value:"530122",name:"晋宁县",parent:"530100"},{value:"530124",name:"富民县",parent:"530100"},{value:"530125",name:"宜良县",parent:"530100"},{value:"530126",name:"石林彝族自治县",parent:"530100"},{value:"530127",name:"嵩明县",parent:"530100"},{value:"530128",name:"禄劝彝族苗族自治县",parent:"530100"},{value:"530129",name:"寻甸回族彝族自治县",parent:"530100"},{value:"530181",name:"安宁市",parent:"530100"},{value:"530182",name:"其它区",parent:"530100"},{value:"530302",name:"麒麟区",parent:"530300"},{value:"530321",name:"马龙县",parent:"530300"},{value:"530322",name:"陆良县",parent:"530300"},{value:"530323",name:"师宗县",parent:"530300"},{value:"530324",name:"罗平县",parent:"530300"},{value:"530325",name:"富源县",parent:"530300"},{value:"530326",name:"会泽县",parent:"530300"},{value:"530328",name:"沾益县",parent:"530300"},{value:"530381",name:"宣威市",parent:"530300"},{value:"530382",name:"其它区",parent:"530300"},{value:"530402",name:"红塔区",parent:"530400"},{value:"530421",name:"江川县",parent:"530400"},{value:"530422",name:"澄江县",parent:"530400"},{value:"530423",name:"通海县",parent:"530400"},{value:"530424",name:"华宁县",parent:"530400"},{value:"530425",name:"易门县",parent:"530400"},{value:"530426",name:"峨山彝族自治县",parent:"530400"},{value:"530427",name:"新平彝族傣族自治县",parent:"530400"},{value:"530428",name:"元江哈尼族彝族傣族自治县",parent:"530400"},{value:"530429",name:"其它区",parent:"530400"},{value:"530502",name:"隆阳区",parent:"530500"},{value:"530521",name:"施甸县",parent:"530500"},{value:"530522",name:"腾冲县",parent:"530500"},{value:"530523",name:"龙陵县",parent:"530500"},{value:"530524",name:"昌宁县",parent:"530500"},{value:"530525",name:"其它区",parent:"530500"},{value:"530602",name:"昭阳区",parent:"530600"},{value:"530621",name:"鲁甸县",parent:"530600"},{value:"530622",name:"巧家县",parent:"530600"},{value:"530623",name:"盐津县",parent:"530600"},{value:"530624",name:"大关县",parent:"530600"},{value:"530625",name:"永善县",parent:"530600"},{value:"530626",name:"绥江县",parent:"530600"},{value:"530627",name:"镇雄县",parent:"530600"},{value:"530628",name:"彝良县",parent:"530600"},{value:"530629",name:"威信县",parent:"530600"},{value:"530630",name:"水富县",parent:"530600"},{value:"530631",name:"其它区",parent:"530600"},{value:"530702",name:"古城区",parent:"530700"},{value:"530721",name:"玉龙纳西族自治县",parent:"530700"},{value:"530722",name:"永胜县",parent:"530700"},{value:"530723",name:"华坪县",parent:"530700"},{value:"530724",name:"宁蒗彝族自治县",parent:"530700"},{value:"530725",name:"其它区",parent:"530700"},{value:"530802",name:"思茅区",parent:"530800"},{value:"530821",name:"宁洱哈尼族彝族自治县",parent:"530800"},{value:"530822",name:"墨江哈尼族自治县",parent:"530800"},{value:"530823",name:"景东彝族自治县",parent:"530800"},{value:"530824",name:"景谷傣族彝族自治县",parent:"530800"},{value:"530825",name:"镇沅彝族哈尼族拉祜族自治县",parent:"530800"},{value:"530826",name:"江城哈尼族彝族自治县",parent:"530800"},{value:"530827",name:"孟连傣族拉祜族佤族自治县",parent:"530800"},{value:"530828",name:"澜沧拉祜族自治县",parent:"530800"},{value:"530829",name:"西盟佤族自治县",parent:"530800"},{value:"530830",name:"其它区",parent:"530800"},{value:"530902",name:"临翔区",parent:"530900"},{value:"530921",name:"凤庆县",parent:"530900"},{value:"530922",name:"云县",parent:"530900"},{value:"530923",name:"永德县",parent:"530900"},{value:"530924",name:"镇康县",parent:"530900"},{value:"530925",name:"双江拉祜族佤族布朗族傣族自治县",parent:"530900"},{value:"530926",name:"耿马傣族佤族自治县",parent:"530900"},{value:"530927",name:"沧源佤族自治县",parent:"530900"},{value:"530928",name:"其它区",parent:"530900"},{value:"532301",name:"楚雄市",parent:"532300"},{value:"532322",name:"双柏县",parent:"532300"},{value:"532323",name:"牟定县",parent:"532300"},{value:"532324",name:"南华县",parent:"532300"},{value:"532325",name:"姚安县",parent:"532300"},{value:"532326",name:"大姚县",parent:"532300"},{value:"532327",name:"永仁县",parent:"532300"},{value:"532328",name:"元谋县",parent:"532300"},{value:"532329",name:"武定县",parent:"532300"},{value:"532331",name:"禄丰县",parent:"532300"},{value:"532332",name:"其它区",parent:"532300"},{value:"532501",name:"个旧市",parent:"532500"},{value:"532502",name:"开远市",parent:"532500"},{value:"532522",name:"蒙自市",parent:"532500"},{value:"532523",name:"屏边苗族自治县",parent:"532500"},{value:"532524",name:"建水县",parent:"532500"},{value:"532525",name:"石屏县",parent:"532500"},{value:"532526",name:"弥勒市",parent:"532500"},{value:"532527",name:"泸西县",parent:"532500"},{value:"532528",name:"元阳县",parent:"532500"},{value:"532529",name:"红河县",parent:"532500"},{value:"532530",name:"金平苗族瑶族傣族自治县",parent:"532500"},{value:"532531",name:"绿春县",parent:"532500"},{value:"532532",name:"河口瑶族自治县",parent:"532500"},{value:"532533",name:"其它区",parent:"532500"},{value:"532621",name:"文山市",parent:"532600"},{value:"532622",name:"砚山县",parent:"532600"},{value:"532623",name:"西畴县",parent:"532600"},{value:"532624",name:"麻栗坡县",parent:"532600"},{value:"532625",name:"马关县",parent:"532600"},{value:"532626",name:"丘北县",parent:"532600"},{value:"532627",name:"广南县",parent:"532600"},{value:"532628",name:"富宁县",parent:"532600"},{value:"532629",name:"其它区",parent:"532600"},{value:"532801",name:"景洪市",parent:"532800"},{value:"532822",name:"勐海县",parent:"532800"},{value:"532823",name:"勐腊县",parent:"532800"},{value:"532824",name:"其它区",parent:"532800"},{value:"532901",name:"大理市",parent:"532900"},{value:"532922",name:"漾濞彝族自治县",parent:"532900"},{value:"532923",name:"祥云县",parent:"532900"},{value:"532924",name:"宾川县",parent:"532900"},{value:"532925",name:"弥渡县",parent:"532900"},{value:"532926",name:"南涧彝族自治县",parent:"532900"},{value:"532927",name:"巍山彝族回族自治县",parent:"532900"},{value:"532928",name:"永平县",parent:"532900"},{value:"532929",name:"云龙县",parent:"532900"},{value:"532930",name:"洱源县",parent:"532900"},{value:"532931",name:"剑川县",parent:"532900"},{value:"532932",name:"鹤庆县",parent:"532900"},{value:"532933",name:"其它区",parent:"532900"},{value:"533102",name:"瑞丽市",parent:"533100"},{value:"533103",name:"芒市",parent:"533100"},{value:"533122",name:"梁河县",parent:"533100"},{value:"533123",name:"盈江县",parent:"533100"},{value:"533124",name:"陇川县",parent:"533100"},{value:"533125",name:"其它区",parent:"533100"},{value:"533321",name:"泸水县",parent:"533300"},{value:"533323",name:"福贡县",parent:"533300"},{value:"533324",name:"贡山独龙族怒族自治县",parent:"533300"},{value:"533325",name:"兰坪白族普米族自治县",parent:"533300"},{value:"533326",name:"其它区",parent:"533300"},{value:"533421",name:"香格里拉市",parent:"533400"},{value:"533422",name:"德钦县",parent:"533400"},{value:"533423",name:"维西傈僳族自治县",parent:"533400"},{value:"533424",name:"其它区",parent:"533400"},{value:"540102",name:"城关区",parent:"540100"},{value:"540121",name:"林周县",parent:"540100"},{value:"540122",name:"当雄县",parent:"540100"},{value:"540123",name:"尼木县",parent:"540100"},{value:"540124",name:"曲水县",parent:"540100"},{value:"540125",name:"堆龙德庆县",parent:"540100"},{value:"540126",name:"达孜县",parent:"540100"},{value:"540127",name:"墨竹工卡县",parent:"540100"},{value:"540128",name:"其它区",parent:"540100"},{value:"542121",name:"卡若区",parent:"542100"},{value:"542122",name:"江达县",parent:"542100"},{value:"542123",name:"贡觉县",parent:"542100"},{value:"542124",name:"类乌齐县",parent:"542100"},{value:"542125",name:"丁青县",parent:"542100"},{value:"542126",name:"察雅县",parent:"542100"},{value:"542127",name:"八宿县",parent:"542100"},{value:"542128",name:"左贡县",parent:"542100"},{value:"542129",name:"芒康县",parent:"542100"},{value:"542132",name:"洛隆县",parent:"542100"},{value:"542133",name:"边坝县",parent:"542100"},{value:"542134",name:"其它区",parent:"542100"},{value:"542221",name:"乃东县",parent:"542200"},{value:"542222",name:"扎囊县",parent:"542200"},{value:"542223",name:"贡嘎县",parent:"542200"},{value:"542224",name:"桑日县",parent:"542200"},{value:"542225",name:"琼结县",parent:"542200"},{value:"542226",name:"曲松县",parent:"542200"},{value:"542227",name:"措美县",parent:"542200"},{value:"542228",name:"洛扎县",parent:"542200"},{value:"542229",name:"加查县",parent:"542200"},{value:"542231",name:"隆子县",parent:"542200"},{value:"542232",name:"错那县",parent:"542200"},{value:"542233",name:"浪卡子县",parent:"542200"},{value:"542234",name:"其它区",parent:"542200"},{value:"542301",name:"桑珠孜区",parent:"542300"},{value:"542322",name:"南木林县",parent:"542300"},{value:"542323",name:"江孜县",parent:"542300"},{value:"542324",name:"定日县",parent:"542300"},{value:"542325",name:"萨迦县",parent:"542300"},{value:"542326",name:"拉孜县",parent:"542300"},{value:"542327",name:"昂仁县",parent:"542300"},{value:"542328",name:"谢通门县",parent:"542300"},{value:"542329",name:"白朗县",parent:"542300"},{value:"542330",name:"仁布县",parent:"542300"},{value:"542331",name:"康马县",parent:"542300"},{value:"542332",name:"定结县",parent:"542300"},{value:"542333",name:"仲巴县",parent:"542300"},{value:"542334",name:"亚东县",parent:"542300"},{value:"542335",name:"吉隆县",parent:"542300"},{value:"542336",name:"聂拉木县",parent:"542300"},{value:"542337",name:"萨嘎县",parent:"542300"},{value:"542338",name:"岗巴县",parent:"542300"},{value:"542339",name:"其它区",parent:"542300"},{value:"542421",name:"那曲县",parent:"542400"},{value:"542422",name:"嘉黎县",parent:"542400"},{value:"542423",name:"比如县",parent:"542400"},{value:"542424",name:"聂荣县",parent:"542400"},{value:"542425",name:"安多县",parent:"542400"},{value:"542426",name:"申扎县",parent:"542400"},{value:"542427",name:"索县",parent:"542400"},{value:"542428",name:"班戈县",parent:"542400"},{value:"542429",name:"巴青县",parent:"542400"},{value:"542430",name:"尼玛县",parent:"542400"},{value:"542431",name:"其它区",parent:"542400"},{value:"542432",name:"双湖县",parent:"542400"},{value:"542521",name:"普兰县",parent:"542500"},{value:"542522",name:"札达县",parent:"542500"},{value:"542523",name:"噶尔县",parent:"542500"},{value:"542524",name:"日土县",parent:"542500"},{value:"542525",name:"革吉县",parent:"542500"},{value:"542526",name:"改则县",parent:"542500"},{value:"542527",name:"措勤县",parent:"542500"},{value:"542528",name:"其它区",parent:"542500"},{value:"542621",name:"巴宜区",parent:"542600"},{value:"542622",name:"工布江达县",parent:"542600"},{value:"542623",name:"米林县",parent:"542600"},{value:"542624",name:"墨脱县",parent:"542600"},{value:"542625",name:"波密县",parent:"542600"},{value:"542626",name:"察隅县",parent:"542600"},{value:"542627",name:"朗县",parent:"542600"},{value:"542628",name:"其它区",parent:"542600"},{value:"610102",name:"新城区",parent:"610100"},{value:"610103",name:"碑林区",parent:"610100"},{value:"610104",name:"莲湖区",parent:"610100"},{value:"610111",name:"灞桥区",parent:"610100"},{value:"610112",name:"未央区",parent:"610100"},{value:"610113",name:"雁塔区",parent:"610100"},{value:"610114",name:"阎良区",parent:"610100"},{value:"610115",name:"临潼区",parent:"610100"},{value:"610116",name:"长安区",parent:"610100"},{value:"610122",name:"蓝田县",parent:"610100"},{value:"610124",name:"周至县",parent:"610100"},{value:"610125",name:"户县",parent:"610100"},{value:"610126",name:"高陵区",parent:"610100"},{value:"610127",name:"其它区",parent:"610100"},{value:"610202",name:"王益区",parent:"610200"},{value:"610203",name:"印台区",parent:"610200"},{value:"610204",name:"耀州区",parent:"610200"},{value:"610222",name:"宜君县",parent:"610200"},{value:"610223",name:"其它区",parent:"610200"},{value:"610302",name:"渭滨区",parent:"610300"},{value:"610303",name:"金台区",parent:"610300"},{value:"610304",name:"陈仓区",parent:"610300"},{value:"610322",name:"凤翔县",parent:"610300"},{value:"610323",name:"岐山县",parent:"610300"},{value:"610324",name:"扶风县",parent:"610300"},{value:"610326",name:"眉县",parent:"610300"},{value:"610327",name:"陇县",parent:"610300"},{value:"610328",name:"千阳县",parent:"610300"},{value:"610329",name:"麟游县",parent:"610300"},{value:"610330",name:"凤县",parent:"610300"},{value:"610331",name:"太白县",parent:"610300"},{value:"610332",name:"其它区",parent:"610300"},{value:"610402",name:"秦都区",parent:"610400"},{value:"610403",name:"杨陵区",parent:"610400"},{value:"610404",name:"渭城区",parent:"610400"},{value:"610422",name:"三原县",parent:"610400"},{value:"610423",name:"泾阳县",parent:"610400"},{value:"610424",name:"乾县",parent:"610400"},{value:"610425",name:"礼泉县",parent:"610400"},{value:"610426",name:"永寿县",parent:"610400"},{value:"610427",name:"彬县",parent:"610400"},{value:"610428",name:"长武县",parent:"610400"},{value:"610429",name:"旬邑县",parent:"610400"},{value:"610430",name:"淳化县",parent:"610400"},{value:"610431",name:"武功县",parent:"610400"},{value:"610481",name:"兴平市",parent:"610400"},{value:"610482",name:"其它区",parent:"610400"},{value:"610502",name:"临渭区",parent:"610500"},{value:"610521",name:"华县",parent:"610500"},{value:"610522",name:"潼关县",parent:"610500"},{value:"610523",name:"大荔县",parent:"610500"},{value:"610524",name:"合阳县",parent:"610500"},{value:"610525",name:"澄城县",parent:"610500"},{value:"610526",name:"蒲城县",parent:"610500"},{value:"610527",name:"白水县",parent:"610500"},{value:"610528",name:"富平县",parent:"610500"},{value:"610581",name:"韩城市",parent:"610500"},{value:"610582",name:"华阴市",parent:"610500"},{value:"610583",name:"其它区",parent:"610500"},{value:"610602",name:"宝塔区",parent:"610600"},{value:"610621",name:"延长县",parent:"610600"},{value:"610622",name:"延川县",parent:"610600"},{value:"610623",name:"子长县",parent:"610600"},{value:"610624",name:"安塞县",parent:"610600"},{value:"610625",name:"志丹县",parent:"610600"},{value:"610626",name:"吴起县",parent:"610600"},{value:"610627",name:"甘泉县",parent:"610600"},{value:"610628",name:"富县",parent:"610600"},{value:"610629",name:"洛川县",parent:"610600"},{value:"610630",name:"宜川县",parent:"610600"},{value:"610631",name:"黄龙县",parent:"610600"},{value:"610632",name:"黄陵县",parent:"610600"},{value:"610633",name:"其它区",parent:"610600"},{value:"610702",name:"汉台区",parent:"610700"},{value:"610721",name:"南郑县",parent:"610700"},{value:"610722",name:"城固县",parent:"610700"},{value:"610723",name:"洋县",parent:"610700"},{value:"610724",name:"西乡县",parent:"610700"},{value:"610725",name:"勉县",parent:"610700"},{value:"610726",name:"宁强县",parent:"610700"},{value:"610727",name:"略阳县",parent:"610700"},{value:"610728",name:"镇巴县",parent:"610700"},{value:"610729",name:"留坝县",parent:"610700"},{value:"610730",name:"佛坪县",parent:"610700"},{value:"610731",name:"其它区",parent:"610700"},{value:"610802",name:"榆阳区",parent:"610800"},{value:"610821",name:"神木县",parent:"610800"},{value:"610822",name:"府谷县",parent:"610800"},{value:"610823",name:"横山县",parent:"610800"},{value:"610824",name:"靖边县",parent:"610800"},{value:"610825",name:"定边县",parent:"610800"},{value:"610826",name:"绥德县",parent:"610800"},{value:"610827",name:"米脂县",parent:"610800"},{value:"610828",name:"佳县",parent:"610800"},{value:"610829",name:"吴堡县",parent:"610800"},{value:"610830",name:"清涧县",parent:"610800"},{value:"610831",name:"子洲县",parent:"610800"},{value:"610832",name:"其它区",parent:"610800"},{value:"610902",name:"汉滨区",parent:"610900"},{value:"610921",name:"汉阴县",parent:"610900"},{value:"610922",name:"石泉县",parent:"610900"},{value:"610923",name:"宁陕县",parent:"610900"},{value:"610924",name:"紫阳县",parent:"610900"},{value:"610925",name:"岚皋县",parent:"610900"},{value:"610926",name:"平利县",parent:"610900"},{value:"610927",name:"镇坪县",parent:"610900"},{value:"610928",name:"旬阳县",parent:"610900"},{value:"610929",name:"白河县",parent:"610900"},{value:"610930",name:"其它区",parent:"610900"},{value:"611002",name:"商州区",parent:"611000"},{value:"611021",name:"洛南县",parent:"611000"},{value:"611022",name:"丹凤县",parent:"611000"},{value:"611023",name:"商南县",parent:"611000"},{value:"611024",name:"山阳县",parent:"611000"},{value:"611025",name:"镇安县",parent:"611000"},{value:"611026",name:"柞水县",parent:"611000"},{value:"611027",name:"其它区",parent:"611000"},{value:"620102",name:"城关区",parent:"620100"},{value:"620103",name:"七里河区",parent:"620100"},{value:"620104",name:"西固区",parent:"620100"},{value:"620105",name:"安宁区",parent:"620100"},{value:"620111",name:"红古区",parent:"620100"},{value:"620121",name:"永登县",parent:"620100"},{value:"620122",name:"皋兰县",parent:"620100"},{value:"620123",name:"榆中县",parent:"620100"},{value:"620124",name:"其它区",parent:"620100"},{value:"620302",name:"金川区",parent:"620300"},{value:"620321",name:"永昌县",parent:"620300"},{value:"620322",name:"其它区",parent:"620300"},{value:"620402",name:"白银区",parent:"620400"},{value:"620403",name:"平川区",parent:"620400"},{value:"620421",name:"靖远县",parent:"620400"},{value:"620422",name:"会宁县",parent:"620400"},{value:"620423",name:"景泰县",parent:"620400"},{value:"620424",name:"其它区",parent:"620400"},{value:"620502",name:"秦州区",parent:"620500"},{value:"620503",name:"麦积区",parent:"620500"},{value:"620521",name:"清水县",parent:"620500"},{value:"620522",name:"秦安县",parent:"620500"},{value:"620523",name:"甘谷县",parent:"620500"},{value:"620524",name:"武山县",parent:"620500"},{value:"620525",name:"张家川回族自治县",parent:"620500"},{value:"620526",name:"其它区",parent:"620500"},{value:"620602",name:"凉州区",parent:"620600"},{value:"620621",name:"民勤县",parent:"620600"},{value:"620622",name:"古浪县",parent:"620600"},{value:"620623",name:"天祝藏族自治县",parent:"620600"},{value:"620624",name:"其它区",parent:"620600"},{value:"620702",name:"甘州区",parent:"620700"},{value:"620721",name:"肃南裕固族自治县",parent:"620700"},{value:"620722",name:"民乐县",parent:"620700"},{value:"620723",name:"临泽县",parent:"620700"},{value:"620724",name:"高台县",parent:"620700"},{value:"620725",name:"山丹县",parent:"620700"},{value:"620726",name:"其它区",parent:"620700"},{value:"620802",name:"崆峒区",parent:"620800"},{value:"620821",name:"泾川县",parent:"620800"},{value:"620822",name:"灵台县",parent:"620800"},{value:"620823",name:"崇信县",parent:"620800"},{value:"620824",name:"华亭县",parent:"620800"},{value:"620825",name:"庄浪县",parent:"620800"},{value:"620826",name:"静宁县",parent:"620800"},{value:"620827",name:"其它区",parent:"620800"},{value:"620902",name:"肃州区",parent:"620900"},{value:"620921",name:"金塔县",parent:"620900"},{value:"620922",name:"瓜州县",parent:"620900"},{value:"620923",name:"肃北蒙古族自治县",parent:"620900"},{value:"620924",name:"阿克塞哈萨克族自治县",parent:"620900"},{value:"620981",name:"玉门市",parent:"620900"},{value:"620982",name:"敦煌市",parent:"620900"},{value:"620983",name:"其它区",parent:"620900"},{value:"621002",name:"西峰区",parent:"621000"},{value:"621021",name:"庆城县",parent:"621000"},{value:"621022",name:"环县",parent:"621000"},{value:"621023",name:"华池县",parent:"621000"},{value:"621024",name:"合水县",parent:"621000"},{value:"621025",name:"正宁县",parent:"621000"},{value:"621026",name:"宁县",parent:"621000"},{value:"621027",name:"镇原县",parent:"621000"},{value:"621028",name:"其它区",parent:"621000"},{value:"621102",name:"安定区",parent:"621100"},{value:"621121",name:"通渭县",parent:"621100"},{value:"621122",name:"陇西县",parent:"621100"},{value:"621123",name:"渭源县",parent:"621100"},{value:"621124",name:"临洮县",parent:"621100"},{value:"621125",name:"漳县",parent:"621100"},{value:"621126",name:"岷县",parent:"621100"},{value:"621127",name:"其它区",parent:"621100"},{value:"621202",name:"武都区",parent:"621200"},{value:"621221",name:"成县",parent:"621200"},{value:"621222",name:"文县",parent:"621200"},{value:"621223",name:"宕昌县",parent:"621200"},{value:"621224",name:"康县",parent:"621200"},{value:"621225",name:"西和县",parent:"621200"},{value:"621226",name:"礼县",parent:"621200"},{value:"621227",name:"徽县",parent:"621200"},{value:"621228",name:"两当县",parent:"621200"},{value:"621229",name:"其它区",parent:"621200"},{value:"622901",name:"临夏市",parent:"622900"},{value:"622921",name:"临夏县",parent:"622900"},{value:"622922",name:"康乐县",parent:"622900"},{value:"622923",name:"永靖县",parent:"622900"},{value:"622924",name:"广河县",parent:"622900"},{value:"622925",name:"和政县",parent:"622900"},{value:"622926",name:"东乡族自治县",parent:"622900"},{value:"622927",name:"积石山保安族东乡族撒拉族自治县",parent:"622900"},{value:"622928",name:"其它区",parent:"622900"},{value:"623001",name:"合作市",parent:"623000"},{value:"623021",name:"临潭县",parent:"623000"},{value:"623022",name:"卓尼县",parent:"623000"},{value:"623023",name:"舟曲县",parent:"623000"},{value:"623024",name:"迭部县",parent:"623000"},{value:"623025",name:"玛曲县",parent:"623000"},{value:"623026",name:"碌曲县",parent:"623000"},{value:"623027",name:"夏河县",parent:"623000"},{value:"623028",name:"其它区",parent:"623000"},{value:"630102",name:"城东区",parent:"630100"},{value:"630103",name:"城中区",parent:"630100"},{value:"630104",name:"城西区",parent:"630100"},{value:"630105",name:"城北区",parent:"630100"},{value:"630121",name:"大通回族土族自治县",parent:"630100"},{value:"630122",name:"湟中县",parent:"630100"},{value:"630123",name:"湟源县",parent:"630100"},{value:"630124",name:"其它区",parent:"630100"},{value:"632121",name:"平安区",parent:"632100"},{value:"632122",name:"民和回族土族自治县",parent:"632100"},{value:"632123",name:"乐都区",parent:"632100"},{value:"632126",name:"互助土族自治县",parent:"632100"},{value:"632127",name:"化隆回族自治县",parent:"632100"},{value:"632128",name:"循化撒拉族自治县",parent:"632100"},{value:"632129",name:"其它区",parent:"632100"},{value:"632221",name:"门源回族自治县",parent:"632200"},{value:"632222",name:"祁连县",parent:"632200"},{value:"632223",name:"海晏县",parent:"632200"},{value:"632224",name:"刚察县",parent:"632200"},{value:"632225",name:"其它区",parent:"632200"},{value:"632321",name:"同仁县",parent:"632300"},{value:"632322",name:"尖扎县",parent:"632300"},{value:"632323",name:"泽库县",parent:"632300"},{value:"632324",name:"河南蒙古族自治县",parent:"632300"},{value:"632325",name:"其它区",parent:"632300"},{value:"632521",name:"共和县",parent:"632500"},{value:"632522",name:"同德县",parent:"632500"},{value:"632523",name:"贵德县",parent:"632500"},{value:"632524",name:"兴海县",parent:"632500"},{value:"632525",name:"贵南县",parent:"632500"},{value:"632526",name:"其它区",parent:"632500"},{value:"632621",name:"玛沁县",parent:"632600"},{value:"632622",name:"班玛县",parent:"632600"},{value:"632623",name:"甘德县",parent:"632600"},{value:"632624",name:"达日县",parent:"632600"},{value:"632625",name:"久治县",parent:"632600"},{value:"632626",name:"玛多县",parent:"632600"},{value:"632627",name:"其它区",parent:"632600"},{value:"632721",name:"玉树市",parent:"632700"},{value:"632722",name:"杂多县",parent:"632700"},{value:"632723",name:"称多县",parent:"632700"},{value:"632724",name:"治多县",parent:"632700"},{value:"632725",name:"囊谦县",parent:"632700"},{value:"632726",name:"曲麻莱县",parent:"632700"},{value:"632727",name:"其它区",parent:"632700"},{value:"632801",name:"格尔木市",parent:"632800"},{value:"632802",name:"德令哈市",parent:"632800"},{value:"632821",name:"乌兰县",parent:"632800"},{value:"632822",name:"都兰县",parent:"632800"},{value:"632823",name:"天峻县",parent:"632800"},{value:"632824",name:"其它区",parent:"632800"},{value:"640104",name:"兴庆区",parent:"640100"},{value:"640105",name:"西夏区",parent:"640100"},{value:"640106",name:"金凤区",parent:"640100"},{value:"640121",name:"永宁县",parent:"640100"},{value:"640122",name:"贺兰县",parent:"640100"},{value:"640181",name:"灵武市",parent:"640100"},{value:"640182",name:"其它区",parent:"640100"},{value:"640202",name:"大武口区",parent:"640200"},{value:"640205",name:"惠农区",parent:"640200"},{value:"640221",name:"平罗县",parent:"640200"},{value:"640222",name:"其它区",parent:"640200"},{value:"640302",name:"利通区",parent:"640300"},{value:"640303",name:"红寺堡区",parent:"640300"},{value:"640323",name:"盐池县",parent:"640300"},{value:"640324",name:"同心县",parent:"640300"},{value:"640381",name:"青铜峡市",parent:"640300"},{value:"640382",name:"其它区",parent:"640300"},{value:"640402",name:"原州区",parent:"640400"},{value:"640422",name:"西吉县",parent:"640400"},{value:"640423",name:"隆德县",parent:"640400"},{value:"640424",name:"泾源县",parent:"640400"},{value:"640425",name:"彭阳县",parent:"640400"},{value:"640426",name:"其它区",parent:"640400"},{value:"640502",name:"沙坡头区",parent:"640500"},{value:"640521",name:"中宁县",parent:"640500"},{value:"640522",name:"海原县",parent:"640500"},{value:"640523",name:"其它区",parent:"640500"},{value:"650102",name:"天山区",parent:"650100"},{value:"650103",name:"沙依巴克区",parent:"650100"},{value:"650104",name:"新市区",parent:"650100"},{value:"650105",name:"水磨沟区",parent:"650100"},{value:"650106",name:"头屯河区",parent:"650100"},{value:"650107",name:"达坂城区",parent:"650100"},{value:"650108",name:"东山区",parent:"650100"},{value:"650109",name:"米东区",parent:"650100"},{value:"650121",name:"乌鲁木齐县",parent:"650100"},{value:"650122",name:"其它区",parent:"650100"},{value:"650202",name:"独山子区",parent:"650200"},{value:"650203",name:"克拉玛依区",parent:"650200"},{value:"650204",name:"白碱滩区",parent:"650200"},{value:"650205",name:"乌尔禾区",parent:"650200"},{value:"650206",name:"其它区",parent:"650200"},{value:"652101",name:"高昌区",parent:"652100"},{value:"652122",name:"鄯善县",parent:"652100"},{value:"652123",name:"托克逊县",parent:"652100"},{value:"652124",name:"其它区",parent:"652100"},{value:"652201",name:"哈密市",parent:"652200"},{value:"652222",name:"巴里坤哈萨克自治县",parent:"652200"},{value:"652223",name:"伊吾县",parent:"652200"},{value:"652224",name:"其它区",parent:"652200"},{value:"652301",name:"昌吉市",parent:"652300"},{value:"652302",name:"阜康市",parent:"652300"},{value:"652303",name:"米泉市",parent:"652300"},{value:"652323",name:"呼图壁县",parent:"652300"},{value:"652324",name:"玛纳斯县",parent:"652300"},{value:"652325",name:"奇台县",parent:"652300"},{value:"652327",name:"吉木萨尔县",parent:"652300"},{value:"652328",name:"木垒哈萨克自治县",parent:"652300"},{value:"652329",name:"其它区",parent:"652300"},{value:"652701",name:"博乐市",parent:"652700"},{value:"652702",name:"阿拉山口市",parent:"652700"},{value:"652722",name:"精河县",parent:"652700"},{value:"652723",name:"温泉县",parent:"652700"},{value:"652724",name:"其它区",parent:"652700"},{value:"652801",name:"库尔勒市",parent:"652800"},{value:"652822",name:"轮台县",parent:"652800"},{value:"652823",name:"尉犁县",parent:"652800"},{value:"652824",name:"若羌县",parent:"652800"},{value:"652825",name:"且末县",parent:"652800"},{value:"652826",name:"焉耆回族自治县",parent:"652800"},{value:"652827",name:"和静县",parent:"652800"},{value:"652828",name:"和硕县",parent:"652800"},{value:"652829",name:"博湖县",parent:"652800"},{value:"652830",name:"其它区",parent:"652800"},{value:"652901",name:"阿克苏市",parent:"652900"},{value:"652922",name:"温宿县",parent:"652900"},{value:"652923",name:"库车县",parent:"652900"},{value:"652924",name:"沙雅县",parent:"652900"},{value:"652925",name:"新和县",parent:"652900"},{value:"652926",name:"拜城县",parent:"652900"},{value:"652927",name:"乌什县",parent:"652900"},{value:"652928",name:"阿瓦提县",parent:"652900"},{value:"652929",name:"柯坪县",parent:"652900"},{value:"652930",name:"其它区",parent:"652900"},{value:"653001",name:"阿图什市",parent:"653000"},{value:"653022",name:"阿克陶县",parent:"653000"},{value:"653023",name:"阿合奇县",parent:"653000"},{value:"653024",name:"乌恰县",parent:"653000"},{value:"653025",name:"其它区",parent:"653000"},{value:"653101",name:"喀什市",parent:"653100"},{value:"653121",name:"疏附县",parent:"653100"},{value:"653122",name:"疏勒县",parent:"653100"},{value:"653123",name:"英吉沙县",parent:"653100"},{value:"653124",name:"泽普县",parent:"653100"},{value:"653125",name:"莎车县",parent:"653100"},{value:"653126",name:"叶城县",parent:"653100"},{value:"653127",name:"麦盖提县",parent:"653100"},{value:"653128",name:"岳普湖县",parent:"653100"},{value:"653129",name:"伽师县",parent:"653100"},{value:"653130",name:"巴楚县",parent:"653100"},{value:"653131",name:"塔什库尔干塔吉克自治县",parent:"653100"},{value:"653132",name:"其它区",parent:"653100"},{value:"653201",name:"和田市",parent:"653200"},{value:"653221",name:"和田县",parent:"653200"},{value:"653222",name:"墨玉县",parent:"653200"},{value:"653223",name:"皮山县",parent:"653200"},{value:"653224",name:"洛浦县",parent:"653200"},{value:"653225",name:"策勒县",parent:"653200"},{value:"653226",name:"于田县",parent:"653200"},{value:"653227",name:"民丰县",parent:"653200"},{value:"653228",name:"其它区",parent:"653200"},{value:"654002",name:"伊宁市",parent:"654000"},{value:"654003",name:"奎屯市",parent:"654000"},{value:"654004",name:"霍尔果斯市",parent:"654000"},{value:"654021",name:"伊宁县",parent:"654000"},{value:"654022",name:"察布查尔锡伯自治县",parent:"654000"},{value:"654023",name:"霍城县",parent:"654000"},{value:"654024",name:"巩留县",parent:"654000"},{value:"654025",name:"新源县",parent:"654000"},{value:"654026",name:"昭苏县",parent:"654000"},{value:"654027",name:"特克斯县",parent:"654000"},{value:"654028",name:"尼勒克县",parent:"654000"},{value:"654029",name:"其它区",parent:"654000"},{value:"654201",name:"塔城市",parent:"654200"},{value:"654202",name:"乌苏市",parent:"654200"},{value:"654221",name:"额敏县",parent:"654200"},{value:"654223",name:"沙湾县",parent:"654200"},{value:"654224",name:"托里县",parent:"654200"},{value:"654225",name:"裕民县",parent:"654200"},{value:"654226",name:"和布克赛尔蒙古自治县",parent:"654200"},{value:"654227",name:"其它区",parent:"654200"},{value:"654301",name:"阿勒泰市",parent:"654300"},{value:"654321",name:"布尔津县",parent:"654300"},{value:"654322",name:"富蕴县",parent:"654300"},{value:"654323",name:"福海县",parent:"654300"},{value:"654324",name:"哈巴河县",parent:"654300"},{value:"654325",name:"青河县",parent:"654300"},{value:"654326",name:"吉木乃县",parent:"654300"},{value:"654327",name:"其它区",parent:"654300"},{value:"659001",name:"石河子市",parent:"650000"},{value:"659002",name:"阿拉尔市",parent:"650000"},{value:"659003",name:"图木舒克市",parent:"650000"},{value:"659004",name:"五家渠市",parent:"650000"},{value:"659007",name:"双河市",parent:"659000"},{value:"659008",name:"可克达拉市",parent:"659000"},{value:"710101",name:"中正区",parent:"710100"},{value:"710102",name:"大同区",parent:"710100"},{value:"710103",name:"中山区",parent:"710100"},{value:"710104",name:"松山区",parent:"710100"},{value:"710105",name:"大安区",parent:"710100"},{value:"710106",name:"万华区",parent:"710100"},{value:"710107",name:"信义区",parent:"710100"},{value:"710108",name:"士林区",parent:"710100"},{value:"710109",name:"北投区",parent:"710100"},{value:"710110",name:"内湖区",parent:"710100"},{value:"710111",name:"南港区",parent:"710100"},{value:"710112",name:"文山区",parent:"710100"},{value:"710113",name:"其它区",parent:"710100"},{value:"710201",name:"新兴区",parent:"710200"},{value:"710202",name:"前金区",parent:"710200"},{value:"710203",name:"芩雅区",parent:"710200"},{value:"710204",name:"盐埕区",parent:"710200"},{value:"710205",name:"鼓山区",parent:"710200"},{value:"710206",name:"旗津区",parent:"710200"},{value:"710207",name:"前镇区",parent:"710200"},{value:"710208",name:"三民区",parent:"710200"},{value:"710209",name:"左营区",parent:"710200"},{value:"710210",name:"楠梓区",parent:"710200"},{value:"710211",name:"小港区",parent:"710200"},{value:"710212",name:"其它区",parent:"710200"},{value:"710241",name:"苓雅区",parent:"710200"},{value:"710242",name:"仁武区",parent:"710200"},{value:"710243",name:"大社区",parent:"710200"},{value:"710244",name:"冈山区",parent:"710200"},{value:"710245",name:"路竹区",parent:"710200"},{value:"710246",name:"阿莲区",parent:"710200"},{value:"710247",name:"田寮区",parent:"710200"},{value:"710248",name:"燕巢区",parent:"710200"},{value:"710249",name:"桥头区",parent:"710200"},{value:"710250",name:"梓官区",parent:"710200"},{value:"710251",name:"弥陀区",parent:"710200"},{value:"710252",name:"永安区",parent:"710200"},{value:"710253",name:"湖内区",parent:"710200"},{value:"710254",name:"凤山区",parent:"710200"},{value:"710255",name:"大寮区",parent:"710200"},{value:"710256",name:"林园区",parent:"710200"},{value:"710257",name:"鸟松区",parent:"710200"},{value:"710258",name:"大树区",parent:"710200"},{value:"710259",name:"旗山区",parent:"710200"},{value:"710260",name:"美浓区",parent:"710200"},{value:"710261",name:"六龟区",parent:"710200"},{value:"710262",name:"内门区",parent:"710200"},{value:"710263",name:"杉林区",parent:"710200"},{value:"710264",name:"甲仙区",parent:"710200"},{value:"710265",name:"桃源区",parent:"710200"},{value:"710266",name:"那玛夏区",parent:"710200"},{value:"710267",name:"茂林区",parent:"710200"},{value:"710268",name:"茄萣区",parent:"710200"},{value:"710301",name:"中西区",parent:"710300"},{value:"710302",name:"东区",parent:"710300"},{value:"710303",name:"南区",parent:"710300"},{value:"710304",name:"北区",parent:"710300"},{value:"710305",name:"安平区",parent:"710300"},{value:"710306",name:"安南区",parent:"710300"},{value:"710307",name:"其它区",parent:"710300"},{value:"710339",name:"永康区",parent:"710300"},{value:"710340",name:"归仁区",parent:"710300"},{value:"710341",name:"新化区",parent:"710300"},{value:"710342",name:"左镇区",parent:"710300"},{value:"710343",name:"玉井区",parent:"710300"},{value:"710344",name:"楠西区",parent:"710300"},{value:"710345",name:"南化区",parent:"710300"},{value:"710346",name:"仁德区",parent:"710300"},{value:"710347",name:"关庙区",parent:"710300"},{value:"710348",name:"龙崎区",parent:"710300"},{value:"710349",name:"官田区",parent:"710300"},{value:"710350",name:"麻豆区",parent:"710300"},{value:"710351",name:"佳里区",parent:"710300"},{value:"710352",name:"西港区",parent:"710300"},{value:"710353",name:"七股区",parent:"710300"},{value:"710354",name:"将军区",parent:"710300"},{value:"710355",name:"学甲区",parent:"710300"},{value:"710356",name:"北门区",parent:"710300"},{value:"710357",name:"新营区",parent:"710300"},{value:"710358",name:"后壁区",parent:"710300"},{value:"710359",name:"白河区",parent:"710300"},{value:"710360",name:"东山区",parent:"710300"},{value:"710361",name:"六甲区",parent:"710300"},{value:"710362",name:"下营区",parent:"710300"},{value:"710363",name:"柳营区",parent:"710300"},{value:"710364",name:"盐水区",parent:"710300"},{value:"710365",name:"善化区",parent:"710300"},{value:"710366",name:"大内区",parent:"710300"},{value:"710367",name:"山上区",parent:"710300"},{value:"710368",name:"新市区",parent:"710300"},{value:"710369",name:"安定区",parent:"710300"},{value:"710401",name:"中区",parent:"710400"},{value:"710402",name:"东区",parent:"710400"},{value:"710403",name:"南区",parent:"710400"},{value:"710404",name:"西区",parent:"710400"},{value:"710405",name:"北区",parent:"710400"},{value:"710406",name:"北屯区",parent:"710400"},{value:"710407",name:"西屯区",parent:"710400"},{value:"710408",name:"南屯区",parent:"710400"},{value:"710409",name:"其它区",parent:"710400"},{value:"710431",name:"太平区",parent:"710400"},{value:"710432",name:"大里区",parent:"710400"},{value:"710433",name:"雾峰区",parent:"710400"},{value:"710434",name:"乌日区",parent:"710400"},{value:"710435",name:"丰原区",parent:"710400"},{value:"710436",name:"后里区",parent:"710400"},{value:"710437",name:"石冈区",parent:"710400"},{value:"710438",name:"东势区",parent:"710400"},{value:"710439",name:"和平区",parent:"710400"},{value:"710440",name:"新社区",parent:"710400"},{value:"710441",name:"潭子区",parent:"710400"},{value:"710442",name:"大雅区",parent:"710400"},{value:"710443",name:"神冈区",parent:"710400"},{value:"710444",name:"大肚区",parent:"710400"},{value:"710445",name:"沙鹿区",parent:"710400"},{value:"710446",name:"龙井区",parent:"710400"},{value:"710447",name:"梧栖区",parent:"710400"},{value:"710448",name:"清水区",parent:"710400"},{value:"710449",name:"大甲区",parent:"710400"},{value:"710450",name:"外埔区",parent:"710400"},{value:"710451",name:"大安区",parent:"710400"},{value:"710507",name:"金沙镇",parent:"710500"},{value:"710508",name:"金湖镇",parent:"710500"},{value:"710509",name:"金宁乡",parent:"710500"},{value:"710510",name:"金城镇",parent:"710500"},{value:"710511",name:"烈屿乡",parent:"710500"},{value:"710512",name:"乌坵乡",parent:"710500"},{value:"710614",name:"南投市",parent:"710600"},{value:"710615",name:"中寮乡",parent:"710600"},{value:"710616",name:"草屯镇",parent:"710600"},{value:"710617",name:"国姓乡",parent:"710600"},{value:"710618",name:"埔里镇",parent:"710600"},{value:"710619",name:"仁爱乡",parent:"710600"},{value:"710620",name:"名间乡",parent:"710600"},{value:"710621",name:"集集镇",parent:"710600"},{value:"710622",name:"水里乡",parent:"710600"},{value:"710623",name:"鱼池乡",parent:"710600"},{value:"710624",name:"信义乡",parent:"710600"},{value:"710625",name:"竹山镇",parent:"710600"},{value:"710626",name:"鹿谷乡",parent:"710600"},{value:"710701",name:"仁爱区",parent:"710700"},{value:"710702",name:"信义区",parent:"710700"},{value:"710703",name:"中正区",parent:"710700"},{value:"710704",name:"中山区",parent:"710700"},{value:"710705",name:"安乐区",parent:"710700"},{value:"710706",name:"暖暖区",parent:"710700"},{value:"710707",name:"七堵区",parent:"710700"},{value:"710708",name:"其它区",parent:"710700"},{value:"710801",name:"东区",parent:"710800"},{value:"710802",name:"北区",parent:"710800"},{value:"710803",name:"香山区",parent:"710800"},{value:"710804",name:"其它区",parent:"710800"},{value:"710901",name:"东区",parent:"710900"},{value:"710902",name:"西区",parent:"710900"},{value:"710903",name:"其它区",parent:"710900"},{value:"711130",name:"万里区",parent:"711100"},{value:"711131",name:"金山区",parent:"711100"},{value:"711132",name:"板桥区",parent:"711100"},{value:"711133",name:"汐止区",parent:"711100"},{value:"711134",name:"深坑区",parent:"711100"},{value:"711135",name:"石碇区",parent:"711100"},{value:"711136",name:"瑞芳区",parent:"711100"},{value:"711137",name:"平溪区",parent:"711100"},{value:"711138",name:"双溪区",parent:"711100"},{value:"711139",name:"贡寮区",parent:"711100"},{value:"711140",name:"新店区",parent:"711100"},{value:"711141",name:"坪林区",parent:"711100"},{value:"711142",name:"乌来区",parent:"711100"},{value:"711143",name:"永和区",parent:"711100"},{value:"711144",name:"中和区",parent:"711100"},{value:"711145",name:"土城区",parent:"711100"},{value:"711146",name:"三峡区",parent:"711100"},{value:"711147",name:"树林区",parent:"711100"},{value:"711148",name:"莺歌区",parent:"711100"},{value:"711149",name:"三重区",parent:"711100"},{value:"711150",name:"新庄区",parent:"711100"},{value:"711151",name:"泰山区",parent:"711100"},{value:"711152",name:"林口区",parent:"711100"},{value:"711153",name:"芦洲区",parent:"711100"},{value:"711154",name:"五股区",parent:"711100"},{value:"711155",name:"八里区",parent:"711100"},{value:"711156",name:"淡水区",parent:"711100"},{value:"711157",name:"三芝区",parent:"711100"},{value:"711158",name:"石门区",parent:"711100"},{value:"711214",name:"宜兰市",parent:"711200"},{value:"711215",name:"头城镇",parent:"711200"},{value:"711216",name:"礁溪乡",parent:"711200"},{value:"711217",name:"壮围乡",parent:"711200"},{value:"711218",name:"员山乡",parent:"711200"},{value:"711219",name:"罗东镇",parent:"711200"},{value:"711220",name:"三星乡",parent:"711200"},{value:"711221",name:"大同乡",parent:"711200"},{value:"711222",name:"五结乡",parent:"711200"},{value:"711223",name:"冬山乡",parent:"711200"},{value:"711224",name:"苏澳镇",parent:"711200"},{value:"711225",name:"南澳乡",parent:"711200"},{value:"711226",name:"钓鱼台",parent:"711200"},{value:"711314",name:"竹北市",parent:"711300"},{value:"711315",name:"湖口乡",parent:"711300"},{value:"711316",name:"新丰乡",parent:"711300"},{value:"711317",name:"新埔镇",parent:"711300"},{value:"711318",name:"关西镇",parent:"711300"},{value:"711319",name:"芎林乡",parent:"711300"},{value:"711320",name:"宝山乡",parent:"711300"},{value:"711321",name:"竹东镇",parent:"711300"},{value:"711322",name:"五峰乡",parent:"711300"},{value:"711323",name:"横山乡",parent:"711300"},{value:"711324",name:"尖石乡",parent:"711300"},{value:"711325",name:"北埔乡",parent:"711300"},{value:"711326",name:"峨眉乡",parent:"711300"},{value:"711414",name:"中坜市",parent:"711400"},{value:"711415",name:"平镇市",parent:"711400"},{value:"711416",name:"龙潭乡",parent:"711400"},{value:"711417",name:"杨梅市",parent:"711400"},{value:"711418",name:"新屋乡",parent:"711400"},{value:"711419",name:"观音乡",parent:"711400"},{value:"711420",name:"桃园市",parent:"711400"},{value:"711421",name:"龟山乡",parent:"711400"},{value:"711422",name:"八德市",parent:"711400"},{value:"711423",name:"大溪镇",parent:"711400"},{value:"711424",name:"复兴乡",parent:"711400"},{value:"711425",name:"大园乡",parent:"711400"},{value:"711426",name:"芦竹乡",parent:"711400"},{value:"711519",name:"竹南镇",parent:"711500"},{value:"711520",name:"头份镇",parent:"711500"},{value:"711521",name:"三湾乡",parent:"711500"},{value:"711522",name:"南庄乡",parent:"711500"},{value:"711523",name:"狮潭乡",parent:"711500"},{value:"711524",name:"后龙镇",parent:"711500"},{value:"711525",name:"通霄镇",parent:"711500"},{value:"711526",name:"苑里镇",parent:"711500"},{value:"711527",name:"苗栗市",parent:"711500"},{value:"711528",name:"造桥乡",parent:"711500"},{value:"711529",name:"头屋乡",parent:"711500"},{value:"711530",name:"公馆乡",parent:"711500"},{value:"711531",name:"大湖乡",parent:"711500"},{value:"711532",name:"泰安乡",parent:"711500"},{value:"711533",name:"铜锣乡",parent:"711500"},{value:"711534",name:"三义乡",parent:"711500"},{value:"711535",name:"西湖乡",parent:"711500"},{value:"711536",name:"卓兰镇",parent:"711500"},{value:"711727",name:"彰化市",parent:"711700"},{value:"711728",name:"芬园乡",parent:"711700"},{value:"711729",name:"花坛乡",parent:"711700"},{value:"711730",name:"秀水乡",parent:"711700"},{value:"711731",name:"鹿港镇",parent:"711700"},{value:"711732",name:"福兴乡",parent:"711700"},{value:"711733",name:"线西乡",parent:"711700"},{value:"711734",name:"和美镇",parent:"711700"},{value:"711735",name:"伸港乡",parent:"711700"},{value:"711736",name:"员林镇",parent:"711700"},{value:"711737",name:"社头乡",parent:"711700"},{value:"711738",name:"永靖乡",parent:"711700"},{value:"711739",name:"埔心乡",parent:"711700"},{value:"711740",name:"溪湖镇",parent:"711700"},{value:"711741",name:"大村乡",parent:"711700"},{value:"711742",name:"埔盐乡",parent:"711700"},{value:"711743",name:"田中镇",parent:"711700"},{value:"711744",name:"北斗镇",parent:"711700"},{value:"711745",name:"田尾乡",parent:"711700"},{value:"711746",name:"埤头乡",parent:"711700"},{value:"711747",name:"溪州乡",parent:"711700"},{value:"711748",name:"竹塘乡",parent:"711700"},{value:"711749",name:"二林镇",parent:"711700"},{value:"711750",name:"大城乡",parent:"711700"},{value:"711751",name:"芳苑乡",parent:"711700"},{value:"711752",name:"二水乡",parent:"711700"},{value:"711919",name:"番路乡",parent:"711900"},{value:"711920",name:"梅山乡",parent:"711900"},{value:"711921",name:"竹崎乡",parent:"711900"},{value:"711922",name:"阿里山乡",parent:"711900"},{value:"711923",name:"中埔乡",parent:"711900"},{value:"711924",name:"大埔乡",parent:"711900"},{value:"711925",name:"水上乡",parent:"711900"},{value:"711926",name:"鹿草乡",parent:"711900"},{value:"711927",name:"太保市",parent:"711900"},{value:"711928",name:"朴子市",parent:"711900"},{value:"711929",name:"东石乡",parent:"711900"},{value:"711930",name:"六脚乡",parent:"711900"},{value:"711931",name:"新港乡",parent:"711900"},{value:"711932",name:"民雄乡",parent:"711900"},{value:"711933",name:"大林镇",parent:"711900"},{value:"711934",name:"溪口乡",parent:"711900"},{value:"711935",name:"义竹乡",parent:"711900"},{value:"711936",name:"布袋镇",parent:"711900"},{value:"712121",name:"斗南镇",parent:"712100"},{value:"712122",name:"大埤乡",parent:"712100"},{value:"712123",name:"虎尾镇",parent:"712100"},{value:"712124",name:"土库镇",parent:"712100"},{value:"712125",name:"褒忠乡",parent:"712100"},{value:"712126",name:"东势乡",parent:"712100"},{value:"712127",name:"台西乡",parent:"712100"},{value:"712128",name:"仑背乡",parent:"712100"},{value:"712129",name:"麦寮乡",parent:"712100"},{value:"712130",name:"斗六市",parent:"712100"},{value:"712131",name:"林内乡",parent:"712100"},{value:"712132",name:"古坑乡",parent:"712100"},{value:"712133",name:"莿桐乡",parent:"712100"},{value:"712134",name:"西螺镇",parent:"712100"},{value:"712135",name:"二仑乡",parent:"712100"},{value:"712136",name:"北港镇",parent:"712100"},{value:"712137",name:"水林乡",parent:"712100"},{value:"712138",name:"口湖乡",parent:"712100"},{value:"712139",name:"四湖乡",parent:"712100"},{value:"712140",name:"元长乡",parent:"712100"},{value:"712434",name:"屏东市",parent:"712400"},{value:"712435",name:"三地门乡",parent:"712400"},{value:"712436",name:"雾台乡",parent:"712400"},{value:"712437",name:"玛家乡",parent:"712400"},{value:"712438",name:"九如乡",parent:"712400"},{value:"712439",name:"里港乡",parent:"712400"},{value:"712440",name:"高树乡",parent:"712400"},{value:"712441",name:"盐埔乡",parent:"712400"},{value:"712442",name:"长治乡",parent:"712400"},{value:"712443",name:"麟洛乡",parent:"712400"},{value:"712444",name:"竹田乡",parent:"712400"},{value:"712445",name:"内埔乡",parent:"712400"},{value:"712446",name:"万丹乡",parent:"712400"},{value:"712447",name:"潮州镇",parent:"712400"},{value:"712448",name:"泰武乡",parent:"712400"},{value:"712449",name:"来义乡",parent:"712400"},{value:"712450",name:"万峦乡",parent:"712400"},{value:"712451",name:"崁顶乡",parent:"712400"},{value:"712452",name:"新埤乡",parent:"712400"},{value:"712453",name:"南州乡",parent:"712400"},{value:"712454",name:"林边乡",parent:"712400"},{value:"712455",name:"东港镇",parent:"712400"},{value:"712456",name:"琉球乡",parent:"712400"},{value:"712457",name:"佳冬乡",parent:"712400"},{value:"712458",name:"新园乡",parent:"712400"},{value:"712459",name:"枋寮乡",parent:"712400"},{value:"712460",name:"枋山乡",parent:"712400"},{value:"712461",name:"春日乡",parent:"712400"},{value:"712462",name:"狮子乡",parent:"712400"},{value:"712463",name:"车城乡",parent:"712400"},{value:"712464",name:"牡丹乡",parent:"712400"},{value:"712465",name:"恒春镇",parent:"712400"},{value:"712466",name:"满州乡",parent:"712400"},{value:"712517",name:"台东市",parent:"712500"},{value:"712518",name:"绿岛乡",parent:"712500"},{value:"712519",name:"兰屿乡",parent:"712500"},{value:"712520",name:"延平乡",parent:"712500"},{value:"712521",name:"卑南乡",parent:"712500"},{value:"712522",name:"鹿野乡",parent:"712500"},{value:"712523",name:"关山镇",parent:"712500"},{value:"712524",name:"海端乡",parent:"712500"},{value:"712525",name:"池上乡",parent:"712500"},{value:"712526",name:"东河乡",parent:"712500"},{value:"712527",name:"成功镇",parent:"712500"},{value:"712528",name:"长滨乡",parent:"712500"},{value:"712529",name:"金峰乡",parent:"712500"},{value:"712530",name:"大武乡",parent:"712500"},{value:"712531",name:"达仁乡",parent:"712500"},{value:"712532",name:"太麻里乡",parent:"712500"},{value:"712615",name:"花莲市",parent:"712600"},{value:"712616",name:"新城乡",parent:"712600"},{value:"712617",name:"太鲁阁",parent:"712600"},{value:"712618",name:"秀林乡",parent:"712600"},{value:"712619",name:"吉安乡",parent:"712600"},{value:"712620",name:"寿丰乡",parent:"712600"},{value:"712621",name:"凤林镇",parent:"712600"},{value:"712622",name:"光复乡",parent:"712600"},{value:"712623",name:"丰滨乡",parent:"712600"},{value:"712624",name:"瑞穗乡",parent:"712600"},{value:"712625",name:"万荣乡",parent:"712600"},{value:"712626",name:"玉里镇",parent:"712600"},{value:"712627",name:"卓溪乡",parent:"712600"},{value:"712628",name:"富里乡",parent:"712600"},{value:"712707",name:"马公市",parent:"712700"},{value:"712708",name:"西屿乡",parent:"712700"},{value:"712709",name:"望安乡",parent:"712700"},{value:"712710",name:"七美乡",parent:"712700"},{value:"712711",name:"白沙乡",parent:"712700"},{value:"712712",name:"湖西乡",parent:"712700"},{value:"712805",name:"南竿乡",parent:"712800"},{value:"712806",name:"北竿乡",parent:"712800"},{value:"712807",name:"莒光乡",parent:"712800"},{value:"712808",name:"东引乡",parent:"712800"},{value:"810101",name:"中西区",parent:"810100"},{value:"810102",name:"湾仔",parent:"810100"},{value:"810103",name:"东区",parent:"810100"},{value:"810104",name:"南区",parent:"810100"},{value:"810201",name:"九龙城区",parent:"810200"},{value:"810202",name:"油尖旺区",parent:"810200"},{value:"810203",name:"深水埗区",parent:"810200"},{value:"810204",name:"黄大仙区",parent:"810200"},{value:"810205",name:"观塘区",parent:"810200"},{value:"810301",name:"北区",parent:"810300"},{value:"810302",name:"大埔区",parent:"810300"},{value:"810303",name:"沙田区",parent:"810300"},{value:"810304",name:"西贡区",parent:"810300"},{value:"810305",name:"元朗区",parent:"810300"},{value:"810306",name:"屯门区",parent:"810300"},{value:"810307",name:"荃湾区",parent:"810300"},{value:"810308",name:"葵青区",parent:"810300"},{value:"810309",name:"离岛区",parent:"810300"},{value:"441901",parent:"441900",name:"莞城区"},{value:"441902",parent:"441900",name:"南城区"},{value:"441904",parent:"441900",name:"万江区"},{value:"441905",parent:"441900",name:"石碣镇"},{value:"441906",parent:"441900",name:"石龙镇"},{value:"441907",parent:"441900",name:"茶山镇"},{value:"441908",parent:"441900",name:"石排镇"},{value:"441909",parent:"441900",name:"企石镇"},{value:"441910",parent:"441900",name:"横沥镇"},{value:"441911",parent:"441900",name:"桥头镇"},{value:"441912",parent:"441900",name:"谢岗镇"},{value:"441913",parent:"441900",name:"东坑镇"},{value:"441914",parent:"441900",name:"常平镇"},{value:"441915",parent:"441900",name:"寮步镇"},{value:"441916",parent:"441900",name:"大朗镇"},{value:"441917",parent:"441900",name:"麻涌镇"},{value:"441918",parent:"441900",name:"中堂镇"},{value:"441919",parent:"441900",name:"高埗镇"},{value:"441920",parent:"441900",name:"樟木头镇"},{value:"441921",parent:"441900",name:"大岭山镇"},{value:"441922",parent:"441900",name:"望牛墩镇"},{value:"441923",parent:"441900",name:"黄江镇"},{value:"441924",parent:"441900",name:"洪梅镇"},{value:"441925",parent:"441900",name:"清溪镇"},{value:"441926",parent:"441900",name:"沙田镇"},{value:"441927",parent:"441900",name:"道滘镇"},{value:"441928",parent:"441900",name:"塘厦镇"},{value:"441929",parent:"441900",name:"虎门镇"},{value:"441930",parent:"441900",name:"厚街镇"},{value:"441931",parent:"441900",name:"凤岗镇"},{value:"441932",parent:"441900",name:"长安镇"},{value:"442001",parent:"442000",name:"石岐区"},{value:"442004",parent:"442000",name:"南区"},{value:"442005",parent:"442000",name:"五桂山区"},{value:"442006",parent:"442000",name:"火炬开发区"},{value:"442007",parent:"442000",name:"黄圃镇"},{value:"442008",parent:"442000",name:"南头镇"},{value:"442009",parent:"442000",name:"东凤镇"},{value:"442010",parent:"442000",name:"阜沙镇"},{value:"442011",parent:"442000",name:"小榄镇"},{value:"442012",parent:"442000",name:"东升镇"},{value:"442013",parent:"442000",name:"古镇镇"},{value:"442014",parent:"442000",name:"横栏镇"},{value:"442015",parent:"442000",name:"三角镇"},{value:"442016",parent:"442000",name:"民众镇"},{value:"442017",parent:"442000",name:"南朗镇"},{value:"442018",parent:"442000",name:"港口镇"},{value:"442019",parent:"442000",name:"大涌镇"},{value:"442020",parent:"442000",name:"沙溪镇"},{value:"442021",parent:"442000",name:"三乡镇"},{value:"442022",parent:"442000",name:"板芙镇"},{value:"442023",parent:"442000",name:"神湾镇"},{value:"442024",parent:"442000",name:"坦洲镇"}];a.lotusAddressJson=t},"921b":function(e,a,n){"use strict";(function(e){var a=n("8189");function t(e,a){return!a||"object"!==typeof a&&"function"!==typeof a?r(e):a}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function l(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&p(e,a)}function p(e,a){return p=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e},p(e,a)}function v(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function m(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,a,n){return a&&m(e.prototype,a),n&&m(e,n),e}var i=a.version,s="https://tongji.dcloud.io/uni/stat",c="https://tongji.dcloud.io/uni/stat.gif",f=1800,d=300,h=10,g="__DC_STAT_UUID",y="__DC_UUID_VALUE";function _(){var a="";if("n"===x()){try{a=plus.runtime.getDCloudId()}catch(n){a=""}return a}try{a=e.getStorageSync(g)}catch(n){a=y}if(!a){a=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,a)}catch(n){e.setStorageSync(g,y)}}return a}var b=function(e){var a=Object.keys(e),n=a.sort(),t={},r="";for(var u in n)t[n[u]]=e[n[u]],r+=n[u]+"="+e[n[u]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},w=function(e){var a="";for(var n in e)a+=n+"="+e[n]+"&";return a.substr(0,a.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},x=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},k=function(){var a="";return"wx"!==x()&&"qq"!==x()||e.canIUse("getAccountInfoSync")&&(a=e.getAccountInfoSync().miniProgram.appId||""),a},O=function(){return"n"===x()?plus.runtime.version:""},S=function(){var e=x(),a="";return"n"===e&&(a=plus.runtime.channel),a},A=function(a){var n=x(),t="";return a||("wx"===n&&(t=e.getLaunchOptionsSync().scene),t)},T="First__Visit__Time",j="Last__Visit__Time",D=function(){var a=e.getStorageSync(T),n=0;return a?n=a:(n=$(),e.setStorageSync(T,n),e.removeStorageSync(j)),n},P=function(){var a=e.getStorageSync(j),n=0;return n=a||"",e.setStorageSync(j,$()),n},E="__page__residence__time",C=0,I=0,B=function(){return C=$(),"n"===x()&&e.setStorageSync(E,$()),C},R=function(){return I=$(),"n"===x()&&(C=e.getStorageSync(E)),I-C},N="Total__Visit__Count",M=function(){var a=e.getStorageSync(N),n=1;return a&&(n=a,n++),e.setStorageSync(N,n),n},U=function(e){var a={};for(var n in e)a[n]=encodeURIComponent(e[n]);return a},q=0,L=0,V=function(){var e=(new Date).getTime();return q=e,L=0,e},F=function(){var e=(new Date).getTime();return L=e,e},H=function(e){var a=0;if(0!==q&&(a=L-q),a=parseInt(a/1e3),a=a<1?1:a,"app"===e){var n=a>d;return{residenceTime:a,overtime:n}}if("page"===e){var t=a>f;return{residenceTime:a,overtime:t}}return{residenceTime:a}},W=function(){var e=getCurrentPages(),a=e[e.length-1],n=a.$vm;return"bd"===x()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},z=function(e){var a=getCurrentPages(),n=a[a.length-1],t=n.$vm,r=e._query,u=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return e._query="","bd"===x()?t.$mp&&t.$mp.page.is+u:t.$scope&&t.$scope.route+u||t.$mp&&t.$mp.page.route+u},J=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},X=function(e,a){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof a&&"object"!==typeof a?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof a&&a.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof a?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},Y=n("7438").default,K=n("1d9e").default||n("1d9e"),G=e.getSystemInfoSync(),Q=function(){function a(){v(this,a),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:x(),mpn:k(),ak:K.appid,usv:i,v:O(),ch:S(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===G.platform?"a":"i",brand:G.brand||"",md:G.model,sv:G.system.replace(/(Android|iOS)\s/,""),mpsdk:G.SDKVersion||"",mpv:G.version||"",lang:G.language,pr:G.pixelRatio,ww:G.windowWidth,wh:G.windowHeight,sw:G.screenWidth,sh:G.screenHeight}}return o(a,[{key:"_applicationShow",value:function(){if(this.__licationHide){F();var e=H("app");if(e.overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,a){this.__licationHide=!0,F();var n=H();V();var t=z(this);this._sendHideRequest({urlref:t,urlref_ts:n.residenceTime},a)}},{key:"_pageShow",value:function(){var e=z(this),a=W();if(this._navigationBarTitle.config=Y&&Y.pages[a]&&Y.pages[a].titleNView&&Y.pages[a].titleNView.titleText||Y&&Y.pages[a]&&Y.pages[a].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=e);F(),this._lastPageRoute=e;var n=H("page");if(n.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){F();var e=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var a=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+a||"",this.statData.t=$(),this.statData.sc=A(e.scene),this.statData.fvts=D(),this.statData.lvts=P(),this.statData.tvc=M(),"n"===x()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var a=e.url,n=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:a,tt:this.statData.tt,urlref:n,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(e,a){var n=e.urlref,t=e.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(r,a)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.key,n=void 0===a?"":a,t=e.value,r=void 0===t?"":t,u=this._lastPageRoute,l={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:u,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(l)}},{key:"getNetworkInfo",value:function(){var a=this;e.getNetworkType({success:function(e){a.statData.net=e.networkType,a.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(a){e.statData.v=a.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var a=this;K.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(a.statData.cn=e.address.country,a.statData.pn=e.address.province,a.statData.ct=e.address.city),a.statData.lat=e.latitude,a.statData.lng=e.longitude,a.request(a.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(a,n){var t=this,r=$(),u=this._navigationBarTitle;a.ttn=u.page,a.ttpj=u.config,a.ttc=u.report;var l=this._reportingRequestData;if("n"===x()&&(l=e.getStorageSync("__UNI__STAT__DATA")||{}),l[a.lt]||(l[a.lt]=[]),l[a.lt].push(a),"n"===x()&&e.setStorageSync("__UNI__STAT__DATA",l),!(R()<h)||n){var p=this._reportingRequestData;"n"===x()&&(p=e.getStorageSync("__UNI__STAT__DATA")),B();var v=[],m=[],o=[],s=function(e){var a=p[e];a.forEach(function(a){var n=w(a);0===e?v.push(n):3===e?o.push(n):m.push(n)})};for(var c in p)s(c);v.push.apply(v,m.concat(o));var f={usv:i,t:r,requests:JSON.stringify(v)};this._reportingRequestData={},"n"===x()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==a.ut?"n"!==x()||"a"!==this.statData.p?this._sendRequest(f):setTimeout(function(){t._sendRequest(f)},200):this.imageRequest(f)}}},{key:"_sendRequest",value:function(a){var n=this;e.request({url:s,method:"POST",data:a,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(a)},1e3)}})}},{key:"imageRequest",value:function(e){var a=new Image,n=b(U(e)).options;a.src=c+"?"+n}},{key:"sendEvent",value:function(e,a){X(e,a)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof a?JSON.stringify(a):a},1):this._navigationBarTitle.report=a)}}]),a}(),Z=function(a){function n(){var a;return v(this,n),a=t(this,u(n).call(this)),a.instance=null,"function"===typeof e.addInterceptor&&(a.addInterceptorInit(),a.interceptLogin(),a.interceptShare(!0),a.interceptRequestPayment()),a}return l(n,a),o(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),o(n,[{key:"addInterceptorInit",value:function(){var a=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){a._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var a=this;e.addInterceptor("login",{complete:function(){a._login()}})}},{key:"interceptShare",value:function(a){var n=this;a?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var a=this;e.addInterceptor("requestPayment",{success:function(){a._payment("pay_success")},fail:function(){a._payment("pay_fail")}})}},{key:"report",value:function(e,a){this.self=a,B(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,a){if(!a.$scope&&!a.$mp){var n=getCurrentPages();a.$scope=n[n.length-1]}this.self=a,this._query=e}},{key:"show",value:function(e){this.self=e,J(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,J(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var a="";a=e.message?e.stack:JSON.stringify(e);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:a,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(n)}}]),n}(Q),ee=Z.getInstance(),ae=!1,ne={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var a=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),a.call(this,e)}}},onShow:function(){ae=!1,ee.show(this)},onHide:function(){ae=!0,ee.hide(this)},onUnload:function(){ae?ae=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var a=n("66fd");(a.default||a).mixin(ne),e.report=function(e,a){ee.sendEvent(e,a)}}te()}).call(this,n("6e42")["default"])},"99b3":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=/^-?[1-9][0-9]?.?[0-9]*$/,r=/^-?[1-9][0-9]*$/,u=/^1[0-9]{10,10}$/,l=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,p=/^.{6,16}$/,v=/^[a-zA-Z0-9]{6,16}$/,m={isNumber:function(e){return t.test(e)},isInt:function(e){return r.test(e)},isPhone:function(e){return u.test(e)},isEmail:function(e){return l.test(e)},isPwd:function(e){return p.test(e)},isInviteCode:function(e){return v.test(e)},validate:function(e,a){var n={isOk:!0,errmsg:""};if(!a||!a.length)return n;var m=!0,o=!1,i=void 0;try{for(var s,c=a[Symbol.iterator]();!(m=(s=c.next()).done);m=!0){var f=s.value;if(f&&f.name&&f.type)if(e[f.name]){switch(f.type){case"equals":case"eq":e[f.name]!==e[f.eqName]&&(n={isOk:!1,errmsg:f.errmsg});break;case"number":t.test(e[f.name])||(n={isOk:!1,errmsg:f.errmsg});break;case"int":r.test(e[f.name])||(n={isOk:!1,errmsg:f.errmsg});break;case"phone":u.test(e[f.name])||(n={isOk:!1,errmsg:f.errmsg});break;case"email":l.test(e[f.name])||(n={isOk:!1,errmsg:f.errmsg});break;case"pwd":p.test(e[f.name])||(n={isOk:!1,errmsg:f.errmsg});break;case"inviteCode":v.test(e[f.name])||(n={isOk:!1,errmsg:f.errmsg});break;case"range":var d=e[f.name];d&&(t.test(d)?f.min&&d<f.min?n={isOk:!1,errmsg:f.errmsg}:f.max&&d>f.max&&(n={isOk:!1,errmsg:f.errmsg}):n={isOk:!1,errmsg:f.errmsg});break;case"lengthRange":var h=e[f.name]?e[f.name].length:0;f.min&&h<f.min?n={isOk:!1,errmsg:f.errmsg}:f.max&&h>f.max&&(n={isOk:!1,errmsg:f.errmsg});break;case"regex":f.regex&&!f.regex.test(e[f.name])&&(n={isOk:!1,errmsg:f.errmsg});break}if(!n.isOk)return n.errmsg||(n.errmsg="请正确输入所有数据"),n}else if("required"===f.type||f.required)return n={isOk:!1,errmsg:f.errmsg},n.errmsg||(n.errmsg="请正确输入所有数据"),n}}catch(g){o=!0,i=g}finally{try{m||null==c.return||c.return()}finally{if(o)throw i}}return n}};a.default=m},"9ec8":function(e,a,n){"use strict";(function(a,n){(function(a,n){e.exports=n()})(0,function(){var e=void 0,t=["touchstarted","touchmoved","touchended"];function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function u(e){for(var a=arguments.length,n=Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];t.forEach(function(a,t){void 0!==n[t]&&(e[a]=n[t])})}function l(e,a){Object.defineProperties(e,a)}function p(){return e||(e=wx.getSystemInfoSync()),e}"function"===typeof Symbol&&Symbol.iterator;var v=function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")},m=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}(),o=function(){function e(e,a){var n=[],t=!0,r=!1,u=void 0;try{for(var l,p=e[Symbol.iterator]();!(t=(l=p.next()).done);t=!0)if(n.push(l.value),a&&n.length===a)break}catch(v){r=!0,u=v}finally{try{!t&&p["return"]&&p["return"]()}finally{if(r)throw u}}return n}return function(a,n){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i={},s={id:{default:"cropper",get:function(){return i.id},set:function(e){i.id=e}},width:{default:750,get:function(){return i.width},set:function(e){i.width=e}},height:{default:750,get:function(){return i.height},set:function(e){i.height=e}},scale:{default:2.5,get:function(){return i.scale},set:function(e){i.scale=e}},zoom:{default:5,get:function(){return i.zoom},set:function(e){i.zoom=e}},src:{default:"cropper",get:function(){return i.src},set:function(e){i.src=e}},cut:{default:{},get:function(){return i.cut},set:function(e){i.cut=e}},onReady:{default:null,get:function(){return i.ready},set:function(e){i.ready=e}},onBeforeImageLoad:{default:null,get:function(){return i.beforeImageLoad},set:function(e){i.beforeImageLoad=e}},onImageLoad:{default:null,get:function(){return i.imageLoad},set:function(e){i.imageLoad=e}},onBeforeDraw:{default:null,get:function(){return i.beforeDraw},set:function(e){i.beforeDraw=e}}};function c(){var e=this,a=p(),n=a.windowWidth;e.attachPage=function(){var a=getCurrentPages(),n=a[a.length-1];n.wecropper=e},e.createCtx=function(){var a=e.id;a&&(e.ctx=wx.createCanvasContext(a))},e.deviceRadio=n/750,e.deviceRadio=e.deviceRadio.toFixed(2)}function f(){var e=this,a=["ready","beforeImageLoad","beforeDraw","imageLoad"];e.on=function(n,t){return a.indexOf(n)>-1&&"function"===typeof t&&("ready"===n?t(e):e["on"+r(n)]=t),e}}function d(){var e=this,t=e.deviceRadio;console.log(a(JSON.stringify(e)," at static\\weCropper.js:275"));var r=e.width,u=e.height,l=e.cut,p=l.x,v=void 0===p?0:p,m=l.y,o=void 0===m?0:m,i=l.width,s=void 0===i?r:i,c=l.height,f=void 0===c?u:c;e.updateCanvas=function(){return e.croperTarget&&e.ctx.drawImage(e.croperTarget,e.imgLeft,e.imgTop,e.scaleWidth,e.scaleHeight),"function"===typeof e.onBeforeDraw&&e.onBeforeDraw(e.ctx,e),e.setBoundStyle(),e.ctx.draw(),e},e.pushOrign=function(a){return e.src=a,"function"===typeof e.onBeforeImageLoad&&e.onBeforeImageLoad(e.ctx,e),n.getImageInfo({src:a,success:function(n){var t=n.width/n.height;e.croperTarget=n.path||a,t<s/f?(e.rectX=v,e.baseWidth=s,e.baseHeight=s/t,e.rectY=o-Math.abs((f-e.baseHeight)/2)):(e.rectY=o,e.baseWidth=f*t,e.baseHeight=f,e.rectX=v-Math.abs((s-e.baseWidth)/2)),e.imgLeft=e.rectX,e.imgTop=e.rectY,e.scaleWidth=e.baseWidth,e.scaleHeight=e.baseHeight,e.updateCanvas(),"function"===typeof e.onImageLoad&&e.onImageLoad(e.ctx,e)}}),e.update(),e},e.getCropperImage=function(){for(var r=arguments.length,u=Array(r),l=0;l<r;l++)u[l]=arguments[l];var p=e.id,m=toString.call(u[0]);switch(m){case"[object Object]":var i=u[0].quality,c=void 0===i?10:i;console.log(a("quality--"+c," at static\\weCropper.js:353")),n.canvasToTempFilePath({canvasId:p,x:v,y:o,width:s,height:f,destWidth:s*c/(10*t),destHeight:f*c/(10*t),success:function(e){console.log(a(e," at static\\weCropper.js:364")),"function"===typeof u[u.length-1]&&u[u.length-1](e.tempFilePath)}});break;case"[object Function]":n.canvasToTempFilePath({canvasId:p,x:v,y:o,fileType:"jpg",width:s,height:f,destWidth:s,destHeight:f,success:function(e){"function"===typeof u[u.length-1]&&u[u.length-1](e.tempFilePath)}});break}return e}}function h(){var e=this;e.src&&(e.__oneTouchStart=function(a){e.touchX0=a.x,e.touchY0=a.y},e.__oneTouchMove=function(a){var n=void 0,t=void 0;if(e.touchended)return e.updateCanvas();n=a.x-e.touchX0,t=a.y-e.touchY0;var r=e.rectX+n,u=e.rectY+t;e.outsideBound(r,u),e.updateCanvas()},e.__twoTouchStart=function(a,n){var t=void 0,r=void 0,u=void 0;e.touchX1=e.rectX+e.scaleWidth/2,e.touchY1=e.rectY+e.scaleHeight/2,t=n.x-a.x,r=n.y-a.y,u=Math.sqrt(t*t+r*r),e.oldDistance=u},e.__twoTouchMove=function(a,n){var t=void 0,r=void 0,u=void 0,l=e.scale,p=e.zoom;t=n.x-a.x,r=n.y-a.y,u=Math.sqrt(t*t+r*r),e.newScale=e.oldScale+.001*p*(u-e.oldDistance),e.newScale<=1&&(e.newScale=1),e.newScale>=l&&(e.newScale=l),e.scaleWidth=e.newScale*e.baseWidth,e.scaleHeight=e.newScale*e.baseHeight;var v=e.touchX1-e.scaleWidth/2,m=e.touchY1-e.scaleHeight/2;e.outsideBound(v,m),e.updateCanvas()},e.__xtouchEnd=function(){e.oldScale=e.newScale,e.rectX=e.imgLeft,e.rectY=e.imgTop})}var g={touchStart:function(e){var n=this,t=o(e.touches,2),r=t[0],l=t[1];console.log(a(JSON.stringify(l)," at static\\weCropper.js:486")),r.x||(r.x=r.clientX,r.y=r.clientY,l&&(l.x=l.clientX,l.y=l.clientY)),u(n,!0,null,null),n.__oneTouchStart(r),e.touches.length>=2&&n.__twoTouchStart(r,l)},touchMove:function(e){var a=this,n=o(e.touches,2),t=n[0],r=n[1];t.x||(t.x=t.clientX,t.y=t.clientY,r&&(r.x=r.clientX,r.y=r.clientY)),u(a,null,!0),1===e.touches.length&&a.__oneTouchMove(t),e.touches.length>=2&&a.__twoTouchMove(t,r)},touchEnd:function(e){var a=this;u(a,!1,!1,!0),a.__xtouchEnd()}};function y(){var e=this,a=(e.deviceRadio,e.width),n=e.height,t=e.cut,r=t.x,u=void 0===r?0:r,l=t.y,p=void 0===l?0:l,v=t.width,m=void 0===v?a:v,o=t.height,i=void 0===o?n:o;e.outsideBound=function(a,n){e.imgLeft=a>=u?u:e.scaleWidth+a-u<=m?u+m-e.scaleWidth:a,e.imgTop=n>=p?p:e.scaleHeight+n-p<=i?p+i-e.scaleHeight:n},e.setBoundStyle=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.color,l=void 0===r?"#04b00f":r,v=t.mask,o=void 0===v?"rgba(0, 0, 0, 0.3)":v,s=t.lineWidth,c=void 0===s?1:s;e.ctx.beginPath(),e.ctx.setFillStyle(o),e.ctx.fillRect(0,0,u,n),e.ctx.fillRect(u,0,m,p),e.ctx.fillRect(u,p+i,m,n-p-i),e.ctx.fillRect(u+m,0,a-u-m,n),e.ctx.fill(),e.ctx.beginPath(),e.ctx.setStrokeStyle(l),e.ctx.setLineWidth(c),e.ctx.moveTo(u-c,p+10-c),e.ctx.lineTo(u-c,p-c),e.ctx.lineTo(u+10-c,p-c),e.ctx.stroke(),e.ctx.beginPath(),e.ctx.setStrokeStyle(l),e.ctx.setLineWidth(c),e.ctx.moveTo(u-c,p+i-10+c),e.ctx.lineTo(u-c,p+i+c),e.ctx.lineTo(u+10-c,p+i+c),e.ctx.stroke(),e.ctx.beginPath(),e.ctx.setStrokeStyle(l),e.ctx.setLineWidth(c),e.ctx.moveTo(u+m-10+c,p-c),e.ctx.lineTo(u+m+c,p-c),e.ctx.lineTo(u+m+c,p+10-c),e.ctx.stroke(),e.ctx.beginPath(),e.ctx.setStrokeStyle(l),e.ctx.setLineWidth(c),e.ctx.moveTo(u+m+c,p+i-10+c),e.ctx.lineTo(u+m+c,p+i+c),e.ctx.lineTo(u+m-10+c,p+i+c),e.ctx.stroke()}}var _="1.1.4",b=function(){function e(a){v(this,e);var n=this,t={};return l(n,s),Object.keys(s).forEach(function(e){t[e]=s[e].default}),Object.assign(n,t,a),n.prepare(),n.attachPage(),n.createCtx(),n.observer(),n.cutt(),n.methods(),n.init(),n.update(),n}return m(e,[{key:"init",value:function(){var e=this,a=e.src;return e.version=_,"function"===typeof e.onReady&&e.onReady(e.ctx,e),a&&e.pushOrign(a),u(e,!1,!1,!1),e.oldScale=1,e.newScale=1,e}}]),e}();return Object.assign(b.prototype,g),b.prototype.prepare=c,b.prototype.observer=f,b.prototype.methods=d,b.prototype.cutt=y,b.prototype.update=h,b})}).call(this,n("0de9")["default"],n("6e42")["default"])},c8ba:function(e,a){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===typeof window&&(n=window)}e.exports=n},fc8c:function(e,a,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/J-skeleton/J-skeleton';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/J-skeleton/J-skeleton.js';

define('components/J-skeleton/J-skeleton.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/J-skeleton/J-skeleton"], {
  1631: function _(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("5501"),
        u = n("b30b");

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    n("309f");
    var o = n("2877"),
        f = Object(o["a"])(u["default"], a["a"], a["b"], !1, null, "0ce766fc", null);
    e["default"] = f.exports;
  },
  "309f": function f(t, e, n) {
    "use strict";

    var a = n("e99a"),
        u = n.n(a);
    u.a;
  },
  5501: function _(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  b30b: function b30b(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("ddd9"),
        u = n.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    e["default"] = u.a;
  },
  ddd9: function ddd9(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = "100%",
        u = "60%",
        r = {
      props: {
        loading: {
          type: Boolean,
          default: !0
        },
        imgTitle: {
          type: Boolean,
          default: !1
        },
        nameRow: {
          type: Number,
          default: 1
        },
        flexType: {
          type: String,
          default: "flex-start"
        },
        showAvatar: {
          type: Boolean,
          default: !0
        },
        avatarSize: {
          type: String,
          default: "50px"
        },
        avatarShape: {
          type: String,
          default: "round"
        },
        showTitle: {
          type: Boolean,
          default: !1
        },
        titleWidth: {
          type: String,
          default: "40%"
        },
        row: {
          type: Number,
          default: 3
        },
        animate: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {};
      },
      computed: {
        rowList: function rowList() {
          for (var t = [], e = 0; e < this.row; e++) {
            t.push({
              width: e === this.row - 1 && 0 !== e ? u : a
            });
          }

          return t;
        }
      }
    };
    e.default = r;
  },
  e99a: function e99a(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/J-skeleton/J-skeleton-create-component', {
  'components/J-skeleton/J-skeleton-create-component': function componentsJSkeletonJSkeletonCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1631"));
  }
}, [['components/J-skeleton/J-skeleton-create-component']]]);
});
require('components/J-skeleton/J-skeleton.js');
__wxRoute = 'components/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-badge/uni-badge.js';

define('components/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-badge/uni-badge"], {
  "02ed": function ed(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "UniBadge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: [String, Number],
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      data: function data() {
        return {
          width: "display: inline-block;width: ".concat(15 * String(this.text).length + 25, "rpx")
        };
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    e.default = u;
  },
  "4e16": function e16(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("d42c"),
        i = n("b8f2");

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    n("e220");
    var r = n("2877"),
        c = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, "fd11938c", null);
    e["default"] = c.exports;
  },
  "4fb7": function fb7(t, e, n) {},
  b8f2: function b8f2(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("02ed"),
        i = n.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    e["default"] = i.a;
  },
  d42c: function d42c(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  e220: function e220(t, e, n) {
    "use strict";

    var u = n("4fb7"),
        i = n.n(u);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-badge/uni-badge-create-component', {
  'components/uni-badge/uni-badge-create-component': function componentsUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4e16"));
  }
}, [['components/uni-badge/uni-badge-create-component']]]);
});
require('components/uni-badge/uni-badge.js');
__wxRoute = 'components/uni-card/uni-card';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-card/uni-card.js';

define('components/uni-card/uni-card.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-card/uni-card"], {
  "2ac0": function ac0(t, n, e) {},
  "2fdf": function fdf(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("a886"),
        u = e.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "3da6": function da6(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("da4b"),
        u = e("2fdf");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("b8d4");
    var i = e("2877"),
        f = Object(i["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = f.exports;
  },
  a886: function a886(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = {
      name: "UniCard",
      props: {
        title: {
          type: String,
          default: ""
        },
        extra: {
          type: String,
          default: ""
        },
        note: {
          type: Array,
          default: []
        },
        thumbnail: {
          type: String,
          default: ""
        },
        mode: {
          type: String,
          default: "basic"
        },
        isFull: {
          type: Boolean,
          default: !1
        },
        isShadow: {
          type: Boolean,
          default: !1
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = a;
  },
  b8d4: function b8d4(t, n, e) {
    "use strict";

    var a = e("2ac0"),
        u = e.n(a);
    u.a;
  },
  da4b: function da4b(t, n, e) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return a;
    }), e.d(n, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-card/uni-card-create-component', {
  'components/uni-card/uni-card-create-component': function componentsUniCardUniCardCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3da6"));
  }
}, [['components/uni-card/uni-card-create-component']]]);
});
require('components/uni-card/uni-card.js');
__wxRoute = 'components/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icons/uni-icons.js';

define('components/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icons/uni-icons"], {
  1782: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("2c81"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    n["default"] = r.a;
  },
  "2c81": function c81(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = r(e("830f"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var a = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      data: function data() {
        return {
          icons: u.default
        };
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = a;
  },
  "7d34": function d34(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("ee7a"),
        r = e("1782");

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    e("bd7c");
    var c = e("2877"),
        i = Object(c["a"])(r["default"], u["a"], u["b"], !1, null, "29a34abb", null);
    n["default"] = i.exports;
  },
  bd7c: function bd7c(t, n, e) {
    "use strict";

    var u = e("f0e6"),
        r = e.n(u);
    r.a;
  },
  ee7a: function ee7a(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  f0e6: function f0e6(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icons/uni-icons-create-component', {
  'components/uni-icons/uni-icons-create-component': function componentsUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7d34"));
  }
}, [['components/uni-icons/uni-icons-create-component']]]);
});
require('components/uni-icons/uni-icons.js');
__wxRoute = 'components/uni-list-item/uni-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list-item/uni-list-item.js';

define('components/uni-list-item/uni-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list-item/uni-list-item"], {
  "1e55": function e55(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  "57e6": function e6(t, n, e) {
    "use strict";

    var i = e("b384"),
        o = e.n(i);
    o.a;
  },
  8023: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("f373"),
        o = e.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    n["default"] = o.a;
  },
  b384: function b384(t, n, e) {},
  b47b: function b47b(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("1e55"),
        o = e("8023");

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    e("57e6");
    var a = e("2877"),
        r = Object(a["a"])(o["default"], i["a"], i["b"], !1, null, "0283166a", null);
    n["default"] = r.exports;
  },
  f373: function f373(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var i = function i() {
      return Promise.all([e.e("common/vendor"), e.e("components/uni-icons/uni-icons")]).then(e.bind(null, "7d34"));
    },
        o = function o() {
      return e.e("components/uni-badge/uni-badge").then(e.bind(null, "4e16"));
    },
        u = {
      name: "UniListItem",
      components: {
        uniIcons: i,
        uniBadge: o
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        note: {
          type: String,
          default: ""
        },
        disabled: {
          type: [Boolean, String],
          default: !1
        },
        showArrow: {
          type: [Boolean, String],
          default: !0
        },
        showBadge: {
          type: [Boolean, String],
          default: !1
        },
        showSwitch: {
          type: [Boolean, String],
          default: !1
        },
        switchChecked: {
          type: [Boolean, String],
          default: !1
        },
        badgeText: {
          type: String,
          default: ""
        },
        badgeType: {
          type: String,
          default: "success"
        },
        thumb: {
          type: String,
          default: ""
        },
        showExtraIcon: {
          type: [Boolean, String],
          default: !1
        },
        extraIcon: {
          type: Object,
          default: function _default() {
            return {
              type: "contact",
              color: "#000000",
              size: 20
            };
          }
        }
      },
      inject: ["list"],
      data: function data() {
        return {
          isFirstChild: !1
        };
      },
      mounted: function mounted() {
        this.list.firstChildAppend || (this.list.firstChildAppend = !0, this.isFirstChild = !0);
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        },
        onSwitchChange: function onSwitchChange(t) {
          this.$emit("switchChange", t.detail);
        }
      }
    };

    n.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list-item/uni-list-item-create-component', {
  'components/uni-list-item/uni-list-item-create-component': function componentsUniListItemUniListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b47b"));
  }
}, [['components/uni-list-item/uni-list-item-create-component']]]);
});
require('components/uni-list-item/uni-list-item.js');
__wxRoute = 'components/uni-list/uni-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list/uni-list.js';

define('components/uni-list/uni-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list/uni-list"], {
  "0773": function _(t, n, e) {},
  "4ee3": function ee3(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = {
      name: "UniList",
      "mp-weixin": {
        options: {
          multipleSlots: !1
        }
      },
      props: {
        enableBackToTop: {
          type: [Boolean, String],
          default: !1
        },
        scrollY: {
          type: [Boolean, String],
          default: !1
        }
      },
      provide: function provide() {
        return {
          list: this
        };
      },
      created: function created() {
        this.firstChildAppend = !1;
      },
      methods: {
        loadMore: function loadMore(t) {
          this.$emit("scrolltolower");
        }
      }
    };
    n.default = i;
  },
  "5c50": function c50(t, n, e) {
    "use strict";

    var i = e("0773"),
        o = e.n(i);
    o.a;
  },
  "6f20": function f20(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("fe49"),
        o = e("cc13");

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    e("5c50");
    var r = e("2877"),
        c = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "1dc91837", null);
    n["default"] = c.exports;
  },
  cc13: function cc13(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("4ee3"),
        o = e.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    n["default"] = o.a;
  },
  fe49: function fe49(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return o;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list/uni-list-create-component', {
  'components/uni-list/uni-list-create-component': function componentsUniListUniListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6f20"));
  }
}, [['components/uni-list/uni-list-create-component']]]);
});
require('components/uni-list/uni-list.js');
__wxRoute = 'components/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-load-more/uni-load-more.js';

define('components/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-load-more/uni-load-more"], {
  1307: function _(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = t.getSystemInfoSync().platform,
          o = {
        name: "UniLoadMore",
        props: {
          status: {
            type: String,
            default: "more"
          },
          showIcon: {
            type: Boolean,
            default: !0
          },
          iconType: {
            type: String,
            default: "auto"
          },
          color: {
            type: String,
            default: "#777777"
          },
          contentText: {
            type: Object,
            default: function _default() {
              return {
                contentdown: "上拉显示更多",
                contentrefresh: "正在加载...",
                contentnomore: "没有更多数据了"
              };
            }
          }
        },
        data: function data() {
          return {
            platform: e
          };
        }
      };
      n.default = o;
    }).call(this, e("6e42")["default"]);
  },
  "3aa5": function aa5(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "3db7": function db7(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("3aa5"),
        u = e("f434");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("8f25");
    var r = e("2877"),
        f = Object(r["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = f.exports;
  },
  8467: function _(t, n, e) {},
  "8f25": function f25(t, n, e) {
    "use strict";

    var o = e("8467"),
        u = e.n(o);
    u.a;
  },
  f434: function f434(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("1307"),
        u = e.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    n["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-load-more/uni-load-more-create-component', {
  'components/uni-load-more/uni-load-more-create-component': function componentsUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3db7"));
  }
}, [['components/uni-load-more/uni-load-more-create-component']]]);
});
require('components/uni-load-more/uni-load-more.js');
__wxRoute = 'components/uni-search-bar/uni-search-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-search-bar/uni-search-bar.js';

define('components/uni-search-bar/uni-search-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-search-bar/uni-search-bar"], {
  2213: function _(n, t, e) {
    "use strict";

    var a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "a", function () {
      return a;
    }), e.d(t, "b", function () {
      return c;
    });
  },
  "5ce1": function ce1(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("a001"),
        c = e.n(a);

    for (var i in a) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(i);
    }

    t["default"] = c.a;
  },
  "9e57": function e57(n, t, e) {},
  a001: function a001(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var a = function a() {
      return Promise.all([e.e("common/vendor"), e.e("components/uni-icons/uni-icons")]).then(e.bind(null, "7d34"));
    },
        c = {
      name: "UniSearchBar",
      components: {
        uniIcons: a
      },
      props: {
        placeholder: {
          type: String,
          default: "搜索"
        },
        radius: {
          type: [Number, String],
          default: 5
        },
        clearButton: {
          type: String,
          default: "auto"
        }
      },
      data: function data() {
        return {
          show: !1,
          showSync: !1,
          searchVal: ""
        };
      },
      watch: {
        searchVal: function searchVal() {
          this.$emit("input", {
            value: this.searchVal
          });
        }
      },
      methods: {
        searchClick: function searchClick() {
          var n = this;
          this.searchVal = "", this.show = !0, this.$nextTick(function () {
            n.showSync = !0;
          });
        },
        clear: function clear() {
          this.searchVal = "";
        },
        cancel: function cancel() {
          this.$emit("cancel", {
            value: this.searchVal
          }), this.searchVal = "", this.show = !1, this.showSync = !1, plus.key.hideSoftKeybord();
        },
        confirm: function confirm() {
          plus.key.hideSoftKeybord(), this.$emit("confirm", {
            value: this.searchVal
          });
        }
      }
    };

    t.default = c;
  },
  a634: function a634(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("2213"),
        c = e("5ce1");

    for (var i in c) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(i);
    }

    e("f7e7");
    var r = e("2877"),
        u = Object(r["a"])(c["default"], a["a"], a["b"], !1, null, "fdc34392", null);
    t["default"] = u.exports;
  },
  f7e7: function f7e7(n, t, e) {
    "use strict";

    var a = e("9e57"),
        c = e.n(a);
    c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-search-bar/uni-search-bar-create-component', {
  'components/uni-search-bar/uni-search-bar-create-component': function componentsUniSearchBarUniSearchBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a634"));
  }
}, [['components/uni-search-bar/uni-search-bar-create-component']]]);
});
require('components/uni-search-bar/uni-search-bar.js');
__wxRoute = 'components/Winglau14-lotusAddress/Winglau14-lotusAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/Winglau14-lotusAddress/Winglau14-lotusAddress.js';

define('components/Winglau14-lotusAddress/Winglau14-lotusAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/Winglau14-lotusAddress/Winglau14-lotusAddress"], {
  "0899": function _(t, e, i) {
    "use strict";

    i.r(e);
    var s = i("ce1e"),
        n = i("2fef");

    for (var o in n) {
      "default" !== o && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(o);
    }

    i("17a1");
    var a = i("2877"),
        r = Object(a["a"])(n["default"], s["a"], s["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  "17a1": function a1(t, e, i) {
    "use strict";

    var s = i("d107"),
        n = i.n(s);
    n.a;
  },
  "2fef": function fef(t, e, i) {
    "use strict";

    i.r(e);
    var s = i("3962"),
        n = i.n(s);

    for (var o in s) {
      "default" !== o && function (t) {
        i.d(e, t, function () {
          return s[t];
        });
      }(o);
    }

    e["default"] = n.a;
  },
  3962: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var s = i("8401"),
        n = {
      props: ["lotusAddressData"],
      data: function data() {
        return {
          visible: !1,
          province: [],
          city: [],
          town: [],
          provinceName: "",
          cityName: "",
          townName: "",
          type: 0,
          pChoseIndex: -1,
          cChoseIndex: -1,
          tChoseIndex: -1
        };
      },
      methods: {
        cancelPicker: function cancelPicker() {
          var t = this.getTarId(this.provinceName),
              e = this.getTarId(this.cityName),
              i = this.getTarId(this.townName);
          this.visible = !1, this.$emit("choseVal", {
            province: this.provinceName,
            provinceCode: t,
            city: this.cityName,
            cityCode: e,
            town: this.townName,
            townCode: i,
            isChose: 0,
            visible: !1
          });
        },
        chosedVal: function chosedVal() {
          this.type = 1;
          var t = this.getTarId(this.provinceName),
              e = this.getTarId(this.cityName),
              i = this.getTarId(this.townName);
          this.visible = !1;
          var s = 0;
          (this.provinceName && this.cityName || this.provinceName && this.cityName && this.townName) && (s = 1), this.$emit("choseVal", {
            province: this.provinceName,
            provinceCode: t,
            city: this.cityName,
            cityCode: e,
            town: this.townName,
            townCode: i,
            isChose: s,
            visible: !1
          });
        },
        getTarId: function getTarId(t, e) {
          var i = 0;
          return s.lotusAddressJson.map(function (e, s) {
            e.name === t && (i = e.value);
          }), i;
        },
        getCityArr: function getCityArr(t) {
          var e = [];
          return s.lotusAddressJson.map(function (i, s) {
            i.parent === t && e.push(i.name);
          }), e;
        },
        getTownArr: function getTownArr(t) {
          var e = [];
          return s.lotusAddressJson.map(function (i, s) {
            s > 34 && i.parent === t && e.push(i.name);
          }), e;
        },
        initFn: function initFn() {
          var t = this;
          this.province.length || s.lotusAddressJson.map(function (e, i) {
            i <= 34 && t.province.push(e.name);
          });
          var e = this._props.lotusAddressData.provinceName,
              i = this._props.lotusAddressData.cityName,
              n = this._props.lotusAddressData.townName;

          if (e && (this.pChoseIndex = this.getTarIndex(this.province, e)), e && i) {
            var o = this.getTarId(e);
            this.city = this.getCityArr(o), this.cChoseIndex = this.getTarIndex(this.city, i);
          }

          if (e && i && n) {
            var a = this.getTarId(i);
            this.town = this.getTownArr(a), this.tChoseIndex = this.getTarIndex(this.town, n);
          }

          e || i || n || (this.pChoseIndex = -1, this.cChoseIndex = -1, this.tChoseIndex = -1, this.city = [], this.town = []);
        },
        getChosedData: function getChosedData() {
          var t = this.getTarId(this.provinceName, "province");
          this.city = this.getCityArr(t);
          var e = this.getTarId(this.cityName, "city");
          this.town = this.getTownArr(e), this.provinceName && (this.pChoseIndex = this.getTarIndex(this.province, this.provinceName)), this.cityName && (this.cChoseIndex = this.getTarIndex(this.city, this.cityName)), this.townName && (this.tChoseIndex = this.getTarIndex(this.town, this.townName));
        },
        clickPicker: function clickPicker(t, e, i) {
          0 === t && (this.pChoseIndex = e, this.provinceName = i, this.cChoseIndex = -1, this.tChoseIndex = -1, this.cityName = "", this.townName = ""), 1 === t && (this.cChoseIndex = e, this.cityName = i, this.tChoseIndex = -1, this.townName = ""), 2 === t && (this.tChoseIndex = e, this.townName = i), this.getChosedData();
        },
        getTarIndex: function getTarIndex(t, e) {
          var i = 0;
          return t.map(function (t, s) {
            t === e && (i = s);
          }), i;
        }
      },
      computed: {
        checkStatus: function checkStatus() {
          var t = null,
              e = this;
          return e.visible || (e.visible = e._props.lotusAddressData.visible, e.provinceName = e._props.lotusAddressData.provinceName, e.cityName = e._props.lotusAddressData.cityName, e.townName = e._props.lotusAddressData.townName, e.initFn(), t = e.visible), t;
        }
      }
    };
    e.default = n;
  },
  ce1e: function ce1e(t, e, i) {
    "use strict";

    var s = function s() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        n = [];

    i.d(e, "a", function () {
      return s;
    }), i.d(e, "b", function () {
      return n;
    });
  },
  d107: function d107(t, e, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/Winglau14-lotusAddress/Winglau14-lotusAddress-create-component', {
  'components/Winglau14-lotusAddress/Winglau14-lotusAddress-create-component': function componentsWinglau14LotusAddressWinglau14LotusAddressCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0899"));
  }
}, [['components/Winglau14-lotusAddress/Winglau14-lotusAddress-create-component']]]);
});
require('components/Winglau14-lotusAddress/Winglau14-lotusAddress.js');
__wxRoute = 'components/xyz-tab/xyz-tab';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/xyz-tab/xyz-tab.js';

define('components/xyz-tab/xyz-tab.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/xyz-tab/xyz-tab"], {
  "2af0": function af0(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      props: {
        tabList: {
          type: Array,
          default: []
        },
        tabActiveIdx: {
          type: Number,
          default: 0
        }
      },
      data: function data() {
        return {
          tabIdx: 0,
          scrollLeft: 0
        };
      },
      computed: {
        tabLen: function tabLen() {
          return !(this.tabList.length > 5);
        }
      },
      watch: {
        tabActiveIdx: function tabActiveIdx(t, e) {
          this.tabSelect(t);
        }
      },
      methods: {
        tabSelect: function tabSelect(t) {
          this.tabIdx = t, this.scrollLeft = 30 * t, this.$emit("tabSelect", t);
        }
      }
    };
    e.default = a;
  },
  "3c70": function c70(t, e, n) {},
  "87c0": function c0(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("2af0"),
        u = n.n(a);

    for (var c in a) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(c);
    }

    e["default"] = u.a;
  },
  "8ede": function ede(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("b5d7"),
        u = n("87c0");

    for (var c in u) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(c);
    }

    n("ea0e");
    var r = n("2877"),
        i = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, "049ac425", null);
    e["default"] = i.exports;
  },
  b5d7: function b5d7(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  ea0e: function ea0e(t, e, n) {
    "use strict";

    var a = n("3c70"),
        u = n.n(a);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/xyz-tab/xyz-tab-create-component', {
  'components/xyz-tab/xyz-tab-create-component': function componentsXyzTabXyzTabCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8ede"));
  }
}, [['components/xyz-tab/xyz-tab-create-component']]]);
});
require('components/xyz-tab/xyz-tab.js');
__wxRoute = 'components/zhouWei-navBar/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/zhouWei-navBar/index.js';

define('components/zhouWei-navBar/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/zhouWei-navBar/index"], {
  "17fd": function fd(t, n, e) {},
  "24f6": function f6(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  "6f60": function f60(t, n, e) {
    "use strict";

    var o = e("17fd"),
        r = e.n(o);
    r.a;
  },
  "729f": function f(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = ["pages/navList"],
          o = "/pages/index/index",
          r = ["#FFF", "#FFFFFF", "white", "rgb(255,255,255)", "rgba(255,255,255,1)"],
          i = {
        props: {
          backState: {
            default: function _default() {
              return 1e3;
            }
          },
          home: {
            type: Boolean,
            default: function _default() {
              return !1;
            }
          },
          bgColor: {
            type: String,
            default: function _default() {
              return "#FFF";
            }
          },
          fontColor: {
            type: String,
            default: function _default() {
              return "#000";
            }
          },
          titleCenter: {
            type: Boolean,
            default: function _default() {
              return !0;
            }
          },
          title: {
            type: String,
            default: function _default() {
              return "";
            }
          },
          type: {
            type: String,
            default: function _default() {
              return "fixed";
            }
          },
          transparentFixedFontColor: {
            type: String,
            default: function _default() {
              return "#000";
            }
          }
        },
        data: function data() {
          return {
            firstPage: !1,
            transparentValue: 1,
            navTitle: "",
            navFontColor: "#000",
            navBgColor: "#FFF",
            navTransparentFixedFontColor: "#000",
            themeBgColor: !1,
            statusBarHeight: 0
          };
        },
        computed: {
          back: function back() {
            return 1e3 == this.backState || 3e3 == this.backState;
          },
          navFixed: function navFixed() {
            return "transparentFixed" == this.type || "fixed" == this.type;
          },
          navLine: function navLine() {
            return "transparent" !== this.type && r.includes(this.navBgColor);
          },
          isWhite: function isWhite() {
            return r.includes(this.navFontColor);
          },
          isTwoBtn: function isTwoBtn() {
            return (1e3 == this.backState || 3e3 == this.backState) && this.home && !this.firstPage;
          }
        },
        watch: {
          title: function title(t) {
            this.navTitle = t;
          },
          fontColor: function fontColor(t) {
            this.navFontColor = t, this.settingColor();
          },
          bgColor: function bgColor(t) {
            "themeBgColor" == t ? (this.themeBgColor = !0, this.navBgColor = "") : this.navBgColor = t;
          },
          transparentFixedFontColor: function transparentFixedFontColor(t) {
            this.navTransparentFixedFontColor = t;
          }
        },
        created: function created() {
          this.navTitle = this.title, this.navFontColor = this.fontColor, "themeBgColor" == this.bgColor ? (this.themeBgColor = !0, this.navBgColor = "") : this.navBgColor = this.bgColor, this.navTransparentFixedFontColor = this.transparentFixedFontColor, this.statusBarHeight = t.getSystemInfoSync()["statusBarHeight"];
          var n = this;
          "transparentFixed" == this.type && (this.transparentValue = 0), this.settingColor();
          var o = getCurrentPages(),
              r = o.length;
          1 != r || e.includes(o[0].route) || (this.firstPage = !0), "transparentFixed" == this.type && (o[r - 1].onPageScroll = function (t) {
            n.$emit("scroll", t), t.scrollTop > 180 ? n.transparentValue = 1 : n.transparentValue = t.scrollTop / 180;
          });
        },
        methods: {
          onBackPage: function onBackPage() {
            3e3 == this.backState ? this.$emit("backClick") : t.navigateBack();
          },
          onBackHome: function onBackHome() {
            t.switchTab({
              url: o
            });
          },
          settingColor: function settingColor() {
            r.includes(this.navFontColor) ? t.setNavigationBarColor({
              frontColor: "#ffffff",
              backgroundColor: this.navBgColor
            }) : t.setNavigationBarColor({
              frontColor: "#000000",
              backgroundColor: this.navBgColor
            });
          }
        }
      };
      n.default = i;
    }).call(this, e("6e42")["default"]);
  },
  "73b8": function b8(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("729f"),
        r = e.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    n["default"] = r.a;
  },
  "8f88": function f88(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("24f6"),
        r = e("73b8");

    for (var i in r) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(i);
    }

    e("6f60");
    var a = e("2877"),
        s = Object(a["a"])(r["default"], o["a"], o["b"], !1, null, "54b74894", null);
    n["default"] = s.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/zhouWei-navBar/index-create-component', {
  'components/zhouWei-navBar/index-create-component': function componentsZhouWeiNavBarIndexCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8f88"));
  }
}, [['components/zhouWei-navBar/index-create-component']]]);
});
require('components/zhouWei-navBar/index.js');
__wxRoute = 'pages/activity/components/an-uploadImg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/activity/components/an-uploadImg.js';

define('pages/activity/components/an-uploadImg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/activity/components/an-uploadImg"], {
  1707: function _(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  2574: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("4767"),
        a = e.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    n["default"] = a.a;
  },
  4767: function _(t, n, e) {
    "use strict";

    (function (t, i) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var a = function a() {
        return Promise.all([e.e("common/vendor"), e.e("components/uni-icons/uni-icons")]).then(e.bind(null, "7d34"));
      },
          o = {
        name: "AnUploadImg",
        components: {
          uniIcons: a
        },
        data: function data() {
          return {
            imgList: [],
            imgBase64List: []
          };
        },
        methods: {
          chooseImage: function chooseImage() {
            var n = this;
            t.chooseImage({
              count: 9,
              success: function success(e) {
                for (var a = 0; a < e.tempFilePaths.length; a++) {
                  t.uploadFile({
                    url: "/common/multiUpload",
                    filePath: e.tempFilePaths[a],
                    name: "file",
                    success: function success(e) {
                      console.log(i(JSON.parse(e.data), " at pages\\activity\\components\\an-uploadImg.vue:53"));
                      var a = JSON.parse(e.data).data;
                      console.log(i(a, " at pages\\activity\\components\\an-uploadImg.vue:55")), t.showToast({
                        title: "上传成功",
                        icon: "success",
                        duration: 1e3
                      }), n.imgList.push(a);
                    }
                  });
                }
              }
            });
          },
          perviewImg: function perviewImg(n) {
            var e = [];
            -1 != n ? e[0] = this.imgList[n] : e = this.imgList, t.previewImage({
              urls: e
            });
          },
          handleRemove: function handleRemove(t) {
            for (var n = [], e = [], i = 0; i < this.imgList.length; i++) {
              i != t && (n.push(this.imgList[i]), e.push(this.imgBase64List[i]));
            }

            this.imgList = n, this.imgBase64List = e;
          }
        }
      };

      n.default = o;
    }).call(this, e("6e42")["default"], e("0de9")["default"]);
  },
  "641d": function d(t, n, e) {},
  6654: function _(t, n, e) {
    "use strict";

    var i = e("641d"),
        a = e.n(i);
    a.a;
  },
  c8b4: function c8b4(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("1707"),
        a = e("2574");

    for (var o in a) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(o);
    }

    e("6654");
    var s = e("2877"),
        u = Object(s["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = u.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/activity/components/an-uploadImg-create-component', {
  'pages/activity/components/an-uploadImg-create-component': function pagesActivityComponentsAnUploadImgCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c8b4"));
  }
}, [['pages/activity/components/an-uploadImg-create-component']]]);
});
require('pages/activity/components/an-uploadImg.js');
__wxRoute = 'pages/components/you-scroll';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/you-scroll.js';

define('pages/components/you-scroll.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/components/you-scroll"], {
  "01a9": function a9(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("d38b"),
        l = n.n(o);

    for (var s in o) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(s);
    }

    e["default"] = l.a;
  },
  "16be": function be(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("ee13"),
        l = n("01a9");

    for (var s in l) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return l[t];
        });
      }(s);
    }

    n("9a12");
    var i = n("2877"),
        a = Object(i["a"])(l["default"], o["a"], o["b"], !1, null, "2599acec", null);
    e["default"] = a.exports;
  },
  "9a12": function a12(t, e, n) {
    "use strict";

    var o = n("d070"),
        l = n.n(o);
    l.a;
  },
  d070: function d070(t, e, n) {},
  d38b: function d38b(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        data: function data() {
          return {
            scrollToTop: 0,
            scrollTop: 0,
            oldTop: 0,
            sPageY: 0,
            mPageY: 0,
            ePageY: 0,
            translateY: 0,
            pullDownStatus: 1,
            isDown: !1
          };
        },
        props: {
          pullDownDistance: {
            type: Number,
            default: 50
          },
          reachBottomDistance: {
            type: Number,
            default: 30
          },
          downPullToRefresh: {
            type: String,
            default: "下拉刷新"
          },
          downReleaseToRefresh: {
            type: String,
            default: "松开刷新"
          },
          downRefreshing: {
            type: String,
            default: "刷新中…"
          }
        },
        methods: {
          startFn: function startFn(t) {
            this.isDown = !0, this.sPageY = t.changedTouches[0].pageY, this.pointY = this.translateY;
          },
          moveFn: function moveFn(e) {
            var n = this,
                o = t.createSelectorQuery().in(this).select(".you-scroll-inner");
            o.fields({
              size: !0,
              scrollOffset: !0
            }, function (t) {
              if (n.scrollTop = t.scrollTop, n.mPageY = e.changedTouches[0].pageY, n.scrollTop <= 0) {
                var o = (n.mPageY - n.sPageY) / 2 + n.pointY;
                n.translateY = o < 0 ? 0 : o, 3 != n.pullDownStatus && (n.translateY < n.pullDownDistance ? n.pullDownStatus = 1 : n.translateY >= n.pullDownDistance && (n.pullDownStatus = 2));
              }
            }).exec();
          },
          endFn: function endFn(t) {
            var e = this;
            this.isDown = !1, this.ePageY = t.changedTouches[0].pageY, setTimeout(function () {
              e.translateY = e.translateY >= e.pullDownDistance ? e.pullDownDistance : 0, 2 == e.pullDownStatus && (e.pullDownStatus = 3, e.$emit("onPullDown", e.endPullDown));
            }, 100);
          },
          endPullDown: function endPullDown(t) {
            var e = this;
            this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function () {
              e.translateY = 0, e.pullDownStatus = 1;
            }, t || 0);
          },
          prevent: function prevent(t) {
            this.translateY > 0 && t.preventDefault();
          },
          scroll: function scroll(t) {
            var e = this;
            this.$emit("onScroll", t), this.oldTop = t.detail.scrollTop, this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function () {
              e.scrolltolower(t);
            }, 20);
          },
          scrolltolower: function scrolltolower(e) {
            var n = this,
                o = t.createSelectorQuery().in(this).select(".you-scroll-inner");
            o.fields({
              size: !0,
              scrollOffset: !0
            }, function (t) {
              t.scrollTop >= e.detail.scrollHeight - t.height - n.reachBottomDistance && n.$emit("onLoadMore", e);
            }).exec();
          },
          isWeixinCient: function isWeixinCient() {
            var t = navigator.userAgent.toLowerCase();
            return "micromessenger" == t.match(/MicroMessenger/i);
          },
          goTop: function goTop(t) {
            this.scrollToTop = this.oldTop, this.$nextTick(function () {
              this.scrollToTop = t || 0;
            });
          }
        },
        mounted: function mounted() {},
        destroyed: function destroyed() {}
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  ee13: function ee13(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        l = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return l;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/components/you-scroll-create-component', {
  'pages/components/you-scroll-create-component': function pagesComponentsYouScrollCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("16be"));
  }
}, [['pages/components/you-scroll-create-component']]]);
});
require('pages/components/you-scroll.js');
__wxRoute = 'pages/index/components/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/components/list.js';

define('pages/index/components/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/components/list"], {
  "14a8": function a8(n, t, e) {},
  6444: function _(n, t, e) {
    "use strict";

    e.r(t);
    var r = e("ed02"),
        i = e.n(r);

    for (var a in r) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    t["default"] = i.a;
  },
  d1bb: function d1bb(n, t, e) {
    "use strict";

    e.r(t);
    var r = e("db26"),
        i = e("6444");

    for (var a in i) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(a);
    }

    e("ff9f");
    var o = e("2877"),
        u = Object(o["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = u.exports;
  },
  db26: function db26(n, t, e) {
    "use strict";

    var r = function r() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        i = [];

    e.d(t, "a", function () {
      return r;
    }), e.d(t, "b", function () {
      return i;
    });
  },
  ed02: function ed02(n, t, e) {
    "use strict";

    (function (n) {
      function r(n) {
        return o(n) || a(n) || i();
      }

      function i() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      function a(n) {
        if (Symbol.iterator in Object(n) || "[object Arguments]" === Object.prototype.toString.call(n)) return Array.from(n);
      }

      function o(n) {
        if (Array.isArray(n)) {
          for (var t = 0, e = new Array(n.length); t < n.length; t++) {
            e[t] = n[t];
          }

          return e;
        }
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var u = function u() {
        return Promise.all([e.e("common/vendor"), e.e("components/uni-icons/uni-icons")]).then(e.bind(null, "7d34"));
      },
          c = {
        components: {
          uniIcons: u
        },
        props: {
          dynamicList: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {
            imageList: []
          };
        },
        methods: {
          pictureUrl: function pictureUrl(n) {
            return JSON.parse(n);
          },
          handleMoveDynamic: function handleMoveDynamic(t) {
            var e = this;
            n.showModal({
              title: "提示",
              content: "确定删除这条动态？",
              success: function success(n) {
                if (n.confirm) {
                  var r = t.id;
                  e.$emit("removeDynamic", r);
                } else n.cancel;
              }
            });
          },
          previewImage: function previewImage(t) {
            var e = t.target.dataset.src,
                i = [];
            i = r(this.dynamicList.map(function (n) {
              return JSON.parse(n.pictureUrl);
            })), this.imageList = i.flat(), n.previewImage({
              current: e,
              urls: this.imageList
            });
          }
        }
      };

      t.default = c;
    }).call(this, e("6e42")["default"]);
  },
  ff9f: function ff9f(n, t, e) {
    "use strict";

    var r = e("14a8"),
        i = e.n(r);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/index/components/list-create-component', {
  'pages/index/components/list-create-component': function pagesIndexComponentsListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d1bb"));
  }
}, [['pages/index/components/list-create-component']]]);
});
require('pages/index/components/list.js');
__wxRoute = 'pages/me/photo/components/an-uploadImg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/photo/components/an-uploadImg.js';

define('pages/me/photo/components/an-uploadImg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/me/photo/components/an-uploadImg"], {
  "09fc": function fc(t, n, e) {
    "use strict";

    var o = e("a418"),
        i = e.n(o);
    i.a;
  },
  "442f": function f(t, n, e) {
    "use strict";

    (function (t, o) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var i = function i() {
        return Promise.all([e.e("common/vendor"), e.e("components/uni-icons/uni-icons")]).then(e.bind(null, "7d34"));
      },
          a = {
        name: "AnUploadImg",
        components: {
          uniIcons: i
        },
        data: function data() {
          return {
            imgList: [],
            imgBase64List: []
          };
        },
        methods: {
          chooseImage: function chooseImage() {
            var n = this;
            t.chooseImage({
              count: 9,
              success: function success(e) {
                for (var i = 0; i < e.tempFilePaths.length; i++) {
                  t.uploadFile({
                    url: "/common/multiUpload",
                    filePath: e.tempFilePaths[i],
                    name: "file",
                    success: function success(e) {
                      console.log(o(JSON.parse(e.data), " at pages\\me\\photo\\components\\an-uploadImg.vue:53"));
                      var i = JSON.parse(e.data).data;
                      console.log(o(i, " at pages\\me\\photo\\components\\an-uploadImg.vue:55")), t.showToast({
                        title: "上传成功",
                        icon: "success",
                        duration: 1e3
                      }), n.imgList.push(i);
                    }
                  });
                }
              }
            });
          },
          perviewImg: function perviewImg(n) {
            var e = [];
            -1 != n ? e[0] = this.imgList[n] : e = this.imgList, t.previewImage({
              urls: e
            });
          },
          handleRemove: function handleRemove(t) {
            for (var n = [], e = [], o = 0; o < this.imgList.length; o++) {
              o != t && (n.push(this.imgList[o]), e.push(this.imgBase64List[o]));
            }

            this.imgList = n, this.imgBase64List = e;
          }
        }
      };

      n.default = a;
    }).call(this, e("6e42")["default"], e("0de9")["default"]);
  },
  "5df6": function df6(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("442f"),
        i = e.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    n["default"] = i.a;
  },
  9624: function _(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  a418: function a418(t, n, e) {},
  c046: function c046(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("9624"),
        i = e("5df6");

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    e("09fc");
    var s = e("2877"),
        u = Object(s["a"])(i["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = u.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/me/photo/components/an-uploadImg-create-component', {
  'pages/me/photo/components/an-uploadImg-create-component': function pagesMePhotoComponentsAnUploadImgCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c046"));
  }
}, [['pages/me/photo/components/an-uploadImg-create-component']]]);
});
require('pages/me/photo/components/an-uploadImg.js');
__wxRoute = 'pages/me/photo/components/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/photo/components/list.js';

define('pages/me/photo/components/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/me/photo/components/list"], {
  "0e0e": function e0e(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("b518"),
        i = e("ca4f");

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    e("83c8");
    var o = e("2877"),
        c = Object(o["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "388c": function c(t, n, e) {
    "use strict";

    (function (t) {
      function r(t) {
        return o(t) || a(t) || i();
      }

      function i() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      function a(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }

      function o(t) {
        if (Array.isArray(t)) {
          for (var n = 0, e = new Array(t.length); n < t.length; n++) {
            e[n] = t[n];
          }

          return e;
        }
      }

      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var c = function c() {
        return Promise.all([e.e("common/vendor"), e.e("components/uni-icons/uni-icons")]).then(e.bind(null, "7d34"));
      },
          u = {
        components: {
          uniIcons: c
        },
        props: {
          dynamicList: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {
            imageList: []
          };
        },
        methods: {
          pictureUrl: function pictureUrl(t) {
            return JSON.parse(t);
          },
          handleMoveDynamic: function handleMoveDynamic(n) {
            var e = this;
            t.showModal({
              title: "提示",
              content: "确定删除这条动态？",
              success: function success(t) {
                if (t.confirm) {
                  var r = n.id;
                  e.$emit("removeDynamic", r);
                } else t.cancel;
              }
            });
          },
          previewImage: function previewImage(n) {
            var e = n.target.dataset.src,
                i = [];
            i = r(this.dynamicList.map(function (t) {
              return JSON.parse(t.pictureUrl);
            })), this.imageList = i.flat(), t.previewImage({
              current: e,
              urls: this.imageList
            });
          }
        }
      };

      n.default = u;
    }).call(this, e("6e42")["default"]);
  },
  "83c8": function c8(t, n, e) {
    "use strict";

    var r = e("ddd5"),
        i = e.n(r);
    i.a;
  },
  b518: function b518(t, n, e) {
    "use strict";

    var r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  ca4f: function ca4f(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("388c"),
        i = e.n(r);

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    n["default"] = i.a;
  },
  ddd5: function ddd5(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/me/photo/components/list-create-component', {
  'pages/me/photo/components/list-create-component': function pagesMePhotoComponentsListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0e0e"));
  }
}, [['pages/me/photo/components/list-create-component']]]);
});
require('pages/me/photo/components/list.js');
__wxRoute = 'pages/me/track/components/an-uploadImg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/track/components/an-uploadImg.js';

define('pages/me/track/components/an-uploadImg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/me/track/components/an-uploadImg"], {
  "1d78": function d78(t, n, e) {},
  "2e0f": function e0f(t, n, e) {
    "use strict";

    var i = e("1d78"),
        s = e.n(i);
    s.a;
  },
  "3d77": function d77(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("fa48"),
        s = e("fc1b");

    for (var a in s) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return s[t];
        });
      }(a);
    }

    e("2e0f");
    var o = e("2877"),
        u = Object(o["a"])(s["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = u.exports;
  },
  5545: function _(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var i = function i() {
        return Promise.all([e.e("common/vendor"), e.e("components/uni-icons/uni-icons")]).then(e.bind(null, "7d34"));
      },
          s = {
        name: "AnUploadImg",
        components: {
          uniIcons: i
        },
        data: function data() {
          return {
            imgList: [],
            imgBase64List: []
          };
        },
        methods: {
          chooseImage: function chooseImage() {
            var n = this;
            t.chooseImage({
              count: 9,
              success: function success(e) {
                for (var i = 0; i < e.tempFilePaths.length; i++) {
                  t.uploadFile({
                    url: "/common/multiUpload",
                    filePath: e.tempFilePaths[i],
                    name: "file",
                    success: function success(e) {
                      var i = JSON.parse(e.data).data;
                      t.showToast({
                        title: "上传成功",
                        icon: "success",
                        duration: 1e3
                      }), n.imgList.push(i);
                    }
                  });
                }
              }
            });
          },
          perviewImg: function perviewImg(n) {
            var e = [];
            -1 != n ? e[0] = this.imgList[n] : e = this.imgList, t.previewImage({
              urls: e
            });
          },
          handleRemove: function handleRemove(t) {
            for (var n = [], e = [], i = 0; i < this.imgList.length; i++) {
              i != t && (n.push(this.imgList[i]), e.push(this.imgBase64List[i]));
            }

            this.imgList = n, this.imgBase64List = e;
          }
        }
      };

      n.default = s;
    }).call(this, e("6e42")["default"]);
  },
  fa48: function fa48(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        s = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return s;
    });
  },
  fc1b: function fc1b(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("5545"),
        s = e.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    n["default"] = s.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/me/track/components/an-uploadImg-create-component', {
  'pages/me/track/components/an-uploadImg-create-component': function pagesMeTrackComponentsAnUploadImgCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3d77"));
  }
}, [['pages/me/track/components/an-uploadImg-create-component']]]);
});
require('pages/me/track/components/an-uploadImg.js');
__wxRoute = 'pages/me/track/components/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/track/components/list.js';

define('pages/me/track/components/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/me/track/components/list"], {
  "01ea": function ea(t, n, e) {
    "use strict";

    var r = e("2122"),
        i = e.n(r);
    i.a;
  },
  2122: function _(t, n, e) {},
  2758: function _(t, n, e) {
    "use strict";

    var r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  "5b5d": function b5d(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("ff98"),
        i = e.n(r);

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    n["default"] = i.a;
  },
  dd2e: function dd2e(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("2758"),
        i = e("5b5d");

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    e("01ea");
    var o = e("2877"),
        u = Object(o["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
    n["default"] = u.exports;
  },
  ff98: function ff98(t, n, e) {
    "use strict";

    (function (t) {
      function r(t) {
        return o(t) || a(t) || i();
      }

      function i() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      function a(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }

      function o(t) {
        if (Array.isArray(t)) {
          for (var n = 0, e = new Array(t.length); n < t.length; n++) {
            e[n] = t[n];
          }

          return e;
        }
      }

      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var u = function u() {
        return Promise.all([e.e("common/vendor"), e.e("components/uni-icons/uni-icons")]).then(e.bind(null, "7d34"));
      },
          c = {
        components: {
          uniIcons: u
        },
        props: {
          dynamicList: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {
            imageList: []
          };
        },
        methods: {
          pictureUrl: function pictureUrl(t) {
            return JSON.parse(t);
          },
          handleMoveDynamic: function handleMoveDynamic(n) {
            var e = this;
            t.showModal({
              title: "提示",
              content: "确定删除这条动态？",
              success: function success(t) {
                if (t.confirm) {
                  var r = n.id;
                  e.$emit("removeDynamic", r);
                } else t.cancel;
              }
            });
          },
          previewImage: function previewImage(n) {
            var e = n.target.dataset.src,
                i = [];
            i = r(this.dynamicList.map(function (t) {
              return JSON.parse(t.pictureUrl);
            })), this.imageList = i.flat(), t.previewImage({
              current: e,
              urls: this.imageList
            });
          }
        }
      };

      n.default = c;
    }).call(this, e("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/me/track/components/list-create-component', {
  'pages/me/track/components/list-create-component': function pagesMeTrackComponentsListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("dd2e"));
  }
}, [['pages/me/track/components/list-create-component']]]);
});
require('pages/me/track/components/list.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{2394:function(n,t,e){"use strict";(function(n){e("fc8c"),e("921b");o(e("66fd"));var t=o(e("d352"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},6903:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},"6b39":function(n,t,e){},a513:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(e("222a"));function o(n){return n&&n.__esModule?n:{default:n}}function a(n){return u(n)||i(n)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function u(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}var c=function(){return e.e("components/uni-search-bar/uni-search-bar").then(e.bind(null,"a634"))},s=function(){return e.e("components/uni-card/uni-card").then(e.bind(null,"3da6"))},l=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"7d34"))},d=function(){return e.e("components/J-skeleton/J-skeleton").then(e.bind(null,"1631"))},f=function(){return e.e("pages/components/you-scroll").then(e.bind(null,"16be"))},h=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"3db7"))},p={components:{uniSearchBar:c,uniCard:s,uniIcons:l,Skeleton:d,youScroll:f,uniLoadMore:h},data:function(){return{loading:!0,loadMore:"more",skeleton1:{avatarSize:"52px",row:3,showTitle:!0},skeleton2:{avatarSize:"52px",row:3,showTitle:!0},searchData:{nickName:"",current:0,pages:1,size:10,total:8},dataInfo:[]}},onLoad:function(){n.startPullDownRefresh()},onPullDownRefresh:function(){this.searchData.current=0,this.dataInfo=[],this.getVipList(),this.loading=!0},onReachBottom:function(){this.loadMore="loading",this.getVipList()},methods:{getVipList:function(){var t=this;this.searchData.current=this.searchData.current+1,n.request({url:"/common/member/queryPage",method:"get",data:this.searchData,success:function(e){t.loading=!1;var o=e.data.data,r=o.current,i=o.pages,u=o.size,c=o.total,s=o.records;t.searchData={current:r,pages:i,size:u,total:c},s.length<=0?(t.loadMore="noMore",--t.searchData.current):(t.loadMore="more",t.dataInfo=[].concat(a(t.dataInfo),a(s))),n.stopPullDownRefresh()}})},input:function(n){this.searchData.nickName=n.value,this.searchData.current=0,this.dataInfo=[],this.getVipList()},cancel:function(n){},handelGetUserInfo:function(t){var e=n.getStorageSync("token");e?n.navigateTo({url:"/pages/index/userInfo?id="+t.id,animationType:"pop-in",animationDuration:200}):n.showModal({title:"提示",content:"您还未登录，前往登录",showCancel:!1,success:function(){n.navigateTo({url:"/pages/login/index",animationType:"pop-in",animationDuration:200})}})},handleBtnGroupVip:function(){},handleBtnGroupRedMather:function(){n.showToast({icon:"none",title:"此功能暂未开通,敬请期待"})},handleBtnGroupActive:function(){n.navigateTo({url:"/pages/index/vipTrack",animationType:"pop-in",animationDuration:200})}}};t.default=p}).call(this,e("6e42")["default"])},d352:function(n,t,e){"use strict";e.r(t);var o=e("6903"),a=e("ed05");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("f198");var i=e("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},ed05:function(n,t,e){"use strict";e.r(t);var o=e("a513"),a=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t["default"]=a.a},f198:function(n,t,e){"use strict";var o=e("6b39"),a=e.n(o);a.a}},[["2394","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/index/userInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/userInfo.js';

define('pages/index/userInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/userInfo"],{"0ee0":function(n,e,t){"use strict";t.r(e);var a=t("51ec"),r=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);e["default"]=r.a},"50f4":function(n,e,t){"use strict";t.r(e);var a=t("e408"),r=t("0ee0");for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);t("e469");var o=t("2877"),u=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"51ec":function(n,e,t){"use strict";(function(n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t("222a"));function i(n){return n&&n.__esModule?n:{default:n}}var o=function(){return t.e("components/uni-list/uni-list").then(t.bind(null,"6f20"))},u=function(){return t.e("components/uni-list-item/uni-list-item").then(t.bind(null,"b47b"))},s=function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-icons/uni-icons")]).then(t.bind(null,"7d34"))},c={components:{uniList:o,uniListItem:u,uniIcons:s},data:function(){return{userInfo:{userAvatar:""}}},onLoad:function(e){var t=this;console.log(n(e," at pages\\index\\userInfo.vue:291")),r.default.baseRequest({url:"/member/queryById",data:e,method:"get",success:function(e){try{t.userInfo=e.data.data,console.log(n(t.userInfo," at pages\\index\\userInfo.vue:300"))}catch(a){}}})},computed:{isMarry:function(){return 1==this.userInfo.partnerIsMarry?"未婚":2==this.userInfo.partnerIsMarry?"离异":3==this.userInfo.partnerIsMarry?"丧偶":"未填写"},userAvatar:function(){return this.userInfo.userAvatar?this.userInfo.userAvatar:"/static/icon/defult_header.jpg"},nativePlaceAdress:function(){if(this.userInfo.nativePlace){var n=JSON.parse(this.userInfo.nativePlace),e=n.province,t=n.city,a=n.town;return"".concat(e).concat(t).concat(a)}return"-"},currentAddress:function(){if(this.userInfo.currentAddress){var n=JSON.parse(this.userInfo.nativePlace),e=n.province,t=n.city,a=n.town;return"".concat(e).concat(t).concat(a)}return"-"},address:function(){return this.userInfo.currentAddress?JSON.parse(this.userInfo.currentAddress).city+"户口":"-"},partnerNativePlace:function(){if(this.userInfo.partnerNativePlace){var n=JSON.parse(this.userInfo.partnerNativePlace),e=n.province,t=n.city,a=n.town;return"".concat(e).concat(t).concat(a)}return"-"}},methods:{handleGoTrack:function(){a.navigateTo({url:"/pages/me/track/index",animationType:"pop-in",animationDuration:200})},handleEditUserInfo:function(){a.navigateTo({url:"/pages/me/editUserInfo",animationType:"pop-in",animationDuration:200})},handleEditUserHeader:function(){a.navigateTo({url:"/pages/me/editUserHeader",animationType:"pop-in",animationDuration:200})},handleEditUserContact:function(){a.navigateTo({url:"/pages/me/editUserContact",animationType:"pop-in",animationDuration:200})},handleEditUserInfomation:function(){a.navigateTo({url:"/pages/me/editUserInfomation",animationType:"pop-in",animationDuration:200})},handleEditUserAssetStatus:function(){a.navigateTo({url:"/pages/me/editUserAssetStatus",animationType:"pop-in",animationDuration:200})},handleEditUserDescrable:function(){a.navigateTo({url:"/pages/me/editUserDescrable",animationType:"pop-in",animationDuration:200})},previewImage:function(n){var e=n.target.dataset.src;a.previewImage({current:e,urls:[e]})}}};e.default=c}).call(this,t("0de9")["default"],t("6e42")["default"])},"51ef":function(n,e,t){},"58df":function(n,e,t){"use strict";(function(n){t("fc8c"),t("921b");a(t("66fd"));var e=a(t("50f4"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},e408:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return r})},e469:function(n,e,t){"use strict";var a=t("51ef"),r=t.n(a);r.a}},[["58df","common/runtime","common/vendor"]]]);
});
require('pages/index/userInfo.js');
__wxRoute = 'pages/activity/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/activity/index.js';

define('pages/activity/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/index"],{"0c52":function(t,e,n){"use strict";(function(t){n("fc8c"),n("921b");i(n("66fd"));var e=i(n("53ed"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"115c":function(t,e,n){"use strict";var i=n("466c"),a=n.n(i);a.a},"466c":function(t,e,n){},"53ed":function(t,e,n){"use strict";n.r(e);var i=n("b92c"),a=n("97e4");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("115c");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"7d52":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("222a"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t){return u(t)||s(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var l=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"7d34"))},d=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"3db7"))},f={components:{uniIcons:l,uniLoadMore:d},data:function(){return{token:t.getStorageSync("token"),userInfo:t.getStorageSync("userInfo"),activityList:[],pageObj:{current:0},loadMore:"more",isActive:!0}},onPullDownRefresh:function(){this.pageObj.current=0,this.activityList=[],this.getActivitys()},onLoad:function(){this.token=t.getStorageSync("token"),this.userInfo=t.getStorageSync("userInfo"),this.getActivitys()},methods:{parmentOnLoad:function(){this.pageObj.current=0,this.activityList=[],this.getActivitys()},handleAddActive:function(){t.navigateTo({url:"/pages/activity/addActivity",animationType:"pop-in",animationDuration:200})},getActivitys:function(){var e=this;console.log(i(12312312," at pages\\activity\\index.vue:114")),this.pageObj.current++,a.default.baseRequest({url:"activity/queryPage",data:this.pageObj,method:"get",success:function(n){console.log(i(n," at pages\\activity\\index.vue:121"));try{var a=n.data.data,o=(a.current,a.pages,a.size,a.total,a.records);o.length<=0?(e.loadMore="noMore",--e.pageObj.current):(e.loadMore="more",e.activityList=[].concat(c(e.activityList),c(o))),t.stopPullDownRefresh()}catch(r){}}})},onReachBottom:function(){this.loadMore="loading",this.getActivitys()},addActive:function(t){++this.activityList[t]["partakes"],this.activityList[t]["isPartake"]=0,a.default.baseRequest({url:"memberActivity/save",data:{activityId:this.activityList[t].id},method:"post",success:function(t){console.log(i(t," at pages\\activity\\index.vue:160"))}})},cancelActive:function(t){--this.activityList[t]["partakes"],this.activityList[t]["isPartake"]=1,a.default.baseRequest({url:"memberActivity/save",data:{activityId:this.activityList[t].id,deleted:!1},method:"post",success:function(t){console.log(i(t," at pages\\activity\\index.vue:175"))}})},handleScanCode:function(){t.scanCode({onlyFromCamera:!0,success:function(t){console.log(i("条码类型："+t.scanType," at pages\\activity\\index.vue:183")),console.log(i("条码内容："+t.result," at pages\\activity\\index.vue:184"))}})},pictureUrl:function(t){if(t)return console.log(i(" at pages\\activity\\index.vue:191")),-1!=t.indexOf("[")?JSON.parse(t):[t]}}};e.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},"97e4":function(t,e,n){"use strict";n.r(e);var i=n("7d52"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},b92c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}},[["0c52","common/runtime","common/vendor"]]]);
});
require('pages/activity/index.js');
__wxRoute = 'pages/me/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/index.js';

define('pages/me/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/index"],{4865:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("222a"));function i(n){return n&&n.__esModule?n:{default:n}}var o=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"6f20"))},r=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"b47b"))},c=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"7d34"))},u={components:{uniList:o,uniListItem:r,uniIcons:c},data:function(){return{userInfo:{},matchmaker:{},isVip:0}},onShow:function(){var t=n.getStorageSync("token");t||n.showModal({title:"提示",content:"您还未登录，前往登录",showCancel:!1,success:function(){n.navigateTo({url:"/pages/login/index",animationType:"pop-in",animationDuration:200})}}),this.isVip=t.type,n.startPullDownRefresh(),this.getUserInfo()},computed:{address:function(){return this.userInfo.currentAddress?JSON.parse(this.userInfo.currentAddress).city+"户口":"-"},nativePlace:function(){if(this.matchmaker.nativePlace){var n=JSON.parse(this.matchmaker.nativePlace),t=n.province,e=n.city,a=n.town;return"".concat(t).concat(e).concat(a)}return"-"},workingAddress:function(){if(this.matchmaker.workingAddress){var n=JSON.parse(this.matchmaker.workingAddress),t=n.province,e=n.city,a=n.town;return"".concat(t).concat(e).concat(a)}return"-"}},methods:{getUserInfo:function(){var t=this,e=n.getStorageSync("token");e.type?a.default.baseRequest({url:"matchmaker/queryById",method:"get",success:function(e){try{t.matchmaker=e.data.data,n.setStorageSync("userInfo",e.data.data)}catch(a){}}}):a.default.baseRequest({url:"/member/queryById",method:"get",success:function(e){try{t.userInfo=e.data.data,n.setStorageSync("userInfo",e.data.data)}catch(a){}}})},handleGoTrack:function(){n.navigateTo({url:"/pages/me/track/index",animationType:"pop-in",animationDuration:200})},handleShowDetail:function(){n.navigateTo({url:"/pages/me/detail",animationType:"pop-in",animationDuration:200})},handleGoVip:function(){n.navigateTo({url:"/pages/me/vip/index",animationType:"pop-in",animationDuration:200})},handleGoCondition:function(){n.navigateTo({url:"/pages/me/condition/index",animationType:"pop-in",animationDuration:200})},handleGoSeting:function(){n.navigateTo({url:"/pages/me/setings/index",animationType:"pop-in",animationDuration:200})},userAvatar:function(){return this.userInfo.userAvatar?this.userInfo.userAvatar:"/static/icon/defult_header.jpg"},handleEditUserContact:function(t){n.navigateTo({url:"/pages/me/editJokin?matchmakerId="+t.id,animationType:"pop-in",animationDuration:200})},handleNobtn:function(){n.showToast({title:"暂未开通，敬请期待！",icon:"none"})},handleGoPhone:function(){n.navigateTo({url:"/pages/me/photo/index",animationType:"pop-in",animationDuration:200})},previewImage:function(t){var e=t.target.dataset.src;n.previewImage({current:e,urls:[e]})}}};t.default=u}).call(this,e("6e42")["default"])},"7cfb":function(n,t,e){"use strict";e.r(t);var a=e("fa8f"),i=e("9dc0");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("f232");var r=e("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"9dc0":function(n,t,e){"use strict";e.r(t);var a=e("4865"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=i.a},a3ac:function(n,t,e){"use strict";(function(n){e("fc8c"),e("921b");a(e("66fd"));var t=a(e("7cfb"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},e250:function(n,t,e){},f232:function(n,t,e){"use strict";var a=e("e250"),i=e.n(a);i.a},fa8f:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.userAvatar()),a=n.userAvatar(),i={color:"#4cd964",size:"22",type:"pengyouquan"},o={color:"#4cd964",size:"22",type:"image"},r={color:"#4cd964",size:"22",type:"compose"},c={color:"#4cd964",size:"22",type:"contact-filled"},u={color:"#4cd964",size:"22",type:"gear"};n.$mp.data=Object.assign({},{$root:{m0:e,m1:a,a0:i,a1:o,a2:r,a3:c,a4:u}})},i=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i})}},[["a3ac","common/runtime","common/vendor"]]]);
});
require('pages/me/index.js');
__wxRoute = 'pages/userInfo/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userInfo/index.js';

define('pages/userInfo/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userInfo/index"],{"2e05":function(n,e,t){},"38de":function(n,e,t){"use strict";t.r(e);var u=t("ad9c"),o=t("677f");for(var c in o)"default"!==c&&function(n){t.d(e,n,function(){return o[n]})}(c);t("f7da");var a=t("2877"),f=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);e["default"]=f.exports},"53f0":function(n,e,t){"use strict";(function(n){t("fc8c"),t("921b");u(t("66fd"));var e=u(t("38de"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"677f":function(n,e,t){"use strict";t.r(e);var u=t("fac0"),o=t.n(u);for(var c in u)"default"!==c&&function(n){t.d(e,n,function(){return u[n]})}(c);e["default"]=o.a},ad9c:function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return o})},f7da:function(n,e,t){"use strict";var u=t("2e05"),o=t.n(u);o.a},fac0:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-icons/uni-icons")]).then(t.bind(null,"7d34"))},o={components:{uniIcons:u},data:function(){return{}},onLoad:function(e){console.log(n(e," at pages\\userInfo\\index.vue:257"))}};e.default=o}).call(this,t("0de9")["default"])}},[["53f0","common/runtime","common/vendor"]]]);
});
require('pages/userInfo/index.js');
__wxRoute = 'pages/me/editUserInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/editUserInfo.js';

define('pages/me/editUserInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/editUserInfo"],{"4fde":function(e,t,a){"use strict";a.r(t);var n=a("fbde"),i=a("5969");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);a("d2a9");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},5969:function(e,t,a){"use strict";a.r(t);var n=a("e023"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},"84ce":function(e,t,a){},a74e:function(e,t,a){"use strict";(function(e){a("fc8c"),a("921b");n(a("66fd"));var t=n(a("4fde"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},d2a9:function(e,t,a){"use strict";var n=a("84ce"),i=a.n(n);i.a},e023:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("4d6c"),r=s(a("222a"));function s(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){var e=this.getDate({format:!0});return{loading:!1,heights:i.heights,heightsIndex:0,years:i.years,yearsIndex:0,educations:i.educations,educationIndex:0,date:e,sexList:[{value:"1",name:"男"},{value:"2",name:"女"}],userDetailInfo:{name:"",idCare:"",gender:0,age:"",birthday:"",height:"",nation:"",weight:"",education:""}}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(e){var t=JSON.parse(e.data),a=t.name,n=t.idCare,i=t.gender,r=t.birthday,s=t.age,u=t.height,o=t.nation,d=t.weight,c=t.education;this.userDetailInfo={name:a||"",idCare:n||"",gender:i,age:s,birthday:r,height:u,nation:o||"",weight:d||"",education:c};var h=s||"请选择年龄";this.yearsIndex=this.years.indexOf(h);var f=u||"请选择身高";this.heightsIndex=this.heights.indexOf(f);var l=c||"请选择学历";this.educationIndex=this.educations.indexOf(l),this.date=r||new Date},methods:{formSubmit:function(t){var a=this,i=[{name:"name",required:!0,type:"text",errmsg:"请输入真实姓名"},{name:"idCare",required:!0,type:"text",errmsg:"请输入身份证号"},{name:"gender",required:!0,type:"text",errmsg:"请选择性别"},{name:"age",required:!0,type:"text",errmsg:"请选择年龄"},{name:"birthday",required:!0,type:"text",errmsg:"请选择出生日期"},{name:"height",required:!0,type:"text",errmsg:"请选择身高"},{name:"nation",required:!0,type:"text",errmsg:"请填写民族"},{name:"weight",required:!0,type:"text",errmsg:"请填写体重"},{name:"education",required:!0,type:"text",errmsg:"请选择学历"}],s=this.$validate.validate(this.userDetailInfo,i);if(console.log(e(this.userDetailInfo," at pages\\me\\editUserInfo.vue:212")),!s.isOk)return n.showToast({icon:"none",title:s.errmsg}),!1;this.userDetailInfo.id=n.getStorageSync("userInfo").id,r.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(e){try{n.showToast({title:"保存成功！",icon:"success",showCancel:!1}),a.userInfo=e.data.data,n.setStorageSync("userInfo",e.data.data),setTimeout(function(){a.$router.replace("/pages/me/detail")},1200)}catch(t){}}})},formReset:function(t){console.log(e("清空数据"," at pages\\me\\editUserInfo.vue:248"))},bindPickerChange:function(t){console.log(e("picker发送选择改变，携带值为",t.target.value," at pages\\me\\editUserInfo.vue:253")),this.index=t.target.value},handleYearChange:function(t){console.log(e(t," at pages\\me\\editUserInfo.vue:257")),this.yearsIndex=t.detail.value,this.userDetailInfo.age=i.years[this.yearsIndex]},getDate:function(e){var t=new Date,a=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(a,"-").concat(n,"-").concat(i)},bindDateChange:function(e){this.date=e.target.value,this.userDetailInfo.birthday=this.date},handleRadioChange:function(t){console.log(e(t," at pages\\me\\editUserInfo.vue:282")),this.userDetailInfo.gender=t.target.value},handelheights:function(e){this.heightsIndex=e.target.value,this.userDetailInfo.height=i.heights[this.heightsIndex]},handelEducation:function(e){this.educationIndex=e.target.value,this.userDetailInfo.education=i.educations[this.educationIndex]}}};t.default=u}).call(this,a("0de9")["default"],a("6e42")["default"])},fbde:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})}},[["a74e","common/runtime","common/vendor"]]]);
});
require('pages/me/editUserInfo.js');
__wxRoute = 'pages/me/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/detail.js';

define('pages/me/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/detail"],{"001b":function(n,e,t){"use strict";t.r(e);var i=t("ed6c"),a=t("f76e");for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);t("bfcf");var o=t("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"141b":function(n,e,t){"use strict";(function(n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return t.e("components/uni-list/uni-list").then(t.bind(null,"6f20"))},r=function(){return t.e("components/uni-list-item/uni-list-item").then(t.bind(null,"b47b"))},o=function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-icons/uni-icons")]).then(t.bind(null,"7d34"))},u={components:{uniList:a,uniListItem:r,uniIcons:o},data:function(){return{userInfo:n.getStorageSync("userInfo")}},onLoad:function(){this.userInfo=n.getStorageSync("userInfo")},computed:{isMarry:function(){return 1==this.userInfo.isMarry?"未婚":2==this.userInfo.isMarry?"离异":3==this.userInfo.isMarry?"丧偶":"未填写"},userAvatar:function(){return this.userInfo.userAvatar?this.userInfo.userAvatar:"/static/icon/defult_header.jpg"},nativePlaceAdress:function(){if(this.userInfo.nativePlace){var n=JSON.parse(this.userInfo.nativePlace),e=n.province,t=n.city,i=n.town;return"".concat(e).concat(t).concat(i)}return"-"},currentAddress:function(){if(this.userInfo.currentAddress){var n=JSON.parse(this.userInfo.nativePlace),e=n.province,t=n.city,i=n.town;return"".concat(e).concat(t).concat(i)}return"-"},address:function(){return this.userInfo.currentAddress?JSON.parse(this.userInfo.currentAddress).city+"户口":"-"}},methods:{handleGoTrack:function(){n.navigateTo({url:"/pages/me/track/index",animationType:"pop-in",animationDuration:200})},handleEditUserInfo:function(e){console.log(i(e," at pages\\me\\detail.vue:311"));var t={name:e.name,idCare:e.idCare,gender:e.gender,age:e.age,birthday:e.birthday,height:e.height,nation:e.nation,weight:e.weight,education:e.education};n.navigateTo({url:"/pages/me/editUserInfo?data="+JSON.stringify(t),animationType:"pop-in",animationDuration:200})},handleEditUserHeader:function(e){console.log(i(e," at pages\\me\\detail.vue:331"));var t=e.userAvatar,a=e.nickName;n.navigateTo({url:"/pages/me/editUserHeader?userAvatar=".concat(t,"&&nickName=").concat(a),animationType:"pop-in",animationDuration:200})},handleEditUserContact:function(e){var t={phone:e.phone,wechatNumber:e.wechatNumber};n.navigateTo({url:"/pages/me/editUserContact?info="+JSON.stringify(t),animationType:"pop-in",animationDuration:200})},handleEditUserInfomation:function(e){var t={position:e.position,nativePlace:e.nativePlace,currentAddress:e.currentAddress,industry:e.industry,isMarry:e.isMarry};n.navigateTo({url:"/pages/me/editUserInfomation?info="+JSON.stringify(t),animationType:"pop-in",animationDuration:200})},handleEditUserAssetStatus:function(e){var t={income:e.income,housing:e.housing,vehicle:e.vehicle};n.navigateTo({url:"/pages/me/editUserAssetStatus?info="+JSON.stringify(t),animationType:"pop-in",animationDuration:200})},handleEditUserDescrable:function(e){var t={declaration:e.declaration,hobby:e.hobby,otherStandards:e.otherStandards};n.navigateTo({url:"/pages/me/editUserDescrable?info="+JSON.stringify(t),animationType:"pop-in",animationDuration:200})}}};e.default=u}).call(this,t("6e42")["default"],t("0de9")["default"])},"6e34":function(n,e,t){},"7aa4":function(n,e,t){"use strict";(function(n){t("fc8c"),t("921b");i(t("66fd"));var e=i(t("001b"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},bfcf:function(n,e,t){"use strict";var i=t("6e34"),a=t.n(i);a.a},ed6c:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return a})},f76e:function(n,e,t){"use strict";t.r(e);var i=t("141b"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);e["default"]=a.a}},[["7aa4","common/runtime","common/vendor"]]]);
});
require('pages/me/detail.js');
__wxRoute = 'pages/me/editUserHeader';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/editUserHeader.js';

define('pages/me/editUserHeader.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/editUserHeader"],{"22ba":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},"3d56":function(e,t,a){"use strict";var n=a("96e9"),r=a.n(n);r.a},6054:function(e,t,a){"use strict";a.r(t);var n=a("22ba"),r=a("8973");for(var u in r)"default"!==u&&function(e){a.d(t,e,function(){return r[e]})}(u);a("3d56");var o=a("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},7840:function(e,t,a){"use strict";(function(e){a("fc8c"),a("921b");n(a("66fd"));var t=n(a("6054"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},8973:function(e,t,a){"use strict";a.r(t);var n=a("e262"),r=a.n(n);for(var u in n)"default"!==u&&function(e){a.d(t,e,function(){return n[e]})}(u);t["default"]=r.a},"96e9":function(e,t,a){},e262:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("222a"));function r(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{loading:!1,userDetailInfo:{userAvatar:"",nickName:""}}},onLoad:function(t){var a=t.userAvatar;t.nickName;a&&(this.userDetailInfo.userAvatar=a),this.userDetailInfo.nickName=e.getStorageSync("userInfo").nickName},methods:{upload:function(){e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var a=t.tempFilePaths[0];e.navigateTo({url:"/pages/components/uploadAvatar/upload?src="+a})}})},formSubmit:function(t){var a=this;this.loading=!0;var r=[{name:"userAvatar",required:!0,type:"text",errmsg:"请上传头像"},{name:"nickName",required:!0,type:"text",errmsg:"请填写昵称"}];this.userDetailInfo.id=e.getStorageSync("userInfo").id;var u=this.$validate.validate(this.userDetailInfo,r);if(!u.isOk)return e.showToast({icon:"none",title:u.errmsg}),!1;n.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(n){a.loading=!1;try{e.showToast({title:"保存成功！",icon:"success",showCancel:!1}),a.userInfo=n.data.data,e.setStorageSync("userInfo",n.data.data),setTimeout(function(){a.$router.replace("/pages/me/detail")},1200)}catch(t){}}})}}};t.default=u}).call(this,a("6e42")["default"])}},[["7840","common/runtime","common/vendor"]]]);
});
require('pages/me/editUserHeader.js');
__wxRoute = 'pages/me/editJokin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/editJokin.js';

define('pages/me/editJokin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/editJokin"],{1924:function(e,t,n){"use strict";(function(e){n("fc8c"),n("921b");a(n("66fd"));var t=a(n("24a8"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"24a8":function(e,t,n){"use strict";n.r(t);var a=n("ceb6"),o=n("97ff");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("f349");var r=n("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},"34b0":function(e,t,n){},"97ff":function(e,t,n){"use strict";n.r(t);var a=n("fc7a"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},ceb6:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},f349:function(e,t,n){"use strict";var a=n("34b0"),o=n.n(a);o.a},fc7a:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("222a")),i=n("4d6c");function r(e){return e&&e.__esModule?e:{default:e}}var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/Winglau14-lotusAddress/Winglau14-lotusAddress")]).then(n.bind(null,"0899"))},d={components:{lotusAddress:s},data:function(){return{loading:!1,isAdress:0,sexList:[{value:"1",name:"男"},{value:"2",name:"女"}],years:i.years,yearsIndex:0,jobYars:i.jobYars,jobYarIndex:0,jokinInfo:{userAvatar:"",name:"",age:0,gender:0,workingLife:"",phone:"",wechatNumber:"",nativePlace:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},workingAddress:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},field:"",motto:"",state:""},lotusAddressData:{visible:!1,provinceName:"",cityName:"",townName:""},region:"",matchmakerId:""}},computed:{working:function(){var e=this.jokinInfo.workingAddress,t=e.province,n=e.city,a=e.town;return"".concat(t).concat(n).concat(a)},nativePlace:function(){var e=this.jokinInfo.nativePlace,t=e.province,n=e.city,a=e.town;return"".concat(t).concat(n).concat(a)}},onLoad:function(e){this.matchmakerId=e.matchmakerId,this.getUserInfo()},methods:{getUserInfo:function(){var t=this;o.default.baseRequest({url:"matchmaker/queryById",data:{id:this.matchmakerId},method:"get",success:function(n){try{console.log(e(n," at pages\\me\\editJokin.vue:188"));var a=n.data.data,o=a.userAvatar,i=a.name,r=a.gender,s=a.age,d=a.workingLife,c=a.phone,u=a.wechatNumber,l=a.nativePlace,f=a.workingAddress,m=a.field,g=a.motto;t.jokinInfo={userAvatar:o,name:i,gender:r,age:s,workingLife:d,phone:c,wechatNumber:u,nativePlace:JSON.parse(l),workingAddress:JSON.parse(f),field:m,motto:g};var h=s||"请选择年龄";t.yearsIndex=t.years.indexOf(h),t.jobYarIndex=t.jobYars.indexOf(d),console.log(e(t.jobYarIndex," at pages\\me\\editJokin.vue:206"))}catch(v){}}})},upload:function(){a.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t=e.tempFilePaths[0];a.navigateTo({url:"/pages/components/uploadAvatar/jokinAvatar?src="+t})}})},formSubmit:function(t){var n=this;this.loading=!0;var i=[{name:"userAvatar",required:!0,type:"text",errmsg:"请上传头像"},{name:"name",required:!0,type:"text",errmsg:"请填写名称"},{name:"gender",required:!0,type:"text",errmsg:"请填写请选择性别"},{name:"age",required:!0,type:"text",errmsg:"请填写请选择年龄"},{name:"workingLife",required:!0,type:"text",errmsg:"请填写请选择工作年限"},{name:"phone",required:!0,type:"text",errmsg:"请填写手机号码"},{name:"wechatNumber",required:!0,type:"text",errmsg:"请填写微信号"},{name:"nativePlace",required:!0,type:"text",errmsg:"请选择籍贯"},{name:"workingAddress",required:!0,type:"text",errmsg:"请选择工作地点"},{name:"field",required:!0,type:"text",errmsg:"请填写擅长领域"},{name:"motto",required:!0,type:"text",errmsg:"请填写情感箴言"}];this.jokinInfo.id=a.getStorageSync("userInfo").id,console.log(e(this.jokinInfo," at pages\\me\\editJokin.vue:286"));var r=this.$validate.validate(this.jokinInfo,i);if(!r.isOk)return a.showToast({icon:"none",title:r.errmsg}),!1;var s=this.jokinInfo,d=s.userAvatar,c=s.name,u=s.gender,l=s.id,f=s.workingLife,m=s.phone,g=s.wechatNumber,h=s.nativePlace,v=s.workingAddress,p=s.field,k=s.age,b=s.motto,y=s.state,w={userAvatar:d,name:c,gender:u,id:l,workingLife:f,phone:m,age:k,wechatNumber:g,nativePlace:JSON.stringify(h),workingAddress:JSON.stringify(v),field:p,motto:b,state:y};o.default.baseRequest({url:"matchmaker/save",data:w,method:"post",success:function(e){n.loading=!1;try{a.showToast({title:"保存成功！",icon:"success",showCancel:!1}),a.setStorageSync("userInfo",e.data.data),a.switchTab({url:"/pages/me/index"})}catch(t){}}})},handleRadioChange:function(e){this.jokinInfo.gender=e.target.value},handleYearChange:function(e){this.yearsIndex=e.detail.value,this.jokinInfo.age=i.years[this.yearsIndex]},handlejobYarsChange:function(t){console.log(e(t," at pages\\me\\editJokin.vue:360")),this.jobYarIndex=t.detail.value,this.jokinInfo.workingLife=i.jobYars[this.jobYarIndex]},handleCheckNativePlace:function(){this.isAdress=1,this.openPicker()},handleCheckAdress:function(){this.isAdress=2,console.log(e(1231," at pages\\me\\editJokin.vue:373")),this.openPicker()},openPicker:function(){this.lotusAddressData.visible=!0;var e=this.jokinInfo;e.nativePlace,e.workingAddress},choseValue:function(t){this.lotusAddressData.visible=t.visible,t.isChose&&(console.log(e(this.isAdress," at pages\\me\\editJokin.vue:405")),1==this.isAdress&&(console.log(e(t," at pages\\me\\editJokin.vue:408")),this.jokinInfo.nativePlace=t),2==this.isAdress&&(this.jokinInfo.workingAddress=t)),this.isAdress=0},handleField:function(t){console.log(e(t," at pages\\me\\editJokin.vue:423"))},handleMotto:function(t){console.log(e(t," at pages\\me\\editJokin.vue:427"))}}};t.default=d}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["1924","common/runtime","common/vendor"]]]);
});
require('pages/me/editJokin.js');
__wxRoute = 'pages/me/editUserContact';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/editUserContact.js';

define('pages/me/editUserContact.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/editUserContact"],{2426:function(e,t,n){"use strict";n.r(t);var a=n("baec"),u=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=u.a},"40bb":function(e,t,n){"use strict";(function(e){n("fc8c"),n("921b");a(n("66fd"));var t=a(n("b516"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"443e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},"566e":function(e,t,n){"use strict";var a=n("8407"),u=n.n(a);u.a},8407:function(e,t,n){},b516:function(e,t,n){"use strict";n.r(t);var a=n("443e"),u=n("2426");for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);n("566e");var i=n("2877"),o=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},baec:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n("4d6c"),r=i(n("222a"));function i(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{loading:!1,vips:u.Vips,vipIndex:0,userDetailInfo:{phone:"",wechatNumber:""}}},onLoad:function(e){var t=JSON.parse(e.info),n=t.phone,a=t.wechatNumber;this.userDetailInfo={phone:n||"",wechatNumber:a||""}},methods:{formSubmit:function(t){var n=this,a=[{name:"phone",required:!0,type:"text",errmsg:"请输入真实姓名"},{name:"wechatNumber",required:!0,type:"text",errmsg:"请输入微信号"}],u=this.$validate.validate(this.userDetailInfo,a);if(!u.isOk)return e.showToast({icon:"none",title:u.errmsg}),!1;this.userDetailInfo.id=e.getStorageSync("userInfo").id,r.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(a){try{e.showToast({title:"保存成功！",icon:"success",showCancel:!1}),n.userInfo=a.data.data,e.setStorageSync("userInfo",a.data.data),setTimeout(function(){n.$router.replace("/pages/me/detail")},1200)}catch(t){}}})},formReset:function(e){console.log(a("清空数据"," at pages\\me\\editUserContact.vue:107"))},handleVipChange:function(e){this.vipIndex=e.target.value,this.userDetailInfo.vips=u.Vips[this.vipIndex]}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["40bb","common/runtime","common/vendor"]]]);
});
require('pages/me/editUserContact.js');
__wxRoute = 'pages/me/condition/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/condition/index.js';

define('pages/me/condition/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/condition/index"],{"02eb":function(n,e,t){"use strict";var r=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return r}),t.d(e,"b",function(){return a})},"6d6b":function(n,e,t){"use strict";t.r(e);var r=t("02eb"),a=t("809d");for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);t("cb29");var i=t("2877"),c=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},"809d":function(n,e,t){"use strict";t.r(e);var r=t("91db"),a=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);e["default"]=a.a},"91db":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-icons/uni-icons")]).then(t.bind(null,"7d34"))},a={components:{uniIcons:r},data:function(){return{userInfo:n.getStorageSync("userInfo")}},computed:{isMarry:function(){return 1==this.userInfo.partnerIsMarry?"未婚":2==this.userInfo.partnerIsMarry?"离异":3==this.userInfo.partnerIsMarry?"丧偶":"未填写"},partnerNativePlace:function(){if(this.userInfo.partnerNativePlace){var n=JSON.parse(this.userInfo.partnerNativePlace),e=n.province,t=n.city,r=n.town;return"".concat(e).concat(t).concat(r)}return"-"}},onLoad:function(){this.userInfo=n.getStorageSync("userInfo")},methods:{handleEeditUserConditon:function(e){var t={partnerAge:e.partnerAge,partnerHeight:e.partnerHeight,partnerNation:e.partnerNation,partnerEducation:e.partnerEducation,partnerIsMarry:e.partnerIsMarry,partnerNativePlace:e.partnerNativePlace,partnerIncome:e.partnerIncome};n.navigateTo({url:"/pages/me/condition/editUserCondition?info="+JSON.stringify(t),animationType:"pop-in",animationDuration:200})}}};e.default=a}).call(this,t("6e42")["default"])},a696:function(n,e,t){"use strict";(function(n){t("fc8c"),t("921b");r(t("66fd"));var e=r(t("6d6b"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},cb29:function(n,e,t){"use strict";var r=t("eecc"),a=t.n(r);a.a},eecc:function(n,e,t){}},[["a696","common/runtime","common/vendor"]]]);
});
require('pages/me/condition/index.js');
__wxRoute = 'pages/me/condition/editUserCondition';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/condition/editUserCondition.js';

define('pages/me/condition/editUserCondition.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/condition/editUserCondition"],{"0403":function(e,t,r){"use strict";var n=r("986d"),a=r.n(n);a.a},"1f6c":function(e,t,r){"use strict";r.r(t);var n=r("e5ba"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},"357e":function(e,t,r){"use strict";(function(e){r("fc8c"),r("921b");n(r("66fd"));var t=n(r("e484"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"986d":function(e,t,r){},c9ab:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a})},e484:function(e,t,r){"use strict";r.r(t);var n=r("c9ab"),a=r("1f6c");for(var i in a)"default"!==i&&function(e){r.d(t,e,function(){return a[e]})}(i);r("0403");var s=r("2877"),o=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=o.exports},e5ba:function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("4d6c"),i=s(r("222a"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){return Promise.all([r.e("common/vendor"),r.e("components/Winglau14-lotusAddress/Winglau14-lotusAddress")]).then(r.bind(null,"0899"))},u={components:{lotusAddress:o},data:function(){return{isAdress:0,loading:!1,marrys:a.marrys,marrysIndex:0,heights:a.heights,heightsIndex:0,years:a.years,yearsIndex:0,educations:a.educations,educationIndex:0,userDetailInfo:{partnerNativePlace:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},partnerAge:"",partnerHeight:"",partnerIncome:"",partnerEducation:"",partnerIsMarry:""},lotusAddressData:{visible:!1,provinceName:"",cityName:"",townName:""},region:""}},onLoad:function(e){var t=this,r=JSON.parse(e.info),n=r.partnerAge,i=r.partnerHeight,s=r.partnerNation,o=r.partnerEducation,u=r.partnerIsMarry,c=r.partnerNativePlace,d=r.partnerIncome;c=c?JSON.parse(c):{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},this.userDetailInfo={partnerAge:n||"",partnerHeight:i||"",partnerNation:s||"",partnerEducation:o||"",partnerIsMarry:u||"",partnerIncome:d||"",partnerNativePlace:c};var l=n||"请选择年龄";this.yearsIndex=this.years.indexOf(l);var h=i||"请选择身高";this.heightsIndex=this.heights.indexOf(h);var f=o||"请选择学历";this.educationIndex=this.educations.indexOf(f),a.marrys.find(function(e,r){e.val==u&&(t.marrysIndex=r)})},methods:{formSubmit:function(t){var r=this,n=[{name:"partnerAge",required:!0,type:"text",errmsg:"请填写年龄"},{name:"partnerHeight",required:!0,type:"text",errmsg:"请选择身高"},{name:"partnerEducation",required:!0,type:"text",errmsg:"请选择学历"},{name:"partnerIsMarry",required:!0,type:"text",errmsg:"请选择婚姻情况"},{name:"partnerIncome",required:!0,type:"number",errmsg:"请填写收入"}];this.userDetailInfo.id=e.getStorageSync("userInfo").id;var a=this.$validate.validate(this.userDetailInfo,n);if(!a.isOk)return e.showToast({icon:"none",title:a.errmsg}),!1;var s=this.userDetailInfo,o=s.partnerNativePlace,u=s.id,c=s.partnerAge,d=s.partnerHeight,l=s.partnerEducation,h=s.partnerIsMarry,f=s.partnerIncome,p={partnerNativePlace:JSON.stringify(o),id:u,partnerAge:c,partnerHeight:d,partnerEducation:l,partnerIsMarry:h,partnerIncome:f};i.default.baseRequest({url:"member/save",data:p,method:"post",success:function(n){try{e.showToast({title:"保存成功！",icon:"success",showCancel:!1}),r.userInfo=n.data.data,e.setStorageSync("userInfo",n.data.data),setTimeout(function(){r.$router.replace("/pages/me/condition/index")},1200)}catch(t){}}})},formReset:function(e){console.log(n("清空数据"," at pages\\me\\condition\\editUserCondition.vue:241"))},openPicker:function(){this.lotusAddressData.visible=!0;var e=this.userDetailInfo.partnerNativePlace;this.lotusAddressData.provinceName=e.province,this.lotusAddressData.cityName=e.city,this.lotusAddressData.townName=e.town},choseValue:function(e){this.lotusAddressData.visible=e.visible,e.isChose&&(this.userDetailInfo.partnerNativePlace=e,this.region="".concat(e.province," ").concat(e.city," ").concat(e.town)),this.isAdress=0},handleYearChange:function(e){this.yearsIndex=e.detail.value,this.userDetailInfo.partnerAge=a.years[this.yearsIndex]},handelheights:function(e){this.heightsIndex=e.target.value,this.userDetailInfo.partnerHeight=a.heights[this.heightsIndex]},handelEducation:function(e){this.educationIndex=e.target.value,this.userDetailInfo.partnerEducation=a.educations[this.educationIndex]},handleMarryChange:function(e){this.marrysIndex=e.target.value,this.userDetailInfo.partnerIsMarry=a.marrys[this.marrysIndex].val}}};t.default=u}).call(this,r("6e42")["default"],r("0de9")["default"])}},[["357e","common/runtime","common/vendor"]]]);
});
require('pages/me/condition/editUserCondition.js');
__wxRoute = 'pages/me/editUserInfomation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/editUserInfomation.js';

define('pages/me/editUserInfomation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/editUserInfomation"],{"2c03":function(e,t,s){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s("4d6c"),r=o(s("222a"));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){return Promise.all([s.e("common/vendor"),s.e("components/Winglau14-lotusAddress/Winglau14-lotusAddress")]).then(s.bind(null,"0899"))},c={components:{lotusAddress:a},data:function(){return{isAdress:0,loading:!1,marrys:n.marrys,marrysIndex:0,userDetailInfo:{position:"",nativePlace:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},currentAddress:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},industry:"",isMarry:""},lotusAddressData:{visible:!1,provinceName:"",cityName:"",townName:""},region:""}},onLoad:function(e){var t=this,s=JSON.parse(e.info),i=s.position,r=s.nativePlace,o=s.currentAddress,a=s.industry,c=s.isMarry;r=r?JSON.parse(r):{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},o=o?JSON.parse(o):{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},this.userDetailInfo={position:i||"",industry:a||"",isMarry:c||"",nativePlace:r,currentAddress:o},n.marrys.find(function(e,s){e.val==c&&(t.marrysIndex=s)})},methods:{formSubmit:function(t){var s=this,n=[{name:"position",required:!0,type:"text",errmsg:"请输入职位"},{name:"industry",required:!0,type:"text",errmsg:"请输入行业"}];this.userDetailInfo.id=e.getStorageSync("userInfo").id,console.log(i(this.userDetailInfo," at pages\\me\\editUserInfomation.vue:166"));var o=this.$validate.validate(this.userDetailInfo,n);if(!o.isOk)return e.showToast({icon:"none",title:o.errmsg}),!1;var a=this.userDetailInfo,c=a.currentAddress,d=a.id,u=a.industry,l=a.isMarry,f=a.nativePlace,v=a.position;console.log(i(JSON.stringify(c)," at pages\\me\\editUserInfomation.vue:183"));var m={currentAddress:JSON.stringify(c),id:d,industry:u,isMarry:l,nativePlace:JSON.stringify(f),position:v};r.default.baseRequest({url:"member/save",data:m,method:"post",success:function(i){try{e.showToast({title:"保存成功！",icon:"success",showCancel:!1}),s.userInfo=i.data.data,e.setStorageSync("userInfo",i.data.data),setTimeout(function(){s.$router.replace("/pages/me/detail")},1200)}catch(t){}}})},formReset:function(e){console.log(i("清空数据"," at pages\\me\\editUserInfomation.vue:217"))},handleMarryChange:function(e){this.marrysIndex=e.target.value,this.userDetailInfo.isMarry=n.marrys[this.marrysIndex].val},bindPickerChange:function(e){console.log(i("picker发送选择改变，携带值为",e.target.value," at pages\\me\\editUserInfomation.vue:227")),this.index=e.target.value},handleCheckNativePlace:function(){this.isAdress=1,this.openPicker()},handleCheckAdress:function(){this.isAdress=2,this.openPicker()},openPicker:function(){this.lotusAddressData.visible=!0;var e=this.userDetailInfo,t=e.nativePlace,s=e.currentAddress;1==this.isAdress&&(this.lotusAddressData.provinceName=t.province,this.lotusAddressData.cityName=t.city,this.lotusAddressData.townName=t.town),2==this.isAdress&&(this.lotusAddressData.provinceName=s.province,this.lotusAddressData.cityName=s.city,this.lotusAddressData.townName=s.town)},choseValue:function(e){this.lotusAddressData.visible=e.visible,e.isChose&&(console.log(i(this.isAdress," at pages\\me\\editUserInfomation.vue:270")),1==this.isAdress&&(console.log(i(e," at pages\\me\\editUserInfomation.vue:273")),this.userDetailInfo.nativePlace=e),2==this.isAdress&&(this.userDetailInfo.currentAddress=e),this.region="".concat(e.province," ").concat(e.city," ").concat(e.town)),this.isAdress=0}}};t.default=c}).call(this,s("6e42")["default"],s("0de9")["default"])},"62c6":function(e,t,s){"use strict";s.r(t);var i=s("9014"),n=s("e9e6");for(var r in n)"default"!==r&&function(e){s.d(t,e,function(){return n[e]})}(r);s("cb80");var o=s("2877"),a=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},9014:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},n=[];s.d(t,"a",function(){return i}),s.d(t,"b",function(){return n})},cb80:function(e,t,s){"use strict";var i=s("f101"),n=s.n(i);n.a},e9e6:function(e,t,s){"use strict";s.r(t);var i=s("2c03"),n=s.n(i);for(var r in i)"default"!==r&&function(e){s.d(t,e,function(){return i[e]})}(r);t["default"]=n.a},f101:function(e,t,s){},f95d:function(e,t,s){"use strict";(function(e){s("fc8c"),s("921b");i(s("66fd"));var t=i(s("62c6"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("6e42")["createPage"])}},[["f95d","common/runtime","common/vendor"]]]);
});
require('pages/me/editUserInfomation.js');
__wxRoute = 'pages/me/editUserAssetStatus';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/editUserAssetStatus.js';

define('pages/me/editUserAssetStatus.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/editUserAssetStatus"],{"29c9":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("4d6c"),r=u(n("222a"));function u(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{isAdress:0,loading:!1,marrys:s.marrys,marrysIndex:0,userDetailInfo:{income:"",housing:"",vehicle:""}}},onLoad:function(e){var t=JSON.parse(e.info),n=t.income,a=t.housing,s=t.vehicle;this.userDetailInfo={income:n||"",housing:a||"",vehicle:s||""}},methods:{formSubmit:function(t){var n=this,s=[{name:"income",required:!0,type:"text",errmsg:"请填写每月收入情况"},{name:"housing",required:!0,type:"text",errmsg:"请填写住房情况"},{name:"housing",required:!0,type:"text",errmsg:"请填写是否购车"}];this.userDetailInfo.id=e.getStorageSync("userInfo").id,console.log(a(this.userDetailInfo," at pages\\me\\editUserAssetStatus.vue:85"));var u=this.$validate.validate(this.userDetailInfo,s);if(!u.isOk)return e.showToast({icon:"none",title:u.errmsg}),!1;r.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(a){try{e.showToast({title:"保存成功！",icon:"success",showCancel:!1}),n.userInfo=a.data.data,e.setStorageSync("userInfo",a.data.data),setTimeout(function(){n.$router.replace("/pages/me/detail")},1200)}catch(t){}}})},formReset:function(e){console.log(a("清空数据"," at pages\\me\\editUserAssetStatus.vue:121"))}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},"42b0":function(e,t,n){"use strict";var a=n("c226"),s=n.n(a);s.a},5364:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s})},"68f7":function(e,t,n){"use strict";n.r(t);var a=n("5364"),s=n("b114");for(var r in s)"default"!==r&&function(e){n.d(t,e,function(){return s[e]})}(r);n("42b0");var u=n("2877"),o=Object(u["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},"824d":function(e,t,n){"use strict";(function(e){n("fc8c"),n("921b");a(n("66fd"));var t=a(n("68f7"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},b114:function(e,t,n){"use strict";n.r(t);var a=n("29c9"),s=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=s.a},c226:function(e,t,n){}},[["824d","common/runtime","common/vendor"]]]);
});
require('pages/me/editUserAssetStatus.js');
__wxRoute = 'pages/components/uploadAvatar/upload';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/uploadAvatar/upload.js';

define('pages/components/uploadAvatar/upload.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/uploadAvatar/upload"],{"0ecd":function(e,o,t){},"249d":function(e,o,t){"use strict";var a=function(){var e=this,o=e.$createElement;e._self._c},n=[];t.d(o,"a",function(){return a}),t.d(o,"b",function(){return n})},"3b1b":function(e,o,t){"use strict";t.r(o);var a=t("eb6f"),n=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(o,e,function(){return a[e]})}(r);o["default"]=n.a},8350:function(e,o,t){"use strict";(function(e){t("fc8c"),t("921b");a(t("66fd"));var o=a(t("8458"));function a(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,t("6e42")["createPage"])},8458:function(e,o,t){"use strict";t.r(o);var a=t("249d"),n=t("3b1b");for(var r in n)"default"!==r&&function(e){t.d(o,e,function(){return n[e]})}(r);t("ec42");var u=t("2877"),c=Object(u["a"])(n["default"],a["a"],a["b"],!1,null,null,null);o["default"]=c.exports},eb6f:function(e,o,t){"use strict";(function(e,a){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=r(t("9ec8"));function r(e){return e&&e.__esModule?e:{default:e}}var u=e.getSystemInfoSync(),c=u.windowWidth,i=u.windowHeight-50;console.log(a(u," at pages\\components\\uploadAvatar\\upload.vue:19"));var s={data:function(){return{cropperOpt:{id:"cropper",width:c,height:i,scale:2.5,zoom:8,cut:{x:(c-295)/2,y:(i-413)/2,width:300,height:300}},weCropper:""}},methods:{back:function(){e.redirectTo({url:"/pages/me/editUserHeader"})},touchStart:function(e){this.weCropper.touchStart(e)},touchMove:function(e){this.weCropper.touchMove(e)},touchEnd:function(e){this.weCropper.touchEnd(e)},convertBase64UrlToBlob:function(e,o){for(var t=atob(e.split(",")[1]),a=[],n=0;n<t.length;n++)a.push(t.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:o},{filename:"1111.jpg"})},blobToDataURL:function(e){var o=new FileReader;o.readAsDataURL(e),o.onload=function(e){var o=e.target.result;console.log(a(o," at pages\\components\\uploadAvatar\\upload.vue:71"))}},getCropperImage:function(){this.weCropper.getCropperImage(function(o){o?e.uploadFile({url:"/common/multiUpload",filePath:o,name:"file",success:function(o){console.log(a(JSON.parse(o.data)," at pages\\components\\uploadAvatar\\upload.vue:93")),e.showToast({title:"上传成功",icon:"success",duration:1e3}),wx.redirectTo({url:"/pages/me/editUserHeader?userAvatar="+JSON.parse(o.data).data})},ail:function(o){console.log(a("uploadImage fail",o," at pages\\components\\uploadAvatar\\upload.vue:104")),e.showModal({content:o.errMsg,showCancel:!1}),e.hideLoading()},complete:function(){console.log(a("complate"," at pages\\components\\uploadAvatar\\upload.vue:112"))}}):console.log(a("获取图片失败，请稍后重试"," at pages\\components\\uploadAvatar\\upload.vue:116"))})},uploadTap:function(){var o=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t=e.tempFilePaths[0];o.weCropper.pushOrign(t)}})}},onLoad:function(o){var t=this.cropperOpt,a=o.src;a&&(Object.assign(t,{src:a}),this.weCropper=new n.default(t).on("ready",function(e){}).on("beforeImageLoad",function(o){e.showToast({title:"上传中",icon:"loading",duration:3e3})}).on("imageLoad",function(o){e.hideToast()}))}};o.default=s}).call(this,t("6e42")["default"],t("0de9")["default"])},ec42:function(e,o,t){"use strict";var a=t("0ecd"),n=t.n(a);n.a}},[["8350","common/runtime","common/vendor"]]]);
});
require('pages/components/uploadAvatar/upload.js');
__wxRoute = 'pages/components/uploadAvatar/jokinAvatar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/uploadAvatar/jokinAvatar.js';

define('pages/components/uploadAvatar/jokinAvatar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/uploadAvatar/jokinAvatar"],{"311f":function(e,t,o){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("9ec8"));function r(e){return e&&e.__esModule?e:{default:e}}var u=e.getSystemInfoSync(),c=u.windowWidth,i=u.windowHeight-50;console.log(a(u," at pages\\components\\uploadAvatar\\jokinAvatar.vue:19"));var s={data:function(){return{cropperOpt:{id:"cropper",width:c,height:i,scale:2.5,zoom:8,cut:{x:(c-295)/2,y:(i-413)/2,width:300,height:300}},weCropper:""}},methods:{back:function(){e.redirectTo({url:"/pages/me/editJokin"})},touchStart:function(e){this.weCropper.touchStart(e)},touchMove:function(e){this.weCropper.touchMove(e)},touchEnd:function(e){this.weCropper.touchEnd(e)},convertBase64UrlToBlob:function(e,t){for(var o=atob(e.split(",")[1]),a=[],n=0;n<o.length;n++)a.push(o.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:t},{filename:"1111.jpg"})},blobToDataURL:function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){var t=e.target.result;console.log(a(t," at pages\\components\\uploadAvatar\\jokinAvatar.vue:71"))}},getCropperImage:function(){this.weCropper.getCropperImage(function(t){t?e.uploadFile({url:"/common/multiUpload",filePath:t,name:"file",success:function(t){console.log(a(JSON.parse(t.data)," at pages\\components\\uploadAvatar\\jokinAvatar.vue:93")),e.showToast({title:"上传成功",icon:"success",duration:1e3}),wx.redirectTo({url:"/pages/me/editJokin?userAvatar="+JSON.parse(t.data).data})},ail:function(t){console.log(a("uploadImage fail",t," at pages\\components\\uploadAvatar\\jokinAvatar.vue:104")),e.showModal({content:t.errMsg,showCancel:!1}),e.hideLoading()},complete:function(){console.log(a("complate"," at pages\\components\\uploadAvatar\\jokinAvatar.vue:112"))}}):console.log(a("获取图片失败，请稍后重试"," at pages\\components\\uploadAvatar\\jokinAvatar.vue:116"))})},uploadTap:function(){var t=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var o=e.tempFilePaths[0];t.weCropper.pushOrign(o)}})}},onLoad:function(t){var o=this.cropperOpt,a=t.src;a&&(Object.assign(o,{src:a}),this.weCropper=new n.default(o).on("ready",function(e){}).on("beforeImageLoad",function(t){e.showToast({title:"上传中",icon:"loading",duration:3e3})}).on("imageLoad",function(t){e.hideToast()}))}};t.default=s}).call(this,o("6e42")["default"],o("0de9")["default"])},"465b":function(e,t,o){"use strict";(function(e){o("fc8c"),o("921b");a(o("66fd"));var t=a(o("4ceb"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},"4ceb":function(e,t,o){"use strict";o.r(t);var a=o("7293"),n=o("83e9");for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r);o("a9da");var u=o("2877"),c=Object(u["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"5ae0":function(e,t,o){},7293:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return n})},"83e9":function(e,t,o){"use strict";o.r(t);var a=o("311f"),n=o.n(a);for(var r in a)"default"!==r&&function(e){o.d(t,e,function(){return a[e]})}(r);t["default"]=n.a},a9da:function(e,t,o){"use strict";var a=o("5ae0"),n=o.n(a);n.a}},[["465b","common/runtime","common/vendor"]]]);
});
require('pages/components/uploadAvatar/jokinAvatar.js');
__wxRoute = 'pages/me/track/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/track/index.js';

define('pages/me/track/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/track/index"],{"0463":function(n,t,e){"use strict";e.r(t);var a=e("7053"),o=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=o.a},7053:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(e("222a"));function o(n){return n&&n.__esModule?n:{default:n}}function r(n){return c(n)||u(n)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function c(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}var s=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"6f20"))},l=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"b47b"))},d=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"7d34"))},f=function(){return e.e("pages/me/track/components/list").then(e.bind(null,"dd2e"))},m=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"3db7"))},h={components:{uniList:s,uniListItem:l,list:f,uniIcons:d,uniLoadMore:m},data:function(){return{userInfo:n.getStorageSync("userInfo"),loadMore:"more",pageObj:{current:0},dynamicList:[]}},onLoad:function(){this.userInfo=n.getStorageSync("userInfo"),this.getDynamics()},onPullDownRefresh:function(){this.pageObj.current=0,this.dynamicList=[],this.getDynamics()},methods:{getDynamics:function(){var t=this;this.pageObj.current++,a.default.baseRequest({url:"dynamic/queryPage",data:this.pageObj,method:"get",success:function(e){t.loading=!1;try{var a=e.data.data,o=(a.current,a.pages,a.size,a.total,a.records);o.length<=0?(t.loadMore="noMore",--t.pageObj.current):(t.loadMore="more",t.dynamicList=[].concat(r(t.dynamicList),r(o))),n.stopPullDownRefresh()}catch(i){}}})},onReachBottom:function(){this.loadMore="loading",this.getDynamics()},userAvatar:function(){return this.userInfo.userAvatar?this.userInfo.userAvatar:"/static/icon/defult_header.jpg"},handleTrack:function(){n.navigateTo({url:"addTrack",animationType:"pop-in",animationDuration:200})},removeDynamic:function(t){var e=this,o={id:t,deleted:!0};a.default.baseRequest({url:"dynamic/save",data:o,method:"post",success:function(t){try{n.showToast({title:"删除成功",icon:"none",success:function(){e.pageObj.current=0,e.dynamicList=[],e.getDynamics()}})}catch(a){}}})}}};t.default=h}).call(this,e("6e42")["default"])},9934:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.userAvatar());n.$mp.data=Object.assign({},{$root:{m0:e}})},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})},"9d57":function(n,t,e){"use strict";(function(n){e("fc8c"),e("921b");a(e("66fd"));var t=a(e("fe88"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},a075:function(n,t,e){"use strict";var a=e("a5aa"),o=e.n(a);o.a},a5aa:function(n,t,e){},fe88:function(n,t,e){"use strict";e.r(t);var a=e("9934"),o=e("0463");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);e("a075");var i=e("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports}},[["9d57","common/runtime","common/vendor"]]]);
});
require('pages/me/track/index.js');
__wxRoute = 'pages/index/vipTrack';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/vipTrack.js';

define('pages/index/vipTrack.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/vipTrack"],{"2c66":function(n,t,e){"use strict";(function(n){e("fc8c"),e("921b");o(e("66fd"));var t=o(e("7c84"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"6dd1":function(n,t,e){"use strict";var o=e("8b9d"),r=e.n(o);r.a},"7c84":function(n,t,e){"use strict";e.r(t);var o=e("833c"),r=e("bdf0");for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);e("6dd1");var a=e("2877"),u=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},"833c":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement,e=(n._self._c,n.userAvatar());n.$mp.data=Object.assign({},{$root:{m0:e}})},r=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r})},"8b9d":function(n,t,e){},b2a8:function(n,t,e){"use strict";(function(n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(e("222a"));function i(n){return n&&n.__esModule?n:{default:n}}function a(n){return s(n)||c(n)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function s(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}var l=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"6f20"))},d=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"b47b"))},f=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"7d34"))},m=function(){return e.e("pages/index/components/list").then(e.bind(null,"d1bb"))},b=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"3db7"))},g={components:{uniList:l,uniListItem:d,list:m,uniIcons:f,uniLoadMore:b},data:function(){return{userInfo:n.getStorageSync("userInfo"),loadMore:"more",pageObj:{current:0},dynamicList:[]}},onLoad:function(t){console.log(o(t," at pages\\index\\vipTrack.vue:59")),this.userInfo=n.getStorageSync("userInfo"),this.getDynamics()},onPullDownRefresh:function(){this.pageObj.current=0,this.dynamicList=[],this.getDynamics()},methods:{ceshi:function(){console.log(o(1111," at pages\\index\\vipTrack.vue:72"))},getDynamics:function(){var t=this;this.pageObj.current++,r.default.baseRequest({url:"dynamic/queryPage",data:this.pageObj,method:"get",success:function(e){t.loading=!1;try{var o=e.data.data,r=(o.current,o.pages,o.size,o.total,o.records);r.length<=0?(t.loadMore="noMore",--t.pageObj.current):(t.loadMore="more",t.dynamicList=[].concat(a(t.dynamicList),a(r))),n.stopPullDownRefresh()}catch(i){}}})},onReachBottom:function(){this.loadMore="loading",this.getDynamics()},userAvatar:function(){return this.userInfo.userAvatar?this.userInfo.userAvatar:"/static/icon/defult_header.jpg"},handleTrack:function(){n.navigateTo({url:"addTrack",animationDuration:500})},removeDynamic:function(n){console.log(o(n," at pages\\index\\vipTrack.vue:125"))}}};t.default=g}).call(this,e("6e42")["default"],e("0de9")["default"])},bdf0:function(n,t,e){"use strict";e.r(t);var o=e("b2a8"),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=r.a}},[["2c66","common/runtime","common/vendor"]]]);
});
require('pages/index/vipTrack.js');
__wxRoute = 'pages/me/photo/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/photo/index.js';

define('pages/me/photo/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/photo/index"],{"161c":function(n,t,e){"use strict";e.r(t);var o=e("76ef"),r=e("4a22");for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);e("dcc1");var a=e("2877"),u=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},3737:function(n,t,e){},"4a22":function(n,t,e){"use strict";e.r(t);var o=e("71e0"),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=r.a},"71e0":function(n,t,e){"use strict";(function(n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(e("222a"));function i(n){return n&&n.__esModule?n:{default:n}}function a(n){return s(n)||c(n)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function s(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}var l=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"6f20"))},f=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"b47b"))},d=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"7d34"))},m=function(){return e.e("pages/me/photo/components/list").then(e.bind(null,"0e0e"))},h=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"3db7"))},p={components:{uniList:l,uniListItem:f,list:m,uniIcons:d,uniLoadMore:h},data:function(){return{userInfo:n.getStorageSync("userInfo"),loadMore:"more",pageObj:{current:0},dynamicList:[]}},onLoad:function(){this.userInfo=n.getStorageSync("userInfo"),this.getDynamics()},onShow:function(){},onPullDownRefresh:function(){this.pageObj.current=0,this.dynamicList=[],this.getDynamics()},methods:{getDynamics:function(){var t=this;this.pageObj.current++,r.default.baseRequest({url:"dynamic/queryPage",data:this.pageObj,method:"get",success:function(e){t.loading=!1;try{var o=e.data.data,r=(o.current,o.pages,o.size,o.total,o.records);r.length<=0?(t.loadMore="noMore",--t.pageObj.current):(t.loadMore="more",t.dynamicList=[].concat(a(t.dynamicList),a(r))),n.stopPullDownRefresh()}catch(i){}}})},onReachBottom:function(){this.loadMore="loading",this.getDynamics()},userAvatar:function(){return this.userInfo.userAvatar?this.userInfo.userAvatar:"/static/icon/defult_header.jpg"},handleTrack:function(){n.navigateTo({url:"addPhoto",animationType:"pop-in",animationDuration:200})},removeDynamic:function(n){console.log(o(n," at pages\\me\\photo\\index.vue:126"))}}};t.default=p}).call(this,e("6e42")["default"],e("0de9")["default"])},7557:function(n,t,e){"use strict";(function(n){e("fc8c"),e("921b");o(e("66fd"));var t=o(e("161c"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"76ef":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement,e=(n._self._c,n.userAvatar());n.$mp.data=Object.assign({},{$root:{m0:e}})},r=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r})},dcc1:function(n,t,e){"use strict";var o=e("3737"),r=e.n(o);r.a}},[["7557","common/runtime","common/vendor"]]]);
});
require('pages/me/photo/index.js');
__wxRoute = 'pages/me/photo/addPhoto';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/photo/addPhoto.js';

define('pages/me/photo/addPhoto.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/photo/addPhoto"],{"3cfc":function(t,e,n){"use strict";n.r(e);var a=n("a318"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=o.a},9265:function(t,e,n){"use strict";(function(t){n("fc8c"),n("921b");a(n("66fd"));var e=a(n("c2cb"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a318:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n("222a"));function c(t){return t&&t.__esModule?t:{default:t}}var i=function(){return n.e("pages/me/photo/components/an-uploadImg").then(n.bind(null,"c046"))},u={components:{anUploadImg:i},data:function(){return{imgObj:{url:"/common/multiUploads",fileList:[],name:"trackImg",limt:9},dynamic:{content:"",pictureUrl:"",state:2},upImgConfig:{iconReplace:""}}},methods:{formSubmit:function(){var e=this,n=JSON.stringify(this.$refs.uploadimg.imgList);this.dynamic.pictureUrl=n;var a=[{name:"content",required:!0,type:"text",errmsg:"请填写文本信息"},{name:"pictureUrl",required:!0,type:"text",errmsg:"请上传图片"}],c=this.$validate.validate(this.dynamic,a);if(!c.isOk)return t.showToast({icon:"none",title:c.errmsg}),!1;o.default.baseRequest({url:"dynamic/save",data:this.dynamic,method:"post",success:function(n){e.loading=!1;try{t.showToast({title:"保存成功！",icon:"success",showCancel:!1,success:function(){t.redirectTo({url:"/pages/me/photo/index"})}})}catch(a){}}})},formReset:function(){},handleGetCon:function(t){console.log(a(t," at pages\\me\\photo\\addPhoto.vue:104")),this.dynamic.content=t.detail.value}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},a967:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},c2cb:function(t,e,n){"use strict";n.r(e);var a=n("a967"),o=n("3cfc");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("ed11");var i=n("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},cfbb:function(t,e,n){},ed11:function(t,e,n){"use strict";var a=n("cfbb"),o=n.n(a);o.a}},[["9265","common/runtime","common/vendor"]]]);
});
require('pages/me/photo/addPhoto.js');
__wxRoute = 'pages/me/vip/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/vip/index.js';

define('pages/me/vip/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/vip/index"],{3665:function(e,t,n){"use strict";n.r(t);var i=n("e38f"),r=n("9a67");for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);n("d04c");var a=n("2877"),u=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},"4e53":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{vipList:[{title:"银卡会员",originalPrice:20,presentPrice:1,desc:"服务说明：这个服务就比较牛B了，  给了钱的，包一年"},{title:"金卡会员",originalPrice:20,presentPrice:1,desc:"服务说明：这个服务就比较牛B了，  给了钱的，包一年"},{title:"砖石会员",originalPrice:20,presentPrice:1,desc:"服务说明：这个服务就比较牛B了，  给了钱的，包一年"},{title:"黑卡会员",originalPrice:20,presentPrice:1,desc:"服务说明：这个服务就比较牛B了，  给了钱的，包一年"}]}},methods:{handleBtn:function(){e.showToast({icon:"none",title:"该功能暂未开通，请与管理联系！",showCancel:!1})}}};t.default=n}).call(this,n("6e42")["default"])},"9a67":function(e,t,n){"use strict";n.r(t);var i=n("4e53"),r=n.n(i);for(var c in i)"default"!==c&&function(e){n.d(t,e,function(){return i[e]})}(c);t["default"]=r.a},a93b:function(e,t,n){},d04c:function(e,t,n){"use strict";var i=n("a93b"),r=n.n(i);r.a},e38f:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})},f089:function(e,t,n){"use strict";(function(e){n("fc8c"),n("921b");i(n("66fd"));var t=i(n("3665"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["f089","common/runtime","common/vendor"]]]);
});
require('pages/me/vip/index.js');
__wxRoute = 'pages/me/editUserDescrable';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/editUserDescrable.js';

define('pages/me/editUserDescrable.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/editUserDescrable"],{"21e8":function(e,t,a){"use strict";a.r(t);var n=a("9da0"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=r.a},"47f7":function(e,t,a){"use strict";a.r(t);var n=a("ff67"),r=a("21e8");for(var o in r)"default"!==o&&function(e){a.d(t,e,function(){return r[e]})}(o);a("ab93");var u=a("2877"),s=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"945a":function(e,t,a){"use strict";(function(e){a("fc8c"),a("921b");n(a("66fd"));var t=n(a("47f7"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"9da0":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("4d6c"),o=u(a("222a"));function u(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{loading:!1,vips:r.Vips,vipIndex:0,userDetailInfo:{declaration:"",hobby:""}}},onLoad:function(t){console.log(e(t," at pages\\me\\editUserDescrable.vue:49"));var a=JSON.parse(t.info),n=a.declaration,r=a.hobby;a.otherStandards;this.userDetailInfo={declaration:n||"",hobby:r||""}},methods:{formSubmit:function(t){var a=this,r=[{name:"declaration",required:!0,type:"text",errmsg:"请输入真实姓名"},{name:"hobby",required:!0,type:"text",errmsg:"请输入身份证号"}],u=this.$validate.validate(this.userDetailInfo,r);if(console.log(e(this.userDetailInfo," at pages\\me\\editUserDescrable.vue:77")),!u.isOk)return n.showToast({icon:"none",title:u.errmsg}),!1;this.userDetailInfo.id=n.getStorageSync("userInfo").id,o.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(e){try{n.showToast({title:"保存成功！",icon:"success",showCancel:!1}),a.userInfo=e.data.data,n.setStorageSync("userInfo",e.data.data),setTimeout(function(){a.$router.replace("/pages/me/detail")},1200)}catch(t){}}})},formReset:function(t){console.log(e("清空数据"," at pages\\me\\editUserDescrable.vue:113"))},bindTextAreaBlur:function(){}}};t.default=s}).call(this,a("0de9")["default"],a("6e42")["default"])},ab93:function(e,t,a){"use strict";var n=a("c506"),r=a.n(n);r.a},c506:function(e,t,a){},ff67:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})}},[["945a","common/runtime","common/vendor"]]]);
});
require('pages/me/editUserDescrable.js');
__wxRoute = 'pages/me/setings/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/setings/index.js';

define('pages/me/setings/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/setings/index"],{"0fd3":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=e("4d6c");a(e("222a"));function a(n){return n&&n.__esModule?n:{default:n}}var c={data:function(){return{loading:!1,vips:u.Vips,vipIndex:0,userDetailInfo:{phone:"",wechatNumber:""}}},computed:{},methods:{switch2Change:function(n){}}};t.default=c},"1ff1":function(n,t,e){"use strict";e.r(t);var u=e("0fd3"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},3754:function(n,t,e){},"588f":function(n,t,e){"use strict";(function(n){e("fc8c"),e("921b");u(e("66fd"));var t=u(e("c368"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"7a76":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},a3c7:function(n,t,e){"use strict";var u=e("3754"),a=e.n(u);a.a},c368:function(n,t,e){"use strict";e.r(t);var u=e("7a76"),a=e("1ff1");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("a3c7");var f=e("2877"),r=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports}},[["588f","common/runtime","common/vendor"]]]);
});
require('pages/me/setings/index.js');
__wxRoute = 'pages/me/track/addTrack';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/track/addTrack.js';

define('pages/me/track/addTrack.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/track/addTrack"],{"0151":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},"4b9a":function(t,n,e){"use strict";var a=e("8d09"),i=e.n(a);i.a},"803d":function(t,n,e){"use strict";e.r(n);var a=e("941c"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a},"8d09":function(t,n,e){},"941c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("222a"));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("pages/me/track/components/an-uploadImg").then(e.bind(null,"3d77"))},c={components:{anUploadImg:u},data:function(){return{imgObj:{url:"/common/multiUploads",fileList:[],name:"trackImg",limt:9},dynamic:{content:"",pictureUrl:"",state:2},upImgConfig:{iconReplace:""}}},methods:{formSubmit:function(){var n=this,e=JSON.stringify(this.$refs.uploadimg.imgList);this.dynamic.pictureUrl=e;var i=[{name:"content",required:!0,type:"text",errmsg:"请填写文本信息"},{name:"pictureUrl",required:!0,type:"text",errmsg:"请上传图片"}],u=this.$validate.validate(this.dynamic,i);if(!u.isOk)return t.showToast({icon:"none",title:u.errmsg}),!1;a.default.baseRequest({url:"/dynamic/save",data:this.dynamic,method:"post",success:function(e){n.loading=!1;try{t.showToast({title:"保存成功！",icon:"success",showCancel:!1,success:function(){t.redirectTo({url:"/pages/me/track/index",animationType:"pop-in",animationDuration:200})}})}catch(a){}}})},formReset:function(){},handleGetCon:function(t){this.dynamic.content=t.detail.value}}};n.default=c}).call(this,e("6e42")["default"])},b766:function(t,n,e){"use strict";(function(t){e("fc8c"),e("921b");a(e("66fd"));var n=a(e("f564"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},f564:function(t,n,e){"use strict";e.r(n);var a=e("0151"),i=e("803d");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("4b9a");var c=e("2877"),r=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports}},[["b766","common/runtime","common/vendor"]]]);
});
require('pages/me/track/addTrack.js');
__wxRoute = 'pages/activity/addActivity';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/activity/addActivity.js';

define('pages/activity/addActivity.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/addActivity"],{"262c":function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(a("222a")),r=a("4d6c");function c(t){return t&&t.__esModule?t:{default:t}}var u=function(){return a.e("pages/activity/components/an-uploadImg").then(a.bind(null,"c8b4"))},s={components:{anUploadImg:u},data:function(){var t=this.getDate({format:!0});return{startTime:t,endTime:t,imgObj:{url:"/common/multiUploads",fileList:[],name:"trackImg",limt:9},activeUser:r.activeUser,activeUserIndex:0,activity:{title:"",content:"",startTime:"",endTime:"",pictureUrl:[],activityNumber:0,state:1},upImgConfig:{iconReplace:""}}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{getDate:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===t?a-=60:"end"===t&&(a+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(a,"-").concat(i,"-").concat(n)},handleStartTime:function(e){console.log(t(e," at pages\\activity\\addActivity.vue:116")),this.startTime=e.target.value,this.activity.startTime=e.target.value},handleEndTime:function(t){this.endTime=t.target.value,this.activity.endTime=t.target.value},handelactiveUser:function(t){this.activeUserIndex=t.target.value,this.activity.activityNumber=this.activeUser[this.activeUserIndex]},formSubmit:function(){var t=this,e=JSON.stringify(this.$refs.uploadimg.imgList);this.activity.pictureUrl=e;var a=[{name:"title",required:!0,type:"text",errmsg:"请填写活动标题"},{name:"content",required:!0,type:"text",errmsg:"请填写活动详情"},{name:"startTime",required:!0,type:"text",errmsg:"请选择活动开始时间"},{name:"startTime",required:!0,type:"text",errmsg:"请选择活动结束时间"},{name:"activityNumber",required:!0,type:"text",errmsg:"请选择活动参与人数"}],r=this.$validate.validate(this.activity,a);if(!r.isOk)return i.showToast({icon:"none",title:r.errmsg}),!1;n.default.baseRequest({url:"activity/save",data:this.activity,method:"post",success:function(e){t.loading=!1;try{i.showToast({title:"活动保存成功！",icon:"success",showCancel:!1,success:function(){i.switchTab({url:"/pages/activity/index?current=0",animationType:"pop-in",animationDuration:200,success:function(t){var e=getCurrentPages()[0];void 0!=e&&null!=e&&e.parmentOnLoad()}})}})}catch(a){}}})},formReset:function(){},handleGetCon:function(t){this.activity.content=t.detail.value}}};e.default=s}).call(this,a("0de9")["default"],a("6e42")["default"])},"26e7":function(t,e,a){"use strict";(function(t){a("fc8c"),a("921b");i(a("66fd"));var e=i(a("e8e0"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"4aa8":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},a1aa:function(t,e,a){},b01b:function(t,e,a){"use strict";a.r(e);var i=a("262c"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=n.a},b4d9:function(t,e,a){"use strict";var i=a("a1aa"),n=a.n(i);n.a},e8e0:function(t,e,a){"use strict";a.r(e);var i=a("4aa8"),n=a("b01b");for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);a("b4d9");var c=a("2877"),u=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports}},[["26e7","common/runtime","common/vendor"]]]);
});
require('pages/activity/addActivity.js');
__wxRoute = 'pages/login/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/index.js';

define('pages/login/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{"16ef":function(e,t,a){"use strict";var n=a("ddf5"),o=a.n(n);o.a},"212f":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"3cca":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(a("222a"));function s(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{loading:!1,isTitleBar:0,tabList:[{label:"会员登录"},{label:"红娘登录"}],userInfo:{userName:"",password:""},token:""}},methods:{formSubmit:function(t){this.loading=!0;var a=[{name:"userName",required:!0,type:"text",errmsg:"请输入账号"},{name:"password",type:"required",errmsg:"请输入密码"}],o=this.$validate.validate(this.userInfo,a);if(console.log(e(o," at pages\\login\\index.vue:74")),!o.isOk)return n.showToast({icon:"none",title:o.errmsg}),this.loading=!1,!1;var s=this.userInfo;this.isTitleBar?this.jokRequst(s):this.vipRequst(s)},vipRequst:function(t){var a=this;n.request({url:"/common/login",data:t,method:"POST",success:function(t){a.loading=!1,n.setStorageSync("token",t.data.data),n.showToast({title:"登录成功！",icon:"success",showCancel:!1,success:function(){n.setStorage({key:"token",data:t.data.data,success:function(){var t=this;console.log(e(n.getStorageSync("token")," at pages\\login\\index.vue:111")),o.default.baseRequest({url:"/member/queryById",method:"get",success:function(a){try{t.userInfo=a.data.data,console.log(e(a.data.data," at pages\\login\\index.vue:119")),n.setStorage({key:"userInfo",data:a.data.data,success:function(){n.switchTab({url:"/pages/index/index",animationType:"pop-in",animationDuration:200,success:function(){n.hideToast()}})}})}catch(o){}}})}})}})}})},jokRequst:function(t){var a=this;n.request({url:"/common/login",data:t,method:"POST",success:function(t){a.loading=!1,n.setStorageSync("token",t.data.data),n.showToast({title:"登录成功！",icon:"success",showCancel:!1,success:function(){n.setStorage({key:"token",data:t.data.data,success:function(){var t=this;console.log(e(n.getStorageSync("token")," at pages\\login\\index.vue:166")),o.default.baseRequest({url:"/matchmaker/queryById",method:"get",success:function(a){try{t.userInfo=a.data.data,console.log(e(a.data.data," at pages\\login\\index.vue:174")),n.setStorage({key:"userInfo",data:a.data.data,success:function(){n.switchTab({url:"/pages/index/index",animationType:"pop-in",animationDuration:200,success:function(){n.hideToast()}})}})}catch(o){}}})}})}})}})},formReset:function(t){console.log(e("清空数据"," at pages\\login\\index.vue:204"))},handleCheckLabel:function(e){this.isTitleBar=e}}};t.default=i}).call(this,a("0de9")["default"],a("6e42")["default"])},"3ce2":function(e,t,a){"use strict";(function(e){a("fc8c"),a("921b");n(a("66fd"));var t=n(a("77d4"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"77d4":function(e,t,a){"use strict";a.r(t);var n=a("212f"),o=a("a0dc");for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);a("16ef");var i=a("2877"),u=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},a0dc:function(e,t,a){"use strict";a.r(t);var n=a("3cca"),o=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},ddf5:function(e,t,a){}},[["3ce2","common/runtime","common/vendor"]]]);
});
require('pages/login/index.js');
__wxRoute = 'pages/register/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/index.js';

define('pages/register/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/index"],{"0960":function(e,t,n){"use strict";n.r(t);var s=n("7ccc"),o=n.n(s);for(var r in s)"default"!==r&&function(e){n.d(t,e,function(){return s[e]})}(r);t["default"]=o.a},"22a6":function(e,t,n){"use strict";(function(e){n("fc8c"),n("921b");s(n("66fd"));var t=s(n("3d29"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"2d1e":function(e,t,n){"use strict";var s=n("4535"),o=n.n(s);o.a},"3d29":function(e,t,n){"use strict";n.r(t);var s=n("7fb3"),o=n("0960");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("2d1e");var a=n("2877"),i=Object(a["a"])(o["default"],s["a"],s["b"],!1,null,null,null);t["default"]=i.exports},4535:function(e,t,n){},"7ccc":function(e,t,n){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return n.e("components/xyz-tab/xyz-tab").then(n.bind(null,"8ede"))},r={components:{xyzTab:o},data:function(){return{tabList:[{label:"会员注册"},{label:"红娘注册"}],btnDisable:!1,btnText:"获取验证码",loading:!1,isTitleBar:0,userInfo:{phone:"",inviteCode:"",sms:"",password:"",confirmpassword:""}}},onLoad:function(){e.setStorage({key:"storage_key",data:"hello",success:function(){console.log(s("success"," at pages\\register\\index.vue:122"))}}),e.getStorage({key:"userInfo",success:function(e){console.log(s(e," at pages\\register\\index.vue:128"))}})},methods:{formSubmit:function(){var t=this;this.loading=!0;var n=[{name:"phone",required:!0,type:"text",errmsg:"请输入账号"},{name:"password",type:"required",errmsg:"请输入密码"},{name:"confirmpassword",type:"required",errmsg:"请输入确认密码"},{name:"sms",type:"required",errmsg:"请输入验证码"}],o=this.$validate.validate(this.userInfo,n);if(!o.isOk)return e.showToast({icon:"none",title:o.errmsg}),!1;var r=this.userInfo,a=r.password,i=r.confirmpassword;if(a!==i)return e.showToast({icon:"none",title:"两次密码不一致"}),!1;var u=this.userInfo;u.type=this.isTitleBar,console.log(s(this.isTitleBar," at pages\\register\\index.vue:181")),e.request({url:"/common/register",data:u,method:"POST",success:function(n){console.log(s(n.data," at pages\\register\\index.vue:187"));var o=n.data.data;try{e.setStorageSync("userInfo",o),t.loading=!1,e.showToast({title:"注册成功！",icon:"success",showCancel:!1}),setTimeout(function(){t.$router.push("/pages/login/index")},1200)}catch(r){}}})},formReset:function(e){console.log(s("清空数据"," at pages\\register\\index.vue:208"))},handleCheckLabel:function(e){this.isTitleBar=e},handleGetSms:function(){var t=this,n=[{name:"phone",required:!0,type:"text",errmsg:"请输入电话号码"}],o=this.$validate.validate(this.userInfo,n);if(!o.isOk)return e.showToast({icon:"none",title:o.errmsg}),!1;var r=5,a=setInterval(function(){0==r?(clearInterval(a),t.btnText="再次获取验证码",t.btnDisable=!1):(t.btnText="".concat(r,"s后，重新获取"),r--,t.btnDisable=!0)},1e3);e.request({url:"/common/querySms",data:{phone:this.userInfo.phone},method:"get",success:function(n){e.showToast({title:"短信已发送，请注意查收！",icon:"success",showCancel:!1,success:function(){console.log(s(t.userInfo," at pages\\register\\index.vue:253")),t.userInfo.sms=n.data.data,e.hideToast()}})}})}}};t.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},"7fb3":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o})}},[["22a6","common/runtime","common/vendor"]]]);
});
require('pages/register/index.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

