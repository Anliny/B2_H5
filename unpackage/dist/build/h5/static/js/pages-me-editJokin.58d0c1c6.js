(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editJokin"],{"1ea5":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"/* 主页面样式 */uni-page-body[data-v-5f0eb7c1]{background-color:#fafafa}uni-view[data-v-5f0eb7c1]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}uni-button[data-v-5f0eb7c1]{font-size:14px;line-height:2.3}\r\n/* 表单样式 */.uni-form-item[data-v-5f0eb7c1]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-5f0eb7c1]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-5f0eb7c1],.form-inpput .uni-input-input[data-v-5f0eb7c1]{font-size:13px}.form-inpput .form-radio-group[data-v-5f0eb7c1]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-5f0eb7c1]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-5f0eb7c1]{font-size:14px}.form-lable[data-v-5f0eb7c1]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-5f0eb7c1]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-5f0eb7c1]{width:auto}.form-inpput-textarea[data-v-5f0eb7c1]{height:150px}.verification-wrapper[data-v-5f0eb7c1]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-5f0eb7c1]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-5f0eb7c1]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-5f0eb7c1]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-5f0eb7c1]{overflow:hidden}.image[data-v-5f0eb7c1]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-5f0eb7c1]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-5f0eb7c1]{color:#ccc;line-height:30px}.rotate[data-v-5f0eb7c1]{-webkit-animation:myMove-data-v-5f0eb7c1 2s linear infinite;animation:myMove-data-v-5f0eb7c1 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-5f0eb7c1{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-5f0eb7c1{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-5f0eb7c1]{position:absolute;bottom:30px;width:100%;padding:0 80px}.bottom-tips[data-v-5f0eb7c1]{position:absolute;bottom:8px;text-align:center;width:100%;font-size:12px;color:#adadad}.contanner[data-v-5f0eb7c1]{width:100%;height:100%;padding:8px}.avatar-container[data-v-5f0eb7c1]{position:relative;text-align:center;padding-top:50%}.avatar[data-v-5f0eb7c1]{width:5rem;height:5rem;background-color:#e5e5e5;border-radius:50%}.item[data-v-5f0eb7c1]{line-height:3rem}.uni-form-item[data-v-5f0eb7c1]{margin-top:8px}body.?%PAGE?%[data-v-5f0eb7c1]{background-color:#fafafa}",""])},"24a8":function(e,t,i){"use strict";i.r(t);var a=i("32e3"),n=i("97ff");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("ec4f");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"5f0eb7c1",null);t["default"]=r.exports},"32e3":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"contanner"},[i("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)},reset:function(t){t=e.$handleEvent(t),e.formReset(t)}}},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticStyle:{"text-align":"center","background-color":"#fff"}},[i("v-uni-image",{staticClass:"avatar",attrs:{src:e.jokinInfo.userAvatar},on:{click:function(t){t=e.$handleEvent(t),e.upload(t)}}}),i("v-uni-view",{staticClass:"item flex",on:{click:function(t){t=e.$handleEvent(t),e.upload(t)}}},[e._v("点击头像上传")])],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("姓名：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写昵称"},model:{value:e.jokinInfo.name,callback:function(t){e.$set(e.jokinInfo,"name",t)},expression:"jokinInfo.name"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("性别")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-radio-group",{staticClass:"form-radio-group",on:{change:function(t){t=e.$handleEvent(t),e.handleRadioChange(t)}}},e._l(e.sexList,function(t,a){return i("v-uni-label",{key:t.value,staticClass:"formRadio"},[i("v-uni-view",[i("v-uni-radio",{attrs:{value:t.value,checked:a+1===e.jokinInfo.gender}})],1),i("v-uni-view",[e._v(e._s(t.name))])],1)}),1)],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("年龄：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-picker",{staticClass:"picker",attrs:{range:e.years},on:{change:function(t){t=e.$handleEvent(t),e.handleYearChange(t)}}},[e._v(e._s(e.years[e.yearsIndex]))])],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("工作年限：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-picker",{staticClass:"picker",attrs:{range:e.jobYars},on:{change:function(t){t=e.$handleEvent(t),e.handlejobYarsChange(t)}}},[e._v(e._s(e.jobYars[e.jobYarIndex]))])],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("手机号：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写手机号"},model:{value:e.jokinInfo.phone,callback:function(t){e.$set(e.jokinInfo,"phone",t)},expression:"jokinInfo.phone"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("微信号：")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写微信号"},model:{value:e.jokinInfo.wechatNumber,callback:function(t){e.$set(e.jokinInfo,"wechatNumber",t)},expression:"jokinInfo.wechatNumber"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("籍贯：")]),i("v-uni-view",{staticClass:"form-inpput",on:{click:function(t){t=e.$handleEvent(t),e.handleCheckNativePlace(t)}}},[e._v(e._s(e.nativePlace))])],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("工作地：")]),i("v-uni-view",{staticClass:"form-inpput",on:{click:function(t){t=e.$handleEvent(t),e.handleCheckAdress(t)}}},[e._v(e._s(e.working))])],1),i("v-uni-view",{staticClass:"uni-form-item uni-column",staticStyle:{height:"auto"}},[i("v-uni-view",{staticClass:"form-lable"},[e._v("擅长领域：")]),i("v-uni-view",{staticClass:"form-inpput form-inpput-textarea"},[i("v-uni-textarea",{staticStyle:{"font-size":"14px","line-height":"35px"},attrs:{"placeholder-style":"color:#808080",placeholder:"请输入擅长领域"},on:{blur:function(t){t=e.$handleEvent(t),e.handleField(t)}},model:{value:e.jokinInfo.field,callback:function(t){e.$set(e.jokinInfo,"field",t)},expression:"jokinInfo.field"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column",staticStyle:{height:"auto"}},[i("v-uni-view",{staticClass:"form-lable"},[e._v("情感箴言：")]),i("v-uni-view",{staticClass:"form-inpput form-inpput-textarea"},[i("v-uni-textarea",{staticStyle:{"font-size":"14px","line-height":"35px"},attrs:{"placeholder-style":"color:#808080",placeholder:"请输入情感箴言"},on:{blur:function(t){t=e.$handleEvent(t),e.handleMotto(t)}},model:{value:e.jokinInfo.motto,callback:function(t){e.$set(e.jokinInfo,"motto",t)},expression:"jokinInfo.motto"}})],1)],1),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary",loading:e.loading,"form-type":"submit"}},[e._v("提交")])],1)],1),i("lotus-address",{attrs:{lotusAddressData:e.lotusAddressData},on:{choseVal:function(t){t=e.$handleEvent(t),e.choseValue(t)}}})],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"97ff":function(e,t,i){"use strict";i.r(t);var a=i("d7a3"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},d5fb:function(e,t,i){var a=i("1ea5");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("c64d76f4",a,!0,{sourceMap:!1,shadowMode:!1})},d7a3:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("f499"));i("7f7f");var o=a(i("222a")),s=a(i("0899")),r=i("4d6c"),l={components:{lotusAddress:s.default},data:function(){return{loading:!1,isAdress:0,sexList:[{value:"1",name:"男"},{value:"2",name:"女"}],years:r.years,yearsIndex:0,jobYars:r.jobYars,jobYarIndex:0,jokinInfo:{userAvatar:"",name:"",age:0,gender:0,workingLife:"",phone:"",wechatNumber:"",nativePlace:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},workingAddress:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},field:"",motto:"",state:""},lotusAddressData:{visible:!1,provinceName:"",cityName:"",townName:""},region:"",matchmakerId:""}},computed:{working:function(){var e=this.jokinInfo.workingAddress,t=e.province,i=e.city,a=e.town;return"".concat(t).concat(i).concat(a)},nativePlace:function(){var e=this.jokinInfo.nativePlace,t=e.province,i=e.city,a=e.town;return"".concat(t).concat(i).concat(a)}},onLoad:function(e){this.matchmakerId=e.matchmakerId,this.getUserInfo()},methods:{getUserInfo:function(){var e=this;o.default.baseRequest({url:"matchmaker/queryById",data:{id:this.matchmakerId},method:"get",success:function(t){try{console.log(t);var i=t.data.data,a=i.userAvatar,n=i.name,o=i.gender,s=i.age,r=i.workingLife,l=i.phone,c=i.wechatNumber,d=i.nativePlace,u=i.workingAddress,f=i.field,v=i.motto;e.jokinInfo={userAvatar:a,name:n,gender:o,age:s,workingLife:r,phone:l,wechatNumber:c,nativePlace:JSON.parse(d),workingAddress:JSON.parse(u),field:f,motto:v};var p=s||"请选择年龄";e.yearsIndex=e.years.indexOf(p),e.jobYarIndex=e.jobYars.indexOf(r),console.log(e.jobYarIndex)}catch(m){}}})},upload:function(){uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t=e.tempFilePaths[0];uni.navigateTo({url:"/pages/components/uploadAvatar/jokinAvatar?src="+t})}})},formSubmit:function(e){var t=this;this.loading=!0;var i=[{name:"userAvatar",required:!0,type:"text",errmsg:"请上传头像"},{name:"name",required:!0,type:"text",errmsg:"请填写名称"},{name:"gender",required:!0,type:"text",errmsg:"请填写请选择性别"},{name:"age",required:!0,type:"text",errmsg:"请填写请选择年龄"},{name:"workingLife",required:!0,type:"text",errmsg:"请填写请选择工作年限"},{name:"phone",required:!0,type:"text",errmsg:"请填写手机号码"},{name:"wechatNumber",required:!0,type:"text",errmsg:"请填写微信号"},{name:"nativePlace",required:!0,type:"text",errmsg:"请选择籍贯"},{name:"workingAddress",required:!0,type:"text",errmsg:"请选择工作地点"},{name:"field",required:!0,type:"text",errmsg:"请填写擅长领域"},{name:"motto",required:!0,type:"text",errmsg:"请填写情感箴言"}];this.jokinInfo.id=uni.getStorageSync("userInfo").id,console.log(this.jokinInfo);var a=this.$validate.validate(this.jokinInfo,i);if(!a.isOk)return uni.showToast({icon:"none",title:a.errmsg}),!1;var s=this.jokinInfo,r=s.userAvatar,l=s.name,c=s.gender,d=s.id,u=s.workingLife,f=s.phone,v=s.wechatNumber,p=s.nativePlace,m=s.workingAddress,h=s.field,b=s.age,g=s.motto,w=s.state,x={userAvatar:r,name:l,gender:c,id:d,workingLife:u,phone:f,age:b,wechatNumber:v,nativePlace:(0,n.default)(p),workingAddress:(0,n.default)(m),field:h,motto:g,state:w};o.default.baseRequest({url:"matchmaker/save",data:x,method:"post",success:function(i){t.loading=!1;try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),uni.setStorageSync("userInfo",i.data.data),uni.switchTab({url:"/pages/me/index"})}catch(e){}}})},handleRadioChange:function(e){this.jokinInfo.gender=e.target.value},handleYearChange:function(e){this.yearsIndex=e.detail.value,this.jokinInfo.age=r.years[this.yearsIndex]},handlejobYarsChange:function(e){console.log(e),this.jobYarIndex=e.detail.value,this.jokinInfo.workingLife=r.jobYars[this.jobYarIndex]},handleCheckNativePlace:function(){this.isAdress=1,this.openPicker()},handleCheckAdress:function(){this.isAdress=2,console.log(1231),this.openPicker()},openPicker:function(){this.lotusAddressData.visible=!0;var e=this.jokinInfo;e.nativePlace,e.workingAddress},choseValue:function(e){this.lotusAddressData.visible=e.visible,e.isChose&&(console.log(this.isAdress),1==this.isAdress&&(console.log(e),this.jokinInfo.nativePlace=e),2==this.isAdress&&(this.jokinInfo.workingAddress=e)),this.isAdress=0},handleField:function(e){console.log(e)},handleMotto:function(e){console.log(e)}}};t.default=l},ec4f:function(e,t,i){"use strict";var a=i("d5fb"),n=i.n(a);n.a}}]);