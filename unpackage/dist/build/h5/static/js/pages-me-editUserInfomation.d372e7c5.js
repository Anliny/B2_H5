(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editUserInfomation"],{1944:function(i,a,t){var e=t("8373");"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var n=t("4f06").default;n("f8e2fc62",e,!0,{sourceMap:!1,shadowMode:!1})},"62c6":function(i,a,t){"use strict";t.r(a);var e=t("c5b4"),n=t("e9e6");for(var o in n)"default"!==o&&function(i){t.d(a,i,function(){return n[i]})}(o);t("be12");var r=t("2877"),s=Object(r["a"])(n["default"],e["a"],e["b"],!1,null,"0d2afa86",null);a["default"]=s.exports},8373:function(i,a,t){a=i.exports=t("2350")(!1),a.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 主页面样式 */\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */$uni-color-primary:#f7a;$uni-color-success:#4cd964;$uni-color-warning:#f0ad4e;$uni-color-error:#dd524d;\n/* 文字基本颜色 */$uni-text-color:#333;\n/*基本色\r */$uni-text-color-inverse:#fff;\n/*反色\r */$uni-text-color-grey:#999;\n/*辅助灰色，如加载更多的提示信息\r */$uni-text-color-placeholder:grey;$uni-text-color-disable:silver;\n/* 背景颜色 */$uni-bg-color:#fff;$uni-bg-color-grey:#f8f8f8;$uni-bg-color-hover:#f1f1f1;\n/*点击状态颜色\r */$uni-bg-color-mask:rgba(0,0,0,.4);\n/*遮罩颜色\r */$uni-theme-color:#f7a;\n/* 边框颜色 */$uni-border-color:#c8c7cc;\n/* 尺寸变量 */\n/* 文字尺寸 */$uni-font-size-sm:24upx;$uni-font-size-base:28upx;$uni-font-size-lg:32upx;\n/* 图片尺寸 */$uni-img-size-sm:40upx;$uni-img-size-base:52upx;$uni-img-size-lg:80upx;\n/* Border Radius */$uni-border-radius-sm:4upx;$uni-border-radius-base:6upx;$uni-border-radius-lg:12upx;$uni-border-radius-circle:50%;\n/* 水平间距 */$uni-spacing-row-sm:10px;$uni-spacing-row-base:20upx;$uni-spacing-row-lg:30upx;\n/* 垂直间距 */$uni-spacing-col-sm:8upx;$uni-spacing-col-base:16upx;$uni-spacing-col-lg:24upx;\n/* 透明度 */$uni-opacity-disabled:.3;\n/* 组件禁用态的透明度\r */\n/* 文章场景相关 */$uni-color-title:#2c405a;\n/* 文章标题颜色\r */$uni-font-size-title:40upx;$uni-color-subtitle:#555;\n/* 二级标题颜色\r */$uni-font-size-subtitle:36upx;$uni-color-paragraph:#3f536e;\n/* 文章段落颜色\r */$uni-font-size-paragraph:30upx;\n/* 主页面样式 */.uni-body[data-v-0d2afa86],uni-page[data-v-0d2afa86],uni-page-head .uni-page-head[data-v-0d2afa86]{max-width:750px;min-width:320px;margin:auto}\n/* 主页面样式 */.uni-body[data-v-0d2afa86],uni-page[data-v-0d2afa86]{margin:auto;max-width:750px;min-width:320px}uni-page-body[data-v-0d2afa86]{background-color:#fafafa}uni-view[data-v-0d2afa86]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}uni-button[data-v-0d2afa86]{font-size:14px;line-height:2.3}\n/* 自定义header */.header.transparentFixed.fixed[data-v-0d2afa86]{height:44px}.header .title[data-v-0d2afa86]{font-size:16px!important;height:44px}\n/* 清除浮动 */.clearfix[data-v-0d2afa86]{*zoom:1}.clearfix[data-v-0d2afa86]:after{content:".";display:block;height:0;visibility:hidden;clear:both}\n/* 表单样式 */.uni-form-item[data-v-0d2afa86]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-0d2afa86]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-0d2afa86],.form-inpput .uni-input-input[data-v-0d2afa86]{font-size:13px}.form-inpput .form-radio-group[data-v-0d2afa86]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-0d2afa86]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-0d2afa86]{font-size:14px;height:35px}.form-lable[data-v-0d2afa86]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-0d2afa86]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-0d2afa86]{width:auto}.form-inpput-textarea[data-v-0d2afa86]{height:150px}.verification-wrapper[data-v-0d2afa86]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-0d2afa86]{-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.verification-btn[data-v-0d2afa86]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\n/* 卡片阴影 */.card-shadow[data-v-0d2afa86]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\n/* 图片 */.image-wrapper[data-v-0d2afa86]{overflow:hidden}.image[data-v-0d2afa86]{width:100%;height:100%}\n/* 两行超出显示··· */.text-two-line[data-v-0d2afa86]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\n/* 加载跟多 */.loadMore[data-v-0d2afa86]{color:#ccc;line-height:30px}.rotate[data-v-0d2afa86]{-webkit-animation:myMove-data-v-0d2afa86 2s linear infinite;animation:myMove-data-v-0d2afa86 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-0d2afa86{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-0d2afa86{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-0d2afa86]{position:absolute;bottom:30px;width:100%;padding:0 80px}.bottom-tips[data-v-0d2afa86]{position:absolute;bottom:8px;text-align:center;width:100%;font-size:12px;color:#adadad}\n/* 轮播图样式开始 */.uni-padding-wrap[data-v-0d2afa86]{width:100%}.swiper-item[data-v-0d2afa86]{width:100%;height:100%}.swiper-item uni-image[data-v-0d2afa86]{width:100%;height:176px}\n/* 轮播图样式结束 */\n/* 标签样式 */.item-lable[data-v-0d2afa86]{padding:0 6px;float:left;border:1px solid #dedede;margin:0 4px 4px 0;line-height:20px}.item-lable-active[data-v-0d2afa86]{border:1px solid #f7a;color:#f7a}\n/* 表单样式 */.edit-input[data-v-0d2afa86]{display:block}.edit-input .form-inpput[data-v-0d2afa86]{width:100%;background-color:rgba(0,0,0,0);height:40px;line-height:40px}.edit-input .form-address[data-v-0d2afa86]{border-bottom:1px solid #a0a0a0}.edit-input .form-inpput uni-input[data-v-0d2afa86]{height:40px;line-height:40px;border-bottom:1px solid #a0a0a0}.edit-input .form-inpput .picker[data-v-0d2afa86]{font-size:14px;height:35px;border-bottom:1px solid #a0a0a0}\n/* 表单段\r */.form-input-select[data-v-0d2afa86]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fafafa}.form-input-select>.form-input-item[data-v-0d2afa86]{-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;background-color:#fff;text-align:center}.form-input-select>.input-line[data-v-0d2afa86]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center}.uni-body[data-v-0d2afa86],uni-page[data-v-0d2afa86],uni-page-head .uni-page-head[data-v-0d2afa86]{max-width:750px;min-width:320px;margin:auto}.img-wrapper[data-v-0d2afa86]{height:200px}.bar-wrapper[data-v-0d2afa86]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-0d2afa86]{border-bottom:%?2?% solid #f7a;line-height:%?80?%;margin-left:10px;font-size:16px}.content[data-v-0d2afa86]{padding:%?20?%}.tips[data-v-0d2afa86]{color:#8f8f94;line-height:35px;font-size:14px}body.?%PAGE?%[data-v-0d2afa86]{background-color:#fafafa}',""])},be12:function(i,a,t){"use strict";var e=t("1944"),n=t.n(e);n.a},c5b4:function(i,a,t){"use strict";var e=function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("v-uni-view",{staticClass:"contanner"},[t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{on:{submit:function(a){a=i.$handleEvent(a),i.formSubmit(a)},reset:function(a){a=i.$handleEvent(a),i.formReset(a)}}},[t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"form-lable"},[i._v("职位")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写职位信息"},model:{value:i.userDetailInfo.position,callback:function(a){i.$set(i.userDetailInfo,"position",a)},expression:"userDetailInfo.position"}})],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"form-lable"},[i._v("籍贯")]),t("v-uni-view",{staticClass:"form-inpput",on:{click:function(a){a=i.$handleEvent(a),i.handleCheckNativePlace(a)}}},[i.userDetailInfo.nativePlace.province?[i._v(i._s(i.userDetailInfo.nativePlace.province)+"\n\t\t\t\t\t\t"+i._s(i.userDetailInfo.nativePlace.city)+"\n\t\t\t\t\t\t"+i._s(i.userDetailInfo.nativePlace.town))]:[i._v("请选择籍贯")]],2)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"form-lable"},[i._v("现住地址")]),t("v-uni-view",{staticClass:"form-inpput",on:{click:function(a){a=i.$handleEvent(a),i.handleCheckAdress(a)}}},[i._v(i._s(i.userDetailInfo.currentAddress.province)+"\n\t\t\t\t\t"+i._s(i.userDetailInfo.currentAddress.city)+"\n\t\t\t\t\t"+i._s(i.userDetailInfo.currentAddress.town))])],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"form-lable"},[i._v("行业")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写所在行业"},model:{value:i.userDetailInfo.industry,callback:function(a){i.$set(i.userDetailInfo,"industry",a)},expression:"userDetailInfo.industry"}})],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"form-lable"},[i._v("是否婚配")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-picker",{staticClass:"picker",attrs:{range:i.marrys,"range-key":"label"},on:{change:function(a){a=i.$handleEvent(a),i.handleMarryChange(a)}}},[i._v(i._s(i.marrys[i.marrysIndex].label))])],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"form-lable"},[i._v("是否有小孩")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-radio-group",{staticClass:"form-radio-group",on:{change:function(a){a=i.$handleEvent(a),i.handleRadioChange(a)}}},i._l(i.isChildList,function(a,e){return t("v-uni-label",{key:a.value,staticClass:"formRadio"},[t("v-uni-view",[t("v-uni-radio",{attrs:{value:a.value,checked:e===i.userDetailInfo.isChild}})],1),t("v-uni-view",[i._v(i._s(a.name))])],1)}),1)],1)],1),t("v-uni-view",{staticClass:"uni-btn-v"},[t("v-uni-button",{attrs:{type:"primary",loading:i.loading,"form-type":"submit"}},[i._v("提交")])],1)],1)],1),t("lotus-address",{attrs:{lotusAddressData:i.lotusAddressData},on:{choseVal:function(a){a=i.$handleEvent(a),i.choseValue(a)}}})],1)},n=[];t.d(a,"a",function(){return e}),t.d(a,"b",function(){return n})},cae0:function(i,a,t){"use strict";var e=t("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(t("f499"));t("7514");var o=t("4d6c"),r=e(t("222a")),s=e(t("0899")),d={components:{lotusAddress:s.default},data:function(){return{isAdress:0,loading:!1,marrys:o.marrys,marrysIndex:0,isChildList:[{value:"0",name:"有"},{value:"1",name:"无"}],userDetailInfo:{position:"",isChild:"",nativePlace:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},currentAddress:{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},industry:"",isMarry:""},lotusAddressData:{visible:!1,provinceName:"",cityName:"",townName:""},region:""}},onLoad:function(i){var a=this;console.log(i);var t=JSON.parse(i.info),e=t.position,n=t.nativePlace,r=t.currentAddress,s=t.industry,d=t.isMarry,l=t.isChild;n=n?JSON.parse(n):{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},r=r?JSON.parse(r):{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},this.userDetailInfo={position:e||"",industry:s||"",isMarry:d||"",isChild:l,nativePlace:n,currentAddress:r},o.marrys.find(function(i,t){i.val==d&&(a.marrysIndex=t)})},methods:{handleRadioChange:function(i){this.userDetailInfo.isChild=i.target.value},formSubmit:function(i){var a=this,t=[{name:"position",required:!0,type:"text",errmsg:"请输入职位"},{name:"industry",required:!0,type:"text",errmsg:"请输入行业"}];this.userDetailInfo.id=uni.getStorageSync("userInfo").id;var e=this.$validate.validate(this.userDetailInfo,t);if(!e.isOk)return uni.showToast({icon:"none",title:e.errmsg}),!1;var o=this.userDetailInfo,s=o.currentAddress,d=o.id,l=o.industry,u=o.isMarry,f=o.nativePlace,c=o.isChild,p=o.position,v={currentAddress:(0,n.default)(s),id:d,industry:l,isMarry:u,isChild:c,nativePlace:(0,n.default)(f),position:p};r.default.baseRequest({url:"member/save",data:v,method:"post",success:function(t){try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),a.userInfo=t.data.data,uni.setStorageSync("userInfo",t.data.data),setTimeout(function(){uni.switchTab({url:"/pages/me/index",animationType:"pop-in",animationDuration:200})},1200)}catch(i){}}})},formReset:function(i){console.log("清空数据")},handleMarryChange:function(i){this.marrysIndex=i.target.value,this.userDetailInfo.isMarry=o.marrys[this.marrysIndex].val},handleCheckNativePlace:function(){this.isAdress=1,this.openPicker()},handleCheckAdress:function(){this.isAdress=2,this.openPicker()},openPicker:function(){this.lotusAddressData.visible=!0;var i=this.userDetailInfo,a=i.nativePlace,t=i.currentAddress;1==this.isAdress&&(this.lotusAddressData.provinceName=a.province,this.lotusAddressData.cityName=a.city,this.lotusAddressData.townName=a.town),2==this.isAdress&&(this.lotusAddressData.provinceName=t.province,this.lotusAddressData.cityName=t.city,this.lotusAddressData.townName=t.town)},choseValue:function(i){this.lotusAddressData.visible=i.visible,i.isChose&&(1==this.isAdress&&(this.userDetailInfo.nativePlace=i),2==this.isAdress&&(this.userDetailInfo.currentAddress=i),this.region="".concat(i.province," ").concat(i.city," ").concat(i.town)),this.isAdress=0}}};a.default=d},e9e6:function(i,a,t){"use strict";t.r(a);var e=t("cae0"),n=t.n(e);for(var o in e)"default"!==o&&function(i){t.d(a,i,function(){return e[i]})}(o);a["default"]=n.a}}]);