(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-hongbao-poster"],{"013c":function(t,e,o){"use strict";o("c975"),o("a9e3"),o("acd8"),o("ac1f"),o("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},a={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var o=function o(a){a.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",o),t.$emit("scrolldone",i))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",o)}})}}}};e.default=a},"20ba":function(t,e,o){var i=o("d097");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("4f06").default;a("26c36b60",i,!0,{sourceMap:!1,shadowMode:!1})},"2b04":function(t,e,o){"use strict";var i=o("20ba"),a=o.n(i);a.a},4020:function(t,e,o){"use strict";var i;o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},n=[]},"6d42":function(t,e,o){"use strict";o.r(e);var i=o("4020"),a=o("8f28");for(var n in a)"default"!==n&&function(t){o.d(e,t,(function(){return a[t]}))}(n);var r,s=o("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=u.exports},"7ded":function(t,e,o){"use strict";o.r(e);var i=o("ac41"),a=o("f135");for(var n in a)"default"!==n&&function(t){o.d(e,t,(function(){return a[t]}))}(n);o("2b04"),o("9741");var r,s=o("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"47722018",null,!1,i["a"],r);e["default"]=u.exports},"8f28":function(t,e,o){"use strict";o.r(e);var i=o("013c"),a=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=a.a},"95e3":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,"[data-v-47722018] .top{height:calc(100vh)}[data-v-47722018] .top uni-image{width:100%!important;height:100%!important}[data-v-47722018] .top uni-image div{background-size:100% 100%!important}",""]),t.exports=e},9741:function(t,e,o){"use strict";var i=o("dbe9"),a=o.n(i);a.a},a016:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{poster:"",posterMsg:"",posterHeight:0,hongBaoId:"",groupId:0,inviterId:"",memberInfo:{}}},onLoad:function(t){this.hongBaoId=t.hongbao_id,this.groupId=t.group_id,this.inviterId=t.inviter_id,this.getGoodsPoster(),this.getMemberInfo()},methods:{headerimageError:function(){this.memberInfo.headimg=this.$util.getDefaultImage().head,this.$forceUpdate()},getGoodsPoster:function(){var t=this;this.$api.sendRequest({url:"/hongbao/api/hongbao/poster",data:{hongbao_id:this.hongBaoId,group_id:""==this.groupId?0:this.groupId,inviter_id:""==this.inviterId?0:this.inviterId},success:function(e){0==e.code?t.poster=e.data.path:t.posterMsg=e.message}})},getMemberInfo:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(e){e.code>=0&&(t.memberInfo=e.data)}})}}};e.default=i},ac41:function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}));var i={pageMeta:o("6d42").default},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("page-meta",{attrs:{"page-style":t.themeColor}}),o("v-uni-view",{staticClass:"container"},[o("v-uni-swiper",{staticClass:"swiper"},[o("v-uni-swiper-item",[o("v-uni-view",{staticClass:"swiper-item"},[o("v-uni-view",{staticClass:"poster-wrap"},[o("v-uni-image",{attrs:{src:t.$util.img(t.poster),mode:"widthFix","show-menu-by-longpress":!0}})],1)],1)],1)],1)],1)],1)},n=[]},d097:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.poster-layer-wrap[data-v-47722018]{position:relative;background-color:#303133}.poster-layer-wrap .bottom[data-v-47722018]{width:100%;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;position:relative;left:0;bottom:0;line-height:1}.poster-layer-wrap .bottom .user-head[data-v-47722018]{width:%?114?%;height:%?114?%;border-radius:50%;position:absolute;bottom:%?310?%;left:%?84?%}.poster-layer-wrap .bottom .name[data-v-47722018]{font-size:%?30?%;color:#ff6f0f;font-weight:700;position:absolute;bottom:%?250?%;left:%?40?%;width:%?280?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.poster-layer-wrap .bottom .qr-code[data-v-47722018]{width:%?196?%;height:%?198?%;position:absolute;bottom:%?80?%;right:%?50?%}.container[data-v-47722018]{width:100vw;min-height:100vh;background-color:#f5f5f5}.poster-wrap[data-v-47722018]{padding:%?40?% 0;width:calc(100vw - %?80?%);margin:0 %?40?%;line-height:1}.poster-wrap uni-image[data-v-47722018]{border-radius:%?20?%;overflow:hidden;width:100%}.swiper[data-v-47722018]{height:100vh}.btn[data-v-47722018]{margin:0 %?80?%;margin-top:%?30?%;height:%?80?%;line-height:%?80?%;border-radius:%?10?%;color:#fff;text-align:center}.tips[data-v-47722018]{text-align:center;font-size:%?28?%;color:#999;font-weight:600;margin-top:%?20?%}.dialog-popup[data-v-47722018]{width:%?580?%;background:#fff;box-sizing:border-box;border-radius:%?10?%;overflow:hidden;height:auto}.dialog-popup .title[data-v-47722018]{padding:%?30?% %?30?% 0 %?30?%;text-align:center;font-size:%?32?%;font-weight:700}.dialog-popup .message[data-v-47722018]{padding:0 %?30?%;color:#666;text-align:center;font-size:%?28?%;line-height:1.3;margin-top:%?30?%}.dialog-popup .action-wrap[data-v-47722018]{margin-top:%?50?%;height:%?80?%;display:flex;border-top:%?2?% solid #eee}.dialog-popup .action-wrap > uni-view[data-v-47722018]{flex:1;text-align:center;line-height:%?80?%}.dialog-popup .action-wrap > uni-view[data-v-47722018]:first-child{border-right:%?2?% solid #eee;color:#999}.dialog-popup .action-wrap > uni-view uni-button[data-v-47722018]{border:none;line-height:%?80?%;padding:0;margin:0;width:100%;height:100%}',""]),t.exports=e},dbe9:function(t,e,o){var i=o("95e3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("4f06").default;a("385b8d7e",i,!0,{sourceMap:!1,shadowMode:!1})},f135:function(t,e,o){"use strict";o.r(e);var i=o("a016"),a=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=a.a}}]);