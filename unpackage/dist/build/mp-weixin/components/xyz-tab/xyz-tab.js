(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/xyz-tab/xyz-tab"],{"2af0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{tabList:{type:Array,default:[]},tabActiveIdx:{type:Number,default:0}},data:function(){return{tabIdx:0,scrollLeft:0}},computed:{tabLen:function(){return!(this.tabList.length>5)}},watch:{tabActiveIdx:function(t,e){this.tabSelect(t)}},methods:{tabSelect:function(t){this.tabIdx=t,this.scrollLeft=30*t,this.$emit("tabSelect",t)}}};e.default=a},"3c70":function(t,e,n){},"87c0":function(t,e,n){"use strict";n.r(e);var a=n("2af0"),u=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=u.a},"8ede":function(t,e,n){"use strict";n.r(e);var a=n("b5d7"),u=n("87c0");for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);n("ea0e");var r=n("2877"),i=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,"049ac425",null);e["default"]=i.exports},b5d7:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},ea0e:function(t,e,n){"use strict";var a=n("3c70"),u=n.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/xyz-tab/xyz-tab-create-component',
    {
        'components/xyz-tab/xyz-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8ede"))
        })
    },
    [['components/xyz-tab/xyz-tab-create-component']]
]);                
