(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editJokin"],{"24a8":function(e,t,a){"use strict";a.r(t);var i=a("d7ff"),n=a("97ff");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("8ae2");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"70ba2a23",null);t["default"]=r.exports},"4f58":function(e,t,a){var i=a("d374");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("1f05c605",i,!0,{sourceMap:!1,shadowMode:!1})},"8ae2":function(e,t,a){"use strict";var i=a("4f58"),n=a.n(i);n.a},"97ff":function(e,t,a){"use strict";a.r(t);var i=a("d7a3"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},d374:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"/* 主页面样式 */uni-page-body[data-v-70ba2a23]{background-color:#fafafa}uni-view[data-v-70ba2a23]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}.uni-button[data-v-70ba2a23]{font-size:14px}\r\n/* 表单样式 */.uni-form-item[data-v-70ba2a23]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-70ba2a23]{width:75vw;line-height:35px;background-color:#fff;font-size:14px}.form-inpput .placeholder[data-v-70ba2a23],.form-inpput .uni-input-input[data-v-70ba2a23]{font-size:14px}.form-inpput .form-radio-group[data-v-70ba2a23]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-70ba2a23]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-70ba2a23]{font-size:14px}.form-lable[data-v-70ba2a23]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-70ba2a23]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-70ba2a23]{width:auto}.form-inpput-textarea[data-v-70ba2a23]{height:150px}.verification-wrapper[data-v-70ba2a23]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-70ba2a23]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-70ba2a23]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-70ba2a23]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-70ba2a23]{overflow:hidden}.image[data-v-70ba2a23]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-70ba2a23]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-70ba2a23]{color:#ccc;line-height:30px}.rotate[data-v-70ba2a23]{-webkit-animation:myMove-data-v-70ba2a23 2s linear infinite;animation:myMove-data-v-70ba2a23 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-70ba2a23{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-70ba2a23{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.contanner[data-v-70ba2a23]{width:100%;height:100%;padding:8px}.avatar-container[data-v-70ba2a23]{position:relative;text-align:center;padding-top:50%}.avatar[data-v-70ba2a23]{width:5rem;height:5rem;background-color:#e5e5e5;border-radius:50%}.item[data-v-70ba2a23]{line-height:3rem}.uni-form-item[data-v-70ba2a23]{margin-top:8px}body.?%PAGE?%[data-v-70ba2a23]{background-color:#fafafa}",""])},d7a3:function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("f499"));a("7f7f");var o=i(a("222a")),s=i(a("0899")),r=a("4d6c"),l={components:{lotusAddress:s.default},data:function(){return{loading:!1,isAdress:0,current:0,sexList:[{value:"1",name:"男"},{value:"2",name:"女"}],years:r.years,yearsIndex:0,jobYars:r.jobYars,jobYarIndex:0,jokinInfo:{userAvatar:"",name:"",gender:"",workingLife:"",phone:"",wechatNumber:"",nativePlace:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},workingAddress:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},field:"",motto:"",state:""},lotusAddressData:{visible:!1,provinceName:"",cityName:"",townName:""},region:""}},onLoad:function(e){var t=e.userAvatar;t&&(this.jokinInfo.userAvatar=t)},methods:{upload:function(){uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t=e.tempFilePaths[0];uni.navigateTo({url:"/pages/components/uploadAvatar/jokinAvatar?src="+t})}})},formSubmit:function(e){var t=this;this.loading=!0;var a=[{name:"userAvatar",required:!0,type:"text",errmsg:"请上传头像"},{name:"name",required:!0,type:"text",errmsg:"请填写名称"},{name:"gender",required:!0,type:"text",errmsg:"请填写请选择性别"},{name:"age",required:!0,type:"text",errmsg:"请填写请选择年龄"},{name:"workingLife",required:!0,type:"text",errmsg:"请填写请选择工作年限"},{name:"phone",required:!0,type:"text",errmsg:"请填写手机号码"},{name:"wechatNumber",required:!0,type:"text",errmsg:"请填写微信号"},{name:"nativePlace",required:!0,type:"text",errmsg:"请选择籍贯"},{name:"workingAddress",required:!0,type:"text",errmsg:"请选择工作地点"},{name:"field",required:!0,type:"text",errmsg:"请填写擅长领域"},{name:"motto",required:!0,type:"text",errmsg:"请填写情感箴言"}];this.jokinInfo.id=uni.getStorageSync("userInfo").id,console.log(this.jokinInfo);var i=this.$validate.validate(this.jokinInfo,a);if(!i.isOk)return uni.showToast({icon:"none",title:i.errmsg}),!1;var s=this.jokinInfo,r=s.userAvatar,l=s.name,d=s.gender,u=s.id,c=s.workingLife,v=s.phone,f=s.wechatNumber,p=s.nativePlace,m=s.workingAddress,h=s.field,b=s.motto,w=s.state,g={userAvatar:r,name:l,gender:d,id:u,workingLife:c,phone:v,wechatNumber:f,nativePlace:(0,n.default)(p),workingAddress:(0,n.default)(m),field:h,motto:b,state:w};o.default.baseRequest({url:"matchmaker/save",data:g,method:"post",success:function(a){t.loading=!1;try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),uni.setStorageSync("userInfo",a.data.data),uni.switchTab({url:"/pages/me/index"})}catch(e){}}})},handleRadioChange:function(e){this.jokinInfo.gender=e.target.value},handleYearChange:function(e){this.yearsIndex=e.detail.value,this.jokinInfo.age=r.years[this.yearsIndex]},handlejobYarsChange:function(e){console.log(e),this.jobYarIndex=e.detail.value,this.jokinInfo.workingLife=r.jobYars[this.jobYarIndex]},handleCheckNativePlace:function(){this.isAdress=1,this.openPicker()},handleCheckAdress:function(){this.isAdress=2,console.log(1231),this.openPicker()},openPicker:function(){this.lotusAddressData.visible=!0;var e=this.jokinInfo,t=e.nativePlace,a=e.workingAddress;1==this.isAdress&&(this.lotusAddressData.provinceName=t.province,this.lotusAddressData.cityName=t.city,this.lotusAddressData.townName=t.town),2==this.isAdress&&(this.lotusAddressData.provinceName=a.province,this.lotusAddressData.cityName=a.city,this.lotusAddressData.townName=a.town)},choseValue:function(e){this.lotusAddressData.visible=e.visible,e.isChose&&(console.log(this.isAdress),1==this.isAdress&&(console.log(e),this.jokinInfo.nativePlace=e),2==this.isAdress&&(this.jokinInfo.workingAddress=e),this.region="".concat(e.province," ").concat(e.city," ").concat(e.town)),this.isAdress=0},handleField:function(e){console.log(e)},handleMotto:function(e){console.log(e)}}};t.default=l},d7ff:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"contanner"},[a("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)},reset:function(t){t=e.$handleEvent(t),e.formReset(t)}}},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticStyle:{"text-align":"center","background-color":"#fff"}},[a("v-uni-image",{staticClass:"avatar",attrs:{src:e.jokinInfo.userAvatar},on:{click:function(t){t=e.$handleEvent(t),e.upload(t)}}}),a("v-uni-view",{staticClass:"item flex",on:{click:function(t){t=e.$handleEvent(t),e.upload(t)}}},[e._v("点击头像上传")])],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("姓名：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写昵称"},model:{value:e.jokinInfo.name,callback:function(t){e.$set(e.jokinInfo,"name",t)},expression:"jokinInfo.name"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("性别")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-radio-group",{staticClass:"form-radio-group",on:{change:function(t){t=e.$handleEvent(t),e.handleRadioChange(t)}}},e._l(e.sexList,function(t,i){return a("v-uni-label",{key:t.value,staticClass:"formRadio"},[a("v-uni-view",[a("v-uni-radio",{attrs:{value:t.value,checked:i===e.current}})],1),a("v-uni-view",[e._v(e._s(t.name))])],1)}),1)],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("年龄：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-picker",{staticClass:"picker",attrs:{range:e.years},on:{change:function(t){t=e.$handleEvent(t),e.handleYearChange(t)}}},[e._v(e._s(e.years[e.yearsIndex]))])],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("工作年限：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-picker",{staticClass:"picker",attrs:{range:e.jobYars},on:{change:function(t){t=e.$handleEvent(t),e.handlejobYarsChange(t)}}},[e._v(e._s(e.jobYars[e.jobYarIndex]))])],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("手机号：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写手机号"},model:{value:e.jokinInfo.phone,callback:function(t){e.$set(e.jokinInfo,"phone",t)},expression:"jokinInfo.phone"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("微信号：")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写微信号"},model:{value:e.jokinInfo.wechatNumber,callback:function(t){e.$set(e.jokinInfo,"wechatNumber",t)},expression:"jokinInfo.wechatNumber"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("籍贯：")]),a("v-uni-view",{staticClass:"form-inpput",on:{click:function(t){t=e.$handleEvent(t),e.handleCheckNativePlace(t)}}},[e.jokinInfo.nativePlace.province?[e._v(e._s(e.jokinInfo.nativePlace.province)+"\n\t\t\t\t\t"+e._s(e.jokinInfo.nativePlace.city)+"\n\t\t\t\t\t"+e._s(e.jokinInfo.nativePlace.town))]:[e._v("请选择籍贯")]],2)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("工作地：")]),a("v-uni-view",{staticClass:"form-inpput",on:{click:function(t){t=e.$handleEvent(t),e.handleCheckAdress(t)}}},[e._v(e._s(e.jokinInfo.workingAddress.province)+"\n\t\t\t\t"+e._s(e.jokinInfo.workingAddress.city)+"\n\t\t\t\t"+e._s(e.jokinInfo.workingAddress.town))])],1),a("v-uni-view",{staticClass:"uni-form-item uni-column",staticStyle:{height:"auto"}},[a("v-uni-view",{staticClass:"form-lable"},[e._v("擅长领域：")]),a("v-uni-view",{staticClass:"form-inpput form-inpput-textarea"},[a("v-uni-textarea",{staticStyle:{"font-size":"14px","line-height":"35px"},attrs:{"placeholder-style":"color:#808080",placeholder:"请输入擅长领域"},on:{blur:function(t){t=e.$handleEvent(t),e.handleField(t)}},model:{value:e.jokinInfo.field,callback:function(t){e.$set(e.jokinInfo,"field",t)},expression:"jokinInfo.field"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column",staticStyle:{height:"auto"}},[a("v-uni-view",{staticClass:"form-lable"},[e._v("情感箴言：")]),a("v-uni-view",{staticClass:"form-inpput form-inpput-textarea"},[a("v-uni-textarea",{staticStyle:{"font-size":"14px","line-height":"35px"},attrs:{"placeholder-style":"color:#808080",placeholder:"请输入情感箴言"},on:{blur:function(t){t=e.$handleEvent(t),e.handleMotto(t)}},model:{value:e.jokinInfo.motto,callback:function(t){e.$set(e.jokinInfo,"motto",t)},expression:"jokinInfo.motto"}})],1)],1),a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"primary",loading:e.loading,"form-type":"submit"}},[e._v("提交")])],1)],1),a("lotus-address",{attrs:{lotusAddressData:e.lotusAddressData},on:{choseVal:function(t){t=e.$handleEvent(t),e.choseValue(t)}}})],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})}}]);