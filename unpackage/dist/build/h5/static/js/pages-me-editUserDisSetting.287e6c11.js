(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editUserDisSetting"],{"1e0a":function(e,t,i){"use strict";var a=i("80d2"),n=i.n(a);n.a},"222a":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={baseRequest:function(e){try{var t=uni.getStorageSync("token");t?(e.header?e.header["Authorization"]=t.token:e.header={Authorization:t.token},uni.request(e)):(uni.showToast({title:"用户信息不存在,请登录",icon:"none"}),setTimeout(function(){uni.reLaunch({url:"/pages/login/index",success:function(){uni.hideToast()}})},2e3))}catch(i){uni.showToast({title:"用户信息不存在"})}},logOut:function(){try{uni.clearStorageSync(),uni.navigateTo({url:"/pages/login/index",animationType:"pop-in",animationDuration:200})}catch(e){}}},n=a;t.default=n},"4d6c":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activeUser=t.jobYars=t.marrys=t.Vips=t.educations=t.years=t.heights=void 0;var a=function(){for(var e=["请选择身高"],t=140;t<=240;t++)e.push("".concat(t));return e}();t.heights=a;var n=function(e,t){for(var i=["请选择年龄"],a=e;a<=t;a++)i.push("".concat(a));return i}(18,60);t.years=n;var o=["请选择学历","小学","初中","高中","全日制专科","全日制本科","硕士研究生","博士研究生"];t.educations=o;var r=[{val:1,label:"普通会员"},{val:2,label:"银卡会员"},{val:3,label:"金卡会员"},{val:4,label:"砖石会员"},{val:5,label:"黑卡会员"}];t.Vips=r;var d=[{val:"",label:"请选择婚姻状况"},{val:1,label:"未婚"},{val:2,label:"离异"},{val:3,label:"丧偶"}];t.marrys=d;var s=function(e,t){for(var i=["请选择工作年限"],a=e;a<=t;a++)i.push("".concat(a));return i}(1,20);t.jobYars=s;var c=function(e,t){for(var i=["请选择活动人数"],a=e;a<=t;a++)i.push("".concat(a));return i}(1,100);t.activeUser=c},"5a6b":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"contanner"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)},reset:function(t){t=e.$handleEvent(t),e.formReset(t)}}},[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("私密可看权限")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-picker",{staticClass:"picker",attrs:{range:e.Vips,"range-key":"label"},on:{change:function(t){t=e.$handleEvent(t),e.handleVipsChange(t)}}},[e._v(e._s(e.Vips[e.VipsIndex].label))])],1)],1),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary",loading:e.loading,"form-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"80d2":function(e,t,i){var a=i("8309");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("d9827850",a,!0,{sourceMap:!1,shadowMode:!1})},8309:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"/* 主页面样式 */uni-page-body[data-v-2cdcde24]{background-color:#fafafa}uni-view[data-v-2cdcde24]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}uni-button[data-v-2cdcde24]{font-size:14px;line-height:2.3}\r\n/* 表单样式 */.uni-form-item[data-v-2cdcde24]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-2cdcde24]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-2cdcde24],.form-inpput .uni-input-input[data-v-2cdcde24]{font-size:13px}.form-inpput .form-radio-group[data-v-2cdcde24]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-2cdcde24]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-2cdcde24]{font-size:14px}.form-lable[data-v-2cdcde24]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-2cdcde24]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-2cdcde24]{width:auto}.form-inpput-textarea[data-v-2cdcde24]{height:150px}.verification-wrapper[data-v-2cdcde24]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-2cdcde24]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-2cdcde24]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-2cdcde24]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-2cdcde24]{overflow:hidden}.image[data-v-2cdcde24]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-2cdcde24]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-2cdcde24]{color:#ccc;line-height:30px}.rotate[data-v-2cdcde24]{-webkit-animation:myMove-data-v-2cdcde24 2s linear infinite;animation:myMove-data-v-2cdcde24 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-2cdcde24{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-2cdcde24{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-2cdcde24]{position:absolute;bottom:30px;width:100%;padding:0 80px}.bottom-tips[data-v-2cdcde24]{position:absolute;bottom:8px;text-align:center;width:100%;font-size:12px;color:#adadad}.img-wrapper[data-v-2cdcde24]{height:200px}.bar-wrapper[data-v-2cdcde24]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-2cdcde24]{border-bottom:%?2?% solid #f7a;line-height:%?80?%;margin-left:10px;font-size:16px}.content[data-v-2cdcde24]{padding:%?20?%}.tips[data-v-2cdcde24]{color:#8f8f94;line-height:35px;font-size:14px}body.?%PAGE?%[data-v-2cdcde24]{background-color:#fafafa}",""])},b956:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("7514");var n=i("4d6c"),o=a(i("222a")),r={components:{},data:function(){return{loading:!1,Vips:n.Vips,VipsIndex:0,userDetailInfo:{level:""}}},onLoad:function(e){var t=this,i=JSON.parse(e.info),a=i.level;this.userDetailInfo={level:a||""},n.Vips.find(function(e,i){e.val==a&&(t.VipsIndex=i)})},methods:{formSubmit:function(e){var t=this,i=[{name:"level",required:!0,type:"text",errmsg:"请输入职位"}];this.userDetailInfo.id=uni.getStorageSync("userInfo").id;var a=this.$validate.validate(this.userDetailInfo,i);if(!a.isOk)return uni.showToast({icon:"none",title:a.errmsg}),!1;o.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(i){try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),t.userInfo=i.data.data,uni.setStorageSync("userInfo",i.data.data),setTimeout(function(){uni.switchTab({url:"/pages/me/index",animationType:"pop-in",animationDuration:200})},1200)}catch(e){}}})},formReset:function(e){console.log("清空数据")},handleVipsChange:function(e){this.VipsIndex=e.target.value,this.userDetailInfo.level=n.Vips[this.VipsIndex].val}}};t.default=r},c4c8:function(e,t,i){"use strict";i.r(t);var a=i("b956"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},d065:function(e,t,i){"use strict";i.r(t);var a=i("5a6b"),n=i("c4c8");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("1e0a");var r=i("2877"),d=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"2cdcde24",null);t["default"]=d.exports}}]);