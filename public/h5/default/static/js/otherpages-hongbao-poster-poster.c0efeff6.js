(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-hongbao-poster-poster"],{"42f6":function(t,e,i){"use strict";var o=i("65b9"),a=i.n(o);a.a},"5c62":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,"[data-v-4c21d495] .top{height:calc(100vh)}[data-v-4c21d495] .top uni-image{width:100%!important;height:100%!important}[data-v-4c21d495] .top uni-image div{background-size:100% 100%!important}",""]),t.exports=e},"65b9":function(t,e,i){var o=i("feac");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("744c97da",o,!0,{sourceMap:!1,shadowMode:!1})},"7cbf":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-swiper",{staticClass:"swiper"},[i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"poster-wrap"},[i("v-uni-image",{attrs:{src:t.$util.img(t.poster),mode:"widthFix","show-menu-by-longpress":!0}})],1)],1)],1)],1)],1)},r=[]},"7def":function(t,e,i){"use strict";i.r(e);var o=i("bf1d"),a=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},9123:function(t,e,i){var o=i("5c62");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("6280adce",o,!0,{sourceMap:!1,shadowMode:!1})},bf1d:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{poster:"",posterMsg:"",posterHeight:0,hongBaoId:"",groupId:0,inviterId:"",memberInfo:{}}},onLoad:function(t){this.hongBaoId=t.hongbao_id,this.groupId=t.group_id,this.inviterId=t.inviter_id,this.getGoodsPoster(),this.getMemberInfo()},methods:{headerimageError:function(){this.memberInfo.headimg=this.$util.getDefaultImage().default_headimg,this.$forceUpdate()},getGoodsPoster:function(){var t=this;this.$api.sendRequest({url:"/hongbao/api/hongbao/poster",data:{hongbao_id:this.hongBaoId,group_id:""==this.groupId?0:this.groupId,inviter_id:""==this.inviterId?0:this.inviterId},success:function(e){0==e.code?t.poster=e.data.path:t.posterMsg=e.message}})},getMemberInfo:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(e){e.code>=0&&(t.memberInfo=e.data)}})}}};e.default=o},cbbf:function(t,e,i){"use strict";var o=i("9123"),a=i.n(o);a.a},ebea:function(t,e,i){"use strict";i.r(e);var o=i("7cbf"),a=i("7def");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("42f6"),i("cbbf");var n,d=i("f0c5"),s=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"4c21d495",null,!1,o["a"],n);e["default"]=s.exports},feac:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.poster-layer-wrap[data-v-4c21d495]{position:relative;background-color:#303133}.poster-layer-wrap .bottom[data-v-4c21d495]{width:100%;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;position:relative;left:0;bottom:0;line-height:1}.poster-layer-wrap .bottom .user-head[data-v-4c21d495]{width:%?114?%;height:%?114?%;border-radius:50%;position:absolute;bottom:%?310?%;left:%?84?%}.poster-layer-wrap .bottom .name[data-v-4c21d495]{font-size:%?30?%;color:#ff6f0f;font-weight:700;position:absolute;bottom:%?250?%;left:%?40?%;width:140px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.poster-layer-wrap .bottom .qr-code[data-v-4c21d495]{width:%?196?%;height:%?198?%;position:absolute;bottom:%?80?%;right:%?50?%}.container[data-v-4c21d495]{width:100vw;min-height:100vh;background-color:#f5f5f5}.poster-wrap[data-v-4c21d495]{padding:%?40?% 0;width:calc(100vw - %?80?%);margin:0 %?40?%;line-height:1}.poster-wrap uni-image[data-v-4c21d495]{border-radius:%?20?%;overflow:hidden;width:100%}.swiper[data-v-4c21d495]{height:100vh}.btn[data-v-4c21d495]{margin:0 %?80?%;margin-top:%?30?%;height:%?80?%;line-height:%?80?%;border-radius:%?80?%;color:#fff;text-align:center}.tips[data-v-4c21d495]{text-align:center;font-size:%?28?%;color:#999;font-weight:600;margin-top:%?20?%}.dialog-popup[data-v-4c21d495]{width:%?580?%;background:#fff;box-sizing:border-box;border-radius:%?10?%;overflow:hidden;height:auto}.dialog-popup .title[data-v-4c21d495]{padding:%?30?% %?30?% 0 %?30?%;text-align:center;font-size:%?32?%;font-weight:700}.dialog-popup .message[data-v-4c21d495]{padding:0 %?30?%;color:#666;text-align:center;font-size:%?28?%;line-height:1.3;margin-top:%?30?%}.dialog-popup .action-wrap[data-v-4c21d495]{margin-top:%?50?%;height:%?80?%;display:flex;border-top:1px solid #eee}.dialog-popup .action-wrap > uni-view[data-v-4c21d495]{flex:1;text-align:center;line-height:%?80?%}.dialog-popup .action-wrap > uni-view[data-v-4c21d495]:first-child{border-right:1px solid #eee;color:#999}.dialog-popup .action-wrap > uni-view uni-button[data-v-4c21d495]{border:none;line-height:%?80?%;padding:0;margin:0;width:100%;height:100%}',""]),t.exports=e}}]);