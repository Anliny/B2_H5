(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editUserHeader"],{"222a":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={baseRequest:function(a){try{var t=uni.getStorageSync("token");t?(a.header?a.header["Authorization"]=t.token:a.header={Authorization:t.token},uni.request(a)):(uni.showToast({title:"用户信息不存在,请登录",icon:"none"}),setTimeout(function(){uni.reLaunch({url:"/pages/login/index",success:function(){uni.hideToast()}})},2e3))}catch(e){uni.showToast({title:"用户信息不存在"})}},logOut:function(){try{uni.clearStorageSync(),uni.navigateTo({url:"/pages/login/index",animationType:"pop-in",animationDuration:200})}catch(a){}}},n=i;t.default=n},"598c":function(a,t,e){var i=e("d667");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("d4e0acbc",i,!0,{sourceMap:!1,shadowMode:!1})},6054:function(a,t,e){"use strict";e.r(t);var i=e("ef7a"),n=e("8973");for(var o in n)"default"!==o&&function(a){e.d(t,a,function(){return n[a]})}(o);e("77d3");var r=e("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"0a95aab4",null);t["default"]=s.exports},"77d3":function(a,t,e){"use strict";var i=e("598c"),n=e.n(i);n.a},8973:function(a,t,e){"use strict";e.r(t);var i=e("e3c8"),n=e.n(i);for(var o in i)"default"!==o&&function(a){e.d(t,a,function(){return i[a]})}(o);t["default"]=n.a},d667:function(a,t,e){t=a.exports=e("2350")(!1),t.push([a.i,"/* 主页面样式 */uni-page-body[data-v-0a95aab4]{background-color:#fafafa}uni-view[data-v-0a95aab4]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}uni-button[data-v-0a95aab4]{font-size:14px;line-height:2.3}\r\n/* 表单样式 */.uni-form-item[data-v-0a95aab4]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-0a95aab4]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-0a95aab4],.form-inpput .uni-input-input[data-v-0a95aab4]{font-size:13px}.form-inpput .form-radio-group[data-v-0a95aab4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-0a95aab4]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-0a95aab4]{font-size:14px}.form-lable[data-v-0a95aab4]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-0a95aab4]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-0a95aab4]{width:auto}.form-inpput-textarea[data-v-0a95aab4]{height:150px}.verification-wrapper[data-v-0a95aab4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-0a95aab4]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-0a95aab4]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-0a95aab4]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-0a95aab4]{overflow:hidden}.image[data-v-0a95aab4]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-0a95aab4]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-0a95aab4]{color:#ccc;line-height:30px}.rotate[data-v-0a95aab4]{-webkit-animation:myMove-data-v-0a95aab4 2s linear infinite;animation:myMove-data-v-0a95aab4 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-0a95aab4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-0a95aab4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-0a95aab4]{position:absolute;bottom:30px;width:100%;padding:0 80px}.bottom-tips[data-v-0a95aab4]{position:absolute;bottom:8px;text-align:center;width:100%;font-size:12px;color:#adadad}.contanner[data-v-0a95aab4]{width:100%;height:100%;padding:8px}.avatar-container[data-v-0a95aab4]{position:relative;text-align:center;padding-top:50%}.avatar[data-v-0a95aab4]{width:5rem;height:5rem;background-color:#e5e5e5;border-radius:50%}.item[data-v-0a95aab4]{line-height:3rem}.uni-form-item[data-v-0a95aab4]{margin-top:8px}body.?%PAGE?%[data-v-0a95aab4]{background-color:#fafafa}",""])},e3c8:function(a,t,e){"use strict";var i=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(e("222a")),o={data:function(){return{loading:!1,userDetailInfo:{userAvatar:"",nickName:""}}},onLoad:function(a){var t=JSON.parse(a.info),e=t.userAvatar;t.nickName;e&&(this.userDetailInfo.userAvatar=e),this.userDetailInfo.nickName=uni.getStorageSync("userInfo").nickName},methods:{upload:function(){uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(a){var t=a.tempFilePaths[0];uni.navigateTo({url:"/pages/components/uploadAvatar/upload?src="+t})}})},formSubmit:function(a){var t=this;this.loading=!0;var e=[{name:"userAvatar",required:!0,type:"text",errmsg:"请上传头像"},{name:"nickName",required:!0,type:"text",errmsg:"请填写昵称"}];this.userDetailInfo.id=uni.getStorageSync("userInfo").id;var i=this.$validate.validate(this.userDetailInfo,e);if(!i.isOk)return uni.showToast({icon:"none",title:i.errmsg}),!1;n.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(e){t.loading=!1;try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),t.userInfo=e.data.data,uni.setStorageSync("userInfo",e.data.data),setTimeout(function(){uni.switchTab({url:"/pages/me/index",animationType:"pop-in",animationDuration:200})},1200)}catch(a){}}})}}};t.default=o},ef7a:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"contanner"},[e("v-uni-form",{on:{submit:function(t){t=a.$handleEvent(t),a.formSubmit(t)},reset:function(t){t=a.$handleEvent(t),a.formReset(t)}}},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticStyle:{"text-align":"center","background-color":"#fff"}},[e("v-uni-image",{staticClass:"avatar",attrs:{src:a.userDetailInfo.userAvatar},on:{click:function(t){t=a.$handleEvent(t),a.upload(t)}}}),e("v-uni-view",{staticClass:"item flex",on:{click:function(t){t=a.$handleEvent(t),a.upload(t)}}},[a._v("点击头像上传")])],1)],1),e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-view",{staticClass:"form-lable"},[a._v("昵称：")]),e("v-uni-view",{staticClass:"form-inpput"},[e("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写昵称"},model:{value:a.userDetailInfo.nickName,callback:function(t){a.$set(a.userDetailInfo,"nickName",t)},expression:"userDetailInfo.nickName"}})],1)],1),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary",loading:a.loading,"form-type":"submit"}},[a._v("提交")])],1)],1)],1)},n=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return n})}}]);