(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editUserContact"],{"0d66":function(e,t,a){"use strict";a.r(t);var i=a("64ae"),n=a("5565");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);a("b66c");var o=a("2877"),l=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"460741ea",null);t["default"]=l.exports},"0f7d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[String,Boolean],defalut:!1},inverted:{type:[String,Boolean],defalut:!1},circle:{type:[String,Boolean],defalut:!1},mark:{type:[String,Boolean],defalut:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};t.default=i},"283e":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-tag[data-v-460741ea]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-460741ea]{border-radius:15px}.uni-tag--mark[data-v-460741ea]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-460741ea]{opacity:.5}.uni-tag--small[data-v-460741ea]{height:20px;padding:0 8px;line-height:20px;font-size:%?24?%}.uni-tag--default[data-v-460741ea]{color:#333;font-size:%?28?%}.uni-tag-text--small[data-v-460741ea]{font-size:%?24?%!important}.uni-tag-text[data-v-460741ea]{color:#fff;font-size:%?28?%}.uni-tag--default[data-v-460741ea]{color:#333;font-size:%?28?%}.uni-tag-text--primary[data-v-460741ea]{color:#f7a!important}.uni-tag-text--success[data-v-460741ea]{color:#4cd964!important}.uni-tag-text--warning[data-v-460741ea]{color:#f0ad4e!important}.uni-tag-text--error[data-v-460741ea]{color:#dd524d!important}.uni-tag--primary[data-v-460741ea]{color:#fff;background-color:#f7a;border-width:%?1?%;border-style:solid;border-color:#f7a}.primary-uni-tag--inverted[data-v-460741ea]{color:#f7a;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f7a}.uni-tag--success[data-v-460741ea]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-460741ea]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-460741ea]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-460741ea]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-460741ea]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-460741ea]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-460741ea]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}',""])},5087:function(e,t,a){"use strict";a.r(t);var i=a("b6b9"),n=a("8736");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);a("6347");var o=a("2877"),l=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"7ad4baac",null);t["default"]=l.exports},5565:function(e,t,a){"use strict";a.r(t);var i=a("0f7d"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);t["default"]=n.a},"58ba":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={baseRequest:function(e){try{var t=uni.getStorageSync("token");t?(e.header?e.header["Authorization"]=t.token:e.header={Authorization:t.token},uni.request(e)):(uni.showToast({title:"用户信息不存在,请登录",icon:"none"}),setTimeout(function(){uni.reLaunch({url:"/pages/login/index",success:function(){uni.hideToast()}})},2e3))}catch(a){uni.showToast({title:"用户信息不存在"})}},logOut:function(){try{uni.clearStorageSync(),uni.navigateTo({url:"/pages/login/index",animationType:"pop-in",animationDuration:200})}catch(e){}}},n=i;t.default=n},6347:function(e,t,a){"use strict";var i=a("dc48"),n=a.n(i);n.a},"64ae":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.text?a("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+e.type,!0===e.disabled||"true"===e.disabled?"uni-tag--disabled":"",!0===e.inverted||"true"===e.inverted?e.type+"-uni-tag--inverted":"",!0===e.circle||"true"===e.circle?"uni-tag--circle":"",!0===e.mark||"true"===e.mark?"uni-tag--mark":"","uni-tag--"+e.size],on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}},[a("v-uni-text",{class:["default"===e.type?"uni-tag--default":"uni-tag-text",!0===e.inverted||"true"===e.inverted?"uni-tag-text--"+e.type:"","small"===e.size?"uni-tag-text--small":""]},[e._v(e._s(e.text))])],1):e._e()},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},7200:function(e,t,a){var i=a("283e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("909193d8",i,!0,{sourceMap:!1,shadowMode:!1})},8736:function(e,t,a){"use strict";a.r(t);var i=a("c1f3"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);t["default"]=n.a},b66c:function(e,t,a){"use strict";var i=a("7200"),n=a.n(i);n.a},b6b9:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"contanner"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)},reset:function(t){t=e.$handleEvent(t),e.formReset(t)}}},[a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("手机号：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写手机号"},model:{value:e.userDetailInfo.phone,callback:function(t){e.$set(e.userDetailInfo,"phone",t)},expression:"userDetailInfo.phone"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("微信号：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写微信号"},model:{value:e.userDetailInfo.wechatNumber,callback:function(t){e.$set(e.userDetailInfo,"wechatNumber",t)},expression:"userDetailInfo.wechatNumber"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("QQ号：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写微信号"},model:{value:e.userDetailInfo.qq,callback:function(t){e.$set(e.userDetailInfo,"qq",t)},expression:"userDetailInfo.qq"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("E-mail：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写微信号"},model:{value:e.userDetailInfo.email,callback:function(t){e.$set(e.userDetailInfo,"email",t)},expression:"userDetailInfo.email"}})],1)],1),a("uni-tag",{staticStyle:{display:"inline-block"},attrs:{type:"error",size:"small",inverted:!0,text:e.compLevel}}),a("br"),a("br"),a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"primary",loading:e.loading,"form-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},be60:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"/* 主页面样式 */uni-page-body[data-v-7ad4baac]{background-color:#fafafa}uni-view[data-v-7ad4baac]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}uni-button[data-v-7ad4baac]{font-size:14px;line-height:2.3}\r\n/* 表单样式 */.uni-form-item[data-v-7ad4baac]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-7ad4baac]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-7ad4baac],.form-inpput .uni-input-input[data-v-7ad4baac]{font-size:13px}.form-inpput .form-radio-group[data-v-7ad4baac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-7ad4baac]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-7ad4baac]{font-size:14px}.form-lable[data-v-7ad4baac]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-7ad4baac]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-7ad4baac]{width:auto}.form-inpput-textarea[data-v-7ad4baac]{height:150px}.verification-wrapper[data-v-7ad4baac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-7ad4baac]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-7ad4baac]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-7ad4baac]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-7ad4baac]{overflow:hidden}.image[data-v-7ad4baac]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-7ad4baac]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-7ad4baac]{color:#ccc;line-height:30px}.rotate[data-v-7ad4baac]{-webkit-animation:myMove-data-v-7ad4baac 2s linear infinite;animation:myMove-data-v-7ad4baac 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-7ad4baac{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-7ad4baac{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-7ad4baac]{position:absolute;bottom:30px;width:100%;padding:0 80px}.img-wrapper[data-v-7ad4baac]{height:200px}.bar-wrapper[data-v-7ad4baac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-7ad4baac]{border-bottom:%?2?% solid #f7a;line-height:%?80?%;margin-left:10px;font-size:16px}.content[data-v-7ad4baac]{padding:%?20?%}.tips[data-v-7ad4baac]{color:#8f8f94;line-height:35px;font-size:14px}body.?%PAGE?%[data-v-7ad4baac]{background-color:#fafafa}",""])},c1f3:function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("7514");var n=a("f36b"),r=i(a("58ba")),o=i(a("f6a3")),l=i(a("0d66")),d={components:{uniTag:l.default},data:function(){return{loading:!1,vips:n.Vips,vipIndex:0,userDetailInfo:{phone:"",wechatNumber:"",qq:"",email:""}}},computed:{compLevel:function(){var e=this,t="";return n.Vips.find(function(a,i){a.val==e.userDetailInfo.level&&(console.log("你设置了".concat(a.label,"以上会员可查看！")),t="你设置了".concat(a.label,"以上会员可查看！(如想修改请移步私密设置)"))}),t}},onLoad:function(e){var t=JSON.parse(e.info),a=t.phone,i=t.wechatNumber,n=t.qq,r=t.email,o=t.level;this.userDetailInfo={phone:a||"",wechatNumber:i||"",qq:n||"",email:r||"",level:o}},methods:{formSubmit:function(e){var t=this,a=[{name:"phone",required:!0,type:"text",errmsg:"请输入真实姓名"},{name:"wechatNumber",required:!0,type:"text",errmsg:"请输入微信号"},{name:"qq",required:!0,type:"text",errmsg:"请输入QQ号码"},{name:"email",required:!0,type:"text",errmsg:"请输入邮箱"}],i=this.$validate.validate(this.userDetailInfo,a);return!!o.default.verifEmail(this.userDetailInfo.email)&&(i.isOk?(this.userDetailInfo.id=uni.getStorageSync("userInfo").id,void r.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(a){try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),t.userInfo=a.data.data,uni.setStorageSync("userInfo",a.data.data),setTimeout(function(){uni.switchTab({url:"/pages/me/index",animationType:"pop-in",animationDuration:200})},1200)}catch(e){}}})):(uni.showToast({icon:"none",title:i.errmsg}),!1))},formReset:function(e){console.log("清空数据")},handleVipChange:function(e){this.vipIndex=e.target.value,this.userDetailInfo.vips=n.Vips[this.vipIndex]}}};t.default=d},dc48:function(e,t,a){var i=a("be60");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("0f58ecb0",i,!0,{sourceMap:!1,shadowMode:!1})},f36b:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activeUser=t.jobYars=t.marrys=t.Vips=t.educations=t.years=t.heights=void 0;var i=function(){for(var e=["请选择身高"],t=140;t<=240;t++)e.push("".concat(t));return e}();t.heights=i;var n=function(e,t){for(var a=["请选择年龄"],i=e;i<=t;i++)a.push("".concat(i));return a}(18,60);t.years=n;var r=["请选择学历","小学","初中","高中","全日制专科","全日制本科","硕士研究生","博士研究生"];t.educations=r;var o=[{val:1,label:"普通会员"},{val:2,label:"银卡会员"},{val:3,label:"金卡会员"},{val:4,label:"砖石会员"},{val:5,label:"黑卡会员"}];t.Vips=o;var l=[{val:"",label:"请选择婚姻状况"},{val:1,label:"未婚"},{val:2,label:"离异"},{val:3,label:"丧偶"}];t.marrys=l;var d=function(e,t){for(var a=["请选择工作年限"],i=e;i<=t;i++)a.push("".concat(i));return a}(1,20);t.jobYars=d;var s=function(e,t){for(var a=["请选择活动人数"],i=e;i<=t;i++)a.push("".concat(i));return a}(1,100);t.activeUser=s},f6a3:function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("3b2b");var n=i(a("e814"));a("a481");var r={fullImage:function(e){var t=e.target.dataset.src;uni.previewImage({current:t,urls:[t]})},checkIdCard:function(e){var t=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;return!!t.test(e)||(uni.showToast({title:"身份证号码错误",icon:"none"}),!1)},getBirthday:function(e){var t="";return null!=e&&""!=e&&(15==e.length?t="19"+e.substr(6,6):18==e.length&&(t=e.substr(6,8)),t=t.replace(/(.{4})(.{2})/,"$1-$2-")),t},getSex:function(e){if(null!=e&&""!=e)return(0,n.default)(e.substr(16,1))%2==1?1:2},getAge:function(e){if(null!=e&&""!=e){var t=new Date,a=t.getMonth()+1,i=t.getDate(),n=t.getFullYear()-e.substring(6,10)-1;return(e.substring(10,12)<a||e.substring(10,12)==a&&e.substring(12,14)<=i)&&n++,n}},verifPassword:function(e){var t=new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$");return!!t.test(e)||(uni.showToast({title:"密码复杂程度过低,密码包含:数字和字母,至少6个字符",icon:"none"}),!1)},verifEmail:function(e){var t=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;return!!t.test(e)||(uni.showToast({title:"邮箱格式错误",icon:"none"}),!1)}},o=r;t.default=o}}]);