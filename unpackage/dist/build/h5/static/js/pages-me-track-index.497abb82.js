(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-track-index"],{"0390c":function(t,a,e){"use strict";var i=e("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("75fc")),o=i(e("e54a")),r={components:{uniIcons:o.default},props:{dynamicList:{type:Array,default:function(){return[]}}},data:function(){return{imageList:[]}},methods:{pictureUrl:function(t){return JSON.parse(t)},handleMoveDynamic:function(t){var a=this;uni.showModal({title:"提示",content:"确定删除这条动态？",success:function(e){if(e.confirm){var i=t.id;a.$emit("removeDynamic",i)}else e.cancel}})},previewImage:function(t){var a=t.target.dataset.src,e=[];e=(0,n.default)(this.dynamicList.map(function(t){return JSON.parse(t.pictureUrl)})),this.imageList=e.flat(),uni.previewImage({current:a,urls:this.imageList})}}};a.default=r},"03e3":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{},[e("nav-bar",{attrs:{transparentFixedFontColor:"#fff",fontColor:"#fff",bgColor:"#ff77aa",type:"transparentFixed",title:"我的动态"}},[e("v-uni-view",{staticClass:"transparent_fixed_preview",attrs:{slot:"transparentFixedRight"},on:{click:function(a){a=t.$handleEvent(a),t.handleTrack(a)}},slot:"transparentFixedRight"},[e("uni-icons",{attrs:{type:"plus",size:"26",color:"#fff"}})],1),e("v-uni-view",{staticClass:"preview",attrs:{slot:"right"},on:{click:function(a){a=t.$handleEvent(a),t.handleTrack(a)}},slot:"right"},[e("uni-icons",{attrs:{type:"plus",size:"26",color:"#fff"}})],1)],1),e("v-uni-view",{staticClass:"backImg"},[e("v-uni-image",{staticClass:"image",attrs:{src:"/static/header.jpeg",mode:""}}),e("v-uni-text",{staticClass:"name"},[t._v(t._s(t.userInfo.nickName))]),e("v-uni-view",{staticClass:"header"},[e("v-uni-image",{staticClass:"image",attrs:{src:t.userAvatar(),mode:""}})],1)],1),e("v-uni-view",{staticClass:"desc text-two-line"},[t._v(t._s(t.userInfo.declaration))]),[e("list",{attrs:{dynamicList:t.dynamicList},on:{removeDynamic:function(a){a=t.$handleEvent(a),t.removeDynamic(a)}}})],e("uni-load-more",{attrs:{status:t.loadMore}})],2)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},1570:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".list-content[data-v-26609834]{margin-top:8px;padding:8px;background-color:#fff}.list-header[data-v-26609834]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.list-header .list-dateTime[data-v-26609834]{font-size:16px;font-weight:700}.list-header .mini-btn[data-v-26609834]{float:right}.list-dateTime[data-v-26609834]{color:#353535;font-size:16px}.list-image-wrapper[data-v-26609834]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px}.list-image-wrapper .list-image-item[data-v-26609834]{height:80px;width:80px;margin-right:8px}",""])},"2b3d":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-22809c5f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-load-more__text[data-v-22809c5f]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-22809c5f]{position:relative;height:24px;width:24px;margin-right:10px}.uni-load-more__img>.load[data-v-22809c5f]{position:absolute}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-22809c5f]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-22809c5f .96s ease infinite;animation:load-data-v-22809c5f .96s ease infinite}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-22809c5f]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-22809c5f]:nth-child(2){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-22809c5f]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-22809c5f]:nth-child(4){top:11px;left:0}.uni-load-more__img>.loader-android[data-v-22809c5f]{position:absolute;left:0;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;border:solid 2px #777;border-radius:50%;border-bottom-color:rgba(0,0,0,0)!important;-webkit-animation:loader-android-data-v-22809c5f 1s 0s linear infinite;animation:loader-android-data-v-22809c5f 1s 0s linear infinite}.load1[data-v-22809c5f],.load2[data-v-22809c5f],.load3[data-v-22809c5f]{height:24px;width:24px}.load2[data-v-22809c5f]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-22809c5f]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-22809c5f]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-22809c5f]:first-child{-webkit-animation-delay:.08s;animation-delay:.08s}.load3 .uni-load-view_wrapper[data-v-22809c5f]:first-child{-webkit-animation-delay:.16s;animation-delay:.16s}.load1 .uni-load-view_wrapper[data-v-22809c5f]:nth-child(2){-webkit-animation-delay:.24s;animation-delay:.24s}.load2 .uni-load-view_wrapper[data-v-22809c5f]:nth-child(2){-webkit-animation-delay:.32s;animation-delay:.32s}.load3 .uni-load-view_wrapper[data-v-22809c5f]:nth-child(2){-webkit-animation-delay:.4s;animation-delay:.4s}.load1 .uni-load-view_wrapper[data-v-22809c5f]:nth-child(3){-webkit-animation-delay:.48s;animation-delay:.48s}.load2 .uni-load-view_wrapper[data-v-22809c5f]:nth-child(3){-webkit-animation-delay:.56s;animation-delay:.56s}.load3 .uni-load-view_wrapper[data-v-22809c5f]:nth-child(3){-webkit-animation-delay:.64s;animation-delay:.64s}.load1 .uni-load-view_wrapper[data-v-22809c5f]:nth-child(4){-webkit-animation-delay:.72s;animation-delay:.72s}.load2 .uni-load-view_wrapper[data-v-22809c5f]:nth-child(4){-webkit-animation-delay:.8s;animation-delay:.8s}.load3 .uni-load-view_wrapper[data-v-22809c5f]:nth-child(4){-webkit-animation-delay:.88s;animation-delay:.88s}@-webkit-keyframes load-data-v-22809c5f{0%{opacity:1}to{opacity:.2}}@-webkit-keyframes loader-android-data-v-22809c5f{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""])},3485:function(t,a,e){"use strict";var i=e("ebbe"),n=e.n(i);n.a},"4e71":function(t,a,e){"use strict";e.r(a);var i=e("0390c"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},"53b3":function(t,a,e){"use strict";var i=e("ed43"),n=e.n(i);n.a},"58ba":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={baseRequest:function(t){try{var a=uni.getStorageSync("token");a?(t.header?t.header["Authorization"]=a.token:t.header={Authorization:a.token},t.url=t.url,uni.request(t)):uni.showToast({title:"用户信息不存在"})}catch(e){uni.showToast({title:"用户信息不存在"})}}},n=i;a.default=n},"5f08":function(t,a,e){"use strict";var i=e("be50"),n=e.n(i);n.a},"741e":function(t,a,e){"use strict";e.r(a);var i=e("76c3"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},"75fc":function(t,a,e){"use strict";e.r(a);var i=e("a745"),n=e.n(i);function o(t){if(n()(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}var r=e("774e"),s=e.n(r),d=e("c8bb"),l=e.n(d);function c(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return o(t)||c(t)||u()}e.d(a,"default",function(){return f})},"76c3":function(t,a,e){"use strict";var i=e("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("75fc")),o=i(e("8c23")),r=i(e("091d")),s=i(e("e54a")),d=i(e("c426")),l=i(e("58ba")),c=i(e("9471")),u={components:{uniList:o.default,uniListItem:r.default,list:d.default,uniIcons:s.default,uniLoadMore:c.default},data:function(){return{userInfo:uni.getStorageSync("userInfo"),loadMore:"more",pageObj:{current:0},dynamicList:[]}},onLoad:function(){this.userInfo=uni.getStorageSync("userInfo"),this.getDynamics()},onPullDownRefresh:function(){this.pageObj.current=0,this.dynamicList=[],this.getDynamics()},methods:{getDynamics:function(){var t=this;this.pageObj.current++,l.default.baseRequest({url:"dynamic/queryPage",data:this.pageObj,method:"get",success:function(a){t.loading=!1;try{var e=a.data.data,i=(e.current,e.pages,e.size,e.total,e.records);i.length<=0?(t.loadMore="noMore",--t.pageObj.current):(t.loadMore="more",t.dynamicList=[].concat((0,n.default)(t.dynamicList),(0,n.default)(i))),uni.stopPullDownRefresh()}catch(o){}}})},onReachBottom:function(){this.loadMore="loading",this.getDynamics()},userAvatar:function(){return this.userInfo.userAvatar?this.userInfo.userAvatar:"/static/icon/defult_header.jpg"},handleTrack:function(){uni.navigateTo({url:"addTrack",animationDuration:500})},removeDynamic:function(t){var a=this;console.log(t);var e={id:t,deleted:!0};l.default.baseRequest({url:"dynamic/save",data:e,method:"post",success:function(t){console.log(t);try{uni.showToast({title:"删除成功",icon:"none",success:function(){a.pageObj.current=0,a.dynamicList=[],a.getDynamics()}})}catch(e){}}})}}};a.default=u},"815e":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",t._l(t.dynamicList,function(a,i){return e("v-uni-view",{key:i,staticClass:"list-content"},[e("v-uni-view",{staticClass:"list-header"},[e("v-uni-text",{staticClass:"list-dateTime"},[t._v(t._s(a.rawAddTime))]),e("uni-icons",{attrs:{type:"trash",color:"red",size:"18"},on:{click:function(e){e=t.$handleEvent(e),t.handleMoveDynamic(a)}}})],1),e("v-uni-text",{staticClass:"list-dateTime"},[t._v(t._s(a.content))]),e("v-uni-view",{staticClass:"list-image-wrapper"},t._l(t.pictureUrl(a.pictureUrl),function(a,i){return e("v-uni-view",{key:i,staticClass:"list-image-item"},[e("v-uni-image",{staticClass:"image",attrs:{src:a,"data-src":a,mode:""},on:{click:function(a){a=t.$handleEvent(a),t.previewImage(a)}}})],1)}),1)],1)}),1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},8638:function(t,a,e){"use strict";e.r(a);var i=e("ad5d"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},9242:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".backImg[data-v-3cf8f4c4]{margin-top:-45px;height:250px;width:100%;position:relative}.backImg .name[data-v-3cf8f4c4]{display:block;text-align:right;position:absolute;top:215px;right:100px;color:#fff;font-weight:700;font-size:20px}.backImg .header[data-v-3cf8f4c4]{width:80px;height:80px;position:absolute;border:2px solid #fff;right:10px;top:200px}.desc[data-v-3cf8f4c4]{margin-top:30px;font-size:14px;padding:0 8px;color:#353535}",""])},9471:function(t,a,e){"use strict";e.r(a);var i=e("c73f"),n=e("8638");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("53b3");var r=e("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"22809c5f",null);a["default"]=s.exports},ad5d:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=uni.getSystemInfoSync().platform,n={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:i}}};a.default=n},be50:function(t,a,e){var i=e("1570");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("9cbc5e5c",i,!0,{sourceMap:!1,shadowMode:!1})},c426:function(t,a,e){"use strict";e.r(a);var i=e("815e"),n=e("4e71");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("5f08");var r=e("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"26609834",null);a["default"]=s.exports},c73f:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-load-more"},["circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform?e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"loader-android",style:{borderColor:t.color}})],1):e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},da16:function(t,a,e){"use strict";e.r(a);var i=e("03e3"),n=e("741e");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("3485");var r=e("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"3cf8f4c4",null);a["default"]=s.exports},ebbe:function(t,a,e){var i=e("9242");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("4ac9f354",i,!0,{sourceMap:!1,shadowMode:!1})},ed43:function(t,a,e){var i=e("2b3d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0e0abc72",i,!0,{sourceMap:!1,shadowMode:!1})}}]);