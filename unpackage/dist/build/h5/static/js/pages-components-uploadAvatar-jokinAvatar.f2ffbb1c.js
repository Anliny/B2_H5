(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-uploadAvatar-jokinAvatar"],{"4cb8":function(t,e,o){var n=o("aefc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("4bf22d3d",n,!0,{sourceMap:!1,shadowMode:!1})},"4ceb":function(t,e,o){"use strict";o.r(e);var n=o("8d9a"),i=o("83e9");for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);o("ff98");var c=o("2877"),r=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,"e6d2ff5a",null);e["default"]=r.exports},"6c7b":function(t,e,o){var n=o("5ca1");n(n.P,"Array",{fill:o("36bd")}),o("9c6c")("fill")},"83e9":function(t,e,o){"use strict";o.r(e);var n=o("93fd"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=i.a},"8d9a":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"cropper-wrapper",staticStyle:{height:"617px"}},[o("v-uni-canvas",{staticClass:"cropper",style:{width:t.cropperOpt.width,height:t.cropperOpt.height},attrs:{"disable-scroll":"true","canvas-id":"cropper"},on:{touchstart:function(e){e=t.$handleEvent(e),t.touchStart(e)},touchmove:function(e){e=t.$handleEvent(e),t.touchMove(e)},touchend:function(e){e=t.$handleEvent(e),t.touchEnd(e)}}})],1),o("v-uni-view",{staticClass:"cropper-buttons"},[o("v-uni-view",{staticClass:"upload",on:{click:function(e){e=t.$handleEvent(e),t.uploadTap(e)}}},[t._v("重新选择")]),o("v-uni-view",{staticClass:"getCropperImage",on:{click:function(e){e=t.$handleEvent(e),t.getCropperImage(e)}}},[t._v("确定")])],1)],1)},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},"93fd":function(t,e,o){"use strict";var n=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("5176"));o("34ef"),o("28a5");var a=n(o("9ec8")),c=uni.getSystemInfoSync(),r=c.windowWidth,u=c.windowHeight-50;console.log(c);var l={data:function(){return{cropperOpt:{id:"cropper",width:r,height:u,scale:2.5,zoom:8,cut:{x:(r-295)/2,y:(u-413)/2,width:300,height:300}},weCropper:""}},methods:{back:function(){uni.redirectTo({url:"/pages/me/editJokin"})},touchStart:function(t){this.weCropper.touchStart(t)},touchMove:function(t){this.weCropper.touchMove(t)},touchEnd:function(t){this.weCropper.touchEnd(t)},convertBase64UrlToBlob:function(t,e){for(var o=atob(t.split(",")[1]),n=[],i=0;i<o.length;i++)n.push(o.charCodeAt(i));return new Blob([new Uint8Array(n)],{type:e},{filename:"1111.jpg"})},blobToDataURL:function(t){var e=new FileReader;e.readAsDataURL(t),e.onload=function(t){var e=t.target.result;console.log(e)}},getCropperImage:function(){this.weCropper.getCropperImage(function(t){t?uni.uploadFile({url:"/common/multiUpload",filePath:t,name:"file",success:function(t){console.log(JSON.parse(t.data)),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),wx.redirectTo({url:"/pages/me/editJokin?userAvatar="+JSON.parse(t.data).data})},ail:function(t){console.log("uploadImage fail",t),uni.showModal({content:t.errMsg,showCancel:!1}),uni.hideLoading()},complete:function(){console.log("complate")}}):console.log("获取图片失败，请稍后重试")})},uploadTap:function(){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var o=e.tempFilePaths[0];t.weCropper.pushOrign(o)}})}},onLoad:function(t){var e=this.cropperOpt,o=t.src;o&&((0,i.default)(e,{src:o}),this.weCropper=new a.default(e).on("ready",function(t){}).on("beforeImageLoad",function(t){uni.showToast({title:"上传中",icon:"loading",duration:3e3})}).on("imageLoad",function(t){uni.hideToast()}))}};e.default=l},"9ec8":function(t,e,o){"use strict";var n=o("288e"),i=n(o("5176")),a=n(o("a4bb"));o("ac6a"),o("6c7b");var c=n(o("f499")),r=n(o("c8bb")),u=n(o("a745")),l=n(o("5d73")),s=n(o("85f2")),f=n(o("5d58")),d=n(o("67bb")),h=n(o("d847"));(function(e,o){t.exports=o()})(0,function(){var t=void 0,e=["touchstarted","touchmoved","touchended"];function o(t){return t.charAt(0).toUpperCase()+t.slice(1)}function n(t){for(var o=arguments.length,n=Array(o>1?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];e.forEach(function(e,o){void 0!==n[o]&&(t[e]=n[o])})}function p(t,e){(0,h.default)(t,e)}function g(){return t||(t=wx.getSystemInfoSync()),t}"function"===typeof d.default&&f.default;var v=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},b=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s.default)(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),x=function(){function t(t,e){var o=[],n=!0,i=!1,a=void 0;try{for(var c,r=(0,l.default)(t);!(n=(c=r.next()).done);n=!0)if(o.push(c.value),e&&o.length===e)break}catch(u){i=!0,a=u}finally{try{!n&&r["return"]&&r["return"]()}finally{if(i)throw a}}return o}return function(e,o){if((0,u.default)(e))return e;if((0,r.default)(Object(e)))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w={},m={id:{default:"cropper",get:function(){return w.id},set:function(t){w.id=t}},width:{default:750,get:function(){return w.width},set:function(t){w.width=t}},height:{default:750,get:function(){return w.height},set:function(t){w.height=t}},scale:{default:2.5,get:function(){return w.scale},set:function(t){w.scale=t}},zoom:{default:5,get:function(){return w.zoom},set:function(t){w.zoom=t}},src:{default:"cropper",get:function(){return w.src},set:function(t){w.src=t}},cut:{default:{},get:function(){return w.cut},set:function(t){w.cut=t}},onReady:{default:null,get:function(){return w.ready},set:function(t){w.ready=t}},onBeforeImageLoad:{default:null,get:function(){return w.beforeImageLoad},set:function(t){w.beforeImageLoad=t}},onImageLoad:{default:null,get:function(){return w.imageLoad},set:function(t){w.imageLoad=t}},onBeforeDraw:{default:null,get:function(){return w.beforeDraw},set:function(t){w.beforeDraw=t}}};function y(){var t=this,e=g(),o=e.windowWidth;t.attachPage=function(){var e=getCurrentPages(),o=e[e.length-1];o.wecropper=t},t.createCtx=function(){var e=t.id;e&&(t.ctx=wx.createCanvasContext(e))},t.deviceRadio=o/750,t.deviceRadio=t.deviceRadio.toFixed(2)}function k(){var t=this,e=["ready","beforeImageLoad","beforeDraw","imageLoad"];t.on=function(n,i){return e.indexOf(n)>-1&&"function"===typeof i&&("ready"===n?i(t):t["on"+o(n)]=i),t}}function T(){var t=this,e=t.deviceRadio;console.log((0,c.default)(t));var o=t.width,n=t.height,i=t.cut,a=i.x,r=void 0===a?0:a,u=i.y,l=void 0===u?0:u,s=i.width,f=void 0===s?o:s,d=i.height,h=void 0===d?n:d;t.updateCanvas=function(){return t.croperTarget&&t.ctx.drawImage(t.croperTarget,t.imgLeft,t.imgTop,t.scaleWidth,t.scaleHeight),"function"===typeof t.onBeforeDraw&&t.onBeforeDraw(t.ctx,t),t.setBoundStyle(),t.ctx.draw(),t},t.pushOrign=function(e){return t.src=e,"function"===typeof t.onBeforeImageLoad&&t.onBeforeImageLoad(t.ctx,t),uni.getImageInfo({src:e,success:function(o){var n=o.width/o.height;t.croperTarget=o.path||e,n<f/h?(t.rectX=r,t.baseWidth=f,t.baseHeight=f/n,t.rectY=l-Math.abs((h-t.baseHeight)/2)):(t.rectY=l,t.baseWidth=h*n,t.baseHeight=h,t.rectX=r-Math.abs((f-t.baseWidth)/2)),t.imgLeft=t.rectX,t.imgTop=t.rectY,t.scaleWidth=t.baseWidth,t.scaleHeight=t.baseHeight,t.updateCanvas(),"function"===typeof t.onImageLoad&&t.onImageLoad(t.ctx,t)}}),t.update(),t},t.getCropperImage=function(){for(var o=arguments.length,n=Array(o),i=0;i<o;i++)n[i]=arguments[i];var a=t.id,c=toString.call(n[0]);switch(c){case"[object Object]":var u=n[0].quality,s=void 0===u?10:u;console.log("quality--"+s),uni.canvasToTempFilePath({canvasId:a,x:r,y:l,width:f,height:h,destWidth:f*s/(10*e),destHeight:h*s/(10*e),success:function(t){console.log(t),"function"===typeof n[n.length-1]&&n[n.length-1](t.tempFilePath)}});break;case"[object Function]":uni.canvasToTempFilePath({canvasId:a,x:r,y:l,fileType:"jpg",width:f,height:h,destWidth:f,destHeight:h,success:function(t){"function"===typeof n[n.length-1]&&n[n.length-1](t.tempFilePath)}});break}return t}}function S(){var t=this;t.src&&(t.__oneTouchStart=function(e){t.touchX0=e.x,t.touchY0=e.y},t.__oneTouchMove=function(e){var o=void 0,n=void 0;if(t.touchended)return t.updateCanvas();o=e.x-t.touchX0,n=e.y-t.touchY0;var i=t.rectX+o,a=t.rectY+n;t.outsideBound(i,a),t.updateCanvas()},t.__twoTouchStart=function(e,o){var n=void 0,i=void 0,a=void 0;t.touchX1=t.rectX+t.scaleWidth/2,t.touchY1=t.rectY+t.scaleHeight/2,n=o.x-e.x,i=o.y-e.y,a=Math.sqrt(n*n+i*i),t.oldDistance=a},t.__twoTouchMove=function(e,o){var n=void 0,i=void 0,a=void 0,c=t.scale,r=t.zoom;n=o.x-e.x,i=o.y-e.y,a=Math.sqrt(n*n+i*i),t.newScale=t.oldScale+.001*r*(a-t.oldDistance),t.newScale<=1&&(t.newScale=1),t.newScale>=c&&(t.newScale=c),t.scaleWidth=t.newScale*t.baseWidth,t.scaleHeight=t.newScale*t.baseHeight;var u=t.touchX1-t.scaleWidth/2,l=t.touchY1-t.scaleHeight/2;t.outsideBound(u,l),t.updateCanvas()},t.__xtouchEnd=function(){t.oldScale=t.newScale,t.rectX=t.imgLeft,t.rectY=t.imgTop})}var C={touchStart:function(t){var e=this,o=x(t.touches,2),i=o[0],a=o[1];console.log((0,c.default)(a)),i.x||(i.x=i.clientX,i.y=i.clientY,a&&(a.x=a.clientX,a.y=a.clientY)),n(e,!0,null,null),e.__oneTouchStart(i),t.touches.length>=2&&e.__twoTouchStart(i,a)},touchMove:function(t){var e=this,o=x(t.touches,2),i=o[0],a=o[1];i.x||(i.x=i.clientX,i.y=i.clientY,a&&(a.x=a.clientX,a.y=a.clientY)),n(e,null,!0),1===t.touches.length&&e.__oneTouchMove(i),t.touches.length>=2&&e.__twoTouchMove(i,a)},touchEnd:function(t){var e=this;n(e,!1,!1,!0),e.__xtouchEnd()}};function I(){var t=this,e=(t.deviceRadio,t.width),o=t.height,n=t.cut,i=n.x,a=void 0===i?0:i,c=n.y,r=void 0===c?0:c,u=n.width,l=void 0===u?e:u,s=n.height,f=void 0===s?o:s;t.outsideBound=function(e,o){t.imgLeft=e>=a?a:t.scaleWidth+e-a<=l?a+l-t.scaleWidth:e,t.imgTop=o>=r?r:t.scaleHeight+o-r<=f?r+f-t.scaleHeight:o},t.setBoundStyle=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.color,c=void 0===i?"#04b00f":i,u=n.mask,s=void 0===u?"rgba(0, 0, 0, 0.3)":u,d=n.lineWidth,h=void 0===d?1:d;t.ctx.beginPath(),t.ctx.setFillStyle(s),t.ctx.fillRect(0,0,a,o),t.ctx.fillRect(a,0,l,r),t.ctx.fillRect(a,r+f,l,o-r-f),t.ctx.fillRect(a+l,0,e-a-l,o),t.ctx.fill(),t.ctx.beginPath(),t.ctx.setStrokeStyle(c),t.ctx.setLineWidth(h),t.ctx.moveTo(a-h,r+10-h),t.ctx.lineTo(a-h,r-h),t.ctx.lineTo(a+10-h,r-h),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.setStrokeStyle(c),t.ctx.setLineWidth(h),t.ctx.moveTo(a-h,r+f-10+h),t.ctx.lineTo(a-h,r+f+h),t.ctx.lineTo(a+10-h,r+f+h),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.setStrokeStyle(c),t.ctx.setLineWidth(h),t.ctx.moveTo(a+l-10+h,r-h),t.ctx.lineTo(a+l+h,r-h),t.ctx.lineTo(a+l+h,r+10-h),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.setStrokeStyle(c),t.ctx.setLineWidth(h),t.ctx.moveTo(a+l+h,r+f-10+h),t.ctx.lineTo(a+l+h,r+f+h),t.ctx.lineTo(a+l-10+h,r+f+h),t.ctx.stroke()}}var L="1.1.4",_=function(){function t(e){v(this,t);var o=this,n={};return p(o,m),(0,a.default)(m).forEach(function(t){n[t]=m[t].default}),(0,i.default)(o,n,e),o.prepare(),o.attachPage(),o.createCtx(),o.observer(),o.cutt(),o.methods(),o.init(),o.update(),o}return b(t,[{key:"init",value:function(){var t=this,e=t.src;return t.version=L,"function"===typeof t.onReady&&t.onReady(t.ctx,t),e&&t.pushOrign(e),n(t,!1,!1,!1),t.oldScale=1,t.newScale=1,t}}]),t}();return(0,i.default)(_.prototype,C),_.prototype.prepare=y,_.prototype.observer=k,_.prototype.methods=T,_.prototype.cutt=I,_.prototype.update=S,_})},aefc:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".content[data-v-e6d2ff5a]{background:#fff}.head-list[data-v-e6d2ff5a]{height:43px;width:100%;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-bottom:1px solid #f4f4f4}.head-info[data-v-e6d2ff5a]{text-align:center;font-size:18px;color:#000;font-weight:700}.save-box[data-v-e6d2ff5a]{position:absolute;right:0;width:50px;height:43px;line-height:43px}.save[data-v-e6d2ff5a]{color:#626ffc;font-size:16px;font-weight:400}.icon-back[data-v-e6d2ff5a]{margin-top:11px;width:10px;height:18px;color:#000;margin-left:6px}.icon-back-box[data-v-e6d2ff5a]{display:block;position:absolute;left:6px;height:43px;width:30px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cropper[data-v-e6d2ff5a]{position:absolute;top:0;left:0;width:100%;height:100%}.cropper-buttons[data-v-e6d2ff5a]{background-color:rgba(0,0,0,.95);color:#04b00f}.cropper-wrapper[data-v-e6d2ff5a]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;background-color:#f0f0f0}.cropper-buttons[data-v-e6d2ff5a]{width:100vw;height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:fixed;bottom:0;left:0;line-height:50px}.cropper-buttons .getCropperImage[data-v-e6d2ff5a],.cropper-buttons .upload[data-v-e6d2ff5a]{width:50%;text-align:center}",""])},ff98:function(t,e,o){"use strict";var n=o("4cb8"),i=o.n(n);i.a}}]);