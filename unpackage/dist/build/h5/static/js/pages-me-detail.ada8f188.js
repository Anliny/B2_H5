(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-detail"],{"001b":function(t,e,i){"use strict";i.r(e);var a=i("ce30"),n=i("f76e");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("2118");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"26d84a4a",null);e["default"]=s.exports},2118:function(t,e,i){"use strict";var a=i("afc3"),n=i.n(a);n.a},"75fc":function(t,e,i){"use strict";i.r(e);var a=i("a745"),n=i.n(a);function r(t){if(n()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var o=i("774e"),s=i.n(o),d=i("c8bb"),l=i.n(d);function u(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return r(t)||u(t)||c()}i.d(e,"default",function(){return f})},afc3:function(t,e,i){var a=i("f713");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0b7b2e6d",a,!0,{sourceMap:!1,shadowMode:!1})},bb4d:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f499"));i("7f7f");var r=a(i("75fc"));i("ac6a");var o=a(i("6f20")),s=a(i("85c9")),d=a(i("7d34")),l=a(i("381c")),u=i("4d6c"),c={components:{uniList:o.default,uniListItem:s.default,uniIcons:d.default},data:function(){return{userInfo:uni.getStorageSync("userInfo")}},onLoad:function(){this.userInfo=uni.getStorageSync("userInfo")},computed:{height:function(){return this.userInfo.height?this.userInfo.height+"CM":"请选择身高"},weight:function(){return this.userInfo.weight?this.userInfo.weight+"KG":"请填写体重"},income:function(){return this.userInfo.income?this.userInfo.income+"以上":"请填写收入"},isMarry:function(){return 1==this.userInfo.isMarry?"未婚":2==this.userInfo.isMarry?"离异":3==this.userInfo.isMarry?"丧偶":"未填写"},level:function(){var t=this;return console.log(this.userInfo.level),this.userInfo.level?u.Vips.filter(function(e){return e.val==t.userInfo.level})[0].label:"普通会员"},otherStandardsId:function(){if(this.userInfo.otherStandardsId){var t=uni.getStorageSync("lableList"),e=JSON.parse(this.userInfo.otherStandardsId),i=[];return e.forEach(function(e,a){i=[].concat((0,r.default)(i),(0,r.default)(t.filter(function(t){return t.id==e})))}),i}return[]},userAvatar:function(){return this.userInfo.userAvatar?this.userInfo.userAvatar:"/static/icon/defult_header.jpg"},nativePlaceAdress:function(){if(this.userInfo.nativePlace){var t=JSON.parse(this.userInfo.nativePlace),e=t.province,i=t.city,a=t.town;return"".concat(e).concat(i).concat(a)}return"请选择籍贯地址"},currentAddress:function(){if(this.userInfo.currentAddress){var t=JSON.parse(this.userInfo.currentAddress),e=t.province,i=t.city,a=t.town;return"".concat(e).concat(i).concat(a)}return"请选择现住地址"},address:function(){return this.userInfo.currentAddress?JSON.parse(this.userInfo.currentAddress).city+"户口":"-"}},methods:{handleGoTrack:function(){uni.navigateTo({url:"/pages/me/track/index",animationType:"pop-in",animationDuration:200})},handleEditUserInfo:function(t){var e={name:t.name,idCare:t.idCare,gender:t.gender,age:t.age,birthday:t.birthday,height:t.height,nation:t.nation,weight:t.weight,education:t.education};uni.navigateTo({url:"/pages/me/editUserInfo?data="+(0,n.default)(e),animationType:"pop-in",animationDuration:200})},handleEditUserHeader:function(t){var e=t.userAvatar,i=t.nickName;uni.navigateTo({url:"/pages/me/editUserHeader?userAvatar=".concat(e,"&&nickName=").concat(i),animationType:"pop-in",animationDuration:200})},handleEditUserContact:function(t){var e={phone:t.phone,wechatNumber:t.wechatNumber,qq:t.qq,email:t.email};uni.navigateTo({url:"/pages/me/editUserContact?info="+(0,n.default)(e),animationType:"pop-in",animationDuration:200})},handleEditUserInfomation:function(t){var e={position:t.position,nativePlace:t.nativePlace,currentAddress:t.currentAddress,industry:t.industry,isMarry:t.isMarry};uni.navigateTo({url:"/pages/me/editUserInfomation?info="+(0,n.default)(e),animationType:"pop-in",animationDuration:200})},handleEditUserAssetStatus:function(t){var e={income:t.income,housing:t.housing,vehicle:t.vehicle};uni.navigateTo({url:"/pages/me/editUserAssetStatus?info="+(0,n.default)(e),animationType:"pop-in",animationDuration:200})},handleEditUserDescrable:function(t){var e={declaration:t.declaration,hobby:t.hobby,otherStandards:t.otherStandards};uni.navigateTo({url:"/pages/me/editUserDescrable?info="+(0,n.default)(e),animationType:"pop-in",animationDuration:200})},previewImage:function(t){l.default.fullImage(t)},handleEdit:function(t){uni.navigateTo({url:"/pages/me/editUserDescrable?text="+t,animationType:"pop-in",animationDuration:200})}}};e.default=c},ce30:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"card-warp",staticStyle:{"margin-top":"8px"}},[i("v-uni-view",{staticClass:"card-title"},[i("v-uni-view",{},[t._v("基本信息")])],1),i("uni-list",[i("uni-list-item",{attrs:{title:"真实姓名","show-badge":!0,"badge-text":t.userInfo.name?t.userInfo.name:"请填写真实姓名"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("name")}}}),i("uni-list-item",{attrs:{title:"身份证号","show-badge":!0,"badge-text":t.userInfo.idCare?t.userInfo.idCare:"请填写身份证号"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("idCare")}}}),i("uni-list-item",{attrs:{disabled:"true",title:"性别","show-arrow":!1,"show-badge":!0,"badge-text":1==t.userInfo.gender?"男":"女"}}),i("uni-list-item",{attrs:{disabled:"true",title:"年龄","show-arrow":!1,"show-badge":!0,"badge-text":t.userInfo.age}}),i("uni-list-item",{attrs:{disabled:"true",title:"出生日期","show-arrow":!1,"show-badge":!0,"badge-text":t.userInfo.birthday}}),i("uni-list-item",{attrs:{title:"身 高","show-badge":!0,"badge-text":t.height},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("height")}}}),i("uni-list-item",{attrs:{title:"民 族","show-badge":!0,"badge-text":t.userInfo.nation?t.userInfo.nation:"请填写民族"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("nation")}}}),i("uni-list-item",{attrs:{title:"体 重","show-badge":!0,"badge-text":t.weight},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("weight")}}}),i("uni-list-item",{attrs:{title:"最高学历","show-badge":!0,"badge-text":t.userInfo.education},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("education")}}})],1)],1),i("v-uni-view",{staticClass:"card-warp"},[i("v-uni-view",{staticClass:"card-title"},[i("v-uni-view",{staticClass:"title"},[t._v("联系方式")])],1),i("uni-list",[i("uni-list-item",{attrs:{title:"手机号","show-badge":!0,"badge-text":t.userInfo.phone},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("phone")}}}),i("uni-list-item",{attrs:{title:"微信号","show-badge":!0,"badge-text":t.userInfo.wechatNumber?t.userInfo.wechatNumber:"请填写微信号"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("wechatNumber")}}}),i("uni-list-item",{attrs:{title:"qq号","show-badge":!0,"badge-text":t.userInfo.qq?t.userInfo.qq:"请填写QQ号"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("qq")}}}),i("uni-list-item",{attrs:{title:"email","show-badge":!0,"badge-text":t.userInfo.email?t.userInfo.email:"请填写邮箱"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("email")}}}),i("uni-list-item",{attrs:{title:"设置查看等级","show-badge":!0,"badge-text":t.level},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("level")}}})],1)],1),i("v-uni-view",{staticClass:"card-warp "},[i("v-uni-view",{staticClass:"card-title"},[i("v-uni-view",{staticClass:"title"},[t._v("其他信息")])],1),i("uni-list",[i("uni-list-item",{attrs:{title:"职位","show-badge":!0,"badge-text":t.userInfo.position?t.userInfo.position:"请填写职位"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("position")}}}),i("uni-list-item",{attrs:{title:"籍贯","show-badge":!0,"badge-text":t.nativePlaceAdress},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("nativePlaceAdress")}}}),i("uni-list-item",{attrs:{title:"现住地址","show-badge":!0,"badge-text":t.currentAddress},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("currentAddress")}}}),i("uni-list-item",{attrs:{title:"行业","show-badge":!0,"badge-text":t.userInfo.industry?t.userInfo.industry:"请填写所属行业"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("industry")}}}),i("uni-list-item",{attrs:{title:"是否婚配","show-badge":!0,"badge-text":t.isMarry},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("isMarry")}}}),i("uni-list-item",{attrs:{title:"是否有小孩","show-badge":!0,"badge-text":"0"==t.userInfo.isChild?"有":"无"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("isChild")}}})],1)],1),i("v-uni-view",{staticClass:"card-warp "},[i("v-uni-view",{staticClass:"card-title"},[i("v-uni-view",{staticClass:"title"},[t._v("资产状况")])],1),i("uni-list",[i("uni-list-item",{attrs:{title:"收入","show-badge":!0,"badge-text":t.income},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("income")}}}),i("uni-list-item",{attrs:{title:"住房情况","show-badge":!0,"badge-text":t.userInfo.housing?t.userInfo.housing:"请填写住房信息"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("housing")}}}),i("uni-list-item",{attrs:{title:"是否有车","show-badge":!0,"badge-text":t.userInfo.vehicle?t.userInfo.vehicle:"请填写购车情况"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("vehicle")}}})],1)],1),i("v-uni-view",{staticClass:"card-warp "},[i("v-uni-view",{staticClass:"card-title"},[i("v-uni-view",{staticClass:"title"},[t._v("自我介绍")])],1),i("uni-list",[i("uni-list-item",{attrs:{title:"爱情宣言",note:t.userInfo.declaration?t.userInfo.declaration:"填写你的爱情宣言"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("declaration")}}}),i("uni-list-item",{attrs:{title:"兴趣爱好",note:t.userInfo.hobby?t.userInfo.hobby:"请填写兴趣爱好"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("hobby")}}}),i("uni-list-item",{attrs:{isLabel:!0,note:"请选择标签",label:t.otherStandardsId,title:"我的标签"},on:{click:function(e){e=t.$handleEvent(e),t.handleEdit("otherStandardsId")}}})],1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},f713:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".base[data-v-26d84a4a]{padding:8px}.base-wrapper[data-v-26d84a4a]{position:relative;margin-top:83px;background-color:#fff9f9;border-radius:20px}.img[data-v-26d84a4a]{width:150px;height:150px;border:1px solid #f7a;border-radius:50%;overflow:hidden;top:-75px;left:-75px;position:absolute;margin-left:50%}.edit-btn[data-v-26d84a4a]{width:35px;height:35px;border-radius:50%;border:1px solid #f7a;background-color:#f7a;overflow:hidden;position:absolute;right:5px;top:5px}.base-name[data-v-26d84a4a]{display:block;margin-top:83px;font-size:24px;text-align:center}.base-id[data-v-26d84a4a]{display:block;text-align:center}.base-code-wrapper[data-v-26d84a4a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px}.base-code-item[data-v-26d84a4a]{width:100%;height:30px;line-height:30px;color:#fff;font-size:12px;text-align:center;border-radius:20px;margin-left:8px;background-color:#8abbd6}.card-warp[data-v-26d84a4a]{background-color:#fff;margin:0 8px 8px 8px;border-radius:5px;padding:8px}.card-warp .card-title[data-v-26d84a4a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.card-warp .card-edit[data-v-26d84a4a]{width:35px;height:35px;text-align:center}.card-warp .card-edit .uni-icons[data-v-26d84a4a]{font-size:30px!important}.card-warp .tips[data-v-26d84a4a]{font-size:12px;color:#fe973e;line-height:25px}.card-warp .card-item[data-v-26d84a4a]{line-height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.card-warp .card-item-lable[data-v-26d84a4a]{font-size:12px;color:#a0a0a0;-webkit-box-flex:0;-webkit-flex:0 0 95px;-ms-flex:0 0 95px;flex:0 0 95px}.card-warp .card-item-lable .uni-icons[data-v-26d84a4a]{margin-right:5px}.card-warp .card-item-text[data-v-26d84a4a]{font-size:12px}.code2[data-v-26d84a4a]{background-color:#7975fc}.code3[data-v-26d84a4a]{background-color:#dd91cc}.code4[data-v-26d84a4a]{background-color:#fe973e}.uni-badge--success[data-v-26d84a4a]{color:#333;background-color:#fff}",""])},f76e:function(t,e,i){"use strict";i.r(e);var a=i("bb4d"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a}}]);