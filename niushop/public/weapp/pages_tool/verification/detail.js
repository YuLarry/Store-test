(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_tool/verification/detail"],{576:function(e,n,t){"use strict";(function(e){t(5);i(t(4));var n=i(t(577));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},577:function(e,n,t){"use strict";t.r(n);var i=t(578),r=t(580);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t(582);var c,a=t(14),s=Object(a["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],c);s.options.__file="pages_tool/verification/detail.vue",n["default"]=s.exports},578:function(e,n,t){"use strict";t.r(n);var i=t(579);t.d(n,"render",(function(){return i["render"]})),t.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),t.d(n,"components",(function(){return i["components"]}))},579:function(e,n,t){"use strict";var i;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return i}));try{i={loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,714))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement,t=(e._self._c,e.$lang("common.currencySymbol")),i=e.__map(e.verifyInfo.item_array,(function(n,t){var i=e.__get_orig(n),r=e.$util.img(n.img),o=e._f("abs")(n.price),c=e._f("abs")(n.all);return{$orig:i,g0:r,f0:o,f1:c}})),r=e.verifyInfo.is_verify&&e.verifyInfo.verify_time?e.$util.timeStampTurnTime(e.verifyInfo.verify_time):null;e.$mp.data=Object.assign({},{$root:{m0:t,l0:i,g1:r}})},o=!1,c=[];r._withStripped=!0},580:function(e,n,t){"use strict";t.r(n);var i=t(581),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=r.a},581:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{code:"",verifyInfo:{verify_content:{item_array:[],remark_array:[]}},info:[],isSub:!1}},onLoad:function(e){var n=this;if(e.code&&(this.code=e.code),e.scene){var t=decodeURIComponent(e.scene);t=t.split("&"),t.length&&t.forEach((function(e){-1!=e.indexOf("code")&&(n.code=e.split("-")[1])}))}},onShow:function(){e.getStorageSync("token")?this.checkIsVerifier():this.$util.redirectTo("/pages/member/index",{},"reLaunch"),this.getVerifyInfo()},methods:{checkIsVerifier:function(){var e=this;this.$api.sendRequest({url:"/api/verify/checkisverifier",success:function(n){n.data||(e.$util.showToast({title:"非核销员无此权限"}),setTimeout((function(){e.$util.redirectTo("/pages/member/index",{},"reLaunch")}),1e3))}})},getVerifyInfo:function(){var e=this;this.$api.sendRequest({url:"/api/verify/verifyInfo",data:{verify_code:this.code},success:function(n){n.code>=0?(e.verifyInfo=n.data,e.info=e.verifyInfo.remark_array.splice(0,1),e.verifyInfo.item_array.forEach((function(e){e.all=e.num*e.price})),e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.$util.showToast({title:n.message}),setTimeout((function(){e.$util.redirectTo("/pages/member/index",{},"reLaunch")}),1e3))},fail:function(n){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},verify:function(){var e=this;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/api/verify/verify",data:{verify_code:this.code},success:function(n){e.$util.showToast({title:n.message}),n.code>=0?setTimeout((function(){e.$util.redirectTo("/pages/member/index",{},"reLaunch")}),1e3):e.isSub=!1}}))},imageError:function(e){this.verifyInfo.item_array[e].img=this.$util.getDefaultImage().goods,this.$forceUpdate()},copy:function(e){this.$util.copy(e)}},filters:{abs:function(e){return Math.abs(parseFloat(e)).toFixed(2)}}};n.default=t}).call(this,t(1)["default"])},582:function(e,n,t){"use strict";t.r(n);var i=t(583),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=r.a},583:function(e,n,t){}},[[576,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_tool/verification/detail.js.map