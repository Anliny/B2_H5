(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-setings-index"],{"0d6e":function(t,e,a){"use strict";a.r(e);var i=a("1baf"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},"1baf":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a("f36b"),n=(i(a("58ba")),{data:function(){return{loading:!1,vips:o.Vips,vipIndex:0,userDetailInfo:{phone:"",wechatNumber:""}}},computed:{},methods:{switch2Change:function(t){}}});e.default=n},"3c4e":function(t,e,a){var i=a("d47e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("32854a9b",i,!0,{sourceMap:!1,shadowMode:!1})},"58ba":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={baseRequest:function(t){try{var e=uni.getStorageSync("token");e?(t.header?t.header["Authorization"]=e.token:t.header={Authorization:e.token},t.url=t.url,uni.request(t)):uni.showToast({title:"用户信息不存在"})}catch(a){uni.showToast({title:"用户信息不存在"})}}},o=i;e.default=o},"6bcf":function(t,e,a){"use strict";a.r(e);var i=a("9be7"),o=a("0d6e");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("b9d4");var r=a("2877"),d=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"0366db34",null);e["default"]=d.exports},"9be7":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"contanner"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable",staticStyle:{width:"40vw"}},[t._v("信息是否公开：")]),a("v-uni-switch",{staticStyle:{width:"60vw"},on:{change:function(e){e=t.$handleEvent(e),t.switch2Change(e)}}})],1),a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"warn",plain:!0,"form-type":"submit"}},[t._v("注销账号")])],1)],1)],1)},o=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})},b9d4:function(t,e,a){"use strict";var i=a("3c4e"),o=a.n(i);o.a},d47e:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"/* 主页面样式 */uni-page-body[data-v-0366db34]{background-color:#fafafa}uni-view[data-v-0366db34]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}.uni-button[data-v-0366db34]{font-size:14px}\r\n/* 表单样式 */.uni-form-item[data-v-0366db34]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-0366db34]{width:75vw;line-height:35px;background-color:#fff;font-size:14px}.form-inpput .placeholder[data-v-0366db34],.form-inpput .uni-input-input[data-v-0366db34]{font-size:14px}.form-inpput .form-radio-group[data-v-0366db34]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-0366db34]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-0366db34]{font-size:14px}.form-lable[data-v-0366db34]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-0366db34]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-0366db34]{width:auto}.form-inpput-textarea[data-v-0366db34]{height:150px}.verification-wrapper[data-v-0366db34]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-0366db34]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-0366db34]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-0366db34]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-0366db34]{overflow:hidden}.image[data-v-0366db34]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-0366db34]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-0366db34]{color:#ccc;line-height:30px}.rotate[data-v-0366db34]{-webkit-animation:myMove-data-v-0366db34 2s linear infinite;animation:myMove-data-v-0366db34 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-0366db34{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-0366db34{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.img-wrapper[data-v-0366db34]{height:200px}.bar-wrapper[data-v-0366db34]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-0366db34]{border-bottom:%?2?% solid #f7a;line-height:%?80?%;margin-left:10px;font-size:16px}.content[data-v-0366db34]{padding:%?20?%}.tips[data-v-0366db34]{color:#8f8f94;line-height:35px;font-size:14px}body.?%PAGE?%[data-v-0366db34]{background-color:#fafafa}",""])},f36b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.activeUser=e.jobYars=e.marrys=e.Vips=e.educations=e.years=e.heights=void 0;var i=function(){for(var t=["请选择身高"],e=140;e<=240;e++)t.push("".concat(e));return t}();e.heights=i;var o=function(t,e){for(var a=["请选择年龄"],i=t;i<=e;i++)a.push("".concat(i));return a}(18,60);e.years=o;var n=["请选择学历","小学","初中","高中","全日制专科","全日制本科","硕士研究生","博士研究生"];e.educations=n;var r=[{val:1,label:"普通会员"},{val:2,label:"银卡会员"},{val:3,label:"金卡会员"},{val:4,label:"砖石会员"},{val:5,label:"黑卡会员"}];e.Vips=r;var d=[{val:1,label:"未婚"},{val:2,label:"离异"},{val:3,label:"丧偶"}];e.marrys=d;var s=function(t,e){for(var a=["请选择工作年限"],i=t;i<=e;i++)a.push("".concat(i));return a}(1,20);e.jobYars=s;var l=function(t,e){for(var a=["请选择活动人数"],i=t;i<=e;i++)a.push("".concat(i));return a}(1,100);e.activeUser=l}}]);