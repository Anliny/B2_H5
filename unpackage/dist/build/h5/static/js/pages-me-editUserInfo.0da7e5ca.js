(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editUserInfo"],{1448:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"contanner"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)},reset:function(t){t=e.$handleEvent(t),e.formReset(t)}}},[a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("真实姓名")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写真实姓名"},model:{value:e.userDetailInfo.name,callback:function(t){e.$set(e.userDetailInfo,"name",t)},expression:"userDetailInfo.name"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("省份证号")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写身份证号"},model:{value:e.userDetailInfo.idCare,callback:function(t){e.$set(e.userDetailInfo,"idCare",t)},expression:"userDetailInfo.idCare"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("性别")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-radio-group",{staticClass:"form-radio-group",on:{change:function(t){t=e.$handleEvent(t),e.handleRadioChange(t)}}},e._l(e.sexList,function(t,i){return a("v-uni-label",{key:t.value,staticClass:"formRadio"},[a("v-uni-view",[a("v-uni-radio",{attrs:{value:t.value,checked:i+1===e.userDetailInfo.gender}})],1),a("v-uni-view",[e._v(e._s(t.name))])],1)}),1)],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("年龄")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-picker",{staticClass:"picker",attrs:{range:e.years},on:{change:function(t){t=e.$handleEvent(t),e.handleYearChange(t)}}},[e._v(e._s(e.years[e.yearsIndex]))])],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("出生日期")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-picker",{staticClass:"picker",attrs:{mode:"date",value:e.date,start:e.startDate,end:e.endDate},on:{change:function(t){t=e.$handleEvent(t),e.bindDateChange(t)}}},[e._v(e._s(e.date))])],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("身高")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-picker",{staticClass:"picker",attrs:{range:e.heights},on:{change:function(t){t=e.$handleEvent(t),e.handelheights(t)}}},[e._v(e._s(e.heights[e.heightsIndex]))])],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("民族")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写民族"},model:{value:e.userDetailInfo.nation,callback:function(t){e.$set(e.userDetailInfo,"nation",t)},expression:"userDetailInfo.nation"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("体重")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写体重"},model:{value:e.userDetailInfo.weight,callback:function(t){e.$set(e.userDetailInfo,"weight",t)},expression:"userDetailInfo.weight"}})],1)],1),a("v-uni-view",{staticClass:"uni-form-item uni-column"},[a("v-uni-view",{staticClass:"form-lable"},[e._v("学历")]),a("v-uni-view",{staticClass:"form-inpput"},[a("v-uni-picker",{staticClass:"picker",attrs:{range:e.educations},on:{change:function(t){t=e.$handleEvent(t),e.handelEducation(t)}}},[e._v(e._s(e.educations[e.educationIndex]))])],1)],1),a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"primary",loading:e.loading,"form-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},"162c":function(e,t,a){var i=a("71b9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("3c6ae3f0",i,!0,{sourceMap:!1,shadowMode:!1})},"205d":function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a481"),a("7f7f");var n=a("4d6c"),o=i(a("222a")),r={data:function(){var e=this.getDate({format:!0});return{loading:!1,heights:n.heights,heightsIndex:0,years:n.years,yearsIndex:0,educations:n.educations,educationIndex:0,date:e,sexList:[{value:"1",name:"男"},{value:"2",name:"女"}],userDetailInfo:{name:"",idCare:"",gender:0,age:"",birthday:"",height:"",nation:"",weight:"",education:""}}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(e){var t=JSON.parse(e.data),a=t.name,i=t.idCare,n=t.gender,o=t.birthday,r=t.age,s=t.height,l=t.nation,u=t.weight,c=t.education;this.userDetailInfo={name:a||"",idCare:i||"",gender:n,age:r,birthday:o,height:s,nation:l||"",weight:u||"",education:c};var d=r||"请选择年龄";this.yearsIndex=this.years.indexOf(d);var f=s||"请选择身高";this.heightsIndex=this.heights.indexOf(f);var v=c||"请选择学历";this.educationIndex=this.educations.indexOf(v),this.date=o||new Date},methods:{formSubmit:function(e){var t=this,a=[{name:"name",required:!0,type:"text",errmsg:"请输入真实姓名"},{name:"idCare",required:!0,type:"text",errmsg:"请输入身份证号"},{name:"gender",required:!0,type:"text",errmsg:"请选择性别"},{name:"age",required:!0,type:"text",errmsg:"请选择年龄"},{name:"birthday",required:!0,type:"text",errmsg:"请选择出生日期"},{name:"height",required:!0,type:"text",errmsg:"请选择身高"},{name:"nation",required:!0,type:"text",errmsg:"请填写民族"},{name:"weight",required:!0,type:"text",errmsg:"请填写体重"},{name:"education",required:!0,type:"text",errmsg:"请选择学历"}],i=this.$validate.validate(this.userDetailInfo,a);if(console.log(this.userDetailInfo),!i.isOk)return uni.showToast({icon:"none",title:i.errmsg}),!1;this.userDetailInfo.id=uni.getStorageSync("userInfo").id,o.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(a){try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),t.userInfo=a.data.data,uni.setStorageSync("userInfo",a.data.data),setTimeout(function(){t.$router.replace("/pages/me/detail")},1200)}catch(e){}}})},formReset:function(e){console.log("清空数据")},bindPickerChange:function(e){console.log("picker发送选择改变，携带值为",e.target.value),this.index=e.target.value},handleYearChange:function(e){console.log(e),this.yearsIndex=e.detail.value,this.userDetailInfo.age=n.years[this.yearsIndex]},getDate:function(e){var t=new Date,a=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(a,"-").concat(i,"-").concat(n)},bindDateChange:function(e){this.date=e.target.value,this.userDetailInfo.birthday=this.date},handleRadioChange:function(e){console.log(e),this.userDetailInfo.gender=e.target.value},handelheights:function(e){this.heightsIndex=e.target.value,this.userDetailInfo.height=n.heights[this.heightsIndex]},handelEducation:function(e){this.educationIndex=e.target.value,this.userDetailInfo.education=n.educations[this.educationIndex]}}};t.default=r},"222a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={baseRequest:function(e){try{var t=uni.getStorageSync("token");t?(e.header?e.header["Authorization"]=t.token:e.header={Authorization:t.token},uni.request(e)):uni.showToast({title:"用户信息不存在",success:function(){uni.redirectTo({url:"/pages/login/index",success:function(){uni.hideToast()}})}})}catch(a){uni.showToast({title:"用户信息不存在"})}}},n=i;t.default=n},"4d6c":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activeUser=t.jobYars=t.marrys=t.Vips=t.educations=t.years=t.heights=void 0;var i=function(){for(var e=["请选择身高"],t=140;t<=240;t++)e.push("".concat(t));return e}();t.heights=i;var n=function(e,t){for(var a=["请选择年龄"],i=e;i<=t;i++)a.push("".concat(i));return a}(18,60);t.years=n;var o=["请选择学历","小学","初中","高中","全日制专科","全日制本科","硕士研究生","博士研究生"];t.educations=o;var r=[{val:1,label:"普通会员"},{val:2,label:"银卡会员"},{val:3,label:"金卡会员"},{val:4,label:"砖石会员"},{val:5,label:"黑卡会员"}];t.Vips=r;var s=[{val:"",label:"请选择婚姻状况"},{val:1,label:"未婚"},{val:2,label:"离异"},{val:3,label:"丧偶"}];t.marrys=s;var l=function(e,t){for(var a=["请选择工作年限"],i=e;i<=t;i++)a.push("".concat(i));return a}(1,20);t.jobYars=l;var u=function(e,t){for(var a=["请选择活动人数"],i=e;i<=t;i++)a.push("".concat(i));return a}(1,100);t.activeUser=u},"4fde":function(e,t,a){"use strict";a.r(t);var i=a("1448"),n=a("5969");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("f9ad");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"7c9ab1b2",null);t["default"]=s.exports},5969:function(e,t,a){"use strict";a.r(t);var i=a("205d"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},"71b9":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"/* 主页面样式 */uni-page-body[data-v-7c9ab1b2]{background-color:#fafafa}uni-view[data-v-7c9ab1b2]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}.uni-button[data-v-7c9ab1b2]{font-size:14px}\r\n/* 表单样式 */.uni-form-item[data-v-7c9ab1b2]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-7c9ab1b2]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-7c9ab1b2],.form-inpput .uni-input-input[data-v-7c9ab1b2]{font-size:13px}.form-inpput .form-radio-group[data-v-7c9ab1b2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-7c9ab1b2]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-7c9ab1b2]{font-size:14px}.form-lable[data-v-7c9ab1b2]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-7c9ab1b2]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-7c9ab1b2]{width:auto}.form-inpput-textarea[data-v-7c9ab1b2]{height:150px}.verification-wrapper[data-v-7c9ab1b2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-7c9ab1b2]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-7c9ab1b2]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-7c9ab1b2]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-7c9ab1b2]{overflow:hidden}.image[data-v-7c9ab1b2]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-7c9ab1b2]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-7c9ab1b2]{color:#ccc;line-height:30px}.rotate[data-v-7c9ab1b2]{-webkit-animation:myMove-data-v-7c9ab1b2 2s linear infinite;animation:myMove-data-v-7c9ab1b2 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-7c9ab1b2{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-7c9ab1b2{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.img-wrapper[data-v-7c9ab1b2]{height:200px}.bar-wrapper[data-v-7c9ab1b2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-7c9ab1b2]{border-bottom:%?2?% solid #f7a;line-height:%?80?%;margin-left:10px;font-size:16px}.content[data-v-7c9ab1b2]{padding:%?20?%}.tips[data-v-7c9ab1b2]{color:#8f8f94;line-height:35px;font-size:14px}body.?%PAGE?%[data-v-7c9ab1b2]{background-color:#fafafa}",""])},f9ad:function(e,t,a){"use strict";var i=a("162c"),n=a.n(i);n.a}}]);