(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-member-cancelsuccess"],{"013c":function(t,e,n){"use strict";n("c975"),n("a9e3"),n("acd8"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},o={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var n=function n(o){o.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",n),t.$emit("scrolldone",a))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",n)}})}}}};e.default=o},"071f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},data:function(){return{state:""}},onLoad:function(t){t.back&&(this.back=t.back),uni.getStorageSync("token")?this.getStatus():this.$util.redirectTo("/pages_tool/login/login")},methods:{getStatus:function(){var t=this;this.$api.sendRequest({success:function(e){e.code>=0&&(t.state=e.data.state,1==e.data.state&&(uni.setStorageSync("token",""),t.$util.redirectTo("/pages/index/index",{},"reLaunch")))}})}}};e.default=a},3953:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.cancel-wrap[data-v-9b862662]{padding-top:%?84?%;text-align:center}.cancel-wrap .cancel-img[data-v-9b862662]{width:%?100?%;height:%?100?%;display:inline-block}.cancel-wrap .cancel-img uni-image[data-v-9b862662]{width:100%;height:100%}.cancel-wrap .cancel-title[data-v-9b862662]{text-align:center;font-size:%?24?%;line-height:%?24?%;margin-top:%?30?%}.cancel-wrap .cancel-reason[data-v-9b862662]{color:#838383;font-size:%?20?%;line-height:%?40?%;margin-top:%?20?%;padding:0 %?175?%}.cancel-wrap .cancel-btn[data-v-9b862662]{width:100%;margin-top:%?173?%}.cancel-wrap .cancel-btn uni-button[data-v-9b862662]{display:inline-block;width:%?300?%;height:%?80?%;font-size:%?28?%;line-height:%?80?%;margin:0 %?15?%;color:#fff}',""]),t.exports=e},"6d42":function(t,e,n){"use strict";n.r(e);var a=n("dfd6"),o=n("8f28");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var r,c=n("f0c5"),l=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=l.exports},"6e84":function(t,e,n){var a=n("3953");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("1079b00f",a,!0,{sourceMap:!1,shadowMode:!1})},"726a":function(t,e,n){"use strict";var a=n("6e84"),o=n.n(a);o.a},"797e":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={pageMeta:n("6d42").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-meta",{attrs:{"page-style":t.themeColor}}),n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"cancel-wrap"},[n("v-uni-view",{staticClass:"cancel-img"},[n("v-uni-image",{attrs:{src:t.$util.img("public/uniapp/member/success.png")}})],1),n("v-uni-view",{staticClass:"cancel-title"},[t._v("您已成功注销账号")]),n("v-uni-view",{staticClass:"cancel-reason"},[t._v("待下次与您更好的相遇，如需再次使用，请重新注册")]),n("v-uni-view",{staticClass:"cancel-btn"},[n("v-uni-button",{staticClass:"color-base-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.success.apply(void 0,arguments)}}},[t._v("完成")])],1)],1)],1)],1)},i=[]},"8f28":function(t,e,n){"use strict";n.r(e);var a=n("013c"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"9d64e":function(t,e,n){"use strict";n.r(e);var a=n("797e"),o=n("d530");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("726a");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"9b862662",null,!1,a["a"],r);e["default"]=l.exports},d530:function(t,e,n){"use strict";n.r(e);var a=n("071f"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},dfd6:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},i=[]}}]);