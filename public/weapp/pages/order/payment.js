(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/payment"],{"415b":function(n,o,t){"use strict";t.d(o,"b",(function(){return i})),t.d(o,"c",(function(){return a})),t.d(o,"a",(function(){return e}));var e={commonPayment:function(){return Promise.all([t.e("common/vendor"),t.e("components/common-payment/common-payment")]).then(t.bind(null,"a1e2"))}},i=function(){var n=this,o=n.$createElement;n._self._c},a=[]},5529:function(n,o,t){"use strict";var e=t("76d4"),i=t.n(e);i.a},5820:function(n,o,t){"use strict";(function(n){t("34b0");e(t("66fd"));var o=e(t("bda2"));function e(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("543d")["createPage"])},"65db":function(n,o,t){"use strict";t.r(o);var e=t("7337"),i=t.n(e);for(var a in e)"default"!==a&&function(n){t.d(o,n,(function(){return e[n]}))}(a);o["default"]=i.a},7337:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={data:function(){return{api:{payment:"/api/ordercreate/payment",calculate:"/api/ordercreate/calculate",create:"/api/ordercreate/create"}}},provide:function(){return{promotion:this.promotion.bind(this)}},onShow:function(){this.$refs.payment&&this.$refs.payment.pageShow()},methods:{promotion:function(n){if(n.shop_goods_list.promotion&&n.shop_goods_list.promotion.manjian&&n.shop_goods_list.promotion.manjian.manjian_info.length){var o={title:"满减送",content:""},t=n.shop_goods_list.promotion.manjian.manjian_info,e={},i=0==t.type?"元":"件";return t.rule&&Object.keys(t.rule).forEach((function(n){var o=t.rule[n];if(o.manjianInfo)for(var a=0;a<o.coupon_data.length;a++)o.coupon_data[a].coupon_num=o.coupon_num[a];if(o.limit=0==t.type?parseFloat(o.limit).toFixed(2):parseInt(o.limit),void 0!=o.discount_money&&(void 0==e.manjian?e.manjian="购买可享受满"+o.limit+i+"减"+o.discount_money+"元":e.manjian+="；满"+o.limit+i+"减"+o.discount_money+"元"),o.coupon&&o.coupon_data){var r="";o.coupon_data.forEach((function(n,t){"discount"==n.type?""==r?r="送"+o.coupon_num[t]+"张"+parseFloat(n.discount)+"折优惠券":r+="、送"+o.coupon_num[t]+"张"+parseFloat(n.discount)+"折优惠券":""==r?r="送"+o.coupon_num[t]+"张"+parseFloat(n.money)+"元优惠券":r+="、送"+o.coupon_num[t]+"张"+parseFloat(n.money)+"元优惠券"})),void 0==e.mansong?e.mansong="购物满"+o.limit+i+r:e.mansong+="；满"+o.limit+i+r}if(o.point){var u="可得"+o.point+"积分";void 0==e.point_text?e.point_text="购物满"+o.limit+i+u:e.point_text+="；满"+o.limit+i+u}void 0!=o.free_shipping&&void 0==e.free_shipping&&(e.free_shipping="购物满"+o.limit+i+"包邮")})),o.content=Object.values(e).join("\n"),o}}}};o.default=e},"76d4":function(n,o,t){},bda2:function(n,o,t){"use strict";t.r(o);var e=t("415b"),i=t("65db");for(var a in i)"default"!==a&&function(n){t.d(o,n,(function(){return i[n]}))}(a);t("5529");var r,u=t("f0c5"),c=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"870e6b5c",null,!1,e["a"],r);o["default"]=c.exports}},[["5820","common/runtime","common/vendor"]]]);