(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/zhouWei-navBar/index"],{"17fd":function(t,n,e){},"24f6":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},"6f60":function(t,n,e){"use strict";var o=e("17fd"),r=e.n(o);r.a},"729f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=["pages/navList"],o="/pages/index/index",r=["#FFF","#FFFFFF","white","rgb(255,255,255)","rgba(255,255,255,1)"],i={props:{backState:{default:function(){return 1e3}},home:{type:Boolean,default:function(){return!1}},bgColor:{type:String,default:function(){return"#FFF"}},fontColor:{type:String,default:function(){return"#000"}},titleCenter:{type:Boolean,default:function(){return!0}},title:{type:String,default:function(){return""}},type:{type:String,default:function(){return"fixed"}},transparentFixedFontColor:{type:String,default:function(){return"#000"}}},data:function(){return{firstPage:!1,transparentValue:1,navTitle:"",navFontColor:"#000",navBgColor:"#FFF",navTransparentFixedFontColor:"#000",themeBgColor:!1,statusBarHeight:0}},computed:{back:function(){return 1e3==this.backState||3e3==this.backState},navFixed:function(){return"transparentFixed"==this.type||"fixed"==this.type},navLine:function(){return"transparent"!==this.type&&r.includes(this.navBgColor)},isWhite:function(){return r.includes(this.navFontColor)},isTwoBtn:function(){return(1e3==this.backState||3e3==this.backState)&&this.home&&!this.firstPage}},watch:{title:function(t){this.navTitle=t},fontColor:function(t){this.navFontColor=t,this.settingColor()},bgColor:function(t){"themeBgColor"==t?(this.themeBgColor=!0,this.navBgColor=""):this.navBgColor=t},transparentFixedFontColor:function(t){this.navTransparentFixedFontColor=t}},created:function(){this.navTitle=this.title,this.navFontColor=this.fontColor,"themeBgColor"==this.bgColor?(this.themeBgColor=!0,this.navBgColor=""):this.navBgColor=this.bgColor,this.navTransparentFixedFontColor=this.transparentFixedFontColor,this.statusBarHeight=t.getSystemInfoSync()["statusBarHeight"];var n=this;"transparentFixed"==this.type&&(this.transparentValue=0),this.settingColor();var o=getCurrentPages(),r=o.length;1!=r||e.includes(o[0].route)||(this.firstPage=!0),"transparentFixed"==this.type&&(o[r-1].onPageScroll=function(t){n.$emit("scroll",t),t.scrollTop>180?n.transparentValue=1:n.transparentValue=t.scrollTop/180})},methods:{onBackPage:function(){3e3==this.backState?this.$emit("backClick"):t.navigateBack()},onBackHome:function(){t.switchTab({url:o})},settingColor:function(){r.includes(this.navFontColor)?t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:this.navBgColor}):t.setNavigationBarColor({frontColor:"#000000",backgroundColor:this.navBgColor})}}};n.default=i}).call(this,e("543d")["default"])},"73b8":function(t,n,e){"use strict";e.r(n);var o=e("729f"),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=r.a},"8f88":function(t,n,e){"use strict";e.r(n);var o=e("24f6"),r=e("73b8");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("6f60");var a=e("2877"),s=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"54b74894",null);n["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/zhouWei-navBar/index-create-component',
    {
        'components/zhouWei-navBar/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8f88"))
        })
    },
    [['components/zhouWei-navBar/index-create-component']]
]);                
