(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-verification-index-index"],{2442:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.container[data-v-0e66d89a]{width:100vw;height:100vh}.container .action-wrap[data-v-0e66d89a]{padding:%?100?% 0;background:#fff;position:relative}.container .action-wrap .record-wrap[data-v-0e66d89a]{position:absolute;top:%?30?%;right:%?30?%}.container .action-wrap .record-wrap .iconfont[data-v-0e66d89a]{font-size:%?24?%;margin-right:%?10?%}.container .action-wrap .sweep-code[data-v-0e66d89a]{width:%?400?%;height:%?400?%;box-shadow:0 8px 8px 0 rgba(0,0,0,.03),0 6px 3px 0 rgba(0,0,0,.02);border-radius:50%;margin:0 auto;text-align:center;line-height:%?400?%}.container .action-wrap .sweep-code .iconfont[data-v-0e66d89a]{color:#fff;font-size:%?150?%}.container .action-wrap .manual-input[data-v-0e66d89a]{width:70%;margin:auto}.container .action-wrap .manual-input .process-wrap[data-v-0e66d89a]{height:%?150?%;display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?60?%}.container .action-wrap .manual-input .process-wrap .wrap[data-v-0e66d89a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.container .action-wrap .manual-input .process-wrap .wrap ._icon[data-v-0e66d89a]{width:%?60?%;height:%?60?%;background:#eee;border-radius:50%;margin:0 auto;color:#909399}.container .action-wrap .manual-input .process-wrap .wrap ._icon .iconfont[data-v-0e66d89a]{font-size:%?32?%}.container .action-wrap .manual-input .process-wrap .wrap ._text[data-v-0e66d89a]{font-size:%?24?%;margin-top:%?10?%;color:#909399}.container .action-wrap .manual-input ._input[data-v-0e66d89a]{height:%?80?%;border:1px solid #eee;border-radius:%?8?%;box-sizing:border-box;padding:%?20?%;font-size:%?28?%;text-align:center}.container .action-wrap .manual-input ._placeholder[data-v-0e66d89a]{font-size:%?28?%;text-align:center}.container .action-wrap .manual-input ._btn[data-v-0e66d89a]{margin-top:%?40?%;height:%?80?%;line-height:%?80?%}.container .arc-edge[data-v-0e66d89a]{width:100%;height:%?80?%;background:#fff;border-radius:%?400?%/%?40?%;\r\n  /*上下有弧度的边*/-webkit-transform:translateY(-50%);transform:translateY(-50%)}.container .action-type-wrap[data-v-0e66d89a]{width:70%;height:%?90?%;background:#fff;border-radius:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative;box-shadow:0 6px 6px 0 rgba(0,0,0,.03),0 4px 2px 0 rgba(0,0,0,.04);margin:%?100?% auto}.container .action-type-wrap .action[data-v-0e66d89a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;color:#303133}.container .action-type-wrap .action ._icon[data-v-0e66d89a]{line-height:25px;height:25px}.container .action-type-wrap .action ._text[data-v-0e66d89a]{font-size:%?24?%;line-height:1}.container .action-type-wrap .icontiaoxingmasaomiao[data-v-0e66d89a]{width:%?110?%;height:%?110?%;border-radius:50%;-webkit-transform:translateY(%?-10?%);transform:translateY(%?-10?%);box-shadow:0 8px 8px 0 rgba(0,0,0,.03),0 6px 3px 0 rgba(0,0,0,.02);color:#fff;text-align:center;line-height:%?110?%;font-size:%?32?%}',""]),t.exports=e},"268c":function(t,e,i){"use strict";var a=i("de40"),n=i.n(a);n.a},"8c63":function(t,e,i){"use strict";i.r(e);var a=i("b4e8"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9bad":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={nsLogin:i("2bc6").default,loadingCover:i("4c1d").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container",attrs:{"data-theme":t.themeStyle}},[i("v-uni-view",{staticClass:"action-wrap"},[i("v-uni-view",{staticClass:"record-wrap color-base-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$util.redirectTo("/otherpages/verification/list/list")}}},[i("v-uni-text",{staticClass:"iconfont iconjilu color-base-text"}),i("v-uni-text",[t._v("核销记录")])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"sweepCode"==t.operationType,expression:"operationType == 'sweepCode'"}],staticClass:"sweep-code ns-gradient-otherpages-member-balance-balance-rechange",attrs:{"data-theme":t.themeStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scanCode.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont iconsaoma"})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"manualInput"==t.operationType,expression:"operationType == 'manualInput'"}],staticClass:"manual-input"},[i("v-uni-view",{staticClass:"process-wrap"},[i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"_icon"},[i("v-uni-text",{staticClass:"iconfont iconshurutianxiebi color-base-text"})],1),i("v-uni-view",{staticClass:"_text"},[t._v("输入核销码")])],1),i("v-uni-view",[i("v-uni-view",[i("v-uni-text",{staticClass:"iconfont iconjiang-copy color-tip"})],1)],1),i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"_icon"},[i("v-uni-text",{staticClass:"iconfont iconhexiao color-base-text"})],1),i("v-uni-view",{staticClass:"_text"},[t._v("核销")])],1)],1),i("v-uni-input",{ref:"input",staticClass:"_input",attrs:{type:"text",placeholder:"请输入核销码","placeholder-class":"_placeholder",focus:t.isFocus},model:{value:t.verify_code,callback:function(e){t.verify_code=e},expression:"verify_code"}}),i("v-uni-view",{staticClass:"_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[i("v-uni-button",{attrs:{type:"primary"}},[t._v("确认")])],1)],1)],1),i("v-uni-view",{staticClass:"arc-edge"}),i("v-uni-view",{staticClass:"action-type-wrap"},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOperationType("sweepCode")}}},[i("v-uni-view",{staticClass:"_icon"},[i("v-uni-text",{staticClass:"iconfont iconsaoma"})],1),i("v-uni-view",{staticClass:"_text"},[t._v("扫码核销")])],1),i("v-uni-view",{staticClass:"iconfont icontiaoxingmasaomiao ns-gradient-otherpages-member-balance-balance-rechange",attrs:{"data-theme":t.themeStyle}}),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOperationType("manualInput")}}},[i("v-uni-view",{staticClass:"_icon"},[i("v-uni-text",{staticClass:"iconfont iconshuru"})],1),i("v-uni-view",{staticClass:"_text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.focus.apply(void 0,arguments)}}},[t._v("手动输入")])],1)],1),i("ns-login",{ref:"login"}),i("loading-cover",{ref:"loadingCover"})],1)},o=[]},b4e8:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("b6ac")),o=i("319c"),r={data:function(){return{operationType:"manualInput",verify_code:"",isFocus:!1}},components:{},onLoad:function(){},mixins:[n.default],onShow:function(){var t=this;this.$langConfig.refresh(),uni.getStorageSync("token")?this.checkIsVerifier():setTimeout((function(){t.$refs.login.open("/otherpages/verification/index/index")}))},methods:{focus:function(){this.isFocus=!this.isFocus},scanCode:function(){var t=this;if(this.$util.isWeiXin()){if("ios"==uni.getSystemInfoSync().platform)var e=uni.getStorageSync("initUrl");else e=location.href;this.$api.sendRequest({url:"/wechat/api/wechat/jssdkconfig",data:{url:e},success:function(e){if(0==e.code){var i=new o.Weixin;i.init(e.data),i.scanQRCode((function(t){t.resultStr&&(location.href=t.resultStr)}))}else t.$util.showToast({title:e.message})}})}},changeOperationType:function(t){"sweepCode"!=t||this.$util.isWeiXin()?this.operationType=t:this.$util.showToast({title:"H5端不支持扫码核销"})},checkIsVerifier:function(){var t=this;this.$api.sendRequest({url:"/api/verify/checkisverifier",success:function(e){e.data||(t.$util.showToast({title:"非核销员无此权限"}),setTimeout((function(){t.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}),1e3)),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},confirm:function(){var t=this,e=/[\S]+/;if(!e.test(this.verify_code))return this.$util.showToast({title:"请输入核销码"}),!1;this.$api.sendRequest({url:"/api/verify/verifyInfo",data:{verify_code:this.verify_code},success:function(e){e.code>=0?t.$util.redirectTo("/otherpages/verification/detail/detail",{code:t.verify_code}):t.$util.showToast({title:e.message})}})}},watch:{storeToken:function(t,e){t&&this.checkIsVerifier()}},computed:{storeToken:function(){return this.$store.state.token}}};e.default=r},d75e:function(t,e,i){"use strict";i.r(e);var a=i("9bad"),n=i("8c63");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("268c");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"0e66d89a",null,!1,a["a"],r);e["default"]=c.exports},de40:function(t,e,i){var a=i("2442");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("a51a4b84",a,!0,{sourceMap:!1,shadowMode:!1})}}]);