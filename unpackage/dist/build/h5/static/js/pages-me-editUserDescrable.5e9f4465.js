(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-editUserDescrable"],{"0f7b":function(e,i,t){"use strict";var n=t("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(t("f499"));t("ac6a"),t("7514"),t("7f7f");var s=t("4d6c"),o=n(t("222a")),l=n(t("381c")),r=n(t("0899")),u={components:{lotusAddress:r.default},data:function(){return{loading:!1,vips:s.Vips,vipIndex:0,heights:s.heights,heightsIndex:0,educations:s.educations,educationIndex:0,isIncomes:s.isIncomes,isIncomesIndex:0,isHousings:s.isHousings,isHousingsIndex:0,isVehicles:s.isVehicles,isVehiclesIndex:0,marrys:s.marrys,marrysIndex:0,isChilds:s.isChilds,isChildsIndex:0,lableList:[],userDetailInfo:{},otherStandardsId:[],identification:"",sexList:[{value:"1",name:"男"},{value:"2",name:"女"}],lotusAddressData:{visible:!1,provinceName:"",cityName:"",townName:""},region:"",nativePlace:{},currentAddress:{},isAdress:0}},onLoad:function(e){var i=this;this.userDetailInfo=uni.getStorageSync("userInfo"),this.identification=e.text;var t=this.userDetailInfo,n=t.name,a=t.idCare,o=t.nation,l=t.phone,r=t.qq,u=t.email,c=t.wechatNumber,d=t.industry,f=t.weight,p=t.height,h=t.income,v=t.position,m=t.housing,b=t.vehicle,x=t.education,g=t.level,w=t.nativePlace,C=t.currentAddress,I=t.isMarry,y=t.isChild,k=t.otherStandardsId,D=t.hobby,_=t.declaration;this.userDetailInfo.name=n||"",this.userDetailInfo.idCare=a||"",this.userDetailInfo.nation=o||"",this.userDetailInfo.weight=f||"",this.userDetailInfo.phone=l||"",this.userDetailInfo.wechatNumber=c||"",this.userDetailInfo.qq=r||"",this.userDetailInfo.email=u||"",this.userDetailInfo.hobby=D||"",this.userDetailInfo.declaration=_||"",this.userDetailInfo.position=v||"",this.userDetailInfo.industry=d||"";var $=p||"请选择身高";this.heightsIndex=this.heights.indexOf($);var A=x||"请选择学历";if(this.educationIndex=this.educations.indexOf(A),s.Vips.find(function(e,t){e.val==g&&(i.vipIndex=t)}),s.marrys.find(function(e,t){e.val==I&&(i.marrysIndex=t)}),s.isChilds.find(function(e,t){e.val==y&&(i.isChildsIndex=t)}),s.isIncomes.find(function(e,t){e.val==h&&(i.isIncomesIndex=t)}),s.isHousings.find(function(e,t){e.val==m&&(i.isHousingsIndex=t)}),s.isVehicles.find(function(e,t){e.val==b&&(i.isVehiclesIndex=t)}),this.nativePlace=w?JSON.parse(w):{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},this.currentAddress=C?JSON.parse(w):{city:"",cityCode:"",province:"",provinceCode:"",town:"",townCode:""},this.lableList=uni.getStorageSync("lableList"),k){var z=JSON.parse(k);this.lableList.forEach(function(e,i){z.forEach(function(i){i==e.id&&(e.isCheck=!0)})})}},methods:{formSubmit:function(e){var i=this;if("nativePlaceAdress"==this.identification){if(!this.nativePlace.province)return void uni.showToast({title:"请选择籍贯",icon:"none"});this.userDetailInfo.nativePlace=(0,a.default)(this.nativePlace)}if("currentAddress"==this.identification){if(!this.currentAddress.province)return void uni.showToast({title:"请选择现住地址",icon:"none"});this.userDetailInfo.currentAddress=(0,a.default)(this.currentAddress)}var t=[];if(this.lableList.forEach(function(e,i){e.isCheck&&t.push(e.id)}),this.userDetailInfo.otherStandardsId=(0,a.default)(t),"name"==this.identification&&this.userDetailInfo.name.length<=1)uni.showToast({title:"姓名必须大于等于两个字",icon:"none"});else if("position"!=this.identification||this.userDetailInfo.position)if("idCare"==this.identification){if(!this.userDetailInfo.idCare)return void uni.showToast({title:"请填写身份证号",icon:"none"});uni.showModal({content:"身份证保存后将不能修改",title:"提示",cancelColor:"#333",confirmColor:"#333",fail:function(){},success:function(){i.formSave()}})}else this.formSave();else uni.showToast({title:"请填写职位信息",icon:"none"})},formSave:function(){var e=this;o.default.baseRequest({url:"member/save",data:this.userDetailInfo,method:"post",success:function(i){try{uni.showToast({title:"保存成功！",icon:"success",showCancel:!1}),e.userInfo=i.data.data,uni.setStorageSync("userInfo",i.data.data),setTimeout(function(){uni.redirectTo({url:"/pages/me/detail",animationType:"pop-in",animationDuration:200})},1200)}catch(t){}}})},formReset:function(e){console.log("清空数据")},handleLable:function(e,i){this.lableList[i].isCheck=!this.lableList[i].isCheck,this.$forceUpdate()},bindTextAreaBlur:function(){},handleIdCard:function(e){var i=e.detail.value;return console.log(i),i?!!l.default.checkIdCard(i)&&(this.userDetailInfo.birthday=l.default.getBirthday(i),this.userDetailInfo.gender=l.default.getSex(i),void(this.userDetailInfo.age=l.default.getAge(i))):(uni.showToast({title:"请填写身份证号码",icon:"none"}),!1)},handelheights:function(e){this.heightsIndex=e.target.value,this.userDetailInfo.height=s.heights[this.heightsIndex]},handelEducation:function(e){this.educationIndex=e.target.value,this.userDetailInfo.education=s.educations[this.educationIndex]},handleVipsChange:function(e){this.vipIndex=e.target.value,this.userDetailInfo.level=this.vips[this.vipIndex].val},handleIncomeChange:function(e){this.isIncomesIndex=e.target.value,this.userDetailInfo.income=this.isIncomes[this.isIncomesIndex].val},handleHousingChange:function(e){this.isHousingsIndex=e.target.value,this.userDetailInfo.housing=this.isHousings[this.isHousingsIndex].val},handleVehicleChange:function(e){this.isVehiclesIndex=e.target.value,this.userDetailInfo.vehicle=this.isVehicles[this.isVehiclesIndex].val},handleCheckNativePlace:function(){this.isAdress=1,this.openPicker()},handleCheckAdress:function(){this.isAdress=2,this.openPicker()},openPicker:function(){this.lotusAddressData.visible=!0,1==this.isAdress&&(this.lotusAddressData.provinceName=this.nativePlace.province,this.lotusAddressData.cityName=this.nativePlace.city,this.lotusAddressData.townName=this.nativePlace.town),2==this.isAdress&&(this.lotusAddressData.provinceName=this.currentAddress.province,this.lotusAddressData.cityName=this.currentAddress.city,this.lotusAddressData.townName=this.currentAddress.town)},choseValue:function(e){this.lotusAddressData.visible=e.visible,e.isChose&&(1==this.isAdress&&(this.nativePlace=e),2==this.isAdress&&(this.currentAddress=e),this.region="".concat(e.province," ").concat(e.city," ").concat(e.town)),this.isAdress=0},handleMarryChange:function(e){this.marrysIndex=e.target.value,this.userDetailInfo.isMarry=s.marrys[this.marrysIndex].val},handleIsChildChange:function(e){this.isChildsIndex=e.target.value,this.userDetailInfo.isChild=s.isChilds[this.isChildsIndex].val}}};i.default=u},"21e8":function(e,i,t){"use strict";t.r(i);var n=t("0f7b"),a=t.n(n);for(var s in n)"default"!==s&&function(e){t.d(i,e,function(){return n[e]})}(s);i["default"]=a.a},"381c":function(e,i,t){"use strict";var n=t("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("3b2b");var a=n(t("e814"));t("a481");var s={fullImage:function(e){var i=e.target.dataset.src;uni.previewImage({current:i,urls:[i]})},checkIdCard:function(e){var i=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;return!!i.test(e)||(uni.showToast({title:"身份证号码错误",icon:"none"}),!1)},getBirthday:function(e){var i="";return null!=e&&""!=e&&(15==e.length?i="19"+e.substr(6,6):18==e.length&&(i=e.substr(6,8)),i=i.replace(/(.{4})(.{2})/,"$1-$2-")),i},getSex:function(e){if(null!=e&&""!=e)return(0,a.default)(e.substr(16,1))%2==1?1:2},getAge:function(e){if(null!=e&&""!=e){var i=new Date,t=i.getMonth()+1,n=i.getDate(),a=i.getFullYear()-e.substring(6,10)-1;return(e.substring(10,12)<t||e.substring(10,12)==t&&e.substring(12,14)<=n)&&a++,a}},verifPassword:function(e){var i=new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$");return!!i.test(e)||(uni.showToast({title:"密码复杂程度过低,密码包含:数字和字母,至少6个字符",icon:"none"}),!1)},verifEmail:function(e){var i=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;return!!i.test(e)||(uni.showToast({title:"邮箱格式错误",icon:"none"}),!1)}},o=s;i.default=o},"47f7":function(e,i,t){"use strict";t.r(i);var n=t("9426"),a=t("21e8");for(var s in a)"default"!==s&&function(e){t.d(i,e,function(){return a[e]})}(s);t("cd18");var o=t("2877"),l=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"3cb51e12",null);i["default"]=l.exports},9426:function(e,i,t){"use strict";var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"contanner"},[t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{on:{submit:function(i){i=e.$handleEvent(i),e.formSubmit(i)},reset:function(i){i=e.$handleEvent(i),e.formReset(i)}}},["name"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("姓名：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写真实姓名"},model:{value:e.userDetailInfo.name,callback:function(i){e.$set(e.userDetailInfo,"name",i)},expression:"userDetailInfo.name"}})],1)],1):e._e(),"idCare"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("身份证号：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写身份证号"},on:{blur:function(i){i=e.$handleEvent(i),e.handleIdCard(i)}},model:{value:e.userDetailInfo.idCare,callback:function(i){e.$set(e.userDetailInfo,"idCare",i)},expression:"userDetailInfo.idCare"}})],1)],1):e._e(),"height"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("选择身高：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-picker",{staticClass:"picker",attrs:{range:e.heights},on:{change:function(i){i=e.$handleEvent(i),e.handelheights(i)}}},[e._v(e._s(e.heights[e.heightsIndex]))])],1)],1):e._e(),"nation"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("民族：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写民族"},model:{value:e.userDetailInfo.nation,callback:function(i){e.$set(e.userDetailInfo,"nation",i)},expression:"userDetailInfo.nation"}})],1)],1):e._e(),"weight"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("体重：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"number","placeholder-class":"placeholder",placeholder:"请填写体重"},model:{value:e.userDetailInfo.weight,callback:function(i){e.$set(e.userDetailInfo,"weight",i)},expression:"userDetailInfo.weight"}})],1)],1):e._e(),"education"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("学历：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-picker",{staticClass:"picker",attrs:{range:e.educations},on:{change:function(i){i=e.$handleEvent(i),e.handelEducation(i)}}},[e._v(e._s(e.educations[e.educationIndex]))])],1)],1):e._e(),"phone"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("手机号码：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写手机号"},model:{value:e.userDetailInfo.phone,callback:function(i){e.$set(e.userDetailInfo,"phone",i)},expression:"userDetailInfo.phone"}})],1)],1):e._e(),"wechatNumber"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("微信号码：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写微信号"},model:{value:e.userDetailInfo.wechatNumber,callback:function(i){e.$set(e.userDetailInfo,"wechatNumber",i)},expression:"userDetailInfo.wechatNumber"}})],1)],1):e._e(),"qq"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("qq号码：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写qq号"},model:{value:e.userDetailInfo.qq,callback:function(i){e.$set(e.userDetailInfo,"qq",i)},expression:"userDetailInfo.qq"}})],1)],1):e._e(),"email"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("邮箱：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写邮箱"},model:{value:e.userDetailInfo.email,callback:function(i){e.$set(e.userDetailInfo,"email",i)},expression:"userDetailInfo.email"}})],1)],1):e._e(),"level"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("查看等级：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-picker",{staticClass:"picker",attrs:{range:e.vips,"range-key":"label"},on:{change:function(i){i=e.$handleEvent(i),e.handleVipsChange(i)}}},[e._v(e._s(e.vips[e.vipIndex].label))])],1)],1):e._e(),"position"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("职位：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写职位信息"},model:{value:e.userDetailInfo.position,callback:function(i){e.$set(e.userDetailInfo,"position",i)},expression:"userDetailInfo.position"}})],1)],1):e._e(),"nativePlaceAdress"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("籍贯：")]),t("v-uni-view",{staticClass:"form-inpput form-address",on:{click:function(i){i=e.$handleEvent(i),e.handleCheckNativePlace(i)}}},[e.nativePlace.province?[e._v(e._s(e.nativePlace.province)+"\n\t\t\t\t\t\t"+e._s(e.nativePlace.city)+"\n\t\t\t\t\t\t"+e._s(e.nativePlace.town))]:[e._v("请选择籍贯")]],2)],1):e._e(),"currentAddress"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("现住地址：")]),t("v-uni-view",{staticClass:"form-inpput form-address",on:{click:function(i){i=e.$handleEvent(i),e.handleCheckAdress(i)}}},[e.currentAddress.province?[e._v(e._s(e.currentAddress.province)+"\n\t\t\t\t\t\t"+e._s(e.currentAddress.city)+"\n\t\t\t\t\t\t"+e._s(e.currentAddress.town))]:[e._v("请选择现住地址")]],2)],1):e._e(),"industry"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("行业")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-input",{attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请填写所在行业"},model:{value:e.userDetailInfo.industry,callback:function(i){e.$set(e.userDetailInfo,"industry",i)},expression:"userDetailInfo.industry"}})],1)],1):e._e(),"isMarry"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("查看等级：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-picker",{staticClass:"picker",attrs:{range:e.marrys,"range-key":"label"},on:{change:function(i){i=e.$handleEvent(i),e.handleMarryChange(i)}}},[e._v(e._s(e.marrys[e.marrysIndex].label))])],1)],1):e._e(),"isChild"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("是否有小孩：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-picker",{staticClass:"picker",attrs:{range:e.isChilds,"range-key":"label"},on:{change:function(i){i=e.$handleEvent(i),e.handleIsChildChange(i)}}},[e._v(e._s(e.isChilds[e.isChildsIndex].label))])],1)],1):e._e(),"income"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("月收入：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-picker",{staticClass:"picker",attrs:{range:e.isIncomes,"range-key":"label"},on:{change:function(i){i=e.$handleEvent(i),e.handleIncomeChange(i)}}},[e._v(e._s(e.isIncomes[e.isIncomesIndex].label))])],1)],1):e._e(),"housing"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("住房情况：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-picker",{staticClass:"picker",attrs:{range:e.isHousings,"range-key":"label"},on:{change:function(i){i=e.$handleEvent(i),e.handleHousingChange(i)}}},[e._v(e._s(e.isHousings[e.isHousingsIndex].label))])],1)],1):e._e(),"vehicle"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column edit-input"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("住房情况：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-picker",{staticClass:"picker",attrs:{range:e.isVehicles,"range-key":"label"},on:{change:function(i){i=e.$handleEvent(i),e.handleVehicleChange(i)}}},[e._v(e._s(e.isVehicles[e.isVehiclesIndex].label))])],1)],1):e._e(),"declaration"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("爱情宣言：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-textarea",{staticStyle:{"font-size":"14px","line-height":"35px"},attrs:{"placeholder-style":"color:#ff77aa",placeholder:"请输入爱情宣言","auto-height":""},on:{blur:function(i){i=e.$handleEvent(i),e.bindTextAreaBlur(i)}},model:{value:e.userDetailInfo.declaration,callback:function(i){e.$set(e.userDetailInfo,"declaration",i)},expression:"userDetailInfo.declaration"}})],1)],1):e._e(),"hobby"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"form-lable"},[e._v("兴趣爱好：")]),t("v-uni-view",{staticClass:"form-inpput"},[t("v-uni-textarea",{staticStyle:{"font-size":"14px","line-height":"35px"},attrs:{"placeholder-style":"color:#F76260",placeholder:"请输入兴趣爱好","auto-height":""},on:{blur:function(i){i=e.$handleEvent(i),e.bindTextAreaBlur(i)}},model:{value:e.userDetailInfo.hobby,callback:function(i){e.$set(e.userDetailInfo,"hobby",i)},expression:"userDetailInfo.hobby"}})],1)],1):e._e(),"otherStandardsId"==e.identification?t("v-uni-view",{staticClass:"uni-form-item uni-column",staticStyle:{display:"block"}},[t("v-uni-view",{staticClass:"form-lable"},[e._v("兴趣爱好：")]),t("v-uni-view",{staticClass:"form-inpput clearfix",staticStyle:{width:"100%",padding:"8px"}},e._l(e.lableList,function(i,n){return t("v-uni-view",{key:n,staticClass:"item-lable",class:i.isCheck?"item-lable-active":"",on:{click:function(t){t=e.$handleEvent(t),e.handleLable(i,n)}}},[e._v(e._s(i.name))])}),1)],1):e._e(),t("v-uni-view",{staticClass:"uni-btn-v"},[t("v-uni-button",{attrs:{type:"primary",loading:e.loading,"form-type":"submit"}},[e._v("提交")])],1)],1)],1),t("lotus-address",{attrs:{lotusAddressData:e.lotusAddressData},on:{choseVal:function(i){i=e.$handleEvent(i),e.choseValue(i)}}})],1)},a=[];t.d(i,"a",function(){return n}),t.d(i,"b",function(){return a})},"9c1e":function(e,i,t){i=e.exports=t("2350")(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 主页面样式 */\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */$uni-color-primary:#f7a;$uni-color-success:#4cd964;$uni-color-warning:#f0ad4e;$uni-color-error:#dd524d;\n/* 文字基本颜色 */$uni-text-color:#333;\n/*基本色\r */$uni-text-color-inverse:#fff;\n/*反色\r */$uni-text-color-grey:#999;\n/*辅助灰色，如加载更多的提示信息\r */$uni-text-color-placeholder:grey;$uni-text-color-disable:silver;\n/* 背景颜色 */$uni-bg-color:#fff;$uni-bg-color-grey:#f8f8f8;$uni-bg-color-hover:#f1f1f1;\n/*点击状态颜色\r */$uni-bg-color-mask:rgba(0,0,0,.4);\n/*遮罩颜色\r */$uni-theme-color:#f7a;\n/* 边框颜色 */$uni-border-color:#c8c7cc;\n/* 尺寸变量 */\n/* 文字尺寸 */$uni-font-size-sm:24upx;$uni-font-size-base:28upx;$uni-font-size-lg:32upx;\n/* 图片尺寸 */$uni-img-size-sm:40upx;$uni-img-size-base:52upx;$uni-img-size-lg:80upx;\n/* Border Radius */$uni-border-radius-sm:4upx;$uni-border-radius-base:6upx;$uni-border-radius-lg:12upx;$uni-border-radius-circle:50%;\n/* 水平间距 */$uni-spacing-row-sm:10px;$uni-spacing-row-base:20upx;$uni-spacing-row-lg:30upx;\n/* 垂直间距 */$uni-spacing-col-sm:8upx;$uni-spacing-col-base:16upx;$uni-spacing-col-lg:24upx;\n/* 透明度 */$uni-opacity-disabled:.3;\n/* 组件禁用态的透明度\r */\n/* 文章场景相关 */$uni-color-title:#2c405a;\n/* 文章标题颜色\r */$uni-font-size-title:40upx;$uni-color-subtitle:#555;\n/* 二级标题颜色\r */$uni-font-size-subtitle:36upx;$uni-color-paragraph:#3f536e;\n/* 文章段落颜色\r */$uni-font-size-paragraph:30upx;\n/* 主页面样式 */.uni-body[data-v-3cb51e12],uni-page[data-v-3cb51e12],uni-page-head .uni-page-head[data-v-3cb51e12]{max-width:750px;min-width:320px;margin:auto}\n/* 主页面样式 */.uni-body[data-v-3cb51e12],uni-page[data-v-3cb51e12]{margin:auto;max-width:750px;min-width:320px}uni-page-body[data-v-3cb51e12]{background-color:#fafafa}uni-view[data-v-3cb51e12]{\r\n\t/* width: 100%; */-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}uni-button[data-v-3cb51e12]{font-size:14px;line-height:2.3}\n/* 自定义header */.header.transparentFixed.fixed[data-v-3cb51e12]{height:44px}.header .title[data-v-3cb51e12]{font-size:16px!important;height:44px}\n/* 清除浮动 */.clearfix[data-v-3cb51e12]{*zoom:1}.clearfix[data-v-3cb51e12]:after{content:".";display:block;height:0;visibility:hidden;clear:both}\n/* 表单样式 */.uni-form-item[data-v-3cb51e12]{height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.form-inpput[data-v-3cb51e12]{width:75vw;line-height:35px;background-color:#fff;font-size:13px}.form-inpput .placeholder[data-v-3cb51e12],.form-inpput .uni-input-input[data-v-3cb51e12]{font-size:13px}.form-inpput .form-radio-group[data-v-3cb51e12]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .formRadio[data-v-3cb51e12]{font-size:14px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.form-inpput .picker[data-v-3cb51e12]{font-size:14px;height:35px}.form-lable[data-v-3cb51e12]{width:25vw;line-height:35px;font-size:14px;color:#a0a0a0}.form-inpput uni-input[data-v-3cb51e12]{height:35px;line-height:35px;padding:0 3px;border-radius:3px}.form-inpput uni-textarea[data-v-3cb51e12]{width:auto}.form-inpput-textarea[data-v-3cb51e12]{height:150px}.verification-wrapper[data-v-3cb51e12]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.verification-input[data-v-3cb51e12]{-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.verification-btn[data-v-3cb51e12]{width:160px;line-height:35px;-webkit-box-sizing:content-box;box-sizing:content-box}\n/* 卡片阴影 */.card-shadow[data-v-3cb51e12]{border:1px #ddd solid;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}\n/* 图片 */.image-wrapper[data-v-3cb51e12]{overflow:hidden}.image[data-v-3cb51e12]{width:100%;height:100%}\n/* 两行超出显示··· */.text-two-line[data-v-3cb51e12]{-o-text-overflow:-o-ellipsis-lastline;text-overflow:-o-ellipsis-lastline;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}\n/* 加载跟多 */.loadMore[data-v-3cb51e12]{color:#ccc;line-height:30px}.rotate[data-v-3cb51e12]{-webkit-animation:myMove-data-v-3cb51e12 2s linear infinite;animation:myMove-data-v-3cb51e12 2s linear infinite;margin-right:8px\r\n\t/* transition: roall 2s linear; */}@-webkit-keyframes myMove-data-v-3cb51e12{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes myMove-data-v-3cb51e12{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.loutBtn[data-v-3cb51e12]{position:absolute;bottom:30px;width:100%;padding:0 80px}.bottom-tips[data-v-3cb51e12]{position:absolute;bottom:8px;text-align:center;width:100%;font-size:12px;color:#adadad}\n/* 轮播图样式开始 */.uni-padding-wrap[data-v-3cb51e12]{width:100%}.swiper-item[data-v-3cb51e12]{width:100%;height:100%}.swiper-item uni-image[data-v-3cb51e12]{width:100%;height:176px}\n/* 轮播图样式结束 */\n/* 标签样式 */.item-lable[data-v-3cb51e12]{padding:0 6px;float:left;border:1px solid #dedede;margin:0 4px 4px 0;line-height:20px}.item-lable-active[data-v-3cb51e12]{border:1px solid #f7a;color:#f7a}\n/* 表单样式 */.edit-input[data-v-3cb51e12]{display:block}.edit-input .form-inpput[data-v-3cb51e12]{width:100%;background-color:rgba(0,0,0,0);height:40px;line-height:40px}.edit-input .form-address[data-v-3cb51e12]{border-bottom:1px solid #a0a0a0}.edit-input .form-inpput uni-input[data-v-3cb51e12]{height:40px;line-height:40px;border-bottom:1px solid #a0a0a0}.edit-input .form-inpput .picker[data-v-3cb51e12]{font-size:14px;height:35px;border-bottom:1px solid #a0a0a0}\n/* 表单段\r */.form-input-select[data-v-3cb51e12]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fafafa}.form-input-select>.form-input-item[data-v-3cb51e12]{-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;background-color:#fff;text-align:center}.form-input-select>.input-line[data-v-3cb51e12]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center}.uni-body[data-v-3cb51e12],uni-page[data-v-3cb51e12],uni-page-head .uni-page-head[data-v-3cb51e12]{max-width:750px;min-width:320px;margin:auto}.uni-form-item[data-v-3cb51e12]{height:auto}.img-wrapper[data-v-3cb51e12]{height:200px}.bar-wrapper[data-v-3cb51e12]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.bar-item[data-v-3cb51e12]{border-bottom:%?2?% solid #f7a;line-height:%?80?%;margin-left:10px;font-size:16px}.content[data-v-3cb51e12]{padding:%?20?%}.tips[data-v-3cb51e12]{color:#8f8f94;line-height:35px;font-size:14px}body.?%PAGE?%[data-v-3cb51e12]{background-color:#fafafa}',""])},a8c6:function(e,i,t){var n=t("9c1e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("7d696f35",n,!0,{sourceMap:!1,shadowMode:!1})},cd18:function(e,i,t){"use strict";var n=t("a8c6"),a=t.n(n);a.a}}]);