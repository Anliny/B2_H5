(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{"222a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={baseRequest:function(t){try{var e=uni.getStorageSync("token");e?(t.header?t.header["Authorization"]=e.token:t.header={Authorization:e.token},t.url=t.url,uni.request(t)):uni.showToast({title:"用户信息不存在"})}catch(a){uni.showToast({title:"用户信息不存在"})}}},n=i;e.default=n},"6b86":function(t,e,a){var i=a("7afb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("60e0248a",i,!0,{sourceMap:!1,shadowMode:!1})},"77d4":function(t,e,a){"use strict";a.r(e);var i=a("d148"),n=a("a0dc");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("bc8b");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"7b44c8ba",null);e["default"]=r.exports},"7afb":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"/* 主页面样式 */uni-page-body[data-v-7b44c8ba]{background-color:#fafafa}uni-view[data-v-7b44c8ba]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}.uni-button[data-v-7b44c8ba]{font-size:14px}\r\n/* 表单样式 */.uni-form-item[data-v-7b44c8ba]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-7b44c8ba]{width:75vw;line-height:35px;background-color:#fff;font-size:14px}.form-inpput .placeholder[data-v-7b44c8ba],.form-inpput .uni-input-input[data-v-7b44c8ba]{font-size:14px}.form-inpput .form-radio-group[data-v-7b44c8ba]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-7b44c8ba]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-7b44c8ba]{font-size:14px}.form-lable[data-v-7b44c8ba]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-7b44c8ba]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-7b44c8ba]{width:auto}.form-inpput-textarea[data-v-7b44c8ba]{height:150px}.verification-wrapper[data-v-7b44c8ba]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-7b44c8ba]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-7b44c8ba]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-7b44c8ba]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-7b44c8ba]{overflow:hidden}.image[data-v-7b44c8ba]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-7b44c8ba]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-7b44c8ba]{color:#ccc;line-height:30px}.rotate[data-v-7b44c8ba]{-webkit-animation:myMove-data-v-7b44c8ba 2s linear infinite;animation:myMove-data-v-7b44c8ba 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-7b44c8ba{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-7b44c8ba{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.bar-wrapper[data-v-7b44c8ba]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-7b44c8ba]{line-height:34px;margin-left:10px;font-size:16px;text-align:center;padding:0 20px}.bar-item-active[data-v-7b44c8ba]{border-bottom:1px solid #f7a}.img-wrapper[data-v-7b44c8ba]{height:200px}.bar-wrapper[data-v-7b44c8ba]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.content[data-v-7b44c8ba]{padding:%?20?%}.tips[data-v-7b44c8ba]{color:#8f8f94;line-height:35px;font-size:14px}body.?%PAGE?%[data-v-7b44c8ba]{background-color:#fafafa}",""])},a0dc:function(t,e,a){"use strict";a.r(e);var i=a("a1b5"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},a1b5:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("222a")),o={data:function(){return{loading:!1,isTitleBar:0,tabList:[{label:"会员注册"},{label:"红娘注册"}],userInfo:{userName:"",password:""},token:""}},methods:{formSubmit:function(t){this.loading=!0;var e=[{name:"userName",required:!0,type:"text",errmsg:"请输入账号"},{name:"password",type:"required",errmsg:"请输入密码"}],a=this.$validate.validate(this.userInfo,e);if(console.log(a),!a.isOk)return uni.showToast({icon:"none",title:a.errmsg}),this.loading=!1,!1;var i=this.userInfo;this.isTitleBar?this.jokRequst(i):this.vipRequst(i)},vipRequst:function(t){var e=this;uni.request({url:"/common/login",data:t,method:"POST",success:function(t){e.loading=!1,uni.setStorageSync("token",t.data.data),uni.showToast({title:"登录成功！",icon:"success",showCancel:!1,success:function(){uni.setStorage({key:"token",data:t.data.data,success:function(){var t=this;console.log(uni.getStorageSync("token")),n.default.baseRequest({url:"/member/queryById",method:"get",success:function(e){try{t.userInfo=e.data.data,console.log(e.data.data),uni.setStorage({key:"userInfo",data:e.data.data,success:function(){uni.switchTab({url:"/pages/index/index",animationType:"pop-in",animationDuration:200,success:function(){uni.hideToast()}})}})}catch(a){}}})}})}})}})},jokRequst:function(t){var e=this;uni.request({url:"/common/login",data:t,method:"POST",success:function(t){e.loading=!1,uni.setStorageSync("token",t.data.data),uni.showToast({title:"登录成功！",icon:"success",showCancel:!1,success:function(){uni.setStorage({key:"token",data:t.data.data,success:function(){var t=this;console.log(uni.getStorageSync("token")),n.default.baseRequest({url:"/matchmaker/queryById",method:"get",success:function(e){try{t.userInfo=e.data.data,console.log(e.data.data),uni.setStorage({key:"userInfo",data:e.data.data,success:function(){uni.switchTab({url:"/pages/index/index",animationType:"pop-in",animationDuration:200,success:function(){uni.hideToast()}})}})}catch(a){}}})}})}})}})},formReset:function(t){console.log("清空数据")},handleCheckLabel:function(t){this.isTitleBar=t}}};e.default=o},bc8b:function(t,e,a){"use strict";var i=a("6b86"),n=a.n(i);n.a},d148:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"contanner"},[a("v-uni-view",{staticClass:"img-wrapper"},[a("v-uni-image",{staticClass:"image",attrs:{src:"/static/nav-img.jpg","lazy-load":!0,mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"bar-wrapper"},t._l(t.tabList,function(e,i){return a("v-uni-view",{key:i,staticClass:"bar-item",class:t.isTitleBar==i?"bar-item-active":"",on:{click:function(e){e=t.$handleEvent(e),t.handleCheckLabel(i)}}},[t._v(t._s(e.label))])}),1),a("v-uni-view",{staticClass:"content"},[a("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)},reset:function(e){e=t.$handleEvent(e),t.formReset(e)}}},[a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[t._v("账号：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{"placeholder-class":"placeholder",type:"text",placeholder:"请输入电话号码或者ID号"},model:{value:t.userInfo.userName,callback:function(e){t.$set(t.userInfo,"userName",e)},expression:"userInfo.userName"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[t._v("密码：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"password","placeholder-class":"placeholder",placeholder:"请输入密码"},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}})],1)],1),a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"primary",loading:t.loading,"form-type":"submit"}},[t._v("登录")]),a("v-uni-view",{staticClass:"tips"},[t._v("还没有账号？"),a("router-link",{attrs:{to:"/pages/register/index"}},[t._v("现在注册")])],1)],1)],1)],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})}}]);