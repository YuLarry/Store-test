(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/fenxiao/apply/apply","components/uni-popup/uni-popup"],{"10ee":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},data:function(){return{ani:"",showPopup:!1,callback:null,isIphoneX:!1}},watch:{show:function(e){e?this.open():this.close()}},created:function(){this.isIphoneX=this.$util.uniappIsIPhoneX()},methods:{clear:function(){},open:function(e){var n=this;e&&(this.callback=e),this.$emit("change",{show:!0}),this.showPopup=!0,this.$nextTick((function(){setTimeout((function(){n.ani="uni-"+n.type}),30)}))},close:function(e,n){var t=this;!this.maskClick&&e||(this.$emit("change",{show:!1}),this.ani="",this.$nextTick((function(){setTimeout((function(){t.showPopup=!1}),300)})),n&&n(),this.callback&&this.callback.call(this))}}};n.default=i},1540:function(e,n,t){},2418:function(e,n,t){"use strict";var i=t("4a89"),o=t.n(i);o.a},4253:function(e,n,t){},"4a89":function(e,n,t){},"67b7":function(e,n,t){"use strict";var i,o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},"7f47":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(t("4795")),o=u(t("18e3")),a=(u(t("d380")),u(t("f688"))),s=u(t("4c22"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,n,t,i,o,a,s){try{var u=e[a](s),c=u.value}catch(r){return void t(r)}u.done?n(c):Promise.resolve(c).then(i,o)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(i,o){var a=e.apply(n,t);function s(e){c(a,i,o,s,u,"next",e)}function u(e){c(a,i,o,s,u,"throw",e)}s(void 0)}))}}var f=function(){Promise.all([t.e("common/vendor"),t.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(t("f505"))}.bind(null,t)).catch(t.oe)},l={data:function(){return{isChecked:!1,isShow:!0,isIphoneX:!1,sourceMemberInfo:{fenxiao_name:"无"},formData:{fenXiaoName:"",mobile:""},fenXiaoAgreement:{agreement:{},document:{}},isAgreement:!1,back:"",isAbled:!1,status:"",isSub:!1,fenxiaoConfig:{fenxiao_condition:0},basicsConfig:{}}},components:{nsShowToast:f},mixins:[a.default,s.default],onLoad:function(e){this.getAgreement(),e.back&&(this.back=e.back)},onShow:function(){var n=this;return r(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.isIphoneX=n.$util.uniappIsIPhoneX(),n.$langConfig.refresh(),e.setNavigationBarTitle({title:n.fenxiaoWords.fenxiao_name+"申请"}),e.getStorageSync("token")?(n.applyStatus(),n.getSourceMemberInfo()):n.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/fenxiao/apply/apply"},"redirectTo"),n.getFenxiaoConfig(),n.getFenxiaoBasicsConfig();case 6:case"end":return t.stop()}}),t)})))()},methods:{toClose:function(){this.$refs.applyPopup.close()},ckeckedRuler:function(){this.isChecked=!this.isChecked},applyStatus:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/apply/status",data:{},success:function(n){n.code>=0&&n.data&&(e.status=n.data.status,e.isSub=!1,2==e.status&&e.$util.redirectTo("/otherpages/fenxiao/index/index")),e.$refs.loadingCover.hide()}})},navigateBack:function(){this.$util.goBack()},applyFenXiao:function(){var e=this;this.fenXiaoValidata()&&(!this.isAgreement||this.isChecked?this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/fenxiao/api/apply/applyfenxiao",data:{fenxiao_name:this.formData.fenXiaoName,mobile:this.formData.mobile},success:function(n){n.code>=0&&n.data?1==e.basicsConfig.is_examine?e.applyStatus():e.$util.redirectTo("/otherpages/fenxiao/index/index"):(e.isSub=!1,e.$util.showToast({title:n.message}))}})):this.$util.showToast({title:"请仔细阅读协议，并勾选"}))},getAgreement:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/agreement",success:function(n){0===n.code&&(e.fenXiaoAgreement=n.data,"1"===e.fenXiaoAgreement.agreement.is_agreement&&(e.isAgreement=!0))}})},openPopup:function(){this.isAgreement&&this.$refs.applyPopup.open()},closePopup:function(){this.$refs.applyPopup.close()},fenXiaoValidata:function(){var e=[];e=[{name:"fenXiaoName",checkType:"required",errorMsg:"请输入"+this.fenxiaoWords.fenxiao_name+"名称"},{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}];var n=o.default.check(this.formData,e);return!!n||(this.$util.showToast({title:o.default.error}),!1)},getSourceMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/sourceinfo",success:function(n){0==n.code&&n.data&&(e.sourceMemberInfo=n.data)}})},againApply:function(){this.status=""},getFenxiaoConfig:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/fenxiao",data:{},success:function(n){n.code>=0&&n.data&&(e.fenxiaoConfig=n.data)}})},getFenxiaoBasicsConfig:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/basics",data:{},success:function(n){n.code>=0&&n.data&&(e.basicsConfig=n.data)}})}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),!0)}};n.default=l}).call(this,t("543d")["default"])},"89f1":function(e,n,t){"use strict";var i=t("1540"),o=t.n(i);o.a},9275:function(e,n,t){"use strict";t.r(n);var i=t("7f47"),o=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=o.a},"989a":function(e,n,t){"use strict";var i=t("4253"),o=t.n(i);o.a},a8c6:function(e,n,t){"use strict";t.r(n);var i=t("10ee"),o=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=o.a},c008:function(e,n,t){"use strict";t.r(n);var i=t("de4c"),o=t("9275");for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("2418"),t("89f1");var s,u=t("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=c.exports},d380:function(e,n,t){"use strict";t.r(n);var i=t("67b7"),o=t("a8c6");for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("989a");var s,u=t("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=c.exports},da3b:function(e,n,t){"use strict";(function(e){t("6b76");i(t("66fd"));var n=i(t("c008"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},de4c:function(e,n,t){"use strict";var i={uniPopup:function(){return Promise.resolve().then(t.bind(null,"d380"))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,"cd2f"))},nsShowToast:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-show-toast/ns-show-toast")]).then(t.bind(null,"f505"))}},o=function(){var e=this,n=e.$createElement,t=(e._self._c,e.$util.img(e.fenXiaoAgreement.agreement.img)),i=e.$util.img("upload/uniapp/fenxiao/apply/edit.png"),o=e.$util.img("upload/uniapp/fenxiao/index/no-fenxiao.png");e.$mp.data=Object.assign({},{$root:{g0:t,g1:i,g2:o}})},a=[];t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))}},[["da3b","common/runtime","common/vendor"]]]);