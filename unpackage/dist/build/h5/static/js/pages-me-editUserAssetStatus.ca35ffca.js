(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editUserAssetStatus"],{"04db":function(e,t,a){"use strict";a.r(t);var i=a("c9a8"),o=a("a029");for(var n in o)"default"!==n&&function(e){a.d(t,e,function(){return o[e]})}(n);a("e1cc");var r=a("2877"),l=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"7a61b7c8",null);t["default"]=l.exports},"1b4f":function(e,t,a){var i=a("997c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("56dee58d",i,!0,{sourceMap:!1,shadowMode:!1})},"222a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={baseRequest:function(e){try{var t=uni.getStorageSync("token");t?(e.header?e.header["Authorization"]=t.token:e.header={Authorization:t.token},uni.request(e)):(uni.showToast({title:"用户信息不存在,请登录",icon:"none"}),setTimeout(function(){uni.reLaunch({url:"/pages/login/index",success:function(){uni.hideToast()}})},2e3))}catch(a){uni.showToast({title:"用户信息不存在"})}},logOut:function(){try{uni.clearStorageSync(),uni.navigateTo({url:"/pages/login/index",animationType:"pop-in",animationDuration:200})}catch(e){}}},o=i;t.default=o},"29b2":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"contanner"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)},reset:function(t){t=e.$handleEvent(t),e.formReset(t)}}},[a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("收入")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写每月收入情况"},model:{value:e.userDetailInfo.income,callback:function(t){e.$set(e.userDetailInfo,"income",t)},expression:"userDetailInfo.income"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("住房情况")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写住房情况"},model:{value:e.userDetailInfo.housing,callback:function(t){e.$set(e.userDetailInfo,"housing",t)},expression:"userDetailInfo.housing"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("是否有车")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写是否购车"},model:{value:e.userDetailInfo.vehicle,callback:function(t){e.$set(e.userDetailInfo,"vehicle",t)},expression:"userDetailInfo.vehicle"}})],1)],1),a("uni-tag",{staticStyle:{display:"inline-block"},attrs:{type:"error",size:"small",inverted:!0,text:e.compLevel}}),a("br"),a("br"),a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"primary",loading:e.loading,"form-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},o=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o})},"4d6c":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activeUser=t.jobYars=t.marrys=t.Vips=t.educations=t.years=t.heights=void 0;var i=function(){for(var e=["请选择身高"],t=140;t<=240;t++)e.push("".concat(t));return e}();t.heights=i;var o=function(e,t){for(var a=["请选择年龄"],i=e;i<=t;i++)a.push("".concat(i));return a}(18,60);t.years=o;var n=["请选择学历","小学","初中","高中","全日制专科","全日制本科","硕士研究生","博士研究生"];t.educations=n;var r=[{val:1,label:"普通会员"},{val:2,label:"银卡会员"},{val:3,label:"金卡会员"},{val:4,label:"砖石会员"},{val:5,label:"黑卡会员"}];t.Vips=r;var l=[{val:"",label:"请选择婚姻状况"},{val:1,label:"未婚"},{val:2,label:"离异"},{val:3,label:"丧偶"}];t.marrys=l;var s=function(e,t){for(var a=["请选择工作年限"],i=e;i<=t;i++)a.push("".concat(i));return a}(1,20);t.jobYars=s;var d=function(e,t){for(var a=["请选择活动人数"],i=e;i<=t;i++)a.push("".concat(i));return a}(1,100);t.activeUser=d},"68f7":function(e,t,a){"use strict";a.r(t);var i=a("29b2"),o=a("b114");for(var n in o)"default"!==n&&function(e){a.d(t,e,function(){return o[e]})}(n);a("a80b");var r=a("2877"),l=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"45201e84",null);t["default"]=l.exports},"7c7f":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[String,Boolean],defalut:!1},inverted:{type:[String,Boolean],defalut:!1},circle:{type:[String,Boolean],defalut:!1},mark:{type:[String,Boolean],defalut:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};t.default=i},"8cc8":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"/* 主页面样式 */uni-page-body[data-v-45201e84]{background-color:#fafafa}uni-view[data-v-45201e84]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}uni-button[data-v-45201e84]{font-size:14px;line-height:2.3}\r\n/* 表单样式 */.uni-form-item[data-v-45201e84]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-45201e84]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-45201e84],.form-inpput .uni-input-input[data-v-45201e84]{font-size:13px}.form-inpput .form-radio-group[data-v-45201e84]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-45201e84]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-45201e84]{font-size:14px}.form-lable[data-v-45201e84]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-45201e84]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-45201e84]{width:auto}.form-inpput-textarea[data-v-45201e84]{height:150px}.verification-wrapper[data-v-45201e84]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-45201e84]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-45201e84]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-45201e84]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-45201e84]{overflow:hidden}.image[data-v-45201e84]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-45201e84]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-45201e84]{color:#ccc;line-height:30px}.rotate[data-v-45201e84]{-webkit-animation:myMove-data-v-45201e84 2s linear infinite;animation:myMove-data-v-45201e84 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-45201e84{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-45201e84{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-45201e84]{position:absolute;bottom:30px;width:100%;padding:0 80px}.bottom-tips[data-v-45201e84]{position:absolute;bottom:8px;text-align:center;width:100%;font-size:12px;color:#adadad}.img-wrapper[data-v-45201e84]{height:200px}.bar-wrapper[data-v-45201e84]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-45201e84]{border-bottom:%?2?% solid #f7a;line-height:%?80?%;margin-left:10px;font-size:16px}.content[data-v-45201e84]{padding:%?20?%}.tips[data-v-45201e84]{color:#8f8f94;line-height:35px;font-size:14px}body.?%PAGE?%[data-v-45201e84]{background-color:#fafafa}",""])},"997c":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-tag[data-v-7a61b7c8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-7a61b7c8]{border-radius:15px}.uni-tag--mark[data-v-7a61b7c8]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-7a61b7c8]{opacity:.5}.uni-tag--small[data-v-7a61b7c8]{height:20px;padding:0 8px;line-height:20px;font-size:%?24?%}.uni-tag--default[data-v-7a61b7c8]{color:#333;font-size:%?28?%}.uni-tag-text--small[data-v-7a61b7c8]{font-size:%?24?%!important}.uni-tag-text[data-v-7a61b7c8]{color:#fff;font-size:%?28?%}.uni-tag--default[data-v-7a61b7c8]{color:#333;font-size:%?28?%}.uni-tag-text--primary[data-v-7a61b7c8]{color:#f7a!important}.uni-tag-text--success[data-v-7a61b7c8]{color:#4cd964!important}.uni-tag-text--warning[data-v-7a61b7c8]{color:#f0ad4e!important}.uni-tag-text--error[data-v-7a61b7c8]{color:#dd524d!important}.uni-tag--primary[data-v-7a61b7c8]{color:#fff;background-color:#f7a;border-width:%?1?%;border-style:solid;border-color:#f7a}.primary-uni-tag--inverted[data-v-7a61b7c8]{color:#f7a;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f7a}.uni-tag--success[data-v-7a61b7c8]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-7a61b7c8]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-7a61b7c8]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-7a61b7c8]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-7a61b7c8]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-7a61b7c8]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-7a61b7c8]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}',""])},a029:function(e,t,a){"use strict";a.r(t);var i=a("7c7f"),o=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);t["default"]=o.a},a80b:function(e,t,a){"use strict";var i=a("bea7"),o=a.n(i);o.a},b114:function(e,t,a){"use strict";a.r(t);var i=a("c9c5"),o=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);t["default"]=o.a},bea7:function(e,t,a){var i=a("8cc8");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("44f7ece8",i,!0,{sourceMap:!1,shadowMode:!1})},c9a8:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.text?a("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+e.type,!0===e.disabled||"true"===e.disabled?"uni-tag--disabled":"",!0===e.inverted||"true"===e.inverted?e.type+"-uni-tag--inverted":"",!0===e.circle||"true"===e.circle?"uni-tag--circle":"",!0===e.mark||"true"===e.mark?"uni-tag--mark":"","uni-tag--"+e.size],on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}},[a("v-uni-text",{class:["default"===e.type?"uni-tag--default":"uni-tag-text",!0===e.inverted||"true"===e.inverted?"uni-tag-text--"+e.type:"","small"===e.size?"uni-tag-text--small":""]},[e._v(e._s(e.text))])],1):e._e()},o=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o})},c9c5:function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("7514");var o=a("4d6c"),n=i(a("222a")),r=i(a("04db")),l={components:{uniTag:r.default},data:function(){return{isAdress:0,loading:!1,vips:o.Vips,vipIndex:0,userDetailInfo:{income:"",housing:"",vehicle:""}}},computed:{compLevel:function(){var e=this,t="";return o.Vips.find(function(a,i){a.val==e.userDetailInfo.level&&(console.log("你设置了".concat(a.label,"以上会员可查看！")),t="你设置了".concat(a.label,"以上会员可查看！(如想修改请移步私密设置)"))}),t}},onLoad:function(e){var t=JSON.parse(e.info),a=t.income,i=t.housing,o=t.vehicle,n=t.level;this.userDetailInfo={income:a||"",housing:i||"",vehicle:o||"",level:n}},methods:{formSubmit:function(e){var t=this,a=[{name:"income",required:!0,type:"text",errmsg:"请填写每月收入情况"},{name:"housing",required:!0,type:"text",errmsg:"请填写住房情况"},{name:"housing",required:!0,type:"text",errmsg:"请填写是否购车"}];this.userDetailInfo.id=uni.getStorageSync("userInfo").id,console.log(this.userDetailInfo);var i=this.$validate.validate(this.userDetailInfo,a);if(!i.isOk)return uni.showToast({icon:"none",title:i.errmsg}),!1;n.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(a){try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),t.userInfo=a.data.data,uni.setStorageSync("userInfo",a.data.data),setTimeout(function(){uni.switchTab({url:"/pages/me/index",animationType:"pop-in",animationDuration:200})},1200)}catch(e){}}})},formReset:function(e){console.log("清空数据")}}};t.default=l},e1cc:function(e,t,a){"use strict";var i=a("1b4f"),o=a.n(i);o.a}}]);