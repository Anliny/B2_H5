(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editUserHeader"],{"2a1d":function(e,t,a){"use strict";a.r(t);var i=a("df29"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},"507f":function(e,t,a){var i=a("d6ca");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("67b57e26",i,!0,{sourceMap:!1,shadowMode:!1})},"50cc":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"contanner"},[a("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)},reset:function(t){t=e.$handleEvent(t),e.formReset(t)}}},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticStyle:{"text-align":"center","background-color":"#fff"}},[a("v-uni-image",{staticClass:"avatar",attrs:{src:e.userDetailInfo.userAvatar},on:{click:function(t){t=e.$handleEvent(t),e.upload(t)}}}),a("v-uni-view",{staticClass:"item flex",on:{click:function(t){t=e.$handleEvent(t),e.upload(t)}}},[e._v("点击头像上传")])],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("昵称：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写昵称"},model:{value:e.userDetailInfo.nickName,callback:function(t){e.$set(e.userDetailInfo,"nickName",t)},expression:"userDetailInfo.nickName"}})],1)],1),a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"primary",loading:e.loading,"form-type":"submit"}},[e._v("提交")])],1)],1)],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},"58ba":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={baseRequest:function(e){try{var t=uni.getStorageSync("token");t?(e.header?e.header["Authorization"]=t.token:e.header={Authorization:t.token},uni.request(e)):(uni.showToast({title:"用户信息不存在,请登录",icon:"none"}),setTimeout(function(){uni.reLaunch({url:"/pages/login/index",success:function(){uni.hideToast()}})},2e3))}catch(a){uni.showToast({title:"用户信息不存在"})}},logOut:function(){try{uni.clearStorageSync(),uni.navigateTo({url:"/pages/login/index",animationType:"pop-in",animationDuration:200})}catch(e){}}},n=i;t.default=n},"7b12":function(e,t,a){"use strict";var i=a("507f"),n=a.n(i);n.a},"7f01":function(e,t,a){"use strict";a.r(t);var i=a("50cc"),n=a("2a1d");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("7b12");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"0e97b10c",null);t["default"]=s.exports},d6ca:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"/* 主页面样式 */uni-page-body[data-v-0e97b10c]{background-color:#fafafa}uni-view[data-v-0e97b10c]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}uni-button[data-v-0e97b10c]{font-size:14px;line-height:2.3}\r\n/* 表单样式 */.uni-form-item[data-v-0e97b10c]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-0e97b10c]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-0e97b10c],.form-inpput .uni-input-input[data-v-0e97b10c]{font-size:13px}.form-inpput .form-radio-group[data-v-0e97b10c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-0e97b10c]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-0e97b10c]{font-size:14px}.form-lable[data-v-0e97b10c]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-0e97b10c]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-0e97b10c]{width:auto}.form-inpput-textarea[data-v-0e97b10c]{height:150px}.verification-wrapper[data-v-0e97b10c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-0e97b10c]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-0e97b10c]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-0e97b10c]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-0e97b10c]{overflow:hidden}.image[data-v-0e97b10c]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-0e97b10c]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-0e97b10c]{color:#ccc;line-height:30px}.rotate[data-v-0e97b10c]{-webkit-animation:myMove-data-v-0e97b10c 2s linear infinite;animation:myMove-data-v-0e97b10c 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-0e97b10c{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-0e97b10c{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-0e97b10c]{position:absolute;bottom:30px;width:100%;padding:0 80px}.contanner[data-v-0e97b10c]{width:100%;height:100%;padding:8px}.avatar-container[data-v-0e97b10c]{position:relative;text-align:center;padding-top:50%}.avatar[data-v-0e97b10c]{width:5rem;height:5rem;background-color:#e5e5e5;border-radius:50%}.item[data-v-0e97b10c]{line-height:3rem}.uni-form-item[data-v-0e97b10c]{margin-top:8px}body.?%PAGE?%[data-v-0e97b10c]{background-color:#fafafa}",""])},df29:function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("58ba")),o={data:function(){return{loading:!1,userDetailInfo:{userAvatar:"",nickName:""}}},onLoad:function(e){var t=e.userAvatar;e.nickName;t&&(this.userDetailInfo.userAvatar=t),this.userDetailInfo.nickName=uni.getStorageSync("userInfo").nickName},methods:{upload:function(){uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t=e.tempFilePaths[0];uni.navigateTo({url:"/pages/components/uploadAvatar/upload?src="+t})}})},formSubmit:function(e){var t=this;this.loading=!0;var a=[{name:"userAvatar",required:!0,type:"text",errmsg:"请上传头像"},{name:"nickName",required:!0,type:"text",errmsg:"请填写昵称"}];this.userDetailInfo.id=uni.getStorageSync("userInfo").id;var i=this.$validate.validate(this.userDetailInfo,a);if(!i.isOk)return uni.showToast({icon:"none",title:i.errmsg}),!1;n.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(a){t.loading=!1;try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),t.userInfo=a.data.data,uni.setStorageSync("userInfo",a.data.data),setTimeout(function(){uni.switchTab({url:"/pages/me/index",animationType:"pop-in",animationDuration:200})},1200)}catch(e){}}})}}};t.default=o}}]);