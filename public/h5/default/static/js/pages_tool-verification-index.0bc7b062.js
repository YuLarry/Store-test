(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-verification-index"],{"013c":function(t,e,a){"use strict";a("c975"),a("a9e3"),a("acd8"),a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},i={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var a=function a(i){i.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",a),t.$emit("scrolldone",n))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",a)}})}}}};e.default=i},"0de7":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.container[data-v-01da9698]{width:100vw;height:100vh}.container .action-wrap[data-v-01da9698]{padding:%?100?% 0;background:#fff;position:relative}.container .action-wrap .record-wrap[data-v-01da9698]{position:absolute;top:%?30?%;right:%?30?%}.container .action-wrap .record-wrap .iconfont[data-v-01da9698]{font-size:%?24?%;margin-right:%?10?%}.container .action-wrap .sweep-code[data-v-01da9698]{width:%?400?%;height:%?400?%;box-shadow:0 8px 8px 0 rgba(0,0,0,.03),0 6px 3px 0 rgba(0,0,0,.02);border-radius:50%;margin:0 auto;text-align:center;line-height:%?400?%;background:var(--base-color)}.container .action-wrap .sweep-code .iconfont[data-v-01da9698]{color:#fff;font-size:%?150?%}.container .action-wrap .manual-input[data-v-01da9698]{width:70%;margin:auto}.container .action-wrap .manual-input .process-wrap[data-v-01da9698]{height:%?140?%;display:flex;padding-top:%?60?%}.container .action-wrap .manual-input .process-wrap .wrap[data-v-01da9698]{flex:1;text-align:center}.container .action-wrap .manual-input .process-wrap .wrap ._icon[data-v-01da9698]{width:%?60?%;height:%?60?%;background:#eee;border-radius:50%;margin:0 auto;color:#909399}.container .action-wrap .manual-input .process-wrap .wrap ._icon .iconfont[data-v-01da9698]{font-size:%?32?%}.container .action-wrap .manual-input .process-wrap .wrap ._text[data-v-01da9698]{font-size:%?24?%;margin-top:%?10?%;color:#909399}.container .action-wrap .manual-input ._input[data-v-01da9698]{height:%?80?%;border:1px solid #eee;border-radius:%?8?%;box-sizing:border-box;padding:%?20?%;font-size:%?28?%;text-align:center}.container .action-wrap .manual-input ._placeholder[data-v-01da9698]{font-size:%?28?%;text-align:center}.container .action-wrap .manual-input ._btn[data-v-01da9698]{margin-top:%?40?%;height:%?80?%;line-height:%?80?%}.container .arc-edge[data-v-01da9698]{width:100%;height:%?80?%;background:#fff;border-radius:%?400?%/%?40?%;\r\n  /*上下有弧度的边*/-webkit-transform:translateY(-50%);transform:translateY(-50%)}.container .action-type-wrap[data-v-01da9698]{width:70%;height:%?90?%;background:#fff;border-radius:%?90?%;display:flex;position:relative;box-shadow:0 6px 6px 0 rgba(0,0,0,.03),0 4px 2px 0 rgba(0,0,0,.04);margin:%?100?% auto}.container .action-type-wrap .action[data-v-01da9698]{flex:1;text-align:center;color:#303133}.container .action-type-wrap .action ._icon[data-v-01da9698]{line-height:25px;height:25px}.container .action-type-wrap .action ._text[data-v-01da9698]{font-size:%?24?%;line-height:1}.container .action-type-wrap .icontiaoxingmasaomiao[data-v-01da9698]{width:%?110?%;height:%?110?%;border-radius:50%;-webkit-transform:translateY(%?-10?%);transform:translateY(%?-10?%);box-shadow:0 8px 8px 0 rgba(0,0,0,.03),0 6px 3px 0 rgba(0,0,0,.02);text-align:center;line-height:%?110?%;background:var(--base-color);color:#fff;font-size:%?32?%}',""]),t.exports=e},"133e":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("5e27"),i={data:function(){return{operationType:"manualInput",verify_code:"",isFocus:!1}},components:{},onLoad:function(){},onShow:function(){var t=this;uni.getStorageSync("token")?this.checkIsVerifier():setTimeout((function(){t.$refs.login.open("/pages_tool/verification/index")}))},methods:{focus:function(){this.isFocus=!this.isFocus},scanCode:function(){var t=this;if(this.$util.isWeiXin()){if("ios"==uni.getSystemInfoSync().platform)var e=uni.getStorageSync("initUrl");else e=location.href;this.$api.sendRequest({url:"/wechat/api/wechat/jssdkconfig",data:{url:e},success:function(e){if(0==e.code){var a=new n.Weixin;a.init(e.data),a.scanQRCode((function(t){t.resultStr&&(location.href=t.resultStr)}))}else t.$util.showToast({title:e.message})}})}},changeOperationType:function(t){"sweepCode"!=t||this.$util.isWeiXin()?this.operationType=t:this.$util.showToast({title:"H5端不支持扫码核销"})},checkIsVerifier:function(){var t=this;this.$api.sendRequest({url:"/api/verify/checkisverifier",success:function(e){e.data||(t.$util.showToast({title:"非核销员无此权限"}),setTimeout((function(){t.$util.redirectTo("/pages/member/index",{},"reLaunch")}),1e3)),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},confirm:function(){var t=this,e=/[\S]+/;if(!e.test(this.verify_code))return this.$util.showToast({title:"请输入核销码"}),!1;this.$api.sendRequest({url:"/api/verify/verifyInfo",data:{verify_code:this.verify_code},success:function(e){e.code>=0?t.$util.redirectTo("/pages_tool/verification/detail",{code:t.verify_code}):t.$util.showToast({title:e.message})}})}},watch:{storeToken:function(t,e){t&&this.checkIsVerifier()}},computed:{storeToken:function(){return this.$store.state.token}}};e.default=i},"363fc":function(t,e,a){"use strict";a.r(e);var n=a("133e"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},4020:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},o=[]},"6d42":function(t,e,a){"use strict";a.r(e);var n=a("4020"),i=a("8f28");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);var r,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=s.exports},"6ef5":function(t,e,a){"use strict";var n=a("92557"),i=a.n(n);i.a},8409:function(t,e,a){"use strict";a.r(e);var n=a("b70c"),i=a("363fc");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("6ef5");var r,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"01da9698",null,!1,n["a"],r);e["default"]=s.exports},"8f28":function(t,e,a){"use strict";a.r(e);var n=a("013c"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},92557:function(t,e,a){var n=a("0de7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("30857c26",n,!0,{sourceMap:!1,shadowMode:!1})},b70c:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={pageMeta:a("6d42").default,nsLogin:a("2893").default,loadingCover:a("790a").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("page-meta",{attrs:{"page-style":t.themeColor}}),a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"action-wrap"},[a("v-uni-view",{staticClass:"record-wrap color-base-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$util.redirectTo("/pages_tool/verification/list")}}},[a("v-uni-text",{staticClass:"iconfont iconjilu color-base-text"}),a("v-uni-text",[t._v("核销记录")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"sweepCode"==t.operationType,expression:"operationType == 'sweepCode'"}],staticClass:"sweep-code ns-gradient-otherpages-member-balance-balance-rechange",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scanCode.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont iconsaoma"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"manualInput"==t.operationType,expression:"operationType == 'manualInput'"}],staticClass:"manual-input"},[a("v-uni-view",{staticClass:"process-wrap"},[a("v-uni-view",{staticClass:"wrap"},[a("v-uni-view",{staticClass:"_icon"},[a("v-uni-text",{staticClass:"iconfont iconshurutianxiebi color-base-text"})],1),a("v-uni-view",{staticClass:"_text"},[t._v("输入核销码")])],1),a("v-uni-view",[a("v-uni-view",[a("v-uni-text",{staticClass:"iconfont iconjiang-copy color-tip"})],1)],1),a("v-uni-view",{staticClass:"wrap"},[a("v-uni-view",{staticClass:"_icon"},[a("v-uni-text",{staticClass:"iconfont iconhexiao color-base-text"})],1),a("v-uni-view",{staticClass:"_text"},[t._v("核销")])],1)],1),a("v-uni-input",{ref:"input",staticClass:"_input",attrs:{type:"text",placeholder:"请输入核销码","placeholder-class":"_placeholder",focus:t.isFocus},model:{value:t.verify_code,callback:function(e){t.verify_code=e},expression:"verify_code"}}),a("v-uni-view",{staticClass:"_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[a("v-uni-button",{attrs:{type:"primary"}},[t._v("确认")])],1)],1)],1),a("v-uni-view",{staticClass:"arc-edge"}),a("v-uni-view",{staticClass:"action-type-wrap"},[a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOperationType("sweepCode")}}},[a("v-uni-view",{staticClass:"_icon"},[a("v-uni-text",{staticClass:"iconfont iconsaoma"})],1),a("v-uni-view",{staticClass:"_text"},[t._v("扫码核销")])],1),a("v-uni-view",{staticClass:"iconfont icontiaoxingmasaomiao ns-gradient-otherpages-member-balance-balance-rechange"}),a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOperationType("manualInput")}}},[a("v-uni-view",{staticClass:"_icon"},[a("v-uni-text",{staticClass:"iconfont iconshuru"})],1),a("v-uni-view",{staticClass:"_text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.focus.apply(void 0,arguments)}}},[t._v("手动输入")])],1)],1),a("ns-login",{ref:"login"}),a("loading-cover",{ref:"loadingCover"})],1)],1)},o=[]}}]);