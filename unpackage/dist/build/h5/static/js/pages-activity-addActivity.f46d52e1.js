(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-addActivity"],{1177:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"/* 主页面样式 */uni-page-body[data-v-11c01190]{background-color:#fafafa}uni-view[data-v-11c01190]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}.uni-button[data-v-11c01190]{font-size:14px}\r\n/* 表单样式 */.uni-form-item[data-v-11c01190]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-11c01190]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-11c01190],.form-inpput .uni-input-input[data-v-11c01190]{font-size:13px}.form-inpput .form-radio-group[data-v-11c01190]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-11c01190]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-11c01190]{font-size:14px}.form-lable[data-v-11c01190]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-11c01190]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-11c01190]{width:auto}.form-inpput-textarea[data-v-11c01190]{height:150px}.verification-wrapper[data-v-11c01190]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-11c01190]{-webkit-box-sizing:content-box;box-sizing:content-box}.verification-btn[data-v-11c01190]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\r\n/* 卡片阴影 */.card-shadow[data-v-11c01190]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\r\n/* 图片 */.image-wrapper[data-v-11c01190]{overflow:hidden}.image[data-v-11c01190]{width:100%;height:100%}\r\n/* 两行超出显示··· */.text-two-line[data-v-11c01190]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\r\n/* 加载跟多 */.loadMore[data-v-11c01190]{color:#ccc;line-height:30px}.rotate[data-v-11c01190]{-webkit-animation:myMove-data-v-11c01190 2s linear infinite;animation:myMove-data-v-11c01190 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-11c01190{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-11c01190{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.content[data-v-11c01190]{padding:8px}.uni-form-item[data-v-11c01190]{height:auto}body.?%PAGE?%[data-v-11c01190]{background-color:#fafafa}",""])},"222a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={baseRequest:function(t){try{var e=uni.getStorageSync("token");e?(t.header?t.header["Authorization"]=e.token:t.header={Authorization:e.token},uni.request(t)):uni.showToast({title:"用户信息不存在",success:function(){uni.redirectTo({url:"/pages/login/index",success:function(){uni.hideToast()}})}})}catch(i){uni.showToast({title:"用户信息不存在"})}}},n=a;e.default=n},2574:function(t,e,i){"use strict";i.r(e);var a=i("96d9"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"4d6c":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.activeUser=e.jobYars=e.marrys=e.Vips=e.educations=e.years=e.heights=void 0;var a=function(){for(var t=["请选择身高"],e=140;e<=240;e++)t.push("".concat(e));return t}();e.heights=a;var n=function(t,e){for(var i=["请选择年龄"],a=t;a<=e;a++)i.push("".concat(a));return i}(18,60);e.years=n;var o=["请选择学历","小学","初中","高中","全日制专科","全日制本科","硕士研究生","博士研究生"];e.educations=o;var r=[{val:1,label:"普通会员"},{val:2,label:"银卡会员"},{val:3,label:"金卡会员"},{val:4,label:"砖石会员"},{val:5,label:"黑卡会员"}];e.Vips=r;var s=[{val:"",label:"请选择婚姻状况"},{val:1,label:"未婚"},{val:2,label:"离异"},{val:3,label:"丧偶"}];e.marrys=s;var c=function(t,e){for(var i=["请选择工作年限"],a=t;a<=e;a++)i.push("".concat(a));return i}(1,20);e.jobYars=c;var l=function(t,e){for(var i=["请选择活动人数"],a=t;a<=e;a++)i.push("".concat(a));return i}(1,100);e.activeUser=l},"564e":function(t,e,i){"use strict";var a=i("c6b7"),n=i.n(a);n.a},"67df":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".an-uploadImg-group[data-v-3d1bbac5]{margin:%?5?% 0}.an-img[data-v-3d1bbac5]{float:left;margin-right:%?10?%}.an-img-add[data-v-3d1bbac5]{float:left;margin-right:%?10?%;height:80px;width:80px;background-color:#ccc;text-align:center;line-height:80px}.an-img>uni-image[data-v-3d1bbac5]{height:80px;width:80px}.an-icon-close[data-v-3d1bbac5]{position:relative;right:-54px;top:-85px;width:26px;height:26px;background-color:#fff}",""])},"81c8":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)},reset:function(e){e=t.$handleEvent(e),t.formReset(e)}}},[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("活动主题")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写活动标题"},model:{value:t.activity.title,callback:function(e){t.$set(t.activity,"title",e)},expression:"activity.title"}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-inpput",staticStyle:{width:"100vw"}},[i("v-uni-textarea",{staticStyle:{padding:"8px","line-break":"35px"},attrs:{value:t.activity.desc,"placeholder-style":"color:#cccccc",placeholder:"发布交友活动,可以填写活动内容,活动地点等说明信息"},on:{blur:function(e){e=t.$handleEvent(e),t.handleGetCon(e)}}})],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("开始日期")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-picker",{staticClass:"picker",attrs:{mode:"date",value:t.startTime,start:t.startDate,end:t.endDate},on:{change:function(e){e=t.$handleEvent(e),t.handleStartTime(e)}}},[t._v(t._s(t.startTime))])],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("结束日期")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-picker",{staticClass:"picker",attrs:{mode:"date",value:t.endTime,start:t.startDate,end:t.endDate},on:{change:function(e){e=t.$handleEvent(e),t.handleEndTime(e)}}},[t._v(t._s(t.endTime))])],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"form-lable"},[t._v("活动人数")]),i("v-uni-view",{staticClass:"form-inpput"},[i("v-uni-picker",{staticClass:"picker",attrs:{range:t.activeUser},on:{change:function(e){e=t.$handleEvent(e),t.handelactiveUser(e)}}},[t._v(t._s(t.activeUser[t.activeUserIndex]))])],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("an-upload-img",{ref:"uploadimg"})],1),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary","form-type":"submit"}},[t._v("发布")])],1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"83d6":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"an-uploadImg-group"},[i("v-uni-view",[t._l(t.imgList,function(e,a){return i("v-uni-view",{key:a,staticClass:"an-img",on:{click:function(e){e=t.$handleEvent(e),t.perviewImg(a)}}},[e?i("v-uni-image",{attrs:{src:e}}):t._e(),i("v-uni-view",{staticClass:"an-icon-close",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.handleRemove(a)}}},[i("uni-icons",{attrs:{type:"closeempty",size:"26",color:"#F00"}})],1)],1)}),i("v-uni-view",{staticClass:"an-img-add",on:{click:function(e){e=t.$handleEvent(e),t.chooseImage(e)}}},[i("uni-icons",{attrs:{type:"plus",size:"50",color:"#FFFFFF"}})],1)],2)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"96d9":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("7d34")),o={name:"AnUploadImg",components:{uniIcons:n.default},data:function(){return{imgList:[],imgBase64List:[]}},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:9,success:function(e){for(var i=0;i<e.tempFilePaths.length;i++)uni.uploadFile({url:"/common/multiUpload",filePath:e.tempFilePaths[i],name:"file",success:function(e){console.log(JSON.parse(e.data));var i=JSON.parse(e.data).data;console.log(i),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),t.imgList.push(i)}})}})},perviewImg:function(t){var e=[];-1!=t?e[0]=this.imgList[t]:e=this.imgList,uni.previewImage({urls:e})},handleRemove:function(t){for(var e=[],i=[],a=0;a<this.imgList.length;a++)a!=t&&(e.push(this.imgList[a]),i.push(this.imgBase64List[a]));this.imgList=e,this.imgBase64List=i}}};e.default=o},b01b:function(t,e,i){"use strict";i.r(e);var a=i("e127"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},bd07:function(t,e,i){"use strict";var a=i("bff0"),n=i.n(a);n.a},bff0:function(t,e,i){var a=i("67df");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("62b95394",a,!0,{sourceMap:!1,shadowMode:!1})},c6b7:function(t,e,i){var a=i("1177");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2272a750",a,!0,{sourceMap:!1,shadowMode:!1})},c8b4:function(t,e,i){"use strict";i.r(e);var a=i("83d6"),n=i("2574");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("bd07");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"3d1bbac5",null);e["default"]=s.exports},e127:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f499")),o=a(i("c8b4")),r=a(i("222a")),s=i("4d6c"),c={components:{anUploadImg:o.default},data:function(){var t=this.getDate({format:!0});return{startTime:t,endTime:t,imgObj:{url:"/common/multiUploads",fileList:[],name:"trackImg",limt:9},activeUser:s.activeUser,activeUserIndex:0,activity:{title:"",content:"",startTime:"",endTime:"",pictureUrl:[],activityNumber:0,state:1},upImgConfig:{iconReplace:""}}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{getDate:function(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(i,"-").concat(a,"-").concat(n)},handleStartTime:function(t){console.log(t),this.startTime=t.target.value,this.activity.startTime=t.target.value},handleEndTime:function(t){this.endTime=t.target.value,this.activity.endTime=t.target.value},handelactiveUser:function(t){this.activeUserIndex=t.target.value,this.activity.activityNumber=this.activeUser[this.activeUserIndex]},formSubmit:function(){var t=this,e=(0,n.default)(this.$refs.uploadimg.imgList);this.activity.pictureUrl=e;var i=[{name:"title",required:!0,type:"text",errmsg:"请填写活动标题"},{name:"content",required:!0,type:"text",errmsg:"请填写活动详情"},{name:"startTime",required:!0,type:"text",errmsg:"请选择活动开始时间"},{name:"startTime",required:!0,type:"text",errmsg:"请选择活动结束时间"},{name:"activityNumber",required:!0,type:"text",errmsg:"请选择活动参与人数"}],a=this.$validate.validate(this.activity,i);if(!a.isOk)return uni.showToast({icon:"none",title:a.errmsg}),!1;r.default.baseRequest({url:"activity/save",data:this.activity,method:"post",success:function(e){t.loading=!1;try{uni.showToast({title:"活动保存成功！",icon:"success",showCancel:!1,success:function(){uni.switchTab({url:"/pages/activity/index?current=0",animationType:"pop-in",animationDuration:200,success:function(t){var e=getCurrentPages()[0];void 0!=e&&null!=e&&e.parmentOnLoad()}})}})}catch(i){}}})},formReset:function(){},handleGetCon:function(t){this.activity.content=t.detail.value}}};e.default=c},e8e0:function(t,e,i){"use strict";i.r(e);var a=i("81c8"),n=i("b01b");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("564e");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"11c01190",null);e["default"]=s.exports}}]);