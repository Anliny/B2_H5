(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/uploadAvatar/upload"],{"0ecd":function(e,o,t){},"249d":function(e,o,t){"use strict";var a=function(){var e=this,o=e.$createElement;e._self._c},n=[];t.d(o,"a",function(){return a}),t.d(o,"b",function(){return n})},"3b1b":function(e,o,t){"use strict";t.r(o);var a=t("eb6f"),n=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(o,e,function(){return a[e]})}(r);o["default"]=n.a},8350:function(e,o,t){"use strict";(function(e){t("fc8c"),t("921b");a(t("66fd"));var o=a(t("8458"));function a(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,t("6e42")["createPage"])},8458:function(e,o,t){"use strict";t.r(o);var a=t("249d"),n=t("3b1b");for(var r in n)"default"!==r&&function(e){t.d(o,e,function(){return n[e]})}(r);t("ec42");var u=t("2877"),c=Object(u["a"])(n["default"],a["a"],a["b"],!1,null,null,null);o["default"]=c.exports},eb6f:function(e,o,t){"use strict";(function(e,a){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=r(t("9ec8"));function r(e){return e&&e.__esModule?e:{default:e}}var u=e.getSystemInfoSync(),c=u.windowWidth,i=u.windowHeight-50;console.log(a(u," at pages\\components\\uploadAvatar\\upload.vue:19"));var s={data:function(){return{cropperOpt:{id:"cropper",width:c,height:i,scale:2.5,zoom:8,cut:{x:(c-295)/2,y:(i-413)/2,width:300,height:300}},weCropper:""}},methods:{back:function(){e.redirectTo({url:"/pages/me/editUserHeader"})},touchStart:function(e){this.weCropper.touchStart(e)},touchMove:function(e){this.weCropper.touchMove(e)},touchEnd:function(e){this.weCropper.touchEnd(e)},convertBase64UrlToBlob:function(e,o){for(var t=atob(e.split(",")[1]),a=[],n=0;n<t.length;n++)a.push(t.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:o},{filename:"1111.jpg"})},blobToDataURL:function(e){var o=new FileReader;o.readAsDataURL(e),o.onload=function(e){var o=e.target.result;console.log(a(o," at pages\\components\\uploadAvatar\\upload.vue:71"))}},getCropperImage:function(){this.weCropper.getCropperImage(function(o){o?e.uploadFile({url:"/common/multiUpload",filePath:o,name:"file",success:function(o){console.log(a(JSON.parse(o.data)," at pages\\components\\uploadAvatar\\upload.vue:93")),e.showToast({title:"上传成功",icon:"success",duration:1e3}),wx.redirectTo({url:"/pages/me/editUserHeader?userAvatar="+JSON.parse(o.data).data})},ail:function(o){console.log(a("uploadImage fail",o," at pages\\components\\uploadAvatar\\upload.vue:104")),e.showModal({content:o.errMsg,showCancel:!1}),e.hideLoading()},complete:function(){console.log(a("complate"," at pages\\components\\uploadAvatar\\upload.vue:112"))}}):console.log(a("获取图片失败，请稍后重试"," at pages\\components\\uploadAvatar\\upload.vue:116"))})},uploadTap:function(){var o=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t=e.tempFilePaths[0];o.weCropper.pushOrign(t)}})}},onLoad:function(o){var t=this.cropperOpt,a=o.src;a&&(Object.assign(t,{src:a}),this.weCropper=new n.default(t).on("ready",function(e){}).on("beforeImageLoad",function(o){e.showToast({title:"上传中",icon:"loading",duration:3e3})}).on("imageLoad",function(o){e.hideToast()}))}};o.default=s}).call(this,t("6e42")["default"],t("0de9")["default"])},ec42:function(e,o,t){"use strict";var a=t("0ecd"),n=t.n(a);n.a}},[["8350","common/runtime","common/vendor"]]]);