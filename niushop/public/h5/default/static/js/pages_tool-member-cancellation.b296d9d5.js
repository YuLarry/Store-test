(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-member-cancellation"],{"013c":function(t,e,n){"use strict";n("c975"),n("a9e3"),n("acd8"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},a={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var n=function n(a){a.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",n),t.$emit("scrolldone",o))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",n)}})}}}};e.default=a},"2cae":function(t,e,n){"use strict";var o=n("6de6"),a=n.n(o);a.a},"67df":function(t,e,n){"use strict";n.r(e);var o=n("6f98"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"6d42":function(t,e,n){"use strict";n.r(e);var o=n("dfd6"),a=n("8f28");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var r,c=n("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=l.exports},"6de6":function(t,e,n){var o=n("f4789");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("4d4d5744",o,!0,{sourceMap:!1,shadowMode:!1})},"6f98":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{agreement:{},isSelect:!1}},onLoad:function(t){t.back&&(this.back=t.back),uni.getStorageSync("token")?this.getCancelAgreement():this.$util.redirectTo("/pages_tool/login/login")},methods:{getCancelAgreement:function(){var t=this;this.$api.sendRequest({url:"/membercancel/api/membercancel/agreement",success:function(e){e.code>=0&&(t.agreement=e.data)}})},changeSelect:function(){this.isSelect=1!=this.isSelect},next:function(){this.isSelect?this.$util.redirectTo("/pages_tool/member/assets"):this.$util.showToast({title:"请先勾选同意协议"})}}};e.default=o},"8f28":function(t,e,n){"use strict";n.r(e);var o=n("013c"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"91b6":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={pageMeta:n("6d42").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-meta",{attrs:{"page-style":t.themeColor}}),n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"agreement-box"},[n("v-uni-view",{staticClass:"agreement-intro"},[n("v-uni-view",{staticClass:"align-center agreement-title"},[t._v(t._s(t.agreement.title))]),n("v-uni-rich-text",{staticClass:"agreement-content",attrs:{nodes:t.agreement.content}})],1),n("v-uni-view",{staticClass:"agreement-btn"},[n("v-uni-view",{staticClass:"align-center agreement-btn-select"},[t.isSelect?n("v-uni-text",{staticClass:"iconfont icondui color-base-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSelect.apply(void 0,arguments)}}}):n("v-uni-text",{staticClass:"iconfont iconyuan_checkbox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSelect.apply(void 0,arguments)}}}),n("v-uni-text",{staticClass:"agreement-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSelect.apply(void 0,arguments)}}},[t._v("勾选即表示您已阅读并同意本协议")])],1),n("v-uni-button",{staticClass:"btn color-base-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next.apply(void 0,arguments)}}},[t._v("下一步")])],1)],1)],1)],1)},i=[]},"9efa":function(t,e,n){"use strict";n.r(e);var o=n("91b6"),a=n("67df");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("2cae");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"6cf39c40",null,!1,o["a"],r);e["default"]=l.exports},dfd6:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},i=[]},f4789:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.agreement-box .align-center[data-v-6cf39c40]{text-align:center}.agreement-box .agreement-intro[data-v-6cf39c40]{height:calc(100vh - %?210?%);padding-top:%?40?%;padding-left:%?40?%;padding-right:%?40?%;box-sizing:border-box;overflow-y:auto}.agreement-box .agreement-intro .agreement-title[data-v-6cf39c40]{font-size:%?32?%;line-height:%?60?%;margin-bottom:%?10?%}.agreement-box .agreement-intro .agreement-content[data-v-6cf39c40]{font-size:%?24?%;line-height:%?44?%}.agreement-box .agreement-btn[data-v-6cf39c40]{position:fixed;width:100%;height:%?210?%;bottom:0;padding-top:%?16?%;box-sizing:border-box;text-align:center}.agreement-box .agreement-btn .agreement-btn-select[data-v-6cf39c40]{display:flex;justify-content:center;align-items:center}.agreement-box .agreement-btn .agreement-btn-select .iconfont[data-v-6cf39c40]{color:#838383}.agreement-box .agreement-btn .agreement-text[data-v-6cf39c40]{font-size:%?28?%;color:#838383;margin-left:%?10?%}.agreement-box .agreement-btn uni-button[data-v-6cf39c40]{display:inline-block;margin-top:%?20?%;color:var(--btn-text-color);font-size:%?28?%;width:%?300?%;height:%?80?%;line-height:%?80?%}',""]),t.exports=e}}]);