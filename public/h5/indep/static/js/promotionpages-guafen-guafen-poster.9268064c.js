(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-guafen-guafen-poster"],{"010f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{poster:"",posterMsg:"",posterHeight:0,couponId:"",groupId:0,inviterId:"",memberInfo:{}}},onLoad:function(t){this.couponId=t.coupon_id,this.groupId=t.group_id,this.inviterId=t.inviter_id,this.getGoodsPoster(),this.getMemberInfo()},methods:{headerimageError:function(){this.memberInfo.headimg=this.$util.getDefaultImage().default_headimg,this.$forceUpdate()},getGoodsPoster:function(){var t=this;this.$api.sendRequest({url:"/divideticket/api/divideticket/poster",data:{coupon_id:this.couponId,group_id:""==this.groupId?0:this.groupId,inviter_id:""==this.inviterId?0:this.inviterId},success:function(e){0==e.code?t.poster=e.data.path:t.posterMsg=e.message}})},getMemberInfo:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(e){e.code>=0&&(t.memberInfo=e.data)}})}}};e.default=a},"27af":function(t,e,i){"use strict";i.r(e);var a=i("2d23"),o=i("5f67");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("630e"),i("6606");var n,d=i("f0c5"),s=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"06c74d9a",null,!1,a["a"],n);e["default"]=s.exports},"2d23":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-swiper",{staticClass:"swiper"},[i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"poster-wrap"},[i("v-uni-image",{attrs:{src:t.$util.img(t.poster),mode:"widthFix","show-menu-by-longpress":!0}})],1)],1)],1)],1)],1)},r=[]},"46bd":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.poster-layer-wrap[data-v-06c74d9a]{position:relative;background-color:#303133}.poster-layer-wrap .bottom[data-v-06c74d9a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;left:0;bottom:0;line-height:1}.poster-layer-wrap .bottom .user-head[data-v-06c74d9a]{width:%?114?%;height:%?114?%;border-radius:50%;position:absolute;bottom:%?310?%;left:%?84?%}.poster-layer-wrap .bottom .name[data-v-06c74d9a]{font-size:%?30?%;color:#ff6f0f;font-weight:700;position:absolute;bottom:%?250?%;left:%?40?%;width:140px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.poster-layer-wrap .bottom .qr-code[data-v-06c74d9a]{width:%?196?%;height:%?198?%;position:absolute;bottom:%?80?%;right:%?50?%}.container[data-v-06c74d9a]{width:100vw;min-height:100vh;background-color:#f5f5f5}.poster-wrap[data-v-06c74d9a]{padding:%?40?% 0;width:calc(100vw - %?80?%);margin:0 %?40?%;line-height:1}.poster-wrap uni-image[data-v-06c74d9a]{border-radius:%?20?%;overflow:hidden;width:100%}.swiper[data-v-06c74d9a]{height:100vh}.btn[data-v-06c74d9a]{margin:0 %?80?%;margin-top:%?30?%;height:%?80?%;line-height:%?80?%;border-radius:%?80?%;color:#fff;text-align:center}.tips[data-v-06c74d9a]{text-align:center;font-size:%?28?%;color:#999;font-weight:600;margin-top:%?20?%}.dialog-popup[data-v-06c74d9a]{width:%?580?%;background:#fff;box-sizing:border-box;border-radius:%?10?%;overflow:hidden;height:auto}.dialog-popup .title[data-v-06c74d9a]{padding:%?30?% %?30?% 0 %?30?%;text-align:center;font-size:%?32?%;font-weight:700}.dialog-popup .message[data-v-06c74d9a]{padding:0 %?30?%;color:#666;text-align:center;font-size:%?28?%;line-height:1.3;margin-top:%?30?%}.dialog-popup .action-wrap[data-v-06c74d9a]{margin-top:%?50?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;border-top:1px solid #eee}.dialog-popup .action-wrap > uni-view[data-v-06c74d9a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;line-height:%?80?%}.dialog-popup .action-wrap > uni-view[data-v-06c74d9a]:first-child{border-right:1px solid #eee;color:#999}.dialog-popup .action-wrap > uni-view uni-button[data-v-06c74d9a]{border:none;line-height:%?80?%;padding:0;margin:0;width:100%;height:100%}',""]),t.exports=e},"5f67":function(t,e,i){"use strict";i.r(e);var a=i("010f"),o=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"607c":function(t,e,i){var a=i("86af");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("a9085314",a,!0,{sourceMap:!1,shadowMode:!1})},"630e":function(t,e,i){"use strict";var a=i("c856"),o=i.n(a);o.a},6606:function(t,e,i){"use strict";var a=i("607c"),o=i.n(a);o.a},"86af":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"[data-v-06c74d9a] .top{height:calc(100vh)}[data-v-06c74d9a] .top uni-image{width:100%!important;height:100%!important}[data-v-06c74d9a] .top uni-image div{background-size:100% 100%!important}",""]),t.exports=e},c856:function(t,e,i){var a=i("46bd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("401d6bc6",a,!0,{sourceMap:!1,shadowMode:!1})}}]);