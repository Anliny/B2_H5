(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editUserInfomation"],{5927:function(e,t,i){var a=i("f49f");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("9f9f63be",a,!0,{sourceMap:!1,shadowMode:!1})},7568:function(e,t,i){"use strict";var a=i("5927"),n=i.n(a);n.a},af7d:function(e,t,i){"use strict";i.r(t);var a=i("fd69"),n=i("ed3f");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("7568");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"66dd86e7",null);t["default"]=r.exports},b893:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("f499"));i("7514");var o=i("f36b"),s=a(i("58ba")),r=a(i("3b6f")),d={components:{lotusAddress:r.default},data:function(){return{isAdress:0,loading:!1,marrys:o.marrys,marrysIndex:0,userDetailInfo:{position:"",nativePlace:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},currentAddress:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},industry:"",isMarry:""},lotusAddressData:{visible:!1,provinceName:"",cityName:"",townName:""},region:""}},onLoad:function(e){var t=this,i=JSON.parse(e.info),a=i.position,n=i.nativePlace,s=i.currentAddress,r=i.industry,d=i.isMarry;n=n?JSON.parse(n):{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},s=s?JSON.parse(s):{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},this.userDetailInfo={position:a||"",industry:r||"",isMarry:d||"",nativePlace:n,currentAddress:s},o.marrys.find(function(e,i){e.val==d&&(t.marrysIndex=i)})},methods:{formSubmit:function(e){var t=this,i=[{name:"position",required:!0,type:"text",errmsg:"请输入职位"},{name:"industry",required:!0,type:"text",errmsg:"请输入行业"}];this.userDetailInfo.id=uni.getStorageSync("userInfo").id,console.log(this.userDetailInfo);var a=this.$validate.validate(this.userDetailInfo,i);if(!a.isOk)return uni.showToast({icon:"none",title:a.errmsg}),!1;var o=this.userDetailInfo,r=o.currentAddress,d=o.id,l=o.industry,u=o.isMarry,c=o.nativePlace,f=o.position;console.log((0,n.default)(r));var p={currentAddress:(0,n.default)(r),id:d,industry:l,isMarry:u,nativePlace:(0,n.default)(c),position:f};s.default.baseRequest({url:"member/save",data:p,method:"post",success:function(i){try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),t.userInfo=i.data.data,uni.setStorageSync("userInfo",i.data.data),setTimeout(function(){uni.switchTab({url:"/pages/me/index",animationType:"pop-in",animationDuration:200})},1200)}catch(e){}}})},formReset:function(e){console.log("清空数据")},handleMarryChange:function(e){this.marrysIndex=e.target.value,this.userDetailInfo.isMarry=o.marrys[this.marrysIndex].val},bindPickerChange:function(e){console.log("picker发送选择改变，携带值为",e.target.value),this.index=e.target.value},handleCheckNativePlace:function(){this.isAdress=1,this.openPicker()},handleCheckAdress:function(){this.isAdress=2,this.openPicker()},openPicker:function(){this.lotusAddressData.visible=!0;var e=this.userDetailInfo,t=e.nativePlace,i=e.currentAddress;1==this.isAdress&&(this.lotusAddressData.provinceName=t.province,this.lotusAddressData.cityName=t.city,this.lotusAddressData.townName=t.town),2==this.isAdress&&(this.lotusAddressData.provinceName=i.province,this.lotusAddressData.cityName=i.city,this.lotusAddressData.townName=i.town)},choseValue:function(e){this.lotusAddressData.visible=e.visible,e.isChose&&(console.log(this.isAdress),1==this.isAdress&&(console.log(e),this.userDetailInfo.nativePlace=e),2==this.isAdress&&(this.userDetailInfo.currentAddress=e),this.region="".concat(e.province," ").concat(e.city," ").concat(e.town)),this.isAdress=0}}};t.default=d},ed3f:function(e,t,i){"use strict";i.r(t);var a=i("b893"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},f49f:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"/* 主页面样式 */uni-page-body[data-v-66dd86e7]{background-color:#fafafa}uni-view[data-v-66dd86e7]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}uni-button[data-v-66dd86e7]{font-size:14px;line-height:2.3}\r\n/* 表单样式 */.uni-form-item[data-v-66dd86e7]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-66dd86e7]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-66dd86e7],.form-inpput .uni-input-input[data-v-66dd86e7]{font-size:13px}.form-inpput .form-radio-group[data-v-66dd86e7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-66dd86e7]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-66dd86e7]{font-size:14px}.form-lable[data-v-66dd86e7]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-66dd86e7]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-66dd86e7]{width:auto}.form-inpput-textarea[data-v-66dd86e7]{height:150px}.verification-wrapper[data-v-66dd86e7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-66dd86e7]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-66dd86e7]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-66dd86e7]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-66dd86e7]{overflow:hidden}.image[data-v-66dd86e7]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-66dd86e7]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-66dd86e7]{color:#ccc;line-height:30px}.rotate[data-v-66dd86e7]{-webkit-animation:myMove-data-v-66dd86e7 2s linear infinite;animation:myMove-data-v-66dd86e7 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-66dd86e7{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-66dd86e7{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-66dd86e7]{position:absolute;bottom:30px;width:100%;padding:0 80px}.img-wrapper[data-v-66dd86e7]{height:200px}.bar-wrapper[data-v-66dd86e7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-66dd86e7]{border-bottom:%?2?% solid #f7a;line-height:%?80?%;margin-left:10px;font-size:16px}.content[data-v-66dd86e7]{padding:%?20?%}.tips[data-v-66dd86e7]{color:#8f8f94;line-height:35px;font-size:14px}body.?%PAGE?%[data-v-66dd86e7]{background-color:#fafafa}",""])},fd69:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"contanner"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)},reset:function(t){t=e.$handleEvent(t),e.formReset(t)}}},[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("职位")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写职位信息"},model:{value:e.userDetailInfo.position,callback:function(t){e.$set(e.userDetailInfo,"position",t)},expression:"userDetailInfo.position"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("籍贯")]),i("v-uni-view",{staticClass:"form-inpput",on:{click:function(t){t=e.$handleEvent(t),e.handleCheckNativePlace(t)}}},[e.userDetailInfo.nativePlace.province?[e._v(e._s(e.userDetailInfo.nativePlace.province)+"\n\t\t\t\t\t\t"+e._s(e.userDetailInfo.nativePlace.city)+"\n\t\t\t\t\t\t"+e._s(e.userDetailInfo.nativePlace.town))]:[e._v("请选择籍贯")]],2)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("现住地址")]),i("v-uni-view",{staticClass:"form-inpput",on:{click:function(t){t=e.$handleEvent(t),e.handleCheckAdress(t)}}},[e._v(e._s(e.userDetailInfo.currentAddress.province)+"\n\t\t\t\t\t"+e._s(e.userDetailInfo.currentAddress.city)+"\n\t\t\t\t\t"+e._s(e.userDetailInfo.currentAddress.town))])],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("行业")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写所在行业"},model:{value:e.userDetailInfo.industry,callback:function(t){e.$set(e.userDetailInfo,"industry",t)},expression:"userDetailInfo.industry"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("是否婚配")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-picker",{staticClass:"picker",attrs:{range:e.marrys,"range-key":"label"},on:{change:function(t){t=e.$handleEvent(t),e.handleMarryChange(t)}}},[e._v(e._s(e.marrys[e.marrysIndex].label))])],1)],1),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary",loading:e.loading,"form-type":"submit"}},[e._v("提交")])],1)],1)],1),i("lotus-address",{attrs:{lotusAddressData:e.lotusAddressData},on:{choseVal:function(t){t=e.$handleEvent(t),e.choseValue(t)}}})],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})}}]);