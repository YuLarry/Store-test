(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_promotion/groupbuy/payment"],{"1c91":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var o={commonPayment:function(){return Promise.all([e.e("common/vendor"),e.e("components/common-payment/common-payment")]).then(e.bind(null,"a1e2"))}},r=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"45ab":function(t,n,e){"use strict";var o=e("a866"),r=e.n(o);r.a},"8fdc":function(t,n,e){"use strict";(function(t){e("34b0");o(e("66fd"));var n=o(e("9796"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},9796:function(t,n,e){"use strict";e.r(n);var o=e("1c91"),r=e("a9e5");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("45ab");var a,c=e("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"cb44728a",null,!1,o["a"],a);n["default"]=i.exports},a866:function(t,n,e){},a9e5:function(t,n,e){"use strict";e.r(n);var o=e("ac8d"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=r.a},ac8d:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{api:{payment:"/groupbuy/api/ordercreate/payment",calculate:"/groupbuy/api/ordercreate/calculate",create:"/groupbuy/api/ordercreate/create"}}},provide:function(){return{promotion:this.promotion.bind(this)}},onShow:function(){this.$refs.payment&&this.$refs.payment.pageShow()},methods:{promotion:function(t){if(t.groupbuy_info)return{title:"团购",content:"团购".concat(t.groupbuy_info.buy_num,'件起,享团购价<text class="color-base-text">').concat(t.groupbuy_info.groupbuy_price,"</text>元")}}}};n.default=o}},[["8fdc","common/runtime","common/vendor"]]]);