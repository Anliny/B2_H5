(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-index"],{"1e7b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"contanner"},[i("v-uni-view",{staticClass:"img-wrapper"},[i("v-uni-image",{staticClass:"image",attrs:{src:"/static/banner.jpg","lazy-load":!0,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"bar-wrapper"},t._l(t.tabList,function(e,n){return i("v-uni-view",{key:n,staticClass:"bar-item",class:t.isTitleBar==n?"bar-item-active":"",on:{click:function(e){e=t.$handleEvent(e),t.handleCheckLabel(n)}}},[t._v(t._s(e.label))])}),1),i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)},reset:function(e){e=t.$handleEvent(e),t.formReset(e)}}},[t.isTitleBar?t._e():i("v-uni-view",[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("手机号：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"number","placeholder-class":"placeholder",placeholder:"请填写手机号"},model:{value:t.userInfo.phone,callback:function(e){t.$set(t.userInfo,"phone",e)},expression:"userInfo.phone"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("推荐码：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"选填推荐码"},model:{value:t.userInfo.inviteCode,callback:function(e){t.$set(t.userInfo,"inviteCode",e)},expression:"userInfo.inviteCode"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("密码：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"password","placeholder-class":"placeholder",placeholder:"请输入密码"},on:{blur:function(e){e=t.$handleEvent(e),t.handleRegPwd(e)}},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("确认密码：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"password","placeholder-class":"placeholder",placeholder:"请输入确认密码"},model:{value:t.userInfo.confirmpassword,callback:function(e){t.$set(t.userInfo,"confirmpassword",e)},expression:"userInfo.confirmpassword"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("验证码：")]),i("v-uni-view",{staticClass:"form-inpput verification-wrapper"},[i("v-uni-input",{staticClass:"verification-input",attrs:{type:"number"},model:{value:t.userInfo.sms,callback:function(e){t.$set(t.userInfo,"sms",e)},expression:"userInfo.sms"}}),i("v-uni-button",{staticClass:"verification-btn",attrs:{disabled:t.btnDisable},on:{click:function(e){e=t.$handleEvent(e),t.handleGetSms(e)}}},[t._v(t._s(t.btnText))])],1)],1)],1),t.isTitleBar?i("v-uni-view",[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("手机号：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"number"},model:{value:t.userInfo.phone,callback:function(e){t.$set(t.userInfo,"phone",e)},expression:"userInfo.phone"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("密码：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"number"},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("确认密码：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"number"},model:{value:t.userInfo.confirmpassword,callback:function(e){t.$set(t.userInfo,"confirmpassword",e)},expression:"userInfo.confirmpassword"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("验证码：")]),i("v-uni-view",{staticClass:"form-inpput verification-wrapper"},[i("v-uni-input",{staticClass:"verification-input",attrs:{type:"number"},model:{value:t.userInfo.sms,callback:function(e){t.$set(t.userInfo,"sms",e)},expression:"userInfo.sms"}}),i("v-uni-button",{staticClass:"verification-btn",attrs:{disabled:t.btnDisable},on:{click:function(e){e=t.$handleEvent(e),t.handleGetSms(e)}}},[t._v(t._s(t.btnText))])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary",loading:t.loading,"form-type":"submit"}},[t._v("注册")]),i("v-uni-view",{staticClass:"tips"},[i("v-uni-navigator",{attrs:{url:"/pages/login/index","hover-class":"navigator-hover"}},[t._v("没有账号？去登录")])],1)],1)],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"1ef4":function(t,e,i){"use strict";i.r(e);var n=i("1e7b"),a=i("dca9");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("49b1");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"2898d98d",null);e["default"]=r.exports},"2f44":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("9c05")),s=n(i("f6a3")),o={components:{xyzTab:a.default},data:function(){return{tabList:[{label:"会员注册"},{label:"红娘注册"}],btnDisable:!1,btnText:"获取验证码",loading:!1,isTitleBar:0,userInfo:{phone:"16602330054",inviteCode:"",sms:"",password:"123456zdf",confirmpassword:"123456zdf"}}},onLoad:function(){uni.setStorage({key:"storage_key",data:"hello",success:function(){console.log("success")}}),uni.getStorage({key:"userInfo",success:function(t){console.log(t)}})},methods:{formSubmit:function(){var t=this;this.loading=!0;var e=[{name:"phone",required:!0,type:"text",errmsg:"请输入账号"},{name:"password",type:"required",errmsg:"请输入密码"},{name:"confirmpassword",type:"required",errmsg:"请输入确认密码"},{name:"sms",type:"required",errmsg:"请输入验证码"}];if(!s.default.verifPassword(this.userInfo.password))return this.loading=!1,!1;var i=this.$validate.validate(this.userInfo,e);if(!i.isOk)return uni.showToast({icon:"none",title:i.errmsg}),!1;var n=this.userInfo,a=n.password,o=n.confirmpassword;if(a!==o)return uni.showToast({icon:"none",title:"两次密码不一致"}),!1;var r=this.userInfo;r.type=this.isTitleBar,uni.request({url:"/common/register",data:r,method:"POST",success:function(e){t.loading=!1;var i=e.data;console.log(i);try{"-1"==i.code?uni.showToast({title:i.message,icon:"none"}):(uni.setStorageSync("userInfo",i),uni.showToast({title:"注册成功！",icon:"success",showCancel:!1}),setTimeout(function(){uni.navigateTo({url:"/pages/login/index"})},1200))}catch(n){}}})},formReset:function(t){console.log("清空数据")},handleCheckLabel:function(t){this.isTitleBar=t},handleRegPwd:function(t){s.default.verifPassword(t.detail.value)},handleGetSms:function(){var t=this,e=[{name:"phone",required:!0,type:"text",errmsg:"请输入电话号码"}],i=this.$validate.validate(this.userInfo,e);if(!i.isOk)return uni.showToast({icon:"none",title:i.errmsg}),!1;var n=60,a=setInterval(function(){0==n?(clearInterval(a),t.btnText="再次获取验证码",t.btnDisable=!1):(t.btnText="".concat(n,"s后，重新获取"),n--,t.btnDisable=!0)},1e3);uni.request({url:"/common/querySms",data:{phone:this.userInfo.phone},method:"get",success:function(t){uni.showToast({title:"短信已发送，请注意查收！",icon:"success",showCancel:!1,success:function(){uni.hideToast()}})}})}}};e.default=o},"352b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n={props:{tabList:{type:Array,default:[]},tabActiveIdx:{type:Number,default:0}},data:function(){return{tabIdx:0,scrollLeft:0}},computed:{tabLen:function(){return!(this.tabList.length>5)}},watch:{tabActiveIdx:function(t,e){this.tabSelect(t)}},methods:{tabSelect:function(t){this.tabIdx=t,this.scrollLeft=30*t,this.$emit("tabSelect",t)}}};e.default=n},"37bf":function(t,e,i){"use strict";i.r(e);var n=i("352b"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"489b":function(t,e,i){var n=i("8aef");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3200ed04",n,!0,{sourceMap:!1,shadowMode:!1})},"49b1":function(t,e,i){"use strict";var n=i("489b"),a=i.n(n);a.a},"4db8":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.flex_around[data-v-585b61c7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.tab .tab_main[data-v-585b61c7]{font-size:%?34?%}.tab .tab_main>uni-view[data-v-585b61c7]{padding:0 %?20?%;height:%?80?%;line-height:%?80?%}.tab .tab_main>uni-view.tab_active[data-v-585b61c7]{font-size:%?36?%;font-weight:700;color:red;border-bottom:%?2?% solid red}',""])},5992:function(t,e,i){"use strict";var n=i("940e"),a=i.n(n);a.a},"8aef":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"/* 主页面样式 */uni-page-body[data-v-2898d98d]{background-color:#fafafa}uni-view[data-v-2898d98d]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}uni-button[data-v-2898d98d]{font-size:14px;line-height:2.3}\r\n/* 表单样式 */.uni-form-item[data-v-2898d98d]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-2898d98d]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-2898d98d],.form-inpput .uni-input-input[data-v-2898d98d]{font-size:13px}.form-inpput .form-radio-group[data-v-2898d98d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-2898d98d]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-2898d98d]{font-size:14px}.form-lable[data-v-2898d98d]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-2898d98d]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-2898d98d]{width:auto}.form-inpput-textarea[data-v-2898d98d]{height:150px}.verification-wrapper[data-v-2898d98d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-2898d98d]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-2898d98d]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-2898d98d]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-2898d98d]{overflow:hidden}.image[data-v-2898d98d]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-2898d98d]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-2898d98d]{color:#ccc;line-height:30px}.rotate[data-v-2898d98d]{-webkit-animation:myMove-data-v-2898d98d 2s linear infinite;animation:myMove-data-v-2898d98d 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-2898d98d{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-2898d98d{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-2898d98d]{position:absolute;bottom:30px;width:100%;padding:0 80px}.bar-wrapper[data-v-2898d98d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-2898d98d]{line-height:34px;margin-left:10px;font-size:16px;text-align:center;padding:0 20px}.bar-item-active[data-v-2898d98d]{border-bottom:1px solid #f7a}.content[data-v-2898d98d]{padding:%?20?%}.tips[data-v-2898d98d]{color:#8f8f94;line-height:35px;font-size:14px}.verification-btn[data-v-2898d98d]{font-size:14px!important}body.?%PAGE?%[data-v-2898d98d]{background-color:#fafafa}",""])},"940e":function(t,e,i){var n=i("4db8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("471e6635",n,!0,{sourceMap:!1,shadowMode:!1})},"96c9":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tab"},[i("v-uni-scroll-view",{staticStyle:{"white-space":"nowrap"},attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.scrollLeft}},[i("v-uni-view",{staticClass:"tab_main",class:t.tabLen?"flex_around":""},t._l(t.tabList,function(e,n){return i("v-uni-view",{key:n,class:n==t.tabIdx?"tab_active":"",staticStyle:{display:"inline-block"},on:{click:function(e){e=t.$handleEvent(e),t.tabSelect(n)}}},[t._v(t._s(e.label))])}),1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"9c05":function(t,e,i){"use strict";i.r(e);var n=i("96c9"),a=i("37bf");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("5992");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"585b61c7",null);e["default"]=r.exports},dca9:function(t,e,i){"use strict";i.r(e);var n=i("2f44"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},f6a3:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("3b2b");var a=n(i("e814"));i("a481");var s={fullImage:function(t){var e=t.target.dataset.src;uni.previewImage({current:e,urls:[e]})},checkIdCard:function(t){var e=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;return!!e.test(t)||(uni.showToast({title:"身份证号码错误",icon:"none"}),!1)},getBirthday:function(t){var e="";return null!=t&&""!=t&&(15==t.length?e="19"+t.substr(6,6):18==t.length&&(e=t.substr(6,8)),e=e.replace(/(.{4})(.{2})/,"$1-$2-")),e},getSex:function(t){if(null!=t&&""!=t)return(0,a.default)(t.substr(16,1))%2==1?1:2},getAge:function(t){if(null!=t&&""!=t){var e=new Date,i=e.getMonth()+1,n=e.getDate(),a=e.getFullYear()-t.substring(6,10)-1;return(t.substring(10,12)<i||t.substring(10,12)==i&&t.substring(12,14)<=n)&&a++,a}},verifPassword:function(t){var e=new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$");return!!e.test(t)||(uni.showToast({title:"密码复杂程度过低,密码包含:数字和字母,至少6个字符",icon:"none"}),!1)},verifEmail:function(t){var e=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;return!!e.test(t)||(uni.showToast({title:"邮箱格式错误",icon:"none"}),!1)}},o=s;e.default=o}}]);