(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_tool/member/point"],{330:function(e,t,n){"use strict";(function(e){n(5);o(n(4));var t=o(n(331));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},331:function(e,t,n){"use strict";n.r(t);var o=n(332),i=n(334);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n(336);var a,c=n(14),u=Object(c["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],a);u.options.__file="pages_tool/member/point.vue",t["default"]=u.exports},332:function(e,t,n){"use strict";n.r(t);var o=n(333);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},333:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return o}));try{o={nsLogin:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-login/ns-login")]).then(n.bind(null,742))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,714))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$util.img("public/uniapp/point/point_bg.png"));e._isMounted||(e.e0=function(t){return e.$util.redirectTo("/pages_tool/member/point_detail")},e.e1=function(t){return e.$util.redirectTo("/pages_promotion/point/list")},e.e2=function(t){return e.$util.redirectTo("/pages/index/index")}),e.$mp.data=Object.assign({},{$root:{g0:n}})},r=!1,a=[];i._withStripped=!0},334:function(e,t,n){"use strict";n.r(t);var o=n(335),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},335:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{pointInfo:{point:0,totalPoint:0,totalConsumePoint:0,todayPoint:0}}},onShow:function(){var t=this;e.getStorageSync("token")?(this.getMemberPoint(),this.getMemberTotalPoint(),this.getMemberTotalConsumePoint(),this.getMemberTodayPoint()):setTimeout((function(){t.$refs.login.open("/pages_tool/member/point")}))},methods:{toSign:function(){this.$util.redirectTo("/pages_tool/member/signin")},getMemberPoint:function(){var e=this;this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(t){0==t.code&&(e.pointInfo.point=parseInt(t.data.point)),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getMemberTotalPoint:function(){var e=this;this.$api.sendRequest({url:"/api/memberaccount/sum",data:{account_type:"point",query_type:"income"},success:function(t){0==t.code&&(e.pointInfo.totalPoint=parseInt(t.data))}})},getMemberTotalConsumePoint:function(){var e=this;this.$api.sendRequest({url:"/api/memberaccount/sum",data:{account_type:"point",query_type:"pay"},success:function(t){0==t.code&&(e.pointInfo.totalConsumePoint=Math.abs(parseInt(t.data)))}})},getMemberTodayPoint:function(){var e=this;this.$api.sendRequest({url:"/api/memberaccount/sum",data:{account_type:"point",query_type:"income",start_time:new Date((new Date).toLocaleDateString()).getTime()/1e3,end_time:parseInt((new Date).getTime()/1e3)},success:function(t){0==t.code&&(e.pointInfo.todayPoint=Math.abs(parseInt(t.data)))}})},getMemberrechargeConfig:function(){var e=this;this.$api.sendRequest({url:"/memberrecharge/api/memberrecharge/config",success:function(t){t.code>=0&&t.data&&(e.memberrechargeConfig=t.data)}})}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/pages/member/index",{},"reLaunch"),!0)},watch:{storeToken:function(e,t){e&&(this.getMemberPoint(),this.getMemberTotalPoint(),this.getMemberTotalConsumePoint(),this.getMemberTodayPoint())}},computed:{storeToken:function(){return this.$store.state.token}}};t.default=n}).call(this,n(1)["default"])},336:function(e,t,n){"use strict";n.r(t);var o=n(337),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},337:function(e,t,n){}},[[330,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_tool/member/point.js.map