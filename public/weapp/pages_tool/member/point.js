(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_tool/member/point"],{1078:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={nsLogin:function(){return n.e("components/ns-login/ns-login").then(n.bind(null,"2893"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"790a"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$util.img("public/uniapp/point/point_bg.png"));t._isMounted||(t.e0=function(e){return t.$util.redirectTo("/pages_tool/member/point_detail")},t.e1=function(e){return t.$util.redirectTo("/pages_promotion/point/list")},t.e2=function(e){return t.$util.redirectTo("/pages/index/index")}),t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[]},"156c":function(t,e,n){"use strict";n.r(e);var o=n("1078"),i=n("b8fb");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("4643");var r,u=n("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},4643:function(t,e,n){"use strict";var o=n("5d33"),i=n.n(o);i.a},"5d33":function(t,e,n){},"5e1c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{pointInfo:{point:0,totalPoint:0,totalConsumePoint:0,todayPoint:0}}},onShow:function(){var e=this;t.getStorageSync("token")?(this.getMemberPoint(),this.getMemberTotalPoint(),this.getMemberTotalConsumePoint(),this.getMemberTodayPoint()):setTimeout((function(){e.$refs.login.open("/pages_tool/member/point")}))},methods:{toSign:function(){this.$util.redirectTo("/pages_tool/member/signin")},getMemberPoint:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(e){0==e.code&&(t.pointInfo.point=parseInt(e.data.point)),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},getMemberTotalPoint:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/sum",data:{account_type:"point",query_type:"income"},success:function(e){0==e.code&&(t.pointInfo.totalPoint=parseInt(e.data))}})},getMemberTotalConsumePoint:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/sum",data:{account_type:"point",query_type:"pay"},success:function(e){0==e.code&&(t.pointInfo.totalConsumePoint=Math.abs(parseInt(e.data)))}})},getMemberTodayPoint:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/sum",data:{account_type:"point",query_type:"income",start_time:new Date((new Date).toLocaleDateString()).getTime()/1e3,end_time:parseInt((new Date).getTime()/1e3)},success:function(e){0==e.code&&(t.pointInfo.todayPoint=Math.abs(parseInt(e.data)))}})},getMemberrechargeConfig:function(){var t=this;this.$api.sendRequest({url:"/memberrecharge/api/memberrecharge/config",success:function(e){e.code>=0&&e.data&&(t.memberrechargeConfig=e.data)}})}},onBackPress:function(t){return"navigateBack"!==t.from&&(this.$util.redirectTo("/pages/member/index",{},"reLaunch"),!0)},watch:{storeToken:function(t,e){t&&(this.getMemberPoint(),this.getMemberTotalPoint(),this.getMemberTotalConsumePoint(),this.getMemberTodayPoint())}},computed:{storeToken:function(){return this.$store.state.token}}};e.default=n}).call(this,n("543d")["default"])},b8fb:function(t,e,n){"use strict";n.r(e);var o=n("5e1c"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},c121:function(t,e,n){"use strict";(function(t){n("34b0");o(n("66fd"));var e=o(n("156c"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])}},[["c121","common/runtime","common/vendor"]]]);