(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editUserAssetStatus"],{"04db":function(a,t,e){"use strict";e.r(t);var i=e("c9a8"),n=e("a029");for(var o in n)"default"!==o&&function(a){e.d(t,a,function(){return n[a]})}(o);e("e1cc");var r=e("2877"),l=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"7a61b7c8",null);t["default"]=l.exports},"1b4f":function(a,t,e){var i=e("997c");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("56dee58d",i,!0,{sourceMap:!1,shadowMode:!1})},"222a":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={baseRequest:function(a){try{var t=uni.getStorageSync("token");t?(a.header?a.header["Authorization"]=t.token:a.header={Authorization:t.token},uni.request(a)):(uni.showToast({title:"用户信息不存在,请登录",icon:"none"}),setTimeout(function(){uni.reLaunch({url:"/pages/login/index",success:function(){uni.hideToast()}})},2e3))}catch(e){uni.showToast({title:"用户信息不存在"})}},logOut:function(){try{uni.clearStorageSync(),uni.navigateTo({url:"/pages/login/index",animationType:"pop-in",animationDuration:200})}catch(a){}}},n=i;t.default=n},"354c":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"contanner"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-form",{on:{submit:function(t){t=a.$handleEvent(t),a.formSubmit(t)},reset:function(t){t=a.$handleEvent(t),a.formReset(t)}}},[e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-view",{staticClass:"form-lable"},[a._v("收入")]),e("v-uni-view",{staticClass:"form-inpput"},[e("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写每月收入情况"},model:{value:a.userDetailInfo.income,callback:function(t){a.$set(a.userDetailInfo,"income",t)},expression:"userDetailInfo.income"}})],1)],1),e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-view",{staticClass:"form-lable"},[a._v("住房情况")]),e("v-uni-view",{staticClass:"form-inpput"},[e("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写住房情况"},model:{value:a.userDetailInfo.housing,callback:function(t){a.$set(a.userDetailInfo,"housing",t)},expression:"userDetailInfo.housing"}})],1)],1),e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-view",{staticClass:"form-lable"},[a._v("是否有车")]),e("v-uni-view",{staticClass:"form-inpput"},[e("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写是否购车"},model:{value:a.userDetailInfo.vehicle,callback:function(t){a.$set(a.userDetailInfo,"vehicle",t)},expression:"userDetailInfo.vehicle"}})],1)],1),e("uni-tag",{staticStyle:{display:"inline-block"},attrs:{type:"error",size:"small",inverted:!0,text:a.compLevel}}),e("br"),e("br"),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary",loading:a.loading,"form-type":"submit"}},[a._v("提交")])],1)],1)],1)],1)},n=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return n})},"4d6c":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isChilds=t.activeUser=t.jobYars=t.marrys=t.Vips=t.educations=t.years=t.heights=void 0;var i=function(){for(var a=["请选择身高"],t=140;t<=240;t++)a.push("".concat(t));return a}();t.heights=i;var n=function(a,t){for(var e=["请选择年龄"],i=a;i<=t;i++)e.push("".concat(i));return e}(18,60);t.years=n;var o=["请选择学历","小学","初中","高中","全日制专科","全日制本科","硕士研究生","博士研究生"];t.educations=o;var r=[{val:1,label:"普通会员"},{val:2,label:"银卡会员"},{val:3,label:"金卡会员"},{val:4,label:"砖石会员"},{val:5,label:"黑卡会员"}];t.Vips=r;var l=[{val:"",label:"请选择婚姻状况"},{val:1,label:"未婚"},{val:2,label:"离异"},{val:3,label:"丧偶"}];t.marrys=l;var d=[{val:"",label:"请选择是否有小孩"},{val:0,label:"有"},{val:1,label:"无"}];t.isChilds=d;var s=function(a,t){for(var e=["请选择工作年限"],i=a;i<=t;i++)e.push("".concat(i));return e}(1,20);t.jobYars=s;var c=function(a,t){for(var e=["请选择活动人数"],i=a;i<=t;i++)e.push("".concat(i));return e}(1,100);t.activeUser=c},"68f7":function(a,t,e){"use strict";e.r(t);var i=e("354c"),n=e("b114");for(var o in n)"default"!==o&&function(a){e.d(t,a,function(){return n[a]})}(o);e("f52e");var r=e("2877"),l=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"a78849ac",null);t["default"]=l.exports},"7c7f":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[String,Boolean],defalut:!1},inverted:{type:[String,Boolean],defalut:!1},circle:{type:[String,Boolean],defalut:!1},mark:{type:[String,Boolean],defalut:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};t.default=i},"997c":function(a,t,e){t=a.exports=e("2350")(!1),t.push([a.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 主页面样式 */.uni-body[data-v-7a61b7c8],uni-page[data-v-7a61b7c8],uni-page-head .uni-page-head[data-v-7a61b7c8]{max-width:750px;min-width:320px;margin:auto}.uni-tag[data-v-7a61b7c8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-7a61b7c8]{border-radius:15px}.uni-tag--mark[data-v-7a61b7c8]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-7a61b7c8]{opacity:.5}.uni-tag--small[data-v-7a61b7c8]{height:20px;padding:0 8px;line-height:20px;font-size:%?24?%}.uni-tag--default[data-v-7a61b7c8]{color:#333;font-size:%?28?%}.uni-tag-text--small[data-v-7a61b7c8]{font-size:%?24?%!important}.uni-tag-text[data-v-7a61b7c8]{color:#fff;font-size:%?28?%}.uni-tag--default[data-v-7a61b7c8]{color:#333;font-size:%?28?%}.uni-tag-text--primary[data-v-7a61b7c8]{color:#f7a!important}.uni-tag-text--success[data-v-7a61b7c8]{color:#4cd964!important}.uni-tag-text--warning[data-v-7a61b7c8]{color:#f0ad4e!important}.uni-tag-text--error[data-v-7a61b7c8]{color:#dd524d!important}.uni-tag--primary[data-v-7a61b7c8]{color:#fff;background-color:#f7a;border-width:%?1?%;border-style:solid;border-color:#f7a}.primary-uni-tag--inverted[data-v-7a61b7c8]{color:#f7a;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f7a}.uni-tag--success[data-v-7a61b7c8]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-7a61b7c8]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-7a61b7c8]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-7a61b7c8]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-7a61b7c8]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-7a61b7c8]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-7a61b7c8]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}',""])},a029:function(a,t,e){"use strict";e.r(t);var i=e("7c7f"),n=e.n(i);for(var o in i)"default"!==o&&function(a){e.d(t,a,function(){return i[a]})}(o);t["default"]=n.a},abd5:function(a,t,e){t=a.exports=e("2350")(!1),t.push([a.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 主页面样式 */\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */$uni-color-primary:#f7a;$uni-color-success:#4cd964;$uni-color-warning:#f0ad4e;$uni-color-error:#dd524d;\n/* 文字基本颜色 */$uni-text-color:#333;\n/*基本色\r */$uni-text-color-inverse:#fff;\n/*反色\r */$uni-text-color-grey:#999;\n/*辅助灰色，如加载更多的提示信息\r */$uni-text-color-placeholder:grey;$uni-text-color-disable:silver;\n/* 背景颜色 */$uni-bg-color:#fff;$uni-bg-color-grey:#f8f8f8;$uni-bg-color-hover:#f1f1f1;\n/*点击状态颜色\r */$uni-bg-color-mask:rgba(0,0,0,.4);\n/*遮罩颜色\r */$uni-theme-color:#f7a;\n/* 边框颜色 */$uni-border-color:#c8c7cc;\n/* 尺寸变量 */\n/* 文字尺寸 */$uni-font-size-sm:24upx;$uni-font-size-base:28upx;$uni-font-size-lg:32upx;\n/* 图片尺寸 */$uni-img-size-sm:40upx;$uni-img-size-base:52upx;$uni-img-size-lg:80upx;\n/* Border Radius */$uni-border-radius-sm:4upx;$uni-border-radius-base:6upx;$uni-border-radius-lg:12upx;$uni-border-radius-circle:50%;\n/* 水平间距 */$uni-spacing-row-sm:10px;$uni-spacing-row-base:20upx;$uni-spacing-row-lg:30upx;\n/* 垂直间距 */$uni-spacing-col-sm:8upx;$uni-spacing-col-base:16upx;$uni-spacing-col-lg:24upx;\n/* 透明度 */$uni-opacity-disabled:.3;\n/* 组件禁用态的透明度\r */\n/* 文章场景相关 */$uni-color-title:#2c405a;\n/* 文章标题颜色\r */$uni-font-size-title:40upx;$uni-color-subtitle:#555;\n/* 二级标题颜色\r */$uni-font-size-subtitle:36upx;$uni-color-paragraph:#3f536e;\n/* 文章段落颜色\r */$uni-font-size-paragraph:30upx;\n/* 主页面样式 */.uni-body[data-v-a78849ac],uni-page[data-v-a78849ac],uni-page-head .uni-page-head[data-v-a78849ac]{max-width:750px;min-width:320px;margin:auto}\n/* 主页面样式 */.uni-body[data-v-a78849ac],uni-page[data-v-a78849ac]{margin:auto;max-width:750px;min-width:320px}uni-page-body[data-v-a78849ac]{background-color:#fafafa}uni-view[data-v-a78849ac]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:$uni-font-size-base}uni-button[data-v-a78849ac]{font-size:14px;line-height:2.3}\n/* 清除浮动 */.clearfix[data-v-a78849ac]{*zoom:1}.clearfix[data-v-a78849ac]:after{content:".";display:block;height:0;visibility:hidden;clear:both}\n/* 表单样式 */.uni-form-item[data-v-a78849ac]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-a78849ac]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-a78849ac],.form-inpput .uni-input-input[data-v-a78849ac]{font-size:13px}.form-inpput .form-radio-group[data-v-a78849ac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-a78849ac]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-a78849ac]{font-size:14px;height:35px}.form-lable[data-v-a78849ac]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-a78849ac]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-a78849ac]{width:auto}.form-inpput-textarea[data-v-a78849ac]{height:150px}.verification-wrapper[data-v-a78849ac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-a78849ac]{-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.verification-btn[data-v-a78849ac]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\n/* 卡片阴影 */.card-shadow[data-v-a78849ac]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\n/* 图片 */.image-wrapper[data-v-a78849ac]{overflow:hidden}.image[data-v-a78849ac]{width:100%;height:100%}\n/* 两行超出显示··· */.text-two-line[data-v-a78849ac]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\n/* 加载跟多 */.loadMore[data-v-a78849ac]{color:#ccc;line-height:30px}.rotate[data-v-a78849ac]{-webkit-animation:myMove-data-v-a78849ac 2s linear infinite;animation:myMove-data-v-a78849ac 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-a78849ac{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-a78849ac{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-a78849ac]{position:absolute;bottom:30px;width:100%;padding:0 80px}.bottom-tips[data-v-a78849ac]{position:absolute;bottom:8px;text-align:center;width:100%;font-size:12px;color:#adadad}\n/* 轮播图样式开始 */.uni-padding-wrap[data-v-a78849ac]{width:100%}.swiper-item[data-v-a78849ac]{width:100%;height:100%}.swiper-item uni-image[data-v-a78849ac]{width:100%;height:176px}\n/* 轮播图样式结束 */\n/* 标签样式 */.item-lable[data-v-a78849ac]{padding:0 6px;float:left;border:1px solid #dedede;margin:0 4px 4px 0;line-height:20px}.item-lable-active[data-v-a78849ac]{border:1px solid #f7a;color:#f7a}\n/* 表单样式 */.edit-input[data-v-a78849ac]{display:block}.edit-input .form-inpput[data-v-a78849ac]{width:100%;background-color:rgba(0,0,0,0);height:40px;line-height:40px}.edit-input .form-address[data-v-a78849ac]{border-bottom:1px solid #a0a0a0}.edit-input .form-inpput uni-input[data-v-a78849ac]{height:40px;line-height:40px;border-bottom:1px solid #a0a0a0}.edit-input .form-inpput .picker[data-v-a78849ac]{font-size:14px;height:35px;border-bottom:1px solid #a0a0a0}\n/* 表单段\r */.form-input-select[data-v-a78849ac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fafafa}.form-input-select>.form-input-item[data-v-a78849ac]{-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;background-color:#fff;text-align:center}.form-input-select>.input-line[data-v-a78849ac]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center}.uni-body[data-v-a78849ac],uni-page[data-v-a78849ac],uni-page-head .uni-page-head[data-v-a78849ac]{max-width:750px;min-width:320px;margin:auto}.img-wrapper[data-v-a78849ac]{height:200px}.bar-wrapper[data-v-a78849ac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-a78849ac]{border-bottom:%?2?% solid #f7a;line-height:%?80?%;margin-left:10px;font-size:16px}.content[data-v-a78849ac]{padding:%?20?%}.tips[data-v-a78849ac]{color:#8f8f94;line-height:35px;font-size:14px}body.?%PAGE?%[data-v-a78849ac]{background-color:#fafafa}',""])},b114:function(a,t,e){"use strict";e.r(t);var i=e("c9c5"),n=e.n(i);for(var o in i)"default"!==o&&function(a){e.d(t,a,function(){return i[a]})}(o);t["default"]=n.a},ba997:function(a,t,e){var i=e("abd5");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("1111871e",i,!0,{sourceMap:!1,shadowMode:!1})},c9a8:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.text?e("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+a.type,!0===a.disabled||"true"===a.disabled?"uni-tag--disabled":"",!0===a.inverted||"true"===a.inverted?a.type+"-uni-tag--inverted":"",!0===a.circle||"true"===a.circle?"uni-tag--circle":"",!0===a.mark||"true"===a.mark?"uni-tag--mark":"","uni-tag--"+a.size],on:{click:function(t){t=a.$handleEvent(t),a.onClick()}}},[e("v-uni-text",{class:["default"===a.type?"uni-tag--default":"uni-tag-text",!0===a.inverted||"true"===a.inverted?"uni-tag-text--"+a.type:"","small"===a.size?"uni-tag-text--small":""]},[a._v(a._s(a.text))])],1):a._e()},n=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return n})},c9c5:function(a,t,e){"use strict";var i=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("7514");var n=e("4d6c"),o=i(e("222a")),r=i(e("04db")),l={components:{uniTag:r.default},data:function(){return{isAdress:0,loading:!1,vips:n.Vips,vipIndex:0,userDetailInfo:{income:"",housing:"",vehicle:""}}},computed:{compLevel:function(){var a=this,t="";return n.Vips.find(function(e,i){e.val==a.userDetailInfo.level&&(console.log("你设置了".concat(e.label,"以上会员可查看！")),t="你设置了".concat(e.label,"以上会员可查看！(如想修改请移步私密设置)"))}),t}},onLoad:function(a){var t=JSON.parse(a.info),e=t.income,i=t.housing,n=t.vehicle,o=t.level;this.userDetailInfo={income:e||"",housing:i||"",vehicle:n||"",level:o}},methods:{formSubmit:function(a){var t=this,e=[{name:"income",required:!0,type:"text",errmsg:"请填写每月收入情况"},{name:"housing",required:!0,type:"text",errmsg:"请填写住房情况"},{name:"housing",required:!0,type:"text",errmsg:"请填写是否购车"}];this.userDetailInfo.id=uni.getStorageSync("userInfo").id,console.log(this.userDetailInfo);var i=this.$validate.validate(this.userDetailInfo,e);if(!i.isOk)return uni.showToast({icon:"none",title:i.errmsg}),!1;o.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(e){try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),t.userInfo=e.data.data,uni.setStorageSync("userInfo",e.data.data),setTimeout(function(){uni.switchTab({url:"/pages/me/index",animationType:"pop-in",animationDuration:200})},1200)}catch(a){}}})},formReset:function(a){console.log("清空数据")}}};t.default=l},e1cc:function(a,t,e){"use strict";var i=e("1b4f"),n=e.n(i);n.a},f52e:function(a,t,e){"use strict";var i=e("ba997"),n=e.n(i);n.a}}]);